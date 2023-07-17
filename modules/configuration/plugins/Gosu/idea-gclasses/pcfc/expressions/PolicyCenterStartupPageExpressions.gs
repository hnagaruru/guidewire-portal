package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/PolicyCenterStartupPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyCenterStartupPageExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/PolicyCenterStartupPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyCenterStartupPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 31, column 77
    function action_11 () : void {
      DesktopOtherWorkOrders.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 34, column 68
    function action_14 () : void {
      DesktopAssignableQueues.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 37, column 61
    function action_17 () : void {
      Search.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 22, column 72
    function action_2 () : void {
      DesktopActivities.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 40, column 60
    function action_20 () : void {
      Admin.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 43, column 52
    function action_23 () : void {
      Underwriter_MySummary.go(userBase)
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 45, column 40
    function action_25 () : void {
      DesktopActivities.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 47, column 41
    function action_27 () : void {
      DesktopSubmissions.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 49, column 38
    function action_29 () : void {
      DesktopRenewals.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 51, column 45
    function action_31 () : void {
      DesktopOtherWorkOrders.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 53, column 46
    function action_33 () : void {
      DesktopAssignableQueues.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 55, column 34
    function action_35 () : void {
      TeamForward.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 57, column 29
    function action_37 () : void {
      Search.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 59, column 28
    function action_39 () : void {
      Admin.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 62, column 39
    function action_41 () : void {
      StartupPageError.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 25, column 73
    function action_5 () : void {
      DesktopSubmissions.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 28, column 70
    function action_8 () : void {
      DesktopRenewals.go()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 31, column 77
    function action_dest_12 () : pcf.api.Destination {
      return pcf.DesktopOtherWorkOrders.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 34, column 68
    function action_dest_15 () : pcf.api.Destination {
      return pcf.DesktopAssignableQueues.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 37, column 61
    function action_dest_18 () : pcf.api.Destination {
      return pcf.Search.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 40, column 60
    function action_dest_21 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 43, column 52
    function action_dest_24 () : pcf.api.Destination {
      return pcf.Underwriter_MySummary.createDestination(userBase)
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 45, column 40
    function action_dest_26 () : pcf.api.Destination {
      return pcf.DesktopActivities.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 47, column 41
    function action_dest_28 () : pcf.api.Destination {
      return pcf.DesktopSubmissions.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 22, column 72
    function action_dest_3 () : pcf.api.Destination {
      return pcf.DesktopActivities.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 49, column 38
    function action_dest_30 () : pcf.api.Destination {
      return pcf.DesktopRenewals.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 51, column 45
    function action_dest_32 () : pcf.api.Destination {
      return pcf.DesktopOtherWorkOrders.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 53, column 46
    function action_dest_34 () : pcf.api.Destination {
      return pcf.DesktopAssignableQueues.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 55, column 34
    function action_dest_36 () : pcf.api.Destination {
      return pcf.TeamForward.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 57, column 29
    function action_dest_38 () : pcf.api.Destination {
      return pcf.Search.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 59, column 28
    function action_dest_40 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 62, column 39
    function action_dest_42 () : pcf.api.Destination {
      return pcf.StartupPageError.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 25, column 73
    function action_dest_6 () : pcf.api.Destination {
      return pcf.DesktopSubmissions.createDestination()
    }
    
    // 'action' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 28, column 70
    function action_dest_9 () : pcf.api.Destination {
      return pcf.DesktopRenewals.createDestination()
    }
    
    // 'condition' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 28, column 70
    function condition_10 () : java.lang.Boolean {
      return userPreferences.StartupPage == TC_DESKTOPRENEWALS
    }
    
    // 'condition' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 31, column 77
    function condition_13 () : java.lang.Boolean {
      return userPreferences.StartupPage == TC_DESKTOPOTHERWORKORDERS
    }
    
    // 'condition' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 34, column 68
    function condition_16 () : java.lang.Boolean {
      return userPreferences.StartupPage == TC_DESKTOPQUEUES
    }
    
    // 'condition' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 37, column 61
    function condition_19 () : java.lang.Boolean {
      return userPreferences.StartupPage == TC_SEARCH
    }
    
    // 'condition' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 40, column 60
    function condition_22 () : java.lang.Boolean {
      return userPreferences.StartupPage == TC_ADMIN
    }
    
    // 'condition' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 22, column 72
    function condition_4 () : java.lang.Boolean {
      return userPreferences.StartupPage == TC_DESKTOPACTIVITIES
    }
    
    // 'condition' attribute on ForwardCondition at PolicyCenterStartupPage.pcf: line 25, column 73
    function condition_7 () : java.lang.Boolean {
      return userPreferences.StartupPage == TC_DESKTOPSUBMISSIONS
    }
    
    // 'initialValue' attribute on Variable at PolicyCenterStartupPage.pcf: line 13, column 27
    function initialValue_0 () : entity.User {
      return User.util.CurrentUser
    }
    
    // 'initialValue' attribute on Variable at PolicyCenterStartupPage.pcf: line 18, column 70
    function initialValue_1 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    override property get CurrentLocation () : pcf.PolicyCenterStartupPage {
      return super.CurrentLocation as pcf.PolicyCenterStartupPage
    }
    
    property get userBase () : entity.User {
      return getVariableValue("userBase", 0) as entity.User
    }
    
    property set userBase ($arg :  entity.User) {
      setVariableValue("userBase", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
  }
  
  
}