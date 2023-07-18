package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CoverageInputSet.CPBldgCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_CPBldgCovExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CoverageInputSet.CPBldgCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.CPBldgCov.pcf: line 48, column 89
    function available_118 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'def' attribute on InputSetRef (id=CPBldgCovLimit) at CoverageInputSet.CPBldgCov.pcf: line 52, column 78
    function def_onEnter_7 (def :  pcf.CovTermDirectInputSet) : void {
      def.onEnter(building.CPBldgCov.CPBldgCovLimitTerm, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=CPBldgCovLimit) at CoverageInputSet.CPBldgCov.pcf: line 52, column 78
    function def_refreshVariables_8 (def :  pcf.CovTermDirectInputSet) : void {
      def.refreshVariables(building.CPBldgCov.CPBldgCovLimitTerm, jobWizardHelper)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovAutoIncrease_Input) at CoverageInputSet.CPBldgCov.pcf: line 138, column 111
    function defaultSetter_108 (__VALUE_TO_SET :  java.lang.Object) : void {
      autoIncreaseValue.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgCovAutoIncreaseType>)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovCauseOfLoss_Input) at CoverageInputSet.CPBldgCov.pcf: line 61, column 83
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgCov.CPBldgCovCauseOfLossTerm.Value = (__VALUE_TO_SET as typekey.CPCauseOfLoss)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgCovExcludeVandalism_Input) at CoverageInputSet.CPBldgCov.pcf: line 71, column 89
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgCov.CPBldgCovExcludeVandalismTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgCovExcludeSprinkler_Input) at CoverageInputSet.CPBldgCov.pcf: line 78, column 89
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgCov.CPBldgCovExcludeSprinklerTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgCovExcludeTheft_Input) at CoverageInputSet.CPBldgCov.pcf: line 85, column 85
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgCov.CPBldgCovExcludeTheftTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 95, column 82
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgCov.CPBldgCovDeductibleTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgCovDeductibleType>)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovWindDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 107, column 87
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgCov.CPBldgCovWindDeductibleTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgCovWindDeductibleType>)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovValuationMethod_Input) at CoverageInputSet.CPBldgCov.pcf: line 116, column 87
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      building.CPBldgCov.CPBldgCovValuationMethodTerm.Value = (__VALUE_TO_SET as typekey.CPValuationMethod)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovCoinsurance_Input) at CoverageInputSet.CPBldgCov.pcf: line 128, column 110
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      coinsuranceTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgCovCoinsuranceType>)
    }
    
    // 'editable' attribute on RangeInput (id=CPBldgCovAutoIncrease_Input) at CoverageInputSet.CPBldgCov.pcf: line 138, column 111
    function editable_103 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(autoIncreaseValue)
    }
    
    // 'editable' attribute on RangeInput (id=CPBldgCovDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 95, column 82
    function editable_49 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(building.CPBldgCov.CPBldgCovDeductibleTerm)
    }
    
    // 'editable' attribute on RangeInput (id=CPBldgCovWindDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 107, column 87
    function editable_63 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(building.CPBldgCov.CPBldgCovWindDeductibleTerm)
    }
    
    // 'editable' attribute on RangeInput (id=CPBldgCovCoinsurance_Input) at CoverageInputSet.CPBldgCov.pcf: line 128, column 110
    function editable_89 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(coinsuranceTerm)
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.CPBldgCov.pcf: line 27, column 33
    function initialValue_0 () : entity.CPBuilding {
      return coverable as CPBuilding
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.CPBldgCov.pcf: line 32, column 59
    function initialValue_1 () : productmodel.OptionCPBldgCovCoinsuranceType {
      return gw.web.line.cp.policy.CoverageInputSet.CPBldgCovUIHelper.getCoinsuranceValue(building, building.CPBldgCov.CPBldgCovValuationMethodTerm.Value)
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.CPBldgCov.pcf: line 37, column 60
    function initialValue_2 () : productmodel.OptionCPBldgCovAutoIncreaseType {
      return gw.web.line.cp.policy.CoverageInputSet.CPBldgCovUIHelper.getAutoIncreaseValue(building, building.CPBldgCov.CPBldgCovValuationMethodTerm.Value)
    }
    
    // 'label' attribute on RangeInput (id=CPBldgCovAutoIncrease_Input) at CoverageInputSet.CPBldgCov.pcf: line 138, column 111
    function label_105 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovAutoIncreaseTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBldgCovCauseOfLoss_Input) at CoverageInputSet.CPBldgCov.pcf: line 61, column 83
    function label_11 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovCauseOfLossTerm.DisplayName
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.CPBldgCov.pcf: line 48, column 89
    function label_119 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'label' attribute on BooleanRadioInput (id=CPBldgCovExcludeVandalism_Input) at CoverageInputSet.CPBldgCov.pcf: line 71, column 89
    function label_23 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovExcludeVandalismTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on BooleanRadioInput (id=CPBldgCovExcludeSprinkler_Input) at CoverageInputSet.CPBldgCov.pcf: line 78, column 89
    function label_32 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovExcludeSprinklerTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on BooleanRadioInput (id=CPBldgCovExcludeTheft_Input) at CoverageInputSet.CPBldgCov.pcf: line 85, column 85
    function label_41 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovExcludeTheftTerm.Pattern.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBldgCovDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 95, column 82
    function label_51 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovDeductibleTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBldgCovWindDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 107, column 87
    function label_65 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovWindDeductibleTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBldgCovValuationMethod_Input) at CoverageInputSet.CPBldgCov.pcf: line 116, column 87
    function label_78 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovValuationMethodTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBldgCovCoinsurance_Input) at CoverageInputSet.CPBldgCov.pcf: line 128, column 110
    function label_91 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovCoinsuranceTerm.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at CoverageInputSet.CPBldgCov.pcf: line 63, column 56
    function onChange_9 () : void {
      building.createOrSyncCoverages()
    }
    
    // 'required' attribute on RangeInput (id=CPBldgCovAutoIncrease_Input) at CoverageInputSet.CPBldgCov.pcf: line 138, column 111
    function required_106 () : java.lang.Boolean {
      return building.CPBldgCov.CPBldgCovAutoIncreaseTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBldgCovCauseOfLoss_Input) at CoverageInputSet.CPBldgCov.pcf: line 61, column 83
    function required_12 () : java.lang.Boolean {
      return building.CPBldgCov.CPBldgCovCauseOfLossTerm.Pattern.Required
    }
    
    // 'required' attribute on BooleanRadioInput (id=CPBldgCovExcludeVandalism_Input) at CoverageInputSet.CPBldgCov.pcf: line 71, column 89
    function required_24 () : java.lang.Boolean {
      return building.CPBldgCov.CPBldgCovExcludeVandalismTerm.Pattern.Required
    }
    
    // 'required' attribute on BooleanRadioInput (id=CPBldgCovExcludeSprinkler_Input) at CoverageInputSet.CPBldgCov.pcf: line 78, column 89
    function required_33 () : java.lang.Boolean {
      return building.CPBldgCov.CPBldgCovExcludeSprinklerTerm.Pattern.Required
    }
    
    // 'required' attribute on BooleanRadioInput (id=CPBldgCovExcludeTheft_Input) at CoverageInputSet.CPBldgCov.pcf: line 85, column 85
    function required_42 () : java.lang.Boolean {
      return building.CPBldgCov.CPBldgCovExcludeTheftTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBldgCovDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 95, column 82
    function required_52 () : java.lang.Boolean {
      return building.CPBldgCov.CPBldgCovDeductibleTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBldgCovWindDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 107, column 87
    function required_66 () : java.lang.Boolean {
      return building.CPBldgCov.CPBldgCovWindDeductibleTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBldgCovValuationMethod_Input) at CoverageInputSet.CPBldgCov.pcf: line 116, column 87
    function required_79 () : java.lang.Boolean {
      return building.CPBldgCov.CPBldgCovValuationMethodTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBldgCovCoinsurance_Input) at CoverageInputSet.CPBldgCov.pcf: line 128, column 110
    function required_92 () : java.lang.Boolean {
      return building.CPBldgCov.CPBldgCovCoinsuranceTerm.Pattern.Required
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.CPBldgCov.pcf: line 48, column 89
    function setter_120 (VALUE :  java.lang.Boolean) : void {
      building.setCoverageConditionOrExclusionExists(coveragePattern, VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovAutoIncrease_Input) at CoverageInputSet.CPBldgCov.pcf: line 138, column 111
    function valueRange_110 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(autoIncreaseValue, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovCauseOfLoss_Input) at CoverageInputSet.CPBldgCov.pcf: line 61, column 83
    function valueRange_16 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovCauseOfLossTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 95, column 82
    function valueRange_56 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBldgCov.CPBldgCovDeductibleTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovWindDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 107, column 87
    function valueRange_70 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBldgCov.CPBldgCovWindDeductibleTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovValuationMethod_Input) at CoverageInputSet.CPBldgCov.pcf: line 116, column 87
    function valueRange_83 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovValuationMethodTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovCoinsurance_Input) at CoverageInputSet.CPBldgCov.pcf: line 128, column 110
    function valueRange_96 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(coinsuranceTerm, openForEdit)
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovAutoIncrease_Input) at CoverageInputSet.CPBldgCov.pcf: line 138, column 111
    function valueRoot_109 () : java.lang.Object {
      return autoIncreaseValue
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovCauseOfLoss_Input) at CoverageInputSet.CPBldgCov.pcf: line 61, column 83
    function valueRoot_15 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovCauseOfLossTerm
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgCovExcludeVandalism_Input) at CoverageInputSet.CPBldgCov.pcf: line 71, column 89
    function valueRoot_27 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovExcludeVandalismTerm
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgCovExcludeSprinkler_Input) at CoverageInputSet.CPBldgCov.pcf: line 78, column 89
    function valueRoot_36 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovExcludeSprinklerTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.CPBldgCov.pcf: line 41, column 37
    function valueRoot_4 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgCovExcludeTheft_Input) at CoverageInputSet.CPBldgCov.pcf: line 85, column 85
    function valueRoot_45 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovExcludeTheftTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 95, column 82
    function valueRoot_55 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovDeductibleTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovWindDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 107, column 87
    function valueRoot_69 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovWindDeductibleTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovValuationMethod_Input) at CoverageInputSet.CPBldgCov.pcf: line 116, column 87
    function valueRoot_82 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovValuationMethodTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovCoinsurance_Input) at CoverageInputSet.CPBldgCov.pcf: line 128, column 110
    function valueRoot_95 () : java.lang.Object {
      return coinsuranceTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovAutoIncrease_Input) at CoverageInputSet.CPBldgCov.pcf: line 138, column 111
    function value_107 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgCovAutoIncreaseType> {
      return autoIncreaseValue.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovCauseOfLoss_Input) at CoverageInputSet.CPBldgCov.pcf: line 61, column 83
    function value_13 () : typekey.CPCauseOfLoss {
      return building.CPBldgCov.CPBldgCovCauseOfLossTerm.Value
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgCovExcludeVandalism_Input) at CoverageInputSet.CPBldgCov.pcf: line 71, column 89
    function value_25 () : java.lang.Boolean {
      return building.CPBldgCov.CPBldgCovExcludeVandalismTerm.Value
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.CPBldgCov.pcf: line 41, column 37
    function value_3 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgCovExcludeSprinkler_Input) at CoverageInputSet.CPBldgCov.pcf: line 78, column 89
    function value_34 () : java.lang.Boolean {
      return building.CPBldgCov.CPBldgCovExcludeSprinklerTerm.Value
    }
    
    // 'value' attribute on BooleanRadioInput (id=CPBldgCovExcludeTheft_Input) at CoverageInputSet.CPBldgCov.pcf: line 85, column 85
    function value_43 () : java.lang.Boolean {
      return building.CPBldgCov.CPBldgCovExcludeTheftTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 95, column 82
    function value_53 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgCovDeductibleType> {
      return building.CPBldgCov.CPBldgCovDeductibleTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovWindDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 107, column 87
    function value_67 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgCovWindDeductibleType> {
      return building.CPBldgCov.CPBldgCovWindDeductibleTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovValuationMethod_Input) at CoverageInputSet.CPBldgCov.pcf: line 116, column 87
    function value_80 () : typekey.CPValuationMethod {
      return building.CPBldgCov.CPBldgCovValuationMethodTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=CPBldgCovCoinsurance_Input) at CoverageInputSet.CPBldgCov.pcf: line 128, column 110
    function value_93 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgCovCoinsuranceType> {
      return coinsuranceTerm.OptionValue
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovAutoIncrease_Input) at CoverageInputSet.CPBldgCov.pcf: line 138, column 111
    function verifyValueRangeIsAllowedType_111 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgCovAutoIncreaseType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovAutoIncrease_Input) at CoverageInputSet.CPBldgCov.pcf: line 138, column 111
    function verifyValueRangeIsAllowedType_111 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovCauseOfLoss_Input) at CoverageInputSet.CPBldgCov.pcf: line 61, column 83
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovCauseOfLoss_Input) at CoverageInputSet.CPBldgCov.pcf: line 61, column 83
    function verifyValueRangeIsAllowedType_17 ($$arg :  typekey.CPCauseOfLoss[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 95, column 82
    function verifyValueRangeIsAllowedType_57 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgCovDeductibleType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 95, column 82
    function verifyValueRangeIsAllowedType_57 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovWindDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 107, column 87
    function verifyValueRangeIsAllowedType_71 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgCovWindDeductibleType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovWindDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 107, column 87
    function verifyValueRangeIsAllowedType_71 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovValuationMethod_Input) at CoverageInputSet.CPBldgCov.pcf: line 116, column 87
    function verifyValueRangeIsAllowedType_84 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovValuationMethod_Input) at CoverageInputSet.CPBldgCov.pcf: line 116, column 87
    function verifyValueRangeIsAllowedType_84 ($$arg :  typekey.CPValuationMethod[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovCoinsurance_Input) at CoverageInputSet.CPBldgCov.pcf: line 128, column 110
    function verifyValueRangeIsAllowedType_97 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBldgCovCoinsuranceType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovCoinsurance_Input) at CoverageInputSet.CPBldgCov.pcf: line 128, column 110
    function verifyValueRangeIsAllowedType_97 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovAutoIncrease_Input) at CoverageInputSet.CPBldgCov.pcf: line 138, column 111
    function verifyValueRange_112 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(autoIncreaseValue, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_111(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovCauseOfLoss_Input) at CoverageInputSet.CPBldgCov.pcf: line 61, column 83
    function verifyValueRange_18 () : void {
      var __valueRangeArg = building.CPBldgCov.CPBldgCovCauseOfLossTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 95, column 82
    function verifyValueRange_58 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBldgCov.CPBldgCovDeductibleTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_57(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovWindDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 107, column 87
    function verifyValueRange_72 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(building.CPBldgCov.CPBldgCovWindDeductibleTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_71(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovValuationMethod_Input) at CoverageInputSet.CPBldgCov.pcf: line 116, column 87
    function verifyValueRange_85 () : void {
      var __valueRangeArg = building.CPBldgCov.CPBldgCovValuationMethodTerm?.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_84(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBldgCovCoinsurance_Input) at CoverageInputSet.CPBldgCov.pcf: line 128, column 110
    function verifyValueRange_98 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(coinsuranceTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_97(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=CPBldgCovCauseOfLoss_Input) at CoverageInputSet.CPBldgCov.pcf: line 61, column 83
    function visible_10 () : java.lang.Boolean {
      return building.CPBldgCov.hasCovTerm("CPBldgCovCauseOfLoss")
    }
    
    // 'visible' attribute on RangeInput (id=CPBldgCovAutoIncrease_Input) at CoverageInputSet.CPBldgCov.pcf: line 138, column 111
    function visible_104 () : java.lang.Boolean {
      return gw.web.line.cp.policy.CoverageInputSet.CPBldgCovUIHelper.isAutoIncreaseAvailable(building)
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.CPBldgCov.pcf: line 48, column 89
    function visible_117 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on InputDivider at CoverageInputSet.CPBldgCov.pcf: line 142, column 100
    function visible_123 () : java.lang.Boolean {
      return openForEdit or coverable.getCoverageConditionOrExclusion(coveragePattern) != null
    }
    
    // 'visible' attribute on InputSet (id=CoverageInputSet) at CoverageInputSet.CPBldgCov.pcf: line 10, column 120
    function visible_124 () : java.lang.Boolean {
      return gw.web.line.cp.policy.CoverageInputSet.CPBldgCovUIHelper.isCoverageAvailable(coverable, coveragePattern)
    }
    
    // 'visible' attribute on BooleanRadioInput (id=CPBldgCovExcludeVandalism_Input) at CoverageInputSet.CPBldgCov.pcf: line 71, column 89
    function visible_22 () : java.lang.Boolean {
      return building.CPBldgCov.hasCovTerm("CPBldgCovExcludeVandalism")
    }
    
    // 'visible' attribute on BooleanRadioInput (id=CPBldgCovExcludeSprinkler_Input) at CoverageInputSet.CPBldgCov.pcf: line 78, column 89
    function visible_31 () : java.lang.Boolean {
      return building.CPBldgCov.hasCovTerm("CPBldgCovExcludeSprinkler")
    }
    
    // 'visible' attribute on BooleanRadioInput (id=CPBldgCovExcludeTheft_Input) at CoverageInputSet.CPBldgCov.pcf: line 85, column 85
    function visible_40 () : java.lang.Boolean {
      return building.CPBldgCov.hasCovTerm("CPBldgCovExcludeTheft")
    }
    
    // 'visible' attribute on RangeInput (id=CPBldgCovDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 95, column 82
    function visible_50 () : java.lang.Boolean {
      return building.CPBldgCov.hasCovTerm("CPBldgCovDeductible")
    }
    
    // 'visible' attribute on InputSetRef (id=CPBldgCovLimit) at CoverageInputSet.CPBldgCov.pcf: line 52, column 78
    function visible_6 () : java.lang.Boolean {
      return building.CPBldgCov.hasCovTerm("CPBldgCovLimit")
    }
    
    // 'visible' attribute on RangeInput (id=CPBldgCovWindDeductible_Input) at CoverageInputSet.CPBldgCov.pcf: line 107, column 87
    function visible_64 () : java.lang.Boolean {
      return building.CPBldgCov.hasCovTerm("CPBldgCovWindDeductible")
    }
    
    // 'visible' attribute on RangeInput (id=CPBldgCovValuationMethod_Input) at CoverageInputSet.CPBldgCov.pcf: line 116, column 87
    function visible_77 () : java.lang.Boolean {
      return building.CPBldgCov.hasCovTerm("CPBldgCovValuationMethod")
    }
    
    // 'visible' attribute on RangeInput (id=CPBldgCovCoinsurance_Input) at CoverageInputSet.CPBldgCov.pcf: line 128, column 110
    function visible_90 () : java.lang.Boolean {
      return gw.web.line.cp.policy.CoverageInputSet.CPBldgCovUIHelper.isCoinsuranceAvailable(building)
    }
    
    property get autoIncreaseValue () : productmodel.OptionCPBldgCovAutoIncreaseType {
      return getVariableValue("autoIncreaseValue", 0) as productmodel.OptionCPBldgCovAutoIncreaseType
    }
    
    property set autoIncreaseValue ($arg :  productmodel.OptionCPBldgCovAutoIncreaseType) {
      setVariableValue("autoIncreaseValue", 0, $arg)
    }
    
    property get building () : entity.CPBuilding {
      return getVariableValue("building", 0) as entity.CPBuilding
    }
    
    property set building ($arg :  entity.CPBuilding) {
      setVariableValue("building", 0, $arg)
    }
    
    property get coinsuranceTerm () : productmodel.OptionCPBldgCovCoinsuranceType {
      return getVariableValue("coinsuranceTerm", 0) as productmodel.OptionCPBldgCovCoinsuranceType
    }
    
    property set coinsuranceTerm ($arg :  productmodel.OptionCPBldgCovCoinsuranceType) {
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
    
    
  }
  
  
}