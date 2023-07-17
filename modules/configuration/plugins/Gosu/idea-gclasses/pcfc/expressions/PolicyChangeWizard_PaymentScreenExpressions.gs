package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/policychange/PolicyChangeWizard_PaymentScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyChangeWizard_PaymentScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/policychange/PolicyChangeWizard_PaymentScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyChangeWizard_PaymentScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 36, column 58
    function def_onEnter_16 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 39, column 74
    function def_onEnter_18 (def :  pcf.BindSummaryDV_Installments) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager, true)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 39, column 74
    function def_onEnter_20 (def :  pcf.BindSummaryDV_MidtermChange) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager, true)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 39, column 74
    function def_onEnter_22 (def :  pcf.BindSummaryDV_default) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager, true)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 42, column 82
    function def_onEnter_25 (def :  pcf.BillingAdjustmentsPanelSet_Editable) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 42, column 82
    function def_onEnter_27 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallments) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 42, column 82
    function def_onEnter_29 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallmentsReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 42, column 82
    function def_onEnter_31 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReporting) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 42, column 82
    function def_onEnter_33 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReportingReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 42, column 82
    function def_onEnter_35 (def :  pcf.BillingAdjustmentsPanelSet_ReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 45, column 89
    function def_onEnter_38 (def :  pcf.UpFrontPaymentDV_Editable) : void {
      def.onEnter(policyChange, policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 45, column 89
    function def_onEnter_40 (def :  pcf.UpFrontPaymentDV_ReadOnly) : void {
      def.onEnter(policyChange, policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 48, column 87
    function def_onEnter_43 (def :  pcf.AuditAdjustmentsDV_Editable) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 48, column 87
    function def_onEnter_45 (def :  pcf.AuditAdjustmentsDV_MidtermInstallments) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 48, column 87
    function def_onEnter_47 (def :  pcf.AuditAdjustmentsDV_MidtermReporting) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 48, column 87
    function def_onEnter_49 (def :  pcf.AuditAdjustmentsDV_ReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 36, column 58
    function def_refreshVariables_17 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 39, column 74
    function def_refreshVariables_19 (def :  pcf.BindSummaryDV_Installments) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager, true)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 39, column 74
    function def_refreshVariables_21 (def :  pcf.BindSummaryDV_MidtermChange) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager, true)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 39, column 74
    function def_refreshVariables_23 (def :  pcf.BindSummaryDV_default) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager, true)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 42, column 82
    function def_refreshVariables_26 (def :  pcf.BillingAdjustmentsPanelSet_Editable) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 42, column 82
    function def_refreshVariables_28 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallments) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 42, column 82
    function def_refreshVariables_30 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallmentsReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 42, column 82
    function def_refreshVariables_32 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReporting) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 42, column 82
    function def_refreshVariables_34 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReportingReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 42, column 82
    function def_refreshVariables_36 (def :  pcf.BillingAdjustmentsPanelSet_ReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 45, column 89
    function def_refreshVariables_39 (def :  pcf.UpFrontPaymentDV_Editable) : void {
      def.refreshVariables(policyChange, policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 45, column 89
    function def_refreshVariables_41 (def :  pcf.UpFrontPaymentDV_ReadOnly) : void {
      def.refreshVariables(policyChange, policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 48, column 87
    function def_refreshVariables_44 (def :  pcf.AuditAdjustmentsDV_Editable) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 48, column 87
    function def_refreshVariables_46 (def :  pcf.AuditAdjustmentsDV_MidtermInstallments) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 48, column 87
    function def_refreshVariables_48 (def :  pcf.AuditAdjustmentsDV_MidtermReporting) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 48, column 87
    function def_refreshVariables_50 (def :  pcf.AuditAdjustmentsDV_ReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'editable' attribute on Screen (id=PolicyChangeWizard_PaymentScreen) at PolicyChangeWizard_PaymentScreen.pcf: line 7, column 43
    function editable_52 () : java.lang.Boolean {
      return editScreen
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function mode_0 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'mode' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 39, column 74
    function mode_24 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.PaymentMethodChoice
    }
    
    // 'mode' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 42, column 82
    function mode_37 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.midtermEditMode(editScreen)
    }
    
    // 'mode' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 45, column 89
    function mode_42 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.upFrontPaymentEditMode(editScreen)
    }
    
    // 'mode' attribute on PanelRef at PolicyChangeWizard_PaymentScreen.pcf: line 48, column 87
    function mode_51 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.midtermAuditEditMode(editScreen)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_onEnter_1 (def :  pcf.JobWizardBillingToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardBillingToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardBillingToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardBillingToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardBillingToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardBillingToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardBillingToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardBillingToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardBillingToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardBillingToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.JobWizardBillingToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardBillingToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardBillingToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PolicyChangeWizard_PaymentScreen.pcf: line 27, column 147
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardBillingToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, policyChange, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'visible' attribute on AlertBar (id=UnprocessedTransactionAlertBar) at PolicyChangeWizard_PaymentScreen.pcf: line 34, column 94
    function visible_15 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.HasPendingPaymentGatewayTransactions
    }
    
    property get editScreen () : boolean {
      return getRequireValue("editScreen", 0) as java.lang.Boolean
    }
    
    property set editScreen ($arg :  boolean) {
      setRequireValue("editScreen", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyChange () : PolicyChange {
      return getRequireValue("policyChange", 0) as PolicyChange
    }
    
    property set policyChange ($arg :  PolicyChange) {
      setRequireValue("policyChange", 0, $arg)
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
    
    
  }
  
  
}