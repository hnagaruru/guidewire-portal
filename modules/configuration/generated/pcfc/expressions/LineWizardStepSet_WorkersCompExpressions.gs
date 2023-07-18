package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/job/LineWizardStepSet.WorkersComp.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineWizardStepSet_WorkersCompExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/job/LineWizardStepSet.WorkersComp.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.WorkersComp.pcf: line 27, column 73
    function beforeSave_0 () : void {
      gw.policy.PolicyLocationValidation.validateLocationsStep(policyPeriod.PolicyLocations)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=WorkersCompSupplemental) at LineWizardStepSet.WorkersComp.pcf: line 47, column 137
    function beforeSave_14 () : void {
      gw.lob.wc.WCLineValidation.validateWCSupplementalStep( policyPeriod.WorkersCompLine )
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=WorkersCompOptions) at LineWizardStepSet.WorkersComp.pcf: line 55, column 87
    function beforeSave_20 () : void {
      gw.lob.wc.WCLineValidation.validateWorkersCompOptionsStep( policyPeriod.WorkersCompLine )
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=WorkersCompCoverageConfig) at LineWizardStepSet.WorkersComp.pcf: line 36, column 87
    function beforeSave_6 () : void {
      gw.lob.wc.WCLineValidation.validateWCCoveragesStep( policyPeriod.WorkersCompLine )
    }
    
    // 'onChange' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.WorkersComp.pcf: line 27, column 73
    function onChange_5 () : void {
      policyPeriod.WorkersCompLine.recalculateGoverningClasscode();
    }
    
    // 'onEnter' attribute on JobWizardStep (id=WorkersCompSupplemental) at LineWizardStepSet.WorkersComp.pcf: line 47, column 137
    function onEnter_15 () : void {
      if(openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncQuestions( {policyPeriod.WorkersCompLine}, jobWizardHelper )}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=WorkersCompCoverageConfig) at LineWizardStepSet.WorkersComp.pcf: line 36, column 87
    function onEnter_7 () : void {
      if (openForEdit) { policyPeriod.syncComputedValues(); gw.web.productmodel.ProductModelSyncIssuesHandler.sync(policyPeriod.WorkersCompLine.AllCoverables, policyPeriod.WorkersCompLine.AllModifiables, null, null, jobWizardHelper) }
    }
    
    // 'onExit' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.WorkersComp.pcf: line 27, column 73
    function onExit_1 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=WorkersCompSupplemental) at LineWizardStepSet.WorkersComp.pcf: line 47, column 137
    function onExit_16 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=WorkersCompOptions) at LineWizardStepSet.WorkersComp.pcf: line 55, column 87
    function onExit_21 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=WorkersCompCoverageConfig) at LineWizardStepSet.WorkersComp.pcf: line 36, column 87
    function onExit_8 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'save' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.WorkersComp.pcf: line 27, column 73
    function save_2 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=WorkersCompCoverageConfig) at LineWizardStepSet.WorkersComp.pcf: line 36, column 87
    function screen_onEnter_10 (def :  pcf.WorkersCompCoverageConfigScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=WorkersCompSupplemental) at LineWizardStepSet.WorkersComp.pcf: line 47, column 137
    function screen_onEnter_18 (def :  pcf.WorkersCompSupplementalScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=WorkersCompOptions) at LineWizardStepSet.WorkersComp.pcf: line 55, column 87
    function screen_onEnter_23 (def :  pcf.CoverageOptionsScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.WorkersComp.pcf: line 27, column 73
    function screen_onEnter_3 (def :  pcf.LocationsScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.WorkersCompLine.SupportsNonSpecificLocations)
    }
    
    // 'screen' attribute on JobWizardStep (id=WorkersCompCoverageConfig) at LineWizardStepSet.WorkersComp.pcf: line 36, column 87
    function screen_refreshVariables_11 (def :  pcf.WorkersCompCoverageConfigScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=WorkersCompSupplemental) at LineWizardStepSet.WorkersComp.pcf: line 47, column 137
    function screen_refreshVariables_19 (def :  pcf.WorkersCompSupplementalScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=WorkersCompOptions) at LineWizardStepSet.WorkersComp.pcf: line 55, column 87
    function screen_refreshVariables_24 (def :  pcf.CoverageOptionsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.WorkersComp.pcf: line 27, column 73
    function screen_refreshVariables_4 (def :  pcf.LocationsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.WorkersCompLine.SupportsNonSpecificLocations)
    }
    
    // 'visible' attribute on JobWizardStep (id=WorkersCompSupplemental) at LineWizardStepSet.WorkersComp.pcf: line 47, column 137
    function visible_13 () : java.lang.Boolean {
      return policyPeriod.WorkersCompLine.hasSupplementalQuestions() and (!(job typeis Submission) or (job as Submission).FullMode)
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