package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary/ChangeRequestsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ChangeRequestsListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary/ChangeRequestsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ChangeRequestsListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=ChangeRequestsListViewTile) at ChangeRequestsListViewTile.pcf: line 11, column 56
    function action_54 () : void {
      DesktopOtherWorkOrders.push()
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=ChangeRequestsListViewTile) at ChangeRequestsListViewTile.pcf: line 11, column 56
    function action_dest_55 () : pcf.api.Destination {
      return pcf.DesktopOtherWorkOrders.createDestination()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at ChangeRequestsListViewTile.pcf: line 27, column 69
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.filters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at ChangeRequestsListViewTile.pcf: line 30, column 66
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.producerFilters()
    }
    
    // 'initialValue' attribute on Variable at ChangeRequestsListViewTile.pcf: line 18, column 92
    function initialValue_53 () : gw.api.web.dashboard.ui.underwriter.OtherTransactionHelper {
      return new gw.api.web.dashboard.ui.underwriter.OtherTransactionHelper(user)
    }
    
    // 'sortBy' attribute on IteratorSort at ChangeRequestsListViewTile.pcf: line 34, column 24
    function sortBy_3 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.EditEffectiveDate
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at ChangeRequestsListViewTile.pcf: line 86, column 52
    function sortValue_10 (job :  entity.Job) : java.lang.Object {
      return job.Policy.ProductCode
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at ChangeRequestsListViewTile.pcf: line 91, column 85
    function sortValue_11 (job :  entity.Job) : java.lang.Object {
      return job.Policy.getUserRoleAssignmentByRole(TC_PRODUCER).AssignedUser
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at ChangeRequestsListViewTile.pcf: line 42, column 25
    function sortValue_4 (job :  entity.Job) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ChangeRequestsListViewTile.pcf: line 49, column 25
    function sortValue_5 (job :  entity.Job) : java.lang.Object {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at ChangeRequestsListViewTile.pcf: line 55, column 43
    function sortValue_6 (job :  entity.Job) : java.lang.Object {
      return job.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at ChangeRequestsListViewTile.pcf: line 60, column 25
    function sortValue_7 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ChangeRequestsListViewTile.pcf: line 66, column 25
    function sortValue_8 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.Status
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ChangeRequestsListViewTile.pcf: line 73, column 25
    function sortValue_9 (job :  entity.Job) : java.lang.Object {
      return helper.getPolicyNumber(job)
    }
    
    // 'value' attribute on RowIterator at ChangeRequestsListViewTile.pcf: line 23, column 70
    function value_52 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return helper.OtherTransactions
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at ChangeRequestsListViewTile.pcf: line 30, column 66
    function visible_2 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get helper () : gw.api.web.dashboard.ui.underwriter.OtherTransactionHelper {
      return getVariableValue("helper", 0) as gw.api.web.dashboard.ui.underwriter.OtherTransactionHelper
    }
    
    property set helper ($arg :  gw.api.web.dashboard.ui.underwriter.OtherTransactionHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/summary/ChangeRequestsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ChangeRequestsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at ChangeRequestsListViewTile.pcf: line 42, column 25
    function action_13 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at ChangeRequestsListViewTile.pcf: line 49, column 25
    function action_20 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at ChangeRequestsListViewTile.pcf: line 55, column 43
    function action_26 () : void {
      ContactForward.go(job.Policy.Account.AccountHolderContact)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at ChangeRequestsListViewTile.pcf: line 73, column 25
    function action_37 () : void {
      PolicyFileForward.go(job.LatestPeriod.PolicyNumber)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ChangeRequestsListViewTile.pcf: line 91, column 85
    function action_47 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at ChangeRequestsListViewTile.pcf: line 42, column 25
    function action_dest_14 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at ChangeRequestsListViewTile.pcf: line 49, column 25
    function action_dest_21 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at ChangeRequestsListViewTile.pcf: line 55, column 43
    function action_dest_27 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(job.Policy.Account.AccountHolderContact)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at ChangeRequestsListViewTile.pcf: line 73, column 25
    function action_dest_38 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(job.LatestPeriod.PolicyNumber)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at ChangeRequestsListViewTile.pcf: line 91, column 85
    function action_dest_48 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'available' attribute on TextCell (id=JobNumber_Cell) at ChangeRequestsListViewTile.pcf: line 42, column 25
    function available_12 () : java.lang.Boolean {
      return job.Viewable
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at ChangeRequestsListViewTile.pcf: line 42, column 25
    function valueRoot_16 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at ChangeRequestsListViewTile.pcf: line 60, column 25
    function valueRoot_32 () : java.lang.Object {
      return job.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at ChangeRequestsListViewTile.pcf: line 86, column 52
    function valueRoot_45 () : java.lang.Object {
      return job.Policy
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at ChangeRequestsListViewTile.pcf: line 91, column 85
    function valueRoot_50 () : java.lang.Object {
      return job.Policy.getUserRoleAssignmentByRole(TC_PRODUCER)
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at ChangeRequestsListViewTile.pcf: line 42, column 25
    function value_15 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ChangeRequestsListViewTile.pcf: line 49, column 25
    function value_22 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at ChangeRequestsListViewTile.pcf: line 55, column 43
    function value_28 () : java.lang.String {
      return job.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at ChangeRequestsListViewTile.pcf: line 60, column 25
    function value_31 () : java.util.Date {
      return job.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ChangeRequestsListViewTile.pcf: line 66, column 25
    function value_34 () : typekey.PolicyPeriodStatus {
      return job.SelectedVersion.Status
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ChangeRequestsListViewTile.pcf: line 73, column 25
    function value_39 () : String {
      return helper.getPolicyNumber(job)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at ChangeRequestsListViewTile.pcf: line 79, column 25
    function value_41 () : gw.pl.currency.MonetaryAmount {
      return job.SelectedVersion.TotalPremiumRPT
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at ChangeRequestsListViewTile.pcf: line 86, column 52
    function value_44 () : gw.api.productmodel.Product {
      return job.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at ChangeRequestsListViewTile.pcf: line 91, column 85
    function value_49 () : entity.User {
      return job.Policy.getUserRoleAssignmentByRole(TC_PRODUCER).AssignedUser
    }
    
    property get job () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  
}