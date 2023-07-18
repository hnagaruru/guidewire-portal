package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/CreatePaymentInstrument.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreatePaymentInstrumentExpressions {
  @javax.annotation.Generated("config/web/pcf/exitpoints/CreatePaymentInstrument.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreatePaymentInstrumentExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (paymentSystemURL :  String, returnURL :  String, jobNumber :  String, accountNumber :  String, accountHolderName :  String, add1 :  String, add2 :  String, city :  String, state :  String, zip :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.CreatePaymentInstrument {
      return super.CurrentLocation as pcf.CreatePaymentInstrument
    }
    
    property get accountHolderName () : String {
      return getVariableValue("accountHolderName", 0) as String
    }
    
    property set accountHolderName ($arg :  String) {
      setVariableValue("accountHolderName", 0, $arg)
    }
    
    property get accountNumber () : String {
      return getVariableValue("accountNumber", 0) as String
    }
    
    property set accountNumber ($arg :  String) {
      setVariableValue("accountNumber", 0, $arg)
    }
    
    property get add1 () : String {
      return getVariableValue("add1", 0) as String
    }
    
    property set add1 ($arg :  String) {
      setVariableValue("add1", 0, $arg)
    }
    
    property get add2 () : String {
      return getVariableValue("add2", 0) as String
    }
    
    property set add2 ($arg :  String) {
      setVariableValue("add2", 0, $arg)
    }
    
    property get city () : String {
      return getVariableValue("city", 0) as String
    }
    
    property set city ($arg :  String) {
      setVariableValue("city", 0, $arg)
    }
    
    property get jobNumber () : String {
      return getVariableValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setVariableValue("jobNumber", 0, $arg)
    }
    
    property get paymentSystemURL () : String {
      return getVariableValue("paymentSystemURL", 0) as String
    }
    
    property set paymentSystemURL ($arg :  String) {
      setVariableValue("paymentSystemURL", 0, $arg)
    }
    
    property get returnURL () : String {
      return getVariableValue("returnURL", 0) as String
    }
    
    property set returnURL ($arg :  String) {
      setVariableValue("returnURL", 0, $arg)
    }
    
    property get state () : String {
      return getVariableValue("state", 0) as String
    }
    
    property set state ($arg :  String) {
      setVariableValue("state", 0, $arg)
    }
    
    property get zip () : String {
      return getVariableValue("zip", 0) as String
    }
    
    property set zip ($arg :  String) {
      setVariableValue("zip", 0, $arg)
    }
    
    
  }
  
  
}