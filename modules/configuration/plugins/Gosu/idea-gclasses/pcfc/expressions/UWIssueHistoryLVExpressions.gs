package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/UWIssueHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWIssueHistoryLVExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/UWIssueHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UWIssueHistoryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=Job_Cell) at UWIssueHistoryLV.pcf: line 42, column 47
    function actionAvailable_19 () : java.lang.Boolean {
      return history.PolicyPeriod.Job != issue.PolicyPeriod.Job and perm.Job.view(history.PolicyPeriod.Job)
    }
    
    // 'action' attribute on TextCell (id=Job_Cell) at UWIssueHistoryLV.pcf: line 42, column 47
    function action_17 () : void {
      JobForward.go(history.PolicyPeriod.Job, history.PolicyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Job_Cell) at UWIssueHistoryLV.pcf: line 42, column 47
    function action_dest_18 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(history.PolicyPeriod.Job, history.PolicyPeriod)
    }
    
    // 'editable' attribute on Row at UWIssueHistoryLV.pcf: line 24, column 32
    function editable_36 () : java.lang.Boolean {
      return history.New
    }
    
    // 'value' attribute on DateCell (id=HistoryCreateDate_Cell) at UWIssueHistoryLV.pcf: line 32, column 39
    function valueRoot_12 () : java.lang.Object {
      return history
    }
    
    // 'value' attribute on TextCell (id=ThroughValue_Cell) at UWIssueHistoryLV.pcf: line 57, column 64
    function valueRoot_29 () : java.lang.Object {
      return history.BlockingPoint
    }
    
    // 'value' attribute on DateCell (id=HistoryCreateDate_Cell) at UWIssueHistoryLV.pcf: line 32, column 39
    function value_11 () : java.util.Date {
      return history.CreateDate
    }
    
    // 'value' attribute on DateCell (id=HistoryEffDate_Cell) at UWIssueHistoryLV.pcf: line 36, column 36
    function value_14 () : java.util.Date {
      return history.EffDate
    }
    
    // 'value' attribute on TextCell (id=Job_Cell) at UWIssueHistoryLV.pcf: line 42, column 47
    function value_20 () : java.lang.String {
      return getJobDescription(history)
    }
    
    // 'value' attribute on TextCell (id=ReferenceValue_Cell) at UWIssueHistoryLV.pcf: line 48, column 60
    function value_22 () : java.lang.String {
      return history.FormattedReferenceValue
    }
    
    // 'value' attribute on BooleanRadioCell (id=EditBeforeBind_Cell) at UWIssueHistoryLV.pcf: line 53, column 44
    function value_26 () : java.lang.Boolean {
      return editBeforeBind(history)
    }
    
    // 'value' attribute on TextCell (id=ThroughValue_Cell) at UWIssueHistoryLV.pcf: line 57, column 64
    function value_28 () : java.lang.String {
      return history.BlockingPoint.DisplayAsThroughValue
    }
    
    // 'value' attribute on TextCell (id=InvalidFrom_Cell) at UWIssueHistoryLV.pcf: line 62, column 31
    function value_31 () : String {
      return history.InvalidFrom()
    }
    
    // 'value' attribute on TypeKeyCell (id=HistoryStatus_Cell) at UWIssueHistoryLV.pcf: line 67, column 53
    function value_33 () : typekey.UWIssueHistoryStatus {
      return history.Status
    }
    
    // 'value' attribute on TextCell (id=ResponsibleUser_Cell) at UWIssueHistoryLV.pcf: line 28, column 48
    function value_9 () : java.lang.String {
      return getResponsibleUser(history)
    }
    
    // 'visible' attribute on TextCell (id=ReferenceValue_Cell) at UWIssueHistoryLV.pcf: line 48, column 60
    function visible_24 () : java.lang.Boolean {
      return issue.IssueType.Comparator != TC_NONE
    }
    
    property get history () : entity.UWIssueHistory {
      return getIteratedValue(1) as entity.UWIssueHistory
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/UWIssueHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWIssueHistoryLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on RowIterator at UWIssueHistoryLV.pcf: line 22, column 69
    function editable_8 () : java.lang.Boolean {
      return canEdit
    }
    
    // 'value' attribute on TextCell (id=ResponsibleUser_Cell) at UWIssueHistoryLV.pcf: line 28, column 48
    function sortValue_0 (history :  entity.UWIssueHistory) : java.lang.Object {
      return getResponsibleUser(history)
    }
    
    // 'value' attribute on DateCell (id=HistoryCreateDate_Cell) at UWIssueHistoryLV.pcf: line 32, column 39
    function sortValue_1 (history :  entity.UWIssueHistory) : java.lang.Object {
      return history.CreateDate
    }
    
    // 'value' attribute on DateCell (id=HistoryEffDate_Cell) at UWIssueHistoryLV.pcf: line 36, column 36
    function sortValue_2 (history :  entity.UWIssueHistory) : java.lang.Object {
      return history.EffDate
    }
    
    // 'value' attribute on TextCell (id=Job_Cell) at UWIssueHistoryLV.pcf: line 42, column 47
    function sortValue_3 (history :  entity.UWIssueHistory) : java.lang.Object {
      return getJobDescription(history)
    }
    
    // 'value' attribute on TextCell (id=ThroughValue_Cell) at UWIssueHistoryLV.pcf: line 57, column 64
    function sortValue_5 (history :  entity.UWIssueHistory) : java.lang.Object {
      return history.BlockingPoint.DisplayAsThroughValue
    }
    
    // 'value' attribute on TextCell (id=InvalidFrom_Cell) at UWIssueHistoryLV.pcf: line 62, column 31
    function sortValue_6 (history :  entity.UWIssueHistory) : java.lang.Object {
      return history.InvalidFrom()
    }
    
    // 'value' attribute on TypeKeyCell (id=HistoryStatus_Cell) at UWIssueHistoryLV.pcf: line 67, column 53
    function sortValue_7 (history :  entity.UWIssueHistory) : java.lang.Object {
      return history.Status
    }
    
    // 'value' attribute on RowIterator at UWIssueHistoryLV.pcf: line 22, column 69
    function value_37 () : gw.util.IOrderedList<entity.UWIssueHistory> {
      return approvalHistories.orderByDescending(\ h -> h.CreateTimeOrNow)
    }
    
    // 'visible' attribute on TextCell (id=ReferenceValue_Cell) at UWIssueHistoryLV.pcf: line 48, column 60
    function visible_4 () : java.lang.Boolean {
      return issue.IssueType.Comparator != TC_NONE
    }
    
    property get approvalHistories () : UWIssueHistory[] {
      return getRequireValue("approvalHistories", 0) as UWIssueHistory[]
    }
    
    property set approvalHistories ($arg :  UWIssueHistory[]) {
      setRequireValue("approvalHistories", 0, $arg)
    }
    
    property get canEdit () : boolean {
      return getRequireValue("canEdit", 0) as java.lang.Boolean
    }
    
    property set canEdit ($arg :  boolean) {
      setRequireValue("canEdit", 0, $arg)
    }
    
    property get issue () : UWIssue {
      return getRequireValue("issue", 0) as UWIssue
    }
    
    property set issue ($arg :  UWIssue) {
      setRequireValue("issue", 0, $arg)
    }
    
    function getJobDescription(history : UWIssueHistory) : String {
      var period = history.PolicyPeriod
      var job = period.Job
      return (job.Periods.Count == 1) ?
        DisplayKey.get("Web.UWIssue.UWIssueHistoryLV.Job.JobDescription", job.Subtype, job.JobNumber) :
        DisplayKey.get("Web.UWIssue.UWIssueHistoryLV.Job.JobAndVersionDescription", job.Subtype, job.JobNumber, period.BranchName)
    }
    
    function editBeforeBind(history : UWIssueHistory) : Boolean {
      return (history.Status == TC_APPROVED) ? history.EditBeforeBind : null
    }
    
    function getResponsibleUser(history : UWIssueHistory) : String {
      var result = history.ResponsibleUser.DisplayName
      if (history.AutomaticOperationCause != null) {
        result = DisplayKey.get("Web.UWIssue.UWIssueHistoryLV.ResponsibleUser.Automated", result)
      }
      return result
    }
    
    
  }
  
  
}