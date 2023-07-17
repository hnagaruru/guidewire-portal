package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamOtherWorkOrdersExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamOtherWorkOrdersExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (teamModel :  gw.api.web.team.PCTeamModel) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=TeamOtherWorkOrders) at TeamOtherWorkOrders.pcf: line 8, column 179
    static function canVisit_5 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Boolean {
      return perm.User.viewteam and teamModel.hasOtherWorkOrdersPage()
    }
    
    // 'def' attribute on ScreenRef at TeamOtherWorkOrders.pcf: line 16, column 68
    function def_onEnter_0 (def :  pcf.TeamOtherWorkOrdersScreen_default) : void {
      def.onEnter(teamModel)
    }
    
    // 'def' attribute on ScreenRef at TeamOtherWorkOrders.pcf: line 16, column 68
    function def_onEnter_2 (def :  pcf.TeamOtherWorkOrdersScreen_federated) : void {
      def.onEnter(teamModel)
    }
    
    // 'def' attribute on ScreenRef at TeamOtherWorkOrders.pcf: line 16, column 68
    function def_refreshVariables_1 (def :  pcf.TeamOtherWorkOrdersScreen_default) : void {
      def.refreshVariables(teamModel)
    }
    
    // 'def' attribute on ScreenRef at TeamOtherWorkOrders.pcf: line 16, column 68
    function def_refreshVariables_3 (def :  pcf.TeamOtherWorkOrdersScreen_federated) : void {
      def.refreshVariables(teamModel)
    }
    
    // 'mode' attribute on ScreenRef at TeamOtherWorkOrders.pcf: line 16, column 68
    function mode_4 () : java.lang.Object {
      return gw.api.web.desktop.data.FederatedDataUIHelper.mode()
    }
    
    // Page (id=TeamOtherWorkOrders) at TeamOtherWorkOrders.pcf: line 8, column 179
    static function parent_6 (teamModel :  gw.api.web.team.PCTeamModel) : pcf.api.Destination {
      return pcf.TeamGroup.createDestination(teamModel)
    }
    
    // 'title' attribute on Page (id=TeamOtherWorkOrders) at TeamOtherWorkOrders.pcf: line 8, column 179
    static function title_7 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Object {
      return DisplayKey.get("Web.Team.WorkOrders", teamModel.Label, teamModel.getDisplayMode(true), gw.api.domain.statistics.StatsWindowUtil.getOtherWorkOrdersWindow())
    }
    
    override property get CurrentLocation () : pcf.TeamOtherWorkOrders {
      return super.CurrentLocation as pcf.TeamOtherWorkOrders
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getVariableValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setVariableValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}