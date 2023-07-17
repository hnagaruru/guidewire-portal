package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BOPScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/BOPScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BOPScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BOPScreen.pcf: line 32, column 50
    function def_onEnter_20 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(policyPeriod.BOPLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPScreen.pcf: line 34, column 58
    function def_onEnter_22 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPScreen.pcf: line 40, column 86
    function def_onEnter_24 (def :  pcf.BOPLinePanelSet) : void {
      def.onEnter(policyPeriod.BOPLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPScreen.pcf: line 42, column 87
    function def_onEnter_26 (def :  pcf.AdditionalInsuredsDV) : void {
      def.onEnter(policyPeriod.BOPLine, openForEdit, false, false)
    }
    
    // 'def' attribute on PanelRef at BOPScreen.pcf: line 51, column 147
    function def_onEnter_28 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.onEnter(policyPeriod.BOPLine, policyPeriod.BOPLine.getAdditionalCoverageCategories(), true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPScreen.pcf: line 57, column 161
    function def_onEnter_30 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.onEnter(policyPeriod.BOPLine, policyPeriod.BOPLine.getAdditionalCoverageCategories(), true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at BOPScreen.pcf: line 32, column 50
    function def_refreshVariables_21 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(policyPeriod.BOPLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPScreen.pcf: line 34, column 58
    function def_refreshVariables_23 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPScreen.pcf: line 40, column 86
    function def_refreshVariables_25 (def :  pcf.BOPLinePanelSet) : void {
      def.refreshVariables(policyPeriod.BOPLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPScreen.pcf: line 42, column 87
    function def_refreshVariables_27 (def :  pcf.AdditionalInsuredsDV) : void {
      def.refreshVariables(policyPeriod.BOPLine, openForEdit, false, false)
    }
    
    // 'def' attribute on PanelRef at BOPScreen.pcf: line 51, column 147
    function def_refreshVariables_29 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.refreshVariables(policyPeriod.BOPLine, policyPeriod.BOPLine.getAdditionalCoverageCategories(), true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BOPScreen.pcf: line 57, column 161
    function def_refreshVariables_31 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.refreshVariables(policyPeriod.BOPLine, policyPeriod.BOPLine.getAdditionalCoverageCategories(), true, jobWizardHelper)
    }
    
    // 'editable' attribute on Screen (id=BOPScreen) at BOPScreen.pcf: line 7, column 20
    function editable_32 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function mode_0 () : java.lang.Object {
      return job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_onEnter_1 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BOPScreen.pcf: line 24, column 91
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at BOPScreen.pcf: line 29, column 80
    function visible_19 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
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