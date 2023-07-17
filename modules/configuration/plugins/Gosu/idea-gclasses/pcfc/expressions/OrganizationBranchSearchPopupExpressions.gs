package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/OrganizationBranchSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationBranchSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/search/OrganizationBranchSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationBranchSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (organizationSelection :  OrganizationSelection) : int {
      return 1
    }
    
    override property get CurrentLocation () : pcf.OrganizationBranchSearchPopup {
      return super.CurrentLocation as pcf.OrganizationBranchSearchPopup
    }
    
    property get organizationSelection () : OrganizationSelection {
      return getVariableValue("organizationSelection", 0) as OrganizationSelection
    }
    
    property set organizationSelection ($arg :  OrganizationSelection) {
      setVariableValue("organizationSelection", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/OrganizationBranchSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends OrganizationBranchSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at OrganizationBranchSearchPopup.pcf: line 27, column 61
    function def_onEnter_0 (def :  pcf.OrganizationBranchSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at OrganizationBranchSearchPopup.pcf: line 30, column 28
    function def_onEnter_2 (def :  pcf.BranchesSearchLV) : void {
      def.onEnter(branches)
    }
    
    // 'def' attribute on PanelRef at OrganizationBranchSearchPopup.pcf: line 27, column 61
    function def_refreshVariables_1 (def :  pcf.OrganizationBranchSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at OrganizationBranchSearchPopup.pcf: line 30, column 28
    function def_refreshVariables_3 (def :  pcf.BranchesSearchLV) : void {
      def.refreshVariables(branches)
    }
    
    // 'searchCriteria' attribute on SearchPanel at OrganizationBranchSearchPopup.pcf: line 25, column 75
    function searchCriteria_5 () : entity.GroupSearchCriteria {
      return new GroupSearchCriteria().asBranchSearch()
    }
    
    // 'search' attribute on SearchPanel at OrganizationBranchSearchPopup.pcf: line 25, column 75
    function search_4 () : java.lang.Object {
      return searchCriteria.validateAndSearch()
    }
    
    property get branches () : gw.api.database.IQueryBeanResult<Group> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<Group>
    }
    
    property get searchCriteria () : entity.GroupSearchCriteria {
      return getCriteriaValue(1) as entity.GroupSearchCriteria
    }
    
    property set searchCriteria ($arg :  entity.GroupSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}