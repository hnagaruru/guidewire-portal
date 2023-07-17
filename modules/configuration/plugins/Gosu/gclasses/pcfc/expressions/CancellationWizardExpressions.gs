package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/cancellation/CancellationWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CancellationWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/cancellation/CancellationWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CancellationWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (cancellation :  Cancellation, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    function acceleratedMenuActions_onEnter_26 (def :  pcf.BlankAcceleratedMenuActions) : void {
      def.onEnter()
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    function acceleratedMenuActions_refreshVariables_27 (def :  pcf.BlankAcceleratedMenuActions) : void {
      def.refreshVariables()
    }
    
    // 'canEdit' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    function canEdit_28 () : java.lang.Boolean {
      return (not job.Complete) and perm.Cancellation.edit(cancellation)
    }
    
    // 'canVisit' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    static function canVisit_29 (cancellation :  Cancellation, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.Cancellation.view(cancellation)
    }
    
    // 'def' attribute on WizardStepSetRef at CancellationWizard.pcf: line 88, column 87
    function def_onEnter_24 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.onEnter(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'def' attribute on WizardStepSetRef at CancellationWizard.pcf: line 88, column 87
    function def_refreshVariables_25 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'infoBar' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    function infoBar_onEnter_30 (def :  pcf.CancellationWizardInfoBar) : void {
      def.onEnter(cancellation, policyPeriod)
    }
    
    // 'infoBar' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    function infoBar_refreshVariables_31 (def :  pcf.CancellationWizardInfoBar) : void {
      def.refreshVariables(cancellation, policyPeriod)
    }
    
    // 'initialStep' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    function initialStep_40 () : java.lang.String {
      return jobWizardHelper.getInitialWizardStepId( policyPeriod )
    }
    
    // 'initialValue' attribute on Variable at CancellationWizard.pcf: line 35, column 75
    function initialValue_0 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> policyPeriod.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at CancellationWizard.pcf: line 40, column 33
    function initialValue_1 () : java.lang.Boolean {
      return openForEditInit.get()
    }
    
    // 'initialValue' attribute on Variable at CancellationWizard.pcf: line 44, column 35
    function initialValue_2 () : entity.Cancellation {
      return cancellation
    }
    
    // 'initialValue' attribute on Variable at CancellationWizard.pcf: line 49, column 29
    function initialValue_3 () : entity.Policy {
      return policyPeriod.Policy
    }
    
    // 'initialValue' attribute on Variable at CancellationWizard.pcf: line 54, column 35
    function initialValue_4 () : entity.PolicyPeriod {
      return cancellation.PolicyPeriod
    }
    
    // 'initialValue' attribute on Variable at CancellationWizard.pcf: line 58, column 46
    function initialValue_5 () : gw.api.web.job.JobWizardHelper {
      return new gw.api.web.job.JobWizardHelper(CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at CancellationWizard.pcf: line 62, column 55
    function initialValue_6 () : gw.pcf.sidebyside.SideBySideScreenCache {
      return new gw.pcf.sidebyside.SideBySideScreenCache()
    }
    
    // 'menuActions' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    function menuActions_onEnter_32 (def :  pcf.WizardMenuActions) : void {
      def.onEnter(jobWizardHelper,cancellation,policyPeriod)
    }
    
    // 'menuActions' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    function menuActions_refreshVariables_33 (def :  pcf.WizardMenuActions) : void {
      def.refreshVariables(jobWizardHelper,cancellation,policyPeriod)
    }
    
    // 'mode' attribute on JobWizardStep (id=ViewMultiLineQuote) at CancellationWizard.pcf: line 86, column 41
    function mode_17 () : java.lang.Object {
      return policy.Product.PublicID
    }
    
    // 'onConcurrentDataChange' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    function onConcurrentDataChange_34 () : void {
      CurrentLocation.cancel(); JobForward.go(job)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewQuote) at CancellationWizard.pcf: line 77, column 42
    function onExit_12 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewMultiLineQuote) at CancellationWizard.pcf: line 86, column 41
    function onExit_18 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Entry) at CancellationWizard.pcf: line 69, column 77
    function onExit_7 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'parent' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    static function parent_35 (cancellation :  Cancellation, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.JobForward.createDestination(cancellation)
    }
    
    // 'save' attribute on JobWizardStep (id=Entry) at CancellationWizard.pcf: line 69, column 77
    function save_8 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at CancellationWizard.pcf: line 77, column 42
    function screen_onEnter_13 (def :  pcf.CancellationWizard_QuoteScreen) : void {
      def.onEnter(cancellation, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at CancellationWizard.pcf: line 86, column 41
    function screen_onEnter_19 (def :  pcf.CancellationWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.onEnter(cancellation, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at CancellationWizard.pcf: line 86, column 41
    function screen_onEnter_21 (def :  pcf.CancellationWizard_MultiLine_QuoteScreen_default) : void {
      def.onEnter(cancellation, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Entry) at CancellationWizard.pcf: line 69, column 77
    function screen_onEnter_9 (def :  pcf.CancellationWizard_EntryScreen) : void {
      def.onEnter(policyPeriod, cancellation, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Entry) at CancellationWizard.pcf: line 69, column 77
    function screen_refreshVariables_10 (def :  pcf.CancellationWizard_EntryScreen) : void {
      def.refreshVariables(policyPeriod, cancellation, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at CancellationWizard.pcf: line 77, column 42
    function screen_refreshVariables_14 (def :  pcf.CancellationWizard_QuoteScreen) : void {
      def.refreshVariables(cancellation, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at CancellationWizard.pcf: line 86, column 41
    function screen_refreshVariables_20 (def :  pcf.CancellationWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.refreshVariables(cancellation, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at CancellationWizard.pcf: line 86, column 41
    function screen_refreshVariables_22 (def :  pcf.CancellationWizard_MultiLine_QuoteScreen_default) : void {
      def.refreshVariables(cancellation, openForEdit, jobWizardHelper)
    }
    
    // 'subtitle' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    function subtitle_39 () : java.lang.String {
      return policyPeriod.Status.DisplayName
    }
    
    // 'tabBar' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    function tabBar_onEnter_36 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    function tabBar_refreshVariables_37 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on JobWizard (id=CancellationWizard) at CancellationWizard.pcf: line 22, column 94
    static function title_38 (cancellation :  Cancellation, policyPeriod :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.CancellationWizard.Title", cancellation.JobNumber)
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewQuote) at CancellationWizard.pcf: line 77, column 42
    function visible_11 () : java.lang.Boolean {
      return !policyPeriod.MultiLine
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewMultiLineQuote) at CancellationWizard.pcf: line 86, column 41
    function visible_16 () : java.lang.Boolean {
      return policyPeriod.MultiLine
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=ViewQuote) at CancellationWizard.pcf: line 77, column 42
    function wizardStepAvailable_15 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewQuote()
    }
    
    override property get CurrentLocation () : pcf.CancellationWizard {
      return super.CurrentLocation as pcf.CancellationWizard
    }
    
    property get canceledPolicyPeriod () : entity.PolicyPeriod {
      return getVariableValue("canceledPolicyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set canceledPolicyPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("canceledPolicyPeriod", 0, $arg)
    }
    
    property get cancellation () : Cancellation {
      return getVariableValue("cancellation", 0) as Cancellation
    }
    
    property set cancellation ($arg :  Cancellation) {
      setVariableValue("cancellation", 0, $arg)
    }
    
    property get job () : entity.Cancellation {
      return getVariableValue("job", 0) as entity.Cancellation
    }
    
    property set job ($arg :  entity.Cancellation) {
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
    
    property get sxsCache () : gw.pcf.sidebyside.SideBySideScreenCache {
      return getVariableValue("sxsCache", 0) as gw.pcf.sidebyside.SideBySideScreenCache
    }
    
    property set sxsCache ($arg :  gw.pcf.sidebyside.SideBySideScreenCache) {
      setVariableValue("sxsCache", 0, $arg)
    }
    
    
  }
  
  
}