package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCRateTxDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCRateTxDetailLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCRateTxDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends WCRateTxDetailLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at WCRateTxDetailLV.pcf: line 99, column 47
    function def_onEnter_36 (def :  pcf.WCRateTxDetailAggRowSet) : void {
      def.onEnter(aggTx)
    }
    
    // 'def' attribute on RowSetRef at WCRateTxDetailLV.pcf: line 99, column 47
    function def_refreshVariables_37 (def :  pcf.WCRateTxDetailAggRowSet) : void {
      def.refreshVariables(aggTx)
    }
    
    property get aggTx () : entity.WCTransaction {
      return getIteratedValue(1) as entity.WCTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCRateTxDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCRateTxDetailLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at WCRateTxDetailLV.pcf: line 31, column 37
    function initialValue_12 () : entity.WCCovEmpCost {
      return covEmpTx.WCCost as WCCovEmpCost
    }
    
    // RowIterator at WCRateTxDetailLV.pcf: line 27, column 42
    function initializeVariables_32 () : void {
        cost = covEmpTx.WCCost as WCCovEmpCost;

    }
    
    // 'value' attribute on TextCell (id=LocationNum_Cell) at WCRateTxDetailLV.pcf: line 52, column 25
    function valueRoot_14 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxAmount_Cell) at WCRateTxDetailLV.pcf: line 82, column 25
    function valueRoot_29 () : java.lang.Object {
      return covEmpTx
    }
    
    // 'value' attribute on TextCell (id=LocationNum_Cell) at WCRateTxDetailLV.pcf: line 52, column 25
    function value_13 () : java.lang.Integer {
      return cost.LocationNum
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at WCRateTxDetailLV.pcf: line 57, column 25
    function value_16 () : java.lang.String {
      return cost.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCRateTxDetailLV.pcf: line 62, column 37
    function value_19 () : java.lang.String {
      return cost.Description
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at WCRateTxDetailLV.pcf: line 69, column 25
    function value_22 () : java.math.BigDecimal {
      return cost.Basis
    }
    
    // 'value' attribute on TextCell (id=ModifiedTermRate_Cell) at WCRateTxDetailLV.pcf: line 76, column 25
    function value_25 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxAmount_Cell) at WCRateTxDetailLV.pcf: line 82, column 25
    function value_28 () : gw.pl.currency.MonetaryAmount {
      return covEmpTx.AmountBilling
    }
    
    // 'visible' attribute on Row (id=CovEmpTxAmountRow) at WCRateTxDetailLV.pcf: line 46, column 53
    function visible_31 () : java.lang.Boolean {
      return not covEmpTx.AmountBilling.IsZero
    }
    
    property get cost () : entity.WCCovEmpCost {
      return getVariableValue("cost", 1) as entity.WCCovEmpCost
    }
    
    property set cost ($arg :  entity.WCCovEmpCost) {
      setVariableValue("cost", 1, $arg)
    }
    
    property get covEmpTx () : entity.WCTransaction {
      return getIteratedValue(1) as entity.WCTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCRateTxDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCRateTxDetailLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at WCRateTxDetailLV.pcf: line 16, column 50
    function initialValue_0 () : java.util.Set<WCTransaction> {
      return periodTxs.findByCostType( WCCovEmpCost )
    }
    
    // 'initialValue' attribute on Variable at WCRateTxDetailLV.pcf: line 21, column 50
    function initialValue_1 () : java.util.Set<WCTransaction> {
      return periodTxs.findByCostType( WCJurisdictionCost )
    }
    
    // 'sortBy' attribute on IteratorSort at WCRateTxDetailLV.pcf: line 34, column 24
    function sortBy_2 (covEmpTx :  entity.WCTransaction) : java.lang.Object {
      return covEmpTx.WCCost.LocationNum
    }
    
    // 'sortBy' attribute on IteratorSort at WCRateTxDetailLV.pcf: line 37, column 24
    function sortBy_3 (covEmpTx :  entity.WCTransaction) : java.lang.Object {
      return covEmpTx.WCCost.ClassCode
    }
    
    // 'sortBy' attribute on IteratorSort at WCRateTxDetailLV.pcf: line 94, column 24
    function sortBy_34 (aggTx :  entity.WCTransaction) : java.lang.Object {
      return (aggTx.WCCost as WCJurisdictionCost).CalcOrder
    }
    
    // 'sortBy' attribute on IteratorSort at WCRateTxDetailLV.pcf: line 97, column 24
    function sortBy_35 (aggTx :  entity.WCTransaction) : java.lang.Object {
      return aggTx.Proration
    }
    
    // 'sortBy' attribute on IteratorSort at WCRateTxDetailLV.pcf: line 40, column 24
    function sortBy_4 (covEmpTx :  entity.WCTransaction) : java.lang.Object {
      return covEmpTx.EffDate
    }
    
    // 'sortBy' attribute on IteratorSort at WCRateTxDetailLV.pcf: line 43, column 24
    function sortBy_5 (covEmpTx :  entity.WCTransaction) : java.lang.Object {
      return covEmpTx.Proration
    }
    
    // 'value' attribute on TextCell (id=ModifiedTermRate_Cell) at WCRateTxDetailLV.pcf: line 76, column 25
    function sortValue_10 (covEmpTx :  entity.WCTransaction) : java.lang.Object {
      var cost : entity.WCCovEmpCost = (covEmpTx.WCCost as WCCovEmpCost)
return cost.ActualAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxAmount_Cell) at WCRateTxDetailLV.pcf: line 82, column 25
    function sortValue_11 (covEmpTx :  entity.WCTransaction) : java.lang.Object {
      return covEmpTx.AmountBilling
    }
    
    // 'value' attribute on TextCell (id=LocationNum_Cell) at WCRateTxDetailLV.pcf: line 52, column 25
    function sortValue_6 (covEmpTx :  entity.WCTransaction) : java.lang.Object {
      var cost : entity.WCCovEmpCost = (covEmpTx.WCCost as WCCovEmpCost)
return cost.LocationNum
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at WCRateTxDetailLV.pcf: line 57, column 25
    function sortValue_7 (covEmpTx :  entity.WCTransaction) : java.lang.Object {
      var cost : entity.WCCovEmpCost = (covEmpTx.WCCost as WCCovEmpCost)
return cost.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at WCRateTxDetailLV.pcf: line 62, column 37
    function sortValue_8 (covEmpTx :  entity.WCTransaction) : java.lang.Object {
      var cost : entity.WCCovEmpCost = (covEmpTx.WCCost as WCCovEmpCost)
return cost.Description
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at WCRateTxDetailLV.pcf: line 69, column 25
    function sortValue_9 (covEmpTx :  entity.WCTransaction) : java.lang.Object {
      var cost : entity.WCCovEmpCost = (covEmpTx.WCCost as WCCovEmpCost)
return cost.Basis
    }
    
    // 'value' attribute on RowIterator at WCRateTxDetailLV.pcf: line 27, column 42
    function value_33 () : entity.WCTransaction[] {
      return covEmpTxs.toTypedArray()
    }
    
    // 'value' attribute on RowIterator (id=lt400) at WCRateTxDetailLV.pcf: line 91, column 42
    function value_38 () : entity.WCTransaction[] {
      return aggTxs.byCalcOrder( 0, 400 ).toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=TxAmountSubtotal300_Cell) at WCRateTxDetailLV.pcf: line 118, column 158
    function value_39 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(periodTxs.byCalcOrder( 0, 400 )*.AmountBilling*.Amount.sum() as java.lang.Double, "currency")
    }
    
    property get aggTxs () : java.util.Set<WCTransaction> {
      return getVariableValue("aggTxs", 0) as java.util.Set<WCTransaction>
    }
    
    property set aggTxs ($arg :  java.util.Set<WCTransaction>) {
      setVariableValue("aggTxs", 0, $arg)
    }
    
    property get covEmpTxs () : java.util.Set<WCTransaction> {
      return getVariableValue("covEmpTxs", 0) as java.util.Set<WCTransaction>
    }
    
    property set covEmpTxs ($arg :  java.util.Set<WCTransaction>) {
      setVariableValue("covEmpTxs", 0, $arg)
    }
    
    property get periodTxs () : java.util.Set<WCTransaction> {
      return getRequireValue("periodTxs", 0) as java.util.Set<WCTransaction>
    }
    
    property set periodTxs ($arg :  java.util.Set<WCTransaction>) {
      setRequireValue("periodTxs", 0, $arg)
    }
    
    
  }
  
  
}