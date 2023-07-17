package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineInstructionVariableMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineInstructionVariableMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineInstructionVariableMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateRoutineInstructionVariableMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=localVariable) at RateRoutineInstructionVariableMenuItemSet.pcf: line 25, column 33
    function action_1 () : void {
      step.setStepToAssignmentVariable(localVar.VariableName)
    }
    
    // 'label' attribute on MenuItem (id=localVariable) at RateRoutineInstructionVariableMenuItemSet.pcf: line 25, column 33
    function label_2 () : java.lang.Object {
      return localVar.Label
    }
    
    property get localVar () : gw.rating.flow.LocalVariable {
      return getIteratedValue(1) as gw.rating.flow.LocalVariable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineInstructionVariableMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineInstructionVariableMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineInstructionVariableMenuItemSet.pcf: line 14, column 56
    function initialValue_0 () : List<gw.rating.flow.LocalVariable> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.getAllExistingVariableNamesForInstruction(step)
    }
    
    // 'value' attribute on MenuItemIterator (id=availableLocalVars) at RateRoutineInstructionVariableMenuItemSet.pcf: line 19, column 70
    function value_3 () : java.util.List<gw.rating.flow.LocalVariable> {
      return availLocalVariables
    }
    
    property get availLocalVariables () : List<gw.rating.flow.LocalVariable> {
      return getVariableValue("availLocalVariables", 0) as List<gw.rating.flow.LocalVariable>
    }
    
    property set availLocalVariables ($arg :  List<gw.rating.flow.LocalVariable>) {
      setVariableValue("availLocalVariables", 0, $arg)
    }
    
    property get step () : CalcStepDefinition {
      return getRequireValue("step", 0) as CalcStepDefinition
    }
    
    property set step ($arg :  CalcStepDefinition) {
      setRequireValue("step", 0, $arg)
    }
    
    
  }
  
  
}