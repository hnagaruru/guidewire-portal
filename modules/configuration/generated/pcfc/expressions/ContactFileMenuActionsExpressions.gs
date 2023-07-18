package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ContactFileMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactFileMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFileMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactFileMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ContactFileMenuActions_NewAccount) at ContactFileMenuActions.pcf: line 17, column 78
    function action_0 () : void {
      CreateAccountForContact.go(contact, false)
    }
    
    // 'action' attribute on MenuItem (id=ContactFileMenuActions_NewAccount) at ContactFileMenuActions.pcf: line 17, column 78
    function action_dest_1 () : pcf.api.Destination {
      return pcf.CreateAccountForContact.createDestination(contact, false)
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}