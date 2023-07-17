package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.boolean.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDataFieldValue_booleanExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.boolean.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDataFieldValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=value_Cell) at APDDataFieldValue.boolean.pcf: line 19, column 44
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      dataField.BitValue = (__VALUE_TO_SET as Boolean)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at APDDataFieldValue.boolean.pcf: line 22, column 124
    function disablePostOnEnter_0 () : java.lang.Boolean {
      return not dataField.Attribute.UsedToConditionPeer
    }
    
    // 'onChange' attribute on PostOnChange at APDDataFieldValue.boolean.pcf: line 22, column 124
    function onChange_1 () : void {
      dataField.syncPeerClauses(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskField)
    }
    
    // 'value' attribute on BooleanRadioCell (id=value_Cell) at APDDataFieldValue.boolean.pcf: line 19, column 44
    function valueRoot_5 () : java.lang.Object {
      return dataField
    }
    
    // 'value' attribute on BooleanRadioCell (id=value_Cell) at APDDataFieldValue.boolean.pcf: line 19, column 44
    function value_3 () : Boolean {
      return dataField.BitValue
    }
    
    // 'valueVisible' attribute on BooleanRadioCell (id=value_Cell) at APDDataFieldValue.boolean.pcf: line 19, column 44
    function visible_2 () : java.lang.Boolean {
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