package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/NewSubmissionEntryPoint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewSubmissionEntryPointEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/NewSubmissionEntryPoint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewSubmissionEntryPointExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on EntryPoint (id=NewSubmissionEntryPoint) at NewSubmissionEntryPoint.pcf: line 7, column 33
    function location_0 () : pcf.api.Destination {
      return pcf.NewSubmission.createDestination()
    }
    
    
  }
  
  
}