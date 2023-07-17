package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/JobWizardToolbarButtonSet.RewriteNewAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardToolbarButtonSet_RewriteNewAccountExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/JobWizardToolbarButtonSet.RewriteNewAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 51, column 58
    function action_22 () : void {
      rewriteNewAccountProcess.edit(); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 57, column 21
    function action_23 () : void {
      wizard.saveDraft()
    }
    
    // 'action' attribute on ToolbarButton (id=BindRewriteNewAccount) at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 64, column 71
    function action_25 () : void {
      jobWizardHelper.requestIssueJob(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=WithdrawJob) at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 71, column 62
    function action_27 () : void {
      wizard.saveDraft(); jobWizardHelper.withdrawInNewBundle(policyPeriod); wizard.cancel(); JobComplete.go(rewriteNewAccount, policyPeriod);
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 40, column 130
    function action_5 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"),"UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 40, column 130
    function action_dest_6 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"),"UWApproval")
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 20, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 25, column 33
    function initialValue_1 () : RewriteNewAccount {
      return job as RewriteNewAccount
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 29, column 47
    function initialValue_2 () : gw.job.RewriteNewAccountProcess {
      return policyPeriod.RewriteNewAccountProcess
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 34, column 48
    function initialValue_3 () : gw.web.job.JobUIHelper.QuoteType {
      return gw.web.job.JobUIHelper.getQuoteType(policyPeriod)
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function mode_8 () : java.lang.Object {
      return quoteType
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function toolbarButtonSet_onEnter_11 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function toolbarButtonSet_onEnter_13 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function toolbarButtonSet_onEnter_15 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function toolbarButtonSet_onEnter_17 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function toolbarButtonSet_onEnter_19 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function toolbarButtonSet_onEnter_9 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 51, column 58
    function visible_21 () : java.lang.Boolean {
      return rewriteNewAccountProcess.canEdit().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=BindRewriteNewAccount) at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 64, column 71
    function visible_24 () : java.lang.Boolean {
      return rewriteNewAccountProcess.canRewriteNewAccount().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=WithdrawJob) at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 71, column 62
    function visible_26 () : java.lang.Boolean {
      return rewriteNewAccountProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 40, column 130
    function visible_4 () : java.lang.Boolean {
      return not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod) and rewriteNewAccountProcess.canReleaseLock()
    }
    
    // 'visible' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.RewriteNewAccount.pcf: line 44, column 35
    function visible_7 () : java.lang.Boolean {
      return quoteType != null
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