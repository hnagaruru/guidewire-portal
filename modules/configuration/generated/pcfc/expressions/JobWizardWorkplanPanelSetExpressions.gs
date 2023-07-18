package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/JobWizardWorkplanPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobWizardWorkplanPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/JobWizardWorkplanPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends JobWizardWorkplanLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at JobWizardWorkplanPanelSet.pcf: line 102, column 28
    function action_39 () : void {
      ActivityDetailWorksheet.goInWorkspace(activity, policyPeriod)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at JobWizardWorkplanPanelSet.pcf: line 119, column 29
    function action_50 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at JobWizardWorkplanPanelSet.pcf: line 102, column 28
    function action_dest_40 () : pcf.api.Destination {
      return pcf.ActivityDetailWorksheet.createDestination(activity, policyPeriod)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at JobWizardWorkplanPanelSet.pcf: line 119, column 29
    function action_dest_51 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'condition' attribute on ToolbarFlag at JobWizardWorkplanPanelSet.pcf: line 57, column 39
    function condition_14 () : java.lang.Boolean {
      return activity.canAssign()
    }
    
    // 'condition' attribute on ToolbarFlag at JobWizardWorkplanPanelSet.pcf: line 60, column 37
    function condition_15 () : java.lang.Boolean {
      return activity.canSkip()
    }
    
    // 'condition' attribute on ToolbarFlag at JobWizardWorkplanPanelSet.pcf: line 63, column 41
    function condition_16 () : java.lang.Boolean {
      return activity.canComplete()
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at JobWizardWorkplanPanelSet.pcf: line 83, column 29
    function fontColor_24 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at JobWizardWorkplanPanelSet.pcf: line 95, column 29
    function fontColor_33 () : java.lang.Object {
      return activity.UIPriorityColor
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at JobWizardWorkplanPanelSet.pcf: line 76, column 43
    function iconColor_22 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at JobWizardWorkplanPanelSet.pcf: line 70, column 56
    function valueRoot_18 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at JobWizardWorkplanPanelSet.pcf: line 70, column 56
    function value_17 () : java.lang.Boolean {
      return activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at JobWizardWorkplanPanelSet.pcf: line 76, column 43
    function value_20 () : java.lang.Boolean {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at JobWizardWorkplanPanelSet.pcf: line 83, column 29
    function value_25 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on DateCell (id=EscalationDate_Cell) at JobWizardWorkplanPanelSet.pcf: line 88, column 29
    function value_30 () : java.util.Date {
      return activity.EscalationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at JobWizardWorkplanPanelSet.pcf: line 95, column 29
    function value_34 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at JobWizardWorkplanPanelSet.pcf: line 102, column 28
    function value_41 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at JobWizardWorkplanPanelSet.pcf: line 108, column 29
    function value_44 () : typekey.ActivityStatus {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at JobWizardWorkplanPanelSet.pcf: line 114, column 29
    function value_47 () : java.lang.Object {
      return activity.AssignedTo
    }
    
    // 'value' attribute on AltUserCell (id=AssignedBy_Cell) at JobWizardWorkplanPanelSet.pcf: line 119, column 29
    function value_52 () : entity.User {
      return activity.AssignedByUser
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at JobWizardWorkplanPanelSet.pcf: line 83, column 29
    function verifyFontColorIsAllowedType_27 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at JobWizardWorkplanPanelSet.pcf: line 83, column 29
    function verifyFontColorIsAllowedType_27 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at JobWizardWorkplanPanelSet.pcf: line 95, column 29
    function verifyFontColorIsAllowedType_36 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at JobWizardWorkplanPanelSet.pcf: line 95, column 29
    function verifyFontColorIsAllowedType_36 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at JobWizardWorkplanPanelSet.pcf: line 83, column 29
    function verifyFontColor_28 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_27(__fontColorArg)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at JobWizardWorkplanPanelSet.pcf: line 95, column 29
    function verifyFontColor_37 () : void {
      var __fontColorArg = activity.UIPriorityColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_36(__fontColorArg)
    }
    
    property get activity () : entity.Activity {
      return getIteratedValue(2) as entity.Activity
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/activity/JobWizardWorkplanPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardWorkplanLVExpressionsImpl extends JobWizardWorkplanPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at JobWizardWorkplanPanelSet.pcf: line 51, column 78
    function filters_4 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopActivityFilters.filters()
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at JobWizardWorkplanPanelSet.pcf: line 76, column 43
    function iconColor_5 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at JobWizardWorkplanPanelSet.pcf: line 41, column 68
    function initialValue_3 () : gw.api.database.IQueryBeanResult<Activity> {
      return policyPeriod.Job.AllActivities
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at JobWizardWorkplanPanelSet.pcf: line 102, column 28
    function sortValue_10 (activity :  entity.Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at JobWizardWorkplanPanelSet.pcf: line 108, column 29
    function sortValue_11 (activity :  entity.Activity) : java.lang.Object {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at JobWizardWorkplanPanelSet.pcf: line 114, column 29
    function sortValue_12 (activity :  entity.Activity) : java.lang.Object {
      return activity.AssignedTo
    }
    
    // 'value' attribute on AltUserCell (id=AssignedBy_Cell) at JobWizardWorkplanPanelSet.pcf: line 119, column 29
    function sortValue_13 (activity :  entity.Activity) : java.lang.Object {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at JobWizardWorkplanPanelSet.pcf: line 76, column 43
    function sortValue_6 (activity :  entity.Activity) : java.lang.Object {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at JobWizardWorkplanPanelSet.pcf: line 83, column 29
    function sortValue_7 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on DateCell (id=EscalationDate_Cell) at JobWizardWorkplanPanelSet.pcf: line 88, column 29
    function sortValue_8 (activity :  entity.Activity) : java.lang.Object {
      return activity.EscalationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at JobWizardWorkplanPanelSet.pcf: line 95, column 29
    function sortValue_9 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'value' attribute on RowIterator at JobWizardWorkplanPanelSet.pcf: line 47, column 79
    function value_55 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return jobActivities
    }
    
    property get jobActivities () : gw.api.database.IQueryBeanResult<Activity> {
      return getVariableValue("jobActivities", 1) as gw.api.database.IQueryBeanResult<Activity>
    }
    
    property set jobActivities ($arg :  gw.api.database.IQueryBeanResult<Activity>) {
      setVariableValue("jobActivities", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/activity/JobWizardWorkplanPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobWizardWorkplanPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=JobWizardWorkplanPanelSet_AssignButton) at JobWizardWorkplanPanelSet.pcf: line 20, column 68
    function allCheckedRowsAction_0 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      AssignActivitiesPopup.push(new gw.api.web.activity.ActivityAssignmentPopup(CheckedValues, gw.assignment.AssignmentUtil.DefaultUser))
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=JobWizardWorkplanPanelSet_SkipButton) at JobWizardWorkplanPanelSet.pcf: line 26, column 66
    function allCheckedRowsAction_1 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.web.activity.ActivityUtil.skipActivities(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=JobWizardWorkplanPanelSet_CompleteButton) at JobWizardWorkplanPanelSet.pcf: line 32, column 70
    function allCheckedRowsAction_2 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.web.activity.ActivityUtil.completeActivities(CheckedValues)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}