package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedOverviewDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FederatedOverviewDetailViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary.federated/FederatedOverviewDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FederatedOverviewDetailViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PerformanceIndicator (id=Submissions) at FederatedOverviewDetailViewTile.pcf: line 39, column 43
    function action_14 () : void {
      DesktopSubmissions.push()
    }
    
    // 'action' attribute on PerformanceIndicator (id=ChangeRequests) at FederatedOverviewDetailViewTile.pcf: line 49, column 37
    function action_21 () : void {
      DesktopOtherWorkOrders.push()
    }
    
    // 'action' attribute on PerformanceIndicator (id=Renewals) at FederatedOverviewDetailViewTile.pcf: line 59, column 40
    function action_28 () : void {
      DesktopRenewals.push()
    }
    
    // 'action' attribute on PerformanceIndicator (id=Cancellations) at FederatedOverviewDetailViewTile.pcf: line 69, column 37
    function action_35 () : void {
      DesktopOtherWorkOrders.push()
    }
    
    // 'action' attribute on PerformanceIndicator (id=Activities) at FederatedOverviewDetailViewTile.pcf: line 29, column 42
    function action_7 () : void {
      DesktopActivities.push()
    }
    
    // 'action' attribute on PerformanceIndicator (id=Submissions) at FederatedOverviewDetailViewTile.pcf: line 39, column 43
    function action_dest_15 () : pcf.api.Destination {
      return pcf.DesktopSubmissions.createDestination()
    }
    
    // 'action' attribute on PerformanceIndicator (id=ChangeRequests) at FederatedOverviewDetailViewTile.pcf: line 49, column 37
    function action_dest_22 () : pcf.api.Destination {
      return pcf.DesktopOtherWorkOrders.createDestination()
    }
    
    // 'action' attribute on PerformanceIndicator (id=Renewals) at FederatedOverviewDetailViewTile.pcf: line 59, column 40
    function action_dest_29 () : pcf.api.Destination {
      return pcf.DesktopRenewals.createDestination()
    }
    
    // 'action' attribute on PerformanceIndicator (id=Cancellations) at FederatedOverviewDetailViewTile.pcf: line 69, column 37
    function action_dest_36 () : pcf.api.Destination {
      return pcf.DesktopOtherWorkOrders.createDestination()
    }
    
    // 'action' attribute on PerformanceIndicator (id=Activities) at FederatedOverviewDetailViewTile.pcf: line 29, column 42
    function action_dest_8 () : pcf.api.Destination {
      return pcf.DesktopActivities.createDestination()
    }
    
    // 'backgroundColor' attribute on PerformanceIndicator (id=Submissions) at FederatedOverviewDetailViewTile.pcf: line 39, column 43
    function backgroundColor_10 () : gw.api.web.color.GWColor {
      return helper.SubmissionsBadgeColor
    }
    
    // 'backgroundColor' attribute on PerformanceIndicator (id=ChangeRequests) at FederatedOverviewDetailViewTile.pcf: line 49, column 37
    function backgroundColor_17 () : gw.api.web.color.GWColor {
      return helper.ChangeRequestsBadgeColor
    }
    
    // 'backgroundColor' attribute on PerformanceIndicator (id=Renewals) at FederatedOverviewDetailViewTile.pcf: line 59, column 40
    function backgroundColor_24 () : gw.api.web.color.GWColor {
      return helper.RenewalsBadgeColor
    }
    
    // 'backgroundColor' attribute on PerformanceIndicator (id=Activities) at FederatedOverviewDetailViewTile.pcf: line 29, column 42
    function backgroundColor_3 () : gw.api.web.color.GWColor {
      return helper.ActivitiesBadgeColor
    }
    
    // 'backgroundColor' attribute on PerformanceIndicator (id=Cancellations) at FederatedOverviewDetailViewTile.pcf: line 69, column 37
    function backgroundColor_31 () : gw.api.web.color.GWColor {
      return helper.CancellationsBadgeColor
    }
    
    // 'initialValue' attribute on Variable at FederatedOverviewDetailViewTile.pcf: line 16, column 66
    function initialValue_0 () : gw.api.web.desktop.data.FederatedDataSummaryHelper {
      return new gw.api.web.desktop.data.FederatedDataSummaryHelper(user)
    }
    
    // 'initialValue' attribute on Variable at FederatedOverviewDetailViewTile.pcf: line 20, column 94
    function initialValue_1 () : gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions {
      return gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions.Instance
    }
    
    // 'label' attribute on PerformanceIndicator (id=Submissions) at FederatedOverviewDetailViewTile.pcf: line 39, column 43
    function label_13 () : java.lang.String {
      return helper.SubmissionsLabel
    }
    
    // 'label' attribute on PerformanceIndicator (id=ChangeRequests) at FederatedOverviewDetailViewTile.pcf: line 49, column 37
    function label_20 () : java.lang.String {
      return helper.ChangeRequestsLabel
    }
    
    // 'label' attribute on PerformanceIndicator (id=Renewals) at FederatedOverviewDetailViewTile.pcf: line 59, column 40
    function label_27 () : java.lang.String {
      return helper.RenewalsLabel
    }
    
    // 'label' attribute on PerformanceIndicator (id=Cancellations) at FederatedOverviewDetailViewTile.pcf: line 69, column 37
    function label_34 () : java.lang.String {
      return helper.CancellationsLabel
    }
    
    // 'label' attribute on PerformanceIndicator (id=Activities) at FederatedOverviewDetailViewTile.pcf: line 29, column 42
    function label_6 () : java.lang.String {
      return helper.ActivitiesLabel
    }
    
    // 'text' attribute on PerformanceIndicator (id=ChangeRequests) at FederatedOverviewDetailViewTile.pcf: line 49, column 37
    function text_16 () : java.lang.String {
      return helper.ChangeRequestsOverdueLabel
    }
    
    // 'text' attribute on PerformanceIndicator (id=Activities) at FederatedOverviewDetailViewTile.pcf: line 29, column 42
    function text_2 () : java.lang.String {
      return helper.ActivitiesOverdueLabel
    }
    
    // 'text' attribute on PerformanceIndicator (id=Renewals) at FederatedOverviewDetailViewTile.pcf: line 59, column 40
    function text_23 () : java.lang.String {
      return helper.RenewalsOverdueLabel
    }
    
    // 'text' attribute on PerformanceIndicator (id=Cancellations) at FederatedOverviewDetailViewTile.pcf: line 69, column 37
    function text_30 () : java.lang.String {
      return helper.CancellationsOverdueLabel
    }
    
    // 'text' attribute on PerformanceIndicator (id=Submissions) at FederatedOverviewDetailViewTile.pcf: line 39, column 43
    function text_9 () : java.lang.String {
      return helper.SubmissionsOverdueLabel
    }
    
    // 'value' attribute on PerformanceIndicator (id=Submissions) at FederatedOverviewDetailViewTile.pcf: line 39, column 43
    function value_12 () : java.lang.Number {
      return helper.SubmissionsCount
    }
    
    // 'value' attribute on PerformanceIndicator (id=ChangeRequests) at FederatedOverviewDetailViewTile.pcf: line 49, column 37
    function value_19 () : java.lang.Number {
      return helper.ChangeRequestsCount
    }
    
    // 'value' attribute on PerformanceIndicator (id=Renewals) at FederatedOverviewDetailViewTile.pcf: line 59, column 40
    function value_26 () : java.lang.Number {
      return helper.RenewalsCount
    }
    
    // 'value' attribute on PerformanceIndicator (id=Cancellations) at FederatedOverviewDetailViewTile.pcf: line 69, column 37
    function value_33 () : java.lang.Number {
      return helper.CancellationsCount
    }
    
    // 'value' attribute on PerformanceIndicator (id=Activities) at FederatedOverviewDetailViewTile.pcf: line 29, column 42
    function value_5 () : int {
      return helper.ActivitiesCount
    }
    
    // 'visible' attribute on PerformanceIndicator (id=Submissions) at FederatedOverviewDetailViewTile.pcf: line 39, column 43
    function visible_11 () : java.lang.Boolean {
      return permissions.Submissions
    }
    
    // 'visible' attribute on PerformanceIndicator (id=ChangeRequests) at FederatedOverviewDetailViewTile.pcf: line 49, column 37
    function visible_18 () : java.lang.Boolean {
      return permissions.Other
    }
    
    // 'visible' attribute on PerformanceIndicator (id=Renewals) at FederatedOverviewDetailViewTile.pcf: line 59, column 40
    function visible_25 () : java.lang.Boolean {
      return permissions.Renewals
    }
    
    // 'visible' attribute on PerformanceIndicator (id=Activities) at FederatedOverviewDetailViewTile.pcf: line 29, column 42
    function visible_4 () : java.lang.Boolean {
      return permissions.Activities
    }
    
    property get helper () : gw.api.web.desktop.data.FederatedDataSummaryHelper {
      return getVariableValue("helper", 0) as gw.api.web.desktop.data.FederatedDataSummaryHelper
    }
    
    property set helper ($arg :  gw.api.web.desktop.data.FederatedDataSummaryHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get permissions () : gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions {
      return getVariableValue("permissions", 0) as gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions
    }
    
    property set permissions ($arg :  gw.api.web.dashboard.ui.underwriter.UnderwriterDashboardParameters.Permissions) {
      setVariableValue("permissions", 0, $arg)
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}