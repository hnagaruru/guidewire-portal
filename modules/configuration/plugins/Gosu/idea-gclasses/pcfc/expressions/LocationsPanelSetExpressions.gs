package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/LocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LocationsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/LocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends LocationsEdit_DPExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Loc_Cell) at LocationsPanelSet.pcf: line 101, column 48
    function action_24 () : void {
      LocationPopup.push(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=LocationCode_Cell) at LocationsPanelSet.pcf: line 112, column 30
    function action_32 () : void {
      LocationPopup.push(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at LocationsPanelSet.pcf: line 119, column 30
    function action_37 () : void {
      LocationPopup.push(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=Address_Cell) at LocationsPanelSet.pcf: line 126, column 30
    function action_42 () : void {
      LocationPopup.push(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=Loc_Cell) at LocationsPanelSet.pcf: line 101, column 48
    function action_dest_25 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=LocationCode_Cell) at LocationsPanelSet.pcf: line 112, column 30
    function action_dest_33 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at LocationsPanelSet.pcf: line 119, column 30
    function action_dest_38 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'action' attribute on TextCell (id=Address_Cell) at LocationsPanelSet.pcf: line 126, column 30
    function action_dest_43 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, location, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'condition' attribute on ToolbarFlag at LocationsPanelSet.pcf: line 80, column 33
    function condition_18 () : java.lang.Boolean {
      return !location.PrimaryLoc
    }
    
    // 'validationExpression' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at LocationsPanelSet.pcf: line 93, column 67
    function validationExpression_20 () : java.lang.Object {
      return policyPeriod.PrimaryLocation != null ? null : DisplayKey.get("Web.Policy.LocationContainer.Location.PrimaryLocationError.SelectAtleastOne")
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at LocationsPanelSet.pcf: line 101, column 48
    function valueRoot_27 () : java.lang.Object {
      return location
    }
    
    // 'value' attribute on CheckBoxCell (id=NonSpecificLocation_Cell) at LocationsPanelSet.pcf: line 105, column 63
    function valueRoot_30 () : java.lang.Object {
      return location.AccountLocation
    }
    
    // 'value' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at LocationsPanelSet.pcf: line 93, column 67
    function value_21 () : java.lang.Boolean {
      return location == policyPeriod.PrimaryLocation
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at LocationsPanelSet.pcf: line 101, column 48
    function value_26 () : java.lang.Integer {
      return location.LocationNum
    }
    
    // 'value' attribute on CheckBoxCell (id=NonSpecificLocation_Cell) at LocationsPanelSet.pcf: line 105, column 63
    function value_29 () : java.lang.Boolean {
      return location.AccountLocation.NonSpecific
    }
    
    // 'value' attribute on TextCell (id=LocationCode_Cell) at LocationsPanelSet.pcf: line 112, column 30
    function value_34 () : java.lang.String {
      return location.AccountLocation.LocationCode
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at LocationsPanelSet.pcf: line 119, column 30
    function value_39 () : java.lang.String {
      return location.AccountLocation.LocationName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at LocationsPanelSet.pcf: line 126, column 30
    function value_44 () : java.lang.String {
      return location.addressString(",", false, false)
    }
    
    // 'value' attribute on BooleanRadioCell (id=InSync_Cell) at LocationsPanelSet.pcf: line 131, column 50
    function value_46 () : java.lang.Boolean {
      return location.isUpToDate()
    }
    
    // 'visible' attribute on BooleanRadioCell (id=InSync_Cell) at LocationsPanelSet.pcf: line 131, column 50
    function visible_47 () : java.lang.Boolean {
      return policyPeriod.Promoted
    }
    
    property get location () : entity.PolicyLocation {
      return getIteratedValue(2) as entity.PolicyLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/LocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LocationsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedAccountLocation) at LocationsPanelSet.pcf: line 51, column 50
    function action_4 () : void {
      LocationPopup.push(unassignedAccountLocation, null, policyPeriod, openForEdit, true, supportsNonSpecificLocation);
    }
    
    // 'label' attribute on MenuItem (id=UnassignedAccountLocation) at LocationsPanelSet.pcf: line 51, column 50
    function label_5 () : java.lang.Object {
      return unassignedAccountLocation
    }
    
    property get unassignedAccountLocation () : entity.AccountLocation {
      return getIteratedValue(1) as entity.AccountLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/LocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationsEdit_DPExpressionsImpl extends LocationsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at LocationsPanelSet.pcf: line 139, column 111
    function available_52 () : java.lang.Boolean {
      return selectedLocation != null
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at LocationsPanelSet.pcf: line 139, column 111
    function def_onEnter_54 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(selectedLocation?.getCoverableLocation(policyPeriod), false, null)
    }
    
    // 'def' attribute on PanelRef at LocationsPanelSet.pcf: line 143, column 93
    function def_onEnter_57 (def :  pcf.LocationDetailCV) : void {
      def.onEnter(selectedLocation, false, supportsNonSpecificLocation)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at LocationsPanelSet.pcf: line 139, column 111
    function def_refreshVariables_55 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(selectedLocation?.getCoverableLocation(policyPeriod), false, null)
    }
    
    // 'def' attribute on PanelRef at LocationsPanelSet.pcf: line 143, column 93
    function def_refreshVariables_58 (def :  pcf.LocationDetailCV) : void {
      def.refreshVariables(selectedLocation, false, supportsNonSpecificLocation)
    }
    
    // 'pickLocation' attribute on RowIterator at LocationsPanelSet.pcf: line 77, column 49
    function pickLocation_49 () : void {
      LocationPopup.push(null, null, policyPeriod, openForEdit, true, supportsNonSpecificLocation)
    }
    
    // 'value' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at LocationsPanelSet.pcf: line 93, column 67
    function sortValue_10 (location :  entity.PolicyLocation) : java.lang.Object {
      return location == policyPeriod.PrimaryLocation
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at LocationsPanelSet.pcf: line 101, column 48
    function sortValue_11 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.LocationNum
    }
    
    // 'value' attribute on CheckBoxCell (id=NonSpecificLocation_Cell) at LocationsPanelSet.pcf: line 105, column 63
    function sortValue_12 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.AccountLocation.NonSpecific
    }
    
    // 'value' attribute on TextCell (id=LocationCode_Cell) at LocationsPanelSet.pcf: line 112, column 30
    function sortValue_13 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.AccountLocation.LocationCode
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at LocationsPanelSet.pcf: line 119, column 30
    function sortValue_14 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.AccountLocation.LocationName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at LocationsPanelSet.pcf: line 126, column 30
    function sortValue_15 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.addressString(",", false, false)
    }
    
    // 'value' attribute on BooleanRadioCell (id=InSync_Cell) at LocationsPanelSet.pcf: line 131, column 50
    function sortValue_16 (location :  entity.PolicyLocation) : java.lang.Object {
      return location.isUpToDate()
    }
    
    // 'toRemove' attribute on RowIterator at LocationsPanelSet.pcf: line 77, column 49
    function toRemove_50 (location :  entity.PolicyLocation) : void {
      policyPeriod.removeLocation(location)
    }
    
    // 'value' attribute on RowIterator at LocationsPanelSet.pcf: line 77, column 49
    function value_51 () : entity.PolicyLocation[] {
      return policyPeriod.PolicyLocations
    }
    
    // 'visible' attribute on BooleanRadioCell (id=InSync_Cell) at LocationsPanelSet.pcf: line 131, column 50
    function visible_17 () : java.lang.Boolean {
      return policyPeriod.Promoted
    }
    
    // 'visible' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at LocationsPanelSet.pcf: line 139, column 111
    function visible_53 () : java.lang.Boolean {
      return selectedLocation != null and selectedLocation?.getCoverableLocation(policyPeriod)!= null
    }
    
    // 'visible' attribute on PanelRef at LocationsPanelSet.pcf: line 143, column 93
    function visible_56 () : java.lang.Boolean {
      return policyPeriod.PolicyLocations.Count > 0 and selectedLocation != null
    }
    
    property get selectedLocation () : PolicyLocation {
      return getCurrentSelection(1) as PolicyLocation
    }
    
    property set selectedLocation ($arg :  PolicyLocation) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/LocationsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=addAllLocationsButton) at LocationsPanelSet.pcf: line 59, column 108
    function action_9 () : void {
      policyPeriod.addLocations(unassignedAccountLocations)
    }
    
    // 'available' attribute on ToolbarButton (id=addLocationButton) at LocationsPanelSet.pcf: line 39, column 112
    function available_7 () : java.lang.Boolean {
      return unassignedAccountLocations.Count > 0
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=setToPrimary) at LocationsPanelSet.pcf: line 34, column 87
    function checkedRowAction_2 (location :  entity.PolicyLocation, CheckedValue :  entity.PolicyLocation) : void {
      policyPeriod.PrimaryLocation = CheckedValue
    }
    
    // 'initialValue' attribute on Variable at LocationsPanelSet.pcf: line 20, column 60
    function initialValue_0 () : java.util.List<entity.AccountLocation> {
      return policyPeriod.getUnassignedAccountLocations(supportsNonSpecificLocation)
    }
    
    // 'showRemoveConfirmMessage' attribute on IteratorButtons at LocationsPanelSet.pcf: line 28, column 146
    function showConfirmMessage_1 () : java.lang.Boolean {
      return policyPeriod.Lines.where(\ p -> p.PolicyLocationCanBeRemovedWithoutRemovingAssociatedRisks).HasElements
    }
    
    // 'sortBy' attribute on IteratorSort at LocationsPanelSet.pcf: line 47, column 30
    function sortBy_3 (unassignedAccountLocation :  entity.AccountLocation) : java.lang.Object {
      return unassignedAccountLocation.LocationNum
    }
    
    // 'value' attribute on MenuItemIterator (id=UnassignedAccountLocationIterator) at LocationsPanelSet.pcf: line 44, column 70
    function value_6 () : java.util.List<entity.AccountLocation> {
      return unassignedAccountLocations
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
    
    property get supportsNonSpecificLocation () : boolean {
      return getRequireValue("supportsNonSpecificLocation", 0) as java.lang.Boolean
    }
    
    property set supportsNonSpecificLocation ($arg :  boolean) {
      setRequireValue("supportsNonSpecificLocation", 0, $arg)
    }
    
    property get unassignedAccountLocations () : java.util.List<entity.AccountLocation> {
      return getVariableValue("unassignedAccountLocations", 0) as java.util.List<entity.AccountLocation>
    }
    
    property set unassignedAccountLocations ($arg :  java.util.List<entity.AccountLocation>) {
      setVariableValue("unassignedAccountLocations", 0, $arg)
    }
    
    
  }
  
  
}