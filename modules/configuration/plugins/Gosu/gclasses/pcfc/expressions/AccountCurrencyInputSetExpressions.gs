package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountCurrencyInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountCurrencyInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountCurrencyInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountCurrencyInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at AccountCurrencyInputSet.pcf: line 48, column 37
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.PreferredCoverageCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredSettlementCurrency_Input) at AccountCurrencyInputSet.pcf: line 41, column 37
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      account.PreferredSettlementCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'editable' attribute on TypeKeyInput (id=PreferredSettlementCurrency_Input) at AccountCurrencyInputSet.pcf: line 41, column 37
    function editable_2 () : java.lang.Boolean {
      return account.Editable
    }
    
    // 'initialValue' attribute on Variable at AccountCurrencyInputSet.pcf: line 26, column 60
    function initialValue_0 () : gw.web.financials.AccountCurrencyInitializer {
      return new gw.web.financials.AccountCurrencyInitializer(account, address)
    }
    
    // 'initialValue' attribute on Variable at AccountCurrencyInputSet.pcf: line 31, column 32
    function initialValue_1 () : java.lang.Object {
      return accountInitializer.initialize(updatesCurrenciesOnCountryChange)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredSettlementCurrency_Input) at AccountCurrencyInputSet.pcf: line 41, column 37
    function valueRoot_5 () : java.lang.Object {
      return account
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredSettlementCurrency_Input) at AccountCurrencyInputSet.pcf: line 41, column 37
    function value_3 () : typekey.Currency {
      return account.PreferredSettlementCurrency
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredCoverageCurrency_Input) at AccountCurrencyInputSet.pcf: line 48, column 37
    function value_9 () : typekey.Currency {
      return account.PreferredCoverageCurrency
    }
    
    // 'visible' attribute on InputSet (id=AccountCurrencyInputSet) at AccountCurrencyInputSet.pcf: line 7, column 62
    function visible_14 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get accountInitializer () : gw.web.financials.AccountCurrencyInitializer {
      return getVariableValue("accountInitializer", 0) as gw.web.financials.AccountCurrencyInitializer
    }
    
    property set accountInitializer ($arg :  gw.web.financials.AccountCurrencyInitializer) {
      setVariableValue("accountInitializer", 0, $arg)
    }
    
    property get address () : Address {
      return getRequireValue("address", 0) as Address
    }
    
    property set address ($arg :  Address) {
      setRequireValue("address", 0, $arg)
    }
    
    property get initializerCaller () : java.lang.Object {
      return getVariableValue("initializerCaller", 0) as java.lang.Object
    }
    
    property set initializerCaller ($arg :  java.lang.Object) {
      setVariableValue("initializerCaller", 0, $arg)
    }
    
    property get updatesCurrenciesOnCountryChange () : boolean {
      return getRequireValue("updatesCurrenciesOnCountryChange", 0) as java.lang.Boolean
    }
    
    property set updatesCurrenciesOnCountryChange ($arg :  boolean) {
      setRequireValue("updatesCurrenciesOnCountryChange", 0, $arg)
    }
    
    
  }
  
  
}