package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFileForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFileForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFileForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFileForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at AccountFileForward.pcf: line 16, column 41
    function action_0 () : void {
      AccountFile.go(account)
    }
    
    // 'action' attribute on ForwardCondition at AccountFileForward.pcf: line 16, column 41
    function action_dest_1 () : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    // 'canVisit' attribute on Forward (id=AccountFileForward) at AccountFileForward.pcf: line 9, column 31
    static function canVisit_2 (account :  Account) : java.lang.Boolean {
      return perm.Account.view(account)
    }
    
    // 'onBeforeForward' attribute on Forward (id=AccountFileForward) at AccountFileForward.pcf: line 9, column 31
    function onBeforeForward_4 () : void {
      gw.api.web.util.SessionUtil.addAccountToHistory(account);
    }
    
    // 'parent' attribute on Forward (id=AccountFileForward) at AccountFileForward.pcf: line 9, column 31
    static function parent_3 (account :  Account) : pcf.api.Destination {
      return pcf.AccountForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.AccountFileForward {
      return super.CurrentLocation as pcf.AccountFileForward
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    
  }
  
  
}