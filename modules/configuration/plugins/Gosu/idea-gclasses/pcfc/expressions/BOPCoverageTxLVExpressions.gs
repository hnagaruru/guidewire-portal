package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPCoverageTxLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPCoverageTxLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPCoverageTxLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPCoverageTxLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BOPCoverageTxLV.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return txs.AnyProrated
    }
    
    // 'label' attribute on EmptyCell (id=CovTerm_Cell) at BOPCoverageTxLV.pcf: line 57, column 99
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue", "")
    }
    
    // 'sortBy' attribute on IteratorSort at BOPCoverageTxLV.pcf: line 30, column 24
    function sortBy_1 (tx :  entity.BOPTransaction) : java.lang.Object {
      return (typeof tx.BOPCost).AllTypesInHierarchy.Count
    }
    
    // 'sortBy' attribute on IteratorSort at BOPCoverageTxLV.pcf: line 33, column 24
    function sortBy_2 (tx :  entity.BOPTransaction) : java.lang.Object {
      return typeof tx.BOPCost
    }
    
    // 'sortBy' attribute on IteratorSort at BOPCoverageTxLV.pcf: line 36, column 24
    function sortBy_3 (tx :  entity.BOPTransaction) : java.lang.Object {
      return tx.BOPCost.Coverage.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at BOPCoverageTxLV.pcf: line 39, column 24
    function sortBy_4 (tx :  entity.BOPTransaction) : java.lang.Object {
      return tx.EffDate
    }
    
    // 'sortBy' attribute on IteratorSort at BOPCoverageTxLV.pcf: line 42, column 24
    function sortBy_5 (tx :  entity.BOPTransaction) : java.lang.Object {
      return tx.BOPCost.ID
    }
    
    // '$$sumValue' attribute on RowIterator at BOPCoverageTxLV.pcf: line 98, column 25
    function sumValueRoot_16 (tx :  entity.BOPTransaction) : java.lang.Object {
      return tx
    }
    
    // 'footerSumValue' attribute on RowIterator at BOPCoverageTxLV.pcf: line 98, column 25
    function sumValue_15 (tx :  entity.BOPTransaction) : java.lang.Object {
      return tx.AmountBilling
    }
    
    // 'value' attribute on RowIterator at BOPCoverageTxLV.pcf: line 23, column 43
    function value_53 () : entity.BOPTransaction[] {
      return txs.toTypedArray()
    }
    
    // 'visible' attribute on ListViewPanel (id=BOPCoverageTxLV) at BOPCoverageTxLV.pcf: line 10, column 45
    function visible_54 () : java.lang.Boolean {
      return txs != null and not txs.Empty
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BOPCoverageTxLV.pcf: line 65, column 25
    function visible_7 () : java.lang.Boolean {
      return prorated
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 0, $arg)
    }
    
    property get txs () : java.util.Set<BOPTransaction> {
      return getRequireValue("txs", 0) as java.util.Set<BOPTransaction>
    }
    
    property set txs ($arg :  java.util.Set<BOPTransaction>) {
      setRequireValue("txs", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPCoverageTxLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CovTermValue_Cell) at BOPCoverageTxLV.pcf: line 122, column 43
    function valueRoot_45 () : java.lang.Object {
      return covTerm
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BOPCoverageTxLV.pcf: line 117, column 55
    function value_42 () : java.lang.String {
      return covTerm.DisplayName.leftPad( 7 )
    }
    
    // 'value' attribute on TextCell (id=CovTermValue_Cell) at BOPCoverageTxLV.pcf: line 122, column 43
    function value_44 () : java.lang.String {
      return covTerm.DisplayValue
    }
    
    // 'visible' attribute on EmptyCell (id=TermAmount_Cell) at BOPCoverageTxLV.pcf: line 125, column 33
    function visible_47 () : java.lang.Boolean {
      return prorated
    }
    
    property get covTerm () : gw.api.domain.covterm.CovTerm {
      return getIteratedValue(2) as gw.api.domain.covterm.CovTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPCoverageTxLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BOPCoverageTxLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BOPCoverageTxLV.pcf: line 27, column 33
    function initialValue_17 () : entity.Coverage {
      return tx.BOPCost.Coverage
    }
    
    // RowIterator at BOPCoverageTxLV.pcf: line 23, column 43
    function initializeVariables_52 () : void {
        theCoverage = tx.BOPCost.Coverage;

    }
    
    // 'label' attribute on EmptyCell (id=CovTerm_Cell) at BOPCoverageTxLV.pcf: line 57, column 99
    function label_20 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue", "")
    }
    
    // 'sortBy' attribute on IteratorSort at BOPCoverageTxLV.pcf: line 108, column 26
    function sortBy_40 (covTerm :  gw.api.domain.covterm.CovTerm) : java.lang.Object {
      return covTerm.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at BOPCoverageTxLV.pcf: line 111, column 26
    function sortBy_41 (covTerm :  gw.api.domain.covterm.CovTerm) : java.lang.Object {
      return covTerm.Pattern.PublicID
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BOPCoverageTxLV.pcf: line 65, column 25
    function valueRoot_23 () : java.lang.Object {
      return tx.BOPCost
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at BOPCoverageTxLV.pcf: line 73, column 25
    function valueRoot_27 () : java.lang.Object {
      return tx
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BOPCoverageTxLV.pcf: line 52, column 93
    function value_18 () : java.lang.String {
      return DisplayKey.get("Web.PolicyLine.Coverage", theCoverage.Pattern)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BOPCoverageTxLV.pcf: line 65, column 25
    function value_22 () : gw.pl.currency.MonetaryAmount {
      return tx.BOPCost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at BOPCoverageTxLV.pcf: line 73, column 25
    function value_26 () : java.util.Date {
      return tx.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at BOPCoverageTxLV.pcf: line 81, column 25
    function value_30 () : java.util.Date {
      return tx.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at BOPCoverageTxLV.pcf: line 89, column 25
    function value_34 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(tx.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at BOPCoverageTxLV.pcf: line 98, column 25
    function value_37 () : gw.pl.currency.MonetaryAmount {
      return tx.AmountBilling
    }
    
    // 'value' attribute on RowIterator at BOPCoverageTxLV.pcf: line 105, column 53
    function value_51 () : gw.api.domain.covterm.CovTerm[] {
      return theCoverage.CovTerms
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BOPCoverageTxLV.pcf: line 65, column 25
    function visible_24 () : java.lang.Boolean {
      return prorated
    }
    
    property get theCoverage () : entity.Coverage {
      return getVariableValue("theCoverage", 1) as entity.Coverage
    }
    
    property set theCoverage ($arg :  entity.Coverage) {
      setVariableValue("theCoverage", 1, $arg)
    }
    
    property get tx () : entity.BOPTransaction {
      return getIteratedValue(1) as entity.BOPTransaction
    }
    
    
  }
  
  
}