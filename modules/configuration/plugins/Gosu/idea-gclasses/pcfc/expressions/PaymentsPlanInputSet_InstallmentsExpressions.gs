package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/PaymentsPlanInputSet.Installments.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentsPlanInputSet_InstallmentsExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/PaymentsPlanInputSet.Installments.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentsPlanInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput (id=InstallmentPlan) at PaymentsPlanInputSet.Installments.pcf: line 15, column 25
    function def_onEnter_0 (def :  pcf.BillingAdjustmentsInstallmentsLV) : void {
      def.onEnter(policyPeriodBillingInstructionsManager.PeriodInternal, policyPeriodBillingInstructionsManager.InstallmentPlans, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on ListViewInput (id=InstallmentPlan) at PaymentsPlanInputSet.Installments.pcf: line 15, column 25
    function def_refreshVariables_1 (def :  pcf.BillingAdjustmentsInstallmentsLV) : void {
      def.refreshVariables(policyPeriodBillingInstructionsManager.PeriodInternal, policyPeriodBillingInstructionsManager.InstallmentPlans, policyPeriodBillingInstructionsManager)
    }
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getRequireValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setRequireValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    
  }
  
  
}