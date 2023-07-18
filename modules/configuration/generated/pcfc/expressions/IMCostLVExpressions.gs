package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/IMCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMCostLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/IMCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMCostLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMCostLV.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return costs.AnyProrated
    }
    
    // 'label' attribute on EmptyCell (id=CovTerm_Cell) at IMCostLV.pcf: line 47, column 25
    function label_3 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue", gw.pcf.line.common.CostUIHelper.getDisplayableCurrency(costs))
    }
    
    // 'sortBy' attribute on IteratorSort at IMCostLV.pcf: line 29, column 24
    function sortBy_1 (cost :  entity.IMCost) : java.lang.Object {
      return cost.Coverage.Pattern.CoverageCategory.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at IMCostLV.pcf: line 32, column 24
    function sortBy_2 (cost :  entity.IMCost) : java.lang.Object {
      return cost.Coverage.Pattern.Priority
    }
    
    // '$$sumValue' attribute on RowIterator at IMCostLV.pcf: line 89, column 25
    function sumValueRoot_13 (cost :  entity.IMCost) : java.lang.Object {
      return cost
    }
    
    // 'footerSumValue' attribute on RowIterator at IMCostLV.pcf: line 89, column 25
    function sumValue_12 (cost :  entity.IMCost) : java.lang.Object {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on RowIterator at IMCostLV.pcf: line 22, column 35
    function value_49 () : entity.IMCost[] {
      return costs.toTypedArray()
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at IMCostLV.pcf: line 56, column 25
    function visible_4 () : java.lang.Boolean {
      return prorated
    }
    
    property get costs () : java.util.List<IMCost> {
      return getRequireValue("costs", 0) as java.util.List<IMCost>
    }
    
    property set costs ($arg :  java.util.List<IMCost>) {
      setRequireValue("costs", 0, $arg)
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/IMCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CovTermValue_Cell) at IMCostLV.pcf: line 109, column 27
    function valueRoot_41 () : java.lang.Object {
      return covTerm
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at IMCostLV.pcf: line 104, column 64
    function value_38 () : java.lang.String {
      return "       " + covTerm.DisplayName
    }
    
    // 'value' attribute on TextCell (id=CovTermValue_Cell) at IMCostLV.pcf: line 109, column 27
    function value_40 () : java.lang.String {
      return covTerm.DisplayValue
    }
    
    // 'visible' attribute on EmptyCell (id=TermAmount_Cell) at IMCostLV.pcf: line 112, column 33
    function visible_43 () : java.lang.Boolean {
      return prorated
    }
    
    property get covTerm () : gw.api.domain.covterm.CovTerm {
      return getIteratedValue(2) as gw.api.domain.covterm.CovTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/IMCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IMCostLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at IMCostLV.pcf: line 26, column 33
    function initialValue_14 () : entity.Coverage {
      return cost.Coverage
    }
    
    // RowIterator at IMCostLV.pcf: line 22, column 35
    function initializeVariables_48 () : void {
        coverage = cost.Coverage;

    }
    
    // 'label' attribute on EmptyCell (id=CovTerm_Cell) at IMCostLV.pcf: line 47, column 25
    function label_17 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue", gw.pcf.line.common.CostUIHelper.getDisplayableCurrency(costs))
    }
    
    // 'sortBy' attribute on IteratorSort at IMCostLV.pcf: line 99, column 26
    function sortBy_37 (covTerm :  gw.api.domain.covterm.CovTerm) : java.lang.Object {
      return covTerm.Pattern.Priority
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at IMCostLV.pcf: line 56, column 25
    function valueRoot_20 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at IMCostLV.pcf: line 42, column 90
    function value_15 () : java.lang.String {
      return DisplayKey.get("Web.PolicyLine.Coverage", coverage.Pattern)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at IMCostLV.pcf: line 56, column 25
    function value_19 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at IMCostLV.pcf: line 64, column 25
    function value_23 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at IMCostLV.pcf: line 72, column 25
    function value_27 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at IMCostLV.pcf: line 80, column 25
    function value_31 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(cost.ProRataByDaysValue, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at IMCostLV.pcf: line 89, column 25
    function value_34 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on RowIterator at IMCostLV.pcf: line 96, column 53
    function value_47 () : gw.api.domain.covterm.CovTerm[] {
      return coverage.CovTerms
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at IMCostLV.pcf: line 56, column 25
    function visible_21 () : java.lang.Boolean {
      return prorated
    }
    
    property get cost () : entity.IMCost {
      return getIteratedValue(1) as entity.IMCost
    }
    
    property get coverage () : entity.Coverage {
      return getVariableValue("coverage", 1) as entity.Coverage
    }
    
    property set coverage ($arg :  entity.Coverage) {
      setVariableValue("coverage", 1, $arg)
    }
    
    
  }
  
  
}