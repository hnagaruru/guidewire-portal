package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowDetailInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkflowDetailInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowDetailInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkflowDetailInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get workflowBase () : Workflow {
      return getRequireValue("workflowBase", 0) as Workflow
    }
    
    property set workflowBase ($arg :  Workflow) {
      setRequireValue("workflowBase", 0, $arg)
    }
    
    
  }
  
  
}