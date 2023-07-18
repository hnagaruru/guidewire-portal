package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamSummaryExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamSummaryExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (teamModel :  gw.api.web.team.PCTeamModel) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=TeamSummary) at TeamSummary.pcf: line 8, column 101
    static function canVisit_13 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Boolean {
      return perm.User.viewteam and teamModel.hasSummaryPage()
    }
    
    // Page (id=TeamSummary) at TeamSummary.pcf: line 8, column 101
    static function parent_14 (teamModel :  gw.api.web.team.PCTeamModel) : pcf.api.Destination {
      return pcf.TeamGroup.createDestination(teamModel)
    }
    
    // 'title' attribute on Page (id=TeamSummary) at TeamSummary.pcf: line 8, column 101
    static function title_15 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Object {
      return DisplayKey.get("Web.Team.Summary", teamModel.Label, teamModel.LastCalculated)
    }
    
    override property get CurrentLocation () : pcf.TeamSummary {
      return super.CurrentLocation as pcf.TeamSummary
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getVariableValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setVariableValue("teamModel", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamSummaryScreenExpressionsImpl extends TeamSummaryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at TeamSummary.pcf: line 26, column 71
    function def_onEnter_10 (def :  pcf.TeamSummaryLV_federated) : void {
      def.onEnter(teamModel, statsType)
    }
    
    // 'def' attribute on PanelRef at TeamSummary.pcf: line 26, column 71
    function def_onEnter_8 (def :  pcf.TeamSummaryLV_default) : void {
      def.onEnter(teamModel, statsType)
    }
    
    // 'def' attribute on PanelRef at TeamSummary.pcf: line 26, column 71
    function def_refreshVariables_11 (def :  pcf.TeamSummaryLV_federated) : void {
      def.refreshVariables(teamModel, statsType)
    }
    
    // 'def' attribute on PanelRef at TeamSummary.pcf: line 26, column 71
    function def_refreshVariables_9 (def :  pcf.TeamSummaryLV_default) : void {
      def.refreshVariables(teamModel, statsType)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=TeamSummaryStatsType_Input) at TeamSummary.pcf: line 38, column 49
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      statsType = (__VALUE_TO_SET as typekey.TeamStatsType)
    }
    
    // 'initialValue' attribute on Variable at TeamSummary.pcf: line 19, column 39
    function initialValue_0 () : typekey.TeamStatsType {
      return typekey.TeamStatsType.TC_BYROLE
    }
    
    // 'mode' attribute on PanelRef at TeamSummary.pcf: line 26, column 71
    function mode_12 () : java.lang.Object {
      return gw.api.web.desktop.data.FederatedDataUIHelper.mode()
    }
    
    // 'title' attribute on TitleBar at TeamSummary.pcf: line 21, column 108
    function title_1 () : java.lang.String {
      return DisplayKey.get("Web.Team.Summary",  teamModel.Label, teamModel.LastCalculated )
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=TeamSummaryStatsType_Input) at TeamSummary.pcf: line 38, column 49
    function valueRange_4 () : java.lang.Object {
      return typekey.TeamStatsType.getTypeKeys(false)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=TeamSummaryStatsType_Input) at TeamSummary.pcf: line 38, column 49
    function value_2 () : typekey.TeamStatsType {
      return statsType
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=TeamSummaryStatsType_Input) at TeamSummary.pcf: line 38, column 49
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=TeamSummaryStatsType_Input) at TeamSummary.pcf: line 38, column 49
    function verifyValueRangeIsAllowedType_5 ($$arg :  typekey.TeamStatsType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=TeamSummaryStatsType_Input) at TeamSummary.pcf: line 38, column 49
    function verifyValueRange_6 () : void {
      var __valueRangeArg = typekey.TeamStatsType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    property get statsType () : typekey.TeamStatsType {
      return getVariableValue("statsType", 1) as typekey.TeamStatsType
    }
    
    property set statsType ($arg :  typekey.TeamStatsType) {
      setVariableValue("statsType", 1, $arg)
    }
    
    
  }
  
  
}