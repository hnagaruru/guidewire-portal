package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/LinkedAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LinkedAddressInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/LinkedAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Address) at LinkedAddressInputSet.pcf: line 73, column 32
    function action_8 () : void {
      currentAddress.linkAddress(address, currentContact)
    }
    
    // 'label' attribute on MenuItem (id=Address) at LinkedAddressInputSet.pcf: line 73, column 32
    function label_9 () : java.lang.Object {
      return address
    }
    
    property get address () : entity.Address {
      return getIteratedValue(2) as entity.Address
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/contacts/LinkedAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LinkedAddressInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PrimaryAddress) at LinkedAddressInputSet.pcf: line 65, column 124
    function action_6 () : void {
      currentAddress.linkAddress(contact.Contact.PrimaryAddress, currentContact)
    }
    
    // 'label' attribute on MenuItem (id=contactDetail) at LinkedAddressInputSet.pcf: line 61, column 130
    function label_11 () : java.lang.Object {
      return DisplayKey.get("Web.ContactDetail.LinkedAddress.DisplayLabel", contact.Contact, contact.ContactType)
    }
    
    // 'label' attribute on MenuItem (id=PrimaryAddress) at LinkedAddressInputSet.pcf: line 65, column 124
    function label_7 () : java.lang.Object {
      return DisplayKey.get("Web.Addresses.Linked.MarkAsPrimaryAddress", contact.Contact.PrimaryAddress)
    }
    
    // 'value' attribute on MenuItemIterator at LinkedAddressInputSet.pcf: line 69, column 42
    function value_10 () : entity.Address[] {
      return contact.Contact.SecondaryAddresses
    }
    
    property get contact () : gw.address.LinkedAddressUIHelper.ContactTypePair {
      return getIteratedValue(1) as gw.address.LinkedAddressUIHelper.ContactTypePair
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/contacts/LinkedAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LinkedAddressInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditAddress) at LinkedAddressInputSet.pcf: line 81, column 73
    function action_14 () : void {
      LinkedAddressEditPopup.push(currentAddress)
    }
    
    // 'action' attribute on MenuItem (id=EditAddress) at LinkedAddressInputSet.pcf: line 81, column 73
    function action_dest_15 () : pcf.api.Destination {
      return pcf.LinkedAddressEditPopup.createDestination(currentAddress)
    }
    
    // 'initialValue' attribute on Variable at LinkedAddressInputSet.pcf: line 25, column 30
    function initialValue_0 () : entity.Contact {
      return aPeriod == null ? null : aPeriod.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact
    }
    
    // 'initialValue' attribute on Variable at LinkedAddressInputSet.pcf: line 30, column 86
    function initialValue_1 () : java.util.List<gw.address.LinkedAddressUIHelper.ContactTypePair> {
      return gw.address.LinkedAddressUIHelper.getContactsAvailableAsLinks(currentContact, anAccount, aPeriod)
    }
    
    // 'initialValue' attribute on Variable at LinkedAddressInputSet.pcf: line 35, column 23
    function initialValue_2 () : boolean {
      return openForEdit and not contactsAvailableAsLinks.Empty
    }
    
    // 'initialValue' attribute on Variable at LinkedAddressInputSet.pcf: line 40, column 32
    function initialValue_3 () : java.lang.Object {
      return getLinkAddressLabel()
    }
    
    // 'value' attribute on TextInput (id=LinkAddressMenu_Input) at LinkedAddressInputSet.pcf: line 52, column 40
    function value_17 () : java.lang.Object {
      return linkAddressLabel
    }
    
    // 'visible' attribute on MenuItem (id=EditAddress) at LinkedAddressInputSet.pcf: line 81, column 73
    function visible_13 () : java.lang.Boolean {
      return openForEdit and currentAddress.LinkedAddress != null
    }
    
    // 'visible' attribute on TextInput (id=LinkAddressMenu_Input) at LinkedAddressInputSet.pcf: line 52, column 40
    function visible_16 () : java.lang.Boolean {
      return currentContact != null
    }
    
    // 'visible' attribute on Label (id=LinkedAddressWarningMessage) at LinkedAddressInputSet.pcf: line 44, column 55
    function visible_4 () : java.lang.Boolean {
      return currentAddress.LinkedAddress != null
    }
    
    // 'visible' attribute on MenuItemIterator (id=ContactIterator) at LinkedAddressInputSet.pcf: line 58, column 74
    function visible_5 () : java.lang.Boolean {
      return openForEdit and (currentAddress.LinkedAddress == null)
    }
    
    property get aPeriod () : PolicyPeriod {
      return getRequireValue("aPeriod", 0) as PolicyPeriod
    }
    
    property set aPeriod ($arg :  PolicyPeriod) {
      setRequireValue("aPeriod", 0, $arg)
    }
    
    property get anAccount () : entity.Account {
      return getRequireValue("anAccount", 0) as entity.Account
    }
    
    property set anAccount ($arg :  entity.Account) {
      setRequireValue("anAccount", 0, $arg)
    }
    
    property get contactsAvailableAsLinks () : java.util.List<gw.address.LinkedAddressUIHelper.ContactTypePair> {
      return getVariableValue("contactsAvailableAsLinks", 0) as java.util.List<gw.address.LinkedAddressUIHelper.ContactTypePair>
    }
    
    property set contactsAvailableAsLinks ($arg :  java.util.List<gw.address.LinkedAddressUIHelper.ContactTypePair>) {
      setVariableValue("contactsAvailableAsLinks", 0, $arg)
    }
    
    property get currentAddress () : entity.Address {
      return getRequireValue("currentAddress", 0) as entity.Address
    }
    
    property set currentAddress ($arg :  entity.Address) {
      setRequireValue("currentAddress", 0, $arg)
    }
    
    property get currentContact () : entity.Contact {
      return getRequireValue("currentContact", 0) as entity.Contact
    }
    
    property set currentContact ($arg :  entity.Contact) {
      setRequireValue("currentContact", 0, $arg)
    }
    
    property get linkAddressLabel () : java.lang.Object {
      return getVariableValue("linkAddressLabel", 0) as java.lang.Object
    }
    
    property set linkAddressLabel ($arg :  java.lang.Object) {
      setVariableValue("linkAddressLabel", 0, $arg)
    }
    
    property get linkable () : boolean {
      return getVariableValue("linkable", 0) as java.lang.Boolean
    }
    
    property set linkable ($arg :  boolean) {
      setVariableValue("linkable", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get primaryNamedInsuredContact () : entity.Contact {
      return getVariableValue("primaryNamedInsuredContact", 0) as entity.Contact
    }
    
    property set primaryNamedInsuredContact ($arg :  entity.Contact) {
      setVariableValue("primaryNamedInsuredContact", 0, $arg)
    }
    
    function getLinkAddressLabel() : String {
      if (linkable and currentAddress.LinkedAddress == null) {
        return DisplayKey.get("Web.ContactDetail.LinkedAddress.Label.Unlinked")
      }
      if (openForEdit and currentAddress.LinkedAddress != null) {
        return DisplayKey.get("Web.ContactDetail.LinkedAddress.Label.Linked")
      }
      return ""
    }
    
    
  }
  
  
}