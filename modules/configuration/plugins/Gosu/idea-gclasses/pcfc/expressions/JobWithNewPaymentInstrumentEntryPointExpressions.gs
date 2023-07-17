package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/JobWithNewPaymentInstrument.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWithNewPaymentInstrumentEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/JobWithNewPaymentInstrument.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWithNewPaymentInstrumentExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on EntryPoint (id=JobWithNewPaymentInstrument) at JobWithNewPaymentInstrument.pcf: line 8, column 92
    function location_0 () : pcf.api.Destination {
      return pcf.NewPaymentInstrumentForward.createDestination(jobNumber, accountNumber, paymentMethod, token)
    }
    
    property get accountNumber () : String {
      return getVariableValue("accountNumber", 0) as String
    }
    
    property set accountNumber ($arg :  String) {
      setVariableValue("accountNumber", 0, $arg)
    }
    
    property get jobNumber () : String {
      return getVariableValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setVariableValue("jobNumber", 0, $arg)
    }
    
    property get paymentMethod () : String {
      return getVariableValue("paymentMethod", 0) as String
    }
    
    property set paymentMethod ($arg :  String) {
      setVariableValue("paymentMethod", 0, $arg)
    }
    
    property get token () : String {
      return getVariableValue("token", 0) as String
    }
    
    property set token ($arg :  String) {
      setVariableValue("token", 0, $arg)
    }
    
    
  }
  
  
}