package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BACoverageCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BACoverageCostLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BACoverageCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BACoverageCostLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=CovTerm_Cell) at BACoverageCostLV.pcf: line 54, column 26
    function label_3 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue",  gw.pcf.line.common.CostUIHelper.getDisplayableCurrency(java.util.Arrays.asList(costs)) )
    }
    
    // 'sortBy' attribute on IteratorSort at BACoverageCostLV.pcf: line 32, column 24
    function sortBy_0 (cost :  entity.BACost) : java.lang.Object {
      return cost.Coverage.Pattern.CoverageCategory.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at BACoverageCostLV.pcf: line 35, column 24
    function sortBy_1 (cost :  entity.BACost) : java.lang.Object {
      return cost.Coverage.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at BACoverageCostLV.pcf: line 38, column 24
    function sortBy_2 (cost :  entity.BACost) : java.lang.Object {
      return cost.EffDate
    }
    
    // '$$sumValue' attribute on RowIterator at BACoverageCostLV.pcf: line 96, column 25
    function sumValueRoot_13 (cost :  entity.BACost) : java.lang.Object {
      return cost
    }
    
    // 'footerSumValue' attribute on RowIterator at BACoverageCostLV.pcf: line 96, column 25
    function sumValue_12 (cost :  entity.BACost) : java.lang.Object {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on RowIterator at BACoverageCostLV.pcf: line 24, column 35
    function value_63 () : entity.BACost[] {
      return costs
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BACoverageCostLV.pcf: line 63, column 25
    function visible_4 () : java.lang.Boolean {
      return prorated
    }
    
    property get addStateToCoverageName () : boolean {
      return getRequireValue("addStateToCoverageName", 0) as java.lang.Boolean
    }
    
    property set addStateToCoverageName ($arg :  boolean) {
      setRequireValue("addStateToCoverageName", 0, $arg)
    }
    
    property get costs () : entity.BACost[] {
      return getRequireValue("costs", 0) as entity.BACost[]
    }
    
    property set costs ($arg :  entity.BACost[]) {
      setRequireValue("costs", 0, $arg)
    }
    
    property get prorated () : boolean {
      return getRequireValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setRequireValue("prorated", 0, $arg)
    }
    
    
    property get empty() : String { return "" }
    function getCovDescription(coverage : Coverage, cost : BACost) : String {
      var covName : String
      if (addStateToCoverageName) {
        covName = coverage.Pattern.DisplayName + " - " + cost.State.Description
      } else {
        covName = coverage.Pattern.DisplayName
      }
      if (covName.contains("PIP") ) {
        return covName + " - " + (cost as BAStateCovVehiclePIPCost).BAStateCovPIPCostType.DisplayName
      } else if (cost typeis BALineCovNonownedCost) {
        return covName + " - " + cost.BANonOwnedLiabCovCostType.Description
      } else {
        return covName
      }
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BACoverageCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BACoverageCostLV.pcf: line 115, column 27
    function valueRoot_42 () : java.lang.Object {
      return covTerm
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BACoverageCostLV.pcf: line 115, column 27
    function value_41 () : java.lang.String {
      return covTerm.DisplayName
    }
    
    // 'value' attribute on TextCell (id=CovTermValue_Cell) at BACoverageCostLV.pcf: line 120, column 27
    function value_44 () : java.lang.String {
      return covTerm.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=TermAmount_Cell) at BACoverageCostLV.pcf: line 124, column 33
    function value_47 () : java.lang.String {
      return empty
    }
    
    // 'visible' attribute on TextCell (id=TermAmount_Cell) at BACoverageCostLV.pcf: line 124, column 33
    function visible_48 () : java.lang.Boolean {
      return prorated
    }
    
    property get covTerm () : gw.api.domain.covterm.CovTerm {
      return getIteratedValue(2) as gw.api.domain.covterm.CovTerm
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BACoverageCostLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BACoverageCostLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BACoverageCostLV.pcf: line 29, column 33
    function initialValue_14 () : entity.Coverage {
      return cost.Coverage
    }
    
    // RowIterator at BACoverageCostLV.pcf: line 24, column 35
    function initializeVariables_62 () : void {
        theCoverage = cost.Coverage;

    }
    
    // 'label' attribute on TextCell (id=CovTerm_Cell) at BACoverageCostLV.pcf: line 54, column 26
    function label_17 () : java.lang.Object {
      return DisplayKey.get("Web.PolicyLine.Coverage.CovTermValue",  gw.pcf.line.common.CostUIHelper.getDisplayableCurrency(java.util.Arrays.asList(costs)) )
    }
    
    // 'sortBy' attribute on IteratorSort at BACoverageCostLV.pcf: line 106, column 26
    function sortBy_39 (covTerm :  gw.api.domain.covterm.CovTerm) : java.lang.Object {
      return covTerm.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at BACoverageCostLV.pcf: line 109, column 26
    function sortBy_40 (covTerm :  gw.api.domain.covterm.CovTerm) : java.lang.Object {
      return covTerm.Pattern.PublicID
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BACoverageCostLV.pcf: line 63, column 25
    function valueRoot_22 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at BACoverageCostLV.pcf: line 49, column 24
    function value_15 () : java.lang.String {
      return getCovDescription(theCoverage, cost)
    }
    
    // 'value' attribute on TextCell (id=CovTerm_Cell) at BACoverageCostLV.pcf: line 54, column 26
    function value_18 () : java.lang.String {
      return empty
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BACoverageCostLV.pcf: line 63, column 25
    function value_21 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at BACoverageCostLV.pcf: line 71, column 25
    function value_25 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at BACoverageCostLV.pcf: line 79, column 25
    function value_29 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at BACoverageCostLV.pcf: line 87, column 25
    function value_33 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(cost.ProRataByDaysValue, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at BACoverageCostLV.pcf: line 96, column 25
    function value_36 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on RowIterator at BACoverageCostLV.pcf: line 103, column 53
    function value_61 () : gw.api.domain.covterm.CovTerm[] {
      return cost.Coverage.CovTerms
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at BACoverageCostLV.pcf: line 63, column 25
    function visible_23 () : java.lang.Boolean {
      return prorated
    }
    
    property get cost () : entity.BACost {
      return getIteratedValue(1) as entity.BACost
    }
    
    property get theCoverage () : entity.Coverage {
      return getVariableValue("theCoverage", 1) as entity.Coverage
    }
    
    property set theCoverage ($arg :  entity.Coverage) {
      setVariableValue("theCoverage", 1, $arg)
    }
    
    
  }
  
  
}