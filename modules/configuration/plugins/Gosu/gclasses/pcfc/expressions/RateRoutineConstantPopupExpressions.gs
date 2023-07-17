package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineConstantPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineConstantPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineConstantPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineConstantPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (arg :  CalcStepDefinitionArgument) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineConstantEditUpdate) at RateRoutineConstantPopup.pcf: line 27, column 81
    function action_1 () : void {
      CurrentLocation.commit()
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineConstantEditCancel) at RateRoutineConstantPopup.pcf: line 31, column 81
    function action_2 () : void {
      CurrentLocation.cancel()
    }
    
    // 'afterCommit' attribute on Popup (id=RateRoutineConstantPopup) at RateRoutineConstantPopup.pcf: line 11, column 40
    function afterCommit_11 (TopLocation :  pcf.api.Location) : void {
      arg.OverrideSource = true; arg.clearDependentValues()
    }
    
    // 'afterEnter' attribute on Popup (id=RateRoutineConstantPopup) at RateRoutineConstantPopup.pcf: line 11, column 40
    function afterEnter_12 () : void {
      arg.changeToOperandType(TC_CONSTANT); arg.maybeClearConstantSubtypeValue(null); 
    }
    
    // 'value' attribute on RangeInput (id=ConstantValueRange_Input) at RateRoutineConstantPopup.pcf: line 44, column 42
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      arg.ConstantValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineConstantPopup.pcf: line 20, column 71
    function initialValue_0 () : java.util.Map<java.lang.String, java.lang.String> {
      return gw.web.admin.forms.FormsUIHelper.wrapKeysWithQuotes(arg)
    }
    
    // 'optionLabel' attribute on RangeInput (id=ConstantValueRange_Input) at RateRoutineConstantPopup.pcf: line 44, column 42
    function optionLabel_6 (VALUE :  java.lang.String) : java.lang.String {
      return valueMap.get(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=ConstantValueRange_Input) at RateRoutineConstantPopup.pcf: line 44, column 42
    function valueRange_7 () : java.lang.Object {
      return valueMap.Keys.toTypedArray()
    }
    
    // 'value' attribute on RangeInput (id=ConstantValueRange_Input) at RateRoutineConstantPopup.pcf: line 44, column 42
    function valueRoot_5 () : java.lang.Object {
      return arg
    }
    
    // 'value' attribute on RangeInput (id=ConstantValueRange_Input) at RateRoutineConstantPopup.pcf: line 44, column 42
    function value_3 () : java.lang.String {
      return arg.ConstantValue
    }
    
    // 'valueRange' attribute on RangeInput (id=ConstantValueRange_Input) at RateRoutineConstantPopup.pcf: line 44, column 42
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ConstantValueRange_Input) at RateRoutineConstantPopup.pcf: line 44, column 42
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ConstantValueRange_Input) at RateRoutineConstantPopup.pcf: line 44, column 42
    function verifyValueRange_9 () : void {
      var __valueRangeArg = valueMap.Keys.toTypedArray()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    override property get CurrentLocation () : pcf.RateRoutineConstantPopup {
      return super.CurrentLocation as pcf.RateRoutineConstantPopup
    }
    
    property get arg () : CalcStepDefinitionArgument {
      return getVariableValue("arg", 0) as CalcStepDefinitionArgument
    }
    
    property set arg ($arg :  CalcStepDefinitionArgument) {
      setVariableValue("arg", 0, $arg)
    }
    
    property get valueMap () : java.util.Map<java.lang.String, java.lang.String> {
      return getVariableValue("valueMap", 0) as java.util.Map<java.lang.String, java.lang.String>
    }
    
    property set valueMap ($arg :  java.util.Map<java.lang.String, java.lang.String>) {
      setVariableValue("valueMap", 0, $arg)
    }
    
    
  }
  
  
}