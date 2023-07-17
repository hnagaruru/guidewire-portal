package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamSubmissionsScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamSubmissionsScreen_federatedExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamSubmissionsScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamSubmissionsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at TeamSubmissionsScreen.federated.pcf: line 40, column 52
    function allCheckedRowsAction_5 (CheckedValues :  gw.api.web.desktop.data.JobDTO[], CheckedValuesErrors :  java.util.Map) : void {
      MulticlusterAssignJobUserRolePopup.push(CheckedValues, typekeyMenuItem)
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at TeamSubmissionsScreen.federated.pcf: line 40, column 52
    function label_4 () : java.lang.Object {
      return typekeyMenuItem.DisplayName
    }
    
    property get typekeyMenuItem () : typekey.UserRole {
      return getIteratedValue(1) as typekey.UserRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamSubmissionsScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamSubmissionsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at TeamSubmissionsScreen.federated.pcf: line 25, column 36
    function def_onEnter_8 (def :  pcf.FederatedTeamSubmissionsLV) : void {
      def.onEnter(teamModel)
    }
    
    // 'def' attribute on PanelRef at TeamSubmissionsScreen.federated.pcf: line 25, column 36
    function def_refreshVariables_9 (def :  pcf.FederatedTeamSubmissionsLV) : void {
      def.refreshVariables(teamModel)
    }
    
    // 'initialValue' attribute on Variable at TeamSubmissionsScreen.federated.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return teamModel.canViewSubmissions()
    }
    
    // 'label' attribute on Verbatim at TeamSubmissionsScreen.federated.pcf: line 22, column 41
    function label_3 () : java.lang.String {
      return DisplayKey.get("Web.Team.JobCountToDisplayExceedsMax", gw.api.system.PCConfigParameters.TeamScreenTabVisibilityRowCountCutoff.Value, "submissions", teamModel.Label)
    }
    
    // 'title' attribute on TitleBar at TeamSubmissionsScreen.federated.pcf: line 19, column 179
    function title_1 () : java.lang.String {
      return DisplayKey.get("Web.Team.Submissions", teamModel.Label, teamModel.getDisplayMode(true), gw.api.domain.statistics.StatsWindowUtil.getSubmissionsWindow())
    }
    
    // 'value' attribute on CheckedValuesMenuItemIterator at TeamSubmissionsScreen.federated.pcf: line 36, column 44
    function value_6 () : typekey.UserRole[] {
      return gw.assignment.AssignmentUtil.getMultipleAssignmentRoles(UserRoleConstraint.TC_JOBEXCLUSIVE)
    }
    
    // 'visible' attribute on Verbatim at TeamSubmissionsScreen.federated.pcf: line 22, column 41
    function visible_2 () : java.lang.Boolean {
      return not canViewSubmissions
    }
    
    // 'visible' attribute on PanelRef at TeamSubmissionsScreen.federated.pcf: line 25, column 36
    function visible_7 () : java.lang.Boolean {
      return canViewSubmissions
    }
    
    property get canViewSubmissions () : boolean {
      return getVariableValue("canViewSubmissions", 0) as java.lang.Boolean
    }
    
    property set canViewSubmissions ($arg :  boolean) {
      setVariableValue("canViewSubmissions", 0, $arg)
    }
    
    property get pickedUser () : User {
      return getVariableValue("pickedUser", 0) as User
    }
    
    property set pickedUser ($arg :  User) {
      setVariableValue("pickedUser", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}