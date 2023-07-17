package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RewriteWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RewriteWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (rewrite :  Rewrite, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    static function __constructorIndex (rewrite :  Rewrite, policyPeriod :  PolicyPeriod, wizardStep :  String) : int {
      return 1
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function acceleratedMenuActions_onEnter_81 (def :  pcf.MultiQuoteAcceleratedMenuActions) : void {
      def.onEnter(rewrite, policyPeriod, jobWizardHelper)
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function acceleratedMenuActions_refreshVariables_82 (def :  pcf.MultiQuoteAcceleratedMenuActions) : void {
      def.refreshVariables(rewrite, policyPeriod, jobWizardHelper)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 89, column 56
    function beforeSave_11 () : void {
      gw.policy.PolicyPeriodValidation.validateOfferingAnswers(policyPeriod)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 148, column 70
    function beforeSave_72 () : void {
      policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod)
    }
    
    // 'canEdit' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function canEdit_83 () : java.lang.Boolean {
      return (not job.Complete) and perm.Rewrite.edit(rewrite)
    }
    
    // 'canVisit' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    static function canVisit_84 (policyPeriod :  PolicyPeriod, rewrite :  Rewrite, wizardStep :  String) : java.lang.Boolean {
      return perm.Rewrite.view(rewrite)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_onEnter_22 (def :  pcf.LineWizardStepSet_BusinessAuto) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_onEnter_24 (def :  pcf.LineWizardStepSet_BusinessOwners) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_onEnter_26 (def :  pcf.LineWizardStepSet_CommercialPackage) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_onEnter_28 (def :  pcf.LineWizardStepSet_CommercialProperty) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_onEnter_30 (def :  pcf.LineWizardStepSet_GeneralLiability) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_onEnter_32 (def :  pcf.LineWizardStepSet_HOPHomeowners) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_onEnter_34 (def :  pcf.LineWizardStepSet_InlandMarine) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_onEnter_36 (def :  pcf.LineWizardStepSet_Manual) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_onEnter_38 (def :  pcf.LineWizardStepSet_PersonalAuto) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_onEnter_40 (def :  pcf.LineWizardStepSet_WorkersComp) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_onEnter_42 (def :  pcf.LineWizardStepSet_default) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 150, column 87
    function def_onEnter_79 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.onEnter(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_refreshVariables_23 (def :  pcf.LineWizardStepSet_BusinessAuto) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_refreshVariables_25 (def :  pcf.LineWizardStepSet_BusinessOwners) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_refreshVariables_27 (def :  pcf.LineWizardStepSet_CommercialPackage) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_refreshVariables_29 (def :  pcf.LineWizardStepSet_CommercialProperty) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_refreshVariables_31 (def :  pcf.LineWizardStepSet_GeneralLiability) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_refreshVariables_33 (def :  pcf.LineWizardStepSet_HOPHomeowners) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_refreshVariables_35 (def :  pcf.LineWizardStepSet_InlandMarine) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_refreshVariables_37 (def :  pcf.LineWizardStepSet_Manual) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_refreshVariables_39 (def :  pcf.LineWizardStepSet_PersonalAuto) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_refreshVariables_41 (def :  pcf.LineWizardStepSet_WorkersComp) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function def_refreshVariables_43 (def :  pcf.LineWizardStepSet_default) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 150, column 87
    function def_refreshVariables_80 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'infoBar' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function infoBar_onEnter_85 (def :  pcf.JobWizardInfoBar) : void {
      def.onEnter(rewrite, policyPeriod)
    }
    
    // 'infoBar' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function infoBar_refreshVariables_86 (def :  pcf.JobWizardInfoBar) : void {
      def.refreshVariables(rewrite, policyPeriod)
    }
    
    // 'initialStep' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function initialStep_95 () : java.lang.String {
      return wizardStep == null ? jobWizardHelper.getInitialWizardStepId( policyPeriod ) : wizardStep
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 37, column 75
    function initialValue_0 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> policyPeriod.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 42, column 33
    function initialValue_1 () : java.lang.Boolean {
      return openForEditInit.get()
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 47, column 30
    function initialValue_2 () : entity.Account {
      return policyPeriod.Policy.Account
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 51, column 30
    function initialValue_3 () : entity.Rewrite {
      return rewrite
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 56, column 29
    function initialValue_4 () : entity.Policy {
      return policyPeriod.Policy
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 60, column 22
    function initialValue_5 () : String {
      return policy.Product.PublicID
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 64, column 46
    function initialValue_6 () : gw.api.web.job.JobWizardHelper {
      return new gw.api.web.job.JobWizardHelper(CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 69, column 23
    function initialValue_7 () : boolean {
      return !policyPeriod.Promoted and perm.Rewrite.edit(rewrite)
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 76, column 65
    function initialValue_8 () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return new gw.billing.PolicyPeriodBillingInstructionsManager()
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 80, column 55
    function initialValue_9 () : gw.pcf.sidebyside.SideBySideScreenCache {
      return new gw.pcf.sidebyside.SideBySideScreenCache()
    }
    
    // 'menuActions' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function menuActions_onEnter_87 (def :  pcf.WizardMenuActions) : void {
      def.onEnter(jobWizardHelper,rewrite,policyPeriod)
    }
    
    // 'menuActions' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function menuActions_refreshVariables_88 (def :  pcf.WizardMenuActions) : void {
      def.refreshVariables(jobWizardHelper,rewrite,policyPeriod)
    }
    
    // 'mode' attribute on WizardStepSetRef at RewriteWizard.pcf: line 102, column 41
    function mode_44 () : java.lang.Object {
      return policy.Product.PublicID
    }
    
    // 'mode' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 131, column 41
    function mode_60 () : java.lang.Object {
      return productCode
    }
    
    // 'onConcurrentDataChange' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function onConcurrentDataChange_89 () : void {
      CurrentLocation.cancel(); JobForward.go(job)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 89, column 56
    function onEnter_12 () : void {
      if ( openForEdit ) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncOffering(policyPeriod, jobWizardHelper );                                                  gw.web.productmodel.ProductModelSyncIssuesHandler.syncQuestions({policyPeriod}, jobWizardHelper )}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PolicyInfo) at RewriteWizard.pcf: line 99, column 75
    function onEnter_17 () : void {
      if ( openForEdit ) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyTerm( policyPeriod, jobWizardHelper ) }
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PolicyReview) at RewriteWizard.pcf: line 116, column 69
    function onEnter_50 () : void {
      policyPeriod.AllAccountSyncables.each(\ a -> a.prepareForDiff())
    }
    
    // 'onEnter' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 148, column 70
    function onEnter_73 () : void {
      policyPeriodBillingInstructionsManager.populateFromPolicyPeriod(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 89, column 56
    function onExit_13 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod); if ( openForEdit) {                     gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyTerm(policyPeriod, jobWizardHelper);                     gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyLines(jobWizardHelper)               }
    }
    
    // 'onExit' attribute on JobWizardStep (id=PolicyInfo) at RewriteWizard.pcf: line 99, column 75
    function onExit_18 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=RiskAnalysis) at RewriteWizard.pcf: line 110, column 151
    function onExit_46 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=PolicyReview) at RewriteWizard.pcf: line 116, column 69
    function onExit_51 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewQuote) at RewriteWizard.pcf: line 123, column 42
    function onExit_55 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 131, column 41
    function onExit_61 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Forms) at RewriteWizard.pcf: line 138, column 87
    function onExit_67 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 148, column 70
    function onExit_74 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'parent' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    static function parent_90 (policyPeriod :  PolicyPeriod, rewrite :  Rewrite, wizardStep :  String) : pcf.api.Destination {
      return pcf.JobForward.createDestination(rewrite)
    }
    
    // 'save' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 89, column 56
    function save_14 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'save' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 148, column 70
    function save_75 () : java.lang.Boolean {
      return (!policyPeriod.Promoted and perm.Rewrite.edit(rewrite))
    }
    
    // 'screen' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 89, column 56
    function screen_onEnter_15 (def :  pcf.OfferingScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyInfo) at RewriteWizard.pcf: line 99, column 75
    function screen_onEnter_20 (def :  pcf.RewriteWizard_PolicyInfoScreen) : void {
      def.onEnter(policyPeriod, rewrite, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at RewriteWizard.pcf: line 110, column 151
    function screen_onEnter_48 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyReview) at RewriteWizard.pcf: line 116, column 69
    function screen_onEnter_52 (def :  pcf.RewriteWizard_DifferencesScreen) : void {
      def.onEnter(policyPeriod,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at RewriteWizard.pcf: line 123, column 42
    function screen_onEnter_56 (def :  pcf.RewriteWizard_QuoteScreen) : void {
      def.onEnter(job, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 131, column 41
    function screen_onEnter_62 (def :  pcf.RewriteWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 131, column 41
    function screen_onEnter_64 (def :  pcf.RewriteWizard_MultiLine_QuoteScreen_default) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Forms) at RewriteWizard.pcf: line 138, column 87
    function screen_onEnter_69 (def :  pcf.FormsScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 148, column 70
    function screen_onEnter_76 (def :  pcf.RewriteWizard_PaymentScreen) : void {
      def.onEnter(rewrite, policyPeriod, billingPageEditable, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'screen' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 89, column 56
    function screen_refreshVariables_16 (def :  pcf.OfferingScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyInfo) at RewriteWizard.pcf: line 99, column 75
    function screen_refreshVariables_21 (def :  pcf.RewriteWizard_PolicyInfoScreen) : void {
      def.refreshVariables(policyPeriod, rewrite, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at RewriteWizard.pcf: line 110, column 151
    function screen_refreshVariables_49 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyReview) at RewriteWizard.pcf: line 116, column 69
    function screen_refreshVariables_53 (def :  pcf.RewriteWizard_DifferencesScreen) : void {
      def.refreshVariables(policyPeriod,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at RewriteWizard.pcf: line 123, column 42
    function screen_refreshVariables_57 (def :  pcf.RewriteWizard_QuoteScreen) : void {
      def.refreshVariables(job, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 131, column 41
    function screen_refreshVariables_63 (def :  pcf.RewriteWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 131, column 41
    function screen_refreshVariables_65 (def :  pcf.RewriteWizard_MultiLine_QuoteScreen_default) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Forms) at RewriteWizard.pcf: line 138, column 87
    function screen_refreshVariables_70 (def :  pcf.FormsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 148, column 70
    function screen_refreshVariables_77 (def :  pcf.RewriteWizard_PaymentScreen) : void {
      def.refreshVariables(rewrite, policyPeriod, billingPageEditable, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'subtitle' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function subtitle_94 () : java.lang.String {
      return policyPeriod.Status.DisplayName
    }
    
    // 'tabBar' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function tabBar_onEnter_91 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function tabBar_refreshVariables_92 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    static function title_93 (policyPeriod :  PolicyPeriod, rewrite :  Rewrite, wizardStep :  String) : java.lang.Object {
      return DisplayKey.get("Web.RewriteWizard.Title", rewrite.JobNumber)
    }
    
    // 'visible' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 89, column 56
    function visible_10 () : java.lang.Boolean {
      return policy.Product.Offerings.Count > 0
    }
    
    // 'visible' attribute on JobWizardStep (id=RiskAnalysis) at RewriteWizard.pcf: line 110, column 151
    function visible_45 () : java.lang.Boolean {
      return perm.System.viewriskevalissues or perm.System.viewriskpriorpolicies or perm.System.viewriskclaims or perm.System.viewriskpriorlosses
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewQuote) at RewriteWizard.pcf: line 123, column 42
    function visible_54 () : java.lang.Boolean {
      return !policyPeriod.MultiLine
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 131, column 41
    function visible_59 () : java.lang.Boolean {
      return policyPeriod.MultiLine
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=ViewQuote) at RewriteWizard.pcf: line 123, column 42
    function wizardStepAvailable_58 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewQuote()
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=Forms) at RewriteWizard.pcf: line 138, column 87
    function wizardStepAvailable_71 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewForms()
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 148, column 70
    function wizardStepAvailable_78 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewBillingInfo()
    }
    
    override property get CurrentLocation () : pcf.RewriteWizard {
      return super.CurrentLocation as pcf.RewriteWizard
    }
    
    property get account () : entity.Account {
      return getVariableValue("account", 0) as entity.Account
    }
    
    property set account ($arg :  entity.Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get billingPageEditable () : boolean {
      return getVariableValue("billingPageEditable", 0) as java.lang.Boolean
    }
    
    property set billingPageEditable ($arg :  boolean) {
      setVariableValue("billingPageEditable", 0, $arg)
    }
    
    property get job () : entity.Rewrite {
      return getVariableValue("job", 0) as entity.Rewrite
    }
    
    property set job ($arg :  entity.Rewrite) {
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
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getVariableValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setVariableValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    property get productCode () : String {
      return getVariableValue("productCode", 0) as String
    }
    
    property set productCode ($arg :  String) {
      setVariableValue("productCode", 0, $arg)
    }
    
    property get rewrite () : Rewrite {
      return getVariableValue("rewrite", 0) as Rewrite
    }
    
    property set rewrite ($arg :  Rewrite) {
      setVariableValue("rewrite", 0, $arg)
    }
    
    property get sxsCache () : gw.pcf.sidebyside.SideBySideScreenCache {
      return getVariableValue("sxsCache", 0) as gw.pcf.sidebyside.SideBySideScreenCache
    }
    
    property set sxsCache ($arg :  gw.pcf.sidebyside.SideBySideScreenCache) {
      setVariableValue("sxsCache", 0, $arg)
    }
    
    property get wizardStep () : String {
      return getVariableValue("wizardStep", 0) as String
    }
    
    property set wizardStep ($arg :  String) {
      setVariableValue("wizardStep", 0, $arg)
    }
    
    
  }
  
  
}