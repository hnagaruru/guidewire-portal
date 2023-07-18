package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMySummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedMySummaryExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedMySummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedMySummaryExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (user :  User) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=FederatedMySummary) at FederatedMySummary.pcf: line 8, column 63
    static function canVisit_16 (user :  User) : java.lang.Boolean {
      return gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions.Instance.Any && gw.api.web.desktop.data.FederatedDataUIHelper.IsFederated
    }
    
    // 'def' attribute on TileRef at FederatedMySummary.pcf: line 33, column 45
    function def_onEnter_11 (def :  pcf.FederatedMyRenewalListViewTile) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on TileRef at FederatedMySummary.pcf: line 36, column 42
    function def_onEnter_14 (def :  pcf.FederatedChangeRequestsListViewTile) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on TileRef at FederatedMySummary.pcf: line 24, column 56
    function def_onEnter_2 (def :  pcf.FederatedOverviewDetailViewTile) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on TileRef at FederatedMySummary.pcf: line 27, column 47
    function def_onEnter_5 (def :  pcf.FederatedMyActivitiesListViewTile) : void {
      def.onEnter()
    }
    
    // 'def' attribute on TileRef at FederatedMySummary.pcf: line 30, column 48
    function def_onEnter_8 (def :  pcf.FederatedMySubmissionsListViewTile) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on TileRef at FederatedMySummary.pcf: line 33, column 45
    function def_refreshVariables_12 (def :  pcf.FederatedMyRenewalListViewTile) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on TileRef at FederatedMySummary.pcf: line 36, column 42
    function def_refreshVariables_15 (def :  pcf.FederatedChangeRequestsListViewTile) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on TileRef at FederatedMySummary.pcf: line 24, column 56
    function def_refreshVariables_3 (def :  pcf.FederatedOverviewDetailViewTile) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on TileRef at FederatedMySummary.pcf: line 27, column 47
    function def_refreshVariables_6 (def :  pcf.FederatedMyActivitiesListViewTile) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on TileRef at FederatedMySummary.pcf: line 30, column 48
    function def_refreshVariables_9 (def :  pcf.FederatedMySubmissionsListViewTile) : void {
      def.refreshVariables(user)
    }
    
    // 'initialValue' attribute on Variable at FederatedMySummary.pcf: line 17, column 94
    function initialValue_0 () : gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions {
      return gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions.Instance
    }
    
    // Page (id=FederatedMySummary) at FederatedMySummary.pcf: line 8, column 63
    static function parent_17 (user :  User) : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    // 'visible' attribute on TileRef at FederatedMySummary.pcf: line 24, column 56
    function visible_1 () : java.lang.Boolean {
      return permissions.AnyJobsOrActivities
    }
    
    // 'visible' attribute on TileRef at FederatedMySummary.pcf: line 33, column 45
    function visible_10 () : java.lang.Boolean {
      return permissions.Renewals
    }
    
    // 'visible' attribute on TileRef at FederatedMySummary.pcf: line 36, column 42
    function visible_13 () : java.lang.Boolean {
      return permissions.Other
    }
    
    // 'visible' attribute on TileRef at FederatedMySummary.pcf: line 27, column 47
    function visible_4 () : java.lang.Boolean {
      return permissions.Activities
    }
    
    // 'visible' attribute on TileRef at FederatedMySummary.pcf: line 30, column 48
    function visible_7 () : java.lang.Boolean {
      return permissions.Submissions
    }
    
    override property get CurrentLocation () : pcf.FederatedMySummary {
      return super.CurrentLocation as pcf.FederatedMySummary
    }
    
    property get permissions () : gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions {
      return getVariableValue("permissions", 0) as gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions
    }
    
    property set permissions ($arg :  gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions) {
      setVariableValue("permissions", 0, $arg)
    }
    
    property get user () : User {
      return getVariableValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setVariableValue("user", 0, $arg)
    }
    
    
  }
  
  
}