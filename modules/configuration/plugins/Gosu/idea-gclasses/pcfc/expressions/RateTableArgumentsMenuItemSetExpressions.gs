package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RateTableArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableArgumentsMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateTableArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RateTableArgumentsMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=localVariable) at RateTableArgumentsMenuItemSet.pcf: line 75, column 35
    function action_10 () : void {
      gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.setLocalVar(arg, localVar)
    }
    
    // 'label' attribute on MenuItem (id=localVariable) at RateTableArgumentsMenuItemSet.pcf: line 75, column 35
    function label_11 () : java.lang.Object {
      return localVar.Label
    }
    
    property get localVar () : gw.rating.flow.LocalVariable {
      return getIteratedValue(1) as gw.rating.flow.LocalVariable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateTableArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends RateTableArgumentsMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 93, column 191
    function action_15 () : void {
      RateRoutineEntityPopup.push(arg, arg.CalcStepDefinition, argParamTypes, inScopeParameter.Code)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPullRightMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 98, column 194
    function action_22 () : void {
      RateRoutineEntityPopup.push(arg, arg.CalcStepDefinition, argParamTypes, inScopeParameter.Code)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 93, column 191
    function action_dest_16 () : pcf.api.Destination {
      return pcf.RateRoutineEntityPopup.createDestination(arg, arg.CalcStepDefinition, argParamTypes, inScopeParameter.Code)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPullRightMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 98, column 194
    function action_dest_23 () : pcf.api.Destination {
      return pcf.RateRoutineEntityPopup.createDestination(arg, arg.CalcStepDefinition, argParamTypes, inScopeParameter.Code)
    }
    
    // 'label' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 93, column 191
    function label_17 () : java.lang.Object {
      return DisplayKey.get("Web.Rating.Flow.CalcRoutine.EntityFieldPopupMenuItem", inScopeParameter.Code.DisplayName)
    }
    
    // 'label' attribute on MenuItem (id=InScopeEntityPullRightMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 98, column 194
    function label_24 () : java.lang.Object {
      return inScopeParameter.Code.DisplayName
    }
    
    // 'value' attribute on MenuItemIterator (id=inScopeUsageList) at RateTableArgumentsMenuItemSet.pcf: line 103, column 80
    function value_20 () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.getSortedInScopeFields(inScopeParameter, paramInScopeUsageMap, argParamTypes, gw.pcf.rating.flow.CompareOrAssign.COMPARE)
    }
    
    // 'visible' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 93, column 191
    function visible_14 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.showEntityPopupMenu(inScopeParameter, paramInScopeUsageMap, argParamTypes, gw.pcf.rating.flow.CompareOrAssign.COMPARE)
    }
    
    // 'visible' attribute on MenuItem (id=InScopeEntityPullRightMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 98, column 194
    function visible_21 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.showEntityPullRightMenu(inScopeParameter, paramInScopeUsageMap, argParamTypes, gw.pcf.rating.flow.CompareOrAssign.COMPARE)
    }
    
    property get inScopeParameter () : entity.CalcRoutineParameter {
      return getIteratedValue(1) as entity.CalcRoutineParameter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateTableArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends IteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=inScopeUsageMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 107, column 49
    function action_18 () : void {
      gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.setInScopeOperand(arg, inScopeParameter.Code, inScopeUsage);arg.clearDependentValues()
    }
    
    // 'label' attribute on MenuItem (id=inScopeUsageMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 107, column 49
    function label_19 () : java.lang.Object {
      return inScopeUsage.DisplayName
    }
    
    property get inScopeUsage () : gw.rating.flow.util.InScopeUsage {
      return getIteratedValue(2) as gw.rating.flow.util.InScopeUsage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateTableArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends RateTableArgumentsMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=constValue) at RateTableArgumentsMenuItemSet.pcf: line 137, column 48
    function action_33 () : void {
      gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.setConstant(arg, constantValue)
    }
    
    // 'label' attribute on MenuItem (id=constValue) at RateTableArgumentsMenuItemSet.pcf: line 137, column 48
    function label_34 () : java.lang.Object {
      return valueMap.get(constantValue)
    }
    
    property get constantValue () : java.lang.String {
      return getIteratedValue(1) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateTableArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends RateTableArgumentsMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=TypelistValue) at RateTableArgumentsMenuItemSet.pcf: line 169, column 28
    function action_49 () : void {
      gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.setTypeKeyConstant(arg, TypeKey)
    }
    
    // 'label' attribute on MenuItem (id=TypelistValue) at RateTableArgumentsMenuItemSet.pcf: line 169, column 28
    function label_50 () : java.lang.Object {
      return TypeKey
    }
    
    property get TypeKey () : gw.entity.TypeKey {
      return getIteratedValue(1) as gw.entity.TypeKey
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateTableArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateTableArgumentsMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=item) at RateTableArgumentsMenuItemSet.pcf: line 58, column 36
    function action_6 () : void {
      gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.setCostData(arg, costDataItem)
    }
    
    // 'available' attribute on MenuItem (id=item) at RateTableArgumentsMenuItemSet.pcf: line 58, column 36
    function available_5 () : java.lang.Boolean {
      return argParamTypes == null ? false : argParamTypes.hasMatch(\argParamType -> argParamType != String and gw.rating.flow.util.TypeMaps.isComparable(argParamType, costDataItem.FeatureType))
    }
    
    // 'checked' attribute on MenuItem (id=item) at RateTableArgumentsMenuItemSet.pcf: line 58, column 36
    function checked_8 () : java.lang.Boolean {
      return arg.OperandType == TC_INSCOPE and arg.InScopeParam == TC_COSTDATA and arg.InScopeValue == costDataItem.Path
    }
    
    // 'label' attribute on MenuItem (id=item) at RateTableArgumentsMenuItemSet.pcf: line 58, column 36
    function label_7 () : java.lang.Object {
      return costDataItem.Path
    }
    
    property get costDataItem () : gw.rating.flow.util.InScopeUsage {
      return getIteratedValue(1) as gw.rating.flow.util.InScopeUsage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateTableArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableArgumentsMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ConstantPopup) at RateTableArgumentsMenuItemSet.pcf: line 119, column 95
    function action_29 () : void {
      RateRoutineConstantPopup.push(arg)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineConstantMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 127, column 98
    function action_38 () : void {
      gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.resetConstant(arg)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineDateConstantMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 146, column 93
    function action_41 () : void {
      RateRoutineDateConstantPopup.push(arg)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineTypekeyConstantMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 154, column 95
    function action_46 () : void {
      RateRoutineTypekeyConstantPopup.push(arg, argParamTypes.firstWhere(\ elt -> elt typeis gw.entity.ITypeList).Name)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineClearMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 178, column 86
    function action_56 () : void {
      gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.clear(arg)
    }
    
    // 'action' attribute on MenuItem (id=ConstantPopup) at RateTableArgumentsMenuItemSet.pcf: line 119, column 95
    function action_dest_30 () : pcf.api.Destination {
      return pcf.RateRoutineConstantPopup.createDestination(arg)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineDateConstantMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 146, column 93
    function action_dest_42 () : pcf.api.Destination {
      return pcf.RateRoutineDateConstantPopup.createDestination(arg)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineTypekeyConstantMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 154, column 95
    function action_dest_47 () : pcf.api.Destination {
      return pcf.RateRoutineTypekeyConstantPopup.createDestination(arg, argParamTypes.firstWhere(\ elt -> elt typeis gw.entity.ITypeList).Name)
    }
    
    // 'available' attribute on MenuItem (id=ConstantPopup) at RateTableArgumentsMenuItemSet.pcf: line 119, column 95
    function available_27 () : java.lang.Boolean {
      return not (arg.ParameterTypeIsDate or arg.ParameterTypeIsTypeList)
    }
    
    // 'available' attribute on MenuItem (id=RateRoutineConstantMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 127, column 98
    function available_36 () : java.lang.Boolean {
      return not (arg.ParameterTypeIsDate or arg.ParameterTypeIsTypeList) and (not arg.HasDependency or !arg.AvailableStringValues.Empty)
    }
    
    // 'available' attribute on MenuItem (id=RateRoutineDateConstantMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 146, column 93
    function available_40 () : java.lang.Boolean {
      return arg.ParameterTypeIsDate
    }
    
    // 'available' attribute on MenuItem (id=RateRoutineTypekeyConstantMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 154, column 95
    function available_44 () : java.lang.Boolean {
      return arg.ParameterTypeIsTypeList
    }
    
    // 'available' attribute on MenuItem (id=RateRoutineClearMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 178, column 86
    function available_55 () : java.lang.Boolean {
      return arg.OverrideSource
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineVarMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 66, column 89
    function checked_13 () : java.lang.Boolean {
      return arg.OperandType == TC_LOCALVAR
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineEntityMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 83, column 91
    function checked_26 () : java.lang.Boolean {
      return arg.OperandType == TC_INSCOPE and arg.InScopeParam != TC_COSTDATA
    }
    
    // 'checked' attribute on MenuItem (id=ConstantPopup) at RateTableArgumentsMenuItemSet.pcf: line 119, column 95
    function checked_31 () : java.lang.Boolean {
      return arg.IsEditableConstant
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineDateConstantMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 146, column 93
    function checked_43 () : java.lang.Boolean {
      return arg.OperandType == TC_CONSTANT and arg.IsDate
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineTypekeyConstantMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 154, column 95
    function checked_48 () : java.lang.Boolean {
      return arg.OperandType == TC_CONSTANT and arg.IsTypeKey
    }
    
    // 'initialValue' attribute on Variable at RateTableArgumentsMenuItemSet.pcf: line 26, column 48
    function initialValue_0 () : List<CalcRoutineParameter> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.filteredParamSet(arg.CalcRoutineDefinition.ParameterSet).sortBy(\param -> param.DisplayName)
    }
    
    // 'initialValue' attribute on Variable at RateTableArgumentsMenuItemSet.pcf: line 31, column 58
    function initialValue_1 () : java.util.Set<gw.lang.reflect.IType> {
      return gw.rating.flow.util.RateFlowReflection.getTableParameterTypes(arg)
    }
    
    // 'initialValue' attribute on Variable at RateTableArgumentsMenuItemSet.pcf: line 36, column 70
    function initialValue_2 () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return gw.pcf.rating.flow.RateRoutineEditScreenHelper.getCostDataUsages(arg.CalcRoutineDefinition.ParameterSet)
    }
    
    // 'initialValue' attribute on Variable at RateTableArgumentsMenuItemSet.pcf: line 41, column 71
    function initialValue_3 () : java.util.Map<java.lang.String, java.lang.String> {
      return arg.AvailableStringValues
    }
    
    // 'initialValue' attribute on Variable at RateTableArgumentsMenuItemSet.pcf: line 46, column 56
    function initialValue_4 () : List<gw.rating.flow.LocalVariable> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.filterAndSortLocalVars(argParamTypes, availLocalVariables)
    }
    
    // 'value' attribute on MenuItemIterator (id=availableLocalVars) at RateTableArgumentsMenuItemSet.pcf: line 71, column 72
    function value_12 () : java.util.List<gw.rating.flow.LocalVariable> {
      return filteredAndSortedLocalVars
    }
    
    // 'value' attribute on MenuItemIterator (id=InscopeEntities) at RateTableArgumentsMenuItemSet.pcf: line 88, column 71
    function value_25 () : java.util.List<entity.CalcRoutineParameter> {
      return inScopeParameters
    }
    
    // 'value' attribute on MenuItemIterator (id=availableConstants) at RateTableArgumentsMenuItemSet.pcf: line 133, column 100
    function value_35 () : java.lang.String[] {
      return valueMap.Keys.toTypedArray()
    }
    
    // 'value' attribute on MenuItemIterator (id=TypelistIterator) at RateTableArgumentsMenuItemSet.pcf: line 165, column 61
    function value_51 () : java.util.List<gw.entity.TypeKey> {
      return arg.AvailableTypeListValues
    }
    
    // 'value' attribute on MenuItemIterator (id=RateRoutineCostDataMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 51, column 74
    function value_9 () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return costDataUsages
    }
    
    // 'visible' attribute on MenuItem (id=ConstantPopup) at RateTableArgumentsMenuItemSet.pcf: line 119, column 95
    function visible_28 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.showConstantPopupMenu(arg)
    }
    
    // 'visible' attribute on MenuItemIterator (id=availableConstants) at RateTableArgumentsMenuItemSet.pcf: line 133, column 100
    function visible_32 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.showConstantPullrightMenu(arg)
    }
    
    // 'visible' attribute on MenuItem (id=RateRoutineConstantMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 127, column 98
    function visible_37 () : java.lang.Boolean {
      return not gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.showConstantPopupMenu(arg)
    }
    
    // 'visible' attribute on MenuItem (id=RateRoutineTypekeyConstantMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 154, column 95
    function visible_45 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.showTypelistPopupMenu(arg)
    }
    
    // 'visible' attribute on MenuItem (id=RateRoutineTypekeyConstantPullRightMenuItem) at RateTableArgumentsMenuItemSet.pcf: line 160, column 98
    function visible_53 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.showTypelistPullrightMenu(arg)
    }
    
    property get arg () : CalcStepDefinitionArgument {
      return getRequireValue("arg", 0) as CalcStepDefinitionArgument
    }
    
    property set arg ($arg :  CalcStepDefinitionArgument) {
      setRequireValue("arg", 0, $arg)
    }
    
    property get argParamTypes () : java.util.Set<gw.lang.reflect.IType> {
      return getVariableValue("argParamTypes", 0) as java.util.Set<gw.lang.reflect.IType>
    }
    
    property set argParamTypes ($arg :  java.util.Set<gw.lang.reflect.IType>) {
      setVariableValue("argParamTypes", 0, $arg)
    }
    
    property get availLocalVariables () : List<gw.rating.flow.LocalVariable> {
      return getRequireValue("availLocalVariables", 0) as List<gw.rating.flow.LocalVariable>
    }
    
    property set availLocalVariables ($arg :  List<gw.rating.flow.LocalVariable>) {
      setRequireValue("availLocalVariables", 0, $arg)
    }
    
    property get costDataUsages () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return getVariableValue("costDataUsages", 0) as java.util.List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set costDataUsages ($arg :  java.util.List<gw.rating.flow.util.InScopeUsage>) {
      setVariableValue("costDataUsages", 0, $arg)
    }
    
    property get filteredAndSortedLocalVars () : List<gw.rating.flow.LocalVariable> {
      return getVariableValue("filteredAndSortedLocalVars", 0) as List<gw.rating.flow.LocalVariable>
    }
    
    property set filteredAndSortedLocalVars ($arg :  List<gw.rating.flow.LocalVariable>) {
      setVariableValue("filteredAndSortedLocalVars", 0, $arg)
    }
    
    property get inScopeParameters () : List<CalcRoutineParameter> {
      return getVariableValue("inScopeParameters", 0) as List<CalcRoutineParameter>
    }
    
    property set inScopeParameters ($arg :  List<CalcRoutineParameter>) {
      setVariableValue("inScopeParameters", 0, $arg)
    }
    
    property get lineCode () : String {
      return getRequireValue("lineCode", 0) as String
    }
    
    property set lineCode ($arg :  String) {
      setRequireValue("lineCode", 0, $arg)
    }
    
    property get paramInScopeUsageMap () : java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>> {
      return getRequireValue("paramInScopeUsageMap", 0) as java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>>
    }
    
    property set paramInScopeUsageMap ($arg :  java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>>) {
      setRequireValue("paramInScopeUsageMap", 0, $arg)
    }
    
    property get tableName () : String {
      return getRequireValue("tableName", 0) as String
    }
    
    property set tableName ($arg :  String) {
      setRequireValue("tableName", 0, $arg)
    }
    
    property get valueMap () : java.util.Map<java.lang.String, java.lang.String> {
      return getVariableValue("valueMap", 0) as java.util.Map<java.lang.String, java.lang.String>
    }
    
    property set valueMap ($arg :  java.util.Map<java.lang.String, java.lang.String>) {
      setVariableValue("valueMap", 0, $arg)
    }
    
    
  }
  
  
}