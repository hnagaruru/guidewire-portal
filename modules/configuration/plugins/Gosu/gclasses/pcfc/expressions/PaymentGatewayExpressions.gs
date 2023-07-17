package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/PaymentGateway.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentGatewayExpressions {
  @javax.annotation.Generated("config/web/pcf/exitpoints/PaymentGateway.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentGatewayExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (paymentGatewayURL :  String, secureToken :  String, secureTokenId :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.PaymentGateway {
      return super.CurrentLocation as pcf.PaymentGateway
    }
    
    property get paymentGatewayURL () : String {
      return getVariableValue("paymentGatewayURL", 0) as String
    }
    
    property set paymentGatewayURL ($arg :  String) {
      setVariableValue("paymentGatewayURL", 0, $arg)
    }
    
    property get secureToken () : String {
      return getVariableValue("secureToken", 0) as String
    }
    
    property set secureToken ($arg :  String) {
      setVariableValue("secureToken", 0, $arg)
    }
    
    property get secureTokenId () : String {
      return getVariableValue("secureTokenId", 0) as String
    }
    
    property set secureTokenId ($arg :  String) {
      setVariableValue("secureTokenId", 0, $arg)
    }
    
    
  }
  
  
}