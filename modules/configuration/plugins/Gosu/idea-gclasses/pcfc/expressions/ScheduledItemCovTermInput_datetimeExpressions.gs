package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.datetime.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduledItemCovTermInput_datetimeExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemCovTermInput.datetime.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduledItemCovTermInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=DateValue_Cell) at ScheduledItemCovTermInput.datetime.pcf: line 19, column 34
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      dateCovTerm.Value = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemCovTermInput.datetime.pcf: line 14, column 64
    function initialValue_0 () : gw.api.domain.covterm.GenericCovTerm<Date> {
      return covTerm as gw.api.domain.covterm.GenericCovTerm<Date>
    }
    
    // 'required' attribute on DateCell (id=DateValue_Cell) at ScheduledItemCovTermInput.datetime.pcf: line 19, column 34
    function required_1 () : java.lang.Boolean {
      return dateCovTerm.Pattern.Required
    }
    
    // 'value' attribute on DateCell (id=DateValue_Cell) at ScheduledItemCovTermInput.datetime.pcf: line 19, column 34
    function valueRoot_4 () : java.lang.Object {
      return dateCovTerm
    }
    
    // 'value' attribute on DateCell (id=DateValue_Cell) at ScheduledItemCovTermInput.datetime.pcf: line 19, column 34
    function value_2 () : java.util.Date {
      return dateCovTerm.Value
    }
    
    property get covTerm () : gw.api.domain.covterm.CovTerm {
      return getRequireValue("covTerm", 0) as gw.api.domain.covterm.CovTerm
    }
    
    property set covTerm ($arg :  gw.api.domain.covterm.CovTerm) {
      setRequireValue("covTerm", 0, $arg)
    }
    
    property get dateCovTerm () : gw.api.domain.covterm.GenericCovTerm<Date> {
      return getVariableValue("dateCovTerm", 0) as gw.api.domain.covterm.GenericCovTerm<Date>
    }
    
    property set dateCovTerm ($arg :  gw.api.domain.covterm.GenericCovTerm<Date>) {
      setVariableValue("dateCovTerm", 0, $arg)
    }
    
    
  }
  
  
}