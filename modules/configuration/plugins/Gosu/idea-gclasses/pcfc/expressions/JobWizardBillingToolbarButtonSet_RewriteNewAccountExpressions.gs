package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardBillingToolbarButtonSet_RewriteNewAccountExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardBillingToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 57, column 21
    function action_10 () : void {
      if (jobWizardHelper.revalidateModel()) {policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod) wizard.saveDraft()}
    }
    
    // 'action' attribute on ToolbarButton (id=BindRewriteNewAccount) at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 64, column 71
    function action_12 () : void {
      jobWizardHelper.startIssueProcess(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'action' attribute on ToolbarButton (id=WithdrawJob) at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 71, column 62
    function action_14 () : void {
      wizard.saveDraft(); jobWizardHelper.withdrawInNewBundle(policyPeriod); wizard.cancel(); JobComplete.go(rewriteNewAccount, policyPeriod);
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 38, column 60
    function action_4 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"),"UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=QuoteOrReview) at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 66
    function action_7 () : void {
      jobWizardHelper.requestQuote(policyPeriod, jobWizardHelper.getQuoteStep(policyPeriod))
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 51, column 58
    function action_9 () : void {
      rewriteNewAccountProcess.edit(); policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 38, column 60
    function action_dest_5 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"),"UWApproval")
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 23, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 28, column 33
    function initialValue_1 () : RewriteNewAccount {
      return job as RewriteNewAccount
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 32, column 47
    function initialValue_2 () : gw.job.RewriteNewAccountProcess {
      return policyPeriod.RewriteNewAccountProcess
    }
    
    // 'visible' attribute on ToolbarButton (id=BindRewriteNewAccount) at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 64, column 71
    function visible_11 () : java.lang.Boolean {
      return rewriteNewAccountProcess.canRewriteNewAccount().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=WithdrawJob) at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 71, column 62
    function visible_13 () : java.lang.Boolean {
      return rewriteNewAccountProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 38, column 60
    function visible_3 () : java.lang.Boolean {
      return rewriteNewAccountProcess.canReleaseLock()
    }
    
    // 'visible' attribute on ToolbarButton (id=QuoteOrReview) at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 66
    function visible_6 () : java.lang.Boolean {
      return rewriteNewAccountProcess.canRequestQuote().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.RewriteNewAccount.pcf: line 51, column 58
    function visible_8 () : java.lang.Boolean {
      return rewriteNewAccountProcess.canEdit().Okay
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
    
    property get rewriteNewAccount () : RewriteNewAccount {
      return getVariableValue("rewriteNewAccount", 0) as RewriteNewAccount
    }
    
    property set rewriteNewAccount ($arg :  RewriteNewAccount) {
      setVariableValue("rewriteNewAccount", 0, $arg)
    }
    
    property get rewriteNewAccountProcess () : gw.job.RewriteNewAccountProcess {
      return getVariableValue("rewriteNewAccountProcess", 0) as gw.job.RewriteNewAccountProcess
    }
    
    property set rewriteNewAccountProcess ($arg :  gw.job.RewriteNewAccountProcess) {
      setVariableValue("rewriteNewAccountProcess", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}