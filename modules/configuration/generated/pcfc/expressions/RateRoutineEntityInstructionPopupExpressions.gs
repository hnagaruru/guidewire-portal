package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineEntityInstructionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineEntityInstructionPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineEntityInstructionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineEntityInstructionPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (calcStep :  CalcStepDefinition) : int {
      return 0
    }
    
    static function __constructorIndex (calcStep :  CalcStepDefinition, restrictToTargetDataTypes :  java.util.Set<gw.lang.reflect.IType>, selectedEntity :  CalcRoutineParamName) : int {
      return 1
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineEntityEditUpdate) at RateRoutineEntityInstructionPopup.pcf: line 46, column 81
    function action_5 () : void {
      helper.commitEntitySelection()
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineEntityEditCancel) at RateRoutineEntityInstructionPopup.pcf: line 50, column 81
    function action_6 () : void {
      CurrentLocation.cancel()
    }
    
    // 'afterEnter' attribute on Popup (id=RateRoutineEntityInstructionPopup) at RateRoutineEntityInstructionPopup.pcf: line 10, column 87
    function afterEnter_19 () : void {
      gw.pcf.rating.flow.RateRoutineEntityInstructionPopupHelper.afterEnterEntityPopup(selectedEntity, inScopeUsages)
    }
    
    // 'def' attribute on PanelRef at RateRoutineEntityInstructionPopup.pcf: line 72, column 94
    function def_onEnter_17 (def :  pcf.RateRoutineEntityInstructionLV) : void {
      def.onEnter(calcStep, inScopeUsages.toTypedArray(), helper)
    }
    
    // 'def' attribute on PanelRef at RateRoutineEntityInstructionPopup.pcf: line 72, column 94
    function def_refreshVariables_18 (def :  pcf.RateRoutineEntityInstructionLV) : void {
      def.refreshVariables(calcStep, inScopeUsages.toTypedArray(), helper)
    }
    
    // 'value' attribute on TextValue (id=RateRoutineInstructionTextFilter) at RateRoutineEntityInstructionPopup.pcf: line 92, column 42
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      textFilter = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=inScopeParamName_Input) at RateRoutineEntityInstructionPopup.pcf: line 65, column 54
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedEntity = (__VALUE_TO_SET as typekey.CalcRoutineParamName)
    }
    
    // 'filter' attribute on TypeKeyInput (id=inScopeParamName_Input) at RateRoutineEntityInstructionPopup.pcf: line 65, column 54
    function filter_10 (VALUE :  typekey.CalcRoutineParamName, VALUES :  typekey.CalcRoutineParamName[]) : java.lang.Boolean {
      return helper.filterInScopeParamDropDownRange(VALUE)
    }
    
    // 'filter' attribute on ToolbarFilterOption at RateRoutineEntityInstructionPopup.pcf: line 83, column 37
    function filter_12 () : gw.api.filters.IFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at RateRoutineEntityInstructionPopup.pcf: line 85, column 136
    function filters_13 () : gw.api.filters.IFilter[] {
      return gw.pcf.rating.flow.RateRoutineEntityPopupHelper.filtersForDataTypes(inScopeUsages, restrictToTargetDataTypes)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEntityInstructionPopup.pcf: line 22, column 58
    function initialValue_0 () : java.util.Set<gw.lang.reflect.IType> {
      return gw.rating.flow.util.TypeMaps.primitiveRateFlowTypes()
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEntityInstructionPopup.pcf: line 26, column 36
    function initialValue_1 () : CalcRoutineParamName {
      return calcStep.InScopeParam
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEntityInstructionPopup.pcf: line 30, column 74
    function initialValue_2 () : gw.pcf.rating.flow.RateRoutineEntityInstructionPopupHelper {
      return new gw.pcf.rating.flow.RateRoutineEntityInstructionPopupHelper(CurrentLocation, calcStep, restrictToTargetDataTypes as Set<Type>)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEntityInstructionPopup.pcf: line 35, column 60
    function initialValue_3 () : List<gw.rating.flow.util.InScopeUsage> {
      return helper.calculateInScopeUsages(selectedEntity, textFilter).sortBy(\ i -> i.UserFriendlyPath)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEntityInstructionPopup.pcf: line 39, column 22
    function initialValue_4 () : String {
      return null
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineEntityInstructionPopup.pcf: line 67, column 88
    function onChange_7 () : void {
      inScopeUsages = helper.changeSelectEntityTo(selectedEntity);
    }
    
    // 'value' attribute on TextValue (id=RateRoutineInstructionTextFilter) at RateRoutineEntityInstructionPopup.pcf: line 92, column 42
    function value_14 () : java.lang.String {
      return textFilter
    }
    
    // 'value' attribute on TypeKeyInput (id=inScopeParamName_Input) at RateRoutineEntityInstructionPopup.pcf: line 65, column 54
    function value_8 () : typekey.CalcRoutineParamName {
      return selectedEntity
    }
    
    override property get CurrentLocation () : pcf.RateRoutineEntityInstructionPopup {
      return super.CurrentLocation as pcf.RateRoutineEntityInstructionPopup
    }
    
    property get calcStep () : CalcStepDefinition {
      return getVariableValue("calcStep", 0) as CalcStepDefinition
    }
    
    property set calcStep ($arg :  CalcStepDefinition) {
      setVariableValue("calcStep", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.flow.RateRoutineEntityInstructionPopupHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.flow.RateRoutineEntityInstructionPopupHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.flow.RateRoutineEntityInstructionPopupHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get inScopeUsages () : List<gw.rating.flow.util.InScopeUsage> {
      return getVariableValue("inScopeUsages", 0) as List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set inScopeUsages ($arg :  List<gw.rating.flow.util.InScopeUsage>) {
      setVariableValue("inScopeUsages", 0, $arg)
    }
    
    property get restrictToTargetDataTypes () : java.util.Set<gw.lang.reflect.IType> {
      return getVariableValue("restrictToTargetDataTypes", 0) as java.util.Set<gw.lang.reflect.IType>
    }
    
    property set restrictToTargetDataTypes ($arg :  java.util.Set<gw.lang.reflect.IType>) {
      setVariableValue("restrictToTargetDataTypes", 0, $arg)
    }
    
    property get selectedEntity () : CalcRoutineParamName {
      return getVariableValue("selectedEntity", 0) as CalcRoutineParamName
    }
    
    property set selectedEntity ($arg :  CalcRoutineParamName) {
      setVariableValue("selectedEntity", 0, $arg)
    }
    
    property get textFilter () : String {
      return getVariableValue("textFilter", 0) as String
    }
    
    property set textFilter ($arg :  String) {
      setVariableValue("textFilter", 0, $arg)
    }
    
    
  }
  
  
}