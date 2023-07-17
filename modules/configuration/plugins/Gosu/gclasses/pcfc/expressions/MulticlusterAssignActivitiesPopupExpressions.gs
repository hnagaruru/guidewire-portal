package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/MulticlusterAssignActivitiesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MulticlusterAssignActivitiesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/MulticlusterAssignActivitiesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MulticlusterAssignActivitiesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (assignmentPopup :  gw.api.web.activity.MulticlusterActivityAssignmentPopup) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Popup (id=MulticlusterAssignActivitiesPopup) at MulticlusterAssignActivitiesPopup.pcf: line 12, column 67
    function afterCancel_2 () : void {
      assignmentPopup.onPopupCancel()
    }
    
    // 'beforeCommit' attribute on Popup (id=MulticlusterAssignActivitiesPopup) at MulticlusterAssignActivitiesPopup.pcf: line 12, column 67
    function beforeCommit_3 (pickedValue :  gw.api.assignment.Assignee) : void {
      if(assignmentPopup.SelectionType == AssignmentSelectionType.TC_FROMSEARCH) {assignmentPopup.Picker.setSelection(pickedValue)} assignmentPopup.performAssignment()
    }
    
    // 'def' attribute on ScreenRef at MulticlusterAssignActivitiesPopup.pcf: line 19, column 65
    function def_onEnter_0 (def :  pcf.MulticlusterAssignmentPopupScreen) : void {
      def.onEnter(assignmentPopup)
    }
    
    // 'def' attribute on ScreenRef at MulticlusterAssignActivitiesPopup.pcf: line 19, column 65
    function def_refreshVariables_1 (def :  pcf.MulticlusterAssignmentPopupScreen) : void {
      def.refreshVariables(assignmentPopup)
    }
    
    override property get CurrentLocation () : pcf.MulticlusterAssignActivitiesPopup {
      return super.CurrentLocation as pcf.MulticlusterAssignActivitiesPopup
    }
    
    property get assignmentPopup () : gw.api.web.activity.MulticlusterActivityAssignmentPopup {
      return getVariableValue("assignmentPopup", 0) as gw.api.web.activity.MulticlusterActivityAssignmentPopup
    }
    
    property set assignmentPopup ($arg :  gw.api.web.activity.MulticlusterActivityAssignmentPopup) {
      setVariableValue("assignmentPopup", 0, $arg)
    }
    
    
  }
  
  
}