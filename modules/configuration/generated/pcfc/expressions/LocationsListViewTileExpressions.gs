package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/LocationsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LocationsListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/LocationsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LocationsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=name_Cell) at LocationsListViewTile.pcf: line 31, column 53
    function action_2 () : void {
      AccountFile_Locations.push(account, location)
    }
    
    // 'action' attribute on TextCell (id=name_Cell) at LocationsListViewTile.pcf: line 31, column 53
    function action_dest_3 () : pcf.api.Destination {
      return pcf.AccountFile_Locations.createDestination(account, location)
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at LocationsListViewTile.pcf: line 31, column 53
    function value_4 () : java.lang.String {
      return locationHelper.getName(location)
    }
    
    // 'value' attribute on TextCell (id=address_Cell) at LocationsListViewTile.pcf: line 36, column 56
    function value_6 () : java.lang.String {
      return locationHelper.getAddress(location)
    }
    
    property get location () : entity.AccountLocation {
      return getIteratedValue(1) as entity.AccountLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/overview/LocationsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationsListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=LocationsListViewTile) at LocationsListViewTile.pcf: line 11, column 54
    function action_11 () : void {
      AccountFile_Locations.push(account)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=LocationsListViewTile) at LocationsListViewTile.pcf: line 11, column 54
    function action_dest_12 () : pcf.api.Destination {
      return pcf.AccountFile_Locations.createDestination(account)
    }
    
    // 'initialValue' attribute on Variable at LocationsListViewTile.pcf: line 19, column 63
    function initialValue_9 () : gw.api.web.dashboard.ui.location.LocationHelper {
      return new gw.api.web.dashboard.ui.location.LocationHelper(account)
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at LocationsListViewTile.pcf: line 31, column 53
    function sortValue_0 (location :  entity.AccountLocation) : java.lang.Object {
      return locationHelper.getName(location)
    }
    
    // 'value' attribute on TextCell (id=address_Cell) at LocationsListViewTile.pcf: line 36, column 56
    function sortValue_1 (location :  entity.AccountLocation) : java.lang.Object {
      return locationHelper.getAddress(location)
    }
    
    // 'value' attribute on RowIterator at LocationsListViewTile.pcf: line 24, column 44
    function value_8 () : entity.AccountLocation[] {
      return locationHelper.Locations
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=LocationsListViewTile) at LocationsListViewTile.pcf: line 11, column 54
    function visible_10 () : java.lang.Boolean {
      return locationHelper.ViewMoreVisible
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get locationHelper () : gw.api.web.dashboard.ui.location.LocationHelper {
      return getVariableValue("locationHelper", 0) as gw.api.web.dashboard.ui.location.LocationHelper
    }
    
    property set locationHelper ($arg :  gw.api.web.dashboard.ui.location.LocationHelper) {
      setVariableValue("locationHelper", 0, $arg)
    }
    
    
  }
  
  
}