package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleCommandDefinitionsListDetailView.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleCommandDefinitionsListDetailViewExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleCommandDefinitionsListDetailView.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RuleCommandDefinitionsListDetailViewExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=CommandDefinitionsLV) at RuleCommandDefinitionsListDetailView.pcf: line 52, column 89
    function checkBoxVisible_17 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'condition' attribute on ToolbarFlag at RuleCommandDefinitionsListDetailView.pcf: line 55, column 31
    function condition_6 () : java.lang.Boolean {
      return controller.canMoveUp(commandDefinitionElement)
    }
    
    // 'condition' attribute on ToolbarFlag at RuleCommandDefinitionsListDetailView.pcf: line 58, column 33
    function condition_7 () : java.lang.Boolean {
      return controller.canMoveDown(commandDefinitionElement)
    }
    
    // 'value' attribute on TextCell (id=actionType_Cell) at RuleCommandDefinitionsListDetailView.pcf: line 73, column 55
    function valueRoot_12 () : java.lang.Object {
      return commandDefinitionElement
    }
    
    // 'value' attribute on TextCell (id=actionSequence_Cell) at RuleCommandDefinitionsListDetailView.pcf: line 68, column 46
    function valueRoot_9 () : java.lang.Object {
      return commandDefinitionElement.CommandDefinition
    }
    
    // 'value' attribute on TextCell (id=actionType_Cell) at RuleCommandDefinitionsListDetailView.pcf: line 73, column 55
    function value_11 () : java.lang.String {
      return commandDefinitionElement.Label
    }
    
    // 'value' attribute on TextCell (id=actionDescription_Cell) at RuleCommandDefinitionsListDetailView.pcf: line 79, column 61
    function value_14 () : java.lang.String {
      return commandDefinitionElement.Description
    }
    
    // 'value' attribute on TextCell (id=actionSequence_Cell) at RuleCommandDefinitionsListDetailView.pcf: line 68, column 46
    function value_8 () : java.lang.Integer {
      return commandDefinitionElement.CommandDefinition.SequenceNumber
    }
    
    property get commandDefinitionElement () : gw.bizrules.pcf.RuleCommandDefinitionHolder {
      return getIteratedValue(1) as gw.bizrules.pcf.RuleCommandDefinitionHolder
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleCommandDefinitionsListDetailView.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleCommandDefinitionsListDetailViewExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MoveUp) at RuleCommandDefinitionsListDetailView.pcf: line 28, column 44
    function allCheckedRowsAction_0 (CheckedValues :  gw.bizrules.pcf.RuleCommandDefinitionHolder[], CheckedValuesErrors :  java.util.Map) : void {
      controller.moveLinesUp(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MoveDown) at RuleCommandDefinitionsListDetailView.pcf: line 36, column 44
    function allCheckedRowsAction_1 (CheckedValues :  gw.bizrules.pcf.RuleCommandDefinitionHolder[], CheckedValuesErrors :  java.util.Map) : void {
      controller.moveLinesDown(CheckedValues)
    }
    
    // 'def' attribute on InputSetRef (id=CommandDefinitionValidationErrors) at RuleCommandDefinitionsListDetailView.pcf: line 101, column 55
    function def_onEnter_29 (def :  pcf.ValidationErrorsInputSet) : void {
      def.onEnter(commandDefinition == null ? {} : commandDefinition.validate(), true)
    }
    
    // 'def' attribute on PanelRef (id=CommandDefinitionDV) at RuleCommandDefinitionsListDetailView.pcf: line 109, column 62
    function def_onEnter_32 (def :  pcf.CommandDefinitionDV_default) : void {
      def.onEnter(commandDefinition)
    }
    
    // 'def' attribute on InputSetRef (id=CommandDefinitionValidationErrors) at RuleCommandDefinitionsListDetailView.pcf: line 101, column 55
    function def_refreshVariables_30 (def :  pcf.ValidationErrorsInputSet) : void {
      def.refreshVariables(commandDefinition == null ? {} : commandDefinition.validate(), true)
    }
    
    // 'def' attribute on PanelRef (id=CommandDefinitionDV) at RuleCommandDefinitionsListDetailView.pcf: line 109, column 62
    function def_refreshVariables_33 (def :  pcf.CommandDefinitionDV_default) : void {
      def.refreshVariables(commandDefinition)
    }
    
    // 'value' attribute on TypeKeyInput (id=RuleActionKey_Input) at RuleCommandDefinitionsListDetailView.pcf: line 96, column 49
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      commandDefinition.RuleActionKey = (__VALUE_TO_SET as typekey.RuleActionKey)
    }
    
    // 'editable' attribute on TypeKeyInput (id=RuleActionKey_Input) at RuleCommandDefinitionsListDetailView.pcf: line 96, column 49
    function editable_22 () : java.lang.Boolean {
      return commandDefinition.getAllRuleActionKeys().size() > 1
    }
    
    // 'filter' attribute on TypeKeyInput (id=RuleActionKey_Input) at RuleCommandDefinitionsListDetailView.pcf: line 96, column 49
    function filter_26 (VALUE :  typekey.RuleActionKey, VALUES :  typekey.RuleActionKey[]) : java.lang.Boolean {
      return VALUE.hasCategory(ruleSubType)
    }
    
    // 'mode' attribute on PanelRef (id=CommandDefinitionDV) at RuleCommandDefinitionsListDetailView.pcf: line 109, column 62
    function mode_34 () : java.lang.Object {
      return commandDefinition.getUIMode()
    }
    
    // 'sortBy' attribute on IteratorSort at RuleCommandDefinitionsListDetailView.pcf: line 61, column 28
    function sortBy_2 (commandDefinitionElement :  gw.bizrules.pcf.RuleCommandDefinitionHolder) : java.lang.Object {
      return commandDefinitionElement.CommandDefinition.OrderNumber
    }
    
    // 'value' attribute on TextCell (id=actionSequence_Cell) at RuleCommandDefinitionsListDetailView.pcf: line 68, column 46
    function sortValue_3 (commandDefinitionElement :  gw.bizrules.pcf.RuleCommandDefinitionHolder) : java.lang.Object {
      return commandDefinitionElement.CommandDefinition.SequenceNumber
    }
    
    // 'value' attribute on TextCell (id=actionType_Cell) at RuleCommandDefinitionsListDetailView.pcf: line 73, column 55
    function sortValue_4 (commandDefinitionElement :  gw.bizrules.pcf.RuleCommandDefinitionHolder) : java.lang.Object {
      return commandDefinitionElement.Label
    }
    
    // 'value' attribute on TextCell (id=actionDescription_Cell) at RuleCommandDefinitionsListDetailView.pcf: line 79, column 61
    function sortValue_5 (commandDefinitionElement :  gw.bizrules.pcf.RuleCommandDefinitionHolder) : java.lang.Object {
      return commandDefinitionElement.Description
    }
    
    // 'startChecked' attribute on RowIterator (id=CommandDefinitionsLV) at RuleCommandDefinitionsListDetailView.pcf: line 52, column 89
    function startChecked_21 (commandDefinitionElement :  gw.bizrules.pcf.RuleCommandDefinitionHolder) : java.lang.Boolean {
      return controller.isLineChecked(commandDefinitionElement)
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=CommandDefinitionsLV) at RuleCommandDefinitionsListDetailView.pcf: line 52, column 89
    function toCreateAndAdd_18 () : gw.bizrules.pcf.RuleCommandDefinitionHolder {
      return controller.addCommandDefinition()
    }
    
    // 'toRemove' attribute on RowIterator (id=CommandDefinitionsLV) at RuleCommandDefinitionsListDetailView.pcf: line 52, column 89
    function toRemove_19 (commandDefinitionElement :  gw.bizrules.pcf.RuleCommandDefinitionHolder) : void {
      controller.removeCommandDefinition(commandDefinitionElement)
    }
    
    // 'value' attribute on TypeKeyInput (id=RuleActionKey_Input) at RuleCommandDefinitionsListDetailView.pcf: line 96, column 49
    function valueRoot_25 () : java.lang.Object {
      return commandDefinition
    }
    
    // 'value' attribute on RowIterator (id=CommandDefinitionsLV) at RuleCommandDefinitionsListDetailView.pcf: line 52, column 89
    function value_20 () : java.util.List<gw.bizrules.pcf.RuleCommandDefinitionHolder> {
      return controller.CommandDefinitionHolders
    }
    
    // 'value' attribute on TypeKeyInput (id=RuleActionKey_Input) at RuleCommandDefinitionsListDetailView.pcf: line 96, column 49
    function value_23 () : typekey.RuleActionKey {
      return commandDefinition.RuleActionKey
    }
    
    // 'visible' attribute on PanelRef (id=CommandDefinitionDV) at RuleCommandDefinitionsListDetailView.pcf: line 109, column 62
    function visible_31 () : java.lang.Boolean {
      return commandDefinition.RuleActionKey != null
    }
    
    property get commandDefinition () : gw.bizrules.pcf.RuleCommandDefinitionHolder {
      return getCurrentSelection(0) as gw.bizrules.pcf.RuleCommandDefinitionHolder
    }
    
    property set commandDefinition ($arg :  gw.bizrules.pcf.RuleCommandDefinitionHolder) {
      setCurrentSelection(0, $arg)
    }
    
    property get controller () : gw.bizrules.pcf.CommandDefinitionController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.CommandDefinitionController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.CommandDefinitionController) {
      setRequireValue("controller", 0, $arg)
    }
    
    property get ruleSubType () : typekey.Rule {
      return getRequireValue("ruleSubType", 0) as typekey.Rule
    }
    
    property set ruleSubType ($arg :  typekey.Rule) {
      setRequireValue("ruleSubType", 0, $arg)
    }
    
    
  }
  
  
}