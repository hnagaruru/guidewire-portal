package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationBuildingsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPLocationBuildingsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationBuildingsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPLocationBuildingsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BOPLocationBuildingsPanelSet.pcf: line 19, column 23
    function initialValue_0 () : BOPLine {
      return policyPeriod.BOPLine
    }
    
    property get bopLine () : BOPLine {
      return getVariableValue("bopLine", 0) as BOPLine
    }
    
    property set bopLine ($arg :  BOPLine) {
      setVariableValue("bopLine", 0, $arg)
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
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationBuildingsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=DescriptionEdit_Cell) at BOPLocationBuildingsPanelSet.pcf: line 66, column 62
    function action_12 () : void {
      BOPBuildingPopup.push(bopLine, bopLocation, building, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=BuildingNumEdit_Cell) at BOPLocationBuildingsPanelSet.pcf: line 61, column 54
    function action_7 () : void {
      BOPBuildingPopup.push(bopLine, bopLocation, building, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=DescriptionEdit_Cell) at BOPLocationBuildingsPanelSet.pcf: line 66, column 62
    function action_dest_13 () : pcf.api.Destination {
      return pcf.BOPBuildingPopup.createDestination(bopLine, bopLocation, building, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=BuildingNumEdit_Cell) at BOPLocationBuildingsPanelSet.pcf: line 61, column 54
    function action_dest_8 () : pcf.api.Destination {
      return pcf.BOPBuildingPopup.createDestination(bopLine, bopLocation, building, openForEdit, true, jobWizardHelper)
    }
    
    // 'value' attribute on TextCell (id=BuildingNumEdit_Cell) at BOPLocationBuildingsPanelSet.pcf: line 61, column 54
    function valueRoot_10 () : java.lang.Object {
      return building.Building
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageCurrency_Cell) at BOPLocationBuildingsPanelSet.pcf: line 72, column 81
    function valueRoot_18 () : java.lang.Object {
      return building
    }
    
    // 'value' attribute on TextCell (id=DescriptionEdit_Cell) at BOPLocationBuildingsPanelSet.pcf: line 66, column 62
    function value_14 () : java.lang.String {
      return building.Building.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageCurrency_Cell) at BOPLocationBuildingsPanelSet.pcf: line 72, column 81
    function value_17 () : typekey.Currency {
      return building.PreferredCoverageCurrency
    }
    
    // 'value' attribute on TextCell (id=BuildingNumEdit_Cell) at BOPLocationBuildingsPanelSet.pcf: line 61, column 54
    function value_9 () : java.lang.Integer {
      return building.Building.BuildingNum
    }
    
    // 'visible' attribute on TypeKeyCell (id=CoverageCurrency_Cell) at BOPLocationBuildingsPanelSet.pcf: line 72, column 81
    function visible_19 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get building () : entity.BOPBuilding {
      return getIteratedValue(3) as entity.BOPBuilding
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationBuildingsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanel2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BOPLocationBuildingsPanelSet.pcf: line 81, column 51
    function available_24 () : java.lang.Boolean {
      return selectedBuilding != null
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BOPLocationBuildingsPanelSet.pcf: line 81, column 51
    function def_onEnter_26 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(selectedBuilding, false, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPLocationBuildingsPanelSet.pcf: line 88, column 37
    function def_onEnter_28 (def :  pcf.BOPBuilding_DetailsDV) : void {
      def.onEnter(selectedBuilding, false)
    }
    
    // 'def' attribute on PanelRef at BOPLocationBuildingsPanelSet.pcf: line 90, column 79
    function def_onEnter_30 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.onEnter(selectedBuilding, false)
    }
    
    // 'def' attribute on PanelRef at BOPLocationBuildingsPanelSet.pcf: line 99, column 55
    function def_onEnter_33 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.onEnter(selectedBuilding, new String[]{"BOPBuildingOtherCat","BOPIncomeExpenseCat","BOPBuildingUtilitiesCat","BOPBuildingSpecialPerilCat","BOPStateCat"}, true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BOPLocationBuildingsPanelSet.pcf: line 81, column 51
    function def_refreshVariables_27 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(selectedBuilding, false, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPLocationBuildingsPanelSet.pcf: line 88, column 37
    function def_refreshVariables_29 (def :  pcf.BOPBuilding_DetailsDV) : void {
      def.refreshVariables(selectedBuilding, false)
    }
    
    // 'def' attribute on PanelRef at BOPLocationBuildingsPanelSet.pcf: line 90, column 79
    function def_refreshVariables_31 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.refreshVariables(selectedBuilding, false)
    }
    
    // 'def' attribute on PanelRef at BOPLocationBuildingsPanelSet.pcf: line 99, column 55
    function def_refreshVariables_34 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.refreshVariables(selectedBuilding, new String[]{"BOPBuildingOtherCat","BOPIncomeExpenseCat","BOPBuildingUtilitiesCat","BOPBuildingSpecialPerilCat","BOPStateCat"}, true, jobWizardHelper)
    }
    
    // 'pickLocation' attribute on RowIterator at BOPLocationBuildingsPanelSet.pcf: line 52, column 52
    function pickLocation_21 () : void {
      BOPBuildingPopup.push(bopLine, bopLocation, null, openForEdit, true, jobWizardHelper)
    }
    
    // 'value' attribute on TextCell (id=BuildingNumEdit_Cell) at BOPLocationBuildingsPanelSet.pcf: line 61, column 54
    function sortValue_3 (building :  entity.BOPBuilding) : java.lang.Object {
      return building.Building.BuildingNum
    }
    
    // 'value' attribute on TextCell (id=DescriptionEdit_Cell) at BOPLocationBuildingsPanelSet.pcf: line 66, column 62
    function sortValue_4 (building :  entity.BOPBuilding) : java.lang.Object {
      return building.Building.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageCurrency_Cell) at BOPLocationBuildingsPanelSet.pcf: line 72, column 81
    function sortValue_5 (building :  entity.BOPBuilding) : java.lang.Object {
      return building.PreferredCoverageCurrency
    }
    
    // 'toRemove' attribute on RowIterator at BOPLocationBuildingsPanelSet.pcf: line 52, column 52
    function toRemove_22 (building :  entity.BOPBuilding) : void {
      bopLocation.removeFromLineSpecificBuildings(building)
    }
    
    // 'value' attribute on RowIterator at BOPLocationBuildingsPanelSet.pcf: line 52, column 52
    function value_23 () : entity.BOPBuilding[] {
      return bopLocation.Buildings
    }
    
    // 'visible' attribute on TypeKeyCell (id=CoverageCurrency_Cell) at BOPLocationBuildingsPanelSet.pcf: line 72, column 81
    function visible_6 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get selectedBuilding () : BOPBuilding {
      return getCurrentSelection(2) as BOPBuilding
    }
    
    property set selectedBuilding ($arg :  BOPBuilding) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationBuildingsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends BOPLocationBuildingsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at BOPLocationBuildingsPanelSet.pcf: line 24, column 39
    function def_onEnter_1 (def :  pcf.BOPLocationsLV) : void {
      def.onEnter(bopLine)
    }
    
    // 'def' attribute on PanelRef at BOPLocationBuildingsPanelSet.pcf: line 24, column 39
    function def_refreshVariables_2 (def :  pcf.BOPLocationsLV) : void {
      def.refreshVariables(bopLine)
    }
    
    property get bopLocation () : BOPLocation {
      return getCurrentSelection(1) as BOPLocation
    }
    
    property set bopLocation ($arg :  BOPLocation) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}