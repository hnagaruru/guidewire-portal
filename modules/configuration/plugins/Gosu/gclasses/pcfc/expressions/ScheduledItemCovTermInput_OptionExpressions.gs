package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.Option.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduledItemCovTermInput_OptionExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.Option.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduledItemCovTermInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Option.pcf: line 21, column 51
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      optionCovTerm.OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt)
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemCovTermInput.Option.pcf: line 14, column 51
    function initialValue_0 () : gw.api.domain.covterm.OptionCovTerm {
      return covTerm as gw.api.domain.covterm.OptionCovTerm
    }
    
    // 'required' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Option.pcf: line 21, column 51
    function required_1 () : java.lang.Boolean {
      return optionCovTerm.Pattern.Required
    }
    
    // 'valueRange' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Option.pcf: line 21, column 51
    function valueRange_5 () : java.lang.Object {
      return optionCovTerm.Pattern.Options
    }
    
    // 'value' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Option.pcf: line 21, column 51
    function valueRoot_4 () : java.lang.Object {
      return optionCovTerm
    }
    
    // 'value' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Option.pcf: line 21, column 51
    function value_2 () : gw.api.productmodel.CovTermOpt {
      return optionCovTerm.OptionValue
    }
    
    // 'valueRange' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Option.pcf: line 21, column 51
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.api.productmodel.CovTermOpt[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Option.pcf: line 21, column 51
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=TermValue_Cell) at ScheduledItemCovTermInput.Option.pcf: line 21, column 51
    function verifyValueRange_7 () : void {
      var __valueRangeArg = optionCovTerm.Pattern.Options
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
    
    property get optionCovTerm () : gw.api.domain.covterm.OptionCovTerm {
      return getVariableValue("optionCovTerm", 0) as gw.api.domain.covterm.OptionCovTerm
    }
    
    property set optionCovTerm ($arg :  gw.api.domain.covterm.OptionCovTerm) {
      setVariableValue("optionCovTerm", 0, $arg)
    }
    
    
  }
  
  
}