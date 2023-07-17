package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UserSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UserSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends UserSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at UserSearchScreen.pcf: line 15, column 59
    function def_onEnter_0 (def :  pcf.UserSearchDV) : void {
      def.onEnter(searchCriteria, false, false)
    }
    
    // 'def' attribute on PanelRef at UserSearchScreen.pcf: line 17, column 42
    function def_onEnter_2 (def :  pcf.UserSearchResultsLV) : void {
      def.onEnter(users)
    }
    
    // 'def' attribute on PanelRef at UserSearchScreen.pcf: line 15, column 59
    function def_refreshVariables_1 (def :  pcf.UserSearchDV) : void {
      def.refreshVariables(searchCriteria, false, false)
    }
    
    // 'def' attribute on PanelRef at UserSearchScreen.pcf: line 17, column 42
    function def_refreshVariables_3 (def :  pcf.UserSearchResultsLV) : void {
      def.refreshVariables(users)
    }
    
    // 'searchCriteria' attribute on SearchPanel at UserSearchScreen.pcf: line 13, column 72
    function searchCriteria_5 () : entity.UserSearchCriteria {
      return new UserSearchCriteria() {:Organization = User.util.CurrentUser.Producer}
    }
    
    // 'search' attribute on SearchPanel at UserSearchScreen.pcf: line 13, column 72
    function search_4 () : java.lang.Object {
      return searchCriteria.validateAndSearch()
    }
    
    property get searchCriteria () : entity.UserSearchCriteria {
      return getCriteriaValue(1) as entity.UserSearchCriteria
    }
    
    property set searchCriteria ($arg :  entity.UserSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get users () : gw.api.database.IQueryBeanResult<User> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<User>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UserSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  
}