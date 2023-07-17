package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementCoverageInputSet.quotashare.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementCoverageInputSet_quotashareExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementCoverageInputSet.quotashare.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementCoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=Limit_Input) at AgreementCoverageInputSet.quotashare.pcf: line 30, column 39
    function currency_9 () : typekey.Currency {
      return agreement.Currency
    }
    
    // 'value' attribute on TextInput (id=CededShare_Input) at AgreementCoverageInputSet.quotashare.pcf: line 18, column 40
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.CededShare = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Limit_Input) at AgreementCoverageInputSet.quotashare.pcf: line 30, column 39
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.CoverageLimit = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'onChange' attribute on PostOnChange at AgreementCoverageInputSet.quotashare.pcf: line 21, column 61
    function onChange_0 () : void {
      agreement.updateAmountOfCoverageCeded()
    }
    
    // 'onChange' attribute on PostOnChange at AgreementCoverageInputSet.quotashare.pcf: line 33, column 61
    function onChange_5 () : void {
      agreement.updateAmountOfCoverageCeded()
    }
    
    // 'value' attribute on TextInput (id=CededShare_Input) at AgreementCoverageInputSet.quotashare.pcf: line 18, column 40
    function valueRoot_3 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on TextInput (id=CededShare_Input) at AgreementCoverageInputSet.quotashare.pcf: line 18, column 40
    function value_1 () : java.math.BigDecimal {
      return agreement.CededShare
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AmountOfCoverage_Input) at AgreementCoverageInputSet.quotashare.pcf: line 41, column 43
    function value_11 () : gw.pl.currency.MonetaryAmount {
      return agreement.AmountOfCoverage
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Limit_Input) at AgreementCoverageInputSet.quotashare.pcf: line 30, column 39
    function value_6 () : gw.pl.currency.MonetaryAmount {
      return agreement.CoverageLimit
    }
    
    property get agreement () : RIAgreement {
      return getRequireValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setRequireValue("agreement", 0, $arg)
    }
    
    
  }
  
  
}