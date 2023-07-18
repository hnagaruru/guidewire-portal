package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopActivities.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopActivitiesExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopActivities.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopActivitiesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=DesktopActivities) at DesktopActivities.pcf: line 9, column 63
    static function canVisit_5 () : java.lang.Boolean {
      return perm.System.viewmyactivities
    }
    
    // 'def' attribute on ScreenRef at DesktopActivities.pcf: line 14, column 68
    function def_onEnter_0 (def :  pcf.DesktopActivitiesScreen_default) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at DesktopActivities.pcf: line 14, column 68
    function def_onEnter_2 (def :  pcf.DesktopActivitiesScreen_federated) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at DesktopActivities.pcf: line 14, column 68
    function def_refreshVariables_1 (def :  pcf.DesktopActivitiesScreen_default) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on ScreenRef at DesktopActivities.pcf: line 14, column 68
    function def_refreshVariables_3 (def :  pcf.DesktopActivitiesScreen_federated) : void {
      def.refreshVariables()
    }
    
    // 'mode' attribute on ScreenRef at DesktopActivities.pcf: line 14, column 68
    function mode_4 () : java.lang.Object {
      return gw.api.web.desktop.data.FederatedDataUIHelper.mode()
    }
    
    // Page (id=DesktopActivities) at DesktopActivities.pcf: line 9, column 63
    static function parent_6 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    override property get CurrentLocation () : pcf.DesktopActivities {
      return super.CurrentLocation as pcf.DesktopActivities
    }
    
    
  }
  
  
}