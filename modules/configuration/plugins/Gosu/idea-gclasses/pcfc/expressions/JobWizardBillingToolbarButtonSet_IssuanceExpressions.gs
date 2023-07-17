package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/issuance/JobWizardBillingToolbarButtonSet.Issuance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardBillingToolbarButtonSet_IssuanceExpressions {
  @javax.annotation.Generated("config/web/pcf/job/issuance/JobWizardBillingToolbarButtonSet.Issuance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardBillingToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 56, column 21
    function action_10 () : void {
      if (jobWizardHelper.revalidateModel()) {policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod) wizard.saveDraft()}
    }
    
    // 'action' attribute on ToolbarButton (id=Issue) at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 63, column 50
    function action_12 () : void {
      jobWizardHelper.startIssueProcess(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'action' attribute on ToolbarButton (id=WithdrawJob) at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 70, column 53
    function action_14 () : void {
      jobWizardHelper.withdraw(policyPeriod); JobComplete.go(issuance, policyPeriod);
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 37, column 51
    function action_4 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=QuoteOrReview) at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 43, column 57
    function action_7 () : void {
      jobWizardHelper.requestQuote(policyPeriod, jobWizardHelper.getQuoteStep(policyPeriod))
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 50, column 49
    function action_9 () : void {
      issuanceProcess.edit(); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 37, column 51
    function action_dest_5 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 23, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 27, column 24
    function initialValue_1 () : Issuance {
      return job as Issuance
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 31, column 38
    function initialValue_2 () : gw.job.IssuanceProcess {
      return policyPeriod.IssuanceProcess
    }
    
    // 'visible' attribute on ToolbarButton (id=Issue) at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 63, column 50
    function visible_11 () : java.lang.Boolean {
      return issuanceProcess.canIssue().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=WithdrawJob) at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 70, column 53
    function visible_13 () : java.lang.Boolean {
      return issuanceProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 37, column 51
    function visible_3 () : java.lang.Boolean {
      return issuanceProcess.canReleaseLock()
    }
    
    // 'visible' attribute on ToolbarButton (id=QuoteOrReview) at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 43, column 57
    function visible_6 () : java.lang.Boolean {
      return issuanceProcess.canRequestQuote().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.Issuance.pcf: line 50, column 49
    function visible_8 () : java.lang.Boolean {
      return issuanceProcess.canEdit().Okay
    }
    
    property get issuance () : Issuance {
      return getVariableValue("issuance", 0) as Issuance
    }
    
    property set issuance ($arg :  Issuance) {
      setVariableValue("issuance", 0, $arg)
    }
    
    property get issuanceProcess () : gw.job.IssuanceProcess {
      return getVariableValue("issuanceProcess", 0) as gw.job.IssuanceProcess
    }
    
    property set issuanceProcess ($arg :  gw.job.IssuanceProcess) {
      setVariableValue("issuanceProcess", 0, $arg)
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
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}