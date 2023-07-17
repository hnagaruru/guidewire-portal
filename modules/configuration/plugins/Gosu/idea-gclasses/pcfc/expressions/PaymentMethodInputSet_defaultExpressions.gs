package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/demopaymentsystem/PaymentMethodInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentMethodInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/demopaymentsystem/PaymentMethodInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentMethodInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get accountHolderName () : String {
      return getRequireValue("accountHolderName", 0) as String
    }
    
    property set accountHolderName ($arg :  String) {
      setRequireValue("accountHolderName", 0, $arg)
    }
    
    property get address () : Address {
      return getRequireValue("address", 0) as Address
    }
    
    property set address ($arg :  Address) {
      setRequireValue("address", 0, $arg)
    }
    
    
  }
  
  
}