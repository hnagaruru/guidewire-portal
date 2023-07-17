package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/payment/demo/DemoPaymentGatewayScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DemoPaymentGatewayScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/payment/demo/DemoPaymentGatewayScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DemoPaymentGatewayScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=DemoTakePaymentButton) at DemoPaymentGatewayScreen.pcf: line 86, column 37
    function action_38 () : void {
      gw.payment.paymentgateway.PaymentGatewayDemoUtils.validateMandatoryFieldsAndRedirectToConfirmationScreen(creditCard, amount)
    }
    
    // 'action' attribute on Link (id=CancelLink) at DemoPaymentGatewayScreen.pcf: line 92, column 85
    function action_39 () : void {
      gw.payment.paymentgateway.PaymentGatewayDemoUtils.removeLatestSavedTransactionDetails(); JobForward.go(Job.finder.findJobByJobNumber(jobNumber));
    }
    
    // 'value' attribute on RangeInput (id=expiryYear_Input) at DemoPaymentGatewayScreen.pcf: line 45, column 31
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      creditCard.ExpiryYear = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TextInput (id=CardNumber_Input) at DemoPaymentGatewayScreen.pcf: line 29, column 31
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      creditCard.Number = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TextInput (id=CVV_Input) at DemoPaymentGatewayScreen.pcf: line 52, column 30
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      creditCard.CVV = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at DemoPaymentGatewayScreen.pcf: line 62, column 30
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      creditCard.AddressLine1 = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at DemoPaymentGatewayScreen.pcf: line 69, column 30
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      creditCard.AddressLine2 = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on RangeInput (id=Country_Input) at DemoPaymentGatewayScreen.pcf: line 77, column 39
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      creditCard.Country = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'value' attribute on RangeInput (id=expiryMonth_Input) at DemoPaymentGatewayScreen.pcf: line 37, column 31
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      creditCard.ExpiryMonth = (__VALUE_TO_SET as String)
    }
    
    // 'initialValue' attribute on Variable at DemoPaymentGatewayScreen.pcf: line 17, column 68
    function initialValue_0 () : gw.payment.paymentgateway.impl.DemoCreditCardDetails {
      return new gw.payment.paymentgateway.impl.DemoCreditCardDetails()
    }
    
    // 'valueRange' attribute on RangeInput (id=expiryYear_Input) at DemoPaymentGatewayScreen.pcf: line 45, column 31
    function valueRange_15 () : java.lang.Object {
      return gw.payment.paymentgateway.PaymentGatewayDemoUtils.getExpiryYears()
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at DemoPaymentGatewayScreen.pcf: line 77, column 39
    function valueRange_34 () : java.lang.Object {
      return typekey.Country.AllTypeKeys
    }
    
    // 'valueRange' attribute on RangeInput (id=expiryMonth_Input) at DemoPaymentGatewayScreen.pcf: line 37, column 31
    function valueRange_8 () : java.lang.Object {
      return typekey.Months.AllTypeKeys
    }
    
    // 'value' attribute on TextInput (id=CardNumber_Input) at DemoPaymentGatewayScreen.pcf: line 29, column 31
    function valueRoot_3 () : java.lang.Object {
      return creditCard
    }
    
    // 'value' attribute on TextInput (id=CardNumber_Input) at DemoPaymentGatewayScreen.pcf: line 29, column 31
    function value_1 () : String {
      return creditCard.Number
    }
    
    // 'value' attribute on RangeInput (id=expiryYear_Input) at DemoPaymentGatewayScreen.pcf: line 45, column 31
    function value_12 () : String {
      return creditCard.ExpiryYear
    }
    
    // 'value' attribute on TextInput (id=CVV_Input) at DemoPaymentGatewayScreen.pcf: line 52, column 30
    function value_19 () : String {
      return creditCard.CVV
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at DemoPaymentGatewayScreen.pcf: line 62, column 30
    function value_23 () : String {
      return creditCard.AddressLine1
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at DemoPaymentGatewayScreen.pcf: line 69, column 30
    function value_27 () : String {
      return creditCard.AddressLine2
    }
    
    // 'value' attribute on RangeInput (id=Country_Input) at DemoPaymentGatewayScreen.pcf: line 77, column 39
    function value_31 () : typekey.Country {
      return creditCard.Country
    }
    
    // 'value' attribute on TextInput (id=TransactionAmount_Input) at DemoPaymentGatewayScreen.pcf: line 100, column 45
    function value_40 () : java.math.BigDecimal {
      return amount
    }
    
    // 'value' attribute on RangeInput (id=expiryMonth_Input) at DemoPaymentGatewayScreen.pcf: line 37, column 31
    function value_5 () : String {
      return creditCard.ExpiryMonth
    }
    
    // 'valueRange' attribute on RangeInput (id=expiryYear_Input) at DemoPaymentGatewayScreen.pcf: line 45, column 31
    function verifyValueRangeIsAllowedType_16 ($$arg :  String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=expiryYear_Input) at DemoPaymentGatewayScreen.pcf: line 45, column 31
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at DemoPaymentGatewayScreen.pcf: line 77, column 39
    function verifyValueRangeIsAllowedType_35 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at DemoPaymentGatewayScreen.pcf: line 77, column 39
    function verifyValueRangeIsAllowedType_35 ($$arg :  typekey.Country[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=expiryMonth_Input) at DemoPaymentGatewayScreen.pcf: line 37, column 31
    function verifyValueRangeIsAllowedType_9 ($$arg :  String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=expiryMonth_Input) at DemoPaymentGatewayScreen.pcf: line 37, column 31
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=expiryMonth_Input) at DemoPaymentGatewayScreen.pcf: line 37, column 31
    function verifyValueRange_10 () : void {
      var __valueRangeArg = typekey.Months.AllTypeKeys
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=expiryYear_Input) at DemoPaymentGatewayScreen.pcf: line 45, column 31
    function verifyValueRange_17 () : void {
      var __valueRangeArg = gw.payment.paymentgateway.PaymentGatewayDemoUtils.getExpiryYears()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at DemoPaymentGatewayScreen.pcf: line 77, column 39
    function verifyValueRange_36 () : void {
      var __valueRangeArg = typekey.Country.AllTypeKeys
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_35(__valueRangeArg)
    }
    
    property get amount () : java.math.BigDecimal {
      return getRequireValue("amount", 0) as java.math.BigDecimal
    }
    
    property set amount ($arg :  java.math.BigDecimal) {
      setRequireValue("amount", 0, $arg)
    }
    
    property get creditCard () : gw.payment.paymentgateway.impl.DemoCreditCardDetails {
      return getVariableValue("creditCard", 0) as gw.payment.paymentgateway.impl.DemoCreditCardDetails
    }
    
    property set creditCard ($arg :  gw.payment.paymentgateway.impl.DemoCreditCardDetails) {
      setVariableValue("creditCard", 0, $arg)
    }
    
    property get jobNumber () : String {
      return getRequireValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setRequireValue("jobNumber", 0, $arg)
    }
    
    
  }
  
  
}