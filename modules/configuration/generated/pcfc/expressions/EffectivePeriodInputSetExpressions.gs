package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/EffectivePeriodInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EffectivePeriodInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/EffectivePeriodInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EffectivePeriodInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=PeriodType_Input) at EffectivePeriodInputSet.pcf: line 15, column 51
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.PeriodType = (__VALUE_TO_SET as typekey.ContractEffectivePeriod)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at EffectivePeriodInputSet.pcf: line 24, column 32
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.From = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at EffectivePeriodInputSet.pcf: line 29, column 30
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      criteria.To = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on InputSet at EffectivePeriodInputSet.pcf: line 19, column 51
    function editable_12 () : java.lang.Boolean {
      return criteria.PeriodType == TC_CUSTOM
    }
    
    // 'value' attribute on TypeKeyInput (id=PeriodType_Input) at EffectivePeriodInputSet.pcf: line 15, column 51
    function valueRoot_2 () : java.lang.Object {
      return criteria
    }
    
    // 'value' attribute on TypeKeyInput (id=PeriodType_Input) at EffectivePeriodInputSet.pcf: line 15, column 51
    function value_0 () : typekey.ContractEffectivePeriod {
      return criteria.PeriodType
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at EffectivePeriodInputSet.pcf: line 24, column 32
    function value_4 () : java.util.Date {
      return criteria.From
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at EffectivePeriodInputSet.pcf: line 29, column 30
    function value_8 () : java.util.Date {
      return criteria.To
    }
    
    property get criteria () : gw.reinsurance.search.EffectivePeriodSearchCriteria {
      return getRequireValue("criteria", 0) as gw.reinsurance.search.EffectivePeriodSearchCriteria
    }
    
    property set criteria ($arg :  gw.reinsurance.search.EffectivePeriodSearchCriteria) {
      setRequireValue("criteria", 0, $arg)
    }
    
    
  }
  
  
}