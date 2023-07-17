package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/Policy_JobDetailsInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Policy_JobDetailsInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/Policy_JobDetailsInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy_JobDetailsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    
  }
  
  
}