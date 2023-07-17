package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/usersearch/UserSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/usersearch/UserSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends UserSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at UserSearchPopup.pcf: line 33, column 87
    function def_onEnter_1 (def :  pcf.UserSearchDV) : void {
      def.onEnter(searchCriteria, organization != null, userType != null)
    }
    
    // 'def' attribute on PanelRef at UserSearchPopup.pcf: line 35, column 44
    function def_onEnter_3 (def :  pcf.UserSearchResultsLV) : void {
      def.onEnter(users)
    }
    
    // 'def' attribute on PanelRef at UserSearchPopup.pcf: line 33, column 87
    function def_refreshVariables_2 (def :  pcf.UserSearchDV) : void {
      def.refreshVariables(searchCriteria, organization != null, userType != null)
    }
    
    // 'def' attribute on PanelRef at UserSearchPopup.pcf: line 35, column 44
    function def_refreshVariables_4 (def :  pcf.UserSearchResultsLV) : void {
      def.refreshVariables(users)
    }
    
    // 'searchCriteria' attribute on SearchPanel at UserSearchPopup.pcf: line 31, column 74
    function searchCriteria_6 () : entity.UserSearchCriteria {
      return gw.web.admin.UserUIHelper.createSearchCriteria(organization, userType)
    }
    
    // 'search' attribute on SearchPanel at UserSearchPopup.pcf: line 31, column 74
    function search_5 () : java.lang.Object {
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
  
  @javax.annotation.Generated("config/web/pcf/shared/usersearch/UserSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (organization :  Organization) : int {
      return 1
    }
    
    static function __constructorIndex (organization :  Organization, userType :  UserType) : int {
      return 2
    }
    
    // 'initialValue' attribute on Variable at UserSearchPopup.pcf: line 18, column 28
    function initialValue_0 () : Organization {
      return null
    }
    
    override property get CurrentLocation () : pcf.UserSearchPopup {
      return super.CurrentLocation as pcf.UserSearchPopup
    }
    
    property get organization () : Organization {
      return getVariableValue("organization", 0) as Organization
    }
    
    property set organization ($arg :  Organization) {
      setVariableValue("organization", 0, $arg)
    }
    
    property get userType () : UserType {
      return getVariableValue("userType", 0) as UserType
    }
    
    property set userType ($arg :  UserType) {
      setVariableValue("userType", 0, $arg)
    }
    
    
  }
  
  
}