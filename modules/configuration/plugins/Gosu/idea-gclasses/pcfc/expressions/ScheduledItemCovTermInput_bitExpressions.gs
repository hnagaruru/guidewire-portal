package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.bit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduledItemCovTermInput_bitExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.bit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduledItemCovTermInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=TermValue_Cell) at ScheduledItemCovTermInput.bit.pcf: line 19, column 33
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      bitCovTerm.Value = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemCovTermInput.bit.pcf: line 14, column 67
    function initialValue_0 () : gw.api.domain.covterm.GenericCovTerm<Boolean> {
      return covTerm as gw.api.domain.covterm.GenericCovTerm<Boolean>
    }
    
    // 'required' attribute on BooleanRadioCell (id=TermValue_Cell) at ScheduledItemCovTermInput.bit.pcf: line 19, column 33
    function required_1 () : java.lang.Boolean {
      return bitCovTerm.Pattern.Required
    }
    
    // 'value' attribute on BooleanRadioCell (id=TermValue_Cell) at ScheduledItemCovTermInput.bit.pcf: line 19, column 33
    function valueRoot_4 () : java.lang.Object {
      return bitCovTerm
    }
    
    // 'value' attribute on BooleanRadioCell (id=TermValue_Cell) at ScheduledItemCovTermInput.bit.pcf: line 19, column 33
    function value_2 () : java.lang.Boolean {
      return bitCovTerm.Value
    }
    
    property get bitCovTerm () : gw.api.domain.covterm.GenericCovTerm<Boolean> {
      return getVariableValue("bitCovTerm", 0) as gw.api.domain.covterm.GenericCovTerm<Boolean>
    }
    
    property set bitCovTerm ($arg :  gw.api.domain.covterm.GenericCovTerm<Boolean>) {
      setVariableValue("bitCovTerm", 0, $arg)
    }
    
    property get covTerm () : gw.api.domain.covterm.CovTerm {
      return getRequireValue("covTerm", 0) as gw.api.domain.covterm.CovTerm
    }
    
    property set covTerm ($arg :  gw.api.domain.covterm.CovTerm) {
      setRequireValue("covTerm", 0, $arg)
    }
    
    
  }
  
  
}