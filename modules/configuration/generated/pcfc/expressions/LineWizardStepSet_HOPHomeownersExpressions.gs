package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/job/LineWizardStepSet.HOPHomeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineWizardStepSet_HOPHomeownersExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/job/LineWizardStepSet.HOPHomeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=HOPDwelling) at LineWizardStepSet.HOPHomeowners.pcf: line 26, column 85
    function beforeSave_0 () : void {
      gw.lob.hop.HOPDwellingValidation.validateDwellingStep(policyPeriod.HOPLine.HOPDwellings.single())
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=HOPCoverages) at LineWizardStepSet.HOPHomeowners.pcf: line 41, column 86
    function beforeSave_10 () : void {
      gw.lob.hop.HOPCoveragesValidation.validateCoveragesStep(policyPeriod.HOPLine)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=HOPDwellingConstruction) at LineWizardStepSet.HOPHomeowners.pcf: line 33, column 97
    function beforeSave_5 () : void {
      gw.lob.hop.HOPDwellingValidation.validateDwellingConstructionStep(policyPeriod.HOPLine.HOPDwellings.single())
    }
    
    // 'onEnter' attribute on JobWizardStep (id=HOPCoverages) at LineWizardStepSet.HOPHomeowners.pcf: line 41, column 86
    function onEnter_11 () : void {
      gw.web.line.hop.policy.LineWizardStepSet_HOPHomeownersHelper.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.HOPHomeowners.pcf: line 49, column 48
    function onEnter_17 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncModifiers(policyPeriod.HOPLine.AllModifiables, jobWizardHelper)}
    }
    
    // 'onExit' attribute on JobWizardStep (id=HOPDwelling) at LineWizardStepSet.HOPHomeowners.pcf: line 26, column 85
    function onExit_1 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=HOPCoverages) at LineWizardStepSet.HOPHomeowners.pcf: line 41, column 86
    function onExit_12 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.HOPHomeowners.pcf: line 49, column 48
    function onExit_18 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=HOPDwellingConstruction) at LineWizardStepSet.HOPHomeowners.pcf: line 33, column 97
    function onExit_6 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'save' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.HOPHomeowners.pcf: line 49, column 48
    function save_19 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'save' attribute on JobWizardStep (id=HOPDwelling) at LineWizardStepSet.HOPHomeowners.pcf: line 26, column 85
    function save_2 () : java.lang.Boolean {
      return policyPeriod.OpenForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=HOPCoverages) at LineWizardStepSet.HOPHomeowners.pcf: line 41, column 86
    function screen_onEnter_14 (def :  pcf.HOPCoveragesScreen) : void {
      def.onEnter(policyPeriod, openForEdit, job, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.HOPHomeowners.pcf: line 49, column 48
    function screen_onEnter_20 (def :  pcf.HOPModifiersScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=HOPDwelling) at LineWizardStepSet.HOPHomeowners.pcf: line 26, column 85
    function screen_onEnter_3 (def :  pcf.HOPDwellingScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=HOPDwellingConstruction) at LineWizardStepSet.HOPHomeowners.pcf: line 33, column 97
    function screen_onEnter_8 (def :  pcf.HOPDwellingConstructionScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=HOPCoverages) at LineWizardStepSet.HOPHomeowners.pcf: line 41, column 86
    function screen_refreshVariables_15 (def :  pcf.HOPCoveragesScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, job, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.HOPHomeowners.pcf: line 49, column 48
    function screen_refreshVariables_21 (def :  pcf.HOPModifiersScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=HOPDwelling) at LineWizardStepSet.HOPHomeowners.pcf: line 26, column 85
    function screen_refreshVariables_4 (def :  pcf.HOPDwellingScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=HOPDwellingConstruction) at LineWizardStepSet.HOPHomeowners.pcf: line 33, column 97
    function screen_refreshVariables_9 (def :  pcf.HOPDwellingConstructionScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'visible' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.HOPHomeowners.pcf: line 49, column 48
    function visible_16 () : java.lang.Boolean {
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