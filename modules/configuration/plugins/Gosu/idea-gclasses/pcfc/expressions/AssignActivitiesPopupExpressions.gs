package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/AssignActivitiesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignActivitiesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/AssignActivitiesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignActivitiesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (assignmentPopup :  gw.api.web.activity.ActivityAssignmentPopup) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=AssignActivitiesPopup) at AssignActivitiesPopup.pcf: line 11, column 67
    function beforeCommit_2 (pickedValue :  gw.api.assignment.Assignee) : void {
      if(assignmentPopup.SelectionType == AssignmentSelectionType.TC_FROMSEARCH) {assignmentPopup.Picker.setSelection(pickedValue)} assignmentPopup.performAssignment()
    }
    
    // 'def' attribute on ScreenRef at AssignActivitiesPopup.pcf: line 18, column 53
    function def_onEnter_0 (def :  pcf.AssignmentPopupScreen) : void {
      def.onEnter(assignmentPopup)
    }
    
    // 'def' attribute on ScreenRef at AssignActivitiesPopup.pcf: line 18, column 53
    function def_refreshVariables_1 (def :  pcf.AssignmentPopupScreen) : void {
      def.refreshVariables(assignmentPopup)
    }
    
    override property get CurrentLocation () : pcf.AssignActivitiesPopup {
      return super.CurrentLocation as pcf.AssignActivitiesPopup
    }
    
    property get assignmentPopup () : gw.api.web.activity.ActivityAssignmentPopup {
      return getVariableValue("assignmentPopup", 0) as gw.api.web.activity.ActivityAssignmentPopup
    }
    
    property set assignmentPopup ($arg :  gw.api.web.activity.ActivityAssignmentPopup) {
      setVariableValue("assignmentPopup", 0, $arg)
    }
    
    
  }
  
  
}