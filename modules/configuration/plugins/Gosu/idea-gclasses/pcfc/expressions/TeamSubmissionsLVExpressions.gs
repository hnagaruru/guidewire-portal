package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamSubmissionsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamSubmissionsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=SubmissionNumber_Cell) at TeamSubmissionsLV.pcf: line 55, column 41
    function action_13 () : void {
      JobForward.go(submission)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamSubmissionsLV.pcf: line 73, column 24
    function action_24 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=SubmissionNumber_Cell) at TeamSubmissionsLV.pcf: line 55, column 41
    function action_dest_14 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(submission)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamSubmissionsLV.pcf: line 73, column 24
    function action_dest_25 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'condition' attribute on ToolbarFlag at TeamSubmissionsLV.pcf: line 38, column 31
    function condition_6 () : java.lang.Boolean {
      return submission.CloseDate == null
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamSubmissionsLV.pcf: line 50, column 42
    function valueRoot_11 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamSubmissionsLV.pcf: line 67, column 24
    function valueRoot_22 () : java.lang.Object {
      return submission.Policy
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamSubmissionsLV.pcf: line 45, column 24
    function valueRoot_8 () : java.lang.Object {
      return submission.Policy.Account.AccountHolderContact
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamSubmissionsLV.pcf: line 50, column 42
    function value_10 () : java.util.Date {
      return submission.CreateTime
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at TeamSubmissionsLV.pcf: line 55, column 41
    function value_15 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=SubmissionStatus_Cell) at TeamSubmissionsLV.pcf: line 60, column 45
    function value_18 () : java.lang.String {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamSubmissionsLV.pcf: line 67, column 24
    function value_21 () : gw.api.productmodel.Product {
      return submission.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at TeamSubmissionsLV.pcf: line 73, column 24
    function value_26 () : entity.User {
      return submission.Underwriter
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at TeamSubmissionsLV.pcf: line 79, column 24
    function value_29 () : java.lang.String {
      return submission.getAllAssigned()
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamSubmissionsLV.pcf: line 45, column 24
    function value_7 () : java.lang.String {
      return submission.Policy.Account.AccountHolderContact.DisplayName
    }
    
    property get submission () : entity.Submission {
      return getIteratedValue(1) as entity.Submission
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamSubmissionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at TeamSubmissionsLV.pcf: line 34, column 84
    function filters_2 () : gw.api.filters.IFilter[] {
      return new gw.api.web.team.TeamViewSubmissionFilters().FilterOptions
    }
    
    // 'initialValue' attribute on Variable at TeamSubmissionsLV.pcf: line 13, column 50
    function initialValue_0 () : gw.api.web.team.PCDefaultTeamModel {
      return teamModel as gw.api.web.team.PCDefaultTeamModel
    }
    
    // 'initialValue' attribute on Variable at TeamSubmissionsLV.pcf: line 17, column 66
    function initialValue_1 () : gw.api.database.IQueryBeanResult<Submission> {
      return pcDefaultTeamModel.Submissions as gw.api.database.IQueryBeanResult<Submission>
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamSubmissionsLV.pcf: line 50, column 42
    function sortValue_3 (submission :  entity.Submission) : java.lang.Object {
      return submission.CreateTime
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at TeamSubmissionsLV.pcf: line 55, column 41
    function sortValue_4 (submission :  entity.Submission) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at TeamSubmissionsLV.pcf: line 67, column 24
    function sortValue_5 (submission :  entity.Submission) : java.lang.Object {
      return submission.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator (id=SubmissionsIterator) at TeamSubmissionsLV.pcf: line 30, column 77
    function value_31 () : gw.api.database.IQueryBeanResult<entity.Submission> {
      return submissions
    }
    
    property get pcDefaultTeamModel () : gw.api.web.team.PCDefaultTeamModel {
      return getVariableValue("pcDefaultTeamModel", 0) as gw.api.web.team.PCDefaultTeamModel
    }
    
    property set pcDefaultTeamModel ($arg :  gw.api.web.team.PCDefaultTeamModel) {
      setVariableValue("pcDefaultTeamModel", 0, $arg)
    }
    
    property get submissions () : gw.api.database.IQueryBeanResult<Submission> {
      return getVariableValue("submissions", 0) as gw.api.database.IQueryBeanResult<Submission>
    }
    
    property set submissions ($arg :  gw.api.database.IQueryBeanResult<Submission>) {
      setVariableValue("submissions", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}