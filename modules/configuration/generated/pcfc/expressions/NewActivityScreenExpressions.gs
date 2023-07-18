package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/NewActivityScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewActivityScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/NewActivityScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewActivityScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=NewActivityScreen_UpdateButton) at NewActivityScreen.pcf: line 24, column 79
    function action_1 () : void {
      if(gw.api.web.activity.ActivityUtil.createActivity(activity, note, assignmentPopup, assigneePicker.SelectedAssignee)) gw.api.web.workspace.WorkspaceUtil.closeWorksheetIfActiveAndRefreshTop(CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=NewActivityScreen_CancelButton) at NewActivityScreen.pcf: line 28, column 79
    function action_2 () : void {
      CurrentLocation.cancel()
    }
    
    // 'def' attribute on PanelRef at NewActivityScreen.pcf: line 39, column 37
    function def_onEnter_10 (def :  pcf.ActivityDetailNoteDV_UWApproval) : void {
      def.onEnter(activity, note)
    }
    
    // 'def' attribute on PanelRef at NewActivityScreen.pcf: line 39, column 37
    function def_onEnter_12 (def :  pcf.ActivityDetailNoteDV_UWRequest) : void {
      def.onEnter(activity, note)
    }
    
    // 'def' attribute on PanelRef at NewActivityScreen.pcf: line 39, column 37
    function def_onEnter_14 (def :  pcf.ActivityDetailNoteDV_default) : void {
      def.onEnter(activity, note)
    }
    
    // 'def' attribute on PanelRef at NewActivityScreen.pcf: line 34, column 77
    function def_onEnter_3 (def :  pcf.NewActivityDV_UWApproval) : void {
      def.onEnter(activity, assignmentPopup, assigneePicker)
    }
    
    // 'def' attribute on PanelRef at NewActivityScreen.pcf: line 34, column 77
    function def_onEnter_5 (def :  pcf.NewActivityDV_UWRequest) : void {
      def.onEnter(activity, assignmentPopup, assigneePicker)
    }
    
    // 'def' attribute on PanelRef at NewActivityScreen.pcf: line 34, column 77
    function def_onEnter_7 (def :  pcf.NewActivityDV_default) : void {
      def.onEnter(activity, assignmentPopup, assigneePicker)
    }
    
    // 'def' attribute on PanelRef at NewActivityScreen.pcf: line 39, column 37
    function def_refreshVariables_11 (def :  pcf.ActivityDetailNoteDV_UWApproval) : void {
      def.refreshVariables(activity, note)
    }
    
    // 'def' attribute on PanelRef at NewActivityScreen.pcf: line 39, column 37
    function def_refreshVariables_13 (def :  pcf.ActivityDetailNoteDV_UWRequest) : void {
      def.refreshVariables(activity, note)
    }
    
    // 'def' attribute on PanelRef at NewActivityScreen.pcf: line 39, column 37
    function def_refreshVariables_15 (def :  pcf.ActivityDetailNoteDV_default) : void {
      def.refreshVariables(activity, note)
    }
    
    // 'def' attribute on PanelRef at NewActivityScreen.pcf: line 34, column 77
    function def_refreshVariables_4 (def :  pcf.NewActivityDV_UWApproval) : void {
      def.refreshVariables(activity, assignmentPopup, assigneePicker)
    }
    
    // 'def' attribute on PanelRef at NewActivityScreen.pcf: line 34, column 77
    function def_refreshVariables_6 (def :  pcf.NewActivityDV_UWRequest) : void {
      def.refreshVariables(activity, assignmentPopup, assigneePicker)
    }
    
    // 'def' attribute on PanelRef at NewActivityScreen.pcf: line 34, column 77
    function def_refreshVariables_8 (def :  pcf.NewActivityDV_default) : void {
      def.refreshVariables(activity, assignmentPopup, assigneePicker)
    }
    
    // 'initialValue' attribute on Variable at NewActivityScreen.pcf: line 19, column 46
    function initialValue_0 () : gw.assignment.PCAssigneePicker {
      return new gw.assignment.PCAssigneePicker() {:SelectedAssignee = (assignmentPopup.SuggestedAssignees.IsEmpty ? null : assignmentPopup.SuggestedAssignees[0])}
    }
    
    // 'visible' attribute on PanelRef at NewActivityScreen.pcf: line 39, column 37
    function visible_9 () : java.lang.Boolean {
      return note != null
    }
    
    property get activity () : Activity {
      return getRequireValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setRequireValue("activity", 0, $arg)
    }
    
    property get assigneePicker () : gw.assignment.PCAssigneePicker {
      return getVariableValue("assigneePicker", 0) as gw.assignment.PCAssigneePicker
    }
    
    property set assigneePicker ($arg :  gw.assignment.PCAssigneePicker) {
      setVariableValue("assigneePicker", 0, $arg)
    }
    
    property get assignmentPopup () : gw.api.assignment.AssignmentPopup {
      return getRequireValue("assignmentPopup", 0) as gw.api.assignment.AssignmentPopup
    }
    
    property set assignmentPopup ($arg :  gw.api.assignment.AssignmentPopup) {
      setRequireValue("assignmentPopup", 0, $arg)
    }
    
    property get note () : Note {
      return getRequireValue("note", 0) as Note
    }
    
    property set note ($arg :  Note) {
      setRequireValue("note", 0, $arg)
    }
    
    
  }
  
  
}