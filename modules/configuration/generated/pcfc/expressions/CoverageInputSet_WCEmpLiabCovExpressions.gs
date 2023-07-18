package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/CoverageInputSet.WCEmpLiabCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_WCEmpLiabCovExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/CoverageInputSet.WCEmpLiabCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.WCEmpLiabCov.pcf: line 39, column 90
    function available_42 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'value' attribute on RangeInput (id=EmpLiabPack_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 49, column 70
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      empLiabCov.WCEmpLiabLimitTerm.PackageValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermPack<productmodel.PackageWCEmpLiabLimitType>)
    }
    
    // 'value' attribute on RangeInput (id=StopGapTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 58, column 67
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      empLiabCov.WCStopGapOptTerm.Value = (__VALUE_TO_SET as typekey.StopGap)
    }
    
    // 'value' attribute on TextInput (id=WCIncludedMonopolisticStatesTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 69, column 70
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      empLiabCov.WCIncludedMonopolisticStatesTerm.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=EmpLiabPack_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 49, column 70
    function editable_5 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(empLiabCov.WCEmpLiabLimitTerm)
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.WCEmpLiabCov.pcf: line 23, column 38
    function initialValue_0 () : entity.WorkersCompLine {
      return coverable as entity.WorkersCompLine
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.WCEmpLiabCov.pcf: line 28, column 41
    function initialValue_1 () : productmodel.WCEmpLiabCov {
      return wcLine.WCEmpLiabCov
    }
    
    // 'label' attribute on RangeInput (id=StopGapTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 58, column 67
    function label_20 () : java.lang.Object {
      return empLiabCov.WCStopGapOptTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on TextInput (id=WCIncludedMonopolisticStatesTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 69, column 70
    function label_32 () : java.lang.Object {
      return empLiabCov.WCIncludedMonopolisticStatesTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.WCEmpLiabCov.pcf: line 39, column 90
    function label_43 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=EmpLiabPack_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 49, column 70
    function label_7 () : java.lang.Object {
      return empLiabCov.WCEmpLiabLimitTerm.Pattern.DisplayName
    }
    
    // 'required' attribute on RangeInput (id=StopGapTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 58, column 67
    function required_21 () : java.lang.Boolean {
      return empLiabCov.WCStopGapOptTerm.Pattern.Required
    }
    
    // 'required' attribute on TextInput (id=WCIncludedMonopolisticStatesTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 69, column 70
    function required_33 () : java.lang.Boolean {
      return empLiabCov.WCIncludedMonopolisticStatesTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=EmpLiabPack_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 49, column 70
    function required_8 () : java.lang.Boolean {
      return empLiabCov.WCEmpLiabLimitTerm.Pattern.Required
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.WCEmpLiabCov.pcf: line 39, column 90
    function setter_44 (VALUE :  java.lang.Boolean) : void {
      coverable.setCoverageConditionOrExclusionExists(coveragePattern, VALUE)
    }
    
    // 'validationExpression' attribute on TextInput (id=WCIncludedMonopolisticStatesTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 69, column 70
    function validationExpression_31 () : java.lang.Object {
      return wcLine.validateIncludedMonopolisticStates(empLiabCov.WCIncludedMonopolisticStatesTerm.Value)
    }
    
    // 'valueRange' attribute on RangeInput (id=EmpLiabPack_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 49, column 70
    function valueRange_12 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(empLiabCov.WCEmpLiabLimitTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=StopGapTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 58, column 67
    function valueRange_25 () : java.lang.Object {
      return empLiabCov.WCStopGapOptTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'value' attribute on RangeInput (id=EmpLiabPack_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 49, column 70
    function valueRoot_11 () : java.lang.Object {
      return empLiabCov.WCEmpLiabLimitTerm
    }
    
    // 'value' attribute on RangeInput (id=StopGapTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 58, column 67
    function valueRoot_24 () : java.lang.Object {
      return empLiabCov.WCStopGapOptTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 32, column 37
    function valueRoot_3 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on TextInput (id=WCIncludedMonopolisticStatesTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 69, column 70
    function valueRoot_36 () : java.lang.Object {
      return empLiabCov.WCIncludedMonopolisticStatesTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 32, column 37
    function value_2 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on RangeInput (id=StopGapTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 58, column 67
    function value_22 () : typekey.StopGap {
      return empLiabCov.WCStopGapOptTerm.Value
    }
    
    // 'value' attribute on TextInput (id=WCIncludedMonopolisticStatesTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 69, column 70
    function value_34 () : java.lang.String {
      return empLiabCov.WCIncludedMonopolisticStatesTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=EmpLiabPack_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 49, column 70
    function value_9 () : gw.api.productmodel.CovTermPack<productmodel.PackageWCEmpLiabLimitType> {
      return empLiabCov.WCEmpLiabLimitTerm.PackageValue
    }
    
    // 'valueRange' attribute on RangeInput (id=EmpLiabPack_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 49, column 70
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.productmodel.CovTermPack<productmodel.PackageWCEmpLiabLimitType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EmpLiabPack_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 49, column 70
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StopGapTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 58, column 67
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StopGapTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 58, column 67
    function verifyValueRangeIsAllowedType_26 ($$arg :  typekey.StopGap[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EmpLiabPack_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 49, column 70
    function verifyValueRange_14 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(empLiabCov.WCEmpLiabLimitTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=StopGapTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 58, column 67
    function verifyValueRange_27 () : void {
      var __valueRangeArg = empLiabCov.WCStopGapOptTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_26(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=StopGapTermInput_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 58, column 67
    function visible_19 () : java.lang.Boolean {
      return empLiabCov.hasCovTerm("WCStopGapOpt")
    }
    
    // 'visible' attribute on InputSet at CoverageInputSet.WCEmpLiabCov.pcf: line 62, column 144
    function visible_40 () : java.lang.Boolean {
      return empLiabCov.hasCovTerm("WCIncludedMonopolisticStates") and empLiabCov.WCStopGapOptTerm.Value == TC_LISTEDSTATESONLY
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.WCEmpLiabCov.pcf: line 39, column 90
    function visible_41 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on RangeInput (id=EmpLiabPack_Input) at CoverageInputSet.WCEmpLiabCov.pcf: line 49, column 70
    function visible_6 () : java.lang.Boolean {
      return empLiabCov.hasCovTerm("WCEmpLiabLimit")
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
    
    property get empLiabCov () : productmodel.WCEmpLiabCov {
      return getVariableValue("empLiabCov", 0) as productmodel.WCEmpLiabCov
    }
    
    property set empLiabCov ($arg :  productmodel.WCEmpLiabCov) {
      setVariableValue("empLiabCov", 0, $arg)
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
    
    property get wcLine () : entity.WorkersCompLine {
      return getVariableValue("wcLine", 0) as entity.WorkersCompLine
    }
    
    property set wcLine ($arg :  entity.WorkersCompLine) {
      setVariableValue("wcLine", 0, $arg)
    }
    
    
  }
  
  
}