package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/PremiumsScreenDV.PremiumReport.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PremiumsScreenDV_PremiumReportExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/PremiumsScreenDV.PremiumReport.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PremiumsScreenDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PremiumsScreenDV.PremiumReport.pcf: line 52, column 59
    function def_onEnter_16 (def :  pcf.TrendAnalysisInputSet) : void {
      def.onEnter(policyPeriod, false)
    }
    
    // 'def' attribute on InputSetRef at PremiumsScreenDV.PremiumReport.pcf: line 52, column 59
    function def_refreshVariables_17 (def :  pcf.TrendAnalysisInputSet) : void {
      def.refreshVariables(policyPeriod, false)
    }
    
    // 'value' attribute on TextAreaInput (id=Comment_Input) at PremiumsScreenDV.PremiumReport.pcf: line 48, column 36
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      audit.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on Label at PremiumsScreenDV.PremiumReport.pcf: line 16, column 129
    function label_0 () : java.lang.String {
      return DisplayKey.get("Web.AuditWizard.Premiums.Summary.Results", audit.AuditInformation.AuditScheduleType)
    }
    
    // 'value' attribute on TextAreaInput (id=Comment_Input) at PremiumsScreenDV.PremiumReport.pcf: line 48, column 36
    function valueRoot_14 () : java.lang.Object {
      return audit
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalAuditPremium_Input) at PremiumsScreenDV.PremiumReport.pcf: line 22, column 47
    function valueRoot_2 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalAuditPremium_Input) at PremiumsScreenDV.PremiumReport.pcf: line 22, column 47
    function value_1 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TotalPremiumRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=PaymentReceived_Input) at PremiumsScreenDV.PremiumReport.pcf: line 40, column 131
    function value_10 () : gw.pl.currency.MonetaryAmount {
      return audit.PaymentReceived == null ? 0bd.ofCurrency(policyPeriod.PreferredSettlementCurrency) : audit.PaymentReceived
    }
    
    // 'value' attribute on TextAreaInput (id=Comment_Input) at PremiumsScreenDV.PremiumReport.pcf: line 48, column 36
    function value_12 () : java.lang.String {
      return audit.Description
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TaxAndSurcharge_Input) at PremiumsScreenDV.PremiumReport.pcf: line 28, column 51
    function value_4 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TaxAndSurchargesRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalAuditCost_Input) at PremiumsScreenDV.PremiumReport.pcf: line 34, column 44
    function value_7 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TotalCostRPT
    }
    
    property get audit () : Audit {
      return getRequireValue("audit", 0) as Audit
    }
    
    property set audit ($arg :  Audit) {
      setRequireValue("audit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}