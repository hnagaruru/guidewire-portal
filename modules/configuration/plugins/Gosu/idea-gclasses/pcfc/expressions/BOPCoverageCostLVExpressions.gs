package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPCoverageCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPCoverageCostLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPCoverageCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPCoverageCostLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BOPCoverageCostLV.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return costs.AnyProrated
    }
    
    // 'label' attribute on EmptyCell (id=CovTerm_Cell) at BOPCoverageCostLV.pcf: line 54, column 187
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue",  gw.pcf.line.common.CostUIHelper.getDisplayableCurrency(new java.util.ArrayList<Cost>(costs)) )
    }
    
    // 'sortBy' attribute on IteratorSort at BOPCoverageCostLV.pcf: line 30, column 24
    function sortBy_1 (cost :  entity.BOPCost) : java.lang.Object {
      return (typeof cost).AllTypesInHierarchy.Count
    }
    
    // 'sortBy' attribute on IteratorSort at BOPCoverageCostLV.pcf: line 33, column 24
    function sortBy_2 (cost :  entity.BOPCost) : java.lang.Object {
      return typeof cost
    }
    
    // 'sortBy' attribute on IteratorSort at BOPCoverageCostLV.pcf: line 36, column 24
    function sortBy_3 (cost :  entity.BOPCost) : java.lang.Object {
      return cost.Coverage.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at BOPCoverageCostLV.pcf: line 39, column 24
    function sortBy_4 (cost :  entity.BOPCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // '$$sumValue' attribute on RowIterator at BOPCoverageCostLV.pcf: line 95, column 25
    function sumValueRoot_15 (cost :  entity.BOPCost) : java.lang.Object {
      return cost
    }
    
    // 'footerSumValue' attribute on RowIterator at BOPCoverageCostLV.pcf: line 95, column 25
    function sumValue_14 (cost :  entity.BOPCost) : java.lang.Object {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on RowIterator at BOPCoverageCostLV.pcf: line 23, column 36
    function value_53 () : entity.BOPCost[] {
      return costs.toTypedArray()
    }
    
    // 'visible' attribute on ListViewPanel (id=BOPCoverageCostLV) at BOPCoverageCostLV.pcf: line 10, column 49
    function visible_54 () : java.lang.Boolean {
      return costs != null and not costs.Empty
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BOPCoverageCostLV.pcf: line 62, column 25
    function visible_6 () : java.lang.Boolean {
      return prorated
    }
    
    property get costs () : java.util.Set<BOPCost> {
      return getRequireValue("costs", 0) as java.util.Set<BOPCost>
    }
    
    property set costs ($arg :  java.util.Set<BOPCost>) {
      setRequireValue("costs", 0, $arg)
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPCoverageCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CovTermValue_Cell) at BOPCoverageCostLV.pcf: line 118, column 43
    function valueRoot_45 () : java.lang.Object {
      return covTerm
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BOPCoverageCostLV.pcf: line 113, column 55
    function value_42 () : java.lang.String {
      return covTerm.DisplayName.leftPad( 7 )
    }
    
    // 'value' attribute on TextCell (id=CovTermValue_Cell) at BOPCoverageCostLV.pcf: line 118, column 43
    function value_44 () : java.lang.String {
      return covTerm.DisplayValue
    }
    
    // 'visible' attribute on EmptyCell (id=TermAmount_Cell) at BOPCoverageCostLV.pcf: line 121, column 33
    function visible_47 () : java.lang.Boolean {
      return prorated
    }
    
    property get covTerm () : gw.api.domain.covterm.CovTerm {
      return getIteratedValue(2) as gw.api.domain.covterm.CovTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPCoverageCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BOPCoverageCostLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BOPCoverageCostLV.pcf: line 27, column 33
    function initialValue_16 () : entity.Coverage {
      return cost.Coverage
    }
    
    // RowIterator at BOPCoverageCostLV.pcf: line 23, column 36
    function initializeVariables_52 () : void {
        theCoverage = cost.Coverage;

    }
    
    // 'label' attribute on EmptyCell (id=CovTerm_Cell) at BOPCoverageCostLV.pcf: line 54, column 187
    function label_20 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue",  gw.pcf.line.common.CostUIHelper.getDisplayableCurrency(new java.util.ArrayList<Cost>(costs)) )
    }
    
    // 'sortBy' attribute on IteratorSort at BOPCoverageCostLV.pcf: line 105, column 26
    function sortBy_40 (covTerm :  gw.api.domain.covterm.CovTerm) : java.lang.Object {
      return covTerm.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at BOPCoverageCostLV.pcf: line 108, column 26
    function sortBy_41 (covTerm :  gw.api.domain.covterm.CovTerm) : java.lang.Object {
      return covTerm.Pattern.PublicID
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BOPCoverageCostLV.pcf: line 49, column 52
    function valueRoot_18 () : java.lang.Object {
      return theCoverage.Pattern
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BOPCoverageCostLV.pcf: line 62, column 25
    function valueRoot_23 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BOPCoverageCostLV.pcf: line 49, column 52
    function value_17 () : java.lang.String {
      return theCoverage.Pattern.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BOPCoverageCostLV.pcf: line 62, column 25
    function value_22 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at BOPCoverageCostLV.pcf: line 70, column 25
    function value_26 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at BOPCoverageCostLV.pcf: line 78, column 25
    function value_30 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at BOPCoverageCostLV.pcf: line 86, column 25
    function value_34 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(cost.ProRataByDaysValue, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at BOPCoverageCostLV.pcf: line 95, column 25
    function value_37 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on RowIterator at BOPCoverageCostLV.pcf: line 102, column 53
    function value_51 () : gw.api.domain.covterm.CovTerm[] {
      return theCoverage.CovTerms
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BOPCoverageCostLV.pcf: line 62, column 25
    function visible_24 () : java.lang.Boolean {
      return prorated
    }
    
    property get cost () : entity.BOPCost {
      return getIteratedValue(1) as entity.BOPCost
    }
    
    property get theCoverage () : entity.Coverage {
      return getVariableValue("theCoverage", 1) as entity.Coverage
    }
    
    property set theCoverage ($arg :  entity.Coverage) {
      setVariableValue("theCoverage", 1, $arg)
    }
    
    
  }
  
  
}