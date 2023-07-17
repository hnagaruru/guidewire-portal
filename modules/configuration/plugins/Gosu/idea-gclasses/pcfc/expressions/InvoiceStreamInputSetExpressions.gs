package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/InvoiceStreamInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InvoiceStreamInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/InvoiceStreamInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InvoiceStreamInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at InvoiceStreamInputSet.pcf: line 16, column 61
    function initialValue_0 () : gw.web.policy.InstallmentPlanDataRenderHelper {
      return new gw.web.policy.InstallmentPlanDataRenderHelper(thePeriod.TotalPremiumRPT)
    }
    
    // 'value' attribute on TextInput (id=InvoiceFrequency_Input) at InvoiceStreamInputSet.pcf: line 22, column 97
    function value_1 () : java.lang.String {
      return renderHelper.renderInvoiceStreamInterval(policyPeriodBillingInstructionsManager)
    }
    
    // 'value' attribute on TextInput (id=FixInvoicesBy_Input) at InvoiceStreamInputSet.pcf: line 26, column 96
    function value_3 () : java.lang.String {
      return renderHelper.renderInvoiceStreamDueDate(policyPeriodBillingInstructionsManager)
    }
    
    // 'value' attribute on TextInput (id=DayOfMonth_Input) at InvoiceStreamInputSet.pcf: line 30, column 93
    function value_5 () : java.lang.String {
      return renderHelper.renderInvoiceStreamDays(policyPeriodBillingInstructionsManager)
    }
    
    // 'value' attribute on TextInput (id=PayUsing_Input) at InvoiceStreamInputSet.pcf: line 34, column 106
    function value_7 () : java.lang.String {
      return renderHelper.renderInvoiceStreamPaymentInstrument(policyPeriodBillingInstructionsManager)
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