package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/PremiumSummaryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PremiumSummaryInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/PremiumSummaryInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PremiumSummaryInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PremiumSummaryInputSet.pcf: line 19, column 61
    function initialValue_0 () : gw.web.policy.InstallmentPlanDataRenderHelper {
      return new gw.web.policy.InstallmentPlanDataRenderHelper(thePeriod.TotalPremiumRPT)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalPremium_Input) at PremiumSummaryInputSet.pcf: line 27, column 42
    function valueRoot_2 () : java.lang.Object {
      return thePeriod
    }
    
    // 'value' attribute on MonetaryAmountInput (id=InstallmentFees_Input) at PremiumSummaryInputSet.pcf: line 39, column 71
    function valueRoot_8 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalPremium_Input) at PremiumSummaryInputSet.pcf: line 27, column 42
    function value_1 () : gw.pl.currency.MonetaryAmount {
      return thePeriod.TotalPremiumRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalCost_Input) at PremiumSummaryInputSet.pcf: line 45, column 102
    function value_10 () : gw.pl.currency.MonetaryAmount {
      return policyPeriodBillingInstructionsManager.calculateTotalWithFees(thePeriod.TotalCostRPT)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=ChangeInCost_Input) at PremiumSummaryInputSet.pcf: line 52, column 34
    function value_13 () : gw.pl.currency.MonetaryAmount {
      return thePeriod.ChangeInTotalCostRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalTaxesSurcharges_Input) at PremiumSummaryInputSet.pcf: line 33, column 46
    function value_4 () : gw.pl.currency.MonetaryAmount {
      return thePeriod.TaxAndSurchargesRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=InstallmentFees_Input) at PremiumSummaryInputSet.pcf: line 39, column 71
    function value_7 () : gw.pl.currency.MonetaryAmount {
      return policyPeriodBillingInstructionsManager.InstallmentFees
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=ChangeInCost_Input) at PremiumSummaryInputSet.pcf: line 52, column 34
    function visible_12 () : java.lang.Boolean {
      return isMidtermChange
    }
    
    property get isMidtermChange () : boolean {
      return getRequireValue("isMidtermChange", 0) as java.lang.Boolean
    }
    
    property set isMidtermChange ($arg :  boolean) {
      setRequireValue("isMidtermChange", 0, $arg)
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