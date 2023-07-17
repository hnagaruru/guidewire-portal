package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/ContactPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/ContactPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ContactPanelSet.pcf: line 33, column 42
    function def_onEnter_11 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressInputSetAddressOwner(address, false, true))
    }
    
    // 'def' attribute on InputSetRef at ContactPanelSet.pcf: line 26, column 42
    function def_onEnter_2 (def :  pcf.ContactNameInputSet_company) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef (id=ContactCurrency) at ContactPanelSet.pcf: line 49, column 37
    function def_onEnter_25 (def :  pcf.ContactCurrencyInputSet) : void {
      def.onEnter(contact, address, contact.New)
    }
    
    // 'def' attribute on InputSetRef at ContactPanelSet.pcf: line 56, column 96
    function def_onEnter_29 (def :  pcf.OfficialIDInputSet_company) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactPanelSet.pcf: line 56, column 96
    function def_onEnter_31 (def :  pcf.OfficialIDInputSet_person) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at ContactPanelSet.pcf: line 64, column 62
    function def_onEnter_34 (def :  pcf.AddressesPanelSet) : void {
      def.onEnter(contact,false, null, null)
    }
    
    // 'def' attribute on InputSetRef at ContactPanelSet.pcf: line 26, column 42
    function def_onEnter_4 (def :  pcf.ContactNameInputSet_person) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactPanelSet.pcf: line 29, column 102
    function def_onEnter_7 (def :  pcf.LinkedAddressInputSet) : void {
      def.onEnter(address, contact, null, null, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on InputSetRef at ContactPanelSet.pcf: line 33, column 42
    function def_refreshVariables_12 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressInputSetAddressOwner(address, false, true))
    }
    
    // 'def' attribute on InputSetRef (id=ContactCurrency) at ContactPanelSet.pcf: line 49, column 37
    function def_refreshVariables_26 (def :  pcf.ContactCurrencyInputSet) : void {
      def.refreshVariables(contact, address, contact.New)
    }
    
    // 'def' attribute on InputSetRef at ContactPanelSet.pcf: line 26, column 42
    function def_refreshVariables_3 (def :  pcf.ContactNameInputSet_company) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactPanelSet.pcf: line 56, column 96
    function def_refreshVariables_30 (def :  pcf.OfficialIDInputSet_company) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactPanelSet.pcf: line 56, column 96
    function def_refreshVariables_32 (def :  pcf.OfficialIDInputSet_person) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on PanelRef at ContactPanelSet.pcf: line 64, column 62
    function def_refreshVariables_35 (def :  pcf.AddressesPanelSet) : void {
      def.refreshVariables(contact,false, null, null)
    }
    
    // 'def' attribute on InputSetRef at ContactPanelSet.pcf: line 26, column 42
    function def_refreshVariables_5 (def :  pcf.ContactNameInputSet_person) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at ContactPanelSet.pcf: line 29, column 102
    function def_refreshVariables_8 (def :  pcf.LinkedAddressInputSet) : void {
      def.refreshVariables(address, contact, null, null, CurrentLocation.InEditMode)
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at ContactPanelSet.pcf: line 40, column 48
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      address.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at ContactPanelSet.pcf: line 45, column 44
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      address.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on InputSetRef at ContactPanelSet.pcf: line 33, column 42
    function editable_9 () : java.lang.Boolean {
      return address.LinkedAddress == null
    }
    
    // 'initialValue' attribute on Variable at ContactPanelSet.pcf: line 14, column 30
    function initialValue_0 () : entity.Address {
      return contact.PrimaryAddress
    }
    
    // 'mode' attribute on InputSetRef at ContactPanelSet.pcf: line 56, column 96
    function mode_33 () : java.lang.Object {
      return contact.Subtype
    }
    
    // 'mode' attribute on InputSetRef at ContactPanelSet.pcf: line 26, column 42
    function mode_6 () : java.lang.Object {
      return contact.Subtype.Code
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at ContactPanelSet.pcf: line 40, column 48
    function valueRoot_16 () : java.lang.Object {
      return address
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at ContactPanelSet.pcf: line 40, column 48
    function value_14 () : typekey.AddressType {
      return address.AddressType
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at ContactPanelSet.pcf: line 45, column 44
    function value_20 () : java.lang.String {
      return address.Description
    }
    
    // 'visible' attribute on InputSetRef at ContactPanelSet.pcf: line 26, column 42
    function visible_1 () : java.lang.Boolean {
      return contact != null
    }
    
    // 'visible' attribute on Label at ContactPanelSet.pcf: line 52, column 96
    function visible_27 () : java.lang.Boolean {
      return contact != null and contact.Subtype != typekey.Contact.TC_USERCONTACT
    }
    
    property get address () : entity.Address {
      return getVariableValue("address", 0) as entity.Address
    }
    
    property set address ($arg :  entity.Address) {
      setVariableValue("address", 0, $arg)
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}