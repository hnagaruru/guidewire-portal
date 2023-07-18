package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/reinsurance/RICPTransactionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RICPTransactionPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/reinsurance/RICPTransactionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RICPTransactionPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (transaction :  RICededPremiumTransaction) : int {
      return 0
    }
    
    // 'value' attribute on TextInput (id=Agreement_Input) at RICPTransactionPopup.pcf: line 19, column 49
    function valueRoot_1 () : java.lang.Object {
      return transaction.Agreement
    }
    
    // 'value' attribute on TextInput (id=Program_Input) at RICPTransactionPopup.pcf: line 23, column 47
    function valueRoot_4 () : java.lang.Object {
      return transaction.Program
    }
    
    // 'value' attribute on DateInput (id=CalcTimestamp_Input) at RICPTransactionPopup.pcf: line 27, column 48
    function valueRoot_7 () : java.lang.Object {
      return transaction
    }
    
    // 'value' attribute on TextInput (id=Agreement_Input) at RICPTransactionPopup.pcf: line 19, column 49
    function value_0 () : java.lang.String {
      return transaction.Agreement.Name
    }
    
    // 'value' attribute on TextInput (id=CommissionRate_Input) at RICPTransactionPopup.pcf: line 39, column 47
    function value_12 () : java.math.BigDecimal {
      return transaction.CommissionRate
    }
    
    // 'value' attribute on TextInput (id=MarkupRate_Input) at RICPTransactionPopup.pcf: line 45, column 47
    function value_15 () : java.math.BigDecimal {
      return transaction.MarkupRate
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at RICPTransactionPopup.pcf: line 49, column 48
    function value_18 () : java.util.Date {
      return transaction.EffectiveDate
    }
    
    // 'value' attribute on DateInput (id=DatePosted_Input) at RICPTransactionPopup.pcf: line 53, column 45
    function value_21 () : java.util.Date {
      return transaction.DatePosted
    }
    
    // 'value' attribute on TextInput (id=CalculationOrder_Input) at RICPTransactionPopup.pcf: line 60, column 44
    function value_24 () : java.lang.Integer {
      return transaction.CalculationOrder
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CededRiskAmount_Input) at RICPTransactionPopup.pcf: line 65, column 50
    function value_27 () : gw.pl.currency.MonetaryAmount {
      return transaction.CededRiskAmount
    }
    
    // 'value' attribute on TextInput (id=Program_Input) at RICPTransactionPopup.pcf: line 23, column 47
    function value_3 () : java.lang.String {
      return transaction.Program.Name
    }
    
    // 'value' attribute on MonetaryAmountInput (id=BasisGNP_Input) at RICPTransactionPopup.pcf: line 70, column 43
    function value_30 () : gw.pl.currency.MonetaryAmount {
      return transaction.BasisGNP
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CededPremium_Input) at RICPTransactionPopup.pcf: line 75, column 47
    function value_33 () : gw.pl.currency.MonetaryAmount {
      return transaction.CededPremium
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Commission_Input) at RICPTransactionPopup.pcf: line 80, column 45
    function value_36 () : gw.pl.currency.MonetaryAmount {
      return transaction.Commission
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CededPremiumMarkup_Input) at RICPTransactionPopup.pcf: line 85, column 53
    function value_39 () : gw.pl.currency.MonetaryAmount {
      return transaction.CededPremiumMarkup
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at RICPTransactionPopup.pcf: line 89, column 49
    function value_42 () : java.util.Date {
      return transaction.ExpirationDate
    }
    
    // 'value' attribute on DateInput (id=DateWritten_Input) at RICPTransactionPopup.pcf: line 93, column 46
    function value_45 () : java.util.Date {
      return transaction.DateWritten
    }
    
    // 'value' attribute on DateInput (id=CalcTimestamp_Input) at RICPTransactionPopup.pcf: line 27, column 48
    function value_6 () : java.util.Date {
      return transaction.CalcTimestamp
    }
    
    // 'value' attribute on TextInput (id=CedingRate_Input) at RICPTransactionPopup.pcf: line 33, column 47
    function value_9 () : java.math.BigDecimal {
      return transaction.CedingRate
    }
    
    override property get CurrentLocation () : pcf.RICPTransactionPopup {
      return super.CurrentLocation as pcf.RICPTransactionPopup
    }
    
    property get transaction () : RICededPremiumTransaction {
      return getVariableValue("transaction", 0) as RICededPremiumTransaction
    }
    
    property set transaction ($arg :  RICededPremiumTransaction) {
      setVariableValue("transaction", 0, $arg)
    }
    
    
  }
  
  
}