package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedClusterForNewSubmissionForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedClusterForNewSubmissionForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedClusterForNewSubmissionForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedClusterForNewSubmissionForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at FederatedClusterForNewSubmissionForward.pcf: line 12, column 9
    function action_0 () : void {
      gw.api.web.desktop.data.ResolverRedirectHelper.nextSubmissionForward()
    }
    
    override property get CurrentLocation () : pcf.FederatedClusterForNewSubmissionForward {
      return super.CurrentLocation as pcf.FederatedClusterForNewSubmissionForward
    }
    
    
  }
  
  
}