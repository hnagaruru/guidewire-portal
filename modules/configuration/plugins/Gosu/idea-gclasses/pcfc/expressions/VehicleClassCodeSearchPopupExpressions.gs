package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/VehicleClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VehicleClassCodeSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/VehicleClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends VehicleClassCodeSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at VehicleClassCodeSearchPopup.pcf: line 33, column 28
    function def_onEnter_0 (def :  pcf.VehicleClassCodeSearchDV) : void {
      def.onEnter(searchCriteria, businessAutoLine)
    }
    
    // 'def' attribute on PanelRef at VehicleClassCodeSearchPopup.pcf: line 35, column 80
    function def_onEnter_2 (def :  pcf.VehicleClassCodeSearchResultsLV) : void {
      def.onEnter(searchCriteria, searchResults)
    }
    
    // 'def' attribute on PanelRef at VehicleClassCodeSearchPopup.pcf: line 33, column 28
    function def_refreshVariables_1 (def :  pcf.VehicleClassCodeSearchDV) : void {
      def.refreshVariables(searchCriteria, businessAutoLine)
    }
    
    // 'def' attribute on PanelRef at VehicleClassCodeSearchPopup.pcf: line 35, column 80
    function def_refreshVariables_3 (def :  pcf.VehicleClassCodeSearchResultsLV) : void {
      def.refreshVariables(searchCriteria, searchResults)
    }
    
    // 'searchCriteria' attribute on SearchPanel at VehicleClassCodeSearchPopup.pcf: line 30, column 74
    function searchCriteria_5 () : gw.api.domain.VehicleClassCodeSearchCriteria {
      var criteria = new gw.api.domain.VehicleClassCodeSearchCriteria(); criteria.VehicleType = bAVehicleEU.VehicleType; criteria.FleetType = businessAutoLine.Fleet; return criteria;
    }
    
    // 'search' attribute on SearchPanel at VehicleClassCodeSearchPopup.pcf: line 30, column 74
    function search_4 () : java.lang.Object {
      return gw.api.domain.BusinessVehicleClassCodeSearch.getVehicleClassCodes(searchCriteria)
    }
    
    property get searchCriteria () : gw.api.domain.VehicleClassCodeSearchCriteria {
      return getCriteriaValue(1) as gw.api.domain.VehicleClassCodeSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.api.domain.VehicleClassCodeSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResults () : gw.api.domain.VehicleClassCodeSearchResult[] {
      return getResultsValue(1) as gw.api.domain.VehicleClassCodeSearchResult[]
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/VehicleClassCodeSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleClassCodeSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (bAVehicleEU :  BusinessVehicle, businessAutoLine :  BusinessAutoLine) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.VehicleClassCodeSearchPopup {
      return super.CurrentLocation as pcf.VehicleClassCodeSearchPopup
    }
    
    property get bAVehicleEU () : BusinessVehicle {
      return getVariableValue("bAVehicleEU", 0) as BusinessVehicle
    }
    
    property set bAVehicleEU ($arg :  BusinessVehicle) {
      setVariableValue("bAVehicleEU", 0, $arg)
    }
    
    property get businessAutoLine () : BusinessAutoLine {
      return getVariableValue("businessAutoLine", 0) as BusinessAutoLine
    }
    
    property set businessAutoLine ($arg :  BusinessAutoLine) {
      setVariableValue("businessAutoLine", 0, $arg)
    }
    
    
  }
  
  
}