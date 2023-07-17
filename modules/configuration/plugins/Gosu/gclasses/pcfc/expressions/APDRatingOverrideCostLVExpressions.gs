package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRatingOverrideCostLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRatingOverrideCostLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on RowIterator at APDRatingOverrideCostLV.pcf: line 54, column 29
    function editable_18 () : java.lang.Boolean {
      return isEditable
    }
    
    // 'sortBy' attribute on IteratorSort at APDRatingOverrideCostLV.pcf: line 57, column 24
    function sortBy_0 (cost :  APDCost) : java.lang.Object {
      return quoteDisplayUtil.CostDisplayName(cost)
    }
    
    // 'sortBy' attribute on IteratorSort at APDRatingOverrideCostLV.pcf: line 60, column 24
    function sortBy_1 (cost :  APDCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at APDRatingOverrideCostLV.pcf: line 113, column 25
    function sortValue_10 (cost :  APDCost) : java.lang.Object {
      return cost.OverrideAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideTermAmount_Cell) at APDRatingOverrideCostLV.pcf: line 121, column 25
    function sortValue_11 (cost :  APDCost) : java.lang.Object {
      return cost.OverrideTermAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideAmount_Cell) at APDRatingOverrideCostLV.pcf: line 129, column 25
    function sortValue_12 (cost :  APDCost) : java.lang.Object {
      return cost.OverrideAmount
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at APDRatingOverrideCostLV.pcf: line 136, column 25
    function sortValue_13 (cost :  APDCost) : java.lang.Object {
      return cost.OverrideReason
    }
    
    // 'value' attribute on TextCell (id=StandardBaseRate_Cell) at APDRatingOverrideCostLV.pcf: line 142, column 45
    function sortValue_14 (cost :  APDCost) : java.lang.Object {
      return cost.StandardBaseRate
    }
    
    // 'value' attribute on TextCell (id=StandardAdjustedRate_Cell) at APDRatingOverrideCostLV.pcf: line 148, column 45
    function sortValue_15 (cost :  APDCost) : java.lang.Object {
      return cost.StandardAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardTermAmountBilling_Cell) at APDRatingOverrideCostLV.pcf: line 153, column 44
    function sortValue_16 (cost :  APDCost) : java.lang.Object {
      return cost.StandardTermAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardAmountBilling_Cell) at APDRatingOverrideCostLV.pcf: line 158, column 40
    function sortValue_17 (cost :  APDCost) : java.lang.Object {
      return cost.StandardAmount
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDRatingOverrideCostLV.pcf: line 67, column 31
    function sortValue_2 (cost :  APDCost) : java.lang.Object {
      return quoteDisplayUtil.CostDisplayName(cost)
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at APDRatingOverrideCostLV.pcf: line 71, column 33
    function sortValue_3 (cost :  APDCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at APDRatingOverrideCostLV.pcf: line 75, column 33
    function sortValue_4 (cost :  APDCost) : java.lang.Object {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=ActualBaseRate_Cell) at APDRatingOverrideCostLV.pcf: line 81, column 45
    function sortValue_5 (cost :  APDCost) : java.lang.Object {
      return cost.ActualBaseRate
    }
    
    // 'value' attribute on TextCell (id=ActualAdjustedRate_Cell) at APDRatingOverrideCostLV.pcf: line 87, column 45
    function sortValue_6 (cost :  APDCost) : java.lang.Object {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ActualTermAmount_Cell) at APDRatingOverrideCostLV.pcf: line 92, column 42
    function sortValue_7 (cost :  APDCost) : java.lang.Object {
      return cost.ActualTermAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ActualAmount_Cell) at APDRatingOverrideCostLV.pcf: line 97, column 38
    function sortValue_8 (cost :  APDCost) : java.lang.Object {
      return cost.ActualAmount
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at APDRatingOverrideCostLV.pcf: line 105, column 25
    function sortValue_9 (cost :  APDCost) : java.lang.Object {
      return cost.OverrideBaseRate
    }
    
    // 'value' attribute on RowIterator at APDRatingOverrideCostLV.pcf: line 54, column 29
    function value_84 () : APDCost[] {
      return costs.toTypedArray()
    }
    
    // 'visible' attribute on ListViewPanel (id=APDRatingOverrideCostLV) at APDRatingOverrideCostLV.pcf: line 7, column 28
    function visible_85 () : java.lang.Boolean {
      return !costs.Empty
    }
    
    property get costs () : List<APDCost> {
      return getRequireValue("costs", 0) as List<APDCost>
    }
    
    property set costs ($arg :  List<APDCost>) {
      setRequireValue("costs", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get jobEffDate () : java.util.Date {
      return getRequireValue("jobEffDate", 0) as java.util.Date
    }
    
    property set jobEffDate ($arg :  java.util.Date) {
      setRequireValue("jobEffDate", 0, $arg)
    }
    
    property get prefCurrency () : Currency {
      return getRequireValue("prefCurrency", 0) as Currency
    }
    
    property set prefCurrency ($arg :  Currency) {
      setRequireValue("prefCurrency", 0, $arg)
    }
    
    property get quoteDisplayUtil () : gw.apd.financials.APDQuoteDisplayUtil {
      return getRequireValue("quoteDisplayUtil", 0) as gw.apd.financials.APDQuoteDisplayUtil
    }
    
    property set quoteDisplayUtil ($arg :  gw.apd.financials.APDQuoteDisplayUtil) {
      setRequireValue("quoteDisplayUtil", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRatingOverrideCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends APDRatingOverrideCostLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountCell (id=OverrideTermAmount_Cell) at APDRatingOverrideCostLV.pcf: line 121, column 25
    function currency_55 () : typekey.Currency {
      return prefCurrency
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at APDRatingOverrideCostLV.pcf: line 105, column 25
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideBaseRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at APDRatingOverrideCostLV.pcf: line 113, column 25
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideAdjRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideTermAmount_Cell) at APDRatingOverrideCostLV.pcf: line 121, column 25
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideTermAmount = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideAmount_Cell) at APDRatingOverrideCostLV.pcf: line 129, column 25
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideAmount = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at APDRatingOverrideCostLV.pcf: line 136, column 25
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      cost.OverrideReason = (__VALUE_TO_SET as String)
    }
    
    // 'editable' attribute on TextCell (id=OverrideBaseRate_Cell) at APDRatingOverrideCostLV.pcf: line 105, column 25
    function editable_39 () : java.lang.Boolean {
      return cost.Overridable
    }
    
    // 'editable' attribute on Row at APDRatingOverrideCostLV.pcf: line 62, column 100
    function editable_83 () : java.lang.Boolean {
      return !(quoteDisplayUtil.willRateThisSliceForward() and cost.EffDate < jobEffDate)
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at APDRatingOverrideCostLV.pcf: line 71, column 33
    function valueRoot_22 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at APDRatingOverrideCostLV.pcf: line 67, column 31
    function value_19 () : String {
      return quoteDisplayUtil.CostDisplayName(cost)
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at APDRatingOverrideCostLV.pcf: line 71, column 33
    function value_21 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at APDRatingOverrideCostLV.pcf: line 75, column 33
    function value_24 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=ActualBaseRate_Cell) at APDRatingOverrideCostLV.pcf: line 81, column 45
    function value_27 () : java.math.BigDecimal {
      return cost.ActualBaseRate
    }
    
    // 'value' attribute on TextCell (id=ActualAdjustedRate_Cell) at APDRatingOverrideCostLV.pcf: line 87, column 45
    function value_30 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ActualTermAmount_Cell) at APDRatingOverrideCostLV.pcf: line 92, column 42
    function value_33 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=ActualAmount_Cell) at APDRatingOverrideCostLV.pcf: line 97, column 38
    function value_36 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmount
    }
    
    // 'value' attribute on TextCell (id=OverrideBaseRate_Cell) at APDRatingOverrideCostLV.pcf: line 105, column 25
    function value_40 () : java.math.BigDecimal {
      return cost.OverrideBaseRate
    }
    
    // 'value' attribute on TextCell (id=OverrideAdjustedRate_Cell) at APDRatingOverrideCostLV.pcf: line 113, column 25
    function value_46 () : java.math.BigDecimal {
      return cost.OverrideAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideTermAmount_Cell) at APDRatingOverrideCostLV.pcf: line 121, column 25
    function value_52 () : gw.pl.currency.MonetaryAmount {
      return cost.OverrideTermAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=OverrideAmount_Cell) at APDRatingOverrideCostLV.pcf: line 129, column 25
    function value_59 () : gw.pl.currency.MonetaryAmount {
      return cost.OverrideAmount
    }
    
    // 'value' attribute on TextCell (id=OverrideReason_Cell) at APDRatingOverrideCostLV.pcf: line 136, column 25
    function value_66 () : String {
      return cost.OverrideReason
    }
    
    // 'value' attribute on TextCell (id=StandardBaseRate_Cell) at APDRatingOverrideCostLV.pcf: line 142, column 45
    function value_71 () : java.math.BigDecimal {
      return cost.StandardBaseRate
    }
    
    // 'value' attribute on TextCell (id=StandardAdjustedRate_Cell) at APDRatingOverrideCostLV.pcf: line 148, column 45
    function value_74 () : java.math.BigDecimal {
      return cost.StandardAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardTermAmountBilling_Cell) at APDRatingOverrideCostLV.pcf: line 153, column 44
    function value_77 () : gw.pl.currency.MonetaryAmount {
      return cost.StandardTermAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=StandardAmountBilling_Cell) at APDRatingOverrideCostLV.pcf: line 158, column 40
    function value_80 () : gw.pl.currency.MonetaryAmount {
      return cost.StandardAmount
    }
    
    property get cost () : APDCost {
      return getIteratedValue(1) as APDCost
    }
    
    
  }
  
  
}