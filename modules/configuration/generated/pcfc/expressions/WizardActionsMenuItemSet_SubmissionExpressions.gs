package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/WizardActionsMenuItemSet.Submission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WizardActionsMenuItemSet_SubmissionExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/WizardActionsMenuItemSet.Submission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WizardActionsMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=SubmissionInfo) at WizardActionsMenuItemSet.Submission.pcf: line 20, column 78
    function action_0 () : void {
      SubmissionManager.go(job.Policy.Account)
    }
    
    // 'action' attribute on MenuItem (id=SubmissionInfo) at WizardActionsMenuItemSet.Submission.pcf: line 20, column 78
    function action_dest_1 () : pcf.api.Destination {
      return pcf.SubmissionManager.createDestination(job.Policy.Account)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}