package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/job/LineWizardStepSet.BusinessAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineWizardStepSet_BusinessAutoExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/job/LineWizardStepSet.BusinessAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=baLineStep) at LineWizardStepSet.BusinessAuto.pcf: line 27, column 82
    function beforeSave_0 () : void {
      gw.lob.ba.BALineValidation.validateCommercialAutoStep( policyPeriod.BusinessAutoLine )
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=BusinessVehicles) at LineWizardStepSet.BusinessAuto.pcf: line 42, column 72
    function beforeSave_11 () : void {
      gw.lob.ba.BALineValidation.validateVehiclesStep( policyPeriod.BusinessAutoLine )
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.BusinessAuto.pcf: line 73, column 48
    function beforeSave_34 () : void {
      gw.validation.ValidationUtil.checkCurrentResult()
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.BusinessAuto.pcf: line 34, column 73
    function beforeSave_6 () : void {
      gw.policy.PolicyLocationValidation.validateLocationsStep(policyPeriod.PolicyLocations)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=baLineStep) at LineWizardStepSet.BusinessAuto.pcf: line 27, column 82
    function onEnter_1 () : void {
      if (openForEdit) {policyPeriod.BusinessAutoLine.syncJurisdictions(); policyPeriod.BusinessAutoLine.updateModifiers(); gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages(policyPeriod.BusinessAutoLine.AllCoverables, jobWizardHelper)}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=BusinessVehicles) at LineWizardStepSet.BusinessAuto.pcf: line 42, column 72
    function onEnter_12 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages(policyPeriod.BusinessAutoLine.Vehicles, jobWizardHelper)}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=StateInfo) at LineWizardStepSet.BusinessAuto.pcf: line 49, column 73
    function onEnter_17 () : void {
      if (openForEdit) { policyPeriod.BusinessAutoLine.syncJurisdictions(); gw.web.productmodel.ProductModelSyncIssuesHandler.syncModifiers(policyPeriod.BusinessAutoLine.Jurisdictions,jobWizardHelper); gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages(policyPeriod.BusinessAutoLine.Jurisdictions, jobWizardHelper)}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=CoveredAutoSymbols) at LineWizardStepSet.BusinessAuto.pcf: line 64, column 75
    function onEnter_28 () : void {
      if (policyPeriod.BusinessAutoLine.AutoSymbolsManualEditDate==null and openForEdit){                            policyPeriod.BusinessAutoLine.setCoveredAutoSymbols()}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.BusinessAuto.pcf: line 73, column 48
    function onEnter_35 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncModifiers(policyPeriod.BusinessAutoLine.AllModifiables, jobWizardHelper)}
    }
    
    // 'onExit' attribute on JobWizardStep (id=BusinessVehicles) at LineWizardStepSet.BusinessAuto.pcf: line 42, column 72
    function onExit_13 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=StateInfo) at LineWizardStepSet.BusinessAuto.pcf: line 49, column 73
    function onExit_18 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=baLineStep) at LineWizardStepSet.BusinessAuto.pcf: line 27, column 82
    function onExit_2 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=BADrivers) at LineWizardStepSet.BusinessAuto.pcf: line 56, column 75
    function onExit_23 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=CoveredAutoSymbols) at LineWizardStepSet.BusinessAuto.pcf: line 64, column 75
    function onExit_29 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.BusinessAuto.pcf: line 73, column 48
    function onExit_36 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.BusinessAuto.pcf: line 34, column 73
    function onExit_7 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'save' attribute on JobWizardStep (id=baLineStep) at LineWizardStepSet.BusinessAuto.pcf: line 27, column 82
    function save_3 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=BusinessVehicles) at LineWizardStepSet.BusinessAuto.pcf: line 42, column 72
    function screen_onEnter_15 (def :  pcf.BAVehiclesScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=StateInfo) at LineWizardStepSet.BusinessAuto.pcf: line 49, column 73
    function screen_onEnter_20 (def :  pcf.BAStateInfoScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BADrivers) at LineWizardStepSet.BusinessAuto.pcf: line 56, column 75
    function screen_onEnter_25 (def :  pcf.BADriversScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CoveredAutoSymbols) at LineWizardStepSet.BusinessAuto.pcf: line 64, column 75
    function screen_onEnter_31 (def :  pcf.CoveredAutoSymbolsScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.BusinessAuto.pcf: line 73, column 48
    function screen_onEnter_38 (def :  pcf.ModifiersScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper, policyPeriod.BusinessAutoLine.Modifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=baLineStep) at LineWizardStepSet.BusinessAuto.pcf: line 27, column 82
    function screen_onEnter_4 (def :  pcf.BALineScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.BusinessAuto.pcf: line 34, column 73
    function screen_onEnter_9 (def :  pcf.LocationsScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.BusinessAutoLine.SupportsNonSpecificLocations)
    }
    
    // 'screen' attribute on JobWizardStep (id=Locations) at LineWizardStepSet.BusinessAuto.pcf: line 34, column 73
    function screen_refreshVariables_10 (def :  pcf.LocationsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.BusinessAutoLine.SupportsNonSpecificLocations)
    }
    
    // 'screen' attribute on JobWizardStep (id=BusinessVehicles) at LineWizardStepSet.BusinessAuto.pcf: line 42, column 72
    function screen_refreshVariables_16 (def :  pcf.BAVehiclesScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=StateInfo) at LineWizardStepSet.BusinessAuto.pcf: line 49, column 73
    function screen_refreshVariables_21 (def :  pcf.BAStateInfoScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BADrivers) at LineWizardStepSet.BusinessAuto.pcf: line 56, column 75
    function screen_refreshVariables_26 (def :  pcf.BADriversScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CoveredAutoSymbols) at LineWizardStepSet.BusinessAuto.pcf: line 64, column 75
    function screen_refreshVariables_32 (def :  pcf.CoveredAutoSymbolsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.BusinessAuto.pcf: line 73, column 48
    function screen_refreshVariables_39 (def :  pcf.ModifiersScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper, policyPeriod.BusinessAutoLine.Modifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=baLineStep) at LineWizardStepSet.BusinessAuto.pcf: line 27, column 82
    function screen_refreshVariables_5 (def :  pcf.BALineScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'visible' attribute on JobWizardStep (id=BADrivers) at LineWizardStepSet.BusinessAuto.pcf: line 56, column 75
    function visible_22 () : java.lang.Boolean {
      return !(job typeis Submission) or (job as Submission).FullMode
    }
    
    // 'visible' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.BusinessAuto.pcf: line 73, column 48
    function visible_33 () : java.lang.Boolean {
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