package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/billing/PaymentInstrumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentInstrumentsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/billing/PaymentInstrumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PaymentInstrumentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RadioButtonCell (id=PaymentMethod_Cell) at PaymentInstrumentsLV.pcf: line 25, column 115
    function action_2 () : void {
      policyPeriodBillingInstructionsManager.PaymentInstrument = paymentInstrument
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PaymentInstrumentsLV.pcf: line 31, column 50
    function valueRoot_6 () : java.lang.Object {
      return paymentInstrument
    }
    
    // 'value' attribute on RadioButtonCell (id=PaymentMethod_Cell) at PaymentInstrumentsLV.pcf: line 25, column 115
    function value_3 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.PaymentInstrument.PublicID == paymentInstrument.PublicID
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PaymentInstrumentsLV.pcf: line 31, column 50
    function value_5 () : java.lang.String {
      return paymentInstrument.DisplayName
    }
    
    property get paymentInstrument () : gw.plugin.billing.BillingPaymentInstrument {
      return getIteratedValue(1) as gw.plugin.billing.BillingPaymentInstrument
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/billing/PaymentInstrumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentInstrumentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RadioButtonCell (id=PaymentMethod_Cell) at PaymentInstrumentsLV.pcf: line 25, column 115
    function sortValue_0 (paymentInstrument :  gw.plugin.billing.BillingPaymentInstrument) : java.lang.Object {
      return policyPeriodBillingInstructionsManager.PaymentInstrument.PublicID == paymentInstrument.PublicID
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PaymentInstrumentsLV.pcf: line 31, column 50
    function sortValue_1 (paymentInstrument :  gw.plugin.billing.BillingPaymentInstrument) : java.lang.Object {
      return paymentInstrument.DisplayName
    }
    
    // 'value' attribute on RowIterator at PaymentInstrumentsLV.pcf: line 17, column 64
    function value_8 () : gw.plugin.billing.BillingPaymentInstrument[] {
      return paymentInstruments
    }
    
    property get paymentInstruments () : gw.plugin.billing.BillingPaymentInstrument[] {
      return getRequireValue("paymentInstruments", 0) as gw.plugin.billing.BillingPaymentInstrument[]
    }
    
    property set paymentInstruments ($arg :  gw.plugin.billing.BillingPaymentInstrument[]) {
      setRequireValue("paymentInstruments", 0, $arg)
    }
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getRequireValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setRequireValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    
  }
  
  
}