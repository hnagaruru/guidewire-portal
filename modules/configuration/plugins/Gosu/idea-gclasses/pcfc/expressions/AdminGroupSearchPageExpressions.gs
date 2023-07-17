package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/AdminGroupSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminGroupSearchPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/AdminGroupSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminGroupSearchPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=AdminGroupSearchPage) at AdminGroupSearchPage.pcf: line 10, column 63
    static function canVisit_6 () : java.lang.Boolean {
      return perm.Group.viewtree
    }
    
    // Page (id=AdminGroupSearchPage) at AdminGroupSearchPage.pcf: line 10, column 63
    static function parent_7 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    override property get CurrentLocation () : pcf.AdminGroupSearchPage {
      return super.CurrentLocation as pcf.AdminGroupSearchPage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/AdminGroupSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends AdminGroupSearchPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at AdminGroupSearchPage.pcf: line 21, column 53
    function def_onEnter_0 (def :  pcf.AdminGroupSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at AdminGroupSearchPage.pcf: line 23, column 46
    function def_onEnter_2 (def :  pcf.GroupSearchResultsLV) : void {
      def.onEnter(groups)
    }
    
    // 'def' attribute on PanelRef at AdminGroupSearchPage.pcf: line 21, column 53
    function def_refreshVariables_1 (def :  pcf.AdminGroupSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at AdminGroupSearchPage.pcf: line 23, column 46
    function def_refreshVariables_3 (def :  pcf.GroupSearchResultsLV) : void {
      def.refreshVariables(groups)
    }
    
    // 'searchCriteria' attribute on SearchPanel at AdminGroupSearchPage.pcf: line 19, column 75
    function searchCriteria_5 () : entity.GroupSearchCriteria {
      return gw.admin.GroupSearchCriteriaEnhancement.createCriteria()
    }
    
    // 'search' attribute on SearchPanel at AdminGroupSearchPage.pcf: line 19, column 75
    function search_4 () : java.lang.Object {
      return searchCriteria.validateAndSearch()
    }
    
    property get groups () : gw.api.database.IQueryBeanResult<Group> {
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