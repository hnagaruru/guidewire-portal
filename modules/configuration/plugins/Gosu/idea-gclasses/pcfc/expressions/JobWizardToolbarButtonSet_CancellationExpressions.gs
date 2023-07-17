package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/cancellation/JobWizardToolbarButtonSet.Cancellation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardToolbarButtonSet_CancellationExpressions {
  @javax.annotation.Generated("config/web/pcf/job/cancellation/JobWizardToolbarButtonSet.Cancellation.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Cancellation.pcf: line 50, column 53
    function action_22 () : void {
      cancellationProcess.edit(); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardToolbarButtonSet.Cancellation.pcf: line 56, column 21
    function action_23 () : void {
      wizard.saveDraft()
    }
    
    // 'action' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardToolbarButtonSet.Cancellation.pcf: line 62, column 66
    function action_25 () : void {
      HandlePreemptionPopup.push(wizard, jobWizardHelper, policyPeriod, true)
    }
    
    // 'action' attribute on ToolbarButton (id=ApplyToBoundRenewal) at JobWizardToolbarButtonSet.Cancellation.pcf: line 69, column 80
    function action_28 () : void {
      jobWizardHelper.applyChangesToFutureBoundRenewal(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=ApplyToUnboundRenewal) at JobWizardToolbarButtonSet.Cancellation.pcf: line 76, column 82
    function action_30 () : void {
      jobWizardHelper.applyChangesToFutureUnboundRenewal(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=SubmitCancellation) at JobWizardToolbarButtonSet.Cancellation.pcf: line 88, column 154
    function action_32 () : void {
      if (jobWizardHelper.revalidateModel()) { cancellationProcess.scheduleCancellation(policyPeriod.EditEffectiveDate); wizard.finish(); JobComplete.go(policyPeriod.Job, policyPeriod) }
    }
    
    // 'action' attribute on MenuItem (id=RescheduleCancellation) at JobWizardToolbarButtonSet.Cancellation.pcf: line 95, column 154
    function action_34 () : void {
      if (jobWizardHelper.revalidateModel()) { cancellationProcess.rescheduleCancellation(policyPeriod.EditEffectiveDate); wizard.finish(); JobComplete.go(policyPeriod.Job, policyPeriod) }
    }
    
    // 'action' attribute on MenuItem (id=CancelNow) at JobWizardToolbarButtonSet.Cancellation.pcf: line 102, column 82
    function action_36 () : void {
      if (jobWizardHelper.revalidateModel()) { cancellationProcess.cancelImmediately(); wizard.finish(); jobWizardHelper.redirectAfterBinding(TC_CANCELING); }
    }
    
    // 'action' attribute on MenuItem (id=RescindCancellation) at JobWizardToolbarButtonSet.Cancellation.pcf: line 114, column 157
    function action_40 () : void {
      if (jobWizardHelper.revalidateModel()) { cancellationProcess.ActiveCancellationWorkflow.invokeTrigger(TC_RESCIND); wizard.finish(); PleaseBePatientPopup.push(policyPeriod, jobWizardHelper, null, new gw.job.patience.BranchStatus( jobWizardHelper, TC_RESCINDING )); }
    }
    
    // 'action' attribute on MenuItem (id=WithdrawJob) at JobWizardToolbarButtonSet.Cancellation.pcf: line 121, column 59
    function action_42 () : void {
      jobWizardHelper.withdraw(policyPeriod); JobComplete.go(cancellation, policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Cancellation.pcf: line 39, column 125
    function action_5 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardToolbarButtonSet.Cancellation.pcf: line 62, column 66
    function action_dest_26 () : pcf.api.Destination {
      return pcf.HandlePreemptionPopup.createDestination(wizard, jobWizardHelper, policyPeriod, true)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Cancellation.pcf: line 39, column 125
    function action_dest_6 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'confirmMessage' attribute on MenuItem (id=CancelNow) at JobWizardToolbarButtonSet.Cancellation.pcf: line 102, column 82
    function confirmMessage_37 () : java.lang.String {
      return getCancelNowMessage()
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Cancellation.pcf: line 20, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Cancellation.pcf: line 24, column 28
    function initialValue_1 () : Cancellation {
      return job as Cancellation
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Cancellation.pcf: line 28, column 42
    function initialValue_2 () : gw.job.CancellationProcess {
      return policyPeriod.CancellationProcess
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Cancellation.pcf: line 33, column 48
    function initialValue_3 () : gw.web.job.JobUIHelper.QuoteType {
      return gw.web.job.JobUIHelper.getQuoteType(policyPeriod)
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function mode_8 () : java.lang.Object {
      return quoteType
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_11 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_13 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_15 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_17 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_19 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_9 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Cancellation.pcf: line 50, column 53
    function visible_21 () : java.lang.Boolean {
      return cancellationProcess.canEdit().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardToolbarButtonSet.Cancellation.pcf: line 62, column 66
    function visible_24 () : java.lang.Boolean {
      return cancellationProcess.canHandlePreemptions().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=ApplyToBoundRenewal) at JobWizardToolbarButtonSet.Cancellation.pcf: line 69, column 80
    function visible_27 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canApplyChangesToFutureBoundRenewal()
    }
    
    // 'visible' attribute on ToolbarButton (id=ApplyToUnboundRenewal) at JobWizardToolbarButtonSet.Cancellation.pcf: line 76, column 82
    function visible_29 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canApplyChangesToFutureUnboundRenewal()
    }
    
    // 'visible' attribute on MenuItem (id=SubmitCancellation) at JobWizardToolbarButtonSet.Cancellation.pcf: line 88, column 154
    function visible_31 () : java.lang.Boolean {
      return cancellationProcess.canScheduleCancellation().Okay and cancellation.InitialNotificationDate == null and not cancellation.ForRewrite  
    }
    
    // 'visible' attribute on MenuItem (id=RescheduleCancellation) at JobWizardToolbarButtonSet.Cancellation.pcf: line 95, column 154
    function visible_33 () : java.lang.Boolean {
      return cancellationProcess.canRescheduleCancellation().Okay and cancellation.InitialNotificationDate != null and not cancellation.ForRewrite
    }
    
    // 'visible' attribute on MenuItem (id=CancelNow) at JobWizardToolbarButtonSet.Cancellation.pcf: line 102, column 82
    function visible_35 () : java.lang.Boolean {
      return cancellationProcess.canImmediatelyScheduleCancellation().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=BindOptions) at JobWizardToolbarButtonSet.Cancellation.pcf: line 81, column 168
    function visible_38 () : java.lang.Boolean {
      return (cancellationProcess.canScheduleCancellation().Okay and not cancellation.ForRewrite) or  cancellationProcess.canImmediatelyScheduleCancellation().Okay
    }
    
    // 'visible' attribute on MenuItem (id=RescindCancellation) at JobWizardToolbarButtonSet.Cancellation.pcf: line 114, column 157
    function visible_39 () : java.lang.Boolean {
      return cancellationProcess.ActiveCancellationWorkflow != null and cancellationProcess.ActiveCancellationWorkflow.isTriggerAvailable(TC_RESCIND)
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Cancellation.pcf: line 39, column 125
    function visible_4 () : java.lang.Boolean {
      return not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod) and cancellationProcess.canReleaseLock()
    }
    
    // 'visible' attribute on MenuItem (id=WithdrawJob) at JobWizardToolbarButtonSet.Cancellation.pcf: line 121, column 59
    function visible_41 () : java.lang.Boolean {
      return cancellationProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=CloseOptions) at JobWizardToolbarButtonSet.Cancellation.pcf: line 108, column 270
    function visible_43 () : java.lang.Boolean {
      return not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod) and ((cancellationProcess.ActiveCancellationWorkflow != null and cancellationProcess.ActiveCancellationWorkflow.isTriggerAvailable(TC_RESCIND)) or cancellationProcess.canWithdraw().Okay)
    }
    
    // 'visible' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Cancellation.pcf: line 43, column 35
    function visible_7 () : java.lang.Boolean {
      return quoteType != null
    }
    
    property get cancellation () : Cancellation {
      return getVariableValue("cancellation", 0) as Cancellation
    }
    
    property set cancellation ($arg :  Cancellation) {
      setVariableValue("cancellation", 0, $arg)
    }
    
    property get cancellationProcess () : gw.job.CancellationProcess {
      return getVariableValue("cancellationProcess", 0) as gw.job.CancellationProcess
    }
    
    property set cancellationProcess ($arg :  gw.job.CancellationProcess) {
      setVariableValue("cancellationProcess", 0, $arg)
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
    
    property get quoteType () : gw.web.job.JobUIHelper.QuoteType {
      return getVariableValue("quoteType", 0) as gw.web.job.JobUIHelper.QuoteType
    }
    
    property set quoteType ($arg :  gw.web.job.JobUIHelper.QuoteType) {
      setVariableValue("quoteType", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    function getCancelNowMessage() : String {
      var renewals = policyPeriod.FutureRenewals
      if (renewals.isEmpty()) {
        return DisplayKey.get("Job.Operation.CancelPolicy.Confirm")
      } else {
        if (policyPeriod.CancellationProcess.hasBoundRenewalToCancel()) {
          return DisplayKey.get("Job.Operation.CancelPolicy.ConfirmBoundRenewal")
        } else if (policyPeriod.CancellationProcess.hasOpenRenewalToWithdraw()) {
          return DisplayKey.get("Job.Operation.CancelPolicy.ConfirmUnboundRenewal",  renewals.first().Job.JobNumber )
        } else {
          return DisplayKey.get("Job.Operation.CancelPolicy.Confirm")
        }
      }
    }
    
    
  }
  
  
}