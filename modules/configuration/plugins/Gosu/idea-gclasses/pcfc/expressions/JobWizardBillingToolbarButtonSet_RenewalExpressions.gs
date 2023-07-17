package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/renewal/JobWizardBillingToolbarButtonSet.Renewal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardBillingToolbarButtonSet_RenewalExpressions {
  @javax.annotation.Generated("config/web/pcf/job/renewal/JobWizardBillingToolbarButtonSet.Renewal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardBillingToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=RenewalQuote) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 66, column 57
    function action_12 () : void {
      jobWizardHelper.requestQuote(policyPeriod, jobWizardHelper.getQuoteStep(policyPeriod))
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 73, column 48
    function action_14 () : void {
      renewalProcess.edit(); policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicyWorkflow) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 81, column 171
    function action_16 () : void {
      gw.web.job.renewal.JobWizardToolbarButtonSetRenewalUIHelper.editRenewalFromWorkflow(wizard, policyPeriod, renewalProcess, job)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 87, column 21
    function action_18 () : void {
      if (jobWizardHelper.revalidateModel()) {policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod) wizard.saveDraft()}
    }
    
    // 'action' attribute on MenuItem (id=NewVersion) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 98, column 41
    function action_20 () : void {
      gw.web.job.renewal.JobWizardToolbarButtonSetRenewalUIHelper.attemptNewVersion(wizard, jobWizardHelper, policyPeriod, job)
    }
    
    // 'action' attribute on MenuItem (id=SideBySide) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 104, column 41
    function action_23 () : void {
      sideBySideHelper.attemptSideBySide(2)
    }
    
    // 'action' attribute on MenuItem (id=ViewSideBySide) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 109, column 38
    function action_25 () : void {
      jobWizardHelper.goToStep("SideBySide")
    }
    
    // 'action' attribute on MenuItem (id=SendToRenewal) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 121, column 58
    function action_28 () : void {
      policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod) jobWizardHelper.requestRenewRenewal(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=IssueNow) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 128, column 54
    function action_30 () : void {
      policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod) jobWizardHelper.requestIssueJob(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=Withdraw) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 141, column 54
    function action_33 () : void {
      jobWizardHelper.withdraw(policyPeriod); PolicyFileForward.go(policyPeriod.BasedOn, policyPeriod.BasedOn.PeriodStart);
    }
    
    // 'action' attribute on MenuItem (id=SendToNonRenewal) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 147, column 61
    function action_35 () : void {
      renewalProcess.assertNonRenewLeadTime(); RenewalWizard_NonRenewPopup.push(renewal, policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=SendToNotTaken) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 154, column 61
    function action_37 () : void {
      if (jobWizardHelper.revalidateModel()) { renewalProcess.pendingNotTaken(); wizard.finish(); JobComplete.go(renewal, policyPeriod) }
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 60, column 50
    function action_9 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 60, column 50
    function action_dest_10 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 23, column 23
    function initialValue_0 () : Renewal {
      return job as Renewal
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 27, column 30
    function initialValue_1 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 31, column 37
    function initialValue_2 () : gw.job.RenewalProcess {
      return policyPeriod.RenewalProcess
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 35, column 48
    function initialValue_3 () : gw.lob.common.SideBySideUIHelper {
      return new gw.lob.common.SideBySideUIHelper(policyPeriod, wizard, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 40, column 23
    function initialValue_4 () : boolean {
      return (not policyPeriod.UWLockedAndNoOverride) and renewalProcess.canMakeNewVersion().Okay
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 45, column 23
    function initialValue_5 () : boolean {
      return sideBySideHelper.canAttemptSideBySide()
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 49, column 23
    function initialValue_6 () : boolean {
      return perm.PolicyPeriod.view(policyPeriod) and policyPeriod.Job.hasMultiplePeriods()and policyPeriod.Job.SideBySide
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 54, column 23
    function initialValue_7 () : boolean {
      return policyPeriod.ValidQuote
    }
    
    // 'label' attribute on MenuItem (id=NewVersion) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 98, column 41
    function label_21 () : java.lang.Object {
      return sideBySideHelper.getVersionLabel()
    }
    
    // 'showConfirmMessage' attribute on ToolbarButton (id=EditPolicyWorkflow) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 81, column 171
    function showConfirmMessage_17 () : java.lang.Boolean {
      return canEditPolicyWorkflow
    }
    
    // 'visible' attribute on ToolbarButton (id=RenewalQuote) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 66, column 57
    function visible_11 () : java.lang.Boolean {
      return renewalProcess.canManuallyQuote().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 73, column 48
    function visible_13 () : java.lang.Boolean {
      return renewalProcess.canEdit().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicyWorkflow) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 81, column 171
    function visible_15 () : java.lang.Boolean {
      return renewalProcess.ActiveRenewalWorkflow != null and renewalProcess.ActiveRenewalWorkflow.isTriggerAvailable(WorkflowTriggerKey.get("EditPolicy"))
    }
    
    // 'visible' attribute on MenuItem (id=NewVersion) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 98, column 41
    function visible_19 () : java.lang.Boolean {
      return canPerformNewVersion
    }
    
    // 'visible' attribute on MenuItem (id=SideBySide) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 104, column 41
    function visible_22 () : java.lang.Boolean {
      return canPerformSideBySide
    }
    
    // 'visible' attribute on MenuItem (id=ViewSideBySide) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 109, column 38
    function visible_24 () : java.lang.Boolean {
      return canViewSideBySide
    }
    
    // 'visible' attribute on ToolbarButton (id=Versions) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 92, column 83
    function visible_26 () : java.lang.Boolean {
      return canPerformNewVersion or canPerformSideBySide or canViewSideBySide
    }
    
    // 'visible' attribute on MenuItem (id=SendToRenewal) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 121, column 58
    function visible_27 () : java.lang.Boolean {
      return renewalProcess.canPendingRenew().Okay
    }
    
    // 'visible' attribute on MenuItem (id=IssueNow) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 128, column 54
    function visible_29 () : java.lang.Boolean {
      return renewalProcess.canIssueNow().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=BindOptions) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 115, column 92
    function visible_31 () : java.lang.Boolean {
      return renewalProcess.canPendingRenew().Okay or renewalProcess.canIssueNow().Okay
    }
    
    // 'visible' attribute on MenuItem (id=Withdraw) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 141, column 54
    function visible_32 () : java.lang.Boolean {
      return renewalProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on MenuItem (id=SendToNonRenewal) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 147, column 61
    function visible_34 () : java.lang.Boolean {
      return renewalProcess.canPendingNonRenew().Okay
    }
    
    // 'visible' attribute on MenuItem (id=SendToNotTaken) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 154, column 61
    function visible_36 () : java.lang.Boolean {
      return renewalProcess.canPendingNotTaken().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=CloseOptions) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 134, column 142
    function visible_38 () : java.lang.Boolean {
      return renewalProcess.canWithdrawJob().Okay or renewalProcess.canPendingNonRenew().Okay or renewalProcess.canPendingNotTaken().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Renewal.pcf: line 60, column 50
    function visible_8 () : java.lang.Boolean {
      return renewalProcess.canReleaseLock()
    }
    
    property get canEditPolicyWorkflow () : boolean {
      return getVariableValue("canEditPolicyWorkflow", 0) as java.lang.Boolean
    }
    
    property set canEditPolicyWorkflow ($arg :  boolean) {
      setVariableValue("canEditPolicyWorkflow", 0, $arg)
    }
    
    property get canPerformNewVersion () : boolean {
      return getVariableValue("canPerformNewVersion", 0) as java.lang.Boolean
    }
    
    property set canPerformNewVersion ($arg :  boolean) {
      setVariableValue("canPerformNewVersion", 0, $arg)
    }
    
    property get canPerformSideBySide () : boolean {
      return getVariableValue("canPerformSideBySide", 0) as java.lang.Boolean
    }
    
    property set canPerformSideBySide ($arg :  boolean) {
      setVariableValue("canPerformSideBySide", 0, $arg)
    }
    
    property get canViewSideBySide () : boolean {
      return getVariableValue("canViewSideBySide", 0) as java.lang.Boolean
    }
    
    property set canViewSideBySide ($arg :  boolean) {
      setVariableValue("canViewSideBySide", 0, $arg)
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
    
    property get renewal () : Renewal {
      return getVariableValue("renewal", 0) as Renewal
    }
    
    property set renewal ($arg :  Renewal) {
      setVariableValue("renewal", 0, $arg)
    }
    
    property get renewalProcess () : gw.job.RenewalProcess {
      return getVariableValue("renewalProcess", 0) as gw.job.RenewalProcess
    }
    
    property set renewalProcess ($arg :  gw.job.RenewalProcess) {
      setVariableValue("renewalProcess", 0, $arg)
    }
    
    property get sideBySideHelper () : gw.lob.common.SideBySideUIHelper {
      return getVariableValue("sideBySideHelper", 0) as gw.lob.common.SideBySideUIHelper
    }
    
    property set sideBySideHelper ($arg :  gw.lob.common.SideBySideUIHelper) {
      setVariableValue("sideBySideHelper", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}