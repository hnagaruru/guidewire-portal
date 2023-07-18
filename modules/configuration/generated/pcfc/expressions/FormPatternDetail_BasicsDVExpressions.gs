package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_BasicsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternDetail_BasicsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_BasicsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternDetail_BasicsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Edition_Input) at FormPatternDetail_BasicsDV.pcf: line 28, column 38
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.Edition = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at FormPatternDetail_BasicsDV.pcf: line 34, column 42
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeRadioInput (id=InferenceTime_Input) at FormPatternDetail_BasicsDV.pcf: line 44, column 48
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.InferenceTime = (__VALUE_TO_SET as typekey.FormInferenceTime)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at FormPatternDetail_BasicsDV.pcf: line 16, column 35
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=EndorsementNumbered_Input) at FormPatternDetail_BasicsDV.pcf: line 50, column 50
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.EndorsementNumbered = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Priority_Input) at FormPatternDetail_BasicsDV.pcf: line 57, column 40
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.Priority = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=RefCode_Input) at FormPatternDetail_BasicsDV.pcf: line 65, column 38
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.RefCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Number_Input) at FormPatternDetail_BasicsDV.pcf: line 22, column 41
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.FormNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=Code_Input) at FormPatternDetail_BasicsDV.pcf: line 16, column 35
    function editable_0 () : java.lang.Boolean {
      return formPattern.New
    }
    
    // 'optionLabel' attribute on RangeRadioInput (id=InferenceTime_Input) at FormPatternDetail_BasicsDV.pcf: line 44, column 48
    function optionLabel_21 (VALUE :  typekey.FormInferenceTime) : java.lang.String {
      return VALUE == FormInferenceTime.TC_BIND ? DisplayKey.get("Button.Yes") : DisplayKey.get("Button.No")
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=InferenceTime_Input) at FormPatternDetail_BasicsDV.pcf: line 44, column 48
    function valueRange_22 () : java.lang.Object {
      return {FormInferenceTime.TC_BIND, FormInferenceTime.TC_QUOTE}
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at FormPatternDetail_BasicsDV.pcf: line 16, column 35
    function valueRoot_3 () : java.lang.Object {
      return formPattern
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at FormPatternDetail_BasicsDV.pcf: line 16, column 35
    function value_1 () : java.lang.String {
      return formPattern.Code
    }
    
    // 'value' attribute on TextInput (id=Edition_Input) at FormPatternDetail_BasicsDV.pcf: line 28, column 38
    function value_10 () : java.lang.String {
      return formPattern.Edition
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at FormPatternDetail_BasicsDV.pcf: line 34, column 42
    function value_14 () : java.lang.String {
      return formPattern.Description
    }
    
    // 'value' attribute on RangeRadioInput (id=InferenceTime_Input) at FormPatternDetail_BasicsDV.pcf: line 44, column 48
    function value_18 () : typekey.FormInferenceTime {
      return formPattern.InferenceTime
    }
    
    // 'value' attribute on BooleanRadioInput (id=EndorsementNumbered_Input) at FormPatternDetail_BasicsDV.pcf: line 50, column 50
    function value_26 () : java.lang.Boolean {
      return formPattern.EndorsementNumbered
    }
    
    // 'value' attribute on TextInput (id=Priority_Input) at FormPatternDetail_BasicsDV.pcf: line 57, column 40
    function value_30 () : java.lang.Integer {
      return formPattern.Priority
    }
    
    // 'value' attribute on TextInput (id=RefCode_Input) at FormPatternDetail_BasicsDV.pcf: line 65, column 38
    function value_34 () : java.lang.String {
      return formPattern.RefCode
    }
    
    // 'value' attribute on TextInput (id=Number_Input) at FormPatternDetail_BasicsDV.pcf: line 22, column 41
    function value_6 () : java.lang.String {
      return formPattern.FormNumber
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=InferenceTime_Input) at FormPatternDetail_BasicsDV.pcf: line 44, column 48
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=InferenceTime_Input) at FormPatternDetail_BasicsDV.pcf: line 44, column 48
    function verifyValueRangeIsAllowedType_23 ($$arg :  typekey.FormInferenceTime[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=InferenceTime_Input) at FormPatternDetail_BasicsDV.pcf: line 44, column 48
    function verifyValueRange_24 () : void {
      var __valueRangeArg = {FormInferenceTime.TC_BIND, FormInferenceTime.TC_QUOTE}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    
  }
  
  
}