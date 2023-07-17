package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementCoverageInputSet.facproportional.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementCoverageInputSet_facproportionalExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementCoverageInputSet.facproportional.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementCoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=AmountOfCoverage_Input) at AgreementCoverageInputSet.facproportional.pcf: line 29, column 43
    function currency_10 () : typekey.Currency {
      return agreement.Currency
    }
    
    // 'value' attribute on TextInput (id=CededShare_Input) at AgreementCoverageInputSet.facproportional.pcf: line 18, column 40
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.CededShare = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AmountOfCoverage_Input) at AgreementCoverageInputSet.facproportional.pcf: line 29, column 43
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.AmountOfCoverage = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'onChange' attribute on PostOnChange at AgreementCoverageInputSet.facproportional.pcf: line 21, column 61
    function onChange_0 () : void {
      agreement.updateAmountOfCoverageCeded()
    }
    
    // 'validationExpression' attribute on TextInput (id=CededShare_Input) at AgreementCoverageInputSet.facproportional.pcf: line 18, column 40
    function validationExpression_1 () : java.lang.Object {
      return ((agreement.AmountOfCoverage == null and agreement.CededShare == null) or (agreement.AmountOfCoverage != null and agreement.CededShare != null)) ? DisplayKey.get("Web.Reinsurance.Agreement.Validate.FacPropRequiresCededShareOrAmount") : null
    }
    
    // 'value' attribute on TextInput (id=CededShare_Input) at AgreementCoverageInputSet.facproportional.pcf: line 18, column 40
    function valueRoot_4 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on TextInput (id=CededShare_Input) at AgreementCoverageInputSet.facproportional.pcf: line 18, column 40
    function value_2 () : java.math.BigDecimal {
      return agreement.CededShare
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AmountOfCoverage_Input) at AgreementCoverageInputSet.facproportional.pcf: line 29, column 43
    function value_7 () : gw.pl.currency.MonetaryAmount {
      return agreement.AmountOfCoverage
    }
    
    property get agreement () : RIAgreement {
      return getRequireValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setRequireValue("agreement", 0, $arg)
    }
    
    
  }
  
  
}