package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompSupplementalScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkersCompSupplementalScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WorkersCompSupplementalScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkersCompSupplementalScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at WorkersCompSupplementalScreen.pcf: line 37, column 58
    function def_onEnter_22 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at WorkersCompSupplementalScreen.pcf: line 39, column 69
    function def_onEnter_24 (def :  pcf.QuestionSetsDV) : void {
      def.onEnter(supplementalQuestionSets, wcLine, null)
    }
    
    // 'def' attribute on PanelRef at WorkersCompSupplementalScreen.pcf: line 37, column 58
    function def_refreshVariables_23 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at WorkersCompSupplementalScreen.pcf: line 39, column 69
    function def_refreshVariables_25 (def :  pcf.QuestionSetsDV) : void {
      def.refreshVariables(supplementalQuestionSets, wcLine, null)
    }
    
    // 'editable' attribute on Screen (id=WorkersCompSupplementalScreen) at WorkersCompSupplementalScreen.pcf: line 7, column 40
    function editable_26 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at WorkersCompSupplementalScreen.pcf: line 20, column 44
    function initialValue_0 () : productmodel.WorkersCompLine {
      return policyPeriod.WorkersCompLine
    }
    
    // 'initialValue' attribute on Variable at WorkersCompSupplementalScreen.pcf: line 25, column 49
    function initialValue_1 () : gw.api.productmodel.QuestionSet[] {
      return policyPeriod.Policy.Product.getQuestionSetsByType(QuestionSetType.TC_SUPPLEMENTAL)
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function mode_2 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at WorkersCompSupplementalScreen.pcf: line 30, column 104
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at WorkersCompSupplementalScreen.pcf: line 35, column 80
    function visible_21 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
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
    
    property get supplementalQuestionSets () : gw.api.productmodel.QuestionSet[] {
      return getVariableValue("supplementalQuestionSets", 0) as gw.api.productmodel.QuestionSet[]
    }
    
    property set supplementalQuestionSets ($arg :  gw.api.productmodel.QuestionSet[]) {
      setVariableValue("supplementalQuestionSets", 0, $arg)
    }
    
    property get wcLine () : productmodel.WorkersCompLine {
      return getVariableValue("wcLine", 0) as productmodel.WorkersCompLine
    }
    
    property set wcLine ($arg :  productmodel.WorkersCompLine) {
      setVariableValue("wcLine", 0, $arg)
    }
    
    
  }
  
  
}