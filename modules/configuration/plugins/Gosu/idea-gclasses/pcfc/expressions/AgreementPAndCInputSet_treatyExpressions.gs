package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/AgreementPAndCInputSet.treaty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AgreementPAndCInputSet_treatyExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementPAndCInputSet.treaty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AgreementPAndCInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=MinDeposit_Input) at AgreementPAndCInputSet.treaty.pcf: line 52, column 41
    function currency_16 () : typekey.Currency {
      return treaty.TreatyCurrency
    }
    
    // 'value' attribute on MonetaryAmountInput (id=MinDeposit_Input) at AgreementPAndCInputSet.treaty.pcf: line 52, column 41
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      treaty.MinDepositPremium = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=DepositPmtSchedule_Input) at AgreementPAndCInputSet.treaty.pcf: line 58, column 48
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      treaty.DepositPaymentSchedule = (__VALUE_TO_SET as typekey.DepPmntScheduleType)
    }
    
    // 'initialValue' attribute on Variable at AgreementPAndCInputSet.treaty.pcf: line 14, column 29
    function initialValue_0 () : entity.Treaty {
      return agreement as Treaty
    }
    
    // 'value' attribute on MonetaryAmountInput (id=MinDeposit_Input) at AgreementPAndCInputSet.treaty.pcf: line 52, column 41
    function valueRoot_15 () : java.lang.Object {
      return treaty
    }
    
    // 'value' attribute on MonetaryAmountInput (id=MinDeposit_Input) at AgreementPAndCInputSet.treaty.pcf: line 52, column 41
    function value_13 () : gw.pl.currency.MonetaryAmount {
      return treaty.MinDepositPremium
    }
    
    // 'value' attribute on TypeKeyInput (id=DepositPmtSchedule_Input) at AgreementPAndCInputSet.treaty.pcf: line 58, column 48
    function value_18 () : typekey.DepPmntScheduleType {
      return treaty.DepositPaymentSchedule
    }
    
    property get agreement () : RIAgreement {
      return getRequireValue("agreement", 0) as RIAgreement
    }
    
    property set agreement ($arg :  RIAgreement) {
      setRequireValue("agreement", 0, $arg)
    }
    
    property get treaty () : entity.Treaty {
      return getVariableValue("treaty", 0) as entity.Treaty
    }
    
    property set treaty ($arg :  entity.Treaty) {
      setVariableValue("treaty", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/reinsurance/AgreementPAndCInputSet.treaty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InputSetExpressionsImpl extends AgreementPAndCInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=SetCedingRate) at AgreementPAndCInputSet.treaty.pcf: line 43, column 49
    function action_11 () : void {
      nonprop.CedingRateAdjusted = false
    }
    
    // 'action' attribute on Link (id=AdjustCedingRates) at AgreementPAndCInputSet.treaty.pcf: line 36, column 53
    function action_9 () : void {
      nonprop.CedingRateAdjusted = true
    }
    
    // 'value' attribute on TextInput (id=CedingRate_Input) at AgreementPAndCInputSet.treaty.pcf: line 28, column 43
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      nonprop.CedingRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'editable' attribute on TextInput (id=CedingRate_Input) at AgreementPAndCInputSet.treaty.pcf: line 28, column 43
    function editable_2 () : java.lang.Boolean {
      return not nonprop.CedingRateAdjusted
    }
    
    // 'initialValue' attribute on Variable at AgreementPAndCInputSet.treaty.pcf: line 20, column 51
    function initialValue_1 () : entity.NonProportionalRIAgreement {
      return agreement typeis NonProportionalRIAgreement ? agreement : null
    }
    
    // 'value' attribute on TextInput (id=CedingRate_Input) at AgreementPAndCInputSet.treaty.pcf: line 28, column 43
    function valueRoot_5 () : java.lang.Object {
      return nonprop
    }
    
    // 'value' attribute on TextInput (id=CedingRate_Input) at AgreementPAndCInputSet.treaty.pcf: line 28, column 43
    function value_3 () : java.math.BigDecimal {
      return nonprop.CedingRate
    }
    
    // 'visible' attribute on Link (id=SetCedingRate) at AgreementPAndCInputSet.treaty.pcf: line 43, column 49
    function visible_10 () : java.lang.Boolean {
      return nonprop.CedingRateAdjusted
    }
    
    // 'visible' attribute on InputSet at AgreementPAndCInputSet.treaty.pcf: line 16, column 61
    function visible_12 () : java.lang.Boolean {
      return agreement typeis NonProportionalRIAgreement
    }
    
    property get nonprop () : entity.NonProportionalRIAgreement {
      return getVariableValue("nonprop", 1) as entity.NonProportionalRIAgreement
    }
    
    property set nonprop ($arg :  entity.NonProportionalRIAgreement) {
      setVariableValue("nonprop", 1, $arg)
    }
    
    
  }
  
  
}