package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineConditionalPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineConditionalPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineConditionalPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateRoutineConditionalPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=FirstOperand) at RateRoutineConditionalPopup.pcf: line 116, column 169
    function def_onEnter_34 (def :  pcf.RateRoutineConditionalPopupFirstOperand_constant) : void {
      def.onEnter(conditionalOperand, routine, paramInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on ModalCellRef (id=FirstOperand) at RateRoutineConditionalPopup.pcf: line 116, column 169
    function def_onEnter_36 (def :  pcf.RateRoutineConditionalPopupFirstOperand_variable) : void {
      def.onEnter(conditionalOperand, routine, paramInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on ModalCellRef (id=SecondOperand) at RateRoutineConditionalPopup.pcf: line 158, column 186
    function def_onEnter_74 (def :  pcf.RateRoutineConditionalPopupSecondOperand_constant) : void {
      def.onEnter(conditionalOperand, routine, paramInScopeUsageMap, costDataUsages, orderedSteps, popUpHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=SecondOperand) at RateRoutineConditionalPopup.pcf: line 158, column 186
    function def_onEnter_76 (def :  pcf.RateRoutineConditionalPopupSecondOperand_variable) : void {
      def.onEnter(conditionalOperand, routine, paramInScopeUsageMap, costDataUsages, orderedSteps, popUpHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=FirstOperand) at RateRoutineConditionalPopup.pcf: line 116, column 169
    function def_refreshVariables_35 (def :  pcf.RateRoutineConditionalPopupFirstOperand_constant) : void {
      def.refreshVariables(conditionalOperand, routine, paramInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on ModalCellRef (id=FirstOperand) at RateRoutineConditionalPopup.pcf: line 116, column 169
    function def_refreshVariables_37 (def :  pcf.RateRoutineConditionalPopupFirstOperand_variable) : void {
      def.refreshVariables(conditionalOperand, routine, paramInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on ModalCellRef (id=SecondOperand) at RateRoutineConditionalPopup.pcf: line 158, column 186
    function def_refreshVariables_75 (def :  pcf.RateRoutineConditionalPopupSecondOperand_constant) : void {
      def.refreshVariables(conditionalOperand, routine, paramInScopeUsageMap, costDataUsages, orderedSteps, popUpHelper)
    }
    
    // 'def' attribute on ModalCellRef (id=SecondOperand) at RateRoutineConditionalPopup.pcf: line 158, column 186
    function def_refreshVariables_77 (def :  pcf.RateRoutineConditionalPopupSecondOperand_variable) : void {
      def.refreshVariables(conditionalOperand, routine, paramInScopeUsageMap, costDataUsages, orderedSteps, popUpHelper)
    }
    
    // 'value' attribute on TypeKeyCell (id=operator_Cell) at RateRoutineConditionalPopup.pcf: line 96, column 78
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionalOperand.First.OperatorType = (__VALUE_TO_SET as typekey.CalcStepOperatorType)
    }
    
    // 'value' attribute on TextCell (id=op1LeftParens_Cell) at RateRoutineConditionalPopup.pcf: line 102, column 72
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionalOperand.First.LeftParenthesisGroup = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=leftNegated_Cell) at RateRoutineConditionalPopup.pcf: line 110, column 129
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionalOperand.First.LogicalNot = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=op1RightParens_Cell) at RateRoutineConditionalPopup.pcf: line 122, column 73
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionalOperand.First.RightParenthesisGroup = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=comparator_Cell) at RateRoutineConditionalPopup.pcf: line 135, column 79
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionalOperand.Second.OperatorType = (__VALUE_TO_SET as typekey.CalcStepOperatorType)
    }
    
    // 'value' attribute on TextCell (id=op2LeftParens_Cell) at RateRoutineConditionalPopup.pcf: line 143, column 73
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionalOperand.Second.LeftParenthesisGroup = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=rightNegated_Cell) at RateRoutineConditionalPopup.pcf: line 152, column 187
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionalOperand.Second.LogicalNot = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=op2RightParens_Cell) at RateRoutineConditionalPopup.pcf: line 164, column 74
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      conditionalOperand.Second.RightParenthesisGroup = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyCell (id=operator_Cell) at RateRoutineConditionalPopup.pcf: line 96, column 78
    function editable_10 () : java.lang.Boolean {
      return conditionalOperand.First.OperandOrder > 1
    }
    
    // 'editable' attribute on RangeCell (id=comparator_Cell) at RateRoutineConditionalPopup.pcf: line 135, column 79
    function editable_44 () : java.lang.Boolean {
      return not conditionalOperand.First.OperandName.Empty
    }
    
    // 'editable' attribute on TextCell (id=op2LeftParens_Cell) at RateRoutineConditionalPopup.pcf: line 143, column 73
    function editable_56 () : java.lang.Boolean {
      return conditionalOperand.Second.OperatorType.Value != null
    }
    
    // 'filter' attribute on TypeKeyCell (id=operator_Cell) at RateRoutineConditionalPopup.pcf: line 96, column 78
    function filter_17 (VALUE :  typekey.CalcStepOperatorType, VALUES :  typekey.CalcStepOperatorType[]) : java.lang.Boolean {
      return CalcStepOperatorType.TF_CONDITIONALS.TypeKeys.contains(VALUE)
    }
    
    // 'filter' attribute on RangeCell (id=comparator_Cell) at RateRoutineConditionalPopup.pcf: line 135, column 79
    function filter_49 (VALUE :  typekey.CalcStepOperatorType, VALUES :  typekey.CalcStepOperatorType[]) : java.lang.Boolean {
      return conditionalOperand.First.IsTypeKey ? CalcStepOperatorType.TF_TYPEKEYCOMPARATORS.TypeKeys.contains(VALUE) : CalcStepOperatorType.TF_COMPARATORS.TypeKeys.contains(VALUE)
    }
    
    // 'mode' attribute on ModalCellRef (id=FirstOperand) at RateRoutineConditionalPopup.pcf: line 116, column 169
    function mode_38 () : java.lang.Object {
      return ((conditionalOperand.First.OperandType == null) or (conditionalOperand.First.IsEditableConstant)) ? "constant" : "variable"
    }
    
    // 'mode' attribute on ModalCellRef (id=SecondOperand) at RateRoutineConditionalPopup.pcf: line 158, column 186
    function mode_78 () : java.lang.Object {
      return (conditionalOperand.Second.OperatorType.Value != null and not popUpHelper.showFreeFormOperand(conditionalOperand)) ? "variable" : "constant"
    }
    
    // 'optionLabel' attribute on RangeCell (id=leftNegated_Cell) at RateRoutineConditionalPopup.pcf: line 110, column 129
    function optionLabel_29 (VALUE :  java.lang.Boolean) : java.lang.String {
      return VALUE ? DisplayKey.get("Web.Rating.Flow.CalcRoutine.LogicalNot") : ""
    }
    
    // 'outputConversion' attribute on TypeKeyCell (id=operator_Cell) at RateRoutineConditionalPopup.pcf: line 96, column 78
    function outputConversion_12 (VALUE :  typekey.CalcStepOperatorType) : java.lang.String {
      return VALUE.LabelForDisplay
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=op1LeftParens_Cell) at RateRoutineConditionalPopup.pcf: line 102, column 72
    function requestValidationExpression_20 (VALUE :  java.lang.String) : java.lang.Object {
      return (VALUE.toCharArray().toList().countWhere(\ c -> c != '(')) == 0 ? null: DisplayKey.get("Web.Rating.Flow.CalcRoutine.OnlyLeftParenthesisHere")
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=op1RightParens_Cell) at RateRoutineConditionalPopup.pcf: line 122, column 73
    function requestValidationExpression_39 (VALUE :  java.lang.String) : java.lang.Object {
      return VALUE.toCharArray().toList().countWhere(\ c -> c != ')') == 0 ? null: DisplayKey.get("Web.Rating.Flow.CalcRoutine.OnlyRightParenthesisHere")
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=op2LeftParens_Cell) at RateRoutineConditionalPopup.pcf: line 143, column 73
    function requestValidationExpression_57 (VALUE :  java.lang.String) : java.lang.Object {
      return VALUE.toCharArray().toList().countWhere(\ c -> c != '(') == 0 ? null: DisplayKey.get("Web.Rating.Flow.CalcRoutine.OnlyLeftParenthesisHere")
    }
    
    // 'valueRange' attribute on RangeCell (id=leftNegated_Cell) at RateRoutineConditionalPopup.pcf: line 110, column 129
    function valueRange_30 () : java.lang.Object {
      return {true,false}
    }
    
    // 'valueRange' attribute on RangeCell (id=comparator_Cell) at RateRoutineConditionalPopup.pcf: line 135, column 79
    function valueRange_51 () : java.lang.Object {
      return CalcStepOperatorType.getTypeKeys(false)
    }
    
    // 'value' attribute on TypeKeyCell (id=operator_Cell) at RateRoutineConditionalPopup.pcf: line 96, column 78
    function valueRoot_16 () : java.lang.Object {
      return conditionalOperand.First
    }
    
    // 'value' attribute on RangeCell (id=comparator_Cell) at RateRoutineConditionalPopup.pcf: line 135, column 79
    function valueRoot_48 () : java.lang.Object {
      return conditionalOperand.Second
    }
    
    // 'value' attribute on TypeKeyCell (id=operator_Cell) at RateRoutineConditionalPopup.pcf: line 96, column 78
    function value_14 () : typekey.CalcStepOperatorType {
      return conditionalOperand.First.OperatorType
    }
    
    // 'value' attribute on TextCell (id=op1LeftParens_Cell) at RateRoutineConditionalPopup.pcf: line 102, column 72
    function value_21 () : java.lang.String {
      return conditionalOperand.First.LeftParenthesisGroup
    }
    
    // 'value' attribute on RangeCell (id=leftNegated_Cell) at RateRoutineConditionalPopup.pcf: line 110, column 129
    function value_26 () : java.lang.Boolean {
      return conditionalOperand.First.LogicalNot
    }
    
    // 'value' attribute on TextCell (id=op1RightParens_Cell) at RateRoutineConditionalPopup.pcf: line 122, column 73
    function value_40 () : java.lang.String {
      return conditionalOperand.First.RightParenthesisGroup
    }
    
    // 'value' attribute on RangeCell (id=comparator_Cell) at RateRoutineConditionalPopup.pcf: line 135, column 79
    function value_46 () : typekey.CalcStepOperatorType {
      return conditionalOperand.Second.OperatorType
    }
    
    // 'value' attribute on TextCell (id=op2LeftParens_Cell) at RateRoutineConditionalPopup.pcf: line 143, column 73
    function value_58 () : java.lang.String {
      return conditionalOperand.Second.LeftParenthesisGroup
    }
    
    // 'value' attribute on RangeCell (id=rightNegated_Cell) at RateRoutineConditionalPopup.pcf: line 152, column 187
    function value_65 () : java.lang.Boolean {
      return conditionalOperand.Second.LogicalNot
    }
    
    // 'value' attribute on TextCell (id=op2RightParens_Cell) at RateRoutineConditionalPopup.pcf: line 164, column 74
    function value_81 () : java.lang.String {
      return conditionalOperand.Second.RightParenthesisGroup
    }
    
    // 'valueRange' attribute on RangeCell (id=leftNegated_Cell) at RateRoutineConditionalPopup.pcf: line 110, column 129
    function verifyValueRangeIsAllowedType_31 ($$arg :  java.lang.Boolean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=leftNegated_Cell) at RateRoutineConditionalPopup.pcf: line 110, column 129
    function verifyValueRangeIsAllowedType_31 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=comparator_Cell) at RateRoutineConditionalPopup.pcf: line 135, column 79
    function verifyValueRangeIsAllowedType_52 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=comparator_Cell) at RateRoutineConditionalPopup.pcf: line 135, column 79
    function verifyValueRangeIsAllowedType_52 ($$arg :  typekey.CalcStepOperatorType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=rightNegated_Cell) at RateRoutineConditionalPopup.pcf: line 152, column 187
    function verifyValueRangeIsAllowedType_70 ($$arg :  java.lang.Boolean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=rightNegated_Cell) at RateRoutineConditionalPopup.pcf: line 152, column 187
    function verifyValueRangeIsAllowedType_70 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=leftNegated_Cell) at RateRoutineConditionalPopup.pcf: line 110, column 129
    function verifyValueRange_32 () : void {
      var __valueRangeArg = {true,false}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_31(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=comparator_Cell) at RateRoutineConditionalPopup.pcf: line 135, column 79
    function verifyValueRange_53 () : void {
      var __valueRangeArg = CalcStepOperatorType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_52(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=rightNegated_Cell) at RateRoutineConditionalPopup.pcf: line 152, column 187
    function verifyValueRange_71 () : void {
      var __valueRangeArg = {true,false}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_70(__valueRangeArg)
    }
    
    // 'valueVisible' attribute on RangeCell (id=leftNegated_Cell) at RateRoutineConditionalPopup.pcf: line 110, column 129
    function visible_25 () : java.lang.Boolean {
      return popUpHelper.mightBeBoolean(conditionalOperand.First, availLocalVariables) // See method comment
    }
    
    // 'valueVisible' attribute on RangeCell (id=rightNegated_Cell) at RateRoutineConditionalPopup.pcf: line 152, column 187
    function visible_64 () : java.lang.Boolean {
      return conditionalOperand.Second.OperatorType.Value != null and popUpHelper.mightBeBoolean(conditionalOperand.Second, availLocalVariables) // See method comment
    }
    
    property get conditionalOperand () : gw.util.Pair<entity.CalcStepDefinitionOperand, entity.CalcStepDefinitionOperand> {
      return getIteratedValue(1) as gw.util.Pair<entity.CalcStepDefinitionOperand, entity.CalcStepDefinitionOperand>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineConditionalPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineConditionalPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (operand :  CalcStepDefinitionOperand, routine :  CalcRoutineDefinition, paramInScopeUsageMap :  java.util.Map<CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>>, costDataUsages :  java.util.List<gw.rating.flow.util.InScopeUsage>, orderedSteps :  java.util.List<entity.CalcStepDefinition>) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineParamEditUpdate) at RateRoutineConditionalPopup.pcf: line 51, column 81
    function action_4 () : void {
      popUpHelper.commitPopup(availLocalVariables)
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineParamEditCancel) at RateRoutineConditionalPopup.pcf: line 55, column 81
    function action_5 () : void {
      CurrentLocation.cancel()
    }
    
    // 'afterEnter' attribute on Popup (id=RateRoutineConditionalPopup) at RateRoutineConditionalPopup.pcf: line 11, column 92
    function afterEnter_89 () : void {
      operand.OperandType = TC_CONDITIONAL;  if(operand.ConditionalSubOperands.Empty) operand.addNewSubOperand()
    }
    
    // 'beforeCommit' attribute on Popup (id=RateRoutineConditionalPopup) at RateRoutineConditionalPopup.pcf: line 11, column 92
    function beforeCommit_90 (pickedValue :  java.lang.Object) : void {
      popUpHelper.checkForUnbalancedParentheses(); popUpHelper.checkForIllegalTypekeyCombinations()
    }
    
    // 'initialValue' attribute on Variable at RateRoutineConditionalPopup.pcf: line 21, column 68
    function initialValue_0 () : gw.pcf.rating.flow.RateRoutineConditionalPopupHelper {
      return new gw.pcf.rating.flow.RateRoutineConditionalPopupHelper(CurrentLocation, operand, routine)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineConditionalPopup.pcf: line 25, column 50
    function initialValue_1 () : java.util.Map<String, String> {
      return popUpHelper.parseRateTables()
    }
    
    // 'initialValue' attribute on Variable at RateRoutineConditionalPopup.pcf: line 34, column 56
    function initialValue_2 () : List<gw.rating.flow.LocalVariable> {
      return operand.CalcStep.getAllExistingVariableNames(true)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineConditionalPopup.pcf: line 38, column 112
    function initialValue_3 () : java.util.Map<CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>> {
      return {}
    }
    
    // 'value' attribute on TextCell (id=op1LeftParens_Cell) at RateRoutineConditionalPopup.pcf: line 102, column 72
    function sortValue_6 (conditionalOperand :  gw.util.Pair<entity.CalcStepDefinitionOperand, entity.CalcStepDefinitionOperand>) : java.lang.Object {
      return conditionalOperand.First.LeftParenthesisGroup
    }
    
    // 'value' attribute on TextCell (id=op1RightParens_Cell) at RateRoutineConditionalPopup.pcf: line 122, column 73
    function sortValue_7 (conditionalOperand :  gw.util.Pair<entity.CalcStepDefinitionOperand, entity.CalcStepDefinitionOperand>) : java.lang.Object {
      return conditionalOperand.First.RightParenthesisGroup
    }
    
    // 'value' attribute on TextCell (id=op2LeftParens_Cell) at RateRoutineConditionalPopup.pcf: line 143, column 73
    function sortValue_8 (conditionalOperand :  gw.util.Pair<entity.CalcStepDefinitionOperand, entity.CalcStepDefinitionOperand>) : java.lang.Object {
      return conditionalOperand.Second.LeftParenthesisGroup
    }
    
    // 'value' attribute on TextCell (id=op2RightParens_Cell) at RateRoutineConditionalPopup.pcf: line 164, column 74
    function sortValue_9 (conditionalOperand :  gw.util.Pair<entity.CalcStepDefinitionOperand, entity.CalcStepDefinitionOperand>) : java.lang.Object {
      return conditionalOperand.Second.RightParenthesisGroup
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=conditionalOperandIterator) at RateRoutineConditionalPopup.pcf: line 82, column 134
    function toCreateAndAdd_86 () : gw.util.Pair<entity.CalcStepDefinitionOperand, entity.CalcStepDefinitionOperand> {
      return operand.addNewSubOperand()
    }
    
    // 'toRemove' attribute on RowIterator (id=conditionalOperandIterator) at RateRoutineConditionalPopup.pcf: line 82, column 134
    function toRemove_87 (conditionalOperand :  gw.util.Pair<entity.CalcStepDefinitionOperand, entity.CalcStepDefinitionOperand>) : void {
      operand.removeSubOperand(conditionalOperand)
    }
    
    // 'value' attribute on RowIterator (id=conditionalOperandIterator) at RateRoutineConditionalPopup.pcf: line 82, column 134
    function value_88 () : java.util.List<gw.util.Pair<entity.CalcStepDefinitionOperand, entity.CalcStepDefinitionOperand>> {
      return operand.ConditionalSubOperands
    }
    
    override property get CurrentLocation () : pcf.RateRoutineConditionalPopup {
      return super.CurrentLocation as pcf.RateRoutineConditionalPopup
    }
    
    property get availLocalVariables () : List<gw.rating.flow.LocalVariable> {
      return getVariableValue("availLocalVariables", 0) as List<gw.rating.flow.LocalVariable>
    }
    
    property set availLocalVariables ($arg :  List<gw.rating.flow.LocalVariable>) {
      setVariableValue("availLocalVariables", 0, $arg)
    }
    
    property get costDataUsages () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return getVariableValue("costDataUsages", 0) as java.util.List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set costDataUsages ($arg :  java.util.List<gw.rating.flow.util.InScopeUsage>) {
      setVariableValue("costDataUsages", 0, $arg)
    }
    
    property get operand () : CalcStepDefinitionOperand {
      return getVariableValue("operand", 0) as CalcStepDefinitionOperand
    }
    
    property set operand ($arg :  CalcStepDefinitionOperand) {
      setVariableValue("operand", 0, $arg)
    }
    
    property get orderedSteps () : java.util.List<entity.CalcStepDefinition> {
      return getVariableValue("orderedSteps", 0) as java.util.List<entity.CalcStepDefinition>
    }
    
    property set orderedSteps ($arg :  java.util.List<entity.CalcStepDefinition>) {
      setVariableValue("orderedSteps", 0, $arg)
    }
    
    property get paramInScopeUsageMap () : java.util.Map<CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>> {
      return getVariableValue("paramInScopeUsageMap", 0) as java.util.Map<CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>>
    }
    
    property set paramInScopeUsageMap ($arg :  java.util.Map<CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>>) {
      setVariableValue("paramInScopeUsageMap", 0, $arg)
    }
    
    property get popUpHelper () : gw.pcf.rating.flow.RateRoutineConditionalPopupHelper {
      return getVariableValue("popUpHelper", 0) as gw.pcf.rating.flow.RateRoutineConditionalPopupHelper
    }
    
    property set popUpHelper ($arg :  gw.pcf.rating.flow.RateRoutineConditionalPopupHelper) {
      setVariableValue("popUpHelper", 0, $arg)
    }
    
    property get routine () : CalcRoutineDefinition {
      return getVariableValue("routine", 0) as CalcRoutineDefinition
    }
    
    property set routine ($arg :  CalcRoutineDefinition) {
      setVariableValue("routine", 0, $arg)
    }
    
    property get tableCodeNameMap () : java.util.Map<String, String> {
      return getVariableValue("tableCodeNameMap", 0) as java.util.Map<String, String>
    }
    
    property set tableCodeNameMap ($arg :  java.util.Map<String, String>) {
      setVariableValue("tableCodeNameMap", 0, $arg)
    }
    
    
  }
  
  
}