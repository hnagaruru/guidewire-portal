package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/Rating.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/Rating.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=Rating) at Rating.pcf: line 11, column 31
    function action_0 () : void {
      pcf.RateBooks.go()
    }
    
    // 'location' attribute on LocationGroup (id=Rating) at Rating.pcf: line 14, column 41
    function action_2 () : void {
      pcf.ImpactTestingWizard.go()
    }
    
    // 'location' attribute on LocationGroup (id=Rating) at Rating.pcf: line 17, column 42
    function action_4 () : void {
      pcf.RateTableDefinitions.go()
    }
    
    // 'location' attribute on LocationGroup (id=Rating) at Rating.pcf: line 20, column 34
    function action_6 () : void {
      pcf.RateRoutines.go()
    }
    
    // 'location' attribute on LocationGroup (id=Rating) at Rating.pcf: line 23, column 39
    function action_8 () : void {
      pcf.ParameterSetsPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Rating) at Rating.pcf: line 11, column 31
    function action_dest_1 () : pcf.api.Destination {
      return pcf.RateBooks.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Rating) at Rating.pcf: line 14, column 41
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ImpactTestingWizard.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Rating) at Rating.pcf: line 17, column 42
    function action_dest_5 () : pcf.api.Destination {
      return pcf.RateTableDefinitions.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Rating) at Rating.pcf: line 20, column 34
    function action_dest_7 () : pcf.api.Destination {
      return pcf.RateRoutines.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Rating) at Rating.pcf: line 23, column 39
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ParameterSetsPage.createDestination()
    }
    
    // 'canVisit' attribute on LocationGroup (id=Rating) at Rating.pcf: line 8, column 52
    static function canVisit_10 () : java.lang.Boolean {
      return perm.System.ratebookview and gw.api.system.PCConfigParameters.RatingModuleOn()
    }
    
    // LocationGroup (id=Rating) at Rating.pcf: line 8, column 52
    static function firstVisitableChildDestinationMethod_14 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.RateBooks.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ImpactTestingWizard.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.RateTableDefinitions.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.RateRoutines.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ParameterSetsPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // LocationGroup (id=Rating) at Rating.pcf: line 8, column 52
    static function parent_11 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Rating) at Rating.pcf: line 8, column 52
    function tabBar_onEnter_12 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Rating) at Rating.pcf: line 8, column 52
    function tabBar_refreshVariables_13 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.Rating {
      return super.CurrentLocation as pcf.Rating
    }
    
    
  }
  
  
}