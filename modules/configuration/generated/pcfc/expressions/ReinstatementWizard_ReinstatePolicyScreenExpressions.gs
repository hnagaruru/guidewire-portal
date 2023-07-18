package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/reinstatement/ReinstatementWizard_ReinstatePolicyScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReinstatementWizard_ReinstatePolicyScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/reinstatement/ReinstatementWizard_ReinstatePolicyScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReinstatementWizard_ReinstatePolicyScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 31, column 72
    function def_onEnter_20 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 34, column 31
    function def_onEnter_23 (def :  pcf.ReinstatePolicyDV) : void {
      def.onEnter(reinstatement)
    }
    
    // 'def' attribute on PanelRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 31, column 72
    function def_refreshVariables_21 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 34, column 31
    function def_refreshVariables_24 (def :  pcf.ReinstatePolicyDV) : void {
      def.refreshVariables(reinstatement)
    }
    
    // 'editable' attribute on PanelRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 34, column 31
    function editable_22 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function mode_0 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_onEnter_1 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 24, column 101
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, reinstatement, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at ReinstatementWizard_ReinstatePolicyScreen.pcf: line 29, column 80
    function visible_19 () : java.lang.Boolean {
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
    
    property get reinstatement () : Reinstatement {
      return getRequireValue("reinstatement", 0) as Reinstatement
    }
    
    property set reinstatement ($arg :  Reinstatement) {
      setRequireValue("reinstatement", 0, $arg)
    }
    
    
  }
  
  
}