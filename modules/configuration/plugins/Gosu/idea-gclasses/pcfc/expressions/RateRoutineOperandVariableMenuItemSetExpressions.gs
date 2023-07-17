package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineOperandVariableMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineOperandVariableMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineOperandVariableMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateRoutineOperandVariableMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=localVariable) at RateRoutineOperandVariableMenuItemSet.pcf: line 35, column 33
    function action_3 () : void {
      gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.setLocalVar(operand, localVar)
    }
    
    // 'label' attribute on MenuItem (id=localVariable) at RateRoutineOperandVariableMenuItemSet.pcf: line 35, column 33
    function label_4 () : java.lang.Object {
      return localVar.Label
    }
    
    property get localVar () : gw.rating.flow.LocalVariable {
      return getIteratedValue(1) as gw.rating.flow.LocalVariable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineOperandVariableMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineOperandVariableMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineOperandVariableMenuItemSet.pcf: line 14, column 56
    function initialValue_0 () : List<gw.rating.flow.LocalVariable> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.getAllExistingVariableNamesForOperand(operand.CalcStep)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineOperandVariableMenuItemSet.pcf: line 19, column 56
    function initialValue_1 () : List<gw.rating.flow.LocalVariable> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.filterAndSortLocalVars(storeTargetTypes, availLocalVariables.copy())
    }
    
    // 'initialValue' attribute on Variable at RateRoutineOperandVariableMenuItemSet.pcf: line 24, column 58
    function initialValue_2 () : java.util.Set<gw.lang.reflect.IType> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.getTargetDataTypes(operand)
    }
    
    // 'value' attribute on MenuItemIterator (id=availableLocalVars) at RateRoutineOperandVariableMenuItemSet.pcf: line 29, column 70
    function value_5 () : java.util.List<gw.rating.flow.LocalVariable> {
      return filteredAndSortedLocalVariables
    }
    
    property get availLocalVariables () : List<gw.rating.flow.LocalVariable> {
      return getVariableValue("availLocalVariables", 0) as List<gw.rating.flow.LocalVariable>
    }
    
    property set availLocalVariables ($arg :  List<gw.rating.flow.LocalVariable>) {
      setVariableValue("availLocalVariables", 0, $arg)
    }
    
    property get filteredAndSortedLocalVariables () : List<gw.rating.flow.LocalVariable> {
      return getVariableValue("filteredAndSortedLocalVariables", 0) as List<gw.rating.flow.LocalVariable>
    }
    
    property set filteredAndSortedLocalVariables ($arg :  List<gw.rating.flow.LocalVariable>) {
      setVariableValue("filteredAndSortedLocalVariables", 0, $arg)
    }
    
    property get operand () : CalcStepDefinitionOperand {
      return getRequireValue("operand", 0) as CalcStepDefinitionOperand
    }
    
    property set operand ($arg :  CalcStepDefinitionOperand) {
      setRequireValue("operand", 0, $arg)
    }
    
    property get storeTargetTypes () : java.util.Set<gw.lang.reflect.IType> {
      return getVariableValue("storeTargetTypes", 0) as java.util.Set<gw.lang.reflect.IType>
    }
    
    property set storeTargetTypes ($arg :  java.util.Set<gw.lang.reflect.IType>) {
      setVariableValue("storeTargetTypes", 0, $arg)
    }
    
    
  }
  
  
}