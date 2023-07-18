package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamOtherWorkOrdersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamOtherWorkOrdersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at TeamOtherWorkOrdersLV.pcf: line 63, column 34
    function action_17 () : void {
      JobForward.go(job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamOtherWorkOrdersLV.pcf: line 79, column 36
    function action_28 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at TeamOtherWorkOrdersLV.pcf: line 47, column 36
    function action_6 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at TeamOtherWorkOrdersLV.pcf: line 63, column 34
    function action_dest_18 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamOtherWorkOrdersLV.pcf: line 79, column 36
    function action_dest_29 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at TeamOtherWorkOrdersLV.pcf: line 47, column 36
    function action_dest_7 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'condition' attribute on ToolbarFlag at TeamOtherWorkOrdersLV.pcf: line 40, column 31
    function condition_5 () : java.lang.Boolean {
      return job.CloseDate == null
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamOtherWorkOrdersLV.pcf: line 52, column 72
    function valueRoot_12 () : java.lang.Object {
      return job.Policy.Account.AccountHolderContact
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamOtherWorkOrdersLV.pcf: line 74, column 52
    function valueRoot_26 () : java.lang.Object {
      return job.Policy
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at TeamOtherWorkOrdersLV.pcf: line 47, column 36
    function valueRoot_9 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamOtherWorkOrdersLV.pcf: line 52, column 72
    function value_11 () : java.lang.String {
      return job.Policy.Account.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamOtherWorkOrdersLV.pcf: line 57, column 35
    function value_14 () : java.util.Date {
      return job.CreateTime
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at TeamOtherWorkOrdersLV.pcf: line 63, column 34
    function value_19 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at TeamOtherWorkOrdersLV.pcf: line 68, column 38
    function value_22 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamOtherWorkOrdersLV.pcf: line 74, column 52
    function value_25 () : gw.api.productmodel.Product {
      return job.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at TeamOtherWorkOrdersLV.pcf: line 79, column 36
    function value_30 () : entity.User {
      return job.Underwriter
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at TeamOtherWorkOrdersLV.pcf: line 84, column 41
    function value_33 () : java.lang.String {
      return job.getAllAssigned()
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at TeamOtherWorkOrdersLV.pcf: line 47, column 36
    function value_8 () : java.lang.String {
      return job.DisplayType
    }
    
    property get job () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamOtherWorkOrdersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at TeamOtherWorkOrdersLV.pcf: line 36, column 86
    function filters_2 () : gw.api.filters.IFilter[] {
      return new gw.api.web.team.TeamViewPolicyChangeFilters().FilterOptions
    }
    
    // 'initialValue' attribute on Variable at TeamOtherWorkOrdersLV.pcf: line 14, column 50
    function initialValue_0 () : gw.api.web.team.PCDefaultTeamModel {
      return teamModel as gw.api.web.team.PCDefaultTeamModel
    }
    
    // 'initialValue' attribute on Variable at TeamOtherWorkOrdersLV.pcf: line 18, column 59
    function initialValue_1 () : gw.api.database.IQueryBeanResult<Job> {
      return pcDefaultTeamModel.OtherWorkOrders
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamOtherWorkOrdersLV.pcf: line 57, column 35
    function sortValue_3 (job :  entity.Job) : java.lang.Object {
      return job.CreateTime
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at TeamOtherWorkOrdersLV.pcf: line 74, column 52
    function sortValue_4 (job :  entity.Job) : java.lang.Object {
      return job.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator (id=OtherWorkOrdersIterator) at TeamOtherWorkOrdersLV.pcf: line 32, column 70
    function value_35 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return otherWorkOrders
    }
    
    property get otherWorkOrders () : gw.api.database.IQueryBeanResult<Job> {
      return getVariableValue("otherWorkOrders", 0) as gw.api.database.IQueryBeanResult<Job>
    }
    
    property set otherWorkOrders ($arg :  gw.api.database.IQueryBeanResult<Job>) {
      setVariableValue("otherWorkOrders", 0, $arg)
    }
    
    property get pcDefaultTeamModel () : gw.api.web.team.PCDefaultTeamModel {
      return getVariableValue("pcDefaultTeamModel", 0) as gw.api.web.team.PCDefaultTeamModel
    }
    
    property set pcDefaultTeamModel ($arg :  gw.api.web.team.PCDefaultTeamModel) {
      setVariableValue("pcDefaultTeamModel", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}