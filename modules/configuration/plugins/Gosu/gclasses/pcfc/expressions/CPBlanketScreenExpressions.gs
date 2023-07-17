package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBlanketScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPBlanketScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBlanketScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPBlanketScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at CPBlanketScreen.pcf: line 28, column 59
    function def_onEnter_20 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(cpLine.Branch, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPBlanketScreen.pcf: line 30, column 70
    function def_onEnter_22 (def :  pcf.CPBlanketPanelSet) : void {
      def.onEnter(cpLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPBlanketScreen.pcf: line 28, column 59
    function def_refreshVariables_21 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(cpLine.Branch, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPBlanketScreen.pcf: line 30, column 70
    function def_refreshVariables_23 (def :  pcf.CPBlanketPanelSet) : void {
      def.refreshVariables(cpLine, openForEdit, jobWizardHelper)
    }
    
    // 'editable' attribute on Screen (id=CPBlanketScreen) at CPBlanketScreen.pcf: line 7, column 26
    function editable_24 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function mode_0 () : java.lang.Object {
      return cpLine.Branch.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_onEnter_1 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBlanketScreen.pcf: line 21, column 106
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at CPBlanketScreen.pcf: line 26, column 81
    function visible_19 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(cpLine.Branch)
    }
    
    property get cpLine () : CommercialPropertyLine {
      return getRequireValue("cpLine", 0) as CommercialPropertyLine
    }
    
    property set cpLine ($arg :  CommercialPropertyLine) {
      setRequireValue("cpLine", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getRequireValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  
}