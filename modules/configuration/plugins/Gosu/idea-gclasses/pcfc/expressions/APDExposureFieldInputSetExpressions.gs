package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDExposureFieldInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDExposureFieldInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDExposureFieldInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDExposureFieldInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at APDExposureFieldInputSet.pcf: line 14, column 51
    function def_onEnter_0 (def :  pcf.APDAttributeInputSet) : void {
      def.onEnter(field, edition)
    }
    
    // 'def' attribute on InputSetRef at APDExposureFieldInputSet.pcf: line 14, column 51
    function def_refreshVariables_1 (def :  pcf.APDAttributeInputSet) : void {
      def.refreshVariables(field, edition)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Jurisdiction_Input) at APDExposureFieldInputSet.pcf: line 32, column 56
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Jurisdiction = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at APDExposureFieldInputSet.pcf: line 21, column 32
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      field.Type = (__VALUE_TO_SET as APDFieldType)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Type_Input) at APDExposureFieldInputSet.pcf: line 21, column 32
    function editable_3 () : java.lang.Boolean {
      return not field.Jurisdiction and not field.ExposureParty
    }
    
    // 'onChange' attribute on PostOnChange at APDExposureFieldInputSet.pcf: line 23, column 117
    function onChange_2 () : void {
      field.DropDownType = field.Type == APDFieldType.TC_TYPEKEY ? APDDropDownType.TC_TYPELIST : null
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at APDExposureFieldInputSet.pcf: line 21, column 32
    function valueRoot_6 () : java.lang.Object {
      return field
    }
    
    // 'value' attribute on BooleanRadioInput (id=Jurisdiction_Input) at APDExposureFieldInputSet.pcf: line 32, column 56
    function value_11 () : java.lang.Boolean {
      return field.Jurisdiction
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at APDExposureFieldInputSet.pcf: line 21, column 32
    function value_4 () : APDFieldType {
      return field.Type
    }
    
    // 'valueType' attribute on TypeKeyInput (id=Type_Input) at APDExposureFieldInputSet.pcf: line 21, column 32
    function verifyValueType_9 () : void {
      var __valueTypeArg : APDFieldType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Jurisdiction_Input) at APDExposureFieldInputSet.pcf: line 32, column 56
    function visible_10 () : java.lang.Boolean {
      return field.Type == APDFieldType.TC_LOCATION
    }
    
    property get edition () : APDProductLineEdition {
      return getRequireValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setRequireValue("edition", 0, $arg)
    }
    
    property get field () : APDExposureField {
      return getRequireValue("field", 0) as APDExposureField
    }
    
    property set field ($arg :  APDExposureField) {
      setRequireValue("field", 0, $arg)
    }
    
    
  }
  
  
}