package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineFunctionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineFunctionPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineFunctionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateRoutineFunctionPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineFunctionPopup.pcf: line 117, column 47
    function def_onEnter_25 (def :  pcf.RatingFunctionArgumentsMenuItemSet) : void {
      def.onEnter(operand.FunctionName, rateRoutineParam, paramInScopeUsageMap,operand.CalcStep.CalcRoutineDefinition.PolicyLinePatternCode,availLocalVariables)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineFunctionPopup.pcf: line 117, column 47
    function def_refreshVariables_26 (def :  pcf.RatingFunctionArgumentsMenuItemSet) : void {
      def.refreshVariables(operand.FunctionName, rateRoutineParam, paramInScopeUsageMap,operand.CalcStep.CalcRoutineDefinition.PolicyLinePatternCode,availLocalVariables)
    }
    
    // 'value' attribute on TextCell (id=Operand_Cell) at RateRoutineFunctionPopup.pcf: line 112, column 57
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateRoutineParam.ArgumentSource = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=Operand_Cell) at RateRoutineFunctionPopup.pcf: line 112, column 57
    function editable_27 () : java.lang.Boolean {
      return helper.sourceValueEditable(rateRoutineParam)
    }
    
    // 'label' attribute on Link (id=rateRoutineParamType) at RateRoutineFunctionPopup.pcf: line 102, column 68
    function label_22 () : java.lang.Object {
      return helper.getParamTypeRelativeName(rateRoutineParam)
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineFunctionPopup.pcf: line 114, column 70
    function onChange_24 () : void {
      rateRoutineParam.OverrideSource = true
    }
    
    // 'tooltip' attribute on Link (id=rateRoutineParamType) at RateRoutineFunctionPopup.pcf: line 102, column 68
    function tooltip_23 () : java.lang.String {
      return helper.getParamType(rateRoutineParam)
    }
    
    // 'validationExpression' attribute on TextCell (id=Operand_Cell) at RateRoutineFunctionPopup.pcf: line 112, column 57
    function validationExpression_28 () : java.lang.Object {
      return gw.pcf.rating.flow.RateRoutinePopupHelper.untypedConstantValidationExpression(rateRoutineParam)
    }
    
    // 'value' attribute on TextCell (id=rateRoutineParam_Cell) at RateRoutineFunctionPopup.pcf: line 95, column 53
    function valueRoot_20 () : java.lang.Object {
      return rateRoutineParam
    }
    
    // 'value' attribute on TextCell (id=rateRoutineParam_Cell) at RateRoutineFunctionPopup.pcf: line 95, column 53
    function value_19 () : java.lang.String {
      return rateRoutineParam.Parameter
    }
    
    // 'value' attribute on TextCell (id=Operand_Cell) at RateRoutineFunctionPopup.pcf: line 112, column 57
    function value_29 () : java.lang.String {
      return rateRoutineParam.ArgumentSource
    }
    
    property get rateRoutineParam () : entity.CalcStepDefinitionArgument {
      return getIteratedValue(1) as entity.CalcStepDefinitionArgument
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineFunctionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineFunctionPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (operand :  CalcStepDefinitionOperand) : int {
      return 0
    }
    
    static function __constructorIndex (operand :  CalcStepDefinitionOperand, targetDataTypes :  java.util.Set<gw.lang.reflect.IType>) : int {
      return 1
    }
    
    static function __constructorIndex (operand :  CalcStepDefinitionOperand, targetDataTypes :  java.util.Set<gw.lang.reflect.IType>, paramInScopeUsageMap :  java.util.Map<CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>>) : int {
      return 2
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineFunctionEditUpdate) at RateRoutineFunctionPopup.pcf: line 42, column 81
    function action_3 () : void {
      helper.commitFunctionChanges()
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineFunctionEditCancel) at RateRoutineFunctionPopup.pcf: line 46, column 81
    function action_4 () : void {
      CurrentLocation.cancel()
    }
    
    // 'afterEnter' attribute on Popup (id=RateRoutineFunctionPopup) at RateRoutineFunctionPopup.pcf: line 10, column 93
    function afterEnter_37 () : void {
      helper.initPopup()
    }
    
    // 'value' attribute on RangeInput (id=Functions_Input) at RateRoutineFunctionPopup.pcf: line 62, column 42
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      operand.FunctionName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineFunctionPopup.pcf: line 24, column 112
    function initialValue_0 () : java.util.Map<CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>> {
      return {}
    }
    
    // 'initialValue' attribute on Variable at RateRoutineFunctionPopup.pcf: line 31, column 65
    function initialValue_1 () : gw.pcf.rating.flow.RateRoutineFunctionPopupHelper {
      return new gw.pcf.rating.flow.RateRoutineFunctionPopupHelper(CurrentLocation, operand)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineFunctionPopup.pcf: line 35, column 66
    function initialValue_2 () : java.util.List<gw.rating.flow.LocalVariable> {
      return operand.CalcStep.getAllExistingVariableNames(true)
    }
    
    // 'label' attribute on Link (id=Returns) at RateRoutineFunctionPopup.pcf: line 72, column 49
    function label_16 () : java.lang.Object {
      return helper.getFunctionReturnType()
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineFunctionPopup.pcf: line 64, column 174
    function onChange_7 () : void {
      gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, entity.CalcStepDefinitionArgument); operand.resetParameterNameAndTypeForRateFunction()
    }
    
    // 'optionLabel' attribute on RangeInput (id=Functions_Input) at RateRoutineFunctionPopup.pcf: line 62, column 42
    function optionLabel_11 (VALUE :  java.lang.String) : java.lang.String {
      return helper.formatFunctionName( VALUE )
    }
    
    // 'tooltip' attribute on Link (id=Returns) at RateRoutineFunctionPopup.pcf: line 72, column 49
    function tooltip_17 () : java.lang.String {
      return helper.getReturnType()
    }
    
    // 'valueRange' attribute on RangeInput (id=Functions_Input) at RateRoutineFunctionPopup.pcf: line 62, column 42
    function valueRange_12 () : java.lang.Object {
      return helper.getFunctionNames(targetDataTypes != null ? targetDataTypes : {})
    }
    
    // 'value' attribute on RangeInput (id=Functions_Input) at RateRoutineFunctionPopup.pcf: line 62, column 42
    function valueRoot_10 () : java.lang.Object {
      return operand
    }
    
    // 'value' attribute on RowIterator (id=ArgSourcesForRateFunction) at RateRoutineFunctionPopup.pcf: line 88, column 52
    function value_35 () : entity.CalcStepDefinitionArgument[] {
      return operand.ArgumentSources
    }
    
    // 'value' attribute on TextInput (id=Usage_Input) at RateRoutineFunctionPopup.pcf: line 53, column 48
    function value_5 () : java.lang.String {
      return helper.getFunctionUsage()
    }
    
    // 'value' attribute on RangeInput (id=Functions_Input) at RateRoutineFunctionPopup.pcf: line 62, column 42
    function value_8 () : java.lang.String {
      return operand.FunctionName
    }
    
    // 'valueRange' attribute on RangeInput (id=Functions_Input) at RateRoutineFunctionPopup.pcf: line 62, column 42
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Functions_Input) at RateRoutineFunctionPopup.pcf: line 62, column 42
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Functions_Input) at RateRoutineFunctionPopup.pcf: line 62, column 42
    function verifyValueRange_14 () : void {
      var __valueRangeArg = helper.getFunctionNames(targetDataTypes != null ? targetDataTypes : {})
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'visible' attribute on RowIterator (id=ArgSourcesForRateFunction) at RateRoutineFunctionPopup.pcf: line 88, column 52
    function visible_18 () : java.lang.Boolean {
      return operand.FunctionName != null
    }
    
    // 'visible' attribute on ListViewPanel at RateRoutineFunctionPopup.pcf: line 80, column 76
    function visible_36 () : java.lang.Boolean {
      return operand.OperandType == CalcStepOperandType.TC_RATEFUNC
    }
    
    override property get CurrentLocation () : pcf.RateRoutineFunctionPopup {
      return super.CurrentLocation as pcf.RateRoutineFunctionPopup
    }
    
    property get availLocalVariables () : java.util.List<gw.rating.flow.LocalVariable> {
      return getVariableValue("availLocalVariables", 0) as java.util.List<gw.rating.flow.LocalVariable>
    }
    
    property set availLocalVariables ($arg :  java.util.List<gw.rating.flow.LocalVariable>) {
      setVariableValue("availLocalVariables", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.flow.RateRoutineFunctionPopupHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.flow.RateRoutineFunctionPopupHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.flow.RateRoutineFunctionPopupHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get operand () : CalcStepDefinitionOperand {
      return getVariableValue("operand", 0) as CalcStepDefinitionOperand
    }
    
    property set operand ($arg :  CalcStepDefinitionOperand) {
      setVariableValue("operand", 0, $arg)
    }
    
    property get paramInScopeUsageMap () : java.util.Map<CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>> {
      return getVariableValue("paramInScopeUsageMap", 0) as java.util.Map<CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>>
    }
    
    property set paramInScopeUsageMap ($arg :  java.util.Map<CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>>) {
      setVariableValue("paramInScopeUsageMap", 0, $arg)
    }
    
    property get targetDataTypes () : java.util.Set<gw.lang.reflect.IType> {
      return getVariableValue("targetDataTypes", 0) as java.util.Set<gw.lang.reflect.IType>
    }
    
    property set targetDataTypes ($arg :  java.util.Set<gw.lang.reflect.IType>) {
      setVariableValue("targetDataTypes", 0, $arg)
    }
    
    
  }
  
  
}