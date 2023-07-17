package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CoverageInputSet.CPBldgStockCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_CPBldgStockCovExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CoverageInputSet.CPBldgStockCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.CPBldgStockCov.pcf: line 43, column 89
    function available_115 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'def' attribute on InputSetRef (id=CPBldgStockCovLimit) at CoverageInputSet.CPBldgStockCov.pcf: line 47, column 79
    function def_onEnter_6 (def :  pcf.CovTermDirectInputSet) : void {
      def.onEnter(building.CPBldgStockCov.CPBldgStockCovLimitTerm, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=CPBldgStockCovLimit) at CoverageInputSet.CPBldgStockCov.pcf: line 47, column 79
    function def_refreshVariables_7 (def :  pcf.CovTermDirectInputSet) : void {
      def.refreshVariables(building.CPBldgStockCov.CPBldgStockCovLimitTerm, jobWizardHelper)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovReportingForm_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 128, column 87
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgStockCov.CPBldgStockCovReportingFormTerm.Value = (__VALUE_TO_SET as typekey.CPReportingForm)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovCauseOfLoss_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 56, column 84
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgStockCov.CPBldgStockCovCauseOfLossTerm.Value = (__VALUE_TO_SET as typekey.CPCauseOfLoss)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeVandalism_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 66, column 90
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgStockCov.CPBldgStockCovExcludeVandalismTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeSprinkler_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 73, column 90
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgStockCov.CPBldgStockCovExcludeSprinklerTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeTheft_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 80, column 86
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgStockCov.CPBldgStockCovExcludeTheftTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 90, column 84
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgStockCov.CPBldgStockCovDeductibleTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgStockCovDeductibleType>)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovWindDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 100, column 88
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgStockCov.CPBldgStockCovWindDeductibleTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgStockCovWindDeductibleType>)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovValuationMethod_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 109, column 89
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgStockCov.CPBldgStockCovValuationMethodTerm.Value = (__VALUE_TO_SET as typekey.CPValuationMethod)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovCoinsurance_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 119, column 85
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgStockCov.CPBldgStockCovCoinsuranceTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgStockCovCoinsuranceType>)
    }
    
    // 'editable' attribute on RangeInput (id=CPBldgStockCovDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 90, column 84
    function editable_48 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(building.CPBldgStockCov.CPBldgStockCovDeductibleTerm)
    }
    
    // 'editable' attribute on RangeInput (id=CPBldgStockCovWindDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 100, column 88
    function editable_62 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(building.CPBldgStockCov.CPBldgStockCovWindDeductibleTerm)
    }
    
    // 'editable' attribute on RangeInput (id=CPBldgStockCovCoinsurance_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 119, column 85
    function editable_88 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(building.CPBldgStockCov.CPBldgStockCovCoinsuranceTerm)
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.CPBldgStockCov.pcf: line 27, column 33
    function initialValue_0 () : entity.CPBuilding {
      return coverable as CPBuilding
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.CPBldgStockCov.pcf: line 32, column 43
    function initialValue_1 () : productmodel.CPBldgStockCov {
      return (coverable as CPBuilding).CPBldgStockCov
    }
    
    // 'label' attribute on RangeInput (id=CPBldgStockCovCauseOfLoss_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 56, column 84
    function label_10 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovCauseOfLossTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBldgStockCovReportingForm_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 128, column 87
    function label_103 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovReportingFormTerm.DisplayName
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.CPBldgStockCov.pcf: line 43, column 89
    function label_116 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'label' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeVandalism_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 66, column 90
    function label_22 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovExcludeVandalismTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeSprinkler_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 73, column 90
    function label_31 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovExcludeSprinklerTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeTheft_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 80, column 86
    function label_40 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovExcludeTheftTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBldgStockCovDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 90, column 84
    function label_50 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovDeductibleTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBldgStockCovWindDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 100, column 88
    function label_64 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovWindDeductibleTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBldgStockCovValuationMethod_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 109, column 89
    function label_77 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovValuationMethodTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBldgStockCovCoinsurance_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 119, column 85
    function label_90 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovCoinsuranceTerm.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at CoverageInputSet.CPBldgStockCov.pcf: line 58, column 56
    function onChange_8 () : void {
      building.createOrSyncCoverages()
    }
    
    // 'required' attribute on RangeInput (id=CPBldgStockCovReportingForm_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 128, column 87
    function required_104 () : java.lang.Boolean {
      return building.CPBldgStockCov.CPBldgStockCovReportingFormTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBldgStockCovCauseOfLoss_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 56, column 84
    function required_11 () : java.lang.Boolean {
      return building.CPBldgStockCov.CPBldgStockCovCauseOfLossTerm.Pattern.Required
    }
    
    // 'required' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeVandalism_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 66, column 90
    function required_23 () : java.lang.Boolean {
      return building.CPBldgStockCov.CPBldgStockCovExcludeVandalismTerm.Pattern.Required
    }
    
    // 'required' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeSprinkler_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 73, column 90
    function required_32 () : java.lang.Boolean {
      return building.CPBldgStockCov.CPBldgStockCovExcludeSprinklerTerm.Pattern.Required
    }
    
    // 'required' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeTheft_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 80, column 86
    function required_41 () : java.lang.Boolean {
      return building.CPBldgStockCov.CPBldgStockCovExcludeTheftTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBldgStockCovDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 90, column 84
    function required_51 () : java.lang.Boolean {
      return building.CPBldgStockCov.CPBldgStockCovDeductibleTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBldgStockCovWindDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 100, column 88
    function required_65 () : java.lang.Boolean {
      return building.CPBldgStockCov.CPBldgStockCovWindDeductibleTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBldgStockCovValuationMethod_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 109, column 89
    function required_78 () : java.lang.Boolean {
      return building.CPBldgStockCov.CPBldgStockCovValuationMethodTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBldgStockCovCoinsurance_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 119, column 85
    function required_91 () : java.lang.Boolean {
      return building.CPBldgStockCov.CPBldgStockCovCoinsuranceTerm.Pattern.Required
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.CPBldgStockCov.pcf: line 43, column 89
    function setter_117 (VALUE :  java.lang.Boolean) : void {
      building.setCoverageConditionOrExclusionExists(coveragePattern, VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovReportingForm_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 128, column 87
    function valueRange_108 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovReportingFormTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovCauseOfLoss_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 56, column 84
    function valueRange_15 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovCauseOfLossTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 90, column 84
    function valueRange_55 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBldgStockCov.CPBldgStockCovDeductibleTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovWindDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 100, column 88
    function valueRange_69 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBldgStockCov.CPBldgStockCovWindDeductibleTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovValuationMethod_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 109, column 89
    function valueRange_82 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovValuationMethodTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovCoinsurance_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 119, column 85
    function valueRange_95 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBldgStockCov.CPBldgStockCovCoinsuranceTerm, openForEdit)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovReportingForm_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 128, column 87
    function valueRoot_107 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovReportingFormTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovCauseOfLoss_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 56, column 84
    function valueRoot_14 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovCauseOfLossTerm
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeVandalism_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 66, column 90
    function valueRoot_26 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovExcludeVandalismTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 36, column 37
    function valueRoot_3 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeSprinkler_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 73, column 90
    function valueRoot_35 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovExcludeSprinklerTerm
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeTheft_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 80, column 86
    function valueRoot_44 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovExcludeTheftTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 90, column 84
    function valueRoot_54 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovDeductibleTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovWindDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 100, column 88
    function valueRoot_68 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovWindDeductibleTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovValuationMethod_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 109, column 89
    function valueRoot_81 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovValuationMethodTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovCoinsurance_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 119, column 85
    function valueRoot_94 () : java.lang.Object {
      return building.CPBldgStockCov.CPBldgStockCovCoinsuranceTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovReportingForm_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 128, column 87
    function value_105 () : typekey.CPReportingForm {
      return building.CPBldgStockCov.CPBldgStockCovReportingFormTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovCauseOfLoss_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 56, column 84
    function value_12 () : typekey.CPCauseOfLoss {
      return building.CPBldgStockCov.CPBldgStockCovCauseOfLossTerm.Value
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 36, column 37
    function value_2 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeVandalism_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 66, column 90
    function value_24 () : java.lang.Boolean {
      return building.CPBldgStockCov.CPBldgStockCovExcludeVandalismTerm.Value
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeSprinkler_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 73, column 90
    function value_33 () : java.lang.Boolean {
      return building.CPBldgStockCov.CPBldgStockCovExcludeSprinklerTerm.Value
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeTheft_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 80, column 86
    function value_42 () : java.lang.Boolean {
      return building.CPBldgStockCov.CPBldgStockCovExcludeTheftTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 90, column 84
    function value_52 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgStockCovDeductibleType> {
      return building.CPBldgStockCov.CPBldgStockCovDeductibleTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovWindDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 100, column 88
    function value_66 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgStockCovWindDeductibleType> {
      return building.CPBldgStockCov.CPBldgStockCovWindDeductibleTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovValuationMethod_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 109, column 89
    function value_79 () : typekey.CPValuationMethod {
      return building.CPBldgStockCov.CPBldgStockCovValuationMethodTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=CPBldgStockCovCoinsurance_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 119, column 85
    function value_92 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgStockCovCoinsuranceType> {
      return building.CPBldgStockCov.CPBldgStockCovCoinsuranceTerm.OptionValue
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovReportingForm_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 128, column 87
    function verifyValueRangeIsAllowedType_109 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovReportingForm_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 128, column 87
    function verifyValueRangeIsAllowedType_109 ($$arg :  typekey.CPReportingForm[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovCauseOfLoss_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 56, column 84
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovCauseOfLoss_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 56, column 84
    function verifyValueRangeIsAllowedType_16 ($$arg :  typekey.CPCauseOfLoss[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 90, column 84
    function verifyValueRangeIsAllowedType_56 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgStockCovDeductibleType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 90, column 84
    function verifyValueRangeIsAllowedType_56 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovWindDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 100, column 88
    function verifyValueRangeIsAllowedType_70 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgStockCovWindDeductibleType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovWindDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 100, column 88
    function verifyValueRangeIsAllowedType_70 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovValuationMethod_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 109, column 89
    function verifyValueRangeIsAllowedType_83 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovValuationMethod_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 109, column 89
    function verifyValueRangeIsAllowedType_83 ($$arg :  typekey.CPValuationMethod[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovCoinsurance_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 119, column 85
    function verifyValueRangeIsAllowedType_96 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgStockCovCoinsuranceType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovCoinsurance_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 119, column 85
    function verifyValueRangeIsAllowedType_96 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovReportingForm_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 128, column 87
    function verifyValueRange_110 () : void {
      var __valueRangeArg = building.CPBldgStockCov.CPBldgStockCovReportingFormTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_109(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovCauseOfLoss_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 56, column 84
    function verifyValueRange_17 () : void {
      var __valueRangeArg = building.CPBldgStockCov.CPBldgStockCovCauseOfLossTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 90, column 84
    function verifyValueRange_57 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBldgStockCov.CPBldgStockCovDeductibleTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_56(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovWindDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 100, column 88
    function verifyValueRange_71 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBldgStockCov.CPBldgStockCovWindDeductibleTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_70(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovValuationMethod_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 109, column 89
    function verifyValueRange_84 () : void {
      var __valueRangeArg = building.CPBldgStockCov.CPBldgStockCovValuationMethodTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_83(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgStockCovCoinsurance_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 119, column 85
    function verifyValueRange_97 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBldgStockCov.CPBldgStockCovCoinsuranceTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_96(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=CPBldgStockCovReportingForm_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 128, column 87
    function visible_102 () : java.lang.Boolean {
      return cpBldgStockCov.hasCovTerm("CPBldgStockCovReportingForm")
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.CPBldgStockCov.pcf: line 43, column 89
    function visible_114 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on InputDivider at CoverageInputSet.CPBldgStockCov.pcf: line 131, column 100
    function visible_120 () : java.lang.Boolean {
      return openForEdit or coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on InputSet (id=CoverageInputSet) at CoverageInputSet.CPBldgStockCov.pcf: line 10, column 37
    function visible_121 () : java.lang.Boolean {
      return isCoverageAvailable()
    }
    
    // 'visible' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeVandalism_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 66, column 90
    function visible_21 () : java.lang.Boolean {
      return cpBldgStockCov.hasCovTerm("CPBldgStockCovExcludeVandalism")
    }
    
    // 'visible' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeSprinkler_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 73, column 90
    function visible_30 () : java.lang.Boolean {
      return cpBldgStockCov.hasCovTerm("CPBldgStockCovExcludeSprinkler")
    }
    
    // 'visible' attribute on BooleanRadioInput (id=CPBldgStockCovExcludeTheft_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 80, column 86
    function visible_39 () : java.lang.Boolean {
      return cpBldgStockCov.hasCovTerm("CPBldgStockCovExcludeTheft")
    }
    
    // 'visible' attribute on RangeInput (id=CPBldgStockCovDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 90, column 84
    function visible_49 () : java.lang.Boolean {
      return cpBldgStockCov.hasCovTerm("CPBldgStockCovDeductible")
    }
    
    // 'visible' attribute on InputSetRef (id=CPBldgStockCovLimit) at CoverageInputSet.CPBldgStockCov.pcf: line 47, column 79
    function visible_5 () : java.lang.Boolean {
      return cpBldgStockCov.hasCovTerm("CPBldgStockCovLimit")
    }
    
    // 'visible' attribute on RangeInput (id=CPBldgStockCovWindDeductible_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 100, column 88
    function visible_63 () : java.lang.Boolean {
      return cpBldgStockCov.hasCovTerm("CPBldgStockCovWindDeductible")
    }
    
    // 'visible' attribute on RangeInput (id=CPBldgStockCovValuationMethod_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 109, column 89
    function visible_76 () : java.lang.Boolean {
      return cpBldgStockCov.hasCovTerm("CPBldgStockCovValuationMethod")
    }
    
    // 'visible' attribute on RangeInput (id=CPBldgStockCovCoinsurance_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 119, column 85
    function visible_89 () : java.lang.Boolean {
      return cpBldgStockCov.hasCovTerm("CPBldgStockCovCoinsurance")
    }
    
    // 'visible' attribute on RangeInput (id=CPBldgStockCovCauseOfLoss_Input) at CoverageInputSet.CPBldgStockCov.pcf: line 56, column 84
    function visible_9 () : java.lang.Boolean {
      return cpBldgStockCov.hasCovTerm("CPBldgStockCovCauseOfLoss")
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
    
    property get cpBldgStockCov () : productmodel.CPBldgStockCov {
      return getVariableValue("cpBldgStockCov", 0) as productmodel.CPBldgStockCov
    }
    
    property set cpBldgStockCov ($arg :  productmodel.CPBldgStockCov) {
      setVariableValue("cpBldgStockCov", 0, $arg)
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