package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/issuance/IssuanceWizard_PaymentScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IssuanceWizard_PaymentScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/issuance/IssuanceWizard_PaymentScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IssuanceWizard_PaymentScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 30, column 72
    function def_onEnter_15 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 33, column 74
    function def_onEnter_17 (def :  pcf.BindSummaryDV_Installments) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager, true)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 33, column 74
    function def_onEnter_19 (def :  pcf.BindSummaryDV_MidtermChange) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager, true)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 33, column 74
    function def_onEnter_21 (def :  pcf.BindSummaryDV_default) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager, true)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 36, column 82
    function def_onEnter_24 (def :  pcf.BillingAdjustmentsPanelSet_Editable) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 36, column 82
    function def_onEnter_26 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallments) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 36, column 82
    function def_onEnter_28 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallmentsReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 36, column 82
    function def_onEnter_30 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReporting) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 36, column 82
    function def_onEnter_32 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReportingReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 36, column 82
    function def_onEnter_34 (def :  pcf.BillingAdjustmentsPanelSet_ReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 39, column 87
    function def_onEnter_37 (def :  pcf.AuditAdjustmentsDV_Editable) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 39, column 87
    function def_onEnter_39 (def :  pcf.AuditAdjustmentsDV_MidtermInstallments) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 39, column 87
    function def_onEnter_41 (def :  pcf.AuditAdjustmentsDV_MidtermReporting) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 39, column 87
    function def_onEnter_43 (def :  pcf.AuditAdjustmentsDV_ReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 30, column 72
    function def_refreshVariables_16 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 33, column 74
    function def_refreshVariables_18 (def :  pcf.BindSummaryDV_Installments) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager, true)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 33, column 74
    function def_refreshVariables_20 (def :  pcf.BindSummaryDV_MidtermChange) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager, true)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 33, column 74
    function def_refreshVariables_22 (def :  pcf.BindSummaryDV_default) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager, true)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 36, column 82
    function def_refreshVariables_25 (def :  pcf.BillingAdjustmentsPanelSet_Editable) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 36, column 82
    function def_refreshVariables_27 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallments) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 36, column 82
    function def_refreshVariables_29 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallmentsReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 36, column 82
    function def_refreshVariables_31 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReporting) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 36, column 82
    function def_refreshVariables_33 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReportingReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 36, column 82
    function def_refreshVariables_35 (def :  pcf.BillingAdjustmentsPanelSet_ReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 39, column 87
    function def_refreshVariables_38 (def :  pcf.AuditAdjustmentsDV_Editable) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 39, column 87
    function def_refreshVariables_40 (def :  pcf.AuditAdjustmentsDV_MidtermInstallments) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 39, column 87
    function def_refreshVariables_42 (def :  pcf.AuditAdjustmentsDV_MidtermReporting) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 39, column 87
    function def_refreshVariables_44 (def :  pcf.AuditAdjustmentsDV_ReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'editable' attribute on Screen (id=IssuanceWizard_PaymentScreen) at IssuanceWizard_PaymentScreen.pcf: line 7, column 39
    function editable_46 () : java.lang.Boolean {
      return editScreen
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function mode_0 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'mode' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 33, column 74
    function mode_23 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.PaymentMethodChoice
    }
    
    // 'mode' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 36, column 82
    function mode_36 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.midtermEditMode(editScreen)
    }
    
    // 'mode' attribute on PanelRef at IssuanceWizard_PaymentScreen.pcf: line 39, column 87
    function mode_45 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.midtermAuditEditMode(editScreen)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_onEnter_1 (def :  pcf.JobWizardBillingToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardBillingToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardBillingToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardBillingToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardBillingToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardBillingToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardBillingToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardBillingToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardBillingToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardBillingToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.JobWizardBillingToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardBillingToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardBillingToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IssuanceWizard_PaymentScreen.pcf: line 27, column 143
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardBillingToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, issuance, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    property get editScreen () : boolean {
      return getRequireValue("editScreen", 0) as java.lang.Boolean
    }
    
    property set editScreen ($arg :  boolean) {
      setRequireValue("editScreen", 0, $arg)
    }
    
    property get issuance () : Issuance {
      return getRequireValue("issuance", 0) as Issuance
    }
    
    property set issuance ($arg :  Issuance) {
      setRequireValue("issuance", 0, $arg)
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
    
    
  }
  
  
}