package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/reinstatement/ReinstatementWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReinstatementWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/reinstatement/ReinstatementWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReinstatementWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (reinstatement :  Reinstatement, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    function acceleratedMenuActions_onEnter_37 (def :  pcf.BlankAcceleratedMenuActions) : void {
      def.onEnter()
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    function acceleratedMenuActions_refreshVariables_38 (def :  pcf.BlankAcceleratedMenuActions) : void {
      def.refreshVariables()
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=BillingInfo) at ReinstatementWizard.pcf: line 99, column 81
    function beforeSave_28 () : void {
      policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod)
    }
    
    // 'canEdit' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    function canEdit_39 () : java.lang.Boolean {
      return (not job.Complete) and perm.Reinstatement.edit(reinstatement)
    }
    
    // 'canVisit' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    static function canVisit_40 (policyPeriod :  PolicyPeriod, reinstatement :  Reinstatement) : java.lang.Boolean {
      return perm.Reinstatement.view(reinstatement)
    }
    
    // 'def' attribute on WizardStepSetRef at ReinstatementWizard.pcf: line 101, column 87
    function def_onEnter_35 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.onEnter(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'def' attribute on WizardStepSetRef at ReinstatementWizard.pcf: line 101, column 87
    function def_refreshVariables_36 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'infoBar' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    function infoBar_onEnter_41 (def :  pcf.ReinstatementWizardInfoBar) : void {
      def.onEnter(reinstatement, policyPeriod)
    }
    
    // 'infoBar' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    function infoBar_refreshVariables_42 (def :  pcf.ReinstatementWizardInfoBar) : void {
      def.refreshVariables(reinstatement, policyPeriod)
    }
    
    // 'initialStep' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    function initialStep_51 () : java.lang.String {
      return jobWizardHelper.getInitialWizardStepId(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at ReinstatementWizard.pcf: line 35, column 35
    function initialValue_0 () : entity.PolicyPeriod {
      return reinstatement.PolicyPeriod
    }
    
    // 'initialValue' attribute on Variable at ReinstatementWizard.pcf: line 39, column 36
    function initialValue_1 () : entity.Reinstatement {
      return reinstatement
    }
    
    // 'initialValue' attribute on Variable at ReinstatementWizard.pcf: line 44, column 29
    function initialValue_2 () : entity.Policy {
      return policyPeriod.Policy
    }
    
    // 'initialValue' attribute on Variable at ReinstatementWizard.pcf: line 48, column 46
    function initialValue_3 () : gw.api.web.job.JobWizardHelper {
      return new gw.api.web.job.JobWizardHelper(CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at ReinstatementWizard.pcf: line 53, column 23
    function initialValue_4 () : boolean {
      return !policyPeriod.Promoted and perm.Reinstatement.edit(reinstatement)
    }
    
    // 'initialValue' attribute on Variable at ReinstatementWizard.pcf: line 57, column 65
    function initialValue_5 () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return new gw.billing.PolicyPeriodBillingInstructionsManager()
    }
    
    // 'initialValue' attribute on Variable at ReinstatementWizard.pcf: line 61, column 55
    function initialValue_6 () : gw.pcf.sidebyside.SideBySideScreenCache {
      return new gw.pcf.sidebyside.SideBySideScreenCache()
    }
    
    // 'menuActions' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    function menuActions_onEnter_43 (def :  pcf.WizardMenuActions) : void {
      def.onEnter(jobWizardHelper,reinstatement,policyPeriod)
    }
    
    // 'menuActions' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    function menuActions_refreshVariables_44 (def :  pcf.WizardMenuActions) : void {
      def.refreshVariables(jobWizardHelper,reinstatement,policyPeriod)
    }
    
    // 'mode' attribute on JobWizardStep (id=ViewMultiLineQuote) at ReinstatementWizard.pcf: line 89, column 41
    function mode_21 () : java.lang.Object {
      return policy.Product.PublicID
    }
    
    // 'onConcurrentDataChange' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    function onConcurrentDataChange_45 () : void {
      CurrentLocation.cancel(); JobForward.go(job)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=BillingInfo) at ReinstatementWizard.pcf: line 99, column 81
    function onEnter_29 () : void {
      policyPeriodBillingInstructionsManager.populateFromPolicyPeriod(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=RiskAnalysis) at ReinstatementWizard.pcf: line 74, column 151
    function onExit_11 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewQuote) at ReinstatementWizard.pcf: line 81, column 42
    function onExit_16 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewMultiLineQuote) at ReinstatementWizard.pcf: line 89, column 41
    function onExit_22 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=BillingInfo) at ReinstatementWizard.pcf: line 99, column 81
    function onExit_30 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Draft) at ReinstatementWizard.pcf: line 67, column 77
    function onExit_7 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'parent' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    static function parent_46 (policyPeriod :  PolicyPeriod, reinstatement :  Reinstatement) : pcf.api.Destination {
      return pcf.JobForward.createDestination(reinstatement)
    }
    
    // 'save' attribute on JobWizardStep (id=RiskAnalysis) at ReinstatementWizard.pcf: line 74, column 151
    function save_12 () : java.lang.Boolean {
      return policyPeriod.OpenForEdit
    }
    
    // 'save' attribute on JobWizardStep (id=BillingInfo) at ReinstatementWizard.pcf: line 99, column 81
    function save_31 () : java.lang.Boolean {
      return !policyPeriod.Promoted and perm.Reinstatement.edit(reinstatement)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at ReinstatementWizard.pcf: line 74, column 151
    function screen_onEnter_13 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.onEnter(policyPeriod, policyPeriod.OpenForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at ReinstatementWizard.pcf: line 81, column 42
    function screen_onEnter_17 (def :  pcf.ReinstatementWizard_QuoteScreen) : void {
      def.onEnter(reinstatement, policyPeriod, policyPeriod.OpenForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at ReinstatementWizard.pcf: line 89, column 41
    function screen_onEnter_23 (def :  pcf.ReinstatementWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.onEnter(reinstatement, policyPeriod, policyPeriod.OpenForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at ReinstatementWizard.pcf: line 89, column 41
    function screen_onEnter_25 (def :  pcf.ReinstatementWizard_MultiLine_QuoteScreen_default) : void {
      def.onEnter(reinstatement, policyPeriod, policyPeriod.OpenForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at ReinstatementWizard.pcf: line 99, column 81
    function screen_onEnter_32 (def :  pcf.ReinstatementWizard_PaymentScreen) : void {
      def.onEnter(reinstatement, policyPeriod, billingPageEditable, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'screen' attribute on JobWizardStep (id=Draft) at ReinstatementWizard.pcf: line 67, column 77
    function screen_onEnter_8 (def :  pcf.ReinstatementWizard_ReinstatePolicyScreen) : void {
      def.onEnter(reinstatement, policyPeriod, policyPeriod.OpenForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at ReinstatementWizard.pcf: line 74, column 151
    function screen_refreshVariables_14 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.refreshVariables(policyPeriod, policyPeriod.OpenForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at ReinstatementWizard.pcf: line 81, column 42
    function screen_refreshVariables_18 (def :  pcf.ReinstatementWizard_QuoteScreen) : void {
      def.refreshVariables(reinstatement, policyPeriod, policyPeriod.OpenForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at ReinstatementWizard.pcf: line 89, column 41
    function screen_refreshVariables_24 (def :  pcf.ReinstatementWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.refreshVariables(reinstatement, policyPeriod, policyPeriod.OpenForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at ReinstatementWizard.pcf: line 89, column 41
    function screen_refreshVariables_26 (def :  pcf.ReinstatementWizard_MultiLine_QuoteScreen_default) : void {
      def.refreshVariables(reinstatement, policyPeriod, policyPeriod.OpenForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at ReinstatementWizard.pcf: line 99, column 81
    function screen_refreshVariables_33 (def :  pcf.ReinstatementWizard_PaymentScreen) : void {
      def.refreshVariables(reinstatement, policyPeriod, billingPageEditable, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'screen' attribute on JobWizardStep (id=Draft) at ReinstatementWizard.pcf: line 67, column 77
    function screen_refreshVariables_9 (def :  pcf.ReinstatementWizard_ReinstatePolicyScreen) : void {
      def.refreshVariables(reinstatement, policyPeriod, policyPeriod.OpenForEdit, jobWizardHelper)
    }
    
    // 'subtitle' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    function subtitle_50 () : java.lang.String {
      return policyPeriod.Status.DisplayName
    }
    
    // 'tabBar' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    function tabBar_onEnter_47 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    function tabBar_refreshVariables_48 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on JobWizard (id=ReinstatementWizard) at ReinstatementWizard.pcf: line 22, column 96
    static function title_49 (policyPeriod :  PolicyPeriod, reinstatement :  Reinstatement) : java.lang.Object {
      return DisplayKey.get("Web.ReinstatementWizard.Title", reinstatement.JobNumber)
    }
    
    // 'visible' attribute on JobWizardStep (id=RiskAnalysis) at ReinstatementWizard.pcf: line 74, column 151
    function visible_10 () : java.lang.Boolean {
      return perm.System.viewriskevalissues or perm.System.viewriskpriorpolicies or perm.System.viewriskclaims or perm.System.viewriskpriorlosses
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewQuote) at ReinstatementWizard.pcf: line 81, column 42
    function visible_15 () : java.lang.Boolean {
      return !policyPeriod.MultiLine
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewMultiLineQuote) at ReinstatementWizard.pcf: line 89, column 41
    function visible_20 () : java.lang.Boolean {
      return policyPeriod.MultiLine
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=ViewQuote) at ReinstatementWizard.pcf: line 81, column 42
    function wizardStepAvailable_19 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewQuote()
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=BillingInfo) at ReinstatementWizard.pcf: line 99, column 81
    function wizardStepAvailable_34 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewBillingInfo()
    }
    
    override property get CurrentLocation () : pcf.ReinstatementWizard {
      return super.CurrentLocation as pcf.ReinstatementWizard
    }
    
    property get billingPageEditable () : boolean {
      return getVariableValue("billingPageEditable", 0) as java.lang.Boolean
    }
    
    property set billingPageEditable ($arg :  boolean) {
      setVariableValue("billingPageEditable", 0, $arg)
    }
    
    property get job () : entity.Reinstatement {
      return getVariableValue("job", 0) as entity.Reinstatement
    }
    
    property set job ($arg :  entity.Reinstatement) {
      setVariableValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
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
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getVariableValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setVariableValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    property get reinstatedPolicyPeriod () : entity.PolicyPeriod {
      return getVariableValue("reinstatedPolicyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set reinstatedPolicyPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("reinstatedPolicyPeriod", 0, $arg)
    }
    
    property get reinstatement () : Reinstatement {
      return getVariableValue("reinstatement", 0) as Reinstatement
    }
    
    property set reinstatement ($arg :  Reinstatement) {
      setVariableValue("reinstatement", 0, $arg)
    }
    
    property get sxsCache () : gw.pcf.sidebyside.SideBySideScreenCache {
      return getVariableValue("sxsCache", 0) as gw.pcf.sidebyside.SideBySideScreenCache
    }
    
    property set sxsCache ($arg :  gw.pcf.sidebyside.SideBySideScreenCache) {
      setVariableValue("sxsCache", 0, $arg)
    }
    
    
  }
  
  
}