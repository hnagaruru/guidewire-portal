package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CPBuildingsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CPBuildingsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AddMoreLocations) at CPBuildingsScreen.pcf: line 83, column 63
    function action_33 () : void {
      MoreCPLocationsPopup.push(cpLine.Branch, unusedLocations, openForEdit)
    }
    
    // 'action' attribute on ToolbarButton (id=CopyBuildingCoveragesButton) at CPBuildingsScreen.pcf: line 95, column 169
    function action_37 () : void {
      jobWizardHelper.validateAndSaveDraft(); CopyBuildingCoveragesPopup.push(cpLine.Branch)
    }
    
    // 'action' attribute on MenuItem (id=Export) at CPBuildingsScreen.pcf: line 103, column 77
    function action_38 () : void {
      if (openForEdit) jobWizardHelper.validateAndSaveDraft(); ExcelExportPopup.push(cpLine)
    }
    
    // 'action' attribute on MenuItem (id=Import) at CPBuildingsScreen.pcf: line 108, column 36
    function action_40 () : void {
      jobWizardHelper.validateAndSaveDraft(); ExcelImportFilePopup.push(cpLine.Branch, jobWizardHelper)
    }
    
    // 'action' attribute on MenuItem (id=AddMoreLocations) at CPBuildingsScreen.pcf: line 83, column 63
    function action_dest_34 () : pcf.api.Destination {
      return pcf.MoreCPLocationsPopup.createDestination(cpLine.Branch, unusedLocations, openForEdit)
    }
    
    // 'def' attribute on PanelRef at CPBuildingsScreen.pcf: line 49, column 59
    function def_onEnter_24 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(cpLine.Branch, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPBuildingsScreen.pcf: line 51, column 77
    function def_onEnter_41 (def :  pcf.CPBuildingsAndLocationsLV) : void {
      def.onEnter(cpLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPBuildingsScreen.pcf: line 49, column 59
    function def_refreshVariables_25 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(cpLine.Branch, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at CPBuildingsScreen.pcf: line 51, column 77
    function def_refreshVariables_42 (def :  pcf.CPBuildingsAndLocationsLV) : void {
      def.refreshVariables(cpLine, openForEdit, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at CPBuildingsScreen.pcf: line 21, column 33
    function initialValue_0 () : AccountLocation[] {
      return cpLine.UnusedLocations
    }
    
    // 'initialValue' attribute on Variable at CPBuildingsScreen.pcf: line 25, column 19
    function initialValue_1 () : int {
      return 10
    }
    
    // 'initialValue' attribute on Variable at CPBuildingsScreen.pcf: line 33, column 23
    function initialValue_2 () : Boolean {
      return gw.riskassessment.PolicyLocationsRiskAssessmentRequestor.isLocationsRiskAssessmentInProgress(cpLine.AssociatedPolicyPeriod)
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function mode_3 () : java.lang.Object {
      return cpLine.Branch.Job.Subtype
    }
    
    // 'sortBy' attribute on IteratorSort at CPBuildingsScreen.pcf: line 73, column 32
    function sortBy_27 (unusedLocation :  entity.AccountLocation) : java.lang.Object {
      return unusedLocation.LocationNum
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_onEnter_10 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_onEnter_12 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_onEnter_14 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_onEnter_16 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_onEnter_18 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_onEnter_20 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_onEnter_4 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_onEnter_6 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_onEnter_8 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_refreshVariables_11 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_refreshVariables_13 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_refreshVariables_15 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_refreshVariables_17 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_refreshVariables_19 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_refreshVariables_21 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CPBuildingsScreen.pcf: line 38, column 106
    function toolbarButtonSet_refreshVariables_9 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(cpLine.Branch, cpLine.Branch.Job, jobWizardHelper)
    }
    
    // 'value' attribute on MenuItemIterator (id=UnusedLocationIterator) at CPBuildingsScreen.pcf: line 70, column 52
    function value_31 () : entity.AccountLocation[] {
      return gw.web.policy.LocationDisplayUtil.getLimitedNumberOfSortedLocations(unusedLocations, cpLine, maxLocNum)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at CPBuildingsScreen.pcf: line 43, column 81
    function visible_22 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(cpLine.Branch)
    }
    
    // 'visible' attribute on AlertBar (id=RiskEvaluationInProgressAlert) at CPBuildingsScreen.pcf: line 47, column 43
    function visible_23 () : java.lang.Boolean {
      return RiskEvaluationInProgress
    }
    
    // 'visible' attribute on AddMenuItem (id=AddNewLocation) at CPBuildingsScreen.pcf: line 62, column 36
    function visible_26 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on MenuItem (id=AddMoreLocations) at CPBuildingsScreen.pcf: line 83, column 63
    function visible_32 () : java.lang.Boolean {
      return unusedLocations.Count > maxLocNum
    }
    
    // 'visible' attribute on ToolbarButton (id=CopyBuildingCoveragesButton) at CPBuildingsScreen.pcf: line 95, column 169
    function visible_36 () : java.lang.Boolean {
      return openForEdit and cpLine.Branch.CanCopyCoverages and cpLine.CPLocations.arrays("Buildings").toArray(new entity.CPBuilding[0]).Count > 1
    }
    
    property get RiskEvaluationInProgress () : Boolean {
      return getVariableValue("RiskEvaluationInProgress", 0) as Boolean
    }
    
    property set RiskEvaluationInProgress ($arg :  Boolean) {
      setVariableValue("RiskEvaluationInProgress", 0, $arg)
    }
    
    property get allChecked () : boolean {
      return getVariableValue("allChecked", 0) as java.lang.Boolean
    }
    
    property set allChecked ($arg :  boolean) {
      setVariableValue("allChecked", 0, $arg)
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
    
    property get maxLocNum () : int {
      return getVariableValue("maxLocNum", 0) as java.lang.Integer
    }
    
    property set maxLocNum ($arg :  int) {
      setVariableValue("maxLocNum", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get unusedLocations () : AccountLocation[] {
      return getVariableValue("unusedLocations", 0) as AccountLocation[]
    }
    
    property set unusedLocations ($arg :  AccountLocation[]) {
      setVariableValue("unusedLocations", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/CPBuildingsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CPBuildingsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedAccountLocation) at CPBuildingsScreen.pcf: line 77, column 53
    function action_28 () : void {
      CPLocationPopup.push(cpLine, unusedLocation, openForEdit, true, jobWizardHelper)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedAccountLocation) at CPBuildingsScreen.pcf: line 77, column 53
    function action_dest_29 () : pcf.api.Destination {
      return pcf.CPLocationPopup.createDestination(cpLine, unusedLocation, openForEdit, true, jobWizardHelper)
    }
    
    // 'label' attribute on MenuItem (id=UnassignedAccountLocation) at CPBuildingsScreen.pcf: line 77, column 53
    function label_30 () : java.lang.Object {
      return unusedLocation.DisplayName
    }
    
    property get unusedLocation () : entity.AccountLocation {
      return getIteratedValue(1) as entity.AccountLocation
    }
    
    
  }
  
  
}