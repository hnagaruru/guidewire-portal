package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/HandlePreemptionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HandlePreemptionPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/job/HandlePreemptionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardIteratorEntryExpressionsImpl extends HandlePreemption_DifferencesScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at HandlePreemptionPopup.pcf: line 74, column 129
    function def_onEnter_10 (def :  pcf.DifferencesPanelSet) : void {
      def.onEnter(TC_POLICYREVIEW, preemptingBranch.BasedOn, preemptingBranch, rootNode, diffTreeConfig)
    }
    
    // 'def' attribute on PanelRef at HandlePreemptionPopup.pcf: line 74, column 129
    function def_refreshVariables_11 (def :  pcf.DifferencesPanelSet) : void {
      def.refreshVariables(TC_POLICYREVIEW, preemptingBranch.BasedOn, preemptingBranch, rootNode, diffTreeConfig)
    }
    
    // 'initialValue' attribute on Variable at HandlePreemptionPopup.pcf: line 69, column 49
    function initialValue_9 () : gw.api.tree.RowTreeRootNode {
      return rootNodeMap[preemptingBranch]
    }
    
    // CardIterator (id=HandlePreemptionCardIter) at HandlePreemptionPopup.pcf: line 65, column 45
    function initializeVariables_13 () : void {
        rootNode = rootNodeMap[preemptingBranch];

    }
    
    // 'title' attribute on Card (id=HandlePreemptionCard) at HandlePreemptionPopup.pcf: line 72, column 103
    function title_12 () : java.lang.String {
      return preemptingBranch.Job.DisplayType + " " + preemptingBranch.Job.JobNumber
    }
    
    property get preemptingBranch () : entity.PolicyPeriod {
      return getIteratedValue(2) as entity.PolicyPeriod
    }
    
    property get rootNode () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("rootNode", 2) as gw.api.tree.RowTreeRootNode
    }
    
    property set rootNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("rootNode", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/HandlePreemptionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HandlePreemptionPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (wizard :  pcf.api.Wizard, jobWizardHelper :  gw.api.web.job.JobWizardHelper, policyPeriod :  PolicyPeriod, allowWithdraw :  boolean) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Popup (id=HandlePreemptionPopup) at HandlePreemptionPopup.pcf: line 9, column 68
    function afterEnter_15 () : void {
      policyPeriod.AllAccountSyncables.each(\ a -> a.prepareForDiff())
    }
    
    // 'initialValue' attribute on Variable at HandlePreemptionPopup.pcf: line 24, column 30
    function initialValue_0 () : PolicyPeriod[] {
      return policyPeriod.PreemptionsOfThisPeriod
    }
    
    override property get CurrentLocation () : pcf.HandlePreemptionPopup {
      return super.CurrentLocation as pcf.HandlePreemptionPopup
    }
    
    property get allowWithdraw () : boolean {
      return getVariableValue("allowWithdraw", 0) as java.lang.Boolean
    }
    
    property set allowWithdraw ($arg :  boolean) {
      setVariableValue("allowWithdraw", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get preemptingBranches () : PolicyPeriod[] {
      return getVariableValue("preemptingBranches", 0) as PolicyPeriod[]
    }
    
    property set preemptingBranches ($arg :  PolicyPeriod[]) {
      setVariableValue("preemptingBranches", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/HandlePreemptionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HandlePreemption_DifferencesScreenExpressionsImpl extends HandlePreemptionPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ApplyChanges) at HandlePreemptionPopup.pcf: line 44, column 27
    function action_3 () : void {
      gw.web.job.HandlePreemptionPopupUIHelper.applyChanges(wizard, jobWizardHelper, policyPeriod, CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=Withdraw) at HandlePreemptionPopup.pcf: line 50, column 90
    function action_5 () : void {
      gw.web.job.HandlePreemptionPopupUIHelper.withdraw(wizard, policyPeriod)
    }
    
    // 'action' attribute on ToolbarButton (id=DecideLater) at HandlePreemptionPopup.pcf: line 55, column 36
    function action_7 () : void {
      CurrentLocation.cancel()
    }
    
    // 'initialValue' attribute on Variable at HandlePreemptionPopup.pcf: line 34, column 91
    function initialValue_1 () : java.util.HashMap<entity.PolicyPeriod, gw.api.tree.RowTreeRootNode> {
      return gw.web.job.HandlePreemptionPopupUIHelper.makeRootNodes(preemptingBranches)
    }
    
    // 'initialValue' attribute on Variable at HandlePreemptionPopup.pcf: line 38, column 34
    function initialValue_2 () : java.lang.String {
      return preemptingBranches[0].Policy.Product.DiffTreeConfig
    }
    
    // 'label' attribute on Verbatim at HandlePreemptionPopup.pcf: line 58, column 306
    function label_8 () : java.lang.String {
      return allowWithdraw ? DisplayKey.get("Web.HandlePreemption.Message", policyPeriod.Job.DisplayType, gw.web.job.HandlePreemptionPopupUIHelper.getPreemptionsLabelList(preemptingBranches)) : DisplayKey.get("Web.HandlePreemption.MessageNoWithdraw", policyPeriod.Job.DisplayType)
    }
    
    // 'value' attribute on CardIterator (id=HandlePreemptionCardIter) at HandlePreemptionPopup.pcf: line 65, column 45
    function value_14 () : entity.PolicyPeriod[] {
      return preemptingBranches
    }
    
    // 'visible' attribute on ToolbarButton (id=Withdraw) at HandlePreemptionPopup.pcf: line 50, column 90
    function visible_4 () : java.lang.Boolean {
      return allowWithdraw && policyPeriod.JobProcess.canWithdraw().Okay
    }
    
    // 'visible' attribute on ToolbarButton (id=DecideLater) at HandlePreemptionPopup.pcf: line 55, column 36
    function visible_6 () : java.lang.Boolean {
      return allowWithdraw
    }
    
    property get diffTreeConfig () : java.lang.String {
      return getVariableValue("diffTreeConfig", 1) as java.lang.String
    }
    
    property set diffTreeConfig ($arg :  java.lang.String) {
      setVariableValue("diffTreeConfig", 1, $arg)
    }
    
    property get rootNodeMap () : java.util.HashMap<entity.PolicyPeriod, gw.api.tree.RowTreeRootNode> {
      return getVariableValue("rootNodeMap", 1) as java.util.HashMap<entity.PolicyPeriod, gw.api.tree.RowTreeRootNode>
    }
    
    property set rootNodeMap ($arg :  java.util.HashMap<entity.PolicyPeriod, gw.api.tree.RowTreeRootNode>) {
      setVariableValue("rootNodeMap", 1, $arg)
    }
    
    
  }
  
  
}