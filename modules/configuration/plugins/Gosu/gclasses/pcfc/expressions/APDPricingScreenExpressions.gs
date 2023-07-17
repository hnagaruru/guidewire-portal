package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDPricingScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDPricingScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDPricingScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDPricingScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ToggleProductDesignMode) at APDPricingScreen.pcf: line 35, column 75
    function action_4 () : void {
      userPreferences.toggleProductDesignMode()
    }
    
    // 'def' attribute on PanelRef at APDPricingScreen.pcf: line 42, column 60
    function def_onEnter_25 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(apdLine.Branch, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at APDPricingScreen.pcf: line 48, column 92
    function def_onEnter_29 (def :  pcf.APDRiskPricingPanelSet) : void {
      def.onEnter(apdLine, jobWizardHelper, openForEdit, costCodeHelper)
    }
    
    // 'def' attribute on PanelRef at APDPricingScreen.pcf: line 42, column 60
    function def_refreshVariables_26 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(apdLine.Branch, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at APDPricingScreen.pcf: line 48, column 92
    function def_refreshVariables_30 (def :  pcf.APDRiskPricingPanelSet) : void {
      def.refreshVariables(apdLine, jobWizardHelper, openForEdit, costCodeHelper)
    }
    
    // 'editable' attribute on Screen (id=APDPricingScreen) at APDPricingScreen.pcf: line 7, column 27
    function editable_31 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at APDPricingScreen.pcf: line 20, column 43
    function initialValue_0 () : gw.apd.model.CostCodeHelper {
      return new gw.apd.model.CostCodeHelper()
    }
    
    // 'initialValue' attribute on Variable at APDPricingScreen.pcf: line 25, column 28
    function initialValue_1 () : APDPricing[] {
      return gw.apd.web.APDPricingScreenUIHelper.getCostPricingWithEmptyBasisOptionValue(apdLine)
    }
    
    // 'initialValue' attribute on Variable at APDPricingScreen.pcf: line 29, column 70
    function initialValue_2 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    // 'label' attribute on AlertBar (id=emptyBasisAlertBar) at APDPricingScreen.pcf: line 46, column 47
    function label_28 () : java.lang.Object {
      return DisplayKey.get("Web.APDPricing.EmptyValueAlert", gw.apd.web.APDPricingScreenUIHelper.getEmptyBasisDisplayString(basisWithNoValue))
    }
    
    // 'label' attribute on ToolbarButton (id=ToggleProductDesignMode) at APDPricingScreen.pcf: line 35, column 75
    function label_5 () : java.lang.Object {
      return userPreferences.inUseMode() ? DisplayKey.get("Job.Operation.ToggleDesignerMode") : DisplayKey.get("Job.Operation.ToggleUserMode")
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function mode_6 () : java.lang.Object {
      return apdLine.Branch.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_onEnter_19 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_onEnter_21 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_onEnter_23 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_refreshVariables_22 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_refreshVariables_24 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at APDPricingScreen.pcf: line 39, column 108
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(apdLine.Branch, apdLine.Branch.Job, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=emptyBasisAlertBar) at APDPricingScreen.pcf: line 46, column 47
    function visible_27 () : java.lang.Boolean {
      return basisWithNoValue.HasElements
    }
    
    // 'visible' attribute on ToolbarButton (id=ToggleProductDesignMode) at APDPricingScreen.pcf: line 35, column 75
    function visible_3 () : java.lang.Boolean {
      return gw.api.system.PCDependenciesGateway.ServerMode.isDev()
    }
    
    property get apdLine () : APDRiskPolicyLine {
      return getRequireValue("apdLine", 0) as APDRiskPolicyLine
    }
    
    property set apdLine ($arg :  APDRiskPolicyLine) {
      setRequireValue("apdLine", 0, $arg)
    }
    
    property get basisWithNoValue () : APDPricing[] {
      return getVariableValue("basisWithNoValue", 0) as APDPricing[]
    }
    
    property set basisWithNoValue ($arg :  APDPricing[]) {
      setVariableValue("basisWithNoValue", 0, $arg)
    }
    
    property get costCodeHelper () : gw.apd.model.CostCodeHelper {
      return getVariableValue("costCodeHelper", 0) as gw.apd.model.CostCodeHelper
    }
    
    property set costCodeHelper ($arg :  gw.apd.model.CostCodeHelper) {
      setVariableValue("costCodeHelper", 0, $arg)
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