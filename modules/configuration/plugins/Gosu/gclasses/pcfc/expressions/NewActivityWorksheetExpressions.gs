package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.web.activity.ActivityUtil
@javax.annotation.Generated("config/web/pcf/activity/NewActivityWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewActivityWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/NewActivityWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewActivityWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account, activityPattern :  ActivityPattern) : int {
      return 2
    }
    
    static function __constructorIndex (contingency :  Contingency) : int {
      return 3
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, activityPattern :  ActivityPattern) : int {
      return 0
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, policy :  Policy, activityPattern :  ActivityPattern) : int {
      return 1
    }
    
    // 'canVisit' attribute on Worksheet (id=NewActivityWorksheet) at NewActivityWorksheet.pcf: line 11, column 63
    static function canVisit_10 (account :  Account, activityPattern :  ActivityPattern, contingency :  Contingency, policy :  Policy, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return policyPeriod == null ? true : not policyPeriod.PolicyTerm.CheckArchived
    }
    
    // 'def' attribute on ScreenRef at NewActivityWorksheet.pcf: line 58, column 65
    function def_onEnter_8 (def :  pcf.NewActivityScreen) : void {
      def.onEnter(activity, note, assignmentPopup)
    }
    
    // 'def' attribute on ScreenRef at NewActivityWorksheet.pcf: line 58, column 65
    function def_refreshVariables_9 (def :  pcf.NewActivityScreen) : void {
      def.refreshVariables(activity, note, assignmentPopup)
    }
    
    // 'initialValue' attribute on Variable at NewActivityWorksheet.pcf: line 45, column 24
    function initialValue_5 () : Activity {
      return createActivity()
    }
    
    // 'initialValue' attribute on Variable at NewActivityWorksheet.pcf: line 49, column 59
    function initialValue_6 () : gw.api.web.activity.ActivityAssignmentPopup {
      return new gw.api.web.activity.ActivityAssignmentPopup(new Activity[]{activity}, gw.assignment.AssignmentUtil.DefaultUser)
    }
    
    // 'initialValue' attribute on Variable at NewActivityWorksheet.pcf: line 53, column 20
    function initialValue_7 () : Note {
      return createNote()
    }
    
    // 'location' attribute on Scope at NewActivityWorksheet.pcf: line 21, column 48
    function location_0 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(policyPeriod.Job)
    }
    
    // 'location' attribute on Scope at NewActivityWorksheet.pcf: line 23, column 44
    function location_1 () : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod)
    }
    
    // 'location' attribute on Scope at NewActivityWorksheet.pcf: line 25, column 60
    function location_2 () : pcf.api.Destination {
      return pcf.AccountFile.createDestination(policyPeriod.Policy.Account)
    }
    
    // 'location' attribute on Scope at NewActivityWorksheet.pcf: line 27, column 40
    function location_3 () : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    // 'location' attribute on Scope at NewActivityWorksheet.pcf: line 29, column 49
    function location_4 () : pcf.api.Destination {
      return pcf.ContingencyPopup.createDestination(contingency)
    }
    
    override property get CurrentLocation () : pcf.NewActivityWorksheet {
      return super.CurrentLocation as pcf.NewActivityWorksheet
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
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
    
    property get assignmentPopup () : gw.api.web.activity.ActivityAssignmentPopup {
      return getVariableValue("assignmentPopup", 0) as gw.api.web.activity.ActivityAssignmentPopup
    }
    
    property set assignmentPopup ($arg :  gw.api.web.activity.ActivityAssignmentPopup) {
      setVariableValue("assignmentPopup", 0, $arg)
    }
    
    property get contingency () : Contingency {
      return getVariableValue("contingency", 0) as Contingency
    }
    
    property set contingency ($arg :  Contingency) {
      setVariableValue("contingency", 0, $arg)
    }
    
    property get note () : Note {
      return getVariableValue("note", 0) as Note
    }
    
    property set note ($arg :  Note) {
      setVariableValue("note", 0, $arg)
    }
    
    property get policy () : Policy {
      return getVariableValue("policy", 0) as Policy
    }
    
    property set policy ($arg :  Policy) {
      setVariableValue("policy", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
    function createActivity() : Activity {
        var a : Activity
        if (account != null) {
            return account.newActivity(activityPattern)
        } else if (policy != null) {
            a = activityPattern.createPolicyActivity( policy.Bundle, policy, null, null, null, null, null, null, null )
            ActivityUtil.setPreviousUserOnNewActivity(a, User.util.CurrentUser)
        } else if (policyPeriod != null) {
            a = activityPattern.createJobActivity( policyPeriod.Job.Bundle, policyPeriod.Job, null, null, null, null, null, null, null )
            ActivityUtil.setPreviousUserOnNewActivity(a, User.util.CurrentUser)
        } else if (contingency != null) {
            a =  contingency.createContingencyActivity()
        }
    
        return a
      }
    
    function createNote() : Note {
      if (perm.Note.create) {
        return activity.newNote()
      }
      return null
    }
    
    
  }
  
  
}