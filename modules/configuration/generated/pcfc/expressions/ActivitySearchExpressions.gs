package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/ActivitySearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivitySearchExpressions {
  @javax.annotation.Generated("config/web/pcf/search/ActivitySearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivitySearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (activityStatus :  ActivityStatus) : int {
      return 1
    }
    
    static function __constructorIndex (user :  User, activityStatus :  ActivityStatus) : int {
      return 2
    }
    
    // 'canVisit' attribute on Page (id=ActivitySearch) at ActivitySearch.pcf: line 9, column 66
    static function canVisit_10 (activityStatus :  ActivityStatus, user :  User) : java.lang.Boolean {
      return perm.System.searchactivities
    }
    
    // Page (id=ActivitySearch) at ActivitySearch.pcf: line 9, column 66
    static function parent_11 (activityStatus :  ActivityStatus, user :  User) : pcf.api.Destination {
      return pcf.Search.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ActivitySearch {
      return super.CurrentLocation as pcf.ActivitySearch
    }
    
    property get activityStatus () : ActivityStatus {
      return getVariableValue("activityStatus", 0) as ActivityStatus
    }
    
    property set activityStatus ($arg :  ActivityStatus) {
      setVariableValue("activityStatus", 0, $arg)
    }
    
    property get user () : User {
      return getVariableValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setVariableValue("user", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/ActivitySearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends ActivitySearchExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=PrintMe) at ActivitySearch.pcf: line 41, column 76
    function action_2 () : void {
      gw.api.print.ListViewPrintOptionPopupAction.printListViewOnlyWithOptions( "ActivitiesSearchLV" )
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ActivitySearch_AssignButton) at ActivitySearch.pcf: line 49, column 29
    function allCheckedRowsAction_3 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      AssignActivitiesPopup.push(new gw.api.web.activity.ActivityAssignmentPopup(CheckedValues, gw.assignment.AssignmentUtil.DefaultUser))
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ActivitySearch_SkipButton) at ActivitySearch.pcf: line 56, column 29
    function allCheckedRowsAction_4 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.web.activity.ActivityUtil.skipActivities(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ActivitySearch_CompleteButton) at ActivitySearch.pcf: line 63, column 29
    function allCheckedRowsAction_5 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.web.activity.ActivityUtil.completeActivities(CheckedValues)
    }
    
    // 'def' attribute on PanelRef at ActivitySearch.pcf: line 32, column 51
    function def_onEnter_0 (def :  pcf.ActivitySearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at ActivitySearch.pcf: line 34, column 79
    function def_onEnter_6 (def :  pcf.ActivitiesSearchLV) : void {
      def.onEnter(searchResult, searchCriteria.PolicyNumber)
    }
    
    // 'def' attribute on PanelRef at ActivitySearch.pcf: line 32, column 51
    function def_refreshVariables_1 (def :  pcf.ActivitySearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at ActivitySearch.pcf: line 34, column 79
    function def_refreshVariables_7 (def :  pcf.ActivitiesSearchLV) : void {
      def.refreshVariables(searchResult, searchCriteria.PolicyNumber)
    }
    
    // 'searchCriteria' attribute on SearchPanel at ActivitySearch.pcf: line 30, column 78
    function searchCriteria_9 () : gw.activity.ActivitySearchCriteria {
      var c = new gw.activity.ActivitySearchCriteria(); c.SearchedActivityStatus = activityStatus; c.SearchedAssignedUser = user; return c;
    }
    
    // 'search' attribute on SearchPanel at ActivitySearch.pcf: line 30, column 78
    function search_8 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    property get searchCriteria () : gw.activity.ActivitySearchCriteria {
      return getCriteriaValue(1) as gw.activity.ActivitySearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.activity.ActivitySearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResult () : gw.api.database.IQueryBeanResult<Activity> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<Activity>
    }
    
    
  }
  
  
}