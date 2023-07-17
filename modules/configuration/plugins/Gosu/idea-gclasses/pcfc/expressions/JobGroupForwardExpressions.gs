package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/JobGroupForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobGroupForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/JobGroupForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobGroupForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (jobGroup :  JobGroup) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at JobGroupForward.pcf: line 16, column 52
    function action_0 () : void {
      SubmissionGroupDetail.go(jobGroup as SubmissionGroup)
    }
    
    // 'action' attribute on ForwardCondition at JobGroupForward.pcf: line 19, column 49
    function action_3 () : void {
      RenewalGroupDetail.go(jobGroup as RenewalGroup)
    }
    
    // 'action' attribute on ForwardCondition at JobGroupForward.pcf: line 21, column 131
    function action_6 () : void {
      throw new gw.api.util.DisplayableException(DisplayKey.get("Web.Job.Warning.NoPermissionsToAccessPage"))
    }
    
    // 'action' attribute on ForwardCondition at JobGroupForward.pcf: line 16, column 52
    function action_dest_1 () : pcf.api.Destination {
      return pcf.SubmissionGroupDetail.createDestination(jobGroup as SubmissionGroup)
    }
    
    // 'action' attribute on ForwardCondition at JobGroupForward.pcf: line 19, column 49
    function action_dest_4 () : pcf.api.Destination {
      return pcf.RenewalGroupDetail.createDestination(jobGroup as RenewalGroup)
    }
    
    // 'condition' attribute on ForwardCondition at JobGroupForward.pcf: line 16, column 52
    function condition_2 () : java.lang.Boolean {
      return jobGroup typeis SubmissionGroup
    }
    
    // 'condition' attribute on ForwardCondition at JobGroupForward.pcf: line 19, column 49
    function condition_5 () : java.lang.Boolean {
      return jobGroup typeis RenewalGroup
    }
    
    // 'parent' attribute on Forward (id=JobGroupForward) at JobGroupForward.pcf: line 8, column 44
    static function parent_7 (jobGroup :  JobGroup) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(jobGroup.Account)
    }
    
    override property get CurrentLocation () : pcf.JobGroupForward {
      return super.CurrentLocation as pcf.JobGroupForward
    }
    
    property get jobGroup () : JobGroup {
      return getVariableValue("jobGroup", 0) as JobGroup
    }
    
    property set jobGroup ($arg :  JobGroup) {
      setVariableValue("jobGroup", 0, $arg)
    }
    
    
  }
  
  
}