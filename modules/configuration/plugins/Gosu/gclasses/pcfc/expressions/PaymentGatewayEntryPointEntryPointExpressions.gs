package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/PaymentGatewayEntryPoint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentGatewayEntryPointEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/PaymentGatewayEntryPoint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentGatewayEntryPointExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on EntryPoint (id=PaymentGatewayEntryPoint) at PaymentGatewayEntryPoint.pcf: line 7, column 104
    function location_0 () : pcf.api.Destination {
      return pcf.PaymentGatewayForward.createDestination(result, reference, responseMessage, amount, orginalTransactionID)
    }
    
    property get amount () : String {
      return getVariableValue("amount", 0) as String
    }
    
    property set amount ($arg :  String) {
      setVariableValue("amount", 0, $arg)
    }
    
    property get orginalTransactionID () : String {
      return getVariableValue("orginalTransactionID", 0) as String
    }
    
    property set orginalTransactionID ($arg :  String) {
      setVariableValue("orginalTransactionID", 0, $arg)
    }
    
    property get reference () : String {
      return getVariableValue("reference", 0) as String
    }
    
    property set reference ($arg :  String) {
      setVariableValue("reference", 0, $arg)
    }
    
    property get responseMessage () : String {
      return getVariableValue("responseMessage", 0) as String
    }
    
    property set responseMessage ($arg :  String) {
      setVariableValue("responseMessage", 0, $arg)
    }
    
    property get result () : String {
      return getVariableValue("result", 0) as String
    }
    
    property set result ($arg :  String) {
      setVariableValue("result", 0, $arg)
    }
    
    
  }
  
  
}