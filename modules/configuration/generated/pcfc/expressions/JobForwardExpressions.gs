package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/JobForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/JobForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (job :  Job) : int {
      return 0
    }
    
    static function __constructorIndex (job :  Job, activity :  Activity) : int {
      return 3
    }
    
    static function __constructorIndex (job :  Job, policyPeriod :  PolicyPeriod) : int {
      return 1
    }
    
    static function __constructorIndex (job :  Job, policyPeriod :  PolicyPeriod, activity :  Activity) : int {
      return 4
    }
    
    static function __constructorIndex (job :  Job, policyPeriod :  PolicyPeriod, wizardStep :  String) : int {
      return 2
    }
    
    // 'action' attribute on ForwardCondition at JobForward.pcf: line 52, column 39
    function action_11 () : void {
      jobUIHelper.goToRenewalWizard(job as Renewal, policyPeriod, wizardStep, activity)
    }
    
    // 'action' attribute on ForwardCondition at JobForward.pcf: line 55, column 37
    function action_13 () : void {
      jobUIHelper.goToAuditWizard(job as Audit, policyPeriod, activity)
    }
    
    // 'action' attribute on ForwardCondition at JobForward.pcf: line 58, column 44
    function action_15 () : void {
      jobUIHelper.goToCancellationWizard(job as Cancellation, policyPeriod, activity)
    }
    
    // 'action' attribute on ForwardCondition at JobForward.pcf: line 61, column 45
    function action_17 () : void {
      jobUIHelper.goToReinstatementWizard(job as Reinstatement, policyPeriod, activity)
    }
    
    // 'action' attribute on ForwardCondition at JobForward.pcf: line 64, column 39
    function action_19 () : void {
      jobUIHelper.goToRewriteWizard(job as Rewrite, policyPeriod, wizardStep, activity)
    }
    
    // 'action' attribute on ForwardCondition at JobForward.pcf: line 40, column 58
    function action_2 () : void {
      ArchivedLocationGroup.go(policyPeriod)
    }
    
    // 'action' attribute on ForwardCondition at JobForward.pcf: line 67, column 49
    function action_21 () : void {
      jobUIHelper.goToRewriteNewAccountWizard(job as RewriteNewAccount, policyPeriod, wizardStep, activity)
    }
    
    // 'action' attribute on ForwardCondition at JobForward.pcf: line 43, column 42
    function action_5 () : void {
      jobUIHelper.goToSubmissionWizard(job as Submission, policyPeriod, wizardStep, activity)
    }
    
    // 'action' attribute on ForwardCondition at JobForward.pcf: line 46, column 40
    function action_7 () : void {
      jobUIHelper.goToIssuanceWizard(job as Issuance, policyPeriod, activity)
    }
    
    // 'action' attribute on ForwardCondition at JobForward.pcf: line 49, column 44
    function action_9 () : void {
      jobUIHelper.goToPolicyChangeWizard(job as PolicyChange, policyPeriod, activity)
    }
    
    // 'action' attribute on ForwardCondition at JobForward.pcf: line 40, column 58
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ArchivedLocationGroup.createDestination(policyPeriod)
    }
    
    // 'canVisit' attribute on Forward (id=JobForward) at JobForward.pcf: line 10, column 30
    static function canVisit_23 (activity :  Activity, job :  Job, policyPeriod :  PolicyPeriod, wizardStep :  String) : java.lang.Boolean {
      return job.Viewable
    }
    
    // 'condition' attribute on ForwardCondition at JobForward.pcf: line 49, column 44
    function condition_10 () : java.lang.Boolean {
      return job typeis PolicyChange
    }
    
    // 'condition' attribute on ForwardCondition at JobForward.pcf: line 52, column 39
    function condition_12 () : java.lang.Boolean {
      return job typeis Renewal
    }
    
    // 'condition' attribute on ForwardCondition at JobForward.pcf: line 55, column 37
    function condition_14 () : java.lang.Boolean {
      return job typeis Audit
    }
    
    // 'condition' attribute on ForwardCondition at JobForward.pcf: line 58, column 44
    function condition_16 () : java.lang.Boolean {
      return job typeis Cancellation
    }
    
    // 'condition' attribute on ForwardCondition at JobForward.pcf: line 61, column 45
    function condition_18 () : java.lang.Boolean {
      return job typeis Reinstatement
    }
    
    // 'condition' attribute on ForwardCondition at JobForward.pcf: line 64, column 39
    function condition_20 () : java.lang.Boolean {
      return job typeis Rewrite
    }
    
    // 'condition' attribute on ForwardCondition at JobForward.pcf: line 67, column 49
    function condition_22 () : java.lang.Boolean {
      return job typeis RewriteNewAccount
    }
    
    // 'condition' attribute on ForwardCondition at JobForward.pcf: line 40, column 58
    function condition_4 () : java.lang.Boolean {
      return policyPeriod.PolicyTerm.CheckArchived
    }
    
    // 'condition' attribute on ForwardCondition at JobForward.pcf: line 43, column 42
    function condition_6 () : java.lang.Boolean {
      return job typeis Submission
    }
    
    // 'condition' attribute on ForwardCondition at JobForward.pcf: line 46, column 40
    function condition_8 () : java.lang.Boolean {
      return job typeis Issuance
    }
    
    // 'initialValue' attribute on Variable at JobForward.pcf: line 27, column 28
    function initialValue_0 () : PolicyPeriod {
      return job.LatestPeriod
    }
    
    // 'initialValue' attribute on Variable at JobForward.pcf: line 31, column 22
    function initialValue_1 () : String {
      return null
    }
    
    // 'onBeforeForward' attribute on Forward (id=JobForward) at JobForward.pcf: line 10, column 30
    function onBeforeForward_25 () : void {
      gw.api.web.util.SessionUtil.addPoliciesToList(job)
    }
    
    // 'parent' attribute on Forward (id=JobForward) at JobForward.pcf: line 10, column 30
    static function parent_24 (activity :  Activity, job :  Job, policyPeriod :  PolicyPeriod, wizardStep :  String) : pcf.api.Destination {
      return pcf.PolicyForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.JobForward {
      return super.CurrentLocation as pcf.JobForward
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
    
    property get jobUIHelper () : gw.web.job.JobUIHelper {
      return getVariableValue("jobUIHelper", 0) as gw.web.job.JobUIHelper
    }
    
    property set jobUIHelper ($arg :  gw.web.job.JobUIHelper) {
      setVariableValue("jobUIHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get wizardStep () : String {
      return getVariableValue("wizardStep", 0) as String
    }
    
    property set wizardStep ($arg :  String) {
      setVariableValue("wizardStep", 0, $arg)
    }
    
    
  }
  
  
}