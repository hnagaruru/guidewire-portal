package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/EmptyInvoiceStreamsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EmptyInvoiceStreamsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/EmptyInvoiceStreamsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EmptyInvoiceStreamsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RadioButtonCell (id=NoInvoiceStream_Cell) at EmptyInvoiceStreamsLV.pcf: line 22, column 25
    function sortValue_0 (description :  java.lang.String) : java.lang.Object {
      return true
    }
    
    // 'value' attribute on TextCell (id=description_Cell) at EmptyInvoiceStreamsLV.pcf: line 26, column 32
    function sortValue_1 (description :  java.lang.String) : java.lang.Object {
      return description
    }
    
    // 'value' attribute on RowIterator at EmptyInvoiceStreamsLV.pcf: line 14, column 38
    function value_4 () : java.lang.String[] {
      return policyPeriodBillingInstructionsManager.EmptyInvoiceStreamsDescriptions
    }
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getRequireValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setRequireValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/EmptyInvoiceStreamsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EmptyInvoiceStreamsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=description_Cell) at EmptyInvoiceStreamsLV.pcf: line 26, column 32
    function value_2 () : java.lang.String {
      return description
    }
    
    property get description () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  
}