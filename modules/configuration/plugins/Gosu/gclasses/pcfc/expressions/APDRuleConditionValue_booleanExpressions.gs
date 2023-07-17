package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleConditionValue.boolean.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRuleConditionValue_booleanExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleConditionValue.boolean.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRuleConditionValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=value_Cell) at APDRuleConditionValue.boolean.pcf: line 16, column 28
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.BitValue = (__VALUE_TO_SET as Boolean)
    }
    
    // 'value' attribute on BooleanRadioCell (id=value_Cell) at APDRuleConditionValue.boolean.pcf: line 16, column 28
    function valueRoot_2 () : java.lang.Object {
      return condition
    }
    
    // 'value' attribute on BooleanRadioCell (id=value_Cell) at APDRuleConditionValue.boolean.pcf: line 16, column 28
    function value_0 () : Boolean {
      return condition.BitValue
    }
    
    property get condition () : APDRuleCondition {
      return getRequireValue("condition", 0) as APDRuleCondition
    }
    
    property set condition ($arg :  APDRuleCondition) {
      setRequireValue("condition", 0, $arg)
    }
    
    
  }
  
  
}