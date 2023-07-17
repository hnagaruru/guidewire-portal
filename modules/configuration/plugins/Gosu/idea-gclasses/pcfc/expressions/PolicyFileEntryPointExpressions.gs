package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/PolicyFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFileEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/PolicyFile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on EntryPoint (id=PolicyFile) at PolicyFile.pcf: line 8, column 48
    function location_0 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(PolicyNumber)
    }
    
    property get PolicyNumber () : String {
      return getVariableValue("PolicyNumber", 0) as String
    }
    
    property set PolicyNumber ($arg :  String) {
      setVariableValue("PolicyNumber", 0, $arg)
    }
    
    
  }
  
  
}