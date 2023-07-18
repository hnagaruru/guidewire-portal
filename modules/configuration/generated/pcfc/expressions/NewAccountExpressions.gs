package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/new/NewAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAccountExpressions {
  @javax.annotation.Generated("config/web/pcf/account/new/NewAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAccountExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=NewAccount) at NewAccount.pcf: line 12, column 66
    static function canVisit_2 () : java.lang.Boolean {
      return perm.Account.create
    }
    
    // 'def' attribute on ScreenRef at NewAccount.pcf: line 16, column 38
    function def_onEnter_0 (def :  pcf.NewAccountScreen) : void {
      def.onEnter(false)
    }
    
    // 'def' attribute on ScreenRef at NewAccount.pcf: line 16, column 38
    function def_refreshVariables_1 (def :  pcf.NewAccountScreen) : void {
      def.refreshVariables(false)
    }
    
    // 'parent' attribute on Page (id=NewAccount) at NewAccount.pcf: line 12, column 66
    static function parent_3 () : pcf.api.Destination {
      return pcf.AccountForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.NewAccount {
      return super.CurrentLocation as pcf.NewAccount
    }
    
    
  }
  
  
}