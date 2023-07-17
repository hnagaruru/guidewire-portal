package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ExternalContactFileMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExternalContactFileMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ExternalContactFileMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExternalContactFileMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ContactFileMenuActions_NewAccount) at ExternalContactFileMenuActions.pcf: line 17, column 78
    function action_0 () : void {
      CreateAccountForContact.go(contactSearchResult.convertToContactInNewBundleAndCommit(), false)
    }
    
    // 'action' attribute on MenuItem (id=ContactFileMenuActions_NewAccount) at ExternalContactFileMenuActions.pcf: line 17, column 78
    function action_dest_1 () : pcf.api.Destination {
      return pcf.CreateAccountForContact.createDestination(contactSearchResult.convertToContactInNewBundleAndCommit(), false)
    }
    
    property get contactSearchResult () : gw.plugin.contact.ContactResult {
      return getRequireValue("contactSearchResult", 0) as gw.plugin.contact.ContactResult
    }
    
    property set contactSearchResult ($arg :  gw.plugin.contact.ContactResult) {
      setRequireValue("contactSearchResult", 0, $arg)
    }
    
    
  }
  
  
}