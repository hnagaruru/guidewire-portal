package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/NewActivityPattern.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewActivityPatternExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/NewActivityPattern.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewActivityPatternExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=NewActivityPattern) at NewActivityPattern.pcf: line 13, column 70
    function afterCancel_3 () : void {
      ActivityPatterns.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewActivityPattern) at NewActivityPattern.pcf: line 13, column 70
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.ActivityPatterns.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewActivityPattern) at NewActivityPattern.pcf: line 13, column 70
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      ActivityPatterns.go()
    }
    
    // 'def' attribute on ScreenRef at NewActivityPattern.pcf: line 21, column 59
    function def_onEnter_1 (def :  pcf.ActivityPatternDetailScreen) : void {
      def.onEnter(activityPattern)
    }
    
    // 'def' attribute on ScreenRef at NewActivityPattern.pcf: line 21, column 59
    function def_refreshVariables_2 (def :  pcf.ActivityPatternDetailScreen) : void {
      def.refreshVariables(activityPattern)
    }
    
    // 'initialValue' attribute on Variable at NewActivityPattern.pcf: line 19, column 31
    function initialValue_0 () : ActivityPattern {
      return new ActivityPattern()
    }
    
    // 'parent' attribute on Page (id=NewActivityPattern) at NewActivityPattern.pcf: line 13, column 70
    static function parent_6 () : pcf.api.Destination {
      return pcf.ActivityPatterns.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewActivityPattern {
      return super.CurrentLocation as pcf.NewActivityPattern
    }
    
    property get activityPattern () : ActivityPattern {
      return getVariableValue("activityPattern", 0) as ActivityPattern
    }
    
    property set activityPattern ($arg :  ActivityPattern) {
      setVariableValue("activityPattern", 0, $arg)
    }
    
    
  }
  
  
}