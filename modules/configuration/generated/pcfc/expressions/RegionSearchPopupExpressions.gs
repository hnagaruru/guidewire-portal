package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/policyholds/RegionSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RegionSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/RegionSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ZoneCode_Cell) at RegionSearchPopup.pcf: line 61, column 38
    function valueRoot_12 () : java.lang.Object {
      return zone
    }
    
    // 'value' attribute on TextCell (id=ZoneCode_Cell) at RegionSearchPopup.pcf: line 61, column 38
    function value_11 () : java.lang.String {
      return zone.Code
    }
    
    property get zone () : entity.Zone {
      return getIteratedValue(2) as entity.Zone
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/RegionSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RegionSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyHold :  PolicyHold) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.RegionSearchPopup {
      return super.CurrentLocation as pcf.RegionSearchPopup
    }
    
    property get policyHold () : PolicyHold {
      return getVariableValue("policyHold", 0) as PolicyHold
    }
    
    property set policyHold ($arg :  PolicyHold) {
      setVariableValue("policyHold", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/RegionSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends RegionSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ZonesAddButton) at RegionSearchPopup.pcf: line 46, column 92
    function allCheckedRowsAction_9 (CheckedValues :  entity.Zone[], CheckedValuesErrors :  java.util.Map) : void {
      CurrentLocation.pickValueAndCommit(CheckedValues)
    }
    
    // 'def' attribute on InputSetRef at RegionSearchPopup.pcf: line 32, column 53
    function def_onEnter_0 (def :  pcf.RegionSearchInputSet_CA) : void {
      def.onEnter(searchCriteria, policyHold)
    }
    
    // 'def' attribute on InputSetRef at RegionSearchPopup.pcf: line 32, column 53
    function def_onEnter_2 (def :  pcf.RegionSearchInputSet_US) : void {
      def.onEnter(searchCriteria, policyHold)
    }
    
    // 'def' attribute on InputSetRef at RegionSearchPopup.pcf: line 32, column 53
    function def_onEnter_4 (def :  pcf.RegionSearchInputSet_default) : void {
      def.onEnter(searchCriteria, policyHold)
    }
    
    // 'def' attribute on InputSetRef at RegionSearchPopup.pcf: line 36, column 49
    function def_onEnter_7 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at RegionSearchPopup.pcf: line 32, column 53
    function def_refreshVariables_1 (def :  pcf.RegionSearchInputSet_CA) : void {
      def.refreshVariables(searchCriteria, policyHold)
    }
    
    // 'def' attribute on InputSetRef at RegionSearchPopup.pcf: line 32, column 53
    function def_refreshVariables_3 (def :  pcf.RegionSearchInputSet_US) : void {
      def.refreshVariables(searchCriteria, policyHold)
    }
    
    // 'def' attribute on InputSetRef at RegionSearchPopup.pcf: line 32, column 53
    function def_refreshVariables_5 (def :  pcf.RegionSearchInputSet_default) : void {
      def.refreshVariables(searchCriteria, policyHold)
    }
    
    // 'def' attribute on InputSetRef at RegionSearchPopup.pcf: line 36, column 49
    function def_refreshVariables_8 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'mode' attribute on InputSetRef at RegionSearchPopup.pcf: line 32, column 53
    function mode_6 () : java.lang.Object {
      return searchCriteria.Country.Code
    }
    
    // 'searchCriteria' attribute on SearchPanel at RegionSearchPopup.pcf: line 24, column 36
    function searchCriteria_16 () : gw.api.admin.PCZoneSearchCriteria {
      return new gw.api.admin.PCZoneSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at RegionSearchPopup.pcf: line 24, column 36
    function search_15 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on TextCell (id=ZoneCode_Cell) at RegionSearchPopup.pcf: line 61, column 38
    function sortValue_10 (zone :  entity.Zone) : java.lang.Object {
      return zone.Code
    }
    
    // 'value' attribute on RowIterator at RegionSearchPopup.pcf: line 56, column 41
    function value_14 () : entity.Zone[] {
      return gw.web.admin.policyholds.PolicyHoldsUIHelper.getUnaddedZones(policyHold, zones)
    }
    
    property get searchCriteria () : gw.api.admin.PCZoneSearchCriteria {
      return getCriteriaValue(1) as gw.api.admin.PCZoneSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.api.admin.PCZoneSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get zones () : Zone[] {
      return getResultsValue(1) as Zone[]
    }
    
    
  }
  
  
}