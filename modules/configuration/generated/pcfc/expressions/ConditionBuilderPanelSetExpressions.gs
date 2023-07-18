package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ConditionBuilderPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ConditionBuilderPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ConditionBuilderPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ConditionBuilderPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AdvancedShowPrettyPrint) at ConditionBuilderPanelSet.pcf: line 75, column 94
    function action_11 () : void {
      controller.setShowPrettyPrint(true)
    }
    
    // 'action' attribute on ToolbarButton (id=AdvancedHidePrettyPrint) at ConditionBuilderPanelSet.pcf: line 80, column 93
    function action_13 () : void {
      controller.setShowPrettyPrint(false)
    }
    
    // 'action' attribute on ToolbarButton (id=AdvancedContextHelp) at ConditionBuilderPanelSet.pcf: line 87, column 51
    function action_15 () : void {
      ContextHelp.push()
    }
    
    // 'action' attribute on ToolbarButton (id=SimpleShowPrettyPrint) at ConditionBuilderPanelSet.pcf: line 134, column 94
    function action_25 () : void {
      controller.setShowPrettyPrint(true)
    }
    
    // 'action' attribute on ToolbarButton (id=SimpleHidePrettyPrint) at ConditionBuilderPanelSet.pcf: line 139, column 93
    function action_27 () : void {
      controller.setShowPrettyPrint(false)
    }
    
    // 'action' attribute on ToolbarButton (id=SimpleContextHelp) at ConditionBuilderPanelSet.pcf: line 146, column 51
    function action_29 () : void {
      ContextHelp.push()
    }
    
    // 'action' attribute on ToolbarButton (id=AdvancedContextHelp) at ConditionBuilderPanelSet.pcf: line 87, column 51
    function action_dest_16 () : pcf.api.Destination {
      return pcf.ContextHelp.createDestination()
    }
    
    // 'action' attribute on ToolbarButton (id=SimpleContextHelp) at ConditionBuilderPanelSet.pcf: line 146, column 51
    function action_dest_30 () : pcf.api.Destination {
      return pcf.ContextHelp.createDestination()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AdvancedMoveUp) at ConditionBuilderPanelSet.pcf: line 62, column 68
    function allCheckedRowsAction_8 (CheckedValues :  gw.bizrules.pcf.RuleConditionLineHolder[], CheckedValuesErrors :  java.util.Map) : void {
      controller.moveLinesUp(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AdvancedMoveDown) at ConditionBuilderPanelSet.pcf: line 70, column 68
    function allCheckedRowsAction_9 (CheckedValues :  gw.bizrules.pcf.RuleConditionLineHolder[], CheckedValuesErrors :  java.util.Map) : void {
      controller.moveLinesDown(CheckedValues)
    }
    
    // 'def' attribute on PanelRef (id=AdvancedConditionsLV) at ConditionBuilderPanelSet.pcf: line 34, column 48
    function def_onEnter_18 (def :  pcf.ConditionBuilderLV) : void {
      def.onEnter(controller, true)
    }
    
    // 'def' attribute on PanelRef (id=SimpleConditionsLV) at ConditionBuilderPanelSet.pcf: line 93, column 49
    function def_onEnter_32 (def :  pcf.ConditionBuilderLV) : void {
      def.onEnter(controller, false)
    }
    
    // 'def' attribute on InputSetRef at ConditionBuilderPanelSet.pcf: line 165, column 87
    function def_onEnter_36 (def :  pcf.ValidationErrorsInputSet) : void {
      def.onEnter(controller.ReadOnlyConditionErrors, true)
    }
    
    // 'def' attribute on InputSetRef at ConditionBuilderPanelSet.pcf: line 173, column 75
    function def_onEnter_39 (def :  pcf.ValidationErrorsInputSet) : void {
      def.onEnter(controller?.validate(), true)
    }
    
    // 'def' attribute on PanelRef (id=AdvancedConditionsLV) at ConditionBuilderPanelSet.pcf: line 34, column 48
    function def_refreshVariables_19 (def :  pcf.ConditionBuilderLV) : void {
      def.refreshVariables(controller, true)
    }
    
    // 'def' attribute on PanelRef (id=SimpleConditionsLV) at ConditionBuilderPanelSet.pcf: line 93, column 49
    function def_refreshVariables_33 (def :  pcf.ConditionBuilderLV) : void {
      def.refreshVariables(controller, false)
    }
    
    // 'def' attribute on InputSetRef at ConditionBuilderPanelSet.pcf: line 165, column 87
    function def_refreshVariables_37 (def :  pcf.ValidationErrorsInputSet) : void {
      def.refreshVariables(controller.ReadOnlyConditionErrors, true)
    }
    
    // 'def' attribute on InputSetRef at ConditionBuilderPanelSet.pcf: line 173, column 75
    function def_refreshVariables_40 (def :  pcf.ValidationErrorsInputSet) : void {
      def.refreshVariables(controller?.validate(), true)
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=ConditionType_Input) at ConditionBuilderPanelSet.pcf: line 23, column 51
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      controller.RuleConditionType = (__VALUE_TO_SET as typekey.RuleConditionType)
    }
    
    // 'filter' attribute on TypeKeyRadioInput (id=ConditionType_Input) at ConditionBuilderPanelSet.pcf: line 23, column 51
    function filter_3 (VALUE :  typekey.RuleConditionType, VALUES :  typekey.RuleConditionType[]) : java.lang.Boolean {
      return controller.AlwaysTrueConditionTypeVisible or VALUE != TC_ALWAYSTRUE
    }
    
    // TemplatePanel at ConditionBuilderPanelSet.pcf: line 152, column 24
    function renderCall_34 (__writer :  java.io.Writer, __escaper :  gw.lang.parser.template.StringEscaper, __helper :  gw.api.web.template.TemplatePanelHelper) : void {
      pcfc.expressions.ConditionBuilderPanelSet_TemplatePanel1.render(__writer, __escaper, controller, __helper)
    }
    
    // 'toCreateAndAdd' attribute on AddButton (id=AdvancedAdd) at ConditionBuilderPanelSet.pcf: line 42, column 119
    function toCreateAndAdd_6 (CheckedValues :  Object[]) : java.lang.Object {
      return controller.addNewLine(CheckedValues as gw.bizrules.pcf.RuleConditionLineHolder[], true)
    }
    
    // 'toCreateAndAdd' attribute on AddButton (id=AdvancedInsert) at ConditionBuilderPanelSet.pcf: line 49, column 120
    function toCreateAndAdd_7 (CheckedValues :  Object[]) : java.lang.Object {
      return controller.addNewLine(CheckedValues as gw.bizrules.pcf.RuleConditionLineHolder[], false)
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=ConditionType_Input) at ConditionBuilderPanelSet.pcf: line 23, column 51
    function valueRoot_2 () : java.lang.Object {
      return controller
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=ConditionType_Input) at ConditionBuilderPanelSet.pcf: line 23, column 51
    function value_0 () : typekey.RuleConditionType {
      return controller.RuleConditionType
    }
    
    // 'visible' attribute on ToolbarButton (id=AdvancedShowPrettyPrint) at ConditionBuilderPanelSet.pcf: line 75, column 94
    function visible_10 () : java.lang.Boolean {
      return CurrentLocation.InEditMode && !controller.isShowPrettyPrint()
    }
    
    // 'visible' attribute on ToolbarButton (id=AdvancedHidePrettyPrint) at ConditionBuilderPanelSet.pcf: line 80, column 93
    function visible_12 () : java.lang.Boolean {
      return CurrentLocation.InEditMode && controller.isShowPrettyPrint()
    }
    
    // 'visible' attribute on PanelRef (id=AdvancedConditionsLV) at ConditionBuilderPanelSet.pcf: line 34, column 48
    function visible_17 () : java.lang.Boolean {
      return controller.AdvancedCondition
    }
    
    // 'visible' attribute on PanelRef (id=SimpleConditionsLV) at ConditionBuilderPanelSet.pcf: line 93, column 49
    function visible_31 () : java.lang.Boolean {
      return !controller.AdvancedCondition
    }
    
    // 'visible' attribute on PanelSet (id=PrettyPrintWrapperPanelSet) at ConditionBuilderPanelSet.pcf: line 151, column 81
    function visible_35 () : java.lang.Boolean {
      return !CurrentLocation.InEditMode || controller.isShowPrettyPrint()
    }
    
    // 'visible' attribute on DetailViewPanel (id=ConditionValidationErrorsWhenReadOnlyDV) at ConditionBuilderPanelSet.pcf: line 162, column 47
    function visible_38 () : java.lang.Boolean {
      return !CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on PanelSet at ConditionBuilderPanelSet.pcf: line 30, column 81
    function visible_42 () : java.lang.Boolean {
      return controller.RuleConditionType != RuleConditionType.TC_ALWAYSTRUE
    }
    
    // 'visible' attribute on PanelRef at ConditionBuilderPanelSet.pcf: line 11, column 44
    function visible_5 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    property get controller () : gw.bizrules.pcf.ConditionBuilderController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.ConditionBuilderController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.ConditionBuilderController) {
      setRequireValue("controller", 0, $arg)
    }
    
    
  }
  
  
}