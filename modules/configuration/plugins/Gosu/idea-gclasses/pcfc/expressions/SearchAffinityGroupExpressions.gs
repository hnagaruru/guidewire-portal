package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/affinitygroup/SearchAffinityGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SearchAffinityGroupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/SearchAffinityGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchAffinityGroupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=SearchAffinityGroup) at SearchAffinityGroup.pcf: line 12, column 71
    function afterCancel_2 () : void {
      Admin.go()
    }
    
    // 'afterCancel' attribute on Page (id=SearchAffinityGroup) at SearchAffinityGroup.pcf: line 12, column 71
    function afterCancel_dest_3 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'def' attribute on ScreenRef at SearchAffinityGroup.pcf: line 16, column 42
    function def_onEnter_0 (def :  pcf.AffinityGroupSearchScreen) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at SearchAffinityGroup.pcf: line 16, column 42
    function def_refreshVariables_1 (def :  pcf.AffinityGroupSearchScreen) : void {
      def.refreshVariables()
    }
    
    // 'parent' attribute on Page (id=SearchAffinityGroup) at SearchAffinityGroup.pcf: line 12, column 71
    static function parent_4 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    override property get CurrentLocation () : pcf.SearchAffinityGroup {
      return super.CurrentLocation as pcf.SearchAffinityGroup
    }
    
    
  }
  
  
}