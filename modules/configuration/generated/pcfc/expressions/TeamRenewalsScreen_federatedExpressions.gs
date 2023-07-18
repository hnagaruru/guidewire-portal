package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamRenewalsScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamRenewalsScreen_federatedExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamRenewalsScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamRenewalsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at TeamRenewalsScreen.federated.pcf: line 36, column 52
    function allCheckedRowsAction_5 (CheckedValues :  gw.api.web.desktop.data.JobDTO[], CheckedValuesErrors :  java.util.Map) : void {
      MulticlusterAssignJobUserRolePopup.push(CheckedValues, typekeyMenuItem)
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at TeamRenewalsScreen.federated.pcf: line 36, column 52
    function label_4 () : java.lang.Object {
      return typekeyMenuItem.DisplayName
    }
    
    property get typekeyMenuItem () : typekey.UserRole {
      return getIteratedValue(1) as typekey.UserRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamRenewalsScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamRenewalsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at TeamRenewalsScreen.federated.pcf: line 22, column 33
    function def_onEnter_8 (def :  pcf.FederatedTeamRenewalsLV) : void {
      def.onEnter(teamModel)
    }
    
    // 'def' attribute on PanelRef at TeamRenewalsScreen.federated.pcf: line 22, column 33
    function def_refreshVariables_9 (def :  pcf.FederatedTeamRenewalsLV) : void {
      def.refreshVariables(teamModel)
    }
    
    // 'initialValue' attribute on Variable at TeamRenewalsScreen.federated.pcf: line 14, column 23
    function initialValue_0 () : boolean {
      return teamModel.canViewRenewals()
    }
    
    // 'label' attribute on Verbatim at TeamRenewalsScreen.federated.pcf: line 19, column 38
    function label_3 () : java.lang.String {
      return DisplayKey.get("Web.Team.JobCountToDisplayExceedsMax", gw.api.system.PCConfigParameters.TeamScreenTabVisibilityRowCountCutoff.Value, "renewals", teamModel.Label)
    }
    
    // 'title' attribute on TitleBar at TeamRenewalsScreen.federated.pcf: line 16, column 173
    function title_1 () : java.lang.String {
      return DisplayKey.get("Web.Team.Renewals", teamModel.Label, teamModel.getDisplayMode(true), gw.api.domain.statistics.StatsWindowUtil.getRenewalsWindow())
    }
    
    // 'value' attribute on CheckedValuesMenuItemIterator at TeamRenewalsScreen.federated.pcf: line 32, column 44
    function value_6 () : typekey.UserRole[] {
      return gw.assignment.AssignmentUtil.getMultipleAssignmentRoles(UserRoleConstraint.TC_JOBEXCLUSIVE)
    }
    
    // 'visible' attribute on Verbatim at TeamRenewalsScreen.federated.pcf: line 19, column 38
    function visible_2 () : java.lang.Boolean {
      return not canViewRenewals
    }
    
    // 'visible' attribute on PanelRef at TeamRenewalsScreen.federated.pcf: line 22, column 33
    function visible_7 () : java.lang.Boolean {
      return canViewRenewals
    }
    
    property get canViewRenewals () : boolean {
      return getVariableValue("canViewRenewals", 0) as java.lang.Boolean
    }
    
    property set canViewRenewals ($arg :  boolean) {
      setVariableValue("canViewRenewals", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}