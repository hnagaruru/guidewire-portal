package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/BizRules.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BizRulesExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/BizRules.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BizRulesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=BizRules) at BizRules.pcf: line 10, column 29
    function action_0 () : void {
      pcf.UWRules.go()
    }
    
    // 'location' attribute on LocationGroup (id=BizRules) at BizRules.pcf: line 12, column 50
    function action_2 () : void {
      pcf.PCBizRulesExportImportStatus.go()
    }
    
    // 'location' attribute on LocationGroup (id=BizRules) at BizRules.pcf: line 14, column 32
    function action_4 () : void {
      pcf.LookupPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=BizRules) at BizRules.pcf: line 10, column 29
    function action_dest_1 () : pcf.api.Destination {
      return pcf.UWRules.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=BizRules) at BizRules.pcf: line 12, column 50
    function action_dest_3 () : pcf.api.Destination {
      return pcf.PCBizRulesExportImportStatus.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=BizRules) at BizRules.pcf: line 14, column 32
    function action_dest_5 () : pcf.api.Destination {
      return pcf.LookupPage.createDestination()
    }
    
    // 'canVisit' attribute on LocationGroup (id=BizRules) at BizRules.pcf: line 8, column 53
    static function canVisit_6 () : java.lang.Boolean {
      return gw.bizrules.system.BizRulesConfigParameters.BizRulesEnabled.Value
    }
    
    // LocationGroup (id=BizRules) at BizRules.pcf: line 8, column 53
    static function firstVisitableChildDestinationMethod_10 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.UWRules.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PCBizRulesExportImportStatus.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.LookupPage.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // LocationGroup (id=BizRules) at BizRules.pcf: line 8, column 53
    static function parent_7 () : pcf.api.Destination {
      return pcf.BusinessSettings.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=BizRules) at BizRules.pcf: line 8, column 53
    function tabBar_onEnter_8 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=BizRules) at BizRules.pcf: line 8, column 53
    function tabBar_refreshVariables_9 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.BizRules {
      return super.CurrentLocation as pcf.BizRules
    }
    
    
  }
  
  
}