package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/AccountSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/search/AccountSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (relatedToAccount :  Account) : int {
      return 1
    }
    
    // 'canVisit' attribute on Popup (id=AccountSearchPopup) at AccountSearchPopup.pcf: line 9, column 65
    static function canVisit_2 (relatedToAccount :  Account) : java.lang.Boolean {
      return perm.System.searchaccounts
    }
    
    // 'def' attribute on ScreenRef at AccountSearchPopup.pcf: line 18, column 52
    function def_onEnter_0 (def :  pcf.AccountSearchScreen) : void {
      def.onEnter(relatedToAccount)
    }
    
    // 'def' attribute on ScreenRef at AccountSearchPopup.pcf: line 18, column 52
    function def_refreshVariables_1 (def :  pcf.AccountSearchScreen) : void {
      def.refreshVariables(relatedToAccount)
    }
    
    override property get CurrentLocation () : pcf.AccountSearchPopup {
      return super.CurrentLocation as pcf.AccountSearchPopup
    }
    
    property get relatedToAccount () : Account {
      return getVariableValue("relatedToAccount", 0) as Account
    }
    
    property set relatedToAccount ($arg :  Account) {
      setVariableValue("relatedToAccount", 0, $arg)
    }
    
    
  }
  
  
}