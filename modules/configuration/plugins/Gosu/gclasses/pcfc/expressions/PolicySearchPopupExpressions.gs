package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/PolicySearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicySearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/search/PolicySearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicySearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Popup (id=PolicySearchPopup) at PolicySearchPopup.pcf: line 12, column 64
    static function canVisit_2 () : java.lang.Boolean {
      return perm.System.searchpols
    }
    
    // 'def' attribute on ScreenRef at PolicySearchPopup.pcf: line 14, column 35
    function def_onEnter_0 (def :  pcf.PolicySearchScreen) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at PolicySearchPopup.pcf: line 14, column 35
    function def_refreshVariables_1 (def :  pcf.PolicySearchScreen) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.PolicySearchPopup {
      return super.CurrentLocation as pcf.PolicySearchPopup
    }
    
    
  }
  
  
}