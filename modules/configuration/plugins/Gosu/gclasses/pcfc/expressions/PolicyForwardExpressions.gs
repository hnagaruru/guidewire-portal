package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at PolicyForward.pcf: line 9, column 79
    function action_0 () : void {
      gw.api.web.policy.PolicyForwardUtil.moveToPolicyDestination()
    }
    
    // 'canVisit' attribute on Forward (id=PolicyForward) at PolicyForward.pcf: line 7, column 24
    static function canVisit_1 () : java.lang.Boolean {
      return perm.System.viewpolicyfile
    }
    
    override property get CurrentLocation () : pcf.PolicyForward {
      return super.CurrentLocation as pcf.PolicyForward
    }
    
    
  }
  
  
}