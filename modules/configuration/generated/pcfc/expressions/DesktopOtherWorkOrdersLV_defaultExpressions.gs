package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrdersLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopOtherWorkOrdersLV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrdersLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopOtherWorkOrdersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopOtherWorkOrdersLV.default.pcf: line 24, column 69
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.filters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopOtherWorkOrdersLV.default.pcf: line 27, column 66
    function filters_2 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.producerFilters()
    }
    
    // 'initialValue' attribute on Variable at DesktopOtherWorkOrdersLV.default.pcf: line 14, column 59
    function initialValue_0 () : gw.api.database.IQueryBeanResult<Job> {
      return Job.finder.findDesktopOtherWorkOrdersJobsByUser(User.util.CurrentUser)
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopOtherWorkOrdersLV.default.pcf: line 31, column 24
    function sortBy_4 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 45, column 43
    function sortValue_5 (job :  entity.Job) : java.lang.Object {
      return job.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 51, column 25
    function sortValue_6 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 58, column 25
    function sortValue_7 (job :  entity.Job) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 71, column 25
    function sortValue_8 (job :  entity.Job) : java.lang.Object {
      return job.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator at DesktopOtherWorkOrdersLV.default.pcf: line 20, column 70
    function value_49 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return workOrders
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at DesktopOtherWorkOrdersLV.default.pcf: line 27, column 66
    function visible_3 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on AltUserCell (id=Producer_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 78, column 67
    function visible_9 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    property get workOrders () : gw.api.database.IQueryBeanResult<Job> {
      return getVariableValue("workOrders", 0) as gw.api.database.IQueryBeanResult<Job>
    }
    
    property set workOrders ($arg :  gw.api.database.IQueryBeanResult<Job>) {
      setVariableValue("workOrders", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrdersLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopOtherWorkOrdersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 40, column 25
    function action_12 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 58, column 25
    function action_25 () : void {
      JobForward.go(job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopOtherWorkOrdersLV.default.pcf: line 78, column 67
    function action_37 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopOtherWorkOrdersLV.default.pcf: line 85, column 66
    function action_43 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 40, column 25
    function action_dest_13 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 58, column 25
    function action_dest_26 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopOtherWorkOrdersLV.default.pcf: line 78, column 67
    function action_dest_38 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopOtherWorkOrdersLV.default.pcf: line 85, column 66
    function action_dest_44 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'available' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 40, column 25
    function available_11 () : java.lang.Boolean {
      return job.Viewable
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 40, column 25
    function valueRoot_15 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 51, column 25
    function valueRoot_22 () : java.lang.Object {
      return job.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 71, column 25
    function valueRoot_35 () : java.lang.Object {
      return job.Policy
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 78, column 67
    function valueRoot_40 () : java.lang.Object {
      return job.getUserRoleAssignmentByRole( TC_PRODUCER )
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 85, column 66
    function valueRoot_46 () : java.lang.Object {
      return job.getUserRoleAssignmentByRole( TC_UNDERWRITER )
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 40, column 25
    function value_14 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 45, column 43
    function value_18 () : java.lang.String {
      return job.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 51, column 25
    function value_21 () : java.util.Date {
      return job.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 58, column 25
    function value_27 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 64, column 25
    function value_31 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 71, column 25
    function value_34 () : gw.api.productmodel.Product {
      return job.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 78, column 67
    function value_39 () : entity.User {
      return job.getUserRoleAssignmentByRole( TC_PRODUCER ).AssignedUser
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 85, column 66
    function value_45 () : entity.User {
      return job.getUserRoleAssignmentByRole( TC_UNDERWRITER ).AssignedUser
    }
    
    // 'visible' attribute on AltUserCell (id=Producer_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 78, column 67
    function visible_41 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on AltUserCell (id=Underwriter_Cell) at DesktopOtherWorkOrdersLV.default.pcf: line 85, column 66
    function visible_47 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get job () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  
}