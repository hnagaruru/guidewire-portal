package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/CoverageInputSet.HOPCovC.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_HOPCovCExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/CoverageInputSet.HOPCovC.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovC.pcf: line 41, column 90
    function available_93 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 50, column 56
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovC.HOPCovCLimitTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCLimitType>)
    }
    
    // 'value' attribute on TextInput (id=HOPCovCDirectLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 65, column 62
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovC.HOPCovCDirectLimitTerm.Value = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCCauseOfLoss_Input) at CoverageInputSet.HOPCovC.pcf: line 78, column 62
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovC.HOPCovCCauseOfLossTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCCauseOfLossType>)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCValuationMethod_Input) at CoverageInputSet.HOPCovC.pcf: line 89, column 60
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovC.HOPCovCValuationTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCValuationType>)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCSelfStorageUnits_Input) at CoverageInputSet.HOPCovC.pcf: line 101, column 67
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovC.HOPCovCSelfStorageUnitsTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCSelfStorageUnitsType>)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCOtherResidence_Input) at CoverageInputSet.HOPCovC.pcf: line 112, column 65
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwelling.HOPCovC.HOPCovCOtherResidenceTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCOtherResidenceType>)
    }
    
    // 'editable' attribute on TextInput (id=HOPCovCDirectLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 65, column 62
    function editable_21 () : java.lang.Boolean {
      return openForEdit and coveragePart.CoveragePartType != CoveragePartType.TC_HOPDWELLING
    }
    
    // 'editable' attribute on RangeInput (id=HOPCovCCauseOfLoss_Input) at CoverageInputSet.HOPCovC.pcf: line 78, column 62
    function editable_36 () : java.lang.Boolean {
      return openForEdit and coveragePart.CoveragePartType != CoveragePartType.TC_HOPDWELLING and gw.web.productmodel.ChoiceCovTermUtil.isEditable(dwelling.HOPCovC.HOPCovCCauseOfLossTerm)
    }
    
    // 'editable' attribute on RangeInput (id=HOPCovCValuationMethod_Input) at CoverageInputSet.HOPCovC.pcf: line 89, column 60
    function editable_50 () : java.lang.Boolean {
      return openForEdit and dwelling.CoverageForm != HOPCoverageForm.TC_HO2 and gw.web.productmodel.ChoiceCovTermUtil.isEditable(dwelling.HOPCovC.HOPCovCValuationTerm)
    }
    
    // 'editable' attribute on RangeInput (id=HOPCovCLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 50, column 56
    function editable_6 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(dwelling.HOPCovC.HOPCovCLimitTerm)
    }
    
    // 'editable' attribute on RangeInput (id=HOPCovCSelfStorageUnits_Input) at CoverageInputSet.HOPCovC.pcf: line 101, column 67
    function editable_64 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(dwelling.HOPCovC.HOPCovCSelfStorageUnitsTerm)
    }
    
    // 'editable' attribute on RangeInput (id=HOPCovCOtherResidence_Input) at CoverageInputSet.HOPCovC.pcf: line 112, column 65
    function editable_78 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(dwelling.HOPCovC.HOPCovCOtherResidenceTerm)
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.HOPCovC.pcf: line 23, column 27
    function initialValue_0 () : HOPDwelling {
      return coverable as HOPDwelling
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.HOPCovC.pcf: line 27, column 31
    function initialValue_1 () : HOPCoveragePart {
      return dwelling.HOPCoveragePart
    }
    
    // 'inputConversion' attribute on TextInput (id=HOPCovCDirectLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 65, column 62
    function inputConversion_25 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertFromString(VALUE)
    }
    
    // 'label' attribute on TextInput (id=HOPCovCDirectLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 65, column 62
    function label_24 () : java.lang.Object {
      return dwelling.HOPCovC.HOPCovCDirectLimitTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=HOPCovCCauseOfLoss_Input) at CoverageInputSet.HOPCovC.pcf: line 78, column 62
    function label_38 () : java.lang.Object {
      return dwelling.HOPCovC.HOPCovCCauseOfLossTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=HOPCovCValuationMethod_Input) at CoverageInputSet.HOPCovC.pcf: line 89, column 60
    function label_52 () : java.lang.Object {
      return dwelling.HOPCovC.HOPCovCValuationTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=HOPCovCSelfStorageUnits_Input) at CoverageInputSet.HOPCovC.pcf: line 101, column 67
    function label_66 () : java.lang.Object {
      return dwelling.HOPCovC.HOPCovCSelfStorageUnitsTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=HOPCovCLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 50, column 56
    function label_8 () : java.lang.Object {
      return dwelling.HOPCovC.HOPCovCLimitTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=HOPCovCOtherResidence_Input) at CoverageInputSet.HOPCovC.pcf: line 112, column 65
    function label_80 () : java.lang.Object {
      return dwelling.HOPCovC.HOPCovCOtherResidenceTerm.DisplayName
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovC.pcf: line 41, column 90
    function label_94 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'onChange' attribute on PostOnChange at CoverageInputSet.HOPCovC.pcf: line 68, column 83
    function onChange_20 () : void {
      HOPCoverageInputSetHelper.onCovCDirectLimitChange(dwelling)
    }
    
    // 'onChange' attribute on PostOnChange at CoverageInputSet.HOPCovC.pcf: line 53, column 77
    function onChange_5 () : void {
      HOPCoverageInputSetHelper.onCovCLimitChange(dwelling)
    }
    
    // 'outputConversion' attribute on TextInput (id=HOPCovCDirectLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 65, column 62
    function outputConversion_26 (VALUE :  java.math.BigDecimal) : java.lang.String {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertToString(VALUE)
    }
    
    // 'required' attribute on TextInput (id=HOPCovCDirectLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 65, column 62
    function required_27 () : java.lang.Boolean {
      return dwelling.HOPCovC.HOPCovCDirectLimitTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=HOPCovCCauseOfLoss_Input) at CoverageInputSet.HOPCovC.pcf: line 78, column 62
    function required_39 () : java.lang.Boolean {
      return dwelling.HOPCovC.HOPCovCCauseOfLossTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=HOPCovCValuationMethod_Input) at CoverageInputSet.HOPCovC.pcf: line 89, column 60
    function required_53 () : java.lang.Boolean {
      return dwelling.HOPCovC.HOPCovCValuationTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=HOPCovCSelfStorageUnits_Input) at CoverageInputSet.HOPCovC.pcf: line 101, column 67
    function required_67 () : java.lang.Boolean {
      return dwelling.HOPCovC.HOPCovCSelfStorageUnitsTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=HOPCovCOtherResidence_Input) at CoverageInputSet.HOPCovC.pcf: line 112, column 65
    function required_81 () : java.lang.Boolean {
      return dwelling.HOPCovC.HOPCovCOtherResidenceTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=HOPCovCLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 50, column 56
    function required_9 () : java.lang.Boolean {
      return dwelling.HOPCovC.HOPCovCLimitTerm.Pattern.Required
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovC.pcf: line 41, column 90
    function setter_95 (VALUE :  java.lang.Boolean) : void {
      coverable.setCoverageConditionOrExclusionExists(coveragePattern, VALUE)
    }
    
    // 'validationExpression' attribute on TextInput (id=HOPCovCDirectLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 65, column 62
    function validationExpression_22 () : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.validate(dwelling.HOPCovC.HOPCovCDirectLimitTerm)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 50, column 56
    function valueRange_13 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovC.HOPCovCLimitTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCCauseOfLoss_Input) at CoverageInputSet.HOPCovC.pcf: line 78, column 62
    function valueRange_43 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovC.HOPCovCCauseOfLossTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCValuationMethod_Input) at CoverageInputSet.HOPCovC.pcf: line 89, column 60
    function valueRange_57 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovC.HOPCovCValuationTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCSelfStorageUnits_Input) at CoverageInputSet.HOPCovC.pcf: line 101, column 67
    function valueRange_71 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovC.HOPCovCSelfStorageUnitsTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCOtherResidence_Input) at CoverageInputSet.HOPCovC.pcf: line 112, column 65
    function valueRange_85 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovC.HOPCovCOtherResidenceTerm, openForEdit)
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 50, column 56
    function valueRoot_12 () : java.lang.Object {
      return dwelling.HOPCovC.HOPCovCLimitTerm
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.HOPCovC.pcf: line 34, column 37
    function valueRoot_3 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on TextInput (id=HOPCovCDirectLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 65, column 62
    function valueRoot_30 () : java.lang.Object {
      return dwelling.HOPCovC.HOPCovCDirectLimitTerm
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCCauseOfLoss_Input) at CoverageInputSet.HOPCovC.pcf: line 78, column 62
    function valueRoot_42 () : java.lang.Object {
      return dwelling.HOPCovC.HOPCovCCauseOfLossTerm
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCValuationMethod_Input) at CoverageInputSet.HOPCovC.pcf: line 89, column 60
    function valueRoot_56 () : java.lang.Object {
      return dwelling.HOPCovC.HOPCovCValuationTerm
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCSelfStorageUnits_Input) at CoverageInputSet.HOPCovC.pcf: line 101, column 67
    function valueRoot_70 () : java.lang.Object {
      return dwelling.HOPCovC.HOPCovCSelfStorageUnitsTerm
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCOtherResidence_Input) at CoverageInputSet.HOPCovC.pcf: line 112, column 65
    function valueRoot_84 () : java.lang.Object {
      return dwelling.HOPCovC.HOPCovCOtherResidenceTerm
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 50, column 56
    function value_10 () : gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCLimitType> {
      return dwelling.HOPCovC.HOPCovCLimitTerm.OptionValue
    }
    
    // 'value' attribute on HiddenInput (id=CovPatternDisplayName_Input) at CoverageInputSet.HOPCovC.pcf: line 34, column 37
    function value_2 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on TextInput (id=HOPCovCDirectLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 65, column 62
    function value_28 () : java.math.BigDecimal {
      return dwelling.HOPCovC.HOPCovCDirectLimitTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCCauseOfLoss_Input) at CoverageInputSet.HOPCovC.pcf: line 78, column 62
    function value_40 () : gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCCauseOfLossType> {
      return dwelling.HOPCovC.HOPCovCCauseOfLossTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCValuationMethod_Input) at CoverageInputSet.HOPCovC.pcf: line 89, column 60
    function value_54 () : gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCValuationType> {
      return dwelling.HOPCovC.HOPCovCValuationTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCSelfStorageUnits_Input) at CoverageInputSet.HOPCovC.pcf: line 101, column 67
    function value_68 () : gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCSelfStorageUnitsType> {
      return dwelling.HOPCovC.HOPCovCSelfStorageUnitsTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=HOPCovCOtherResidence_Input) at CoverageInputSet.HOPCovC.pcf: line 112, column 65
    function value_82 () : gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCOtherResidenceType> {
      return dwelling.HOPCovC.HOPCovCOtherResidenceTerm.OptionValue
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 50, column 56
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCLimitType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 50, column 56
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCCauseOfLoss_Input) at CoverageInputSet.HOPCovC.pcf: line 78, column 62
    function verifyValueRangeIsAllowedType_44 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCCauseOfLossType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCCauseOfLoss_Input) at CoverageInputSet.HOPCovC.pcf: line 78, column 62
    function verifyValueRangeIsAllowedType_44 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCValuationMethod_Input) at CoverageInputSet.HOPCovC.pcf: line 89, column 60
    function verifyValueRangeIsAllowedType_58 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCValuationType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCValuationMethod_Input) at CoverageInputSet.HOPCovC.pcf: line 89, column 60
    function verifyValueRangeIsAllowedType_58 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCSelfStorageUnits_Input) at CoverageInputSet.HOPCovC.pcf: line 101, column 67
    function verifyValueRangeIsAllowedType_72 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCSelfStorageUnitsType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCSelfStorageUnits_Input) at CoverageInputSet.HOPCovC.pcf: line 101, column 67
    function verifyValueRangeIsAllowedType_72 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCOtherResidence_Input) at CoverageInputSet.HOPCovC.pcf: line 112, column 65
    function verifyValueRangeIsAllowedType_86 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionHOPCovCOtherResidenceType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCOtherResidence_Input) at CoverageInputSet.HOPCovC.pcf: line 112, column 65
    function verifyValueRangeIsAllowedType_86 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 50, column 56
    function verifyValueRange_15 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovC.HOPCovCLimitTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCCauseOfLoss_Input) at CoverageInputSet.HOPCovC.pcf: line 78, column 62
    function verifyValueRange_45 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovC.HOPCovCCauseOfLossTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_44(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCValuationMethod_Input) at CoverageInputSet.HOPCovC.pcf: line 89, column 60
    function verifyValueRange_59 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovC.HOPCovCValuationTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_58(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCSelfStorageUnits_Input) at CoverageInputSet.HOPCovC.pcf: line 101, column 67
    function verifyValueRange_73 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovC.HOPCovCSelfStorageUnitsTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_72(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=HOPCovCOtherResidence_Input) at CoverageInputSet.HOPCovC.pcf: line 112, column 65
    function verifyValueRange_87 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(dwelling.HOPCovC.HOPCovCOtherResidenceTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_86(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=HOPCovCDirectLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 65, column 62
    function visible_23 () : java.lang.Boolean {
      return dwelling.HOPCovC.HasHOPCovCDirectLimitTerm
    }
    
    // 'visible' attribute on RangeInput (id=HOPCovCCauseOfLoss_Input) at CoverageInputSet.HOPCovC.pcf: line 78, column 62
    function visible_37 () : java.lang.Boolean {
      return dwelling.HOPCovC.HasHOPCovCCauseOfLossTerm
    }
    
    // 'visible' attribute on RangeInput (id=HOPCovCValuationMethod_Input) at CoverageInputSet.HOPCovC.pcf: line 89, column 60
    function visible_51 () : java.lang.Boolean {
      return dwelling.HOPCovC.HasHOPCovCValuationTerm
    }
    
    // 'visible' attribute on RangeInput (id=HOPCovCSelfStorageUnits_Input) at CoverageInputSet.HOPCovC.pcf: line 101, column 67
    function visible_65 () : java.lang.Boolean {
      return dwelling.HOPCovC.HasHOPCovCSelfStorageUnitsTerm
    }
    
    // 'visible' attribute on RangeInput (id=HOPCovCLimit_Input) at CoverageInputSet.HOPCovC.pcf: line 50, column 56
    function visible_7 () : java.lang.Boolean {
      return dwelling.HOPCovC.HasHOPCovCLimitTerm
    }
    
    // 'visible' attribute on RangeInput (id=HOPCovCOtherResidence_Input) at CoverageInputSet.HOPCovC.pcf: line 112, column 65
    function visible_79 () : java.lang.Boolean {
      return dwelling.HOPCovC.HasHOPCovCOtherResidenceTerm
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.HOPCovC.pcf: line 41, column 90
    function visible_92 () : java.lang.Boolean {
      return coverable.getCoverageConditionOrExclusion(coveragePattern) != null
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