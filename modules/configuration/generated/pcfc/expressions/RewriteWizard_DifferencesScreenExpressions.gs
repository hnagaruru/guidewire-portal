package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard_DifferencesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RewriteWizard_DifferencesScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard_DifferencesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends RewriteWizard_DifferencesScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 39, column 140
    function def_onEnter_24 (def :  pcf.DifferencesPanelSet) : void {
      def.onEnter(TC_POLICYREVIEW, policyPeriod.BasedOn, policyPeriod, rootNodeWrapper.rowTreeRootNode, diffTreeConfig)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 46, column 84
    function def_onEnter_26 (def :  pcf.OOSConflictPanelSet) : void {
      def.onEnter(policyPeriod,rootNodeWrapper,jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 39, column 140
    function def_refreshVariables_25 (def :  pcf.DifferencesPanelSet) : void {
      def.refreshVariables(TC_POLICYREVIEW, policyPeriod.BasedOn, policyPeriod, rootNodeWrapper.rowTreeRootNode, diffTreeConfig)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 46, column 84
    function def_refreshVariables_27 (def :  pcf.OOSConflictPanelSet) : void {
      def.refreshVariables(policyPeriod,rootNodeWrapper,jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard_DifferencesScreen.pcf: line 30, column 52
    function initialValue_22 () : gw.api.tree.RowTreeRootNodeWrapper {
      return getRootNodeWrapper()
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard_DifferencesScreen.pcf: line 34, column 34
    function initialValue_23 () : java.lang.String {
      return policyPeriod.Policy.Product.DiffTreeConfig
    }
    
    // 'value' attribute on PanelIterator at RewriteWizard_DifferencesScreen.pcf: line 54, column 43
    function value_50 () : entity.PolicyLine[] {
      return policyPeriod.Lines
    }
    
    // 'visible' attribute on Card (id=OOSConflicts) at RewriteWizard_DifferencesScreen.pcf: line 44, column 93
    function visible_28 () : java.lang.Boolean {
      return policyPeriod.Job.OOSJob && policyPeriod.OOSConflicts.Count > 0
    }
    
    property get diffTreeConfig () : java.lang.String {
      return getVariableValue("diffTreeConfig", 1) as java.lang.String
    }
    
    property set diffTreeConfig ($arg :  java.lang.String) {
      setVariableValue("diffTreeConfig", 1, $arg)
    }
    
    property get rootNodeWrapper () : gw.api.tree.RowTreeRootNodeWrapper {
      return getVariableValue("rootNodeWrapper", 1) as gw.api.tree.RowTreeRootNodeWrapper
    }
    
    property set rootNodeWrapper ($arg :  gw.api.tree.RowTreeRootNodeWrapper) {
      setVariableValue("rootNodeWrapper", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard_DifferencesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_onEnter_31 (def :  pcf.PolicyLineSummaryPanelSet_BOPLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_onEnter_33 (def :  pcf.PolicyLineSummaryPanelSet_BusinessAutoLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_onEnter_35 (def :  pcf.PolicyLineSummaryPanelSet_CPLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_onEnter_37 (def :  pcf.PolicyLineSummaryPanelSet_GLLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_onEnter_39 (def :  pcf.PolicyLineSummaryPanelSet_HOPLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_onEnter_41 (def :  pcf.PolicyLineSummaryPanelSet_IMLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_onEnter_43 (def :  pcf.PolicyLineSummaryPanelSet_PersonalAutoLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_onEnter_45 (def :  pcf.PolicyLineSummaryPanelSet_WorkersCompLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_onEnter_47 (def :  pcf.PolicyLineSummaryPanelSet_default) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_refreshVariables_32 (def :  pcf.PolicyLineSummaryPanelSet_BOPLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_refreshVariables_34 (def :  pcf.PolicyLineSummaryPanelSet_BusinessAutoLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_refreshVariables_36 (def :  pcf.PolicyLineSummaryPanelSet_CPLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_refreshVariables_38 (def :  pcf.PolicyLineSummaryPanelSet_GLLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_refreshVariables_40 (def :  pcf.PolicyLineSummaryPanelSet_HOPLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_refreshVariables_42 (def :  pcf.PolicyLineSummaryPanelSet_IMLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_refreshVariables_44 (def :  pcf.PolicyLineSummaryPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_refreshVariables_46 (def :  pcf.PolicyLineSummaryPanelSet_WorkersCompLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function def_refreshVariables_48 (def :  pcf.PolicyLineSummaryPanelSet_default) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'mode' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 57, column 48
    function mode_49 () : java.lang.Object {
      return line.Pattern.CodeIdentifier
    }
    
    // 'title' attribute on TitleBar at RewriteWizard_DifferencesScreen.pcf: line 60, column 58
    function title_30 () : java.lang.String {
      return line.DisplayName
    }
    
    // 'visible' attribute on TitleBar at RewriteWizard_DifferencesScreen.pcf: line 60, column 58
    function visible_29 () : java.lang.Boolean {
      return policyPeriod.Lines.Count > 1
    }
    
    property get line () : entity.PolicyLine {
      return getIteratedValue(2) as entity.PolicyLine
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard_DifferencesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RewriteWizard_DifferencesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 25, column 76
    function def_onEnter_20 (def :  pcf.WarningsPanelSet) : void {
      def.onEnter(policyPeriod.getWizardQuoteScreenWarnings())
    }
    
    // 'def' attribute on PanelRef at RewriteWizard_DifferencesScreen.pcf: line 25, column 76
    function def_refreshVariables_21 (def :  pcf.WarningsPanelSet) : void {
      def.refreshVariables(policyPeriod.getWizardQuoteScreenWarnings())
    }
    
    // 'editable' attribute on Screen (id=RewriteWizard_DifferencesScreen) at RewriteWizard_DifferencesScreen.pcf: line 7, column 42
    function editable_51 () : java.lang.Boolean {
      return policyPeriod.OpenForEdit
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function mode_0 () : java.lang.Object {
      return policyPeriod.Job.Subtype
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_onEnter_1 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_onEnter_11 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_onEnter_13 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_onEnter_15 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_onEnter_17 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_onEnter_3 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_onEnter_5 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_onEnter_7 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_onEnter_9 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.onEnter(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.JobWizardToolbarButtonSet_Reinstatement) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_refreshVariables_12 (def :  pcf.JobWizardToolbarButtonSet_Renewal) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_refreshVariables_14 (def :  pcf.JobWizardToolbarButtonSet_Rewrite) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_refreshVariables_16 (def :  pcf.JobWizardToolbarButtonSet_RewriteNewAccount) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_refreshVariables_18 (def :  pcf.JobWizardToolbarButtonSet_Submission) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.JobWizardToolbarButtonSet_Audit) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.JobWizardToolbarButtonSet_Cancellation) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_refreshVariables_6 (def :  pcf.JobWizardToolbarButtonSet_Issuance) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RewriteWizard_DifferencesScreen.pcf: line 18, column 104
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.JobWizardToolbarButtonSet_PolicyChange) : void {
      def.refreshVariables(policyPeriod, policyPeriod.Job, jobWizardHelper)
    }
    
    // 'visible' attribute on AlertBar (id=QuoteRequestedAlert) at RewriteWizard_DifferencesScreen.pcf: line 23, column 80
    function visible_19 () : java.lang.Boolean {
      return gw.web.job.JobUIHelper.isQuoteRequestInProgress(policyPeriod)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    function getRootNodeWrapper() : gw.api.tree.RowTreeRootNodeWrapper {
      if (policyPeriod.BasedOn.PolicyTerm.CheckArchived) {
        return null
      }
      return new gw.api.tree.RowTreeRootNodeWrapper(gw.diff.tree.DiffTree.recalculateRootNodeForPolicyReview(policyPeriod))
    }
    
    
  }
  
  
}