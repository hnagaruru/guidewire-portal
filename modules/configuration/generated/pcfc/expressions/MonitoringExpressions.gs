package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/monitoring/Monitoring.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MonitoringExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/monitoring/Monitoring.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MonitoringExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 9, column 35
    function action_0 () : void {
      pcf.MessageSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 11, column 53
    function action_2 () : void {
      pcf.MessagingDestinationControlList.go()
    }
    
    // 'location' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 13, column 36
    function action_4 () : void {
      pcf.WorkflowSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 15, column 35
    function action_6 () : void {
      pcf.WorkflowStats.go()
    }
    
    // 'location' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 9, column 35
    function action_dest_1 () : pcf.api.Destination {
      return pcf.MessageSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 11, column 53
    function action_dest_3 () : pcf.api.Destination {
      return pcf.MessagingDestinationControlList.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 13, column 36
    function action_dest_5 () : pcf.api.Destination {
      return pcf.WorkflowSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 15, column 35
    function action_dest_7 () : pcf.api.Destination {
      return pcf.WorkflowStats.createDestination()
    }
    
    // LocationGroup (id=Monitoring) at Monitoring.pcf: line 7, column 62
    static function firstVisitableChildDestinationMethod_11 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.MessageSearch.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.MessagingDestinationControlList.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.WorkflowSearch.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.WorkflowStats.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // LocationGroup (id=Monitoring) at Monitoring.pcf: line 7, column 62
    static function parent_8 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 7, column 62
    function tabBar_onEnter_9 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Monitoring) at Monitoring.pcf: line 7, column 62
    function tabBar_refreshVariables_10 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.Monitoring {
      return super.CurrentLocation as pcf.Monitoring
    }
    
    
  }
  
  
}