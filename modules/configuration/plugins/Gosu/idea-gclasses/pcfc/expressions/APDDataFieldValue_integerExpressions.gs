package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.integer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDataFieldValue_integerExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.integer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDataFieldValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.integer.pcf: line 20, column 44
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      dataField.IntegerValue = (__VALUE_TO_SET as Integer)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at APDDataFieldValue.integer.pcf: line 23, column 122
    function disablePostOnEnter_0 () : java.lang.Boolean {
      return not dataField.Attribute.UsedToConditionPeer
    }
    
    // 'onChange' attribute on PostOnChange at APDDataFieldValue.integer.pcf: line 23, column 122
    function onChange_1 () : void {
      dataField.syncPeerClauses(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskField)
    }
    
    // 'validationExpression' attribute on TextCell (id=value_Cell) at APDDataFieldValue.integer.pcf: line 20, column 44
    function validationExpression_2 () : java.lang.Object {
      return dataField.MinMaxError
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.integer.pcf: line 20, column 44
    function valueRoot_6 () : java.lang.Object {
      return dataField
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.integer.pcf: line 20, column 44
    function value_4 () : Integer {
      return dataField.IntegerValue
    }
    
    // 'valueVisible' attribute on TextCell (id=value_Cell) at APDDataFieldValue.integer.pcf: line 20, column 44
    function visible_3 () : java.lang.Boolean {
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