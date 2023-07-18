package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementCoverageInputSet.surplus.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementCoverageInputSet_surplusExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementCoverageInputSet.surplus.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementCoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=MaxRetention_Input) at AgreementCoverageInputSet.surplus.pcf: line 46, column 42
    function currency_17 () : typekey.Currency {
      return surplusTreaty.Currency
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=AttachmentPoint_Input) at AgreementCoverageInputSet.surplus.pcf: line 22, column 41
    function currency_5 () : typekey.Currency {
      return agreement.Currency
    }
    
    // 'value' attribute on MonetaryAmountInput (id=MaxRetention_Input) at AgreementCoverageInputSet.surplus.pcf: line 46, column 42
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      surplusTreaty.MaxRetention = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextInput (id=CededShare_Input) at AgreementCoverageInputSet.surplus.pcf: line 58, column 40
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.CededShare = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AttachmentPoint_Input) at AgreementCoverageInputSet.surplus.pcf: line 22, column 41
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.AttachmentPoint = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Limit_Input) at AgreementCoverageInputSet.surplus.pcf: line 34, column 39
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.CoverageLimit = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'initialValue' attribute on Variable at AgreementCoverageInputSet.surplus.pcf: line 14, column 38
    function initialValue_0 () : entity.SurplusRITreaty {
      return agreement as SurplusRITreaty
    }
    
    // 'onChange' attribute on PostOnChange at AgreementCoverageInputSet.surplus.pcf: line 25, column 101
    function onChange_1 () : void {
      surplusTreaty.setDefaultMaxRetention(); agreement.updateAmountOfCoverageCeded()
    }
    
    // 'onChange' attribute on PostOnChange at AgreementCoverageInputSet.surplus.pcf: line 49, column 63
    function onChange_13 () : void {
      surplusTreaty.setDefaultAttachmentPoint()
    }
    
    // 'onChange' attribute on PostOnChange at AgreementCoverageInputSet.surplus.pcf: line 61, column 61
    function onChange_19 () : void {
      agreement.updateAmountOfCoverageCeded()
    }
    
    // 'onChange' attribute on PostOnChange at AgreementCoverageInputSet.surplus.pcf: line 37, column 61
    function onChange_7 () : void {
      agreement.updateAmountOfCoverageCeded()
    }
    
    // 'value' attribute on MonetaryAmountInput (id=MaxRetention_Input) at AgreementCoverageInputSet.surplus.pcf: line 46, column 42
    function valueRoot_16 () : java.lang.Object {
      return surplusTreaty
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AttachmentPoint_Input) at AgreementCoverageInputSet.surplus.pcf: line 22, column 41
    function valueRoot_4 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on MonetaryAmountInput (id=MaxRetention_Input) at AgreementCoverageInputSet.surplus.pcf: line 46, column 42
    function value_14 () : gw.pl.currency.MonetaryAmount {
      return surplusTreaty.MaxRetention
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AttachmentPoint_Input) at AgreementCoverageInputSet.surplus.pcf: line 22, column 41
    function value_2 () : gw.pl.currency.MonetaryAmount {
      return agreement.AttachmentPoint
    }
    
    // 'value' attribute on TextInput (id=CededShare_Input) at AgreementCoverageInputSet.surplus.pcf: line 58, column 40
    function value_20 () : java.math.BigDecimal {
      return agreement.CededShare
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AmountOfCoverage_Input) at AgreementCoverageInputSet.surplus.pcf: line 69, column 43
    function value_24 () : gw.pl.currency.MonetaryAmount {
      return agreement.AmountOfCoverage
    }
    
    // 'value' attribute on TextInput (id=Lines_Input) at AgreementCoverageInputSet.surplus.pcf: line 75, column 41
    function value_28 () : java.math.BigDecimal {
      return surplusTreaty.LinesOfCoverage
    }
    
    // 'value' attribute on TextInput (id=StartLine_Input) at AgreementCoverageInputSet.surplus.pcf: line 81, column 41
    function value_31 () : java.math.BigDecimal {
      return surplusTreaty.StartLine
    }
    
    // 'value' attribute on TextInput (id=StopLine_Input) at AgreementCoverageInputSet.surplus.pcf: line 87, column 41
    function value_34 () : java.math.BigDecimal {
      return surplusTreaty.StopLine
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Limit_Input) at AgreementCoverageInputSet.surplus.pcf: line 34, column 39
    function value_8 () : gw.pl.currency.MonetaryAmount {
      return agreement.CoverageLimit
    }
    
    property get agreement () : RIAgreement {
      return getRequireValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setRequireValue("agreement", 0, $arg)
    }
    
    property get surplusTreaty () : entity.SurplusRITreaty {
      return getVariableValue("surplusTreaty", 0) as entity.SurplusRITreaty
    }
    
    property set surplusTreaty ($arg :  entity.SurplusRITreaty) {
      setVariableValue("surplusTreaty", 0, $arg)
    }
    
    
  }
  
  
}