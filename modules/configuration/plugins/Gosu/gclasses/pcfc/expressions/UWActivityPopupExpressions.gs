package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.web.activity.ActivityUtil
@javax.annotation.Generated("config/web/pcf/job/submission/UWActivityPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UWActivityPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/UWActivityPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UWActivityPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, activityPattern :  ActivityPattern, approvalOption :  String) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=UWActivityPopup) at UWActivityPopup.pcf: line 11, column 70
    function beforeCommit_20 (pickedValue :  java.lang.Object) : void {
      gw.pcf.UWActivityPopupHelper.updatePolicyPeriodAndActivity(note, assigneePicker, approvalOption, policyPeriod, activity)
    }
    
    // 'def' attribute on PanelRef at UWActivityPopup.pcf: line 54, column 37
    function def_onEnter_13 (def :  pcf.ActivityDetailNoteDV_UWApproval) : void {
      def.onEnter(activity, note)
    }
    
    // 'def' attribute on PanelRef at UWActivityPopup.pcf: line 54, column 37
    function def_onEnter_15 (def :  pcf.ActivityDetailNoteDV_UWRequest) : void {
      def.onEnter(activity, note)
    }
    
    // 'def' attribute on PanelRef at UWActivityPopup.pcf: line 54, column 37
    function def_onEnter_17 (def :  pcf.ActivityDetailNoteDV_default) : void {
      def.onEnter(activity, note)
    }
    
    // 'def' attribute on PanelRef at UWActivityPopup.pcf: line 48, column 36
    function def_onEnter_5 (def :  pcf.NewActivityDV_UWApproval) : void {
      def.onEnter(activity, assignmentPopup, assigneePicker)
    }
    
    // 'def' attribute on PanelRef at UWActivityPopup.pcf: line 48, column 36
    function def_onEnter_7 (def :  pcf.NewActivityDV_UWRequest) : void {
      def.onEnter(activity, assignmentPopup, assigneePicker)
    }
    
    // 'def' attribute on PanelRef at UWActivityPopup.pcf: line 48, column 36
    function def_onEnter_9 (def :  pcf.NewActivityDV_default) : void {
      def.onEnter(activity, assignmentPopup, assigneePicker)
    }
    
    // 'def' attribute on PanelRef at UWActivityPopup.pcf: line 48, column 36
    function def_refreshVariables_10 (def :  pcf.NewActivityDV_default) : void {
      def.refreshVariables(activity, assignmentPopup, assigneePicker)
    }
    
    // 'def' attribute on PanelRef at UWActivityPopup.pcf: line 54, column 37
    function def_refreshVariables_14 (def :  pcf.ActivityDetailNoteDV_UWApproval) : void {
      def.refreshVariables(activity, note)
    }
    
    // 'def' attribute on PanelRef at UWActivityPopup.pcf: line 54, column 37
    function def_refreshVariables_16 (def :  pcf.ActivityDetailNoteDV_UWRequest) : void {
      def.refreshVariables(activity, note)
    }
    
    // 'def' attribute on PanelRef at UWActivityPopup.pcf: line 54, column 37
    function def_refreshVariables_18 (def :  pcf.ActivityDetailNoteDV_default) : void {
      def.refreshVariables(activity, note)
    }
    
    // 'def' attribute on PanelRef at UWActivityPopup.pcf: line 48, column 36
    function def_refreshVariables_6 (def :  pcf.NewActivityDV_UWApproval) : void {
      def.refreshVariables(activity, assignmentPopup, assigneePicker)
    }
    
    // 'def' attribute on PanelRef at UWActivityPopup.pcf: line 48, column 36
    function def_refreshVariables_8 (def :  pcf.NewActivityDV_UWRequest) : void {
      def.refreshVariables(activity, assignmentPopup, assigneePicker)
    }
    
    // 'initialValue' attribute on Variable at UWActivityPopup.pcf: line 26, column 24
    function initialValue_0 () : Activity {
      return createActivity()
    }
    
    // 'initialValue' attribute on Variable at UWActivityPopup.pcf: line 30, column 59
    function initialValue_1 () : gw.api.web.activity.ActivityAssignmentPopup {
      return new gw.api.web.activity.ActivityAssignmentPopup(new Activity[]{activity}, gw.assignment.AssignmentUtil.DefaultUser)
    }
    
    // 'initialValue' attribute on Variable at UWActivityPopup.pcf: line 34, column 20
    function initialValue_2 () : Note {
      return perm.Note.create ? activity.newNote() : null
    }
    
    // 'initialValue' attribute on Variable at UWActivityPopup.pcf: line 38, column 46
    function initialValue_3 () : gw.assignment.PCAssigneePicker {
      return gw.pcf.UWActivityPopupHelper.getDefaultAssignee(approvalOption, policyPeriod)
    }
    
    // 'updateLabel' attribute on EditButtons at UWActivityPopup.pcf: line 42, column 86
    function label_4 () : java.lang.Object {
      return gw.pcf.UWActivityPopupHelper.getUpdateLabel(approvalOption)
    }
    
    // 'mode' attribute on PanelRef at UWActivityPopup.pcf: line 48, column 36
    function mode_11 () : java.lang.Object {
      return approvalOption
    }
    
    // 'visible' attribute on PanelRef at UWActivityPopup.pcf: line 54, column 37
    function visible_12 () : java.lang.Boolean {
      return note != null
    }
    
    override property get CurrentLocation () : pcf.UWActivityPopup {
      return super.CurrentLocation as pcf.UWActivityPopup
    }
    
    property get activity () : Activity {
      return getVariableValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setVariableValue("activity", 0, $arg)
    }
    
    property get activityPattern () : ActivityPattern {
      return getVariableValue("activityPattern", 0) as ActivityPattern
    }
    
    property set activityPattern ($arg :  ActivityPattern) {
      setVariableValue("activityPattern", 0, $arg)
    }
    
    property get approvalOption () : String {
      return getVariableValue("approvalOption", 0) as String
    }
    
    property set approvalOption ($arg :  String) {
      setVariableValue("approvalOption", 0, $arg)
    }
    
    property get assigneePicker () : gw.assignment.PCAssigneePicker {
      return getVariableValue("assigneePicker", 0) as gw.assignment.PCAssigneePicker
    }
    
    property set assigneePicker ($arg :  gw.assignment.PCAssigneePicker) {
      setVariableValue("assigneePicker", 0, $arg)
    }
    
    property get assignmentPopup () : gw.api.web.activity.ActivityAssignmentPopup {
      return getVariableValue("assignmentPopup", 0) as gw.api.web.activity.ActivityAssignmentPopup
    }
    
    property set assignmentPopup ($arg :  gw.api.web.activity.ActivityAssignmentPopup) {
      setVariableValue("assignmentPopup", 0, $arg)
    }
    
    property get note () : Note {
      return getVariableValue("note", 0) as Note
    }
    
    property set note ($arg :  Note) {
      setVariableValue("note", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
    function createActivity() : Activity {
      var a = activityPattern.createJobActivity( policyPeriod.Job.Bundle, policyPeriod.Job, null, null, null, null, null, null, null )
      ActivityUtil.setPreviousUserOnNewActivity(a, User.util.CurrentUser)
      return a
    }
    
    
  }
  
  
}