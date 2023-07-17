package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleConditionValue.location.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRuleConditionValue_locationExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleConditionValue.location.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRuleConditionValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=value_Cell) at APDRuleConditionValue.location.pcf: line 16, column 33
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.JurisdictionValue = (__VALUE_TO_SET as Jurisdiction)
    }
    
    // 'value' attribute on TypeKeyCell (id=value_Cell) at APDRuleConditionValue.location.pcf: line 16, column 33
    function valueRoot_2 () : java.lang.Object {
      return condition
    }
    
    // 'value' attribute on TypeKeyCell (id=value_Cell) at APDRuleConditionValue.location.pcf: line 16, column 33
    function value_0 () : Jurisdiction {
      return condition.JurisdictionValue
    }
    
    // 'valueType' attribute on TypeKeyCell (id=value_Cell) at APDRuleConditionValue.location.pcf: line 16, column 33
    function verifyValueType_4 () : void {
      var __valueTypeArg : Jurisdiction
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get condition () : APDRuleCondition {
      return getRequireValue("condition", 0) as APDRuleCondition
    }
    
    property set condition ($arg :  APDRuleCondition) {
      setRequireValue("condition", 0, $arg)
    }
    
    
  }
  
  
}