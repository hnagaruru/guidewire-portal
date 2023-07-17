package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/OpenPolicyTransactionsAccountListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OpenPolicyTransactionsAccountListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/OpenPolicyTransactionsAccountListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OpenPolicyTransactionsAccountListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 66, column 25
    function action_23 () : void {
      PolicyFileForward.go(job.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 42, column 25
    function action_8 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 66, column 25
    function action_dest_24 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(job.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 42, column 25
    function action_dest_9 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'available' attribute on TextCell (id=PolicyNumber_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 66, column 25
    function available_22 () : java.lang.Boolean {
      return job.SelectedVersion.PolicyNumberAssigned
    }
    
    // 'useArchivedStyle' attribute on Row at OpenPolicyTransactionsAccountListViewTile.pcf: line 36, column 57
    function useArchivedStyle_34 () : java.lang.Boolean {
      return job.PolicyTerm.CheckArchived
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 42, column 25
    function valueRoot_11 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 47, column 25
    function valueRoot_14 () : java.lang.Object {
      return job.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=Lob_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 72, column 31
    function valueRoot_29 () : java.lang.Object {
      return job.Policy
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 42, column 25
    function value_10 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 47, column 25
    function value_13 () : java.util.Date {
      return job.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 53, column 25
    function value_16 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 58, column 25
    function value_19 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 66, column 25
    function value_25 () : String {
      return policyTransactionsHelper.getPolicyNumber(job)
    }
    
    // 'value' attribute on TextCell (id=Lob_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 72, column 31
    function value_28 () : String {
      return job.Policy.ProductDisplayName
    }
    
    // 'value' attribute on TextCell (id=NamedInsured_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 78, column 29
    function value_31 () : java.lang.String {
      return job.SelectedVersion.PrimaryInsuredName
    }
    
    property get job () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/overview/OpenPolicyTransactionsAccountListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OpenPolicyTransactionsAccountListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TileAction (id=NewSubmission) at OpenPolicyTransactionsAccountListViewTile.pcf: line 24, column 66
    function action_38 () : void {
      NewSubmission.go(account)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=OpenPolicyTransactionsAccountListViewTile) at OpenPolicyTransactionsAccountListViewTile.pcf: line 11, column 56
    function action_40 () : void {
      policyTransactionsHelper.viewMore()
    }
    
    // 'action' attribute on TileAction (id=NewSubmission) at OpenPolicyTransactionsAccountListViewTile.pcf: line 24, column 66
    function action_dest_39 () : pcf.api.Destination {
      return pcf.NewSubmission.createDestination(account)
    }
    
    // 'initialValue' attribute on Variable at OpenPolicyTransactionsAccountListViewTile.pcf: line 18, column 70
    function initialValue_36 () : gw.api.web.dashboard.ui.policy.PolicyTransactionHelper {
      return gw.api.web.dashboard.ui.policy.PolicyTransactionHelper.forAccount(account)
    }
    
    // 'sortBy' attribute on IteratorSort at OpenPolicyTransactionsAccountListViewTile.pcf: line 34, column 24
    function sortBy_0 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 42, column 25
    function sortValue_1 (job :  entity.Job) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 47, column 25
    function sortValue_2 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 53, column 25
    function sortValue_3 (job :  entity.Job) : java.lang.Object {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 58, column 25
    function sortValue_4 (job :  entity.Job) : java.lang.Object {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 66, column 25
    function sortValue_5 (job :  entity.Job) : java.lang.Object {
      return policyTransactionsHelper.getPolicyNumber(job)
    }
    
    // 'value' attribute on TextCell (id=Lob_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 72, column 31
    function sortValue_6 (job :  entity.Job) : java.lang.Object {
      return job.Policy.ProductDisplayName
    }
    
    // 'value' attribute on TextCell (id=NamedInsured_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 78, column 29
    function sortValue_7 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.PrimaryInsuredName
    }
    
    // 'value' attribute on RowIterator at OpenPolicyTransactionsAccountListViewTile.pcf: line 30, column 32
    function value_35 () : entity.Job[] {
      return policyTransactionsHelper.Jobs
    }
    
    // 'visible' attribute on TileAction (id=NewSubmission) at OpenPolicyTransactionsAccountListViewTile.pcf: line 24, column 66
    function visible_37 () : java.lang.Boolean {
      return account.NewSubmissionVisible
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get policyTransactionsHelper () : gw.api.web.dashboard.ui.policy.PolicyTransactionHelper {
      return getVariableValue("policyTransactionsHelper", 0) as gw.api.web.dashboard.ui.policy.PolicyTransactionHelper
    }
    
    property set policyTransactionsHelper ($arg :  gw.api.web.dashboard.ui.policy.PolicyTransactionHelper) {
      setVariableValue("policyTransactionsHelper", 0, $arg)
    }
    
    
  }
  
  
}