package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopRenewalsLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopRenewalsLV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopRenewalsLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopRenewalsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopRenewalsLV.default.pcf: line 22, column 69
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.filters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopRenewalsLV.default.pcf: line 25, column 66
    function filters_2 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.producerFilters()
    }
    
    // 'initialValue' attribute on Variable at DesktopRenewalsLV.default.pcf: line 12, column 63
    function initialValue_0 () : gw.api.database.IQueryBeanResult<Renewal> {
      return Job.finder.findRenewalsByUser(User.util.CurrentUser)
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopRenewalsLV.default.pcf: line 29, column 24
    function sortBy_4 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopRenewalsLV.default.pcf: line 35, column 47
    function sortValue_5 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopRenewalsLV.default.pcf: line 41, column 25
    function sortValue_6 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.SelectedVersion.EditEffectiveDate
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.default.pcf: line 64, column 25
    function sortValue_7 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator at DesktopRenewalsLV.default.pcf: line 18, column 74
    function value_45 () : gw.api.database.IQueryBeanResult<entity.Renewal> {
      return renewals
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at DesktopRenewalsLV.default.pcf: line 25, column 66
    function visible_3 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on AltUserCell (id=Producer_Cell) at DesktopRenewalsLV.default.pcf: line 71, column 67
    function visible_8 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    property get renewals () : gw.api.database.IQueryBeanResult<Renewal> {
      return getVariableValue("renewals", 0) as gw.api.database.IQueryBeanResult<Renewal>
    }
    
    property set renewals ($arg :  gw.api.database.IQueryBeanResult<Renewal>) {
      setVariableValue("renewals", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopRenewalsLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopRenewalsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at DesktopRenewalsLV.default.pcf: line 49, column 25
    function action_17 () : void {
      JobForward.go(renewal)
    }
    
    // 'action' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.default.pcf: line 64, column 25
    function action_27 () : void {
      JobForward.go(renewal)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopRenewalsLV.default.pcf: line 71, column 67
    function action_33 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopRenewalsLV.default.pcf: line 78, column 66
    function action_39 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at DesktopRenewalsLV.default.pcf: line 49, column 25
    function action_dest_18 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(renewal)
    }
    
    // 'action' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.default.pcf: line 64, column 25
    function action_dest_28 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(renewal)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopRenewalsLV.default.pcf: line 71, column 67
    function action_dest_34 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopRenewalsLV.default.pcf: line 78, column 66
    function action_dest_40 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'available' attribute on TextCell (id=JobNumber_Cell) at DesktopRenewalsLV.default.pcf: line 49, column 25
    function available_16 () : java.lang.Boolean {
      return renewal.Viewable
    }
    
    // 'available' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.default.pcf: line 64, column 25
    function available_26 () : java.lang.Boolean {
      return perm.Renewal.view(renewal)
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopRenewalsLV.default.pcf: line 35, column 47
    function valueRoot_11 () : java.lang.Object {
      return renewal
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopRenewalsLV.default.pcf: line 41, column 25
    function valueRoot_14 () : java.lang.Object {
      return renewal.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.default.pcf: line 64, column 25
    function valueRoot_30 () : java.lang.Object {
      return renewal.Policy
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at DesktopRenewalsLV.default.pcf: line 71, column 67
    function valueRoot_36 () : java.lang.Object {
      return renewal.getUserRoleAssignmentByRole( TC_PRODUCER )
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at DesktopRenewalsLV.default.pcf: line 78, column 66
    function valueRoot_42 () : java.lang.Object {
      return renewal.getUserRoleAssignmentByRole( TC_UNDERWRITER )
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopRenewalsLV.default.pcf: line 35, column 47
    function value_10 () : java.lang.String {
      return renewal.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopRenewalsLV.default.pcf: line 41, column 25
    function value_13 () : java.util.Date {
      return renewal.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at DesktopRenewalsLV.default.pcf: line 49, column 25
    function value_19 () : java.lang.String {
      return renewal.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at DesktopRenewalsLV.default.pcf: line 55, column 25
    function value_23 () : java.lang.String {
      return renewal.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.default.pcf: line 64, column 25
    function value_29 () : gw.api.productmodel.Product {
      return renewal.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at DesktopRenewalsLV.default.pcf: line 71, column 67
    function value_35 () : entity.User {
      return renewal.getUserRoleAssignmentByRole( TC_PRODUCER ).AssignedUser
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at DesktopRenewalsLV.default.pcf: line 78, column 66
    function value_41 () : entity.User {
      return renewal.getUserRoleAssignmentByRole( TC_UNDERWRITER ).AssignedUser
    }
    
    // 'visible' attribute on AltUserCell (id=Producer_Cell) at DesktopRenewalsLV.default.pcf: line 71, column 67
    function visible_37 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on AltUserCell (id=Underwriter_Cell) at DesktopRenewalsLV.default.pcf: line 78, column 66
    function visible_43 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get renewal () : entity.Renewal {
      return getIteratedValue(1) as entity.Renewal
    }
    
    
  }
  
  
}