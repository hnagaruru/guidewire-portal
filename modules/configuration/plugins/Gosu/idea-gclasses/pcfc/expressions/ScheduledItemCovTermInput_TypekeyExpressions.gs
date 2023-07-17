package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.Typekey.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduledItemCovTermInput_TypekeyExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.Typekey.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduledItemCovTermInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Typekey.pcf: line 21, column 38
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      typekeyCovTerm.Value = (__VALUE_TO_SET as gw.entity.TypeKey)
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemCovTermInput.Typekey.pcf: line 14, column 52
    function initialValue_0 () : gw.api.domain.covterm.TypekeyCovTerm {
      return covTerm as gw.api.domain.covterm.TypekeyCovTerm
    }
    
    // 'required' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Typekey.pcf: line 21, column 38
    function required_1 () : java.lang.Boolean {
      return typekeyCovTerm.Pattern.Required
    }
    
    // 'valueRange' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Typekey.pcf: line 21, column 38
    function valueRange_5 () : java.lang.Object {
      return typekeyCovTerm.Pattern.OrderedAvailableValues
    }
    
    // 'value' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Typekey.pcf: line 21, column 38
    function valueRoot_4 () : java.lang.Object {
      return typekeyCovTerm
    }
    
    // 'value' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Typekey.pcf: line 21, column 38
    function value_2 () : gw.entity.TypeKey {
      return typekeyCovTerm.Value
    }
    
    // 'valueRange' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Typekey.pcf: line 21, column 38
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.entity.TypeKey[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Typekey.pcf: line 21, column 38
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Typekey.pcf: line 21, column 38
    function verifyValueRange_7 () : void {
      var __valueRangeArg = typekeyCovTerm.Pattern.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    property get covTerm () : gw.api.domain.covterm.CovTerm {
      return getRequireValue("covTerm", 0) as gw.api.domain.covterm.CovTerm
    }
    
    property set covTerm ($arg :  gw.api.domain.covterm.CovTerm) {
      setRequireValue("covTerm", 0, $arg)
    }
    
    property get typekeyCovTerm () : gw.api.domain.covterm.TypekeyCovTerm {
      return getVariableValue("typekeyCovTerm", 0) as gw.api.domain.covterm.TypekeyCovTerm
    }
    
    property set typekeyCovTerm ($arg :  gw.api.domain.covterm.TypekeyCovTerm) {
      setVariableValue("typekeyCovTerm", 0, $arg)
    }
    
    
  }
  
  
}