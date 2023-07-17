package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.productmodel.CovTermOpt
@javax.annotation.Generated("config/web/pcf/line/bop/policy/CoverageInputSet.BOPBuildingCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_BOPBuildingCovExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/CoverageInputSet.BOPBuildingCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.BOPBuildingCov.pcf: line 41, column 89
    function available_47 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'def' attribute on InputSetRef (id=BOPBldgCovLimit) at CoverageInputSet.BOPBuildingCov.pcf: line 45, column 79
    function def_onEnter_6 (def :  pcf.CovTermDirectInputSet) : void {
      def.onEnter(building.BOPBuildingCov.BOPBldgLimTerm, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=BOPBldgCovLimit) at CoverageInputSet.BOPBuildingCov.pcf: line 45, column 79
    function def_refreshVariables_7 (def :  pcf.CovTermDirectInputSet) : void {
      def.refreshVariables(building.BOPBuildingCov.BOPBldgLimTerm, jobWizardHelper)
    }
    
    // 'value' attribute on RangeInput (id=BOPBldgCovValuationMethod_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 54, column 84
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.BOPBuildingCov.BOPBldgValuationTerm.Value = (__VALUE_TO_SET as typekey.ValuationMethod)
    }
    
    // 'value' attribute on RangeInput (id=BOPBldgCovCoinsurance_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 66, column 172
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      coinsuranceTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionBOPBuildingCoinType>)
    }
    
    // 'value' attribute on RangeInput (id=BOPBldgAnnualIncreaseTerm_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 76, column 172
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      getAnnualIncreaseValue(building.BOPBuildingCov.BOPBldgValuationTerm.Value).OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionBOPBldgAnnualIncreaseType>)
    }
    
    // 'editable' attribute on RangeInput (id=BOPBldgCovCoinsurance_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 66, column 172
    function editable_20 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(coinsuranceTerm)
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.BOPBuildingCov.pcf: line 25, column 34
    function initialValue_0 () : entity.BOPBuilding {
      return coverable as BOPBuilding
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.BOPBuildingCov.pcf: line 30, column 54
    function initialValue_1 () : productmodel.OptionBOPBuildingCoinType {
      return getCoinsuranceValue(building.BOPBuildingCov.BOPBldgValuationTerm.Value)
    }
    
    // 'label' attribute on RangeInput (id=BOPBldgCovCoinsurance_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 66, column 172
    function label_22 () : java.lang.Object {
      return building.BOPBuildingCov.BOPBuildingCoinTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=BOPBldgAnnualIncreaseTerm_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 76, column 172
    function label_35 () : java.lang.Object {
      return building.BOPBuildingCov.BOPBldgAnnualIncreaseTerm.DisplayName
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.BOPBuildingCov.pcf: line 41, column 89
    function label_48 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=BOPBldgCovValuationMethod_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 54, column 84
    function label_9 () : java.lang.Object {
      return building.BOPBuildingCov.BOPBldgValuationTerm.DisplayName
    }
    
    // 'required' attribute on RangeInput (id=BOPBldgCovValuationMethod_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 54, column 84
    function required_10 () : java.lang.Boolean {
      return building.BOPBuildingCov.BOPBldgValuationTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=BOPBldgCovCoinsurance_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 66, column 172
    function required_23 () : java.lang.Boolean {
      return building.BOPBuildingCov.BOPBuildingCoinTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=BOPBldgAnnualIncreaseTerm_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 76, column 172
    function required_36 () : java.lang.Boolean {
      return building.BOPBuildingCov.BOPBldgAnnualIncreaseTerm.Pattern.Required
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.BOPBuildingCov.pcf: line 41, column 89
    function setter_49 (VALUE :  java.lang.Boolean) : void {
      building.setCoverageConditionOrExclusionExists(coveragePattern, VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBldgCovValuationMethod_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 54, column 84
    function valueRange_14 () : java.lang.Object {
      return building.BOPBuildingCov.BOPBldgValuationTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBldgCovCoinsurance_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 66, column 172
    function valueRange_27 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(coinsuranceTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBldgAnnualIncreaseTerm_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 76, column 172
    function valueRange_40 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(getAnnualIncreaseValue(building.BOPBuildingCov.BOPBldgValuationTerm.Value), openForEdit)
    }
    
    // 'value' attribute on RangeInput (id=BOPBldgCovValuationMethod_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 54, column 84
    function valueRoot_13 () : java.lang.Object {
      return building.BOPBuildingCov.BOPBldgValuationTerm
    }
    
    // 'value' attribute on RangeInput (id=BOPBldgCovCoinsurance_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 66, column 172
    function valueRoot_26 () : java.lang.Object {
      return coinsuranceTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 34, column 37
    function valueRoot_3 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on RangeInput (id=BOPBldgAnnualIncreaseTerm_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 76, column 172
    function valueRoot_39 () : java.lang.Object {
      return getAnnualIncreaseValue(building.BOPBuildingCov.BOPBldgValuationTerm.Value)
    }
    
    // 'value' attribute on RangeInput (id=BOPBldgCovValuationMethod_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 54, column 84
    function value_11 () : typekey.ValuationMethod {
      return building.BOPBuildingCov.BOPBldgValuationTerm.Value
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 34, column 37
    function value_2 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on RangeInput (id=BOPBldgCovCoinsurance_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 66, column 172
    function value_24 () : gw.api.productmodel.CovTermOpt<productmodel.OptionBOPBuildingCoinType> {
      return coinsuranceTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=BOPBldgAnnualIncreaseTerm_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 76, column 172
    function value_37 () : gw.api.productmodel.CovTermOpt<productmodel.OptionBOPBldgAnnualIncreaseType> {
      return getAnnualIncreaseValue(building.BOPBuildingCov.BOPBldgValuationTerm.Value).OptionValue
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBldgCovValuationMethod_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 54, column 84
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBldgCovValuationMethod_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 54, column 84
    function verifyValueRangeIsAllowedType_15 ($$arg :  typekey.ValuationMethod[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBldgCovCoinsurance_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 66, column 172
    function verifyValueRangeIsAllowedType_28 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionBOPBuildingCoinType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBldgCovCoinsurance_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 66, column 172
    function verifyValueRangeIsAllowedType_28 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBldgAnnualIncreaseTerm_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 76, column 172
    function verifyValueRangeIsAllowedType_41 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionBOPBldgAnnualIncreaseType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBldgAnnualIncreaseTerm_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 76, column 172
    function verifyValueRangeIsAllowedType_41 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBldgCovValuationMethod_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 54, column 84
    function verifyValueRange_16 () : void {
      var __valueRangeArg = building.BOPBuildingCov.BOPBldgValuationTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBldgCovCoinsurance_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 66, column 172
    function verifyValueRange_29 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(coinsuranceTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_28(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPBldgAnnualIncreaseTerm_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 76, column 172
    function verifyValueRange_42 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(getAnnualIncreaseValue(building.BOPBuildingCov.BOPBldgValuationTerm.Value), openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_41(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=BOPBldgCovCoinsurance_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 66, column 172
    function visible_21 () : java.lang.Boolean {
      return building.BOPBuildingCov.hasCovTerm("BOPBldgValuation") and building.BOPBuildingCov.BOPBldgValuationTerm.Value != ValuationMethod.TC_FUNCVALUE
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.BOPBuildingCov.pcf: line 41, column 89
    function visible_46 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on InputSetRef (id=BOPBldgCovLimit) at CoverageInputSet.BOPBuildingCov.pcf: line 45, column 79
    function visible_5 () : java.lang.Boolean {
      return building.BOPBuildingCov.hasCovTerm("BOPBldgLim")
    }
    
    // 'visible' attribute on RangeInput (id=BOPBldgCovValuationMethod_Input) at CoverageInputSet.BOPBuildingCov.pcf: line 54, column 84
    function visible_8 () : java.lang.Boolean {
      return building.BOPBuildingCov.hasCovTerm("BOPBldgValuation")
    }
    
    property get building () : entity.BOPBuilding {
      return getVariableValue("building", 0) as entity.BOPBuilding
    }
    
    property set building ($arg :  entity.BOPBuilding) {
      setVariableValue("building", 0, $arg)
    }
    
    property get coinsuranceTerm () : productmodel.OptionBOPBuildingCoinType {
      return getVariableValue("coinsuranceTerm", 0) as productmodel.OptionBOPBuildingCoinType
    }
    
    property set coinsuranceTerm ($arg :  productmodel.OptionBOPBuildingCoinType) {
      setVariableValue("coinsuranceTerm", 0, $arg)
    }
    
    property get coverable () : Coverable {
      return getRequireValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get coveragePattern () : gw.api.productmodel.ClausePattern {
      return getRequireValue("coveragePattern", 0) as gw.api.productmodel.ClausePattern
    }
    
    property set coveragePattern ($arg :  gw.api.productmodel.ClausePattern) {
      setRequireValue("coveragePattern", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
    function getCoinsuranceValue(valMethodValue : gw.entity.TypeKey) : OptionBOPBuildingCoinType {
      if (valMethodValue == ValuationMethod.TC_FUNCVALUE) { 
        var optionValue = building.BOPBuildingCov.BOPBuildingCoinTerm.Pattern.getCovTermOpt("0")
        building.BOPBuildingCov.BOPBuildingCoinTerm.setOptionValue(optionValue)
      }
      return building.BOPBuildingCov.BOPBuildingCoinTerm
    }
    
    function getAnnualIncreaseValue(valMethodValue : gw.entity.TypeKey) : OptionBOPBldgAnnualIncreaseType {
      if (valMethodValue == ValuationMethod.TC_FUNCVALUE) { 
        var opt = building.BOPBuildingCov.BOPBldgAnnualIncreaseTerm.Pattern.getCovTermOpt("4")
        building.BOPBuildingCov.BOPBldgAnnualIncreaseTerm.setOptionValue(opt)
      }
      return building.BOPBuildingCov.BOPBldgAnnualIncreaseTerm
    }
    
    
  }
  
  
}