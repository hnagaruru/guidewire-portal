package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/PendingPolicyTransactionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PendingPolicyTransactionsListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/PendingPolicyTransactionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PendingPolicyTransactionsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 40, column 25
    function action_7 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 40, column 25
    function action_dest_8 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'available' attribute on TextCell (id=JobNumber_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 40, column 25
    function available_6 () : java.lang.Boolean {
      return job.Viewable
    }
    
    // 'useArchivedStyle' attribute on Row at PendingPolicyTransactionsListViewTile.pcf: line 32, column 58
    function useArchivedStyle_27 () : java.lang.Boolean {
      return job.SelectedVersion?.Archived
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 40, column 25
    function valueRoot_10 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 46, column 25
    function valueRoot_14 () : java.lang.Object {
      return job.LatestPeriod
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 46, column 25
    function value_13 () : java.util.Date {
      return job.LatestPeriod.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=JobInProgressType_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 53, column 25
    function value_17 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 59, column 25
    function value_21 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on DateCell (id=PeriodStart_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 64, column 25
    function value_24 () : java.util.Date {
      return job.LatestPeriod.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 40, column 25
    function value_9 () : java.lang.String {
      return job.JobNumber
    }
    
    property get job () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/PendingPolicyTransactionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PendingPolicyTransactionsListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=PendingPolicyTransactionsListViewTile) at PendingPolicyTransactionsListViewTile.pcf: line 11, column 71
    function action_31 () : void {
      PolicyFile_Jobs.push(policyPeriod, asOfDate)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=PendingPolicyTransactionsListViewTile) at PendingPolicyTransactionsListViewTile.pcf: line 11, column 71
    function action_dest_32 () : pcf.api.Destination {
      return pcf.PolicyFile_Jobs.createDestination(policyPeriod, asOfDate)
    }
    
    // 'initialValue' attribute on Variable at PendingPolicyTransactionsListViewTile.pcf: line 15, column 72
    function initialValue_29 () : gw.api.web.dashboard.ui.policy.PendingTransactionsHelper {
      return new gw.api.web.dashboard.ui.policy.PendingTransactionsHelper(policyPeriod)
    }
    
    // 'sortBy' attribute on IteratorSort at PendingPolicyTransactionsListViewTile.pcf: line 30, column 24
    function sortBy_0 (job :  entity.Job) : java.lang.Object {
      return job.LatestPeriod.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 40, column 25
    function sortValue_1 (job :  entity.Job) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 46, column 25
    function sortValue_2 (job :  entity.Job) : java.lang.Object {
      return job.LatestPeriod.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=JobInProgressType_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 53, column 25
    function sortValue_3 (job :  entity.Job) : java.lang.Object {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 59, column 25
    function sortValue_4 (job :  entity.Job) : java.lang.Object {
      return job.DisplayStatus
    }
    
    // 'value' attribute on DateCell (id=PeriodStart_Cell) at PendingPolicyTransactionsListViewTile.pcf: line 64, column 25
    function sortValue_5 (job :  entity.Job) : java.lang.Object {
      return job.LatestPeriod.PeriodStart
    }
    
    // 'value' attribute on RowIterator at PendingPolicyTransactionsListViewTile.pcf: line 26, column 32
    function value_28 () : entity.Job[] {
      return pendingPolicyTransactionsHelper.LatestPendingPolicyTransactions
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=PendingPolicyTransactionsListViewTile) at PendingPolicyTransactionsListViewTile.pcf: line 11, column 71
    function visible_30 () : java.lang.Boolean {
      return pendingPolicyTransactionsHelper.ViewMoreVisible
    }
    
    property get asOfDate () : Date {
      return getRequireValue("asOfDate", 0) as Date
    }
    
    property set asOfDate ($arg :  Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get pendingPolicyTransactionsHelper () : gw.api.web.dashboard.ui.policy.PendingTransactionsHelper {
      return getVariableValue("pendingPolicyTransactionsHelper", 0) as gw.api.web.dashboard.ui.policy.PendingTransactionsHelper
    }
    
    property set pendingPolicyTransactionsHelper ($arg :  gw.api.web.dashboard.ui.policy.PendingTransactionsHelper) {
      setVariableValue("pendingPolicyTransactionsHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}