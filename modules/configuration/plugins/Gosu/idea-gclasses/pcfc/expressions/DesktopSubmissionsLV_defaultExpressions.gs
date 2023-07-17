package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissionsLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopSubmissionsLV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissionsLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopSubmissionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopSubmissionsLV.default.pcf: line 27, column 93
    function filter_2 () : gw.api.filters.IFilter {
      return gw.api.web.desktop.DesktopJobFilters.openIssuanceJobFilter()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopSubmissionsLV.default.pcf: line 24, column 69
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.filters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopSubmissionsLV.default.pcf: line 30, column 66
    function filters_3 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.producerFilters()
    }
    
    // 'initialValue' attribute on Variable at DesktopSubmissionsLV.default.pcf: line 14, column 66
    function initialValue_0 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return Job.finder.findSubmissionsAndIssuancesByUser(User.util.CurrentUser)
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopSubmissionsLV.default.pcf: line 34, column 24
    function sortBy_5 (submission :  entity.Job) : java.lang.Object {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.default.pcf: line 42, column 50
    function sortValue_6 (submission :  entity.Job) : java.lang.Object {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopSubmissionsLV.default.pcf: line 48, column 25
    function sortValue_7 (submission :  entity.Job) : java.lang.Object {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at DesktopSubmissionsLV.default.pcf: line 60, column 25
    function sortValue_8 (submission :  entity.Job) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at DesktopSubmissionsLV.default.pcf: line 85, column 25
    function sortValue_9 (submission :  entity.Job) : java.lang.Object {
      return submission.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator at DesktopSubmissionsLV.default.pcf: line 20, column 70
    function value_54 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return submissions
    }
    
    // 'visible' attribute on AltUserCell (id=Producer_Cell) at DesktopSubmissionsLV.default.pcf: line 92, column 67
    function visible_10 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at DesktopSubmissionsLV.default.pcf: line 30, column 66
    function visible_4 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get submissions () : gw.api.database.IQueryBeanResult<entity.Job> {
      return getVariableValue("submissions", 0) as gw.api.database.IQueryBeanResult<entity.Job>
    }
    
    property set submissions ($arg :  gw.api.database.IQueryBeanResult<entity.Job>) {
      setVariableValue("submissions", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissionsLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopSubmissionsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.default.pcf: line 42, column 50
    function action_13 () : void {
      JobForward.go(submission)
    }
    
    // 'action' attribute on TextCell (id=SubmissionNumber_Cell) at DesktopSubmissionsLV.default.pcf: line 60, column 25
    function action_25 () : void {
      JobForward.go(submission)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopSubmissionsLV.default.pcf: line 92, column 67
    function action_42 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopSubmissionsLV.default.pcf: line 99, column 66
    function action_48 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.default.pcf: line 42, column 50
    function action_dest_14 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(submission)
    }
    
    // 'action' attribute on TextCell (id=SubmissionNumber_Cell) at DesktopSubmissionsLV.default.pcf: line 60, column 25
    function action_dest_26 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(submission)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopSubmissionsLV.default.pcf: line 92, column 67
    function action_dest_43 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopSubmissionsLV.default.pcf: line 99, column 66
    function action_dest_49 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'available' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.default.pcf: line 42, column 50
    function available_12 () : java.lang.Boolean {
      return submission.Viewable
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.default.pcf: line 42, column 50
    function valueRoot_16 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopSubmissionsLV.default.pcf: line 48, column 25
    function valueRoot_20 () : java.lang.Object {
      return submission.SelectedVersion
    }
    
    // 'value' attribute on BooleanRadioCell (id=Issued_Cell) at DesktopSubmissionsLV.default.pcf: line 78, column 25
    function valueRoot_37 () : java.lang.Object {
      return submission.Policy
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at DesktopSubmissionsLV.default.pcf: line 92, column 67
    function valueRoot_45 () : java.lang.Object {
      return submission.getUserRoleAssignmentByRole( TC_PRODUCER )
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at DesktopSubmissionsLV.default.pcf: line 99, column 66
    function valueRoot_51 () : java.lang.Object {
      return submission.getUserRoleAssignmentByRole( TC_UNDERWRITER )
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.default.pcf: line 42, column 50
    function value_15 () : java.lang.String {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopSubmissionsLV.default.pcf: line 48, column 25
    function value_19 () : java.util.Date {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=QuoteNeeded_Cell) at DesktopSubmissionsLV.default.pcf: line 54, column 25
    function value_22 () : java.util.Date {
      return submission.DateQuoteNeeded
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at DesktopSubmissionsLV.default.pcf: line 60, column 25
    function value_27 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at DesktopSubmissionsLV.default.pcf: line 66, column 25
    function value_30 () : java.lang.String {
      return submission.DisplayType
    }
    
    // 'value' attribute on TextCell (id=SubmissionStatus_Cell) at DesktopSubmissionsLV.default.pcf: line 72, column 25
    function value_33 () : java.lang.String {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on BooleanRadioCell (id=Issued_Cell) at DesktopSubmissionsLV.default.pcf: line 78, column 25
    function value_36 () : java.lang.Boolean {
      return submission.Policy.Issued
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopSubmissionsLV.default.pcf: line 85, column 25
    function value_39 () : gw.api.productmodel.Product {
      return submission.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at DesktopSubmissionsLV.default.pcf: line 92, column 67
    function value_44 () : entity.User {
      return submission.getUserRoleAssignmentByRole( TC_PRODUCER ).AssignedUser
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at DesktopSubmissionsLV.default.pcf: line 99, column 66
    function value_50 () : entity.User {
      return submission.getUserRoleAssignmentByRole( TC_UNDERWRITER ).AssignedUser
    }
    
    // 'visible' attribute on AltUserCell (id=Producer_Cell) at DesktopSubmissionsLV.default.pcf: line 92, column 67
    function visible_46 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on AltUserCell (id=Underwriter_Cell) at DesktopSubmissionsLV.default.pcf: line 99, column 66
    function visible_52 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get submission () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  
}