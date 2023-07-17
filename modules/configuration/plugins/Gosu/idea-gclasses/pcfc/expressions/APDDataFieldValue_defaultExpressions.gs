package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDataFieldValue_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/line/apd/policy/APDDataFieldValue.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDataFieldValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.default.pcf: line 18, column 44
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      dataField.StringValue = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at APDDataFieldValue.default.pcf: line 21, column 122
    function disablePostOnEnter_0 () : java.lang.Boolean {
      return not dataField.Attribute.UsedToConditionPeer
    }
    
    // 'onChange' attribute on PostOnChange at APDDataFieldValue.default.pcf: line 21, column 122
    function onChange_1 () : void {
      dataField.syncPeerClauses(); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, APDRiskField)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.default.pcf: line 18, column 44
    function valueRoot_5 () : java.lang.Object {
      return dataField
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDataFieldValue.default.pcf: line 18, column 44
    function value_3 () : java.lang.String {
      return dataField.StringValue
    }
    
    // 'valueVisible' attribute on TextCell (id=value_Cell) at APDDataFieldValue.default.pcf: line 18, column 44
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