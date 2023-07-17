package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamSummaryLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamSummaryLV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamSummaryLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamSummaryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at TeamSummaryLV.default.pcf: line 195, column 25
    function valueRoot_13 () : java.lang.Object {
      return stats
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at TeamSummaryLV.default.pcf: line 195, column 25
    function value_12 () : java.lang.String {
      return stats.Name
    }
    
    // 'value' attribute on TextCell (id=OpenActivities_Cell) at TeamSummaryLV.default.pcf: line 202, column 42
    function value_15 () : java.lang.Integer {
      return stats.OpenActivities
    }
    
    // 'value' attribute on TextCell (id=OverdueActivities_Cell) at TeamSummaryLV.default.pcf: line 209, column 42
    function value_18 () : java.lang.Integer {
      return stats.OverdueActivities
    }
    
    // 'value' attribute on TextCell (id=CompletedActivities_Cell) at TeamSummaryLV.default.pcf: line 216, column 42
    function value_21 () : java.lang.Integer {
      return stats.CompletedActivities
    }
    
    // 'value' attribute on TextCell (id=OpenSubmissions_Cell) at TeamSummaryLV.default.pcf: line 223, column 42
    function value_24 () : java.lang.Integer {
      return stats.OpenSubmissions
    }
    
    // 'value' attribute on TextCell (id=NewSubmissions_Cell) at TeamSummaryLV.default.pcf: line 230, column 42
    function value_27 () : java.lang.Integer {
      return stats.NewSubmissions
    }
    
    // 'value' attribute on TextCell (id=BoundSubmissions_Cell) at TeamSummaryLV.default.pcf: line 237, column 42
    function value_30 () : java.lang.Integer {
      return stats.BoundSubmissions
    }
    
    // 'value' attribute on TextCell (id=OpenRenewals_Cell) at TeamSummaryLV.default.pcf: line 244, column 42
    function value_33 () : java.lang.Integer {
      return stats.OpenRenewals
    }
    
    // 'value' attribute on TextCell (id=NewRenewals_Cell) at TeamSummaryLV.default.pcf: line 251, column 42
    function value_36 () : java.lang.Integer {
      return stats.NewRenewals
    }
    
    // 'value' attribute on TextCell (id=RenewedRenewals_Cell) at TeamSummaryLV.default.pcf: line 258, column 42
    function value_39 () : java.lang.Integer {
      return stats.RenewedRenewals
    }
    
    // 'value' attribute on TextCell (id=NonRenewedRenewals_Cell) at TeamSummaryLV.default.pcf: line 265, column 42
    function value_42 () : java.lang.Integer {
      return stats.NonRenewedRenewals
    }
    
    // 'value' attribute on TextCell (id=NotTakenRenewals_Cell) at TeamSummaryLV.default.pcf: line 272, column 42
    function value_45 () : java.lang.Integer {
      return stats.NotTakenRenewals
    }
    
    // 'value' attribute on TextCell (id=OpenPolicyChanges_Cell) at TeamSummaryLV.default.pcf: line 279, column 42
    function value_48 () : java.lang.Integer {
      return stats.OpenMidTermChanges
    }
    
    // 'value' attribute on TextCell (id=NewPolicyChanges_Cell) at TeamSummaryLV.default.pcf: line 286, column 42
    function value_51 () : java.lang.Integer {
      return stats.NewMidTermChanges
    }
    
    // 'value' attribute on TextCell (id=ApprovedPolicyChanges_Cell) at TeamSummaryLV.default.pcf: line 293, column 42
    function value_54 () : java.lang.Integer {
      return stats.ApprovedMidTermChanges
    }
    
    property get stats () : gw.api.web.team.summaryrow.TeamSummaryRow {
      return getIteratedValue(1) as gw.api.web.team.summaryrow.TeamSummaryRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamSummaryLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamSummaryLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=OpenActivitiesHeader_Cell) at TeamSummaryLV.default.pcf: line 62, column 30
    function iconColor_8 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_INFO
    }
    
    // 'value' attribute on TextCell (id=ActivitiesGroup_Cell) at TeamSummaryLV.default.pcf: line 28, column 137
    function value_0 () : java.lang.String {
      return DisplayKey.get("Web.Team.Activities.Header", gw.api.domain.statistics.StatsWindowUtil.getActivitiesWindow())
    }
    
    // 'value' attribute on TextCell (id=SubmissionsGroup_Cell) at TeamSummaryLV.default.pcf: line 33, column 139
    function value_2 () : java.lang.String {
      return DisplayKey.get("Web.Team.Submissions.Header", gw.api.domain.statistics.StatsWindowUtil.getSubmissionsWindow())
    }
    
    // 'value' attribute on TextCell (id=RenewalsGroup_Cell) at TeamSummaryLV.default.pcf: line 38, column 133
    function value_4 () : java.lang.String {
      return DisplayKey.get("Web.Team.Renewals.Header", gw.api.domain.statistics.StatsWindowUtil.getRenewalsWindow())
    }
    
    // 'value' attribute on RowIterator at TeamSummaryLV.default.pcf: line 188, column 63
    function value_57 () : gw.api.web.team.summaryrow.TeamSummaryRow[] {
      return teamModel.getSummary(statsType)
    }
    
    // 'value' attribute on TextCell (id=PolicyChangesGroup_Cell) at TeamSummaryLV.default.pcf: line 43, column 142
    function value_6 () : java.lang.String {
      return DisplayKey.get("Web.Team.WorkOrders.Header", gw.api.domain.statistics.StatsWindowUtil.getOtherWorkOrdersWindow())
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