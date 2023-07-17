package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamSummaryLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamSummaryLV_federatedExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamSummaryLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamSummaryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at TeamSummaryLV.federated.pcf: line 200, column 25
    function valueRoot_14 () : java.lang.Object {
      return stats
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at TeamSummaryLV.federated.pcf: line 200, column 25
    function value_13 () : java.lang.String {
      return stats.Name
    }
    
    // 'value' attribute on TextCell (id=OpenActivities_Cell) at TeamSummaryLV.federated.pcf: line 207, column 42
    function value_16 () : java.lang.Integer {
      return stats.OpenActivities
    }
    
    // 'value' attribute on TextCell (id=OverdueActivities_Cell) at TeamSummaryLV.federated.pcf: line 214, column 42
    function value_19 () : java.lang.Integer {
      return stats.OverdueActivities
    }
    
    // 'value' attribute on TextCell (id=CompletedActivities_Cell) at TeamSummaryLV.federated.pcf: line 221, column 42
    function value_22 () : java.lang.Integer {
      return stats.CompletedActivities
    }
    
    // 'value' attribute on TextCell (id=OpenSubmissions_Cell) at TeamSummaryLV.federated.pcf: line 228, column 42
    function value_25 () : java.lang.Integer {
      return stats.OpenSubmissions
    }
    
    // 'value' attribute on TextCell (id=NewSubmissions_Cell) at TeamSummaryLV.federated.pcf: line 235, column 42
    function value_28 () : java.lang.Integer {
      return stats.NewSubmissions
    }
    
    // 'value' attribute on TextCell (id=BoundSubmissions_Cell) at TeamSummaryLV.federated.pcf: line 242, column 42
    function value_31 () : java.lang.Integer {
      return stats.BoundSubmissions
    }
    
    // 'value' attribute on TextCell (id=OpenRenewals_Cell) at TeamSummaryLV.federated.pcf: line 249, column 42
    function value_34 () : java.lang.Integer {
      return stats.OpenRenewals
    }
    
    // 'value' attribute on TextCell (id=NewRenewals_Cell) at TeamSummaryLV.federated.pcf: line 256, column 42
    function value_37 () : java.lang.Integer {
      return stats.NewRenewals
    }
    
    // 'value' attribute on TextCell (id=RenewedRenewals_Cell) at TeamSummaryLV.federated.pcf: line 263, column 42
    function value_40 () : java.lang.Integer {
      return stats.RenewedRenewals
    }
    
    // 'value' attribute on TextCell (id=NonRenewedRenewals_Cell) at TeamSummaryLV.federated.pcf: line 270, column 42
    function value_43 () : java.lang.Integer {
      return stats.NonRenewedRenewals
    }
    
    // 'value' attribute on TextCell (id=NotTakenRenewals_Cell) at TeamSummaryLV.federated.pcf: line 277, column 42
    function value_46 () : java.lang.Integer {
      return stats.NotTakenRenewals
    }
    
    // 'value' attribute on TextCell (id=OpenPolicyChanges_Cell) at TeamSummaryLV.federated.pcf: line 284, column 42
    function value_49 () : java.lang.Integer {
      return stats.OpenMidTermChanges
    }
    
    // 'value' attribute on TextCell (id=NewPolicyChanges_Cell) at TeamSummaryLV.federated.pcf: line 291, column 42
    function value_52 () : java.lang.Integer {
      return stats.NewMidTermChanges
    }
    
    // 'value' attribute on TextCell (id=ApprovedPolicyChanges_Cell) at TeamSummaryLV.federated.pcf: line 298, column 42
    function value_55 () : java.lang.Integer {
      return stats.ApprovedMidTermChanges
    }
    
    property get stats () : gw.api.domain.statistics.federated.FederatedTeamSummaryRow {
      return getIteratedValue(1) as gw.api.domain.statistics.federated.FederatedTeamSummaryRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamSummaryLV.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamSummaryLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=OpenActivitiesHeader_Cell) at TeamSummaryLV.federated.pcf: line 66, column 30
    function iconColor_9 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_INFO
    }
    
    // 'initialValue' attribute on Variable at TeamSummaryLV.federated.pcf: line 20, column 52
    function initialValue_0 () : gw.api.web.team.PCFederatedTeamModel {
      return teamModel as gw.api.web.team.PCFederatedTeamModel
    }
    
    // 'value' attribute on TextCell (id=ActivitiesGroup_Cell) at TeamSummaryLV.federated.pcf: line 32, column 137
    function value_1 () : java.lang.String {
      return DisplayKey.get("Web.Team.Activities.Header", gw.api.domain.statistics.StatsWindowUtil.getActivitiesWindow())
    }
    
    // 'value' attribute on TextCell (id=SubmissionsGroup_Cell) at TeamSummaryLV.federated.pcf: line 37, column 139
    function value_3 () : java.lang.String {
      return DisplayKey.get("Web.Team.Submissions.Header", gw.api.domain.statistics.StatsWindowUtil.getSubmissionsWindow())
    }
    
    // 'value' attribute on TextCell (id=RenewalsGroup_Cell) at TeamSummaryLV.federated.pcf: line 42, column 133
    function value_5 () : java.lang.String {
      return DisplayKey.get("Web.Team.Renewals.Header", gw.api.domain.statistics.StatsWindowUtil.getRenewalsWindow())
    }
    
    // 'value' attribute on RowIterator at TeamSummaryLV.federated.pcf: line 193, column 78
    function value_58 () : gw.api.web.team.federated.TeamFederatedIteratorBackingData {
      return pcFederatedTeamModel.getFederatedSummary(statsType) as gw.api.web.team.federated.TeamFederatedIteratorBackingData
    }
    
    // 'value' attribute on TextCell (id=PolicyChangesGroup_Cell) at TeamSummaryLV.federated.pcf: line 47, column 142
    function value_7 () : java.lang.String {
      return DisplayKey.get("Web.Team.WorkOrders.Header", gw.api.domain.statistics.StatsWindowUtil.getOtherWorkOrdersWindow())
    }
    
    // 'valueType' attribute on RowIterator at TeamSummaryLV.federated.pcf: line 193, column 78
    function verifyValueTypeIsAllowedType_59 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at TeamSummaryLV.federated.pcf: line 193, column 78
    function verifyValueTypeIsAllowedType_59 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at TeamSummaryLV.federated.pcf: line 193, column 78
    function verifyValueTypeIsAllowedType_59 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator at TeamSummaryLV.federated.pcf: line 193, column 78
    function verifyValueType_60 () : void {
      var __valueTypeArg : gw.api.web.team.federated.TeamFederatedIteratorBackingData
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_59(__valueTypeArg)
    }
    
    property get pcFederatedTeamModel () : gw.api.web.team.PCFederatedTeamModel {
      return getVariableValue("pcFederatedTeamModel", 0) as gw.api.web.team.PCFederatedTeamModel
    }
    
    property set pcFederatedTeamModel ($arg :  gw.api.web.team.PCFederatedTeamModel) {
      setVariableValue("pcFederatedTeamModel", 0, $arg)
    }
    
    property get statsType () : typekey.TeamStatsType {
      return getRequireValue("statsType", 0) as typekey.TeamStatsType
    }
    
    property set statsType ($arg :  typekey.TeamStatsType) {
      setRequireValue("statsType", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}