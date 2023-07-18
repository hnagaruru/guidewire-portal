package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditWizard_DetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditWizard_DetailsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditWizard_DetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditWizard_DetailsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Quote) at AuditWizard_DetailsScreen.pcf: line 27, column 73
    function action_20 () : void {
      jobWizardHelper.requestQuote( policyPeriod, "Premiums" )
    }
    
    // 'action' attribute on ToolbarButton (id=QuoteAsync) at AuditWizard_DetailsScreen.pcf: line 34, column 78
    function action_22 () : void {
      jobWizardHelper.startAsyncQuoteProcess(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at AuditWizard_DetailsScreen.pcf: line 41, column 77
    function def_onEnter_24 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getAuditWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef at AuditWizard_DetailsScreen.pcf: line 45, column 52
    function def_onEnter_27 (def :  pcf.AuditDetailsPanelSet_GeneralLiability) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at AuditWizard_DetailsScreen.pcf: line 45, column 52
    function def_onEnter_29 (def :  pcf.AuditDetailsPanelSet_WorkersComp) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at AuditWizard_DetailsScreen.pcf: line 41, column 77
    function def_refreshVariables_25 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getAuditWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef at AuditWizard_DetailsScreen.pcf: line 45, column 52
    function def_refreshVariables_28 (def :  pcf.AuditDetailsPanelSet_GeneralLiability) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at AuditWizard_DetailsScreen.pcf: line 45, column 52
    function def_refreshVariables_30 (def :  pcf.AuditDetailsPanelSet_WorkersComp) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'editable' attribute on PanelRef at AuditWizard_DetailsScreen.pcf: line 45, column 52
    function editable_26 () : java.lang.Boolean {
      return policyPeriod.OpenForEdit
    }
    
    // 'editable' attribute on Screen (id=AuditWizard_DetailsScreen) at AuditWizard_DetailsScreen.pcf: line 7, column 36
    function editable_32 () : java.lang.Boolean {
      return policyPeriod.Status == PolicyPeriodStatus.TC_DRAFT
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function mode_0 () : java.lang.Object {
      return typekey.Job.TC_AUDIT
    }
    
    // 'mode' attribute on PanelRef at AuditWizard_DetailsScreen.pcf: line 45, column 52
    function mode_31 () : java.lang.Object {
      return policyPeriod.Policy.Product.PublicID
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_onEnter_1 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_DetailsScreen.pcf: line 21, column 93
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'visible' attribute on ToolbarButton (id=Quote) at AuditWizard_DetailsScreen.pcf: line 27, column 73
    function visible_19 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.showQuoteButton(policyPeriod)
    }
    
    // 'visible' attribute on ToolbarButton (id=QuoteAsync) at AuditWizard_DetailsScreen.pcf: line 34, column 78
    function visible_21 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.showAsyncQuoteButton(policyPeriod)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at AuditWizard_DetailsScreen.pcf: line 39, column 80
    function visible_23 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    property get audit () : Audit {
      return getRequireValue("audit", 0) as Audit
    }
    
    property set audit ($arg :  Audit) {
      setRequireValue("audit", 0, $arg)
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
    
    
  }
  
  
}