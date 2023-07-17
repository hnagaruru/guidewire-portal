package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineConditionalPopupSecondOperand.constant.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineConditionalPopupSecondOperand_constantExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineConditionalPopupSecondOperand.constant.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineConditionalPopupSecondOperandExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineConditionalPopupSecondOperand.constant.pcf: line 37, column 134
    function def_onEnter_1 (def :  pcf.RateRoutineOperandMenuItemSet_default) : void {
      def.onEnter(conditionalOperand.Second, routine, paramInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineConditionalPopupSecondOperand.constant.pcf: line 37, column 134
    function def_refreshVariables_2 (def :  pcf.RateRoutineOperandMenuItemSet_default) : void {
      def.refreshVariables(conditionalOperand.Second, routine, paramInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'value' attribute on TextCell (id=EditableRightConstantOperand_Cell) at RateRoutineConditionalPopupSecondOperand.constant.pcf: line 33, column 75
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionalOperand.Second.LocalizedConstantValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=EditableRightConstantOperand_Cell) at RateRoutineConditionalPopupSecondOperand.constant.pcf: line 33, column 75
    function editable_3 () : java.lang.Boolean {
      return conditionalOperand.Second.OperatorType.Value != null
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineConditionalPopupSecondOperand.constant.pcf: line 35, column 119
    function onChange_0 () : void {
      conditionalOperand.Second.OperandType = TC_CONSTANT; conditionalOperand.Second.LogicalNot = false
    }
    
    // 'validationExpression' attribute on TextCell (id=EditableRightConstantOperand_Cell) at RateRoutineConditionalPopupSecondOperand.constant.pcf: line 33, column 75
    function validationExpression_4 () : java.lang.Object {
      return gw.pcf.rating.flow.RateRoutinePopupHelper.untypedConstantValidationExpression(conditionalOperand.First, conditionalOperand.Second)
    }
    
    // 'value' attribute on TextCell (id=EditableRightConstantOperand_Cell) at RateRoutineConditionalPopupSecondOperand.constant.pcf: line 33, column 75
    function valueRoot_8 () : java.lang.Object {
      return conditionalOperand.Second
    }
    
    // 'value' attribute on TextCell (id=EditableRightConstantOperand_Cell) at RateRoutineConditionalPopupSecondOperand.constant.pcf: line 33, column 75
    function value_6 () : java.lang.String {
      return conditionalOperand.Second.LocalizedConstantValue
    }
    
    property get conditionalOperand () : gw.util.Pair<CalcStepDefinitionOperand, CalcStepDefinitionOperand> {
      return getRequireValue("conditionalOperand", 0) as gw.util.Pair<CalcStepDefinitionOperand, CalcStepDefinitionOperand>
    }
    
    property set conditionalOperand ($arg :  gw.util.Pair<CalcStepDefinitionOperand, CalcStepDefinitionOperand>) {
      setRequireValue("conditionalOperand", 0, $arg)
    }
    
    property get costDataUsages () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return getRequireValue("costDataUsages", 0) as java.util.List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set costDataUsages ($arg :  java.util.List<gw.rating.flow.util.InScopeUsage>) {
      setRequireValue("costDataUsages", 0, $arg)
    }
    
    property get orderedSteps () : java.util.List<entity.CalcStepDefinition> {
      return getRequireValue("orderedSteps", 0) as java.util.List<entity.CalcStepDefinition>
    }
    
    property set orderedSteps ($arg :  java.util.List<entity.CalcStepDefinition>) {
      setRequireValue("orderedSteps", 0, $arg)
    }
    
    property get paramInScopeUsageMap () : java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>> {
      return getRequireValue("paramInScopeUsageMap", 0) as java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>>
    }
    
    property set paramInScopeUsageMap ($arg :  java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>>) {
      setRequireValue("paramInScopeUsageMap", 0, $arg)
    }
    
    property get popupHelper () : gw.pcf.rating.flow.RateRoutineConditionalPopupHelper {
      return getRequireValue("popupHelper", 0) as gw.pcf.rating.flow.RateRoutineConditionalPopupHelper
    }
    
    property set popupHelper ($arg :  gw.pcf.rating.flow.RateRoutineConditionalPopupHelper) {
      setRequireValue("popupHelper", 0, $arg)
    }
    
    property get routine () : CalcRoutineDefinition {
      return getRequireValue("routine", 0) as CalcRoutineDefinition
    }
    
    property set routine ($arg :  CalcRoutineDefinition) {
      setRequireValue("routine", 0, $arg)
    }
    
    
  }
  
  
}