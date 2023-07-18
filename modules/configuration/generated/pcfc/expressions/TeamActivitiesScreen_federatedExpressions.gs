package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamActivitiesScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamActivitiesScreen_federatedExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamActivitiesScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamActivitiesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=TeamGroupActivities_Assign) at TeamActivitiesScreen.federated.pcf: line 35, column 25
    function allCheckedRowsAction_5 (CheckedValues :  gw.api.web.desktop.data.activity.ActivityDTO[], CheckedValuesErrors :  java.util.Map) : void {
      MulticlusterAssignActivitiesPopup.push(               gw.api.web.activity.MulticlusterActivityAssignmentPopup.newInstance(CheckedValues, gw.assignment.AssignmentUtil.DefaultUser, \ -> processedActivities.clear()))
    }
    
    // 'def' attribute on PanelRef at TeamActivitiesScreen.federated.pcf: line 26, column 35
    function def_onEnter_7 (def :  pcf.FederatedTeamActivitiesLV) : void {
      def.onEnter(teamModel)
    }
    
    // 'def' attribute on PanelRef at TeamActivitiesScreen.federated.pcf: line 26, column 35
    function def_refreshVariables_8 (def :  pcf.FederatedTeamActivitiesLV) : void {
      def.refreshVariables(teamModel)
    }
    
    // 'initialValue' attribute on Variable at TeamActivitiesScreen.federated.pcf: line 14, column 23
    function initialValue_0 () : boolean {
      return teamModel.canViewActivities()
    }
    
    // 'initialValue' attribute on Variable at TeamActivitiesScreen.federated.pcf: line 18, column 33
    function initialValue_1 () : Set<String> {
      return {}
    }
    
    // 'label' attribute on Verbatim at TeamActivitiesScreen.federated.pcf: line 23, column 40
    function label_4 () : java.lang.String {
      return DisplayKey.get("Web.Team.JobCountToDisplayExceedsMax", gw.api.system.PCConfigParameters.TeamScreenTabVisibilityRowCountCutoff.Value, "activities", teamModel.Label)
    }
    
    // 'title' attribute on TitleBar at TeamActivitiesScreen.federated.pcf: line 20, column 178
    function title_2 () : java.lang.String {
      return DisplayKey.get("Web.Team.Activities", teamModel.Label, teamModel.getDisplayMode(false), gw.api.domain.statistics.StatsWindowUtil.getActivitiesWindow())
    }
    
    // 'visible' attribute on Verbatim at TeamActivitiesScreen.federated.pcf: line 23, column 40
    function visible_3 () : java.lang.Boolean {
      return not canViewActivities
    }
    
    // 'visible' attribute on PanelRef at TeamActivitiesScreen.federated.pcf: line 26, column 35
    function visible_6 () : java.lang.Boolean {
      return canViewActivities
    }
    
    property get canViewActivities () : boolean {
      return getVariableValue("canViewActivities", 0) as java.lang.Boolean
    }
    
    property set canViewActivities ($arg :  boolean) {
      setVariableValue("canViewActivities", 0, $arg)
    }
    
    property get processedActivities () : Set<String> {
      return getVariableValue("processedActivities", 0) as Set<String>
    }
    
    property set processedActivities ($arg :  Set<String>) {
      setVariableValue("processedActivities", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}