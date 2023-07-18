package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineTypekeyConstantPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineTypekeyConstantPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineTypekeyConstantPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineTypekeyConstantPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (valueDelegate :  CalcStepValueDelegate) : int {
      return 0
    }
    
    static function __constructorIndex (valueDelegate :  CalcStepValueDelegate, preSelectedTypeKey :  String) : int {
      return 1
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineConstantEditUpdate) at RateRoutineTypekeyConstantPopup.pcf: line 33, column 81
    function action_1 () : void {
      helper.commitPopup()
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineConstantEditCancel) at RateRoutineTypekeyConstantPopup.pcf: line 37, column 81
    function action_2 () : void {
      CurrentLocation.cancel()
    }
    
    // 'afterCommit' attribute on Popup (id=RateRoutineTypekeyConstantPopup) at RateRoutineTypekeyConstantPopup.pcf: line 11, column 97
    function afterCommit_39 (TopLocation :  pcf.api.Location) : void {
      valueDelegate.clearDependentValues()
    }
    
    // 'afterEnter' attribute on Popup (id=RateRoutineTypekeyConstantPopup) at RateRoutineTypekeyConstantPopup.pcf: line 11, column 97
    function afterEnter_40 () : void {
      gw.pcf.rating.flow.RateRoutinePopupHelper.afterEnterTypeKeyConstantPopup(valueDelegate, preSelectedTypeKey, helper.IsMultiSelect);
    }
    
    // 'value' attribute on RangeInput (id=TypekeyConstantValue_Input) at RateRoutineTypekeyConstantPopup.pcf: line 64, column 49
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      valueDelegate.ConstantValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=multipleTypekeys_Input) at RateRoutineTypekeyConstantPopup.pcf: line 74, column 45
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      (valueDelegate as CalcStepDefinitionOperand).TypelistCollection = (__VALUE_TO_SET as gw.entity.TypeKey[])
    }
    
    // 'value' attribute on RangeInput (id=TypekeyPulldown_Input) at RateRoutineTypekeyConstantPopup.pcf: line 53, column 42
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      valueDelegate.TypeDeclaration = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=TypekeyConstantValue_Input) at RateRoutineTypekeyConstantPopup.pcf: line 64, column 49
    function editable_15 () : java.lang.Boolean {
      return (valueDelegate.TypeDeclaration != null)
    }
    
    // 'editable' attribute on RangeInput (id=TypekeyPulldown_Input) at RateRoutineTypekeyConstantPopup.pcf: line 53, column 42
    function editable_5 () : java.lang.Boolean {
      return preSelectedTypeKey == null
    }
    
    // 'initialValue' attribute on Variable at RateRoutineTypekeyConstantPopup.pcf: line 26, column 76
    function initialValue_0 () : gw.pcf.rating.rateroutine.RateRoutineTypekeyConstantUIHelper {
      return new gw.pcf.rating.rateroutine.RateRoutineTypekeyConstantUIHelper(valueDelegate, CurrentLocation)
    }
    
    // 'optionLabel' attribute on RangeInput (id=TypekeyPulldown_Input) at RateRoutineTypekeyConstantPopup.pcf: line 53, column 42
    function optionLabel_9 (VALUE :  java.lang.String) : java.lang.String {
      return VALUE.remove("typekey.")
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyPulldown_Input) at RateRoutineTypekeyConstantPopup.pcf: line 53, column 42
    function valueRange_10 () : java.lang.Object {
      return gw.rating.rtm.util.RatingUIUtil.getAllTypekeyNames()
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyConstantValue_Input) at RateRoutineTypekeyConstantPopup.pcf: line 64, column 49
    function valueRange_21 () : java.lang.Object {
      return gw.rating.rtm.util.RatingUIUtil.getTypekeysForTypelist(valueDelegate.TypeDeclaration)
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=multipleTypekeys_Input) at RateRoutineTypekeyConstantPopup.pcf: line 74, column 45
    function valueRoot_32 () : java.lang.Object {
      return (valueDelegate as CalcStepDefinitionOperand)
    }
    
    // 'value' attribute on RangeInput (id=TypekeyPulldown_Input) at RateRoutineTypekeyConstantPopup.pcf: line 53, column 42
    function valueRoot_8 () : java.lang.Object {
      return valueDelegate
    }
    
    // 'value' attribute on RangeInput (id=TypekeyConstantValue_Input) at RateRoutineTypekeyConstantPopup.pcf: line 64, column 49
    function value_18 () : java.lang.String {
      return valueDelegate.ConstantValue
    }
    
    // 'value' attribute on TextInput (id=Usage_Input) at RateRoutineTypekeyConstantPopup.pcf: line 44, column 101
    function value_3 () : java.lang.String {
      return gw.pcf.rating.flow.RateRoutineUsageHelper.getValueDelegateUsage(valueDelegate)
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=multipleTypekeys_Input) at RateRoutineTypekeyConstantPopup.pcf: line 74, column 45
    function value_30 () : gw.entity.TypeKey[] {
      return (valueDelegate as CalcStepDefinitionOperand).TypelistCollection
    }
    
    // 'value' attribute on RangeInput (id=TypekeyPulldown_Input) at RateRoutineTypekeyConstantPopup.pcf: line 53, column 42
    function value_6 () : java.lang.String {
      return valueDelegate.TypeDeclaration
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyPulldown_Input) at RateRoutineTypekeyConstantPopup.pcf: line 53, column 42
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyPulldown_Input) at RateRoutineTypekeyConstantPopup.pcf: line 53, column 42
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyConstantValue_Input) at RateRoutineTypekeyConstantPopup.pcf: line 64, column 49
    function verifyValueRangeIsAllowedType_22 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyConstantValue_Input) at RateRoutineTypekeyConstantPopup.pcf: line 64, column 49
    function verifyValueRangeIsAllowedType_22 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=multipleTypekeys_Input) at RateRoutineTypekeyConstantPopup.pcf: line 74, column 45
    function verifyValueRangeIsAllowedType_34 ($$arg :  gw.entity.TypeKey[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=multipleTypekeys_Input) at RateRoutineTypekeyConstantPopup.pcf: line 74, column 45
    function verifyValueRangeIsAllowedType_34 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyPulldown_Input) at RateRoutineTypekeyConstantPopup.pcf: line 53, column 42
    function verifyValueRange_12 () : void {
      var __valueRangeArg = gw.rating.rtm.util.RatingUIUtil.getAllTypekeyNames()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyConstantValue_Input) at RateRoutineTypekeyConstantPopup.pcf: line 64, column 49
    function verifyValueRange_23 () : void {
      var __valueRangeArg = gw.rating.rtm.util.RatingUIUtil.getTypekeysForTypelist(valueDelegate.TypeDeclaration)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_22(__valueRangeArg)
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=multipleTypekeys_Input) at RateRoutineTypekeyConstantPopup.pcf: line 74, column 45
    function verifyValueRange_35 () : void {
      var __valueRangeArg = gw.rating.rtm.util.RatingUIUtil.getTypekeysForTypelist(valueDelegate.TypeDeclaration)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_34(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=TypekeyConstantValue_Input) at RateRoutineTypekeyConstantPopup.pcf: line 64, column 49
    function visible_16 () : java.lang.Boolean {
      return not helper.IsMultiSelect
    }
    
    // 'visible' attribute on CheckBoxGroupInput (id=multipleTypekeys_Input) at RateRoutineTypekeyConstantPopup.pcf: line 74, column 45
    function visible_28 () : java.lang.Boolean {
      return helper.IsMultiSelect
    }
    
    override property get CurrentLocation () : pcf.RateRoutineTypekeyConstantPopup {
      return super.CurrentLocation as pcf.RateRoutineTypekeyConstantPopup
    }
    
    property get helper () : gw.pcf.rating.rateroutine.RateRoutineTypekeyConstantUIHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.rateroutine.RateRoutineTypekeyConstantUIHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.rateroutine.RateRoutineTypekeyConstantUIHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get preSelectedTypeKey () : String {
      return getVariableValue("preSelectedTypeKey", 0) as String
    }
    
    property set preSelectedTypeKey ($arg :  String) {
      setVariableValue("preSelectedTypeKey", 0, $arg)
    }
    
    property get valueDelegate () : CalcStepValueDelegate {
      return getVariableValue("valueDelegate", 0) as CalcStepValueDelegate
    }
    
    property set valueDelegate ($arg :  CalcStepValueDelegate) {
      setVariableValue("valueDelegate", 0, $arg)
    }
    
    
  }
  
  
}