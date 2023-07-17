package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary/MyRenewalListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MyRenewalListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary/MyRenewalListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MyRenewalListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at MyRenewalListViewTile.pcf: line 38, column 25
    function action_11 () : void {
      JobForward.go(renewal)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at MyRenewalListViewTile.pcf: line 44, column 47
    function action_17 () : void {
      ContactForward.go(renewal.Policy.Account.AccountHolderContact)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at MyRenewalListViewTile.pcf: line 73, column 82
    function action_34 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at MyRenewalListViewTile.pcf: line 38, column 25
    function action_dest_12 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(renewal)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at MyRenewalListViewTile.pcf: line 44, column 47
    function action_dest_18 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(renewal.Policy.Account.AccountHolderContact)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at MyRenewalListViewTile.pcf: line 73, column 82
    function action_dest_35 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'available' attribute on TextCell (id=JobNumber_Cell) at MyRenewalListViewTile.pcf: line 38, column 25
    function available_10 () : java.lang.Boolean {
      return renewal.Viewable
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at MyRenewalListViewTile.pcf: line 38, column 25
    function valueRoot_14 () : java.lang.Object {
      return renewal
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at MyRenewalListViewTile.pcf: line 49, column 25
    function valueRoot_23 () : java.lang.Object {
      return renewal.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MyRenewalListViewTile.pcf: line 68, column 52
    function valueRoot_32 () : java.lang.Object {
      return renewal.Policy
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at MyRenewalListViewTile.pcf: line 73, column 82
    function valueRoot_37 () : java.lang.Object {
      return renewal.getUserRoleAssignmentByRole(TC_PRODUCER)
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at MyRenewalListViewTile.pcf: line 38, column 25
    function value_13 () : java.lang.String {
      return renewal.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at MyRenewalListViewTile.pcf: line 44, column 47
    function value_19 () : java.lang.String {
      return renewal.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at MyRenewalListViewTile.pcf: line 49, column 25
    function value_22 () : java.util.Date {
      return renewal.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at MyRenewalListViewTile.pcf: line 55, column 25
    function value_25 () : typekey.PolicyPeriodStatus {
      return renewal.SelectedVersion.Status
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at MyRenewalListViewTile.pcf: line 61, column 25
    function value_28 () : gw.pl.currency.MonetaryAmount {
      return renewal.SelectedVersion.TotalPremiumRPT
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MyRenewalListViewTile.pcf: line 68, column 52
    function value_31 () : gw.api.productmodel.Product {
      return renewal.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at MyRenewalListViewTile.pcf: line 73, column 82
    function value_36 () : entity.User {
      return renewal.getUserRoleAssignmentByRole(TC_PRODUCER).AssignedUser
    }
    
    property get renewal () : entity.Renewal {
      return getIteratedValue(1) as entity.Renewal
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/summary/MyRenewalListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MyRenewalListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=MyRenewalListViewTile) at MyRenewalListViewTile.pcf: line 11, column 56
    function action_40 () : void {
      DesktopRenewals.push()
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=MyRenewalListViewTile) at MyRenewalListViewTile.pcf: line 11, column 56
    function action_dest_41 () : pcf.api.Destination {
      return pcf.DesktopRenewals.createDestination()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at MyRenewalListViewTile.pcf: line 23, column 69
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.filters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at MyRenewalListViewTile.pcf: line 26, column 66
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.producerFilters()
    }
    
    // 'sortBy' attribute on IteratorSort at MyRenewalListViewTile.pcf: line 30, column 24
    function sortBy_3 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at MyRenewalListViewTile.pcf: line 38, column 25
    function sortValue_4 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at MyRenewalListViewTile.pcf: line 44, column 47
    function sortValue_5 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at MyRenewalListViewTile.pcf: line 49, column 25
    function sortValue_6 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at MyRenewalListViewTile.pcf: line 55, column 25
    function sortValue_7 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.SelectedVersion.Status
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at MyRenewalListViewTile.pcf: line 68, column 52
    function sortValue_8 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.Policy.ProductCode
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at MyRenewalListViewTile.pcf: line 73, column 82
    function sortValue_9 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.getUserRoleAssignmentByRole(TC_PRODUCER).AssignedUser
    }
    
    // 'value' attribute on RowIterator at MyRenewalListViewTile.pcf: line 19, column 74
    function value_39 () : gw.api.database.IQueryBeanResult<entity.Renewal> {
      return Job.finder.findRenewalsByUser(User.util.CurrentUser)
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at MyRenewalListViewTile.pcf: line 26, column 66
    function visible_2 () : java.lang.Boolean {
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