package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.bigdecimal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDataFieldValue_bigdecimalExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.bigdecimal.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDataFieldValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.bigdecimal.pcf: line 20, column 44
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      dataField.DecimalValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at APDDataFieldValue.bigdecimal.pcf: line 23, column 122
    function disablePostOnEnter_0 () : java.lang.Boolean {
      return not dataField.Attribute.UsedToConditionPeer
    }
    
    // 'onChange' attribute on PostOnChange at APDDataFieldValue.bigdecimal.pcf: line 23, column 122
    function onChange_1 () : void {
      dataField.syncPeerClauses(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskField)
    }
    
    // 'validationExpression' attribute on TextCell (id=value_Cell) at APDDataFieldValue.bigdecimal.pcf: line 20, column 44
    function validationExpression_2 () : java.lang.Object {
      return dataField.MinMaxError
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.bigdecimal.pcf: line 20, column 44
    function valueRoot_6 () : java.lang.Object {
      return dataField
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.bigdecimal.pcf: line 20, column 44
    function value_4 () : java.math.BigDecimal {
      return dataField.DecimalValue
    }
    
    // 'valueVisible' attribute on TextCell (id=value_Cell) at APDDataFieldValue.bigdecimal.pcf: line 20, column 44
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