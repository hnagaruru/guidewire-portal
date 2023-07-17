package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/PolicyContactListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyContactListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/PolicyContactListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyContactListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at PolicyContactListViewTile.pcf: line 34, column 40
    function action_0 () : void {
      contactHelper.goToContact(contact)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PolicyContactListViewTile.pcf: line 34, column 40
    function valueRoot_2 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PolicyContactListViewTile.pcf: line 34, column 40
    function value_1 () : java.lang.String {
      return contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at PolicyContactListViewTile.pcf: line 40, column 34
    function value_4 () : java.lang.String {
      return contact.Roles
    }
    
    property get contact () : gw.api.web.dashboard.ui.contact.ContactHelper.AccountContactWithRole {
      return getIteratedValue(1) as gw.api.web.dashboard.ui.contact.ContactHelper.AccountContactWithRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/PolicyContactListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyContactListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=PolicyContactListViewTile) at PolicyContactListViewTile.pcf: line 11, column 53
    function action_10 () : void {
      PolicyFile_Contacts.push(policyPeriod, asOfDate)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=PolicyContactListViewTile) at PolicyContactListViewTile.pcf: line 11, column 53
    function action_dest_11 () : pcf.api.Destination {
      return pcf.PolicyFile_Contacts.createDestination(policyPeriod, asOfDate)
    }
    
    // 'initialValue' attribute on Variable at PolicyContactListViewTile.pcf: line 21, column 61
    function initialValue_8 () : gw.api.web.dashboard.ui.contact.ContactHelper {
      return gw.api.web.dashboard.ui.contact.ContactHelper.forPolicyPeriod(policyPeriod)
    }
    
    // 'value' attribute on RowIterator at PolicyContactListViewTile.pcf: line 26, column 90
    function value_7 () : gw.api.web.dashboard.ui.contact.ContactHelper.AccountContactWithRole[] {
      return contactHelper.Contacts
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=PolicyContactListViewTile) at PolicyContactListViewTile.pcf: line 11, column 53
    function visible_9 () : java.lang.Boolean {
      return contactHelper.ViewMoreVisible
    }
    
    property get asOfDate () : Date {
      return getRequireValue("asOfDate", 0) as Date
    }
    
    property set asOfDate ($arg :  Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get contactHelper () : gw.api.web.dashboard.ui.contact.ContactHelper {
      return getVariableValue("contactHelper", 0) as gw.api.web.dashboard.ui.contact.ContactHelper
    }
    
    property set contactHelper ($arg :  gw.api.web.dashboard.ui.contact.ContactHelper) {
      setVariableValue("contactHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}