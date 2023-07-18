package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/FederatedTeamRenewalsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedTeamRenewalsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/FederatedTeamRenewalsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedTeamRenewalsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at FederatedTeamRenewalsLV.pcf: line 36, column 100
    function filters_2 () : gw.api.filters.IFilter[] {
      return new gw.api.web.team.federated.FederatedTeamViewRenewalFilters().FilterOptions
    }
    
    // 'initialValue' attribute on Variable at FederatedTeamRenewalsLV.pcf: line 13, column 52
    function initialValue_0 () : gw.api.web.team.PCFederatedTeamModel {
      return teamModel as gw.api.web.team.PCFederatedTeamModel
    }
    
    // 'initialValue' attribute on Variable at FederatedTeamRenewalsLV.pcf: line 17, column 74
    function initialValue_1 () : gw.api.web.team.federated.TeamFederatedIteratorBackingData {
      return pcFederatedTeamModel.Renewals as gw.api.web.team.federated.TeamFederatedIteratorBackingData
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at FederatedTeamRenewalsLV.pcf: line 51, column 41
    function sortValue_3 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return renewal.CreationDate
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at FederatedTeamRenewalsLV.pcf: line 62, column 42
    function sortValue_4 (renewal :  gw.api.web.desktop.data.renewal.RenewalDTO) : java.lang.Object {
      return renewal.PolicyProductCode
    }
    
    // 'value' attribute on RowIterator (id=RenewalsIterator) at FederatedTeamRenewalsLV.pcf: line 32, column 78
    function value_26 () : gw.api.web.team.federated.TeamFederatedIteratorBackingData {
      return renewals
    }
    
    // 'valueType' attribute on RowIterator (id=RenewalsIterator) at FederatedTeamRenewalsLV.pcf: line 32, column 78
    function verifyValueTypeIsAllowedType_27 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=RenewalsIterator) at FederatedTeamRenewalsLV.pcf: line 32, column 78
    function verifyValueTypeIsAllowedType_27 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=RenewalsIterator) at FederatedTeamRenewalsLV.pcf: line 32, column 78
    function verifyValueTypeIsAllowedType_27 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=RenewalsIterator) at FederatedTeamRenewalsLV.pcf: line 32, column 78
    function verifyValueType_28 () : void {
      var __valueTypeArg : gw.api.web.team.federated.TeamFederatedIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_27(__valueTypeArg)
    }
    
    property get pcFederatedTeamModel () : gw.api.web.team.PCFederatedTeamModel {
      return getVariableValue("pcFederatedTeamModel", 0) as gw.api.web.team.PCFederatedTeamModel
    }
    
    property set pcFederatedTeamModel ($arg :  gw.api.web.team.PCFederatedTeamModel) {
      setVariableValue("pcFederatedTeamModel", 0, $arg)
    }
    
    property get renewals () : gw.api.web.team.federated.TeamFederatedIteratorBackingData {
      return getVariableValue("renewals", 0) as gw.api.web.team.federated.TeamFederatedIteratorBackingData
    }
    
    property set renewals ($arg :  gw.api.web.team.federated.TeamFederatedIteratorBackingData) {
      setVariableValue("renewals", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/FederatedTeamRenewalsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FederatedTeamRenewalsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Product_Cell) at FederatedTeamRenewalsLV.pcf: line 62, column 42
    function action_15 () : void {
      FederatedJobForward.push(renewal.JobNumber, renewal.AccountPublicId)
    }
    
    // 'action' attribute on TextCell (id=Product_Cell) at FederatedTeamRenewalsLV.pcf: line 62, column 42
    function action_dest_16 () : pcf.api.Destination {
      return pcf.FederatedJobForward.createDestination(renewal.JobNumber, renewal.AccountPublicId)
    }
    
    // 'condition' attribute on ToolbarFlag at FederatedTeamRenewalsLV.pcf: line 40, column 31
    function condition_5 () : java.lang.Boolean {
      return renewal.CloseDate == null
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FederatedTeamRenewalsLV.pcf: line 46, column 40
    function valueRoot_7 () : java.lang.Object {
      return renewal
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at FederatedTeamRenewalsLV.pcf: line 56, column 42
    function value_12 () : java.lang.String {
      return renewal.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at FederatedTeamRenewalsLV.pcf: line 62, column 42
    function value_17 () : java.lang.String {
      return renewal.PolicyProduct
    }
    
    // 'value' attribute on TextCell (id=Underwriter_Cell) at FederatedTeamRenewalsLV.pcf: line 67, column 51
    function value_20 () : java.lang.String {
      return renewal.UnderwriterDisplayName
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at FederatedTeamRenewalsLV.pcf: line 72, column 40
    function value_23 () : java.lang.String {
      return renewal.AllAssigned
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FederatedTeamRenewalsLV.pcf: line 46, column 40
    function value_6 () : java.lang.String {
      return renewal.ContactName
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at FederatedTeamRenewalsLV.pcf: line 51, column 41
    function value_9 () : java.util.Date {
      return renewal.CreationDate
    }
    
    property get renewal () : gw.api.web.desktop.data.renewal.RenewalDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.renewal.RenewalDTO
    }
    
    
  }
  
  
}