package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBlanketPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPBlanketPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBlanketPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPBlanketPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (cpLine :  CommercialPropertyLine, blanket :  CPBlanket, openForEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 0
    }
    
    // 'action' attribute on ButtonInput (id=RecaculateLimit_Input) at CPBlanketPopup.pcf: line 96, column 36
    function action_44 () : void {
      blanket.recalculateLimit()
    }
    
    // 'action' attribute on ToolbarButton (id=ShowCoverages) at CPBlanketPopup.pcf: line 124, column 86
    function action_71 () : void {
      matchingCoverages = blanket.BuildingCoveragesByBlanketType
    }
    
    // 'afterEnter' attribute on Popup (id=CPBlanketPopup) at CPBlanketPopup.pcf: line 13, column 78
    function afterEnter_104 () : void {
      initialize()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AddCoverages) at CPBlanketPopup.pcf: line 129, column 85
    function allCheckedRowsAction_72 (CheckedValues :  entity.CPBuildingCov[], CheckedValuesErrors :  java.util.Map) : void {
      blanket.addBuildingCoverages(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RemoveCoverages) at CPBlanketPopup.pcf: line 134, column 88
    function allCheckedRowsAction_73 (CheckedValues :  entity.CPBuildingCov[], CheckedValuesErrors :  java.util.Map) : void {
      resetCPBlanketAndSetCPBlanketLimitTermValues(CheckedValues)
    }
    
    // 'available' attribute on ButtonInput (id=RecaculateLimit_Input) at CPBlanketPopup.pcf: line 96, column 36
    function available_42 () : java.lang.Boolean {
      return blanket.BuildingCoverages.Count > 0
    }
    
    // 'beforeCommit' attribute on Popup (id=CPBlanketPopup) at CPBlanketPopup.pcf: line 13, column 78
    function beforeCommit_105 (pickedValue :  CPBlanket) : void {
      blanket.removeNonMatchingCoverages(); gw.lob.cp.CPBlanketValidation.validateBlanket(blanket); 
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at CPBlanketPopup.pcf: line 39, column 52
    function def_onEnter_2 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(blanket, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=CPBlanketCovLimitId) at CPBlanketPopup.pcf: line 89, column 86
    function def_onEnter_40 (def :  pcf.CovTermDirectInputSet) : void {
      def.onEnter(blanket.CPBlanketCov.CPBlanketLimitTerm, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at CPBlanketPopup.pcf: line 39, column 52
    function def_refreshVariables_3 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(blanket, true, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef (id=CPBlanketCovLimitId) at CPBlanketPopup.pcf: line 89, column 86
    function def_refreshVariables_41 (def :  pcf.CovTermDirectInputSet) : void {
      def.refreshVariables(blanket.CPBlanketCov.CPBlanketLimitTerm, jobWizardHelper)
    }
    
    // 'value' attribute on TypeKeyInput (id=BlanketGroupType_Input) at CPBlanketPopup.pcf: line 60, column 50
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      blanket.BlanketGroupType = (__VALUE_TO_SET as typekey.BlanketGroupType)
    }
    
    // 'value' attribute on RangeInput (id=BuildingCoverage_Input) at CPBlanketPopup.pcf: line 71, column 60
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      blanket.CPBuildingCovName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at CPBlanketPopup.pcf: line 76, column 51
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      blanket.CPBlanketDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=BlanketLocation_Input) at CPBlanketPopup.pcf: line 85, column 58
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      blanket.CPLocation = (__VALUE_TO_SET as entity.CPLocation)
    }
    
    // 'value' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPopup.pcf: line 106, column 89
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      blanket.CPBlanketCov.CPBlanketDeductibleTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionCPBlanketDeductibleType>)
    }
    
    // 'value' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPopup.pcf: line 116, column 90
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      blanket.CPBlanketCov.CPBlanketCoinsuranceTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<productmodel.OptionCPBlanketCoinsuranceType>)
    }
    
    // 'value' attribute on TypeKeyInput (id=BlanketType_Input) at CPBlanketPopup.pcf: line 52, column 45
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      blanket.BlanketType = (__VALUE_TO_SET as typekey.BlanketType)
    }
    
    // EditButtons at CPBlanketPopup.pcf: line 35, column 32
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPopup.pcf: line 106, column 89
    function label_48 () : java.lang.Object {
      return blanket.CPBlanketCov.CPBlanketDeductibleTerm.DisplayName
    }
    
    // 'label' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPopup.pcf: line 116, column 90
    function label_60 () : java.lang.Object {
      return blanket.CPBlanketCov.CPBlanketCoinsuranceTerm.DisplayName
    }
    
    // 'pickValue' attribute on EditButtons at CPBlanketPopup.pcf: line 35, column 32
    function pickValue_0 () : CPBlanket {
      return blanket
    }
    
    // 'required' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPopup.pcf: line 106, column 89
    function required_49 () : java.lang.Boolean {
      return blanket.CPBlanketCov.CPBlanketDeductibleTerm.Pattern.Required
    }
    
    // 'required' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPopup.pcf: line 116, column 90
    function required_61 () : java.lang.Boolean {
      return blanket.CPBlanketCov.CPBlanketCoinsuranceTerm.Pattern.Required
    }
    
    // 'sortBy' attribute on IteratorSort at CPBlanketPopup.pcf: line 148, column 30
    function sortBy_74 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return matchingCov.CPBuilding.CPLocation.Location.LocationNum
    }
    
    // 'sortBy' attribute on IteratorSort at CPBlanketPopup.pcf: line 151, column 30
    function sortBy_75 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return matchingCov.CPBuilding.Building.BuildingNum
    }
    
    // 'value' attribute on TextCell (id=location_Cell) at CPBlanketPopup.pcf: line 157, column 48
    function sortValue_76 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return matchingCov.CPBuilding.CPLocation
    }
    
    // 'value' attribute on TextCell (id=Building_Cell) at CPBlanketPopup.pcf: line 162, column 48
    function sortValue_77 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return matchingCov.CPBuilding
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CPBlanketPopup.pcf: line 167, column 58
    function sortValue_78 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return matchingCov.Pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Limit_Cell) at CPBlanketPopup.pcf: line 172, column 63
    function sortValue_79 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return blanket.getBuildingCovLimitDisplay(matchingCov)
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at CPBlanketPopup.pcf: line 176, column 75
    function sortValue_80 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return blanket.getBuildingCovDeductDisplay(matchingCov)
    }
    
    // 'value' attribute on TextCell (id=Coinsurance_Cell) at CPBlanketPopup.pcf: line 180, column 80
    function sortValue_81 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return blanket.getBuildingCovCoinsuranceDisplay(matchingCov)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at CPBlanketPopup.pcf: line 184, column 67
    function sortValue_82 (matchingCov :  entity.CPBuildingCov) : java.lang.Object {
      return blanket.getBlanketInclusion(matchingCov)
    }
    
    // 'valueRange' attribute on RangeInput (id=BuildingCoverage_Input) at CPBlanketPopup.pcf: line 71, column 60
    function valueRange_20 () : java.lang.Object {
      return blanket.CovPatternNames
    }
    
    // 'valueRange' attribute on RangeInput (id=BlanketLocation_Input) at CPBlanketPopup.pcf: line 85, column 58
    function valueRange_34 () : java.lang.Object {
      return cpLine.CPLocations.sortBy(\ c -> c.Location.LocationNum)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPopup.pcf: line 106, column 89
    function valueRange_53 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(blanket.CPBlanketCov.CPBlanketDeductibleTerm, openForEdit)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPopup.pcf: line 116, column 90
    function valueRange_65 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(blanket.CPBlanketCov.CPBlanketCoinsuranceTerm, openForEdit)
    }
    
    // 'value' attribute on TextInput (id=BlanketNum_Input) at CPBlanketPopup.pcf: line 46, column 44
    function valueRoot_5 () : java.lang.Object {
      return blanket
    }
    
    // 'value' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPopup.pcf: line 106, column 89
    function valueRoot_52 () : java.lang.Object {
      return blanket.CPBlanketCov.CPBlanketDeductibleTerm
    }
    
    // 'value' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPopup.pcf: line 116, column 90
    function valueRoot_64 () : java.lang.Object {
      return blanket.CPBlanketCov.CPBlanketCoinsuranceTerm
    }
    
    // 'value' attribute on RowIterator (id=matchingCoveragesIterator) at CPBlanketPopup.pcf: line 145, column 48
    function value_103 () : entity.CPBuildingCov[] {
      return matchingCoverages
    }
    
    // 'value' attribute on TypeKeyInput (id=BlanketGroupType_Input) at CPBlanketPopup.pcf: line 60, column 50
    function value_11 () : typekey.BlanketGroupType {
      return blanket.BlanketGroupType
    }
    
    // 'value' attribute on RangeInput (id=BuildingCoverage_Input) at CPBlanketPopup.pcf: line 71, column 60
    function value_17 () : java.lang.String {
      return blanket.CPBuildingCovName
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at CPBlanketPopup.pcf: line 76, column 51
    function value_25 () : java.lang.String {
      return blanket.CPBlanketDescription
    }
    
    // 'value' attribute on RangeInput (id=BlanketLocation_Input) at CPBlanketPopup.pcf: line 85, column 58
    function value_31 () : entity.CPLocation {
      return blanket.CPLocation
    }
    
    // 'value' attribute on TextInput (id=BlanketNum_Input) at CPBlanketPopup.pcf: line 46, column 44
    function value_4 () : java.lang.Integer {
      return blanket.CPBlanketNum
    }
    
    // 'value' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPopup.pcf: line 106, column 89
    function value_50 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBlanketDeductibleType> {
      return blanket.CPBlanketCov.CPBlanketDeductibleTerm.OptionValue
    }
    
    // 'value' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPopup.pcf: line 116, column 90
    function value_62 () : gw.api.productmodel.CovTermOpt<productmodel.OptionCPBlanketCoinsuranceType> {
      return blanket.CPBlanketCov.CPBlanketCoinsuranceTerm.OptionValue
    }
    
    // 'value' attribute on TypeKeyInput (id=BlanketType_Input) at CPBlanketPopup.pcf: line 52, column 45
    function value_7 () : typekey.BlanketType {
      return blanket.BlanketType
    }
    
    // 'valueRange' attribute on RangeInput (id=BuildingCoverage_Input) at CPBlanketPopup.pcf: line 71, column 60
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BuildingCoverage_Input) at CPBlanketPopup.pcf: line 71, column 60
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BlanketLocation_Input) at CPBlanketPopup.pcf: line 85, column 58
    function verifyValueRangeIsAllowedType_35 ($$arg :  entity.CPLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BlanketLocation_Input) at CPBlanketPopup.pcf: line 85, column 58
    function verifyValueRangeIsAllowedType_35 ($$arg :  gw.api.database.IQueryBeanResult<entity.CPLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BlanketLocation_Input) at CPBlanketPopup.pcf: line 85, column 58
    function verifyValueRangeIsAllowedType_35 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPopup.pcf: line 106, column 89
    function verifyValueRangeIsAllowedType_54 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBlanketDeductibleType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPopup.pcf: line 106, column 89
    function verifyValueRangeIsAllowedType_54 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPopup.pcf: line 116, column 90
    function verifyValueRangeIsAllowedType_66 ($$arg :  gw.api.productmodel.CovTermOpt<productmodel.OptionCPBlanketCoinsuranceType>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPopup.pcf: line 116, column 90
    function verifyValueRangeIsAllowedType_66 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BuildingCoverage_Input) at CPBlanketPopup.pcf: line 71, column 60
    function verifyValueRange_22 () : void {
      var __valueRangeArg = blanket.CovPatternNames
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=BlanketLocation_Input) at CPBlanketPopup.pcf: line 85, column 58
    function verifyValueRange_36 () : void {
      var __valueRangeArg = cpLine.CPLocations.sortBy(\ c -> c.Location.LocationNum)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_35(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPopup.pcf: line 106, column 89
    function verifyValueRange_55 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(blanket.CPBlanketCov.CPBlanketDeductibleTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_54(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPopup.pcf: line 116, column 90
    function verifyValueRange_67 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(blanket.CPBlanketCov.CPBlanketCoinsuranceTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_66(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=BuildingCoverage_Input) at CPBlanketPopup.pcf: line 71, column 60
    function visible_15 () : java.lang.Boolean {
      return blanket.BlanketType == TC_SINGLECOV
    }
    
    // 'visible' attribute on RangeInput (id=BlanketLocation_Input) at CPBlanketPopup.pcf: line 85, column 58
    function visible_29 () : java.lang.Boolean {
      return blanket.BlanketType==TC_SINGLELOC
    }
    
    // 'visible' attribute on InputSetRef (id=CPBlanketCovLimitId) at CPBlanketPopup.pcf: line 89, column 86
    function visible_39 () : java.lang.Boolean {
      return blanket.CPBlanketCov.hasCovTerm( "CPBlanketLimit" )
    }
    
    // 'visible' attribute on ButtonInput (id=RecaculateLimit_Input) at CPBlanketPopup.pcf: line 96, column 36
    function visible_43 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on RangeInput (id=CPBlanketCovDeductible_Input) at CPBlanketPopup.pcf: line 106, column 89
    function visible_47 () : java.lang.Boolean {
      return blanket.CPBlanketCov.hasCovTerm("CPBlanketDeductible")
    }
    
    // 'visible' attribute on RangeInput (id=CPBlanketCovCoinsurance_Input) at CPBlanketPopup.pcf: line 116, column 90
    function visible_59 () : java.lang.Boolean {
      return blanket.CPBlanketCov.hasCovTerm("CPBlanketCoinsurance")
    }
    
    override property get CurrentLocation () : pcf.CPBlanketPopup {
      return super.CurrentLocation as pcf.CPBlanketPopup
    }
    
    property get blanket () : CPBlanket {
      return getVariableValue("blanket", 0) as CPBlanket
    }
    
    property set blanket ($arg :  CPBlanket) {
      setVariableValue("blanket", 0, $arg)
    }
    
    property get cpLine () : CommercialPropertyLine {
      return getVariableValue("cpLine", 0) as CommercialPropertyLine
    }
    
    property set cpLine ($arg :  CommercialPropertyLine) {
      setVariableValue("cpLine", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get matchingCoverages () : CPBuildingCov[] {
      return getVariableValue("matchingCoverages", 0) as CPBuildingCov[]
    }
    
    property set matchingCoverages ($arg :  CPBuildingCov[]) {
      setVariableValue("matchingCoverages", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    function initialize() {
      if (blanket == null and openForEdit) {
        blanket = cpLine.createAndAddBlanket()
      }
      else if (blanket != null){
        matchingCoverages =  blanket.BuildingCoveragesByBlanketType
      }
    }
    
    function resetCPBlanketAndSetCPBlanketLimitTermValues(cpBuildingCovs : entity.CPBuildingCov[]) {
      cpBuildingCovs.each(\ c -> {c.CPBlanket = null})
      blanket.CPBlanketCov.CPBlanketLimitTerm.Value = blanket.BuildingCovLimitSum
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBlanketPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CPBlanketPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Coverage_Cell) at CPBlanketPopup.pcf: line 167, column 58
    function action_89 () : void {
      CPBuildingPopup.push(cpLine, matchingCov.CPBuilding, openForEdit, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=Coverage_Cell) at CPBlanketPopup.pcf: line 167, column 58
    function action_dest_90 () : pcf.api.Destination {
      return pcf.CPBuildingPopup.createDestination(cpLine, matchingCov.CPBuilding, openForEdit, jobWizardHelper)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=matchingCoveragesIterator) at CPBlanketPopup.pcf: line 145, column 48
    function checkBoxVisible_102 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'value' attribute on TextCell (id=location_Cell) at CPBlanketPopup.pcf: line 157, column 48
    function valueRoot_84 () : java.lang.Object {
      return matchingCov.CPBuilding
    }
    
    // 'value' attribute on TextCell (id=Building_Cell) at CPBlanketPopup.pcf: line 162, column 48
    function valueRoot_87 () : java.lang.Object {
      return matchingCov
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CPBlanketPopup.pcf: line 167, column 58
    function valueRoot_92 () : java.lang.Object {
      return matchingCov.Pattern
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at CPBlanketPopup.pcf: line 184, column 67
    function value_100 () : java.lang.String {
      return blanket.getBlanketInclusion(matchingCov)
    }
    
    // 'value' attribute on TextCell (id=location_Cell) at CPBlanketPopup.pcf: line 157, column 48
    function value_83 () : entity.CPLocation {
      return matchingCov.CPBuilding.CPLocation
    }
    
    // 'value' attribute on TextCell (id=Building_Cell) at CPBlanketPopup.pcf: line 162, column 48
    function value_86 () : entity.CPBuilding {
      return matchingCov.CPBuilding
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at CPBlanketPopup.pcf: line 167, column 58
    function value_91 () : java.lang.String {
      return matchingCov.Pattern.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Limit_Cell) at CPBlanketPopup.pcf: line 172, column 63
    function value_94 () : gw.api.financials.CurrencyAmount {
      return blanket.getBuildingCovLimitDisplay(matchingCov)
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at CPBlanketPopup.pcf: line 176, column 75
    function value_96 () : java.lang.String {
      return blanket.getBuildingCovDeductDisplay(matchingCov)
    }
    
    // 'value' attribute on TextCell (id=Coinsurance_Cell) at CPBlanketPopup.pcf: line 180, column 80
    function value_98 () : java.lang.String {
      return blanket.getBuildingCovCoinsuranceDisplay(matchingCov)
    }
    
    property get matchingCov () : entity.CPBuildingCov {
      return getIteratedValue(1) as entity.CPBuildingCov
    }
    
    
  }
  
  
}