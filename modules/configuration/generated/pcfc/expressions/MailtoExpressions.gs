package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/Mailto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MailtoExpressions {
  @javax.annotation.Generated("config/web/pcf/exitpoints/Mailto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MailtoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (email :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.Mailto {
      return super.CurrentLocation as pcf.Mailto
    }
    
    property get email () : String {
      return getVariableValue("email", 0) as String
    }
    
    property set email ($arg :  String) {
      setVariableValue("email", 0, $arg)
    }
    
    
  }
  
  
}