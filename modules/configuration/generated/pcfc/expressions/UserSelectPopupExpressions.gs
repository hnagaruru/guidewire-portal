package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/userselect/UserSelectPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserSelectPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/userselect/UserSelectPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserSelectPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.UserSelectPopup {
      return super.CurrentLocation as pcf.UserSelectPopup
    }
    
    
  }
  
  
}