package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/businesssettings/BusinessSettings.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BusinessSettingsExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/businesssettings/BusinessSettings.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BusinessSettingsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 9, column 38
    function action_0 () : void {
      pcf.ActivityPatterns.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 13, column 30
    function action_10 () : void {
      pcf.BizRules.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 15, column 34
    function action_12 () : void {
      pcf.FormPatterns.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 17, column 33
    function action_14 () : void {
      pcf.PolicyHolds.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 11, column 30
    function action_2 () : void {
      pcf.Holidays.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 9, column 38
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ActivityPatterns.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 13, column 30
    function action_dest_11 () : pcf.api.Destination {
      return pcf.BizRules.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 15, column 34
    function action_dest_13 () : pcf.api.Destination {
      return pcf.FormPatterns.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 17, column 33
    function action_dest_15 () : pcf.api.Destination {
      return pcf.PolicyHolds.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 11, column 30
    function action_dest_3 () : pcf.api.Destination {
      return pcf.Holidays.createDestination()
    }
    
    // LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 7, column 68
    static function firstVisitableChildDestinationMethod_19 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.ActivityPatterns.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.Holidays.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.BizRules.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.FormPatterns.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.PolicyHolds.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 7, column 68
    static function parent_16 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 7, column 68
    function tabBar_onEnter_17 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=BusinessSettings) at BusinessSettings.pcf: line 7, column 68
    function tabBar_refreshVariables_18 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.BusinessSettings {
      return super.CurrentLocation as pcf.BusinessSettings
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/businesssettings/BusinessSettings.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem2ExpressionsImpl extends BusinessSettingsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BizRules.pcf: line 10, column 29
    function action_4 () : void {
      pcf.UWRules.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BizRules.pcf: line 12, column 50
    function action_6 () : void {
      pcf.PCBizRulesExportImportStatus.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BizRules.pcf: line 14, column 32
    function action_8 () : void {
      pcf.LookupPage.go()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BizRules.pcf: line 10, column 29
    function action_dest_5 () : pcf.api.Destination {
      return pcf.UWRules.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BizRules.pcf: line 12, column 50
    function action_dest_7 () : pcf.api.Destination {
      return pcf.PCBizRulesExportImportStatus.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=BusinessSettings) at BizRules.pcf: line 14, column 32
    function action_dest_9 () : pcf.api.Destination {
      return pcf.LookupPage.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/businesssettings/BusinessSettings.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItemExpressionsImpl extends BusinessSettingsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  
}