package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/CoverageInputSet.HOPCovD.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_HOPCovDExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/CoverageInputSet.HOPCovD.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovD.pcf: line 41, column 90
    function available_58 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovDLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 50, column 56
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovD.HOPCovDLimitTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovDLimitType>)
    }
    
    // 'value' attribute on BooleanRadioInput (id=HOPCovDLossOfRent_Input) at CoverageInputSet.HOPCovD.pcf: line 71, column 62
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovD.HOPCovDLossOfRentTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovDProhibitedUse_Input) at CoverageInputSet.HOPCovD.pcf: line 80, column 64
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovD.HOPCovDProhibitedUseTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovDProhibitedUseType>)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=HOPCovDLossOfRent_Input) at CoverageInputSet.HOPCovD.pcf: line 71, column 62
    function editable_32 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'editable' attribute on RangeInput (id=HOPCovDProhibitedUse_Input) at CoverageInputSet.HOPCovD.pcf: line 80, column 64
    function editable_43 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(dwelling.HOPCovD.HOPCovDProhibitedUseTerm)
    }
    
    // 'editable' attribute on RangeInput (id=HOPCovDLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 50, column 56
    function editable_6 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(dwelling.HOPCovD.HOPCovDLimitTerm)
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.HOPCovD.pcf: line 23, column 27
    function initialValue_0 () : HOPDwelling {
      return coverable as HOPDwelling
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.HOPCovD.pcf: line 27, column 31
    function initialValue_1 () : HOPCoveragePart {
      return dwelling.HOPCoveragePart
    }
    
    // 'inputConversion' attribute on TextInput (id=HOPCovDDirectLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 64, column 63
    function inputConversion_23 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertFromString(VALUE)
    }
    
    // 'label' attribute on TextInput (id=HOPCovDDirectLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 64, column 63
    function label_22 () : java.lang.Object {
      return dwelling.HOPCovD.HOPCovDDirectLimitTerm.DisplayName
    }
    
    // 'label' attribute on BooleanRadioInput (id=HOPCovDLossOfRent_Input) at CoverageInputSet.HOPCovD.pcf: line 71, column 62
    function label_34 () : java.lang.Object {
      return dwelling.HOPCovD.HOPCovDLossOfRentTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=HOPCovDProhibitedUse_Input) at CoverageInputSet.HOPCovD.pcf: line 80, column 64
    function label_45 () : java.lang.Object {
      return dwelling.HOPCovD.HOPCovDProhibitedUseTerm.DisplayName
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovD.pcf: line 41, column 90
    function label_59 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=HOPCovDLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 50, column 56
    function label_8 () : java.lang.Object {
      return dwelling.HOPCovD.HOPCovDLimitTerm.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at CoverageInputSet.HOPCovD.pcf: line 53, column 77
    function onChange_5 () : void {
      HOPCoverageInputSetHelper.onCovDLimitChange(dwelling)
    }
    
    // 'outputConversion' attribute on TextInput (id=HOPCovDDirectLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 64, column 63
    function outputConversion_24 (VALUE :  java.math.BigDecimal) : java.lang.String {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertToString(VALUE)
    }
    
    // 'required' attribute on TextInput (id=HOPCovDDirectLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 64, column 63
    function required_25 () : java.lang.Boolean {
      return dwelling.HOPCovD.HOPCovDDirectLimitTerm.Pattern.Required
    }
    
    // 'required' attribute on BooleanRadioInput (id=HOPCovDLossOfRent_Input) at CoverageInputSet.HOPCovD.pcf: line 71, column 62
    function required_35 () : java.lang.Boolean {
      return dwelling.HOPCovD.HOPCovDLossOfRentTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=HOPCovDProhibitedUse_Input) at CoverageInputSet.HOPCovD.pcf: line 80, column 64
    function required_46 () : java.lang.Boolean {
      return dwelling.HOPCovD.HOPCovDProhibitedUseTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=HOPCovDLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 50, column 56
    function required_9 () : java.lang.Boolean {
      return dwelling.HOPCovD.HOPCovDLimitTerm.Pattern.Required
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovD.pcf: line 41, column 90
    function setter_60 (VALUE :  java.lang.Boolean) : void {
      coverable.setCoverageConditionOrExclusionExists(coveragePattern, VALUE)
    }
    
    // 'validationExpression' attribute on TextInput (id=HOPCovDDirectLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 64, column 63
    function validationExpression_20 () : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.validate(dwelling.HOPCovD.HOPCovDDirectLimitTerm)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovDLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 50, column 56
    function valueRange_13 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovD.HOPCovDLimitTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovDProhibitedUse_Input) at CoverageInputSet.HOPCovD.pcf: line 80, column 64
    function valueRange_50 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovD.HOPCovDProhibitedUseTerm, openForEdit)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovDLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 50, column 56
    function valueRoot_12 () : java.lang.Object {
      return dwelling.HOPCovD.HOPCovDLimitTerm
    }
    
    // 'value' attribute on TextInput (id=HOPCovDDirectLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 64, column 63
    function valueRoot_27 () : java.lang.Object {
      return dwelling.HOPCovD.HOPCovDDirectLimitTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.HOPCovD.pcf: line 34, column 37
    function valueRoot_3 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on BooleanRadioInput (id=HOPCovDLossOfRent_Input) at CoverageInputSet.HOPCovD.pcf: line 71, column 62
    function valueRoot_38 () : java.lang.Object {
      return dwelling.HOPCovD.HOPCovDLossOfRentTerm
    }
    
    // 'value' attribute on RangeInput (id=HOPCovDProhibitedUse_Input) at CoverageInputSet.HOPCovD.pcf: line 80, column 64
    function valueRoot_49 () : java.lang.Object {
      return dwelling.HOPCovD.HOPCovDProhibitedUseTerm
    }
    
    // 'value' attribute on RangeInput (id=HOPCovDLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 50, column 56
    function value_10 () : gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovDLimitType> {
      return dwelling.HOPCovD.HOPCovDLimitTerm.OptionValue
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.HOPCovD.pcf: line 34, column 37
    function value_2 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on TextInput (id=HOPCovDDirectLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 64, column 63
    function value_26 () : java.math.BigDecimal {
      return dwelling.HOPCovD.HOPCovDDirectLimitTerm.Value
    }
    
    // 'value' attribute on BooleanRadioInput (id=HOPCovDLossOfRent_Input) at CoverageInputSet.HOPCovD.pcf: line 71, column 62
    function value_36 () : java.lang.Boolean {
      return dwelling.HOPCovD.HOPCovDLossOfRentTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=HOPCovDProhibitedUse_Input) at CoverageInputSet.HOPCovD.pcf: line 80, column 64
    function value_47 () : gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovDProhibitedUseType> {
      return dwelling.HOPCovD.HOPCovDProhibitedUseTerm.OptionValue
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovDLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 50, column 56
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovDLimitType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovDLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 50, column 56
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovDProhibitedUse_Input) at CoverageInputSet.HOPCovD.pcf: line 80, column 64
    function verifyValueRangeIsAllowedType_51 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovDProhibitedUseType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovDProhibitedUse_Input) at CoverageInputSet.HOPCovD.pcf: line 80, column 64
    function verifyValueRangeIsAllowedType_51 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovDLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 50, column 56
    function verifyValueRange_15 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovD.HOPCovDLimitTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovDProhibitedUse_Input) at CoverageInputSet.HOPCovD.pcf: line 80, column 64
    function verifyValueRange_52 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovD.HOPCovDProhibitedUseTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_51(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=HOPCovDDirectLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 64, column 63
    function visible_21 () : java.lang.Boolean {
      return dwelling.HOPCovD.HasHOPCovDDirectLimitTerm
    }
    
    // 'visible' attribute on BooleanRadioInput (id=HOPCovDLossOfRent_Input) at CoverageInputSet.HOPCovD.pcf: line 71, column 62
    function visible_33 () : java.lang.Boolean {
      return dwelling.HOPCovD.HasHOPCovDLossOfRentTerm
    }
    
    // 'visible' attribute on RangeInput (id=HOPCovDProhibitedUse_Input) at CoverageInputSet.HOPCovD.pcf: line 80, column 64
    function visible_44 () : java.lang.Boolean {
      return dwelling.HOPCovD.HasHOPCovDProhibitedUseTerm
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovD.pcf: line 41, column 90
    function visible_57 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on RangeInput (id=HOPCovDLimit_Input) at CoverageInputSet.HOPCovD.pcf: line 50, column 56
    function visible_7 () : java.lang.Boolean {
      return dwelling.HOPCovD.HasHOPCovDLimitTerm
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