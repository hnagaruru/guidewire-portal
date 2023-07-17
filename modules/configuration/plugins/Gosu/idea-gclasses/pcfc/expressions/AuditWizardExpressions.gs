package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (audit :  Audit, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function acceleratedMenuActions_onEnter_17 (def :  pcf.BlankAcceleratedMenuActions) : void {
      def.onEnter()
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function acceleratedMenuActions_refreshVariables_18 (def :  pcf.BlankAcceleratedMenuActions) : void {
      def.refreshVariables()
    }
    
    // 'canEdit' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function canEdit_19 () : java.lang.Boolean {
      return (not job.Complete) and perm.Audit.edit
    }
    
    // 'canVisit' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    static function canVisit_20 (audit :  Audit, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.Audit.view
    }
    
    // 'def' attribute on WizardStepSetRef at AuditWizard.pcf: line 74, column 87
    function def_onEnter_15 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.onEnter(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'def' attribute on WizardStepSetRef at AuditWizard.pcf: line 74, column 87
    function def_refreshVariables_16 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'infoBar' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function infoBar_onEnter_21 (def :  pcf.AuditWizardInfoBar) : void {
      def.onEnter(policyPeriod, audit)
    }
    
    // 'infoBar' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function infoBar_refreshVariables_22 (def :  pcf.AuditWizardInfoBar) : void {
      def.refreshVariables(policyPeriod, audit)
    }
    
    // 'initialStep' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function initialStep_31 () : java.lang.String {
      return jobWizardHelper.getInitialWizardStepId( policyPeriod )
    }
    
    // 'initialValue' attribute on Variable at AuditWizard.pcf: line 31, column 28
    function initialValue_0 () : entity.Audit {
      return audit
    }
    
    // 'initialValue' attribute on Variable at AuditWizard.pcf: line 36, column 29
    function initialValue_1 () : entity.Policy {
      return audit.Policy
    }
    
    // 'initialValue' attribute on Variable at AuditWizard.pcf: line 43, column 46
    function initialValue_2 () : gw.api.web.job.JobWizardHelper {
      return new gw.api.web.job.JobWizardHelper(CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at AuditWizard.pcf: line 48, column 75
    function initialValue_3 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> policyPeriod.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at AuditWizard.pcf: line 52, column 55
    function initialValue_4 () : gw.pcf.sidebyside.SideBySideScreenCache {
      return new gw.pcf.sidebyside.SideBySideScreenCache()
    }
    
    // 'menuActions' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function menuActions_onEnter_23 (def :  pcf.AuditWizardMenuActions) : void {
      def.onEnter(job, policyPeriod)
    }
    
    // 'menuActions' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function menuActions_refreshVariables_24 (def :  pcf.AuditWizardMenuActions) : void {
      def.refreshVariables(job, policyPeriod)
    }
    
    // 'onConcurrentDataChange' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function onConcurrentDataChange_25 () : void {
      CurrentLocation.cancel(); JobForward.go(job)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Premiums) at AuditWizard.pcf: line 72, column 73
    function onExit_11 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Summary) at AuditWizard.pcf: line 58, column 72
    function onExit_5 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Details) at AuditWizard.pcf: line 64, column 72
    function onExit_8 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'parent' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    static function parent_26 (audit :  Audit, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.JobForward.createDestination(audit)
    }
    
    // 'screen' attribute on JobWizardStep (id=Premiums) at AuditWizard.pcf: line 72, column 73
    function screen_onEnter_12 (def :  pcf.AuditWizard_PremiumsScreen) : void {
      def.onEnter(audit, policyPeriod, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Summary) at AuditWizard.pcf: line 58, column 72
    function screen_onEnter_6 (def :  pcf.AuditWizard_SummaryScreen) : void {
      def.onEnter(audit, policyPeriod, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Details) at AuditWizard.pcf: line 64, column 72
    function screen_onEnter_9 (def :  pcf.AuditWizard_DetailsScreen) : void {
      def.onEnter(audit, policyPeriod, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Details) at AuditWizard.pcf: line 64, column 72
    function screen_refreshVariables_10 (def :  pcf.AuditWizard_DetailsScreen) : void {
      def.refreshVariables(audit, policyPeriod, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Premiums) at AuditWizard.pcf: line 72, column 73
    function screen_refreshVariables_13 (def :  pcf.AuditWizard_PremiumsScreen) : void {
      def.refreshVariables(audit, policyPeriod, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Summary) at AuditWizard.pcf: line 58, column 72
    function screen_refreshVariables_7 (def :  pcf.AuditWizard_SummaryScreen) : void {
      def.refreshVariables(audit, policyPeriod, jobWizardHelper)
    }
    
    // 'subtitle' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function subtitle_30 () : java.lang.String {
      return policyPeriod.Status.DisplayName
    }
    
    // 'tabBar' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function tabBar_onEnter_27 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function tabBar_refreshVariables_28 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    static function title_29 (audit :  Audit, policyPeriod :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.AuditWizard.Title", audit.JobNumber)
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=Premiums) at AuditWizard.pcf: line 72, column 73
    function wizardStepAvailable_14 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewQuote()
    }
    
    override property get CurrentLocation () : pcf.AuditWizard {
      return super.CurrentLocation as pcf.AuditWizard
    }
    
    property get audit () : Audit {
      return getVariableValue("audit", 0) as Audit
    }
    
    property set audit ($arg :  Audit) {
      setVariableValue("audit", 0, $arg)
    }
    
    property get job () : entity.Audit {
      return getVariableValue("job", 0) as entity.Audit
    }
    
    property set job ($arg :  entity.Audit) {
      setVariableValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
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
    
    property get sxsCache () : gw.pcf.sidebyside.SideBySideScreenCache {
      return getVariableValue("sxsCache", 0) as gw.pcf.sidebyside.SideBySideScreenCache
    }
    
    property set sxsCache ($arg :  gw.pcf.sidebyside.SideBySideScreenCache) {
      setVariableValue("sxsCache", 0, $arg)
    }
    
    
  }
  
  
}