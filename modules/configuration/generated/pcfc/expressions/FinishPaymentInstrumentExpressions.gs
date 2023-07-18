package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/FinishPaymentInstrument.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FinishPaymentInstrumentExpressions {
  @javax.annotation.Generated("config/web/pcf/exitpoints/FinishPaymentInstrument.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinishPaymentInstrumentExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyCenterURL :  String, jobNumber :  String, accountNumber :  String, paymentMethod :  String, token :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.FinishPaymentInstrument {
      return super.CurrentLocation as pcf.FinishPaymentInstrument
    }
    
    property get accountNumber () : String {
      return getVariableValue("accountNumber", 0) as String
    }
    
    property set accountNumber ($arg :  String) {
      setVariableValue("accountNumber", 0, $arg)
    }
    
    property get jobNumber () : String {
      return getVariableValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setVariableValue("jobNumber", 0, $arg)
    }
    
    property get paymentMethod () : String {
      return getVariableValue("paymentMethod", 0) as String
    }
    
    property set paymentMethod ($arg :  String) {
      setVariableValue("paymentMethod", 0, $arg)
    }
    
    property get policyCenterURL () : String {
      return getVariableValue("policyCenterURL", 0) as String
    }
    
    property set policyCenterURL ($arg :  String) {
      setVariableValue("policyCenterURL", 0, $arg)
    }
    
    property get token () : String {
      return getVariableValue("token", 0) as String
    }
    
    property set token ($arg :  String) {
      setVariableValue("token", 0, $arg)
    }
    
    
  }
  
  
}