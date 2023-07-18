package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/ActivityDetailToolbarButtonSet.approval.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityDetailToolbarButtonSet_approvalExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/ActivityDetailToolbarButtonSet.approval.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityDetailToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_UpdateButton) at ActivityDetailToolbarButtonSet.approval.pcf: line 21, column 77
    function action_0 () : void {
      if(gw.api.web.activity.ActivityUtil.createActivity(activity, note)) gw.api.web.workspace.WorkspaceUtil.closeWorksheetIfActiveAndRefreshTop(CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_RenewalGroupButton) at ActivityDetailToolbarButtonSet.approval.pcf: line 52, column 48
    function action_11 () : void {
      RenewalGroupDetail.goInMain(activity.RenewalGroup)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_ApproveButton) at ActivityDetailToolbarButtonSet.approval.pcf: line 27, column 76
    function action_2 () : void {
      gw.api.web.activity.ActivityUtil.approveActivity(activity, note); gw.api.web.workspace.WorkspaceUtil.closeWorksheetIfActiveAndRefreshTop(CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_RejectButton) at ActivityDetailToolbarButtonSet.approval.pcf: line 33, column 76
    function action_4 () : void {
      gw.api.web.activity.ActivityUtil.rejectActivity(activity, note); gw.api.web.workspace.WorkspaceUtil.closeWorksheetIfActiveAndRefreshTop(CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_AssignButton) at ActivityDetailToolbarButtonSet.approval.pcf: line 39, column 39
    function action_6 () : void {
      AssignActivitiesPopup.push(new gw.api.web.activity.ActivityAssignmentPopup(new Activity[]{activity}, gw.assignment.AssignmentUtil.DefaultUser))
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_CloseButton) at ActivityDetailToolbarButtonSet.approval.pcf: line 46, column 66
    function action_9 () : void {
      CurrentLocation.cancel()
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_RenewalGroupButton) at ActivityDetailToolbarButtonSet.approval.pcf: line 52, column 48
    function action_dest_12 () : pcf.api.Destination {
      return pcf.RenewalGroupDetail.createDestination(activity.RenewalGroup)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_AssignButton) at ActivityDetailToolbarButtonSet.approval.pcf: line 39, column 39
    function action_dest_7 () : pcf.api.Destination {
      return pcf.AssignActivitiesPopup.createDestination(new gw.api.web.activity.ActivityAssignmentPopup(new Activity[]{activity}, gw.assignment.AssignmentUtil.DefaultUser))
    }
    
    // EditButtons at ActivityDetailToolbarButtonSet.approval.pcf: line 41, column 30
    function label_8 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_ApproveButton) at ActivityDetailToolbarButtonSet.approval.pcf: line 27, column 76
    function visible_1 () : java.lang.Boolean {
      return perm.Activity.approve(activity) and not activity.Approved
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_RenewalGroupButton) at ActivityDetailToolbarButtonSet.approval.pcf: line 52, column 48
    function visible_10 () : java.lang.Boolean {
      return activity.RenewalGroup != null
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_AssignButton) at ActivityDetailToolbarButtonSet.approval.pcf: line 39, column 39
    function visible_5 () : java.lang.Boolean {
      return activity.canAssign()
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