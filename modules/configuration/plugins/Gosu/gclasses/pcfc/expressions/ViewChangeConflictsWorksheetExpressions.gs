package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/ViewChangeConflictsWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ViewChangeConflictsWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/job/ViewChangeConflictsWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PreemptionConflictScreenExpressionsImpl extends ViewChangeConflictsWorksheetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=CloseButton) at ViewChangeConflictsWorksheet.pcf: line 42, column 61
    function action_3 () : void {
      CurrentLocation.cancel()
    }
    
    // 'def' attribute on PanelRef at ViewChangeConflictsWorksheet.pcf: line 45, column 120
    function def_onEnter_4 (def :  pcf.DifferencesPanelSet) : void {
      def.onEnter(TC_POLICYREVIEW, handler.Branch.BasedOn, handler.Branch, rootNode, diffTreeConfig) 
    }
    
    // 'def' attribute on PanelRef at ViewChangeConflictsWorksheet.pcf: line 45, column 120
    function def_refreshVariables_5 (def :  pcf.DifferencesPanelSet) : void {
      def.refreshVariables(TC_POLICYREVIEW, handler.Branch.BasedOn, handler.Branch, rootNode, diffTreeConfig) 
    }
    
    // 'initialValue' attribute on Variable at ViewChangeConflictsWorksheet.pcf: line 33, column 45
    function initialValue_1 () : gw.api.tree.RowTreeRootNode {
      return node ?: gw.diff.tree.DiffTree.recalculateRootNodeForPreemptionConflicts(handler.Branch, handler.Conflicts)
    }
    
    // 'initialValue' attribute on Variable at ViewChangeConflictsWorksheet.pcf: line 37, column 34
    function initialValue_2 () : java.lang.String {
      return handler.Branch.Policy.Product.DiffTreeConfig
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
  
  @javax.annotation.Generated("config/web/pcf/job/ViewChangeConflictsWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ViewChangeConflictsWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (handler :  gw.job.ApplyChangesResult, myTabLabel :  String, myTitleLabel :  String) : int {
      return 0
    }
    
    static function __constructorIndex (handler :  gw.job.ApplyChangesResult, myTabLabel :  String, myTitleLabel :  String, node :  gw.api.tree.RowTreeRootNode) : int {
      return 1
    }
    
    // 'location' attribute on Scope at ViewChangeConflictsWorksheet.pcf: line 15, column 50
    function location_0 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(handler.Branch.Job)
    }
    
    // 'tabLabel' attribute on Worksheet (id=ViewChangeConflictsWorksheet) at ViewChangeConflictsWorksheet.pcf: line 9, column 26
    function tabLabel_7 () : java.lang.String {
      return myTabLabel
    }
    
    // 'title' attribute on Worksheet (id=ViewChangeConflictsWorksheet) at ViewChangeConflictsWorksheet.pcf: line 9, column 26
    static function title_6 (handler :  gw.job.ApplyChangesResult, myTabLabel :  String, myTitleLabel :  String, node :  gw.api.tree.RowTreeRootNode) : java.lang.Object {
      return myTitleLabel
    }
    
    override property get CurrentLocation () : pcf.ViewChangeConflictsWorksheet {
      return super.CurrentLocation as pcf.ViewChangeConflictsWorksheet
    }
    
    property get handler () : gw.job.ApplyChangesResult {
      return getVariableValue("handler", 0) as gw.job.ApplyChangesResult
    }
    
    property set handler ($arg :  gw.job.ApplyChangesResult) {
      setVariableValue("handler", 0, $arg)
    }
    
    property get myTabLabel () : String {
      return getVariableValue("myTabLabel", 0) as String
    }
    
    property set myTabLabel ($arg :  String) {
      setVariableValue("myTabLabel", 0, $arg)
    }
    
    property get myTitleLabel () : String {
      return getVariableValue("myTitleLabel", 0) as String
    }
    
    property set myTitleLabel ($arg :  String) {
      setVariableValue("myTitleLabel", 0, $arg)
    }
    
    property get node () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("node", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set node ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("node", 0, $arg)
    }
    
    
  }
  
  
}