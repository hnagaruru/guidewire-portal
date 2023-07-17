package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/policy/IMBuildingsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMBuildingsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMBuildingsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMBuildingsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AddMoreLocations) at IMBuildingsScreen.pcf: line 75, column 63
    function action_31 () : void {
      MoreIMLocationsPopup.push(imLine.Branch, unusedLocations, openForEdit)
    }
    
    // 'action' attribute on MenuItem (id=AddMoreLocations) at IMBuildingsScreen.pcf: line 75, column 63
    function action_dest_32 () : pcf.api.Destination {
      return pcf.MoreIMLocationsPopup.createDestination(imLine.Branch, unusedLocations, openForEdit)
    }
    
    // 'def' attribute on PanelRef at IMBuildingsScreen.pcf: line 41, column 59
    function def_onEnter_22 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(imLine.Branch, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at IMBuildingsScreen.pcf: line 43, column 77
    function def_onEnter_34 (def :  pcf.IMBuildingsAndLocationsLV) : void {
      def.onEnter(imLine, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at IMBuildingsScreen.pcf: line 41, column 59
    function def_refreshVariables_23 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(imLine.Branch, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at IMBuildingsScreen.pcf: line 43, column 77
    function def_refreshVariables_35 (def :  pcf.IMBuildingsAndLocationsLV) : void {
      def.refreshVariables(imLine, openForEdit, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at IMBuildingsScreen.pcf: line 21, column 33
    function initialValue_0 () : AccountLocation[] {
      return imLine.UnusedLocations
    }
    
    // 'initialValue' attribute on Variable at IMBuildingsScreen.pcf: line 25, column 19
    function initialValue_1 () : int {
      return 10
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function mode_2 () : java.lang.Object {
      return imLine.Branch.Job.Subtype
    }
    
    // 'sortBy' attribute on IteratorSort at IMBuildingsScreen.pcf: line 65, column 32
    function sortBy_25 (unusedLocation :  entity.AccountLocation) : java.lang.Object {
      return unusedLocation.LocationNum
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_onEnter_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at IMBuildingsScreen.pcf: line 34, column 106
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(imLine.Branch, imLine.Branch.Job, jobWizardHelper)
    }
    
    // 'value' attribute on MenuItemIterator (id=UnsedLocationIterator) at IMBuildingsScreen.pcf: line 62, column 52
    function value_29 () : entity.AccountLocation[] {
      return gw.web.policy.LocationDisplayUtil.getLimitedNumberOfSortedLocations(unusedLocations, imLine, maxLocNum)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at IMBuildingsScreen.pcf: line 39, column 81
    function visible_21 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(imLine.Branch)
    }
    
    // 'visible' attribute on AddMenuItem (id=AddNewLocation) at IMBuildingsScreen.pcf: line 54, column 36
    function visible_24 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on MenuItem (id=AddMoreLocations) at IMBuildingsScreen.pcf: line 75, column 63
    function visible_30 () : java.lang.Boolean {
      return unusedLocations.Count > maxLocNum
    }
    
    property get allChecked () : boolean {
      return getVariableValue("allChecked", 0) as java.lang.Boolean
    }
    
    property set allChecked ($arg :  boolean) {
      setVariableValue("allChecked", 0, $arg)
    }
    
    property get imLine () : InlandMarineLine {
      return getRequireValue("imLine", 0) as InlandMarineLine
    }
    
    property set imLine ($arg :  InlandMarineLine) {
      setRequireValue("imLine", 0, $arg)
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
  
  @javax.annotation.Generated("config/web/pcf/line/im/policy/IMBuildingsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IMBuildingsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedAccountLocation) at IMBuildingsScreen.pcf: line 69, column 53
    function action_26 () : void {
      IMLocationPopup.push(imLine, unusedLocation, openForEdit, true)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedAccountLocation) at IMBuildingsScreen.pcf: line 69, column 53
    function action_dest_27 () : pcf.api.Destination {
      return pcf.IMLocationPopup.createDestination(imLine, unusedLocation, openForEdit, true)
    }
    
    // 'label' attribute on MenuItem (id=UnassignedAccountLocation) at IMBuildingsScreen.pcf: line 69, column 53
    function label_28 () : java.lang.Object {
      return unusedLocation.DisplayName
    }
    
    property get unusedLocation () : entity.AccountLocation {
      return getIteratedValue(1) as entity.AccountLocation
    }
    
    
  }
  
  
}