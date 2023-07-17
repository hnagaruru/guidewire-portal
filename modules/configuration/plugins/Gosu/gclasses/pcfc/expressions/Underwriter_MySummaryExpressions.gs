package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/Underwriter_MySummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Underwriter_MySummaryExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/Underwriter_MySummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Underwriter_MySummaryExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (user :  User) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=Underwriter_MySummary) at Underwriter_MySummary.pcf: line 8, column 63
    static function canVisit_16 (user :  User) : java.lang.Boolean {
      return gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions.Instance.Any && !gw.api.web.desktop.data.FederatedDataUIHelper.IsFederated
    }
    
    // 'def' attribute on TileRef at Underwriter_MySummary.pcf: line 33, column 45
    function def_onEnter_11 (def :  pcf.MyRenewalListViewTile) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on TileRef at Underwriter_MySummary.pcf: line 36, column 42
    function def_onEnter_14 (def :  pcf.ChangeRequestsListViewTile) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on TileRef at Underwriter_MySummary.pcf: line 24, column 56
    function def_onEnter_2 (def :  pcf.OverviewDetailViewTile) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on TileRef at Underwriter_MySummary.pcf: line 27, column 47
    function def_onEnter_5 (def :  pcf.MyActivitiesListViewTile) : void {
      def.onEnter()
    }
    
    // 'def' attribute on TileRef at Underwriter_MySummary.pcf: line 30, column 48
    function def_onEnter_8 (def :  pcf.MySubmissionsListViewTile) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on TileRef at Underwriter_MySummary.pcf: line 33, column 45
    function def_refreshVariables_12 (def :  pcf.MyRenewalListViewTile) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on TileRef at Underwriter_MySummary.pcf: line 36, column 42
    function def_refreshVariables_15 (def :  pcf.ChangeRequestsListViewTile) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on TileRef at Underwriter_MySummary.pcf: line 24, column 56
    function def_refreshVariables_3 (def :  pcf.OverviewDetailViewTile) : void {
      def.refreshVariables(user)
    }
    
    // 'def' attribute on TileRef at Underwriter_MySummary.pcf: line 27, column 47
    function def_refreshVariables_6 (def :  pcf.MyActivitiesListViewTile) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on TileRef at Underwriter_MySummary.pcf: line 30, column 48
    function def_refreshVariables_9 (def :  pcf.MySubmissionsListViewTile) : void {
      def.refreshVariables(user)
    }
    
    // 'initialValue' attribute on Variable at Underwriter_MySummary.pcf: line 17, column 94
    function initialValue_0 () : gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions {
      return gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions.Instance
    }
    
    // Page (id=Underwriter_MySummary) at Underwriter_MySummary.pcf: line 8, column 63
    static function parent_17 (user :  User) : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    // 'visible' attribute on TileRef at Underwriter_MySummary.pcf: line 24, column 56
    function visible_1 () : java.lang.Boolean {
      return permissions.AnyJobsOrActivities
    }
    
    // 'visible' attribute on TileRef at Underwriter_MySummary.pcf: line 33, column 45
    function visible_10 () : java.lang.Boolean {
      return permissions.Renewals
    }
    
    // 'visible' attribute on TileRef at Underwriter_MySummary.pcf: line 36, column 42
    function visible_13 () : java.lang.Boolean {
      return permissions.Other
    }
    
    // 'visible' attribute on TileRef at Underwriter_MySummary.pcf: line 27, column 47
    function visible_4 () : java.lang.Boolean {
      return permissions.Activities
    }
    
    // 'visible' attribute on TileRef at Underwriter_MySummary.pcf: line 30, column 48
    function visible_7 () : java.lang.Boolean {
      return permissions.Submissions
    }
    
    override property get CurrentLocation () : pcf.Underwriter_MySummary {
      return super.CurrentLocation as pcf.Underwriter_MySummary
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