package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/OOSConflictPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OOSConflictPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/OOSConflictPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OOSConflictPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=ShouldOverride_Cell) at OOSConflictPanelSet.pcf: line 99, column 32
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      conflict.DiffItem.ShouldOverride = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'fontColor' attribute on TextCell (id=ConflictValue_Cell) at OOSConflictPanelSet.pcf: line 82, column 53
    function fontColor_16 () : java.lang.Object {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at OOSConflictPanelSet.pcf: line 53, column 56
    function initialValue_6 () : gw.api.diff.node.IDiffItemTreeNode {
      return conflictInfo.Node
    }
    
    // RowIterator (id=Conflicts) at OOSConflictPanelSet.pcf: line 49, column 100
    function initializeVariables_29 () : void {
        conflict = conflictInfo.Node;

    }
    
    // 'label' attribute on TextCell (id=NewValue_Cell) at OOSConflictPanelSet.pcf: line 75, column 33
    function label_11 () : java.lang.Object {
      return DisplayKey.get("Web.Job.Conflict.NewValue", policyPeriod.Job.DisplayType, policyPeriod.EditEffectiveDate.format("short"))
    }
    
    // 'tooltip' attribute on Link (id=ContextLink) at OOSConflictPanelSet.pcf: line 61, column 68
    function tooltip_7 () : java.lang.String {
      return oosConflictDisplay.getToolTip(conflict)
    }
    
    // 'value' attribute on TextCell (id=ConflictValue_Cell) at OOSConflictPanelSet.pcf: line 82, column 53
    function valueRoot_18 () : java.lang.Object {
      return conflictInfo
    }
    
    // 'value' attribute on BooleanRadioCell (id=ShouldOverride_Cell) at OOSConflictPanelSet.pcf: line 99, column 32
    function valueRoot_27 () : java.lang.Object {
      return conflict.DiffItem
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at OOSConflictPanelSet.pcf: line 68, column 47
    function valueRoot_9 () : java.lang.Object {
      return conflict
    }
    
    // 'value' attribute on TextCell (id=NewValue_Cell) at OOSConflictPanelSet.pcf: line 75, column 33
    function value_12 () : java.lang.String {
      return conflict.Value2
    }
    
    // 'value' attribute on TextCell (id=ConflictValue_Cell) at OOSConflictPanelSet.pcf: line 82, column 53
    function value_17 () : java.lang.String {
      return conflictInfo.ConflictDisplay
    }
    
    // 'value' attribute on TextCell (id=ConflictDate_Cell) at OOSConflictPanelSet.pcf: line 89, column 29
    function value_22 () : java.lang.String {
      return conflictInfo.ConflictEffDate
    }
    
    // 'value' attribute on BooleanRadioCell (id=ShouldOverride_Cell) at OOSConflictPanelSet.pcf: line 99, column 32
    function value_25 () : java.lang.Boolean {
      return conflict.DiffItem.ShouldOverride
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at OOSConflictPanelSet.pcf: line 68, column 47
    function value_8 () : java.lang.String {
      return conflict.ConflictLabel
    }
    
    // 'fontColor' attribute on TextCell (id=ConflictValue_Cell) at OOSConflictPanelSet.pcf: line 82, column 53
    function verifyFontColorIsAllowedType_19 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=ConflictValue_Cell) at OOSConflictPanelSet.pcf: line 82, column 53
    function verifyFontColorIsAllowedType_19 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=ConflictValue_Cell) at OOSConflictPanelSet.pcf: line 82, column 53
    function verifyFontColor_20 () : void {
      var __fontColorArg = gw.api.web.color.GWColor.THEME_ALERT_ERROR
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_19(__fontColorArg)
    }
    
    property get conflict () : gw.api.diff.node.IDiffItemTreeNode {
      return getVariableValue("conflict", 1) as gw.api.diff.node.IDiffItemTreeNode
    }
    
    property set conflict ($arg :  gw.api.diff.node.IDiffItemTreeNode) {
      setVariableValue("conflict", 1, $arg)
    }
    
    property get conflictInfo () : gw.plugin.diff.display.OOSConflictDisplay.ConflictInfo {
      return getIteratedValue(1) as gw.plugin.diff.display.OOSConflictDisplay.ConflictInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/OOSConflictPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OOSConflictPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=OverrideAll) at OOSConflictPanelSet.pcf: line 33, column 77
    function action_3 () : void {
      conflicts.each(\ conflict -> { conflict.Node.DiffItem.ShouldOverride = true } )
    }
    
    // 'action' attribute on Link (id=Done) at OOSConflictPanelSet.pcf: line 116, column 39
    function action_32 () : void {
      handleConflict()
    }
    
    // 'action' attribute on ToolbarButton (id=OverrideNone) at OOSConflictPanelSet.pcf: line 38, column 78
    function action_4 () : void {
      conflicts.each( \ conflict -> { conflict.Node.DiffItem.ShouldOverride = false })
    }
    
    // 'available' attribute on Link (id=Done) at OOSConflictPanelSet.pcf: line 116, column 39
    function available_31 () : java.lang.Boolean {
      return not conflicts.hasMatch(\ conflict -> conflict.Node.DiffItem.ShouldOverride == null)
    }
    
    // 'initialValue' attribute on Variable at OOSConflictPanelSet.pcf: line 19, column 57
    function initialValue_0 () : gw.plugin.diff.display.OOSConflictDisplay {
      return new gw.plugin.diff.display.OOSConflictDisplay(policyPeriod, policyPeriod.OOSConflicts)
    }
    
    // 'initialValue' attribute on Variable at OOSConflictPanelSet.pcf: line 23, column 92
    function initialValue_1 () : java.util.List<gw.plugin.diff.display.OOSConflictDisplay.ConflictInfo> {
      return oosConflictDisplay.listConflicts()
    }
    
    // 'label' attribute on Verbatim (id=Message) at OOSConflictPanelSet.pcf: line 26, column 149
    function label_2 () : java.lang.String {
      return conflicts.Count == 0 ? DisplayKey.get("Web.Job.Conflict.None") : DisplayKey.get("Web.Job.Conflict.Instructions")
    }
    
    // 'label' attribute on TextCell (id=NewValue_Cell) at OOSConflictPanelSet.pcf: line 75, column 33
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Web.Job.Conflict.NewValue", policyPeriod.Job.DisplayType, policyPeriod.EditEffectiveDate.format("short"))
    }
    
    // 'value' attribute on RowIterator (id=Conflicts) at OOSConflictPanelSet.pcf: line 49, column 100
    function value_30 () : java.util.List<gw.plugin.diff.display.OOSConflictDisplay.ConflictInfo> {
      return conflicts
    }
    
    property get conflicts () : java.util.List<gw.plugin.diff.display.OOSConflictDisplay.ConflictInfo> {
      return getVariableValue("conflicts", 0) as java.util.List<gw.plugin.diff.display.OOSConflictDisplay.ConflictInfo>
    }
    
    property set conflicts ($arg :  java.util.List<gw.plugin.diff.display.OOSConflictDisplay.ConflictInfo>) {
      setVariableValue("conflicts", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get oosConflictDisplay () : gw.plugin.diff.display.OOSConflictDisplay {
      return getVariableValue("oosConflictDisplay", 0) as gw.plugin.diff.display.OOSConflictDisplay
    }
    
    property set oosConflictDisplay ($arg :  gw.plugin.diff.display.OOSConflictDisplay) {
      setVariableValue("oosConflictDisplay", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get rootNodeWrapper () : gw.api.tree.RowTreeRootNodeWrapper {
      return getRequireValue("rootNodeWrapper", 0) as gw.api.tree.RowTreeRootNodeWrapper
    }
    
    property set rootNodeWrapper ($arg :  gw.api.tree.RowTreeRootNodeWrapper) {
      setRequireValue("rootNodeWrapper", 0, $arg)
    }
    
    function handleConflict() {
      policyPeriod.mergeOOSChanges(conflicts.map( \ d -> d.Node.DiffItem).toTypedArray()); 
      (CurrentLocation as pcf.api.Wizard).saveDraft()
      conflicts = oosConflictDisplay.listConflicts()
      rootNodeWrapper.rowTreeRootNode = gw.diff.tree.DiffTree.recalculateRootNodeForPolicyReview(policyPeriod)
      
      // Check if there are conflicts on other periods for SideBySide jobs and forward to appropriate page if that's the case
      if (policyPeriod.Job.SideBySide and policyPeriod.Job.OOSJob) {
        var otherActivePeriods = policyPeriod.Job.ActivePeriods.where(\p -> p!= policyPeriod)
        var conflictedPeriod = otherActivePeriods.firstWhere(\pp -> pp.OOSConflicts.Count > 0)
        if (null!=conflictedPeriod) {
          gw.lob.common.SideBySideUtil.returnToSelectedPeriod(conflictedPeriod,jobWizardHelper)
        }
      }
    }
    
    
  }
  
  
}