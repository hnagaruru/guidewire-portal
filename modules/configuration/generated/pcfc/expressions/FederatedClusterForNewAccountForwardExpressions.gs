package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedClusterForNewAccountForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedClusterForNewAccountForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedClusterForNewAccountForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedClusterForNewAccountForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at FederatedClusterForNewAccountForward.pcf: line 12, column 9
    function action_0 () : void {
      gw.api.web.desktop.data.ResolverRedirectHelper.nextAccountForward()
    }
    
    override property get CurrentLocation () : pcf.FederatedClusterForNewAccountForward {
      return super.CurrentLocation as pcf.FederatedClusterForNewAccountForward
    }
    
    
  }
  
  
}