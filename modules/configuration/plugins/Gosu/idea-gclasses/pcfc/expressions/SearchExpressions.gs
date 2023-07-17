package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/Search.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SearchExpressions {
  @javax.annotation.Generated("config/web/pcf/search/Search.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=Search) at Search.pcf: line 13, column 34
    function action_0 () : void {
      pcf.PolicySearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Search) at Search.pcf: line 28, column 35
    function action_10 () : void {
      pcf.ContactSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Search) at Search.pcf: line 16, column 31
    function action_2 () : void {
      pcf.HVQSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Search) at Search.pcf: line 19, column 35
    function action_4 () : void {
      pcf.AccountSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Search) at Search.pcf: line 22, column 40
    function action_6 () : void {
      pcf.ProducerCodeSearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Search) at Search.pcf: line 25, column 36
    function action_8 () : void {
      pcf.ActivitySearch.go()
    }
    
    // 'location' attribute on LocationGroup (id=Search) at Search.pcf: line 13, column 34
    function action_dest_1 () : pcf.api.Destination {
      return pcf.PolicySearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Search) at Search.pcf: line 28, column 35
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ContactSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Search) at Search.pcf: line 16, column 31
    function action_dest_3 () : pcf.api.Destination {
      return pcf.HVQSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Search) at Search.pcf: line 19, column 35
    function action_dest_5 () : pcf.api.Destination {
      return pcf.AccountSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Search) at Search.pcf: line 22, column 40
    function action_dest_7 () : pcf.api.Destination {
      return pcf.ProducerCodeSearch.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Search) at Search.pcf: line 25, column 36
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ActivitySearch.createDestination()
    }
    
    // LocationGroup (id=Search) at Search.pcf: line 8, column 72
    static function firstVisitableChildDestinationMethod_14 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.PolicySearch.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.HVQSearch.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.AccountSearch.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ProducerCodeSearch.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ActivitySearch.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ContactSearch.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'tabBar' attribute on LocationGroup (id=Search) at Search.pcf: line 8, column 72
    function tabBar_onEnter_12 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Search) at Search.pcf: line 8, column 72
    function tabBar_refreshVariables_13 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.Search {
      return super.CurrentLocation as pcf.Search
    }
    
    
  }
  
  
}