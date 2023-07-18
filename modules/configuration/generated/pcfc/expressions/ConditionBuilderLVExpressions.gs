package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ConditionBuilderLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ConditionBuilderLVExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ConditionBuilderLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ConditionBuilderLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at ConditionBuilderLV.pcf: line 64, column 24
    function sortBy_3 (conditionLineHolder :  gw.bizrules.pcf.RuleConditionLineHolder) : java.lang.Object {
      return conditionLineHolder.Line.OrderNumber
    }
    
    // 'startChecked' attribute on RowIterator (id=ConditionLineIterator) at ConditionBuilderLV.pcf: line 61, column 81
    function startChecked_68 (conditionLineHolder :  gw.bizrules.pcf.RuleConditionLineHolder) : java.lang.Boolean {
      return controller.isLineChecked(conditionLineHolder)
    }
    
    // 'toRemove' attribute on RowIterator (id=ConditionLineIterator) at ConditionBuilderLV.pcf: line 61, column 81
    function toRemove_66 (conditionLineHolder :  gw.bizrules.pcf.RuleConditionLineHolder) : void {
      controller.removeLine(conditionLineHolder)
    }
    
    // 'value' attribute on RowIterator (id=ConditionLineIterator) at ConditionBuilderLV.pcf: line 61, column 81
    function value_67 () : java.util.List<gw.bizrules.pcf.RuleConditionLineHolder> {
      return controller.ConditionLineHolders
    }
    
    // 'visible' attribute on TextCell (id=AndOrLabel_Cell) at ConditionBuilderLV.pcf: line 25, column 29
    function visible_0 () : java.lang.Boolean {
      return advanced
    }
    
    property get advanced () : boolean {
      return getRequireValue("advanced", 0) as java.lang.Boolean
    }
    
    property set advanced ($arg :  boolean) {
      setRequireValue("advanced", 0, $arg)
    }
    
    property get controller () : gw.bizrules.pcf.ConditionBuilderController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.ConditionBuilderController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.ConditionBuilderController) {
      setRequireValue("controller", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/ConditionBuilderLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=LeftOperandError_Input) at ConditionBuilderLV.pcf: line 160, column 30
    function value_47 () : java.lang.String {
      return error
    }
    
    property get error () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/ConditionBuilderLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=RightOperandError_Input) at ConditionBuilderLV.pcf: line 190, column 30
    function value_52 () : java.lang.String {
      return error
    }
    
    property get error () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/ConditionBuilderLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=LineError_Input) at ConditionBuilderLV.pcf: line 231, column 30
    function value_61 () : java.lang.String {
      return error
    }
    
    property get error () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/ConditionBuilderLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ConditionBuilderLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'condition' attribute on ToolbarFlag at ConditionBuilderLV.pcf: line 67, column 27
    function condition_4 () : java.lang.Boolean {
      return controller.canMoveUp(conditionLineHolder)
    }
    
    // 'condition' attribute on ToolbarFlag at ConditionBuilderLV.pcf: line 70, column 29
    function condition_5 () : java.lang.Boolean {
      return controller.canMoveDown(conditionLineHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=LeftOperandCell) at ConditionBuilderLV.pcf: line 100, column 65
    function def_onEnter_17 (def :  pcf.ExpressionFragCell_empty) : void {
      def.onEnter(conditionLineHolder.LeftOperandHolder, conditionLineHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=LeftOperandCell) at ConditionBuilderLV.pcf: line 100, column 65
    function def_onEnter_19 (def :  pcf.ExpressionFragCell_formula) : void {
      def.onEnter(conditionLineHolder.LeftOperandHolder, conditionLineHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=LeftOperandCell) at ConditionBuilderLV.pcf: line 100, column 65
    function def_onEnter_21 (def :  pcf.ExpressionFragCell_nested) : void {
      def.onEnter(conditionLineHolder.LeftOperandHolder, conditionLineHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=RightOperandCell) at ConditionBuilderLV.pcf: line 115, column 116
    function def_onEnter_29 (def :  pcf.ExpressionFragCell_empty) : void {
      def.onEnter(conditionLineHolder.RightOperandHolder, conditionLineHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=RightOperandCell) at ConditionBuilderLV.pcf: line 115, column 116
    function def_onEnter_31 (def :  pcf.ExpressionFragCell_formula) : void {
      def.onEnter(conditionLineHolder.RightOperandHolder, conditionLineHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=RightOperandCell) at ConditionBuilderLV.pcf: line 115, column 116
    function def_onEnter_33 (def :  pcf.ExpressionFragCell_nested) : void {
      def.onEnter(conditionLineHolder.RightOperandHolder, conditionLineHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=LeftOperandCell) at ConditionBuilderLV.pcf: line 100, column 65
    function def_refreshVariables_18 (def :  pcf.ExpressionFragCell_empty) : void {
      def.refreshVariables(conditionLineHolder.LeftOperandHolder, conditionLineHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=LeftOperandCell) at ConditionBuilderLV.pcf: line 100, column 65
    function def_refreshVariables_20 (def :  pcf.ExpressionFragCell_formula) : void {
      def.refreshVariables(conditionLineHolder.LeftOperandHolder, conditionLineHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=LeftOperandCell) at ConditionBuilderLV.pcf: line 100, column 65
    function def_refreshVariables_22 (def :  pcf.ExpressionFragCell_nested) : void {
      def.refreshVariables(conditionLineHolder.LeftOperandHolder, conditionLineHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=RightOperandCell) at ConditionBuilderLV.pcf: line 115, column 116
    function def_refreshVariables_30 (def :  pcf.ExpressionFragCell_empty) : void {
      def.refreshVariables(conditionLineHolder.RightOperandHolder, conditionLineHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=RightOperandCell) at ConditionBuilderLV.pcf: line 115, column 116
    function def_refreshVariables_32 (def :  pcf.ExpressionFragCell_formula) : void {
      def.refreshVariables(conditionLineHolder.RightOperandHolder, conditionLineHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=RightOperandCell) at ConditionBuilderLV.pcf: line 115, column 116
    function def_refreshVariables_34 (def :  pcf.ExpressionFragCell_nested) : void {
      def.refreshVariables(conditionLineHolder.RightOperandHolder, conditionLineHolder)
    }
    
    // 'value' attribute on TypeKeyCell (id=LeftParens_Cell) at ConditionBuilderLV.pcf: line 92, column 30
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionLineHolder.Line.LeftParens = (__VALUE_TO_SET as typekey.Parentheses)
    }
    
    // 'value' attribute on TypeKeyCell (id=Operator_Cell) at ConditionBuilderLV.pcf: line 107, column 44
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionLineHolder.LineOperator = (__VALUE_TO_SET as typekey.RuleOperator)
    }
    
    // 'value' attribute on TypeKeyCell (id=RightParens_Cell) at ConditionBuilderLV.pcf: line 123, column 30
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionLineHolder.Line.RightParens = (__VALUE_TO_SET as typekey.Parentheses)
    }
    
    // 'value' attribute on TypeKeyCell (id=AndOr_Cell) at ConditionBuilderLV.pcf: line 82, column 30
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionLineHolder.Line.BooleanOperator = (__VALUE_TO_SET as typekey.RuleBooleanOperator)
    }
    
    // 'editable' attribute on ModalCellRef (id=RightOperandCell) at ConditionBuilderLV.pcf: line 115, column 116
    function editable_28 () : java.lang.Boolean {
      return not conditionLineHolder.isNoRHSRequiredOperator()
    }
    
    // 'iconColor' attribute on Link (id=LeftOperandErrorIcon) at ConditionBuilderLV.pcf: line 146, column 42
    function iconColor_45 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'mode' attribute on ModalCellRef (id=LeftOperandCell) at ConditionBuilderLV.pcf: line 100, column 65
    function mode_23 () : java.lang.Object {
      return conditionLineHolder.LeftOperandHolder.PCFMode
    }
    
    // 'mode' attribute on ModalCellRef (id=RightOperandCell) at ConditionBuilderLV.pcf: line 115, column 116
    function mode_35 () : java.lang.Object {
      return conditionLineHolder.RightOperandHolder.getPCFMode(conditionLineHolder.isNoRHSRequiredOperator())
    }
    
    // 'value' attribute on TypeKeyCell (id=Operator_Cell) at ConditionBuilderLV.pcf: line 107, column 44
    function valueRoot_26 () : java.lang.Object {
      return conditionLineHolder
    }
    
    // 'value' attribute on TypeKeyCell (id=AndOr_Cell) at ConditionBuilderLV.pcf: line 82, column 30
    function valueRoot_9 () : java.lang.Object {
      return conditionLineHolder.Line
    }
    
    // 'value' attribute on TypeKeyCell (id=LeftParens_Cell) at ConditionBuilderLV.pcf: line 92, column 30
    function value_12 () : typekey.Parentheses {
      return conditionLineHolder.Line.LeftParens
    }
    
    // 'value' attribute on TypeKeyCell (id=Operator_Cell) at ConditionBuilderLV.pcf: line 107, column 44
    function value_24 () : typekey.RuleOperator {
      return conditionLineHolder.LineOperator
    }
    
    // 'value' attribute on TypeKeyCell (id=RightParens_Cell) at ConditionBuilderLV.pcf: line 123, column 30
    function value_38 () : typekey.Parentheses {
      return conditionLineHolder.Line.RightParens
    }
    
    // 'value' attribute on InputIterator (id=LeftOperandErrors) at ConditionBuilderLV.pcf: line 157, column 44
    function value_49 () : java.lang.String[] {
      return conditionLineHolder.LeftOperandHolder.validate()
    }
    
    // 'value' attribute on InputIterator (id=RightOperandErrors) at ConditionBuilderLV.pcf: line 187, column 44
    function value_54 () : java.lang.String[] {
      return conditionLineHolder.RightOperandHolder.validate()
    }
    
    // 'value' attribute on InputIterator (id=LineErrors) at ConditionBuilderLV.pcf: line 228, column 44
    function value_63 () : java.lang.String[] {
      return conditionLineHolder.validate()
    }
    
    // 'value' attribute on TypeKeyCell (id=AndOr_Cell) at ConditionBuilderLV.pcf: line 82, column 30
    function value_7 () : typekey.RuleBooleanOperator {
      return conditionLineHolder.Line.BooleanOperator
    }
    
    // 'visible' attribute on TypeKeyCell (id=AndOr_Cell) at ConditionBuilderLV.pcf: line 82, column 30
    function visible_10 () : java.lang.Boolean {
      return advanced
    }
    
    // 'visible' attribute on ContentInput (id=LeftOperandValidationErrorsCellHeader) at ConditionBuilderLV.pcf: line 141, column 71
    function visible_46 () : java.lang.Boolean {
      return conditionLineHolder.LeftOperandHolder.HasErrors
    }
    
    // 'visible' attribute on ContentInput (id=RightOperandValidationErrorsCellHeader) at ConditionBuilderLV.pcf: line 171, column 72
    function visible_51 () : java.lang.Boolean {
      return conditionLineHolder.RightOperandHolder.HasErrors
    }
    
    // 'visible' attribute on Row at ConditionBuilderLV.pcf: line 128, column 119
    function visible_56 () : java.lang.Boolean {
      return conditionLineHolder.LeftOperandHolder.HasErrors || conditionLineHolder.RightOperandHolder.HasErrors
    }
    
    // 'valueVisible' attribute on TypeKeyCell (id=AndOr_Cell) at ConditionBuilderLV.pcf: line 82, column 30
    function visible_6 () : java.lang.Boolean {
      return !conditionLineHolder.Line.FirstLine
    }
    
    // 'visible' attribute on ContentInput (id=LineValidationErrorsCellHeader) at ConditionBuilderLV.pcf: line 212, column 53
    function visible_60 () : java.lang.Boolean {
      return conditionLineHolder.HasErrors
    }
    
    property get conditionLineHolder () : gw.bizrules.pcf.RuleConditionLineHolder {
      return getIteratedValue(1) as gw.bizrules.pcf.RuleConditionLineHolder
    }
    
    
  }
  
  
}