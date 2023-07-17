package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamGroupExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamGroupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (teamModel :  gw.api.web.team.PCTeamModel) : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 17, column 42
    function action_0 () : void {
      pcf.TeamSummary.go(teamModel)
    }
    
    // 'location' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 20, column 45
    function action_2 () : void {
      pcf.TeamActivities.go(teamModel)
    }
    
    // 'location' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 23, column 46
    function action_4 () : void {
      pcf.TeamSubmissions.go(teamModel)
    }
    
    // 'location' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 26, column 43
    function action_6 () : void {
      pcf.TeamRenewals.go(teamModel)
    }
    
    // 'location' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 29, column 50
    function action_8 () : void {
      pcf.TeamOtherWorkOrders.go(teamModel)
    }
    
    // 'location' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 17, column 42
    function action_dest_1 () : pcf.api.Destination {
      return pcf.TeamSummary.createDestination(teamModel)
    }
    
    // 'location' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 20, column 45
    function action_dest_3 () : pcf.api.Destination {
      return pcf.TeamActivities.createDestination(teamModel)
    }
    
    // 'location' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 23, column 46
    function action_dest_5 () : pcf.api.Destination {
      return pcf.TeamSubmissions.createDestination(teamModel)
    }
    
    // 'location' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 26, column 43
    function action_dest_7 () : pcf.api.Destination {
      return pcf.TeamRenewals.createDestination(teamModel)
    }
    
    // 'location' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 29, column 50
    function action_dest_9 () : pcf.api.Destination {
      return pcf.TeamOtherWorkOrders.createDestination(teamModel)
    }
    
    // 'canVisit' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 9, column 57
    static function canVisit_10 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Boolean {
      return perm.User.viewteam
    }
    
    // LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 9, column 57
    static function firstVisitableChildDestinationMethod_14 (teamModel :  gw.api.web.team.PCTeamModel) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.TeamSummary.createDestination(teamModel)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.TeamActivities.createDestination(teamModel)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.TeamSubmissions.createDestination(teamModel)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.TeamRenewals.createDestination(teamModel)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.TeamOtherWorkOrders.createDestination(teamModel)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'parent' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 9, column 57
    static function parent_11 (teamModel :  gw.api.web.team.PCTeamModel) : pcf.api.Destination {
      return pcf.Team.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 9, column 57
    function tabBar_onEnter_12 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=TeamGroup) at TeamGroup.pcf: line 9, column 57
    function tabBar_refreshVariables_13 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.TeamGroup {
      return super.CurrentLocation as pcf.TeamGroup
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getVariableValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setVariableValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}