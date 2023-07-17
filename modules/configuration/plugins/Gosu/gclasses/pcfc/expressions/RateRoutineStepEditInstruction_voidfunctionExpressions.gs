package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineStepEditInstruction.voidfunction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineStepEditInstruction_voidfunctionExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineStepEditInstruction.voidfunction.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineStepEditInstructionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineStepEditInstruction.voidfunction.pcf: line 32, column 109
    function def_onEnter_0 (def :  pcf.RateRoutineInstructionMenuItemSet_default) : void {
      def.onEnter(step, costDataUsages, writableParams, writableParamUsages)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineStepEditInstruction.voidfunction.pcf: line 32, column 109
    function def_refreshVariables_1 (def :  pcf.RateRoutineInstructionMenuItemSet_default) : void {
      def.refreshVariables(step, costDataUsages, writableParams, writableParamUsages)
    }
    
    // 'value' attribute on TextCell (id=RateRoutineStepInstructionForVoidFunction_Cell) at RateRoutineStepEditInstruction.voidfunction.pcf: line 30, column 47
    function valueRoot_3 () : java.lang.Object {
      return step.PrimaryOperand
    }
    
    // 'value' attribute on TextCell (id=RateRoutineStepInstructionForVoidFunction_Cell) at RateRoutineStepEditInstruction.voidfunction.pcf: line 30, column 47
    function value_2 () : java.lang.String {
      return step.PrimaryOperand.OperandName
    }
    
    property get costDataUsages () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return getRequireValue("costDataUsages", 0) as java.util.List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set costDataUsages ($arg :  java.util.List<gw.rating.flow.util.InScopeUsage>) {
      setRequireValue("costDataUsages", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.flow.RateRoutineEditScreenHelper {
      return getRequireValue("helper", 0) as gw.pcf.rating.flow.RateRoutineEditScreenHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.flow.RateRoutineEditScreenHelper) {
      setRequireValue("helper", 0, $arg)
    }
    
    property get indentLevelMap () : java.util.HashMap<CalcStepDefinition, java.lang.Integer> {
      return getRequireValue("indentLevelMap", 0) as java.util.HashMap<CalcStepDefinition, java.lang.Integer>
    }
    
    property set indentLevelMap ($arg :  java.util.HashMap<CalcStepDefinition, java.lang.Integer>) {
      setRequireValue("indentLevelMap", 0, $arg)
    }
    
    property get step () : entity.CalcStepDefinition {
      return getRequireValue("step", 0) as entity.CalcStepDefinition
    }
    
    property set step ($arg :  entity.CalcStepDefinition) {
      setRequireValue("step", 0, $arg)
    }
    
    property get writableParamUsages () : java.util.Map<CalcRoutineParameter, java.util.List<gw.rating.flow.util.InScopeUsage>> {
      return getRequireValue("writableParamUsages", 0) as java.util.Map<CalcRoutineParameter, java.util.List<gw.rating.flow.util.InScopeUsage>>
    }
    
    property set writableParamUsages ($arg :  java.util.Map<CalcRoutineParameter, java.util.List<gw.rating.flow.util.InScopeUsage>>) {
      setRequireValue("writableParamUsages", 0, $arg)
    }
    
    property get writableParams () : List<CalcRoutineParameter> {
      return getRequireValue("writableParams", 0) as List<CalcRoutineParameter>
    }
    
    property set writableParams ($arg :  List<CalcRoutineParameter>) {
      setRequireValue("writableParams", 0, $arg)
    }
    
    
  }
  
  
}