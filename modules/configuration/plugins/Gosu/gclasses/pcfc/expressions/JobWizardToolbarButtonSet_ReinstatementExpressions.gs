package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/reinstatement/JobWizardToolbarButtonSet.Reinstatement.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardToolbarButtonSet_ReinstatementExpressions {
  @javax.annotation.Generated("config/web/pcf/job/reinstatement/JobWizardToolbarButtonSet.Reinstatement.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 50, column 54
    function action_22 () : void {
      reinstatementProcess.edit(); wizard.saveDraft(); jobWizardHelper.goToVisibleStep(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Draft) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 56, column 21
    function action_23 () : void {
      wizard.saveDraft()
    }
    
    // 'action' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 62, column 67
    function action_25 () : void {
      HandlePreemptionPopup.push(wizard, jobWizardHelper, policyPeriod, true)
    }
    
    // 'action' attribute on ToolbarButton (id=ResolveWithFutureBoundPeriods) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 69, column 80
    function action_28 () : void {
      jobWizardHelper.applyChangesToFutureBoundRenewal(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=ResolveWithFutureUnboundPeriods) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 76, column 82
    function action_30 () : void {
      jobWizardHelper.applyChangesToFutureUnboundRenewal(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=Reinstate) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 83, column 59
    function action_32 () : void {
      jobWizardHelper.requestIssueJob(policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=WithdrawJob) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 90, column 128
    function action_34 () : void {
      jobWizardHelper.withdraw(policyPeriod); PolicyFileForward.go(policyPeriod.PolicyNumber)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 39, column 127
    function action_5 () : void {
      UWActivityPopup.push(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'action' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 62, column 67
    function action_dest_26 () : pcf.api.Destination {
      return pcf.HandlePreemptionPopup.createDestination(wizard, jobWizardHelper, policyPeriod, true)
    }
    
    // 'action' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 39, column 127
    function action_dest_6 () : pcf.api.Destination {
      return pcf.UWActivityPopup.createDestination(policyPeriod, ActivityPattern.finder.getActivityPatternByCode("uw_review_approved"), "UWApproval")
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Reinstatement.pcf: line 20, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation as pcf.api.Wizard
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Reinstatement.pcf: line 24, column 29
    function initialValue_1 () : Reinstatement {
      return job as Reinstatement
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Reinstatement.pcf: line 28, column 43
    function initialValue_2 () : gw.job.ReinstatementProcess {
      return policyPeriod.ReinstatementProcess
    }
    
    // 'initialValue' attribute on Variable at JobWizardToolbarButtonSet.Reinstatement.pcf: line 33, column 48
    function initialValue_3 () : gw.web.job.JobUIHelper.QuoteType {
      return gw.web.job.JobUIHelper.getQuoteType(policyPeriod)
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
    function mode_8 () : java.lang.Object {
      return quoteType
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_11 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_13 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_15 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_17 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_19 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
    function toolbarButtonSet_onEnter_9 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.QuoteTypeToolbarButtonSet_AsyncRate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.QuoteTypeToolbarButtonSet_FinishQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.QuoteTypeToolbarButtonSet_QuickQuote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.QuoteTypeToolbarButtonSet_Quote) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.QuoteTypeToolbarButtonSet_Rate) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'visible' attribute on ToolbarButton (id=EditPolicy) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 50, column 54
    function visible_21 () : java.lang.Boolean {
      return reinstatementProcess.canEdit().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=HandlePreemptions) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 62, column 67
    function visible_24 () : java.lang.Boolean {
      return reinstatementProcess.canHandlePreemptions().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=ResolveWithFutureBoundPeriods) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 69, column 80
    function visible_27 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canApplyChangesToFutureBoundRenewal()
    }
    
    // 'visible' attribute on ToolbarButton (id=ResolveWithFutureUnboundPeriods) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 76, column 82
    function visible_29 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canApplyChangesToFutureUnboundRenewal()
    }
    
    // 'visible' attribute on ToolbarButton (id=Reinstate) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 83, column 59
    function visible_31 () : java.lang.Boolean {
      return reinstatementProcess.canReinstate().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=WithdrawJob) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 90, column 128
    function visible_33 () : java.lang.Boolean {
      return not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod) and reinstatementProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=Unlock) at JobWizardToolbarButtonSet.Reinstatement.pcf: line 39, column 127
    function visible_4 () : java.lang.Boolean {
      return not gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod) and reinstatementProcess.canReleaseLock() 
    }
    
    // 'visible' attribute on ToolbarButtonSetRef at JobWizardToolbarButtonSet.Reinstatement.pcf: line 43, column 35
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
    
    property get reinstatement () : Reinstatement {
      return getVariableValue("reinstatement", 0) as Reinstatement
    }
    
    property set reinstatement ($arg :  Reinstatement) {
      setVariableValue("reinstatement", 0, $arg)
    }
    
    property get reinstatementProcess () : gw.job.ReinstatementProcess {
      return getVariableValue("reinstatementProcess", 0) as gw.job.ReinstatementProcess
    }
    
    property set reinstatementProcess ($arg :  gw.job.ReinstatementProcess) {
      setVariableValue("reinstatementProcess", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}