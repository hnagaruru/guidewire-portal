package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard_PolicyInfoScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RewriteWizard_PolicyInfoScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard_PolicyInfoScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RewriteWizard_PolicyInfoScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_PolicyInfoScreen.pcf: line 31, column 52
    function def_onEnter_20 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(period, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_PolicyInfoScreen.pcf: line 33, column 71
    function def_onEnter_22 (def :  pcf.RewriteWizard_PolicyInfoDV) : void {
      def.onEnter(period, rewrite, openForEdit)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_PolicyInfoScreen.pcf: line 31, column 52
    function def_refreshVariables_21 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(period, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_PolicyInfoScreen.pcf: line 33, column 71
    function def_refreshVariables_23 (def :  pcf.RewriteWizard_PolicyInfoDV) : void {
      def.refreshVariables(period, rewrite, openForEdit)
    }
    
    // 'editable' attribute on Screen (id=RewriteWizard_PolicyInfoScreen) at RewriteWizard_PolicyInfoScreen.pcf: line 7, column 41
    function editable_24 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function mode_0 () : java.lang.Object {
      return period.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_onEnter_1 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(period, rewrite, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_PolicyInfoScreen.pcf: line 24, column 89
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(period, rewrite, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at RewriteWizard_PolicyInfoScreen.pcf: line 29, column 74
    function visible_19 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(period)
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
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get rewrite () : Rewrite {
      return getRequireValue("rewrite", 0) as Rewrite
    }
    
    property set rewrite ($arg :  Rewrite) {
      setRequireValue("rewrite", 0, $arg)
    }
    
    
  }
  
  
}