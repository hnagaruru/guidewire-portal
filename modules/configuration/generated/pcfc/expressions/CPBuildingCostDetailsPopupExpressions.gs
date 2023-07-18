package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingCostDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPBuildingCostDetailsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingCostDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPBuildingCostDetailsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (buildingCosts :  java.util.Set<CPCost>, building :  CPBuilding) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at CPBuildingCostDetailsPopup.pcf: line 20, column 88
    function initialValue_0 () : java.util.Map<entity.Coverage, java.util.Set<entity.CPCost>> {
      return buildingCosts.byFixedCoverage()
    }
    
    // 'initialValue' attribute on Variable at CPBuildingCostDetailsPopup.pcf: line 24, column 23
    function initialValue_1 () : boolean {
      return buildingCosts.AnyProrated
    }
    
    // 'sortBy' attribute on IteratorSort at CPBuildingCostDetailsPopup.pcf: line 64, column 28
    function sortBy_6 (cov :  entity.Coverage) : java.lang.Object {
      return cov.DisplayName
    }
    
    // 'title' attribute on Popup (id=CPBuildingCostDetailsPopup) at CPBuildingCostDetailsPopup.pcf: line 8, column 113
    static function title_40 (building :  CPBuilding, buildingCosts :  java.util.Set<CPCost>) : java.lang.Object {
      return DisplayKey.get("Web.PolicyFile.PolicyLine.CP.CostDetails", building, building.CPLocation)
    }
    
    // 'value' attribute on RowIterator at CPBuildingCostDetailsPopup.pcf: line 57, column 41
    function value_39 () : entity.Coverage[] {
      return buildingCostsByCoverage.Keys.toTypedArray()
    }
    
    // 'visible' attribute on TextCell (id=Amount_Cell) at CPBuildingCostDetailsPopup.pcf: line 36, column 33
    function visible_2 () : java.lang.Boolean {
      return prorated
    }
    
    override property get CurrentLocation () : pcf.CPBuildingCostDetailsPopup {
      return super.CurrentLocation as pcf.CPBuildingCostDetailsPopup
    }
    
    property get building () : CPBuilding {
      return getVariableValue("building", 0) as CPBuilding
    }
    
    property set building ($arg :  CPBuilding) {
      setVariableValue("building", 0, $arg)
    }
    
    property get buildingCosts () : java.util.Set<CPCost> {
      return getVariableValue("buildingCosts", 0) as java.util.Set<CPCost>
    }
    
    property set buildingCosts ($arg :  java.util.Set<CPCost>) {
      setVariableValue("buildingCosts", 0, $arg)
    }
    
    property get buildingCostsByCoverage () : java.util.Map<entity.Coverage, java.util.Set<entity.CPCost>> {
      return getVariableValue("buildingCostsByCoverage", 0) as java.util.Map<entity.Coverage, java.util.Set<entity.CPCost>>
    }
    
    property set buildingCostsByCoverage ($arg :  java.util.Map<entity.Coverage, java.util.Set<entity.CPCost>>) {
      setVariableValue("buildingCostsByCoverage", 0, $arg)
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 0) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingCostDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costAmount_Cell) at CPBuildingCostDetailsPopup.pcf: line 86, column 37
    function valueRoot_19 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CPBuildingCostDetailsPopup.pcf: line 82, column 44
    function value_16 () : entity.CPCost {
      return cost
    }
    
    // 'value' attribute on MonetaryAmountCell (id=costAmount_Cell) at CPBuildingCostDetailsPopup.pcf: line 86, column 37
    function value_18 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=costEffDate_Cell) at CPBuildingCostDetailsPopup.pcf: line 90, column 37
    function value_22 () : java.util.Date {
      return cost.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at CPBuildingCostDetailsPopup.pcf: line 94, column 37
    function value_26 () : java.util.Date {
      return cost.ExpDate
    }
    
    // 'value' attribute on TextCell (id=costProration_Cell) at CPBuildingCostDetailsPopup.pcf: line 99, column 37
    function value_30 () : java.lang.Double {
      return cost.ProRataByDaysValue
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at CPBuildingCostDetailsPopup.pcf: line 102, column 50
    function value_34 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=costAmount_Cell) at CPBuildingCostDetailsPopup.pcf: line 86, column 37
    function visible_20 () : java.lang.Boolean {
      return prorated
    }
    
    property get cost () : entity.CPCost {
      return getIteratedValue(2) as entity.CPCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingCostDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CPBuildingCostDetailsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at CPBuildingCostDetailsPopup.pcf: line 61, column 37
    function initialValue_7 () : entity.CPCost[] {
      return buildingCostsByCoverage.get(cov).toTypedArray()
    }
    
    // RowIterator at CPBuildingCostDetailsPopup.pcf: line 57, column 41
    function initializeVariables_38 () : void {
        costs = buildingCostsByCoverage.get(cov).toTypedArray();

    }
    
    // 'sortBy' attribute on IteratorSort at CPBuildingCostDetailsPopup.pcf: line 74, column 30
    function sortBy_8 (cost :  entity.CPCost) : java.lang.Object {
      return cost.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at CPBuildingCostDetailsPopup.pcf: line 77, column 30
    function sortBy_9 (cost :  entity.CPCost) : java.lang.Object {
      return cost.EffDate
    }
    
    // 'value' attribute on TextCell (id=AmountFooter_Cell) at CPBuildingCostDetailsPopup.pcf: line 109, column 37
    function value_14 () : gw.pl.currency.MonetaryAmount {
      return costs.fastList().AmountSum(building.Branch.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on RowIterator (id=costIterator) at CPBuildingCostDetailsPopup.pcf: line 71, column 41
    function value_37 () : entity.CPCost[] {
      return costs
    }
    
    // 'visible' attribute on RowIterator (id=costIterator) at CPBuildingCostDetailsPopup.pcf: line 86, column 37
    function visible_10 () : java.lang.Boolean {
      return prorated
    }
    
    property get costs () : entity.CPCost[] {
      return getVariableValue("costs", 1) as entity.CPCost[]
    }
    
    property set costs ($arg :  entity.CPCost[]) {
      setVariableValue("costs", 1, $arg)
    }
    
    property get cov () : entity.Coverage {
      return getIteratedValue(1) as entity.Coverage
    }
    
    
  }
  
  
}