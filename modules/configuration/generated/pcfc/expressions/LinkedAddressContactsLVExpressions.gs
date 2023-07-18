package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/LinkedAddressContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LinkedAddressContactsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/LinkedAddressContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LinkedAddressContactsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at LinkedAddressContactsLV.pcf: line 38, column 46
    function valueRoot_11 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at LinkedAddressContactsLV.pcf: line 38, column 46
    function value_10 () : java.lang.String {
      return contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=Email_Cell) at LinkedAddressContactsLV.pcf: line 42, column 42
    function value_13 () : java.lang.String {
      return contact.EmailAddress1
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at LinkedAddressContactsLV.pcf: line 30, column 39
    function value_6 () : entity.Contact {
      return contact
    }
    
    // 'value' attribute on BooleanRadioCell (id=PrimaryAddress_Cell) at LinkedAddressContactsLV.pcf: line 34, column 70
    function value_8 () : java.lang.Boolean {
      return contact.PrimaryAddress.isLinkedToAddress(address)
    }
    
    property get contact () : entity.Contact {
      return getIteratedValue(1) as entity.Contact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/contacts/LinkedAddressContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LinkedAddressContactsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at LinkedAddressContactsLV.pcf: line 13, column 52
    function initialValue_0 () : java.util.List<entity.Contact> {
      return address.findLinkedContacts()
    }
    
    // 'sortBy' attribute on IteratorSort at LinkedAddressContactsLV.pcf: line 23, column 24
    function sortBy_1 (contact :  entity.Contact) : java.lang.Object {
      return contact
    }
    
    // 'sortBy' attribute on TextCell (id=Name_Cell) at LinkedAddressContactsLV.pcf: line 30, column 39
    function sortValue_2 (contact :  entity.Contact) : java.lang.Object {
      return contact.DisplayName
    }
    
    // 'value' attribute on BooleanRadioCell (id=PrimaryAddress_Cell) at LinkedAddressContactsLV.pcf: line 34, column 70
    function sortValue_3 (contact :  entity.Contact) : java.lang.Object {
      return contact.PrimaryAddress.isLinkedToAddress(address)
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at LinkedAddressContactsLV.pcf: line 38, column 46
    function sortValue_4 (contact :  entity.Contact) : java.lang.Object {
      return contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=Email_Cell) at LinkedAddressContactsLV.pcf: line 42, column 42
    function sortValue_5 (contact :  entity.Contact) : java.lang.Object {
      return contact.EmailAddress1
    }
    
    // 'value' attribute on RowIterator (id=ContactIterator) at LinkedAddressContactsLV.pcf: line 20, column 56
    function value_16 () : java.util.List<entity.Contact> {
      return contacts
    }
    
    property get address () : Address {
      return getRequireValue("address", 0) as Address
    }
    
    property set address ($arg :  Address) {
      setRequireValue("address", 0, $arg)
    }
    
    property get contacts () : java.util.List<entity.Contact> {
      return getVariableValue("contacts", 0) as java.util.List<entity.Contact>
    }
    
    property set contacts ($arg :  java.util.List<entity.Contact>) {
      setVariableValue("contacts", 0, $arg)
    }
    
    
  }
  
  
}