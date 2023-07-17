package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl/policy/GeneralLiabilityScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GeneralLiabilityScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/GeneralLiabilityScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GeneralLiabilityScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 46, column 43
    function available_25 () : java.lang.Boolean {
      return policyPeriod.getLineExists(glLine.Pattern)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at GeneralLiabilityScreen.pcf: line 36, column 50
    function def_onEnter_21 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(glLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 38, column 58
    function def_onEnter_23 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 46, column 43
    function def_onEnter_26 (def :  pcf.PolicyLineDV_GLLine) : void {
      def.onEnter(glLine, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 46, column 43
    function def_onEnter_28 (def :  pcf.PolicyLineDV_PersonalAutoLine) : void {
      def.onEnter(glLine, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 52, column 113
    function def_onEnter_31 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.onEnter(glLine, new String[]{"GLGroup"}, false, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 58, column 134
    function def_onEnter_33 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.onEnter(glLine, glLine.getAdditionalCoverageCategories() , true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 64, column 73
    function def_onEnter_35 (def :  pcf.AdditionalInsuredsDV) : void {
      def.onEnter(glLine, openForEdit, true, false)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at GeneralLiabilityScreen.pcf: line 36, column 50
    function def_refreshVariables_22 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(glLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 38, column 58
    function def_refreshVariables_24 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 46, column 43
    function def_refreshVariables_27 (def :  pcf.PolicyLineDV_GLLine) : void {
      def.refreshVariables(glLine, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 46, column 43
    function def_refreshVariables_29 (def :  pcf.PolicyLineDV_PersonalAutoLine) : void {
      def.refreshVariables(glLine, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 52, column 113
    function def_refreshVariables_32 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.refreshVariables(glLine, new String[]{"GLGroup"}, false, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 58, column 134
    function def_refreshVariables_34 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.refreshVariables(glLine, glLine.getAdditionalCoverageCategories() , true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 64, column 73
    function def_refreshVariables_36 (def :  pcf.AdditionalInsuredsDV) : void {
      def.refreshVariables(glLine, openForEdit, true, false)
    }
    
    // 'editable' attribute on Screen (id=GeneralLiabilityScreen) at GeneralLiabilityScreen.pcf: line 7, column 33
    function editable_37 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at GeneralLiabilityScreen.pcf: line 23, column 35
    function initialValue_0 () : productmodel.GLLine {
      return policyPeriod.GLLine
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function mode_1 () : java.lang.Object {
      return job.Subtype
    }
    
    // 'mode' attribute on PanelRef at GeneralLiabilityScreen.pcf: line 46, column 43
    function mode_30 () : java.lang.Object {
      return glLine.Pattern.PublicID
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at GeneralLiabilityScreen.pcf: line 28, column 91
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at GeneralLiabilityScreen.pcf: line 33, column 80
    function visible_20 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    property get glLine () : productmodel.GLLine {
      return getVariableValue("glLine", 0) as productmodel.GLLine
    }
    
    property set glLine ($arg :  productmodel.GLLine) {
      setVariableValue("glLine", 0, $arg)
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