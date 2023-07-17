package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditRateCostDetailAggRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditRateCostDetailAggRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditRateCostDetailAggRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditRateCostDetailAggRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditRateCostDetailAggRowSet.pcf: line 19, column 45
    function initialValue_0 () : gw.pl.currency.MonetaryAmount {
      return basedOnAggCost == null ? 0bd.ofCurrency(aggCost.Branch.PreferredSettlementCurrency) : basedOnAggCost.ActualTermAmountBilling
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditRateCostDetailAggRowSet.pcf: line 27, column 36
    function valueRoot_2 () : java.lang.Object {
      return aggCost
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditRateCostDetailAggRowSet.pcf: line 27, column 36
    function value_1 () : java.lang.String {
      return aggCost.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at AuditRateCostDetailAggRowSet.pcf: line 39, column 81
    function value_10 () : java.lang.String {
      return aggCost.Basis == 0 ? "" : aggCost.Basis.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at AuditRateCostDetailAggRowSet.pcf: line 43, column 97
    function value_12 () : java.lang.String {
      return aggCost.ActualAdjRate == 0 ? "" : aggCost.ActualAdjRate.DisplayValue
    }
    
    // 'value' attribute on MonetaryAmountCell (id=EstPremium_Cell) at AuditRateCostDetailAggRowSet.pcf: line 49, column 40
    function value_14 () : gw.pl.currency.MonetaryAmount {
      return basedOnTermAmt
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at AuditRateCostDetailAggRowSet.pcf: line 54, column 50
    function value_17 () : gw.pl.currency.MonetaryAmount {
      return aggCost.ActualTermAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Difference_Cell) at AuditRateCostDetailAggRowSet.pcf: line 60, column 40
    function value_20 () : gw.pl.currency.MonetaryAmount {
      return aggCost.ActualTermAmountBilling - basedOnTermAmt
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AuditRateCostDetailAggRowSet.pcf: line 30, column 38
    function value_4 () : java.lang.String {
      return aggCost.Description
    }
    
    // 'value' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailAggRowSet.pcf: line 35, column 40
    function value_7 () : java.lang.String {
      return basedOnAggCost == null ? null : (basedOnAggCost.Basis == 0 ? "" : basedOnAggCost.Basis.DisplayValue)
    }
    
    // 'visible' attribute on Row (id=AggCostRow) at AuditRateCostDetailAggRowSet.pcf: line 22, column 56
    function visible_23 () : java.lang.Boolean {
      return not aggCost.ActualAmountBilling.IsZero
    }
    
    // 'visible' attribute on TextCell (id=EstBasis_Cell) at AuditRateCostDetailAggRowSet.pcf: line 35, column 40
    function visible_8 () : java.lang.Boolean {
      return not isPremiumReport
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
    
    property get basedOnTermAmt () : gw.pl.currency.MonetaryAmount {
      return getVariableValue("basedOnTermAmt", 0) as gw.pl.currency.MonetaryAmount
    }
    
    property set basedOnTermAmt ($arg :  gw.pl.currency.MonetaryAmount) {
      setVariableValue("basedOnTermAmt", 0, $arg)
    }
    
    property get isPremiumReport () : boolean {
      return getRequireValue("isPremiumReport", 0) as java.lang.Boolean
    }
    
    property set isPremiumReport ($arg :  boolean) {
      setRequireValue("isPremiumReport", 0, $arg)
    }
    
    
  }
  
  
}