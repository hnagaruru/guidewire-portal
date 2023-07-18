package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Jobs.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_JobsExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Jobs.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailPanelExpressionsImpl extends PolicyFile_JobsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Policy_Jobs_DiffButton) at PolicyFile_Jobs.pcf: line 52, column 29
    function allCheckedRowsAction_3 (CheckedValues :  entity.Job[], CheckedValuesErrors :  java.util.Map) : void {
      policySummaryHelper.gotoWorkOrdersDiff(CheckedValues, DisplayKey.get("Web.PolicyFile.DiffPolicyWorkOrders"))
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Jobs.pcf: line 61, column 208
    function def_onEnter_10 (def :  pcf.Policy_JobInfoDV_default) : void {
      def.onEnter(selectedJob, asOfDate)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Jobs.pcf: line 66, column 66
    function def_onEnter_14 (def :  pcf.Policy_JobUsersLV) : void {
      def.onEnter(selectedJob)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Jobs.pcf: line 44, column 44
    function def_onEnter_4 (def :  pcf.JobsLV) : void {
      def.onEnter(jobs, policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Jobs.pcf: line 61, column 208
    function def_onEnter_6 (def :  pcf.Policy_JobInfoDV_Archived) : void {
      def.onEnter(selectedJob, asOfDate)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Jobs.pcf: line 61, column 208
    function def_onEnter_8 (def :  pcf.Policy_JobInfoDV_Audit) : void {
      def.onEnter(selectedJob, asOfDate)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Jobs.pcf: line 61, column 208
    function def_refreshVariables_11 (def :  pcf.Policy_JobInfoDV_default) : void {
      def.refreshVariables(selectedJob, asOfDate)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Jobs.pcf: line 66, column 66
    function def_refreshVariables_15 (def :  pcf.Policy_JobUsersLV) : void {
      def.refreshVariables(selectedJob)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Jobs.pcf: line 44, column 44
    function def_refreshVariables_5 (def :  pcf.JobsLV) : void {
      def.refreshVariables(jobs, policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Jobs.pcf: line 61, column 208
    function def_refreshVariables_7 (def :  pcf.Policy_JobInfoDV_Archived) : void {
      def.refreshVariables(selectedJob, asOfDate)
    }
    
    // 'def' attribute on PanelRef at PolicyFile_Jobs.pcf: line 61, column 208
    function def_refreshVariables_9 (def :  pcf.Policy_JobInfoDV_Audit) : void {
      def.refreshVariables(selectedJob, asOfDate)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Jobs.pcf: line 42, column 60
    function initialValue_2 () : gw.pcf.policysummary.PolicySummaryHelper {
      return new gw.pcf.policysummary.PolicySummaryHelper(policyPeriod, asOfDate)
    }
    
    // 'mode' attribute on PanelRef at PolicyFile_Jobs.pcf: line 61, column 208
    function mode_12 () : java.lang.Object {
      if (selectedJob.SelectedVersion.PolicyTerm.CheckArchived) {return "Archived"} else if (typeof selectedJob == Audit) {return "Audit"}else {return "default"}
    }
    
    // 'selectionOnEnter' attribute on ListDetailPanel (id=DetailPanel) at PolicyFile_Jobs.pcf: line 38, column 29
    function selectionOnEnter_17 () : java.lang.Object {
      return initialSelectedJob
    }
    
    // 'title' attribute on Card (id=DetailsTitleCard) at PolicyFile_Jobs.pcf: line 58, column 95
    function title_16 () : java.lang.String {
      return DisplayKey.get("Web.Job.DetailsTitle", selectedJob.DisplayType)
    }
    
    // 'visible' attribute on PanelRef at PolicyFile_Jobs.pcf: line 66, column 66
    function visible_13 () : java.lang.Boolean {
      return selectedJob.RoleAssignments.Count > 0
    }
    
    property get policySummaryHelper () : gw.pcf.policysummary.PolicySummaryHelper {
      return getVariableValue("policySummaryHelper", 1) as gw.pcf.policysummary.PolicySummaryHelper
    }
    
    property set policySummaryHelper ($arg :  gw.pcf.policysummary.PolicySummaryHelper) {
      setVariableValue("policySummaryHelper", 1, $arg)
    }
    
    property get selectedJob () : Job {
      return getCurrentSelection(1) as Job
    }
    
    property set selectedJob ($arg :  Job) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Jobs.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_JobsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date, initialSelectedJob :  Job) : int {
      return 1
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_Jobs) at PolicyFile_Jobs.pcf: line 9, column 61
    function afterEnter_18 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_Jobs) at PolicyFile_Jobs.pcf: line 9, column 61
    static function canVisit_19 (asOfDate :  java.util.Date, initialSelectedJob :  Job, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfileworkorders
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Jobs.pcf: line 23, column 19
    function initialValue_0 () : Job {
      return policyPeriod.Job
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Jobs.pcf: line 28, column 28
    function initialValue_1 () : entity.Job[] {
      return policyPeriod.Policy.Jobs
    }
    
    // Page (id=PolicyFile_Jobs) at PolicyFile_Jobs.pcf: line 9, column 61
    static function parent_20 (asOfDate :  java.util.Date, initialSelectedJob :  Job, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod,asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Jobs {
      return super.CurrentLocation as pcf.PolicyFile_Jobs
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get initialSelectedJob () : Job {
      return getVariableValue("initialSelectedJob", 0) as Job
    }
    
    property set initialSelectedJob ($arg :  Job) {
      setVariableValue("initialSelectedJob", 0, $arg)
    }
    
    property get jobs () : entity.Job[] {
      return getVariableValue("jobs", 0) as entity.Job[]
    }
    
    property set jobs ($arg :  entity.Job[]) {
      setVariableValue("jobs", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}