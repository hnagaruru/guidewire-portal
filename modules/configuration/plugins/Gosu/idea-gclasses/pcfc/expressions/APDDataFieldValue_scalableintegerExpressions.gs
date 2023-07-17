package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.scalableinteger.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDataFieldValue_scalableintegerExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.scalableinteger.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDataFieldValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.scalableinteger.pcf: line 20, column 45
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      dataField.ScalableIntegerValue = (__VALUE_TO_SET as Integer)
    }
    
    // 'validationExpression' attribute on TextCell (id=value_Cell) at APDDataFieldValue.scalableinteger.pcf: line 20, column 45
    function validationExpression_0 () : java.lang.Object {
      return dataField.MinMaxError
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.scalableinteger.pcf: line 20, column 45
    function valueRoot_4 () : java.lang.Object {
      return dataField
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.scalableinteger.pcf: line 20, column 45
    function value_2 () : Integer {
      return dataField.ScalableIntegerValue
    }
    
    // 'valueVisible' attribute on TextCell (id=value_Cell) at APDDataFieldValue.scalableinteger.pcf: line 20, column 45
    function visible_1 () : java.lang.Boolean {
      return dataField.VisibleInUI
    }
    
    property get dataField () : APDDataField {
      return getRequireValue("dataField", 0) as APDDataField
    }
    
    property set dataField ($arg :  APDDataField) {
      setRequireValue("dataField", 0, $arg)
    }
    
    property get edition () : APDProductLineEdition {
      return getRequireValue("edition", 0) as APDProductLineEdition
    }
    
    property set edition ($arg :  APDProductLineEdition) {
      setRequireValue("edition", 0, $arg)
    }
    
    
  }
  
  
}