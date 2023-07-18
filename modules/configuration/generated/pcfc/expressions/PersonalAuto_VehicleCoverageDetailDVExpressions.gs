package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PersonalAuto_VehicleCoverageDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PersonalAuto_VehicleCoverageDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PersonalAuto_VehicleCoverageDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PersonalAuto_VehicleCoverageDetailDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_10 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_12 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_14 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_16 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_18 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_2 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_20 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_22 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_24 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_26 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_28 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_30 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_4 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_6 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_onEnter_8 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_11 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_13 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_15 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_17 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_19 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_21 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_23 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_25 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_27 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_29 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_3 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_31 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_5 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_7 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function def_refreshVariables_9 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables(coveragePattern, vehicle, openForEdit, null)
    }
    
    // 'mode' attribute on InputSetRef at PersonalAuto_VehicleCoverageDetailDV.pcf: line 30, column 44
    function mode_32 () : java.lang.Object {
      return coveragePattern.PublicID
    }
    
    property get coveragePattern () : gw.api.productmodel.CoveragePattern {
      return getIteratedValue(1) as gw.api.productmodel.CoveragePattern
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PersonalAuto_VehicleCoverageDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PersonalAuto_VehicleCoverageDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PersonalAuto_VehicleCoverageDetailDV.pcf: line 17, column 53
    function initialValue_0 () : gw.api.productmodel.CoveragePattern[] {
      return vehicle != null ? vehicle.PolicyLine.Pattern.getCoverageCategoryByPublicId("PAPPhysDamGrp").coveragePatternsForEntity(PersonalVehicle).whereSelectedOrAvailable(vehicle, openForEdit) : null
    }
    
    // 'sortBy' attribute on IteratorSort at PersonalAuto_VehicleCoverageDetailDV.pcf: line 27, column 26
    function sortBy_1 (coveragePattern :  gw.api.productmodel.CoveragePattern) : java.lang.Object {
      return coveragePattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=PAPhysDamCategoryIterator) at PersonalAuto_VehicleCoverageDetailDV.pcf: line 24, column 59
    function value_33 () : gw.api.productmodel.CoveragePattern[] {
      return physDamGrpCoveragePatterns
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get physDamGrpCoveragePatterns () : gw.api.productmodel.CoveragePattern[] {
      return getVariableValue("physDamGrpCoveragePatterns", 0) as gw.api.productmodel.CoveragePattern[]
    }
    
    property set physDamGrpCoveragePatterns ($arg :  gw.api.productmodel.CoveragePattern[]) {
      setVariableValue("physDamGrpCoveragePatterns", 0, $arg)
    }
    
    property get vehicle () : PersonalVehicle {
      return getRequireValue("vehicle", 0) as PersonalVehicle
    }
    
    property set vehicle ($arg :  PersonalVehicle) {
      setRequireValue("vehicle", 0, $arg)
    }
    
    
  }
  
  
}