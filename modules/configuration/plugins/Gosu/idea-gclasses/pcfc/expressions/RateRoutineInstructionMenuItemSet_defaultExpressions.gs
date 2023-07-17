package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineInstructionMenuItemSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineInstructionMenuItemSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineInstructionMenuItemSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RateRoutineInstructionMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 73, column 122
    function action_12 () : void {
      RateRoutineEntityInstructionPopup.push(step, storeTargetTypes, writableParam.Code)
    }
    
    // 'action' attribute on MenuItem (id=WritablePullRightMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 78, column 125
    function action_19 () : void {
      RateRoutineEntityInstructionPopup.push(step, storeTargetTypes, writableParam.Code)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 73, column 122
    function action_dest_13 () : pcf.api.Destination {
      return pcf.RateRoutineEntityInstructionPopup.createDestination(step, storeTargetTypes, writableParam.Code)
    }
    
    // 'action' attribute on MenuItem (id=WritablePullRightMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 78, column 125
    function action_dest_20 () : pcf.api.Destination {
      return pcf.RateRoutineEntityInstructionPopup.createDestination(step, storeTargetTypes, writableParam.Code)
    }
    
    // 'label' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 73, column 122
    function label_14 () : java.lang.Object {
      return DisplayKey.get("Web.Rating.Flow.CalcRoutine.EntityFieldPopupMenuItem", writableParam.Code.DisplayName)
    }
    
    // 'label' attribute on MenuItem (id=WritablePullRightMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 78, column 125
    function label_21 () : java.lang.Object {
      return writableParam.Code.DisplayName
    }
    
    // 'value' attribute on MenuItemIterator (id=inScopeUsageList) at RateRoutineInstructionMenuItemSet.default.pcf: line 83, column 80
    function value_17 () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return writableParamUsagesMap.get(writableParam)
    }
    
    // 'visible' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 73, column 122
    function visible_11 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutineEntityInstructionPopupHelper.showEntityPopupMenu(writableParam, step)
    }
    
    // 'visible' attribute on MenuItem (id=WritablePullRightMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 78, column 125
    function visible_18 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutineEntityInstructionPopupHelper.showEntityPullRightMenu(writableParam, step)
    }
    
    property get writableParam () : entity.CalcRoutineParameter {
      return getIteratedValue(1) as entity.CalcRoutineParameter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineInstructionMenuItemSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=inScopeUsageMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 89, column 39
    function action_15 () : void {
      step.setAssignmentValuesForInScopeTarget(writableParam.Code, inScopeUsage.Path, inScopeUsage.FeatureType)
    }
    
    // 'label' attribute on MenuItem (id=inScopeUsageMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 89, column 39
    function label_16 () : java.lang.Object {
      return inScopeUsage.DisplayName
    }
    
    property get inScopeUsage () : gw.rating.flow.util.InScopeUsage {
      return getIteratedValue(2) as gw.rating.flow.util.InScopeUsage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineInstructionMenuItemSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends RateRoutineInstructionMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=flowControlMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 129, column 33
    function action_32 () : void {
      step.changeToFlowControlStepType(flowControlStepType)
    }
    
    // 'checked' attribute on MenuItem (id=flowControlMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 129, column 33
    function checked_34 () : java.lang.Boolean {
      return step.StepType == flowControlStepType
    }
    
    // 'label' attribute on MenuItem (id=flowControlMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 129, column 33
    function label_33 () : java.lang.Object {
      return flowControlStepType
    }
    
    property get flowControlStepType () : typekey.CalcStepType {
      return getIteratedValue(1) as typekey.CalcStepType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineInstructionMenuItemSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateRoutineInstructionMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=item) at RateRoutineInstructionMenuItemSet.default.pcf: line 48, column 38
    function action_4 () : void {
      step.setAssignmentValuesForInScopeTarget(TC_COSTDATA, costDataItem.Path, costDataItem.FeatureType)
    }
    
    // 'label' attribute on MenuItem (id=item) at RateRoutineInstructionMenuItemSet.default.pcf: line 48, column 38
    function label_5 () : java.lang.Object {
      return costDataItem.Path
    }
    
    property get costDataItem () : gw.rating.flow.util.InScopeUsage {
      return getIteratedValue(1) as gw.rating.flow.util.InScopeUsage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineInstructionMenuItemSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineInstructionMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=NewVariableMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 109, column 33
    function action_26 () : void {
      RateRoutineNewVariablePopup.push(step, costDataUsages)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineInstructionCommentMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 117, column 36
    function action_29 () : void {
      step.setStepToSectionComment()
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineInstructionClearMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 137, column 31
    function action_36 () : void {
      helper.resetStepAndSetDefaultOperatorType()
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineFunctionMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 57, column 71
    function action_8 () : void {
      RateRoutineFunctionPopup.push(operand, {void}, paramInScopeUsageMap)
    }
    
    // 'action' attribute on MenuItem (id=NewVariableMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 109, column 33
    function action_dest_27 () : pcf.api.Destination {
      return pcf.RateRoutineNewVariablePopup.createDestination(step, costDataUsages)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineFunctionMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 57, column 71
    function action_dest_9 () : pcf.api.Destination {
      return pcf.RateRoutineFunctionPopup.createDestination(operand, {void}, paramInScopeUsageMap)
    }
    
    // 'available' attribute on MenuItem (id=RateRoutineEntityMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 63, column 30
    function available_23 () : java.lang.Boolean {
      return writableParams.Count > 0
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineFunctionMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 57, column 71
    function checked_10 () : java.lang.Boolean {
      return operand.OperandType == TC_RATEFUNC
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineVarMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 100, column 30
    function checked_28 () : java.lang.Boolean {
      return step.StepType == TC_ASSIGNMENT and step.InScopeParam != TC_COSTDATA and step.StoreLocation.NotBlank
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineInstructionCommentMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 117, column 36
    function checked_31 () : java.lang.Boolean {
      return step.IsSectionCommentStep
    }
    
    // 'def' attribute on MenuItemSetRef (id=variables) at RateRoutineInstructionMenuItemSet.default.pcf: line 103, column 25
    function def_onEnter_24 (def :  pcf.RateRoutineInstructionVariableMenuItemSet) : void {
      def.onEnter(step)
    }
    
    // 'def' attribute on MenuItemSetRef (id=variables) at RateRoutineInstructionMenuItemSet.default.pcf: line 103, column 25
    function def_refreshVariables_25 (def :  pcf.RateRoutineInstructionVariableMenuItemSet) : void {
      def.refreshVariables(step)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineInstructionMenuItemSet.default.pcf: line 23, column 72
    function initialValue_0 () : gw.pcf.rating.rateroutine.RateRoutineInstructionUIHelper {
      return new gw.pcf.rating.rateroutine.RateRoutineInstructionUIHelper(step)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineInstructionMenuItemSet.default.pcf: line 28, column 48
    function initialValue_1 () : entity.CalcStepDefinitionOperand {
      return step.PrimaryOperand
    }
    
    // 'initialValue' attribute on Variable at RateRoutineInstructionMenuItemSet.default.pcf: line 33, column 58
    function initialValue_2 () : java.util.Set<gw.lang.reflect.IType> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.getTargetDataTypes(operand)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineInstructionMenuItemSet.default.pcf: line 38, column 121
    function initialValue_3 () : java.util.Map<typekey.CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>> {
      return gw.pcf.rating.flow.RateRoutineEditScreenHelper.initializeInScopeParamInScopeUsageMap(step.CalcRoutineDefinition)
    }
    
    // 'label' attribute on MenuItem (id=RateRoutineInstructionCommentMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 117, column 36
    function label_30 () : java.lang.Object {
      return CalcStepType.TC_COMMENT.DisplayName
    }
    
    // 'value' attribute on MenuItemIterator (id=WritableParameters) at RateRoutineInstructionMenuItemSet.default.pcf: line 68, column 71
    function value_22 () : java.util.List<entity.CalcRoutineParameter> {
      return writableParams
    }
    
    // 'value' attribute on MenuItemIterator at RateRoutineInstructionMenuItemSet.default.pcf: line 122, column 68
    function value_35 () : gw.util.IOrderedList<typekey.CalcStepType> {
      return CalcStepType.TF_FLOWCONTROLSTEPS.TypeKeys.where(\key -> key != TC_LOOP and key != TC_ENDLOOP).toTypedArray().orderBy(\cst -> cst.Priority)
    }
    
    // 'value' attribute on MenuItemIterator (id=costDateItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 43, column 74
    function value_6 () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return costDataUsages
    }
    
    // 'visible' attribute on MenuItem (id=RateRoutineFunctionMenuItem) at RateRoutineInstructionMenuItemSet.default.pcf: line 57, column 71
    function visible_7 () : java.lang.Boolean {
      return step.IsBlankStep or step.StepType == TC_VOIDFUNCTION
    }
    
    property get costDataUsages () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return getRequireValue("costDataUsages", 0) as java.util.List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set costDataUsages ($arg :  java.util.List<gw.rating.flow.util.InScopeUsage>) {
      setRequireValue("costDataUsages", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.rateroutine.RateRoutineInstructionUIHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.rateroutine.RateRoutineInstructionUIHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.rateroutine.RateRoutineInstructionUIHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get operand () : entity.CalcStepDefinitionOperand {
      return getVariableValue("operand", 0) as entity.CalcStepDefinitionOperand
    }
    
    property set operand ($arg :  entity.CalcStepDefinitionOperand) {
      setVariableValue("operand", 0, $arg)
    }
    
    property get paramInScopeUsageMap () : java.util.Map<typekey.CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>> {
      return getVariableValue("paramInScopeUsageMap", 0) as java.util.Map<typekey.CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>>
    }
    
    property set paramInScopeUsageMap ($arg :  java.util.Map<typekey.CalcRoutineParamName, java.util.List<gw.rating.flow.util.InScopeUsage>>) {
      setVariableValue("paramInScopeUsageMap", 0, $arg)
    }
    
    property get step () : CalcStepDefinition {
      return getRequireValue("step", 0) as CalcStepDefinition
    }
    
    property set step ($arg :  CalcStepDefinition) {
      setRequireValue("step", 0, $arg)
    }
    
    property get storeTargetTypes () : java.util.Set<gw.lang.reflect.IType> {
      return getVariableValue("storeTargetTypes", 0) as java.util.Set<gw.lang.reflect.IType>
    }
    
    property set storeTargetTypes ($arg :  java.util.Set<gw.lang.reflect.IType>) {
      setVariableValue("storeTargetTypes", 0, $arg)
    }
    
    property get writableParamUsagesMap () : java.util.Map<CalcRoutineParameter, List<gw.rating.flow.util.InScopeUsage>> {
      return getRequireValue("writableParamUsagesMap", 0) as java.util.Map<CalcRoutineParameter, List<gw.rating.flow.util.InScopeUsage>>
    }
    
    property set writableParamUsagesMap ($arg :  java.util.Map<CalcRoutineParameter, List<gw.rating.flow.util.InScopeUsage>>) {
      setRequireValue("writableParamUsagesMap", 0, $arg)
    }
    
    property get writableParams () : List<CalcRoutineParameter> {
      return getRequireValue("writableParams", 0) as List<CalcRoutineParameter>
    }
    
    property set writableParams ($arg :  List<CalcRoutineParameter>) {
      setRequireValue("writableParams", 0, $arg)
    }
    
    
  }
  
  
}