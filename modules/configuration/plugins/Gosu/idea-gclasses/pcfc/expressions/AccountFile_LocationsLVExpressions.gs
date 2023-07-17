package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_LocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_LocationsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_LocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_LocationsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AccountFile_LocationsLV.pcf: line 27, column 141
    function filter_0 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.Account.Locations.Filter.ShowAll"), \ x -> true)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AccountFile_LocationsLV.pcf: line 29, column 177
    function filter_1 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.Account.Locations.Filter.ShowActive"), \ x -> (x as AccountLocation).Active == true)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AccountFile_LocationsLV.pcf: line 31, column 180
    function filter_2 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.Account.Locations.Filter.ShowInactive"), \ x -> (x as AccountLocation).Active == false)
    }
    
    // 'pickLocation' attribute on RowIterator at AccountFile_LocationsLV.pcf: line 23, column 44
    function pickLocation_44 () : void {
      AccountLocationPopup.push(null, account, CurrentLocation.InEditMode)
    }
    
    // 'value' attribute on BooleanRadioCell (id=Active_Cell) at AccountFile_LocationsLV.pcf: line 48, column 36
    function sortValue_3 (location :  entity.AccountLocation) : java.lang.Object {
      return location.Active
    }
    
    // 'value' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at AccountFile_LocationsLV.pcf: line 54, column 37
    function sortValue_4 (location :  entity.AccountLocation) : java.lang.Object {
      return location.Primary
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at AccountFile_LocationsLV.pcf: line 63, column 42
    function sortValue_5 (location :  entity.AccountLocation) : java.lang.Object {
      return location.LocationNum
    }
    
    // 'value' attribute on CheckBoxCell (id=NonSpecific_Cell) at AccountFile_LocationsLV.pcf: line 67, column 41
    function sortValue_6 (location :  entity.AccountLocation) : java.lang.Object {
      return location.NonSpecific
    }
    
    // 'value' attribute on TextCell (id=LocationCode_Cell) at AccountFile_LocationsLV.pcf: line 74, column 42
    function sortValue_7 (location :  entity.AccountLocation) : java.lang.Object {
      return location.LocationCode
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at AccountFile_LocationsLV.pcf: line 81, column 42
    function sortValue_8 (location :  entity.AccountLocation) : java.lang.Object {
      return location.LocationName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at AccountFile_LocationsLV.pcf: line 87, column 24
    function sortValue_9 (location :  entity.AccountLocation) : java.lang.Object {
      return location.addressString(",", false, false)
    }
    
    // 'value' attribute on RowIterator at AccountFile_LocationsLV.pcf: line 23, column 44
    function value_45 () : entity.AccountLocation[] {
      return account.AccountLocations
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get selectedLocation () : AccountLocation {
      return getRequireValue("selectedLocation", 0) as AccountLocation
    }
    
    property set selectedLocation ($arg :  AccountLocation) {
      setRequireValue("selectedLocation", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_LocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountFile_LocationsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=Loc_Cell) at AccountFile_LocationsLV.pcf: line 63, column 42
    function actionAvailable_21 () : java.lang.Boolean {
      return perm.Account.edit(account)
    }
    
    // 'action' attribute on TextCell (id=Loc_Cell) at AccountFile_LocationsLV.pcf: line 63, column 42
    function action_19 () : void {
      AccountLocationPopup.push(location, account, true)
    }
    
    // 'action' attribute on TextCell (id=LocationCode_Cell) at AccountFile_LocationsLV.pcf: line 74, column 42
    function action_28 () : void {
      AccountLocationPopup.push(location, account, true)
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at AccountFile_LocationsLV.pcf: line 81, column 42
    function action_35 () : void {
      AccountLocationPopup.push(location, account, true)
    }
    
    // 'action' attribute on TextCell (id=Loc_Cell) at AccountFile_LocationsLV.pcf: line 63, column 42
    function action_dest_20 () : pcf.api.Destination {
      return pcf.AccountLocationPopup.createDestination(location, account, true)
    }
    
    // 'action' attribute on TextCell (id=LocationCode_Cell) at AccountFile_LocationsLV.pcf: line 74, column 42
    function action_dest_29 () : pcf.api.Destination {
      return pcf.AccountLocationPopup.createDestination(location, account, true)
    }
    
    // 'action' attribute on TextCell (id=LocationName_Cell) at AccountFile_LocationsLV.pcf: line 81, column 42
    function action_dest_36 () : pcf.api.Destination {
      return pcf.AccountLocationPopup.createDestination(location, account, true)
    }
    
    // 'condition' attribute on ToolbarFlag at AccountFile_LocationsLV.pcf: line 35, column 39
    function condition_10 () : java.lang.Boolean {
      return not location.Primary
    }
    
    // 'condition' attribute on ToolbarFlag at AccountFile_LocationsLV.pcf: line 38, column 33
    function condition_11 () : java.lang.Boolean {
      return not location.Primary and location.Active
    }
    
    // 'condition' attribute on ToolbarFlag at AccountFile_LocationsLV.pcf: line 41, column 35
    function condition_12 () : java.lang.Boolean {
      return not location.InUse
    }
    
    // 'value' attribute on TextCell (id=LocationCode_Cell) at AccountFile_LocationsLV.pcf: line 74, column 42
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      location.LocationCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'highlighted' attribute on Row at AccountFile_LocationsLV.pcf: line 44, column 52
    function highlighted_43 () : java.lang.Boolean {
      return location == selectedLocation
    }
    
    // 'value' attribute on BooleanRadioCell (id=Active_Cell) at AccountFile_LocationsLV.pcf: line 48, column 36
    function valueRoot_14 () : java.lang.Object {
      return location
    }
    
    // 'value' attribute on BooleanRadioCell (id=Active_Cell) at AccountFile_LocationsLV.pcf: line 48, column 36
    function value_13 () : java.lang.Boolean {
      return location.Active
    }
    
    // 'value' attribute on RadioButtonCell (id=PrimaryLocation_Cell) at AccountFile_LocationsLV.pcf: line 54, column 37
    function value_16 () : java.lang.Boolean {
      return location.Primary
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at AccountFile_LocationsLV.pcf: line 63, column 42
    function value_22 () : java.lang.Integer {
      return location.LocationNum
    }
    
    // 'value' attribute on CheckBoxCell (id=NonSpecific_Cell) at AccountFile_LocationsLV.pcf: line 67, column 41
    function value_25 () : java.lang.Boolean {
      return location.NonSpecific
    }
    
    // 'value' attribute on TextCell (id=LocationCode_Cell) at AccountFile_LocationsLV.pcf: line 74, column 42
    function value_31 () : java.lang.String {
      return location.LocationCode
    }
    
    // 'value' attribute on TextCell (id=LocationName_Cell) at AccountFile_LocationsLV.pcf: line 81, column 42
    function value_38 () : java.lang.String {
      return location.LocationName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at AccountFile_LocationsLV.pcf: line 87, column 24
    function value_41 () : java.lang.String {
      return location.addressString(",", false, false)
    }
    
    property get location () : entity.AccountLocation {
      return getIteratedValue(1) as entity.AccountLocation
    }
    
    
  }
  
  
}