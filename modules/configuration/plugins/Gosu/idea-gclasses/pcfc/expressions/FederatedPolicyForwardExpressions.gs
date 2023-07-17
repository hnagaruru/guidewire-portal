package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedPolicyForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedPolicyForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedPolicyForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedPolicyForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPublicId :  java.lang.String, policyNumber :  java.lang.String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at FederatedPolicyForward.pcf: line 22, column 41
    function action_1 () : void {
      pcf.PolicyFileForward.go(policyNumber)
    }
    
    // 'action' attribute on ForwardCondition at FederatedPolicyForward.pcf: line 25, column 41
    function action_4 () : void {
      gw.api.web.desktop.data.ResolverRedirectHelper.policyForward(policyPublicId, policyNumber)
    }
    
    // 'action' attribute on ForwardCondition at FederatedPolicyForward.pcf: line 22, column 41
    function action_dest_2 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyNumber)
    }
    
    // 'condition' attribute on ForwardCondition at FederatedPolicyForward.pcf: line 22, column 41
    function condition_3 () : java.lang.Boolean {
      return policyEntity != null
    }
    
    // 'condition' attribute on ForwardCondition at FederatedPolicyForward.pcf: line 25, column 41
    function condition_5 () : java.lang.Boolean {
      return policyEntity == null
    }
    
    // 'initialValue' attribute on Variable at FederatedPolicyForward.pcf: line 16, column 29
    function initialValue_0 () : entity.Policy {
      return Policy.finder.findPolicyByPublicId(policyPublicId)
    }
    
    override property get CurrentLocation () : pcf.FederatedPolicyForward {
      return super.CurrentLocation as pcf.FederatedPolicyForward
    }
    
    property get policyEntity () : entity.Policy {
      return getVariableValue("policyEntity", 0) as entity.Policy
    }
    
    property set policyEntity ($arg :  entity.Policy) {
      setVariableValue("policyEntity", 0, $arg)
    }
    
    property get policyNumber () : java.lang.String {
      return getVariableValue("policyNumber", 0) as java.lang.String
    }
    
    property set policyNumber ($arg :  java.lang.String) {
      setVariableValue("policyNumber", 0, $arg)
    }
    
    property get policyPublicId () : java.lang.String {
      return getVariableValue("policyPublicId", 0) as java.lang.String
    }
    
    property set policyPublicId ($arg :  java.lang.String) {
      setVariableValue("policyPublicId", 0, $arg)
    }
    
    
  }
  
  
}