package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/workflow/PolicyPeriodWorkflowsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyPeriodWorkflowsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/workflow/PolicyPeriodWorkflowsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyPeriodWorkflowsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=JobNumber_Cell) at PolicyPeriodWorkflowsLV.pcf: line 37, column 82
    function actionAvailable_14 () : java.lang.Boolean {
      return (User.util.CurrentUser as User).canView( (workflow as PolicyPeriodWorkflow).PolicyPeriod.Job )
    }
    
    // 'actionAvailable' attribute on TextCell (id=PolicyNumber_Cell) at PolicyPeriodWorkflowsLV.pcf: line 45, column 94
    function actionAvailable_20 () : java.lang.Boolean {
      return (User.util.CurrentUser as User).canView( (workflow as PolicyPeriodWorkflow).PolicyPeriod )
    }
    
    // 'actionAvailable' attribute on TextCell (id=Parent_Cell) at PolicyPeriodWorkflowsLV.pcf: line 105, column 32
    function actionAvailable_52 () : java.lang.Boolean {
      return workflow.Caller != null
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at PolicyPeriodWorkflowsLV.pcf: line 37, column 82
    function action_12 () : void {
      JobForward.go((workflow as PolicyPeriodWorkflow).PolicyPeriod.Job)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at PolicyPeriodWorkflowsLV.pcf: line 45, column 94
    function action_18 () : void {
      PolicyFileForward.go((workflow as PolicyPeriodWorkflow).PolicyPeriod, (workflow as PolicyPeriodWorkflow).PolicyPeriod.EditEffectiveDate)
    }
    
    // 'action' attribute on TextCell (id=JobType_Cell) at PolicyPeriodWorkflowsLV.pcf: line 60, column 84
    function action_27 () : void {
      JobForward.go((workflow as PolicyPeriodWorkflow).PolicyPeriod.Job)
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at PolicyPeriodWorkflowsLV.pcf: line 67, column 41
    function action_33 () : void {
      WorkflowDetail.go(workflow)
    }
    
    // 'action' attribute on TextCell (id=Parent_Cell) at PolicyPeriodWorkflowsLV.pcf: line 105, column 32
    function action_50 () : void {
      WorkflowDetail.go(workflow.Caller)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at PolicyPeriodWorkflowsLV.pcf: line 37, column 82
    function action_dest_13 () : pcf.api.Destination {
      return pcf.JobForward.createDestination((workflow as PolicyPeriodWorkflow).PolicyPeriod.Job)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at PolicyPeriodWorkflowsLV.pcf: line 45, column 94
    function action_dest_19 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination((workflow as PolicyPeriodWorkflow).PolicyPeriod, (workflow as PolicyPeriodWorkflow).PolicyPeriod.EditEffectiveDate)
    }
    
    // 'action' attribute on TextCell (id=JobType_Cell) at PolicyPeriodWorkflowsLV.pcf: line 60, column 84
    function action_dest_28 () : pcf.api.Destination {
      return pcf.JobForward.createDestination((workflow as PolicyPeriodWorkflow).PolicyPeriod.Job)
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at PolicyPeriodWorkflowsLV.pcf: line 67, column 41
    function action_dest_34 () : pcf.api.Destination {
      return pcf.WorkflowDetail.createDestination(workflow)
    }
    
    // 'action' attribute on TextCell (id=Parent_Cell) at PolicyPeriodWorkflowsLV.pcf: line 105, column 32
    function action_dest_51 () : pcf.api.Destination {
      return pcf.WorkflowDetail.createDestination(workflow.Caller)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=workflowIterator) at PolicyPeriodWorkflowsLV.pcf: line 24, column 75
    function checkBoxVisible_68 () : java.lang.Boolean {
      return workflow.State != TC_COMPLETED
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at PolicyPeriodWorkflowsLV.pcf: line 37, column 82
    function valueRoot_16 () : java.lang.Object {
      return (workflow as PolicyPeriodWorkflow).PolicyPeriod.Job
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicyPeriodWorkflowsLV.pcf: line 45, column 94
    function valueRoot_22 () : java.lang.Object {
      return (workflow as PolicyPeriodWorkflow).PolicyPeriod
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at PolicyPeriodWorkflowsLV.pcf: line 52, column 52
    function valueRoot_25 () : java.lang.Object {
      return (workflow as PolicyPeriodWorkflow).PolicyPeriod.Policy
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at PolicyPeriodWorkflowsLV.pcf: line 67, column 41
    function valueRoot_36 () : java.lang.Object {
      return workflow
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at PolicyPeriodWorkflowsLV.pcf: line 95, column 124
    function valueRoot_48 () : java.lang.Object {
      return (workflow as PolicyPeriodWorkflow).PolicyPeriod.Policy.Account.AccountHolder.AccountContact
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at PolicyPeriodWorkflowsLV.pcf: line 37, column 82
    function value_15 () : java.lang.String {
      return (workflow as PolicyPeriodWorkflow).PolicyPeriod.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at PolicyPeriodWorkflowsLV.pcf: line 45, column 94
    function value_21 () : java.lang.String {
      return (workflow as PolicyPeriodWorkflow).PolicyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at PolicyPeriodWorkflowsLV.pcf: line 52, column 52
    function value_24 () : gw.api.productmodel.Product {
      return (workflow as PolicyPeriodWorkflow).PolicyPeriod.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=JobType_Cell) at PolicyPeriodWorkflowsLV.pcf: line 60, column 84
    function value_30 () : java.lang.String {
      return (workflow as PolicyPeriodWorkflow).PolicyPeriod.Job.DisplayType
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at PolicyPeriodWorkflowsLV.pcf: line 67, column 41
    function value_35 () : typekey.Workflow {
      return workflow.Subtype
    }
    
    // 'value' attribute on TextCell (id=ProcessVersion_Cell) at PolicyPeriodWorkflowsLV.pcf: line 73, column 42
    function value_38 () : java.lang.Integer {
      return workflow.ProcessVersion
    }
    
    // 'value' attribute on DateCell (id=StartTime_Cell) at PolicyPeriodWorkflowsLV.pcf: line 82, column 40
    function value_41 () : java.util.Date {
      return workflow.CreateTime
    }
    
    // 'value' attribute on DateCell (id=UpdateTime_Cell) at PolicyPeriodWorkflowsLV.pcf: line 89, column 40
    function value_44 () : java.util.Date {
      return workflow.UpdateTime
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at PolicyPeriodWorkflowsLV.pcf: line 95, column 124
    function value_47 () : java.lang.String {
      return (workflow as PolicyPeriodWorkflow).PolicyPeriod.Policy.Account.AccountHolder.AccountContact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Parent_Cell) at PolicyPeriodWorkflowsLV.pcf: line 105, column 32
    function value_53 () : entity.Workflow {
      return workflow.Caller
    }
    
    // 'value' attribute on TextCell (id=CurrentStep_Cell) at PolicyPeriodWorkflowsLV.pcf: line 110, column 41
    function value_57 () : java.lang.String {
      return workflow.CurrentStep
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at PolicyPeriodWorkflowsLV.pcf: line 116, column 46
    function value_60 () : typekey.WorkflowState {
      return workflow.State
    }
    
    // 'value' attribute on TypeKeyCell (id=ActiveState_Cell) at PolicyPeriodWorkflowsLV.pcf: line 122, column 52
    function value_63 () : typekey.WorkflowActiveState {
      return workflow.ActiveState
    }
    
    // 'value' attribute on TextCell (id=WorkItemState_Cell) at PolicyPeriodWorkflowsLV.pcf: line 128, column 51
    function value_66 () : java.lang.String {
      return workItemDisplayValue(workflow)
    }
    
    // 'visible' attribute on TextCell (id=Parent_Cell) at PolicyPeriodWorkflowsLV.pcf: line 105, column 32
    function visible_55 () : java.lang.Boolean {
      return !isParent
    }
    
    property get workflow () : entity.Workflow {
      return getIteratedValue(1) as entity.Workflow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/workflow/PolicyPeriodWorkflowsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyPeriodWorkflowsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at PolicyPeriodWorkflowsLV.pcf: line 37, column 82
    function sortValue_0 (workflow :  entity.Workflow) : java.lang.Object {
      return (workflow as PolicyPeriodWorkflow).PolicyPeriod.Job.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=PolicyNumber_Cell) at PolicyPeriodWorkflowsLV.pcf: line 45, column 94
    function sortValue_1 (workflow :  entity.Workflow) : java.lang.Object {
      return (workflow as PolicyPeriodWorkflow).PolicyPeriod.PolicyNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at PolicyPeriodWorkflowsLV.pcf: line 116, column 46
    function sortValue_10 (workflow :  entity.Workflow) : java.lang.Object {
      return workflow.State
    }
    
    // 'value' attribute on TypeKeyCell (id=ActiveState_Cell) at PolicyPeriodWorkflowsLV.pcf: line 122, column 52
    function sortValue_11 (workflow :  entity.Workflow) : java.lang.Object {
      return workflow.ActiveState
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at PolicyPeriodWorkflowsLV.pcf: line 52, column 52
    function sortValue_2 (workflow :  entity.Workflow) : java.lang.Object {
      return (workflow as PolicyPeriodWorkflow).PolicyPeriod.Policy.ProductCode
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at PolicyPeriodWorkflowsLV.pcf: line 67, column 41
    function sortValue_3 (workflow :  entity.Workflow) : java.lang.Object {
      return workflow.Subtype
    }
    
    // 'value' attribute on TextCell (id=ProcessVersion_Cell) at PolicyPeriodWorkflowsLV.pcf: line 73, column 42
    function sortValue_4 (workflow :  entity.Workflow) : java.lang.Object {
      return workflow.ProcessVersion
    }
    
    // 'value' attribute on DateCell (id=StartTime_Cell) at PolicyPeriodWorkflowsLV.pcf: line 82, column 40
    function sortValue_5 (workflow :  entity.Workflow) : java.lang.Object {
      return workflow.CreateTime
    }
    
    // 'value' attribute on DateCell (id=UpdateTime_Cell) at PolicyPeriodWorkflowsLV.pcf: line 89, column 40
    function sortValue_6 (workflow :  entity.Workflow) : java.lang.Object {
      return workflow.UpdateTime
    }
    
    // 'sortBy' attribute on TextCell (id=Parent_Cell) at PolicyPeriodWorkflowsLV.pcf: line 105, column 32
    function sortValue_7 (workflow :  entity.Workflow) : java.lang.Object {
      return workflow.Caller.PublicID
    }
    
    // 'value' attribute on TextCell (id=CurrentStep_Cell) at PolicyPeriodWorkflowsLV.pcf: line 110, column 41
    function sortValue_9 (workflow :  entity.Workflow) : java.lang.Object {
      return workflow.CurrentStep
    }
    
    // 'value' attribute on RowIterator (id=workflowIterator) at PolicyPeriodWorkflowsLV.pcf: line 24, column 75
    function value_69 () : gw.api.database.IQueryBeanResult<entity.Workflow> {
      return workflows
    }
    
    // 'visible' attribute on TextCell (id=Parent_Cell) at PolicyPeriodWorkflowsLV.pcf: line 105, column 32
    function visible_8 () : java.lang.Boolean {
      return !isParent
    }
    
    property get isParent () : boolean {
      return getRequireValue("isParent", 0) as java.lang.Boolean
    }
    
    property set isParent ($arg :  boolean) {
      setRequireValue("isParent", 0, $arg)
    }
    
    property get workflows () : gw.api.database.IQueryBeanResult<Workflow> {
      return getRequireValue("workflows", 0) as gw.api.database.IQueryBeanResult<Workflow>
    }
    
    property set workflows ($arg :  gw.api.database.IQueryBeanResult<Workflow>) {
      setRequireValue("workflows", 0, $arg)
    }
    
    function workItemDisplayValue(wf : Workflow) : String {
            if (wf.State == TC_ACTIVE) {
              var wi = wf.ActiveWorkflowWorkItem
              if (wi != null) {
                if (wi.Status == TC_CHECKEDOUT) {
                    return wi.CheckedOutBy
                }
                return wi.Status as String
              }
            }
            return null
          }
    
    
  }
  
  
}