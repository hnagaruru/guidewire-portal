package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrdersScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamOtherWorkOrdersScreen_federatedExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrdersScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamOtherWorkOrdersScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at TeamOtherWorkOrdersScreen.federated.pcf: line 38, column 52
    function allCheckedRowsAction_5 (CheckedValues :  gw.api.web.desktop.data.JobDTO[], CheckedValuesErrors :  java.util.Map) : void {
      MulticlusterAssignJobUserRolePopup.push(CheckedValues, typekeyMenuItem)
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at TeamOtherWorkOrdersScreen.federated.pcf: line 38, column 52
    function label_4 () : java.lang.Object {
      return typekeyMenuItem.DisplayName
    }
    
    property get typekeyMenuItem () : typekey.UserRole {
      return getIteratedValue(1) as typekey.UserRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrdersScreen.federated.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamOtherWorkOrdersScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at TeamOtherWorkOrdersScreen.federated.pcf: line 23, column 46
    function def_onEnter_8 (def :  pcf.FederatedTeamOtherWorkOrdersLV) : void {
      def.onEnter(teamModel)
    }
    
    // 'def' attribute on PanelRef at TeamOtherWorkOrdersScreen.federated.pcf: line 23, column 46
    function def_refreshVariables_9 (def :  pcf.FederatedTeamOtherWorkOrdersLV) : void {
      def.refreshVariables(teamModel)
    }
    
    // 'initialValue' attribute on Variable at TeamOtherWorkOrdersScreen.federated.pcf: line 15, column 23
    function initialValue_0 () : boolean {
      return teamModel.canViewOtherWorkOrders()
    }
    
    // 'label' attribute on Verbatim at TeamOtherWorkOrdersScreen.federated.pcf: line 20, column 51
    function label_3 () : java.lang.String {
      return DisplayKey.get("Web.Team.JobCountToDisplayExceedsMax", gw.api.system.PCConfigParameters.TeamScreenTabVisibilityRowCountCutoff.Value, "policy changes", teamModel.Label)
    }
    
    // 'title' attribute on TitleBar at TeamOtherWorkOrdersScreen.federated.pcf: line 17, column 182
    function title_1 () : java.lang.String {
      return DisplayKey.get("Web.Team.WorkOrders", teamModel.Label, teamModel.getDisplayMode(true), gw.api.domain.statistics.StatsWindowUtil.getOtherWorkOrdersWindow())
    }
    
    // 'value' attribute on CheckedValuesMenuItemIterator at TeamOtherWorkOrdersScreen.federated.pcf: line 34, column 44
    function value_6 () : typekey.UserRole[] {
      return gw.assignment.AssignmentUtil.getMultipleAssignmentRoles(UserRoleConstraint.TC_JOBEXCLUSIVE)
    }
    
    // 'visible' attribute on Verbatim at TeamOtherWorkOrdersScreen.federated.pcf: line 20, column 51
    function visible_2 () : java.lang.Boolean {
      return not canViewMisassignedWorkOrders
    }
    
    // 'visible' attribute on PanelRef at TeamOtherWorkOrdersScreen.federated.pcf: line 23, column 46
    function visible_7 () : java.lang.Boolean {
      return canViewMisassignedWorkOrders
    }
    
    property get canViewMisassignedWorkOrders () : boolean {
      return getVariableValue("canViewMisassignedWorkOrders", 0) as java.lang.Boolean
    }
    
    property set canViewMisassignedWorkOrders ($arg :  boolean) {
      setVariableValue("canViewMisassignedWorkOrders", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getRequireValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setRequireValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}