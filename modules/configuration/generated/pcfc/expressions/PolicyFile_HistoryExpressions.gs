package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_History.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_HistoryExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_History.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=historyjob_Cell) at PolicyFile_History.pcf: line 71, column 41
    function actionAvailable_22 () : java.lang.Boolean {
      return result.Job != null and result.Job.Viewable
    }
    
    // 'action' attribute on TextCell (id=historyjob_Cell) at PolicyFile_History.pcf: line 71, column 41
    function action_20 () : void {
      JobForward.go(result.Job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PolicyFile_History.pcf: line 50, column 38
    function action_9 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PolicyFile_History.pcf: line 50, column 38
    function action_dest_10 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on TextCell (id=historyjob_Cell) at PolicyFile_History.pcf: line 71, column 41
    function action_dest_21 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(result.Job)
    }
    
    // 'useArchivedStyle' attribute on Row at PolicyFile_History.pcf: line 40, column 84
    function useArchivedStyle_32 () : java.lang.Boolean {
      return gw.pcf.ArchiveHelper.getArchivedStyle(result.Job)
    }
    
    // 'value' attribute on AltUserCell (id=History_User_Cell) at PolicyFile_History.pcf: line 50, column 38
    function valueRoot_12 () : java.lang.Object {
      return result
    }
    
    // 'value' attribute on TextCell (id=History_Type1_Cell) at PolicyFile_History.pcf: line 45, column 56
    function valueRoot_7 () : java.lang.Object {
      return result.CustomType
    }
    
    // 'value' attribute on AltUserCell (id=History_User_Cell) at PolicyFile_History.pcf: line 50, column 38
    function value_11 () : entity.User {
      return result.User
    }
    
    // 'value' attribute on DateCell (id=History_EventTimeStamp_Cell) at PolicyFile_History.pcf: line 58, column 48
    function value_14 () : java.util.Date {
      return result.EventTimestamp
    }
    
    // 'value' attribute on TextCell (id=History_Description_Cell) at PolicyFile_History.pcf: line 63, column 30
    function value_17 () : java.lang.String {
      return result.Description
    }
    
    // 'value' attribute on TextCell (id=historyjob_Cell) at PolicyFile_History.pcf: line 71, column 41
    function value_23 () : entity.Job {
      return result.Job
    }
    
    // 'value' attribute on TextCell (id=OriginalValue_Cell) at PolicyFile_History.pcf: line 75, column 47
    function value_26 () : java.lang.String {
      return result.OriginalValue
    }
    
    // 'value' attribute on TextCell (id=NewValue_Cell) at PolicyFile_History.pcf: line 79, column 42
    function value_29 () : java.lang.String {
      return result.NewValue
    }
    
    // 'value' attribute on TextCell (id=History_Type1_Cell) at PolicyFile_History.pcf: line 45, column 56
    function value_6 () : java.lang.String {
      return result.CustomType.DisplayName
    }
    
    property get result () : entity.History {
      return getIteratedValue(2) as entity.History
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_History.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_HistoryExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_History) at PolicyFile_History.pcf: line 10, column 64
    function afterEnter_36 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_History) at PolicyFile_History.pcf: line 10, column 64
    static function canVisit_37 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.viewpolicyfile and perm.System.viewhist
    }
    
    // Page (id=PolicyFile_History) at PolicyFile_History.pcf: line 10, column 64
    static function parent_38 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod,asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_History {
      return super.CurrentLocation as pcf.PolicyFile_History
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    function getSearchCriteria() : gw.history.HistorySearchCriteria {
      var sc = new gw.history.HistorySearchCriteria() {:RelatedItem = (policyPeriod.Policy != null)? policyPeriod.Policy: policyPeriod.PolicyTerm}
      return sc
      }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_History.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends PolicyFile_HistoryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_History.pcf: line 31, column 132
    function def_onEnter_0 (def :  pcf.HistoryScreenDV) : void {
      def.onEnter(policyHistorySearch,policyHistorySearch.getRelatedToSearchCriteriaForPolicy(policyPeriod.Policy))
    }
    
    // 'def' attribute on PanelRef at PolicyFile_History.pcf: line 31, column 132
    function def_refreshVariables_1 (def :  pcf.HistoryScreenDV) : void {
      def.refreshVariables(policyHistorySearch,policyHistorySearch.getRelatedToSearchCriteriaForPolicy(policyPeriod.Policy))
    }
    
    // 'searchCriteria' attribute on SearchPanel at PolicyFile_History.pcf: line 29, column 77
    function searchCriteria_35 () : gw.history.HistorySearchCriteria {
      return getSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at PolicyFile_History.pcf: line 29, column 77
    function search_34 () : java.lang.Object {
      return policyHistorySearch.performSearch()
    }
    
    // 'value' attribute on DateCell (id=History_EventTimeStamp_Cell) at PolicyFile_History.pcf: line 58, column 48
    function sortValue_2 (result :  entity.History) : java.lang.Object {
      return result.EventTimestamp
    }
    
    // 'value' attribute on TextCell (id=History_Description_Cell) at PolicyFile_History.pcf: line 63, column 30
    function sortValue_3 (result :  entity.History) : java.lang.Object {
      return result.Description
    }
    
    // 'value' attribute on TextCell (id=OriginalValue_Cell) at PolicyFile_History.pcf: line 75, column 47
    function sortValue_4 (result :  entity.History) : java.lang.Object {
      return result.OriginalValue
    }
    
    // 'value' attribute on TextCell (id=NewValue_Cell) at PolicyFile_History.pcf: line 79, column 42
    function sortValue_5 (result :  entity.History) : java.lang.Object {
      return result.NewValue
    }
    
    // 'value' attribute on RowIterator at PolicyFile_History.pcf: line 38, column 80
    function value_33 () : gw.api.database.IQueryBeanResult<entity.History> {
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