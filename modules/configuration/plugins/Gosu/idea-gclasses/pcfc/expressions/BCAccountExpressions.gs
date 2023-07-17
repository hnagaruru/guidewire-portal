package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/BCAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BCAccountExpressions {
  @javax.annotation.Generated("config/web/pcf/exitpoints/BCAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BCAccountExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (billingSystemURL :  String, accountNumber :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.BCAccount {
      return super.CurrentLocation as pcf.BCAccount
    }
    
    property get accountNumber () : String {
      return getVariableValue("accountNumber", 0) as String
    }
    
    property set accountNumber ($arg :  String) {
      setVariableValue("accountNumber", 0, $arg)
    }
    
    property get billingSystemURL () : String {
      return getVariableValue("billingSystemURL", 0) as String
    }
    
    property set billingSystemURL ($arg :  String) {
      setVariableValue("billingSystemURL", 0, $arg)
    }
    
    
  }
  
  
}