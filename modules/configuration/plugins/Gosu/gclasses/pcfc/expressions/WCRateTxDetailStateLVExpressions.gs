package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCRateTxDetailStateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCRateTxDetailStateLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCRateTxDetailStateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCRateTxDetailStateLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at WCRateTxDetailStateLV.pcf: line 63, column 47
    function def_onEnter_2 (def :  pcf.WCRateTxDetailAggRowSet) : void {
      def.onEnter(aggTx)
    }
    
    // 'def' attribute on RowSetRef at WCRateTxDetailStateLV.pcf: line 63, column 47
    function def_refreshVariables_3 (def :  pcf.WCRateTxDetailAggRowSet) : void {
      def.refreshVariables(aggTx)
    }
    
    property get aggTx () : entity.WCTransaction {
      return getIteratedValue(1) as entity.WCTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCRateTxDetailStateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCRateTxDetailStateLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at WCRateTxDetailStateLV.pcf: line 58, column 24
    function sortBy_0 (aggTx :  entity.WCTransaction) : java.lang.Object {
      return (aggTx.WCCost as WCJurisdictionCost).CalcOrder
    }
    
    // 'sortBy' attribute on IteratorSort at WCRateTxDetailStateLV.pcf: line 61, column 24
    function sortBy_1 (aggTx :  entity.WCTransaction) : java.lang.Object {
      return aggTx.Proration
    }
    
    // 'value' attribute on RowIterator (id=gt400) at WCRateTxDetailStateLV.pcf: line 55, column 42
    function value_4 () : entity.WCTransaction[] {
      return stateTxs.byCalcOrder( 401, 1000000 ).toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=DescriptionFoota500_Cell) at WCRateTxDetailStateLV.pcf: line 73, column 121
    function value_5 () : java.lang.String {
      return DisplayKey.get("Web.SubmissionWizard.Quote.WC.Subtotal.TotalCost", jurisdiction.DisplayName)
    }
    
    // 'value' attribute on TextCell (id=TxAmountSubtotal500_Cell) at WCRateTxDetailStateLV.pcf: line 82, column 135
    function value_7 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(stateTxs*.AmountBilling*.Amount.sum() as java.lang.Double, "currency")
    }
    
    property get jurisdiction () : WCJurisdiction {
      return getRequireValue("jurisdiction", 0) as WCJurisdiction
    }
    
    property set jurisdiction ($arg :  WCJurisdiction) {
      setRequireValue("jurisdiction", 0, $arg)
    }
    
    property get stateTxs () : java.util.Set<WCTransaction> {
      return getRequireValue("stateTxs", 0) as java.util.Set<WCTransaction>
    }
    
    property set stateTxs ($arg :  java.util.Set<WCTransaction>) {
      setRequireValue("stateTxs", 0, $arg)
    }
    
    
  }
  
  
}