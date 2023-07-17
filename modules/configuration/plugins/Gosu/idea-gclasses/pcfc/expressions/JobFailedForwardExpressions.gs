package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/JobFailedForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobFailedForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/JobFailedForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobFailedForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (job :  Job, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 18, column 42
    function action_0 () : void {
      JobComplete.go(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 30, column 44
    function action_12 () : void {
      JobComplete.go(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 33, column 45
    function action_15 () : void {
      JobComplete.go(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 36, column 39
    function action_18 () : void {
      JobComplete.go(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 39, column 49
    function action_21 () : void {
      JobComplete.go(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 21, column 44
    function action_3 () : void {
      JobComplete.go(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 24, column 39
    function action_6 () : void {
      JobComplete.go(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 27, column 37
    function action_9 () : void {
      JobComplete.go(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 18, column 42
    function action_dest_1 () : pcf.api.Destination {
      return pcf.JobComplete.createDestination(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 27, column 37
    function action_dest_10 () : pcf.api.Destination {
      return pcf.JobComplete.createDestination(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 30, column 44
    function action_dest_13 () : pcf.api.Destination {
      return pcf.JobComplete.createDestination(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 33, column 45
    function action_dest_16 () : pcf.api.Destination {
      return pcf.JobComplete.createDestination(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 36, column 39
    function action_dest_19 () : pcf.api.Destination {
      return pcf.JobComplete.createDestination(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 39, column 49
    function action_dest_22 () : pcf.api.Destination {
      return pcf.JobComplete.createDestination(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 21, column 44
    function action_dest_4 () : pcf.api.Destination {
      return pcf.JobComplete.createDestination(job, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobFailedForward.pcf: line 24, column 39
    function action_dest_7 () : pcf.api.Destination {
      return pcf.JobComplete.createDestination(job, policyPeriod)
    }
    
    // 'condition' attribute on ForwardCondition at JobFailedForward.pcf: line 27, column 37
    function condition_11 () : java.lang.Boolean {
      return job typeis Audit
    }
    
    // 'condition' attribute on ForwardCondition at JobFailedForward.pcf: line 30, column 44
    function condition_14 () : java.lang.Boolean {
      return job typeis Cancellation
    }
    
    // 'condition' attribute on ForwardCondition at JobFailedForward.pcf: line 33, column 45
    function condition_17 () : java.lang.Boolean {
      return job typeis Reinstatement
    }
    
    // 'condition' attribute on ForwardCondition at JobFailedForward.pcf: line 18, column 42
    function condition_2 () : java.lang.Boolean {
      return job typeis Submission
    }
    
    // 'condition' attribute on ForwardCondition at JobFailedForward.pcf: line 36, column 39
    function condition_20 () : java.lang.Boolean {
      return job typeis Rewrite
    }
    
    // 'condition' attribute on ForwardCondition at JobFailedForward.pcf: line 39, column 49
    function condition_23 () : java.lang.Boolean {
      return job typeis RewriteNewAccount
    }
    
    // 'condition' attribute on ForwardCondition at JobFailedForward.pcf: line 21, column 44
    function condition_5 () : java.lang.Boolean {
      return job typeis PolicyChange
    }
    
    // 'condition' attribute on ForwardCondition at JobFailedForward.pcf: line 24, column 39
    function condition_8 () : java.lang.Boolean {
      return job typeis Renewal
    }
    
    override property get CurrentLocation () : pcf.JobFailedForward {
      return super.CurrentLocation as pcf.JobFailedForward
    }
    
    property get job () : Job {
      return getVariableValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setVariableValue("job", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}