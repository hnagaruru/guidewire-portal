package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/PolicyAsLossDate.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyAsLossDateEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/PolicyAsLossDate.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyAsLossDateExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on EntryPoint (id=PolicyAsLossDate) at PolicyAsLossDate.pcf: line 8, column 64
    function location_0 () : pcf.api.Destination {
      return pcf.PolicyAsLossDateForward.createDestination(policyNumber, asOfDate)
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyNumber () : String {
      return getVariableValue("policyNumber", 0) as String
    }
    
    property set policyNumber ($arg :  String) {
      setVariableValue("policyNumber", 0, $arg)
    }
    
    
  }
  
  
}