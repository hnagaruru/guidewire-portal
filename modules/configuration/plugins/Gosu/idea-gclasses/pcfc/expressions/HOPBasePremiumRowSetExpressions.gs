package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPBasePremiumRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPBasePremiumRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPBasePremiumRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPBasePremiumRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HOPBasePremiumRowSet.pcf: line 17, column 25
    function initialValue_0 () : HOPCost[] {
      return costs.where(\cost -> cost.ActualTermAmount.IsNotZero).toTypedArray()
    }
    
    // 'sortBy' attribute on IteratorSort at HOPBasePremiumRowSet.pcf: line 32, column 24
    function sortBy_1 (cost :  HOPCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on RowIterator (id=costIterator) at HOPBasePremiumRowSet.pcf: line 25, column 42
    function value_23 () : HOPCost[] {
      return nonZeroCosts
    }
    
    // 'visible' attribute on RowIterator (id=costIterator) at HOPBasePremiumRowSet.pcf: line 25, column 42
    function visible_2 () : java.lang.Boolean {
      return nonZeroCosts.HasElements
    }
    
    property get costs () : List<entity.HOPCost> {
      return getRequireValue("costs", 0) as List<entity.HOPCost>
    }
    
    property set costs ($arg :  List<entity.HOPCost>) {
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
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPBasePremiumRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HOPBasePremiumRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HOPBasePremiumRowSet.pcf: line 29, column 26
    function initialValue_3 () : Coverage {
      return cost.Coverage
    }
    
    // RowIterator (id=costIterator) at HOPBasePremiumRowSet.pcf: line 25, column 42
    function initializeVariables_22 () : void {
        coverage = cost.Coverage;

    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at HOPBasePremiumRowSet.pcf: line 45, column 25
    function valueRoot_5 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on DateCell (id=PeriodEnd_Cell) at HOPBasePremiumRowSet.pcf: line 57, column 25
    function value_12 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at HOPBasePremiumRowSet.pcf: line 64, column 25
    function value_16 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(cost.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at HOPBasePremiumRowSet.pcf: line 71, column 25
    function value_19 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at HOPBasePremiumRowSet.pcf: line 45, column 25
    function value_4 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmount
    }
    
    // 'value' attribute on DateCell (id=PeriodStart_Cell) at HOPBasePremiumRowSet.pcf: line 51, column 25
    function value_8 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=Amount_Cell) at HOPBasePremiumRowSet.pcf: line 45, column 25
    function visible_6 () : java.lang.Boolean {
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