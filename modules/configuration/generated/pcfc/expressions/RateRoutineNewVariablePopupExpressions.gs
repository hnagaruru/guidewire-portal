package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineNewVariablePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineNewVariablePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineNewVariablePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineNewVariablePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (step :  CalcStepDefinition, costDataUsages :  java.util.List<gw.rating.flow.util.InScopeUsage>) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineNewVariableEditUpdate) at RateRoutineNewVariablePopup.pcf: line 26, column 81
    function action_0 () : void {
      CurrentLocation.commit();
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineNewVarialbeEditCancel) at RateRoutineNewVariablePopup.pcf: line 30, column 81
    function action_1 () : void {
      CurrentLocation.cancel()
    }
    
    // 'afterEnter' attribute on Popup (id=RateRoutineNewVariablePopup) at RateRoutineNewVariablePopup.pcf: line 10, column 81
    function afterEnter_8 () : void {
      step.setStepToAssignmentNewVariable()
    }
    
    // 'value' attribute on TextInput (id=NewVariableTextInput_Input) at RateRoutineNewVariablePopup.pcf: line 41, column 41
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      step.StoreLocation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'validationExpression' attribute on TextInput (id=NewVariableTextInput_Input) at RateRoutineNewVariablePopup.pcf: line 41, column 41
    function validationExpression_2 () : java.lang.Object {
      return gw.pcf.rating.flow.RateRoutinePopupHelper.variableValidationExpression(step, costDataUsages)
    }
    
    // 'value' attribute on TextInput (id=NewVariableTextInput_Input) at RateRoutineNewVariablePopup.pcf: line 41, column 41
    function valueRoot_5 () : java.lang.Object {
      return step
    }
    
    // 'value' attribute on TextInput (id=NewVariableTextInput_Input) at RateRoutineNewVariablePopup.pcf: line 41, column 41
    function value_3 () : java.lang.String {
      return step.StoreLocation
    }
    
    override property get CurrentLocation () : pcf.RateRoutineNewVariablePopup {
      return super.CurrentLocation as pcf.RateRoutineNewVariablePopup
    }
    
    property get costDataUsages () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return getVariableValue("costDataUsages", 0) as java.util.List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set costDataUsages ($arg :  java.util.List<gw.rating.flow.util.InScopeUsage>) {
      setVariableValue("costDataUsages", 0, $arg)
    }
    
    property get step () : CalcStepDefinition {
      return getVariableValue("step", 0) as CalcStepDefinition
    }
    
    property set step ($arg :  CalcStepDefinition) {
      setVariableValue("step", 0, $arg)
    }
    
    
  }
  
  
}