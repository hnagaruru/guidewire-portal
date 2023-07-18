package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowsInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkflowsInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowsInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkflowsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get searchCriteria () : WorkflowSearchCriteria {
      return getRequireValue("searchCriteria", 0) as WorkflowSearchCriteria
    }
    
    property set searchCriteria ($arg :  WorkflowSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}