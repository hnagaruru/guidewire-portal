package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/reinstatement/JobWizardBillingToolbarButtonSet.Reinstatement.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardBillingToolbarButtonSet_ReinstatementExpressions {
  @javax.annotation.Generated("config/web/pcf/job/reinstatement/JobWizardBillingToolbarButtonSet.Reinstatement.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardBillingToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 56, column 21
    function action_10 () : void {
      if (jobWizardHelper.revalidateModel()) {policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod) wizard.saveDraft()}
    }
    
    // 'action' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 62, column 67
    function action_12 () : void {
      HandlePreemptionPopup.push(wizard, jobWizardHelper, policyPeriod, true)
    }
    
    // 'action' attribute on ToolbarButton (id=ResolveWithFutureBoundPeriods) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 69, column 80
    function action_15 () : void {
      if (jobWizardHelper.revalidateModel()) {policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod) jobWizardHelper.applyChangesToFutureBoundRenewal(policyPeriod)}
    }
    
    // 'action' attribute on ToolbarButton (id=ResolveWithFutureUnboundPeriods) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 76, column 82
    function action_17 () : void {
      if (jobWizardHelper.revalidateModel()) {policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod) jobWizardHelper.applyChangesToFutureUnboundRenewal(policyPeriod)}
    }
    
    // 'action' attribute on ToolbarButton (id=Reinstate) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 83, column 59
    function action_19 () : void {
      jobWizardHelper.startIssueProcess(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'action' attribute on ToolbarButton (id=WithdrawJob) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 90, column 58
    function action_21 () : void {
      jobWizardHelper.withdraw(policyPeriod); PolicyFileForward.go(policyPeriod.PolicyNumber)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 37, column 56
    function action_4 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=QuoteOrReview) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 43, column 62
    function action_7 () : void {
      jobWizardHelper.requestQuote(policyPeriod, jobWizardHelper.getQuoteStep(policyPeriod))
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 50, column 54
    function action_9 () : void {
      reinstatementProcess.edit(); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 62, column 67
    function action_dest_13 () : pcf.api.Destination {
      return pcf.HandlePreemptionPopup.createDestination(wizard, jobWizardHelper, policyPeriod, true)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 37, column 56
    function action_dest_5 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 23, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 27, column 29
    function initialValue_1 () : Reinstatement {
      return job as Reinstatement
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 31, column 43
    function initialValue_2 () : gw.job.ReinstatementProcess {
      return policyPeriod.ReinstatementProcess
    }
    
    // 'visible' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 62, column 67
    function visible_11 () : java.lang.Boolean {
      return reinstatementProcess.canHandlePreemptions().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=ResolveWithFutureBoundPeriods) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 69, column 80
    function visible_14 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canApplyChangesToFutureBoundRenewal()
    }
    
    // 'visible' attribute on ToolbarButton (id=ResolveWithFutureUnboundPeriods) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 76, column 82
    function visible_16 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canApplyChangesToFutureUnboundRenewal()
    }
    
    // 'visible' attribute on ToolbarButton (id=Reinstate) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 83, column 59
    function visible_18 () : java.lang.Boolean {
      return reinstatementProcess.canReinstate().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=WithdrawJob) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 90, column 58
    function visible_20 () : java.lang.Boolean {
      return reinstatementProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 37, column 56
    function visible_3 () : java.lang.Boolean {
      return reinstatementProcess.canReleaseLock()
    }
    
    // 'visible' attribute on ToolbarButton (id=QuoteOrReview) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 43, column 62
    function visible_6 () : java.lang.Boolean {
      return reinstatementProcess.canRequestQuote().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.Reinstatement.pcf: line 50, column 54
    function visible_8 () : java.lang.Boolean {
      return reinstatementProcess.canEdit().Okay
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
    
    property get reinstatement () : Reinstatement {
      return getVariableValue("reinstatement", 0) as Reinstatement
    }
    
    property set reinstatement ($arg :  Reinstatement) {
      setVariableValue("reinstatement", 0, $arg)
    }
    
    property get reinstatementProcess () : gw.job.ReinstatementProcess {
      return getVariableValue("reinstatementProcess", 0) as gw.job.ReinstatementProcess
    }
    
    property set reinstatementProcess ($arg :  gw.job.ReinstatementProcess) {
      setVariableValue("reinstatementProcess", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}