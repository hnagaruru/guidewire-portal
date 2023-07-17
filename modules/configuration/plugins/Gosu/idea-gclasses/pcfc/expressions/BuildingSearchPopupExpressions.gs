package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/BuildingSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BuildingSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/BuildingSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BuildingSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod) : int {
      return 0
    }
    
    // 'filter' attribute on ToolbarFilterOption at BuildingSearchPopup.pcf: line 45, column 169
    function filter_2 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.CopyPolicyData.CommercialProperty.Buildings.AllLocations"), \ b -> true)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at BuildingSearchPopup.pcf: line 47, column 97
    function filters_3 () : gw.api.filters.IFilter[] {
      return (new gw.lob.cp.CPBuildingFilterSet(buildings)).createBuildingFilters()
    }
    
    // 'initialValue' attribute on Variable at BuildingSearchPopup.pcf: line 20, column 35
    function initialValue_0 () : entity.CPBuilding[] {
      return findAllSelectableBuildings(period)
    }
    
    // EditButtons at BuildingSearchPopup.pcf: line 27, column 34
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'sortBy' attribute on TextCell (id=BuildingDescription_Cell) at BuildingSearchPopup.pcf: line 56, column 46
    function sortValue_4 (building :  entity.CPBuilding) : java.lang.Object {
      return building.DisplayName
    }
    
    // 'sortBy' attribute on TextCell (id=BuildingLocation_Cell) at BuildingSearchPopup.pcf: line 62, column 46
    function sortValue_5 (building :  entity.CPBuilding) : java.lang.Object {
      return building.CPLocation.Location.LocationNum
    }
    
    // 'sortBy' attribute on TextCell (id=BldgLimit_Cell) at BuildingSearchPopup.pcf: line 68, column 75
    function sortValue_6 (building :  entity.CPBuilding) : java.lang.Object {
      return building.CPBldgCov.CPBldgCovLimitTerm.Value
    }
    
    // 'sortBy' attribute on TextCell (id=BusPersPropLimit_Cell) at BuildingSearchPopup.pcf: line 74, column 73
    function sortValue_7 (building :  entity.CPBuilding) : java.lang.Object {
      return building.CPBPPCov.CPBPPCovLimitTerm.Value
    }
    
    // 'sortBy' attribute on TextCell (id=BusIncome_Cell) at BuildingSearchPopup.pcf: line 80, column 58
    function sortValue_8 (building :  entity.CPBuilding) : java.lang.Object {
      return building.BusIncomeLimitSum
    }
    
    // 'sortBy' attribute on TextCell (id=ExtraExpense_Cell) at BuildingSearchPopup.pcf: line 86, column 99
    function sortValue_9 (building :  entity.CPBuilding) : java.lang.Object {
      return building.CPBldgExtraExpenseCov.CPBldgExtraExpenseCovLimitTerm.Value
    }
    
    // 'value' attribute on RowIterator (id=buildingIterator) at BuildingSearchPopup.pcf: line 38, column 43
    function value_28 () : entity.CPBuilding[] {
      return buildings
    }
    
    override property get CurrentLocation () : pcf.BuildingSearchPopup {
      return super.CurrentLocation as pcf.BuildingSearchPopup
    }
    
    property get buildings () : entity.CPBuilding[] {
      return getVariableValue("buildings", 0) as entity.CPBuilding[]
    }
    
    property set buildings ($arg :  entity.CPBuilding[]) {
      setVariableValue("buildings", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    function findAllSelectableBuildings(policyPeriod : PolicyPeriod) :CPBuilding[] {
      var sortedBuildings : java.util.List<CPBuilding> = {}
      var sortedLocations = policyPeriod.CPLine.CPLocations.sortBy(\ l -> l.Location.LocationNum)
      sortedLocations.each(\ l -> sortedBuildings.addAll(l.Buildings.sortBy(\ b -> b.Building.BuildingNum).toList()))
      return sortedBuildings.toArray(new CPBuilding[sortedBuildings.Count])
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/BuildingSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BuildingSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=BuildingLocation_Cell) at BuildingSearchPopup.pcf: line 62, column 46
    function valueRoot_13 () : java.lang.Object {
      return building
    }
    
    // 'value' attribute on TextCell (id=BldgLimit_Cell) at BuildingSearchPopup.pcf: line 68, column 75
    function valueRoot_16 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovLimitTerm
    }
    
    // 'value' attribute on TextCell (id=BusPersPropLimit_Cell) at BuildingSearchPopup.pcf: line 74, column 73
    function valueRoot_19 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovLimitTerm
    }
    
    // 'value' attribute on TextCell (id=ExtraExpense_Cell) at BuildingSearchPopup.pcf: line 86, column 99
    function valueRoot_25 () : java.lang.Object {
      return building.CPBldgExtraExpenseCov.CPBldgExtraExpenseCovLimitTerm
    }
    
    // 'value' attribute on TextCell (id=BuildingDescription_Cell) at BuildingSearchPopup.pcf: line 56, column 46
    function value_10 () : entity.CPBuilding {
      return building
    }
    
    // 'value' attribute on TextCell (id=BuildingLocation_Cell) at BuildingSearchPopup.pcf: line 62, column 46
    function value_12 () : entity.CPLocation {
      return building.CPLocation
    }
    
    // 'value' attribute on TextCell (id=BldgLimit_Cell) at BuildingSearchPopup.pcf: line 68, column 75
    function value_15 () : java.lang.String {
      return building.CPBldgCov.CPBldgCovLimitTerm.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=BusPersPropLimit_Cell) at BuildingSearchPopup.pcf: line 74, column 73
    function value_18 () : java.lang.String {
      return building.CPBPPCov.CPBPPCovLimitTerm.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=BusIncome_Cell) at BuildingSearchPopup.pcf: line 80, column 58
    function value_21 () : java.lang.String {
      return building.BusIncomeLimitSumDisplay
    }
    
    // 'value' attribute on TextCell (id=ExtraExpense_Cell) at BuildingSearchPopup.pcf: line 86, column 99
    function value_24 () : java.lang.String {
      return building.CPBldgExtraExpenseCov.CPBldgExtraExpenseCovLimitTerm.DisplayValue
    }
    
    property get building () : entity.CPBuilding {
      return getIteratedValue(1) as entity.CPBuilding
    }
    
    
  }
  
  
}