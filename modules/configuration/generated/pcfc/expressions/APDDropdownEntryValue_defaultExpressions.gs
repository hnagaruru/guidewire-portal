package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryValue.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDropdownEntryValue_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryValue.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDropdownEntryValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDropdownEntryValue.default.pcf: line 15, column 28
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      value.IntegerValue = (__VALUE_TO_SET as Integer)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDropdownEntryValue.default.pcf: line 15, column 28
    function valueRoot_2 () : java.lang.Object {
      return value
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDropdownEntryValue.default.pcf: line 15, column 28
    function value_0 () : Integer {
      return value.IntegerValue
    }
    
    property get value () : APDDropdownValue {
      return getRequireValue("value", 0) as APDDropdownValue
    }
    
    property set value ($arg :  APDDropdownValue) {
      setRequireValue("value", 0, $arg)
    }
    
    
  }
  
  
}