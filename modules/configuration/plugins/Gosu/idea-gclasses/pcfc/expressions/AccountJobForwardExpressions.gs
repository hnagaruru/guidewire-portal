package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountJobForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountJobForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountJobForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountJobForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (job :  Job) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at AccountJobForward.pcf: line 15, column 53
    function action_0 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on ForwardCondition at AccountJobForward.pcf: line 17, column 79
    function action_3 () : void {
      PolicyFileWorkOrdersForward.go(job, job.ResultingBoundPeriod)
    }
    
    // 'action' attribute on ForwardCondition at AccountJobForward.pcf: line 15, column 53
    function action_dest_1 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'action' attribute on ForwardCondition at AccountJobForward.pcf: line 17, column 79
    function action_dest_4 () : pcf.api.Destination {
      return pcf.PolicyFileWorkOrdersForward.createDestination(job, job.ResultingBoundPeriod)
    }
    
    // 'condition' attribute on ForwardCondition at AccountJobForward.pcf: line 15, column 53
    function condition_2 () : java.lang.Boolean {
      return job.ResultingBoundPeriod == null
    }
    
    // 'parent' attribute on Forward (id=AccountJobForward) at AccountJobForward.pcf: line 7, column 31
    static function parent_5 (job :  Job) : pcf.api.Destination {
      return pcf.AccountForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.AccountJobForward {
      return super.CurrentLocation as pcf.AccountJobForward
    }
    
    property get job () : Job {
      return getVariableValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setVariableValue("job", 0, $arg)
    }
    
    
  }
  
  
}