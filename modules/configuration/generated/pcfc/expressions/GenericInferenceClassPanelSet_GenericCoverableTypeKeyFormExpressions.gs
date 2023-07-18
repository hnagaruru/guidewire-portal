package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GenericInferenceClassPanelSet_GenericCoverableTypeKeyFormExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GenericInferenceClassPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 37, column 53
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.CoverableTypeListRef = (__VALUE_TO_SET as gw.lang.reflect.IPropertyInfo)
    }
    
    // 'value' attribute on RangeInput (id=SelectedTypeKey_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 48, column 41
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.CoverableTypeKeyRef = (__VALUE_TO_SET as gw.entity.TypeKey)
    }
    
    // 'value' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 26, column 46
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.CoverableTypeRef = (__VALUE_TO_SET as gw.admin.EntityTypeRef)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SelectionExistence_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 56, column 60
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.CoverableTypeKeyExistsOnAll = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 15, column 40
    function initialValue_0 () : gw.admin.EntityTypeRef[] {
      return formPattern.CoverableTypeRange
    }
    
    // 'optionLabel' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 37, column 53
    function optionLabel_12 (VALUE :  gw.lang.reflect.IPropertyInfo) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'optionLabel' attribute on RangeInput (id=SelectedTypeKey_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 48, column 41
    function optionLabel_20 (VALUE :  gw.entity.TypeKey) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'optionLabel' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 26, column 46
    function optionLabel_4 (VALUE :  gw.admin.EntityTypeRef) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 37, column 53
    function valueRange_13 () : java.lang.Object {
      return formPattern.CoverableTypeListRange
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedTypeKey_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 48, column 41
    function valueRange_21 () : java.lang.Object {
      return formPattern.CoverableTypeKeyRange
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 26, column 46
    function valueRange_5 () : java.lang.Object {
      return coverableTypeRange
    }
    
    // 'value' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 26, column 46
    function valueRoot_3 () : java.lang.Object {
      return formPattern
    }
    
    // 'value' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 26, column 46
    function value_1 () : gw.admin.EntityTypeRef {
      return formPattern.CoverableTypeRef
    }
    
    // 'value' attribute on RangeInput (id=SelectedTypeKey_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 48, column 41
    function value_17 () : gw.entity.TypeKey {
      return formPattern.CoverableTypeKeyRef
    }
    
    // 'value' attribute on BooleanRadioInput (id=SelectionExistence_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 56, column 60
    function value_25 () : java.lang.Boolean {
      return formPattern.CoverableTypeKeyExistsOnAll
    }
    
    // 'value' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 37, column 53
    function value_9 () : gw.lang.reflect.IPropertyInfo {
      return formPattern.CoverableTypeListRef
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 37, column 53
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.lang.reflect.IPropertyInfo[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 37, column 53
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedTypeKey_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 48, column 41
    function verifyValueRangeIsAllowedType_22 ($$arg :  gw.entity.TypeKey[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedTypeKey_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 48, column 41
    function verifyValueRangeIsAllowedType_22 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 26, column 46
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.admin.EntityTypeRef[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 26, column 46
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedTypeList_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 37, column 53
    function verifyValueRange_15 () : void {
      var __valueRangeArg = formPattern.CoverableTypeListRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedTypeKey_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 48, column 41
    function verifyValueRange_23 () : void {
      var __valueRangeArg = formPattern.CoverableTypeKeyRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_22(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedCoverable_Input) at GenericInferenceClassPanelSet.GenericCoverableTypeKeyForm.pcf: line 26, column 46
    function verifyValueRange_7 () : void {
      var __valueRangeArg = coverableTypeRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    property get coverableTypeRange () : gw.admin.EntityTypeRef[] {
      return getVariableValue("coverableTypeRange", 0) as gw.admin.EntityTypeRef[]
    }
    
    property set coverableTypeRange ($arg :  gw.admin.EntityTypeRef[]) {
      setVariableValue("coverableTypeRange", 0, $arg)
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    
  }
  
  
}