package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ContactFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactFileExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactFileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  Contact) : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 20, column 21
    function action_0 () : void {
      pcf.ContactFile_Summary.go(contact)
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 40, column 21
    function action_10 () : void {
      pcf.ContactFile_Claims.go(contact)
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 44, column 21
    function action_12 () : void {
      pcf.ContactFile_Billing.go(contact)
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 24, column 21
    function action_2 () : void {
      pcf.ContactFile_Details.go(contact)
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 28, column 21
    function action_4 () : void {
      pcf.ContactFile_Accounts.go(contact)
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 32, column 21
    function action_6 () : void {
      pcf.ContactFile_Policies.go(contact)
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 36, column 21
    function action_8 () : void {
      pcf.ContactFile_WorkOrders.go(contact)
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 20, column 21
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ContactFile_Summary.createDestination(contact)
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 40, column 21
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ContactFile_Claims.createDestination(contact)
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 44, column 21
    function action_dest_13 () : pcf.api.Destination {
      return pcf.ContactFile_Billing.createDestination(contact)
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 24, column 21
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ContactFile_Details.createDestination(contact)
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 28, column 21
    function action_dest_5 () : pcf.api.Destination {
      return pcf.ContactFile_Accounts.createDestination(contact)
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 32, column 21
    function action_dest_7 () : pcf.api.Destination {
      return pcf.ContactFile_Policies.createDestination(contact)
    }
    
    // 'location' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 36, column 21
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ContactFile_WorkOrders.createDestination(contact)
    }
    
    // 'afterEnter' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 11, column 86
    function afterEnter_14 () : void {
      gw.api.web.util.SessionUtil.addToContactsList(contact)
    }
    
    // LocationGroup (id=ContactFile) at ContactFile.pcf: line 11, column 86
    static function firstVisitableChildDestinationMethod_21 (contact :  Contact) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.ContactFile_Summary.createDestination(contact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ContactFile_Details.createDestination(contact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ContactFile_Accounts.createDestination(contact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ContactFile_Policies.createDestination(contact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ContactFile_WorkOrders.createDestination(contact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ContactFile_Claims.createDestination(contact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ContactFile_Billing.createDestination(contact)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'menuActions' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 11, column 86
    function menuActions_onEnter_15 (def :  pcf.ContactFileMenuActions) : void {
      def.onEnter(contact)
    }
    
    // 'menuActions' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 11, column 86
    function menuActions_refreshVariables_16 (def :  pcf.ContactFileMenuActions) : void {
      def.refreshVariables(contact)
    }
    
    // 'parent' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 11, column 86
    static function parent_17 (contact :  Contact) : pcf.api.Destination {
      return pcf.ContactForward.createDestination(contact)
    }
    
    // 'tabBar' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 11, column 86
    function tabBar_onEnter_18 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 11, column 86
    function tabBar_refreshVariables_19 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on LocationGroup (id=ContactFile) at ContactFile.pcf: line 11, column 86
    static function title_20 (contact :  Contact) : java.lang.Object {
      return DisplayKey.get("Web.ContactFile.LocationGroup.Title", contact)
    }
    
    override property get CurrentLocation () : pcf.ContactFile {
      return super.CurrentLocation as pcf.ContactFile
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    
  }
  
  
}