package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineOperandMenuItemSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineOperandMenuItemSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineOperandMenuItemSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RateRoutineOperandMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 72, column 193
    function action_11 () : void {
      RateRoutineEntityPopup.push(operand, operand.CalcStep, storeTargetTypes, inScopeParameter.Code)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPullRightMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 78, column 197
    function action_19 () : void {
      RateRoutineEntityPopup.push(operand, operand.CalcStep, storeTargetTypes, inScopeParameter.Code)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 72, column 193
    function action_dest_12 () : pcf.api.Destination {
      return pcf.RateRoutineEntityPopup.createDestination(operand, operand.CalcStep, storeTargetTypes, inScopeParameter.Code)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPullRightMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 78, column 197
    function action_dest_20 () : pcf.api.Destination {
      return pcf.RateRoutineEntityPopup.createDestination(operand, operand.CalcStep, storeTargetTypes, inScopeParameter.Code)
    }
    
    // 'label' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 72, column 193
    function label_13 () : java.lang.Object {
      return DisplayKey.get("Web.Rating.Flow.CalcRoutine.EntityFieldPopupMenuItem", inScopeParameter.Code.DisplayName)
    }
    
    // 'label' attribute on MenuItem (id=InScopeEntityPullRightMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 78, column 197
    function label_21 () : java.lang.Object {
      return inScopeParameter.Code.DisplayName
    }
    
    // 'value' attribute on MenuItemIterator (id=inScopeUsageList) at RateRoutineOperandMenuItemSet.default.pcf: line 83, column 80
    function value_17 () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.getSortedInScopeFields(inScopeParameter, paramInScopeUsageMap, storeTargetTypes,  gw.pcf.rating.flow.CompareOrAssign.ASSIGN)
    }
    
    // 'visible' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 72, column 193
    function visible_10 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.showEntityPopupMenu(inScopeParameter, paramInScopeUsageMap, storeTargetTypes, gw.pcf.rating.flow.CompareOrAssign.ASSIGN)
    }
    
    // 'visible' attribute on MenuItem (id=InScopeEntityPullRightMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 78, column 197
    function visible_18 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.showEntityPullRightMenu(inScopeParameter, paramInScopeUsageMap, storeTargetTypes,  gw.pcf.rating.flow.CompareOrAssign.ASSIGN)
    }
    
    property get inScopeParameter () : entity.CalcRoutineParameter {
      return getIteratedValue(1) as entity.CalcRoutineParameter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineOperandMenuItemSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=inScopeUsageMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 89, column 44
    function action_15 () : void {
      gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.setInScopeOperand(operand, inScopeParameter.Code, inScopeUsage)
    }
    
    // 'available' attribute on MenuItem (id=inScopeUsageMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 89, column 44
    function available_14 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutineOperandMenuHelper.showPullRight(operand, inScopeUsage.FeatureType)
    }
    
    // 'label' attribute on MenuItem (id=inScopeUsageMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 89, column 44
    function label_16 () : java.lang.Object {
      return inScopeUsage.DisplayName
    }
    
    property get inScopeUsage () : gw.rating.flow.util.InScopeUsage {
      return getIteratedValue(2) as gw.rating.flow.util.InScopeUsage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineOperandMenuItemSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateRoutineOperandMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=item) at RateRoutineOperandMenuItemSet.default.pcf: line 47, column 38
    function action_4 () : void {
      operand.changeToOperandType(TC_INSCOPE); operand.InScopeParam = TC_COSTDATA; operand.InScopeValue = costDataItem.Path; operand.InScopeValueIsModifier = false; operand.InScopeValueType = costDataItem.FeatureType as String
    }
    
    // 'available' attribute on MenuItem (id=item) at RateRoutineOperandMenuItemSet.default.pcf: line 47, column 38
    function available_3 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutineOperandMenuHelper.showPullRight(operand, costDataItem.FeatureType)
    }
    
    // 'label' attribute on MenuItem (id=item) at RateRoutineOperandMenuItemSet.default.pcf: line 47, column 38
    function label_5 () : java.lang.Object {
      return costDataItem.Path
    }
    
    property get costDataItem () : gw.rating.flow.util.InScopeUsage {
      return getIteratedValue(1) as gw.rating.flow.util.InScopeUsage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineOperandMenuItemSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineOperandMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineRateTableMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 99, column 90
    function action_24 () : void {
      RateRoutineRateTablePopup.push(operand, routine, paramInScopeUsageMap, storeTargetTypes)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineConditionalMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 118, column 41
    function action_32 () : void {
      RateRoutineConditionalPopup.push(operand, routine, paramInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineConstantMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 126, column 36
    function action_36 () : void {
      operand.changeToOperandType(TC_CONSTANT);operand.maybeClearConstantSubtypeValue(null)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineDateConstantMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 133, column 93
    function action_39 () : void {
      RateRoutineDateConstantPopup.push(operand)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineTypekeyConstantMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 140, column 94
    function action_43 () : void {
      gw.pcf.rating.flow.RateRoutineOperandMenuHelper.pushRateRoutineTypekeyConstantPopup(operand, storeTargetTypes)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineFunctionMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 55, column 89
    function action_7 () : void {
      RateRoutineFunctionPopup.push(operand, storeTargetTypes, paramInScopeUsageMap)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineRateTableMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 99, column 90
    function action_dest_25 () : pcf.api.Destination {
      return pcf.RateRoutineRateTablePopup.createDestination(operand, routine, paramInScopeUsageMap, storeTargetTypes)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineConditionalMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 118, column 41
    function action_dest_33 () : pcf.api.Destination {
      return pcf.RateRoutineConditionalPopup.createDestination(operand, routine, paramInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineDateConstantMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 133, column 93
    function action_dest_40 () : pcf.api.Destination {
      return pcf.RateRoutineDateConstantPopup.createDestination(operand)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineFunctionMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 55, column 89
    function action_dest_8 () : pcf.api.Destination {
      return pcf.RateRoutineFunctionPopup.createDestination(operand, storeTargetTypes, paramInScopeUsageMap)
    }
    
    // 'available' attribute on MenuItem (id=RateRoutineConditionalMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 118, column 41
    function available_30 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutineOperandMenuHelper.showConditionalPullRight(operand)
    }
    
    // 'available' attribute on MenuItem (id=RateRoutineConstantMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 126, column 36
    function available_35 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutineOperandMenuHelper.showConstantPullRight(operand)
    }
    
    // 'available' attribute on MenuItem (id=RateRoutineDateConstantMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 133, column 93
    function available_38 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutineOperandMenuHelper.showDateConstantPullRight(operand)
    }
    
    // 'available' attribute on MenuItem (id=RateRoutineTypekeyConstantMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 140, column 94
    function available_42 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutineOperandMenuHelper.showTypelistPullRight(storeTargetTypes)
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineEntityMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 62, column 30
    function checked_23 () : java.lang.Boolean {
      return operand.OperandType == TC_INSCOPE and operand.InScopeParam != TC_COSTDATA
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineRateTableMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 99, column 90
    function checked_26 () : java.lang.Boolean {
      return operand.OperandType == TC_RATETABLE
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineVarMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 106, column 30
    function checked_29 () : java.lang.Boolean {
      return operand.OperandType == TC_LOCALVAR
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineConditionalMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 118, column 41
    function checked_34 () : java.lang.Boolean {
      return operand.OperandType == TC_CONDITIONAL
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineConstantMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 126, column 36
    function checked_37 () : java.lang.Boolean {
      return operand.IsEditableConstant
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineDateConstantMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 133, column 93
    function checked_41 () : java.lang.Boolean {
      return operand.OperandType == TC_CONSTANT and operand.IsDate
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineTypekeyConstantMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 140, column 94
    function checked_44 () : java.lang.Boolean {
      return operand.OperandType == TC_CONSTANT and operand.IsTypeKey
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineFunctionMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 55, column 89
    function checked_9 () : java.lang.Boolean {
      return operand.OperandType == TC_RATEFUNC
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineOperandMenuItemSet.default.pcf: line 108, column 63
    function def_onEnter_27 (def :  pcf.RateRoutineOperandVariableMenuItemSet) : void {
      def.onEnter(operand)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineOperandMenuItemSet.default.pcf: line 108, column 63
    function def_refreshVariables_28 (def :  pcf.RateRoutineOperandVariableMenuItemSet) : void {
      def.refreshVariables(operand)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineOperandMenuItemSet.default.pcf: line 27, column 48
    function initialValue_0 () : List<CalcRoutineParameter> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.filteredParamSet(routine.ParameterSet).sortBy(\param -> param.DisplayName)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineOperandMenuItemSet.default.pcf: line 32, column 58
    function initialValue_1 () : java.util.Set<gw.lang.reflect.IType> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.getTargetDataTypes(operand)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineOperandMenuItemSet.default.pcf: line 37, column 41
    function initialValue_2 () : entity.CalcStepDefinition {
      return orderedSteps.firstWhere(\step -> step.StoreLocation.HasContent)
    }
    
    // 'value' attribute on MenuItemIterator (id=InscopeEntities) at RateRoutineOperandMenuItemSet.default.pcf: line 67, column 71
    function value_22 () : java.util.List<entity.CalcRoutineParameter> {
      return inScopeParameters
    }
    
    // 'value' attribute on MenuItemIterator at RateRoutineOperandMenuItemSet.default.pcf: line 41, column 74
    function value_6 () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return costDataUsages
    }
    
    // 'visible' attribute on MenuItem (id=RateRoutineConditionalMenuItem) at RateRoutineOperandMenuItemSet.default.pcf: line 118, column 41
    function visible_31 () : java.lang.Boolean {
      return operand.PrimaryOperand
    }
    
    property get costDataUsages () : List<gw.rating.flow.util.InScopeUsage> {
      return getRequireValue("costDataUsages", 0) as List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set costDataUsages ($arg :  List<gw.rating.flow.util.InScopeUsage>) {
      setRequireValue("costDataUsages", 0, $arg)
    }
    
    property get firstLocalVarStoreStep () : entity.CalcStepDefinition {
      return getVariableValue("firstLocalVarStoreStep", 0) as entity.CalcStepDefinition
    }
    
    property set firstLocalVarStoreStep ($arg :  entity.CalcStepDefinition) {
      setVariableValue("firstLocalVarStoreStep", 0, $arg)
    }
    
    property get inScopeParameters () : List<CalcRoutineParameter> {
      return getVariableValue("inScopeParameters", 0) as List<CalcRoutineParameter>
    }
    
    property set inScopeParameters ($arg :  List<CalcRoutineParameter>) {
      setVariableValue("inScopeParameters", 0, $arg)
    }
    
    property get operand () : CalcStepDefinitionOperand {
      return getRequireValue("operand", 0) as CalcStepDefinitionOperand
    }
    
    property set operand ($arg :  CalcStepDefinitionOperand) {
      setRequireValue("operand", 0, $arg)
    }
    
    property get orderedSteps () : java.util.List<entity.CalcStepDefinition> {
      return getRequireValue("orderedSteps", 0) as java.util.List<entity.CalcStepDefinition>
    }
    
    property set orderedSteps ($arg :  java.util.List<entity.CalcStepDefinition>) {
      setRequireValue("orderedSteps", 0, $arg)
    }
    
    property get paramInScopeUsageMap () : java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>> {
      return getRequireValue("paramInScopeUsageMap", 0) as java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>>
    }
    
    property set paramInScopeUsageMap ($arg :  java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>>) {
      setRequireValue("paramInScopeUsageMap", 0, $arg)
    }
    
    property get routine () : CalcRoutineDefinition {
      return getRequireValue("routine", 0) as CalcRoutineDefinition
    }
    
    property set routine ($arg :  CalcRoutineDefinition) {
      setRequireValue("routine", 0, $arg)
    }
    
    property get storeTargetTypes () : java.util.Set<gw.lang.reflect.IType> {
      return getVariableValue("storeTargetTypes", 0) as java.util.Set<gw.lang.reflect.IType>
    }
    
    property set storeTargetTypes ($arg :  java.util.Set<gw.lang.reflect.IType>) {
      setVariableValue("storeTargetTypes", 0, $arg)
    }
    
    
  }
  
  
}