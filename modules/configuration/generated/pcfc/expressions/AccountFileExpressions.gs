package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFileExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 20, column 48
    function action_0 () : void {
      pcf.AccountFile_Summary.go(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 48, column 46
    function action_10 () : void {
      pcf.SubmissionManager.go(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 52, column 46
    function action_12 () : void {
      pcf.UnderwritingFiles.go(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 58, column 21
    function action_14 () : void {
      pcf.AccountFile_RelatedAccounts.go(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 64, column 21
    function action_16 () : void {
      pcf.AccountFile_Documents.go(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 70, column 21
    function action_18 () : void {
      pcf.AccountFile_Notes.go(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 26, column 21
    function action_2 () : void {
      pcf.AccountFile_Contacts.go(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 76, column 21
    function action_20 () : void {
      pcf.AccountFile_Claims.go(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 82, column 21
    function action_22 () : void {
      pcf.AccountFile_Billing.go(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 88, column 21
    function action_24 () : void {
      pcf.AccountFile_History.go(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 32, column 21
    function action_4 () : void {
      pcf.AccountFile_Locations.go(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 38, column 21
    function action_6 () : void {
      pcf.AccountFile_Roles.go(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 44, column 21
    function action_8 () : void {
      pcf.AccountFile_WorkOrders.go(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 20, column 48
    function action_dest_1 () : pcf.api.Destination {
      return pcf.AccountFile_Summary.createDestination(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 48, column 46
    function action_dest_11 () : pcf.api.Destination {
      return pcf.SubmissionManager.createDestination(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 52, column 46
    function action_dest_13 () : pcf.api.Destination {
      return pcf.UnderwritingFiles.createDestination(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 58, column 21
    function action_dest_15 () : pcf.api.Destination {
      return pcf.AccountFile_RelatedAccounts.createDestination(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 64, column 21
    function action_dest_17 () : pcf.api.Destination {
      return pcf.AccountFile_Documents.createDestination(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 70, column 21
    function action_dest_19 () : pcf.api.Destination {
      return pcf.AccountFile_Notes.createDestination(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 76, column 21
    function action_dest_21 () : pcf.api.Destination {
      return pcf.AccountFile_Claims.createDestination(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 82, column 21
    function action_dest_23 () : pcf.api.Destination {
      return pcf.AccountFile_Billing.createDestination(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 88, column 21
    function action_dest_25 () : pcf.api.Destination {
      return pcf.AccountFile_History.createDestination(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 26, column 21
    function action_dest_3 () : pcf.api.Destination {
      return pcf.AccountFile_Contacts.createDestination(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 32, column 21
    function action_dest_5 () : pcf.api.Destination {
      return pcf.AccountFile_Locations.createDestination(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 38, column 21
    function action_dest_7 () : pcf.api.Destination {
      return pcf.AccountFile_Roles.createDestination(account)
    }
    
    // 'location' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 44, column 21
    function action_dest_9 () : pcf.api.Destination {
      return pcf.AccountFile_WorkOrders.createDestination(account)
    }
    
    // LocationGroup (id=AccountFile) at AccountFile.pcf: line 9, column 100
    static function firstVisitableChildDestinationMethod_32 (account :  Account) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.AccountFile_Summary.createDestination(account)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AccountFile_Contacts.createDestination(account)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AccountFile_Locations.createDestination(account)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AccountFile_Roles.createDestination(account)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AccountFile_WorkOrders.createDestination(account)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.SubmissionManager.createDestination(account)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.UnderwritingFiles.createDestination(account)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AccountFile_RelatedAccounts.createDestination(account)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AccountFile_Documents.createDestination(account)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AccountFile_Notes.createDestination(account)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AccountFile_Claims.createDestination(account)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AccountFile_Billing.createDestination(account)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AccountFile_History.createDestination(account)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'menuActions' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 9, column 100
    function menuActions_onEnter_26 (def :  pcf.AccountFileMenuActions) : void {
      def.onEnter(account)
    }
    
    // 'menuActions' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 9, column 100
    function menuActions_refreshVariables_27 (def :  pcf.AccountFileMenuActions) : void {
      def.refreshVariables(account)
    }
    
    // 'parent' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 9, column 100
    static function parent_28 (account :  Account) : pcf.api.Destination {
      return pcf.AccountForward.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 9, column 100
    function tabBar_onEnter_29 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 9, column 100
    function tabBar_refreshVariables_30 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on LocationGroup (id=AccountFile) at AccountFile.pcf: line 9, column 100
    static function title_31 (account :  Account) : java.lang.Object {
      return DisplayKey.get("Web.AccountFile.LocationGroup.Title", account.AccountNumber)
    }
    
    override property get CurrentLocation () : pcf.AccountFile {
      return super.CurrentLocation as pcf.AccountFile
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    
  }
  
  
}