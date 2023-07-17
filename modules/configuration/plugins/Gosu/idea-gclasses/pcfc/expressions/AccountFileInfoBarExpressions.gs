package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFileInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFileInfoBarExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFileInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFileInfoBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on InfoBarElement (id=AccountName) at AccountFileInfoBar.pcf: line 17, column 57
    function value_0 () : java.lang.Object {
      return account.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on InfoBarElement (id=Account) at AccountFileInfoBar.pcf: line 21, column 38
    function value_1 () : java.lang.Object {
      return account.AccountNumber
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    
  }
  
  
}