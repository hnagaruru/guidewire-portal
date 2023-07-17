package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/ActivityDetailWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityDetailWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/ActivityDetailWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityDetailWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (activity :  Activity) : int {
      return 0
    }
    
    static function __constructorIndex (activity :  Activity, policyPeriod :  PolicyPeriod) : int {
      return 1
    }
    
    // 'afterCommit' attribute on Worksheet (id=ActivityDetailWorksheet) at ActivityDetailWorksheet.pcf: line 12, column 74
    function afterCommit_12 (TopLocation :  pcf.api.Location) : void {
      gw.api.web.activity.ActivityUtil.markActivityAsViewed(activity)
    }
    
    // 'canEdit' attribute on Worksheet (id=ActivityDetailWorksheet) at ActivityDetailWorksheet.pcf: line 12, column 74
    function canEdit_13 () : java.lang.Boolean {
      return getEditStatus(activity, activity.Account)
    }
    
    // 'canVisit' attribute on Worksheet (id=ActivityDetailWorksheet) at ActivityDetailWorksheet.pcf: line 12, column 74
    static function canVisit_14 (activity :  Activity, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return activity.Account != null ? perm.Account.view(activity.Account) : true
    }
    
    // 'def' attribute on ScreenRef at ActivityDetailWorksheet.pcf: line 48, column 65
    function def_onEnter_10 (def :  pcf.ActivityDetailScreen) : void {
      def.onEnter(activity, note, policyPeriod)
    }
    
    // 'def' attribute on ScreenRef at ActivityDetailWorksheet.pcf: line 48, column 65
    function def_refreshVariables_11 (def :  pcf.ActivityDetailScreen) : void {
      def.refreshVariables(activity, note, policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at ActivityDetailWorksheet.pcf: line 39, column 20
    function initialValue_8 () : Note {
      return perm.Note.create ? activity.newNote() : null
    }
    
    // 'initialValue' attribute on Variable at ActivityDetailWorksheet.pcf: line 43, column 19
    function initialValue_9 () : Job {
      return activity.Job
    }
    
    // 'location' attribute on Scope at ActivityDetailWorksheet.pcf: line 18, column 35
    function location_0 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'location' attribute on Scope at ActivityDetailWorksheet.pcf: line 20, column 49
    function location_1 () : pcf.api.Destination {
      return pcf.AccountFile.createDestination(activity.Account)
    }
    
    // 'location' attribute on Scope at ActivityDetailWorksheet.pcf: line 22, column 58
    function location_2 () : pcf.api.Destination {
      return pcf.PolicyAccountForward.createDestination(activity.Account)
    }
    
    // 'location' attribute on Scope at ActivityDetailWorksheet.pcf: line 24, column 83
    function location_3 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyPeriod, policyPeriod.EditEffectiveDate)
    }
    
    // 'location' attribute on Scope at ActivityDetailWorksheet.pcf: line 26, column 58
    function location_4 () : pcf.api.Destination {
      return pcf.ContingencyPopup.createDestination(activity.Contingency)
    }
    
    // 'location' attribute on Scope at ActivityDetailWorksheet.pcf: line 28, column 60
    function location_5 () : pcf.api.Destination {
      return pcf.UWBlockProgressIssuesPopup.createDestination(policyPeriod)
    }
    
    // 'location' attribute on Scope at ActivityDetailWorksheet.pcf: line 30, column 62
    function location_6 () : pcf.api.Destination {
      return pcf.CurrentActivitiesPolicyPopup.createDestination(policyPeriod)
    }
    
    // 'location' attribute on Scope at ActivityDetailWorksheet.pcf: line 32, column 67
    function location_7 () : pcf.api.Destination {
      return pcf.CurrentActivitiesAccountPopup.createDestination(activity.Account)
    }
    
    override property get CurrentLocation () : pcf.ActivityDetailWorksheet {
      return super.CurrentLocation as pcf.ActivityDetailWorksheet
    }
    
    property get activity () : Activity {
      return getVariableValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setVariableValue("activity", 0, $arg)
    }
    
    property get job () : Job {
      return getVariableValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setVariableValue("job", 0, $arg)
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
    
    function getEditStatus(act : Activity, acc : Account) : boolean {
      if (acc != null) {
        return activity.AssignedUser == entity.User.util.CurrentUser
      } 
      return act.Status == TC_OPEN and 
              (act.AssignedUser == User.util.CurrentUser or 
              (perm.System.acteditunowned and activity.AssignedUser == null) or
               perm.Activity.approveany)
    }
    
    function completeActivity() {
      gw.api.web.activity.ActivityUtil.completeActivity(activity, note)
      gw.api.web.workspace.WorkspaceUtil.closeWorksheetIfActiveAndRefreshTop(CurrentLocation)            
      if (activity.Job != null) {
        NewActivityWorksheet.goInWorkspace(policyPeriod, activity.ActivityPattern)
      } else if (activity.Policy != null) {
        NewActivityWorksheet.goInWorkspace(policyPeriod, activity.Policy, activity.ActivityPattern)
      } else if (activity.Account != null) {
        NewActivityWorksheet.goInWorkspace(activity.Account, activity.ActivityPattern)
      } 
    }
    
    
  }
  
  
}