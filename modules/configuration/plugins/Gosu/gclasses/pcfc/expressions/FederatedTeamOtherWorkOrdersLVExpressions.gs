package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/FederatedTeamOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedTeamOtherWorkOrdersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/FederatedTeamOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedTeamOtherWorkOrdersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at FederatedTeamOtherWorkOrdersLV.pcf: line 37, column 107
    function filters_2 () : gw.api.filters.IFilter[] {
      return new gw.api.web.team.federated.FederatedTeamViewOtherWorkOrderFilters().FilterOptions
    }
    
    // 'initialValue' attribute on Variable at FederatedTeamOtherWorkOrdersLV.pcf: line 14, column 52
    function initialValue_0 () : gw.api.web.team.PCFederatedTeamModel {
      return teamModel as gw.api.web.team.PCFederatedTeamModel
    }
    
    // 'initialValue' attribute on Variable at FederatedTeamOtherWorkOrdersLV.pcf: line 18, column 74
    function initialValue_1 () : gw.api.web.team.federated.TeamFederatedIteratorBackingData {
      return pcFederatedTeamModel.OtherWorkOrders as gw.api.web.team.federated.TeamFederatedIteratorBackingData
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 58, column 37
    function sortValue_3 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.CreationDate
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 74, column 38
    function sortValue_4 (job :  gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO) : java.lang.Object {
      return job.PolicyProductCode
    }
    
    // 'value' attribute on RowIterator (id=OtherWorkOrdersIterator) at FederatedTeamOtherWorkOrdersLV.pcf: line 33, column 78
    function value_34 () : gw.api.web.team.federated.TeamFederatedIteratorBackingData {
      return otherWorkOrders
    }
    
    // 'valueType' attribute on RowIterator (id=OtherWorkOrdersIterator) at FederatedTeamOtherWorkOrdersLV.pcf: line 33, column 78
    function verifyValueTypeIsAllowedType_35 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=OtherWorkOrdersIterator) at FederatedTeamOtherWorkOrdersLV.pcf: line 33, column 78
    function verifyValueTypeIsAllowedType_35 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=OtherWorkOrdersIterator) at FederatedTeamOtherWorkOrdersLV.pcf: line 33, column 78
    function verifyValueTypeIsAllowedType_35 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=OtherWorkOrdersIterator) at FederatedTeamOtherWorkOrdersLV.pcf: line 33, column 78
    function verifyValueType_36 () : void {
      var __valueTypeArg : gw.api.web.team.federated.TeamFederatedIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_35(__valueTypeArg)
    }
    
    property get otherWorkOrders () : gw.api.web.team.federated.TeamFederatedIteratorBackingData {
      return getVariableValue("otherWorkOrders", 0) as gw.api.web.team.federated.TeamFederatedIteratorBackingData
    }
    
    property set otherWorkOrders ($arg :  gw.api.web.team.federated.TeamFederatedIteratorBackingData) {
      setVariableValue("otherWorkOrders", 0, $arg)
    }
    
    property get pcFederatedTeamModel () : gw.api.web.team.PCFederatedTeamModel {
      return getVariableValue("pcFederatedTeamModel", 0) as gw.api.web.team.PCFederatedTeamModel
    }
    
    property set pcFederatedTeamModel ($arg :  gw.api.web.team.PCFederatedTeamModel) {
      setVariableValue("pcFederatedTeamModel", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/FederatedTeamOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FederatedTeamOtherWorkOrdersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 64, column 34
    function action_17 () : void {
      FederatedJobForward.push(job.JobNumber, job.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 48, column 36
    function action_6 () : void {
      FederatedJobForward.push(job.JobNumber, job.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 64, column 34
    function action_dest_18 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(job.JobNumber, job.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 48, column 36
    function action_dest_7 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(job.JobNumber, job.AccountPublicId)
    }
    
    // 'condition' attribute on ToolbarFlag at FederatedTeamOtherWorkOrdersLV.pcf: line 41, column 31
    function condition_5 () : java.lang.Boolean {
      return job.CloseDate == null
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 48, column 36
    function valueRoot_9 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 53, column 36
    function value_11 () : java.lang.String {
      return job.ContactName
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 58, column 37
    function value_14 () : java.util.Date {
      return job.CreationDate
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 64, column 34
    function value_19 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 69, column 38
    function value_22 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 74, column 38
    function value_25 () : java.lang.String {
      return job.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=Underwriter_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 79, column 47
    function value_28 () : java.lang.String {
      return job.UnderwriterDisplayName
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 84, column 36
    function value_31 () : java.lang.String {
      return job.AllAssigned
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at FederatedTeamOtherWorkOrdersLV.pcf: line 48, column 36
    function value_8 () : java.lang.String {
      return job.DisplayType
    }
    
    property get job () : gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.otherworkorders.OtherWorkOrdersDTO
    }
    
    
  }
  
  
}