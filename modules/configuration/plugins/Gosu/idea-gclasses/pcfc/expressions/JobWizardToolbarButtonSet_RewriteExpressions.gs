package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewrite/JobWizardToolbarButtonSet.Rewrite.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardToolbarButtonSet_RewriteExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewrite/JobWizardToolbarButtonSet.Rewrite.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Rewrite.pcf: line 69, column 48
    function action_26 () : void {
      rewriteProcess.edit(); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardToolbarButtonSet.Rewrite.pcf: line 75, column 21
    function action_27 () : void {
      wizard.saveDraft()
    }
    
    // 'action' attribute on MenuItem (id=NewVersion) at JobWizardToolbarButtonSet.Rewrite.pcf: line 86, column 41
    function action_29 () : void {
      jobWizardHelper.attemptNewVersion(policyPeriod, job)
    }
    
    // 'action' attribute on MenuItem (id=SideBySide) at JobWizardToolbarButtonSet.Rewrite.pcf: line 92, column 41
    function action_32 () : void {
      sideBySideHelper.attemptSideBySide(2)
    }
    
    // 'action' attribute on MenuItem (id=ViewSideBySide) at JobWizardToolbarButtonSet.Rewrite.pcf: line 97, column 38
    function action_34 () : void {
      jobWizardHelper.goToStep("SideBySide")
    }
    
    // 'action' attribute on ToolbarButton (id=BindRewrite) at JobWizardToolbarButtonSet.Rewrite.pcf: line 105, column 51
    function action_37 () : void {
      jobWizardHelper.requestIssueJob(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=WithdrawJob) at JobWizardToolbarButtonSet.Rewrite.pcf: line 112, column 52
    function action_39 () : void {
      jobWizardHelper.withdraw(policyPeriod); PolicyFileForward.go(policyPeriod.PolicyNumber);
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Rewrite.pcf: line 58, column 120
    function action_9 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"),"UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Rewrite.pcf: line 58, column 120
    function action_dest_10 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"),"UWApproval")
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Rewrite.pcf: line 20, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Rewrite.pcf: line 25, column 23
    function initialValue_1 () : Rewrite {
      return job as Rewrite
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Rewrite.pcf: line 29, column 37
    function initialValue_2 () : gw.job.RewriteProcess {
      return policyPeriod.RewriteProcess
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Rewrite.pcf: line 34, column 48
    function initialValue_3 () : gw.web.job.JobUIHelper.QuoteType {
      return gw.web.job.JobUIHelper.getQuoteType(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Rewrite.pcf: line 38, column 48
    function initialValue_4 () : gw.lob.common.SideBySideUIHelper {
      return new gw.lob.common.SideBySideUIHelper(policyPeriod, wizard, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Rewrite.pcf: line 43, column 23
    function initialValue_5 () : boolean {
      return (not policyPeriod.UWLockedAndNoOverride) and rewriteProcess.canMakeNewVersion().Okay 
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Rewrite.pcf: line 48, column 23
    function initialValue_6 () : boolean {
      return sideBySideHelper.canAttemptSideBySide()
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Rewrite.pcf: line 52, column 23
    function initialValue_7 () : boolean {
      return perm.PolicyPeriod.view(policyPeriod) and policyPeriod.Job.hasMultiplePeriods()and policyPeriod.Job.SideBySide
    }
    
    // 'label' attribute on MenuItem (id=NewVersion) at JobWizardToolbarButtonSet.Rewrite.pcf: line 86, column 41
    function label_30 () : java.lang.Object {
      return sideBySideHelper.getVersionLabel()
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function mode_12 () : java.lang.Object {
      return quoteType
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function toolbarButtonSet_onEnter_13 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function toolbarButtonSet_onEnter_15 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function toolbarButtonSet_onEnter_17 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function toolbarButtonSet_onEnter_19 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function toolbarButtonSet_onEnter_21 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function toolbarButtonSet_onEnter_23 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function toolbarButtonSet_refreshVariables_22 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function toolbarButtonSet_refreshVariables_24 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'visible' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Rewrite.pcf: line 62, column 35
    function visible_11 () : java.lang.Boolean {
      return quoteType != null
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Rewrite.pcf: line 69, column 48
    function visible_25 () : java.lang.Boolean {
      return rewriteProcess.canEdit().Okay
    }
    
    // 'visible' attribute on MenuItem (id=NewVersion) at JobWizardToolbarButtonSet.Rewrite.pcf: line 86, column 41
    function visible_28 () : java.lang.Boolean {
      return canPerformNewVersion
    }
    
    // 'visible' attribute on MenuItem (id=SideBySide) at JobWizardToolbarButtonSet.Rewrite.pcf: line 92, column 41
    function visible_31 () : java.lang.Boolean {
      return canPerformSideBySide
    }
    
    // 'visible' attribute on MenuItem (id=ViewSideBySide) at JobWizardToolbarButtonSet.Rewrite.pcf: line 97, column 38
    function visible_33 () : java.lang.Boolean {
      return canViewSideBySide
    }
    
    // 'visible' attribute on ToolbarButton (id=Versions) at JobWizardToolbarButtonSet.Rewrite.pcf: line 80, column 83
    function visible_35 () : java.lang.Boolean {
      return canPerformNewVersion or canPerformSideBySide or canViewSideBySide
    }
    
    // 'visible' attribute on ToolbarButton (id=BindRewrite) at JobWizardToolbarButtonSet.Rewrite.pcf: line 105, column 51
    function visible_36 () : java.lang.Boolean {
      return rewriteProcess.canRewrite().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=WithdrawJob) at JobWizardToolbarButtonSet.Rewrite.pcf: line 112, column 52
    function visible_38 () : java.lang.Boolean {
      return rewriteProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Rewrite.pcf: line 58, column 120
    function visible_8 () : java.lang.Boolean {
      return not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod) and rewriteProcess.canReleaseLock()
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