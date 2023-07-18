package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryValue.money.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDDropdownEntryValue_moneyExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDDropdownEntryValue.money.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDDropdownEntryValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDropdownEntryValue.money.pcf: line 15, column 41
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      value.DecimalValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDropdownEntryValue.money.pcf: line 15, column 41
    function valueRoot_2 () : java.lang.Object {
      return value
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDDropdownEntryValue.money.pcf: line 15, column 41
    function value_0 () : java.math.BigDecimal {
      return value.DecimalValue
    }
    
    property get value () : APDDropdownValue {
      return getRequireValue("value", 0) as APDDropdownValue
    }
    
    property set value ($arg :  APDDropdownValue) {
      setRequireValue("value", 0, $arg)
    }
    
    
  }
  
  
}