package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Locations_WorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_Locations_WorkOrdersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Locations_WorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_Locations_WorkOrdersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_Locations_WorkOrdersLV.pcf: line 14, column 59
    function initialValue_0 () : gw.api.database.IQueryBeanResult<Job> {
      return accountLocation.Jobs
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 26, column 35
    function sortValue_1 (job :  entity.Job) : java.lang.Object {
      return job.CreateTime
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 31, column 34
    function sortValue_2 (job :  entity.Job) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 49, column 52
    function sortValue_3 (job :  entity.Job) : java.lang.Object {
      return job.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator at AccountFile_Locations_WorkOrdersLV.pcf: line 19, column 70
    function value_36 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return jobs
    }
    
    property get accountLocation () : AccountLocation {
      return getRequireValue("accountLocation", 0) as AccountLocation
    }
    
    property set accountLocation ($arg :  AccountLocation) {
      setRequireValue("accountLocation", 0, $arg)
    }
    
    property get jobs () : gw.api.database.IQueryBeanResult<Job> {
      return getVariableValue("jobs", 0) as gw.api.database.IQueryBeanResult<Job>
    }
    
    property set jobs ($arg :  gw.api.database.IQueryBeanResult<Job>) {
      setVariableValue("jobs", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Locations_WorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountFile_Locations_WorkOrdersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 43, column 63
    function action_16 () : void {
      PolicyFileForward.go(job.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=WorkOrderType_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 55, column 36
    function action_25 () : void {
      JobForward.go(job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AccountFile_Locations_WorkOrdersLV.pcf: line 60, column 36
    function action_30 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 31, column 34
    function action_7 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 43, column 63
    function action_dest_17 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(job.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=WorkOrderType_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 55, column 36
    function action_dest_26 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AccountFile_Locations_WorkOrdersLV.pcf: line 60, column 36
    function action_dest_31 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 31, column 34
    function action_dest_8 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'available' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 43, column 63
    function available_15 () : java.lang.Boolean {
      return job.LatestPeriod.PolicyNumberAssigned
    }
    
    // 'useArchivedStyle' attribute on Row at AccountFile_Locations_WorkOrdersLV.pcf: line 21, column 189
    function useArchivedStyle_35 () : java.lang.Boolean {
      return job.LatestPeriod.PolicyNumberAssigned ? Policy.retrievePeriod(job.LatestPeriod.PolicyNumber,job.LatestPeriod.EditEffectiveDate).PolicyTerm.CheckArchived : false
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 43, column 63
    function valueRoot_19 () : java.lang.Object {
      return job.LatestPeriod
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 49, column 52
    function valueRoot_23 () : java.lang.Object {
      return job.Policy
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 26, column 35
    function valueRoot_5 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on TextCell (id=JobStatus_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 36, column 38
    function value_12 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 43, column 63
    function value_18 () : java.lang.String {
      return job.LatestPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 49, column 52
    function value_22 () : gw.api.productmodel.Product {
      return job.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=WorkOrderType_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 55, column 36
    function value_27 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 60, column 36
    function value_32 () : entity.User {
      return job.Underwriter
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 26, column 35
    function value_4 () : java.util.Date {
      return job.CreateTime
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_Locations_WorkOrdersLV.pcf: line 31, column 34
    function value_9 () : java.lang.String {
      return job.JobNumber
    }
    
    property get job () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  
}