package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamActivitiesScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamActivitiesScreen_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamActivitiesScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamActivitiesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=TeamGroupActivities_Assign) at TeamActivitiesScreen.default.pcf: line 30, column 25
    function allCheckedRowsAction_4 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      AssignActivitiesPopup.push(new gw.api.web.activity.ActivityAssignmentPopup(CheckedValues, gw.assignment.AssignmentUtil.DefaultUser))
    }
    
    // 'def' attribute on PanelRef at TeamActivitiesScreen.default.pcf: line 22, column 35
    function def_onEnter_6 (def :  pcf.TeamActivitiesLV) : void {
      def.onEnter(teamModel)
    }
    
    // 'def' attribute on PanelRef at TeamActivitiesScreen.default.pcf: line 22, column 35
    function def_refreshVariables_7 (def :  pcf.TeamActivitiesLV) : void {
      def.refreshVariables(teamModel)
    }
    
    // 'initialValue' attribute on Variable at TeamActivitiesScreen.default.pcf: line 14, column 23
    function initialValue_0 () : boolean {
      return teamModel.canViewActivities()
    }
    
    // 'label' attribute on Verbatim at TeamActivitiesScreen.default.pcf: line 19, column 40
    function label_3 () : java.lang.String {
      return DisplayKey.get("Web.Team.JobCountToDisplayExceedsMax", gw.api.system.PCConfigParameters.TeamScreenTabVisibilityRowCountCutoff.Value, "activities", teamModel.Label)
    }
    
    // 'title' attribute on TitleBar at TeamActivitiesScreen.default.pcf: line 16, column 178
    function title_1 () : java.lang.String {
      return DisplayKey.get("Web.Team.Activities", teamModel.Label, teamModel.getDisplayMode(false), gw.api.domain.statistics.StatsWindowUtil.getActivitiesWindow())
    }
    
    // 'visible' attribute on Verbatim at TeamActivitiesScreen.default.pcf: line 19, column 40
    function visible_2 () : java.lang.Boolean {
      return not canViewActivities
    }
    
    // 'visible' attribute on PanelRef at TeamActivitiesScreen.default.pcf: line 22, column 35
    function visible_5 () : java.lang.Boolean {
      return canViewActivities
    }
    
    property get canViewActivities () : boolean {
      return getVariableValue("canViewActivities", 0) as java.lang.Boolean
    }
    
    property set canViewActivities ($arg :  boolean) {
      setVariableValue("canViewActivities", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}