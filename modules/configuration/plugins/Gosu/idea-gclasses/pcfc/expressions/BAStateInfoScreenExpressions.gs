package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BAStateInfoScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BAStateInfoScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAStateInfoScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BAStateInfoScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at BAStateInfoScreen.pcf: line 36, column 58
    function def_onEnter_22 (def :  pcf.OOSEPanelSet) : void {
      def.onEnter(policyPeriod, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BAStateInfoScreen.pcf: line 36, column 58
    function def_refreshVariables_23 (def :  pcf.OOSEPanelSet) : void {
      def.refreshVariables(policyPeriod, jobWizardHelper)
    }
    
    // 'editable' attribute on Screen (id=BAStateInfoScreen) at BAStateInfoScreen.pcf: line 7, column 28
    function editable_38 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at BAStateInfoScreen.pcf: line 20, column 32
    function initialValue_0 () : BusinessAutoLine {
      return policyPeriod.BusinessAutoLine
    }
    
    // 'initialValue' attribute on Variable at BAStateInfoScreen.pcf: line 24, column 21
    function initialValue_1 () : State {
      return typekey.State.getTypeKeys(false)[0]
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function mode_2 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_onEnter_19 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_refreshVariables_20 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at BAStateInfoScreen.pcf: line 29, column 104
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at BAStateInfoScreen.pcf: line 34, column 80
    function visible_21 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    property get baLine () : BusinessAutoLine {
      return getVariableValue("baLine", 0) as BusinessAutoLine
    }
    
    property set baLine ($arg :  BusinessAutoLine) {
      setVariableValue("baLine", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get newState () : State {
      return getVariableValue("newState", 0) as State
    }
    
    property set newState ($arg :  State) {
      setVariableValue("newState", 0, $arg)
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
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAStateInfoScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=States_Cell) at BAStateInfoScreen.pcf: line 53, column 49
    function valueRoot_26 () : java.lang.Object {
      return jurisdiction
    }
    
    // 'value' attribute on TypeKeyCell (id=States_Cell) at BAStateInfoScreen.pcf: line 53, column 49
    function value_25 () : typekey.Jurisdiction {
      return jurisdiction.State
    }
    
    property get jurisdiction () : entity.BAJurisdiction {
      return getIteratedValue(2) as entity.BAJurisdiction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAStateInfoScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends BAStateInfoScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at BAStateInfoScreen.pcf: line 62, column 81
    function def_onEnter_29 (def :  pcf.BAStateCoveragesPanelSet) : void {
      def.onEnter(selectedState, baLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at BAStateInfoScreen.pcf: line 68, column 123
    function def_onEnter_31 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.onEnter(selectedState, baLine.AdditionalCoverageCategories, true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BAStateInfoScreen.pcf: line 74, column 137
    function def_onEnter_33 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.onEnter(selectedState, baLine.AdditionalCoverageCategories, true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BAStateInfoScreen.pcf: line 82, column 30
    function def_onEnter_35 (def :  pcf.BusinessAutoStateModifierPanelSet) : void {
      def.onEnter(baLine, selectedState)
    }
    
    // 'def' attribute on PanelRef at BAStateInfoScreen.pcf: line 62, column 81
    function def_refreshVariables_30 (def :  pcf.BAStateCoveragesPanelSet) : void {
      def.refreshVariables(selectedState, baLine, openForEdit)
    }
    
    // 'def' attribute on PanelRef at BAStateInfoScreen.pcf: line 68, column 123
    function def_refreshVariables_32 (def :  pcf.AdditionalCoveragesPanelSet) : void {
      def.refreshVariables(selectedState, baLine.AdditionalCoverageCategories, true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BAStateInfoScreen.pcf: line 74, column 137
    function def_refreshVariables_34 (def :  pcf.AdditionalExclusionsAndConditionsPanelSet) : void {
      def.refreshVariables(selectedState, baLine.AdditionalCoverageCategories, true, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at BAStateInfoScreen.pcf: line 82, column 30
    function def_refreshVariables_36 (def :  pcf.BusinessAutoStateModifierPanelSet) : void {
      def.refreshVariables(baLine, selectedState)
    }
    
    // 'value' attribute on TypeKeyCell (id=States_Cell) at BAStateInfoScreen.pcf: line 53, column 49
    function sortValue_24 (jurisdiction :  entity.BAJurisdiction) : java.lang.Object {
      return jurisdiction.State
    }
    
    // 'value' attribute on RowIterator at BAStateInfoScreen.pcf: line 46, column 47
    function value_28 () : entity.BAJurisdiction[] {
      return baLine.GaragingJurisdictions
    }
    
    // 'visible' attribute on Card (id=ModifierCard) at BAStateInfoScreen.pcf: line 79, column 51
    function visible_37 () : java.lang.Boolean {
      return policyPeriod.CanViewModifiers
    }
    
    property get selectedState () : BAJurisdiction {
      return getCurrentSelection(1) as BAJurisdiction
    }
    
    property set selectedState ($arg :  BAJurisdiction) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}