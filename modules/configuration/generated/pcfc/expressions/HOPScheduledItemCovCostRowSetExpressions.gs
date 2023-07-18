package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPScheduledItemCovCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPScheduledItemCovCostRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPScheduledItemCovCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPScheduledItemCovCostRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HOPScheduledItemCovCostRowSet.pcf: line 17, column 25
    function initialValue_0 () : HOPCost[] {
      return costs.where(\cost -> cost.ActualTermAmount.IsNotZero).toTypedArray()
    }
    
    // 'sortBy' attribute on IteratorSort at HOPScheduledItemCovCostRowSet.pcf: line 32, column 24
    function sortBy_1 (cost :  HOPCost) : java.lang.Object {
      return cost.Coverage.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at HOPScheduledItemCovCostRowSet.pcf: line 35, column 24
    function sortBy_2 (cost :  HOPCost) : java.lang.Object {
      return cost.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at HOPScheduledItemCovCostRowSet.pcf: line 38, column 24
    function sortBy_3 (cost :  HOPCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on RowIterator (id=costIterator) at HOPScheduledItemCovCostRowSet.pcf: line 25, column 42
    function value_28 () : HOPCost[] {
      return nonZeroCosts
    }
    
    // 'visible' attribute on RowIterator (id=costIterator) at HOPScheduledItemCovCostRowSet.pcf: line 25, column 42
    function visible_4 () : java.lang.Boolean {
      return nonZeroCosts.HasElements
    }
    
    property get costs () : List<HOPCost> {
      return getRequireValue("costs", 0) as List<HOPCost>
    }
    
    property set costs ($arg :  List<HOPCost>) {
      setRequireValue("costs", 0, $arg)
    }
    
    property get nonZeroCosts () : HOPCost[] {
      return getVariableValue("nonZeroCosts", 0) as HOPCost[]
    }
    
    property set nonZeroCosts ($arg :  HOPCost[]) {
      setVariableValue("nonZeroCosts", 0, $arg)
    }
    
    property get proRatedCosts () : boolean {
      return getRequireValue("proRatedCosts", 0) as java.lang.Boolean
    }
    
    property set proRatedCosts ($arg :  boolean) {
      setRequireValue("proRatedCosts", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPScheduledItemCovCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HOPScheduledItemCovCostRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HOPScheduledItemCovCostRowSet.pcf: line 29, column 26
    function initialValue_5 () : Coverage {
      return cost.Coverage
    }
    
    // RowIterator (id=costIterator) at HOPScheduledItemCovCostRowSet.pcf: line 25, column 42
    function initializeVariables_27 () : void {
        coverage = cost.Coverage;

    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at HOPScheduledItemCovCostRowSet.pcf: line 44, column 37
    function valueRoot_7 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on DateCell (id=PeriodStart_Cell) at HOPScheduledItemCovCostRowSet.pcf: line 57, column 25
    function value_13 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=PeriodEnd_Cell) at HOPScheduledItemCovCostRowSet.pcf: line 63, column 25
    function value_17 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at HOPScheduledItemCovCostRowSet.pcf: line 70, column 25
    function value_21 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(cost.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at HOPScheduledItemCovCostRowSet.pcf: line 76, column 25
    function value_24 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmount
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at HOPScheduledItemCovCostRowSet.pcf: line 44, column 37
    function value_6 () : java.lang.String {
      return cost.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at HOPScheduledItemCovCostRowSet.pcf: line 51, column 25
    function value_9 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmount
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=Amount_Cell) at HOPScheduledItemCovCostRowSet.pcf: line 51, column 25
    function visible_11 () : java.lang.Boolean {
      return proRatedCosts
    }
    
    property get cost () : HOPCost {
      return getIteratedValue(1) as HOPCost
    }
    
    property get coverage () : Coverage {
      return getVariableValue("coverage", 1) as Coverage
    }
    
    property set coverage ($arg :  Coverage) {
      setVariableValue("coverage", 1, $arg)
    }
    
    
  }
  
  
}