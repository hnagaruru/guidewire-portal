package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.system.ExternalUserAccessMode
@javax.annotation.Generated("config/web/pcf/activity/PCAssigneePickerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PCAssigneePickerPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/PCAssigneePickerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PCAssigneePickerPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (AssigneePicker :  gw.api.assignment.AssigneePicker) : int {
      return 0
    }
    
    property get AssigneePicker () : gw.api.assignment.AssigneePicker {
      return getVariableValue("AssigneePicker", 0) as gw.api.assignment.AssigneePicker
    }
    
    property set AssigneePicker ($arg :  gw.api.assignment.AssigneePicker) {
      setVariableValue("AssigneePicker", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.PCAssigneePickerPopup {
      return super.CurrentLocation as pcf.PCAssigneePickerPopup
    }
    
    
    function createSearchCriteria() : gw.api.assignment.AssignmentSearchCriteria {
      var criteria = new gw.api.assignment.AssignmentSearchCriteria()
      if (ExternalUserAccessMode.isFullyRestricted() && User.util.CurrentUser.ExternalUser) {
        criteria.UserCriteria.Organization = User.util.CurrentUser.Organization
        criteria.GroupCriteria.Organization = User.util.CurrentUser.Organization
      }
      criteria.GroupCriteria.ExcludeRootGroup = true
      return criteria
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/activity/PCAssigneePickerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends PCAssigneePickerPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PCAssigneePickerPopup.pcf: line 25, column 184
    function def_onEnter_0 (def :  pcf.AssignmentSearchDV) : void {
      def.onEnter(gw.api.upgrade.Coercions.makeArray<typekey.AssignmentSearchType>(AssigneePicker.AllowedAssignmentSearchTypes), SearchResult, SearchCriteria)
    }
    
    // 'def' attribute on PanelRef at PCAssigneePickerPopup.pcf: line 28, column 58
    function def_onEnter_3 (def :  pcf.PCAssignmentUserLV) : void {
      def.onEnter(SearchResult.Users)
    }
    
    // 'def' attribute on PanelRef at PCAssigneePickerPopup.pcf: line 33, column 59
    function def_onEnter_6 (def :  pcf.PCAssignmentGroupLV) : void {
      def.onEnter(SearchResult.Groups)
    }
    
    // 'def' attribute on PanelRef at PCAssigneePickerPopup.pcf: line 38, column 59
    function def_onEnter_9 (def :  pcf.PCAssignmentQueueLV) : void {
      def.onEnter(SearchResult.Queues)
    }
    
    // 'def' attribute on PanelRef at PCAssigneePickerPopup.pcf: line 25, column 184
    function def_refreshVariables_1 (def :  pcf.AssignmentSearchDV) : void {
      def.refreshVariables(gw.api.upgrade.Coercions.makeArray<typekey.AssignmentSearchType>(AssigneePicker.AllowedAssignmentSearchTypes), SearchResult, SearchCriteria)
    }
    
    // 'def' attribute on PanelRef at PCAssigneePickerPopup.pcf: line 38, column 59
    function def_refreshVariables_10 (def :  pcf.PCAssignmentQueueLV) : void {
      def.refreshVariables(SearchResult.Queues)
    }
    
    // 'def' attribute on PanelRef at PCAssigneePickerPopup.pcf: line 28, column 58
    function def_refreshVariables_4 (def :  pcf.PCAssignmentUserLV) : void {
      def.refreshVariables(SearchResult.Users)
    }
    
    // 'def' attribute on PanelRef at PCAssigneePickerPopup.pcf: line 33, column 59
    function def_refreshVariables_7 (def :  pcf.PCAssignmentGroupLV) : void {
      def.refreshVariables(SearchResult.Groups)
    }
    
    // 'searchCriteria' attribute on SearchPanel at PCAssigneePickerPopup.pcf: line 23, column 70
    function searchCriteria_12 () : gw.api.assignment.AssignmentSearchCriteria {
      return createSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at PCAssigneePickerPopup.pcf: line 23, column 70
    function search_11 () : java.lang.Object {
      return SearchCriteria.performSearch()
    }
    
    // 'visible' attribute on PanelRef at PCAssigneePickerPopup.pcf: line 28, column 58
    function visible_2 () : java.lang.Boolean {
      return SearchCriteria.SearchType == TC_USER
    }
    
    // 'visible' attribute on PanelRef at PCAssigneePickerPopup.pcf: line 33, column 59
    function visible_5 () : java.lang.Boolean {
      return SearchCriteria.SearchType == TC_GROUP
    }
    
    // 'visible' attribute on PanelRef at PCAssigneePickerPopup.pcf: line 38, column 59
    function visible_8 () : java.lang.Boolean {
      return SearchCriteria.SearchType == TC_QUEUE
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