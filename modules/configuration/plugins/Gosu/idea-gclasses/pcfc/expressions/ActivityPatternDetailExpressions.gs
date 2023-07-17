package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/ActivityPatternDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityPatternDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/ActivityPatternDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityPatternDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (activityPattern :  ActivityPattern) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at ActivityPatternDetail.pcf: line 17, column 59
    function def_onEnter_0 (def :  pcf.ActivityPatternDetailScreen) : void {
      def.onEnter(activityPattern)
    }
    
    // 'def' attribute on ScreenRef at ActivityPatternDetail.pcf: line 17, column 59
    function def_refreshVariables_1 (def :  pcf.ActivityPatternDetailScreen) : void {
      def.refreshVariables(activityPattern)
    }
    
    // 'parent' attribute on Page (id=ActivityPatternDetail) at ActivityPatternDetail.pcf: line 10, column 98
    static function parent_2 (activityPattern :  ActivityPattern) : pcf.api.Destination {
      return pcf.ActivityPatterns.createDestination()
    }
    
    // 'title' attribute on Page (id=ActivityPatternDetail) at ActivityPatternDetail.pcf: line 10, column 98
    static function title_3 (activityPattern :  ActivityPattern) : java.lang.Object {
      return DisplayKey.get("Web.Admin.ActivityPatternDetail", activityPattern.Subject)
    }
    
    override property get CurrentLocation () : pcf.ActivityPatternDetail {
      return super.CurrentLocation as pcf.ActivityPatternDetail
    }
    
    property get activityPattern () : ActivityPattern {
      return getVariableValue("activityPattern", 0) as ActivityPattern
    }
    
    property set activityPattern ($arg :  ActivityPattern) {
      setVariableValue("activityPattern", 0, $arg)
    }
    
    
  }
  
  
}