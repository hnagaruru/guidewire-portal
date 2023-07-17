package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/ContactCurrencyInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactCurrencyInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/account/ContactCurrencyInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactCurrencyInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredSettlementCurrency_Input) at ContactCurrencyInputSet.pcf: line 38, column 65
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.PreferredSettlementCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'initialValue' attribute on Variable at ContactCurrencyInputSet.pcf: line 21, column 24
    function initialValue_0 () : Currency {
      return contact.PreferredSettlementCurrency ?: gw.api.util.CurrencyUtil.getDefaultCurrency()
    }
    
    // 'initialValue' attribute on Variable at ContactCurrencyInputSet.pcf: line 25, column 60
    function initialValue_1 () : gw.web.financials.ContactCurrencyInitializer {
      return new gw.web.financials.ContactCurrencyInitializer(contact, address)
    }
    
    // 'initialValue' attribute on Variable at ContactCurrencyInputSet.pcf: line 30, column 32
    function initialValue_2 () : java.lang.Object {
      return contactInitializer.initialize(updatesCurrenciesOnCountryChange)
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredSettlementCurrency_Input) at ContactCurrencyInputSet.pcf: line 38, column 65
    function valueRoot_6 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on TypeKeyInput (id=PreferredSettlementCurrency_Input) at ContactCurrencyInputSet.pcf: line 38, column 65
    function value_4 () : typekey.Currency {
      return contact.PreferredSettlementCurrency
    }
    
    // 'visible' attribute on TypeKeyInput (id=PreferredSettlementCurrency_Input) at ContactCurrencyInputSet.pcf: line 38, column 65
    function visible_3 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get InitializerCaller () : java.lang.Object {
      return getVariableValue("InitializerCaller", 0) as java.lang.Object
    }
    
    property set InitializerCaller ($arg :  java.lang.Object) {
      setVariableValue("InitializerCaller", 0, $arg)
    }
    
    property get address () : Address {
      return getRequireValue("address", 0) as Address
    }
    
    property set address ($arg :  Address) {
      setRequireValue("address", 0, $arg)
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contactInitializer () : gw.web.financials.ContactCurrencyInitializer {
      return getVariableValue("contactInitializer", 0) as gw.web.financials.ContactCurrencyInitializer
    }
    
    property set contactInitializer ($arg :  gw.web.financials.ContactCurrencyInitializer) {
      setVariableValue("contactInitializer", 0, $arg)
    }
    
    property get preferredSettlementCurrency () : Currency {
      return getVariableValue("preferredSettlementCurrency", 0) as Currency
    }
    
    property set preferredSettlementCurrency ($arg :  Currency) {
      setVariableValue("preferredSettlementCurrency", 0, $arg)
    }
    
    property get updatesCurrenciesOnCountryChange () : boolean {
      return getRequireValue("updatesCurrenciesOnCountryChange", 0) as java.lang.Boolean
    }
    
    property set updatesCurrenciesOnCountryChange ($arg :  boolean) {
      setRequireValue("updatesCurrenciesOnCountryChange", 0, $arg)
    }
    
    
  }
  
  
}