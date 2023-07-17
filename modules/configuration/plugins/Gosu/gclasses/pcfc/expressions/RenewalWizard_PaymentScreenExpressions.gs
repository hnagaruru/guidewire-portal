package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/renewal/RenewalWizard_PaymentScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RenewalWizard_PaymentScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/renewal/RenewalWizard_PaymentScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RenewalWizard_PaymentScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 40, column 58
    function def_onEnter_17 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 43, column 74
    function def_onEnter_19 (def :  pcf.BindSummaryDV_Installments) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager, false)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 43, column 74
    function def_onEnter_21 (def :  pcf.BindSummaryDV_MidtermChange) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager, false)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 43, column 74
    function def_onEnter_23 (def :  pcf.BindSummaryDV_default) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager, false)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 46, column 23
    function def_onEnter_26 (def :  pcf.BillingAdjustmentsPanelSet_Editable) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 46, column 23
    function def_onEnter_28 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallments) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 46, column 23
    function def_onEnter_30 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallmentsReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 46, column 23
    function def_onEnter_32 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReporting) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 46, column 23
    function def_onEnter_34 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReportingReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 46, column 23
    function def_onEnter_36 (def :  pcf.BillingAdjustmentsPanelSet_ReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 49, column 23
    function def_onEnter_39 (def :  pcf.AuditAdjustmentsDV_Editable) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 49, column 23
    function def_onEnter_41 (def :  pcf.AuditAdjustmentsDV_MidtermInstallments) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 49, column 23
    function def_onEnter_43 (def :  pcf.AuditAdjustmentsDV_MidtermReporting) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 49, column 23
    function def_onEnter_45 (def :  pcf.AuditAdjustmentsDV_ReadOnly) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 40, column 58
    function def_refreshVariables_18 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 43, column 74
    function def_refreshVariables_20 (def :  pcf.BindSummaryDV_Installments) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager, false)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 43, column 74
    function def_refreshVariables_22 (def :  pcf.BindSummaryDV_MidtermChange) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager, false)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 43, column 74
    function def_refreshVariables_24 (def :  pcf.BindSummaryDV_default) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager, false)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 46, column 23
    function def_refreshVariables_27 (def :  pcf.BillingAdjustmentsPanelSet_Editable) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 46, column 23
    function def_refreshVariables_29 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallments) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 46, column 23
    function def_refreshVariables_31 (def :  pcf.BillingAdjustmentsPanelSet_MidtermInstallmentsReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 46, column 23
    function def_refreshVariables_33 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReporting) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 46, column 23
    function def_refreshVariables_35 (def :  pcf.BillingAdjustmentsPanelSet_MidtermReportingReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 46, column 23
    function def_refreshVariables_37 (def :  pcf.BillingAdjustmentsPanelSet_ReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 49, column 23
    function def_refreshVariables_40 (def :  pcf.AuditAdjustmentsDV_Editable) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 49, column 23
    function def_refreshVariables_42 (def :  pcf.AuditAdjustmentsDV_MidtermInstallments) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 49, column 23
    function def_refreshVariables_44 (def :  pcf.AuditAdjustmentsDV_MidtermReporting) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 49, column 23
    function def_refreshVariables_46 (def :  pcf.AuditAdjustmentsDV_ReadOnly) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'editable' attribute on Screen (id=RenewalWizard_PaymentScreen) at RenewalWizard_PaymentScreen.pcf: line 7, column 38
    function editable_48 () : java.lang.Boolean {
      return editScreen
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard_PaymentScreen.pcf: line 26, column 32
    function initialValue_0 () : java.lang.String {
      return editScreen ? "Editable" : "ReadOnly"
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function mode_1 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'mode' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 43, column 74
    function mode_25 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.PaymentMethodChoice
    }
    
    // 'mode' attribute on PanelRef at RenewalWizard_PaymentScreen.pcf: line 46, column 23
    function mode_38 () : java.lang.Object {
      return canEdit
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardBillingToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardBillingToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardBillingToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardBillingToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardBillingToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardBillingToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardBillingToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardBillingToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardBillingToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardBillingToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardBillingToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardBillingToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardBillingToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_PaymentScreen.pcf: line 31, column 142
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardBillingToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, renewal, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'visible' attribute on AlertBar (id=AltAccountAlert) at RenewalWizard_PaymentScreen.pcf: line 38, column 90
    function visible_16 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.MissingRequiredAltBillingAccount
    }
    
    property get canEdit () : java.lang.String {
      return getVariableValue("canEdit", 0) as java.lang.String
    }
    
    property set canEdit ($arg :  java.lang.String) {
      setVariableValue("canEdit", 0, $arg)
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
    
    property get renewal () : Renewal {
      return getRequireValue("renewal", 0) as Renewal
    }
    
    property set renewal ($arg :  Renewal) {
      setRequireValue("renewal", 0, $arg)
    }
    
    
  }
  
  
}