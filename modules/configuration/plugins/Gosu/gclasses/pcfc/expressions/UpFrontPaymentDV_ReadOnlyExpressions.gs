package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/billing/UpFrontPaymentDV.ReadOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UpFrontPaymentDV_ReadOnlyExpressions {
  @javax.annotation.Generated("config/web/pcf/billing/UpFrontPaymentDV.ReadOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UpFrontPaymentDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Reference_Cell) at UpFrontPaymentDV.ReadOnly.pcf: line 48, column 43
    function valueRoot_8 () : java.lang.Object {
      return payment
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at UpFrontPaymentDV.ReadOnly.pcf: line 61, column 41
    function value_10 () : gw.pl.currency.MonetaryAmount {
      return payment.Amount
    }
    
    // 'value' attribute on TextCell (id=PaymentInstrumentName_Cell) at UpFrontPaymentDV.ReadOnly.pcf: line 44, column 124
    function value_5 () : java.lang.String {
      return (String)((payment.PaymentInstrument != null) ? payment.PaymentInstrument : payment.PaymentMethod)
    }
    
    // 'value' attribute on TextCell (id=Reference_Cell) at UpFrontPaymentDV.ReadOnly.pcf: line 48, column 43
    function value_7 () : java.lang.String {
      return payment.Reference
    }
    
    property get payment () : UpFrontPayment {
      return getIteratedValue(1) as UpFrontPayment
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/billing/UpFrontPaymentDV.ReadOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UpFrontPaymentDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at UpFrontPaymentDV.ReadOnly.pcf: line 20, column 24
    function initialValue_0 () : Currency {
      return policyPeriod.PreferredSettlementCurrency
    }
    
    // 'value' attribute on TextCell (id=Reference_Cell) at UpFrontPaymentDV.ReadOnly.pcf: line 48, column 43
    function sortValue_1 (payment :  UpFrontPayment) : java.lang.Object {
      return payment.Reference
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at UpFrontPaymentDV.ReadOnly.pcf: line 61, column 41
    function sortValue_2 (payment :  UpFrontPayment) : java.lang.Object {
      return payment.Amount
    }
    
    // '$$sumValue' attribute on RowIterator (id=CollectedUpFrontPayments) at UpFrontPaymentDV.ReadOnly.pcf: line 61, column 41
    function sumValueRoot_4 (payment :  UpFrontPayment) : java.lang.Object {
      return payment
    }
    
    // 'footerSumValue' attribute on RowIterator (id=CollectedUpFrontPayments) at UpFrontPaymentDV.ReadOnly.pcf: line 61, column 41
    function sumValue_3 (payment :  UpFrontPayment) : java.lang.Object {
      return payment.Amount
    }
    
    // 'value' attribute on RowIterator (id=CollectedUpFrontPayments) at UpFrontPaymentDV.ReadOnly.pcf: line 38, column 49
    function value_13 () : entity.UpFrontPayment[] {
      return job.UpFrontPayments
    }
    
    // 'visible' attribute on Row at UpFrontPaymentDV.ReadOnly.pcf: line 65, column 51
    function visible_14 () : java.lang.Boolean {
      return job.UpFrontPayments.IsEmpty
    }
    
    property get billingStateContainer () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getRequireValue("billingStateContainer", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set billingStateContainer ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setRequireValue("billingStateContainer", 0, $arg)
    }
    
    property get currency () : Currency {
      return getVariableValue("currency", 0) as Currency
    }
    
    property set currency ($arg :  Currency) {
      setVariableValue("currency", 0, $arg)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}