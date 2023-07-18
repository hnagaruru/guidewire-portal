package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewrite/JobWizardBillingToolbarButtonSet.Rewrite.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardBillingToolbarButtonSet_RewriteExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewrite/JobWizardBillingToolbarButtonSet.Rewrite.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardBillingToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 57, column 21
    function action_10 () : void {
      if (jobWizardHelper.revalidateModel()) {policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod) wizard.saveDraft()}
    }
    
    // 'action' attribute on ToolbarButton (id=BindRewrite) at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 64, column 51
    function action_12 () : void {
      jobWizardHelper.startIssueProcess(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'action' attribute on ToolbarButton (id=WithdrawJob) at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 71, column 52
    function action_14 () : void {
      jobWizardHelper.withdraw(policyPeriod); PolicyFileForward.go(policyPeriod.PolicyNumber);
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 38, column 50
    function action_4 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"),"UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=QuoteOrReview) at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 44, column 56
    function action_7 () : void {
      jobWizardHelper.requestQuote(policyPeriod, jobWizardHelper.getQuoteStep(policyPeriod))
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 51, column 48
    function action_9 () : void {
      rewriteProcess.edit(); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 38, column 50
    function action_dest_5 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"),"UWApproval")
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 23, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 28, column 23
    function initialValue_1 () : Rewrite {
      return job as Rewrite
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 32, column 37
    function initialValue_2 () : gw.job.RewriteProcess {
      return policyPeriod.RewriteProcess
    }
    
    // 'visible' attribute on ToolbarButton (id=BindRewrite) at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 64, column 51
    function visible_11 () : java.lang.Boolean {
      return rewriteProcess.canRewrite().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=WithdrawJob) at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 71, column 52
    function visible_13 () : java.lang.Boolean {
      return rewriteProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 38, column 50
    function visible_3 () : java.lang.Boolean {
      return rewriteProcess.canReleaseLock()
    }
    
    // 'visible' attribute on ToolbarButton (id=QuoteOrReview) at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 44, column 56
    function visible_6 () : java.lang.Boolean {
      return rewriteProcess.canRequestQuote().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.Rewrite.pcf: line 51, column 48
    function visible_8 () : java.lang.Boolean {
      return rewriteProcess.canEdit().Okay
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
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getRequireValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setRequireValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    property get rewrite () : Rewrite {
      return getVariableValue("rewrite", 0) as Rewrite
    }
    
    property set rewrite ($arg :  Rewrite) {
      setVariableValue("rewrite", 0, $arg)
    }
    
    property get rewriteProcess () : gw.job.RewriteProcess {
      return getVariableValue("rewriteProcess", 0) as gw.job.RewriteProcess
    }
    
    property set rewriteProcess ($arg :  gw.job.RewriteProcess) {
      setVariableValue("rewriteProcess", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}