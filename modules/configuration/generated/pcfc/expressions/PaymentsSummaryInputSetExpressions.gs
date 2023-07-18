package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/PaymentsSummaryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentsSummaryInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/PaymentsSummaryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentsSummaryInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PaymentsSummaryInputSet.pcf: line 16, column 61
    function initialValue_0 () : gw.web.policy.InstallmentPlanDataRenderHelper {
      return new gw.web.policy.InstallmentPlanDataRenderHelper(thePeriod.TotalPremiumRPT)
    }
    
    // 'label' attribute on ContentInput (id=InstallmentsContentInput) at PaymentsSummaryInputSet.pcf: line 38, column 168
    function label_11 () : java.lang.Object {
      return DisplayKey.get('Web.Quote.PremiumSummary.Installments', renderHelper.renderNumberOfInstallments(policyPeriodBillingInstructionsManager.InstallmentPlan))
    }
    
    // 'label' attribute on Link (id=DownPayment) at PaymentsSummaryInputSet.pcf: line 28, column 113
    function label_3 () : java.lang.Object {
      return renderHelper.renderDownPayment(policyPeriodBillingInstructionsManager.InstallmentPlan)
    }
    
    // 'label' attribute on Link (id=Installments) at PaymentsSummaryInputSet.pcf: line 42, column 113
    function label_7 () : java.lang.Object {
      return renderHelper.renderInstallment(policyPeriodBillingInstructionsManager.InstallmentPlan)
    }
    
    // 'tooltip' attribute on Link (id=DownPayment) at PaymentsSummaryInputSet.pcf: line 28, column 113
    function tooltip_4 () : java.lang.String {
      return renderHelper.renderDownPaymentDetail(policyPeriodBillingInstructionsManager.InstallmentPlan)
    }
    
    // 'tooltip' attribute on Link (id=Installments) at PaymentsSummaryInputSet.pcf: line 42, column 113
    function tooltip_8 () : java.lang.String {
      return renderHelper.renderInstallmentDetail(policyPeriodBillingInstructionsManager.InstallmentPlan)
    }
    
    // 'value' attribute on TextInput (id=Frequency_Input) at PaymentsSummaryInputSet.pcf: line 22, column 112
    function value_1 () : java.lang.String {
      return renderHelper.renderInstallmentFrequency(policyPeriodBillingInstructionsManager.InstallmentPlan)
    }
    
    // 'visible' attribute on Link (id=DownPaymentPreviewIcon) at PaymentsSummaryInputSet.pcf: line 34, column 89
    function visible_5 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.DownPaymentPreviewIconVisible
    }
    
    // 'visible' attribute on Link (id=InstallmentPreviewIcon) at PaymentsSummaryInputSet.pcf: line 48, column 89
    function visible_9 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.InstallmentPreviewIconVisible
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
    
    property get thePeriod () : PolicyPeriod {
      return getRequireValue("thePeriod", 0) as PolicyPeriod
    }
    
    property set thePeriod ($arg :  PolicyPeriod) {
      setRequireValue("thePeriod", 0, $arg)
    }
    
    
  }
  
  
}