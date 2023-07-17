package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCRateTxDetailAggRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCRateTxDetailAggRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCRateTxDetailAggRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCRateTxDetailAggRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at WCRateTxDetailAggRowSet.pcf: line 13, column 41
    function initialValue_0 () : entity.WCJurisdictionCost {
      return aggTx.WCCost as WCJurisdictionCost
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxAmount_Cell) at WCRateTxDetailAggRowSet.pcf: line 41, column 23
    function valueRoot_12 () : java.lang.Object {
      return aggTx
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at WCRateTxDetailAggRowSet.pcf: line 22, column 23
    function valueRoot_2 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at WCRateTxDetailAggRowSet.pcf: line 22, column 23
    function value_1 () : java.lang.String {
      return cost.ClassCode
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxAmount_Cell) at WCRateTxDetailAggRowSet.pcf: line 41, column 23
    function value_11 () : gw.pl.currency.MonetaryAmount {
      return aggTx.AmountBilling
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCRateTxDetailAggRowSet.pcf: line 26, column 35
    function value_4 () : java.lang.String {
      return cost.Description
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at WCRateTxDetailAggRowSet.pcf: line 31, column 23
    function value_7 () : java.lang.String {
      return cost.Basis == 0 ? "" : cost.Basis.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at WCRateTxDetailAggRowSet.pcf: line 36, column 23
    function value_9 () : java.lang.String {
      return cost.ActualAdjRate == 0 ? "" : cost.ActualAdjRate.DisplayValue
    }
    
    // 'visible' attribute on Row (id=AggTxAmountRow) at WCRateTxDetailAggRowSet.pcf: line 16, column 48
    function visible_14 () : java.lang.Boolean {
      return not aggTx.AmountBilling.IsZero
    }
    
    property get aggTx () : WCTransaction {
      return getRequireValue("aggTx", 0) as WCTransaction
    }
    
    property set aggTx ($arg :  WCTransaction) {
      setRequireValue("aggTx", 0, $arg)
    }
    
    property get cost () : entity.WCJurisdictionCost {
      return getVariableValue("cost", 0) as entity.WCJurisdictionCost
    }
    
    property set cost ($arg :  entity.WCJurisdictionCost) {
      setVariableValue("cost", 0, $arg)
    }
    
    
  }
  
  
}