package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/CoverageInputSet.HOPCovB.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_HOPCovBExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/CoverageInputSet.HOPCovB.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovB.pcf: line 41, column 90
    function available_33 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovBLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 50, column 56
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovB.HOPCovBLimitTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovBLimitType>)
    }
    
    // 'editable' attribute on RangeInput (id=HOPCovBLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 50, column 56
    function editable_6 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(dwelling.HOPCovB.HOPCovBLimitTerm)
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.HOPCovB.pcf: line 23, column 27
    function initialValue_0 () : HOPDwelling {
      return coverable as HOPDwelling
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.HOPCovB.pcf: line 27, column 31
    function initialValue_1 () : HOPCoveragePart {
      return dwelling.HOPCoveragePart
    }
    
    // 'inputConversion' attribute on TextInput (id=HOPCovBDirectLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 64, column 63
    function inputConversion_23 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertFromString(VALUE)
    }
    
    // 'label' attribute on TextInput (id=HOPCovBDirectLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 64, column 63
    function label_22 () : java.lang.Object {
      return dwelling.HOPCovB.HOPCovBDirectLimitTerm.DisplayName
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovB.pcf: line 41, column 90
    function label_34 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=HOPCovBLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 50, column 56
    function label_8 () : java.lang.Object {
      return dwelling.HOPCovB.HOPCovBLimitTerm.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at CoverageInputSet.HOPCovB.pcf: line 53, column 77
    function onChange_5 () : void {
      HOPCoverageInputSetHelper.onCovBLimitChange(dwelling)
    }
    
    // 'outputConversion' attribute on TextInput (id=HOPCovBDirectLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 64, column 63
    function outputConversion_24 (VALUE :  java.math.BigDecimal) : java.lang.String {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertToString(VALUE)
    }
    
    // 'required' attribute on TextInput (id=HOPCovBDirectLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 64, column 63
    function required_25 () : java.lang.Boolean {
      return dwelling.HOPCovB.HOPCovBDirectLimitTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=HOPCovBLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 50, column 56
    function required_9 () : java.lang.Boolean {
      return dwelling.HOPCovB.HOPCovBLimitTerm.Pattern.Required
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovB.pcf: line 41, column 90
    function setter_35 (VALUE :  java.lang.Boolean) : void {
      coverable.setCoverageConditionOrExclusionExists(coveragePattern, VALUE)
    }
    
    // 'validationExpression' attribute on TextInput (id=HOPCovBDirectLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 64, column 63
    function validationExpression_20 () : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.validate(dwelling.HOPCovB.HOPCovBDirectLimitTerm)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovBLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 50, column 56
    function valueRange_13 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovB.HOPCovBLimitTerm, openForEdit)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovBLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 50, column 56
    function valueRoot_12 () : java.lang.Object {
      return dwelling.HOPCovB.HOPCovBLimitTerm
    }
    
    // 'value' attribute on TextInput (id=HOPCovBDirectLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 64, column 63
    function valueRoot_27 () : java.lang.Object {
      return dwelling.HOPCovB.HOPCovBDirectLimitTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.HOPCovB.pcf: line 34, column 37
    function valueRoot_3 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on RangeInput (id=HOPCovBLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 50, column 56
    function value_10 () : gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovBLimitType> {
      return dwelling.HOPCovB.HOPCovBLimitTerm.OptionValue
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.HOPCovB.pcf: line 34, column 37
    function value_2 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on TextInput (id=HOPCovBDirectLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 64, column 63
    function value_26 () : java.math.BigDecimal {
      return dwelling.HOPCovB.HOPCovBDirectLimitTerm.Value
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovBLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 50, column 56
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovBLimitType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovBLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 50, column 56
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovBLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 50, column 56
    function verifyValueRange_15 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovB.HOPCovBLimitTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=HOPCovBDirectLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 64, column 63
    function visible_21 () : java.lang.Boolean {
      return dwelling.HOPCovB.HasHOPCovBDirectLimitTerm
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovB.pcf: line 41, column 90
    function visible_32 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on RangeInput (id=HOPCovBLimit_Input) at CoverageInputSet.HOPCovB.pcf: line 50, column 56
    function visible_7 () : java.lang.Boolean {
      return dwelling.HOPCovB.HasHOPCovBLimitTerm
    }
    
    property get HOPCoverageInputSetHelper () : gw.web.line.hop.policy.HOPCoverageInputSetHelper {
      return getVariableValue("HOPCoverageInputSetHelper", 0) as gw.web.line.hop.policy.HOPCoverageInputSetHelper
    }
    
    property set HOPCoverageInputSetHelper ($arg :  gw.web.line.hop.policy.HOPCoverageInputSetHelper) {
      setVariableValue("HOPCoverageInputSetHelper", 0, $arg)
    }
    
    property get coverable () : Coverable {
      return getRequireValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get coveragePart () : HOPCoveragePart {
      return getVariableValue("coveragePart", 0) as HOPCoveragePart
    }
    
    property set coveragePart ($arg :  HOPCoveragePart) {
      setVariableValue("coveragePart", 0, $arg)
    }
    
    property get coveragePattern () : gw.api.productmodel.ClausePattern {
      return getRequireValue("coveragePattern", 0) as gw.api.productmodel.ClausePattern
    }
    
    property set coveragePattern ($arg :  gw.api.productmodel.ClausePattern) {
      setRequireValue("coveragePattern", 0, $arg)
    }
    
    property get dwelling () : HOPDwelling {
      return getVariableValue("dwelling", 0) as HOPDwelling
    }
    
    property set dwelling ($arg :  HOPDwelling) {
      setVariableValue("dwelling", 0, $arg)
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
    
    
  }
  
  
}