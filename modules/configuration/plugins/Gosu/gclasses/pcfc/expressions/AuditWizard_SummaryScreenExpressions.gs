package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditWizard_SummaryScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditWizard_SummaryScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditWizard_SummaryScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditWizard_SummaryScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=CreateAuditPackage) at AuditWizard_SummaryScreen.pcf: line 31, column 142
    function action_21 () : void {
      policyPeriod.printDocument("AuditPackage", "Audit Package", gw.api.web.document.DocumentsHelper.PrintQuoteParameters)
    }
    
    // 'def' attribute on PanelRef at AuditWizard_SummaryScreen.pcf: line 39, column 44
    function def_onEnter_24 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getAuditWizardWarningMessages())
    }
    
    // 'def' attribute on InputSetRef at AuditWizard_SummaryScreen.pcf: line 72, column 60
    function def_onEnter_41 (def :  pcf.AuditProcessingInputSet_FinalAudit) : void {
      def.onEnter(audit)
    }
    
    // 'def' attribute on InputSetRef at AuditWizard_SummaryScreen.pcf: line 72, column 60
    function def_onEnter_43 (def :  pcf.AuditProcessingInputSet_PremiumReport) : void {
      def.onEnter(audit)
    }
    
    // 'def' attribute on PanelRef at AuditWizard_SummaryScreen.pcf: line 39, column 44
    function def_refreshVariables_25 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getAuditWizardWarningMessages())
    }
    
    // 'def' attribute on InputSetRef at AuditWizard_SummaryScreen.pcf: line 72, column 60
    function def_refreshVariables_42 (def :  pcf.AuditProcessingInputSet_FinalAudit) : void {
      def.refreshVariables(audit)
    }
    
    // 'def' attribute on InputSetRef at AuditWizard_SummaryScreen.pcf: line 72, column 60
    function def_refreshVariables_44 (def :  pcf.AuditProcessingInputSet_PremiumReport) : void {
      def.refreshVariables(audit)
    }
    
    // 'value' attribute on TypeKeyInput (id=MethodActual_Input) at AuditWizard_SummaryScreen.pcf: line 61, column 44
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      audit.AuditInformation.ActualAuditMethod = (__VALUE_TO_SET as typekey.AuditMethod)
    }
    
    // 'editable' attribute on PanelRef at AuditWizard_SummaryScreen.pcf: line 39, column 44
    function editable_23 () : java.lang.Boolean {
      return policyPeriod.OpenForEdit
    }
    
    // 'editable' attribute on Screen (id=AuditWizard_SummaryScreen) at AuditWizard_SummaryScreen.pcf: line 7, column 36
    function editable_47 () : java.lang.Boolean {
      return policyPeriod.Status == PolicyPeriodStatus.TC_DRAFT
    }
    
    // 'initialValue' attribute on Variable at AuditWizard_SummaryScreen.pcf: line 20, column 46
    function initialValue_0 () : gw.document.DocumentProduction {
      return new gw.document.DocumentProduction()
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function mode_1 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'mode' attribute on InputSetRef at AuditWizard_SummaryScreen.pcf: line 72, column 60
    function mode_45 () : java.lang.Object {
      return audit.AuditInformation.AuditScheduleType
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_SummaryScreen.pcf: line 25, column 93
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at AuditWizard_SummaryScreen.pcf: line 50, column 50
    function valueRoot_27 () : java.lang.Object {
      return audit.AuditInformation
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at AuditWizard_SummaryScreen.pcf: line 50, column 50
    function value_26 () : typekey.AuditScheduleType {
      return audit.AuditInformation.AuditScheduleType
    }
    
    // 'value' attribute on TypeKeyInput (id=MethodPlanned_Input) at AuditWizard_SummaryScreen.pcf: line 55, column 44
    function value_29 () : typekey.AuditMethod {
      return audit.AuditInformation.AuditMethod
    }
    
    // 'value' attribute on TypeKeyInput (id=MethodActual_Input) at AuditWizard_SummaryScreen.pcf: line 61, column 44
    function value_32 () : typekey.AuditMethod {
      return audit.AuditInformation.ActualAuditMethod
    }
    
    // 'value' attribute on DateInput (id=PeriodStart_Input) at AuditWizard_SummaryScreen.pcf: line 65, column 64
    function value_36 () : java.util.Date {
      return audit.AuditInformation.AuditPeriodStartDate
    }
    
    // 'value' attribute on DateInput (id=PeriodEnd_Input) at AuditWizard_SummaryScreen.pcf: line 69, column 146
    function value_39 () : java.util.Date {
      return audit.PolicyPeriod.CancellationDate == null ? audit.AuditInformation.AuditPeriodEndDate : audit.PolicyPeriod.CancellationDate
    }
    
    // 'visible' attribute on ToolbarButton (id=CreateAuditPackage) at AuditWizard_SummaryScreen.pcf: line 31, column 142
    function visible_20 () : java.lang.Boolean {
      return policyPeriod.AuditProcess.canCreateAuditPackage().Okay and !gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at AuditWizard_SummaryScreen.pcf: line 36, column 80
    function visible_22 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    property get audit () : Audit {
      return getRequireValue("audit", 0) as Audit
    }
    
    property set audit ($arg :  Audit) {
      setRequireValue("audit", 0, $arg)
    }
    
    property get documentProduction () : gw.document.DocumentProduction {
      return getVariableValue("documentProduction", 0) as gw.document.DocumentProduction
    }
    
    property set documentProduction ($arg :  gw.document.DocumentProduction) {
      setVariableValue("documentProduction", 0, $arg)
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