package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/BCPayment.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BCPaymentExpressions {
  @javax.annotation.Generated("config/web/pcf/exitpoints/BCPayment.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BCPaymentExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (billingSystemURL :  String, moneyReceivedID :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.BCPayment {
      return super.CurrentLocation as pcf.BCPayment
    }
    
    property get billingSystemURL () : String {
      return getVariableValue("billingSystemURL", 0) as String
    }
    
    property set billingSystemURL ($arg :  String) {
      setVariableValue("billingSystemURL", 0, $arg)
    }
    
    property get moneyReceivedID () : String {
      return getVariableValue("moneyReceivedID", 0) as String
    }
    
    property set moneyReceivedID ($arg :  String) {
      setVariableValue("moneyReceivedID", 0, $arg)
    }
    
    
  }
  
  
}