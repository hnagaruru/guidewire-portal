package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineConditionalPopupFirstOperand.constant.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineConditionalPopupFirstOperand_constantExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineConditionalPopupFirstOperand.constant.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineConditionalPopupFirstOperandExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineConditionalPopupFirstOperand.constant.pcf: line 33, column 133
    function def_onEnter_1 (def :  pcf.RateRoutineOperandMenuItemSet_default) : void {
      def.onEnter(conditionalOperand.First, routine, paramInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineConditionalPopupFirstOperand.constant.pcf: line 33, column 133
    function def_refreshVariables_2 (def :  pcf.RateRoutineOperandMenuItemSet_default) : void {
      def.refreshVariables(conditionalOperand.First, routine, paramInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'value' attribute on TextCell (id=EditableLeftConstantOperand_Cell) at RateRoutineConditionalPopupFirstOperand.constant.pcf: line 29, column 63
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionalOperand.First.LocalizedConstantValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineConditionalPopupFirstOperand.constant.pcf: line 31, column 72
    function onChange_0 () : void {
      conditionalOperand.First.OperandType = TC_CONSTANT
    }
    
    // 'validationExpression' attribute on TextCell (id=EditableLeftConstantOperand_Cell) at RateRoutineConditionalPopupFirstOperand.constant.pcf: line 29, column 63
    function validationExpression_3 () : java.lang.Object {
      return gw.pcf.rating.flow.RateRoutinePopupHelper.untypedConstantValidationExpression(conditionalOperand.Second,conditionalOperand.First)
    }
    
    // 'value' attribute on TextCell (id=EditableLeftConstantOperand_Cell) at RateRoutineConditionalPopupFirstOperand.constant.pcf: line 29, column 63
    function valueRoot_6 () : java.lang.Object {
      return conditionalOperand.First
    }
    
    // 'value' attribute on TextCell (id=EditableLeftConstantOperand_Cell) at RateRoutineConditionalPopupFirstOperand.constant.pcf: line 29, column 63
    function value_4 () : java.lang.String {
      return conditionalOperand.First.LocalizedConstantValue
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
    
    property get routine () : CalcRoutineDefinition {
      return getRequireValue("routine", 0) as CalcRoutineDefinition
    }
    
    property set routine ($arg :  CalcRoutineDefinition) {
      setRequireValue("routine", 0, $arg)
    }
    
    
  }
  
  
}