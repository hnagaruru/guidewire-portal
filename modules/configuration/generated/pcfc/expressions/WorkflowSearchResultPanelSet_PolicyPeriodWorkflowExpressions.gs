package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowSearchResultPanelSet.PolicyPeriodWorkflow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkflowSearchResultPanelSet_PolicyPeriodWorkflowExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowSearchResultPanelSet.PolicyPeriodWorkflow.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkflowSearchResultPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Workflows_ManageAllButton) at WorkflowSearchResultPanelSet.PolicyPeriodWorkflow.pcf: line 28, column 25
    function action_2 () : void {
      ManageWorkflows.go(workflows, searchCriteria)
    }
    
    // 'action' attribute on ToolbarButton (id=Workflows_ManageAllButton) at WorkflowSearchResultPanelSet.PolicyPeriodWorkflow.pcf: line 28, column 25
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ManageWorkflows.createDestination(workflows, searchCriteria)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Workflows_ManageButton) at WorkflowSearchResultPanelSet.PolicyPeriodWorkflow.pcf: line 22, column 25
    function allCheckedRowsAction_0 (CheckedValues :  entity.Workflow[], CheckedValuesErrors :  java.util.Map) : void {
      ManageWorkflows.go(CheckedValues)
    }
    
    // 'available' attribute on ToolbarButton (id=Workflows_ManageAllButton) at WorkflowSearchResultPanelSet.PolicyPeriodWorkflow.pcf: line 28, column 25
    function available_1 () : java.lang.Boolean {
      return workflows == null ? false : workflows.getCount() > 0
    }
    
    // 'def' attribute on PanelRef at WorkflowSearchResultPanelSet.PolicyPeriodWorkflow.pcf: line 15, column 54
    function def_onEnter_4 (def :  pcf.PolicyPeriodWorkflowsLV) : void {
      def.onEnter(workflows, true)
    }
    
    // 'def' attribute on PanelRef at WorkflowSearchResultPanelSet.PolicyPeriodWorkflow.pcf: line 15, column 54
    function def_refreshVariables_5 (def :  pcf.PolicyPeriodWorkflowsLV) : void {
      def.refreshVariables(workflows, true)
    }
    
    property get searchCriteria () : WorkflowSearchCriteria {
      return getRequireValue("searchCriteria", 0) as WorkflowSearchCriteria
    }
    
    property set searchCriteria ($arg :  WorkflowSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get workflows () : gw.api.database.IQueryBeanResult<Workflow> {
      return getRequireValue("workflows", 0) as gw.api.database.IQueryBeanResult<Workflow>
    }
    
    property set workflows ($arg :  gw.api.database.IQueryBeanResult<Workflow>) {
      setRequireValue("workflows", 0, $arg)
    }
    
    
  }
  
  
}