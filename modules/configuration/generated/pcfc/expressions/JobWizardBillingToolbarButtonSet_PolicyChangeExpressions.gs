package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/policychange/JobWizardBillingToolbarButtonSet.PolicyChange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardBillingToolbarButtonSet_PolicyChangeExpressions {
  @javax.annotation.Generated("config/web/pcf/job/policychange/JobWizardBillingToolbarButtonSet.PolicyChange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardBillingToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=QuoteOrReview) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 65, column 61
    function action_12 () : void {
      jobWizardHelper.invalidateIterators(); jobWizardHelper.requestQuote(policyPeriod, jobWizardHelper.getQuoteStep(policyPeriod))
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 72, column 53
    function action_14 () : void {
      wizard.saveDraft(); policyChangeProcess.edit(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 78, column 21
    function action_15 () : void {
      if (jobWizardHelper.revalidateModel()) {policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod) wizard.saveDraft()}
    }
    
    // 'action' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 84, column 66
    function action_17 () : void {
      HandlePreemptionPopup.push(wizard, jobWizardHelper, policyPeriod, true)
    }
    
    // 'action' attribute on ToolbarButton (id=ApplyToBoundRenewal) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 91, column 80
    function action_20 () : void {
      if (jobWizardHelper.revalidateModel()) {policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod) jobWizardHelper.applyChangesToFutureBoundRenewal(policyPeriod)}
    }
    
    // 'action' attribute on ToolbarButton (id=ApplyToUnboundRenewal) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 98, column 82
    function action_22 () : void {
      if (jobWizardHelper.revalidateModel()) {policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod) jobWizardHelper.applyChangesToFutureUnboundRenewal(policyPeriod)}
    }
    
    // 'action' attribute on MenuItem (id=NewVersion) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 109, column 41
    function action_24 () : void {
      jobWizardHelper.attemptNewVersion(policyPeriod, job)
    }
    
    // 'action' attribute on MenuItem (id=SideBySide) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 115, column 41
    function action_27 () : void {
      sideBySideHelper.attemptSideBySide(2)
    }
    
    // 'action' attribute on MenuItem (id=ViewSideBySide) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 120, column 38
    function action_29 () : void {
      jobWizardHelper.goToStep("SideBySide")
    }
    
    // 'action' attribute on ToolbarButton (id=BindPolicyChange) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 128, column 26
    function action_32 () : void {
      jobWizardHelper.startIssueProcess(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'action' attribute on ToolbarButton (id=WithdrawJob) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 135, column 57
    function action_34 () : void {
      jobWizardHelper.withdraw(policyPeriod); PolicyFileForward.go(policyPeriod.PolicyNumber);
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 59, column 55
    function action_9 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 59, column 55
    function action_dest_10 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 84, column 66
    function action_dest_18 () : pcf.api.Destination {
      return pcf.HandlePreemptionPopup.createDestination(wizard, jobWizardHelper, policyPeriod, true)
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 23, column 28
    function initialValue_0 () : PolicyChange {
      return job as PolicyChange
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 27, column 30
    function initialValue_1 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 31, column 42
    function initialValue_2 () : gw.job.PolicyChangeProcess {
      return policyPeriod.PolicyChangeProcess
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 35, column 48
    function initialValue_3 () : gw.lob.common.SideBySideUIHelper {
      return new gw.lob.common.SideBySideUIHelper(policyPeriod, wizard, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 40, column 23
    function initialValue_4 () : boolean {
      return (not policyPeriod.UWLockedAndNoOverride) and policyChangeProcess.canMakeNewVersion().Okay
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 45, column 23
    function initialValue_5 () : boolean {
      return sideBySideHelper.canAttemptSideBySide()
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 49, column 23
    function initialValue_6 () : boolean {
      return perm.PolicyPeriod.view(policyPeriod) and policyPeriod.Job.hasMultiplePeriods()and policyPeriod.Job.SideBySide
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 53, column 23
    function initialValue_7 () : boolean {
      return policyChangeProcess.canBind().Okay
    }
    
    // 'label' attribute on MenuItem (id=NewVersion) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 109, column 41
    function label_25 () : java.lang.Object {
      return sideBySideHelper.getVersionLabel()
    }
    
    // 'visible' attribute on ToolbarButton (id=QuoteOrReview) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 65, column 61
    function visible_11 () : java.lang.Boolean {
      return policyChangeProcess.canRequestQuote().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 72, column 53
    function visible_13 () : java.lang.Boolean {
      return policyChangeProcess.canEdit().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 84, column 66
    function visible_16 () : java.lang.Boolean {
      return policyChangeProcess.canHandlePreemptions().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=ApplyToBoundRenewal) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 91, column 80
    function visible_19 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canApplyChangesToFutureBoundRenewal()
    }
    
    // 'visible' attribute on ToolbarButton (id=ApplyToUnboundRenewal) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 98, column 82
    function visible_21 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canApplyChangesToFutureUnboundRenewal()
    }
    
    // 'visible' attribute on MenuItem (id=NewVersion) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 109, column 41
    function visible_23 () : java.lang.Boolean {
      return canPerformNewVersion
    }
    
    // 'visible' attribute on MenuItem (id=SideBySide) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 115, column 41
    function visible_26 () : java.lang.Boolean {
      return canPerformSideBySide
    }
    
    // 'visible' attribute on MenuItem (id=ViewSideBySide) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 120, column 38
    function visible_28 () : java.lang.Boolean {
      return canViewSideBySide
    }
    
    // 'visible' attribute on ToolbarButton (id=Versions) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 103, column 83
    function visible_30 () : java.lang.Boolean {
      return canPerformNewVersion or canPerformSideBySide or canViewSideBySide
    }
    
    // 'visible' attribute on ToolbarButton (id=BindPolicyChange) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 128, column 26
    function visible_31 () : java.lang.Boolean {
      return canBind
    }
    
    // 'visible' attribute on ToolbarButton (id=WithdrawJob) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 135, column 57
    function visible_33 () : java.lang.Boolean {
      return policyChangeProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.PolicyChange.pcf: line 59, column 55
    function visible_8 () : java.lang.Boolean {
      return policyChangeProcess.canReleaseLock()
    }
    
    property get canBind () : boolean {
      return getVariableValue("canBind", 0) as java.lang.Boolean
    }
    
    property set canBind ($arg :  boolean) {
      setVariableValue("canBind", 0, $arg)
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
    
    property get policyChange () : PolicyChange {
      return getVariableValue("policyChange", 0) as PolicyChange
    }
    
    property set policyChange ($arg :  PolicyChange) {
      setVariableValue("policyChange", 0, $arg)
    }
    
    property get policyChangeProcess () : gw.job.PolicyChangeProcess {
      return getVariableValue("policyChangeProcess", 0) as gw.job.PolicyChangeProcess
    }
    
    property set policyChangeProcess ($arg :  gw.job.PolicyChangeProcess) {
      setVariableValue("policyChangeProcess", 0, $arg)
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