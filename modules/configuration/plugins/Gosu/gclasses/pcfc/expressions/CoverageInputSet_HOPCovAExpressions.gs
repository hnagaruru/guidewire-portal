package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/CoverageInputSet.HOPCovA.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_HOPCovAExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/CoverageInputSet.HOPCovA.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovA.pcf: line 41, column 90
    function available_65 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'value' attribute on TextInput (id=HOPCovALimit_Input) at CoverageInputSet.HOPCovA.pcf: line 52, column 56
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovA.HOPCovALimitTerm.Value = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovAValuationMethod_Input) at CoverageInputSet.HOPCovA.pcf: line 65, column 60
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovA.HOPCovAValuationTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovAValuationType>)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovACauseOfLoss_Input) at CoverageInputSet.HOPCovA.pcf: line 75, column 62
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovA.HOPCovACauseOfLossTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovACauseOfLossType>)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovACoinsurance_Input) at CoverageInputSet.HOPCovA.pcf: line 88, column 62
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovA.HOPCovACoinsuranceTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovACoinsuranceType>)
    }
    
    // 'editable' attribute on RangeInput (id=HOPCovAValuationMethod_Input) at CoverageInputSet.HOPCovA.pcf: line 65, column 60
    function editable_21 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(dwelling.HOPCovA.HOPCovAValuationTerm)
    }
    
    // 'editable' attribute on RangeInput (id=HOPCovACauseOfLoss_Input) at CoverageInputSet.HOPCovA.pcf: line 75, column 62
    function editable_36 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(dwelling.HOPCovA.HOPCovACauseOfLossTerm)
    }
    
    // 'editable' attribute on RangeInput (id=HOPCovACoinsurance_Input) at CoverageInputSet.HOPCovA.pcf: line 88, column 62
    function editable_50 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(dwelling.HOPCovA.HOPCovACoinsuranceTerm)
    }
    
    // 'editable' attribute on TextInput (id=HOPCovALimit_Input) at CoverageInputSet.HOPCovA.pcf: line 52, column 56
    function editable_6 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.HOPCovA.pcf: line 23, column 27
    function initialValue_0 () : HOPDwelling {
      return coverable as HOPDwelling
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.HOPCovA.pcf: line 27, column 31
    function initialValue_1 () : HOPCoveragePart {
      return dwelling.HOPCoveragePart
    }
    
    // 'inputConversion' attribute on TextInput (id=HOPCovALimit_Input) at CoverageInputSet.HOPCovA.pcf: line 52, column 56
    function inputConversion_10 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertFromString(VALUE)
    }
    
    // 'label' attribute on RangeInput (id=HOPCovAValuationMethod_Input) at CoverageInputSet.HOPCovA.pcf: line 65, column 60
    function label_23 () : java.lang.Object {
      return dwelling.HOPCovA.HOPCovAValuationTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=HOPCovACauseOfLoss_Input) at CoverageInputSet.HOPCovA.pcf: line 75, column 62
    function label_38 () : java.lang.Object {
      return dwelling.HOPCovA.HOPCovACauseOfLossTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=HOPCovACoinsurance_Input) at CoverageInputSet.HOPCovA.pcf: line 88, column 62
    function label_52 () : java.lang.Object {
      return dwelling.HOPCovA.HOPCovACoinsuranceTerm.DisplayName
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovA.pcf: line 41, column 90
    function label_66 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'label' attribute on TextInput (id=HOPCovALimit_Input) at CoverageInputSet.HOPCovA.pcf: line 52, column 56
    function label_9 () : java.lang.Object {
      return dwelling.HOPCovA.HOPCovALimitTerm.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at CoverageInputSet.HOPCovA.pcf: line 78, column 83
    function onChange_35 () : void {
      HOPCoverageInputSetHelper.onCovACauseOfLossChange(dwelling)
    }
    
    // 'onChange' attribute on PostOnChange at CoverageInputSet.HOPCovA.pcf: line 55, column 77
    function onChange_5 () : void {
      HOPCoverageInputSetHelper.onCovALimitChange(dwelling)
    }
    
    // 'outputConversion' attribute on TextInput (id=HOPCovALimit_Input) at CoverageInputSet.HOPCovA.pcf: line 52, column 56
    function outputConversion_11 (VALUE :  java.math.BigDecimal) : java.lang.String {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertToString(VALUE)
    }
    
    // 'required' attribute on TextInput (id=HOPCovALimit_Input) at CoverageInputSet.HOPCovA.pcf: line 52, column 56
    function required_12 () : java.lang.Boolean {
      return dwelling.HOPCovA.HOPCovALimitTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=HOPCovAValuationMethod_Input) at CoverageInputSet.HOPCovA.pcf: line 65, column 60
    function required_24 () : java.lang.Boolean {
      return dwelling.HOPCovA.HOPCovAValuationTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=HOPCovACauseOfLoss_Input) at CoverageInputSet.HOPCovA.pcf: line 75, column 62
    function required_39 () : java.lang.Boolean {
      return dwelling.HOPCovA.HOPCovACauseOfLossTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=HOPCovACoinsurance_Input) at CoverageInputSet.HOPCovA.pcf: line 88, column 62
    function required_53 () : java.lang.Boolean {
      return dwelling.HOPCovA.HOPCovACoinsuranceTerm.Pattern.Required
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovA.pcf: line 41, column 90
    function setter_67 (VALUE :  java.lang.Boolean) : void {
      coverable.setCoverageConditionOrExclusionExists(coveragePattern, VALUE)
    }
    
    // 'validationExpression' attribute on TextInput (id=HOPCovALimit_Input) at CoverageInputSet.HOPCovA.pcf: line 52, column 56
    function validationExpression_7 () : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.validate(dwelling.HOPCovA.HOPCovALimitTerm)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovAValuationMethod_Input) at CoverageInputSet.HOPCovA.pcf: line 65, column 60
    function valueRange_28 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovA.HOPCovAValuationTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovACauseOfLoss_Input) at CoverageInputSet.HOPCovA.pcf: line 75, column 62
    function valueRange_43 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovA.HOPCovACauseOfLossTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovACoinsurance_Input) at CoverageInputSet.HOPCovA.pcf: line 88, column 62
    function valueRange_57 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovA.HOPCovACoinsuranceTerm, openForEdit)
    }
    
    // 'value' attribute on TextInput (id=HOPCovALimit_Input) at CoverageInputSet.HOPCovA.pcf: line 52, column 56
    function valueRoot_15 () : java.lang.Object {
      return dwelling.HOPCovA.HOPCovALimitTerm
    }
    
    // 'value' attribute on RangeInput (id=HOPCovAValuationMethod_Input) at CoverageInputSet.HOPCovA.pcf: line 65, column 60
    function valueRoot_27 () : java.lang.Object {
      return dwelling.HOPCovA.HOPCovAValuationTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.HOPCovA.pcf: line 34, column 37
    function valueRoot_3 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on RangeInput (id=HOPCovACauseOfLoss_Input) at CoverageInputSet.HOPCovA.pcf: line 75, column 62
    function valueRoot_42 () : java.lang.Object {
      return dwelling.HOPCovA.HOPCovACauseOfLossTerm
    }
    
    // 'value' attribute on RangeInput (id=HOPCovACoinsurance_Input) at CoverageInputSet.HOPCovA.pcf: line 88, column 62
    function valueRoot_56 () : java.lang.Object {
      return dwelling.HOPCovA.HOPCovACoinsuranceTerm
    }
    
    // 'value' attribute on TextInput (id=HOPCovALimit_Input) at CoverageInputSet.HOPCovA.pcf: line 52, column 56
    function value_13 () : java.math.BigDecimal {
      return dwelling.HOPCovA.HOPCovALimitTerm.Value
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.HOPCovA.pcf: line 34, column 37
    function value_2 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on RangeInput (id=HOPCovAValuationMethod_Input) at CoverageInputSet.HOPCovA.pcf: line 65, column 60
    function value_25 () : gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovAValuationType> {
      return dwelling.HOPCovA.HOPCovAValuationTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=HOPCovACauseOfLoss_Input) at CoverageInputSet.HOPCovA.pcf: line 75, column 62
    function value_40 () : gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovACauseOfLossType> {
      return dwelling.HOPCovA.HOPCovACauseOfLossTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=HOPCovACoinsurance_Input) at CoverageInputSet.HOPCovA.pcf: line 88, column 62
    function value_54 () : gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovACoinsuranceType> {
      return dwelling.HOPCovA.HOPCovACoinsuranceTerm.OptionValue
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovAValuationMethod_Input) at CoverageInputSet.HOPCovA.pcf: line 65, column 60
    function verifyValueRangeIsAllowedType_29 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovAValuationType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovAValuationMethod_Input) at CoverageInputSet.HOPCovA.pcf: line 65, column 60
    function verifyValueRangeIsAllowedType_29 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovACauseOfLoss_Input) at CoverageInputSet.HOPCovA.pcf: line 75, column 62
    function verifyValueRangeIsAllowedType_44 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovACauseOfLossType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovACauseOfLoss_Input) at CoverageInputSet.HOPCovA.pcf: line 75, column 62
    function verifyValueRangeIsAllowedType_44 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovACoinsurance_Input) at CoverageInputSet.HOPCovA.pcf: line 88, column 62
    function verifyValueRangeIsAllowedType_58 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovACoinsuranceType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovACoinsurance_Input) at CoverageInputSet.HOPCovA.pcf: line 88, column 62
    function verifyValueRangeIsAllowedType_58 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovAValuationMethod_Input) at CoverageInputSet.HOPCovA.pcf: line 65, column 60
    function verifyValueRange_30 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovA.HOPCovAValuationTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_29(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovACauseOfLoss_Input) at CoverageInputSet.HOPCovA.pcf: line 75, column 62
    function verifyValueRange_45 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovA.HOPCovACauseOfLossTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_44(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovACoinsurance_Input) at CoverageInputSet.HOPCovA.pcf: line 88, column 62
    function verifyValueRange_59 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovA.HOPCovACoinsuranceTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_58(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=HOPCovAValuationMethod_Input) at CoverageInputSet.HOPCovA.pcf: line 65, column 60
    function visible_22 () : java.lang.Boolean {
      return dwelling.HOPCovA.HasHOPCovAValuationTerm
    }
    
    // 'visible' attribute on RangeInput (id=HOPCovACauseOfLoss_Input) at CoverageInputSet.HOPCovA.pcf: line 75, column 62
    function visible_37 () : java.lang.Boolean {
      return dwelling.HOPCovA.HasHOPCovACauseOfLossTerm
    }
    
    // 'visible' attribute on RangeInput (id=HOPCovACoinsurance_Input) at CoverageInputSet.HOPCovA.pcf: line 88, column 62
    function visible_51 () : java.lang.Boolean {
      return dwelling.HOPCovA.HasHOPCovACoinsuranceTerm
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovA.pcf: line 41, column 90
    function visible_64 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on TextInput (id=HOPCovALimit_Input) at CoverageInputSet.HOPCovA.pcf: line 52, column 56
    function visible_8 () : java.lang.Boolean {
      return dwelling.HOPCovA.HasHOPCovALimitTerm
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