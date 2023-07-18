package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.Direct.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduledItemCovTermInput_DirectExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.Direct.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduledItemCovTermInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=DirectTermInput_Cell) at ScheduledItemCovTermInput.Direct.pcf: line 20, column 41
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      directCovTerm.Value = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemCovTermInput.Direct.pcf: line 14, column 51
    function initialValue_0 () : gw.api.domain.covterm.DirectCovTerm {
      return covTerm as gw.api.domain.covterm.DirectCovTerm
    }
    
    // 'required' attribute on TextCell (id=DirectTermInput_Cell) at ScheduledItemCovTermInput.Direct.pcf: line 20, column 41
    function required_1 () : java.lang.Boolean {
      return directCovTerm.Pattern.Required
    }
    
    // 'value' attribute on TextCell (id=DirectTermInput_Cell) at ScheduledItemCovTermInput.Direct.pcf: line 20, column 41
    function valueRoot_4 () : java.lang.Object {
      return directCovTerm
    }
    
    // 'value' attribute on TextCell (id=DirectTermInput_Cell) at ScheduledItemCovTermInput.Direct.pcf: line 20, column 41
    function value_2 () : java.math.BigDecimal {
      return directCovTerm.Value
    }
    
    property get covTerm () : gw.api.domain.covterm.CovTerm {
      return getRequireValue("covTerm", 0) as gw.api.domain.covterm.CovTerm
    }
    
    property set covTerm ($arg :  gw.api.domain.covterm.CovTerm) {
      setRequireValue("covTerm", 0, $arg)
    }
    
    property get directCovTerm () : gw.api.domain.covterm.DirectCovTerm {
      return getVariableValue("directCovTerm", 0) as gw.api.domain.covterm.DirectCovTerm
    }
    
    property set directCovTerm ($arg :  gw.api.domain.covterm.DirectCovTerm) {
      setVariableValue("directCovTerm", 0, $arg)
    }
    
    
  }
  
  
}