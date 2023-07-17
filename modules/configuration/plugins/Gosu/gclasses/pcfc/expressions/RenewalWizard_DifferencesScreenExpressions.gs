package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/renewal/RenewalWizard_DifferencesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RenewalWizard_DifferencesScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/renewal/RenewalWizard_DifferencesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends RenewalWizard_DifferencesScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 42, column 117
    function def_onEnter_24 (def :  pcf.DifferencesPanelSet) : void {
      def.onEnter(TC_POLICYREVIEW, policyPeriod.BasedOn, policyPeriod, rootNode, diffTreeConfig)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 42, column 117
    function def_refreshVariables_25 (def :  pcf.DifferencesPanelSet) : void {
      def.refreshVariables(TC_POLICYREVIEW, policyPeriod.BasedOn, policyPeriod, rootNode, diffTreeConfig)
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard_DifferencesScreen.pcf: line 33, column 45
    function initialValue_22 () : gw.api.tree.RowTreeRootNode {
      return getRootNode()
    }
    
    // 'initialValue' attribute on Variable at RenewalWizard_DifferencesScreen.pcf: line 37, column 34
    function initialValue_23 () : java.lang.String {
      return policyPeriod.Policy.Product.DiffTreeConfig
    }
    
    // 'value' attribute on PanelIterator at RenewalWizard_DifferencesScreen.pcf: line 50, column 43
    function value_47 () : entity.PolicyLine[] {
      return policyPeriod.Lines
    }
    
    property get diffTreeConfig () : java.lang.String {
      return getVariableValue("diffTreeConfig", 1) as java.lang.String
    }
    
    property set diffTreeConfig ($arg :  java.lang.String) {
      setVariableValue("diffTreeConfig", 1, $arg)
    }
    
    property get rootNode () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("rootNode", 1) as gw.api.tree.RowTreeRootNode
    }
    
    property set rootNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("rootNode", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/renewal/RenewalWizard_DifferencesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_onEnter_28 (def :  pcf.PolicyLineSummaryPanelSet_BOPLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_onEnter_30 (def :  pcf.PolicyLineSummaryPanelSet_BusinessAutoLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_onEnter_32 (def :  pcf.PolicyLineSummaryPanelSet_CPLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_onEnter_34 (def :  pcf.PolicyLineSummaryPanelSet_GLLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_onEnter_36 (def :  pcf.PolicyLineSummaryPanelSet_HOPLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_onEnter_38 (def :  pcf.PolicyLineSummaryPanelSet_IMLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_onEnter_40 (def :  pcf.PolicyLineSummaryPanelSet_PersonalAutoLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_onEnter_42 (def :  pcf.PolicyLineSummaryPanelSet_WorkersCompLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_onEnter_44 (def :  pcf.PolicyLineSummaryPanelSet_default) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_refreshVariables_29 (def :  pcf.PolicyLineSummaryPanelSet_BOPLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_refreshVariables_31 (def :  pcf.PolicyLineSummaryPanelSet_BusinessAutoLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_refreshVariables_33 (def :  pcf.PolicyLineSummaryPanelSet_CPLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_refreshVariables_35 (def :  pcf.PolicyLineSummaryPanelSet_GLLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_refreshVariables_37 (def :  pcf.PolicyLineSummaryPanelSet_HOPLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_refreshVariables_39 (def :  pcf.PolicyLineSummaryPanelSet_IMLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_refreshVariables_41 (def :  pcf.PolicyLineSummaryPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_refreshVariables_43 (def :  pcf.PolicyLineSummaryPanelSet_WorkersCompLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function def_refreshVariables_45 (def :  pcf.PolicyLineSummaryPanelSet_default) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'mode' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 53, column 48
    function mode_46 () : java.lang.Object {
      return line.Pattern.CodeIdentifier
    }
    
    // 'title' attribute on TitleBar at RenewalWizard_DifferencesScreen.pcf: line 56, column 58
    function title_27 () : java.lang.String {
      return line.DisplayName
    }
    
    // 'visible' attribute on TitleBar at RenewalWizard_DifferencesScreen.pcf: line 56, column 58
    function visible_26 () : java.lang.Boolean {
      return policyPeriod.Lines.Count > 1
    }
    
    property get line () : entity.PolicyLine {
      return getIteratedValue(2) as entity.PolicyLine
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/renewal/RenewalWizard_DifferencesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RenewalWizard_DifferencesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 28, column 72
    function def_onEnter_20 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getWizardWarningMessages())
    }
    
    // 'def' attribute on PanelRef at RenewalWizard_DifferencesScreen.pcf: line 28, column 72
    function def_refreshVariables_21 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getWizardWarningMessages())
    }
    
    // 'editable' attribute on Screen (id=RenewalWizard_DifferencesScreen) at RenewalWizard_DifferencesScreen.pcf: line 7, column 42
    function editable_48 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function mode_0 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_1 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RenewalWizard_DifferencesScreen.pcf: line 21, column 104
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at RenewalWizard_DifferencesScreen.pcf: line 26, column 80
    function visible_19 () : java.lang.Boolean {
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
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    function getRootNode() : gw.api.tree.RowTreeRootNode {
      if (policyPeriod.BasedOn.PolicyTerm.CheckArchived) {
        return null
      }
      return gw.diff.tree.DiffTree.recalculateRootNodeForPolicyReview(policyPeriod)
    }
    
    
  }
  
  
}