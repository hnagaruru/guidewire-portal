package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ContactFileInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactFileInfoBarExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFileInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactFileInfoBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on InfoBarElement (id=ContactName) at ContactFileInfoBar.pcf: line 17, column 36
    function value_0 () : java.lang.Object {
      return contact.DisplayName
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}