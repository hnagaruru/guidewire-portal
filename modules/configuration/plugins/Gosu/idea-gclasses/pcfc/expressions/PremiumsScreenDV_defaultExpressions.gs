package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/PremiumsScreenDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PremiumsScreenDV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/PremiumsScreenDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PremiumsScreenDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaInput (id=Comment_Input) at PremiumsScreenDV.default.pcf: line 83, column 36
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      audit.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at PremiumsScreenDV.default.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return policyPeriod.BasedOn.Job typeis Cancellation
    }
    
    // 'label' attribute on Label at PremiumsScreenDV.default.pcf: line 20, column 129
    function label_1 () : java.lang.String {
      return DisplayKey.get("Web.AuditWizard.Premiums.Summary.Results", audit.AuditInformation.AuditScheduleType)
    }
    
    // 'label' attribute on MonetaryAmountInput (id=TotalEstCost_Input) at PremiumsScreenDV.default.pcf: line 45, column 44
    function label_12 () : java.lang.Object {
      return policyPeriod.Audit.AuditInformation.IsRevision ? DisplayKey.get('Web.AuditWizard.Premiums.Summary.TotalPriorAuditedCost') : DisplayKey.get('Web.AuditWizard.Premiums.Summary.TotalEstCost')
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalEstCost_Input) at PremiumsScreenDV.default.pcf: line 45, column 44
    function valueRoot_14 () : java.lang.Object {
      return policyPeriod.BasedOn
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalAuditPremium_Input) at PremiumsScreenDV.default.pcf: line 26, column 47
    function valueRoot_3 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextAreaInput (id=Comment_Input) at PremiumsScreenDV.default.pcf: line 83, column 36
    function valueRoot_37 () : java.lang.Object {
      return audit
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalEstCost_Input) at PremiumsScreenDV.default.pcf: line 45, column 44
    function value_13 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.BasedOn.TotalCostRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalAuditPremium_Input) at PremiumsScreenDV.default.pcf: line 26, column 47
    function value_2 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TotalPremiumRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalAuditAdj_Input) at PremiumsScreenDV.default.pcf: line 58, column 80
    function value_23 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TotalCostRPT - policyPeriod.BasedOn.TotalCostRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=PreviouslyCharged_Input) at PremiumsScreenDV.default.pcf: line 68, column 78
    function value_27 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.PreviouslyChargedAmount
    }
    
    // 'value' attribute on MonetaryAmountInput (id=NewCharges_Input) at PremiumsScreenDV.default.pcf: line 75, column 78
    function value_32 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.AllTransactions.where(\t -> t.Charged).toSet().AmountSum(policyPeriod.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on TextAreaInput (id=Comment_Input) at PremiumsScreenDV.default.pcf: line 83, column 36
    function value_35 () : java.lang.String {
      return audit.Description
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TaxAndSurcharge_Input) at PremiumsScreenDV.default.pcf: line 32, column 51
    function value_5 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TaxAndSurchargesRPT
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalAuditCost_Input) at PremiumsScreenDV.default.pcf: line 38, column 44
    function value_8 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.TotalCostRPT
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=TotalEstCost_Input) at PremiumsScreenDV.default.pcf: line 45, column 44
    function visible_11 () : java.lang.Boolean {
      return not isAfterCancellation
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=TotalEstTermCost_Input) at PremiumsScreenDV.default.pcf: line 52, column 40
    function visible_18 () : java.lang.Boolean {
      return isAfterCancellation
    }
    
    // 'visible' attribute on Label at PremiumsScreenDV.default.pcf: line 61, column 78
    function visible_25 () : java.lang.Boolean {
      return !policyPeriod.Archived and policyPeriod.IsReportingPolicy
    }
    
    property get audit () : Audit {
      return getRequireValue("audit", 0) as Audit
    }
    
    property set audit ($arg :  Audit) {
      setRequireValue("audit", 0, $arg)
    }
    
    property get isAfterCancellation () : boolean {
      return getVariableValue("isAfterCancellation", 0) as java.lang.Boolean
    }
    
    property set isAfterCancellation ($arg :  boolean) {
      setVariableValue("isAfterCancellation", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}