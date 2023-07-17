package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkflowDetailInputSet_PolicyPeriodWorkflowExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkflowDetailInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextInput (id=JobNumber_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 20, column 52
    function actionAvailable_3 () : java.lang.Boolean {
      return (User.util.CurrentUser as User).canView(workflow.PolicyPeriod.Job)
    }
    
    // 'actionAvailable' attribute on TextInput (id=PolicyNumber_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 26, column 64
    function actionAvailable_9 () : java.lang.Boolean {
      return (User.util.CurrentUser as User).canView( workflow.PolicyPeriod )
    }
    
    // 'action' attribute on TextInput (id=JobNumber_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 20, column 52
    function action_1 () : void {
      JobForward.go(workflow.PolicyPeriod.Job)
    }
    
    // 'action' attribute on TextInput (id=PolicyNumber_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 26, column 64
    function action_7 () : void {
      PolicyFileForward.go(workflow.PolicyPeriod, workflow.PolicyPeriod.EditEffectiveDate)
    }
    
    // 'action' attribute on TextInput (id=JobNumber_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 20, column 52
    function action_dest_2 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(workflow.PolicyPeriod.Job)
    }
    
    // 'action' attribute on TextInput (id=PolicyNumber_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 26, column 64
    function action_dest_8 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(workflow.PolicyPeriod, workflow.PolicyPeriod.EditEffectiveDate)
    }
    
    // 'initialValue' attribute on Variable at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 14, column 36
    function initialValue_0 () : PolicyPeriodWorkflow {
      return workflowBase as PolicyPeriodWorkflow
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 26, column 64
    function valueRoot_11 () : java.lang.Object {
      return workflow.PolicyPeriod
    }
    
    // 'value' attribute on TextInput (id=Product_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 31, column 48
    function valueRoot_14 () : java.lang.Object {
      return workflow.PolicyPeriod.Policy
    }
    
    // 'value' attribute on TextInput (id=MainAccountContact_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 36, column 41
    function valueRoot_17 () : java.lang.Object {
      return workflow.PolicyPeriod.Policy.Account
    }
    
    // 'value' attribute on TextInput (id=JobNumber_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 20, column 52
    function valueRoot_5 () : java.lang.Object {
      return workflow.PolicyPeriod.Job
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 26, column 64
    function value_10 () : java.lang.String {
      return workflow.PolicyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextInput (id=Product_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 31, column 48
    function value_13 () : gw.api.productmodel.Product {
      return workflow.PolicyPeriod.Policy.Product
    }
    
    // 'value' attribute on TextInput (id=MainAccountContact_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 36, column 41
    function value_16 () : entity.AccountHolder {
      return workflow.PolicyPeriod.Policy.Account.AccountHolder
    }
    
    // 'value' attribute on TextInput (id=JobNumber_Input) at WorkflowDetailInputSet.PolicyPeriodWorkflow.pcf: line 20, column 52
    function value_4 () : java.lang.String {
      return workflow.PolicyPeriod.Job.JobNumber
    }
    
    property get workflow () : PolicyPeriodWorkflow {
      return getVariableValue("workflow", 0) as PolicyPeriodWorkflow
    }
    
    property set workflow ($arg :  PolicyPeriodWorkflow) {
      setVariableValue("workflow", 0, $arg)
    }
    
    property get workflowBase () : Workflow {
      return getRequireValue("workflowBase", 0) as Workflow
    }
    
    property set workflowBase ($arg :  Workflow) {
      setRequireValue("workflowBase", 0, $arg)
    }
    
    
  }
  
  
}