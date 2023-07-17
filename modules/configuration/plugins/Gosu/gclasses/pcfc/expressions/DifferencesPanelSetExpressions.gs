package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/DifferencesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DifferencesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/DifferencesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DifferencesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=goToRestorePage) at DifferencesPanelSet.pcf: line 39, column 93
    function action_2 () : void {
      PolicyFileForward.go(basedOnPeriod.PolicyNumber, basedOnPeriod.PeriodStart)
    }
    
    // 'action' attribute on Link (id=goToRestorePage) at DifferencesPanelSet.pcf: line 39, column 93
    function action_dest_3 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(basedOnPeriod.PolicyNumber, basedOnPeriod.PeriodStart)
    }
    
    // 'def' attribute on PanelRef at DifferencesPanelSet.pcf: line 45, column 62
    function def_onEnter_6 (def :  pcf.DiffTreePanelSet) : void {
      def.onEnter(getPeriodName(reason, basedOnPeriod, true), getPeriodName(reason, currentPeriod, false), rootNode)
    }
    
    // 'def' attribute on PanelRef at DifferencesPanelSet.pcf: line 45, column 62
    function def_refreshVariables_7 (def :  pcf.DiffTreePanelSet) : void {
      def.refreshVariables(getPeriodName(reason, basedOnPeriod, true), getPeriodName(reason, currentPeriod, false), rootNode)
    }
    
    // 'label' attribute on Label (id=noBasedOnPeriodMsg) at DifferencesPanelSet.pcf: line 32, column 192
    function label_1 () : java.lang.String {
      return DisplayKey.get("Web.DifferencesPanelSet.CannotCalculate", basedOnPeriod.PeriodStart.format("short"), basedOnPeriod.PeriodEnd.format("short"))
    }
    
    // 'visible' attribute on Verbatim (id=noDifferenceLabel) at DifferencesPanelSet.pcf: line 25, column 65
    function visible_0 () : java.lang.Boolean {
      return rootNode != null and rootNode.NumChildren == 0
    }
    
    // 'visible' attribute on DetailViewPanel (id=archivedPeriodMsgDV) at DifferencesPanelSet.pcf: line 28, column 34
    function visible_4 () : java.lang.Boolean {
      return rootNode == null
    }
    
    // 'visible' attribute on PanelRef at DifferencesPanelSet.pcf: line 45, column 62
    function visible_5 () : java.lang.Boolean {
      return rootNode != null and diffTreeConfig != null
    }
    
    property get basedOnPeriod () : PolicyPeriod {
      return getRequireValue("basedOnPeriod", 0) as PolicyPeriod
    }
    
    property set basedOnPeriod ($arg :  PolicyPeriod) {
      setRequireValue("basedOnPeriod", 0, $arg)
    }
    
    property get currentPeriod () : PolicyPeriod {
      return getRequireValue("currentPeriod", 0) as PolicyPeriod
    }
    
    property set currentPeriod ($arg :  PolicyPeriod) {
      setRequireValue("currentPeriod", 0, $arg)
    }
    
    property get diffTreeConfig () : String {
      return getRequireValue("diffTreeConfig", 0) as String
    }
    
    property set diffTreeConfig ($arg :  String) {
      setRequireValue("diffTreeConfig", 0, $arg)
    }
    
    property get reason () : DiffReason {
      return getRequireValue("reason", 0) as DiffReason
    }
    
    property set reason ($arg :  DiffReason) {
      setRequireValue("reason", 0, $arg)
    }
    
    property get rootNode () : gw.api.tree.RowTreeRootNode {
      return getRequireValue("rootNode", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set rootNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setRequireValue("rootNode", 0, $arg)
    }
    
    function getPeriodName(diffReason : DiffReason, period : PolicyPeriod, isBasedOn : boolean) : String {
      if ((reason ==TC_POLICYREVIEW and !isBasedOn) or reason == TC_COMPAREJOBS ) {
        return DisplayKey.get("Web.Differences.LOB.Common.DiffTreeCurrentValueHeader", period.Job.DisplayType, period.Job.JobNumber)
      } else if (reason == TC_POLICYREVIEW and isBasedOn) {
        return DisplayKey.get("Web.Differences.LOB.Common.DiffTreeBasedOnValueHeader")
      }
      return period.BranchName
    }
    
    
  }
  
  
}