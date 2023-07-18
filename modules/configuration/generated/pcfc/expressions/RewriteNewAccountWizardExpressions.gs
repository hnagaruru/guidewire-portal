package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/RewriteNewAccountWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RewriteNewAccountWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewritenewaccount/RewriteNewAccountWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RewriteNewAccountWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (rewriteNewAccount :  RewriteNewAccount, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    static function __constructorIndex (rewriteNewAccount :  RewriteNewAccount, policyPeriod :  PolicyPeriod, wizardStep :  String) : int {
      return 1
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    function acceleratedMenuActions_onEnter_90 (def :  pcf.BlankAcceleratedMenuActions) : void {
      def.onEnter()
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    function acceleratedMenuActions_refreshVariables_91 (def :  pcf.BlankAcceleratedMenuActions) : void {
      def.refreshVariables()
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Offering) at RewriteNewAccountWizard.pcf: line 97, column 56
    function beforeSave_13 () : void {
      gw.policy.PolicyPeriodValidation.validateOfferingAnswers(policyPeriod)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Qualification) at RewriteNewAccountWizard.pcf: line 106, column 35
    function beforeSave_20 () : void {
      gw.question.IncorrectAnswerProcessor.processIncorrectAnswers(policyPeriod, incorrectAnswerMap); gw.policy.PolicyPeriodValidation.validatePreQualAnswers(policyPeriod)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=BillingInfo) at RewriteNewAccountWizard.pcf: line 165, column 70
    function beforeSave_81 () : void {
      policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod)
    }
    
    // 'canEdit' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    function canEdit_92 () : java.lang.Boolean {
      return not job.Complete
    }
    
    // 'canVisit' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    static function canVisit_93 (policyPeriod :  PolicyPeriod, rewriteNewAccount :  RewriteNewAccount, wizardStep :  String) : java.lang.Boolean {
      return perm.RewriteNewAccount.view(rewriteNewAccount)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_onEnter_31 (def :  pcf.LineWizardStepSet_BusinessAuto) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_onEnter_33 (def :  pcf.LineWizardStepSet_BusinessOwners) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_onEnter_35 (def :  pcf.LineWizardStepSet_CommercialPackage) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_onEnter_37 (def :  pcf.LineWizardStepSet_CommercialProperty) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_onEnter_39 (def :  pcf.LineWizardStepSet_GeneralLiability) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_onEnter_41 (def :  pcf.LineWizardStepSet_HOPHomeowners) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_onEnter_43 (def :  pcf.LineWizardStepSet_InlandMarine) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_onEnter_45 (def :  pcf.LineWizardStepSet_Manual) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_onEnter_47 (def :  pcf.LineWizardStepSet_PersonalAuto) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_onEnter_49 (def :  pcf.LineWizardStepSet_WorkersComp) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_onEnter_51 (def :  pcf.LineWizardStepSet_default) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 167, column 87
    function def_onEnter_88 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.onEnter(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_refreshVariables_32 (def :  pcf.LineWizardStepSet_BusinessAuto) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_refreshVariables_34 (def :  pcf.LineWizardStepSet_BusinessOwners) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_refreshVariables_36 (def :  pcf.LineWizardStepSet_CommercialPackage) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_refreshVariables_38 (def :  pcf.LineWizardStepSet_CommercialProperty) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_refreshVariables_40 (def :  pcf.LineWizardStepSet_GeneralLiability) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_refreshVariables_42 (def :  pcf.LineWizardStepSet_HOPHomeowners) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_refreshVariables_44 (def :  pcf.LineWizardStepSet_InlandMarine) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_refreshVariables_46 (def :  pcf.LineWizardStepSet_Manual) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_refreshVariables_48 (def :  pcf.LineWizardStepSet_PersonalAuto) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_refreshVariables_50 (def :  pcf.LineWizardStepSet_WorkersComp) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function def_refreshVariables_52 (def :  pcf.LineWizardStepSet_default) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 167, column 87
    function def_refreshVariables_89 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod, sxsCache)
    }
    
    // 'infoBar' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    function infoBar_onEnter_94 (def :  pcf.JobWizardInfoBar) : void {
      def.onEnter(rewriteNewAccount, policyPeriod)
    }
    
    // 'infoBar' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    function infoBar_refreshVariables_95 (def :  pcf.JobWizardInfoBar) : void {
      def.refreshVariables(rewriteNewAccount, policyPeriod)
    }
    
    // 'initialStep' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    function initialStep_104 () : java.lang.String {
      return wizardStep == null ? jobWizardHelper.getInitialWizardStepId(policyPeriod) : wizardStep
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard.pcf: line 37, column 75
    function initialValue_0 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> policyPeriod.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard.pcf: line 42, column 33
    function initialValue_1 () : java.lang.Boolean {
      return openForEditInit.get()
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard.pcf: line 84, column 65
    function initialValue_10 () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return new gw.billing.PolicyPeriodBillingInstructionsManager()
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard.pcf: line 88, column 55
    function initialValue_11 () : gw.pcf.sidebyside.SideBySideScreenCache {
      return new gw.pcf.sidebyside.SideBySideScreenCache()
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard.pcf: line 47, column 30
    function initialValue_2 () : entity.Account {
      return policyPeriod.Policy.Account
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard.pcf: line 51, column 40
    function initialValue_3 () : entity.RewriteNewAccount {
      return rewriteNewAccount
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard.pcf: line 56, column 29
    function initialValue_4 () : entity.Policy {
      return policyPeriod.Policy
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard.pcf: line 60, column 22
    function initialValue_5 () : String {
      return policy.Product.PublicID
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard.pcf: line 64, column 23
    function initialValue_6 () : boolean {
      return policy.Product.getAvailableQuestionSetsByType(QuestionSetType.TC_PREQUAL, policyPeriod).Count > 0
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard.pcf: line 68, column 73
    function initialValue_7 () : java.util.Map<gw.api.productmodel.Question, String> {
      return new java.util.HashMap<gw.api.productmodel.Question, String>()
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard.pcf: line 72, column 46
    function initialValue_8 () : gw.api.web.job.JobWizardHelper {
      return new gw.api.web.job.JobWizardHelper(CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at RewriteNewAccountWizard.pcf: line 77, column 23
    function initialValue_9 () : boolean {
      return !policyPeriod.Promoted
    }
    
    // 'menuActions' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    function menuActions_onEnter_96 (def :  pcf.WizardMenuActions) : void {
      def.onEnter(jobWizardHelper,rewriteNewAccount,policyPeriod)
    }
    
    // 'menuActions' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    function menuActions_refreshVariables_97 (def :  pcf.WizardMenuActions) : void {
      def.refreshVariables(jobWizardHelper,rewriteNewAccount,policyPeriod)
    }
    
    // 'mode' attribute on WizardStepSetRef at RewriteNewAccountWizard.pcf: line 119, column 41
    function mode_53 () : java.lang.Object {
      return policy.Product.PublicID
    }
    
    // 'mode' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteNewAccountWizard.pcf: line 148, column 41
    function mode_69 () : java.lang.Object {
      return productCode
    }
    
    // 'onConcurrentDataChange' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    function onConcurrentDataChange_98 () : void {
      CurrentLocation.cancel(); JobForward.go(job)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Offering) at RewriteNewAccountWizard.pcf: line 97, column 56
    function onEnter_14 () : void {
      if ( openForEdit ) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncOffering(policyPeriod, jobWizardHelper );                                                  gw.web.productmodel.ProductModelSyncIssuesHandler.syncQuestions({policyPeriod}, jobWizardHelper )}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Qualification) at RewriteNewAccountWizard.pcf: line 106, column 35
    function onEnter_21 () : void {
      if(openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncQuestions( {policyPeriod}, jobWizardHelper )}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PolicyInfo) at RewriteNewAccountWizard.pcf: line 116, column 85
    function onEnter_26 () : void {
      if ( openForEdit ) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyTerm( policyPeriod, jobWizardHelper ) }
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PolicyReview) at RewriteNewAccountWizard.pcf: line 133, column 79
    function onEnter_59 () : void {
      policyPeriod.AllAccountSyncables.each(\ a -> a.prepareForDiff())
    }
    
    // 'onEnter' attribute on JobWizardStep (id=BillingInfo) at RewriteNewAccountWizard.pcf: line 165, column 70
    function onEnter_82 () : void {
      policyPeriodBillingInstructionsManager.populateFromPolicyPeriod(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Offering) at RewriteNewAccountWizard.pcf: line 97, column 56
    function onExit_15 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod); if ( openForEdit) {                     gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyTerm(policyPeriod, jobWizardHelper);                     gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyLines(jobWizardHelper)               }
    }
    
    // 'onExit' attribute on JobWizardStep (id=Qualification) at RewriteNewAccountWizard.pcf: line 106, column 35
    function onExit_22 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=PolicyInfo) at RewriteNewAccountWizard.pcf: line 116, column 85
    function onExit_27 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=RiskAnalysis) at RewriteNewAccountWizard.pcf: line 127, column 151
    function onExit_55 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=PolicyReview) at RewriteNewAccountWizard.pcf: line 133, column 79
    function onExit_60 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewQuote) at RewriteNewAccountWizard.pcf: line 140, column 42
    function onExit_64 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteNewAccountWizard.pcf: line 148, column 41
    function onExit_70 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Forms) at RewriteNewAccountWizard.pcf: line 155, column 87
    function onExit_76 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=BillingInfo) at RewriteNewAccountWizard.pcf: line 165, column 70
    function onExit_83 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'parent' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    static function parent_99 (policyPeriod :  PolicyPeriod, rewriteNewAccount :  RewriteNewAccount, wizardStep :  String) : pcf.api.Destination {
      return pcf.JobForward.createDestination(rewriteNewAccount)
    }
    
    // 'save' attribute on JobWizardStep (id=Offering) at RewriteNewAccountWizard.pcf: line 97, column 56
    function save_16 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'save' attribute on JobWizardStep (id=BillingInfo) at RewriteNewAccountWizard.pcf: line 165, column 70
    function save_84 () : java.lang.Boolean {
      return (!policyPeriod.Promoted)
    }
    
    // 'screen' attribute on JobWizardStep (id=Offering) at RewriteNewAccountWizard.pcf: line 97, column 56
    function screen_onEnter_17 (def :  pcf.OfferingScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Qualification) at RewriteNewAccountWizard.pcf: line 106, column 35
    function screen_onEnter_24 (def :  pcf.RewriteNewAccountWizard_PreQualificationScreen) : void {
      def.onEnter(rewriteNewAccount, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyInfo) at RewriteNewAccountWizard.pcf: line 116, column 85
    function screen_onEnter_29 (def :  pcf.RewriteNewAccountWizard_PolicyInfoScreen) : void {
      def.onEnter(policyPeriod, rewriteNewAccount, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at RewriteNewAccountWizard.pcf: line 127, column 151
    function screen_onEnter_57 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyReview) at RewriteNewAccountWizard.pcf: line 133, column 79
    function screen_onEnter_61 (def :  pcf.RewriteNewAccountWizard_PolicyReviewScreen) : void {
      def.onEnter(rewriteNewAccount, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at RewriteNewAccountWizard.pcf: line 140, column 42
    function screen_onEnter_65 (def :  pcf.RewriteNewAccountWizard_QuoteScreen) : void {
      def.onEnter(job, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteNewAccountWizard.pcf: line 148, column 41
    function screen_onEnter_71 (def :  pcf.RewriteNewAccountWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteNewAccountWizard.pcf: line 148, column 41
    function screen_onEnter_73 (def :  pcf.RewriteNewAccountWizard_MultiLine_QuoteScreen_default) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Forms) at RewriteNewAccountWizard.pcf: line 155, column 87
    function screen_onEnter_78 (def :  pcf.FormsScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at RewriteNewAccountWizard.pcf: line 165, column 70
    function screen_onEnter_85 (def :  pcf.RewriteNewAccountWizard_PaymentScreen) : void {
      def.onEnter(rewriteNewAccount, policyPeriod, billingPageEditable, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'screen' attribute on JobWizardStep (id=Offering) at RewriteNewAccountWizard.pcf: line 97, column 56
    function screen_refreshVariables_18 (def :  pcf.OfferingScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Qualification) at RewriteNewAccountWizard.pcf: line 106, column 35
    function screen_refreshVariables_25 (def :  pcf.RewriteNewAccountWizard_PreQualificationScreen) : void {
      def.refreshVariables(rewriteNewAccount, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyInfo) at RewriteNewAccountWizard.pcf: line 116, column 85
    function screen_refreshVariables_30 (def :  pcf.RewriteNewAccountWizard_PolicyInfoScreen) : void {
      def.refreshVariables(policyPeriod, rewriteNewAccount, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at RewriteNewAccountWizard.pcf: line 127, column 151
    function screen_refreshVariables_58 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyReview) at RewriteNewAccountWizard.pcf: line 133, column 79
    function screen_refreshVariables_62 (def :  pcf.RewriteNewAccountWizard_PolicyReviewScreen) : void {
      def.refreshVariables(rewriteNewAccount, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at RewriteNewAccountWizard.pcf: line 140, column 42
    function screen_refreshVariables_66 (def :  pcf.RewriteNewAccountWizard_QuoteScreen) : void {
      def.refreshVariables(job, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteNewAccountWizard.pcf: line 148, column 41
    function screen_refreshVariables_72 (def :  pcf.RewriteNewAccountWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteNewAccountWizard.pcf: line 148, column 41
    function screen_refreshVariables_74 (def :  pcf.RewriteNewAccountWizard_MultiLine_QuoteScreen_default) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Forms) at RewriteNewAccountWizard.pcf: line 155, column 87
    function screen_refreshVariables_79 (def :  pcf.FormsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at RewriteNewAccountWizard.pcf: line 165, column 70
    function screen_refreshVariables_86 (def :  pcf.RewriteNewAccountWizard_PaymentScreen) : void {
      def.refreshVariables(rewriteNewAccount, policyPeriod, billingPageEditable, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'subtitle' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    function subtitle_103 () : java.lang.String {
      return policyPeriod.Status.DisplayName
    }
    
    // 'tabBar' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    function tabBar_onEnter_100 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    function tabBar_refreshVariables_101 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on JobWizard (id=RewriteNewAccountWizard) at RewriteNewAccountWizard.pcf: line 22, column 104
    static function title_102 (policyPeriod :  PolicyPeriod, rewriteNewAccount :  RewriteNewAccount, wizardStep :  String) : java.lang.Object {
      return DisplayKey.get("Web.RewriteNewAccountWizard.Title", rewriteNewAccount.JobNumber)
    }
    
    // 'visible' attribute on JobWizardStep (id=Offering) at RewriteNewAccountWizard.pcf: line 97, column 56
    function visible_12 () : java.lang.Boolean {
      return policy.Product.Offerings.Count > 0
    }
    
    // 'visible' attribute on JobWizardStep (id=Qualification) at RewriteNewAccountWizard.pcf: line 106, column 35
    function visible_19 () : java.lang.Boolean {
      return preQualNecessary
    }
    
    // 'visible' attribute on JobWizardStep (id=RiskAnalysis) at RewriteNewAccountWizard.pcf: line 127, column 151
    function visible_54 () : java.lang.Boolean {
      return perm.System.viewriskevalissues or perm.System.viewriskpriorpolicies or perm.System.viewriskclaims or perm.System.viewriskpriorlosses
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewQuote) at RewriteNewAccountWizard.pcf: line 140, column 42
    function visible_63 () : java.lang.Boolean {
      return !policyPeriod.MultiLine
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteNewAccountWizard.pcf: line 148, column 41
    function visible_68 () : java.lang.Boolean {
      return policyPeriod.MultiLine
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=ViewQuote) at RewriteNewAccountWizard.pcf: line 140, column 42
    function wizardStepAvailable_67 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewQuote()
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=Forms) at RewriteNewAccountWizard.pcf: line 155, column 87
    function wizardStepAvailable_80 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewForms()
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=BillingInfo) at RewriteNewAccountWizard.pcf: line 165, column 70
    function wizardStepAvailable_87 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewBillingInfo()
    }
    
    override property get CurrentLocation () : pcf.RewriteNewAccountWizard {
      return super.CurrentLocation as pcf.RewriteNewAccountWizard
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
    
    property get incorrectAnswerMap () : java.util.Map<gw.api.productmodel.Question, String> {
      return getVariableValue("incorrectAnswerMap", 0) as java.util.Map<gw.api.productmodel.Question, String>
    }
    
    property set incorrectAnswerMap ($arg :  java.util.Map<gw.api.productmodel.Question, String>) {
      setVariableValue("incorrectAnswerMap", 0, $arg)
    }
    
    property get job () : entity.RewriteNewAccount {
      return getVariableValue("job", 0) as entity.RewriteNewAccount
    }
    
    property set job ($arg :  entity.RewriteNewAccount) {
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
    
    property get rewriteNewAccount () : RewriteNewAccount {
      return getVariableValue("rewriteNewAccount", 0) as RewriteNewAccount
    }
    
    property set rewriteNewAccount ($arg :  RewriteNewAccount) {
      setVariableValue("rewriteNewAccount", 0, $arg)
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