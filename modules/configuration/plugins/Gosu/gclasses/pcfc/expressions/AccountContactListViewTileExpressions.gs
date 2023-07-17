package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/AccountContactListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountContactListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/AccountContactListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountContactListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=AccountContactListViewTile) at AccountContactListViewTile.pcf: line 11, column 53
    function action_10 () : void {
      AccountFile_Contacts.push(account)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=AccountContactListViewTile) at AccountContactListViewTile.pcf: line 11, column 53
    function action_dest_11 () : pcf.api.Destination {
      return pcf.AccountFile_Contacts.createDestination(account)
    }
    
    // 'initialValue' attribute on Variable at AccountContactListViewTile.pcf: line 18, column 61
    function initialValue_8 () : gw.api.web.dashboard.ui.contact.ContactHelper {
      return gw.api.web.dashboard.ui.contact.ContactHelper.forAccount(account, gw.api.web.dashboard.ui.DashboardParameters.ListViewLimitShort)
    }
    
    // 'value' attribute on RowIterator at AccountContactListViewTile.pcf: line 23, column 90
    function value_7 () : gw.api.web.dashboard.ui.contact.ContactHelper.AccountContactWithRole[] {
      return contactHelper.Contacts
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=AccountContactListViewTile) at AccountContactListViewTile.pcf: line 11, column 53
    function visible_9 () : java.lang.Boolean {
      return contactHelper.ViewMoreVisible
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get contactHelper () : gw.api.web.dashboard.ui.contact.ContactHelper {
      return getVariableValue("contactHelper", 0) as gw.api.web.dashboard.ui.contact.ContactHelper
    }
    
    property set contactHelper ($arg :  gw.api.web.dashboard.ui.contact.ContactHelper) {
      setVariableValue("contactHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/overview/AccountContactListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountContactListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at AccountContactListViewTile.pcf: line 31, column 40
    function action_0 () : void {
      contactHelper.goToContact(contact)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AccountContactListViewTile.pcf: line 31, column 40
    function valueRoot_2 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AccountContactListViewTile.pcf: line 31, column 40
    function value_1 () : java.lang.String {
      return contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at AccountContactListViewTile.pcf: line 37, column 34
    function value_4 () : java.lang.String {
      return contact.Roles
    }
    
    property get contact () : gw.api.web.dashboard.ui.contact.ContactHelper.AccountContactWithRole {
      return getIteratedValue(1) as gw.api.web.dashboard.ui.contact.ContactHelper.AccountContactWithRole
    }
    
    
  }
  
  
}