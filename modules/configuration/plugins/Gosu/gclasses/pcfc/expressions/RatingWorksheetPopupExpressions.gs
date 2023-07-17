package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/RatingWorksheetPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingWorksheetPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/RatingWorksheetPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingWorksheetPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyLine :  PolicyLine) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ShowHideConditionalsButton) at RatingWorksheetPopup.pcf: line 31, column 125
    function action_2 () : void {
      showConditionals = !showConditionals; rootNode = gw.rating.worksheet.WorksheetUIHelper.getWorksheetRootNode(policyLine, showConditionals)
    }
    
    // 'action' attribute on MenuItem (id=DownloadCSVMenuItem) at RatingWorksheetPopup.pcf: line 45, column 93
    function action_5 () : void {
      gw.rating.worksheet.WorksheetUIHelper.download(policyLine, showConditionals, gw.rating.worksheet.export.WorksheetExporter.FORMAT_CSV)
    }
    
    // 'action' attribute on MenuItem (id=DownloadHTMLMenuItem) at RatingWorksheetPopup.pcf: line 51, column 94
    function action_6 () : void {
      gw.rating.worksheet.WorksheetUIHelper.download(policyLine, showConditionals, gw.rating.worksheet.export.WorksheetExporter.FORMAT_HTML)
    }
    
    // 'canVisit' attribute on Popup (id=RatingWorksheetPopup) at RatingWorksheetPopup.pcf: line 8, column 79
    static function canVisit_30 (policyLine :  PolicyLine) : java.lang.Boolean {
      return gw.rating.worksheet.WorksheetUIHelper.canViewWorksheets(policyLine)
    }
    
    // 'containerLabel' attribute on RowTree (id=WorksheetTree) at RatingWorksheetPopup.pcf: line 67, column 28
    function containerLabel_29 (node :  gw.rating.worksheet.treenode.WorksheetTreeNodeContainer) : java.lang.String {
      return node.Description
    }
    
    // 'initialValue' attribute on Variable at RatingWorksheetPopup.pcf: line 21, column 43
    function initialValue_0 () : gw.api.tree.RowTreeRootNode {
      return gw.rating.worksheet.WorksheetUIHelper.getWorksheetRootNode(policyLine, showConditionals)
    }
    
    // 'label' attribute on ToolbarButton (id=ShowHideConditionalsButton) at RatingWorksheetPopup.pcf: line 31, column 125
    function label_3 () : java.lang.Object {
      return showConditionals ? DisplayKey.get("Button.Worksheet.HideConditionals") : DisplayKey.get("Button.Worksheet.ShowConditionals")
    }
    
    // 'label' attribute on ToolbarButton (id=DownloadButton) at RatingWorksheetPopup.pcf: line 39, column 87
    function label_7 () : java.lang.Object {
      return DisplayKey.get("Button.Worksheet.Download") 
    }
    
    // 'tooltip' attribute on ToolbarButton (id=ShowHideConditionalsButton) at RatingWorksheetPopup.pcf: line 31, column 125
    function tooltip_4 () : java.lang.String {
      return showConditionals ? DisplayKey.get("Button.Worksheet.ShowConditonals.Tooltip") : ""
    }
    
    // 'value' attribute on RowTree (id=WorksheetTree) at RatingWorksheetPopup.pcf: line 67, column 28
    function value_28 () : java.lang.Object {
      return rootNode
    }
    
    // 'expandVisible' attribute on TreeButtons at RatingWorksheetPopup.pcf: line 26, column 37
    function visible_1 () : java.lang.Boolean {
      return gw.rating.worksheet.WorksheetUIHelper.getTreeSize(rootNode) < 10000
    }
    
    override property get CurrentLocation () : pcf.RatingWorksheetPopup {
      return super.CurrentLocation as pcf.RatingWorksheetPopup
    }
    
    property get policyLine () : PolicyLine {
      return getVariableValue("policyLine", 0) as PolicyLine
    }
    
    property set policyLine ($arg :  PolicyLine) {
      setVariableValue("policyLine", 0, $arg)
    }
    
    property get rootNode () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("rootNode", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set rootNode ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("rootNode", 0, $arg)
    }
    
    property get showConditionals () : boolean {
      return getVariableValue("showConditionals", 0) as java.lang.Boolean
    }
    
    property set showConditionals ($arg :  boolean) {
      setVariableValue("showConditionals", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/RatingWorksheetPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends RatingWorksheetPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Instruction_Cell) at RatingWorksheetPopup.pcf: line 74, column 41
    function valueRoot_9 () : java.lang.Object {
      return node
    }
    
    // 'value' attribute on TextCell (id=Result_Cell) at RatingWorksheetPopup.pcf: line 79, column 82
    function value_11 () : java.lang.String {
      return gw.rating.worksheet.WorksheetUIHelper.format(node.Result)
    }
    
    // 'value' attribute on TextCell (id=Op_Cell) at RatingWorksheetPopup.pcf: line 85, column 38
    function value_13 () : java.lang.String {
      return node.Operator
    }
    
    // 'value' attribute on TextCell (id=LeftParen_Cell) at RatingWorksheetPopup.pcf: line 90, column 50
    function value_16 () : java.lang.String {
      return node.LeftParenthesesGroup
    }
    
    // 'value' attribute on TextCell (id=Operand_Cell) at RatingWorksheetPopup.pcf: line 95, column 37
    function value_19 () : java.lang.String {
      return node.Operand
    }
    
    // 'value' attribute on TextCell (id=RightParen_Cell) at RatingWorksheetPopup.pcf: line 100, column 51
    function value_22 () : java.lang.String {
      return node.RightParenthesesGroup
    }
    
    // 'value' attribute on TextCell (id=OperandValue_Cell) at RatingWorksheetPopup.pcf: line 106, column 45
    function value_25 () : java.lang.Object {
      return node.OperandValue
    }
    
    // 'value' attribute on TextCell (id=Instruction_Cell) at RatingWorksheetPopup.pcf: line 74, column 41
    function value_8 () : java.lang.String {
      return node.Instruction
    }
    
    property get node () : gw.rating.worksheet.treenode.WorksheetTreeNodeLeaf {
      return getIteratedValue(1) as gw.rating.worksheet.treenode.WorksheetTreeNodeLeaf
    }
    
    
  }
  
  
}