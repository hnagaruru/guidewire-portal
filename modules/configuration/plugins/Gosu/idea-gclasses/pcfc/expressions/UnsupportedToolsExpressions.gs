package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/UnsupportedTools.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UnsupportedToolsExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/UnsupportedTools.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UnsupportedToolsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 12, column 28
    function action_0 () : void {
      pcf.Reload.go()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 22, column 29
    function action_10 () : void {
      pcf.PCPurge.go()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 24, column 45
    function action_12 () : void {
      pcf.PersonalDataDestruction.go()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 26, column 32
    function action_14 () : void {
      pcf.SolrSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 14, column 39
    function action_2 () : void {
      pcf.ServerPerformance.go()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 16, column 33
    function action_4 () : void {
      pcf.SystemClock.go()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 18, column 34
    function action_6 () : void {
      pcf.PCSampleData.go()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 20, column 31
    function action_8 () : void {
      pcf.PCArchive.go()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 12, column 28
    function action_dest_1 () : pcf.api.Destination {
      return pcf.Reload.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 22, column 29
    function action_dest_11 () : pcf.api.Destination {
      return pcf.PCPurge.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 24, column 45
    function action_dest_13 () : pcf.api.Destination {
      return pcf.PersonalDataDestruction.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 26, column 32
    function action_dest_15 () : pcf.api.Destination {
      return pcf.SolrSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 14, column 39
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ServerPerformance.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 16, column 33
    function action_dest_5 () : pcf.api.Destination {
      return pcf.SystemClock.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 18, column 34
    function action_dest_7 () : pcf.api.Destination {
      return pcf.PCSampleData.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 20, column 31
    function action_dest_9 () : pcf.api.Destination {
      return pcf.PCArchive.createDestination()
    }
    
    // 'canVisit' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 10, column 26
    static function canVisit_16 () : java.lang.Boolean {
      return gw.api.tools.InternalTools.isEnabled()
    }
    
    // LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 10, column 26
    static function firstVisitableChildDestinationMethod_21 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.Reload.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ServerPerformance.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.SystemClock.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PCSampleData.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PCArchive.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PCPurge.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PersonalDataDestruction.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.SolrSearch.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'menuActions' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 10, column 26
    function menuActions_onEnter_17 (def :  pcf.InternalToolsMenuActions) : void {
      def.onEnter()
    }
    
    // 'menuActions' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 10, column 26
    function menuActions_refreshVariables_18 (def :  pcf.InternalToolsMenuActions) : void {
      def.refreshVariables()
    }
    
    // 'tabBar' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 10, column 26
    function tabBar_onEnter_19 (def :  pcf.InternalToolsTabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=UnsupportedTools) at UnsupportedTools.pcf: line 10, column 26
    function tabBar_refreshVariables_20 (def :  pcf.InternalToolsTabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.UnsupportedTools {
      return super.CurrentLocation as pcf.UnsupportedTools
    }
    
    
  }
  
  
}