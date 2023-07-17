package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineStepInstruction.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineStepInstruction_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineStepInstruction.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineStepInstructionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
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
    
    
  }
  
  
}