package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPCoverageCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPCoverageCostRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPCoverageCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPCoverageCostRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HOPCoverageCostRowSet.pcf: line 17, column 25
    function initialValue_0 () : HOPCost[] {
      return costs.where(\cost -> cost.ActualTermAmount.IsNotZero).toTypedArray()
    }
    
    // 'sortBy' attribute on IteratorSort at HOPCoverageCostRowSet.pcf: line 32, column 24
    function sortBy_1 (cost :  HOPCost) : java.lang.Object {
      return cost.Coverage.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at HOPCoverageCostRowSet.pcf: line 35, column 24
    function sortBy_2 (cost :  HOPCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on RowIterator (id=costIterator) at HOPCoverageCostRowSet.pcf: line 25, column 42
    function value_27 () : HOPCost[] {
      return nonZeroCosts
    }
    
    // 'visible' attribute on RowIterator (id=costIterator) at HOPCoverageCostRowSet.pcf: line 25, column 42
    function visible_3 () : java.lang.Boolean {
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
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPCoverageCostRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HOPCoverageCostRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HOPCoverageCostRowSet.pcf: line 29, column 26
    function initialValue_4 () : Coverage {
      return cost.Coverage
    }
    
    // RowIterator (id=costIterator) at HOPCoverageCostRowSet.pcf: line 25, column 42
    function initializeVariables_26 () : void {
        coverage = cost.Coverage;

    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at HOPCoverageCostRowSet.pcf: line 41, column 49
    function valueRoot_6 () : java.lang.Object {
      return coverage.Pattern
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at HOPCoverageCostRowSet.pcf: line 48, column 25
    function valueRoot_9 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on DateCell (id=PeriodStart_Cell) at HOPCoverageCostRowSet.pcf: line 54, column 25
    function value_12 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=PeriodEnd_Cell) at HOPCoverageCostRowSet.pcf: line 60, column 25
    function value_16 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at HOPCoverageCostRowSet.pcf: line 67, column 25
    function value_20 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(cost.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at HOPCoverageCostRowSet.pcf: line 73, column 25
    function value_23 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmount
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at HOPCoverageCostRowSet.pcf: line 41, column 49
    function value_5 () : java.lang.String {
      return coverage.Pattern.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at HOPCoverageCostRowSet.pcf: line 48, column 25
    function value_8 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmount
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=Amount_Cell) at HOPCoverageCostRowSet.pcf: line 48, column 25
    function visible_10 () : java.lang.Boolean {
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