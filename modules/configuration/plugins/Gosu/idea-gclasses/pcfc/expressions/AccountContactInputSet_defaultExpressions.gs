package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountContactInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountContactInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountContactInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountContactInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get acctContactRole () : AccountContactRole {
      return getRequireValue("acctContactRole", 0) as AccountContactRole
    }
    
    property set acctContactRole ($arg :  AccountContactRole) {
      setRequireValue("acctContactRole", 0, $arg)
    }
    
    
  }
  
  
}