package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountContactDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountContactDVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountContactDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountContactDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at AccountContactDV.pcf: line 34, column 36
    function def_onEnter_12 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressInputSetAddressOwner(selectedAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef at AccountContactDV.pcf: line 27, column 36
    function def_onEnter_3 (def :  pcf.ContactNameInputSet_company) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef (id=ContactCurrency) at AccountContactDV.pcf: line 52, column 31
    function def_onEnter_30 (def :  pcf.ContactCurrencyInputSet) : void {
      def.onEnter(contact, selectedAddress, contact.New)
    }
    
    // 'def' attribute on InputSetRef at AccountContactDV.pcf: line 78, column 36
    function def_onEnter_43 (def :  pcf.OfficialIDInputSet_company) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at AccountContactDV.pcf: line 78, column 36
    function def_onEnter_45 (def :  pcf.OfficialIDInputSet_person) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at AccountContactDV.pcf: line 27, column 36
    function def_onEnter_5 (def :  pcf.ContactNameInputSet_person) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at AccountContactDV.pcf: line 30, column 94
    function def_onEnter_8 (def :  pcf.LinkedAddressInputSet) : void {
      def.onEnter(selectedAddress, contact, null, anAccount, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at AccountContactDV.pcf: line 34, column 36
    function def_refreshVariables_13 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressInputSetAddressOwner(selectedAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef (id=ContactCurrency) at AccountContactDV.pcf: line 52, column 31
    function def_refreshVariables_31 (def :  pcf.ContactCurrencyInputSet) : void {
      def.refreshVariables(contact, selectedAddress, contact.New)
    }
    
    // 'def' attribute on InputSetRef at AccountContactDV.pcf: line 27, column 36
    function def_refreshVariables_4 (def :  pcf.ContactNameInputSet_company) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at AccountContactDV.pcf: line 78, column 36
    function def_refreshVariables_44 (def :  pcf.OfficialIDInputSet_company) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at AccountContactDV.pcf: line 78, column 36
    function def_refreshVariables_46 (def :  pcf.OfficialIDInputSet_person) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at AccountContactDV.pcf: line 27, column 36
    function def_refreshVariables_6 (def :  pcf.ContactNameInputSet_person) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at AccountContactDV.pcf: line 30, column 94
    function def_refreshVariables_9 (def :  pcf.LinkedAddressInputSet) : void {
      def.refreshVariables(selectedAddress, contact, null, anAccount, openForEdit)
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at AccountContactDV.pcf: line 42, column 36
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.PrimaryAddress.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at AccountContactDV.pcf: line 48, column 36
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.PrimaryAddress.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at AccountContactDV.pcf: line 62, column 54
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Person).LicenseNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=LicenseState_Input) at AccountContactDV.pcf: line 69, column 45
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Person).LicenseState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'editable' attribute on InputSetRef at AccountContactDV.pcf: line 34, column 36
    function editable_10 () : java.lang.Boolean {
      return selectedAddress.LinkedAddress == null
    }
    
    // 'initialValue' attribute on Variable at AccountContactDV.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'initialValue' attribute on Variable at AccountContactDV.pcf: line 22, column 30
    function initialValue_1 () : entity.Address {
      return contact.PrimaryAddress
    }
    
    // 'mode' attribute on InputSetRef at AccountContactDV.pcf: line 78, column 36
    function mode_47 () : java.lang.Object {
      return contact.Subtype
    }
    
    // 'mode' attribute on InputSetRef at AccountContactDV.pcf: line 27, column 36
    function mode_7 () : java.lang.Object {
      return contact.Subtype.Code
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at AccountContactDV.pcf: line 42, column 36
    function valueRoot_18 () : java.lang.Object {
      return contact.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at AccountContactDV.pcf: line 62, column 54
    function valueRoot_34 () : java.lang.Object {
      return (contact as Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at AccountContactDV.pcf: line 42, column 36
    function value_16 () : typekey.AddressType {
      return contact.PrimaryAddress.AddressType
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at AccountContactDV.pcf: line 48, column 36
    function value_24 () : java.lang.String {
      return contact.PrimaryAddress.Description
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at AccountContactDV.pcf: line 62, column 54
    function value_32 () : java.lang.String {
      return (contact as Person).LicenseNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=LicenseState_Input) at AccountContactDV.pcf: line 69, column 45
    function value_36 () : typekey.Jurisdiction {
      return (contact as Person).LicenseState
    }
    
    // 'visible' attribute on InputSetRef at AccountContactDV.pcf: line 27, column 36
    function visible_2 () : java.lang.Boolean {
      return contact != null
    }
    
    // 'visible' attribute on InputSet (id=LicenseInputSet) at AccountContactDV.pcf: line 56, column 41
    function visible_40 () : java.lang.Boolean {
      return contact typeis Person
    }
    
    property get anAccount () : Account {
      return getRequireValue("anAccount", 0) as Account
    }
    
    property set anAccount ($arg :  Account) {
      setRequireValue("anAccount", 0, $arg)
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get selectedAddress () : entity.Address {
      return getVariableValue("selectedAddress", 0) as entity.Address
    }
    
    property set selectedAddress ($arg :  entity.Address) {
      setVariableValue("selectedAddress", 0, $arg)
    }
    
    
  }
  
  
}