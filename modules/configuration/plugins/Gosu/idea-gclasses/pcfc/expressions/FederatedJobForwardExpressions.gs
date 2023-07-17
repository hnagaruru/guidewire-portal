package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedJobForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedJobForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/forwards/federated/FederatedJobForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedJobForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (jobNumber :  java.lang.String, accountPublicId :  java.lang.String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at FederatedJobForward.pcf: line 22, column 36
    function action_1 () : void {
      JobForward.go(jobEntity)
    }
    
    // 'action' attribute on ForwardCondition at FederatedJobForward.pcf: line 25, column 36
    function action_4 () : void {
      gw.api.web.desktop.data.ResolverRedirectHelper.jobForward(accountPublicId, jobNumber)
    }
    
    // 'action' attribute on ForwardCondition at FederatedJobForward.pcf: line 22, column 36
    function action_dest_2 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(jobEntity)
    }
    
    // 'condition' attribute on ForwardCondition at FederatedJobForward.pcf: line 22, column 36
    function condition_3 () : java.lang.Boolean {
      return jobEntity!=null
    }
    
    // 'condition' attribute on ForwardCondition at FederatedJobForward.pcf: line 25, column 36
    function condition_5 () : java.lang.Boolean {
      return jobEntity==null
    }
    
    // 'initialValue' attribute on Variable at FederatedJobForward.pcf: line 16, column 26
    function initialValue_0 () : entity.Job {
      return Job.finder.findJobByJobNumber(jobNumber)
    }
    
    override property get CurrentLocation () : pcf.FederatedJobForward {
      return super.CurrentLocation as pcf.FederatedJobForward
    }
    
    property get accountPublicId () : java.lang.String {
      return getVariableValue("accountPublicId", 0) as java.lang.String
    }
    
    property set accountPublicId ($arg :  java.lang.String) {
      setVariableValue("accountPublicId", 0, $arg)
    }
    
    property get jobEntity () : entity.Job {
      return getVariableValue("jobEntity", 0) as entity.Job
    }
    
    property set jobEntity ($arg :  entity.Job) {
      setVariableValue("jobEntity", 0, $arg)
    }
    
    property get jobNumber () : java.lang.String {
      return getVariableValue("jobNumber", 0) as java.lang.String
    }
    
    property set jobNumber ($arg :  java.lang.String) {
      setVariableValue("jobNumber", 0, $arg)
    }
    
    
  }
  
  
}