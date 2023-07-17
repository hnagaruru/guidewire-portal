package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkflowDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends WorkflowDetailDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=CreationTime_Cell) at WorkflowDetailDV.pcf: line 141, column 44
    function valueRoot_62 () : java.lang.Object {
      return item
    }
    
    // 'value' attribute on DateCell (id=CreationTime_Cell) at WorkflowDetailDV.pcf: line 141, column 44
    function value_61 () : java.util.Date {
      return item.CreationTime
    }
    
    // 'value' attribute on DateCell (id=LastUndateTime_Cell) at WorkflowDetailDV.pcf: line 147, column 46
    function value_64 () : java.util.Date {
      return item.LastUpdateTime
    }
    
    // 'value' attribute on DateCell (id=AvailableAtTime_Cell) at WorkflowDetailDV.pcf: line 154, column 52
    function value_67 () : java.util.Date {
      return item.AvailableSinceAsDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at WorkflowDetailDV.pcf: line 159, column 57
    function value_70 () : typekey.WorkItemStatusType {
      return item.Status
    }
    
    // 'value' attribute on TextCell (id=CheckedOutBy_Cell) at WorkflowDetailDV.pcf: line 163, column 44
    function value_73 () : java.lang.String {
      return item.CheckedOutBy
    }
    
    // 'value' attribute on TextCell (id=NumRetries_Cell) at WorkflowDetailDV.pcf: line 169, column 48
    function value_76 () : java.lang.Integer {
      return item.NumRetries
    }
    
    property get item () : entity.WorkflowWorkItem {
      return getIteratedValue(1) as entity.WorkflowWorkItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends WorkflowDetailDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Summary_Cell) at WorkflowDetailDV.pcf: line 199, column 51
    function action_84 () : void {
      WorkflowLogEntryDetail.go(workflow, logEntry as WorkflowTextLog)
    }
    
    // 'action' attribute on TextCell (id=Summary_Cell) at WorkflowDetailDV.pcf: line 199, column 51
    function action_dest_85 () : pcf.api.Destination {
      return pcf.WorkflowLogEntryDetail.createDestination(workflow, logEntry as WorkflowTextLog)
    }
    
    // 'available' attribute on TextCell (id=Summary_Cell) at WorkflowDetailDV.pcf: line 199, column 51
    function available_83 () : java.lang.Boolean {
      return logEntry typeis WorkflowTextLog
    }
    
    // 'value' attribute on TextCell (id=Summary_Cell) at WorkflowDetailDV.pcf: line 199, column 51
    function valueRoot_87 () : java.lang.Object {
      return logEntry
    }
    
    // 'value' attribute on TextCell (id=LogDate_Cell) at WorkflowDetailDV.pcf: line 192, column 111
    function value_81 () : java.lang.String {
      return gw.api.util.StringUtil.formatDate(logEntry.LogDate, "MM/dd/yyyy HH:mm:ss")
    }
    
    // 'value' attribute on TextCell (id=Summary_Cell) at WorkflowDetailDV.pcf: line 199, column 51
    function value_86 () : java.lang.String {
      return logEntry.LocalizeMessage
    }
    
    property get logEntry () : entity.WorkflowLogEntry {
      return getIteratedValue(1) as entity.WorkflowLogEntry
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WorkflowDetailDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=Subject_Cell) at WorkflowDetailDV.pcf: line 111, column 43
    function actionAvailable_48 () : java.lang.Boolean {
      return perm.Activity.view(activity)and workflow typeis PolicyPeriodWorkflow
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at WorkflowDetailDV.pcf: line 111, column 43
    function action_47 () : void {
      if (workflow typeis PolicyPeriodWorkflow) {JobForward.go(workflow.PolicyPeriod.Job);ActivityDetailWorksheet.goInWorkspace( activity )}
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at WorkflowDetailDV.pcf: line 93, column 43
    function iconColor_39 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=NewActivity_Cell) at WorkflowDetailDV.pcf: line 85, column 58
    function valueRoot_35 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on BooleanRadioCell (id=NewActivity_Cell) at WorkflowDetailDV.pcf: line 85, column 58
    function value_34 () : java.lang.Boolean {
      return activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at WorkflowDetailDV.pcf: line 93, column 43
    function value_37 () : java.lang.Boolean {
      return activity.Overdue
    }
    
    // 'value' attribute on DateCell (id=TargetDate_Cell) at WorkflowDetailDV.pcf: line 98, column 46
    function value_41 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at WorkflowDetailDV.pcf: line 104, column 47
    function value_44 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at WorkflowDetailDV.pcf: line 111, column 43
    function value_49 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=AssignedUser_Cell) at WorkflowDetailDV.pcf: line 117, column 47
    function value_52 () : java.lang.Object {
      return activity.AssignedTo
    }
    
    property get activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkflowDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=Parent_Input) at WorkflowDetailDV.pcf: line 46, column 46
    function action_17 () : void {
      WorkflowDetail.go(workflow.Caller)
    }
    
    // 'action' attribute on TextInput (id=Parent_Input) at WorkflowDetailDV.pcf: line 46, column 46
    function action_dest_18 () : pcf.api.Destination {
      return pcf.WorkflowDetail.createDestination(workflow.Caller)
    }
    
    // 'def' attribute on InputSetRef at WorkflowDetailDV.pcf: line 23, column 80
    function def_onEnter_2 (def :  pcf.WorkflowDetailInputSet_PolicyPeriodWorkflow) : void {
      def.onEnter(workflowBase)
    }
    
    // 'def' attribute on InputSetRef at WorkflowDetailDV.pcf: line 23, column 80
    function def_onEnter_4 (def :  pcf.WorkflowDetailInputSet_default) : void {
      def.onEnter(workflowBase)
    }
    
    // 'def' attribute on InputSetRef at WorkflowDetailDV.pcf: line 23, column 80
    function def_refreshVariables_3 (def :  pcf.WorkflowDetailInputSet_PolicyPeriodWorkflow) : void {
      def.refreshVariables(workflowBase)
    }
    
    // 'def' attribute on InputSetRef at WorkflowDetailDV.pcf: line 23, column 80
    function def_refreshVariables_5 (def :  pcf.WorkflowDetailInputSet_default) : void {
      def.refreshVariables(workflowBase)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at WorkflowDetailDV.pcf: line 93, column 43
    function iconColor_33 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at WorkflowDetailDV.pcf: line 13, column 31
    function initialValue_0 () : entity.Workflow {
      return workflowBase
    }
    
    // 'initialValue' attribute on Variable at WorkflowDetailDV.pcf: line 17, column 33
    function initialValue_1 () : entity.Activity[] {
      return workflow.Activities
    }
    
    // 'mode' attribute on InputSetRef at WorkflowDetailDV.pcf: line 23, column 80
    function mode_6 () : java.lang.Object {
      return gw.pcf.WorkflowHelper.getWorkflowSubtype(workflowBase.Subtype)
    }
    
    // 'value' attribute on DateCell (id=CreationTime_Cell) at WorkflowDetailDV.pcf: line 141, column 44
    function sortValue_57 (item :  entity.WorkflowWorkItem) : java.lang.Object {
      return item.CreationTime
    }
    
    // 'value' attribute on DateCell (id=LastUndateTime_Cell) at WorkflowDetailDV.pcf: line 147, column 46
    function sortValue_58 (item :  entity.WorkflowWorkItem) : java.lang.Object {
      return item.LastUpdateTime
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at WorkflowDetailDV.pcf: line 159, column 57
    function sortValue_59 (item :  entity.WorkflowWorkItem) : java.lang.Object {
      return item.Status
    }
    
    // 'value' attribute on TextCell (id=CheckedOutBy_Cell) at WorkflowDetailDV.pcf: line 163, column 44
    function sortValue_60 (item :  entity.WorkflowWorkItem) : java.lang.Object {
      return item.CheckedOutBy
    }
    
    // 'sortBy' attribute on TextCell (id=LogDate_Cell) at WorkflowDetailDV.pcf: line 192, column 111
    function sortValue_80 (logEntry :  entity.WorkflowLogEntry) : java.lang.Object {
      return logEntry.SortOrder
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at WorkflowDetailDV.pcf: line 28, column 39
    function valueRoot_8 () : java.lang.Object {
      return workflow
    }
    
    // 'value' attribute on TypeKeyInput (id=Handler_Input) at WorkflowDetailDV.pcf: line 33, column 46
    function value_10 () : typekey.WorkflowHandler {
      return workflow.Handler
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at WorkflowDetailDV.pcf: line 38, column 44
    function value_13 () : typekey.WorkflowState {
      return workflow.State
    }
    
    // 'value' attribute on TextInput (id=Parent_Input) at WorkflowDetailDV.pcf: line 46, column 46
    function value_19 () : entity.Workflow {
      return workflow.Caller
    }
    
    // 'value' attribute on TextInput (id=ProcessVersion_Input) at WorkflowDetailDV.pcf: line 51, column 42
    function value_23 () : java.lang.Integer {
      return workflow.ProcessVersion
    }
    
    // 'value' attribute on TextInput (id=CurrentStep_Input) at WorkflowDetailDV.pcf: line 55, column 56
    function value_26 () : java.lang.String {
      return workflow.localizedCurrentStepName()
    }
    
    // 'value' attribute on TextInput (id=PrevStep_Input) at WorkflowDetailDV.pcf: line 59, column 57
    function value_28 () : java.lang.String {
      return workflow.localizedPreviousStepName()
    }
    
    // 'value' attribute on TypeKeyInput (id=CurrentAction_Input) at WorkflowDetailDV.pcf: line 64, column 51
    function value_30 () : typekey.WorkflowActionType {
      return workflow.CurrentAction
    }
    
    // 'value' attribute on RowIterator at WorkflowDetailDV.pcf: line 77, column 43
    function value_55 () : entity.Activity[] {
      return activities
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at WorkflowDetailDV.pcf: line 28, column 39
    function value_7 () : typekey.Workflow {
      return workflow.Subtype
    }
    
    // 'value' attribute on RowIterator at WorkflowDetailDV.pcf: line 132, column 89
    function value_79 () : gw.api.database.IQueryBeanResult<entity.WorkflowWorkItem> {
      return workflow.findWorkflowWorkItems()
    }
    
    // 'value' attribute on RowIterator at WorkflowDetailDV.pcf: line 184, column 51
    function value_90 () : entity.WorkflowLogEntry[] {
      return workflow.Log
    }
    
    // 'visible' attribute on TextInput (id=Parent_Input) at WorkflowDetailDV.pcf: line 46, column 46
    function visible_16 () : java.lang.Boolean {
      return workflow.Caller != null
    }
    
    // 'visible' attribute on ListViewPanel (id=WorkflowActivitiesLV) at WorkflowDetailDV.pcf: line 72, column 45
    function visible_56 () : java.lang.Boolean {
      return activities.Count > 0
    }
    
    property get activities () : entity.Activity[] {
      return getVariableValue("activities", 0) as entity.Activity[]
    }
    
    property set activities ($arg :  entity.Activity[]) {
      setVariableValue("activities", 0, $arg)
    }
    
    property get workflow () : entity.Workflow {
      return getVariableValue("workflow", 0) as entity.Workflow
    }
    
    property set workflow ($arg :  entity.Workflow) {
      setVariableValue("workflow", 0, $arg)
    }
    
    property get workflowBase () : entity.Workflow {
      return getRequireValue("workflowBase", 0) as entity.Workflow
    }
    
    property set workflowBase ($arg :  entity.Workflow) {
      setRequireValue("workflowBase", 0, $arg)
    }
    
    
  }
  
  
}