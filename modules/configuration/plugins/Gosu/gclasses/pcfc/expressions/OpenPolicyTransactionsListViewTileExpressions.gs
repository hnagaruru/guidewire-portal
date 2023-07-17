package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/overview/OpenPolicyTransactionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OpenPolicyTransactionsListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/overview/OpenPolicyTransactionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends OpenPolicyTransactionsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TileAction at OpenPolicyTransactionsListViewTile.pcf: line 33, column 128
    function action_35 () : void {
      policyTransactionsHelper.newSubmission(account)
    }
    
    // 'label' attribute on TileAction at OpenPolicyTransactionsListViewTile.pcf: line 33, column 128
    function label_36 () : java.lang.Object {
      return policyTransactionsHelper.actionLabel(account)
    }
    
    // 'visible' attribute on TileAction at OpenPolicyTransactionsListViewTile.pcf: line 33, column 128
    function visible_34 () : java.lang.Boolean {
      return policyTransactionsHelper.isNewSubmissionAvailable(account) and permissions.canStartNewSubmission(account)
    }
    
    property get account () : Account {
      return getIteratedValue(1) as Account
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/overview/OpenPolicyTransactionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OpenPolicyTransactionsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 51, column 25
    function action_8 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 51, column 25
    function action_dest_9 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'useArchivedStyle' attribute on Row at OpenPolicyTransactionsListViewTile.pcf: line 45, column 57
    function useArchivedStyle_30 () : java.lang.Boolean {
      return job.PolicyTerm.CheckArchived
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 51, column 25
    function valueRoot_11 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 57, column 29
    function valueRoot_14 () : java.lang.Object {
      return job.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=Lob_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 79, column 52
    function valueRoot_25 () : java.lang.Object {
      return job.Policy
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 51, column 25
    function value_10 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 57, column 29
    function value_13 () : java.util.Date {
      return job.SelectedVersion.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 62, column 25
    function value_16 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 67, column 25
    function value_19 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 73, column 25
    function value_22 () : String {
      return policyTransactionsHelper.getPolicyNumber(job)
    }
    
    // 'value' attribute on TextCell (id=Lob_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 79, column 52
    function value_24 () : gw.api.productmodel.Product {
      return job.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=NamedInsured_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 85, column 29
    function value_27 () : java.lang.String {
      return job.SelectedVersion.PrimaryInsuredName
    }
    
    property get job () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/overview/OpenPolicyTransactionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OpenPolicyTransactionsListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=OpenPolicyTransactionsListViewTile) at OpenPolicyTransactionsListViewTile.pcf: line 11, column 56
    function action_38 () : void {
      policyTransactionsHelper.viewMore()
    }
    
    // 'initialValue' attribute on Variable at OpenPolicyTransactionsListViewTile.pcf: line 18, column 70
    function initialValue_32 () : gw.api.web.dashboard.ui.policy.PolicyTransactionHelper {
      return gw.api.web.dashboard.ui.policy.PolicyTransactionHelper.forContact(contact)
    }
    
    // 'initialValue' attribute on Variable at OpenPolicyTransactionsListViewTile.pcf: line 22, column 91
    function initialValue_33 () : gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions {
      return gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions.Instance
    }
    
    // 'sortBy' attribute on IteratorSort at OpenPolicyTransactionsListViewTile.pcf: line 43, column 24
    function sortBy_0 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 51, column 25
    function sortValue_1 (job :  entity.Job) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 57, column 29
    function sortValue_2 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.PeriodStart
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 62, column 25
    function sortValue_3 (job :  entity.Job) : java.lang.Object {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 67, column 25
    function sortValue_4 (job :  entity.Job) : java.lang.Object {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 73, column 25
    function sortValue_5 (job :  entity.Job) : java.lang.Object {
      return policyTransactionsHelper.getPolicyNumber(job)
    }
    
    // 'value' attribute on TextCell (id=Lob_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 79, column 52
    function sortValue_6 (job :  entity.Job) : java.lang.Object {
      return job.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=NamedInsured_Cell) at OpenPolicyTransactionsListViewTile.pcf: line 85, column 29
    function sortValue_7 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.PrimaryInsuredName
    }
    
    // 'value' attribute on RowIterator at OpenPolicyTransactionsListViewTile.pcf: line 40, column 32
    function value_31 () : entity.Job[] {
      return policyTransactionsHelper.Jobs
    }
    
    // 'value' attribute on TileActionIterator at OpenPolicyTransactionsListViewTile.pcf: line 29, column 31
    function value_37 () : Account[] {
      return policyTransactionsHelper.Accounts
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get permissions () : gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions {
      return getVariableValue("permissions", 0) as gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions
    }
    
    property set permissions ($arg :  gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions) {
      setVariableValue("permissions", 0, $arg)
    }
    
    property get policyTransactionsHelper () : gw.api.web.dashboard.ui.policy.PolicyTransactionHelper {
      return getVariableValue("policyTransactionsHelper", 0) as gw.api.web.dashboard.ui.policy.PolicyTransactionHelper
    }
    
    property set policyTransactionsHelper ($arg :  gw.api.web.dashboard.ui.policy.PolicyTransactionHelper) {
      setVariableValue("policyTransactionsHelper", 0, $arg)
    }
    
    
  }
  
  
}