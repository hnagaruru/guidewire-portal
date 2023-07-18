package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/demopaymentsystem/PaymentMethodInputSet.ach.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentMethodInputSet_achExpressions {
  @javax.annotation.Generated("config/web/pcf/demopaymentsystem/PaymentMethodInputSet.ach.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ACHInputSetExpressionsImpl extends PaymentMethodInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=BankAccountType_Input) at PaymentMethodInputSet.ach.pcf: line 34, column 46
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountType = (__VALUE_TO_SET as typekey.BankAccountType)
    }
    
    // 'value' attribute on TextInput (id=Notes_Input) at PaymentMethodInputSet.ach.pcf: line 52, column 24
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=BankABANumber_Input) at PaymentMethodInputSet.ach.pcf: line 40, column 32
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      routingNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=BankAccountNumber_Input) at PaymentMethodInputSet.ach.pcf: line 46, column 32
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=BankAccountType_Input) at PaymentMethodInputSet.ach.pcf: line 34, column 46
    function value_0 () : typekey.BankAccountType {
      return accountType
    }
    
    // 'value' attribute on TextInput (id=BankABANumber_Input) at PaymentMethodInputSet.ach.pcf: line 40, column 32
    function value_3 () : java.lang.String {
      return routingNumber
    }
    
    // 'value' attribute on TextInput (id=BankAccountNumber_Input) at PaymentMethodInputSet.ach.pcf: line 46, column 32
    function value_6 () : java.lang.String {
      return accountNumber
    }
    
    // 'value' attribute on TextInput (id=Notes_Input) at PaymentMethodInputSet.ach.pcf: line 52, column 24
    function value_9 () : java.lang.String {
      return notes
    }
    
    property get accountNumber () : String {
      return getVariableValue("accountNumber", 1) as String
    }
    
    property set accountNumber ($arg :  String) {
      setVariableValue("accountNumber", 1, $arg)
    }
    
    property get accountType () : BankAccountType {
      return getVariableValue("accountType", 1) as BankAccountType
    }
    
    property set accountType ($arg :  BankAccountType) {
      setVariableValue("accountType", 1, $arg)
    }
    
    property get notes () : String {
      return getVariableValue("notes", 1) as String
    }
    
    property set notes ($arg :  String) {
      setVariableValue("notes", 1, $arg)
    }
    
    property get routingNumber () : String {
      return getVariableValue("routingNumber", 1) as String
    }
    
    property set routingNumber ($arg :  String) {
      setVariableValue("routingNumber", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/demopaymentsystem/PaymentMethodInputSet.ach.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentMethodInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
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
    
    
  }
  
  
}