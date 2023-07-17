package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/CoverageInputSet.WCOtherStatesInsurance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_WCOtherStatesInsuranceExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/CoverageInputSet.WCOtherStatesInsurance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 39, column 90
    function available_39 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'value' attribute on RangeInput (id=OtherStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 48, column 81
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      otherStatesInsurance.WCOtherStatesOptTerm.Value = (__VALUE_TO_SET as typekey.OtherStates)
    }
    
    // 'value' attribute on TextInput (id=WCIncludedStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 60, column 68
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      otherStatesInsurance.WCIncludedStatesTerm.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=WCExcludedStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 70, column 68
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      otherStatesInsurance.WCExcludedStatesTerm.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.WCOtherStatesInsurance.pcf: line 23, column 38
    function initialValue_0 () : entity.WorkersCompLine {
      return coverable as entity.WorkersCompLine
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.WCOtherStatesInsurance.pcf: line 28, column 51
    function initialValue_1 () : productmodel.WCOtherStatesInsurance {
      return wcLine.WCOtherStatesInsurance
    }
    
    // 'label' attribute on TextInput (id=WCIncludedStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 60, column 68
    function label_19 () : java.lang.Object {
      return otherStatesInsurance.WCIncludedStatesTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on TextInput (id=WCExcludedStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 70, column 68
    function label_29 () : java.lang.Object {
      return otherStatesInsurance.WCExcludedStatesTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 39, column 90
    function label_40 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=OtherStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 48, column 81
    function label_7 () : java.lang.Object {
      return otherStatesInsurance.WCOtherStatesOptTerm.Pattern.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at CoverageInputSet.WCOtherStatesInsurance.pcf: line 50, column 77
    function onChange_5 () : void {
      wcLine.setDefaultExcludedStates(otherStatesInsurance)
    }
    
    // 'required' attribute on TextInput (id=WCIncludedStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 60, column 68
    function required_20 () : java.lang.Boolean {
      return otherStatesInsurance.WCIncludedStatesTerm.Pattern.Required
    }
    
    // 'required' attribute on TextInput (id=WCExcludedStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 70, column 68
    function required_30 () : java.lang.Boolean {
      return otherStatesInsurance.WCExcludedStatesTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=OtherStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 48, column 81
    function required_8 () : java.lang.Boolean {
      return otherStatesInsurance.WCOtherStatesOptTerm.Pattern.Required
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 39, column 90
    function setter_41 (VALUE :  java.lang.Boolean) : void {
      coverable.setCoverageConditionOrExclusionExists(coveragePattern, VALUE)
    }
    
    // 'validationExpression' attribute on TextInput (id=WCIncludedStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 60, column 68
    function validationExpression_18 () : java.lang.Object {
      return wcLine.validateIncludedStates(otherStatesInsurance.WCIncludedStatesTerm.Value)
    }
    
    // 'validationExpression' attribute on TextInput (id=WCExcludedStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 70, column 68
    function validationExpression_28 () : java.lang.Object {
      return wcLine.validateExcludedStatesContainMonopolisticStates(otherStatesInsurance.WCExcludedStatesTerm.Value)
    }
    
    // 'valueRange' attribute on RangeInput (id=OtherStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 48, column 81
    function valueRange_12 () : java.lang.Object {
      return otherStatesInsurance.WCOtherStatesOptTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'value' attribute on RangeInput (id=OtherStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 48, column 81
    function valueRoot_11 () : java.lang.Object {
      return otherStatesInsurance.WCOtherStatesOptTerm
    }
    
    // 'value' attribute on TextInput (id=WCIncludedStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 60, column 68
    function valueRoot_23 () : java.lang.Object {
      return otherStatesInsurance.WCIncludedStatesTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 32, column 37
    function valueRoot_3 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on TextInput (id=WCExcludedStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 70, column 68
    function valueRoot_33 () : java.lang.Object {
      return otherStatesInsurance.WCExcludedStatesTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 32, column 37
    function value_2 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on TextInput (id=WCIncludedStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 60, column 68
    function value_21 () : java.lang.String {
      return otherStatesInsurance.WCIncludedStatesTerm.Value
    }
    
    // 'value' attribute on TextInput (id=WCExcludedStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 70, column 68
    function value_31 () : java.lang.String {
      return otherStatesInsurance.WCExcludedStatesTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=OtherStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 48, column 81
    function value_9 () : typekey.OtherStates {
      return otherStatesInsurance.WCOtherStatesOptTerm.Value
    }
    
    // 'valueRange' attribute on RangeInput (id=OtherStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 48, column 81
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OtherStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 48, column 81
    function verifyValueRangeIsAllowedType_13 ($$arg :  typekey.OtherStates[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OtherStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 48, column 81
    function verifyValueRange_14 () : void {
      var __valueRangeArg = otherStatesInsurance.WCOtherStatesOptTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSet at CoverageInputSet.WCOtherStatesInsurance.pcf: line 53, column 150
    function visible_27 () : java.lang.Boolean {
      return otherStatesInsurance.hasCovTerm("WCIncludedStates") and otherStatesInsurance.WCOtherStatesOptTerm.Value == TC_LISTEDONLY
    }
    
    // 'visible' attribute on InputSet at CoverageInputSet.WCOtherStatesInsurance.pcf: line 63, column 149
    function visible_37 () : java.lang.Boolean {
      return otherStatesInsurance.hasCovTerm("WCExcludedStates") and otherStatesInsurance.WCOtherStatesOptTerm.Value == TC_ALLEXCEPT
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 39, column 90
    function visible_38 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on RangeInput (id=OtherStatesTermInput_Input) at CoverageInputSet.WCOtherStatesInsurance.pcf: line 48, column 81
    function visible_6 () : java.lang.Boolean {
      return otherStatesInsurance.hasCovTerm("WCOtherStatesOpt")
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
    
    property get otherStatesInsurance () : productmodel.WCOtherStatesInsurance {
      return getVariableValue("otherStatesInsurance", 0) as productmodel.WCOtherStatesInsurance
    }
    
    property set otherStatesInsurance ($arg :  productmodel.WCOtherStatesInsurance) {
      setVariableValue("otherStatesInsurance", 0, $arg)
    }
    
    property get wcLine () : entity.WorkersCompLine {
      return getVariableValue("wcLine", 0) as entity.WorkersCompLine
    }
    
    property set wcLine ($arg :  entity.WorkersCompLine) {
      setVariableValue("wcLine", 0, $arg)
    }
    
    
  }
  
  
}