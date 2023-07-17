package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PersonalAutoScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PersonalAutoScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PersonalAutoScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PersonalAutoScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PersonalAutoScreen.pcf: line 33, column 50
    function def_onEnter_21 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(paLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PersonalAutoScreen.pcf: line 36, column 60
    function def_onEnter_23 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PersonalAutoScreen.pcf: line 42, column 75
    function def_onEnter_26 (def :  pcf.PersonalAuto_AllVehicleCoveragesDV) : void {
      def.onEnter(paLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at PersonalAutoScreen.pcf: line 47, column 84
    function def_onEnter_28 (def :  pcf.PAPerVehiclePanelSet) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PersonalAutoScreen.pcf: line 53, column 105
    function def_onEnter_31 (def :  pcf.PALineAdditionalCoveragesDV) : void {
      def.onEnter(paLine, new String[]{"PAMiscGrp"}, openForEdit)
    }
    
    // 'def' attribute on PanelRef at PersonalAutoScreen.pcf: line 59, column 108
    function def_onEnter_34 (def :  pcf.PAVehicleAdditionalCoveragesDV) : void {
      def.onEnter(paLine, new String[]{"PAMiscGrp"}, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=policyLevelExclusionsAndConditions) at PersonalAutoScreen.pcf: line 70, column 54
    function def_onEnter_36 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.onEnter(policyPeriod.PersonalAutoLine, new String[] {"PAPhysDamExcl", "PALiabExcl", "PAPhysDamCond", "PALiabCond"}, true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PersonalAutoScreen.pcf: line 33, column 50
    function def_refreshVariables_22 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(paLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PersonalAutoScreen.pcf: line 36, column 60
    function def_refreshVariables_24 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PersonalAutoScreen.pcf: line 42, column 75
    function def_refreshVariables_27 (def :  pcf.PersonalAuto_AllVehicleCoveragesDV) : void {
      def.refreshVariables(paLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at PersonalAutoScreen.pcf: line 47, column 84
    function def_refreshVariables_29 (def :  pcf.PAPerVehiclePanelSet) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PersonalAutoScreen.pcf: line 53, column 105
    function def_refreshVariables_32 (def :  pcf.PALineAdditionalCoveragesDV) : void {
      def.refreshVariables(paLine, new String[]{"PAMiscGrp"}, openForEdit)
    }
    
    // 'def' attribute on PanelRef at PersonalAutoScreen.pcf: line 59, column 108
    function def_refreshVariables_35 (def :  pcf.PAVehicleAdditionalCoveragesDV) : void {
      def.refreshVariables(paLine, new String[]{"PAMiscGrp"}, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=policyLevelExclusionsAndConditions) at PersonalAutoScreen.pcf: line 70, column 54
    function def_refreshVariables_37 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.refreshVariables(policyPeriod.PersonalAutoLine, new String[] {"PAPhysDamExcl", "PALiabExcl", "PAPhysDamCond", "PALiabCond"}, true, jobWizardHelper)
    }
    
    // 'editable' attribute on Screen (id=PersonalAutoScreen) at PersonalAutoScreen.pcf: line 7, column 29
    function editable_38 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at PersonalAutoScreen.pcf: line 20, column 45
    function initialValue_0 () : productmodel.PersonalAutoLine {
      return policyPeriod.PersonalAutoLine
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function mode_1 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'title' attribute on TitleBar at PersonalAutoScreen.pcf: line 44, column 109
    function title_25 () : java.lang.String {
      return DisplayKey.get("Web.Policy.PA.AllVehicleCoveragesTitle", paLine.BaseState)
    }
    
    // 'title' attribute on TitleBar at PersonalAutoScreen.pcf: line 61, column 109
    function title_33 () : java.lang.String {
      return DisplayKey.get("Web.Policy.PA.PerVehicleCoveragesTitle", paLine.BaseState)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at PersonalAutoScreen.pcf: line 25, column 104
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at PersonalAutoScreen.pcf: line 30, column 80
    function visible_20 () : java.lang.Boolean {
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
    
    property get paLine () : productmodel.PersonalAutoLine {
      return getVariableValue("paLine", 0) as productmodel.PersonalAutoLine
    }
    
    property set paLine ($arg :  productmodel.PersonalAutoLine) {
      setVariableValue("paLine", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
    function getVehicleDescription(vehicle : PersonalVehicle) : String {
            return vehicle.Year + " " + vehicle.Make + " " + vehicle.Model
          }
        
    
    
  }
  
  
}