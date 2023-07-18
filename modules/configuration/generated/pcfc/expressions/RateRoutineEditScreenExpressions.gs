package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineEditScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineEditScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineEditScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RateRoutineEditScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineEditScreen.pcf: line 289, column 30
    function available_51 () : java.lang.Boolean {
      return helper.operatorAvailable(ratingRoutineStep)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=RatingRoutineActions) at RateRoutineEditScreen.pcf: line 260, column 75
    function checkBoxVisible_182 () : java.lang.Boolean {
      return not helper.isStepInLoopBlock(ratingRoutineStep) or helper.stepStartsLoopBlock(ratingRoutineStep)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineOperand) at RateRoutineEditScreen.pcf: line 357, column 123
    function def_onEnter_116 (def :  pcf.RateRoutineStepEditOperand_constant) : void {
      def.onEnter(ratingRoutineStep, rateRoutine, inScopeParamInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineOperand) at RateRoutineEditScreen.pcf: line 357, column 123
    function def_onEnter_118 (def :  pcf.RateRoutineStepEditOperand_default) : void {
      def.onEnter(ratingRoutineStep, rateRoutine, inScopeParamInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineOperand) at RateRoutineEditScreen.pcf: line 357, column 123
    function def_onEnter_120 (def :  pcf.RateRoutineStepEditOperand_rounding) : void {
      def.onEnter(ratingRoutineStep, rateRoutine, inScopeParamInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionCommentRow) at RateRoutineEditScreen.pcf: line 383, column 80
    function def_onEnter_140 (def :  pcf.RateRoutineStepEditInstruction_assignment) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionCommentRow) at RateRoutineEditScreen.pcf: line 383, column 80
    function def_onEnter_142 (def :  pcf.RateRoutineStepEditInstruction_comment) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionCommentRow) at RateRoutineEditScreen.pcf: line 383, column 80
    function def_onEnter_144 (def :  pcf.RateRoutineStepEditInstruction_default) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionCommentRow) at RateRoutineEditScreen.pcf: line 383, column 80
    function def_onEnter_146 (def :  pcf.RateRoutineStepEditInstruction_flowcontrol) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionCommentRow) at RateRoutineEditScreen.pcf: line 383, column 80
    function def_onEnter_148 (def :  pcf.RateRoutineStepEditInstruction_inscope) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionCommentRow) at RateRoutineEditScreen.pcf: line 383, column 80
    function def_onEnter_150 (def :  pcf.RateRoutineStepEditInstruction_voidfunction) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionVoidFunctionRow) at RateRoutineEditScreen.pcf: line 402, column 80
    function def_onEnter_162 (def :  pcf.RateRoutineStepEditInstruction_assignment) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionVoidFunctionRow) at RateRoutineEditScreen.pcf: line 402, column 80
    function def_onEnter_164 (def :  pcf.RateRoutineStepEditInstruction_comment) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionVoidFunctionRow) at RateRoutineEditScreen.pcf: line 402, column 80
    function def_onEnter_166 (def :  pcf.RateRoutineStepEditInstruction_default) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionVoidFunctionRow) at RateRoutineEditScreen.pcf: line 402, column 80
    function def_onEnter_168 (def :  pcf.RateRoutineStepEditInstruction_flowcontrol) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionVoidFunctionRow) at RateRoutineEditScreen.pcf: line 402, column 80
    function def_onEnter_170 (def :  pcf.RateRoutineStepEditInstruction_inscope) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionVoidFunctionRow) at RateRoutineEditScreen.pcf: line 402, column 80
    function def_onEnter_172 (def :  pcf.RateRoutineStepEditInstruction_voidfunction) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineEditScreen.pcf: line 275, column 108
    function def_onEnter_41 (def :  pcf.RateRoutineStepInstruction_assignment) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineEditScreen.pcf: line 275, column 108
    function def_onEnter_43 (def :  pcf.RateRoutineStepInstruction_default) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineEditScreen.pcf: line 275, column 108
    function def_onEnter_45 (def :  pcf.RateRoutineStepInstruction_flowcontrol) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineEditScreen.pcf: line 275, column 108
    function def_onEnter_47 (def :  pcf.RateRoutineStepInstruction_voidfunction) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstruction) at RateRoutineEditScreen.pcf: line 328, column 80
    function def_onEnter_82 (def :  pcf.RateRoutineStepEditInstruction_assignment) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstruction) at RateRoutineEditScreen.pcf: line 328, column 80
    function def_onEnter_84 (def :  pcf.RateRoutineStepEditInstruction_comment) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstruction) at RateRoutineEditScreen.pcf: line 328, column 80
    function def_onEnter_86 (def :  pcf.RateRoutineStepEditInstruction_default) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstruction) at RateRoutineEditScreen.pcf: line 328, column 80
    function def_onEnter_88 (def :  pcf.RateRoutineStepEditInstruction_flowcontrol) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstruction) at RateRoutineEditScreen.pcf: line 328, column 80
    function def_onEnter_90 (def :  pcf.RateRoutineStepEditInstruction_inscope) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstruction) at RateRoutineEditScreen.pcf: line 328, column 80
    function def_onEnter_92 (def :  pcf.RateRoutineStepEditInstruction_voidfunction) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineOperand) at RateRoutineEditScreen.pcf: line 357, column 123
    function def_refreshVariables_117 (def :  pcf.RateRoutineStepEditOperand_constant) : void {
      def.refreshVariables(ratingRoutineStep, rateRoutine, inScopeParamInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineOperand) at RateRoutineEditScreen.pcf: line 357, column 123
    function def_refreshVariables_119 (def :  pcf.RateRoutineStepEditOperand_default) : void {
      def.refreshVariables(ratingRoutineStep, rateRoutine, inScopeParamInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineOperand) at RateRoutineEditScreen.pcf: line 357, column 123
    function def_refreshVariables_121 (def :  pcf.RateRoutineStepEditOperand_rounding) : void {
      def.refreshVariables(ratingRoutineStep, rateRoutine, inScopeParamInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionCommentRow) at RateRoutineEditScreen.pcf: line 383, column 80
    function def_refreshVariables_141 (def :  pcf.RateRoutineStepEditInstruction_assignment) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionCommentRow) at RateRoutineEditScreen.pcf: line 383, column 80
    function def_refreshVariables_143 (def :  pcf.RateRoutineStepEditInstruction_comment) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionCommentRow) at RateRoutineEditScreen.pcf: line 383, column 80
    function def_refreshVariables_145 (def :  pcf.RateRoutineStepEditInstruction_default) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionCommentRow) at RateRoutineEditScreen.pcf: line 383, column 80
    function def_refreshVariables_147 (def :  pcf.RateRoutineStepEditInstruction_flowcontrol) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionCommentRow) at RateRoutineEditScreen.pcf: line 383, column 80
    function def_refreshVariables_149 (def :  pcf.RateRoutineStepEditInstruction_inscope) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionCommentRow) at RateRoutineEditScreen.pcf: line 383, column 80
    function def_refreshVariables_151 (def :  pcf.RateRoutineStepEditInstruction_voidfunction) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionVoidFunctionRow) at RateRoutineEditScreen.pcf: line 402, column 80
    function def_refreshVariables_163 (def :  pcf.RateRoutineStepEditInstruction_assignment) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionVoidFunctionRow) at RateRoutineEditScreen.pcf: line 402, column 80
    function def_refreshVariables_165 (def :  pcf.RateRoutineStepEditInstruction_comment) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionVoidFunctionRow) at RateRoutineEditScreen.pcf: line 402, column 80
    function def_refreshVariables_167 (def :  pcf.RateRoutineStepEditInstruction_default) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionVoidFunctionRow) at RateRoutineEditScreen.pcf: line 402, column 80
    function def_refreshVariables_169 (def :  pcf.RateRoutineStepEditInstruction_flowcontrol) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionVoidFunctionRow) at RateRoutineEditScreen.pcf: line 402, column 80
    function def_refreshVariables_171 (def :  pcf.RateRoutineStepEditInstruction_inscope) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstructionVoidFunctionRow) at RateRoutineEditScreen.pcf: line 402, column 80
    function def_refreshVariables_173 (def :  pcf.RateRoutineStepEditInstruction_voidfunction) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineEditScreen.pcf: line 275, column 108
    function def_refreshVariables_42 (def :  pcf.RateRoutineStepInstruction_assignment) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineEditScreen.pcf: line 275, column 108
    function def_refreshVariables_44 (def :  pcf.RateRoutineStepInstruction_default) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineEditScreen.pcf: line 275, column 108
    function def_refreshVariables_46 (def :  pcf.RateRoutineStepInstruction_flowcontrol) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineEditScreen.pcf: line 275, column 108
    function def_refreshVariables_48 (def :  pcf.RateRoutineStepInstruction_voidfunction) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstruction) at RateRoutineEditScreen.pcf: line 328, column 80
    function def_refreshVariables_83 (def :  pcf.RateRoutineStepEditInstruction_assignment) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstruction) at RateRoutineEditScreen.pcf: line 328, column 80
    function def_refreshVariables_85 (def :  pcf.RateRoutineStepEditInstruction_comment) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstruction) at RateRoutineEditScreen.pcf: line 328, column 80
    function def_refreshVariables_87 (def :  pcf.RateRoutineStepEditInstruction_default) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstruction) at RateRoutineEditScreen.pcf: line 328, column 80
    function def_refreshVariables_89 (def :  pcf.RateRoutineStepEditInstruction_flowcontrol) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstruction) at RateRoutineEditScreen.pcf: line 328, column 80
    function def_refreshVariables_91 (def :  pcf.RateRoutineStepEditInstruction_inscope) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineInstruction) at RateRoutineEditScreen.pcf: line 328, column 80
    function def_refreshVariables_93 (def :  pcf.RateRoutineStepEditInstruction_voidfunction) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap, writableParamUsages, writableParams, costDataUsages)
    }
    
    // 'value' attribute on TextCell (id=LeftParenthesisGroup_Cell) at RateRoutineEditScreen.pcf: line 352, column 78
    function defaultSetter_112 (__VALUE_TO_SET :  java.lang.Object) : void {
      ratingRoutineStep.PrimaryOperand.LeftParenthesisGroup = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=RightParenthesisGroup_Cell) at RateRoutineEditScreen.pcf: line 364, column 78
    function defaultSetter_127 (__VALUE_TO_SET :  java.lang.Object) : void {
      ratingRoutineStep.PrimaryOperand.RightParenthesisGroup = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=StepNote_Cell) at RateRoutineEditScreen.pcf: line 371, column 78
    function defaultSetter_133 (__VALUE_TO_SET :  java.lang.Object) : void {
      ratingRoutineStep.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaCell (id=SectionComment_Cell) at RateRoutineEditScreen.pcf: line 390, column 61
    function defaultSetter_155 (__VALUE_TO_SET :  java.lang.Object) : void {
      ratingRoutineStep.SectionComment = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=StepOperator_Cell) at RateRoutineEditScreen.pcf: line 342, column 125
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      ratingRoutineStep.PrimaryOperand.OperatorType = (__VALUE_TO_SET as typekey.CalcStepOperatorType)
    }
    
    // 'editable' attribute on TextCell (id=LeftParenthesisGroup_Cell) at RateRoutineEditScreen.pcf: line 352, column 78
    function editable_108 () : java.lang.Boolean {
      return !(ratingRoutineStep.StepType.hasCategory(CalcStepCategory.TC_FLOWCONTROL) or ratingRoutineStep.IsSectionCommentStep)
    }
    
    // 'filter' attribute on RangeCell (id=StepOperator_Cell) at RateRoutineEditScreen.pcf: line 342, column 125
    function filter_101 (VALUE :  typekey.CalcStepOperatorType, VALUES :  typekey.CalcStepOperatorType[]) : java.lang.Boolean {
      return mainColumnOperators.contains(VALUE)
    }
    
    // 'filter' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineEditScreen.pcf: line 289, column 30
    function filter_55 (VALUE :  typekey.CalcStepOperatorType, VALUES :  typekey.CalcStepOperatorType[]) : java.lang.Boolean {
      return (CalcStepOperatorType.Type as gw.entity.ITypeList).getTypeKeysByFilterName("MainColumnOperators").contains(VALUE)
    }
    
    // 'highlighted' attribute on Row at RateRoutineEditScreen.pcf: line 320, column 164
    function highlighted_137 () : java.lang.Boolean {
      return highlightedRows.containsKey(ratingRoutineStep)
    }
    
    // 'mode' attribute on ModalCellRef (id=RateRoutineOperand) at RateRoutineEditScreen.pcf: line 357, column 123
    function mode_122 () : java.lang.Object {
      return gw.pcf.rating.flow.RateRoutineEditScreenHelper.getRateRoutineStepOperandMode(ratingRoutineStep)
    }
    
    // 'mode' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineEditScreen.pcf: line 275, column 108
    function mode_49 () : java.lang.Object {
      return ratingRoutineStep.StepType.Categories.whereTypeIs(CalcStepCategory).first().Code
    }
    
    // 'mode' attribute on ModalCellRef (id=RateRoutineInstruction) at RateRoutineEditScreen.pcf: line 328, column 80
    function mode_94 () : java.lang.Object {
      return helper.getStepEditInstructionMode(ratingRoutineStep)
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineEditScreen.pcf: line 291, column 90
    function onChange_50 () : void {
      helper.updateOperandForOperatorChange(ratingRoutineStep)
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineEditScreen.pcf: line 344, column 90
    function onChange_95 () : void {
      helper.updateOperandForOperatorChange(ratingRoutineStep)
    }
    
    // 'optionLabel' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineEditScreen.pcf: line 289, column 30
    function optionLabel_56 (VALUE :  typekey.CalcStepOperatorType) : java.lang.String {
      return VALUE.LabelForDisplay
    }
    
    // 'outputConversion' attribute on TextAreaCell (id=SectionComment_Cell) at RateRoutineEditScreen.pcf: line 390, column 61
    function outputConversion_153 (VALUE :  java.lang.String) : java.lang.String {
      return rateRoutine.indentValue(ratingRoutineStep, VALUE, indentLevelMap)
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=LoopBlockLeftParenthesisGroup_Cell) at RateRoutineEditScreen.pcf: line 299, column 31
    function requestValidationExpression_63 (VALUE :  java.lang.String) : java.lang.Object {
      return VALUE.toCharArray().toList().countWhere(\ c -> c != '(') == 0 ? null: DisplayKey.get("Web.Rating.Flow.CalcRoutine.OnlyLeftParenthesisHere")
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=LoopBlockRightParenthesisGroup_Cell) at RateRoutineEditScreen.pcf: line 310, column 31
    function requestValidationExpression_71 (VALUE :  java.lang.String) : java.lang.Object {
      return VALUE.toCharArray().toList().countWhere(\ c -> c != ')') == 0 ? null: DisplayKey.get("Web.Rating.Flow.CalcRoutine.OnlyRightParenthesisHere")
    }
    
    // 'valueRange' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineEditScreen.pcf: line 289, column 30
    function valueRange_57 () : java.lang.Object {
      return CalcStepOperatorType.getTypeKeys(false)
    }
    
    // 'value' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineEditScreen.pcf: line 289, column 30
    function valueRoot_54 () : java.lang.Object {
      return ratingRoutineStep.PrimaryOperand
    }
    
    // 'value' attribute on TextCell (id=LoopBlockStepNote_Cell) at RateRoutineEditScreen.pcf: line 316, column 78
    function valueRoot_77 () : java.lang.Object {
      return ratingRoutineStep
    }
    
    // 'value' attribute on TextAreaCell (id=SectionComment_Cell) at RateRoutineEditScreen.pcf: line 390, column 61
    function value_154 () : java.lang.String {
      return ratingRoutineStep.SectionComment
    }
    
    // 'value' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineEditScreen.pcf: line 289, column 30
    function value_53 () : typekey.CalcStepOperatorType {
      return ratingRoutineStep.PrimaryOperand.OperatorType
    }
    
    // 'value' attribute on TextCell (id=LoopBlockLeftParenthesisGroup_Cell) at RateRoutineEditScreen.pcf: line 299, column 31
    function value_64 () : java.lang.String {
      return ratingRoutineStep.PrimaryOperand.LeftParenthesisGroup
    }
    
    // 'value' attribute on TextCell (id=ActionOperand_Cell) at RateRoutineEditScreen.pcf: line 303, column 73
    function value_67 () : java.lang.String {
      return ratingRoutineStep.PrimaryOperand.OperandName
    }
    
    // 'value' attribute on TextCell (id=LoopBlockRightParenthesisGroup_Cell) at RateRoutineEditScreen.pcf: line 310, column 31
    function value_72 () : java.lang.String {
      return ratingRoutineStep.PrimaryOperand.RightParenthesisGroup
    }
    
    // 'value' attribute on TextCell (id=LoopBlockStepNote_Cell) at RateRoutineEditScreen.pcf: line 316, column 78
    function value_76 () : java.lang.String {
      return ratingRoutineStep.Notes
    }
    
    // 'value' attribute on TextCell (id=RateRoutineStepError_Cell) at RateRoutineEditScreen.pcf: line 323, column 151
    function value_80 () : java.lang.String {
      return highlightedRows.get(ratingRoutineStep)!= null ? highlightedRows.get(ratingRoutineStep).join(",") : " "
    }
    
    // 'valueRange' attribute on RangeCell (id=StepOperator_Cell) at RateRoutineEditScreen.pcf: line 342, column 125
    function verifyValueRangeIsAllowedType_104 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=StepOperator_Cell) at RateRoutineEditScreen.pcf: line 342, column 125
    function verifyValueRangeIsAllowedType_104 ($$arg :  typekey.CalcStepOperatorType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineEditScreen.pcf: line 289, column 30
    function verifyValueRangeIsAllowedType_58 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineEditScreen.pcf: line 289, column 30
    function verifyValueRangeIsAllowedType_58 ($$arg :  typekey.CalcStepOperatorType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=StepOperator_Cell) at RateRoutineEditScreen.pcf: line 342, column 125
    function verifyValueRange_105 () : void {
      var __valueRangeArg = CalcStepOperatorType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_104(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineEditScreen.pcf: line 289, column 30
    function verifyValueRange_59 () : void {
      var __valueRangeArg = CalcStepOperatorType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_58(__valueRangeArg)
    }
    
    // 'visible' attribute on Row at RateRoutineEditScreen.pcf: line 320, column 164
    function visible_136 () : java.lang.Boolean {
      return not helper.isStepInLoopBlock(ratingRoutineStep) and not (ratingRoutineStep.IsSectionCommentStep or ratingRoutineStep.IsVoidFunctionStep)
    }
    
    // 'visible' attribute on Row at RateRoutineEditScreen.pcf: line 375, column 118
    function visible_158 () : java.lang.Boolean {
      return not helper.isStepInLoopBlock(ratingRoutineStep) and ratingRoutineStep.IsSectionCommentStep
    }
    
    // 'visible' attribute on Row at RateRoutineEditScreen.pcf: line 394, column 116
    function visible_180 () : java.lang.Boolean {
      return not helper.isStepInLoopBlock(ratingRoutineStep) and ratingRoutineStep.IsVoidFunctionStep
    }
    
    // 'valueVisible' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineEditScreen.pcf: line 289, column 30
    function visible_52 () : java.lang.Boolean {
      return helper.operatorAvailable(ratingRoutineStep) and not ratingRoutineStep.IsSectionCommentStep
    }
    
    // 'valueVisible' attribute on TextCell (id=LoopBlockLeftParenthesisGroup_Cell) at RateRoutineEditScreen.pcf: line 299, column 31
    function visible_62 () : java.lang.Boolean {
      return not ratingRoutineStep.IsSectionCommentStep
    }
    
    // 'visible' attribute on Row at RateRoutineEditScreen.pcf: line 266, column 160
    function visible_79 () : java.lang.Boolean {
      return helper.isStepInLoopBlock(ratingRoutineStep) and not (ratingRoutineStep.IsSectionCommentStep or ratingRoutineStep.IsVoidFunctionStep)
    }
    
    property get ratingRoutineStep () : entity.CalcStepDefinition {
      return getIteratedValue(1) as entity.CalcStepDefinition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineEditScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateRoutineEditScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=sectionItem) at RateRoutineEditScreen.pcf: line 141, column 102
    function action_22 () : void {
      currentSection = rateRoutineSection
    }
    
    // 'available' attribute on MenuItem (id=sectionItem) at RateRoutineEditScreen.pcf: line 141, column 102
    function available_21 () : java.lang.Boolean {
      return currentSection == rateRoutineSection or not helper.bundleContainsChanges(CurrentLocation.Bundle)
    }
    
    // 'checked' attribute on MenuItem (id=sectionItem) at RateRoutineEditScreen.pcf: line 141, column 102
    function checked_24 () : java.lang.Boolean {
      return rateRoutineSection == currentSection
    }
    
    // 'label' attribute on MenuItem (id=sectionItem) at RateRoutineEditScreen.pcf: line 141, column 102
    function label_23 () : java.lang.Object {
      return helper.makeSectionLabel(rateRoutineSection, rateRoutine, highlightedRows)
    }
    
    property get rateRoutineSection () : gw.pcf.rating.flow.RateRoutineEditScreenHelper.RateRoutineSection {
      return getIteratedValue(1) as gw.pcf.rating.flow.RateRoutineEditScreenHelper.RateRoutineSection
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineEditScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineEditScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=UpdateButton) at RateRoutineEditScreen.pcf: line 81, column 47
    function action_12 () : void {
      rateRoutine.canUpdate(); CurrentLocation.commit()
    }
    
    // 'action' attribute on ToolbarButton (id=SaveDraftButton) at RateRoutineEditScreen.pcf: line 94, column 23
    function action_14 () : void {
      rateRoutine.canUpdate(); helper.saveDraft()
    }
    
    // 'action' attribute on MenuItem (id=Add1) at RateRoutineEditScreen.pcf: line 152, column 46
    function action_28 () : void {
      helper.appendRows(1)
    }
    
    // 'action' attribute on MenuItem (id=Add10) at RateRoutineEditScreen.pcf: line 157, column 46
    function action_29 () : void {
      helper.appendRows(10)
    }
    
    // 'action' attribute on ToolbarButton (id=ValidateButton) at RateRoutineEditScreen.pcf: line 215, column 29
    function action_39 () : void {
      gw.rating.flow.validation.RateRoutineValidation.validateForRateRoutineEditScreen(rateRoutine, TC_DEFAULT, gw.rating.flow.validation.ValidationGroup.ALL, highlightedRows); gw.api.util.LocationUtil.addRequestScopedInfoMessage(DisplayKey.get("Validation.Rating.RateRoutineDefinition.ValidatationPasses"))
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=Duplicate) at RateRoutineEditScreen.pcf: line 167, column 46
    function allCheckedRowsAction_31 (CheckedValues :  entity.CalcStepDefinition[], CheckedValuesErrors :  java.util.Map) : void {
      currentSection = helper.copySteps(CheckedValues,currentSection)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=InsertBefore) at RateRoutineEditScreen.pcf: line 172, column 46
    function allCheckedRowsAction_32 (CheckedValues :  entity.CalcStepDefinition[], CheckedValuesErrors :  java.util.Map) : void {
      currentSection = helper.insertBefore(CheckedValues,currentSection)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=InsertAfter) at RateRoutineEditScreen.pcf: line 177, column 46
    function allCheckedRowsAction_33 (CheckedValues :  entity.CalcStepDefinition[], CheckedValuesErrors :  java.util.Map) : void {
      currentSection = helper.insertAfter(CheckedValues, currentSection)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=Insert10Before) at RateRoutineEditScreen.pcf: line 182, column 46
    function allCheckedRowsAction_34 (CheckedValues :  entity.CalcStepDefinition[], CheckedValuesErrors :  java.util.Map) : void {
      currentSection = helper.insertBefore(CheckedValues,currentSection, 10)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=Insert10After) at RateRoutineEditScreen.pcf: line 187, column 46
    function allCheckedRowsAction_35 (CheckedValues :  entity.CalcStepDefinition[], CheckedValuesErrors :  java.util.Map) : void {
      currentSection = helper.insertAfter(CheckedValues, currentSection, 10)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=removeButton) at RateRoutineEditScreen.pcf: line 195, column 34
    function allCheckedRowsAction_36 (CheckedValues :  entity.CalcStepDefinition[], CheckedValuesErrors :  java.util.Map) : void {
      currentSection = helper.removeRows(CheckedValues, currentSection)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MoveUp) at RateRoutineEditScreen.pcf: line 201, column 44
    function allCheckedRowsAction_37 (CheckedValues :  entity.CalcStepDefinition[], CheckedValuesErrors :  java.util.Map) : void {
      helper.moveUp(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=MoveDown) at RateRoutineEditScreen.pcf: line 207, column 44
    function allCheckedRowsAction_38 (CheckedValues :  entity.CalcStepDefinition[], CheckedValuesErrors :  java.util.Map) : void {
      helper.moveDown(CheckedValues)
    }
    
    // 'available' attribute on ToolbarButton (id=AddButton) at RateRoutineEditScreen.pcf: line 147, column 86
    function available_30 () : java.lang.Boolean {
      return currentSection == null
    }
    
    // 'def' attribute on PanelRef at RateRoutineEditScreen.pcf: line 109, column 109
    function def_onEnter_16 (def :  pcf.RateRoutineDV) : void {
      def.onEnter(rateRoutine, newRateRoutine, copyVersionTyp, highlightedRows, costDataUsages)
    }
    
    // 'def' attribute on PanelRef at RateRoutineEditScreen.pcf: line 114, column 223
    function def_onEnter_18 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(rateRoutine, { "Name", "Description" }, { DisplayKey.get("Web.Rating.RateRoutines.Name"), DisplayKey.get("Web.Rating.RateRoutines.Description") })
    }
    
    // 'def' attribute on PanelRef at RateRoutineEditScreen.pcf: line 109, column 109
    function def_refreshVariables_17 (def :  pcf.RateRoutineDV) : void {
      def.refreshVariables(rateRoutine, newRateRoutine, copyVersionTyp, highlightedRows, costDataUsages)
    }
    
    // 'def' attribute on PanelRef at RateRoutineEditScreen.pcf: line 114, column 223
    function def_refreshVariables_19 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(rateRoutine, { "Name", "Description" }, { DisplayKey.get("Web.Rating.RateRoutines.Name"), DisplayKey.get("Web.Rating.RateRoutines.Description") })
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEditScreen.pcf: line 20, column 62
    function initialValue_0 () : gw.pcf.rating.flow.RateRoutineEditScreenHelper {
      return new gw.pcf.rating.flow.RateRoutineEditScreenHelper(rateRoutine, CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEditScreen.pcf: line 25, column 102
    function initialValue_1 () : java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>> {
      return helper.initializeInScopeParamInScopeUsageMap(rateRoutine)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEditScreen.pcf: line 71, column 30
    function initialValue_10 () : java.util.List {
      return (CalcStepOperatorType.Type as gw.entity.ITypeList).getTypeKeysByFilterName("MainColumnOperators")
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEditScreen.pcf: line 30, column 70
    function initialValue_2 () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return helper.getCostDataUsages(rateRoutine.ParameterSet)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEditScreen.pcf: line 35, column 113
    function initialValue_3 () : java.util.Map<CalcRoutineParameter, java.util.List<gw.rating.flow.util.InScopeUsage>> {
      return (rateRoutine.ParameterSet != null) ? rateRoutine.ParameterSet.WritableParameterUsages : null
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEditScreen.pcf: line 40, column 48
    function initialValue_4 () : List<CalcRoutineParameter> {
      return (writableParamUsages != null) ? writableParamUsages.Keys.toList().orderBy(\ crp -> crp.DisplayName) : null
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEditScreen.pcf: line 48, column 96
    function initialValue_5 () : java.util.Map<CalcStepDefinition, java.util.List<java.lang.Integer>> {
      return {}
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEditScreen.pcf: line 53, column 63
    function initialValue_6 () : java.util.List<entity.CalcStepDefinition> {
      return helper.OrderedSteps
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEditScreen.pcf: line 58, column 85
    function initialValue_7 () : java.util.HashMap<entity.CalcStepDefinition, java.lang.Integer> {
      return rateRoutine.StepIndentLevels as java.util.HashMap<entity.CalcStepDefinition, java.lang.Integer>
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEditScreen.pcf: line 63, column 103
    function initialValue_8 () : java.util.List<gw.pcf.rating.flow.RateRoutineEditScreenHelper.RateRoutineSection> {
      return helper.getIndex(rateRoutine, indentLevelMap)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEditScreen.pcf: line 67, column 81
    function initialValue_9 () : gw.pcf.rating.flow.RateRoutineEditScreenHelper.RateRoutineSection {
      return sectionIndex?.first()
    }
    
    // EditButtons at RateRoutineEditScreen.pcf: line 88, column 32
    function label_13 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on ToolbarButton (id=ValidateButton) at RateRoutineEditScreen.pcf: line 215, column 29
    function label_40 () : java.lang.Object {
      return currentSection != null ? DisplayKey.get("Web.Rating.Flow.CalcRoutine.ValidateAll") : DisplayKey.get("Web.Rating.Flow.CalcRoutine.Validate")
    }
    
    // 'startChecked' attribute on RowIterator (id=RatingRoutineActions) at RateRoutineEditScreen.pcf: line 260, column 75
    function startChecked_184 (ratingRoutineStep :  entity.CalcStepDefinition) : java.lang.Boolean {
      return helper.startChecked(ratingRoutineStep)
    }
    
    // 'title' attribute on TitleBar (id=StepsTitlebar) at RateRoutineEditScreen.pcf: line 122, column 175
    function title_20 () : java.lang.String {
      return currentSection == null ? DisplayKey.get("Web.Rating.Flow.CalcRoutine.Steps") : helper.getTitleBarHeadingInSection(currentSection, rateRoutine)
    }
    
    // 'tooltip' attribute on ToolbarButton (id=ViewButton) at RateRoutineEditScreen.pcf: line 129, column 50
    function tooltip_27 () : java.lang.String {
      return helper.bundleContainsChanges(CurrentLocation.Bundle) ? DisplayKey.get("Web.Rating.Flow.CalcRoutine.ViewDisabledHelp") : DisplayKey.get("Web.Rating.Flow.CalcRoutine.ViewEnabledHelp")
    }
    
    // 'value' attribute on RowIterator (id=RatingRoutineActions) at RateRoutineEditScreen.pcf: line 260, column 75
    function value_183 () : java.util.List<entity.CalcStepDefinition> {
      return orderedSteps.where(\ s -> currentSection == null or currentSection.showRow(s.SortOrder))
    }
    
    // 'value' attribute on MenuItemIterator (id=viewSectionsMenu) at RateRoutineEditScreen.pcf: line 134, column 97
    function value_25 () : gw.pcf.rating.flow.RateRoutineEditScreenHelper.RateRoutineSection[] {
      return sectionIndex.toTypedArray()
    }
    
    // 'visible' attribute on ToolbarButton (id=UpdateButton) at RateRoutineEditScreen.pcf: line 81, column 47
    function visible_11 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on AlertBar (id=AlertBarForViewButton) at RateRoutineEditScreen.pcf: line 105, column 97
    function visible_15 () : java.lang.Boolean {
      return currentSection!= null and helper.bundleContainsChanges(CurrentLocation.Bundle)
    }
    
    // 'visible' attribute on ToolbarButton (id=ViewButton) at RateRoutineEditScreen.pcf: line 129, column 50
    function visible_26 () : java.lang.Boolean {
      return (currentSection != null)
    }
    
    property get checkAll () : boolean {
      return getVariableValue("checkAll", 0) as java.lang.Boolean
    }
    
    property set checkAll ($arg :  boolean) {
      setVariableValue("checkAll", 0, $arg)
    }
    
    property get copyVersionTyp () : gw.rating.flow.util.CopyVersionType {
      return getRequireValue("copyVersionTyp", 0) as gw.rating.flow.util.CopyVersionType
    }
    
    property set copyVersionTyp ($arg :  gw.rating.flow.util.CopyVersionType) {
      setRequireValue("copyVersionTyp", 0, $arg)
    }
    
    property get costDataUsages () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return getVariableValue("costDataUsages", 0) as java.util.List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set costDataUsages ($arg :  java.util.List<gw.rating.flow.util.InScopeUsage>) {
      setVariableValue("costDataUsages", 0, $arg)
    }
    
    property get currentSection () : gw.pcf.rating.flow.RateRoutineEditScreenHelper.RateRoutineSection {
      return getVariableValue("currentSection", 0) as gw.pcf.rating.flow.RateRoutineEditScreenHelper.RateRoutineSection
    }
    
    property set currentSection ($arg :  gw.pcf.rating.flow.RateRoutineEditScreenHelper.RateRoutineSection) {
      setVariableValue("currentSection", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.flow.RateRoutineEditScreenHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.flow.RateRoutineEditScreenHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.flow.RateRoutineEditScreenHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get highlightedRows () : java.util.Map<CalcStepDefinition, java.util.List<java.lang.Integer>> {
      return getVariableValue("highlightedRows", 0) as java.util.Map<CalcStepDefinition, java.util.List<java.lang.Integer>>
    }
    
    property set highlightedRows ($arg :  java.util.Map<CalcStepDefinition, java.util.List<java.lang.Integer>>) {
      setVariableValue("highlightedRows", 0, $arg)
    }
    
    property get inScopeParamInScopeUsageMap () : java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>> {
      return getVariableValue("inScopeParamInScopeUsageMap", 0) as java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>>
    }
    
    property set inScopeParamInScopeUsageMap ($arg :  java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>>) {
      setVariableValue("inScopeParamInScopeUsageMap", 0, $arg)
    }
    
    property get indentLevelMap () : java.util.HashMap<entity.CalcStepDefinition, java.lang.Integer> {
      return getVariableValue("indentLevelMap", 0) as java.util.HashMap<entity.CalcStepDefinition, java.lang.Integer>
    }
    
    property set indentLevelMap ($arg :  java.util.HashMap<entity.CalcStepDefinition, java.lang.Integer>) {
      setVariableValue("indentLevelMap", 0, $arg)
    }
    
    property get mainColumnOperators () : java.util.List {
      return getVariableValue("mainColumnOperators", 0) as java.util.List
    }
    
    property set mainColumnOperators ($arg :  java.util.List) {
      setVariableValue("mainColumnOperators", 0, $arg)
    }
    
    property get newRateRoutine () : boolean {
      return getRequireValue("newRateRoutine", 0) as java.lang.Boolean
    }
    
    property set newRateRoutine ($arg :  boolean) {
      setRequireValue("newRateRoutine", 0, $arg)
    }
    
    property get orderedSteps () : java.util.List<entity.CalcStepDefinition> {
      return getVariableValue("orderedSteps", 0) as java.util.List<entity.CalcStepDefinition>
    }
    
    property set orderedSteps ($arg :  java.util.List<entity.CalcStepDefinition>) {
      setVariableValue("orderedSteps", 0, $arg)
    }
    
    property get rateRoutine () : CalcRoutineDefinition {
      return getRequireValue("rateRoutine", 0) as CalcRoutineDefinition
    }
    
    property set rateRoutine ($arg :  CalcRoutineDefinition) {
      setRequireValue("rateRoutine", 0, $arg)
    }
    
    property get sectionIndex () : java.util.List<gw.pcf.rating.flow.RateRoutineEditScreenHelper.RateRoutineSection> {
      return getVariableValue("sectionIndex", 0) as java.util.List<gw.pcf.rating.flow.RateRoutineEditScreenHelper.RateRoutineSection>
    }
    
    property set sectionIndex ($arg :  java.util.List<gw.pcf.rating.flow.RateRoutineEditScreenHelper.RateRoutineSection>) {
      setVariableValue("sectionIndex", 0, $arg)
    }
    
    property get writableParamUsages () : java.util.Map<CalcRoutineParameter, java.util.List<gw.rating.flow.util.InScopeUsage>> {
      return getVariableValue("writableParamUsages", 0) as java.util.Map<CalcRoutineParameter, java.util.List<gw.rating.flow.util.InScopeUsage>>
    }
    
    property set writableParamUsages ($arg :  java.util.Map<CalcRoutineParameter, java.util.List<gw.rating.flow.util.InScopeUsage>>) {
      setVariableValue("writableParamUsages", 0, $arg)
    }
    
    property get writableParams () : List<CalcRoutineParameter> {
      return getVariableValue("writableParams", 0) as List<CalcRoutineParameter>
    }
    
    property set writableParams ($arg :  List<CalcRoutineParameter>) {
      setVariableValue("writableParams", 0, $arg)
    }
    
    
  }
  
  
}