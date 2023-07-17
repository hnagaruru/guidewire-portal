package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedAccountForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedAccountForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedAccountForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedAccountForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (accountPublicId :  java.lang.String, accountNumber :  java.lang.String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at FederatedAccountForward.pcf: line 22, column 42
    function action_1 () : void {
      pcf.AccountFileDoRetrievalForward.go( accountEntity.AccountNumber)
    }
    
    // 'action' attribute on ForwardCondition at FederatedAccountForward.pcf: line 25, column 42
    function action_4 () : void {
      gw.api.web.desktop.data.ResolverRedirectHelper.accountForward(accountPublicId, accountNumber)
    }
    
    // 'action' attribute on ForwardCondition at FederatedAccountForward.pcf: line 22, column 42
    function action_dest_2 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination( accountEntity.AccountNumber)
    }
    
    // 'condition' attribute on ForwardCondition at FederatedAccountForward.pcf: line 22, column 42
    function condition_3 () : java.lang.Boolean {
      return accountEntity != null
    }
    
    // 'condition' attribute on ForwardCondition at FederatedAccountForward.pcf: line 25, column 42
    function condition_5 () : java.lang.Boolean {
      return accountEntity == null
    }
    
    // 'initialValue' attribute on Variable at FederatedAccountForward.pcf: line 16, column 30
    function initialValue_0 () : entity.Account {
      return Account.finder.findAccountByPublicId(accountPublicId)
    }
    
    override property get CurrentLocation () : pcf.FederatedAccountForward {
      return super.CurrentLocation as pcf.FederatedAccountForward
    }
    
    property get accountEntity () : entity.Account {
      return getVariableValue("accountEntity", 0) as entity.Account
    }
    
    property set accountEntity ($arg :  entity.Account) {
      setVariableValue("accountEntity", 0, $arg)
    }
    
    property get accountNumber () : java.lang.String {
      return getVariableValue("accountNumber", 0) as java.lang.String
    }
    
    property set accountNumber ($arg :  java.lang.String) {
      setVariableValue("accountNumber", 0, $arg)
    }
    
    property get accountPublicId () : java.lang.String {
      return getVariableValue("accountPublicId", 0) as java.lang.String
    }
    
    property set accountPublicId ($arg :  java.lang.String) {
      setVariableValue("accountPublicId", 0, $arg)
    }
    
    
  }
  
  
}