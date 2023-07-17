package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/ManageBranchesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ManageBranchesScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/ManageBranchesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ManageBranchesScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=RevIsActive_Cell) at ManageBranchesScreen.pcf: line 106, column 133
    function value_13 () : java.lang.String {
      return period == job.SelectedVersion ? DisplayKey.get("Web.JobWizard.ManageBranches.Selected") : ''
    }
    
    property get period () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/ManageBranchesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ManageBranchesScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=CreateTime_Cell) at ManageBranchesScreen.pcf: line 123, column 48
    function valueRoot_17 () : java.lang.Object {
      return period
    }
    
    // 'value' attribute on DateCell (id=CreateTime_Cell) at ManageBranchesScreen.pcf: line 123, column 48
    function value_16 () : java.util.Date {
      return period.CreateTime
    }
    
    property get period () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/ManageBranchesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ManageBranchesScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ManageBranchesScreen.pcf: line 141, column 61
    function valueRoot_21 () : java.lang.Object {
      return period
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ManageBranchesScreen.pcf: line 141, column 61
    function value_20 () : typekey.PolicyPeriodStatus {
      return period.Status
    }
    
    property get period () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/ManageBranchesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ManageBranchesScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=SumAmount_Cell) at ManageBranchesScreen.pcf: line 162, column 70
    function value_25 () : gw.pl.currency.MonetaryAmount {
      return period.ValidRate ? period.TotalCostRPT : 0bd.ofCurrency(period.PreferredSettlementCurrency)
    }
    
    // 'valueVisible' attribute on MonetaryAmountCell (id=SumAmount_Cell) at ManageBranchesScreen.pcf: line 162, column 70
    function visible_24 () : java.lang.Boolean {
      return period.JobProcess.canViewQuote()
    }
    
    property get period () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/ManageBranchesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ManageBranchesScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=BranchName_Cell) at ManageBranchesScreen.pcf: line 91, column 48
    function valueRoot_10 () : java.lang.Object {
      return period
    }
    
    // 'value' attribute on TextCell (id=BranchName_Cell) at ManageBranchesScreen.pcf: line 91, column 48
    function value_9 () : java.lang.String {
      return period.BranchName
    }
    
    property get period () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/ManageBranchesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ManageBranchesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Wizard_ManageBranchesDV_SelectBranchButton) at ManageBranchesScreen.pcf: line 50, column 96
    function allCheckedRowsAction_5 (CheckedValues :  entity.PolicyPeriod[], CheckedValuesErrors :  java.util.Map) : void {
      gw.pcf.job.common.ManageBranchesScreenHelper.makeSelected(jobWizardHelper, job, CheckedValues[0])
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Wizard_ManageBranchesDV_RenameButton) at ManageBranchesScreen.pcf: line 57, column 109
    function allCheckedRowsAction_6 (CheckedValues :  entity.PolicyPeriod[], CheckedValuesErrors :  java.util.Map) : void {
      jobWizardHelper.renamePeriod(CheckedValues[0]); (CurrentLocation as pcf.api.Wizard).saveDraft()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Wizard_ManageBranchesDV_WithdrawButton) at ManageBranchesScreen.pcf: line 64, column 92
    function allCheckedRowsAction_7 (CheckedValues :  entity.PolicyPeriod[], CheckedValuesErrors :  java.util.Map) : void {
      gw.pcf.job.common.ManageBranchesScreenHelper.withdrawPeriods(jobWizardHelper, CurrentLocation as pcf.api.Wizard, job, periods, CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Wizard_ManageBranchesDV_DiffButton) at ManageBranchesScreen.pcf: line 70, column 88
    function allCheckedRowsAction_8 (CheckedValues :  entity.PolicyPeriod[], CheckedValuesErrors :  java.util.Map) : void {
      diffPeriods[0] = CheckedValues[0]; diffPeriods[1] = CheckedValues[1]; rootNode = gw.diff.tree.DiffTree.recalculateRootNode(diffPeriods[0], diffPeriods[1], DiffReason.TC_MULTIVERSIONJOB)
    }
    
    // 'available' attribute on PanelRef at ManageBranchesScreen.pcf: line 173, column 68
    function available_29 () : java.lang.Boolean {
      return diffPeriods[0] != null and diffPeriods[1] != null
    }
    
    // 'def' attribute on PanelRef at ManageBranchesScreen.pcf: line 173, column 68
    function def_onEnter_31 (def :  pcf.DifferencesPanelSet) : void {
      def.onEnter(TC_MULTIVERSIONJOB, diffPeriods[0], diffPeriods[1], rootNode, diffTreeConfig)
    }
    
    // 'def' attribute on PanelRef at ManageBranchesScreen.pcf: line 173, column 68
    function def_refreshVariables_32 (def :  pcf.DifferencesPanelSet) : void {
      def.refreshVariables(TC_MULTIVERSIONJOB, diffPeriods[0], diffPeriods[1], rootNode, diffTreeConfig)
    }
    
    // 'initialValue' attribute on Variable at ManageBranchesScreen.pcf: line 16, column 19
    function initialValue_0 () : Job {
      return policyPeriod.Job
    }
    
    // 'initialValue' attribute on Variable at ManageBranchesScreen.pcf: line 21, column 30
    function initialValue_1 () : PolicyPeriod[] {
      return job.ActivePeriods.sortBy( \ p -> p.BranchNumber )
    }
    
    // 'initialValue' attribute on Variable at ManageBranchesScreen.pcf: line 25, column 30
    function initialValue_2 () : PolicyPeriod[] {
      return new PolicyPeriod[]{null, null}
    }
    
    // 'initialValue' attribute on Variable at ManageBranchesScreen.pcf: line 29, column 43
    function initialValue_3 () : gw.api.tree.RowTreeRootNode {
      return null
    }
    
    // 'initialValue' attribute on Variable at ManageBranchesScreen.pcf: line 34, column 22
    function initialValue_4 () : String {
      return policyPeriod.Policy.Product.DiffTreeConfig
    }
    
    // 'label' attribute on ListViewInput at ManageBranchesScreen.pcf: line 43, column 31
    function label_28 () : java.lang.String {
      return  policyPeriod.Job.SideBySide ? DisplayKey.get("Web.JobWizard.ManageBranches.SideBySideVersionLabel") : DisplayKey.get("Web.JobWizard.ManageBranches.MultiVersionLabel")
    }
    
    // 'value' attribute on CellIterator (id=br) at ManageBranchesScreen.pcf: line 83, column 53
    function value_12 () : entity.PolicyPeriod[] {
      return periods
    }
    
    property get diffPeriods () : PolicyPeriod[] {
      return getVariableValue("diffPeriods", 0) as PolicyPeriod[]
    }
    
    property set diffPeriods ($arg :  PolicyPeriod[]) {
      setVariableValue("diffPeriods", 0, $arg)
    }
    
    property get diffTreeConfig () : String {
      return getVariableValue("diffTreeConfig", 0) as String
    }
    
    property set diffTreeConfig ($arg :  String) {
      setVariableValue("diffTreeConfig", 0, $arg)
    }
    
    property get job () : Job {
      return getVariableValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setVariableValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get periods () : PolicyPeriod[] {
      return getVariableValue("periods", 0) as PolicyPeriod[]
    }
    
    property set periods ($arg :  PolicyPeriod[]) {
      setVariableValue("periods", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get rootNode () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("rootNode", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set rootNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("rootNode", 0, $arg)
    }
    
    
  }
  
  
}