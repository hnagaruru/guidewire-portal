package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPLineReviewScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPPLineReviewScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cpp/policy/CPPLineReviewScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPPLineReviewScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 29, column 43
    function def_onEnter_21 (def :  pcf.CPPLineReviewSummaryDV) : void {
      def.onEnter(line)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_onEnter_23 (def :  pcf.PolicyLineSummaryPanelSet_BOPLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_onEnter_25 (def :  pcf.PolicyLineSummaryPanelSet_BusinessAutoLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_onEnter_27 (def :  pcf.PolicyLineSummaryPanelSet_CPLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_onEnter_29 (def :  pcf.PolicyLineSummaryPanelSet_GLLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_onEnter_31 (def :  pcf.PolicyLineSummaryPanelSet_HOPLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_onEnter_33 (def :  pcf.PolicyLineSummaryPanelSet_IMLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_onEnter_35 (def :  pcf.PolicyLineSummaryPanelSet_PersonalAutoLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_onEnter_37 (def :  pcf.PolicyLineSummaryPanelSet_WorkersCompLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_onEnter_39 (def :  pcf.PolicyLineSummaryPanelSet_default) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 29, column 43
    function def_refreshVariables_22 (def :  pcf.CPPLineReviewSummaryDV) : void {
      def.refreshVariables(line)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_refreshVariables_24 (def :  pcf.PolicyLineSummaryPanelSet_BOPLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_refreshVariables_26 (def :  pcf.PolicyLineSummaryPanelSet_BusinessAutoLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_refreshVariables_28 (def :  pcf.PolicyLineSummaryPanelSet_CPLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_refreshVariables_30 (def :  pcf.PolicyLineSummaryPanelSet_GLLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_refreshVariables_32 (def :  pcf.PolicyLineSummaryPanelSet_HOPLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_refreshVariables_34 (def :  pcf.PolicyLineSummaryPanelSet_IMLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_refreshVariables_36 (def :  pcf.PolicyLineSummaryPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_refreshVariables_38 (def :  pcf.PolicyLineSummaryPanelSet_WorkersCompLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function def_refreshVariables_40 (def :  pcf.PolicyLineSummaryPanelSet_default) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at CPPLineReviewScreen.pcf: line 17, column 26
    function initialValue_0 () : entity.Job {
      return line.Branch.Job
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function mode_1 () : java.lang.Object {
      return job.Subtype
    }
    
    // 'mode' attribute on PanelRef at CPPLineReviewScreen.pcf: line 38, column 41
    function mode_41 () : java.lang.Object {
      return line.Pattern.PublicID
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(line.Branch, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPPLineReviewScreen.pcf: line 22, column 90
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(line.Branch, job, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at CPPLineReviewScreen.pcf: line 27, column 79
    function visible_20 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(line.Branch)
    }
    
    property get job () : entity.Job {
      return getVariableValue("job", 0) as entity.Job
    }
    
    property set job ($arg :  entity.Job) {
      setVariableValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : PolicyLine {
      return getRequireValue("line", 0) as PolicyLine
    }
    
    property set line ($arg :  PolicyLine) {
      setRequireValue("line", 0, $arg)
    }
    
    
  }
  
  
}