package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/Job_HistoryScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Job_HistoryScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/Job_HistoryScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at Job_HistoryScreen.pcf: line 45, column 29
    function action_9 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at Job_HistoryScreen.pcf: line 45, column 29
    function action_dest_10 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'value' attribute on AltUserCell (id=History_User_Cell) at Job_HistoryScreen.pcf: line 45, column 29
    function valueRoot_12 () : java.lang.Object {
      return result
    }
    
    // 'value' attribute on TextCell (id=History_Type1_Cell) at Job_HistoryScreen.pcf: line 39, column 29
    function valueRoot_7 () : java.lang.Object {
      return result.CustomType
    }
    
    // 'value' attribute on AltUserCell (id=History_User_Cell) at Job_HistoryScreen.pcf: line 45, column 29
    function value_11 () : entity.User {
      return result.User
    }
    
    // 'value' attribute on DateCell (id=History_EventTimeStamp_Cell) at Job_HistoryScreen.pcf: line 54, column 29
    function value_14 () : java.util.Date {
      return result.EventTimestamp
    }
    
    // 'value' attribute on TextCell (id=History_Description_Cell) at Job_HistoryScreen.pcf: line 60, column 28
    function value_17 () : java.lang.String {
      return result.Description
    }
    
    // 'value' attribute on TextCell (id=OriginalValue_Cell) at Job_HistoryScreen.pcf: line 66, column 28
    function value_20 () : java.lang.String {
      return result.OriginalValue
    }
    
    // 'value' attribute on TextCell (id=NewValue_Cell) at Job_HistoryScreen.pcf: line 72, column 28
    function value_23 () : java.lang.String {
      return result.NewValue
    }
    
    // 'value' attribute on TextCell (id=History_Type1_Cell) at Job_HistoryScreen.pcf: line 39, column 29
    function value_6 () : java.lang.String {
      return result.CustomType.DisplayName
    }
    
    property get result () : entity.History {
      return getIteratedValue(2) as entity.History
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/Job_HistoryScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Job_HistoryScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get asOfDate () : java.util.Date {
      return getRequireValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    function getSearchCriteria() : gw.history.HistorySearchCriteria {
      var sc = new gw.history.HistorySearchCriteria() {:RelatedItem = policyPeriod.Job}
      return sc
      }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/Job_HistoryScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends Job_HistoryScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at Job_HistoryScreen.pcf: line 24, column 58
    function def_onEnter_0 (def :  pcf.HistoryScreenDV) : void {
      def.onEnter(policyHistorySearch,null)
    }
    
    // 'def' attribute on PanelRef at Job_HistoryScreen.pcf: line 24, column 58
    function def_refreshVariables_1 (def :  pcf.HistoryScreenDV) : void {
      def.refreshVariables(policyHistorySearch,null)
    }
    
    // 'searchCriteria' attribute on SearchPanel at Job_HistoryScreen.pcf: line 22, column 75
    function searchCriteria_28 () : gw.history.HistorySearchCriteria {
      return getSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at Job_HistoryScreen.pcf: line 22, column 75
    function search_27 () : java.lang.Object {
      return policyHistorySearch.performSearch()
    }
    
    // 'value' attribute on DateCell (id=History_EventTimeStamp_Cell) at Job_HistoryScreen.pcf: line 54, column 29
    function sortValue_2 (result :  entity.History) : java.lang.Object {
      return result.EventTimestamp
    }
    
    // 'value' attribute on TextCell (id=History_Description_Cell) at Job_HistoryScreen.pcf: line 60, column 28
    function sortValue_3 (result :  entity.History) : java.lang.Object {
      return result.Description
    }
    
    // 'value' attribute on TextCell (id=OriginalValue_Cell) at Job_HistoryScreen.pcf: line 66, column 28
    function sortValue_4 (result :  entity.History) : java.lang.Object {
      return result.OriginalValue
    }
    
    // 'value' attribute on TextCell (id=NewValue_Cell) at Job_HistoryScreen.pcf: line 72, column 28
    function sortValue_5 (result :  entity.History) : java.lang.Object {
      return result.NewValue
    }
    
    // 'value' attribute on RowIterator at Job_HistoryScreen.pcf: line 32, column 78
    function value_26 () : gw.api.database.IQueryBeanResult<entity.History> {
      return phResults
    }
    
    property get phResults () : gw.api.database.IQueryBeanResult<History> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<History>
    }
    
    property get policyHistorySearch () : gw.history.HistorySearchCriteria {
      return getCriteriaValue(1) as gw.history.HistorySearchCriteria
    }
    
    property set policyHistorySearch ($arg :  gw.history.HistorySearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}