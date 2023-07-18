package gw.plugin.rateflow

uses gw.api.upgrade.Coercions
uses gw.entity.IEntityPropertyInfo
uses gw.lang.reflect.IPropertyInfo
uses gw.lang.reflect.IType
uses gw.pc.rating.flow.AvailableCoverageWrapper
uses gw.pc.rating.flow.util.InScopeUsageBase
uses gw.plugin.InitializablePlugin
uses gw.policy.PolicyLineConfiguration
uses gw.rating.CostData
uses gw.rating.RateFlowLogger
uses gw.rating.flow.domain.CalcRoutineCostData
uses gw.rating.flow.util.ItemFilter

uses java.math.RoundingMode

@Export
class RateRoutinePlugin implements IRateRoutinePlugin, InitializablePlugin {
  // Parameter name for enabling/disabling worksheets on a global level.
  public static final var WORKSHEETS_ENABLED : String = "WorksheetsEnabled"

  function getLOBClassForCode(patternCode : String): IRateRoutineConfig {
   return PolicyLineConfiguration.getByCode(patternCode).RateRoutineConfig
  }

  /**
   * This plugin takes the config parameter "WorksheetsEnabled".  If set, this value
   * overrides the value of the property on the plugin.
   */
  override property set Parameters(params : Map<Object, Object>) {
    _useWorksheets = Coercions.makePBooleanFrom(params.get(WORKSHEETS_ENABLED) ?: _useWorksheets)
  }

  // A global setting which overrides the LOB-specific configurations.   If WorksheetsEnabled
  // is false, no worksheets will be generated by the system.  If it is true, the behavior
  // is determined on a LOB-specific basis by consulting the config class for the LOB.
  var _useWorksheets : boolean as WorksheetsEnabled = true

  override function getCostDataWrapperType(paramSet : CalcRoutineParameterSet) : IType {
    // if the parameter set should not include cost, there's no cost data and hence no type for it
    if(not paramSet.IncludesCost) {
      return null
    }
    // attempt to return a LOB specific wrapper type if line is defined
    if (paramSet.PolicyLinePatternCode != null) {
      var lobClass = getLOBClassForCode(paramSet.PolicyLinePatternCode)
      if (lobClass != null) {
        return lobClass.getCostDataWrapperType(paramSet)
      }
      RateFlowLogger.Logger.warn("Could not find RateRoutineConfig for line " + paramSet.PolicyLinePatternCode + "; using default CalcRoutineCostData class.")
    }
    return CalcRoutineCostData
  }

  override function makeCostDataWrapper(
          paramSet : CalcRoutineParameterSet,
          costData : CostDataBase,
          defaultRoundingLevel : Integer,
          defaultRoundingMode : RoundingMode) : ICostDataWrapper {
    if(not paramSet.IncludesCost) {
      RateFlowLogger.Logger.warn("Requesting CostData instance for a non-cost ParamSet '${paramSet.Name}' by calling makeCostDataWrapper().")
      return null
    }
    // attempt to return a LOB specific wrapper if line is defined
    if (paramSet.PolicyLinePatternCode != null) {
      var lobClass = getLOBClassForCode(paramSet.PolicyLinePatternCode)
      if (lobClass != null) {
        return lobClass.makeCostDataWrapper(paramSet, costData, defaultRoundingLevel, defaultRoundingMode)
      }
      RateFlowLogger.Logger.warn("Could not find RateRoutineConfig for line " + paramSet.PolicyLinePatternCode + "; using default CalcRoutineCostData class.")
    }
    return new CalcRoutineCostData(costData as CostData, defaultRoundingLevel, defaultRoundingMode)
  }


  override function worksheetsEnabledForLine(linePatternCode : String) : boolean {
    if (linePatternCode == null) {
      return _useWorksheets
    }
    var lobClass = getLOBClassForCode(linePatternCode)

    if (lobClass == null) {
      RateFlowLogger.Logger.warn("Could not find RateRoutineConfig for line " +linePatternCode+ "; worksheets will not be enabled.")
    }

    return _useWorksheets and (lobClass != null and lobClass.worksheetsEnabledForLine(linePatternCode))
  }

  override property get BranchingFields() : IEntityPropertyInfo[] {
    var fields : ArrayList<String> = {"Jurisdiction"}
    var properties = fields.map(\ field -> CalcRoutineDefinition.Type.TypeInfo.getProperty(field) as IEntityPropertyInfo)
    if (properties.hasMatch(\ p -> p == null)) {
      var illegalFields = fields.where(\ f -> CalcRoutineDefinition.Type.TypeInfo.getProperty(f) == null)
      throw new IllegalStateException("The following fields are not valid fields on CalcRoutineDefinition. ${illegalFields.join(", ")}")
    }
    return properties.toTypedArray()
  }

  /**
   * Filtering function to control whether a type should be considered primitive (atomic)
   * or whether its fields should be exposed.
   * @param t The type under consideration
   * @return true if the supplied type should be considered a "primitive," false otherwise.
   */
  override function treatTypeAsPrimitive(t : IType) : boolean {
    return gw.api.util.TypeUtil.isNominallyOrStructurallyAssignable(java.lang.Number.Type, t) or gw.api.util.TypeUtil.isNominallyOrStructurallyAssignable(java.util.Date.Type, t) or t.Namespace == "java.lang"
  }

  /**
   * Filtering function to control whether to include a property.  Unlike filterIrrelevantItems(),
   * this operates during the traversal of the policy graph, and controls whether a reference from one class
   * to another will be traversed.
   *
   * For example, PolicyLocation has a foreign key to an AccountLocation.  By default,
   * PolicyLocation.AccountLocation is not traversed.   To change this behavior, you might
   * add the condition
   * <code>
   *   if (gw.api.util.TypeUtil.isNominallyOrStructurallyAssignable(prop.OwnersType, entity.PolicyLocation) and prop.Name == "AccountLocation") {
   *     return true
   *   }
   * </code>
   *
   * Note that this function can return one of THREE values: true (if you want this property to
   * be included); false (if you want this property to be excluded); or null (for properties which
   * should retain their default behavior).  It is recommended that this function end with a catch-all "return null"
   * so that any property which is not explicitly handled gets default behavior.
   *
   * @param prop The property descriptor for the reference
   * @return true to include owner.prop; false to exclude it; null to use default behavior
   */
  override function includeProperty(policyLinePatternCode : String, prop : IPropertyInfo) : Boolean {
    var lobClass = getLOBClassForCode(policyLinePatternCode)
    if (lobClass != null) {
      return lobClass.includeProperty(policyLinePatternCode, prop)
    }
    return null
  }

  /**
   * This is a postfilter, which RatingEntityGraphTraversal applies to its result set
   * after it has done its introspective traversal on the types. It takes a list of InScopeUsage
   * objects and returns a filtered version of the list.
   *
   * The usages in the input list will all have been derived from the same "root" parameter type.
   *
   * @param input a list of InScopeUsageBase instances
   * @return the filtered list of items
   */
  override function filterIrrelevantItems(input : List<InScopeUsageBase>, policyLinePatternCode : String) : List<InScopeUsageBase> {
    var lobClass = getLOBClassForCode(policyLinePatternCode)
    if (lobClass != null) {
      return lobClass.filterIrrelevantItems(input, policyLinePatternCode)
    }

    return ItemFilter.applyDefaultFilters(input)
  }

  override function getCoverageWrappersForLine(policyLinePatternCode: String): AvailableCoverageWrapper[] {
    var lobClass = getLOBClassForCode(policyLinePatternCode)
    if (lobClass != null) {
      return lobClass.getCoverageWrappersForLine(policyLinePatternCode)
    }
    return {}
  }

}
