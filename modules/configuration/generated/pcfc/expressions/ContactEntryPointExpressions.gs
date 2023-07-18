package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/Contact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/Contact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on EntryPoint (id=Contact) at Contact.pcf: line 8, column 79
    function location_0 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(Contact.findContactByPublicId(contactPublicId))
    }
    
    property get contactPublicId () : String {
      return getVariableValue("contactPublicId", 0) as String
    }
    
    property set contactPublicId ($arg :  String) {
      setVariableValue("contactPublicId", 0, $arg)
    }
    
    
  }
  
  
}