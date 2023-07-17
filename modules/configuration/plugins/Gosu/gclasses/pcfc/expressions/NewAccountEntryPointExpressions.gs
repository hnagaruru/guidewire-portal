package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/NewAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAccountEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/NewAccount.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAccountExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on EntryPoint (id=NewAccount) at NewAccount.pcf: line 8, column 29
    function location_0 () : pcf.api.Destination {
      return pcf.NewAccount.createDestination()
    }
    
    
  }
  
  
}