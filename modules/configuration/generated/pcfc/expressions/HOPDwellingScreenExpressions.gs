package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPDwellingScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPDwellingScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPDwellingScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at HOPDwellingScreen.pcf: line 32, column 58
    function def_onEnter_21 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at HOPDwellingScreen.pcf: line 34, column 78
    function def_onEnter_23 (def :  pcf.HOPDwellingPanelSet) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at HOPDwellingScreen.pcf: line 32, column 58
    function def_refreshVariables_22 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at HOPDwellingScreen.pcf: line 34, column 78
    function def_refreshVariables_24 (def :  pcf.HOPDwellingPanelSet) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'editable' attribute on Screen (id=HOPDwellingScreen) at HOPDwellingScreen.pcf: line 7, column 28
    function editable_25 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at HOPDwellingScreen.pcf: line 20, column 26
    function initialValue_0 () : entity.Job {
      return policyPeriod.Job
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function mode_1 () : java.lang.Object {
      return job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at HOPDwellingScreen.pcf: line 25, column 91
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, job, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at HOPDwellingScreen.pcf: line 30, column 80
    function visible_20 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
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