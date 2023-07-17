package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementCoverageInputSet.nonproportional.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementCoverageInputSet_nonproportionalExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementCoverageInputSet.nonproportional.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementCoverageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=AttachmentPoint_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 22, column 41
    function currency_5 () : typekey.Currency {
      return agreement.Currency
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Limit_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 40, column 39
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.CoverageLimit = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on CheckBoxInput (id=LimitIndexed_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 50, column 71
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      (agreement as NonProportionalRIAgreement).LimitIndexed = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=CededShare_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 57, column 40
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.CededShare = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AttachmentPoint_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 22, column 41
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      agreement.AttachmentPoint = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ApplyOnlyToGrossRetention_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 75, column 109
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      nonprop.ApplyToGrossRetentionOnly = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=attachmentIndexed_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 32, column 76
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      (agreement as NonProportionalRIAgreement).AttachmentIndexed = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at AgreementCoverageInputSet.nonproportional.pcf: line 14, column 49
    function initialValue_0 () : entity.NonProportionalRIAgreement {
      return agreement as NonProportionalRIAgreement
    }
    
    // 'onChange' attribute on PostOnChange at AgreementCoverageInputSet.nonproportional.pcf: line 25, column 61
    function onChange_1 () : void {
      agreement.updateAmountOfCoverageCeded()
    }
    
    // 'onChange' attribute on PostOnChange at AgreementCoverageInputSet.nonproportional.pcf: line 43, column 61
    function onChange_11 () : void {
      agreement.updateAmountOfCoverageCeded()
    }
    
    // 'onChange' attribute on PostOnChange at AgreementCoverageInputSet.nonproportional.pcf: line 60, column 61
    function onChange_21 () : void {
      agreement.updateAmountOfCoverageCeded()
    }
    
    // 'value' attribute on BooleanRadioInput (id=ApplyOnlyToGrossRetention_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 75, column 109
    function valueRoot_33 () : java.lang.Object {
      return nonprop
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AttachmentPoint_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 22, column 41
    function valueRoot_4 () : java.lang.Object {
      return agreement
    }
    
    // 'value' attribute on CheckBoxInput (id=attachmentIndexed_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 32, column 76
    function valueRoot_9 () : java.lang.Object {
      return (agreement as NonProportionalRIAgreement)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Limit_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 40, column 39
    function value_12 () : gw.pl.currency.MonetaryAmount {
      return agreement.CoverageLimit
    }
    
    // 'value' attribute on CheckBoxInput (id=LimitIndexed_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 50, column 71
    function value_17 () : java.lang.Boolean {
      return (agreement as NonProportionalRIAgreement).LimitIndexed
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AttachmentPoint_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 22, column 41
    function value_2 () : gw.pl.currency.MonetaryAmount {
      return agreement.AttachmentPoint
    }
    
    // 'value' attribute on TextInput (id=CededShare_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 57, column 40
    function value_22 () : java.math.BigDecimal {
      return agreement.CededShare
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AmountOfCoverage_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 68, column 43
    function value_26 () : gw.pl.currency.MonetaryAmount {
      return agreement.AmountOfCoverage
    }
    
    // 'value' attribute on BooleanRadioInput (id=ApplyOnlyToGrossRetention_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 75, column 109
    function value_31 () : java.lang.Boolean {
      return nonprop.ApplyToGrossRetentionOnly
    }
    
    // 'value' attribute on CheckBoxInput (id=attachmentIndexed_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 32, column 76
    function value_7 () : java.lang.Boolean {
      return (agreement as NonProportionalRIAgreement).AttachmentIndexed
    }
    
    // 'visible' attribute on BooleanRadioInput (id=ApplyOnlyToGrossRetention_Input) at AgreementCoverageInputSet.nonproportional.pcf: line 75, column 109
    function visible_30 () : java.lang.Boolean {
      return agreement typeis NetExcessOfLossRITreaty or agreement typeis FacNetExcessOfLossRIAgreement
    }
    
    property get agreement () : RIAgreement {
      return getRequireValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setRequireValue("agreement", 0, $arg)
    }
    
    property get nonprop () : entity.NonProportionalRIAgreement {
      return getVariableValue("nonprop", 0) as entity.NonProportionalRIAgreement
    }
    
    property set nonprop ($arg :  entity.NonProportionalRIAgreement) {
      setVariableValue("nonprop", 0, $arg)
    }
    
    
  }
  
  
}