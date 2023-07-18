package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_PolicyChangeDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternDetail_PolicyChangeDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_PolicyChangeDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternDetail_PolicyChangeDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=RemovalEndorsementFormNumber_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 39, column 87
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.RemovalEndorsementFormNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=RemovalEndorsement_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 20, column 48
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.RemovalEndorsement = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ReissueOnChange_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 28, column 54
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      formPattern.ReissueOnChange = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at FormPatternDetail_PolicyChangeDV.pcf: line 14, column 24
    function initialValue_0 () : String[] {
      return formPattern.RemovalEndorsementFormNumbersRange
    }
    
    // 'optionLabel' attribute on RangeInput (id=RemovalEndorsementFormNumber_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 39, column 87
    function optionLabel_15 (VALUE :  java.lang.String) : java.lang.String {
      return VALUE == null ? DisplayKey.get("Java.TextValueWidget.NoneSelected") : VALUE
    }
    
    // 'valueRange' attribute on RangeInput (id=RemovalEndorsementFormNumber_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 39, column 87
    function valueRange_16 () : java.lang.Object {
      return removalEndorsementFormsRange
    }
    
    // 'value' attribute on BooleanRadioInput (id=RemovalEndorsement_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 20, column 48
    function valueRoot_3 () : java.lang.Object {
      return formPattern
    }
    
    // 'value' attribute on BooleanRadioInput (id=RemovalEndorsement_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 20, column 48
    function value_1 () : java.lang.Boolean {
      return formPattern.RemovalEndorsement
    }
    
    // 'value' attribute on RangeInput (id=RemovalEndorsementFormNumber_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 39, column 87
    function value_12 () : java.lang.String {
      return formPattern.RemovalEndorsementFormNumber
    }
    
    // 'value' attribute on BooleanRadioInput (id=ReissueOnChange_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 28, column 54
    function value_6 () : java.lang.Boolean {
      return formPattern.ReissueOnChange
    }
    
    // 'valueRange' attribute on RangeInput (id=RemovalEndorsementFormNumber_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 39, column 87
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RemovalEndorsementFormNumber_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 39, column 87
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RemovalEndorsementFormNumber_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 39, column 87
    function verifyValueRange_18 () : void {
      var __valueRangeArg = removalEndorsementFormsRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=RemovalEndorsementFormNumber_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 39, column 87
    function visible_11 () : java.lang.Boolean {
      return not formPattern.RemovalEndorsement and formPattern.ReissueOnChange
    }
    
    // 'visible' attribute on BooleanRadioInput (id=ReissueOnChange_Input) at FormPatternDetail_PolicyChangeDV.pcf: line 28, column 54
    function visible_5 () : java.lang.Boolean {
      return not formPattern.RemovalEndorsement
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    property get removalEndorsementFormsRange () : String[] {
      return getVariableValue("removalEndorsementFormsRange", 0) as String[]
    }
    
    property set removalEndorsementFormsRange ($arg :  String[]) {
      setVariableValue("removalEndorsementFormsRange", 0, $arg)
    }
    
    
  }
  
  
}