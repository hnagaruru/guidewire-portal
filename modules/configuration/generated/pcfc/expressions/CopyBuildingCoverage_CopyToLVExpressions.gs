package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CopyBuildingCoverage_CopyToLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CopyBuildingCoverage_CopyToLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CopyBuildingCoverage_CopyToLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CopyBuildingCoverage_CopyToLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at CopyBuildingCoverage_CopyToLV.pcf: line 30, column 165
    function filter_0 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.CopyPolicyData.CommercialProperty.Buildings.AllLocations"), \ b -> true)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at CopyBuildingCoverage_CopyToLV.pcf: line 32, column 99
    function filters_1 () : gw.api.filters.IFilter[] {
      return (new gw.lob.cp.CPBuildingFilterSet(copyToBuildings)).createBuildingFilters()
    }
    
    // 'sortBy' attribute on TextCell (id=BuildingDescription_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 40, column 42
    function sortValue_2 (building :  entity.CPBuilding) : java.lang.Object {
      return building.DisplayName
    }
    
    // 'sortBy' attribute on TextCell (id=BuildingLocation_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 46, column 42
    function sortValue_3 (building :  entity.CPBuilding) : java.lang.Object {
      return building.CPLocation.Location.LocationNum
    }
    
    // 'sortBy' attribute on TextCell (id=BldgLimit_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 52, column 71
    function sortValue_4 (building :  entity.CPBuilding) : java.lang.Object {
      return building.CPBldgCov.CPBldgCovLimitTerm.Value
    }
    
    // 'sortBy' attribute on TextCell (id=BusPersPropLimit_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 58, column 69
    function sortValue_5 (building :  entity.CPBuilding) : java.lang.Object {
      return building.CPBPPCov.CPBPPCovLimitTerm.Value
    }
    
    // 'sortBy' attribute on TextCell (id=BusIncome_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 64, column 54
    function sortValue_6 (building :  entity.CPBuilding) : java.lang.Object {
      return building.BusIncomeLimitSum
    }
    
    // 'sortBy' attribute on TextCell (id=ExtraExpense_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 70, column 95
    function sortValue_7 (building :  entity.CPBuilding) : java.lang.Object {
      return building.CPBldgExtraExpenseCov.CPBldgExtraExpenseCovLimitTerm.Value
    }
    
    // 'value' attribute on RowIterator (id=BuildingIterator) at CopyBuildingCoverage_CopyToLV.pcf: line 23, column 39
    function value_25 () : entity.CPBuilding[] {
      return copyToBuildings
    }
    
    property get copyToBuildings () : CPBuilding[] {
      return getRequireValue("copyToBuildings", 0) as CPBuilding[]
    }
    
    property set copyToBuildings ($arg :  CPBuilding[]) {
      setRequireValue("copyToBuildings", 0, $arg)
    }
    
    property get locations () : CPLocation[] {
      return getRequireValue("locations", 0) as CPLocation[]
    }
    
    property set locations ($arg :  CPLocation[]) {
      setRequireValue("locations", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CopyBuildingCoverage_CopyToLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CopyBuildingCoverage_CopyToLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=BuildingLocation_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 46, column 42
    function valueRoot_11 () : java.lang.Object {
      return building
    }
    
    // 'value' attribute on TextCell (id=BldgLimit_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 52, column 71
    function valueRoot_14 () : java.lang.Object {
      return building.CPBldgCov.CPBldgCovLimitTerm
    }
    
    // 'value' attribute on TextCell (id=BusPersPropLimit_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 58, column 69
    function valueRoot_17 () : java.lang.Object {
      return building.CPBPPCov.CPBPPCovLimitTerm
    }
    
    // 'value' attribute on TextCell (id=ExtraExpense_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 70, column 95
    function valueRoot_23 () : java.lang.Object {
      return building.CPBldgExtraExpenseCov.CPBldgExtraExpenseCovLimitTerm
    }
    
    // 'value' attribute on TextCell (id=BuildingLocation_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 46, column 42
    function value_10 () : entity.CPLocation {
      return building.CPLocation
    }
    
    // 'value' attribute on TextCell (id=BldgLimit_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 52, column 71
    function value_13 () : java.lang.String {
      return building.CPBldgCov.CPBldgCovLimitTerm.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=BusPersPropLimit_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 58, column 69
    function value_16 () : java.lang.String {
      return building.CPBPPCov.CPBPPCovLimitTerm.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=BusIncome_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 64, column 54
    function value_19 () : java.lang.String {
      return building.BusIncomeLimitSumDisplay
    }
    
    // 'value' attribute on TextCell (id=ExtraExpense_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 70, column 95
    function value_22 () : java.lang.String {
      return building.CPBldgExtraExpenseCov.CPBldgExtraExpenseCovLimitTerm.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=BuildingDescription_Cell) at CopyBuildingCoverage_CopyToLV.pcf: line 40, column 42
    function value_8 () : entity.CPBuilding {
      return building
    }
    
    property get building () : entity.CPBuilding {
      return getIteratedValue(1) as entity.CPBuilding
    }
    
    
  }
  
  
}