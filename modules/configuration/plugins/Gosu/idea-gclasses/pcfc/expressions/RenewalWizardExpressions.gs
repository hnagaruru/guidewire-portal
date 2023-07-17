package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/renewal/RenewalWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RenewalWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/renewal/RenewalWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RenewalWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (renewal :  Renewal, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    static function __constructorIndex (renewal :  Renewal, policyPeriod :  PolicyPeriod, wizardStep :  String) : int {
      return 1
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    function acceleratedMenuActions_onEnter_79 (def :  pcf.MultiQuoteAcceleratedMenuActions) : void {
      def.onEnter(renewal,policyPeriod,jobWizardHelper)
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    function acceleratedMenuActions_refreshVariables_80 (def :  pcf.MultiQuoteAcceleratedMenuActions) : void {
      def.refreshVariables(renewal,policyPeriod,jobWizardHelper)
    }
    
    // 'available' attribute on WizardStepSet (id=PostQuoteWizardStepSet) at RenewalWizard.pcf: line 114, column 35
    function available_76 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewQuote()
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Offering) at RenewalWizard.pcf: line 84, column 56
    function beforeSave_10 () : void {
      gw.policy.PolicyPeriodValidation.validateOfferingAnswers(policyPeriod)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=BillingInfo) at RenewalWizard.pcf: line 144, column 76
    function beforeSave_69 () : void {
      policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod)
    }
    
    // 'canEdit' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    function canEdit_81 () : java.lang.Boolean {
      return (not job.Complete) and perm.Renewal.edit(renewal)
    }
    
    // 'canVisit' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    static function canVisit_82 (policyPeriod :  PolicyPeriod, renewal :  Renewal, wizardStep :  String) : java.lang.Boolean {
      return perm.Renewal.view(renewal)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_onEnter_21 (def :  pcf.LineWizardStepSet_BusinessAuto) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_onEnter_23 (def :  pcf.LineWizardStepSet_BusinessOwners) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_onEnter_25 (def :  pcf.LineWizardStepSet_CommercialPackage) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_onEnter_27 (def :  pcf.LineWizardStepSet_CommercialProperty) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_onEnter_29 (def :  pcf.LineWizardStepSet_GeneralLiability) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_onEnter_31 (def :  pcf.LineWizardStepSet_HOPHomeowners) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_onEnter_33 (def :  pcf.LineWizardStepSet_InlandMarine) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_onEnter_35 (def :  pcf.LineWizardStepSet_Manual) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_onEnter_37 (def :  pcf.LineWizardStepSet_PersonalAuto) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_onEnter_39 (def :  pcf.LineWizardStepSet_WorkersComp) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_onEnter_41 (def :  pcf.LineWizardStepSet_default) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 147, column 87
    function def_onEnter_77 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.onEnter(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_refreshVariables_22 (def :  pcf.LineWizardStepSet_BusinessAuto) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_refreshVariables_24 (def :  pcf.LineWizardStepSet_BusinessOwners) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_refreshVariables_26 (def :  pcf.LineWizardStepSet_CommercialPackage) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_refreshVariables_28 (def :  pcf.LineWizardStepSet_CommercialProperty) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_refreshVariables_30 (def :  pcf.LineWizardStepSet_GeneralLiability) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_refreshVariables_32 (def :  pcf.LineWizardStepSet_HOPHomeowners) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_refreshVariables_34 (def :  pcf.LineWizardStepSet_InlandMarine) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_refreshVariables_36 (def :  pcf.LineWizardStepSet_Manual) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_refreshVariables_38 (def :  pcf.LineWizardStepSet_PersonalAuto) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_refreshVariables_40 (def :  pcf.LineWizardStepSet_WorkersComp) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function def_refreshVariables_42 (def :  pcf.LineWizardStepSet_default) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RenewalWizard.pcf: line 147, column 87
    function def_refreshVariables_78 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'infoBar' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    function infoBar_onEnter_83 (def :  pcf.JobWizardInfoBar) : void {
      def.onEnter(renewal, policyPeriod)
    }
    
    // 'infoBar' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    function infoBar_refreshVariables_84 (def :  pcf.JobWizardInfoBar) : void {
      def.refreshVariables(renewal, policyPeriod)
    }
    
    // 'initialStep' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    function initialStep_93 () : java.lang.String {
      return wizardStep == null ? jobWizardHelper.getInitialWizardStepId(policyPeriod) : wizardStep
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard.pcf: line 37, column 75
    function initialValue_0 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> policyPeriod.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard.pcf: line 42, column 33
    function initialValue_1 () : java.lang.Boolean {
      return openForEditInit.get()
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard.pcf: line 46, column 30
    function initialValue_2 () : entity.Renewal {
      return renewal
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard.pcf: line 51, column 29
    function initialValue_3 () : entity.Policy {
      return policyPeriod.Policy
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard.pcf: line 55, column 22
    function initialValue_4 () : String {
      return policy.Product.PublicID
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard.pcf: line 59, column 46
    function initialValue_5 () : gw.api.web.job.JobWizardHelper {
      return new gw.api.web.job.JobWizardHelper(CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard.pcf: line 64, column 23
    function initialValue_6 () : boolean {
      return policyPeriod.Status == TC_QUOTED and perm.Renewal.edit(renewal)
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard.pcf: line 71, column 65
    function initialValue_7 () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return new gw.billing.PolicyPeriodBillingInstructionsManager()
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard.pcf: line 75, column 55
    function initialValue_8 () : gw.pcf.sidebyside.SideBySideScreenCache {
      return new gw.pcf.sidebyside.SideBySideScreenCache()
    }
    
    // 'menuActions' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    function menuActions_onEnter_85 (def :  pcf.WizardMenuActions) : void {
      def.onEnter(jobWizardHelper,renewal,policyPeriod)
    }
    
    // 'menuActions' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    function menuActions_refreshVariables_86 (def :  pcf.WizardMenuActions) : void {
      def.refreshVariables(jobWizardHelper,renewal,policyPeriod)
    }
    
    // 'mode' attribute on WizardStepSetRef at RenewalWizard.pcf: line 97, column 29
    function mode_43 () : java.lang.Object {
      return productCode
    }
    
    // 'onConcurrentDataChange' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    function onConcurrentDataChange_87 () : void {
      CurrentLocation.cancel(); JobForward.go(job)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Offering) at RenewalWizard.pcf: line 84, column 56
    function onEnter_11 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncOffering(policyPeriod, jobWizardHelper );                                                  gw.web.productmodel.ProductModelSyncIssuesHandler.syncQuestions({policyPeriod}, jobWizardHelper )}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PolicyInfo) at RenewalWizard.pcf: line 94, column 79
    function onEnter_16 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyTerm(policyPeriod, jobWizardHelper) }
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PolicyReview) at RenewalWizard.pcf: line 110, column 69
    function onEnter_49 () : void {
      policyPeriod.AllAccountSyncables.each(\ a -> a.prepareForDiff())
    }
    
    // 'onEnter' attribute on JobWizardStep (id=BillingInfo) at RenewalWizard.pcf: line 144, column 76
    function onEnter_70 () : void {
      policyPeriodBillingInstructionsManager.populateFromPolicyPeriod(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Offering) at RenewalWizard.pcf: line 84, column 56
    function onExit_12 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod); if (openForEdit) {                     gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyTerm(policyPeriod, jobWizardHelper);                     gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyLines(jobWizardHelper)               }
    }
    
    // 'onExit' attribute on JobWizardStep (id=PolicyInfo) at RenewalWizard.pcf: line 94, column 79
    function onExit_17 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=RiskAnalysis) at RenewalWizard.pcf: line 104, column 153
    function onExit_45 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=PolicyReview) at RenewalWizard.pcf: line 110, column 69
    function onExit_50 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewQuote) at RenewalWizard.pcf: line 120, column 44
    function onExit_54 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewMultiLineQuote) at RenewalWizard.pcf: line 127, column 43
    function onExit_59 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Forms) at RenewalWizard.pcf: line 134, column 89
    function onExit_64 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=BillingInfo) at RenewalWizard.pcf: line 144, column 76
    function onExit_71 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'parent' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    static function parent_88 (policyPeriod :  PolicyPeriod, renewal :  Renewal, wizardStep :  String) : pcf.api.Destination {
      return pcf.JobForward.createDestination(renewal)
    }
    
    // 'save' attribute on JobWizardStep (id=Offering) at RenewalWizard.pcf: line 84, column 56
    function save_13 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'save' attribute on JobWizardStep (id=BillingInfo) at RenewalWizard.pcf: line 144, column 76
    function save_72 () : java.lang.Boolean {
      return policyPeriod.Status == TC_QUOTED and perm.Renewal.edit(renewal)
    }
    
    // 'screen' attribute on JobWizardStep (id=Offering) at RenewalWizard.pcf: line 84, column 56
    function screen_onEnter_14 (def :  pcf.OfferingScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyInfo) at RenewalWizard.pcf: line 94, column 79
    function screen_onEnter_19 (def :  pcf.RenewalWizard_PolicyInfoScreen) : void {
      def.onEnter(renewal, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at RenewalWizard.pcf: line 104, column 153
    function screen_onEnter_47 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyReview) at RenewalWizard.pcf: line 110, column 69
    function screen_onEnter_51 (def :  pcf.RenewalWizard_DifferencesScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at RenewalWizard.pcf: line 120, column 44
    function screen_onEnter_55 (def :  pcf.RenewalWizard_QuoteScreen) : void {
      def.onEnter(renewal, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RenewalWizard.pcf: line 127, column 43
    function screen_onEnter_60 (def :  pcf.RenewalWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.onEnter(renewal, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RenewalWizard.pcf: line 127, column 43
    function screen_onEnter_62 (def :  pcf.RenewalWizard_MultiLine_QuoteScreen_default) : void {
      def.onEnter(renewal, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Forms) at RenewalWizard.pcf: line 134, column 89
    function screen_onEnter_66 (def :  pcf.FormsScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at RenewalWizard.pcf: line 144, column 76
    function screen_onEnter_73 (def :  pcf.RenewalWizard_PaymentScreen) : void {
      def.onEnter(renewal, policyPeriod, billingPageEditable, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'screen' attribute on JobWizardStep (id=Offering) at RenewalWizard.pcf: line 84, column 56
    function screen_refreshVariables_15 (def :  pcf.OfferingScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyInfo) at RenewalWizard.pcf: line 94, column 79
    function screen_refreshVariables_20 (def :  pcf.RenewalWizard_PolicyInfoScreen) : void {
      def.refreshVariables(renewal, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at RenewalWizard.pcf: line 104, column 153
    function screen_refreshVariables_48 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyReview) at RenewalWizard.pcf: line 110, column 69
    function screen_refreshVariables_52 (def :  pcf.RenewalWizard_DifferencesScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at RenewalWizard.pcf: line 120, column 44
    function screen_refreshVariables_56 (def :  pcf.RenewalWizard_QuoteScreen) : void {
      def.refreshVariables(renewal, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RenewalWizard.pcf: line 127, column 43
    function screen_refreshVariables_61 (def :  pcf.RenewalWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.refreshVariables(renewal, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RenewalWizard.pcf: line 127, column 43
    function screen_refreshVariables_63 (def :  pcf.RenewalWizard_MultiLine_QuoteScreen_default) : void {
      def.refreshVariables(renewal, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Forms) at RenewalWizard.pcf: line 134, column 89
    function screen_refreshVariables_67 (def :  pcf.FormsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at RenewalWizard.pcf: line 144, column 76
    function screen_refreshVariables_74 (def :  pcf.RenewalWizard_PaymentScreen) : void {
      def.refreshVariables(renewal, policyPeriod, billingPageEditable, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'subtitle' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    function subtitle_92 () : java.lang.String {
      return policyPeriod.Status.DisplayName
    }
    
    // 'tabBar' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    function tabBar_onEnter_89 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    function tabBar_refreshVariables_90 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on JobWizard (id=RenewalWizard) at RenewalWizard.pcf: line 22, column 84
    static function title_91 (policyPeriod :  PolicyPeriod, renewal :  Renewal, wizardStep :  String) : java.lang.Object {
      return DisplayKey.get("Web.RenewalWizard.Title", renewal.JobNumber)
    }
    
    // 'visible' attribute on JobWizardStep (id=RiskAnalysis) at RenewalWizard.pcf: line 104, column 153
    function visible_44 () : java.lang.Boolean {
      return perm.System.viewriskevalissues or perm.System.viewriskpriorpolicies or perm.System.viewriskclaims or perm.System.viewriskpriorlosses
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewQuote) at RenewalWizard.pcf: line 120, column 44
    function visible_53 () : java.lang.Boolean {
      return !policyPeriod.MultiLine
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewMultiLineQuote) at RenewalWizard.pcf: line 127, column 43
    function visible_57 () : java.lang.Boolean {
      return policyPeriod.MultiLine
    }
    
    // 'visible' attribute on JobWizardStep (id=Offering) at RenewalWizard.pcf: line 84, column 56
    function visible_9 () : java.lang.Boolean {
      return policy.Product.Offerings.Count > 0
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=Forms) at RenewalWizard.pcf: line 134, column 89
    function wizardStepAvailable_68 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewForms()
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=BillingInfo) at RenewalWizard.pcf: line 144, column 76
    function wizardStepAvailable_75 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewBillingInfo()
    }
    
    override property get CurrentLocation () : pcf.RenewalWizard {
      return super.CurrentLocation as pcf.RenewalWizard
    }
    
    property get billingPageEditable () : boolean {
      return getVariableValue("billingPageEditable", 0) as java.lang.Boolean
    }
    
    property set billingPageEditable ($arg :  boolean) {
      setVariableValue("billingPageEditable", 0, $arg)
    }
    
    property get job () : entity.Renewal {
      return getVariableValue("job", 0) as entity.Renewal
    }
    
    property set job ($arg :  entity.Renewal) {
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
    
    property get renewal () : Renewal {
      return getVariableValue("renewal", 0) as Renewal
    }
    
    property set renewal ($arg :  Renewal) {
      setVariableValue("renewal", 0, $arg)
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