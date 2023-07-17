package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl/policy/GLExpCovTxDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GLExpCovTxDetailLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/GLExpCovTxDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GLExpCovTxDetailLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GLExpCovTxDetailLV.pcf: line 15, column 23
    function initialValue_0 () : boolean {
      return locationTxs.AnyProrated
    }
    
    // 'sortBy' attribute on IteratorSort at GLExpCovTxDetailLV.pcf: line 28, column 24
    function sortBy_1 (tx :  entity.GLTransaction) : java.lang.Object {
      return (tx.GLCost as GLCovExposureCost).GLExposure.ClassCode
    }
    
    // 'sortBy' attribute on IteratorSort at GLExpCovTxDetailLV.pcf: line 31, column 24
    function sortBy_2 (tx :  entity.GLTransaction) : java.lang.Object {
      return tx.GLCost.Coverage.Pattern
    }
    
    // '$$sumValue' attribute on RowIterator at GLExpCovTxDetailLV.pcf: line 105, column 25
    function sumValueRoot_12 (tx :  entity.GLTransaction) : java.lang.Object {
      return tx
    }
    
    // 'footerSumValue' attribute on RowIterator at GLExpCovTxDetailLV.pcf: line 105, column 25
    function sumValue_11 (tx :  entity.GLTransaction) : java.lang.Object {
      return tx.AmountBilling
    }
    
    // 'value' attribute on RowIterator at GLExpCovTxDetailLV.pcf: line 21, column 42
    function value_48 () : entity.GLTransaction[] {
      return locationTxs.toTypedArray()
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at GLExpCovTxDetailLV.pcf: line 75, column 25
    function visible_3 () : java.lang.Boolean {
      return prorated
    }
    
    property get locationTxs () : java.util.Set<GLTransaction> {
      return getRequireValue("locationTxs", 0) as java.util.Set<GLTransaction>
    }
    
    property set locationTxs ($arg :  java.util.Set<GLTransaction>) {
      setRequireValue("locationTxs", 0, $arg)
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/GLExpCovTxDetailLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GLExpCovTxDetailLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at GLExpCovTxDetailLV.pcf: line 25, column 42
    function initialValue_13 () : entity.GLCovExposureCost {
      return tx.GLCost as GLCovExposureCost
    }
    
    // RowIterator at GLExpCovTxDetailLV.pcf: line 21, column 42
    function initializeVariables_47 () : void {
        cost = tx.GLCost as GLCovExposureCost;

    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at GLExpCovTxDetailLV.pcf: line 39, column 25
    function valueRoot_15 () : java.lang.Object {
      return cost.GLExposure.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at GLExpCovTxDetailLV.pcf: line 53, column 25
    function valueRoot_21 () : java.lang.Object {
      return cost.GeneralLiabilityCov
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at GLExpCovTxDetailLV.pcf: line 60, column 25
    function valueRoot_24 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at GLExpCovTxDetailLV.pcf: line 82, column 25
    function valueRoot_34 () : java.lang.Object {
      return tx
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at GLExpCovTxDetailLV.pcf: line 39, column 25
    function value_14 () : java.lang.String {
      return cost.GLExposure.ClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at GLExpCovTxDetailLV.pcf: line 46, column 61
    function value_17 () : java.lang.String {
      return cost.GLExposure.ClassCode.Classification
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at GLExpCovTxDetailLV.pcf: line 53, column 25
    function value_20 () : gw.api.productmodel.ClausePattern {
      return cost.GeneralLiabilityCov.Pattern
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at GLExpCovTxDetailLV.pcf: line 60, column 25
    function value_23 () : java.math.BigDecimal {
      return cost.Basis
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at GLExpCovTxDetailLV.pcf: line 67, column 25
    function value_26 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at GLExpCovTxDetailLV.pcf: line 75, column 25
    function value_29 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at GLExpCovTxDetailLV.pcf: line 82, column 25
    function value_33 () : java.util.Date {
      return tx.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at GLExpCovTxDetailLV.pcf: line 89, column 25
    function value_37 () : java.util.Date {
      return tx.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at GLExpCovTxDetailLV.pcf: line 97, column 25
    function value_41 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(tx.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at GLExpCovTxDetailLV.pcf: line 105, column 25
    function value_44 () : gw.pl.currency.MonetaryAmount {
      return tx.AmountBilling
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at GLExpCovTxDetailLV.pcf: line 75, column 25
    function visible_31 () : java.lang.Boolean {
      return prorated
    }
    
    property get cost () : entity.GLCovExposureCost {
      return getVariableValue("cost", 1) as entity.GLCovExposureCost
    }
    
    property set cost ($arg :  entity.GLCovExposureCost) {
      setVariableValue("cost", 1, $arg)
    }
    
    property get tx () : entity.GLTransaction {
      return getIteratedValue(1) as entity.GLTransaction
    }
    
    
  }
  
  
}