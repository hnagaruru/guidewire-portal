package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/ActivityPatternDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityPatternDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/ActivityPatternDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityPatternDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityPatternDetailScreen_DeleteButton) at ActivityPatternDetailScreen.pcf: line 17, column 23
    function action_1 () : void {
      gw.api.admin.BaseAdminUtil.deleteActivityPattern(activityPattern); ActivityPatterns.go()
    }
    
    // 'def' attribute on PanelRef at ActivityPatternDetailScreen.pcf: line 20, column 55
    function def_onEnter_2 (def :  pcf.ActivityPatternDetailDV) : void {
      def.onEnter(activityPattern)
    }
    
    // 'def' attribute on PanelRef at ActivityPatternDetailScreen.pcf: line 22, column 355
    function def_onEnter_4 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(activityPattern, { "Subject", "ShortSubject", "Description"}, { DisplayKey.get("Web.Admin.ActivityPatternLocalizedLV.Subject"), DisplayKey.get("Web.Admin.ActivityPatternDetailDV.ShortSubject"), DisplayKey.get("Web.Admin.ActivityPatternLocalizedLV.Description")})
    }
    
    // 'def' attribute on PanelRef at ActivityPatternDetailScreen.pcf: line 20, column 55
    function def_refreshVariables_3 (def :  pcf.ActivityPatternDetailDV) : void {
      def.refreshVariables(activityPattern)
    }
    
    // 'def' attribute on PanelRef at ActivityPatternDetailScreen.pcf: line 22, column 355
    function def_refreshVariables_5 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(activityPattern, { "Subject", "ShortSubject", "Description"}, { DisplayKey.get("Web.Admin.ActivityPatternLocalizedLV.Subject"), DisplayKey.get("Web.Admin.ActivityPatternDetailDV.ShortSubject"), DisplayKey.get("Web.Admin.ActivityPatternLocalizedLV.Description")})
    }
    
    // EditButtons at ActivityPatternDetailScreen.pcf: line 11, column 21
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    property get activityPattern () : ActivityPattern {
      return getRequireValue("activityPattern", 0) as ActivityPattern
    }
    
    property set activityPattern ($arg :  ActivityPattern) {
      setRequireValue("activityPattern", 0, $arg)
    }
    
    
  }
  
  
}