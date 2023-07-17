package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UserAttributesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserAttributesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UserAttributesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends UserAttributesPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=UserAttributesPopup_CancelButton) at UserAttributesPopup.pcf: line 33, column 66
    function action_3 () : void {
      CurrentLocation.cancel()
    }
    
    // 'def' attribute on PanelRef at UserAttributesPopup.pcf: line 19, column 57
    function def_onEnter_0 (def :  pcf.UserAttributesSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at UserAttributesPopup.pcf: line 21, column 54
    function def_onEnter_4 (def :  pcf.UserAttributesSearchLV) : void {
      def.onEnter(searchResult)
    }
    
    // 'def' attribute on PanelRef at UserAttributesPopup.pcf: line 19, column 57
    function def_refreshVariables_1 (def :  pcf.UserAttributesSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at UserAttributesPopup.pcf: line 21, column 54
    function def_refreshVariables_5 (def :  pcf.UserAttributesSearchLV) : void {
      def.refreshVariables(searchResult)
    }
    
    // 'pickValue' attribute on CheckedValuesToolbarButton (id=UserAttributesPopup_SelectButton) at UserAttributesPopup.pcf: line 29, column 42
    function pickValue_2 (CheckedValues :  entity.Attribute[]) : Attribute[] {
      return CheckedValues
    }
    
    // 'searchCriteria' attribute on SearchPanel at UserAttributesPopup.pcf: line 17, column 79
    function searchCriteria_7 () : gw.api.admin.AttributeSearchCriteria {
      return new gw.api.admin.AttributeSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at UserAttributesPopup.pcf: line 17, column 79
    function search_6 () : java.lang.Object {
      return searchCriteria.performSearch() as gw.api.database.IQueryBeanResult<Attribute>
    }
    
    property get searchCriteria () : gw.api.admin.AttributeSearchCriteria {
      return getCriteriaValue(1) as gw.api.admin.AttributeSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.api.admin.AttributeSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResult () : gw.api.database.IQueryBeanResult<Attribute> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<Attribute>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UserAttributesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserAttributesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.UserAttributesPopup {
      return super.CurrentLocation as pcf.UserAttributesPopup
    }
    
    
  }
  
  
}