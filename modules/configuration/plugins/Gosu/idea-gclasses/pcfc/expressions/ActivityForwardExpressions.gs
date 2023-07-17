package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/ActivityForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/ActivityForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (activity :  Activity) : int {
      return 1
    }
    
    static function __constructorIndex (activity :  Activity, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    static function __constructorIndex (activity :  Activity, policyNumber :  String) : int {
      return 2
    }
    
    // 'action' attribute on ForwardCondition at ActivityForward.pcf: line 51, column 84
    function action_11 () : void {
      PolicyFileForward.go(policyNumber); ActivityDetailWorksheet.goInWorkspace(activity)
    }
    
    // 'action' attribute on ForwardCondition at ActivityForward.pcf: line 54, column 84
    function action_13 () : void {
      PolicyFileForward.go(policyPeriod.PolicyNumber, policyPeriod.EditEffectiveDate); ActivityDetailWorksheet.goInWorkspace(activity, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at ActivityForward.pcf: line 56, column 106
    function action_15 () : void {
      AccountFileForward.go(activity.Account); ActivityDetailWorksheet.goInWorkspace(activity)
    }
    
    // 'action' attribute on ForwardCondition at ActivityForward.pcf: line 39, column 43
    function action_3 () : void {
      AccountFile_Contacts.go(activity.Account); EditAccountContactPopup.push(accountContact, true); ContactActivityDetailWorksheet.goInWorkspace(activity, accountContact)
    }
    
    // 'action' attribute on ForwardCondition at ActivityForward.pcf: line 42, column 59
    function action_5 () : void {
      AccountFileForward.go(activity.Account); ActivityDetailWorksheet.goInWorkspace(activity)
    }
    
    // 'action' attribute on ForwardCondition at ActivityForward.pcf: line 45, column 95
    function action_7 () : void {
      JobForward.go(job, activity); ActivityDetailWorksheet.goInWorkspace(activity, policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at ActivityForward.pcf: line 48, column 95
    function action_9 () : void {
      JobForward.go(job, activity.AssociatedPeriod, activity); ActivityDetailWorksheet.goInWorkspace(activity, activity.AssociatedPeriod)
    }
    
    // 'canVisit' attribute on Forward (id=ActivityForward) at ActivityForward.pcf: line 8, column 87
    static function canVisit_16 (activity :  Activity, policyNumber :  String, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.Activity.view(activity)
    }
    
    // 'condition' attribute on ForwardCondition at ActivityForward.pcf: line 48, column 95
    function condition_10 () : java.lang.Boolean {
      return job != null and policyPeriod != null and activity.AssociatedPeriod != null
    }
    
    // 'condition' attribute on ForwardCondition at ActivityForward.pcf: line 51, column 84
    function condition_12 () : java.lang.Boolean {
      return job == null and activityPolicy != null and policyNumber != null
    }
    
    // 'condition' attribute on ForwardCondition at ActivityForward.pcf: line 54, column 84
    function condition_14 () : java.lang.Boolean {
      return job == null and activityPolicy != null and policyNumber == null
    }
    
    // 'condition' attribute on ForwardCondition at ActivityForward.pcf: line 39, column 43
    function condition_4 () : java.lang.Boolean {
      return accountContact != null
    }
    
    // 'condition' attribute on ForwardCondition at ActivityForward.pcf: line 42, column 59
    function condition_6 () : java.lang.Boolean {
      return job == null and activityPolicy == null
    }
    
    // 'condition' attribute on ForwardCondition at ActivityForward.pcf: line 45, column 95
    function condition_8 () : java.lang.Boolean {
      return job != null and policyPeriod != null and activity.AssociatedPeriod == null
    }
    
    // 'initialValue' attribute on Variable at ActivityForward.pcf: line 28, column 26
    function initialValue_0 () : entity.Job {
      return activity.Job
    }
    
    // 'initialValue' attribute on Variable at ActivityForward.pcf: line 32, column 37
    function initialValue_1 () : entity.AccountContact {
      return activity.AccountContact
    }
    
    // 'initialValue' attribute on Variable at ActivityForward.pcf: line 36, column 32
    function initialValue_2 () : java.lang.Object {
      return getActivityPolicy()
    }
    
    // 'onBeforeForward' attribute on Forward (id=ActivityForward) at ActivityForward.pcf: line 8, column 87
    function onBeforeForward_17 () : void {
      gw.api.web.activity.ActivityUtil.markActivityAsViewed(activity)
    }
    
    override property get CurrentLocation () : pcf.ActivityForward {
      return super.CurrentLocation as pcf.ActivityForward
    }
    
    property get accountContact () : entity.AccountContact {
      return getVariableValue("accountContact", 0) as entity.AccountContact
    }
    
    property set accountContact ($arg :  entity.AccountContact) {
      setVariableValue("accountContact", 0, $arg)
    }
    
    property get activity () : Activity {
      return getVariableValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setVariableValue("activity", 0, $arg)
    }
    
    property get activityPolicy () : java.lang.Object {
      return getVariableValue("activityPolicy", 0) as java.lang.Object
    }
    
    property set activityPolicy ($arg :  java.lang.Object) {
      setVariableValue("activityPolicy", 0, $arg)
    }
    
    property get job () : entity.Job {
      return getVariableValue("job", 0) as entity.Job
    }
    
    property set job ($arg :  entity.Job) {
      setVariableValue("job", 0, $arg)
    }
    
    property get policyNumber () : String {
      return getVariableValue("policyNumber", 0) as String
    }
    
    property set policyNumber ($arg :  String) {
      setVariableValue("policyNumber", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    function getActivityPolicy() : Policy {
      if (policyPeriod == null and activity.Policy != null ) {
        policyPeriod = Policy.finder.findMostRecentBoundPeriodByPolicy(activity.Policy)
      }
      if(policyPeriod == null){
        policyPeriod = activity.PolicyPeriod
      }
      return activity.Policy
    }
    
    
  }
  
  
}