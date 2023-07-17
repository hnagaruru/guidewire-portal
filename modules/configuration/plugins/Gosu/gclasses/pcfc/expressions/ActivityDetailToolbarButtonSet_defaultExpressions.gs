package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/ActivityDetailToolbarButtonSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityDetailToolbarButtonSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/ActivityDetailToolbarButtonSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityDetailToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_UpdateButton) at ActivityDetailToolbarButtonSet.default.pcf: line 21, column 77
    function action_0 () : void {
      if(gw.api.web.activity.ActivityUtil.createActivity(activity, note)) gw.api.web.workspace.WorkspaceUtil.closeWorksheetIfActiveAndRefreshTop(CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_CloseButton) at ActivityDetailToolbarButtonSet.default.pcf: line 52, column 66
    function action_11 () : void {
      CurrentLocation.cancel()
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_RenewalGroupButton) at ActivityDetailToolbarButtonSet.default.pcf: line 58, column 48
    function action_13 () : void {
      RenewalGroupDetail.goInMain(activity.RenewalGroup)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_AssignButton) at ActivityDetailToolbarButtonSet.default.pcf: line 27, column 39
    function action_2 () : void {
      AssignActivitiesPopup.push(new gw.api.web.activity.ActivityAssignmentPopup(new Activity[]{activity}, gw.assignment.AssignmentUtil.DefaultUser))
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_SkipButton) at ActivityDetailToolbarButtonSet.default.pcf: line 33, column 37
    function action_5 () : void {
      gw.api.web.activity.ActivityUtil.skipActivity(activity, note); gw.api.web.workspace.WorkspaceUtil.closeWorksheetIfActiveAndRefreshTop(CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_CompleteButton) at ActivityDetailToolbarButtonSet.default.pcf: line 39, column 78
    function action_7 () : void {
      gw.api.web.activity.ActivityUtil.completeActivity(activity, note); gw.api.web.workspace.WorkspaceUtil.closeWorksheetIfActiveAndRefreshTop(CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_CompleteCreateButton) at ActivityDetailToolbarButtonSet.default.pcf: line 45, column 77
    function action_9 () : void {
      gw.web.activity.ActivityDetailUIHelper.completeActivity(activity, note, policyPeriod, CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_RenewalGroupButton) at ActivityDetailToolbarButtonSet.default.pcf: line 58, column 48
    function action_dest_14 () : pcf.api.Destination {
      return pcf.RenewalGroupDetail.createDestination(activity.RenewalGroup)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_AssignButton) at ActivityDetailToolbarButtonSet.default.pcf: line 27, column 39
    function action_dest_3 () : pcf.api.Destination {
      return pcf.AssignActivitiesPopup.createDestination(new gw.api.web.activity.ActivityAssignmentPopup(new Activity[]{activity}, gw.assignment.AssignmentUtil.DefaultUser))
    }
    
    // EditButtons at ActivityDetailToolbarButtonSet.default.pcf: line 47, column 30
    function label_10 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_AssignButton) at ActivityDetailToolbarButtonSet.default.pcf: line 27, column 39
    function visible_1 () : java.lang.Boolean {
      return activity.canAssign()
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_RenewalGroupButton) at ActivityDetailToolbarButtonSet.default.pcf: line 58, column 48
    function visible_12 () : java.lang.Boolean {
      return activity.RenewalGroup != null
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_SkipButton) at ActivityDetailToolbarButtonSet.default.pcf: line 33, column 37
    function visible_4 () : java.lang.Boolean {
      return activity.canSkip()
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_CompleteButton) at ActivityDetailToolbarButtonSet.default.pcf: line 39, column 78
    function visible_6 () : java.lang.Boolean {
      return (activity.canComplete()) and (activity.canRecur() == false)
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_CompleteCreateButton) at ActivityDetailToolbarButtonSet.default.pcf: line 45, column 77
    function visible_8 () : java.lang.Boolean {
      return (activity.canComplete()) and (activity.canRecur() == true)
    }
    
    property get activity () : Activity {
      return getRequireValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setRequireValue("activity", 0, $arg)
    }
    
    property get note () : Note {
      return getRequireValue("note", 0) as Note
    }
    
    property set note ($arg :  Note) {
      setRequireValue("note", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}