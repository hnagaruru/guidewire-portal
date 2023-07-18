package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/job/LineWizardStepSet.InlandMarine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LineWizardStepSet_InlandMarineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/job/LineWizardStepSet.InlandMarine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LineWizardStepSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=IMPartSelection) at LineWizardStepSet.InlandMarine.pcf: line 26, column 80
    function onEnter_0 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages(policyPeriod.IMLine.AllCoverables, jobWizardHelper)}
    }
    
    // 'onExit' attribute on JobWizardStep (id=IMPartSelection) at LineWizardStepSet.InlandMarine.pcf: line 26, column 80
    function onExit_1 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Buildings) at LineWizardStepSet.InlandMarine.pcf: line 33, column 85
    function onExit_6 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'save' attribute on JobWizardStep (id=IMPartSelection) at LineWizardStepSet.InlandMarine.pcf: line 26, column 80
    function save_2 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=IMPartSelection) at LineWizardStepSet.InlandMarine.pcf: line 26, column 80
    function screen_onEnter_3 (def :  pcf.IMPartSelectionScreen) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Buildings) at LineWizardStepSet.InlandMarine.pcf: line 33, column 85
    function screen_onEnter_8 (def :  pcf.IMBuildingsScreen) : void {
      def.onEnter(policyPeriod.IMLine, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=IMPartSelection) at LineWizardStepSet.InlandMarine.pcf: line 26, column 80
    function screen_refreshVariables_4 (def :  pcf.IMPartSelectionScreen) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Buildings) at LineWizardStepSet.InlandMarine.pcf: line 33, column 85
    function screen_refreshVariables_9 (def :  pcf.IMBuildingsScreen) : void {
      def.refreshVariables(policyPeriod.IMLine, openForEdit, jobWizardHelper)
    }
    
    // 'value' attribute on WizardStepIterator at LineWizardStepSet.InlandMarine.pcf: line 37, column 44
    function value_26 () : typekey.IMCoveragePart[] {
      return IMLine.definedParts().sortBy( \ part -> part.DisplayName )
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
  
  @javax.annotation.Generated("config/web/pcf/line/im/job/LineWizardStepSet.InlandMarine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class impartstepExpressionsImpl extends LineWizardStepSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function beforeSave_11 () : void {
      gw.lob.im.IMLineValidation.validateSinglePartAsPage( policyPeriod.IMLine.maybeCreateCoveragePart( imcoveragepart  )); gw.lob.im.IMLineValidation.validateSupplementalQuestons( policyPeriod.IMLine ) 
    }
    
    // 'handlesValidationIssue' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function handlesValidationIssue_12 (VALUE :  java.lang.Object, ISSUE :  gw.api.validation.ValidationIssue) : java.lang.Boolean {
      return gw.lob.im.IMLineValidation.handleValidationForDynamicSteps(imcoveragepart, VALUE)
    }
    
    // 'mode' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function mode_13 () : java.lang.Object {
      return imcoveragepart.Code
    }
    
    // 'onEnter' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function onEnter_14 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages(policyPeriod.IMLine.AllCoverables, jobWizardHelper); gw.web.productmodel.ProductModelSyncIssuesHandler.syncExclusions(policyPeriod.IMLine.AllCoverables, jobWizardHelper); gw.web.productmodel.ProductModelSyncIssuesHandler.syncQuestions({policyPeriod.IMLine}, jobWizardHelper) }
    }
    
    // 'onExit' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function onExit_15 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'save' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function save_16 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function screen_onEnter_17 (def :  pcf.IMPartScreen_ContractorsEquipPart) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function screen_onEnter_19 (def :  pcf.IMPartScreen_IMAccountsRecPart) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function screen_onEnter_21 (def :  pcf.IMPartScreen_IMSignPart) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function screen_onEnter_23 (def :  pcf.IMPartScreen_default) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function screen_refreshVariables_18 (def :  pcf.IMPartScreen_ContractorsEquipPart) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function screen_refreshVariables_20 (def :  pcf.IMPartScreen_IMAccountsRecPart) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function screen_refreshVariables_22 (def :  pcf.IMPartScreen_IMSignPart) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function screen_refreshVariables_24 (def :  pcf.IMPartScreen_default) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'title' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function title_25 () : java.lang.String {
      return imcoveragepart.DisplayName
    }
    
    // 'visible' attribute on JobWizardStep (id=impartstep) at LineWizardStepSet.InlandMarine.pcf: line 48, column 77
    function visible_10 () : java.lang.Boolean {
      return policyPeriod.IMLine.coveragePartExists( imcoveragepart )
    }
    
    property get imcoveragepart () : typekey.IMCoveragePart {
      return getWizardStepIteratedValue(1) as typekey.IMCoveragePart
    }
    
    
  }
  
  
}