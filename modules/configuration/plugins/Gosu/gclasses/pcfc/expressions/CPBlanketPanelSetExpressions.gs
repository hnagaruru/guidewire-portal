package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBlanketPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPBlanketPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBlanketPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPBlanketExpressionsImpl extends CPBlanketPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at CPBlanketPanelSet.pcf: line 112, column 46
    function available_44 () : java.lang.Boolean {
      return selectedBlanket != null
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at CPBlanketPanelSet.pcf: line 112, column 46
    function def_onEnter_46 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(selectedBlanket, false, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at CPBlanketPanelSet.pcf: line 112, column 46
    function def_refreshVariables_47 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(selectedBlanket, false, jobWizardHelper)
    }
    
    // 'inputConversion' attribute on TextInput (id=CPBlanketCovLimit_Input) at CPBlanketPanelSet.pcf: line 152, column 98
    function inputConversion_66 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertFromString(VALUE)
    }
    
    // 'label' attribute on TextInput (id=CPBlanketCovLimit_Input) at CPBlanketPanelSet.pcf: line 152, column 98
    function label_65 () : java.lang.Object {
      return selectedBlanket.CPBlanketCov.CPBlanketLimitTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPanelSet.pcf: line 161, column 102
    function label_76 () : java.lang.Object {
      return selectedBlanket.CPBlanketCov.CPBlanketDeductibleTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPanelSet.pcf: line 172, column 103
    function label_87 () : java.lang.Object {
      return selectedBlanket.CPBlanketCov.CPBlanketCoinsuranceTerm.DisplayName
    }
    
    // 'outputConversion' attribute on TextInput (id=CPBlanketCovLimit_Input) at CPBlanketPanelSet.pcf: line 152, column 98
    function outputConversion_67 (VALUE :  java.math.BigDecimal) : java.lang.String {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertToString(VALUE)
    }
    
    // 'required' attribute on TextInput (id=CPBlanketCovLimit_Input) at CPBlanketPanelSet.pcf: line 152, column 98
    function required_68 () : java.lang.Boolean {
      return selectedBlanket.CPBlanketCov.CPBlanketLimitTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPanelSet.pcf: line 161, column 102
    function required_77 () : java.lang.Boolean {
      return selectedBlanket.CPBlanketCov.CPBlanketDeductibleTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPanelSet.pcf: line 172, column 103
    function required_88 () : java.lang.Boolean {
      return selectedBlanket.CPBlanketCov.CPBlanketCoinsuranceTerm.Pattern.Required
    }
    
    // 'sortBy' attribute on IteratorSort at CPBlanketPanelSet.pcf: line 52, column 30
    function sortBy_3 (blanket :  entity.CPBlanket) : java.lang.Object {
      return blanket.CPBlanketNum
    }
    
    // 'sortBy' attribute on IteratorSort at CPBlanketPanelSet.pcf: line 190, column 34
    function sortBy_97 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return matchingCov.CPBuilding.CPLocation.Location.LocationNum
    }
    
    // 'sortBy' attribute on IteratorSort at CPBlanketPanelSet.pcf: line 193, column 34
    function sortBy_98 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return matchingCov.CPBuilding.Building.BuildingNum
    }
    
    // 'value' attribute on TypeKeyCell (id=PreferredCoverageCurrency_Cell) at CPBlanketPanelSet.pcf: line 104, column 31
    function sortValue_10 (blanket :  entity.CPBlanket) : java.lang.Object {
      return blanket.PreferredCoverageCurrency
    }
    
    // 'value' attribute on TextCell (id=Building_Cell) at CPBlanketPanelSet.pcf: line 208, column 35
    function sortValue_100 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return matchingCov.CPBuilding
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CPBlanketPanelSet.pcf: line 215, column 62
    function sortValue_101 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return matchingCov.Pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Limit_Cell) at CPBlanketPanelSet.pcf: line 223, column 35
    function sortValue_102 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return selectedBlanket.getBuildingCovLimitDisplay(matchingCov)
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at CPBlanketPanelSet.pcf: line 228, column 87
    function sortValue_103 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return selectedBlanket.getBuildingCovDeductDisplay(matchingCov)
    }
    
    // 'value' attribute on TextCell (id=Coinsurance_Cell) at CPBlanketPanelSet.pcf: line 234, column 35
    function sortValue_104 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return selectedBlanket.getBuildingCovCoinsuranceDisplay(matchingCov)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at CPBlanketPanelSet.pcf: line 61, column 31
    function sortValue_4 (blanket :  entity.CPBlanket) : java.lang.Object {
      return blanket.CPBlanketNum
    }
    
    // 'value' attribute on TypeKeyCell (id=GroupType_Cell) at CPBlanketPanelSet.pcf: line 68, column 31
    function sortValue_5 (blanket :  entity.CPBlanket) : java.lang.Object {
      return blanket.BlanketGroupType
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CPBlanketPanelSet.pcf: line 75, column 55
    function sortValue_6 (blanket :  entity.CPBlanket) : java.lang.Object {
      return blanket.CPBlanketDescription
    }
    
    // 'value' attribute on TextCell (id=Limit_Cell) at CPBlanketPanelSet.pcf: line 82, column 31
    function sortValue_7 (blanket :  entity.CPBlanket) : java.lang.Object {
      return blanket.CPBlanketCov.CPBlanketLimitTerm.Value
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at CPBlanketPanelSet.pcf: line 89, column 31
    function sortValue_8 (blanket :  entity.CPBlanket) : java.lang.Object {
      return blanket.CPBlanketCov.CPBlanketDeductibleTerm.Value
    }
    
    // 'value' attribute on TextCell (id=Coinsurance_Cell) at CPBlanketPanelSet.pcf: line 96, column 31
    function sortValue_9 (blanket :  entity.CPBlanket) : java.lang.Object {
      return blanket.CPBlanketCov.CPBlanketCoinsuranceTerm.Value
    }
    
    // 'value' attribute on TextCell (id=location_Cell) at CPBlanketPanelSet.pcf: line 201, column 35
    function sortValue_99 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return matchingCov.CPBuilding.CPLocation
    }
    
    // 'footerSumValue' attribute on RowIterator at CPBlanketPanelSet.pcf: line 223, column 35
    function sumValue_105 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return selectedBlanket.getBuildingCovLimit(matchingCov)
    }
    
    // 'toRemove' attribute on RowIterator at CPBlanketPanelSet.pcf: line 49, column 44
    function toRemove_42 (blanket :  entity.CPBlanket) : void {
      cpLine.removeCPBlanket(blanket)
    }
    
    // 'validationExpression' attribute on TextInput (id=CPBlanketCovLimit_Input) at CPBlanketPanelSet.pcf: line 152, column 98
    function validationExpression_63 () : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.validate(selectedBlanket.CPBlanketCov.CPBlanketLimitTerm)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPanelSet.pcf: line 161, column 102
    function valueRange_80 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(selectedBlanket.CPBlanketCov.CPBlanketDeductibleTerm, false)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPanelSet.pcf: line 172, column 103
    function valueRange_91 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(selectedBlanket.CPBlanketCov.CPBlanketCoinsuranceTerm, false)
    }
    
    // 'value' attribute on TextInput (id=BlanketNum_Input) at CPBlanketPanelSet.pcf: line 123, column 50
    function valueRoot_49 () : java.lang.Object {
      return selectedBlanket
    }
    
    // 'value' attribute on TextInput (id=CPBlanketCovLimit_Input) at CPBlanketPanelSet.pcf: line 152, column 98
    function valueRoot_70 () : java.lang.Object {
      return selectedBlanket.CPBlanketCov.CPBlanketLimitTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPanelSet.pcf: line 161, column 102
    function valueRoot_79 () : java.lang.Object {
      return selectedBlanket.CPBlanketCov.CPBlanketDeductibleTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPanelSet.pcf: line 172, column 103
    function valueRoot_90 () : java.lang.Object {
      return selectedBlanket.CPBlanketCov.CPBlanketCoinsuranceTerm
    }
    
    // 'value' attribute on RowIterator at CPBlanketPanelSet.pcf: line 187, column 52
    function value_123 () : entity.CPBuildingCov[] {
      return selectedBlanket.BuildingCoverages
    }
    
    // 'value' attribute on RowIterator at CPBlanketPanelSet.pcf: line 49, column 44
    function value_43 () : entity.CPBlanket[] {
      return cpLine.CPBlankets
    }
    
    // 'value' attribute on TextInput (id=BlanketNum_Input) at CPBlanketPanelSet.pcf: line 123, column 50
    function value_48 () : java.lang.Integer {
      return selectedBlanket.CPBlanketNum
    }
    
    // 'value' attribute on TypeKeyInput (id=BlanketType_Input) at CPBlanketPanelSet.pcf: line 128, column 52
    function value_51 () : typekey.BlanketType {
      return selectedBlanket.BlanketType
    }
    
    // 'value' attribute on TypeKeyInput (id=BlanketGroupType_Input) at CPBlanketPanelSet.pcf: line 133, column 57
    function value_54 () : typekey.BlanketGroupType {
      return selectedBlanket.BlanketGroupType
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at CPBlanketPanelSet.pcf: line 137, column 65
    function value_57 () : java.lang.String {
      return selectedBlanket.CPBlanketDescription
    }
    
    // 'value' attribute on TextInput (id=BlanketLocation_Input) at CPBlanketPanelSet.pcf: line 142, column 50
    function value_60 () : entity.CPLocation {
      return selectedBlanket.CPLocation
    }
    
    // 'value' attribute on TextInput (id=CPBlanketCovLimit_Input) at CPBlanketPanelSet.pcf: line 152, column 98
    function value_69 () : java.math.BigDecimal {
      return selectedBlanket.CPBlanketCov.CPBlanketLimitTerm.Value
    }
    
    // 'value' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPanelSet.pcf: line 161, column 102
    function value_78 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBlanketDeductibleType> {
      return selectedBlanket.CPBlanketCov.CPBlanketDeductibleTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPanelSet.pcf: line 172, column 103
    function value_89 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBlanketCoinsuranceType> {
      return selectedBlanket.CPBlanketCov.CPBlanketCoinsuranceTerm.OptionValue
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPanelSet.pcf: line 161, column 102
    function verifyValueRangeIsAllowedType_81 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBlanketDeductibleType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPanelSet.pcf: line 161, column 102
    function verifyValueRangeIsAllowedType_81 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPanelSet.pcf: line 172, column 103
    function verifyValueRangeIsAllowedType_92 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBlanketCoinsuranceType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPanelSet.pcf: line 172, column 103
    function verifyValueRangeIsAllowedType_92 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPanelSet.pcf: line 161, column 102
    function verifyValueRange_82 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(selectedBlanket.CPBlanketCov.CPBlanketDeductibleTerm, false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_81(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPanelSet.pcf: line 172, column 103
    function verifyValueRange_93 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(selectedBlanket.CPBlanketCov.CPBlanketCoinsuranceTerm, false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_92(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyCell (id=PreferredCoverageCurrency_Cell) at CPBlanketPanelSet.pcf: line 104, column 31
    function visible_11 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on TextInput (id=CPBlanketCovLimit_Input) at CPBlanketPanelSet.pcf: line 152, column 98
    function visible_64 () : java.lang.Boolean {
      return selectedBlanket.CPBlanketCov.hasCovTerm("CPBlanketLimit")
    }
    
    // 'visible' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPanelSet.pcf: line 161, column 102
    function visible_75 () : java.lang.Boolean {
      return selectedBlanket.CPBlanketCov.hasCovTerm("CPBlanketDeductible")
    }
    
    // 'visible' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPanelSet.pcf: line 172, column 103
    function visible_86 () : java.lang.Boolean {
      return selectedBlanket.CPBlanketCov.hasCovTerm("CPBlanketCoinsurance")
    }
    
    property get selectedBlanket () : CPBlanket {
      return getCurrentSelection(1) as CPBlanket
    }
    
    property set selectedBlanket ($arg :  CPBlanket) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBlanketPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPBlanketPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on AddButton (id=AddBlanket) at CPBlanketPanelSet.pcf: line 26, column 34
    function pickLocation_1 () : void {
      CPBlanketPopup.push(cpLine, null, openForEdit, jobWizardHelper)
    }
    
    // 'visible' attribute on AddButton (id=AddBlanket) at CPBlanketPanelSet.pcf: line 26, column 34
    function visible_0 () : java.lang.Boolean {
      return openForEdit
    }
    
    property get cpLine () : CommercialPropertyLine {
      return getRequireValue("cpLine", 0) as CommercialPropertyLine
    }
    
    property set cpLine ($arg :  CommercialPropertyLine) {
      setRequireValue("cpLine", 0, $arg)
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
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBlanketPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends CPBlanketExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Coverage_Cell) at CPBlanketPanelSet.pcf: line 215, column 62
    function action_112 () : void {
      CPBuildingPopup.push(cpLine, matchingCov.CPBuilding, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=Coverage_Cell) at CPBlanketPanelSet.pcf: line 215, column 62
    function action_dest_113 () : pcf.api.Destination {
      return pcf.CPBuildingPopup.createDestination(cpLine, matchingCov.CPBuilding, openForEdit, jobWizardHelper)
    }
    
    // 'value' attribute on TextCell (id=location_Cell) at CPBlanketPanelSet.pcf: line 201, column 35
    function valueRoot_107 () : java.lang.Object {
      return matchingCov.CPBuilding
    }
    
    // 'value' attribute on TextCell (id=Building_Cell) at CPBlanketPanelSet.pcf: line 208, column 35
    function valueRoot_110 () : java.lang.Object {
      return matchingCov
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CPBlanketPanelSet.pcf: line 215, column 62
    function valueRoot_115 () : java.lang.Object {
      return matchingCov.Pattern
    }
    
    // 'value' attribute on TextCell (id=location_Cell) at CPBlanketPanelSet.pcf: line 201, column 35
    function value_106 () : entity.CPLocation {
      return matchingCov.CPBuilding.CPLocation
    }
    
    // 'value' attribute on TextCell (id=Building_Cell) at CPBlanketPanelSet.pcf: line 208, column 35
    function value_109 () : entity.CPBuilding {
      return matchingCov.CPBuilding
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CPBlanketPanelSet.pcf: line 215, column 62
    function value_114 () : java.lang.String {
      return matchingCov.Pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Limit_Cell) at CPBlanketPanelSet.pcf: line 223, column 35
    function value_117 () : gw.api.financials.CurrencyAmount {
      return selectedBlanket.getBuildingCovLimitDisplay(matchingCov)
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at CPBlanketPanelSet.pcf: line 228, column 87
    function value_119 () : java.lang.String {
      return selectedBlanket.getBuildingCovDeductDisplay(matchingCov)
    }
    
    // 'value' attribute on TextCell (id=Coinsurance_Cell) at CPBlanketPanelSet.pcf: line 234, column 35
    function value_121 () : java.lang.String {
      return selectedBlanket.getBuildingCovCoinsuranceDisplay(matchingCov)
    }
    
    property get matchingCov () : entity.CPBuildingCov {
      return getIteratedValue(2) as entity.CPBuildingCov
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBlanketPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CPBlanketExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=Description_Cell) at CPBlanketPanelSet.pcf: line 75, column 55
    function actionAvailable_24 () : java.lang.Boolean {
      return blanket.CPBlanketDescription != null
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at CPBlanketPanelSet.pcf: line 61, column 31
    function action_12 () : void {
      CPBlanketPopup.push(cpLine, blanket, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on TypeKeyCell (id=GroupType_Cell) at CPBlanketPanelSet.pcf: line 68, column 31
    function action_17 () : void {
      CPBlanketPopup.push(cpLine, blanket, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at CPBlanketPanelSet.pcf: line 75, column 55
    function action_22 () : void {
      CPBlanketPopup.push(cpLine, blanket, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at CPBlanketPanelSet.pcf: line 61, column 31
    function action_dest_13 () : pcf.api.Destination {
      return pcf.CPBlanketPopup.createDestination(cpLine, blanket, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on TypeKeyCell (id=GroupType_Cell) at CPBlanketPanelSet.pcf: line 68, column 31
    function action_dest_18 () : pcf.api.Destination {
      return pcf.CPBlanketPopup.createDestination(cpLine, blanket, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at CPBlanketPanelSet.pcf: line 75, column 55
    function action_dest_23 () : pcf.api.Destination {
      return pcf.CPBlanketPopup.createDestination(cpLine, blanket, openForEdit, jobWizardHelper)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at CPBlanketPanelSet.pcf: line 49, column 44
    function checkBoxVisible_41 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at CPBlanketPanelSet.pcf: line 61, column 31
    function valueRoot_15 () : java.lang.Object {
      return blanket
    }
    
    // 'value' attribute on TextCell (id=Limit_Cell) at CPBlanketPanelSet.pcf: line 82, column 31
    function valueRoot_29 () : java.lang.Object {
      return blanket.CPBlanketCov.CPBlanketLimitTerm
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at CPBlanketPanelSet.pcf: line 89, column 31
    function valueRoot_32 () : java.lang.Object {
      return blanket.CPBlanketCov.CPBlanketDeductibleTerm
    }
    
    // 'value' attribute on TextCell (id=Coinsurance_Cell) at CPBlanketPanelSet.pcf: line 96, column 31
    function valueRoot_35 () : java.lang.Object {
      return blanket.CPBlanketCov.CPBlanketCoinsuranceTerm
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at CPBlanketPanelSet.pcf: line 61, column 31
    function value_14 () : java.lang.Integer {
      return blanket.CPBlanketNum
    }
    
    // 'value' attribute on TypeKeyCell (id=GroupType_Cell) at CPBlanketPanelSet.pcf: line 68, column 31
    function value_19 () : typekey.BlanketGroupType {
      return blanket.BlanketGroupType
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CPBlanketPanelSet.pcf: line 75, column 55
    function value_25 () : java.lang.String {
      return blanket.CPBlanketDescription
    }
    
    // 'value' attribute on TextCell (id=Limit_Cell) at CPBlanketPanelSet.pcf: line 82, column 31
    function value_28 () : java.math.BigDecimal {
      return blanket.CPBlanketCov.CPBlanketLimitTerm.Value
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at CPBlanketPanelSet.pcf: line 89, column 31
    function value_31 () : java.math.BigDecimal {
      return blanket.CPBlanketCov.CPBlanketDeductibleTerm.Value
    }
    
    // 'value' attribute on TextCell (id=Coinsurance_Cell) at CPBlanketPanelSet.pcf: line 96, column 31
    function value_34 () : java.math.BigDecimal {
      return blanket.CPBlanketCov.CPBlanketCoinsuranceTerm.Value
    }
    
    // 'value' attribute on TypeKeyCell (id=PreferredCoverageCurrency_Cell) at CPBlanketPanelSet.pcf: line 104, column 31
    function value_37 () : typekey.Currency {
      return blanket.PreferredCoverageCurrency
    }
    
    // 'visible' attribute on TypeKeyCell (id=PreferredCoverageCurrency_Cell) at CPBlanketPanelSet.pcf: line 104, column 31
    function visible_39 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get blanket () : entity.CPBlanket {
      return getIteratedValue(2) as entity.CPBlanket
    }
    
    
  }
  
  
}