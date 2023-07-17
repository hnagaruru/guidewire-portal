package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/job/LineWizardStepSet.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineWizardStepSet_CommercialPackageExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/job/LineWizardStepSet.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=GLLine) at LineWizardStepSet.CommercialPackage.pcf: line 51, column 70
    function beforeSave_10 () : void {
      gw.lob.gl.GLLineValidation.validatePolicyContacts(policyPeriod.GLLine)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=GLModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 65, column 50
    function beforeSave_20 () : void {
      gw.validation.ValidationUtil.checkCurrentResult()
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=CPBuildings) at LineWizardStepSet.CommercialPackage.pcf: line 82, column 87
    function beforeSave_29 () : void {
      gw.lob.cp.CPLineValidation.validateBuildings(policyPeriod.CPLine)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=CPBlanket) at LineWizardStepSet.CommercialPackage.pcf: line 88, column 74
    function beforeSave_34 () : void {
      gw.lob.cp.CPLineValidation.validateBlankets(policyPeriod.CPLine)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=CPModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 97, column 50
    function beforeSave_39 () : void {
      gw.lob.cp.CPLineValidation.validateModifiers(); gw.validation.ValidationUtil.checkCurrentResult()
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=CPPLocations) at LineWizardStepSet.CommercialPackage.pcf: line 33, column 73
    function beforeSave_4 () : void {
      gw.policy.PolicyLocationValidation.validateLocationsStep(policyPeriod.PolicyLocations)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=GLLine) at LineWizardStepSet.CommercialPackage.pcf: line 51, column 70
    function onEnter_11 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages(policyPeriod.GLLine.AllCoverables, jobWizardHelper)}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=GLModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 65, column 50
    function onEnter_21 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncModifiers(policyPeriod.GLLine.AllModifiables, jobWizardHelper)}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=CPModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 97, column 50
    function onEnter_40 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncModifiers( {policyPeriod.CPLine}, jobWizardHelper)}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=IMPartSelection) at LineWizardStepSet.CommercialPackage.pcf: line 119, column 82
    function onEnter_48 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages(policyPeriod.IMLine.AllCoverables, jobWizardHelper)}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=CPPLocations) at LineWizardStepSet.CommercialPackage.pcf: line 33, column 73
    function onEnter_5 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncQuestions( policyPeriod.PolicyLocations, jobWizardHelper)}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=CPPModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 154, column 48
    function onEnter_78 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncModifiers( {policyPeriod.EffectiveDatedFields}, jobWizardHelper) }
    }
    
    // 'onExit' attribute on JobWizardStep (id=CPPLineSelection) at LineWizardStepSet.CommercialPackage.pcf: line 25, column 95
    function onExit_0 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=GLLine) at LineWizardStepSet.CommercialPackage.pcf: line 51, column 70
    function onExit_12 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=GLModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 65, column 50
    function onExit_22 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=CPBuildings) at LineWizardStepSet.CommercialPackage.pcf: line 82, column 87
    function onExit_30 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=CPModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 97, column 50
    function onExit_41 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=IMPartSelection) at LineWizardStepSet.CommercialPackage.pcf: line 119, column 82
    function onExit_49 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=CPPLocations) at LineWizardStepSet.CommercialPackage.pcf: line 33, column 73
    function onExit_6 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=CPPModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 154, column 48
    function onExit_79 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'save' attribute on JobWizardStep (id=CPPLineSelection) at LineWizardStepSet.CommercialPackage.pcf: line 25, column 95
    function save_1 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=GLLine) at LineWizardStepSet.CommercialPackage.pcf: line 51, column 70
    function screen_onEnter_14 (def :  pcf.GeneralLiabilityScreen) : void {
      def.onEnter(job, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=GLLineEU) at LineWizardStepSet.CommercialPackage.pcf: line 56, column 85
    function screen_onEnter_17 (def :  pcf.GeneralLiabilityEUScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPPLineSelection) at LineWizardStepSet.CommercialPackage.pcf: line 25, column 95
    function screen_onEnter_2 (def :  pcf.CPPLineSelectionScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=GLModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 65, column 50
    function screen_onEnter_24 (def :  pcf.ModifiersScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.GLLine.GLModifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=GLReview) at LineWizardStepSet.CommercialPackage.pcf: line 69, column 94
    function screen_onEnter_26 (def :  pcf.CPPLineReviewScreen) : void {
      def.onEnter(policyPeriod.GLLine, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPBuildings) at LineWizardStepSet.CommercialPackage.pcf: line 82, column 87
    function screen_onEnter_32 (def :  pcf.CPBuildingsScreen) : void {
      def.onEnter(policyPeriod.CPLine, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPBlanket) at LineWizardStepSet.CommercialPackage.pcf: line 88, column 74
    function screen_onEnter_36 (def :  pcf.CPBlanketScreen) : void {
      def.onEnter(policyPeriod.CPLine, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 97, column 50
    function screen_onEnter_43 (def :  pcf.ModifiersScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.CPLine.CPModifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPReview) at LineWizardStepSet.CommercialPackage.pcf: line 101, column 94
    function screen_onEnter_45 (def :  pcf.CPPLineReviewScreen) : void {
      def.onEnter(policyPeriod.CPLine, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=IMPartSelection) at LineWizardStepSet.CommercialPackage.pcf: line 119, column 82
    function screen_onEnter_51 (def :  pcf.IMPartSelectionScreen) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Buildings) at LineWizardStepSet.CommercialPackage.pcf: line 125, column 87
    function screen_onEnter_55 (def :  pcf.IMBuildingsScreen) : void {
      def.onEnter(policyPeriod.IMLine, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=IMReview) at LineWizardStepSet.CommercialPackage.pcf: line 144, column 94
    function screen_onEnter_73 (def :  pcf.CPPLineReviewScreen) : void {
      def.onEnter(policyPeriod.IMLine, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPPLocations) at LineWizardStepSet.CommercialPackage.pcf: line 33, column 73
    function screen_onEnter_8 (def :  pcf.LocationsScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.SupportsNonSpecificLocations)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPPModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 154, column 48
    function screen_onEnter_81 (def :  pcf.ModifiersScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.EffectiveDatedFields.Modifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=GLLine) at LineWizardStepSet.CommercialPackage.pcf: line 51, column 70
    function screen_refreshVariables_15 (def :  pcf.GeneralLiabilityScreen) : void {
      def.refreshVariables(job, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=GLLineEU) at LineWizardStepSet.CommercialPackage.pcf: line 56, column 85
    function screen_refreshVariables_18 (def :  pcf.GeneralLiabilityEUScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=GLModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 65, column 50
    function screen_refreshVariables_25 (def :  pcf.ModifiersScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.GLLine.GLModifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=GLReview) at LineWizardStepSet.CommercialPackage.pcf: line 69, column 94
    function screen_refreshVariables_27 (def :  pcf.CPPLineReviewScreen) : void {
      def.refreshVariables(policyPeriod.GLLine, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPPLineSelection) at LineWizardStepSet.CommercialPackage.pcf: line 25, column 95
    function screen_refreshVariables_3 (def :  pcf.CPPLineSelectionScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPBuildings) at LineWizardStepSet.CommercialPackage.pcf: line 82, column 87
    function screen_refreshVariables_33 (def :  pcf.CPBuildingsScreen) : void {
      def.refreshVariables(policyPeriod.CPLine, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPBlanket) at LineWizardStepSet.CommercialPackage.pcf: line 88, column 74
    function screen_refreshVariables_37 (def :  pcf.CPBlanketScreen) : void {
      def.refreshVariables(policyPeriod.CPLine, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 97, column 50
    function screen_refreshVariables_44 (def :  pcf.ModifiersScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.CPLine.CPModifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPReview) at LineWizardStepSet.CommercialPackage.pcf: line 101, column 94
    function screen_refreshVariables_46 (def :  pcf.CPPLineReviewScreen) : void {
      def.refreshVariables(policyPeriod.CPLine, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=IMPartSelection) at LineWizardStepSet.CommercialPackage.pcf: line 119, column 82
    function screen_refreshVariables_52 (def :  pcf.IMPartSelectionScreen) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Buildings) at LineWizardStepSet.CommercialPackage.pcf: line 125, column 87
    function screen_refreshVariables_56 (def :  pcf.IMBuildingsScreen) : void {
      def.refreshVariables(policyPeriod.IMLine, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=IMReview) at LineWizardStepSet.CommercialPackage.pcf: line 144, column 94
    function screen_refreshVariables_74 (def :  pcf.CPPLineReviewScreen) : void {
      def.refreshVariables(policyPeriod.IMLine, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPPModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 154, column 48
    function screen_refreshVariables_82 (def :  pcf.ModifiersScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.EffectiveDatedFields.Modifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPPLocations) at LineWizardStepSet.CommercialPackage.pcf: line 33, column 73
    function screen_refreshVariables_9 (def :  pcf.LocationsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.SupportsNonSpecificLocations)
    }
    
    // 'value' attribute on WizardStepIterator at LineWizardStepSet.CommercialPackage.pcf: line 129, column 46
    function value_72 () : typekey.IMCoveragePart[] {
      return IMLine.definedParts().sortBy( \ part -> part.DisplayName )
    }
    
    // 'visible' attribute on JobWizardStep (id=GLModifiers) at LineWizardStepSet.CommercialPackage.pcf: line 65, column 50
    function visible_19 () : java.lang.Boolean {
      return policyPeriod.CanViewModifiers
    }
    
    // 'visible' attribute on WizardStepGroup (id=GLWizardStepGroup) at LineWizardStepSet.CommercialPackage.pcf: line 38, column 43
    function visible_28 () : java.lang.Boolean {
      return policyPeriod.GLLineExists
    }
    
    // 'visible' attribute on WizardStepGroup (id=CPWizardStepGroup) at LineWizardStepSet.CommercialPackage.pcf: line 75, column 43
    function visible_47 () : java.lang.Boolean {
      return policyPeriod.CPLineExists
    }
    
    // 'visible' attribute on WizardStepGroup (id=IMWizardStepGroup) at LineWizardStepSet.CommercialPackage.pcf: line 107, column 43
    function visible_75 () : java.lang.Boolean {
      return policyPeriod.IMLineExists
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cpp/job/LineWizardStepSet.CommercialPackage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class impartstepExpressionsImpl extends LineWizardStepSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function beforeSave_58 () : void {
      gw.lob.im.IMLineValidation.validateSinglePartAsPage( policyPeriod.IMLine.maybeCreateCoveragePart(imcoveragepart)); gw.lob.im.IMLineValidation.validateSupplementalQuestons( policyPeriod.IMLine )
    }
    
    // 'mode' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function mode_59 () : java.lang.Object {
      return imcoveragepart.Code
    }
    
    // 'onEnter' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function onEnter_60 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages(policyPeriod.IMLine.AllCoverables, jobWizardHelper); gw.web.productmodel.ProductModelSyncIssuesHandler.syncExclusions(policyPeriod.IMLine.AllCoverables, jobWizardHelper); gw.web.productmodel.ProductModelSyncIssuesHandler.syncQuestions({policyPeriod.IMLine}, jobWizardHelper) }
    }
    
    // 'onExit' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function onExit_61 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'save' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function save_62 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function screen_onEnter_63 (def :  pcf.IMPartScreen_ContractorsEquipPart) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function screen_onEnter_65 (def :  pcf.IMPartScreen_IMAccountsRecPart) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function screen_onEnter_67 (def :  pcf.IMPartScreen_IMSignPart) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function screen_onEnter_69 (def :  pcf.IMPartScreen_default) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function screen_refreshVariables_64 (def :  pcf.IMPartScreen_ContractorsEquipPart) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function screen_refreshVariables_66 (def :  pcf.IMPartScreen_IMAccountsRecPart) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function screen_refreshVariables_68 (def :  pcf.IMPartScreen_IMSignPart) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function screen_refreshVariables_70 (def :  pcf.IMPartScreen_default) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'title' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function title_71 () : java.lang.String {
      return imcoveragepart.DisplayName
    }
    
    // 'visible' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.CommercialPackage.pcf: line 139, column 109
    function visible_57 () : java.lang.Boolean {
      return policyPeriod.IMLineExists and policyPeriod.IMLine.coveragePartExists( imcoveragepart )
    }
    
    property get imcoveragepart () : typekey.IMCoveragePart {
      return getWizardStepIteratedValue(1) as typekey.IMCoveragePart
    }
    
    
  }
  
  
}