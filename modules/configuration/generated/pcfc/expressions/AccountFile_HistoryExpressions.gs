package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_History.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_HistoryExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_History.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_HistoryExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=AccountFile_History) at AccountFile_History.pcf: line 9, column 71
    static function canVisit_45 (account :  Account) : java.lang.Boolean {
      return perm.Account.view(account) and perm.System.accounthistory
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_History) at AccountFile_History.pcf: line 9, column 71
    function infoBar_onEnter_46 (def :  pcf.AccountFileInfoBar) : void {
      def.onEnter(account)
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_History) at AccountFile_History.pcf: line 9, column 71
    function infoBar_refreshVariables_47 (def :  pcf.AccountFileInfoBar) : void {
      def.refreshVariables(account)
    }
    
    // Page (id=AccountFile_History) at AccountFile_History.pcf: line 9, column 71
    static function parent_48 (account :  Account) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    override property get CurrentLocation () : pcf.AccountFile_History {
      return super.CurrentLocation as pcf.AccountFile_History
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_History.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=historypolicyNumber_Cell) at AccountFile_History.pcf: line 78, column 31
    function actionAvailable_25 () : java.lang.Boolean {
      return result.PolicyTerm != null and result.PolicyTerm.getPeriodAsOf(result.EventTimestamp).PolicyNumberAssigned
    }
    
    // 'actionAvailable' attribute on TextCell (id=historyjob_Cell) at AccountFile_History.pcf: line 87, column 31
    function actionAvailable_31 () : java.lang.Boolean {
      return result.Job != null
    }
    
    // 'action' attribute on TextCell (id=historypolicyNumber_Cell) at AccountFile_History.pcf: line 78, column 31
    function action_23 () : void {
      PolicyFileForward.go(result.PolicyTerm.getPeriodAsOf(result.EventTimestamp).PolicyNumber, result.EventTimestamp)
    }
    
    // 'action' attribute on TextCell (id=historyjob_Cell) at AccountFile_History.pcf: line 87, column 31
    function action_29 () : void {
      JobForward.go(result.Job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AccountFile_History.pcf: line 48, column 31
    function action_9 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AccountFile_History.pcf: line 48, column 31
    function action_dest_10 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on TextCell (id=historypolicyNumber_Cell) at AccountFile_History.pcf: line 78, column 31
    function action_dest_24 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(result.PolicyTerm.getPeriodAsOf(result.EventTimestamp).PolicyNumber, result.EventTimestamp)
    }
    
    // 'action' attribute on TextCell (id=historyjob_Cell) at AccountFile_History.pcf: line 87, column 31
    function action_dest_30 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(result.Job)
    }
    
    // 'useArchivedStyle' attribute on Row at AccountFile_History.pcf: line 36, column 84
    function useArchivedStyle_41 () : java.lang.Boolean {
      return gw.pcf.ArchiveHelper.getArchivedStyle(result.Job)
    }
    
    // 'value' attribute on AltUserCell (id=History_User_Cell) at AccountFile_History.pcf: line 48, column 31
    function valueRoot_12 () : java.lang.Object {
      return result
    }
    
    // 'value' attribute on TextCell (id=historypolicy_Cell) at AccountFile_History.pcf: line 70, column 31
    function valueRoot_21 () : java.lang.Object {
      return result.PolicyTerm.Policy
    }
    
    // 'value' attribute on TextCell (id=historypolicyNumber_Cell) at AccountFile_History.pcf: line 78, column 31
    function valueRoot_27 () : java.lang.Object {
      return result.PolicyTerm
    }
    
    // 'value' attribute on TextCell (id=History_Type1_Cell) at AccountFile_History.pcf: line 42, column 31
    function valueRoot_7 () : java.lang.Object {
      return result.CustomType
    }
    
    // 'value' attribute on AltUserCell (id=History_User_Cell) at AccountFile_History.pcf: line 48, column 31
    function value_11 () : entity.User {
      return result.User
    }
    
    // 'value' attribute on DateCell (id=History_EventTimestamp_Cell) at AccountFile_History.pcf: line 57, column 31
    function value_14 () : java.util.Date {
      return result.EventTimestamp
    }
    
    // 'value' attribute on TextCell (id=History_Description_Cell) at AccountFile_History.pcf: line 63, column 30
    function value_17 () : java.lang.String {
      return result.Description
    }
    
    // 'value' attribute on TextCell (id=historypolicy_Cell) at AccountFile_History.pcf: line 70, column 31
    function value_20 () : String {
      return result.PolicyTerm.Policy.ProductDisplayName
    }
    
    // 'value' attribute on TextCell (id=historypolicyNumber_Cell) at AccountFile_History.pcf: line 78, column 31
    function value_26 () : java.lang.String {
      return result.PolicyTerm.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=historyjob_Cell) at AccountFile_History.pcf: line 87, column 31
    function value_32 () : entity.Job {
      return result.Job
    }
    
    // 'value' attribute on TextCell (id=OriginalValue_Cell) at AccountFile_History.pcf: line 93, column 30
    function value_35 () : java.lang.String {
      return result.OriginalValue
    }
    
    // 'value' attribute on TextCell (id=NewValue_Cell) at AccountFile_History.pcf: line 99, column 30
    function value_38 () : java.lang.String {
      return result.NewValue
    }
    
    // 'value' attribute on TextCell (id=History_Type1_Cell) at AccountFile_History.pcf: line 42, column 31
    function value_6 () : java.lang.String {
      return result.CustomType.DisplayName
    }
    
    property get result () : entity.History {
      return getIteratedValue(2) as entity.History
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_History.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends AccountFile_HistoryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at AccountFile_History.pcf: line 27, column 126
    function def_onEnter_0 (def :  pcf.HistoryScreenDV) : void {
      def.onEnter(historySearchCriteria,historySearchCriteria.getRelatedToSearchCriteriaForAccount(account)) 
    }
    
    // 'def' attribute on PanelRef at AccountFile_History.pcf: line 27, column 126
    function def_refreshVariables_1 (def :  pcf.HistoryScreenDV) : void {
      def.refreshVariables(historySearchCriteria,historySearchCriteria.getRelatedToSearchCriteriaForAccount(account)) 
    }
    
    // 'searchCriteria' attribute on SearchPanel at AccountFile_History.pcf: line 25, column 77
    function searchCriteria_44 () : gw.history.HistorySearchCriteria {
      return new gw.history.HistorySearchCriteria(){:RelatedItem = account}
    }
    
    // 'search' attribute on SearchPanel at AccountFile_History.pcf: line 25, column 77
    function search_43 () : java.lang.Object {
      return historySearchCriteria.performSearch()
    }
    
    // 'value' attribute on DateCell (id=History_EventTimestamp_Cell) at AccountFile_History.pcf: line 57, column 31
    function sortValue_2 (result :  entity.History) : java.lang.Object {
      return result.EventTimestamp
    }
    
    // 'value' attribute on TextCell (id=History_Description_Cell) at AccountFile_History.pcf: line 63, column 30
    function sortValue_3 (result :  entity.History) : java.lang.Object {
      return result.Description
    }
    
    // 'value' attribute on TextCell (id=OriginalValue_Cell) at AccountFile_History.pcf: line 93, column 30
    function sortValue_4 (result :  entity.History) : java.lang.Object {
      return result.OriginalValue
    }
    
    // 'value' attribute on TextCell (id=NewValue_Cell) at AccountFile_History.pcf: line 99, column 30
    function sortValue_5 (result :  entity.History) : java.lang.Object {
      return result.NewValue
    }
    
    // 'value' attribute on RowIterator at AccountFile_History.pcf: line 34, column 80
    function value_42 () : gw.api.database.IQueryBeanResult<entity.History> {
      return results
    }
    
    property get historySearchCriteria () : gw.history.HistorySearchCriteria {
      return getCriteriaValue(1) as gw.history.HistorySearchCriteria
    }
    
    property set historySearchCriteria ($arg :  gw.history.HistorySearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get results () : gw.api.database.IQueryBeanResult<History> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<History>
    }
    
    
  }
  
  
}