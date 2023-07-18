package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsInstallmentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingAdjustmentsInstallmentsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsInstallmentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingAdjustmentsInstallmentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BillingAdjustmentsInstallmentsLV.pcf: line 20, column 61
    function initialValue_0 () : gw.web.policy.InstallmentPlanDataRenderHelper {
      return new gw.web.policy.InstallmentPlanDataRenderHelper(policyPeriod.TotalPremiumRPT)
    }
    
    // 'value' attribute on RadioButtonCell (id=InstallmentPlan_Cell) at BillingAdjustmentsInstallmentsLV.pcf: line 37, column 24
    function sortValue_1 (plan :  gw.plugin.billing.InstallmentPlanData) : java.lang.Object {
      return policyPeriodBillingInstructionsManager.PaymentPlanChoice.BillingId == plan.BillingId
    }
    
    // 'sortBy' attribute on TextCell (id=Name_Cell) at BillingAdjustmentsInstallmentsLV.pcf: line 49, column 24
    function sortValue_3 (plan :  gw.plugin.billing.InstallmentPlanData) : java.lang.Object {
      return plan.Name
    }
    
    // 'sortBy' attribute on FormatCell (id=DownPayment) at BillingAdjustmentsInstallmentsLV.pcf: line 68, column 24
    function sortValue_5 (plan :  gw.plugin.billing.InstallmentPlanData) : java.lang.Object {
      return plan.DownPayment
    }
    
    // 'sortBy' attribute on FormatCell (id=Installment) at BillingAdjustmentsInstallmentsLV.pcf: line 87, column 24
    function sortValue_6 (plan :  gw.plugin.billing.InstallmentPlanData) : java.lang.Object {
      return plan.Installment
    }
    
    // 'sortBy' attribute on FormatCell (id=Total) at BillingAdjustmentsInstallmentsLV.pcf: line 106, column 24
    function sortValue_7 (plan :  gw.plugin.billing.InstallmentPlanData) : java.lang.Object {
      return plan.Total
    }
    
    // 'sortBy' attribute on TextCell (id=Notes_Cell) at BillingAdjustmentsInstallmentsLV.pcf: line 125, column 31
    function sortValue_8 (plan :  gw.plugin.billing.InstallmentPlanData) : java.lang.Object {
      return plan.Notes
    }
    
    // 'value' attribute on RowIterator at BillingAdjustmentsInstallmentsLV.pcf: line 25, column 59
    function value_33 () : gw.plugin.billing.InstallmentPlanData[] {
      return installmentPlans
    }
    
    // 'visible' attribute on RadioButtonCell (id=InstallmentPlan_Cell) at BillingAdjustmentsInstallmentsLV.pcf: line 37, column 24
    function visible_2 () : java.lang.Boolean {
      return installmentPlans.Count > 1
    }
    
    // 'visible' attribute on LinkCell (id=GoToSchedule) at BillingAdjustmentsInstallmentsLV.pcf: line 54, column 73
    function visible_4 () : java.lang.Boolean {
      return policyPeriod.Status == PolicyPeriodStatus.TC_QUOTED
    }
    
    property get installmentPlans () : gw.plugin.billing.InstallmentPlanData[] {
      return getRequireValue("installmentPlans", 0) as gw.plugin.billing.InstallmentPlanData[]
    }
    
    property set installmentPlans ($arg :  gw.plugin.billing.InstallmentPlanData[]) {
      setRequireValue("installmentPlans", 0, $arg)
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
    
    property get renderHelper () : gw.web.policy.InstallmentPlanDataRenderHelper {
      return getVariableValue("renderHelper", 0) as gw.web.policy.InstallmentPlanDataRenderHelper
    }
    
    property set renderHelper ($arg :  gw.web.policy.InstallmentPlanDataRenderHelper) {
      setVariableValue("renderHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsInstallmentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BillingAdjustmentsInstallmentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=SchedulePreviewButton) at BillingAdjustmentsInstallmentsLV.pcf: line 61, column 75
    function action_17 () : void {
      policyPeriodBillingInstructionsManager.previewPayments(plan)
    }
    
    // 'label' attribute on Link (id=DownPaymentPreview) at BillingAdjustmentsInstallmentsLV.pcf: line 73, column 69
    function label_19 () : java.lang.Object {
      return renderHelper.renderDownPayment(plan)
    }
    
    // 'label' attribute on Link (id=InstallmentPreview) at BillingAdjustmentsInstallmentsLV.pcf: line 92, column 69
    function label_23 () : java.lang.Object {
      return renderHelper.renderInstallment(plan)
    }
    
    // 'label' attribute on Link (id=TotalPreview) at BillingAdjustmentsInstallmentsLV.pcf: line 111, column 63
    function label_27 () : java.lang.Object {
      return renderHelper.renderTotal(plan)
    }
    
    // 'onChange' attribute on PostOnChange at BillingAdjustmentsInstallmentsLV.pcf: line 39, column 88
    function onChange_9 () : void {
      policyPeriodBillingInstructionsManager.selectPaymentPlan(plan)
    }
    
    // 'tooltip' attribute on Link (id=DownPaymentPreview) at BillingAdjustmentsInstallmentsLV.pcf: line 73, column 69
    function tooltip_20 () : java.lang.String {
      return renderHelper.renderDownPaymentDetail(plan)
    }
    
    // 'tooltip' attribute on Link (id=InstallmentPreview) at BillingAdjustmentsInstallmentsLV.pcf: line 92, column 69
    function tooltip_24 () : java.lang.String {
      return renderHelper.renderInstallmentDetail(plan)
    }
    
    // 'tooltip' attribute on Link (id=TotalPreview) at BillingAdjustmentsInstallmentsLV.pcf: line 111, column 63
    function tooltip_28 () : java.lang.String {
      return renderHelper.renderTotalDetail(plan)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at BillingAdjustmentsInstallmentsLV.pcf: line 49, column 24
    function valueRoot_14 () : java.lang.Object {
      return plan
    }
    
    // 'value' attribute on RadioButtonCell (id=InstallmentPlan_Cell) at BillingAdjustmentsInstallmentsLV.pcf: line 37, column 24
    function value_10 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.PaymentPlanChoice.BillingId == plan.BillingId
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at BillingAdjustmentsInstallmentsLV.pcf: line 49, column 24
    function value_13 () : java.lang.String {
      return plan.Name
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at BillingAdjustmentsInstallmentsLV.pcf: line 125, column 31
    function value_30 () : java.lang.String {
      return plan.Notes
    }
    
    // 'visible' attribute on RadioButtonCell (id=InstallmentPlan_Cell) at BillingAdjustmentsInstallmentsLV.pcf: line 37, column 24
    function visible_11 () : java.lang.Boolean {
      return installmentPlans.Count > 1
    }
    
    // 'visible' attribute on LinkCell (id=GoToSchedule) at BillingAdjustmentsInstallmentsLV.pcf: line 54, column 73
    function visible_18 () : java.lang.Boolean {
      return policyPeriod.Status == PolicyPeriodStatus.TC_QUOTED
    }
    
    // 'visible' attribute on Link (id=DownPaymentPreviewIcon) at BillingAdjustmentsInstallmentsLV.pcf: line 79, column 105
    function visible_21 () : java.lang.Boolean {
      return plan.DownPayment != null and plan.DownPayment.IsNotZero and plan.Tax.IsNotZero
    }
    
    // 'visible' attribute on Link (id=InstallmentPreviewIcon) at BillingAdjustmentsInstallmentsLV.pcf: line 98, column 126
    function visible_25 () : java.lang.Boolean {
      return plan.Installment != null and plan.Installment.IsNotZero and plan.Fee != null and plan.Fee.IsNotZero
    }
    
    property get plan () : gw.plugin.billing.InstallmentPlanData {
      return getIteratedValue(1) as gw.plugin.billing.InstallmentPlanData
    }
    
    
  }
  
  
}