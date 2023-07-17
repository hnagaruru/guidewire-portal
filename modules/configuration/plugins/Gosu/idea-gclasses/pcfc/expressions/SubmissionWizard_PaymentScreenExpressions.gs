package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/SubmissionWizard_PaymentScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionWizard_PaymentScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/SubmissionWizard_PaymentScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionWizard_PaymentScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 44, column 79
    function def_onEnter_18 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.Policy.ContingencyWarningMessages)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 47, column 74
    function def_onEnter_20 (def :  pcf.BindSummaryDV_Installments) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager, false)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 47, column 74
    function def_onEnter_22 (def :  pcf.BindSummaryDV_MidtermChange) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager, false)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 47, column 74
    function def_onEnter_24 (def :  pcf.BindSummaryDV_default) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager, false)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 50, column 69
    function def_onEnter_27 (def :  pcf.BillingAdjustmentsPanelSet_Editable) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 50, column 69
    function def_onEnter_29 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallments) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 50, column 69
    function def_onEnter_31 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallmentsReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 50, column 69
    function def_onEnter_33 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReporting) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 50, column 69
    function def_onEnter_35 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReportingReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 50, column 69
    function def_onEnter_37 (def :  pcf.BillingAdjustmentsPanelSet_ReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 53, column 86
    function def_onEnter_40 (def :  pcf.UpFrontPaymentDV_Editable) : void {
      def.onEnter(submission, policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 53, column 86
    function def_onEnter_42 (def :  pcf.UpFrontPaymentDV_ReadOnly) : void {
      def.onEnter(submission, policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 56, column 69
    function def_onEnter_45 (def :  pcf.AuditAdjustmentsDV_Editable) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 56, column 69
    function def_onEnter_47 (def :  pcf.AuditAdjustmentsDV_MidtermInstallments) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 56, column 69
    function def_onEnter_49 (def :  pcf.AuditAdjustmentsDV_MidtermReporting) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 56, column 69
    function def_onEnter_51 (def :  pcf.AuditAdjustmentsDV_ReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 44, column 79
    function def_refreshVariables_19 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.Policy.ContingencyWarningMessages)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 47, column 74
    function def_refreshVariables_21 (def :  pcf.BindSummaryDV_Installments) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager, false)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 47, column 74
    function def_refreshVariables_23 (def :  pcf.BindSummaryDV_MidtermChange) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager, false)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 47, column 74
    function def_refreshVariables_25 (def :  pcf.BindSummaryDV_default) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager, false)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 50, column 69
    function def_refreshVariables_28 (def :  pcf.BillingAdjustmentsPanelSet_Editable) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 50, column 69
    function def_refreshVariables_30 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallments) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 50, column 69
    function def_refreshVariables_32 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallmentsReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 50, column 69
    function def_refreshVariables_34 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReporting) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 50, column 69
    function def_refreshVariables_36 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReportingReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 50, column 69
    function def_refreshVariables_38 (def :  pcf.BillingAdjustmentsPanelSet_ReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 53, column 86
    function def_refreshVariables_41 (def :  pcf.UpFrontPaymentDV_Editable) : void {
      def.refreshVariables(submission, policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 53, column 86
    function def_refreshVariables_43 (def :  pcf.UpFrontPaymentDV_ReadOnly) : void {
      def.refreshVariables(submission, policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 56, column 69
    function def_refreshVariables_46 (def :  pcf.AuditAdjustmentsDV_Editable) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 56, column 69
    function def_refreshVariables_48 (def :  pcf.AuditAdjustmentsDV_MidtermInstallments) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 56, column 69
    function def_refreshVariables_50 (def :  pcf.AuditAdjustmentsDV_MidtermReporting) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 56, column 69
    function def_refreshVariables_52 (def :  pcf.AuditAdjustmentsDV_ReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'editable' attribute on Screen (id=SubmissionWizard_PaymentScreen) at SubmissionWizard_PaymentScreen.pcf: line 7, column 41
    function editable_54 () : java.lang.Boolean {
      return canEdit
    }
    
    // 'initialValue' attribute on Variable at SubmissionWizard_PaymentScreen.pcf: line 24, column 23
    function initialValue_0 () : boolean {
      return policyPeriod.Status == TC_NEW or policyPeriod.Status == TC_DRAFT or policyPeriod.Status == TC_RATED or policyPeriod.Status == TC_QUOTED
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function mode_1 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'mode' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 47, column 74
    function mode_26 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.PaymentMethodChoice
    }
    
    // 'mode' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 50, column 69
    function mode_39 () : java.lang.Object {
      return canEdit ? "Editable" : "ReadOnly"
    }
    
    // 'mode' attribute on PanelRef at SubmissionWizard_PaymentScreen.pcf: line 53, column 86
    function mode_44 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.upFrontPaymentEditMode(canEdit)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardBillingToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardBillingToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardBillingToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardBillingToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardBillingToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardBillingToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardBillingToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardBillingToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardBillingToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardBillingToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardBillingToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardBillingToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardBillingToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at SubmissionWizard_PaymentScreen.pcf: line 29, column 145
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardBillingToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, submission, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'visible' attribute on AlertBar (id=AltAccountAlert) at SubmissionWizard_PaymentScreen.pcf: line 36, column 90
    function visible_16 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.MissingRequiredAltBillingAccount
    }
    
    // 'visible' attribute on AlertBar (id=UnprocessedTransactionAlertBar) at SubmissionWizard_PaymentScreen.pcf: line 42, column 94
    function visible_17 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.HasPendingPaymentGatewayTransactions
    }
    
    property get canEdit () : boolean {
      return getVariableValue("canEdit", 0) as java.lang.Boolean
    }
    
    property set canEdit ($arg :  boolean) {
      setVariableValue("canEdit", 0, $arg)
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
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getRequireValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setRequireValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    property get submission () : Submission {
      return getRequireValue("submission", 0) as Submission
    }
    
    property set submission ($arg :  Submission) {
      setRequireValue("submission", 0, $arg)
    }
    
    
  }
  
  
}