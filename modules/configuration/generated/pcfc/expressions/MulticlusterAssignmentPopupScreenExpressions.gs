package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/MulticlusterAssignmentPopupScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MulticlusterAssignmentPopupScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/assignment/MulticlusterAssignmentPopupScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MulticlusterAssignmentPopupScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=MulticlusterAssignmentPopupScreen_CancelButton) at MulticlusterAssignmentPopupScreen.pcf: line 15, column 23
    function action_0 () : void {
      CurrentLocation.cancel()
    }
    
    // 'def' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 20, column 45
    function def_onEnter_2 (def :  pcf.FailedAssignmentsLV_Activity) : void {
      def.onEnter(AssignmentPopup)
    }
    
    // 'def' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 20, column 45
    function def_onEnter_4 (def :  pcf.FailedAssignmentsLV_default) : void {
      def.onEnter(AssignmentPopup)
    }
    
    // 'def' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 20, column 45
    function def_refreshVariables_3 (def :  pcf.FailedAssignmentsLV_Activity) : void {
      def.refreshVariables(AssignmentPopup)
    }
    
    // 'def' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 20, column 45
    function def_refreshVariables_5 (def :  pcf.FailedAssignmentsLV_default) : void {
      def.refreshVariables(AssignmentPopup)
    }
    
    // 'mode' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 20, column 45
    function mode_6 () : java.lang.Object {
      return AssignmentPopup.AssignableType.RelativeName
    }
    
    // 'visible' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 20, column 45
    function visible_1 () : java.lang.Boolean {
      return AssignmentPopup.hasErrors()
    }
    
    property get AssignmentPopup () : gw.api.web.activity.MulticlusterActivityAssignmentPopup {
      return getRequireValue("AssignmentPopup", 0) as gw.api.web.activity.MulticlusterActivityAssignmentPopup
    }
    
    property set AssignmentPopup ($arg :  gw.api.web.activity.MulticlusterActivityAssignmentPopup) {
      setRequireValue("AssignmentPopup", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/assignment/MulticlusterAssignmentPopupScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends MulticlusterAssignmentPopupScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 36, column 111
    function def_onEnter_10 (def :  pcf.MulticlusterAssignmentUserLV) : void {
      def.onEnter(SearchResult.Users)
    }
    
    // 'def' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 41, column 112
    function def_onEnter_13 (def :  pcf.MulticlusterAssignmentGroupLV) : void {
      def.onEnter(SearchResult.Groups)
    }
    
    // 'def' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 46, column 112
    function def_onEnter_16 (def :  pcf.MulticlusterAssignmentQueueLV) : void {
      def.onEnter(SearchResult.Queues)
    }
    
    // 'def' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 33, column 81
    function def_onEnter_7 (def :  pcf.AssignmentPopupDV) : void {
      def.onEnter(AssignmentPopup, SearchResult, SearchCriteria)
    }
    
    // 'def' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 36, column 111
    function def_refreshVariables_11 (def :  pcf.MulticlusterAssignmentUserLV) : void {
      def.refreshVariables(SearchResult.Users)
    }
    
    // 'def' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 41, column 112
    function def_refreshVariables_14 (def :  pcf.MulticlusterAssignmentGroupLV) : void {
      def.refreshVariables(SearchResult.Groups)
    }
    
    // 'def' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 46, column 112
    function def_refreshVariables_17 (def :  pcf.MulticlusterAssignmentQueueLV) : void {
      def.refreshVariables(SearchResult.Queues)
    }
    
    // 'def' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 33, column 81
    function def_refreshVariables_8 (def :  pcf.AssignmentPopupDV) : void {
      def.refreshVariables(AssignmentPopup, SearchResult, SearchCriteria)
    }
    
    // 'searchCriteria' attribute on SearchPanel at MulticlusterAssignmentPopupScreen.pcf: line 31, column 68
    function searchCriteria_19 () : gw.api.assignment.AssignmentSearchCriteria {
      return new gw.api.assignment.AssignmentSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at MulticlusterAssignmentPopupScreen.pcf: line 31, column 68
    function search_18 () : java.lang.Object {
      return SearchCriteria.performSearch()
    }
    
    // 'visible' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 41, column 112
    function visible_12 () : java.lang.Boolean {
      return (SearchCriteria.SearchType == TC_GROUP) and (AssignmentPopup.SelectionType == TC_FROMSEARCH)
    }
    
    // 'visible' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 46, column 112
    function visible_15 () : java.lang.Boolean {
      return (SearchCriteria.SearchType == TC_QUEUE) and (AssignmentPopup.SelectionType == TC_FROMSEARCH)
    }
    
    // 'visible' attribute on PanelRef at MulticlusterAssignmentPopupScreen.pcf: line 36, column 111
    function visible_9 () : java.lang.Boolean {
      return (SearchCriteria.SearchType == TC_USER) and (AssignmentPopup.SelectionType == TC_FROMSEARCH)
    }
    
    property get SearchCriteria () : gw.api.assignment.AssignmentSearchCriteria {
      return getCriteriaValue(1) as gw.api.assignment.AssignmentSearchCriteria
    }
    
    property set SearchCriteria ($arg :  gw.api.assignment.AssignmentSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get SearchResult () : gw.api.assignment.AssignmentSearchResult {
      return getResultsValue(1) as gw.api.assignment.AssignmentSearchResult
    }
    
    
  }
  
  
}