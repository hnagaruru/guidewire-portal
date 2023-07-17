package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/RewriteNewAccountWizard_PolicyReviewScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RewriteNewAccountWizard_PolicyReviewScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/RewriteNewAccountWizard_PolicyReviewScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RewriteNewAccountWizard_PolicyReviewScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 36, column 58
    function def_onEnter_21 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 38, column 87
    function def_onEnter_23 (def :  pcf.RewriteNewAccountWizard_ReviewSummaryDV) : void {
      def.onEnter(policyPeriod, rewriteNewAccount)
    }
    
    // 'def' attribute on PanelRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 41, column 39
    function def_onEnter_25 (def :  pcf.ReviewSummaryCV_default) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 41, column 39
    function def_onEnter_27 (def :  pcf.ReviewSummaryCV_true) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 36, column 58
    function def_refreshVariables_22 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 38, column 87
    function def_refreshVariables_24 (def :  pcf.RewriteNewAccountWizard_ReviewSummaryDV) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount)
    }
    
    // 'def' attribute on PanelRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 41, column 39
    function def_refreshVariables_26 (def :  pcf.ReviewSummaryCV_default) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 41, column 39
    function def_refreshVariables_28 (def :  pcf.ReviewSummaryCV_true) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'editable' attribute on Screen (id=RewriteNewAccountWizard_PolicyReviewScreen) at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 7, column 53
    function editable_30 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 24, column 23
    function initialValue_0 () : boolean {
      return openForEdit && policyPeriod.Job.OOSJob && policyPeriod.OOSConflicts.Count > 0
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function mode_1 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'mode' attribute on PanelRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 41, column 39
    function mode_29 () : java.lang.Object {
      return needsConflictResolution
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 29, column 105
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at RewriteNewAccountWizard_PolicyReviewScreen.pcf: line 34, column 80
    function visible_20 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get needsConflictResolution () : boolean {
      return getVariableValue("needsConflictResolution", 0) as java.lang.Boolean
    }
    
    property set needsConflictResolution ($arg :  boolean) {
      setVariableValue("needsConflictResolution", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get rewriteNewAccount () : RewriteNewAccount {
      return getRequireValue("rewriteNewAccount", 0) as RewriteNewAccount
    }
    
    property set rewriteNewAccount ($arg :  RewriteNewAccount) {
      setRequireValue("rewriteNewAccount", 0, $arg)
    }
    
    
  }
  
  
}