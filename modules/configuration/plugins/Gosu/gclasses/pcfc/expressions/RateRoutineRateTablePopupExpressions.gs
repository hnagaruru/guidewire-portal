package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineRateTablePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineRateTablePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineRateTablePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateRoutineRateTablePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineRateTablePopup.pcf: line 175, column 49
    function def_onEnter_60 (def :  pcf.RateTableArgumentsMenuItemSet) : void {
      def.onEnter(operand.TableCode, arg, paramInScopeUsageMap,routine.PolicyLinePatternCode,availLocalVariables)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineRateTablePopup.pcf: line 175, column 49
    function def_refreshVariables_61 (def :  pcf.RateTableArgumentsMenuItemSet) : void {
      def.refreshVariables(operand.TableCode, arg, paramInScopeUsageMap,routine.PolicyLinePatternCode,availLocalVariables)
    }
    
    // 'value' attribute on TextCell (id=SubstituteSourceValue_Cell) at RateRoutineRateTablePopup.pcf: line 170, column 44
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      arg.ArgumentSource = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=SubstituteSourceValue_Cell) at RateRoutineRateTablePopup.pcf: line 170, column 44
    function editable_62 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutineFunctionPopupHelper.sourceValueEditable(arg)
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineRateTablePopup.pcf: line 172, column 57
    function onChange_59 () : void {
      arg.OverrideSource = true
    }
    
    // 'validationExpression' attribute on TextCell (id=SubstituteSourceValue_Cell) at RateRoutineRateTablePopup.pcf: line 170, column 44
    function validationExpression_63 () : java.lang.Object {
      return gw.pcf.rating.flow.RateRoutinePopupHelper.untypedConstantValidationExpression(arg)
    }
    
    // 'value' attribute on TextCell (id=Parameter_Cell) at RateRoutineRateTablePopup.pcf: line 156, column 59
    function valueRoot_54 () : java.lang.Object {
      return arg.RateTableMatchOp
    }
    
    // 'value' attribute on TextCell (id=DefaultSource0_Cell) at RateRoutineRateTablePopup.pcf: line 161, column 86
    function valueRoot_57 () : java.lang.Object {
      return arg.ArgumentSourceFromTableDefs.ArgumentSourceWrapper
    }
    
    // 'value' attribute on TextCell (id=SubstituteSourceValue_Cell) at RateRoutineRateTablePopup.pcf: line 170, column 44
    function valueRoot_66 () : java.lang.Object {
      return arg
    }
    
    // 'value' attribute on TextCell (id=Parameter_Cell) at RateRoutineRateTablePopup.pcf: line 156, column 59
    function value_53 () : java.lang.String {
      return arg.RateTableMatchOp.DisplayText
    }
    
    // 'value' attribute on TextCell (id=DefaultSource0_Cell) at RateRoutineRateTablePopup.pcf: line 161, column 86
    function value_56 () : java.lang.String {
      return arg.ArgumentSourceFromTableDefs.ArgumentSourceWrapper.Label
    }
    
    // 'value' attribute on TextCell (id=SubstituteSourceValue_Cell) at RateRoutineRateTablePopup.pcf: line 170, column 44
    function value_64 () : java.lang.String {
      return arg.ArgumentSource
    }
    
    property get arg () : entity.CalcStepDefinitionArgument {
      return getIteratedValue(1) as entity.CalcStepDefinitionArgument
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineRateTablePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineRateTablePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (operand :  CalcStepDefinitionOperand, routine :  CalcRoutineDefinition, paramInScopeUsageMap :  java.util.Map<CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>>, targetDataTypes :  java.util.Set<gw.lang.reflect.IType>) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineRateTableEditUpdate) at RateRoutineRateTablePopup.pcf: line 75, column 56
    function action_11 () : void {
      popupHelper.commitTableChanges()
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineRateTableEditCancel) at RateRoutineRateTablePopup.pcf: line 79, column 81
    function action_12 () : void {
      CurrentLocation.cancel()
    }
    
    // 'afterEnter' attribute on Popup (id=RateRoutineRateTablePopup) at RateRoutineRateTablePopup.pcf: line 10, column 90
    function afterEnter_72 () : void {
      operand.changeToOperandType(TC_RATETABLE)
    }
    
    // 'available' attribute on ToolbarButton (id=RateRoutineRateTableEditUpdate) at RateRoutineRateTablePopup.pcf: line 75, column 56
    function available_9 () : java.lang.Boolean {
      return not hasValidationError
    }
    
    // 'value' attribute on RangeInput (id=RateTable_Input) at RateRoutineRateTablePopup.pcf: line 101, column 59
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      operand.TableCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=RateTableArgSrcSet_Input) at RateRoutineRateTablePopup.pcf: line 114, column 186
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      operand.ArgumentSourceSetCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=RateFactor_Input) at RateRoutineRateTablePopup.pcf: line 127, column 57
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      operand.RateFactorColName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineRateTablePopup.pcf: line 25, column 57
    function initialValue_0 () : java.util.List<RateTableDefinition> {
      return operand.CalcStep.CalcRoutineDefinition.availableTables()
    }
    
    // 'initialValue' attribute on Variable at RateRoutineRateTablePopup.pcf: line 29, column 50
    function initialValue_1 () : java.util.Map<String, String> {
      return gw.pcf.rating.flow.RateRoutineRateTablePopupHelper.parseRateTables(rateTabDefs)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineRateTablePopup.pcf: line 33, column 78
    function initialValue_2 () : java.util.Map<String, java.util.Map<String, String>> {
      return gw.pcf.rating.flow.RateRoutineRateTablePopupHelper.parseRateTablesForArgSrcSets(rateTabDefs)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineRateTablePopup.pcf: line 43, column 73
    function initialValue_3 () : java.util.Map<String, java.util.List<String>> {
      return gw.pcf.rating.flow.RateRoutineRateTablePopupHelper.initTableCodeFactorColNamesMap(rateTabDefs)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineRateTablePopup.pcf: line 47, column 112
    function initialValue_4 () : java.util.Map<CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>> {
      return {}
    }
    
    // 'initialValue' attribute on Variable at RateRoutineRateTablePopup.pcf: line 52, column 66
    function initialValue_5 () : gw.pcf.rating.flow.RateRoutineRateTablePopupHelper {
      return new gw.pcf.rating.flow.RateRoutineRateTablePopupHelper(CurrentLocation, rateTabDefs, routine, operand, tableCodeFactorColNamesMap)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineRateTablePopup.pcf: line 56, column 66
    function initialValue_6 () : java.util.List<gw.rating.flow.LocalVariable> {
      return operand.CalcStep.getAllExistingVariableNames(true)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineRateTablePopup.pcf: line 61, column 24
    function initialValue_7 () : String[] {
      return popupHelper.getTargetableTables(targetDataTypes)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineRateTablePopup.pcf: line 66, column 23
    function initialValue_8 () : boolean {
      return not gw.web.rating.RateRoutineRateTablePopupUIHelper.performValidation(operand, popupHelper, targetDataTypes)
    }
    
    // 'label' attribute on AlertBar (id=NoTargetableRateTableAlert) at RateRoutineRateTablePopup.pcf: line 84, column 52
    function label_14 () : java.lang.Object {
      return popupHelper.noRateTableError(targetDataTypes)
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineRateTablePopup.pcf: line 103, column 72
    function onChange_17 () : void {
      popupHelper.onTableChange(targetDataTypes)
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineRateTablePopup.pcf: line 116, column 69
    function onChange_28 () : void {
      popupHelper.onArgumentSourceSetChange()
    }
    
    // 'optionLabel' attribute on RangeInput (id=RateTable_Input) at RateRoutineRateTablePopup.pcf: line 101, column 59
    function optionLabel_22 (VALUE :  java.lang.String) : java.lang.String {
      return tableCodeNameMap.get(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=RateTableArgSrcSet_Input) at RateRoutineRateTablePopup.pcf: line 114, column 186
    function optionLabel_33 (VALUE :  java.lang.String) : java.lang.String {
      return tableArgSrcCodeNameMap?.get(operand.TableCode)?.get(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=RateFactor_Input) at RateRoutineRateTablePopup.pcf: line 127, column 57
    function optionLabel_43 (VALUE :  java.lang.String) : java.lang.String {
      return popupHelper.getColumnFactorLabel(VALUE)
    }
    
    // 'sortBy' attribute on IteratorSort at RateRoutineRateTablePopup.pcf: line 150, column 30
    function sortBy_49 (arg :  entity.CalcStepDefinitionArgument) : java.lang.Object {
      return arg.FirstMatchingRateTableColumn.SortOrder
    }
    
    // 'value' attribute on TextCell (id=Parameter_Cell) at RateRoutineRateTablePopup.pcf: line 156, column 59
    function sortValue_50 (arg :  entity.CalcStepDefinitionArgument) : java.lang.Object {
      return arg.RateTableMatchOp.DisplayText
    }
    
    // 'value' attribute on TextCell (id=DefaultSource0_Cell) at RateRoutineRateTablePopup.pcf: line 161, column 86
    function sortValue_51 (arg :  entity.CalcStepDefinitionArgument) : java.lang.Object {
      return arg.ArgumentSourceFromTableDefs.ArgumentSourceWrapper.Label
    }
    
    // 'valueRange' attribute on RangeInput (id=RateTable_Input) at RateRoutineRateTablePopup.pcf: line 101, column 59
    function valueRange_23 () : java.lang.Object {
      return targetableTableTypes
    }
    
    // 'valueRange' attribute on RangeInput (id=RateTableArgSrcSet_Input) at RateRoutineRateTablePopup.pcf: line 114, column 186
    function valueRange_34 () : java.lang.Object {
      return popupHelper.getArgumentSourceSetRange()
    }
    
    // 'valueRange' attribute on RangeInput (id=RateFactor_Input) at RateRoutineRateTablePopup.pcf: line 127, column 57
    function valueRange_44 () : java.lang.Object {
      return popupHelper.getFactorRange(operand.TableCode, targetDataTypes)
    }
    
    // 'value' attribute on RangeInput (id=RateTable_Input) at RateRoutineRateTablePopup.pcf: line 101, column 59
    function valueRoot_21 () : java.lang.Object {
      return operand
    }
    
    // 'value' attribute on TextInput (id=Usage_Input) at RateRoutineRateTablePopup.pcf: line 91, column 97
    function value_15 () : java.lang.String {
      return gw.pcf.rating.flow.RateRoutineUsageHelper.getValueDelegateUsage(operand)
    }
    
    // 'value' attribute on RangeInput (id=RateTable_Input) at RateRoutineRateTablePopup.pcf: line 101, column 59
    function value_19 () : java.lang.String {
      return operand.TableCode
    }
    
    // 'value' attribute on RangeInput (id=RateTableArgSrcSet_Input) at RateRoutineRateTablePopup.pcf: line 114, column 186
    function value_30 () : java.lang.String {
      return operand.ArgumentSourceSetCode
    }
    
    // 'value' attribute on RangeInput (id=RateFactor_Input) at RateRoutineRateTablePopup.pcf: line 127, column 57
    function value_40 () : java.lang.String {
      return operand.RateFactorColName
    }
    
    // 'value' attribute on RowIterator (id=ArgSources) at RateRoutineRateTablePopup.pcf: line 147, column 49
    function value_70 () : entity.CalcStepDefinitionArgument[] {
      return operand.ArgumentSources
    }
    
    // 'valueRange' attribute on RangeInput (id=RateTable_Input) at RateRoutineRateTablePopup.pcf: line 101, column 59
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RateTable_Input) at RateRoutineRateTablePopup.pcf: line 101, column 59
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RateTableArgSrcSet_Input) at RateRoutineRateTablePopup.pcf: line 114, column 186
    function verifyValueRangeIsAllowedType_35 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RateTableArgSrcSet_Input) at RateRoutineRateTablePopup.pcf: line 114, column 186
    function verifyValueRangeIsAllowedType_35 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RateFactor_Input) at RateRoutineRateTablePopup.pcf: line 127, column 57
    function verifyValueRangeIsAllowedType_45 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RateFactor_Input) at RateRoutineRateTablePopup.pcf: line 127, column 57
    function verifyValueRangeIsAllowedType_45 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RateTable_Input) at RateRoutineRateTablePopup.pcf: line 101, column 59
    function verifyValueRange_25 () : void {
      var __valueRangeArg = targetableTableTypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=RateTableArgSrcSet_Input) at RateRoutineRateTablePopup.pcf: line 114, column 186
    function verifyValueRange_36 () : void {
      var __valueRangeArg = popupHelper.getArgumentSourceSetRange()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_35(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=RateFactor_Input) at RateRoutineRateTablePopup.pcf: line 127, column 57
    function verifyValueRange_46 () : void {
      var __valueRangeArg = popupHelper.getFactorRange(operand.TableCode, targetDataTypes)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_45(__valueRangeArg)
    }
    
    // 'visible' attribute on ToolbarButton (id=RateRoutineRateTableEditUpdate) at RateRoutineRateTablePopup.pcf: line 75, column 56
    function visible_10 () : java.lang.Boolean {
      return targetableTableTypes.Count > 0
    }
    
    // 'visible' attribute on AlertBar (id=NoTargetableRateTableAlert) at RateRoutineRateTablePopup.pcf: line 84, column 52
    function visible_13 () : java.lang.Boolean {
      return targetableTableTypes.Count == 0
    }
    
    // 'visible' attribute on RangeInput (id=RateTableArgSrcSet_Input) at RateRoutineRateTablePopup.pcf: line 114, column 186
    function visible_29 () : java.lang.Boolean {
      return popupHelper?.getArgumentSourceSetRange().Count > 1 // Only expose if there's a choice to be made //tableArgSrcCodeNameMap?.get(operand.TableCode)?.get(VALUE)
    }
    
    // 'visible' attribute on RangeInput (id=RateFactor_Input) at RateRoutineRateTablePopup.pcf: line 127, column 57
    function visible_39 () : java.lang.Boolean {
      return operand.TableCode.length > 0
    }
    
    // 'visible' attribute on RowIterator (id=ArgSources) at RateRoutineRateTablePopup.pcf: line 147, column 49
    function visible_52 () : java.lang.Boolean {
      return operand.TableCode != null
    }
    
    override property get CurrentLocation () : pcf.RateRoutineRateTablePopup {
      return super.CurrentLocation as pcf.RateRoutineRateTablePopup
    }
    
    property get availLocalVariables () : java.util.List<gw.rating.flow.LocalVariable> {
      return getVariableValue("availLocalVariables", 0) as java.util.List<gw.rating.flow.LocalVariable>
    }
    
    property set availLocalVariables ($arg :  java.util.List<gw.rating.flow.LocalVariable>) {
      setVariableValue("availLocalVariables", 0, $arg)
    }
    
    property get hasValidationError () : boolean {
      return getVariableValue("hasValidationError", 0) as java.lang.Boolean
    }
    
    property set hasValidationError ($arg :  boolean) {
      setVariableValue("hasValidationError", 0, $arg)
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
    
    property get popupHelper () : gw.pcf.rating.flow.RateRoutineRateTablePopupHelper {
      return getVariableValue("popupHelper", 0) as gw.pcf.rating.flow.RateRoutineRateTablePopupHelper
    }
    
    property set popupHelper ($arg :  gw.pcf.rating.flow.RateRoutineRateTablePopupHelper) {
      setVariableValue("popupHelper", 0, $arg)
    }
    
    property get rateTabDefs () : java.util.List<RateTableDefinition> {
      return getVariableValue("rateTabDefs", 0) as java.util.List<RateTableDefinition>
    }
    
    property set rateTabDefs ($arg :  java.util.List<RateTableDefinition>) {
      setVariableValue("rateTabDefs", 0, $arg)
    }
    
    property get routine () : CalcRoutineDefinition {
      return getVariableValue("routine", 0) as CalcRoutineDefinition
    }
    
    property set routine ($arg :  CalcRoutineDefinition) {
      setVariableValue("routine", 0, $arg)
    }
    
    property get tableArgSrcCodeNameMap () : java.util.Map<String, java.util.Map<String, String>> {
      return getVariableValue("tableArgSrcCodeNameMap", 0) as java.util.Map<String, java.util.Map<String, String>>
    }
    
    property set tableArgSrcCodeNameMap ($arg :  java.util.Map<String, java.util.Map<String, String>>) {
      setVariableValue("tableArgSrcCodeNameMap", 0, $arg)
    }
    
    property get tableCode () : String {
      return getVariableValue("tableCode", 0) as String
    }
    
    property set tableCode ($arg :  String) {
      setVariableValue("tableCode", 0, $arg)
    }
    
    property get tableCodeFactorColNamesMap () : java.util.Map<String, java.util.List<String>> {
      return getVariableValue("tableCodeFactorColNamesMap", 0) as java.util.Map<String, java.util.List<String>>
    }
    
    property set tableCodeFactorColNamesMap ($arg :  java.util.Map<String, java.util.List<String>>) {
      setVariableValue("tableCodeFactorColNamesMap", 0, $arg)
    }
    
    property get tableCodeNameMap () : java.util.Map<String, String> {
      return getVariableValue("tableCodeNameMap", 0) as java.util.Map<String, String>
    }
    
    property set tableCodeNameMap ($arg :  java.util.Map<String, String>) {
      setVariableValue("tableCodeNameMap", 0, $arg)
    }
    
    property get targetDataTypes () : java.util.Set<gw.lang.reflect.IType> {
      return getVariableValue("targetDataTypes", 0) as java.util.Set<gw.lang.reflect.IType>
    }
    
    property set targetDataTypes ($arg :  java.util.Set<gw.lang.reflect.IType>) {
      setVariableValue("targetDataTypes", 0, $arg)
    }
    
    property get targetableTableTypes () : String[] {
      return getVariableValue("targetableTableTypes", 0) as String[]
    }
    
    property set targetableTableTypes ($arg :  String[]) {
      setVariableValue("targetableTableTypes", 0, $arg)
    }
    
    
  }
  
  
}