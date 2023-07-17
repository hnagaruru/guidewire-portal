package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.shorttext.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduledItemCovTermInput_shorttextExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.shorttext.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduledItemCovTermInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=StringValue_Cell) at ScheduledItemCovTermInput.shorttext.pcf: line 20, column 37
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      genericCovTerm.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemCovTermInput.shorttext.pcf: line 14, column 66
    function initialValue_0 () : gw.api.domain.covterm.GenericCovTerm<String> {
      return covTerm as gw.api.domain.covterm.GenericCovTerm<String>
    }
    
    // 'required' attribute on TextCell (id=StringValue_Cell) at ScheduledItemCovTermInput.shorttext.pcf: line 20, column 37
    function required_1 () : java.lang.Boolean {
      return genericCovTerm.Pattern.Required
    }
    
    // 'value' attribute on TextCell (id=StringValue_Cell) at ScheduledItemCovTermInput.shorttext.pcf: line 20, column 37
    function valueRoot_4 () : java.lang.Object {
      return genericCovTerm
    }
    
    // 'value' attribute on TextCell (id=StringValue_Cell) at ScheduledItemCovTermInput.shorttext.pcf: line 20, column 37
    function value_2 () : java.lang.String {
      return genericCovTerm.Value
    }
    
    property get covTerm () : gw.api.domain.covterm.CovTerm {
      return getRequireValue("covTerm", 0) as gw.api.domain.covterm.CovTerm
    }
    
    property set covTerm ($arg :  gw.api.domain.covterm.CovTerm) {
      setRequireValue("covTerm", 0, $arg)
    }
    
    property get genericCovTerm () : gw.api.domain.covterm.GenericCovTerm<String> {
      return getVariableValue("genericCovTerm", 0) as gw.api.domain.covterm.GenericCovTerm<String>
    }
    
    property set genericCovTerm ($arg :  gw.api.domain.covterm.GenericCovTerm<String>) {
      setVariableValue("genericCovTerm", 0, $arg)
    }
    
    
  }
  
  
}