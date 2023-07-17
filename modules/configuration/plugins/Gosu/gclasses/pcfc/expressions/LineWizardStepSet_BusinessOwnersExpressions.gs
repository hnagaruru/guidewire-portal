package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/job/LineWizardStepSet.BusinessOwners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineWizardStepSet_BusinessOwnersExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/job/LineWizardStepSet.BusinessOwners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=BOP) at LineWizardStepSet.BusinessOwners.pcf: line 28, column 50
    function beforeSave_0 () : void {
      gw.lob.bop.BOPLineValidation.validateSchedules(policyPeriod.BOPLine)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=BOPBuildings) at LineWizardStepSet.BusinessOwners.pcf: line 48, column 73
    function beforeSave_15 () : void {
      gw.lob.bop.BOPLineValidation.validateBuildings(policyPeriod.BOPLine)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=BOPSupplemental) at LineWizardStepSet.BusinessOwners.pcf: line 59, column 132
    function beforeSave_23 () : void {
      gw.lob.bop.BOPLineValidation.validateSupplementalStep(policyPeriod.BOPLine)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.BusinessOwners.pcf: line 68, column 48
    function beforeSave_30 () : void {
      gw.validation.ValidationUtil.checkCurrentResult()
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.BusinessOwners.pcf: line 39, column 73
    function beforeSave_8 () : void {
      gw.policy.PolicyLocationValidation.validateLocationsStep(policyPeriod.PolicyLocations)
    }
    
    // 'handlesValidationIssue' attribute on JobWizardStep (id=BOPBuildings) at LineWizardStepSet.BusinessOwners.pcf: line 48, column 73
    function handlesValidationIssue_16 (VALUE :  java.lang.Object, ISSUE :  gw.api.validation.ValidationIssue) : java.lang.Boolean {
      return VALUE typeis entity.BOPBuilding
    }
    
    // 'handlesValidationIssue' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.BusinessOwners.pcf: line 39, column 73
    function handlesValidationIssue_9 (VALUE :  java.lang.Object, ISSUE :  gw.api.validation.ValidationIssue) : java.lang.Boolean {
      return VALUE typeis entity.BOPLocation
    }
    
    // 'onChange' attribute on JobWizardStep (id=BOP) at LineWizardStepSet.BusinessOwners.pcf: line 28, column 50
    function onChange_7 () : void {
      gw.lob.bop.BOPLineWizardStepSetValidation.validateContextAndAdditionalInsuredAndTypeUnique(policyPeriod.BOPLine)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=BOP) at LineWizardStepSet.BusinessOwners.pcf: line 28, column 50
    function onEnter_1 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages({policyPeriod.BOPLine}, jobWizardHelper); gw.web.productmodel.ProductModelSyncIssuesHandler.syncConditions({policyPeriod.BOPLine}, jobWizardHelper); gw.web.productmodel.ProductModelSyncIssuesHandler.syncExclusions({policyPeriod.BOPLine}, jobWizardHelper)}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.BusinessOwners.pcf: line 39, column 73
    function onEnter_10 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.sync(policyPeriod.BOPLine.BOPLocations, null, policyPeriod.PolicyLocations, null, jobWizardHelper)}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=BOPBuildings) at LineWizardStepSet.BusinessOwners.pcf: line 48, column 73
    function onEnter_17 () : void {
      if (openForEdit) {gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages(policyPeriod.BOPLine.BOPLocations.arrays("Buildings").toArray(new entity.BOPBuilding[0]), jobWizardHelper)}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=BOPSupplemental) at LineWizardStepSet.BusinessOwners.pcf: line 59, column 132
    function onEnter_24 () : void {
      if(openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncQuestions( {policyPeriod.BOPLine}, jobWizardHelper )}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.BusinessOwners.pcf: line 68, column 48
    function onEnter_31 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncModifiers( {policyPeriod.BOPLine}, jobWizardHelper)}
    }
    
    // 'onExit' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.BusinessOwners.pcf: line 39, column 73
    function onExit_11 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=BOPBuildings) at LineWizardStepSet.BusinessOwners.pcf: line 48, column 73
    function onExit_18 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=BOP) at LineWizardStepSet.BusinessOwners.pcf: line 28, column 50
    function onExit_2 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=BOPSupplemental) at LineWizardStepSet.BusinessOwners.pcf: line 59, column 132
    function onExit_25 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.BusinessOwners.pcf: line 68, column 48
    function onExit_32 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'save' attribute on JobWizardStep (id=BOP) at LineWizardStepSet.BusinessOwners.pcf: line 28, column 50
    function save_3 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.BusinessOwners.pcf: line 39, column 73
    function screen_onEnter_13 (def :  pcf.BOPLocationsScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BOPBuildings) at LineWizardStepSet.BusinessOwners.pcf: line 48, column 73
    function screen_onEnter_20 (def :  pcf.BOPBuildingsScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BOPSupplemental) at LineWizardStepSet.BusinessOwners.pcf: line 59, column 132
    function screen_onEnter_27 (def :  pcf.BOPSupplementalScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.BusinessOwners.pcf: line 68, column 48
    function screen_onEnter_34 (def :  pcf.ModifiersScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper, policyPeriod.BOPLine.BOPModifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=BOP) at LineWizardStepSet.BusinessOwners.pcf: line 28, column 50
    function screen_onEnter_4 (def :  pcf.BOPScreen) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.BusinessOwners.pcf: line 39, column 73
    function screen_refreshVariables_14 (def :  pcf.BOPLocationsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BOPBuildings) at LineWizardStepSet.BusinessOwners.pcf: line 48, column 73
    function screen_refreshVariables_21 (def :  pcf.BOPBuildingsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BOPSupplemental) at LineWizardStepSet.BusinessOwners.pcf: line 59, column 132
    function screen_refreshVariables_28 (def :  pcf.BOPSupplementalScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.BusinessOwners.pcf: line 68, column 48
    function screen_refreshVariables_35 (def :  pcf.ModifiersScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper, policyPeriod.BOPLine.BOPModifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=BOP) at LineWizardStepSet.BusinessOwners.pcf: line 28, column 50
    function screen_refreshVariables_5 (def :  pcf.BOPScreen) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'title' attribute on JobWizardStep (id=BOP) at LineWizardStepSet.BusinessOwners.pcf: line 28, column 50
    function title_6 () : java.lang.String {
      return policyPeriod.BOPLine.Pattern.Name
    }
    
    // 'visible' attribute on JobWizardStep (id=BOPSupplemental) at LineWizardStepSet.BusinessOwners.pcf: line 59, column 132
    function visible_22 () : java.lang.Boolean {
      return policyPeriod.BOPLine.hasSupplementalQuestions() and (not (job typeis Submission) or (job as Submission).FullMode)
    }
    
    // 'visible' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.BusinessOwners.pcf: line 68, column 48
    function visible_29 () : java.lang.Boolean {
      return policyPeriod.CanViewModifiers
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
  
  
}