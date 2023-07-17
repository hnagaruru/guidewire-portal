package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/BCInvoice.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BCInvoiceExpressions {
  @javax.annotation.Generated("config/web/pcf/exitpoints/BCInvoice.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BCInvoiceExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (billingSystemURL :  String, invoiceID :  String) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.BCInvoice {
      return super.CurrentLocation as pcf.BCInvoice
    }
    
    property get billingSystemURL () : String {
      return getVariableValue("billingSystemURL", 0) as String
    }
    
    property set billingSystemURL ($arg :  String) {
      setVariableValue("billingSystemURL", 0, $arg)
    }
    
    property get invoiceID () : String {
      return getVariableValue("invoiceID", 0) as String
    }
    
    property set invoiceID ($arg :  String) {
      setVariableValue("invoiceID", 0, $arg)
    }
    
    
  }
  
  
}