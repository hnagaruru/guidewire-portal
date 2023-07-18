package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/QuickSubmissionWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuickSubmissionWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/QuickSubmissionWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuickSubmissionWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (submission :  Submission, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    function acceleratedMenuActions_onEnter_19 (def :  pcf.MultiQuoteAcceleratedMenuActions) : void {
      def.onEnter(submission, policyPeriod, jobWizardHelper)
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    function acceleratedMenuActions_refreshVariables_20 (def :  pcf.MultiQuoteAcceleratedMenuActions) : void {
      def.refreshVariables(submission, policyPeriod, jobWizardHelper)
    }
    
    // 'canEdit' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    function canEdit_21 () : java.lang.Boolean {
      return (not job.Complete) and (perm.Submission.edit(submission))
    }
    
    // 'canVisit' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    static function canVisit_22 (policyPeriod :  PolicyPeriod, submission :  Submission) : java.lang.Boolean {
      return perm.Submission.view(submission)
    }
    
    // 'def' attribute on WizardStepSetRef at QuickSubmissionWizard.pcf: line 71, column 29
    function def_onEnter_10 (def :  pcf.LineQuickWizardStepSet_default) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at QuickSubmissionWizard.pcf: line 81, column 87
    function def_onEnter_17 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.onEnter(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'def' attribute on WizardStepSetRef at QuickSubmissionWizard.pcf: line 71, column 29
    function def_onEnter_8 (def :  pcf.LineQuickWizardStepSet_PersonalAuto) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at QuickSubmissionWizard.pcf: line 71, column 29
    function def_refreshVariables_11 (def :  pcf.LineQuickWizardStepSet_default) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at QuickSubmissionWizard.pcf: line 81, column 87
    function def_refreshVariables_18 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'def' attribute on WizardStepSetRef at QuickSubmissionWizard.pcf: line 71, column 29
    function def_refreshVariables_9 (def :  pcf.LineQuickWizardStepSet_PersonalAuto) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'infoBar' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    function infoBar_onEnter_23 (def :  pcf.JobWizardInfoBar) : void {
      def.onEnter(submission, policyPeriod)
    }
    
    // 'infoBar' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    function infoBar_refreshVariables_24 (def :  pcf.JobWizardInfoBar) : void {
      def.refreshVariables(submission, policyPeriod)
    }
    
    // 'initialStep' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    function initialStep_33 () : java.lang.String {
      return jobWizardHelper.getInitialWizardStepId( policyPeriod )
    }
    
    // 'initialValue' attribute on Variable at QuickSubmissionWizard.pcf: line 35, column 75
    function initialValue_0 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> policyPeriod.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at QuickSubmissionWizard.pcf: line 40, column 33
    function initialValue_1 () : java.lang.Boolean {
      return openForEditInit.get()
    }
    
    // 'initialValue' attribute on Variable at QuickSubmissionWizard.pcf: line 44, column 33
    function initialValue_2 () : entity.Submission {
      return submission
    }
    
    // 'initialValue' attribute on Variable at QuickSubmissionWizard.pcf: line 49, column 29
    function initialValue_3 () : entity.Policy {
      return policyPeriod.Policy
    }
    
    // 'initialValue' attribute on Variable at QuickSubmissionWizard.pcf: line 53, column 22
    function initialValue_4 () : String {
      return policy.Product.PublicID
    }
    
    // 'initialValue' attribute on Variable at QuickSubmissionWizard.pcf: line 57, column 46
    function initialValue_5 () : gw.api.web.job.JobWizardHelper {
      return new gw.api.web.job.JobWizardHelper(CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at QuickSubmissionWizard.pcf: line 61, column 23
    function initialValue_6 () : boolean {
      return policy.Product.getAvailableQuestionSetsByType(QuestionSetType.TC_PREQUAL,policyPeriod).Count > 0
    }
    
    // 'initialValue' attribute on Variable at QuickSubmissionWizard.pcf: line 65, column 55
    function initialValue_7 () : gw.pcf.sidebyside.SideBySideScreenCache {
      return new gw.pcf.sidebyside.SideBySideScreenCache()
    }
    
    // 'menuActions' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    function menuActions_onEnter_25 (def :  pcf.WizardMenuActions) : void {
      def.onEnter(jobWizardHelper,submission,policyPeriod)
    }
    
    // 'menuActions' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    function menuActions_refreshVariables_26 (def :  pcf.WizardMenuActions) : void {
      def.refreshVariables(jobWizardHelper,submission,policyPeriod)
    }
    
    // 'mode' attribute on WizardStepSetRef at QuickSubmissionWizard.pcf: line 71, column 29
    function mode_12 () : java.lang.Object {
      return productCode
    }
    
    // 'onConcurrentDataChange' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    function onConcurrentDataChange_27 () : void {
      CurrentLocation.cancel(); JobForward.go(job)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=ViewQuote) at QuickSubmissionWizard.pcf: line 79, column 42
    function onEnter_14 () : void {
      gw.lob.pa.PAWizardStepHelper.onViewQuoteStepEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'parent' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    static function parent_28 (policyPeriod :  PolicyPeriod, submission :  Submission) : pcf.api.Destination {
      return pcf.JobForward.createDestination(submission)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at QuickSubmissionWizard.pcf: line 79, column 42
    function screen_onEnter_15 (def :  pcf.QuickSubmission_QuoteScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at QuickSubmissionWizard.pcf: line 79, column 42
    function screen_refreshVariables_16 (def :  pcf.QuickSubmission_QuoteScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'subtitle' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    function subtitle_32 () : java.lang.String {
      return policyPeriod.Status.DisplayName
    }
    
    // 'tabBar' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    function tabBar_onEnter_29 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    function tabBar_refreshVariables_30 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on JobWizard (id=QuickSubmissionWizard) at QuickSubmissionWizard.pcf: line 22, column 90
    static function title_31 (policyPeriod :  PolicyPeriod, submission :  Submission) : java.lang.Object {
      return DisplayKey.get("Web.SubmissionWizard.Title", submission.JobNumber)
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewQuote) at QuickSubmissionWizard.pcf: line 79, column 42
    function visible_13 () : java.lang.Boolean {
      return !policyPeriod.MultiLine
    }
    
    override property get CurrentLocation () : pcf.QuickSubmissionWizard {
      return super.CurrentLocation as pcf.QuickSubmissionWizard
    }
    
    property get job () : entity.Submission {
      return getVariableValue("job", 0) as entity.Submission
    }
    
    property set job ($arg :  entity.Submission) {
      setVariableValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : java.lang.Boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  java.lang.Boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get openForEditInit () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return getVariableValue("openForEditInit", 0) as gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>
    }
    
    property set openForEditInit ($arg :  gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>) {
      setVariableValue("openForEditInit", 0, $arg)
    }
    
    property get policy () : entity.Policy {
      return getVariableValue("policy", 0) as entity.Policy
    }
    
    property set policy ($arg :  entity.Policy) {
      setVariableValue("policy", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get preQualNecessary () : boolean {
      return getVariableValue("preQualNecessary", 0) as java.lang.Boolean
    }
    
    property set preQualNecessary ($arg :  boolean) {
      setVariableValue("preQualNecessary", 0, $arg)
    }
    
    property get productCode () : String {
      return getVariableValue("productCode", 0) as String
    }
    
    property set productCode ($arg :  String) {
      setVariableValue("productCode", 0, $arg)
    }
    
    property get submission () : Submission {
      return getVariableValue("submission", 0) as Submission
    }
    
    property set submission ($arg :  Submission) {
      setVariableValue("submission", 0, $arg)
    }
    
    property get sxsCache () : gw.pcf.sidebyside.SideBySideScreenCache {
      return getVariableValue("sxsCache", 0) as gw.pcf.sidebyside.SideBySideScreenCache
    }
    
    property set sxsCache ($arg :  gw.pcf.sidebyside.SideBySideScreenCache) {
      setVariableValue("sxsCache", 0, $arg)
    }
    
    
  }
  
  
}