package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (oldPage :  String) : int {
      return 1
    }
    
    static function __constructorIndex (oldPage :  String, teamModel :  gw.api.team.TeamModel) : int {
      return 2
    }
    
    // 'action' attribute on ForwardCondition at TeamForward.pcf: line 38, column 94
    function action_11 () : void {
      TeamActivities.go(pCTeamModel)
    }
    
    // 'action' attribute on ForwardCondition at TeamForward.pcf: line 40, column 45
    function action_14 () : void {
      TeamSummary.go(pCTeamModel)
    }
    
    // 'action' attribute on ForwardCondition at TeamForward.pcf: line 29, column 63
    function action_2 () : void {
      TeamOtherWorkOrders.go(pCTeamModel)
    }
    
    // 'action' attribute on ForwardCondition at TeamForward.pcf: line 32, column 56
    function action_5 () : void {
      TeamRenewals.go(pCTeamModel)
    }
    
    // 'action' attribute on ForwardCondition at TeamForward.pcf: line 35, column 59
    function action_8 () : void {
      TeamSubmissions.go(pCTeamModel)
    }
    
    // 'action' attribute on ForwardCondition at TeamForward.pcf: line 38, column 94
    function action_dest_12 () : pcf.api.Destination {
      return pcf.TeamActivities.createDestination(pCTeamModel)
    }
    
    // 'action' attribute on ForwardCondition at TeamForward.pcf: line 40, column 45
    function action_dest_15 () : pcf.api.Destination {
      return pcf.TeamSummary.createDestination(pCTeamModel)
    }
    
    // 'action' attribute on ForwardCondition at TeamForward.pcf: line 29, column 63
    function action_dest_3 () : pcf.api.Destination {
      return pcf.TeamOtherWorkOrders.createDestination(pCTeamModel)
    }
    
    // 'action' attribute on ForwardCondition at TeamForward.pcf: line 32, column 56
    function action_dest_6 () : pcf.api.Destination {
      return pcf.TeamRenewals.createDestination(pCTeamModel)
    }
    
    // 'action' attribute on ForwardCondition at TeamForward.pcf: line 35, column 59
    function action_dest_9 () : pcf.api.Destination {
      return pcf.TeamSubmissions.createDestination(pCTeamModel)
    }
    
    // 'canVisit' attribute on Forward (id=TeamForward) at TeamForward.pcf: line 7, column 22
    static function canVisit_16 (oldPage :  String, teamModel :  gw.api.team.TeamModel) : java.lang.Boolean {
      return perm.System.viewteam
    }
    
    // 'condition' attribute on ForwardCondition at TeamForward.pcf: line 35, column 59
    function condition_10 () : java.lang.Boolean {
      return oldPage == "TeamSubmissions"
    }
    
    // 'condition' attribute on ForwardCondition at TeamForward.pcf: line 38, column 94
    function condition_13 () : java.lang.Boolean {
      return oldPage == "TeamActivities" or not pCTeamModel.hasSummaryPage()
    }
    
    // 'condition' attribute on ForwardCondition at TeamForward.pcf: line 29, column 63
    function condition_4 () : java.lang.Boolean {
      return oldPage == "TeamOtherWorkOrders"
    }
    
    // 'condition' attribute on ForwardCondition at TeamForward.pcf: line 32, column 56
    function condition_7 () : java.lang.Boolean {
      return oldPage == "TeamRenewals"
    }
    
    // 'initialValue' attribute on Variable at TeamForward.pcf: line 21, column 37
    function initialValue_0 () : gw.api.team.TeamModel {
      return com.guidewire.pc.web.team.PCTeamModelFactory.getInstance().createRootTeamModel() as gw.api.web.team.PCTeamModel
    }
    
    // 'initialValue' attribute on Variable at TeamForward.pcf: line 25, column 43
    function initialValue_1 () : gw.api.web.team.PCTeamModel {
      return teamModel as gw.api.web.team.PCTeamModel
    }
    
    override property get CurrentLocation () : pcf.TeamForward {
      return super.CurrentLocation as pcf.TeamForward
    }
    
    property get oldPage () : String {
      return getVariableValue("oldPage", 0) as String
    }
    
    property set oldPage ($arg :  String) {
      setVariableValue("oldPage", 0, $arg)
    }
    
    property get pCTeamModel () : gw.api.web.team.PCTeamModel {
      return getVariableValue("pCTeamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set pCTeamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setVariableValue("pCTeamModel", 0, $arg)
    }
    
    property get teamModel () : gw.api.team.TeamModel {
      return getVariableValue("teamModel", 0) as gw.api.team.TeamModel
    }
    
    property set teamModel ($arg :  gw.api.team.TeamModel) {
      setVariableValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}