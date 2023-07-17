package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CoverageInputSet.CPBPPCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_CPBPPCovExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CoverageInputSet.CPBPPCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.CPBPPCov.pcf: line 38, column 89
    function available_114 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'def' attribute on InputSetRef (id=CPBPPCovLimit) at CoverageInputSet.CPBPPCov.pcf: line 42, column 76
    function def_onEnter_5 (def :  pcf.CovTermDirectInputSet) : void {
      def.onEnter(building.CPBPPCov.CPBPPCovLimitTerm, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=CPBPPCovLimit) at CoverageInputSet.CPBPPCov.pcf: line 42, column 76
    function def_refreshVariables_6 (def :  pcf.CovTermDirectInputSet) : void {
      def.refreshVariables(building.CPBPPCov.CPBPPCovLimitTerm, jobWizardHelper)
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovReportingForm_Input) at CoverageInputSet.CPBPPCov.pcf: line 123, column 84
    function defaultSetter_105 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBPPCov.CPBPPCovReportingFormTerm.Value = (__VALUE_TO_SET as typekey.CPReportingForm)
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovCauseOfLoss_Input) at CoverageInputSet.CPBPPCov.pcf: line 51, column 81
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBPPCov.CPBPPCovCauseOfLossTerm.Value = (__VALUE_TO_SET as typekey.CPCauseOfLoss)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBPPCovExcludeVandalism_Input) at CoverageInputSet.CPBPPCov.pcf: line 61, column 87
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBPPCov.CPBPPCovExcludeVandalismTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBPPCovExcludeSprinkler_Input) at CoverageInputSet.CPBPPCov.pcf: line 68, column 87
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBPPCov.CPBPPCovExcludeSprinklerTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBPPCovExcludeTheft_Input) at CoverageInputSet.CPBPPCov.pcf: line 75, column 255
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBPPCov.CPBPPCovExcludeTheftTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 85, column 81
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBPPCov.CPBPPCovDeductibleTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionCPBPPCovDeductibleType>)
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovWindDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 95, column 85
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBPPCov.CPBPPCovWindDeductibleTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionCPBPPCovWindDeductibleType>)
    }
    
    // 'value' attribute on RangeInput (id=CPBPPValuationMethod_Input) at CoverageInputSet.CPBPPCov.pcf: line 104, column 83
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBPPCov.CPBPPValuationMethodTerm.Value = (__VALUE_TO_SET as typekey.CPValuationMethod)
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovCoinsurance_Input) at CoverageInputSet.CPBPPCov.pcf: line 114, column 82
    function defaultSetter_92 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBPPCov.CPBPPCovCoinsuranceTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionCPBPPCovCoinsuranceType>)
    }
    
    // 'editable' attribute on RangeInput (id=CPBPPCovDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 85, column 81
    function editable_47 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(building.CPBPPCov.CPBPPCovDeductibleTerm)
    }
    
    // 'editable' attribute on RangeInput (id=CPBPPCovWindDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 95, column 85
    function editable_61 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(building.CPBPPCov.CPBPPCovWindDeductibleTerm)
    }
    
    // 'editable' attribute on RangeInput (id=CPBPPCovCoinsurance_Input) at CoverageInputSet.CPBPPCov.pcf: line 114, column 82
    function editable_87 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(building.CPBPPCov.CPBPPCovCoinsuranceTerm)
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.CPBPPCov.pcf: line 27, column 33
    function initialValue_0 () : entity.CPBuilding {
      return coverable as CPBuilding
    }
    
    // 'label' attribute on RangeInput (id=CPBPPCovReportingForm_Input) at CoverageInputSet.CPBPPCov.pcf: line 123, column 84
    function label_102 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovReportingFormTerm.DisplayName
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.CPBPPCov.pcf: line 38, column 89
    function label_115 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'label' attribute on BooleanRadioInput (id=CPBPPCovExcludeVandalism_Input) at CoverageInputSet.CPBPPCov.pcf: line 61, column 87
    function label_21 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovExcludeVandalismTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on BooleanRadioInput (id=CPBPPCovExcludeSprinkler_Input) at CoverageInputSet.CPBPPCov.pcf: line 68, column 87
    function label_30 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovExcludeSprinklerTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on BooleanRadioInput (id=CPBPPCovExcludeTheft_Input) at CoverageInputSet.CPBPPCov.pcf: line 75, column 255
    function label_39 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovExcludeTheftTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBPPCovDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 85, column 81
    function label_49 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovDeductibleTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBPPCovWindDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 95, column 85
    function label_63 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovWindDeductibleTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBPPValuationMethod_Input) at CoverageInputSet.CPBPPCov.pcf: line 104, column 83
    function label_76 () : java.lang.Object {
      return building.CPBPPCov.CPBPPValuationMethodTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBPPCovCoinsurance_Input) at CoverageInputSet.CPBPPCov.pcf: line 114, column 82
    function label_89 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovCoinsuranceTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBPPCovCauseOfLoss_Input) at CoverageInputSet.CPBPPCov.pcf: line 51, column 81
    function label_9 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovCauseOfLossTerm.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at CoverageInputSet.CPBPPCov.pcf: line 53, column 56
    function onChange_7 () : void {
      building.createOrSyncCoverages()
    }
    
    // 'required' attribute on RangeInput (id=CPBPPCovCauseOfLoss_Input) at CoverageInputSet.CPBPPCov.pcf: line 51, column 81
    function required_10 () : java.lang.Boolean {
      return building.CPBPPCov.CPBPPCovCauseOfLossTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBPPCovReportingForm_Input) at CoverageInputSet.CPBPPCov.pcf: line 123, column 84
    function required_103 () : java.lang.Boolean {
      return building.CPBPPCov.CPBPPCovReportingFormTerm.Pattern.Required
    }
    
    // 'required' attribute on BooleanRadioInput (id=CPBPPCovExcludeVandalism_Input) at CoverageInputSet.CPBPPCov.pcf: line 61, column 87
    function required_22 () : java.lang.Boolean {
      return building.CPBPPCov.CPBPPCovExcludeVandalismTerm.Pattern.Required
    }
    
    // 'required' attribute on BooleanRadioInput (id=CPBPPCovExcludeSprinkler_Input) at CoverageInputSet.CPBPPCov.pcf: line 68, column 87
    function required_31 () : java.lang.Boolean {
      return building.CPBPPCov.CPBPPCovExcludeSprinklerTerm.Pattern.Required
    }
    
    // 'required' attribute on BooleanRadioInput (id=CPBPPCovExcludeTheft_Input) at CoverageInputSet.CPBPPCov.pcf: line 75, column 255
    function required_40 () : java.lang.Boolean {
      return building.CPBPPCov.CPBPPCovExcludeTheftTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBPPCovDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 85, column 81
    function required_50 () : java.lang.Boolean {
      return building.CPBPPCov.CPBPPCovDeductibleTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBPPCovWindDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 95, column 85
    function required_64 () : java.lang.Boolean {
      return building.CPBPPCov.CPBPPCovWindDeductibleTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBPPValuationMethod_Input) at CoverageInputSet.CPBPPCov.pcf: line 104, column 83
    function required_77 () : java.lang.Boolean {
      return building.CPBPPCov.CPBPPValuationMethodTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBPPCovCoinsurance_Input) at CoverageInputSet.CPBPPCov.pcf: line 114, column 82
    function required_90 () : java.lang.Boolean {
      return building.CPBPPCov.CPBPPCovCoinsuranceTerm.Pattern.Required
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.CPBPPCov.pcf: line 38, column 89
    function setter_116 (VALUE :  java.lang.Boolean) : void {
      building.setCoverageConditionOrExclusionExists(coveragePattern, VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovReportingForm_Input) at CoverageInputSet.CPBPPCov.pcf: line 123, column 84
    function valueRange_107 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovReportingFormTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovCauseOfLoss_Input) at CoverageInputSet.CPBPPCov.pcf: line 51, column 81
    function valueRange_14 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovCauseOfLossTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 85, column 81
    function valueRange_54 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBPPCov.CPBPPCovDeductibleTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovWindDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 95, column 85
    function valueRange_68 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBPPCov.CPBPPCovWindDeductibleTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPValuationMethod_Input) at CoverageInputSet.CPBPPCov.pcf: line 104, column 83
    function valueRange_81 () : java.lang.Object {
      return building.CPBPPCov.CPBPPValuationMethodTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovCoinsurance_Input) at CoverageInputSet.CPBPPCov.pcf: line 114, column 82
    function valueRange_94 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBPPCov.CPBPPCovCoinsuranceTerm, openForEdit)
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovReportingForm_Input) at CoverageInputSet.CPBPPCov.pcf: line 123, column 84
    function valueRoot_106 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovReportingFormTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovCauseOfLoss_Input) at CoverageInputSet.CPBPPCov.pcf: line 51, column 81
    function valueRoot_13 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovCauseOfLossTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.CPBPPCov.pcf: line 31, column 37
    function valueRoot_2 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBPPCovExcludeVandalism_Input) at CoverageInputSet.CPBPPCov.pcf: line 61, column 87
    function valueRoot_25 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovExcludeVandalismTerm
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBPPCovExcludeSprinkler_Input) at CoverageInputSet.CPBPPCov.pcf: line 68, column 87
    function valueRoot_34 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovExcludeSprinklerTerm
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBPPCovExcludeTheft_Input) at CoverageInputSet.CPBPPCov.pcf: line 75, column 255
    function valueRoot_43 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovExcludeTheftTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 85, column 81
    function valueRoot_53 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovDeductibleTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovWindDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 95, column 85
    function valueRoot_67 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovWindDeductibleTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBPPValuationMethod_Input) at CoverageInputSet.CPBPPCov.pcf: line 104, column 83
    function valueRoot_80 () : java.lang.Object {
      return building.CPBPPCov.CPBPPValuationMethodTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovCoinsurance_Input) at CoverageInputSet.CPBPPCov.pcf: line 114, column 82
    function valueRoot_93 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovCoinsuranceTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.CPBPPCov.pcf: line 31, column 37
    function value_1 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovReportingForm_Input) at CoverageInputSet.CPBPPCov.pcf: line 123, column 84
    function value_104 () : typekey.CPReportingForm {
      return building.CPBPPCov.CPBPPCovReportingFormTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovCauseOfLoss_Input) at CoverageInputSet.CPBPPCov.pcf: line 51, column 81
    function value_11 () : typekey.CPCauseOfLoss {
      return building.CPBPPCov.CPBPPCovCauseOfLossTerm.Value
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBPPCovExcludeVandalism_Input) at CoverageInputSet.CPBPPCov.pcf: line 61, column 87
    function value_23 () : java.lang.Boolean {
      return building.CPBPPCov.CPBPPCovExcludeVandalismTerm.Value
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBPPCovExcludeSprinkler_Input) at CoverageInputSet.CPBPPCov.pcf: line 68, column 87
    function value_32 () : java.lang.Boolean {
      return building.CPBPPCov.CPBPPCovExcludeSprinklerTerm.Value
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBPPCovExcludeTheft_Input) at CoverageInputSet.CPBPPCov.pcf: line 75, column 255
    function value_41 () : java.lang.Boolean {
      return building.CPBPPCov.CPBPPCovExcludeTheftTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 85, column 81
    function value_51 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBPPCovDeductibleType> {
      return building.CPBPPCov.CPBPPCovDeductibleTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovWindDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 95, column 85
    function value_65 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBPPCovWindDeductibleType> {
      return building.CPBPPCov.CPBPPCovWindDeductibleTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=CPBPPValuationMethod_Input) at CoverageInputSet.CPBPPCov.pcf: line 104, column 83
    function value_78 () : typekey.CPValuationMethod {
      return building.CPBPPCov.CPBPPValuationMethodTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=CPBPPCovCoinsurance_Input) at CoverageInputSet.CPBPPCov.pcf: line 114, column 82
    function value_91 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBPPCovCoinsuranceType> {
      return building.CPBPPCov.CPBPPCovCoinsuranceTerm.OptionValue
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovReportingForm_Input) at CoverageInputSet.CPBPPCov.pcf: line 123, column 84
    function verifyValueRangeIsAllowedType_108 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovReportingForm_Input) at CoverageInputSet.CPBPPCov.pcf: line 123, column 84
    function verifyValueRangeIsAllowedType_108 ($$arg :  typekey.CPReportingForm[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovCauseOfLoss_Input) at CoverageInputSet.CPBPPCov.pcf: line 51, column 81
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovCauseOfLoss_Input) at CoverageInputSet.CPBPPCov.pcf: line 51, column 81
    function verifyValueRangeIsAllowedType_15 ($$arg :  typekey.CPCauseOfLoss[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 85, column 81
    function verifyValueRangeIsAllowedType_55 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBPPCovDeductibleType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 85, column 81
    function verifyValueRangeIsAllowedType_55 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovWindDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 95, column 85
    function verifyValueRangeIsAllowedType_69 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBPPCovWindDeductibleType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovWindDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 95, column 85
    function verifyValueRangeIsAllowedType_69 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPValuationMethod_Input) at CoverageInputSet.CPBPPCov.pcf: line 104, column 83
    function verifyValueRangeIsAllowedType_82 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPValuationMethod_Input) at CoverageInputSet.CPBPPCov.pcf: line 104, column 83
    function verifyValueRangeIsAllowedType_82 ($$arg :  typekey.CPValuationMethod[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovCoinsurance_Input) at CoverageInputSet.CPBPPCov.pcf: line 114, column 82
    function verifyValueRangeIsAllowedType_95 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBPPCovCoinsuranceType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovCoinsurance_Input) at CoverageInputSet.CPBPPCov.pcf: line 114, column 82
    function verifyValueRangeIsAllowedType_95 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovReportingForm_Input) at CoverageInputSet.CPBPPCov.pcf: line 123, column 84
    function verifyValueRange_109 () : void {
      var __valueRangeArg = building.CPBPPCov.CPBPPCovReportingFormTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_108(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovCauseOfLoss_Input) at CoverageInputSet.CPBPPCov.pcf: line 51, column 81
    function verifyValueRange_16 () : void {
      var __valueRangeArg = building.CPBPPCov.CPBPPCovCauseOfLossTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 85, column 81
    function verifyValueRange_56 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBPPCov.CPBPPCovDeductibleTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_55(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovWindDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 95, column 85
    function verifyValueRange_70 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBPPCov.CPBPPCovWindDeductibleTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_69(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPValuationMethod_Input) at CoverageInputSet.CPBPPCov.pcf: line 104, column 83
    function verifyValueRange_83 () : void {
      var __valueRangeArg = building.CPBPPCov.CPBPPValuationMethodTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_82(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBPPCovCoinsurance_Input) at CoverageInputSet.CPBPPCov.pcf: line 114, column 82
    function verifyValueRange_96 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBPPCov.CPBPPCovCoinsuranceTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_95(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=CPBPPCovReportingForm_Input) at CoverageInputSet.CPBPPCov.pcf: line 123, column 84
    function visible_101 () : java.lang.Boolean {
      return building.CPBPPCov.hasCovTerm("CPBPPCovReportingForm")
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.CPBPPCov.pcf: line 38, column 89
    function visible_113 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on InputDivider at CoverageInputSet.CPBPPCov.pcf: line 126, column 100
    function visible_119 () : java.lang.Boolean {
      return openForEdit or coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on InputSet (id=CoverageInputSet) at CoverageInputSet.CPBPPCov.pcf: line 10, column 37
    function visible_120 () : java.lang.Boolean {
      return isCoverageAvailable()
    }
    
    // 'visible' attribute on BooleanRadioInput (id=CPBPPCovExcludeVandalism_Input) at CoverageInputSet.CPBPPCov.pcf: line 61, column 87
    function visible_20 () : java.lang.Boolean {
      return building.CPBPPCov.hasCovTerm("CPBPPCovExcludeVandalism")
    }
    
    // 'visible' attribute on BooleanRadioInput (id=CPBPPCovExcludeSprinkler_Input) at CoverageInputSet.CPBPPCov.pcf: line 68, column 87
    function visible_29 () : java.lang.Boolean {
      return building.CPBPPCov.hasCovTerm("CPBPPCovExcludeSprinkler")
    }
    
    // 'visible' attribute on BooleanRadioInput (id=CPBPPCovExcludeTheft_Input) at CoverageInputSet.CPBPPCov.pcf: line 75, column 255
    function visible_38 () : java.lang.Boolean {
      return building.CPBPPCov.hasCovTerm("CPBPPCovExcludeTheft") and building.CPBPPCov.CovTerms*.Pattern.contains( gw.api.upgrade.PCCoercions.makeProductModel<gw.api.productmodel.CovTermPattern>("CPBPPCovExcludeTheft") )
    }
    
    // 'visible' attribute on InputSetRef (id=CPBPPCovLimit) at CoverageInputSet.CPBPPCov.pcf: line 42, column 76
    function visible_4 () : java.lang.Boolean {
      return building.CPBPPCov.hasCovTerm("CPBPPCovLimit")
    }
    
    // 'visible' attribute on RangeInput (id=CPBPPCovDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 85, column 81
    function visible_48 () : java.lang.Boolean {
      return building.CPBPPCov.hasCovTerm("CPBPPCovDeductible")
    }
    
    // 'visible' attribute on RangeInput (id=CPBPPCovWindDeductible_Input) at CoverageInputSet.CPBPPCov.pcf: line 95, column 85
    function visible_62 () : java.lang.Boolean {
      return building.CPBPPCov.hasCovTerm("CPBPPCovWindDeductible")
    }
    
    // 'visible' attribute on RangeInput (id=CPBPPValuationMethod_Input) at CoverageInputSet.CPBPPCov.pcf: line 104, column 83
    function visible_75 () : java.lang.Boolean {
      return building.CPBPPCov.hasCovTerm("CPBPPValuationMethod")
    }
    
    // 'visible' attribute on RangeInput (id=CPBPPCovCauseOfLoss_Input) at CoverageInputSet.CPBPPCov.pcf: line 51, column 81
    function visible_8 () : java.lang.Boolean {
      return building.CPBPPCov.hasCovTerm("CPBPPCovCauseOfLoss")
    }
    
    // 'visible' attribute on RangeInput (id=CPBPPCovCoinsurance_Input) at CoverageInputSet.CPBPPCov.pcf: line 114, column 82
    function visible_88 () : java.lang.Boolean {
      return building.CPBPPCov.hasCovTerm("CPBPPCovCoinsurance")
    }
    
    property get building () : entity.CPBuilding {
      return getVariableValue("building", 0) as entity.CPBuilding
    }
    
    property set building ($arg :  entity.CPBuilding) {
      setVariableValue("building", 0, $arg)
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
    
    function isCoverageAvailable() : boolean {
      return coverable.isCoverageConditionOrExclusionAvailable( coveragePattern )
    }
    
    
  }
  
  
}