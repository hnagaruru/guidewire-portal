package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/PriorHistoryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PriorHistoryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/PriorHistoryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PriorHistoryDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=AnnualPremium_Cell) at PriorHistoryDV.pcf: line 61, column 52
    function currency_35 () : typekey.Currency {
      return policyPeriod.PreferredSettlementCurrency
    }
    
    // 'value' attribute on TextCell (id=Carrier_Cell) at PriorHistoryDV.pcf: line 36, column 46
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      priorPolicy.Carrier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PriorHistoryDV.pcf: line 41, column 51
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      priorPolicy.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at PriorHistoryDV.pcf: line 47, column 52
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      priorPolicy.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at PriorHistoryDV.pcf: line 52, column 53
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      priorPolicy.ExpirationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AnnualPremium_Cell) at PriorHistoryDV.pcf: line 61, column 52
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      priorPolicy.AnnualPremium = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextCell (id=NumLosses_Cell) at PriorHistoryDV.pcf: line 69, column 48
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      priorPolicy.NumLosses = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalLosses_Cell) at PriorHistoryDV.pcf: line 78, column 50
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      priorPolicy.TotalLosses = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextCell (id=ExpMod_Cell) at PriorHistoryDV.pcf: line 87, column 56
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      priorPolicy.ExpMod = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=Carrier_Cell) at PriorHistoryDV.pcf: line 36, column 46
    function valueRoot_18 () : java.lang.Object {
      return priorPolicy
    }
    
    // 'value' attribute on TextCell (id=Carrier_Cell) at PriorHistoryDV.pcf: line 36, column 46
    function value_16 () : java.lang.String {
      return priorPolicy.Carrier
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PriorHistoryDV.pcf: line 41, column 51
    function value_20 () : java.lang.String {
      return priorPolicy.PolicyNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at PriorHistoryDV.pcf: line 47, column 52
    function value_24 () : java.util.Date {
      return priorPolicy.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at PriorHistoryDV.pcf: line 52, column 53
    function value_28 () : java.util.Date {
      return priorPolicy.ExpirationDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AnnualPremium_Cell) at PriorHistoryDV.pcf: line 61, column 52
    function value_32 () : gw.pl.currency.MonetaryAmount {
      return priorPolicy.AnnualPremium
    }
    
    // 'value' attribute on TextCell (id=NumLosses_Cell) at PriorHistoryDV.pcf: line 69, column 48
    function value_37 () : java.lang.Integer {
      return priorPolicy.NumLosses
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalLosses_Cell) at PriorHistoryDV.pcf: line 78, column 50
    function value_41 () : gw.pl.currency.MonetaryAmount {
      return priorPolicy.TotalLosses
    }
    
    // 'value' attribute on TextCell (id=ExpMod_Cell) at PriorHistoryDV.pcf: line 87, column 56
    function value_46 () : java.math.BigDecimal {
      return priorPolicy.ExpMod
    }
    
    // 'visible' attribute on TextCell (id=ExpMod_Cell) at PriorHistoryDV.pcf: line 87, column 56
    function visible_49 () : java.lang.Boolean {
      return policyPeriod.HasWorkersComp
    }
    
    property get priorPolicy () : entity.PriorPolicy {
      return getIteratedValue(1) as entity.PriorPolicy
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/submission/PriorHistoryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PriorHistoryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Carrier_Cell) at PriorHistoryDV.pcf: line 36, column 46
    function sortValue_0 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.Carrier
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PriorHistoryDV.pcf: line 41, column 51
    function sortValue_1 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.PolicyNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at PriorHistoryDV.pcf: line 47, column 52
    function sortValue_2 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at PriorHistoryDV.pcf: line 52, column 53
    function sortValue_3 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.ExpirationDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AnnualPremium_Cell) at PriorHistoryDV.pcf: line 61, column 52
    function sortValue_4 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.AnnualPremium
    }
    
    // 'value' attribute on TextCell (id=NumLosses_Cell) at PriorHistoryDV.pcf: line 69, column 48
    function sortValue_5 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.NumLosses
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalLosses_Cell) at PriorHistoryDV.pcf: line 78, column 50
    function sortValue_6 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.TotalLosses
    }
    
    // 'value' attribute on TextCell (id=ExpMod_Cell) at PriorHistoryDV.pcf: line 87, column 56
    function sortValue_7 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.ExpMod
    }
    
    // '$$sumValue' attribute on RowIterator at PriorHistoryDV.pcf: line 61, column 52
    function sumValueRoot_10 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy
    }
    
    // 'footerSumValue' attribute on RowIterator at PriorHistoryDV.pcf: line 69, column 48
    function sumValue_11 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.NumLosses
    }
    
    // 'footerSumValue' attribute on RowIterator at PriorHistoryDV.pcf: line 78, column 50
    function sumValue_13 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.TotalLosses
    }
    
    // 'footerSumValue' attribute on RowIterator at PriorHistoryDV.pcf: line 61, column 52
    function sumValue_9 (priorPolicy :  entity.PriorPolicy) : java.lang.Object {
      return priorPolicy.AnnualPremium
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at PriorHistoryDV.pcf: line 29, column 46
    function toCreateAndAdd_51 () : entity.PriorPolicy {
      var pp = new PriorPolicy(); policyPeriod.Policy.addToPriorPolicies(pp); return pp;
    }
    
    // 'toRemove' attribute on RowIterator at PriorHistoryDV.pcf: line 29, column 46
    function toRemove_52 (priorPolicy :  entity.PriorPolicy) : void {
      policyPeriod.Policy.removeFromPriorPolicies(priorPolicy)
    }
    
    // 'value' attribute on RowIterator at PriorHistoryDV.pcf: line 29, column 46
    function value_53 () : entity.PriorPolicy[] {
      return policyPeriod.Policy.PriorPolicies
    }
    
    // 'visible' attribute on TextCell (id=ExpMod_Cell) at PriorHistoryDV.pcf: line 87, column 56
    function visible_8 () : java.lang.Boolean {
      return policyPeriod.HasWorkersComp
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}