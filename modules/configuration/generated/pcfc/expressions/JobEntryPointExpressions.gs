package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/Job.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/Job.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on EntryPoint (id=Job) at Job.pcf: line 8, column 44
    function location_0 () : pcf.api.Destination {
      return pcf.JobNumberForward.createDestination(JobNumber)
    }
    
    property get JobNumber () : String {
      return getVariableValue("JobNumber", 0) as String
    }
    
    property set JobNumber ($arg :  String) {
      setVariableValue("JobNumber", 0, $arg)
    }
    
    
  }
  
  
}