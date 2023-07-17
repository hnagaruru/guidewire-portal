package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/RewriteNewAccountWizard_ReviewSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RewriteNewAccountWizard_ReviewSummaryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/RewriteNewAccountWizard_ReviewSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RewriteNewAccountWizard_ReviewSummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at RewriteNewAccountWizard_ReviewSummaryDV.pcf: line 30, column 77
    function currency_8 () : typekey.Currency {
      return policyPeriod.PreferredSettlementCurrency
    }
    
    // 'def' attribute on InputSetRef (id=PolicyAddress) at RewriteNewAccountWizard_ReviewSummaryDV.pcf: line 21, column 29
    function def_onEnter_3 (def :  pcf.PolicyAddressDisplayInputSet) : void {
      def.onEnter(policyPeriod, true)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyAddress) at RewriteNewAccountWizard_ReviewSummaryDV.pcf: line 21, column 29
    function def_refreshVariables_4 (def :  pcf.PolicyAddressDisplayInputSet) : void {
      def.refreshVariables(policyPeriod, true)
    }
    
    // 'value' attribute on TextInput (id=PrimaryNamedInsured_Input) at RewriteNewAccountWizard_ReviewSummaryDV.pcf: line 18, column 63
    function valueRoot_1 () : java.lang.Object {
      return policyPeriod.PrimaryNamedInsured
    }
    
    // 'value' attribute on TextInput (id=Product_Input) at RewriteNewAccountWizard_ReviewSummaryDV.pcf: line 38, column 50
    function valueRoot_12 () : java.lang.Object {
      return policyPeriod.Policy
    }
    
    // 'value' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at RewriteNewAccountWizard_ReviewSummaryDV.pcf: line 30, column 77
    function valueRoot_7 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextInput (id=PrimaryNamedInsured_Input) at RewriteNewAccountWizard_ReviewSummaryDV.pcf: line 18, column 63
    function value_0 () : java.lang.String {
      return policyPeriod.PrimaryNamedInsured.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Product_Input) at RewriteNewAccountWizard_ReviewSummaryDV.pcf: line 38, column 50
    function value_11 () : gw.api.productmodel.Product {
      return policyPeriod.Policy.Product
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at RewriteNewAccountWizard_ReviewSummaryDV.pcf: line 43, column 43
    function value_14 () : java.util.Date {
      return policyPeriod.PeriodStart
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at RewriteNewAccountWizard_ReviewSummaryDV.pcf: line 48, column 41
    function value_17 () : java.util.Date {
      return policyPeriod.PeriodEnd
    }
    
    // 'value' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at RewriteNewAccountWizard_ReviewSummaryDV.pcf: line 30, column 77
    function value_6 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.EstimatedPremium
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=estimatedPremiumInput_Input) at RewriteNewAccountWizard_ReviewSummaryDV.pcf: line 30, column 77
    function visible_5 () : java.lang.Boolean {
      return policyPeriod.Policy.Product.ProductType == TC_COMMERCIAL
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get rewriteNewAccount () : RewriteNewAccount {
      return getRequireValue("rewriteNewAccount", 0) as RewriteNewAccount
    }
    
    property set rewriteNewAccount ($arg :  RewriteNewAccount) {
      setRequireValue("rewriteNewAccount", 0, $arg)
    }
    
    
  }
  
  
}