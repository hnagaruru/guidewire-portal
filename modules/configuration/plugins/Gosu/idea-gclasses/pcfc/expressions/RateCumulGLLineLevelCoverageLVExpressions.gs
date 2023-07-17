package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl/policy/RateCumulGLLineLevelCoverageLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateCumulGLLineLevelCoverageLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/RateCumulGLLineLevelCoverageLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateCumulGLLineLevelCoverageLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at RateCumulGLLineLevelCoverageLV.pcf: line 45, column 25
    function valueRoot_16 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RateCumulGLLineLevelCoverageLV.pcf: line 37, column 24
    function value_13 () : java.lang.String {
      return DisplayKey.get("Web.PolicyLine.Coverage", cost.Coverage.Pattern)
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at RateCumulGLLineLevelCoverageLV.pcf: line 45, column 25
    function value_15 () : java.math.BigDecimal {
      return cost.Basis
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at RateCumulGLLineLevelCoverageLV.pcf: line 53, column 25
    function value_18 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RateCumulGLLineLevelCoverageLV.pcf: line 62, column 25
    function value_21 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at RateCumulGLLineLevelCoverageLV.pcf: line 69, column 25
    function value_25 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at RateCumulGLLineLevelCoverageLV.pcf: line 76, column 25
    function value_29 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at RateCumulGLLineLevelCoverageLV.pcf: line 84, column 25
    function value_33 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(cost.ProRataByDaysValue, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RateCumulGLLineLevelCoverageLV.pcf: line 93, column 25
    function value_36 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RateCumulGLLineLevelCoverageLV.pcf: line 62, column 25
    function visible_23 () : java.lang.Boolean {
      return prorated
    }
    
    property get cost () : entity.GLLineCovCost {
      return getIteratedValue(1) as entity.GLLineCovCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/RateCumulGLLineLevelCoverageLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateCumulGLLineLevelCoverageLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RateCumulGLLineLevelCoverageLV.pcf: line 15, column 23
    function initialValue_0 () : boolean {
      return lineLevelCovCosts.AnyProrated
    }
    
    // 'sortBy' attribute on IteratorSort at RateCumulGLLineLevelCoverageLV.pcf: line 25, column 24
    function sortBy_1 (cost :  entity.GLLineCovCost) : java.lang.Object {
      return cost.Coverage.CoverageCategory.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at RateCumulGLLineLevelCoverageLV.pcf: line 28, column 24
    function sortBy_2 (cost :  entity.GLLineCovCost) : java.lang.Object {
      return cost.Coverage.Pattern.Priority
    }
    
    // '$$sumValue' attribute on RowIterator at RateCumulGLLineLevelCoverageLV.pcf: line 93, column 25
    function sumValueRoot_12 (cost :  entity.GLLineCovCost) : java.lang.Object {
      return cost
    }
    
    // 'footerSumValue' attribute on RowIterator at RateCumulGLLineLevelCoverageLV.pcf: line 93, column 25
    function sumValue_11 (cost :  entity.GLLineCovCost) : java.lang.Object {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on RowIterator at RateCumulGLLineLevelCoverageLV.pcf: line 22, column 42
    function value_39 () : entity.GLLineCovCost[] {
      return lineLevelCovCosts.toTypedArray()
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RateCumulGLLineLevelCoverageLV.pcf: line 62, column 25
    function visible_3 () : java.lang.Boolean {
      return prorated
    }
    
    property get lineLevelCovCosts () : java.util.Set<GLLineCovCost> {
      return getRequireValue("lineLevelCovCosts", 0) as java.util.Set<GLLineCovCost>
    }
    
    property set lineLevelCovCosts ($arg :  java.util.Set<GLLineCovCost>) {
      setRequireValue("lineLevelCovCosts", 0, $arg)
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 0, $arg)
    }
    
    
  }
  
  
}