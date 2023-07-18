package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/issuance/JobWizardToolbarButtonSet.Issuance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardToolbarButtonSet_IssuanceExpressions {
  @javax.annotation.Generated("config/web/pcf/job/issuance/JobWizardToolbarButtonSet.Issuance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Issuance.pcf: line 50, column 49
    function action_22 () : void {
      issuanceProcess.edit(); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardToolbarButtonSet.Issuance.pcf: line 56, column 21
    function action_23 () : void {
      wizard.saveDraft()
    }
    
    // 'action' attribute on ToolbarButton (id=Issue) at JobWizardToolbarButtonSet.Issuance.pcf: line 63, column 50
    function action_25 () : void {
      jobWizardHelper.requestIssueJob(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=WithdrawJob) at JobWizardToolbarButtonSet.Issuance.pcf: line 70, column 53
    function action_27 () : void {
      jobWizardHelper.withdraw(policyPeriod); JobComplete.go(issuance, policyPeriod);
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Issuance.pcf: line 39, column 118
    function action_5 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Issuance.pcf: line 39, column 118
    function action_dest_6 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Issuance.pcf: line 20, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Issuance.pcf: line 24, column 24
    function initialValue_1 () : Issuance {
      return job as Issuance
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Issuance.pcf: line 28, column 38
    function initialValue_2 () : gw.job.IssuanceProcess {
      return policyPeriod.IssuanceProcess
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Issuance.pcf: line 33, column 48
    function initialValue_3 () : gw.web.job.JobUIHelper.QuoteType {
      return gw.web.job.JobUIHelper.getQuoteType(policyPeriod)
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function mode_8 () : java.lang.Object {
      return quoteType
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_11 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_13 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_15 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_17 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_19 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_9 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Issuance.pcf: line 50, column 49
    function visible_21 () : java.lang.Boolean {
      return issuanceProcess.canEdit().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Issue) at JobWizardToolbarButtonSet.Issuance.pcf: line 63, column 50
    function visible_24 () : java.lang.Boolean {
      return issuanceProcess.canIssue().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=WithdrawJob) at JobWizardToolbarButtonSet.Issuance.pcf: line 70, column 53
    function visible_26 () : java.lang.Boolean {
      return issuanceProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Issuance.pcf: line 39, column 118
    function visible_4 () : java.lang.Boolean {
      return issuanceProcess.canReleaseLock() and !gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'visible' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Issuance.pcf: line 43, column 35
    function visible_7 () : java.lang.Boolean {
      return quoteType != null
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
    
    
  }
  
  
}