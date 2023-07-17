package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Quote_SummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_Quote_SummaryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Quote_SummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_Quote_SummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyAddress) at PolicyFile_Quote_SummaryDV.pcf: line 36, column 31
    function def_onEnter_11 (def :  pcf.PolicyAddressDisplayInputSet) : void {
      def.onEnter(policyPeriod, true)
    }
    
    // 'def' attribute on InputSetRef (id=PolicyAddress) at PolicyFile_Quote_SummaryDV.pcf: line 36, column 31
    function def_refreshVariables_12 (def :  pcf.PolicyAddressDisplayInputSet) : void {
      def.refreshVariables(policyPeriod, true)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Quote_SummaryDV.pcf: line 15, column 45
    function initialValue_0 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TransactionCostRPT
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at PolicyFile_Quote_SummaryDV.pcf: line 23, column 90
    function valueRoot_3 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at PolicyFile_Quote_SummaryDV.pcf: line 33, column 65
    function valueRoot_9 () : java.lang.Object {
      return policyPeriod.PrimaryNamedInsured
    }
    
    // 'value' attribute on TextInput (id=UWCompany_Input) at PolicyFile_Quote_SummaryDV.pcf: line 44, column 47
    function value_14 () : entity.UWCompany {
      return policyPeriod.UWCompany
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalPremium_Input) at PolicyFile_Quote_SummaryDV.pcf: line 54, column 49
    function value_18 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TotalPremiumRPT
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at PolicyFile_Quote_SummaryDV.pcf: line 23, column 90
    function value_2 () : java.lang.String {
      return policyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Taxes_Input) at PolicyFile_Quote_SummaryDV.pcf: line 61, column 53
    function value_21 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TaxAndSurchargesRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalCost_Input) at PolicyFile_Quote_SummaryDV.pcf: line 68, column 46
    function value_24 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TotalCostRPT
    }
    
    // 'value' attribute on TextInput (id=PolicyPeriod_Input) at PolicyFile_Quote_SummaryDV.pcf: line 28, column 194
    function value_6 () : java.lang.String {
      return gw.api.util.StringUtil.formatDate(policyPeriod.PeriodStart,"short") + " - " + gw.api.util.StringUtil.formatDate(policyPeriod.PeriodEnd,"short")
    }
    
    // 'value' attribute on TextInput (id=Insured_Input) at PolicyFile_Quote_SummaryDV.pcf: line 33, column 65
    function value_8 () : java.lang.String {
      return policyPeriod.PrimaryNamedInsured.DisplayName
    }
    
    // 'visible' attribute on TextInput (id=PolicyNumber_Input) at PolicyFile_Quote_SummaryDV.pcf: line 23, column 90
    function visible_1 () : java.lang.Boolean {
      return policyPeriod.Promoted or (not policyPeriod.Job?.createsNewPolicy())
    }
    
    // 'visible' attribute on TextInput (id=UWCompany_Input) at PolicyFile_Quote_SummaryDV.pcf: line 44, column 47
    function visible_13 () : java.lang.Boolean {
      return perm.System.multicompquote
    }
    
    // 'visible' attribute on TextInput (id=HeldSubjectToFinalAudit_Input) at PolicyFile_Quote_SummaryDV.pcf: line 75, column 71
    function visible_27 () : java.lang.Boolean {
      return policyPeriod.JobProcess.BillingSubjectToFinalAudit
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get transactionSum () : gw.pl.currency.MonetaryAmount {
      return getVariableValue("transactionSum", 0) as gw.pl.currency.MonetaryAmount
    }
    
    property set transactionSum ($arg :  gw.pl.currency.MonetaryAmount) {
      setVariableValue("transactionSum", 0, $arg)
    }
    
    
  }
  
  
}