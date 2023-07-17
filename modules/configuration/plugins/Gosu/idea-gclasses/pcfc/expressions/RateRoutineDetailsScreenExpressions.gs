package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineDetailsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateRoutineDetailsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineDetailsScreen.pcf: line 181, column 121
    function available_54 () : java.lang.Boolean {
      return helper.operatorAvailable(ratingRoutineStep)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineVoidFunctionStepInstruction) at RateRoutineDetailsScreen.pcf: line 239, column 104
    function def_onEnter_100 (def :  pcf.RateRoutineStepInstruction_assignment) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineVoidFunctionStepInstruction) at RateRoutineDetailsScreen.pcf: line 239, column 104
    function def_onEnter_102 (def :  pcf.RateRoutineStepInstruction_default) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineVoidFunctionStepInstruction) at RateRoutineDetailsScreen.pcf: line 239, column 104
    function def_onEnter_104 (def :  pcf.RateRoutineStepInstruction_flowcontrol) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineVoidFunctionStepInstruction) at RateRoutineDetailsScreen.pcf: line 239, column 104
    function def_onEnter_106 (def :  pcf.RateRoutineStepInstruction_voidfunction) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineDetailsScreen.pcf: line 168, column 104
    function def_onEnter_44 (def :  pcf.RateRoutineStepInstruction_assignment) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineDetailsScreen.pcf: line 168, column 104
    function def_onEnter_46 (def :  pcf.RateRoutineStepInstruction_default) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineDetailsScreen.pcf: line 168, column 104
    function def_onEnter_48 (def :  pcf.RateRoutineStepInstruction_flowcontrol) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineDetailsScreen.pcf: line 168, column 104
    function def_onEnter_50 (def :  pcf.RateRoutineStepInstruction_voidfunction) : void {
      def.onEnter(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineVoidFunctionStepInstruction) at RateRoutineDetailsScreen.pcf: line 239, column 104
    function def_refreshVariables_101 (def :  pcf.RateRoutineStepInstruction_assignment) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineVoidFunctionStepInstruction) at RateRoutineDetailsScreen.pcf: line 239, column 104
    function def_refreshVariables_103 (def :  pcf.RateRoutineStepInstruction_default) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineVoidFunctionStepInstruction) at RateRoutineDetailsScreen.pcf: line 239, column 104
    function def_refreshVariables_105 (def :  pcf.RateRoutineStepInstruction_flowcontrol) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineVoidFunctionStepInstruction) at RateRoutineDetailsScreen.pcf: line 239, column 104
    function def_refreshVariables_107 (def :  pcf.RateRoutineStepInstruction_voidfunction) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineDetailsScreen.pcf: line 168, column 104
    function def_refreshVariables_45 (def :  pcf.RateRoutineStepInstruction_assignment) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineDetailsScreen.pcf: line 168, column 104
    function def_refreshVariables_47 (def :  pcf.RateRoutineStepInstruction_default) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineDetailsScreen.pcf: line 168, column 104
    function def_refreshVariables_49 (def :  pcf.RateRoutineStepInstruction_flowcontrol) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'def' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineDetailsScreen.pcf: line 168, column 104
    function def_refreshVariables_51 (def :  pcf.RateRoutineStepInstruction_voidfunction) : void {
      def.refreshVariables(ratingRoutineStep, helper, indentLevelMap)
    }
    
    // 'filter' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineDetailsScreen.pcf: line 181, column 121
    function filter_58 (VALUE :  typekey.CalcStepOperatorType, VALUES :  typekey.CalcStepOperatorType[]) : java.lang.Boolean {
      return (CalcStepOperatorType.Type as gw.entity.ITypeList).getTypeKeysByFilterName("MainColumnOperators").contains(VALUE)
    }
    
    // 'fontColor' attribute on TextCell (id=LineNumber_Cell) at RateRoutineDetailsScreen.pcf: line 164, column 46
    function fontColor_38 () : java.lang.Object {
      return gw.api.web.color.GWColor.THEME_INACTIVE
    }
    
    // 'mode' attribute on ModalCellRef (id=RateRoutineStepInstruction) at RateRoutineDetailsScreen.pcf: line 168, column 104
    function mode_52 () : java.lang.Object {
      return ratingRoutineStep.StepType.Categories.whereTypeIs(CalcStepCategory).first().Code
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineDetailsScreen.pcf: line 183, column 86
    function onChange_53 () : void {
      helper.updateOperandForOperatorChange(ratingRoutineStep)
    }
    
    // 'optionLabel' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineDetailsScreen.pcf: line 181, column 121
    function optionLabel_59 (VALUE :  typekey.CalcStepOperatorType) : java.lang.String {
      return VALUE.LabelForDisplay
    }
    
    // 'outputConversion' attribute on TextAreaCell (id=SectionComment_Cell) at RateRoutineDetailsScreen.pcf: line 225, column 57
    function outputConversion_89 (VALUE :  java.lang.String) : java.lang.String {
      return rateRoutine.indentValue(ratingRoutineStep, VALUE, indentLevelMap)
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=LeftParenthesisGroup_Cell) at RateRoutineDetailsScreen.pcf: line 190, column 74
    function requestValidationExpression_66 (VALUE :  java.lang.String) : java.lang.Object {
      return VALUE.toCharArray().toList().countWhere(\ c -> c != '(') == 0 ? null: DisplayKey.get("Web.Rating.Flow.CalcRoutine.OnlyLeftParenthesisHere")
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=RightParenthesisGroup_Cell) at RateRoutineDetailsScreen.pcf: line 200, column 74
    function requestValidationExpression_74 (VALUE :  java.lang.String) : java.lang.Object {
      return VALUE.toCharArray().toList().countWhere(\ c -> c != ')') == 0 ? null: DisplayKey.get("Web.Rating.Flow.CalcRoutine.OnlyRightParenthesisHere")
    }
    
    // 'valueRange' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineDetailsScreen.pcf: line 181, column 121
    function valueRange_60 () : java.lang.Object {
      return CalcStepOperatorType.getTypeKeys(false)
    }
    
    // 'value' attribute on TextCell (id=LineNumber_Cell) at RateRoutineDetailsScreen.pcf: line 164, column 46
    function valueRoot_40 () : java.lang.Object {
      return ratingRoutineStep
    }
    
    // 'value' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineDetailsScreen.pcf: line 181, column 121
    function valueRoot_57 () : java.lang.Object {
      return ratingRoutineStep.PrimaryOperand
    }
    
    // 'value' attribute on TextCell (id=LineNumber_Cell) at RateRoutineDetailsScreen.pcf: line 164, column 46
    function value_39 () : java.lang.Integer {
      return ratingRoutineStep.SortOrder
    }
    
    // 'value' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineDetailsScreen.pcf: line 181, column 121
    function value_56 () : typekey.CalcStepOperatorType {
      return ratingRoutineStep.PrimaryOperand.OperatorType
    }
    
    // 'value' attribute on TextCell (id=LeftParenthesisGroup_Cell) at RateRoutineDetailsScreen.pcf: line 190, column 74
    function value_67 () : java.lang.String {
      return ratingRoutineStep.PrimaryOperand.LeftParenthesisGroup
    }
    
    // 'value' attribute on TextCell (id=ActionOperand_Cell) at RateRoutineDetailsScreen.pcf: line 194, column 69
    function value_70 () : java.lang.String {
      return ratingRoutineStep.PrimaryOperand.OperandName
    }
    
    // 'value' attribute on TextCell (id=RightParenthesisGroup_Cell) at RateRoutineDetailsScreen.pcf: line 200, column 74
    function value_75 () : java.lang.String {
      return ratingRoutineStep.PrimaryOperand.RightParenthesisGroup
    }
    
    // 'value' attribute on TextCell (id=StepNote_Cell) at RateRoutineDetailsScreen.pcf: line 206, column 74
    function value_79 () : java.lang.String {
      return ratingRoutineStep.Notes
    }
    
    // 'value' attribute on TextAreaCell (id=SectionComment_Cell) at RateRoutineDetailsScreen.pcf: line 225, column 57
    function value_90 () : java.lang.String {
      return ratingRoutineStep.SectionComment
    }
    
    // 'fontColor' attribute on TextCell (id=LineNumber_Cell) at RateRoutineDetailsScreen.pcf: line 164, column 46
    function verifyFontColorIsAllowedType_41 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=LineNumber_Cell) at RateRoutineDetailsScreen.pcf: line 164, column 46
    function verifyFontColorIsAllowedType_41 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=LineNumberCommentRow_Cell) at RateRoutineDetailsScreen.pcf: line 216, column 46
    function verifyFontColorIsAllowedType_86 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=LineNumberCommentRow_Cell) at RateRoutineDetailsScreen.pcf: line 216, column 46
    function verifyFontColorIsAllowedType_86 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=LineNumberVoidFunctionRow_Cell) at RateRoutineDetailsScreen.pcf: line 235, column 46
    function verifyFontColorIsAllowedType_97 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=LineNumberVoidFunctionRow_Cell) at RateRoutineDetailsScreen.pcf: line 235, column 46
    function verifyFontColorIsAllowedType_97 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=LineNumber_Cell) at RateRoutineDetailsScreen.pcf: line 164, column 46
    function verifyFontColor_42 () : void {
      var __fontColorArg = gw.api.web.color.GWColor.THEME_INACTIVE
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_41(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=LineNumberCommentRow_Cell) at RateRoutineDetailsScreen.pcf: line 216, column 46
    function verifyFontColor_87 () : void {
      var __fontColorArg = gw.api.web.color.GWColor.THEME_INACTIVE
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_86(__fontColorArg)
    }
    
    // 'fontColor' attribute on TextCell (id=LineNumberVoidFunctionRow_Cell) at RateRoutineDetailsScreen.pcf: line 235, column 46
    function verifyFontColor_98 () : void {
      var __fontColorArg = gw.api.web.color.GWColor.THEME_INACTIVE
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_97(__fontColorArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineDetailsScreen.pcf: line 181, column 121
    function verifyValueRangeIsAllowedType_61 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineDetailsScreen.pcf: line 181, column 121
    function verifyValueRangeIsAllowedType_61 ($$arg :  typekey.CalcStepOperatorType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineDetailsScreen.pcf: line 181, column 121
    function verifyValueRange_62 () : void {
      var __valueRangeArg = CalcStepOperatorType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_61(__valueRangeArg)
    }
    
    // 'visible' attribute on Row at RateRoutineDetailsScreen.pcf: line 228, column 60
    function visible_113 () : java.lang.Boolean {
      return ratingRoutineStep.IsVoidFunctionStep
    }
    
    // 'valueVisible' attribute on RangeCell (id=ActionOperator_Cell) at RateRoutineDetailsScreen.pcf: line 181, column 121
    function visible_55 () : java.lang.Boolean {
      return helper.operatorAvailable(ratingRoutineStep) and not ratingRoutineStep.IsSectionCommentStep
    }
    
    // 'valueVisible' attribute on TextCell (id=LeftParenthesisGroup_Cell) at RateRoutineDetailsScreen.pcf: line 190, column 74
    function visible_65 () : java.lang.Boolean {
      return not ratingRoutineStep.IsSectionCommentStep
    }
    
    // 'visible' attribute on Row at RateRoutineDetailsScreen.pcf: line 157, column 108
    function visible_82 () : java.lang.Boolean {
      return not (ratingRoutineStep.IsSectionCommentStep or ratingRoutineStep.IsVoidFunctionStep)
    }
    
    // 'visible' attribute on Row at RateRoutineDetailsScreen.pcf: line 209, column 62
    function visible_93 () : java.lang.Boolean {
      return ratingRoutineStep.IsSectionCommentStep
    }
    
    property get ratingRoutineStep () : entity.CalcStepDefinition {
      return getIteratedValue(1) as entity.CalcStepDefinition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineDetailsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=VersionButton) at RateRoutineDetailsScreen.pcf: line 61, column 53
    function action_13 () : void {
      ConfigureRateRoutine.go(true, rateRoutine, VERSION)
    }
    
    // 'action' attribute on ToolbarButton (id=BranchButton) at RateRoutineDetailsScreen.pcf: line 68, column 53
    function action_16 () : void {
      ConfigureRateRoutine.go(true, rateRoutine, BRANCH)
    }
    
    // 'action' attribute on ToolbarButton (id=CopyButton) at RateRoutineDetailsScreen.pcf: line 75, column 53
    function action_19 () : void {
      ConfigureRateRoutine.go(true, rateRoutine, COPY)
    }
    
    // 'action' attribute on ToolbarButton (id=Delete) at RateRoutineDetailsScreen.pcf: line 83, column 53
    function action_23 () : void {
      helper.deleteRoutine()
    }
    
    // 'action' attribute on TextValue (id=GoToRateBook) at RateRoutineDetailsScreen.pcf: line 90, column 45
    function action_25 () : void {
      RateBookDetail.go(rateBook)
    }
    
    // 'action' attribute on TextValue (id=GoToRateRoutines) at RateRoutineDetailsScreen.pcf: line 97, column 45
    function action_31 () : void {
      RateRoutines.go()
    }
    
    // 'action' attribute on ToolbarButton (id=EditButton) at RateRoutineDetailsScreen.pcf: line 53, column 53
    function action_9 () : void {
      ConfigureRateRoutine.go(false, rateRoutine, UNDEFINED)
    }
    
    // 'action' attribute on ToolbarButton (id=EditButton) at RateRoutineDetailsScreen.pcf: line 53, column 53
    function action_dest_10 () : pcf.api.Destination {
      return pcf.ConfigureRateRoutine.createDestination(false, rateRoutine, UNDEFINED)
    }
    
    // 'action' attribute on ToolbarButton (id=VersionButton) at RateRoutineDetailsScreen.pcf: line 61, column 53
    function action_dest_14 () : pcf.api.Destination {
      return pcf.ConfigureRateRoutine.createDestination(true, rateRoutine, VERSION)
    }
    
    // 'action' attribute on ToolbarButton (id=BranchButton) at RateRoutineDetailsScreen.pcf: line 68, column 53
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ConfigureRateRoutine.createDestination(true, rateRoutine, BRANCH)
    }
    
    // 'action' attribute on ToolbarButton (id=CopyButton) at RateRoutineDetailsScreen.pcf: line 75, column 53
    function action_dest_20 () : pcf.api.Destination {
      return pcf.ConfigureRateRoutine.createDestination(true, rateRoutine, COPY)
    }
    
    // 'action' attribute on TextValue (id=GoToRateBook) at RateRoutineDetailsScreen.pcf: line 90, column 45
    function action_dest_26 () : pcf.api.Destination {
      return pcf.RateBookDetail.createDestination(rateBook)
    }
    
    // 'action' attribute on TextValue (id=GoToRateRoutines) at RateRoutineDetailsScreen.pcf: line 97, column 45
    function action_dest_32 () : pcf.api.Destination {
      return pcf.RateRoutines.createDestination()
    }
    
    // 'available' attribute on ToolbarButton (id=VersionButton) at RateRoutineDetailsScreen.pcf: line 61, column 53
    function available_11 () : java.lang.Boolean {
      return isLatestVersion
    }
    
    // 'available' attribute on ToolbarButton (id=EditButton) at RateRoutineDetailsScreen.pcf: line 53, column 53
    function available_7 () : java.lang.Boolean {
      return not rateRoutine.isIncludedInPromotedRateBook()
    }
    
    // 'def' attribute on PanelRef at RateRoutineDetailsScreen.pcf: line 44, column 72
    function def_onEnter_34 (def :  pcf.RateRoutineDV) : void {
      def.onEnter(rateRoutine, false, UNDEFINED, {}, {})
    }
    
    // 'def' attribute on PanelRef at RateRoutineDetailsScreen.pcf: line 103, column 224
    function def_onEnter_36 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(rateRoutine, { "Name", "Description"}, { DisplayKey.get("Web.Rating.RateRoutines.Name"), DisplayKey.get("Web.Rating.RateRoutines.Description") })
    }
    
    // 'def' attribute on PanelRef at RateRoutineDetailsScreen.pcf: line 44, column 72
    function def_refreshVariables_35 (def :  pcf.RateRoutineDV) : void {
      def.refreshVariables(rateRoutine, false, UNDEFINED, {}, {})
    }
    
    // 'def' attribute on PanelRef at RateRoutineDetailsScreen.pcf: line 103, column 224
    function def_refreshVariables_37 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(rateRoutine, { "Name", "Description"}, { DisplayKey.get("Web.Rating.RateRoutines.Name"), DisplayKey.get("Web.Rating.RateRoutines.Description") })
    }
    
    // 'initialValue' attribute on Variable at RateRoutineDetailsScreen.pcf: line 16, column 62
    function initialValue_0 () : gw.pcf.rating.flow.RateRoutineEditScreenHelper {
      return new gw.pcf.rating.flow.RateRoutineEditScreenHelper(rateRoutine, CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineDetailsScreen.pcf: line 20, column 23
    function initialValue_1 () : boolean {
      return rateRoutine.isLatestVersion()
    }
    
    // 'initialValue' attribute on Variable at RateRoutineDetailsScreen.pcf: line 25, column 63
    function initialValue_2 () : java.util.List<entity.CalcStepDefinition> {
      return rateRoutine.OrderedSteps
    }
    
    // 'initialValue' attribute on Variable at RateRoutineDetailsScreen.pcf: line 30, column 85
    function initialValue_3 () : java.util.HashMap<entity.CalcStepDefinition, java.lang.Integer> {
      return rateRoutine.StepIndentLevels as java.util.HashMap<entity.CalcStepDefinition, java.lang.Integer>
    }
    
    // 'label' attribute on AlertBar (id=AlertBarForDeletedParamSet) at RateRoutineDetailsScreen.pcf: line 39, column 49
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.Rating.Flow.CalcRoutine.ParameterSetDeletedAlert", rateRoutine.ParameterSet.Name)
    }
    
    // 'value' attribute on RowIterator (id=RatingRoutineSteps) at RateRoutineDetailsScreen.pcf: line 155, column 77
    function value_114 () : gw.util.IOrderedList<entity.CalcStepDefinition> {
      return rateRoutine.Steps.orderBy(\rr -> rr.SortOrder)
    }
    
    // 'value' attribute on TextValue (id=GoToRateBook) at RateRoutineDetailsScreen.pcf: line 90, column 45
    function value_27 () : java.lang.String {
      return DisplayKey.get("Web.Rating.RateRoutines.UpToRateBook", rateBook.BookName)
    }
    
    // 'visible' attribute on TextValue (id=GoToRateBook) at RateRoutineDetailsScreen.pcf: line 90, column 45
    function visible_24 () : java.lang.Boolean {
      return rateBook != null
    }
    
    // 'visible' attribute on TextValue (id=GoToRateRoutines) at RateRoutineDetailsScreen.pcf: line 97, column 45
    function visible_30 () : java.lang.Boolean {
      return rateBook == null
    }
    
    // 'visible' attribute on AlertBar (id=RateRoutineUsedByPromotedBookMessage) at RateRoutineDetailsScreen.pcf: line 35, column 61
    function visible_4 () : java.lang.Boolean {
      return rateRoutine.isIncludedInPromotedRateBook()
    }
    
    // 'visible' attribute on AlertBar (id=AlertBarForDeletedParamSet) at RateRoutineDetailsScreen.pcf: line 39, column 49
    function visible_5 () : java.lang.Boolean {
      return helper.isParameterSetDeleted()
    }
    
    // 'visible' attribute on ToolbarButton (id=EditButton) at RateRoutineDetailsScreen.pcf: line 53, column 53
    function visible_8 () : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    property get helper () : gw.pcf.rating.flow.RateRoutineEditScreenHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.flow.RateRoutineEditScreenHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.flow.RateRoutineEditScreenHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get indentLevelMap () : java.util.HashMap<entity.CalcStepDefinition, java.lang.Integer> {
      return getVariableValue("indentLevelMap", 0) as java.util.HashMap<entity.CalcStepDefinition, java.lang.Integer>
    }
    
    property set indentLevelMap ($arg :  java.util.HashMap<entity.CalcStepDefinition, java.lang.Integer>) {
      setVariableValue("indentLevelMap", 0, $arg)
    }
    
    property get isLatestVersion () : boolean {
      return getVariableValue("isLatestVersion", 0) as java.lang.Boolean
    }
    
    property set isLatestVersion ($arg :  boolean) {
      setVariableValue("isLatestVersion", 0, $arg)
    }
    
    property get orderedSteps () : java.util.List<entity.CalcStepDefinition> {
      return getVariableValue("orderedSteps", 0) as java.util.List<entity.CalcStepDefinition>
    }
    
    property set orderedSteps ($arg :  java.util.List<entity.CalcStepDefinition>) {
      setVariableValue("orderedSteps", 0, $arg)
    }
    
    property get rateBook () : RateBook {
      return getRequireValue("rateBook", 0) as RateBook
    }
    
    property set rateBook ($arg :  RateBook) {
      setRequireValue("rateBook", 0, $arg)
    }
    
    property get rateRoutine () : CalcRoutineDefinition {
      return getRequireValue("rateRoutine", 0) as CalcRoutineDefinition
    }
    
    property set rateRoutine ($arg :  CalcRoutineDefinition) {
      setRequireValue("rateRoutine", 0, $arg)
    }
    
    
  }
  
  
}