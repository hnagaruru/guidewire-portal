package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/job/LineWizardStepSet.PersonalAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineWizardStepSet_PersonalAutoExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/job/LineWizardStepSet.PersonalAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=PADrivers) at LineWizardStepSet.PersonalAuto.pcf: line 26, column 71
    function beforeSave_0 () : void {
      gw.lob.pa.PALineStepsValidator.validateDriversStep(policyPeriod.PersonalAutoLine)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=PALine) at LineWizardStepSet.PersonalAuto.pcf: line 42, column 64
    function beforeSave_11 () : void {
      gw.lob.pa.PALineStepsValidator.validatePALineStep(policyPeriod.PersonalAutoLine)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=PersonalVehicles) at LineWizardStepSet.PersonalAuto.pcf: line 34, column 72
    function beforeSave_5 () : void {
      gw.lob.pa.PAWizardStepHelper.onVehicleStepExit(policyPeriod, jobWizardHelper)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PALine) at LineWizardStepSet.PersonalAuto.pcf: line 42, column 64
    function onEnter_12 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages(policyPeriod.PersonalAutoLine.AllCoverables, jobWizardHelper)}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PersonalVehicles) at LineWizardStepSet.PersonalAuto.pcf: line 34, column 72
    function onEnter_6 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncModifiers(policyPeriod.PersonalAutoLine.AllModifiables, jobWizardHelper)}
    }
    
    // 'onExit' attribute on JobWizardStep (id=PADrivers) at LineWizardStepSet.PersonalAuto.pcf: line 26, column 71
    function onExit_1 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=PALine) at LineWizardStepSet.PersonalAuto.pcf: line 42, column 64
    function onExit_13 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=PersonalVehicles) at LineWizardStepSet.PersonalAuto.pcf: line 34, column 72
    function onExit_7 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'save' attribute on JobWizardStep (id=PADrivers) at LineWizardStepSet.PersonalAuto.pcf: line 26, column 71
    function save_2 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=PALine) at LineWizardStepSet.PersonalAuto.pcf: line 42, column 64
    function screen_onEnter_15 (def :  pcf.PersonalAutoScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PADrivers) at LineWizardStepSet.PersonalAuto.pcf: line 26, column 71
    function screen_onEnter_3 (def :  pcf.PADriversScreen) : void {
      def.onEnter(job, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PersonalVehicles) at LineWizardStepSet.PersonalAuto.pcf: line 34, column 72
    function screen_onEnter_9 (def :  pcf.PAVehiclesScreen) : void {
      def.onEnter(job, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PersonalVehicles) at LineWizardStepSet.PersonalAuto.pcf: line 34, column 72
    function screen_refreshVariables_10 (def :  pcf.PAVehiclesScreen) : void {
      def.refreshVariables(job, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PALine) at LineWizardStepSet.PersonalAuto.pcf: line 42, column 64
    function screen_refreshVariables_16 (def :  pcf.PersonalAutoScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PADrivers) at LineWizardStepSet.PersonalAuto.pcf: line 26, column 71
    function screen_refreshVariables_4 (def :  pcf.PADriversScreen) : void {
      def.refreshVariables(job, policyPeriod, openForEdit,jobWizardHelper)
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