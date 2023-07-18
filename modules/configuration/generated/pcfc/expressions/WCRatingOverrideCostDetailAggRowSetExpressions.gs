package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/WCRatingOverrideCostDetailAggRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCRatingOverrideCostDetailAggRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/WCRatingOverrideCostDetailAggRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCRatingOverrideCostDetailAggRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=OverrideAmount_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 62, column 48
    function currency_33 () : typekey.Currency {
      return (aggCost.BranchUntyped as PolicyPeriod).PreferredSettlementCurrency
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 47, column 43
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      aggCost.OverrideBaseRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 55, column 43
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      aggCost.OverrideAdjRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideAmount_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 62, column 48
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      aggCost.OverrideAmountBilling = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 66, column 41
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      aggCost.OverrideReason = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=OverrideBaseRate_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 47, column 43
    function editable_17 () : java.lang.Boolean {
      return aggCost.Overridable
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 19, column 36
    function valueRoot_1 () : java.lang.Object {
      return aggCost
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 19, column 36
    function value_0 () : java.lang.String {
      return aggCost.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 36, column 106
    function value_12 () : java.lang.String {
      return aggCost.Basis == null or aggCost.Basis == 0 ? "" : aggCost.Basis.DisplayValue
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ActualAmount_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 39, column 46
    function value_14 () : gw.pl.currency.MonetaryAmount {
      return aggCost.ActualAmountBilling
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 47, column 43
    function value_18 () : java.math.BigDecimal {
      return aggCost.OverrideBaseRate
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 55, column 43
    function value_24 () : java.math.BigDecimal {
      return aggCost.OverrideAdjRate
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 22, column 38
    function value_3 () : java.lang.String {
      return aggCost.Description
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideAmount_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 62, column 48
    function value_30 () : gw.pl.currency.MonetaryAmount {
      return aggCost.OverrideAmountBilling
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 66, column 41
    function value_37 () : java.lang.String {
      return aggCost.OverrideReason
    }
    
    // 'value' attribute on TextCell (id=StandardBaseRate_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 71, column 43
    function value_42 () : java.math.BigDecimal {
      return aggCost.StandardBaseRate
    }
    
    // 'value' attribute on TextCell (id=StandardAdjustedRate_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 76, column 43
    function value_45 () : java.math.BigDecimal {
      return aggCost.StandardAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardAmount_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 79, column 48
    function value_48 () : gw.pl.currency.MonetaryAmount {
      return aggCost.StandardAmountBilling
    }
    
    // 'value' attribute on TextCell (id=ActualBaseRate_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 27, column 43
    function value_6 () : java.math.BigDecimal {
      return aggCost.ActualBaseRate
    }
    
    // 'value' attribute on TextCell (id=ActualAdjustedRate_Cell) at WCRatingOverrideCostDetailAggRowSet.pcf: line 32, column 43
    function value_9 () : java.math.BigDecimal {
      return aggCost.ActualAdjRate
    }
    
    property get aggCost () : WCJurisdictionCost {
      return getRequireValue("aggCost", 0) as WCJurisdictionCost
    }
    
    property set aggCost ($arg :  WCJurisdictionCost) {
      setRequireValue("aggCost", 0, $arg)
    }
    
    property get basedOnAggCost () : WCJurisdictionCost {
      return getRequireValue("basedOnAggCost", 0) as WCJurisdictionCost
    }
    
    property set basedOnAggCost ($arg :  WCJurisdictionCost) {
      setRequireValue("basedOnAggCost", 0, $arg)
    }
    
    
  }
  
  
}