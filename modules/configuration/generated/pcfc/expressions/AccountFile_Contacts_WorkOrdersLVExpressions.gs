package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Contacts_WorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_Contacts_WorkOrdersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Contacts_WorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_Contacts_WorkOrdersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 21, column 35
    function sortValue_0 (job :  entity.Job) : java.lang.Object {
      return job.CreateTime
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 26, column 34
    function sortValue_1 (job :  entity.Job) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 46, column 24
    function sortValue_2 (job :  entity.Job) : java.lang.Object {
      return job.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator at AccountFile_Contacts_WorkOrdersLV.pcf: line 14, column 70
    function value_35 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return acctContact.AssociatedOpenJobs
    }
    
    property get acctContact () : AccountContact {
      return getRequireValue("acctContact", 0) as AccountContact
    }
    
    property set acctContact ($arg :  AccountContact) {
      setRequireValue("acctContact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Contacts_WorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountFile_Contacts_WorkOrdersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 39, column 63
    function action_15 () : void {
      PolicyFileForward.go(job.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=WorkOrderType_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 53, column 24
    function action_24 () : void {
      JobForward.go(job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AccountFile_Contacts_WorkOrdersLV.pcf: line 58, column 36
    function action_29 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 26, column 34
    function action_6 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 39, column 63
    function action_dest_16 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(job.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=WorkOrderType_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 53, column 24
    function action_dest_25 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AccountFile_Contacts_WorkOrdersLV.pcf: line 58, column 36
    function action_dest_30 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 26, column 34
    function action_dest_7 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'available' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 39, column 63
    function available_14 () : java.lang.Boolean {
      return job.LatestPeriod.PolicyNumberAssigned
    }
    
    // 'useArchivedStyle' attribute on Row at AccountFile_Contacts_WorkOrdersLV.pcf: line 16, column 70
    function useArchivedStyle_34 () : java.lang.Boolean {
      return job.LatestPeriod.PolicyTerm.CheckArchived
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 39, column 63
    function valueRoot_18 () : java.lang.Object {
      return job.LatestPeriod
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 46, column 24
    function valueRoot_22 () : java.lang.Object {
      return job.Policy
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 21, column 35
    function valueRoot_4 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on TextCell (id=JobStatus_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 32, column 24
    function value_11 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 39, column 63
    function value_17 () : java.lang.String {
      return job.LatestPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 46, column 24
    function value_21 () : gw.api.productmodel.Product {
      return job.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=WorkOrderType_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 53, column 24
    function value_26 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 21, column 35
    function value_3 () : java.util.Date {
      return job.CreateTime
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 58, column 36
    function value_31 () : entity.User {
      return job.Underwriter
    }
    
    // 'value' attribute on TextCell (id=WorkOrderNumber_Cell) at AccountFile_Contacts_WorkOrdersLV.pcf: line 26, column 34
    function value_8 () : java.lang.String {
      return job.JobNumber
    }
    
    property get job () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  
}