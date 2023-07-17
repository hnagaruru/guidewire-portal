package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleVariablesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleVariablesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleVariablesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=NameValidationError_Input) at RuleVariablesPanelSet.pcf: line 126, column 34
    function value_25 () : java.lang.String {
      return error
    }
    
    property get error () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleVariablesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=ExpressionValidationError_Input) at RuleVariablesPanelSet.pcf: line 155, column 34
    function value_32 () : java.lang.String {
      return error
    }
    
    property get error () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleVariablesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RuleVariablesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=RuleVariablesHolderLV) at RuleVariablesPanelSet.pcf: line 65, column 80
    function checkBoxVisible_36 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'def' attribute on ModalCellRef (id=ExpressionOperandCell) at RuleVariablesPanelSet.pcf: line 89, column 71
    function def_onEnter_12 (def :  pcf.VariableExpressionFragCell_formula) : void {
      def.onEnter(ruleVariableHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=ExpressionOperandCell) at RuleVariablesPanelSet.pcf: line 89, column 71
    function def_onEnter_14 (def :  pcf.VariableExpressionFragCell_nested) : void {
      def.onEnter(ruleVariableHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=ExpressionOperandCell) at RuleVariablesPanelSet.pcf: line 89, column 71
    function def_refreshVariables_13 (def :  pcf.VariableExpressionFragCell_formula) : void {
      def.refreshVariables(ruleVariableHolder)
    }
    
    // 'def' attribute on ModalCellRef (id=ExpressionOperandCell) at RuleVariablesPanelSet.pcf: line 89, column 71
    function def_refreshVariables_15 (def :  pcf.VariableExpressionFragCell_nested) : void {
      def.refreshVariables(ruleVariableHolder)
    }
    
    // 'value' attribute on TextCell (id=variableName_Cell) at RuleVariablesPanelSet.pcf: line 73, column 56
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleVariableHolder.Variable.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=variableDescription_Cell) at RuleVariablesPanelSet.pcf: line 80, column 63
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleVariableHolder.Variable.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'iconColor' attribute on Link (id=NameValidationErrorIcon) at RuleVariablesPanelSet.pcf: line 112, column 64
    function iconColor_23 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'icon' attribute on Link (id=NameValidationErrorIcon) at RuleVariablesPanelSet.pcf: line 112, column 64
    function icon_22 () : java.lang.String {
      return 'alert'
    }
    
    // 'mode' attribute on ModalCellRef (id=ExpressionOperandCell) at RuleVariablesPanelSet.pcf: line 89, column 71
    function mode_16 () : java.lang.Object {
      return ruleVariableHolder.ExpressionFragHolder.PCFMode
    }
    
    // 'onChange' attribute on PostOnChange at RuleVariablesPanelSet.pcf: line 94, column 59
    function onChange_17 () : void {
      ruleVariableHolder.validate()
    }
    
    // 'onChange' attribute on PostOnChange at RuleVariablesPanelSet.pcf: line 75, column 59
    function onChange_2 () : void {
      ruleVariableHolder.validate()
    }
    
    // 'onChange' attribute on PostOnChange at RuleVariablesPanelSet.pcf: line 82, column 59
    function onChange_7 () : void {
      ruleVariableHolder.validate()
    }
    
    // 'value' attribute on TextCell (id=variableType_Cell) at RuleVariablesPanelSet.pcf: line 92, column 47
    function valueRoot_19 () : java.lang.Object {
      return ruleVariableHolder
    }
    
    // 'value' attribute on TextCell (id=variableName_Cell) at RuleVariablesPanelSet.pcf: line 73, column 56
    function valueRoot_5 () : java.lang.Object {
      return ruleVariableHolder.Variable
    }
    
    // 'value' attribute on TextCell (id=variableType_Cell) at RuleVariablesPanelSet.pcf: line 92, column 47
    function value_18 () : java.lang.String {
      return ruleVariableHolder.Type
    }
    
    // 'value' attribute on InputIterator (id=NameValidationErrors) at RuleVariablesPanelSet.pcf: line 123, column 48
    function value_27 () : java.lang.String[] {
      return ruleVariableHolder.getRuleVariableNameValidations()
    }
    
    // 'value' attribute on TextCell (id=variableName_Cell) at RuleVariablesPanelSet.pcf: line 73, column 56
    function value_3 () : java.lang.String {
      return ruleVariableHolder.Variable.Name
    }
    
    // 'value' attribute on InputIterator (id=ExpressionValidationErrors) at RuleVariablesPanelSet.pcf: line 152, column 48
    function value_34 () : java.lang.String[] {
      return ruleVariableHolder.getRuleVariableExpressionValidations()
    }
    
    // 'value' attribute on TextCell (id=variableDescription_Cell) at RuleVariablesPanelSet.pcf: line 80, column 63
    function value_8 () : java.lang.String {
      return ruleVariableHolder.Variable.Description
    }
    
    // 'visible' attribute on Link (id=NameValidationErrorIcon) at RuleVariablesPanelSet.pcf: line 112, column 64
    function visible_21 () : java.lang.Boolean {
      return !ruleVariableHolder.isNameValid()
    }
    
    // 'visible' attribute on Link (id=ExpressionErrorIcon) at RuleVariablesPanelSet.pcf: line 141, column 70
    function visible_28 () : java.lang.Boolean {
      return !ruleVariableHolder.isExpressionValid()
    }
    
    // 'visible' attribute on Row (id=RuleVariableHolderErrorRow) at RuleVariablesPanelSet.pcf: line 99, column 166
    function visible_35 () : java.lang.Boolean {
      return ruleVariableHolder.displayValidations(CurrentLocation) and (ruleVariableHolder.HasErrors or ruleVariableHolder.ExpressionFragHolder.HasErrors)
    }
    
    property get ruleVariableHolder () : gw.bizrules.pcf.RuleVariableHolder {
      return getIteratedValue(1) as gw.bizrules.pcf.RuleVariableHolder
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleVariablesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleVariablesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at RuleVariablesPanelSet.pcf: line 68, column 28
    function sortBy_1 (ruleVariableHolder :  gw.bizrules.pcf.RuleVariableHolder) : java.lang.Object {
      return ruleVariableHolder.Variable.OrderNumber
    }
    
    // 'startChecked' attribute on RowIterator (id=RuleVariablesHolderLV) at RuleVariablesPanelSet.pcf: line 65, column 80
    function startChecked_40 (ruleVariableHolder :  gw.bizrules.pcf.RuleVariableHolder) : java.lang.Boolean {
      return controller.isLineChecked(ruleVariableHolder)
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=RuleVariablesHolderLV) at RuleVariablesPanelSet.pcf: line 65, column 80
    function toCreateAndAdd_37 () : gw.bizrules.pcf.RuleVariableHolder {
      return controller.addRuleVariable()
    }
    
    // 'toRemove' attribute on RowIterator (id=RuleVariablesHolderLV) at RuleVariablesPanelSet.pcf: line 65, column 80
    function toRemove_38 (ruleVariableHolder :  gw.bizrules.pcf.RuleVariableHolder) : void {
      controller.removeRuleVariable(ruleVariableHolder)
    }
    
    // 'value' attribute on RowIterator (id=RuleVariablesHolderLV) at RuleVariablesPanelSet.pcf: line 65, column 80
    function value_39 () : java.util.List<gw.bizrules.pcf.RuleVariableHolder> {
      return controller.RuleVariableHolders
    }
    
    // 'visible' attribute on DetailViewPanel at RuleVariablesPanelSet.pcf: line 11, column 92
    function visible_0 () : java.lang.Boolean {
      return !CurrentLocation.InEditMode and controller.RuleVariableHolders.size() == 0
    }
    
    // 'visible' attribute on PanelRef at RuleVariablesPanelSet.pcf: line 20, column 92
    function visible_41 () : java.lang.Boolean {
      return CurrentLocation.InEditMode or controller.RuleVariableHolders.size() > 0
    }
    
    property get controller () : gw.bizrules.pcf.RuleVariableController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.RuleVariableController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RuleVariableController) {
      setRequireValue("controller", 0, $arg)
    }
    
    
  }
  
  
}