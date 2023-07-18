package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary/MySubmissionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MySubmissionsListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary/MySubmissionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MySubmissionsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at MySubmissionsListViewTile.pcf: line 40, column 25
    function action_12 () : void {
      JobForward.go(submission)
    }
    
    // 'action' attribute on TextCell (id=PrimaryInsured_Cell) at MySubmissionsListViewTile.pcf: line 46, column 50
    function action_17 () : void {
      ContactForward.go(submission.LatestPeriod.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at MySubmissionsListViewTile.pcf: line 81, column 85
    function action_37 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at MySubmissionsListViewTile.pcf: line 40, column 25
    function action_dest_13 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(submission)
    }
    
    // 'action' attribute on TextCell (id=PrimaryInsured_Cell) at MySubmissionsListViewTile.pcf: line 46, column 50
    function action_dest_18 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(submission.LatestPeriod.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at MySubmissionsListViewTile.pcf: line 81, column 85
    function action_dest_38 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at MySubmissionsListViewTile.pcf: line 40, column 25
    function valueRoot_15 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at MySubmissionsListViewTile.pcf: line 52, column 25
    function valueRoot_23 () : java.lang.Object {
      return submission.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MySubmissionsListViewTile.pcf: line 76, column 52
    function valueRoot_35 () : java.lang.Object {
      return submission.Policy
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at MySubmissionsListViewTile.pcf: line 81, column 85
    function valueRoot_40 () : java.lang.Object {
      return submission.getUserRoleAssignmentByRole(TC_PRODUCER)
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at MySubmissionsListViewTile.pcf: line 40, column 25
    function value_14 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryInsured_Cell) at MySubmissionsListViewTile.pcf: line 46, column 50
    function value_19 () : java.lang.String {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at MySubmissionsListViewTile.pcf: line 52, column 25
    function value_22 () : java.util.Date {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at MySubmissionsListViewTile.pcf: line 58, column 25
    function value_25 () : typekey.PolicyPeriodStatus {
      return submission.SelectedVersion.Status
    }
    
    // 'value' attribute on DateCell (id=QuoteNeeded_Cell) at MySubmissionsListViewTile.pcf: line 63, column 25
    function value_28 () : java.util.Date {
      return submission.DateQuoteNeeded
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at MySubmissionsListViewTile.pcf: line 69, column 25
    function value_31 () : gw.pl.currency.MonetaryAmount {
      return submission.SelectedVersion.TotalPremiumRPT
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MySubmissionsListViewTile.pcf: line 76, column 52
    function value_34 () : gw.api.productmodel.Product {
      return submission.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at MySubmissionsListViewTile.pcf: line 81, column 85
    function value_39 () : entity.User {
      return submission.getUserRoleAssignmentByRole(TC_PRODUCER).AssignedUser
    }
    
    property get submission () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/summary/MySubmissionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MySubmissionsListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=MySubmissionsListViewTile) at MySubmissionsListViewTile.pcf: line 11, column 56
    function action_43 () : void {
      DesktopSubmissions.push()
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=MySubmissionsListViewTile) at MySubmissionsListViewTile.pcf: line 11, column 56
    function action_dest_44 () : pcf.api.Destination {
      return pcf.DesktopSubmissions.createDestination()
    }
    
    // 'filter' attribute on ToolbarFilterOption at MySubmissionsListViewTile.pcf: line 26, column 93
    function filter_1 () : gw.api.filters.IFilter {
      return gw.api.web.desktop.DesktopJobFilters.openIssuanceJobFilter()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at MySubmissionsListViewTile.pcf: line 23, column 69
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.filters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at MySubmissionsListViewTile.pcf: line 29, column 66
    function filters_2 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.producerFilters()
    }
    
    // 'sortBy' attribute on IteratorSort at MySubmissionsListViewTile.pcf: line 33, column 24
    function sortBy_4 (submission :  entity.Job) : java.lang.Object {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at MySubmissionsListViewTile.pcf: line 76, column 52
    function sortValue_10 (submission :  entity.Job) : java.lang.Object {
      return submission.Policy.ProductCode
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at MySubmissionsListViewTile.pcf: line 81, column 85
    function sortValue_11 (submission :  entity.Job) : java.lang.Object {
      return submission.getUserRoleAssignmentByRole(TC_PRODUCER).AssignedUser
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at MySubmissionsListViewTile.pcf: line 40, column 25
    function sortValue_5 (submission :  entity.Job) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryInsured_Cell) at MySubmissionsListViewTile.pcf: line 46, column 50
    function sortValue_6 (submission :  entity.Job) : java.lang.Object {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at MySubmissionsListViewTile.pcf: line 52, column 25
    function sortValue_7 (submission :  entity.Job) : java.lang.Object {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at MySubmissionsListViewTile.pcf: line 58, column 25
    function sortValue_8 (submission :  entity.Job) : java.lang.Object {
      return submission.SelectedVersion.Status
    }
    
    // 'value' attribute on DateCell (id=QuoteNeeded_Cell) at MySubmissionsListViewTile.pcf: line 63, column 25
    function sortValue_9 (submission :  entity.Job) : java.lang.Object {
      return submission.DateQuoteNeeded
    }
    
    // 'value' attribute on RowIterator at MySubmissionsListViewTile.pcf: line 19, column 70
    function value_42 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return Job.finder.findSubmissionsAndIssuancesByUser(user)
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at MySubmissionsListViewTile.pcf: line 29, column 66
    function visible_3 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}