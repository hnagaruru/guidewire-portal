package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditWizard_PremiumsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditWizard_PremiumsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditWizard_PremiumsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditWizard_PremiumsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at AuditWizard_PremiumsScreen.pcf: line 31, column 57
    function def_onEnter_21 (def :  pcf.CostOverridesWarningPanelSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at AuditWizard_PremiumsScreen.pcf: line 38, column 48
    function def_onEnter_24 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef at AuditWizard_PremiumsScreen.pcf: line 42, column 45
    function def_onEnter_27 (def :  pcf.PremiumsScreenDV_PremiumReport) : void {
      def.onEnter(policyPeriod, audit)
    }
    
    // 'def' attribute on PanelRef at AuditWizard_PremiumsScreen.pcf: line 42, column 45
    function def_onEnter_29 (def :  pcf.PremiumsScreenDV_default) : void {
      def.onEnter(policyPeriod, audit)
    }
    
    // 'def' attribute on PanelRef (id=WarningDetailsPanel) at AuditWizard_PremiumsScreen.pcf: line 50, column 37
    function def_onEnter_33 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at AuditWizard_PremiumsScreen.pcf: line 54, column 46
    function def_onEnter_36 (def :  pcf.RatingOverrideButtonDV) : void {
      def.onEnter(policyPeriod, policyLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef (id=RatingDetailPanel) at AuditWizard_PremiumsScreen.pcf: line 59, column 42
    function def_onEnter_39 (def :  pcf.AuditPremiumDetailsPanelSet_GLLine) : void {
      def.onEnter(audit.AuditInformation, policyPeriod, false)
    }
    
    // 'def' attribute on PanelRef (id=RatingDetailPanel) at AuditWizard_PremiumsScreen.pcf: line 59, column 42
    function def_onEnter_41 (def :  pcf.AuditPremiumDetailsPanelSet_WorkersCompLine) : void {
      def.onEnter(audit.AuditInformation, policyPeriod, false)
    }
    
    // 'def' attribute on PanelRef at AuditWizard_PremiumsScreen.pcf: line 31, column 57
    function def_refreshVariables_22 (def :  pcf.CostOverridesWarningPanelSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at AuditWizard_PremiumsScreen.pcf: line 38, column 48
    function def_refreshVariables_25 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef at AuditWizard_PremiumsScreen.pcf: line 42, column 45
    function def_refreshVariables_28 (def :  pcf.PremiumsScreenDV_PremiumReport) : void {
      def.refreshVariables(policyPeriod, audit)
    }
    
    // 'def' attribute on PanelRef at AuditWizard_PremiumsScreen.pcf: line 42, column 45
    function def_refreshVariables_30 (def :  pcf.PremiumsScreenDV_default) : void {
      def.refreshVariables(policyPeriod, audit)
    }
    
    // 'def' attribute on PanelRef (id=WarningDetailsPanel) at AuditWizard_PremiumsScreen.pcf: line 50, column 37
    function def_refreshVariables_34 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at AuditWizard_PremiumsScreen.pcf: line 54, column 46
    function def_refreshVariables_37 (def :  pcf.RatingOverrideButtonDV) : void {
      def.refreshVariables(policyPeriod, policyLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef (id=RatingDetailPanel) at AuditWizard_PremiumsScreen.pcf: line 59, column 42
    function def_refreshVariables_40 (def :  pcf.AuditPremiumDetailsPanelSet_GLLine) : void {
      def.refreshVariables(audit.AuditInformation, policyPeriod, false)
    }
    
    // 'def' attribute on PanelRef (id=RatingDetailPanel) at AuditWizard_PremiumsScreen.pcf: line 59, column 42
    function def_refreshVariables_42 (def :  pcf.AuditPremiumDetailsPanelSet_WorkersCompLine) : void {
      def.refreshVariables(audit.AuditInformation, policyPeriod, false)
    }
    
    // 'editable' attribute on PanelRef at AuditWizard_PremiumsScreen.pcf: line 38, column 48
    function editable_23 () : java.lang.Boolean {
      return policyPeriod.OpenForEdit
    }
    
    // 'initialValue' attribute on Variable at AuditWizard_PremiumsScreen.pcf: line 19, column 23
    function initialValue_0 () : boolean {
      return audit.AuditInformation.IsPremiumReport
    }
    
    // 'initialValue' attribute on Variable at AuditWizard_PremiumsScreen.pcf: line 23, column 26
    function initialValue_1 () : PolicyLine {
      return policyPeriod.Lines.first()
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function mode_2 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'mode' attribute on PanelRef at AuditWizard_PremiumsScreen.pcf: line 42, column 45
    function mode_31 () : java.lang.Object {
      return isPremiumReport ? "PremiumReport" : null
    }
    
    // 'mode' attribute on PanelRef (id=RatingDetailPanel) at AuditWizard_PremiumsScreen.pcf: line 59, column 42
    function mode_43 () : java.lang.Object {
      return policyLine.PatternCode
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_onEnter_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at AuditWizard_PremiumsScreen.pcf: line 28, column 93
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, audit, jobWizardHelper)
    }
    
    // 'visible' attribute on PanelRef at AuditWizard_PremiumsScreen.pcf: line 42, column 45
    function visible_26 () : java.lang.Boolean {
      return !policyPeriod.Archived
    }
    
    // 'visible' attribute on PanelRef (id=RatingOverrideButtonDV) at AuditWizard_PremiumsScreen.pcf: line 54, column 46
    function visible_35 () : java.lang.Boolean {
      return jobWizardHelper != null
    }
    
    property get audit () : Audit {
      return getRequireValue("audit", 0) as Audit
    }
    
    property set audit ($arg :  Audit) {
      setRequireValue("audit", 0, $arg)
    }
    
    property get isPremiumReport () : boolean {
      return getVariableValue("isPremiumReport", 0) as java.lang.Boolean
    }
    
    property set isPremiumReport ($arg :  boolean) {
      setVariableValue("isPremiumReport", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyLine () : PolicyLine {
      return getVariableValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setVariableValue("policyLine", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}