package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/Policy_CurrentPoliciesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Policy_CurrentPoliciesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/Policy_CurrentPoliciesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy_CurrentPoliciesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef (id=CurrentPoliciesScreen) at Policy_CurrentPoliciesPopup.pcf: line 15, column 35
    function def_onEnter_0 (def :  pcf.Policy_CurrentPoliciesScreen) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on ScreenRef (id=CurrentPoliciesScreen) at Policy_CurrentPoliciesPopup.pcf: line 15, column 35
    function def_refreshVariables_1 (def :  pcf.Policy_CurrentPoliciesScreen) : void {
      def.refreshVariables(account)
    }
    
    override property get CurrentLocation () : pcf.Policy_CurrentPoliciesPopup {
      return super.CurrentLocation as pcf.Policy_CurrentPoliciesPopup
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    
  }
  
  
}