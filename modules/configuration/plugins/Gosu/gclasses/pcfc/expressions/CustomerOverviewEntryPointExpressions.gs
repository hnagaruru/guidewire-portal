package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/CustomerOverview.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CustomerOverviewEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/CustomerOverview.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CustomerOverviewExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on EntryPoint (id=CustomerOverview) at CustomerOverview.pcf: line 7, column 57
    function location_0 () : pcf.api.Destination {
      return pcf.CustomerOverviewForward.createDestination(PublicID, Phone)
    }
    
    property get Phone () : String {
      return getVariableValue("Phone", 0) as String
    }
    
    property set Phone ($arg :  String) {
      setVariableValue("Phone", 0, $arg)
    }
    
    property get PublicID () : String {
      return getVariableValue("PublicID", 0) as String
    }
    
    property set PublicID ($arg :  String) {
      setVariableValue("PublicID", 0, $arg)
    }
    
    
  }
  
  
}