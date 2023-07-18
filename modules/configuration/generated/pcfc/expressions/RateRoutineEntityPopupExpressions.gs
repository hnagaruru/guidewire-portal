package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineEntityPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineEntityPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineEntityPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineEntityPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (valueDelegate :  CalcStepValueDelegate, calcStep :  CalcStepDefinition) : int {
      return 0
    }
    
    static function __constructorIndex (valueDelegate :  CalcStepValueDelegate, calcStep :  CalcStepDefinition, restrictToTargetDataTypes :  java.util.Set<gw.lang.reflect.IType>, selectedEntity :  CalcRoutineParamName) : int {
      return 1
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineEntityEditUpdate) at RateRoutineEntityPopup.pcf: line 55, column 81
    function action_5 () : void {
      helper.commitEntitySelection()
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineEntityEditCancel) at RateRoutineEntityPopup.pcf: line 59, column 81
    function action_6 () : void {
      CurrentLocation.cancel()
    }
    
    // 'afterCommit' attribute on Popup (id=RateRoutineEntityPopup) at RateRoutineEntityPopup.pcf: line 11, column 87
    function afterCommit_33 (TopLocation :  pcf.api.Location) : void {
      valueDelegate.clearDependentValues()
    }
    
    // 'afterEnter' attribute on Popup (id=RateRoutineEntityPopup) at RateRoutineEntityPopup.pcf: line 11, column 87
    function afterEnter_34 () : void {
      gw.pcf.rating.flow.RateRoutinePopupHelper.afterEnterEntityPopup(valueDelegate, selectedEntity, inScopeUsages, helper)
    }
    
    // 'def' attribute on PanelRef at RateRoutineEntityPopup.pcf: line 81, column 73
    function def_onEnter_31 (def :  pcf.RateRoutineEntityLV) : void {
      def.onEnter(valueDelegate, inScopeUsages, helper)
    }
    
    // 'def' attribute on PanelRef at RateRoutineEntityPopup.pcf: line 81, column 73
    function def_refreshVariables_32 (def :  pcf.RateRoutineEntityLV) : void {
      def.refreshVariables(valueDelegate, inScopeUsages, helper)
    }
    
    // 'value' attribute on TypeKeyInput (id=inScopeParamName_Input) at RateRoutineEntityPopup.pcf: line 74, column 54
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedEntity = (__VALUE_TO_SET as typekey.CalcRoutineParamName)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=IsModifierRangeInput_Input) at RateRoutineEntityPopup.pcf: line 106, column 43
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      isModifier = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextValue (id=RateRoutineInstructionTextFilter) at RateRoutineEntityPopup.pcf: line 114, column 42
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      textFilter = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'filter' attribute on TypeKeyInput (id=inScopeParamName_Input) at RateRoutineEntityPopup.pcf: line 74, column 54
    function filter_12 (VALUE :  typekey.CalcRoutineParamName, VALUES :  typekey.CalcRoutineParamName[]) : java.lang.Boolean {
      return helper.filterInScopeParamDropDownRange(VALUE)
    }
    
    // 'filter' attribute on ToolbarFilterOption at RateRoutineEntityPopup.pcf: line 92, column 37
    function filter_14 () : gw.api.filters.IFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at RateRoutineEntityPopup.pcf: line 95, column 38
    function filters_15 () : gw.api.filters.IFilter[] {
      return helper.filtersForDataTypes(inScopeUsages, restrictToTargetDataTypes)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at RateRoutineEntityPopup.pcf: line 98, column 37
    function filters_17 () : gw.api.filters.IFilter[] {
      return helper.filtersForModifierDataTypes(inScopeUsages, restrictToTargetDataTypes)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEntityPopup.pcf: line 27, column 58
    function initialValue_0 () : java.util.Set<gw.lang.reflect.IType> {
      return gw.rating.flow.util.TypeMaps.primitiveRateFlowTypes()
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEntityPopup.pcf: line 31, column 36
    function initialValue_1 () : CalcRoutineParamName {
      return valueDelegate.InScopeParam
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEntityPopup.pcf: line 35, column 63
    function initialValue_2 () : gw.pcf.rating.flow.RateRoutineEntityPopupHelper {
      return new gw.pcf.rating.flow.RateRoutineEntityPopupHelper(CurrentLocation, valueDelegate, calcStep, restrictToTargetDataTypes)
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEntityPopup.pcf: line 43, column 22
    function initialValue_3 () : String {
      return null
    }
    
    // 'initialValue' attribute on Variable at RateRoutineEntityPopup.pcf: line 48, column 60
    function initialValue_4 () : List<gw.rating.flow.util.InScopeUsage> {
      return helper.calculateInScopeUsages(isModifier, selectedEntity, textFilter)
    }
    
    // 'label' attribute on ToolbarRangeInput (id=IsModifierRangeInput_Input) at RateRoutineEntityPopup.pcf: line 106, column 43
    function label_19 () : java.lang.Object {
      return "    " + DisplayKey.get("Web.Rating.Flow.CalcRoutine.ModifierFilter")
    }
    
    // 'onChange' attribute on PostOnChange at RateRoutineEntityPopup.pcf: line 76, column 88
    function onChange_9 () : void {
      inScopeUsages = helper.changeSelectEntityTo(selectedEntity);
    }
    
    // 'optionLabel' attribute on ToolbarRangeInput (id=IsModifierRangeInput_Input) at RateRoutineEntityPopup.pcf: line 106, column 43
    function optionLabel_22 (VALUE :  java.lang.Boolean) : java.lang.String {
      return VALUE ? DisplayKey.get("Web.Rating.Flow.CalcRoutine.Modifiers") : DisplayKey.get("Web.Rating.Flow.CalcRoutine.All")
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=IsModifierRangeInput_Input) at RateRoutineEntityPopup.pcf: line 106, column 43
    function valueRange_23 () : java.lang.Object {
      return {true, false}
    }
    
    // 'value' attribute on TypeKeyInput (id=inScopeParamName_Input) at RateRoutineEntityPopup.pcf: line 74, column 54
    function value_10 () : typekey.CalcRoutineParamName {
      return selectedEntity
    }
    
    // 'value' attribute on TextValue (id=RateRoutineInstructionTextFilter) at RateRoutineEntityPopup.pcf: line 114, column 42
    function value_28 () : java.lang.String {
      return textFilter
    }
    
    // 'value' attribute on TextInput (id=Usage_Input) at RateRoutineEntityPopup.pcf: line 66, column 101
    function value_7 () : java.lang.String {
      return gw.pcf.rating.flow.RateRoutineUsageHelper.getValueDelegateUsage(valueDelegate)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=IsModifierRangeInput_Input) at RateRoutineEntityPopup.pcf: line 106, column 43
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.lang.Boolean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=IsModifierRangeInput_Input) at RateRoutineEntityPopup.pcf: line 106, column 43
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=IsModifierRangeInput_Input) at RateRoutineEntityPopup.pcf: line 106, column 43
    function verifyValueRange_25 () : void {
      var __valueRangeArg = {true, false}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at RateRoutineEntityPopup.pcf: line 95, column 38
    function visible_16 () : java.lang.Boolean {
      return !isModifier
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at RateRoutineEntityPopup.pcf: line 98, column 37
    function visible_18 () : java.lang.Boolean {
      return isModifier
    }
    
    override property get CurrentLocation () : pcf.RateRoutineEntityPopup {
      return super.CurrentLocation as pcf.RateRoutineEntityPopup
    }
    
    property get calcStep () : CalcStepDefinition {
      return getVariableValue("calcStep", 0) as CalcStepDefinition
    }
    
    property set calcStep ($arg :  CalcStepDefinition) {
      setVariableValue("calcStep", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.flow.RateRoutineEntityPopupHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.flow.RateRoutineEntityPopupHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.flow.RateRoutineEntityPopupHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get inScopeUsages () : List<gw.rating.flow.util.InScopeUsage> {
      return getVariableValue("inScopeUsages", 0) as List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set inScopeUsages ($arg :  List<gw.rating.flow.util.InScopeUsage>) {
      setVariableValue("inScopeUsages", 0, $arg)
    }
    
    property get isModifier () : boolean {
      return getVariableValue("isModifier", 0) as java.lang.Boolean
    }
    
    property set isModifier ($arg :  boolean) {
      setVariableValue("isModifier", 0, $arg)
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
    
    property get valueDelegate () : CalcStepValueDelegate {
      return getVariableValue("valueDelegate", 0) as CalcStepValueDelegate
    }
    
    property set valueDelegate ($arg :  CalcStepValueDelegate) {
      setVariableValue("valueDelegate", 0, $arg)
    }
    
    
  }
  
  
}