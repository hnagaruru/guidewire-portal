package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/renewal/JobWizardToolbarButtonSet.Renewal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardToolbarButtonSet_RenewalExpressions {
  @javax.annotation.Generated("config/web/pcf/job/renewal/JobWizardToolbarButtonSet.Renewal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Renewal.pcf: line 62, column 117
    function action_10 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Renewal.pcf: line 73, column 48
    function action_27 () : void {
      renewalProcess.edit(); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicyWorkflow) at JobWizardToolbarButtonSet.Renewal.pcf: line 81, column 138
    function action_29 () : void {
      gw.web.job.renewal.JobWizardToolbarButtonSetRenewalUIHelper.editRenewalFromWorkflow(wizard, policyPeriod, renewalProcess, job); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardToolbarButtonSet.Renewal.pcf: line 87, column 21
    function action_31 () : void {
      wizard.saveDraft()
    }
    
    // 'action' attribute on MenuItem (id=NewVersion) at JobWizardToolbarButtonSet.Renewal.pcf: line 98, column 41
    function action_33 () : void {
      gw.web.job.renewal.JobWizardToolbarButtonSetRenewalUIHelper.attemptNewVersion(wizard, jobWizardHelper, policyPeriod, job)
    }
    
    // 'action' attribute on MenuItem (id=SideBySide) at JobWizardToolbarButtonSet.Renewal.pcf: line 104, column 41
    function action_36 () : void {
      sideBySideHelper.attemptSideBySide(2)
    }
    
    // 'action' attribute on MenuItem (id=ViewSideBySide) at JobWizardToolbarButtonSet.Renewal.pcf: line 109, column 38
    function action_38 () : void {
      jobWizardHelper.goToStep("SideBySide")
    }
    
    // 'action' attribute on MenuItem (id=SendToRenewal) at JobWizardToolbarButtonSet.Renewal.pcf: line 121, column 58
    function action_41 () : void {
      jobWizardHelper.requestRenewRenewal(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=IssueNow) at JobWizardToolbarButtonSet.Renewal.pcf: line 128, column 54
    function action_43 () : void {
      jobWizardHelper.requestIssueJob(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=Withdraw) at JobWizardToolbarButtonSet.Renewal.pcf: line 141, column 54
    function action_46 () : void {
      jobWizardHelper.withdraw(policyPeriod); PolicyFileForward.go(policyPeriod.BasedOn, policyPeriod.BasedOn.PeriodStart);
    }
    
    // 'action' attribute on MenuItem (id=SendToNonRenewal) at JobWizardToolbarButtonSet.Renewal.pcf: line 147, column 61
    function action_48 () : void {
      renewalProcess.assertNonRenewLeadTime(); RenewalWizard_NonRenewPopup.push(renewal, policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=SendToNotTaken) at JobWizardToolbarButtonSet.Renewal.pcf: line 154, column 61
    function action_50 () : void {
      if (jobWizardHelper.revalidateModel()) { renewalProcess.pendingNotTaken(); wizard.finish(); JobComplete.go(renewal, policyPeriod) }
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Renewal.pcf: line 62, column 117
    function action_dest_11 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Renewal.pcf: line 20, column 23
    function initialValue_0 () : Renewal {
      return job as Renewal
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Renewal.pcf: line 24, column 30
    function initialValue_1 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Renewal.pcf: line 28, column 37
    function initialValue_2 () : gw.job.RenewalProcess {
      return policyPeriod.RenewalProcess
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Renewal.pcf: line 32, column 48
    function initialValue_3 () : gw.lob.common.SideBySideUIHelper {
      return new gw.lob.common.SideBySideUIHelper(policyPeriod, wizard, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Renewal.pcf: line 37, column 23
    function initialValue_4 () : boolean {
      return (not policyPeriod.UWLockedAndNoOverride) and renewalProcess.canMakeNewVersion().Okay
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Renewal.pcf: line 42, column 23
    function initialValue_5 () : boolean {
      return sideBySideHelper.canAttemptSideBySide()
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Renewal.pcf: line 46, column 23
    function initialValue_6 () : boolean {
      return perm.PolicyPeriod.view(policyPeriod) and policyPeriod.Job.hasMultiplePeriods()and policyPeriod.Job.SideBySide
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Renewal.pcf: line 51, column 23
    function initialValue_7 () : boolean {
      return policyPeriod.ValidRate
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Renewal.pcf: line 56, column 48
    function initialValue_8 () : gw.web.job.JobUIHelper.QuoteType {
      return gw.web.job.JobUIHelper.getQuoteType(policyPeriod)
    }
    
    // 'label' attribute on MenuItem (id=NewVersion) at JobWizardToolbarButtonSet.Renewal.pcf: line 98, column 41
    function label_34 () : java.lang.Object {
      return sideBySideHelper.getVersionLabel()
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function mode_13 () : java.lang.Object {
      return quoteType
    }
    
    // 'showConfirmMessage' attribute on ToolbarButton (id=EditPolicyWorkflow) at JobWizardToolbarButtonSet.Renewal.pcf: line 81, column 138
    function showConfirmMessage_30 () : java.lang.Boolean {
      return canEditPolicyWorkflow
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function toolbarButtonSet_onEnter_14 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function toolbarButtonSet_onEnter_16 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function toolbarButtonSet_onEnter_18 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function toolbarButtonSet_onEnter_20 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function toolbarButtonSet_onEnter_22 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function toolbarButtonSet_onEnter_24 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function toolbarButtonSet_refreshVariables_21 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function toolbarButtonSet_refreshVariables_23 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function toolbarButtonSet_refreshVariables_25 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'visible' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Renewal.pcf: line 66, column 35
    function visible_12 () : java.lang.Boolean {
      return quoteType != null
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Renewal.pcf: line 73, column 48
    function visible_26 () : java.lang.Boolean {
      return renewalProcess.canEdit().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicyWorkflow) at JobWizardToolbarButtonSet.Renewal.pcf: line 81, column 138
    function visible_28 () : java.lang.Boolean {
      return renewalProcess.ActiveRenewalWorkflow != null and renewalProcess.ActiveRenewalWorkflow.isTriggerAvailable(TC_EDITPOLICY)
    }
    
    // 'visible' attribute on MenuItem (id=NewVersion) at JobWizardToolbarButtonSet.Renewal.pcf: line 98, column 41
    function visible_32 () : java.lang.Boolean {
      return canPerformNewVersion
    }
    
    // 'visible' attribute on MenuItem (id=SideBySide) at JobWizardToolbarButtonSet.Renewal.pcf: line 104, column 41
    function visible_35 () : java.lang.Boolean {
      return canPerformSideBySide
    }
    
    // 'visible' attribute on MenuItem (id=ViewSideBySide) at JobWizardToolbarButtonSet.Renewal.pcf: line 109, column 38
    function visible_37 () : java.lang.Boolean {
      return canViewSideBySide
    }
    
    // 'visible' attribute on ToolbarButton (id=Versions) at JobWizardToolbarButtonSet.Renewal.pcf: line 92, column 83
    function visible_39 () : java.lang.Boolean {
      return canPerformNewVersion or canPerformSideBySide or canViewSideBySide
    }
    
    // 'visible' attribute on MenuItem (id=SendToRenewal) at JobWizardToolbarButtonSet.Renewal.pcf: line 121, column 58
    function visible_40 () : java.lang.Boolean {
      return renewalProcess.canPendingRenew().Okay
    }
    
    // 'visible' attribute on MenuItem (id=IssueNow) at JobWizardToolbarButtonSet.Renewal.pcf: line 128, column 54
    function visible_42 () : java.lang.Boolean {
      return renewalProcess.canIssueNow().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=BindOptions) at JobWizardToolbarButtonSet.Renewal.pcf: line 115, column 92
    function visible_44 () : java.lang.Boolean {
      return renewalProcess.canPendingRenew().Okay or renewalProcess.canIssueNow().Okay
    }
    
    // 'visible' attribute on MenuItem (id=Withdraw) at JobWizardToolbarButtonSet.Renewal.pcf: line 141, column 54
    function visible_45 () : java.lang.Boolean {
      return renewalProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on MenuItem (id=SendToNonRenewal) at JobWizardToolbarButtonSet.Renewal.pcf: line 147, column 61
    function visible_47 () : java.lang.Boolean {
      return renewalProcess.canPendingNonRenew().Okay
    }
    
    // 'visible' attribute on MenuItem (id=SendToNotTaken) at JobWizardToolbarButtonSet.Renewal.pcf: line 154, column 61
    function visible_49 () : java.lang.Boolean {
      return renewalProcess.canPendingNotTaken().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=CloseOptions) at JobWizardToolbarButtonSet.Renewal.pcf: line 134, column 142
    function visible_51 () : java.lang.Boolean {
      return renewalProcess.canWithdrawJob().Okay or renewalProcess.canPendingNonRenew().Okay or renewalProcess.canPendingNotTaken().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Renewal.pcf: line 62, column 117
    function visible_9 () : java.lang.Boolean {
      return renewalProcess.canReleaseLock() and !gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
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
    
    property get quoteType () : gw.web.job.JobUIHelper.QuoteType {
      return getVariableValue("quoteType", 0) as gw.web.job.JobUIHelper.QuoteType
    }
    
    property set quoteType ($arg :  gw.web.job.JobUIHelper.QuoteType) {
      setVariableValue("quoteType", 0, $arg)
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