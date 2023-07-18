package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/FederatedTeamSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedTeamSubmissionsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/FederatedTeamSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedTeamSubmissionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at FederatedTeamSubmissionsLV.pcf: line 35, column 103
    function filters_2 () : gw.api.filters.IFilter[] {
      return new gw.api.web.team.federated.FederatedTeamViewSubmissionFilters().FilterOptions
    }
    
    // 'initialValue' attribute on Variable at FederatedTeamSubmissionsLV.pcf: line 13, column 52
    function initialValue_0 () : gw.api.web.team.PCFederatedTeamModel {
      return teamModel as gw.api.web.team.PCFederatedTeamModel
    }
    
    // 'initialValue' attribute on Variable at FederatedTeamSubmissionsLV.pcf: line 17, column 74
    function initialValue_1 () : gw.api.web.team.federated.TeamFederatedIteratorBackingData {
      return pcFederatedTeamModel.Submissions as gw.api.web.team.federated.TeamFederatedIteratorBackingData
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at FederatedTeamSubmissionsLV.pcf: line 51, column 44
    function sortValue_3 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.CreationDate
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at FederatedTeamSubmissionsLV.pcf: line 56, column 41
    function sortValue_4 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at FederatedTeamSubmissionsLV.pcf: line 67, column 24
    function sortValue_5 (submission :  gw.api.web.desktop.data.submission.SubmissionDTO) : java.lang.Object {
      return submission.PolicyProductCode
    }
    
    // 'value' attribute on RowIterator (id=SubmissionsIterator) at FederatedTeamSubmissionsLV.pcf: line 31, column 78
    function value_30 () : gw.api.web.team.federated.TeamFederatedIteratorBackingData {
      return submissions
    }
    
    // 'valueType' attribute on RowIterator (id=SubmissionsIterator) at FederatedTeamSubmissionsLV.pcf: line 31, column 78
    function verifyValueTypeIsAllowedType_31 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=SubmissionsIterator) at FederatedTeamSubmissionsLV.pcf: line 31, column 78
    function verifyValueTypeIsAllowedType_31 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=SubmissionsIterator) at FederatedTeamSubmissionsLV.pcf: line 31, column 78
    function verifyValueTypeIsAllowedType_31 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=SubmissionsIterator) at FederatedTeamSubmissionsLV.pcf: line 31, column 78
    function verifyValueType_32 () : void {
      var __valueTypeArg : gw.api.web.team.federated.TeamFederatedIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_31(__valueTypeArg)
    }
    
    property get pcFederatedTeamModel () : gw.api.web.team.PCFederatedTeamModel {
      return getVariableValue("pcFederatedTeamModel", 0) as gw.api.web.team.PCFederatedTeamModel
    }
    
    property set pcFederatedTeamModel ($arg :  gw.api.web.team.PCFederatedTeamModel) {
      setVariableValue("pcFederatedTeamModel", 0, $arg)
    }
    
    property get submissions () : gw.api.web.team.federated.TeamFederatedIteratorBackingData {
      return getVariableValue("submissions", 0) as gw.api.web.team.federated.TeamFederatedIteratorBackingData
    }
    
    property set submissions ($arg :  gw.api.web.team.federated.TeamFederatedIteratorBackingData) {
      setVariableValue("submissions", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/FederatedTeamSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FederatedTeamSubmissionsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=SubmissionNumber_Cell) at FederatedTeamSubmissionsLV.pcf: line 56, column 41
    function action_13 () : void {
      FederatedJobForward.push(submission.JobNumber, submission.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=SubmissionNumber_Cell) at FederatedTeamSubmissionsLV.pcf: line 56, column 41
    function action_dest_14 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(submission.JobNumber, submission.AccountPublicId)
    }
    
    // 'condition' attribute on ToolbarFlag at FederatedTeamSubmissionsLV.pcf: line 39, column 31
    function condition_6 () : java.lang.Boolean {
      return submission.CloseDate == null
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FederatedTeamSubmissionsLV.pcf: line 46, column 24
    function valueRoot_8 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at FederatedTeamSubmissionsLV.pcf: line 51, column 44
    function value_10 () : java.util.Date {
      return submission.CreationDate
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at FederatedTeamSubmissionsLV.pcf: line 56, column 41
    function value_15 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=SubmissionStatus_Cell) at FederatedTeamSubmissionsLV.pcf: line 61, column 45
    function value_18 () : java.lang.String {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at FederatedTeamSubmissionsLV.pcf: line 67, column 24
    function value_21 () : java.lang.String {
      return submission.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=Underwriter_Cell) at FederatedTeamSubmissionsLV.pcf: line 73, column 24
    function value_24 () : java.lang.String {
      return submission.UnderwriterDisplayName
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at FederatedTeamSubmissionsLV.pcf: line 79, column 24
    function value_27 () : java.lang.String {
      return submission.AllAssigned
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FederatedTeamSubmissionsLV.pcf: line 46, column 24
    function value_7 () : java.lang.String {
      return submission.ContactName
    }
    
    property get submission () : gw.api.web.desktop.data.submission.SubmissionDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.submission.SubmissionDTO
    }
    
    
  }
  
  
}