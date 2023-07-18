package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/JobWizardBillingToolbarButtonSet.Submission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardBillingToolbarButtonSet_SubmissionExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/JobWizardBillingToolbarButtonSet.Submission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardBillingToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 70, column 53
    function action_11 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=QuoteOrReview) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 76, column 96
    function action_15 () : void {
      jobWizardHelper.invalidateIterators(); jobWizardHelper.requestQuote(policyPeriod, jobWizardHelper.getQuoteStep(policyPeriod)) 
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 84, column 51
    function action_17 () : void {
      policyPeriodBillingInstructionsManager.clearInvoiceStreamState(); submissionProcess.edit(); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 91, column 56
    function action_20 () : void {
      if (jobWizardHelper.revalidateModel()) {policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod) wizard.saveDraft()}
    }
    
    // 'action' attribute on ToolbarButton (id=ConvertToFullApp) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 97, column 63
    function action_22 () : void {
      jobWizardHelper.convertQuickQuoteToFullApp(submissionProcess, policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=NewVersion) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 108, column 41
    function action_24 () : void {
      policyPeriodBillingInstructionsManager.validate(); jobWizardHelper.attemptNewVersion(policyPeriod, job)
    }
    
    // 'action' attribute on MenuItem (id=SideBySide) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 114, column 41
    function action_27 () : void {
      policyPeriodBillingInstructionsManager.validate(); sideBySideHelper.attemptSideBySide(2)
    }
    
    // 'action' attribute on MenuItem (id=ViewSideBySide) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 119, column 38
    function action_29 () : void {
      policyPeriodBillingInstructionsManager.validate(); jobWizardHelper.goToStep("SideBySide")
    }
    
    // 'action' attribute on MenuItem (id=BindOnly) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 131, column 28
    function action_32 () : void {
      jobWizardHelper.startIssueProcess(policyPeriod, policyPeriodBillingInstructionsManager, false, true)
    }
    
    // 'action' attribute on MenuItem (id=BindAndIssue) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 137, column 29
    function action_34 () : void {
      jobWizardHelper.startIssueProcess(policyPeriod, policyPeriodBillingInstructionsManager, true, true)
    }
    
    // 'action' attribute on MenuItem (id=WithdrawJob) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 150, column 60
    function action_37 () : void {
      jobWizardHelper.withdraw(policyPeriod); JobComplete.go(submission, policyPeriod);
    }
    
    // 'action' attribute on MenuItem (id=Decline) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 156, column 59
    function action_39 () : void {
      wizard.saveDraft(); DeclineReasonPopup.push(submission, policyPeriod, wizard)
    }
    
    // 'action' attribute on MenuItem (id=NotTakenJob) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 162, column 59
    function action_41 () : void {
      wizard.saveDraft(); NotTakenReasonPopup.push(submission, policyPeriod, wizard)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 70, column 53
    function action_dest_12 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Submission.pcf: line 23, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Submission.pcf: line 27, column 26
    function initialValue_1 () : Submission {
      return job as Submission
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Submission.pcf: line 31, column 40
    function initialValue_2 () : gw.job.SubmissionProcess {
      return policyPeriod.SubmissionProcess
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Submission.pcf: line 35, column 48
    function initialValue_3 () : gw.lob.common.SideBySideUIHelper {
      return new gw.lob.common.SideBySideUIHelper(policyPeriod, wizard, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Submission.pcf: line 40, column 23
    function initialValue_4 () : boolean {
      return (not policyPeriod.UWLockedAndNoOverride) and submissionProcess.canMakeNewVersion().Okay 
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Submission.pcf: line 45, column 23
    function initialValue_5 () : boolean {
      return sideBySideHelper.canAttemptSideBySide()
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Submission.pcf: line 49, column 23
    function initialValue_6 () : boolean {
      return perm.PolicyPeriod.view(policyPeriod) and policyPeriod.Job.hasMultiplePeriods()and policyPeriod.Job.SideBySide
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Submission.pcf: line 54, column 23
    function initialValue_7 () : boolean {
      return policyPeriod.mustInvalidateQuoteBeforeReleasingUWEditLock(User.util.CurrentUser.UWAuthorityProfiles)
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Submission.pcf: line 58, column 23
    function initialValue_8 () : boolean {
      return submissionProcess.canBind().Okay
    }
    
    // 'initialValue' attribute on Variable at JobWizardBillingToolbarButtonSet.Submission.pcf: line 62, column 23
    function initialValue_9 () : boolean {
      return submissionProcess.canIssue().Okay
    }
    
    // 'label' attribute on MenuItem (id=NewVersion) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 108, column 41
    function label_25 () : java.lang.Object {
      return sideBySideHelper.getVersionLabel()
    }
    
    // 'showConfirmMessage' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 70, column 53
    function showConfirmMessage_13 () : java.lang.Boolean {
      return releaseLockShowConfirmMessage
    }
    
    // 'showConfirmMessage' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 84, column 51
    function showConfirmMessage_18 () : java.lang.Boolean {
      return canBind or policyPeriod.Submission.QuickMode
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 70, column 53
    function visible_10 () : java.lang.Boolean {
      return submissionProcess.canReleaseLock()
    }
    
    // 'visible' attribute on ToolbarButton (id=QuoteOrReview) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 76, column 96
    function visible_14 () : java.lang.Boolean {
      return submissionProcess.canRequestQuote().Okay and not submission.QuickerQuickQuote
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 84, column 51
    function visible_16 () : java.lang.Boolean {
      return submissionProcess.canEdit().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Draft) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 91, column 56
    function visible_19 () : java.lang.Boolean {
      return submissionProcess.canSaveDraft().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=ConvertToFullApp) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 97, column 63
    function visible_21 () : java.lang.Boolean {
      return submissionProcess.canConvertToFullApp().Okay
    }
    
    // 'visible' attribute on MenuItem (id=NewVersion) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 108, column 41
    function visible_23 () : java.lang.Boolean {
      return canPerformNewVersion
    }
    
    // 'visible' attribute on MenuItem (id=SideBySide) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 114, column 41
    function visible_26 () : java.lang.Boolean {
      return canPerformSideBySide
    }
    
    // 'visible' attribute on MenuItem (id=ViewSideBySide) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 119, column 38
    function visible_28 () : java.lang.Boolean {
      return canViewSideBySide
    }
    
    // 'visible' attribute on ToolbarButton (id=Versions) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 102, column 83
    function visible_30 () : java.lang.Boolean {
      return canPerformNewVersion or canPerformSideBySide or canViewSideBySide
    }
    
    // 'visible' attribute on MenuItem (id=BindOnly) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 131, column 28
    function visible_31 () : java.lang.Boolean {
      return canBind
    }
    
    // 'visible' attribute on MenuItem (id=BindAndIssue) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 137, column 29
    function visible_33 () : java.lang.Boolean {
      return canIssue
    }
    
    // 'visible' attribute on ToolbarButton (id=BindOptions) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 125, column 87
    function visible_35 () : java.lang.Boolean {
      return submissionProcess.canBind().Okay or submissionProcess.canIssue().Okay
    }
    
    // 'visible' attribute on MenuItem (id=WithdrawJob) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 150, column 60
    function visible_36 () : java.lang.Boolean {
      return submissionProcess.canWithdrawJob().Okay
    }
    
    // 'visible' attribute on MenuItem (id=Decline) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 156, column 59
    function visible_38 () : java.lang.Boolean {
      return submissionProcess.canDeclineJob().Okay
    }
    
    // 'visible' attribute on MenuItem (id=NotTakenJob) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 162, column 59
    function visible_40 () : java.lang.Boolean {
      return submissionProcess.canNotTakeJob().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=CloseOptions) at JobWizardBillingToolbarButtonSet.Submission.pcf: line 143, column 141
    function visible_42 () : java.lang.Boolean {
      return submissionProcess.canWithdrawJob().Okay or submissionProcess.canDeclineJob().Okay or submissionProcess.canNotTakeJob().Okay
    }
    
    property get canBind () : boolean {
      return getVariableValue("canBind", 0) as java.lang.Boolean
    }
    
    property set canBind ($arg :  boolean) {
      setVariableValue("canBind", 0, $arg)
    }
    
    property get canIssue () : boolean {
      return getVariableValue("canIssue", 0) as java.lang.Boolean
    }
    
    property set canIssue ($arg :  boolean) {
      setVariableValue("canIssue", 0, $arg)
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
    
    property get releaseLockShowConfirmMessage () : boolean {
      return getVariableValue("releaseLockShowConfirmMessage", 0) as java.lang.Boolean
    }
    
    property set releaseLockShowConfirmMessage ($arg :  boolean) {
      setVariableValue("releaseLockShowConfirmMessage", 0, $arg)
    }
    
    property get sideBySideHelper () : gw.lob.common.SideBySideUIHelper {
      return getVariableValue("sideBySideHelper", 0) as gw.lob.common.SideBySideUIHelper
    }
    
    property set sideBySideHelper ($arg :  gw.lob.common.SideBySideUIHelper) {
      setVariableValue("sideBySideHelper", 0, $arg)
    }
    
    property get submission () : Submission {
      return getVariableValue("submission", 0) as Submission
    }
    
    property set submission ($arg :  Submission) {
      setVariableValue("submission", 0, $arg)
    }
    
    property get submissionProcess () : gw.job.SubmissionProcess {
      return getVariableValue("submissionProcess", 0) as gw.job.SubmissionProcess
    }
    
    property set submissionProcess ($arg :  gw.job.SubmissionProcess) {
      setVariableValue("submissionProcess", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}