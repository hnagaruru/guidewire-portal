package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamRenewalsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamRenewalsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamRenewalsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamRenewalsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Product_Cell) at TeamRenewalsLV.pcf: line 62, column 52
    function action_15 () : void {
      JobForward.go(renewal)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamRenewalsLV.pcf: line 67, column 40
    function action_20 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Product_Cell) at TeamRenewalsLV.pcf: line 62, column 52
    function action_dest_16 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(renewal)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamRenewalsLV.pcf: line 67, column 40
    function action_dest_21 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'condition' attribute on ToolbarFlag at TeamRenewalsLV.pcf: line 39, column 31
    function condition_5 () : java.lang.Boolean {
      return renewal.CloseDate == null
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamRenewalsLV.pcf: line 50, column 39
    function valueRoot_10 () : java.lang.Object {
      return renewal
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamRenewalsLV.pcf: line 62, column 52
    function valueRoot_18 () : java.lang.Object {
      return renewal.Policy
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamRenewalsLV.pcf: line 45, column 76
    function valueRoot_7 () : java.lang.Object {
      return renewal.Policy.Account.AccountHolderContact
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at TeamRenewalsLV.pcf: line 55, column 42
    function value_12 () : java.lang.String {
      return renewal.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamRenewalsLV.pcf: line 62, column 52
    function value_17 () : gw.api.productmodel.Product {
      return renewal.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at TeamRenewalsLV.pcf: line 67, column 40
    function value_22 () : entity.User {
      return renewal.Underwriter
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at TeamRenewalsLV.pcf: line 72, column 45
    function value_25 () : java.lang.String {
      return renewal.getAllAssigned()
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamRenewalsLV.pcf: line 45, column 76
    function value_6 () : java.lang.String {
      return renewal.Policy.Account.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamRenewalsLV.pcf: line 50, column 39
    function value_9 () : java.util.Date {
      return renewal.CreateTime
    }
    
    property get renewal () : entity.Renewal {
      return getIteratedValue(1) as entity.Renewal
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamRenewalsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamRenewalsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at TeamRenewalsLV.pcf: line 35, column 81
    function filters_2 () : gw.api.filters.IFilter[] {
      return new gw.api.web.team.TeamViewRenewalFilters().FilterOptions
    }
    
    // 'initialValue' attribute on Variable at TeamRenewalsLV.pcf: line 13, column 50
    function initialValue_0 () : gw.api.web.team.PCDefaultTeamModel {
      return teamModel as gw.api.web.team.PCDefaultTeamModel
    }
    
    // 'initialValue' attribute on Variable at TeamRenewalsLV.pcf: line 17, column 63
    function initialValue_1 () : gw.api.database.IQueryBeanResult<Renewal> {
      return pcDefaultTeamModel.Renewals as gw.api.database.IQueryBeanResult<Renewal>
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamRenewalsLV.pcf: line 50, column 39
    function sortValue_3 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.CreateTime
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at TeamRenewalsLV.pcf: line 62, column 52
    function sortValue_4 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator (id=RenewalsIterator) at TeamRenewalsLV.pcf: line 31, column 74
    function value_27 () : gw.api.database.IQueryBeanResult<entity.Renewal> {
      return renewals
    }
    
    property get pcDefaultTeamModel () : gw.api.web.team.PCDefaultTeamModel {
      return getVariableValue("pcDefaultTeamModel", 0) as gw.api.web.team.PCDefaultTeamModel
    }
    
    property set pcDefaultTeamModel ($arg :  gw.api.web.team.PCDefaultTeamModel) {
      setVariableValue("pcDefaultTeamModel", 0, $arg)
    }
    
    property get renewals () : gw.api.database.IQueryBeanResult<Renewal> {
      return getVariableValue("renewals", 0) as gw.api.database.IQueryBeanResult<Renewal>
    }
    
    property set renewals ($arg :  gw.api.database.IQueryBeanResult<Renewal>) {
      setVariableValue("renewals", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}