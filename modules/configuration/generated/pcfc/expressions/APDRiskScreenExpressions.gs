package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRiskScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDRiskScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRiskScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ToggleProductDesignMode) at APDRiskScreen.pcf: line 34, column 75
    function action_4 () : void {
      userPreferences.toggleProductDesignMode()
    }
    
    // 'def' attribute on PanelRef at APDRiskScreen.pcf: line 41, column 60
    function def_onEnter_25 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(apdLine.Branch, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at APDRiskScreen.pcf: line 43, column 110
    function def_onEnter_27 (def :  pcf.APDRiskCoverablePanelSet) : void {
      def.onEnter(apdLine, openForEdit, jobWizardHelper, coverDefinitionHelper, edition)
    }
    
    // 'def' attribute on PanelRef at APDRiskScreen.pcf: line 41, column 60
    function def_refreshVariables_26 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(apdLine.Branch, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at APDRiskScreen.pcf: line 43, column 110
    function def_refreshVariables_28 (def :  pcf.APDRiskCoverablePanelSet) : void {
      def.refreshVariables(apdLine, openForEdit, jobWizardHelper, coverDefinitionHelper, edition)
    }
    
    // 'editable' attribute on Screen (id=APDRiskScreen) at APDRiskScreen.pcf: line 7, column 24
    function editable_29 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at APDRiskScreen.pcf: line 20, column 50
    function initialValue_0 () : gw.apd.model.CoverDefinitionHelper {
      return new gw.apd.model.CoverDefinitionHelper()
    }
    
    // 'initialValue' attribute on Variable at APDRiskScreen.pcf: line 24, column 37
    function initialValue_1 () : APDProductLineEdition {
      return apdLine.APDEdition
    }
    
    // 'initialValue' attribute on Variable at APDRiskScreen.pcf: line 28, column 70
    function initialValue_2 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'label' attribute on ToolbarButton (id=ToggleProductDesignMode) at APDRiskScreen.pcf: line 34, column 75
    function label_5 () : java.lang.Object {
      return userPreferences.inUseMode() ? DisplayKey.get("Job.Operation.ToggleDesignerMode") : DisplayKey.get("Job.Operation.ToggleUserMode")
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function mode_6 () : java.lang.Object {
      return apdLine.Branch.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_onEnter_19 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_onEnter_21 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_onEnter_23 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_refreshVariables_22 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_refreshVariables_24 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDRiskScreen.pcf: line 38, column 108
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'visible' attribute on ToolbarButton (id=ToggleProductDesignMode) at APDRiskScreen.pcf: line 34, column 75
    function visible_3 () : java.lang.Boolean {
      return gw.api.system.PCDependenciesGateway.ServerMode.isDev()
    }
    
    property get apdLine () : APDRiskPolicyLine {
      return getRequireValue("apdLine", 0) as APDRiskPolicyLine
    }
    
    property set apdLine ($arg :  APDRiskPolicyLine) {
      setRequireValue("apdLine", 0, $arg)
    }
    
    property get coverDefinitionHelper () : gw.apd.model.CoverDefinitionHelper {
      return getVariableValue("coverDefinitionHelper", 0) as gw.apd.model.CoverDefinitionHelper
    }
    
    property set coverDefinitionHelper ($arg :  gw.apd.model.CoverDefinitionHelper) {
      setVariableValue("coverDefinitionHelper", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getVariableValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setVariableValue("edition", 0, $arg)
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
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
  }
  
  
}