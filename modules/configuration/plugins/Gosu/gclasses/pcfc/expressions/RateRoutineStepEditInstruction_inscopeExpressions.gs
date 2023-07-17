package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineStepEditInstruction.inscope.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineStepEditInstruction_inscopeExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineStepEditInstruction.inscope.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineStepEditInstructionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineStepEditInstruction.inscope.pcf: line 33, column 109
    function def_onEnter_0 (def :  pcf.RateRoutineInstructionMenuItemSet_default) : void {
      def.onEnter(step, costDataUsages, writableParams, writableParamUsages)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineStepEditInstruction.inscope.pcf: line 33, column 109
    function def_refreshVariables_1 (def :  pcf.RateRoutineInstructionMenuItemSet_default) : void {
      def.refreshVariables(step, costDataUsages, writableParams, writableParamUsages)
    }
    
    // 'outputConversion' attribute on TextCell (id=RateRoutineStepEditInstructionForInscope_Cell) at RateRoutineStepEditInstruction.inscope.pcf: line 31, column 44
    function outputConversion_2 (VALUE :  java.lang.String) : java.lang.String {
      return step.CalcRoutineDefinition.indentValue(step, VALUE, indentLevelMap)
    }
    
    // 'value' attribute on TextCell (id=RateRoutineStepEditInstructionForInscope_Cell) at RateRoutineStepEditInstruction.inscope.pcf: line 31, column 44
    function valueRoot_4 () : java.lang.Object {
      return step
    }
    
    // 'value' attribute on TextCell (id=RateRoutineStepEditInstructionForInscope_Cell) at RateRoutineStepEditInstruction.inscope.pcf: line 31, column 44
    function value_3 () : java.lang.String {
      return step.StoreLocationForDisplay
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