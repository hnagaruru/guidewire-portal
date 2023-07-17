package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/CoverageInputSet.BOPSpoilageCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CoverageInputSet_BOPSpoilageCovExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/CoverageInputSet.BOPSpoilageCov.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on RiskClassInput (id=RiskClassCode_Input) at RiskClassWidget.xml: line 4, column 44
    function action_44 () : void {
      RiskClassSearchPopup.push(location.PolicyLine.Pattern, coveragePattern as gw.api.productmodel.CoveragePattern )
    }
    
    // 'pickLocation' attribute on RiskClassInput (id=RiskClassCode_Input) at RiskClassWidget.xml: line 4, column 44
    function action_dest_45 () : pcf.api.Destination {
      return pcf.RiskClassSearchPopup.createDestination(location.PolicyLine.Pattern, coveragePattern as gw.api.productmodel.CoveragePattern )
    }
    
    // 'allowToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.BOPSpoilageCov.pcf: line 37, column 89
    function available_58 () : java.lang.Boolean {
      return coveragePattern.allowToggle(coverable)
    }
    
    // 'def' attribute on InputSetRef (id=BOPSpoilageCovLimit) at CoverageInputSet.BOPSpoilageCov.pcf: line 47, column 84
    function def_onEnter_11 (def :  pcf.CovTermDirectInputSet) : void {
      def.onEnter(location.BOPSpoilageCov.BOPSpoilageLimTerm, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=BOPSpoilageCovLimit) at CoverageInputSet.BOPSpoilageCov.pcf: line 47, column 84
    function def_refreshVariables_12 (def :  pcf.CovTermDirectInputSet) : void {
      def.refreshVariables(location.BOPSpoilageCov.BOPSpoilageLimTerm, jobWizardHelper)
    }
    
    // 'value' attribute on RangeInput (id=BOPSpoilageCovDeduct_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 56, column 84
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      location.BOPSpoilageCov.BOPSpoilageDedTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionBOPSpoilageDedType>)
    }
    
    // 'value' attribute on BooleanRadioInput (id=BOPSpoilageCovBreakContam_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 62, column 84
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      location.BOPSpoilageCov.BOPBreakContamTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=BOPSpoilageCovPowerOutage_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 68, column 84
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      location.BOPSpoilageCov.BOPPowerOutageTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=BOPSpoilageCovFridgeMaintenance_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 74, column 90
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      location.BOPSpoilageCov.BOPFridgeMaintenanceTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RiskClassInput (id=RiskClassCode_Input) at RiskClassWidget.xml: line 4, column 44
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      location.RiskClass = (__VALUE_TO_SET as entity.RiskClass)
    }
    
    // 'value' attribute on TextInput (id=BOPSpoilageDescription_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 43, column 95
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      location.BOPSpoilageCov.BOPSpoilageCovDescriptionTerm.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=BOPSpoilageCovDeduct_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 56, column 84
    function editable_13 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(location.BOPSpoilageCov.BOPSpoilageDedTerm)
    }
    
    // 'initialValue' attribute on Variable at CoverageInputSet.BOPSpoilageCov.pcf: line 26, column 34
    function initialValue_0 () : entity.BOPLocation {
      return coverable as BOPLocation
    }
    
    // 'inputConversion' attribute on RiskClassInput (id=RiskClassCode_Input) at RiskClassWidget.xml: line 4, column 44
    function inputConversion_46 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.web.product.RiskClassPickerUtil.findRiskClass(VALUE, location.PolicyLine.Pattern)
    }
    
    // 'label' attribute on RangeInput (id=BOPSpoilageCovDeduct_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 56, column 84
    function label_15 () : java.lang.Object {
      return location.BOPSpoilageCov.BOPSpoilageDedTerm.DisplayName
    }
    
    // 'label' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.BOPSpoilageCov.pcf: line 37, column 89
    function label_59 () : java.lang.Object {
      return coveragePattern.DisplayName
    }
    
    // 'outputConversion' attribute on RiskClassInput (id=RiskClassCode_Input) at RiskClassWidget.xml: line 4, column 44
    function outputConversion_47 (VALUE :  entity.RiskClass) : java.lang.String {
      return VALUE == null ? "" : (VALUE as RiskClass).Description
    }
    
    // 'onToggle' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.BOPSpoilageCov.pcf: line 37, column 89
    function setter_60 (VALUE :  java.lang.Boolean) : void {
      location.setCoverageConditionOrExclusionExists(coveragePattern, VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPSpoilageCovDeduct_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 56, column 84
    function valueRange_19 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(location.BOPSpoilageCov.BOPSpoilageDedTerm, openForEdit)
    }
    
    // 'value' attribute on RangeInput (id=BOPSpoilageCovDeduct_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 56, column 84
    function valueRoot_18 () : java.lang.Object {
      return location.BOPSpoilageCov.BOPSpoilageDedTerm
    }
    
    // 'value' attribute on HiddenInput (id=PatternDisplayName_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 30, column 37
    function valueRoot_2 () : java.lang.Object {
      return coveragePattern
    }
    
    // 'value' attribute on BooleanRadioInput (id=BOPSpoilageCovBreakContam_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 62, column 84
    function valueRoot_29 () : java.lang.Object {
      return location.BOPSpoilageCov.BOPBreakContamTerm
    }
    
    // 'value' attribute on BooleanRadioInput (id=BOPSpoilageCovPowerOutage_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 68, column 84
    function valueRoot_35 () : java.lang.Object {
      return location.BOPSpoilageCov.BOPPowerOutageTerm
    }
    
    // 'value' attribute on BooleanRadioInput (id=BOPSpoilageCovFridgeMaintenance_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 74, column 90
    function valueRoot_41 () : java.lang.Object {
      return location.BOPSpoilageCov.BOPFridgeMaintenanceTerm
    }
    
    // 'value' attribute on RiskClassInput (id=RiskClassCode_Input) at RiskClassWidget.xml: line 4, column 44
    function valueRoot_50 () : java.lang.Object {
      return location
    }
    
    // 'value' attribute on TextInput (id=RiskDescription_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 91, column 40
    function valueRoot_55 () : java.lang.Object {
      return location.RiskClass
    }
    
    // 'value' attribute on TextInput (id=BOPSpoilageDescription_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 43, column 95
    function valueRoot_7 () : java.lang.Object {
      return location.BOPSpoilageCov.BOPSpoilageCovDescriptionTerm
    }
    
    // 'value' attribute on HiddenInput (id=PatternDisplayName_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 30, column 37
    function value_1 () : java.lang.String {
      return coveragePattern.DisplayName
    }
    
    // 'value' attribute on RangeInput (id=BOPSpoilageCovDeduct_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 56, column 84
    function value_16 () : gw.api.productmodel.CovTermOpt<productmodel.OptionBOPSpoilageDedType> {
      return location.BOPSpoilageCov.BOPSpoilageDedTerm.OptionValue
    }
    
    // 'value' attribute on BooleanRadioInput (id=BOPSpoilageCovBreakContam_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 62, column 84
    function value_27 () : java.lang.Boolean {
      return location.BOPSpoilageCov.BOPBreakContamTerm.Value
    }
    
    // 'value' attribute on BooleanRadioInput (id=BOPSpoilageCovPowerOutage_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 68, column 84
    function value_33 () : java.lang.Boolean {
      return location.BOPSpoilageCov.BOPPowerOutageTerm.Value
    }
    
    // 'value' attribute on BooleanRadioInput (id=BOPSpoilageCovFridgeMaintenance_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 74, column 90
    function value_39 () : java.lang.Boolean {
      return location.BOPSpoilageCov.BOPFridgeMaintenanceTerm.Value
    }
    
    // 'value' attribute on RiskClassInput (id=RiskClassCode_Input) at RiskClassWidget.xml: line 4, column 44
    function value_48 () : entity.RiskClass {
      return location.RiskClass
    }
    
    // 'value' attribute on TextInput (id=BOPSpoilageDescription_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 43, column 95
    function value_5 () : java.lang.String {
      return location.BOPSpoilageCov.BOPSpoilageCovDescriptionTerm.Value
    }
    
    // 'value' attribute on TextInput (id=RiskDescription_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 91, column 40
    function value_54 () : java.lang.Integer {
      return location.RiskClass.Hazard
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPSpoilageCovDeduct_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 56, column 84
    function verifyValueRangeIsAllowedType_20 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionBOPSpoilageDedType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPSpoilageCovDeduct_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 56, column 84
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BOPSpoilageCovDeduct_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 56, column 84
    function verifyValueRange_21 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(location.BOPSpoilageCov.BOPSpoilageDedTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSetRef (id=BOPSpoilageCovLimit) at CoverageInputSet.BOPSpoilageCov.pcf: line 47, column 84
    function visible_10 () : java.lang.Boolean {
      return location.BOPSpoilageCov?.hasCovTerm("BOPSpoilageLim")
    }
    
    // 'visible' attribute on RangeInput (id=BOPSpoilageCovDeduct_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 56, column 84
    function visible_14 () : java.lang.Boolean {
      return location.BOPSpoilageCov?.hasCovTerm("BOPSpoilageDed")
    }
    
    // 'visible' attribute on BooleanRadioInput (id=BOPSpoilageCovBreakContam_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 62, column 84
    function visible_26 () : java.lang.Boolean {
      return location.BOPSpoilageCov?.hasCovTerm("BOPBreakContam")
    }
    
    // 'visible' attribute on BooleanRadioInput (id=BOPSpoilageCovPowerOutage_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 68, column 84
    function visible_32 () : java.lang.Boolean {
      return location.BOPSpoilageCov?.hasCovTerm("BOPPowerOutage")
    }
    
    // 'visible' attribute on BooleanRadioInput (id=BOPSpoilageCovFridgeMaintenance_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 74, column 90
    function visible_38 () : java.lang.Boolean {
      return location.BOPSpoilageCov?.hasCovTerm("BOPFridgeMaintenance")
    }
    
    // 'visible' attribute on TextInput (id=BOPSpoilageDescription_Input) at CoverageInputSet.BOPSpoilageCov.pcf: line 43, column 95
    function visible_4 () : java.lang.Boolean {
      return location.BOPSpoilageCov?.hasCovTerm("BOPSpoilageCovDescription")
    }
    
    // 'childrenVisible' attribute on InputGroup (id=CovPatternInputGroup) at CoverageInputSet.BOPSpoilageCov.pcf: line 37, column 89
    function visible_57 () : java.lang.Boolean {
      return coveragePattern != null
    }
    
    // 'visible' attribute on InputDivider at CoverageInputSet.BOPSpoilageCov.pcf: line 94, column 100
    function visible_63 () : java.lang.Boolean {
      return openForEdit or coverable.getCoverageConditionOrExclusion(coveragePattern) != null
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
    
    property get location () : entity.BOPLocation {
      return getVariableValue("location", 0) as entity.BOPLocation
    }
    
    property set location ($arg :  entity.BOPLocation) {
      setVariableValue("location", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  
}