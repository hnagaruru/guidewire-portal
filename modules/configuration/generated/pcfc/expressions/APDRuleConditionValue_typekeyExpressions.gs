package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleConditionValue.typekey.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class APDRuleConditionValue_typekeyExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/apd/APDRuleConditionValue.typekey.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class APDRuleConditionValueExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=value_Cell) at APDRuleConditionValue.typekey.pcf: line 17, column 44
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      condition.TypekeyValue = (__VALUE_TO_SET as entity.APDDropdownEntry)
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDRuleConditionValue.typekey.pcf: line 17, column 44
    function valueRange_3 () : java.lang.Object {
      return condition.Attribute.CodesToUse.orderBy(\ code -> code.Name)
    }
    
    // 'value' attribute on RangeCell (id=value_Cell) at APDRuleConditionValue.typekey.pcf: line 17, column 44
    function valueRoot_2 () : java.lang.Object {
      return condition
    }
    
    // 'value' attribute on RangeCell (id=value_Cell) at APDRuleConditionValue.typekey.pcf: line 17, column 44
    function value_0 () : entity.APDDropdownEntry {
      return condition.TypekeyValue
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDRuleConditionValue.typekey.pcf: line 17, column 44
    function verifyValueRangeIsAllowedType_4 ($$arg :  entity.APDDropdownEntry[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDRuleConditionValue.typekey.pcf: line 17, column 44
    function verifyValueRangeIsAllowedType_4 ($$arg :  gw.api.database.IQueryBeanResult<entity.APDDropdownEntry>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDRuleConditionValue.typekey.pcf: line 17, column 44
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=value_Cell) at APDRuleConditionValue.typekey.pcf: line 17, column 44
    function verifyValueRange_5 () : void {
      var __valueRangeArg = condition.Attribute.CodesToUse.orderBy(\ code -> code.Name)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_4(__valueRangeArg)
    }
    
    property get condition () : APDRuleCondition {
      return getRequireValue("condition", 0) as APDRuleCondition
    }
    
    property set condition ($arg :  APDRuleCondition) {
      setRequireValue("condition", 0, $arg)
    }
    
    
  }
  
  
}