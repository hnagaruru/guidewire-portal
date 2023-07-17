package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/Reinsurance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReinsuranceExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/Reinsurance.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReinsuranceExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=Reinsurance) at Reinsurance.pcf: line 12, column 41
    function action_0 () : void {
      pcf.AgreementSearchPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Reinsurance) at Reinsurance.pcf: line 15, column 39
    function action_2 () : void {
      pcf.ProgramSearchPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=Reinsurance) at Reinsurance.pcf: line 12, column 41
    function action_dest_1 () : pcf.api.Destination {
      return pcf.AgreementSearchPage.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Reinsurance) at Reinsurance.pcf: line 15, column 39
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ProgramSearchPage.createDestination()
    }
    
    // 'canVisit' attribute on LocationGroup (id=Reinsurance) at Reinsurance.pcf: line 9, column 64
    static function canVisit_4 () : java.lang.Boolean {
      return perm.System.viewreinsuranceprogram
    }
    
    // LocationGroup (id=Reinsurance) at Reinsurance.pcf: line 9, column 64
    static function firstVisitableChildDestinationMethod_9 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.AgreementSearchPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ProgramSearchPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'menuActions' attribute on LocationGroup (id=Reinsurance) at Reinsurance.pcf: line 9, column 64
    function menuActions_onEnter_5 (def :  pcf.ReinsuranceMenuActions) : void {
      def.onEnter()
    }
    
    // 'menuActions' attribute on LocationGroup (id=Reinsurance) at Reinsurance.pcf: line 9, column 64
    function menuActions_refreshVariables_6 (def :  pcf.ReinsuranceMenuActions) : void {
      def.refreshVariables()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Reinsurance) at Reinsurance.pcf: line 9, column 64
    function tabBar_onEnter_7 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Reinsurance) at Reinsurance.pcf: line 9, column 64
    function tabBar_refreshVariables_8 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.Reinsurance {
      return super.CurrentLocation as pcf.Reinsurance
    }
    
    
  }
  
  
}