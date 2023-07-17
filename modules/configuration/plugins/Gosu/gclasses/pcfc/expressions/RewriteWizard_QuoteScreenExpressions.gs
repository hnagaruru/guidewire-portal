package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard_QuoteScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RewriteWizard_QuoteScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard_QuoteScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RewriteWizard_QuoteScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=CreateRewriteQuote) at RewriteWizard_QuoteScreen.pcf: line 38, column 23
    function action_21 () : void {
      policyPeriod.clickPrintQuoteButton("RewriteQuote", "Rewrite Quote")
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 41, column 76
    function def_onEnter_22 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getWizardQuoteScreenWarnings())
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 43, column 43
    function def_onEnter_24 (def :  pcf.Quote_SummaryDV) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_onEnter_28 (def :  pcf.RatingCumulDetailsPanelSet_BOPLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_onEnter_30 (def :  pcf.RatingCumulDetailsPanelSet_BusinessAutoLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_onEnter_32 (def :  pcf.RatingCumulDetailsPanelSet_CPLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_onEnter_34 (def :  pcf.RatingCumulDetailsPanelSet_GLLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_onEnter_36 (def :  pcf.RatingCumulDetailsPanelSet_HOPLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_onEnter_38 (def :  pcf.RatingCumulDetailsPanelSet_IMLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_onEnter_40 (def :  pcf.RatingCumulDetailsPanelSet_ManualLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_onEnter_42 (def :  pcf.RatingCumulDetailsPanelSet_PersonalAutoLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_onEnter_44 (def :  pcf.RatingCumulDetailsPanelSet_WorkersCompLine) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_onEnter_46 (def :  pcf.RatingCumulDetailsPanelSet_default) : void {
      def.onEnter(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 41, column 76
    function def_refreshVariables_23 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getWizardQuoteScreenWarnings())
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 43, column 43
    function def_refreshVariables_25 (def :  pcf.Quote_SummaryDV) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_refreshVariables_29 (def :  pcf.RatingCumulDetailsPanelSet_BOPLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_refreshVariables_31 (def :  pcf.RatingCumulDetailsPanelSet_BusinessAutoLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_refreshVariables_33 (def :  pcf.RatingCumulDetailsPanelSet_CPLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_refreshVariables_35 (def :  pcf.RatingCumulDetailsPanelSet_GLLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_refreshVariables_37 (def :  pcf.RatingCumulDetailsPanelSet_HOPLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_refreshVariables_39 (def :  pcf.RatingCumulDetailsPanelSet_IMLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_refreshVariables_41 (def :  pcf.RatingCumulDetailsPanelSet_ManualLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_refreshVariables_43 (def :  pcf.RatingCumulDetailsPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_refreshVariables_45 (def :  pcf.RatingCumulDetailsPanelSet_WorkersCompLine) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function def_refreshVariables_47 (def :  pcf.RatingCumulDetailsPanelSet_default) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper, isEditable)
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard_QuoteScreen.pcf: line 23, column 46
    function initialValue_0 () : gw.document.DocumentProduction {
      return new gw.document.DocumentProduction()
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard_QuoteScreen.pcf: line 27, column 33
    function initialValue_1 () : entity.PolicyLine {
      return policyPeriod.RepresentativePolicyLines.first()
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function mode_2 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'mode' attribute on PanelRef at RewriteWizard_QuoteScreen.pcf: line 52, column 40
    function mode_48 () : java.lang.Object {
      return line.Pattern.PublicID
    }
    
    // 'title' attribute on TitleBar at RewriteWizard_QuoteScreen.pcf: line 55, column 76
    function title_27 () : java.lang.String {
      return line.Pattern.DisplayName
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_onEnter_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_QuoteScreen.pcf: line 32, column 91
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'visible' attribute on TitleBar at RewriteWizard_QuoteScreen.pcf: line 55, column 76
    function visible_26 () : java.lang.Boolean {
      return policyPeriod.RepresentativePolicyLines.Count > 1
    }
    
    property get documentProduction () : gw.document.DocumentProduction {
      return getVariableValue("documentProduction", 0) as gw.document.DocumentProduction
    }
    
    property set documentProduction ($arg :  gw.document.DocumentProduction) {
      setVariableValue("documentProduction", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
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
    
    property get line () : entity.PolicyLine {
      return getVariableValue("line", 0) as entity.PolicyLine
    }
    
    property set line ($arg :  entity.PolicyLine) {
      setVariableValue("line", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}