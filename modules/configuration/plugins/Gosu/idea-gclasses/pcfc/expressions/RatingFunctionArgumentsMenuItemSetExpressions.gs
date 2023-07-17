package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RatingFunctionArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingFunctionArgumentsMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RatingFunctionArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RatingFunctionArgumentsMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=localVariable) at RatingFunctionArgumentsMenuItemSet.pcf: line 71, column 40
    function action_9 () : void {
      gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.setLocalVar(parameter, localVar)
    }
    
    // 'label' attribute on MenuItem (id=localVariable) at RatingFunctionArgumentsMenuItemSet.pcf: line 71, column 40
    function label_10 () : java.lang.Object {
      return localVar.Label
    }
    
    property get localVar () : gw.rating.flow.LocalVariable {
      return getIteratedValue(1) as gw.rating.flow.LocalVariable
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RatingFunctionArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends RatingFunctionArgumentsMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 89, column 191
    function action_14 () : void {
      RateRoutineEntityPopup.push(parameter, parameter.CalcStepDefinition, {argParamType}, inScopeParameter.Code)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPullRightMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 95, column 194
    function action_21 () : void {
      RateRoutineEntityPopup.push(parameter, parameter.CalcStepDefinition, {argParamType}, inScopeParameter.Code)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 89, column 191
    function action_dest_15 () : pcf.api.Destination {
      return pcf.RateRoutineEntityPopup.createDestination(parameter, parameter.CalcStepDefinition, {argParamType}, inScopeParameter.Code)
    }
    
    // 'action' attribute on MenuItem (id=InScopeEntityPullRightMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 95, column 194
    function action_dest_22 () : pcf.api.Destination {
      return pcf.RateRoutineEntityPopup.createDestination(parameter, parameter.CalcStepDefinition, {argParamType}, inScopeParameter.Code)
    }
    
    // 'label' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 89, column 191
    function label_16 () : java.lang.Object {
      return DisplayKey.get("Web.Rating.Flow.CalcRoutine.EntityFieldPopupMenuItem", inScopeParameter.Code.DisplayName)
    }
    
    // 'label' attribute on MenuItem (id=InScopeEntityPullRightMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 95, column 194
    function label_23 () : java.lang.Object {
      return inScopeParameter.Code.DisplayName
    }
    
    // 'value' attribute on MenuItemIterator (id=inScopeUsageList) at RatingFunctionArgumentsMenuItemSet.pcf: line 100, column 80
    function value_19 () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.getSortedInScopeFields(inScopeParameter, paramInScopeUsageMap, {argParamType}, gw.pcf.rating.flow.CompareOrAssign.ASSIGN)
    }
    
    // 'visible' attribute on MenuItem (id=InScopeEntityPopupMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 89, column 191
    function visible_13 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.showEntityPopupMenu(inScopeParameter, paramInScopeUsageMap, {argParamType}, gw.pcf.rating.flow.CompareOrAssign.ASSIGN)
    }
    
    // 'visible' attribute on MenuItem (id=InScopeEntityPullRightMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 95, column 194
    function visible_20 () : java.lang.Boolean {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.showEntityPullRightMenu(inScopeParameter, paramInScopeUsageMap, {argParamType}, gw.pcf.rating.flow.CompareOrAssign.ASSIGN)
    }
    
    property get inScopeParameter () : entity.CalcRoutineParameter {
      return getIteratedValue(1) as entity.CalcRoutineParameter
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RatingFunctionArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends IteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=inScopeUsageMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 105, column 44
    function action_17 () : void {
      gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.setInScopeOperand(parameter, inScopeParameter.Code, inScopeUsage)
    }
    
    // 'label' attribute on MenuItem (id=inScopeUsageMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 105, column 44
    function label_18 () : java.lang.Object {
      return inScopeUsage.DisplayName
    }
    
    property get inScopeUsage () : gw.rating.flow.util.InScopeUsage {
      return getIteratedValue(2) as gw.rating.flow.util.InScopeUsage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RatingFunctionArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RatingFunctionArgumentsMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=item) at RatingFunctionArgumentsMenuItemSet.pcf: line 53, column 38
    function action_5 () : void {
      gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.setCostData(parameter, costDataItem)
    }
    
    // 'available' attribute on MenuItem (id=item) at RatingFunctionArgumentsMenuItemSet.pcf: line 53, column 38
    function available_4 () : java.lang.Boolean {
      return argParamType == String ? false: gw.rating.flow.util.TypeMaps.isAssignable(argParamType, costDataItem.FeatureType)
    }
    
    // 'checked' attribute on MenuItem (id=item) at RatingFunctionArgumentsMenuItemSet.pcf: line 53, column 38
    function checked_7 () : java.lang.Boolean {
      return parameter.OperandType == TC_INSCOPE and parameter.InScopeParam == TC_COSTDATA and parameter.InScopeValue == costDataItem.Path
    }
    
    // 'label' attribute on MenuItem (id=item) at RatingFunctionArgumentsMenuItemSet.pcf: line 53, column 38
    function label_6 () : java.lang.Object {
      return costDataItem.Path
    }
    
    property get costDataItem () : gw.rating.flow.util.InScopeUsage {
      return getIteratedValue(1) as gw.rating.flow.util.InScopeUsage
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/RatingFunctionArgumentsMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingFunctionArgumentsMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineConstantMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 117, column 36
    function action_27 () : void {
      gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.resetConstant(parameter)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineDateConstantMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 125, column 36
    function action_30 () : void {
      RateRoutineDateConstantPopup.push(parameter)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineTypekeyConstantMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 133, column 36
    function action_34 () : void {
      RateRoutineTypekeyConstantPopup.push(parameter, argParamType.Name)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineDateConstantMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 125, column 36
    function action_dest_31 () : pcf.api.Destination {
      return pcf.RateRoutineDateConstantPopup.createDestination(parameter)
    }
    
    // 'action' attribute on MenuItem (id=RateRoutineTypekeyConstantMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 133, column 36
    function action_dest_35 () : pcf.api.Destination {
      return pcf.RateRoutineTypekeyConstantPopup.createDestination(parameter, argParamType.Name)
    }
    
    // 'available' attribute on MenuItem (id=RateRoutineConstantMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 117, column 36
    function available_26 () : java.lang.Boolean {
      return (!parameter.IsEditableConstant) and gw.rating.flow.util.TypeMaps.isAssignableByConstant(argParamType)
    }
    
    // 'available' attribute on MenuItem (id=RateRoutineDateConstantMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 125, column 36
    function available_29 () : java.lang.Boolean {
      return argParamType == java.util.Date
    }
    
    // 'available' attribute on MenuItem (id=RateRoutineTypekeyConstantMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 133, column 36
    function available_33 () : java.lang.Boolean {
      return gw.entity.TypeKey.Type.isAssignableFrom(argParamType)
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineVarMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 61, column 89
    function checked_12 () : java.lang.Boolean {
      return parameter.OperandType == TC_LOCALVAR
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineEntityMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 78, column 91
    function checked_25 () : java.lang.Boolean {
      return parameter.OperandType == TC_INSCOPE and parameter.InScopeParam != TC_COSTDATA
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineConstantMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 117, column 36
    function checked_28 () : java.lang.Boolean {
      return parameter.IsEditableConstant
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineDateConstantMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 125, column 36
    function checked_32 () : java.lang.Boolean {
      return parameter.OperandType == TC_CONSTANT and parameter.IsDate
    }
    
    // 'checked' attribute on MenuItem (id=RateRoutineTypekeyConstantMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 133, column 36
    function checked_36 () : java.lang.Boolean {
      return parameter.OperandType == TC_CONSTANT and parameter.IsTypeKey
    }
    
    // 'initialValue' attribute on Variable at RatingFunctionArgumentsMenuItemSet.pcf: line 26, column 48
    function initialValue_0 () : List<CalcRoutineParameter> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.filteredParamSet(parameter.CalcRoutineDefinition.ParameterSet).sortBy(\param -> param.DisplayName)
    }
    
    // 'initialValue' attribute on Variable at RatingFunctionArgumentsMenuItemSet.pcf: line 31, column 70
    function initialValue_1 () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return gw.pcf.rating.flow.RateRoutineEditScreenHelper.getCostDataUsages(parameter.CalcRoutineDefinition.ParameterSet)
    }
    
    // 'initialValue' attribute on Variable at RatingFunctionArgumentsMenuItemSet.pcf: line 36, column 37
    function initialValue_2 () : gw.lang.reflect.IType {
      return gw.rating.flow.util.RateFlowReflection.getFunctionParameterType(parameter.CalcRoutineDefinition.PolicyLinePatternCode, parameter.Operand.FunctionName, parameter.Parameter)
    }
    
    // 'initialValue' attribute on Variable at RatingFunctionArgumentsMenuItemSet.pcf: line 40, column 56
    function initialValue_3 () : List<gw.rating.flow.LocalVariable> {
      return gw.pcf.rating.flow.RateRoutinePullRightMenuHelper.filterAndSortLocalVars({argParamType}, availLocalVariables)
    }
    
    // 'value' attribute on MenuItemIterator (id=availableLocalVars) at RatingFunctionArgumentsMenuItemSet.pcf: line 66, column 72
    function value_11 () : java.util.List<gw.rating.flow.LocalVariable> {
      return filteredAndSortedLocalVars
    }
    
    // 'value' attribute on MenuItemIterator (id=InscopeEntities) at RatingFunctionArgumentsMenuItemSet.pcf: line 83, column 71
    function value_24 () : java.util.List<entity.CalcRoutineParameter> {
      return inScopeParameters
    }
    
    // 'value' attribute on MenuItemIterator (id=RatingFunctionCostDataMenuItem) at RatingFunctionArgumentsMenuItemSet.pcf: line 45, column 74
    function value_8 () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return costDataUsages
    }
    
    property get argParamType () : gw.lang.reflect.IType {
      return getVariableValue("argParamType", 0) as gw.lang.reflect.IType
    }
    
    property set argParamType ($arg :  gw.lang.reflect.IType) {
      setVariableValue("argParamType", 0, $arg)
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
    
    property get functionName () : String {
      return getRequireValue("functionName", 0) as String
    }
    
    property set functionName ($arg :  String) {
      setRequireValue("functionName", 0, $arg)
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
    
    property get parameter () : CalcStepDefinitionArgument {
      return getRequireValue("parameter", 0) as CalcStepDefinitionArgument
    }
    
    property set parameter ($arg :  CalcStepDefinitionArgument) {
      setRequireValue("parameter", 0, $arg)
    }
    
    
  }
  
  
}