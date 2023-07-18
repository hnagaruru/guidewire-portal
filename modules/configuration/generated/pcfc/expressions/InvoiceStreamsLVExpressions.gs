package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/InvoiceStreamsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InvoiceStreamsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/InvoiceStreamsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InvoiceStreamsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RadioButtonCell (id=InvoiceStream_Cell) at InvoiceStreamsLV.pcf: line 25, column 96
    function sortValue_0 (stream :  gw.plugin.billing.BillingInvoiceStreamInfo) : java.lang.Object {
      return policyPeriodBillingInstructionsManager.InvoiceStreamCode == stream.PublicID 
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at InvoiceStreamsLV.pcf: line 33, column 24
    function sortValue_1 (stream :  gw.plugin.billing.BillingInvoiceStreamInfo) : java.lang.Object {
      return stream.Description
    }
    
    // 'value' attribute on TextCell (id=Payment_Cell) at InvoiceStreamsLV.pcf: line 38, column 49
    function sortValue_2 (stream :  gw.plugin.billing.BillingInvoiceStreamInfo) : java.lang.Object {
      return stream.PaymentInstrumentName
    }
    
    // 'value' attribute on TextCell (id=Invoice_Cell) at InvoiceStreamsLV.pcf: line 42, column 194
    function sortValue_3 (stream :  gw.plugin.billing.BillingInvoiceStreamInfo) : java.lang.Object {
      return stream.DueDateBilling ? DisplayKey.get("Web.Policy.Payment.InvoiceStreamsLV.DueDate") : DisplayKey.get("Web.Policy.Payment.InvoiceStreamsLV.InvoiceDate")
    }
    
    // 'value' attribute on TextCell (id=Days_Cell) at InvoiceStreamsLV.pcf: line 46, column 32
    function sortValue_4 (stream :  gw.plugin.billing.BillingInvoiceStreamInfo) : java.lang.Object {
      return stream.Days
    }
    
    // 'value' attribute on RowIterator at InvoiceStreamsLV.pcf: line 14, column 64
    function value_19 () : gw.plugin.billing.BillingInvoiceStreamInfo[] {
      return policyPeriodBillingInstructionsManager.InvoiceStreams
    }
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getRequireValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setRequireValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/InvoiceStreamsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends InvoiceStreamsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RadioButtonCell (id=InvoiceStream_Cell) at InvoiceStreamsLV.pcf: line 25, column 96
    function action_5 () : void {
      policyPeriodBillingInstructionsManager.InvoiceStreamCode = stream.PublicID
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at InvoiceStreamsLV.pcf: line 33, column 24
    function valueRoot_9 () : java.lang.Object {
      return stream
    }
    
    // 'value' attribute on TextCell (id=Payment_Cell) at InvoiceStreamsLV.pcf: line 38, column 49
    function value_11 () : java.lang.String {
      return stream.PaymentInstrumentName
    }
    
    // 'value' attribute on TextCell (id=Invoice_Cell) at InvoiceStreamsLV.pcf: line 42, column 194
    function value_14 () : java.lang.String {
      return stream.DueDateBilling ? DisplayKey.get("Web.Policy.Payment.InvoiceStreamsLV.DueDate") : DisplayKey.get("Web.Policy.Payment.InvoiceStreamsLV.InvoiceDate")
    }
    
    // 'value' attribute on TextCell (id=Days_Cell) at InvoiceStreamsLV.pcf: line 46, column 32
    function value_16 () : java.lang.String {
      return stream.Days
    }
    
    // 'value' attribute on RadioButtonCell (id=InvoiceStream_Cell) at InvoiceStreamsLV.pcf: line 25, column 96
    function value_6 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.InvoiceStreamCode == stream.PublicID 
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at InvoiceStreamsLV.pcf: line 33, column 24
    function value_8 () : java.lang.String {
      return stream.Description
    }
    
    property get stream () : gw.plugin.billing.BillingInvoiceStreamInfo {
      return getIteratedValue(1) as gw.plugin.billing.BillingInvoiceStreamInfo
    }
    
    
  }
  
  
}