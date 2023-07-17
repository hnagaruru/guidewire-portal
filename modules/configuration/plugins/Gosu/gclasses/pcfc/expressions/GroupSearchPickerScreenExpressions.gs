package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/groupsearch/GroupSearchPickerScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupSearchPickerScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/groupsearch/GroupSearchPickerScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupSearchPickerScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get excludeGroup () : Group {
      return getRequireValue("excludeGroup", 0) as Group
    }
    
    property set excludeGroup ($arg :  Group) {
      setRequireValue("excludeGroup", 0, $arg)
    }
    
    property get org () : Organization {
      return getRequireValue("org", 0) as Organization
    }
    
    property set org ($arg :  Organization) {
      setRequireValue("org", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/groupsearch/GroupSearchPickerScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends GroupSearchPickerScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at GroupSearchPickerScreen.pcf: line 21, column 46
    function def_onEnter_0 (def :  pcf.GroupSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at GroupSearchPickerScreen.pcf: line 23, column 64
    function def_onEnter_2 (def :  pcf.GroupSearchPickerResultsLV) : void {
      def.onEnter(groups, excludeGroup)
    }
    
    // 'def' attribute on PanelRef at GroupSearchPickerScreen.pcf: line 21, column 46
    function def_refreshVariables_1 (def :  pcf.GroupSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at GroupSearchPickerScreen.pcf: line 23, column 64
    function def_refreshVariables_3 (def :  pcf.GroupSearchPickerResultsLV) : void {
      def.refreshVariables(groups, excludeGroup)
    }
    
    // 'searchCriteria' attribute on SearchPanel at GroupSearchPickerScreen.pcf: line 19, column 73
    function searchCriteria_5 () : entity.GroupSearchCriteria {
      return gw.web.admin.NewGroupUIHelper.initializeSearchCriteria(org)
    }
    
    // 'search' attribute on SearchPanel at GroupSearchPickerScreen.pcf: line 19, column 73
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