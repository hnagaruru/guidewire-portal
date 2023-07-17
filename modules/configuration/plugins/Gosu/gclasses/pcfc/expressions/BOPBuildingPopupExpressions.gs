package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPBuildingPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPBuildingPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPBuildingPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPBuildingPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (bopLine :  BOPLine, bopLocation :  BOPLocation, building :  BOPBuilding, openForEdit :  boolean, startInEdit :  boolean, jobWizardHelper :  gw.api.web.job.JobWizardHelper) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=BOPBuildingPopup) at BOPBuildingPopup.pcf: line 13, column 96
    function beforeCommit_15 (pickedValue :  BOPBuilding) : void {
      gw.lob.bop.BOPBuildingValidation.validateBuilding(building)
    }
    
    // 'canEdit' attribute on Popup (id=BOPBuildingPopup) at BOPBuildingPopup.pcf: line 13, column 96
    function canEdit_16 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BOPBuildingPopup.pcf: line 43, column 52
    function def_onEnter_1 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(building, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPBuildingPopup.pcf: line 76, column 259
    function def_onEnter_13 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.onEnter(building, new String[]{"BOPBuildingOtherCat","BOPIncomeExpenseCat","BOPBuildingUtilitiesCat","BOPBuildingSpecialPerilCat","BOPStateCat"}, true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPBuildingPopup.pcf: line 51, column 84
    function def_onEnter_3 (def :  pcf.BOPBuilding_DetailsDV) : void {
      def.onEnter(building, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef at BOPBuildingPopup.pcf: line 55, column 71
    function def_onEnter_5 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.onEnter(building, openForEdit)
    }
    
    // 'def' attribute on PanelRef at BOPBuildingPopup.pcf: line 76, column 259
    function def_refreshVariables_14 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.refreshVariables(building, new String[]{"BOPBuildingOtherCat","BOPIncomeExpenseCat","BOPBuildingUtilitiesCat","BOPBuildingSpecialPerilCat","BOPStateCat"}, true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BOPBuildingPopup.pcf: line 43, column 52
    function def_refreshVariables_2 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(building, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPBuildingPopup.pcf: line 51, column 84
    function def_refreshVariables_4 (def :  pcf.BOPBuilding_DetailsDV) : void {
      def.refreshVariables(building, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef at BOPBuildingPopup.pcf: line 55, column 71
    function def_refreshVariables_6 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.refreshVariables(building, openForEdit)
    }
    
    // 'pickValue' attribute on EditButtons at BOPBuildingPopup.pcf: line 39, column 86
    function pickValue_0 () : BOPBuilding {
      return building
    }
    
    // 'startEditing' attribute on Popup (id=BOPBuildingPopup) at BOPBuildingPopup.pcf: line 13, column 96
    function startEditing_17 () : void {
      if (building == null and startInEdit == true and openForEdit) {building = bopLocation.addNewLineSpecificBuilding() as BOPBuilding}
    }
    
    // 'startInEditMode' attribute on Popup (id=BOPBuildingPopup) at BOPBuildingPopup.pcf: line 13, column 96
    function startInEditMode_18 () : java.lang.Boolean {
      return startInEdit
    }
    
    // 'value' attribute on TextInput (id=Number_Input) at BOPBuildingPopup.pcf: line 72, column 48
    function valueRoot_11 () : java.lang.Object {
      return building.Building
    }
    
    // 'value' attribute on TextInput (id=LocationInfo_Input) at BOPBuildingPopup.pcf: line 67, column 71
    function valueRoot_8 () : java.lang.Object {
      return building.Building.PolicyLocation
    }
    
    // 'value' attribute on TextInput (id=Number_Input) at BOPBuildingPopup.pcf: line 72, column 48
    function value_10 () : java.lang.Integer {
      return building.Building.BuildingNum
    }
    
    // 'value' attribute on TextInput (id=LocationInfo_Input) at BOPBuildingPopup.pcf: line 67, column 71
    function value_7 () : java.lang.String {
      return building.Building.PolicyLocation.DisplayName
    }
    
    override property get CurrentLocation () : pcf.BOPBuildingPopup {
      return super.CurrentLocation as pcf.BOPBuildingPopup
    }
    
    property get bopLine () : BOPLine {
      return getVariableValue("bopLine", 0) as BOPLine
    }
    
    property set bopLine ($arg :  BOPLine) {
      setVariableValue("bopLine", 0, $arg)
    }
    
    property get bopLocation () : BOPLocation {
      return getVariableValue("bopLocation", 0) as BOPLocation
    }
    
    property set bopLocation ($arg :  BOPLocation) {
      setVariableValue("bopLocation", 0, $arg)
    }
    
    property get building () : BOPBuilding {
      return getVariableValue("building", 0) as BOPBuilding
    }
    
    property set building ($arg :  BOPBuilding) {
      setVariableValue("building", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get startInEdit () : boolean {
      return getVariableValue("startInEdit", 0) as java.lang.Boolean
    }
    
    property set startInEdit ($arg :  boolean) {
      setVariableValue("startInEdit", 0, $arg)
    }
    
    
  }
  
  
}