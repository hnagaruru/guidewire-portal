package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPLocationsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPLocationsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=addAllLocationsButton) at BOPLocationsPanelSet.pcf: line 57, column 108
    function action_9 () : void {
      unassignedAccountLocations.each(\al -> policyPeriod.BOPLine.addToLineSpecificLocations(al))
    }
    
    // 'available' attribute on ToolbarButton (id=addLocationButton) at BOPLocationsPanelSet.pcf: line 37, column 112
    function available_7 () : java.lang.Boolean {
      return unassignedAccountLocations.Count > 0
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=setToPrimary) at BOPLocationsPanelSet.pcf: line 32, column 90
    function checkedRowAction_1 (bopLocation :  entity.BOPLocation, CheckedValue :  entity.BOPLocation) : void {
      policyPeriod.PrimaryLocation = CheckedValue.Location
    }
    
    // 'initialValue' attribute on Variable at BOPLocationsPanelSet.pcf: line 20, column 40
    function initialValue_0 () : entity.AccountLocation[] {
      return policyPeriod.BOPLine.UnusedLocations
    }
    
    // 'sortBy' attribute on IteratorSort at BOPLocationsPanelSet.pcf: line 45, column 30
    function sortBy_2 (unassignedAccountLocation :  entity.AccountLocation) : java.lang.Object {
      return unassignedAccountLocation.LocationNum
    }
    
    // 'value' attribute on MenuItemIterator (id=UnassignedAccountLocationIterator) at BOPLocationsPanelSet.pcf: line 42, column 50
    function value_6 () : entity.AccountLocation[] {
      return unassignedAccountLocations
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
    
    property get unassignedAccountLocations () : entity.AccountLocation[] {
      return getVariableValue("unassignedAccountLocations", 0) as entity.AccountLocation[]
    }
    
    property set unassignedAccountLocations ($arg :  entity.AccountLocation[]) {
      setVariableValue("unassignedAccountLocations", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends LocationsEdit_DPExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Loc_Cell) at BOPLocationsPanelSet.pcf: line 99, column 48
    function action_26 () : void {
      BOPLocationPopup.push(null, bopLocation, policyPeriod, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at BOPLocationsPanelSet.pcf: line 114, column 76
    function action_37 () : void {
      BOPLocationPopup.push(null, bopLocation, policyPeriod, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=Address_Cell) at BOPLocationsPanelSet.pcf: line 120, column 90
    function action_42 () : void {
      BOPLocationPopup.push(null, bopLocation, policyPeriod, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=Loc_Cell) at BOPLocationsPanelSet.pcf: line 99, column 48
    function action_dest_27 () : pcf.api.Destination {
      return pcf.BOPLocationPopup.createDestination(null, bopLocation, policyPeriod, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at BOPLocationsPanelSet.pcf: line 114, column 76
    function action_dest_38 () : pcf.api.Destination {
      return pcf.BOPLocationPopup.createDestination(null, bopLocation, policyPeriod, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on TextCell (id=Address_Cell) at BOPLocationsPanelSet.pcf: line 120, column 90
    function action_dest_43 () : pcf.api.Destination {
      return pcf.BOPLocationPopup.createDestination(null, bopLocation, policyPeriod, openForEdit, true, jobWizardHelper)
    }
    
    // 'condition' attribute on ToolbarFlag at BOPLocationsPanelSet.pcf: line 78, column 33
    function condition_20 () : java.lang.Boolean {
      return !bopLocation.Location.PrimaryLoc
    }
    
    // 'validationExpression' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at BOPLocationsPanelSet.pcf: line 91, column 79
    function validationExpression_22 () : java.lang.Object {
      return policyPeriod.PrimaryLocation != null ? null : DisplayKey.get("Web.Policy.LocationContainer.Location.PrimaryLocationError.SelectAtleastOne")
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at BOPLocationsPanelSet.pcf: line 99, column 48
    function valueRoot_29 () : java.lang.Object {
      return bopLocation.Location
    }
    
    // 'value' attribute on CheckBoxCell (id=NonSpecificLocation_Cell) at BOPLocationsPanelSet.pcf: line 103, column 75
    function valueRoot_32 () : java.lang.Object {
      return bopLocation.Location.AccountLocation
    }
    
    // 'value' attribute on TypeKeyCell (id=PreferredCoverageCurrency_Cell) at BOPLocationsPanelSet.pcf: line 132, column 75
    function valueRoot_50 () : java.lang.Object {
      return bopLocation
    }
    
    // 'value' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at BOPLocationsPanelSet.pcf: line 91, column 79
    function value_23 () : java.lang.Boolean {
      return bopLocation.Location == policyPeriod.PrimaryLocation
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at BOPLocationsPanelSet.pcf: line 99, column 48
    function value_28 () : java.lang.Integer {
      return bopLocation.Location.LocationNum
    }
    
    // 'value' attribute on CheckBoxCell (id=NonSpecificLocation_Cell) at BOPLocationsPanelSet.pcf: line 103, column 75
    function value_31 () : java.lang.Boolean {
      return bopLocation.Location.AccountLocation.NonSpecific
    }
    
    // 'value' attribute on TextCell (id=LocationCode_Cell) at BOPLocationsPanelSet.pcf: line 108, column 76
    function value_34 () : java.lang.String {
      return bopLocation.Location.AccountLocation.LocationCode
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at BOPLocationsPanelSet.pcf: line 114, column 76
    function value_39 () : java.lang.String {
      return bopLocation.Location.AccountLocation.LocationName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at BOPLocationsPanelSet.pcf: line 120, column 90
    function value_44 () : java.lang.String {
      return bopLocation.Location.addressString(",", false, false)
    }
    
    // 'value' attribute on BooleanRadioCell (id=InSync_Cell) at BOPLocationsPanelSet.pcf: line 125, column 50
    function value_46 () : java.lang.Boolean {
      return bopLocation.Location.isUpToDate()
    }
    
    // 'value' attribute on TypeKeyCell (id=PreferredCoverageCurrency_Cell) at BOPLocationsPanelSet.pcf: line 132, column 75
    function value_49 () : typekey.Currency {
      return bopLocation.PreferredCoverageCurrency
    }
    
    // 'visible' attribute on BooleanRadioCell (id=InSync_Cell) at BOPLocationsPanelSet.pcf: line 125, column 50
    function visible_47 () : java.lang.Boolean {
      return policyPeriod.Promoted
    }
    
    // 'visible' attribute on TypeKeyCell (id=PreferredCoverageCurrency_Cell) at BOPLocationsPanelSet.pcf: line 132, column 75
    function visible_51 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get bopLocation () : entity.BOPLocation {
      return getIteratedValue(2) as entity.BOPLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BOPLocationsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedAccountLocation) at BOPLocationsPanelSet.pcf: line 49, column 50
    function action_3 () : void {
      BOPLocationPopup.push(unassignedAccountLocation, null, policyPeriod, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedAccountLocation) at BOPLocationsPanelSet.pcf: line 49, column 50
    function action_dest_4 () : pcf.api.Destination {
      return pcf.BOPLocationPopup.createDestination(unassignedAccountLocation, null, policyPeriod, openForEdit, true, jobWizardHelper)
    }
    
    // 'label' attribute on MenuItem (id=UnassignedAccountLocation) at BOPLocationsPanelSet.pcf: line 49, column 50
    function label_5 () : java.lang.Object {
      return unassignedAccountLocation
    }
    
    property get unassignedAccountLocation () : entity.AccountLocation {
      return getIteratedValue(1) as entity.AccountLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPLocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationsEdit_DPExpressionsImpl extends BOPLocationsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BOPLocationsPanelSet.pcf: line 140, column 47
    function available_56 () : java.lang.Boolean {
      return selectedLocation != null
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BOPLocationsPanelSet.pcf: line 140, column 47
    function def_onEnter_58 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(selectedLocation, false, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPLocationsPanelSet.pcf: line 144, column 93
    function def_onEnter_61 (def :  pcf.LocationDetailCV) : void {
      def.onEnter(selectedLocation.Location, false, policyPeriod.BOPLine.SupportsNonSpecificLocations)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BOPLocationsPanelSet.pcf: line 140, column 47
    function def_refreshVariables_59 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(selectedLocation, false, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPLocationsPanelSet.pcf: line 144, column 93
    function def_refreshVariables_62 (def :  pcf.LocationDetailCV) : void {
      def.refreshVariables(selectedLocation.Location, false, policyPeriod.BOPLine.SupportsNonSpecificLocations)
    }
    
    // 'pickLocation' attribute on RowIterator at BOPLocationsPanelSet.pcf: line 75, column 46
    function pickLocation_53 () : void {
      BOPLocationPopup.push(null, null, policyPeriod, openForEdit, true, jobWizardHelper)
    }
    
    // 'value' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at BOPLocationsPanelSet.pcf: line 91, column 79
    function sortValue_10 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.Location == policyPeriod.PrimaryLocation
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at BOPLocationsPanelSet.pcf: line 99, column 48
    function sortValue_11 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.Location.LocationNum
    }
    
    // 'value' attribute on CheckBoxCell (id=NonSpecificLocation_Cell) at BOPLocationsPanelSet.pcf: line 103, column 75
    function sortValue_12 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.Location.AccountLocation.NonSpecific
    }
    
    // 'value' attribute on TextCell (id=LocationCode_Cell) at BOPLocationsPanelSet.pcf: line 108, column 76
    function sortValue_13 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.Location.AccountLocation.LocationCode
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at BOPLocationsPanelSet.pcf: line 114, column 76
    function sortValue_14 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.Location.AccountLocation.LocationName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at BOPLocationsPanelSet.pcf: line 120, column 90
    function sortValue_15 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.Location.addressString(",", false, false)
    }
    
    // 'value' attribute on BooleanRadioCell (id=InSync_Cell) at BOPLocationsPanelSet.pcf: line 125, column 50
    function sortValue_16 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.Location.isUpToDate()
    }
    
    // 'value' attribute on TypeKeyCell (id=PreferredCoverageCurrency_Cell) at BOPLocationsPanelSet.pcf: line 132, column 75
    function sortValue_18 (bopLocation :  entity.BOPLocation) : java.lang.Object {
      return bopLocation.PreferredCoverageCurrency
    }
    
    // 'toRemove' attribute on RowIterator at BOPLocationsPanelSet.pcf: line 75, column 46
    function toRemove_54 (bopLocation :  entity.BOPLocation) : void {
      policyPeriod.BOPLine.removeFromLineSpecificLocations(bopLocation)
    }
    
    // 'value' attribute on RowIterator at BOPLocationsPanelSet.pcf: line 75, column 46
    function value_55 () : entity.BOPLocation[] {
      return policyPeriod.BOPLine.BOPLocations
    }
    
    // 'visible' attribute on BooleanRadioCell (id=InSync_Cell) at BOPLocationsPanelSet.pcf: line 125, column 50
    function visible_17 () : java.lang.Boolean {
      return policyPeriod.Promoted
    }
    
    // 'visible' attribute on TypeKeyCell (id=PreferredCoverageCurrency_Cell) at BOPLocationsPanelSet.pcf: line 132, column 75
    function visible_19 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on PanelRef at BOPLocationsPanelSet.pcf: line 144, column 93
    function visible_60 () : java.lang.Boolean {
      return policyPeriod.PolicyLocations.Count > 0 and selectedLocation != null
    }
    
    property get selectedLocation () : BOPLocation {
      return getCurrentSelection(1) as BOPLocation
    }
    
    property set selectedLocation ($arg :  BOPLocation) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}