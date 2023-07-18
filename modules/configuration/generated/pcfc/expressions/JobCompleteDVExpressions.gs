package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/JobCompleteDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobCompleteDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/JobCompleteDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends JobCompleteDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on BulletPointTextInput (id=ViewPreemptedPolicy_Input) at JobCompleteDV.pcf: line 35, column 44
    function actionAvailable_13 () : java.lang.Boolean {
      return (User.util.CurrentUser as User).canView( preemptedJob )
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewPreemptedPolicy_Input) at JobCompleteDV.pcf: line 35, column 44
    function action_11 () : void {
      JobForward.go(preemptedJob)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewPreemptedPolicy_Input) at JobCompleteDV.pcf: line 35, column 44
    function action_dest_12 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(preemptedJob)
    }
    
    // 'value' attribute on BulletPointTextInput (id=ViewPreemptedPolicy_Input) at JobCompleteDV.pcf: line 35, column 44
    function value_14 () : java.lang.String {
      return DisplayKey.get("Web.JobComplete.PreemptedMessage", job.DisplayType, preemptedJob.DisplayType, preemptedJob.JobNumber)
    }
    
    // 'visible' attribute on BulletPointTextInput (id=ViewPreemptedPolicy_Input) at JobCompleteDV.pcf: line 35, column 44
    function visible_10 () : java.lang.Boolean {
      return policyPeriod.Promoted
    }
    
    property get preemptedJob () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/JobCompleteDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobCompleteDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ResolveWithFutureBoundPeriods_Input) at JobCompleteDV.pcf: line 19, column 91
    function action_1 () : void {
      gw.api.web.job.JobWizardHelper.applyChangesToFutureBoundRenewal(policyPeriod)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewJob_Input) at JobCompleteDV.pcf: line 41, column 69
    function action_19 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewPolicy_Input) at JobCompleteDV.pcf: line 46, column 72
    function action_25 () : void {
      PolicyFileForward.go(policyPeriod.PolicyNumber, policyPeriod.Policy.LastViewableBoundPeriod.EditEffectiveDate)
    }
    
    // 'action' attribute on BulletPointTextInput (id=SubmissionManager_Input) at JobCompleteDV.pcf: line 51, column 83
    function action_31 () : void {
      SubmissionManager.go(job.Policy.Account)
    }
    
    // 'action' attribute on BulletPointTextInput (id=SubmitAnother_Input) at JobCompleteDV.pcf: line 56, column 75
    function action_35 () : void {
      NewSubmission.push()
    }
    
    // 'action' attribute on BulletPointTextInput (id=ReviewChanges_Input) at JobCompleteDV.pcf: line 61, column 75
    function action_39 () : void {
      JobForward.go(job, policyPeriod)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ReturnToDesktop_Input) at JobCompleteDV.pcf: line 65, column 85
    function action_42 () : void {
      Desktop.go()
    }
    
    // 'action' attribute on BulletPointTextInput (id=ResolveWithFutureUnboundPeriods_Input) at JobCompleteDV.pcf: line 25, column 93
    function action_6 () : void {
      gw.api.web.job.JobWizardHelper.applyChangesToFutureUnboundRenewal(policyPeriod)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewJob_Input) at JobCompleteDV.pcf: line 41, column 69
    function action_dest_20 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ViewPolicy_Input) at JobCompleteDV.pcf: line 46, column 72
    function action_dest_26 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyPeriod.PolicyNumber, policyPeriod.Policy.LastViewableBoundPeriod.EditEffectiveDate)
    }
    
    // 'action' attribute on BulletPointTextInput (id=SubmissionManager_Input) at JobCompleteDV.pcf: line 51, column 83
    function action_dest_32 () : pcf.api.Destination {
      return pcf.SubmissionManager.createDestination(job.Policy.Account)
    }
    
    // 'action' attribute on BulletPointTextInput (id=SubmitAnother_Input) at JobCompleteDV.pcf: line 56, column 75
    function action_dest_36 () : pcf.api.Destination {
      return pcf.NewSubmission.createDestination()
    }
    
    // 'action' attribute on BulletPointTextInput (id=ReviewChanges_Input) at JobCompleteDV.pcf: line 61, column 75
    function action_dest_40 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job, policyPeriod)
    }
    
    // 'action' attribute on BulletPointTextInput (id=ReturnToDesktop_Input) at JobCompleteDV.pcf: line 65, column 85
    function action_dest_43 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    // 'value' attribute on InputIterator at JobCompleteDV.pcf: line 29, column 34
    function value_17 () : entity.Job[] {
      return policyPeriod.PreemptedJobsIfBoundNow
    }
    
    // 'value' attribute on BulletPointTextInput (id=ResolveWithFutureBoundPeriods_Input) at JobCompleteDV.pcf: line 19, column 91
    function value_2 () : java.lang.String {
      return DisplayKey.get("Web.JobComplete.ResolveWithFutureBoundPeriods", job.DisplayType)
    }
    
    // 'value' attribute on BulletPointTextInput (id=ViewJob_Input) at JobCompleteDV.pcf: line 41, column 69
    function value_21 () : java.lang.String {
      return gw.web.job.JobUIHelper.viewJobText(job)
    }
    
    // 'value' attribute on BulletPointTextInput (id=ViewPolicy_Input) at JobCompleteDV.pcf: line 46, column 72
    function value_27 () : java.lang.String {
      return DisplayKey.get("Web.SubmissionComplete.ViewPolicy", policyPeriod.PolicyNumberDisplayString)
    }
    
    // 'value' attribute on BulletPointTextInput (id=ResolveWithFutureUnboundPeriods_Input) at JobCompleteDV.pcf: line 25, column 93
    function value_7 () : java.lang.String {
      return DisplayKey.get("Web.JobComplete.ResolveWithFutureUnboundPeriods", job.DisplayType)
    }
    
    // 'visible' attribute on BulletPointTextInput (id=ResolveWithFutureBoundPeriods_Input) at JobCompleteDV.pcf: line 19, column 91
    function visible_0 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.showResolveWithFutureBoundPeriods(policyPeriod)
    }
    
    // 'visible' attribute on BulletPointTextInput (id=ViewJob_Input) at JobCompleteDV.pcf: line 41, column 69
    function visible_18 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.showViewJob(policyPeriod)
    }
    
    // 'visible' attribute on BulletPointTextInput (id=ViewPolicy_Input) at JobCompleteDV.pcf: line 46, column 72
    function visible_24 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.showViewPolicy(policyPeriod)
    }
    
    // 'visible' attribute on BulletPointTextInput (id=SubmissionManager_Input) at JobCompleteDV.pcf: line 51, column 83
    function visible_30 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.showGoToSubmissionManager(policyPeriod)
    }
    
    // 'visible' attribute on BulletPointTextInput (id=SubmitAnother_Input) at JobCompleteDV.pcf: line 56, column 75
    function visible_34 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.showSubmitAnother(policyPeriod)
    }
    
    // 'visible' attribute on BulletPointTextInput (id=ReviewChanges_Input) at JobCompleteDV.pcf: line 61, column 75
    function visible_38 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.showReviewChanges(policyPeriod)
    }
    
    // 'visible' attribute on BulletPointTextInput (id=ResolveWithFutureUnboundPeriods_Input) at JobCompleteDV.pcf: line 25, column 93
    function visible_5 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.showResolveWithFutureUnboundPeriods(policyPeriod)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}