package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at AccountForward.pcf: line 14, column 41
    function action_1 () : void {
      AccountFileForward.go(savedAccount)
    }
    
    // 'action' attribute on ForwardCondition at AccountForward.pcf: line 16, column 40
    function action_4 () : void {
      pcf.AccountSearch.go()
    }
    
    // 'action' attribute on ForwardCondition at AccountForward.pcf: line 14, column 41
    function action_dest_2 () : pcf.api.Destination {
      return pcf.AccountFileForward.createDestination(savedAccount)
    }
    
    // 'action' attribute on ForwardCondition at AccountForward.pcf: line 16, column 40
    function action_dest_5 () : pcf.api.Destination {
      return pcf.AccountSearch.createDestination()
    }
    
    // 'canVisit' attribute on Forward (id=AccountForward) at AccountForward.pcf: line 7, column 25
    static function canVisit_6 () : java.lang.Boolean {
      return perm.System.viewaccount
    }
    
    // 'condition' attribute on ForwardCondition at AccountForward.pcf: line 14, column 41
    function condition_3 () : java.lang.Boolean {
      return savedAccount != null
    }
    
    // 'initialValue' attribute on Variable at AccountForward.pcf: line 11, column 30
    function initialValue_0 () : entity.Account {
      return gw.api.web.util.SessionUtil.getSavedAccount()
    }
    
    override property get CurrentLocation () : pcf.AccountForward {
      return super.CurrentLocation as pcf.AccountForward
    }
    
    property get savedAccount () : entity.Account {
      return getVariableValue("savedAccount", 0) as entity.Account
    }
    
    property set savedAccount ($arg :  entity.Account) {
      setVariableValue("savedAccount", 0, $arg)
    }
    
    
  }
  
  
}