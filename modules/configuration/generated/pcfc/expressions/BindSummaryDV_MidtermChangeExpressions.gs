package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/BindSummaryDV.MidtermChange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BindSummaryDV_MidtermChangeExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/BindSummaryDV.MidtermChange.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BindSummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalPremium_Input) at BindSummaryDV.MidtermChange.pcf: line 26, column 44
    function valueRoot_1 () : java.lang.Object {
      return thePeriod
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalPremium_Input) at BindSummaryDV.MidtermChange.pcf: line 26, column 44
    function value_0 () : gw.pl.currency.MonetaryAmount {
      return thePeriod.TotalPremiumRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalTaxesSurcharges_Input) at BindSummaryDV.MidtermChange.pcf: line 32, column 48
    function value_3 () : gw.pl.currency.MonetaryAmount {
      return thePeriod.TaxAndSurchargesRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalCost_Input) at BindSummaryDV.MidtermChange.pcf: line 38, column 41
    function value_6 () : gw.pl.currency.MonetaryAmount {
      return thePeriod.TotalCostRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=ChangeInCost_Input) at BindSummaryDV.MidtermChange.pcf: line 44, column 49
    function value_9 () : gw.pl.currency.MonetaryAmount {
      return thePeriod.ChangeInTotalCostRPT
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
    
    property get thePeriod () : PolicyPeriod {
      return getRequireValue("thePeriod", 0) as PolicyPeriod
    }
    
    property set thePeriod ($arg :  PolicyPeriod) {
      setRequireValue("thePeriod", 0, $arg)
    }
    
    
  }
  
  
}