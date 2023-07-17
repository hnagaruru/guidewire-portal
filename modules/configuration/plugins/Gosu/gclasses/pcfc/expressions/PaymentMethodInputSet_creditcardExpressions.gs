package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/demopaymentsystem/PaymentMethodInputSet.creditcard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentMethodInputSet_creditcardExpressions {
  @javax.annotation.Generated("config/web/pcf/demopaymentsystem/PaymentMethodInputSet.creditcard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressInputSetExpressionsImpl extends PaymentMethodInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=AutoFillIcon) at AddressAutoFillWidget.xml: line 7, column 71
    function action_23 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(address, "City")
    }
    
    // 'action' attribute on AddressAutoFillInput (id=City_Input) at PaymentMethodInputSet.creditcard.pcf: line 87, column 30
    function action_31 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(address, "City")
    }
    
    // 'action' attribute on MenuItem (id=AutoFillIcon) at AddressAutoFillWidget.xml: line 7, column 71
    function action_43 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(address, "PostalCode")
    }
    
    // 'action' attribute on AddressAutoFillInput (id=PostalCode_Input) at PaymentMethodInputSet.creditcard.pcf: line 114, column 36
    function action_52 () : void {
      gw.api.contact.AddressAutocompleteUtil.autofillAddress(address, "PostalCode")
    }
    
    // 'autoComplete' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function autoComplete_29 () : gw.api.contact.AutocompleteHandler {
      return cityhandler
    }
    
    // 'autoComplete' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function autoComplete_49 () : gw.api.contact.AutocompleteHandler {
      return pchandler
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at PaymentMethodInputSet.creditcard.pcf: line 71, column 39
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      address.AddressLine1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at PaymentMethodInputSet.creditcard.pcf: line 76, column 39
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      address.AddressLine2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      address.City = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at PaymentMethodInputSet.creditcard.pcf: line 99, column 35
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      address.State = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      address.PostalCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at PaymentMethodInputSet.creditcard.pcf: line 124, column 37
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      address.Country = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'initialValue' attribute on Variable at PaymentMethodInputSet.creditcard.pcf: line 56, column 59
    function initialValue_12 () : gw.api.contact.AddressAutocompleteHandler {
      return new gw.api.contact.AddressAutocompleteHandler("city","Country,City,State,PostalCode",true)
    }
    
    // 'initialValue' attribute on Variable at PaymentMethodInputSet.creditcard.pcf: line 60, column 59
    function initialValue_13 () : gw.api.contact.AddressAutocompleteHandler {
      return new gw.api.contact.AddressAutocompleteHandler("county","Country,City,County,State,PostalCode",true)
    }
    
    // 'initialValue' attribute on Variable at PaymentMethodInputSet.creditcard.pcf: line 64, column 59
    function initialValue_14 () : gw.api.contact.AddressAutocompleteHandler {
      return new gw.api.contact.AddressAutocompleteHandler("postalcode","Country,City,State,PostalCode",true)
    }
    
    // 'inputMask' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function inputMask_50 () : java.lang.String {
      return gw.api.contact.AddressAutocompleteUtil.getInputMask(address, "PostalCode")
    }
    
    // 'onChange' attribute on AddressAutoFillInput (id=City_Input) at PaymentMethodInputSet.creditcard.pcf: line 90, column 214
    function onChange_24 () : void {
      gw.api.contact.AddressAutocompleteUtil.getAutofillValue(address.Country,"City",new String[]{"City","PostalCode"},new Object[] {address.City,address.PostalCode})
    }
    
    // 'onChange' attribute on PostOnChange at PaymentMethodInputSet.creditcard.pcf: line 102, column 217
    function onChange_36 () : void {
      gw.api.contact.AddressAutocompleteUtil.getAutofillValue(address.Country,"state",new String[]{"State","PostalCode"},new Object[] {address.State,address.PostalCode})
    }
    
    // 'onChange' attribute on AddressAutoFillInput (id=PostalCode_Input) at PaymentMethodInputSet.creditcard.pcf: line 117, column 252
    function onChange_44 () : void {
      gw.api.contact.AddressAutocompleteUtil.getAutofillValue(address.Country,"PostalCode",new String[]{"PostalCode","City","State"},new Object[] {address.PostalCode,address.City,address.State})
    }
    
    // 'onChange' attribute on PostOnChange at PaymentMethodInputSet.creditcard.pcf: line 126, column 44
    function onChange_57 () : void {
      address.State = null
    }
    
    // 'validationExpression' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function validationExpression_25 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.validate(address, "City")
    }
    
    // 'validationExpression' attribute on TypeKeyInput (id=State_Input) at PaymentMethodInputSet.creditcard.pcf: line 99, column 35
    function validationExpression_37 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.validate(address, "State")
    }
    
    // 'validationExpression' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function validationExpression_45 () : java.lang.Object {
      return gw.api.contact.AddressAutocompleteUtil.validate(address, "PostalCode")
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at PaymentMethodInputSet.creditcard.pcf: line 71, column 39
    function valueRoot_17 () : java.lang.Object {
      return address
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at PaymentMethodInputSet.creditcard.pcf: line 71, column 39
    function value_15 () : java.lang.String {
      return address.AddressLine1
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at PaymentMethodInputSet.creditcard.pcf: line 76, column 39
    function value_19 () : java.lang.String {
      return address.AddressLine2
    }
    
    // 'value' attribute on AddressAutoFillInput (id=City_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function value_26 () : java.lang.String {
      return address.City
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at PaymentMethodInputSet.creditcard.pcf: line 99, column 35
    function value_38 () : typekey.State {
      return address.State
    }
    
    // 'value' attribute on AddressAutoFillInput (id=PostalCode_Input) at AddressAutoFillWidget.xml: line 7, column 71
    function value_46 () : java.lang.String {
      return address.PostalCode
    }
    
    // 'value' attribute on TypeKeyInput (id=Country_Input) at PaymentMethodInputSet.creditcard.pcf: line 124, column 37
    function value_58 () : typekey.Country {
      return address.Country
    }
    
    property get cityhandler () : gw.api.contact.AddressAutocompleteHandler {
      return getVariableValue("cityhandler", 1) as gw.api.contact.AddressAutocompleteHandler
    }
    
    property set cityhandler ($arg :  gw.api.contact.AddressAutocompleteHandler) {
      setVariableValue("cityhandler", 1, $arg)
    }
    
    property get countyhandler () : gw.api.contact.AddressAutocompleteHandler {
      return getVariableValue("countyhandler", 1) as gw.api.contact.AddressAutocompleteHandler
    }
    
    property set countyhandler ($arg :  gw.api.contact.AddressAutocompleteHandler) {
      setVariableValue("countyhandler", 1, $arg)
    }
    
    property get pchandler () : gw.api.contact.AddressAutocompleteHandler {
      return getVariableValue("pchandler", 1) as gw.api.contact.AddressAutocompleteHandler
    }
    
    property set pchandler ($arg :  gw.api.contact.AddressAutocompleteHandler) {
      setVariableValue("pchandler", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/demopaymentsystem/PaymentMethodInputSet.creditcard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentMethodInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=CreditCardType_Input) at PaymentMethodInputSet.creditcard.pcf: line 32, column 43
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      cardType = (__VALUE_TO_SET as typekey.CreditCardType)
    }
    
    // 'value' attribute on TextInput (id=CardHolderName_Input) at PaymentMethodInputSet.creditcard.pcf: line 50, column 34
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountHolderName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=CrediCardNumber_Input) at PaymentMethodInputSet.creditcard.pcf: line 38, column 33
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      creditCardNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Notes_Input) at PaymentMethodInputSet.creditcard.pcf: line 134, column 22
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at PaymentMethodInputSet.creditcard.pcf: line 44, column 34
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      creditCardExpDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=CreditCardType_Input) at PaymentMethodInputSet.creditcard.pcf: line 32, column 43
    function value_0 () : typekey.CreditCardType {
      return cardType
    }
    
    // 'value' attribute on TextInput (id=CrediCardNumber_Input) at PaymentMethodInputSet.creditcard.pcf: line 38, column 33
    function value_3 () : java.lang.String {
      return creditCardNumber
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at PaymentMethodInputSet.creditcard.pcf: line 44, column 34
    function value_6 () : java.util.Date {
      return creditCardExpDate
    }
    
    // 'value' attribute on TextInput (id=Notes_Input) at PaymentMethodInputSet.creditcard.pcf: line 134, column 22
    function value_62 () : java.lang.String {
      return notes
    }
    
    // 'value' attribute on TextInput (id=CardHolderName_Input) at PaymentMethodInputSet.creditcard.pcf: line 50, column 34
    function value_9 () : java.lang.String {
      return accountHolderName
    }
    
    property get accountHolderName () : String {
      return getRequireValue("accountHolderName", 0) as String
    }
    
    property set accountHolderName ($arg :  String) {
      setRequireValue("accountHolderName", 0, $arg)
    }
    
    property get address () : Address {
      return getRequireValue("address", 0) as Address
    }
    
    property set address ($arg :  Address) {
      setRequireValue("address", 0, $arg)
    }
    
    property get cardType () : CreditCardType {
      return getVariableValue("cardType", 0) as CreditCardType
    }
    
    property set cardType ($arg :  CreditCardType) {
      setVariableValue("cardType", 0, $arg)
    }
    
    property get creditCardExpDate () : java.util.Date {
      return getVariableValue("creditCardExpDate", 0) as java.util.Date
    }
    
    property set creditCardExpDate ($arg :  java.util.Date) {
      setVariableValue("creditCardExpDate", 0, $arg)
    }
    
    property get creditCardNumber () : String {
      return getVariableValue("creditCardNumber", 0) as String
    }
    
    property set creditCardNumber ($arg :  String) {
      setVariableValue("creditCardNumber", 0, $arg)
    }
    
    property get notes () : String {
      return getVariableValue("notes", 0) as String
    }
    
    property set notes ($arg :  String) {
      setVariableValue("notes", 0, $arg)
    }
    
    
  }
  
  
}