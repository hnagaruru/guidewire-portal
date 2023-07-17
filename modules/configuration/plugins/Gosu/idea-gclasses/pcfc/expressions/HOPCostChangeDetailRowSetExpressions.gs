package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPCostChangeDetailRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPCostChangeDetailRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPCostChangeDetailRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPCostChangeDetailRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at HOPCostChangeDetailRowSet.pcf: line 22, column 24
    function sortBy_0 (change :  entity.HOPTransaction) : java.lang.Object {
      return change.HOPCost.Coverage.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at HOPCostChangeDetailRowSet.pcf: line 25, column 24
    function sortBy_1 (change :  entity.HOPTransaction) : java.lang.Object {
      return change.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at HOPCostChangeDetailRowSet.pcf: line 28, column 24
    function sortBy_2 (change :  entity.HOPTransaction) : java.lang.Object {
      return change.EffDate
    }
    
    // 'value' attribute on RowIterator (id=costChangesIterator) at HOPCostChangeDetailRowSet.pcf: line 19, column 63
    function value_22 () : java.util.List<entity.HOPTransaction> {
      return costChanges
    }
    
    // 'value' attribute on TextCell (id=CblSubTotal_Cell) at HOPCostChangeDetailRowSet.pcf: line 79, column 29
    function value_3 () : gw.pl.currency.MonetaryAmount {
      return costChanges.AmountSum(period.PreferredSettlementCurrency)
    }
    
    property get costChanges () : java.util.List<entity.HOPTransaction> {
      return getRequireValue("costChanges", 0) as java.util.List<entity.HOPTransaction>
    }
    
    property set costChanges ($arg :  java.util.List<entity.HOPTransaction>) {
      setRequireValue("costChanges", 0, $arg)
    }
    
    property get period () : entity.PolicyPeriod {
      return getRequireValue("period", 0) as entity.PolicyPeriod
    }
    
    property set period ($arg :  entity.PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPCostChangeDetailRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HOPCostChangeDetailRowSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at HOPCostChangeDetailRowSet.pcf: line 37, column 31
    function valueRoot_6 () : java.lang.Object {
      return change
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at HOPCostChangeDetailRowSet.pcf: line 45, column 25
    function valueRoot_9 () : java.lang.Object {
      return change.Cost
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at HOPCostChangeDetailRowSet.pcf: line 51, column 25
    function value_11 () : java.util.Date {
      return change.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at HOPCostChangeDetailRowSet.pcf: line 57, column 25
    function value_14 () : java.util.Date {
      return change.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at HOPCostChangeDetailRowSet.pcf: line 65, column 25
    function value_17 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(change.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at HOPCostChangeDetailRowSet.pcf: line 72, column 24
    function value_19 () : gw.pl.currency.MonetaryAmount {
      return change.AmountBilling
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at HOPCostChangeDetailRowSet.pcf: line 37, column 31
    function value_5 () : String {
      return change.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at HOPCostChangeDetailRowSet.pcf: line 45, column 25
    function value_8 () : java.math.BigDecimal {
      return change.Cost.ActualTermAmountBilling
    }
    
    property get change () : entity.HOPTransaction {
      return getIteratedValue(1) as entity.HOPTransaction
    }
    
    
  }
  
  
}