package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/DemoTransactionConfirmationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DemoTransactionConfirmationScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/payment/demo/DemoTransactionConfirmationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DemoTransactionConfirmationScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=ReturnLink) at DemoTransactionConfirmationScreen.pcf: line 52, column 85
    function action_9 () : void {
      PaymentGatewayForward.go(result, reference, responseMessage, amount.toString(), tokenReference)
    }
    
    // 'action' attribute on Link (id=ReturnLink) at DemoTransactionConfirmationScreen.pcf: line 52, column 85
    function action_dest_10 () : pcf.api.Destination {
      return pcf.PaymentGatewayForward.createDestination(result, reference, responseMessage, amount.toString(), tokenReference)
    }
    
    // 'initialValue' attribute on Variable at DemoTransactionConfirmationScreen.pcf: line 19, column 22
    function initialValue_0 () : String {
      return 'T123456789'
    }
    
    // 'initialValue' attribute on Variable at DemoTransactionConfirmationScreen.pcf: line 23, column 22
    function initialValue_1 () : String {
      return '0'
    }
    
    // 'initialValue' attribute on Variable at DemoTransactionConfirmationScreen.pcf: line 27, column 22
    function initialValue_2 () : String {
      return 'Approved'
    }
    
    // 'value' attribute on TextInput (id=ReferenceNumber_Input) at DemoTransactionConfirmationScreen.pcf: line 37, column 31
    function value_3 () : String {
      return reference
    }
    
    // 'value' attribute on TextInput (id=TotalAmount_Input) at DemoTransactionConfirmationScreen.pcf: line 42, column 45
    function value_5 () : java.math.BigDecimal {
      return amount
    }
    
    // 'value' attribute on TextInput (id=ShippingAddress_Input) at DemoTransactionConfirmationScreen.pcf: line 47, column 31
    function value_7 () : String {
      return address
    }
    
    property get address () : String {
      return getRequireValue("address", 0) as String
    }
    
    property set address ($arg :  String) {
      setRequireValue("address", 0, $arg)
    }
    
    property get amount () : java.math.BigDecimal {
      return getRequireValue("amount", 0) as java.math.BigDecimal
    }
    
    property set amount ($arg :  java.math.BigDecimal) {
      setRequireValue("amount", 0, $arg)
    }
    
    property get reference () : String {
      return getRequireValue("reference", 0) as String
    }
    
    property set reference ($arg :  String) {
      setRequireValue("reference", 0, $arg)
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
    
    property get tokenReference () : String {
      return getVariableValue("tokenReference", 0) as String
    }
    
    property set tokenReference ($arg :  String) {
      setVariableValue("tokenReference", 0, $arg)
    }
    
    
  }
  
  
}