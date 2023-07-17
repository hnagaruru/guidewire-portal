package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl/job/LineWizardStepSet.GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineWizardStepSet_GeneralLiabilityExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl/job/LineWizardStepSet.GeneralLiability.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.GeneralLiability.pcf: line 26, column 73
    function beforeSave_0 () : void {
      gw.policy.PolicyLocationValidation.validateLocationsStep(policyPeriod.PolicyLocations)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=GLLineEU) at LineWizardStepSet.GeneralLiability.pcf: line 42, column 83
    function beforeSave_12 () : void {
      gw.lob.gl.GLLineValidation.validateExposures(policyPeriod.GLLine)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.GeneralLiability.pcf: line 51, column 48
    function beforeSave_18 () : void {
      gw.validation.ValidationUtil.checkCurrentResult()
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=GLLine) at LineWizardStepSet.GeneralLiability.pcf: line 35, column 68
    function beforeSave_5 () : void {
      gw.lob.gl.GLLineValidation.validateSchedules(policyPeriod.GLLine)
    }
    
    // 'onChange' attribute on JobWizardStep (id=GLLine) at LineWizardStepSet.GeneralLiability.pcf: line 35, column 68
    function onChange_11 () : void {
      gw.lob.gl.GLLineValidation.validatePolicyContacts(policyPeriod.GLLine)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.GeneralLiability.pcf: line 51, column 48
    function onEnter_19 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncModifiers(policyPeriod.GLLine.AllModifiables, jobWizardHelper)}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=GLLine) at LineWizardStepSet.GeneralLiability.pcf: line 35, column 68
    function onEnter_6 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.sync(policyPeriod.GLLine.AllCoverables, policyPeriod.GLLine.AllModifiables, null, null, jobWizardHelper); gw.web.productmodel.ProductModelSyncIssuesHandler.syncConditions(policyPeriod.GLLine.AllCoverables, jobWizardHelper)}
    }
    
    // 'onExit' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.GeneralLiability.pcf: line 26, column 73
    function onExit_1 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=GLLineEU) at LineWizardStepSet.GeneralLiability.pcf: line 42, column 83
    function onExit_13 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.GeneralLiability.pcf: line 51, column 48
    function onExit_20 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=GLLine) at LineWizardStepSet.GeneralLiability.pcf: line 35, column 68
    function onExit_7 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'save' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.GeneralLiability.pcf: line 26, column 73
    function save_2 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'save' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.GeneralLiability.pcf: line 51, column 48
    function save_21 () : java.lang.Boolean {
      return policyPeriod.OpenForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=GLLineEU) at LineWizardStepSet.GeneralLiability.pcf: line 42, column 83
    function screen_onEnter_15 (def :  pcf.GeneralLiabilityEUScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.GeneralLiability.pcf: line 51, column 48
    function screen_onEnter_22 (def :  pcf.ModifiersScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.GLLine.GLModifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.GeneralLiability.pcf: line 26, column 73
    function screen_onEnter_3 (def :  pcf.LocationsScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.GLLine.SupportsNonSpecificLocations)
    }
    
    // 'screen' attribute on JobWizardStep (id=GLLine) at LineWizardStepSet.GeneralLiability.pcf: line 35, column 68
    function screen_onEnter_9 (def :  pcf.GeneralLiabilityScreen) : void {
      def.onEnter(job, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=GLLine) at LineWizardStepSet.GeneralLiability.pcf: line 35, column 68
    function screen_refreshVariables_10 (def :  pcf.GeneralLiabilityScreen) : void {
      def.refreshVariables(job, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=GLLineEU) at LineWizardStepSet.GeneralLiability.pcf: line 42, column 83
    function screen_refreshVariables_16 (def :  pcf.GeneralLiabilityEUScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.GeneralLiability.pcf: line 51, column 48
    function screen_refreshVariables_23 (def :  pcf.ModifiersScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.GLLine.GLModifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.GeneralLiability.pcf: line 26, column 73
    function screen_refreshVariables_4 (def :  pcf.LocationsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.GLLine.SupportsNonSpecificLocations)
    }
    
    // 'visible' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.GeneralLiability.pcf: line 51, column 48
    function visible_17 () : java.lang.Boolean {
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