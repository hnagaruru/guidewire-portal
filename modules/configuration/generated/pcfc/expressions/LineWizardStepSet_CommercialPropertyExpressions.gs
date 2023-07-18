package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/job/LineWizardStepSet.CommercialProperty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineWizardStepSet_CommercialPropertyExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/job/LineWizardStepSet.CommercialProperty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=CPBuildings) at LineWizardStepSet.CommercialProperty.pcf: line 26, column 85
    function beforeSave_0 () : void {
      gw.lob.cp.CPLineValidation.validateBuildings(policyPeriod.CPLine)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.CommercialProperty.pcf: line 42, column 48
    function beforeSave_11 () : void {
      gw.lob.cp.CPLineValidation.validateModifiers(); gw.validation.ValidationUtil.checkCurrentResult()
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=CPBlanket) at LineWizardStepSet.CommercialProperty.pcf: line 33, column 72
    function beforeSave_5 () : void {
      gw.lob.cp.CPLineValidation.validateBlankets(policyPeriod.CPLine)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.CommercialProperty.pcf: line 42, column 48
    function onEnter_12 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncModifiers( {policyPeriod.CPLine}, jobWizardHelper)}
    }
    
    // 'onExit' attribute on JobWizardStep (id=CPBuildings) at LineWizardStepSet.CommercialProperty.pcf: line 26, column 85
    function onExit_1 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.CommercialProperty.pcf: line 42, column 48
    function onExit_13 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=CPBlanket) at LineWizardStepSet.CommercialProperty.pcf: line 33, column 72
    function onExit_6 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'save' attribute on JobWizardStep (id=CPBuildings) at LineWizardStepSet.CommercialProperty.pcf: line 26, column 85
    function save_2 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.CommercialProperty.pcf: line 42, column 48
    function screen_onEnter_15 (def :  pcf.ModifiersScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.CPLine.CPModifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPBuildings) at LineWizardStepSet.CommercialProperty.pcf: line 26, column 85
    function screen_onEnter_3 (def :  pcf.CPBuildingsScreen) : void {
      def.onEnter(policyPeriod.CPLine, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPBlanket) at LineWizardStepSet.CommercialProperty.pcf: line 33, column 72
    function screen_onEnter_8 (def :  pcf.CPBlanketScreen) : void {
      def.onEnter(policyPeriod.CPLine, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.CommercialProperty.pcf: line 42, column 48
    function screen_refreshVariables_16 (def :  pcf.ModifiersScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper, policyPeriod.CPLine.CPModifiers)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPBuildings) at LineWizardStepSet.CommercialProperty.pcf: line 26, column 85
    function screen_refreshVariables_4 (def :  pcf.CPBuildingsScreen) : void {
      def.refreshVariables(policyPeriod.CPLine, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=CPBlanket) at LineWizardStepSet.CommercialProperty.pcf: line 33, column 72
    function screen_refreshVariables_9 (def :  pcf.CPBlanketScreen) : void {
      def.refreshVariables(policyPeriod.CPLine, openForEdit, jobWizardHelper)
    }
    
    // 'visible' attribute on JobWizardStep (id=Modifiers) at LineWizardStepSet.CommercialProperty.pcf: line 42, column 48
    function visible_10 () : java.lang.Boolean {
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