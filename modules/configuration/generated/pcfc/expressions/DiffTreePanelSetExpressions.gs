package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/DiffTreePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DiffTreePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/DiffTreePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DiffTreePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // RowTree (id=DiffTree) at DiffTreePanelSet.pcf: line 35, column 32
    function containerLabel_18 (node :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'initialValue' attribute on Variable at DiffTreePanelSet.pcf: line 20, column 23
    function initialValue_0 () : boolean {
      return rootNode != null and rootNode.NumChildren > 0
    }
    
    // 'label' attribute on TextCell (id=value1_Cell) at DiffTreePanelSet.pcf: line 50, column 40
    function label_1 () : java.lang.Object {
      return branchName1
    }
    
    // 'label' attribute on TextCell (id=value2_Cell) at DiffTreePanelSet.pcf: line 57, column 40
    function label_2 () : java.lang.Object {
      return DisplayKey.get("Web.Differences.LOB.Common.DiffTreePreemptionLabel", branchName2)
    }
    
    // 'title' attribute on Card (id=ComparisonDiffTree) at DiffTreePanelSet.pcf: line 25, column 36
    function title_20 () : java.lang.String {
      return DisplayKey.get("Web.ComparisonPanelSet.SliceChanges", branchName1, branchName2)
    }
    
    // 'value' attribute on RowTree (id=DiffTree) at DiffTreePanelSet.pcf: line 35, column 32
    function value_17 () : java.lang.Object {
      return rootNode
    }
    
    // 'visible' attribute on Card (id=ComparisonDiffTree) at DiffTreePanelSet.pcf: line 25, column 36
    function visible_19 () : java.lang.Boolean {
      return differencesExist
    }
    
    property get branchName1 () : String {
      return getRequireValue("branchName1", 0) as String
    }
    
    property set branchName1 ($arg :  String) {
      setRequireValue("branchName1", 0, $arg)
    }
    
    property get branchName2 () : String {
      return getRequireValue("branchName2", 0) as String
    }
    
    property set branchName2 ($arg :  String) {
      setRequireValue("branchName2", 0, $arg)
    }
    
    property get differencesExist () : boolean {
      return getVariableValue("differencesExist", 0) as java.lang.Boolean
    }
    
    property set differencesExist ($arg :  boolean) {
      setVariableValue("differencesExist", 0, $arg)
    }
    
    property get rootNode () : gw.api.tree.RowTreeRootNode {
      return getRequireValue("rootNode", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set rootNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setRequireValue("rootNode", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/DiffTreePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends DiffTreePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=value2_Cell) at DiffTreePanelSet.pcf: line 57, column 40
    function label_11 () : java.lang.Object {
      return DisplayKey.get("Web.Differences.LOB.Common.DiffTreePreemptionLabel", branchName2)
    }
    
    // 'label' attribute on TextCell (id=value1_Cell) at DiffTreePanelSet.pcf: line 50, column 40
    function label_6 () : java.lang.Object {
      return branchName1
    }
    
    // 'useTitleStyle' attribute on Row (id=DiffTreeNode) at DiffTreePanelSet.pcf: line 38, column 46
    function useTitleStyle_16 () : java.lang.Boolean {
      return node.IsTitle
    }
    
    // 'value' attribute on TextCell (id=item_Cell) at DiffTreePanelSet.pcf: line 43, column 39
    function valueRoot_4 () : java.lang.Object {
      return node
    }
    
    // 'value' attribute on TextCell (id=value2_Cell) at DiffTreePanelSet.pcf: line 57, column 40
    function value_12 () : java.lang.String {
      return node.Value2
    }
    
    // 'value' attribute on TextCell (id=item_Cell) at DiffTreePanelSet.pcf: line 43, column 39
    function value_3 () : java.lang.String {
      return node.Label
    }
    
    // 'value' attribute on TextCell (id=value1_Cell) at DiffTreePanelSet.pcf: line 50, column 40
    function value_7 () : java.lang.String {
      return node.Value1
    }
    
    property get node () : gw.api.diff.node.IDiffTreeNode {
      return getIteratedValue(1) as gw.api.diff.node.IDiffTreeNode
    }
    
    
  }
  
  
}