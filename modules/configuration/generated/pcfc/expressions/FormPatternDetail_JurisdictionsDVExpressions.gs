package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_JurisdictionsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternDetail_JurisdictionsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_JurisdictionsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternDetail_JurisdictionsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=GroupCode_Input) at FormPatternDetail_JurisdictionsDV.pcf: line 20, column 47
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.InternalGroupCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=UseInsteadOfForm_Input) at FormPatternDetail_JurisdictionsDV.pcf: line 30, column 46
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.UseInsteadOfFormRef = (__VALUE_TO_SET as gw.admin.FormPatternRef)
    }
    
    // 'initialValue' attribute on Variable at FormPatternDetail_JurisdictionsDV.pcf: line 14, column 41
    function initialValue_0 () : gw.admin.FormPatternRef[] {
      return formPattern.UseInsteadRange
    }
    
    // 'optionLabel' attribute on RangeInput (id=UseInsteadOfForm_Input) at FormPatternDetail_JurisdictionsDV.pcf: line 30, column 46
    function optionLabel_8 (VALUE :  gw.admin.FormPatternRef) : java.lang.String {
      return VALUE == null ? DisplayKey.get("Java.TextValueWidget.NoneSelected") : VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=UseInsteadOfForm_Input) at FormPatternDetail_JurisdictionsDV.pcf: line 30, column 46
    function valueRange_9 () : java.lang.Object {
      return useInsteadRange
    }
    
    // 'value' attribute on TextInput (id=GroupCode_Input) at FormPatternDetail_JurisdictionsDV.pcf: line 20, column 47
    function valueRoot_3 () : java.lang.Object {
      return formPattern
    }
    
    // 'value' attribute on TextInput (id=GroupCode_Input) at FormPatternDetail_JurisdictionsDV.pcf: line 20, column 47
    function value_1 () : java.lang.String {
      return formPattern.InternalGroupCode
    }
    
    // 'value' attribute on RangeInput (id=UseInsteadOfForm_Input) at FormPatternDetail_JurisdictionsDV.pcf: line 30, column 46
    function value_5 () : gw.admin.FormPatternRef {
      return formPattern.UseInsteadOfFormRef
    }
    
    // 'valueRange' attribute on RangeInput (id=UseInsteadOfForm_Input) at FormPatternDetail_JurisdictionsDV.pcf: line 30, column 46
    function verifyValueRangeIsAllowedType_10 ($$arg :  gw.admin.FormPatternRef[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UseInsteadOfForm_Input) at FormPatternDetail_JurisdictionsDV.pcf: line 30, column 46
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UseInsteadOfForm_Input) at FormPatternDetail_JurisdictionsDV.pcf: line 30, column 46
    function verifyValueRange_11 () : void {
      var __valueRangeArg = useInsteadRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    property get useInsteadRange () : gw.admin.FormPatternRef[] {
      return getVariableValue("useInsteadRange", 0) as gw.admin.FormPatternRef[]
    }
    
    property set useInsteadRange ($arg :  gw.admin.FormPatternRef[]) {
      setVariableValue("useInsteadRange", 0, $arg)
    }
    
    
  }
  
  
}