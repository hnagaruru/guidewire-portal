package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/PaymentGatewayForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentGatewayForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/payment/PaymentGatewayForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentGatewayForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (result :  String, transactionReference :  String, responseMessage :  String, transactionAmount :  String, originalTransactionID :  String) : int {
      return 0
    }
    
    // 'action' attribute on Forward (id=PaymentGatewayForward) at PaymentGatewayForward.pcf: line 7, column 32
    function action_1 () : void {
      new gw.payment.paymentgateway.PaymentGatewayResponseProcessor(paymentGatewayResponse).processPaymentResponseAndRedirect()
    }
    
    // 'initialValue' attribute on Variable at PaymentGatewayForward.pcf: line 28, column 68
    function initialValue_0 () : gw.api.payment.paymentgateway.PaymentGatewayResponse {
      return gw.payment.paymentgateway.impl.PaymentGatewayResponseBase.builder().result(result).referenceNumber(transactionReference).responseMessage(responseMessage).amount(transactionAmount).originalTransactionID(originalTransactionID).transactionTypeCode(gw.payment.paymentgateway.PaymentGatewayConfig.PaymentTransactionTypeCode).build()
    }
    
    override property get CurrentLocation () : pcf.PaymentGatewayForward {
      return super.CurrentLocation as pcf.PaymentGatewayForward
    }
    
    property get originalTransactionID () : String {
      return getVariableValue("originalTransactionID", 0) as String
    }
    
    property set originalTransactionID ($arg :  String) {
      setVariableValue("originalTransactionID", 0, $arg)
    }
    
    property get paymentGatewayResponse () : gw.api.payment.paymentgateway.PaymentGatewayResponse {
      return getVariableValue("paymentGatewayResponse", 0) as gw.api.payment.paymentgateway.PaymentGatewayResponse
    }
    
    property set paymentGatewayResponse ($arg :  gw.api.payment.paymentgateway.PaymentGatewayResponse) {
      setVariableValue("paymentGatewayResponse", 0, $arg)
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
    
    property get transactionAmount () : String {
      return getVariableValue("transactionAmount", 0) as String
    }
    
    property set transactionAmount ($arg :  String) {
      setVariableValue("transactionAmount", 0, $arg)
    }
    
    property get transactionReference () : String {
      return getVariableValue("transactionReference", 0) as String
    }
    
    property set transactionReference ($arg :  String) {
      setVariableValue("transactionReference", 0, $arg)
    }
    
    
  }
  
  
}