package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/ReviewSummaryCV.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReviewSummaryCV_trueExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/ReviewSummaryCV.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends ReviewSummaryCVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_onEnter_10 (def :  pcf.PolicyLineSummaryPanelSet_CPLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_onEnter_12 (def :  pcf.PolicyLineSummaryPanelSet_GLLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_onEnter_14 (def :  pcf.PolicyLineSummaryPanelSet_HOPLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_onEnter_16 (def :  pcf.PolicyLineSummaryPanelSet_IMLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_onEnter_18 (def :  pcf.PolicyLineSummaryPanelSet_PersonalAutoLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_onEnter_20 (def :  pcf.PolicyLineSummaryPanelSet_WorkersCompLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_onEnter_22 (def :  pcf.PolicyLineSummaryPanelSet_default) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_onEnter_6 (def :  pcf.PolicyLineSummaryPanelSet_BOPLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_onEnter_8 (def :  pcf.PolicyLineSummaryPanelSet_BusinessAutoLine) : void {
      def.onEnter(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_refreshVariables_11 (def :  pcf.PolicyLineSummaryPanelSet_CPLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_refreshVariables_13 (def :  pcf.PolicyLineSummaryPanelSet_GLLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_refreshVariables_15 (def :  pcf.PolicyLineSummaryPanelSet_HOPLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_refreshVariables_17 (def :  pcf.PolicyLineSummaryPanelSet_IMLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_refreshVariables_19 (def :  pcf.PolicyLineSummaryPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_refreshVariables_21 (def :  pcf.PolicyLineSummaryPanelSet_WorkersCompLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_refreshVariables_23 (def :  pcf.PolicyLineSummaryPanelSet_default) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_refreshVariables_7 (def :  pcf.PolicyLineSummaryPanelSet_BOPLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function def_refreshVariables_9 (def :  pcf.PolicyLineSummaryPanelSet_BusinessAutoLine) : void {
      def.refreshVariables(line, jobWizardHelper)
    }
    
    // 'mode' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 35, column 46
    function mode_24 () : java.lang.Object {
      return line.Pattern.CodeIdentifier
    }
    
    // 'title' attribute on TitleBar at ReviewSummaryCV.true.pcf: line 38, column 56
    function title_5 () : java.lang.String {
      return line.DisplayName
    }
    
    // 'visible' attribute on TitleBar at ReviewSummaryCV.true.pcf: line 38, column 56
    function visible_4 () : java.lang.Boolean {
      return policyPeriod.Lines.Count > 1
    }
    
    property get line () : entity.PolicyLine {
      return getIteratedValue(1) as entity.PolicyLine
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/submission/ReviewSummaryCV.true.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReviewSummaryCVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 24, column 84
    function def_onEnter_1 (def :  pcf.OOSConflictPanelSet) : void {
      def.onEnter(policyPeriod, rootNodeWrapper, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at ReviewSummaryCV.true.pcf: line 24, column 84
    function def_refreshVariables_2 (def :  pcf.OOSConflictPanelSet) : void {
      def.refreshVariables(policyPeriod, rootNodeWrapper, jobWizardHelper)
    }
    
    // 'initialValue' attribute on Variable at ReviewSummaryCV.true.pcf: line 19, column 50
    function initialValue_0 () : gw.api.tree.RowTreeRootNodeWrapper {
      return new gw.api.tree.RowTreeRootNodeWrapper(gw.diff.tree.DiffTree.recalculateRootNodeForPolicyReview(policyPeriod))
    }
    
    // 'title' attribute on Card (id=OOSConflicts) at ReviewSummaryCV.true.pcf: line 22, column 50
    function title_3 () : java.lang.String {
      return getOOSConflictsTitle(policyPeriod)
    }
    
    // 'value' attribute on PanelIterator at ReviewSummaryCV.true.pcf: line 32, column 41
    function value_25 () : entity.PolicyLine[] {
      return policyPeriod.Lines
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
    
    property get rootNodeWrapper () : gw.api.tree.RowTreeRootNodeWrapper {
      return getVariableValue("rootNodeWrapper", 0) as gw.api.tree.RowTreeRootNodeWrapper
    }
    
    property set rootNodeWrapper ($arg :  gw.api.tree.RowTreeRootNodeWrapper) {
      setVariableValue("rootNodeWrapper", 0, $arg)
    }
    
    function getOOSConflictsTitle(period : PolicyPeriod) : String {
      switch (period.Job.Subtype) {
        case TC_REWRITENEWACCOUNT:
          return DisplayKey.get("Web.PolicyChangeWizard.OOSE.Conflicts")
        default:
          return DisplayKey.get("Web.SubmissionWizard.OOSE.Conflicts")
      }
    }
    
    
  }
  
  
}