package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementPAndCInputSet.facultative.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementPAndCInputSet_facultativeExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementPAndCInputSet.facultative.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementPAndCInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=AdjustFlatPremium) at AgreementPAndCInputSet.facultative.pcf: line 30, column 48
    function action_10 () : void {
      fac.FlatPremiumAdjusted = true
    }
    
    // 'action' attribute on Link (id=SetFlatPremium) at AgreementPAndCInputSet.facultative.pcf: line 37, column 44
    function action_12 () : void {
      fac.FlatPremiumAdjusted = false
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=CededPremium_Input) at AgreementPAndCInputSet.facultative.pcf: line 22, column 33
    function currency_6 () : typekey.Currency {
      return fac.FacultativeCurrency
    }
    
    // 'value' attribute on TextInput (id=Markup_Input) at AgreementPAndCInputSet.facultative.pcf: line 47, column 62
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      fac.MarkUp = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CededPremium_Input) at AgreementPAndCInputSet.facultative.pcf: line 22, column 33
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      fac.CededPremium = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'editable' attribute on MonetaryAmountInput (id=CededPremium_Input) at AgreementPAndCInputSet.facultative.pcf: line 22, column 33
    function editable_1 () : java.lang.Boolean {
      return not fac.FlatPremiumAdjusted
    }
    
    // 'initialValue' attribute on Variable at AgreementPAndCInputSet.facultative.pcf: line 14, column 34
    function initialValue_0 () : entity.Facultative {
      return agreement as Facultative
    }
    
    // 'required' attribute on MonetaryAmountInput (id=CededPremium_Input) at AgreementPAndCInputSet.facultative.pcf: line 22, column 33
    function required_2 () : java.lang.Boolean {
      return agreement typeis NonProportionalRIAgreement
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CededPremium_Input) at AgreementPAndCInputSet.facultative.pcf: line 22, column 33
    function valueRoot_5 () : java.lang.Object {
      return fac
    }
    
    // 'value' attribute on TextInput (id=Markup_Input) at AgreementPAndCInputSet.facultative.pcf: line 47, column 62
    function value_14 () : java.math.BigDecimal {
      return fac.MarkUp
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalCost_Input) at AgreementPAndCInputSet.facultative.pcf: line 55, column 62
    function value_20 () : gw.pl.currency.MonetaryAmount {
      return fac.TotalCost
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CededPremium_Input) at AgreementPAndCInputSet.facultative.pcf: line 22, column 33
    function value_3 () : gw.pl.currency.MonetaryAmount {
      return fac.CededPremium
    }
    
    // 'visible' attribute on Link (id=SetFlatPremium) at AgreementPAndCInputSet.facultative.pcf: line 37, column 44
    function visible_11 () : java.lang.Boolean {
      return fac.FlatPremiumAdjusted
    }
    
    property get agreement () : RIAgreement {
      return getRequireValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setRequireValue("agreement", 0, $arg)
    }
    
    property get fac () : entity.Facultative {
      return getVariableValue("fac", 0) as entity.Facultative
    }
    
    property set fac ($arg :  entity.Facultative) {
      setVariableValue("fac", 0, $arg)
    }
    
    
  }
  
  
}