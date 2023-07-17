package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamActivities.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamActivitiesExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamActivities.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamActivitiesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (teamModel :  gw.api.web.team.PCTeamModel) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=TeamActivities) at TeamActivities.pcf: line 8, column 175
    static function canVisit_5 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Boolean {
      return perm.System.viewteam and teamModel.hasActivitiesPage()
    }
    
    // 'def' attribute on ScreenRef at TeamActivities.pcf: line 16, column 68
    function def_onEnter_0 (def :  pcf.TeamActivitiesScreen_default) : void {
      def.onEnter(teamModel)
    }
    
    // 'def' attribute on ScreenRef at TeamActivities.pcf: line 16, column 68
    function def_onEnter_2 (def :  pcf.TeamActivitiesScreen_federated) : void {
      def.onEnter(teamModel)
    }
    
    // 'def' attribute on ScreenRef at TeamActivities.pcf: line 16, column 68
    function def_refreshVariables_1 (def :  pcf.TeamActivitiesScreen_default) : void {
      def.refreshVariables(teamModel)
    }
    
    // 'def' attribute on ScreenRef at TeamActivities.pcf: line 16, column 68
    function def_refreshVariables_3 (def :  pcf.TeamActivitiesScreen_federated) : void {
      def.refreshVariables(teamModel)
    }
    
    // 'mode' attribute on ScreenRef at TeamActivities.pcf: line 16, column 68
    function mode_4 () : java.lang.Object {
      return gw.api.web.desktop.data.FederatedDataUIHelper.mode()
    }
    
    // Page (id=TeamActivities) at TeamActivities.pcf: line 8, column 175
    static function parent_6 (teamModel :  gw.api.web.team.PCTeamModel) : pcf.api.Destination {
      return pcf.TeamGroup.createDestination(teamModel)
    }
    
    // 'title' attribute on Page (id=TeamActivities) at TeamActivities.pcf: line 8, column 175
    static function title_7 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Object {
      return DisplayKey.get("Web.Team.Activities", teamModel.Label, teamModel.getDisplayMode(false), gw.api.domain.statistics.StatsWindowUtil.getActivitiesWindow())
    }
    
    override property get CurrentLocation () : pcf.TeamActivities {
      return super.CurrentLocation as pcf.TeamActivities
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getVariableValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setVariableValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}