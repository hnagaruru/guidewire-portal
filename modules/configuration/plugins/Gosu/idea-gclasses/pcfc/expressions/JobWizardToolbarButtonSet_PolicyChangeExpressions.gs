package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/policychange/JobWizardToolbarButtonSet.PolicyChange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardToolbarButtonSet_PolicyChangeExpressions {
  @javax.annotation.Generated("config/web/pcf/job/policychange/JobWizardToolbarButtonSet.PolicyChange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 62, column 122
    function action_10 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 73, column 53
    function action_27 () : void {
      policyChangeProcess.edit(); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 80, column 58
    function action_29 () : void {
      wizard.saveDraft()
    }
    
    // 'action' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 86, column 66
    function action_31 () : void {
      HandlePreemptionPopup.push(wizard, jobWizardHelper, policyPeriod, true)
    }
    
    // 'action' attribute on ToolbarButton (id=ApplyToBoundRenewal) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 93, column 80
    function action_34 () : void {
      jobWizardHelper.applyChangesToFutureBoundRenewal(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=ApplyToUnboundRenewal) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 100, column 82
    function action_36 () : void {
      jobWizardHelper.applyChangesToFutureUnboundRenewal(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=NewVersion) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 111, column 41
    function action_38 () : void {
      jobWizardHelper.attemptNewVersion(policyPeriod, job)
    }
    
    // 'action' attribute on MenuItem (id=SideBySide) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 117, column 41
    function action_41 () : void {
      sideBySideHelper.attemptSideBySide(2)
    }
    
    // 'action' attribute on MenuItem (id=ViewSideBySide) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 122, column 38
    function action_43 () : void {
      jobWizardHelper.goToStep("SideBySide")
    }
    
    // 'action' attribute on ToolbarButton (id=BindPolicyChange) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 130, column 26
    function action_46 () : void {
      jobWizardHelper.requestIssueJob(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=WithdrawJob) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 137, column 57
    function action_48 () : void {
      jobWizardHelper.withdraw(policyPeriod); PolicyFileForward.go(policyPeriod.PolicyNumber);
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 62, column 122
    function action_dest_11 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 86, column 66
    function action_dest_32 () : pcf.api.Destination {
      return pcf.HandlePreemptionPopup.createDestination(wizard, jobWizardHelper, policyPeriod, true)
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.PolicyChange.pcf: line 20, column 28
    function initialValue_0 () : PolicyChange {
      return job as PolicyChange
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.PolicyChange.pcf: line 24, column 30
    function initialValue_1 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.PolicyChange.pcf: line 28, column 42
    function initialValue_2 () : gw.job.PolicyChangeProcess {
      return policyPeriod.PolicyChangeProcess
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.PolicyChange.pcf: line 32, column 48
    function initialValue_3 () : gw.lob.common.SideBySideUIHelper {
      return new gw.lob.common.SideBySideUIHelper(policyPeriod, wizard, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.PolicyChange.pcf: line 37, column 23
    function initialValue_4 () : boolean {
      return (not policyPeriod.UWLockedAndNoOverride) and policyChangeProcess.canMakeNewVersion().Okay
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.PolicyChange.pcf: line 42, column 23
    function initialValue_5 () : boolean {
      return sideBySideHelper.canAttemptSideBySide()
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.PolicyChange.pcf: line 46, column 23
    function initialValue_6 () : boolean {
      return perm.PolicyPeriod.view(policyPeriod) and policyPeriod.Job.hasMultiplePeriods()and policyPeriod.Job.SideBySide
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.PolicyChange.pcf: line 51, column 23
    function initialValue_7 () : boolean {
      return policyChangeProcess.canBind().Okay
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.PolicyChange.pcf: line 56, column 48
    function initialValue_8 () : gw.web.job.JobUIHelper.QuoteType {
      return gw.web.job.JobUIHelper.getQuoteType(policyPeriod)
    }
    
    // 'label' attribute on MenuItem (id=NewVersion) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 111, column 41
    function label_39 () : java.lang.Object {
      return sideBySideHelper.getVersionLabel()
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function mode_13 () : java.lang.Object {
      return quoteType
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function toolbarButtonSet_onEnter_14 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function toolbarButtonSet_onEnter_16 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function toolbarButtonSet_onEnter_18 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function toolbarButtonSet_onEnter_20 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function toolbarButtonSet_onEnter_22 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function toolbarButtonSet_onEnter_24 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function toolbarButtonSet_refreshVariables_21 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function toolbarButtonSet_refreshVariables_23 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function toolbarButtonSet_refreshVariables_25 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'visible' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.PolicyChange.pcf: line 66, column 35
    function visible_12 () : java.lang.Boolean {
      return quoteType != null
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 73, column 53
    function visible_26 () : java.lang.Boolean {
      return policyChangeProcess.canEdit().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Draft) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 80, column 58
    function visible_28 () : java.lang.Boolean {
      return policyChangeProcess.canSaveDraft().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 86, column 66
    function visible_30 () : java.lang.Boolean {
      return policyChangeProcess.canHandlePreemptions().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=ApplyToBoundRenewal) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 93, column 80
    function visible_33 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canApplyChangesToFutureBoundRenewal()
    }
    
    // 'visible' attribute on ToolbarButton (id=ApplyToUnboundRenewal) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 100, column 82
    function visible_35 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canApplyChangesToFutureUnboundRenewal()
    }
    
    // 'visible' attribute on MenuItem (id=NewVersion) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 111, column 41
    function visible_37 () : java.lang.Boolean {
      return canPerformNewVersion
    }
    
    // 'visible' attribute on MenuItem (id=SideBySide) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 117, column 41
    function visible_40 () : java.lang.Boolean {
      return canPerformSideBySide
    }
    
    // 'visible' attribute on MenuItem (id=ViewSideBySide) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 122, column 38
    function visible_42 () : java.lang.Boolean {
      return canViewSideBySide
    }
    
    // 'visible' attribute on ToolbarButton (id=Versions) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 105, column 83
    function visible_44 () : java.lang.Boolean {
      return canPerformNewVersion or canPerformSideBySide or canViewSideBySide
    }
    
    // 'visible' attribute on ToolbarButton (id=BindPolicyChange) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 130, column 26
    function visible_45 () : java.lang.Boolean {
      return canBind
    }
    
    // 'visible' attribute on ToolbarButton (id=WithdrawJob) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 137, column 57
    function visible_47 () : java.lang.Boolean {
      return policyChangeProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.PolicyChange.pcf: line 62, column 122
    function visible_9 () : java.lang.Boolean {
      return policyChangeProcess.canReleaseLock() and !gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
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
    
    property get quoteType () : gw.web.job.JobUIHelper.QuoteType {
      return getVariableValue("quoteType", 0) as gw.web.job.JobUIHelper.QuoteType
    }
    
    property set quoteType ($arg :  gw.web.job.JobUIHelper.QuoteType) {
      setVariableValue("quoteType", 0, $arg)
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