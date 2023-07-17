package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleConditionValue.money.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRuleConditionValue_moneyExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleConditionValue.money.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRuleConditionValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDRuleConditionValue.money.pcf: line 16, column 41
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.DecimalValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDRuleConditionValue.money.pcf: line 16, column 41
    function valueRoot_2 () : java.lang.Object {
      return condition
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at APDRuleConditionValue.money.pcf: line 16, column 41
    function value_0 () : java.math.BigDecimal {
      return condition.DecimalValue
    }
    
    property get condition () : APDRuleCondition {
      return getRequireValue("condition", 0) as APDRuleCondition
    }
    
    property set condition ($arg :  APDRuleCondition) {
      setRequireValue("condition", 0, $arg)
    }
    
    
  }
  
  
}