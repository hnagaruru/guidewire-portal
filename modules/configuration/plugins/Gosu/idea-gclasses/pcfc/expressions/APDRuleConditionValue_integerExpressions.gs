package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleConditionValue.integer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRuleConditionValue_integerExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleConditionValue.integer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRuleConditionValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDRuleConditionValue.integer.pcf: line 16, column 28
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.IntegerValue = (__VALUE_TO_SET as Integer)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDRuleConditionValue.integer.pcf: line 16, column 28
    function valueRoot_2 () : java.lang.Object {
      return condition
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDRuleConditionValue.integer.pcf: line 16, column 28
    function value_0 () : Integer {
      return condition.IntegerValue
    }
    
    property get condition () : APDRuleCondition {
      return getRequireValue("condition", 0) as APDRuleCondition
    }
    
    property set condition ($arg :  APDRuleCondition) {
      setRequireValue("condition", 0, $arg)
    }
    
    
  }
  
  
}