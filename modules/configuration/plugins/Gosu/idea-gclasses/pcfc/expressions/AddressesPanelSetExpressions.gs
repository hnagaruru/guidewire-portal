package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/AddressesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/AddressesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AddressesPanelSet.pcf: line 24, column 75
    function initialValue_0 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> period.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at AddressesPanelSet.pcf: line 29, column 33
    function initialValue_1 () : java.lang.Boolean {
      return period != null ? openForEditInit.get() : CurrentLocation.InEditMode
    }
    
    property get account () : entity.Account {
      return getRequireValue("account", 0) as entity.Account
    }
    
    property set account ($arg :  entity.Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get openForEdit () : java.lang.Boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  java.lang.Boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get openForEditInit () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return getVariableValue("openForEditInit", 0) as gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>
    }
    
    property set openForEditInit ($arg :  gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>) {
      setVariableValue("openForEditInit", 0, $arg)
    }
    
    property get period () : entity.PolicyPeriod {
      return getRequireValue("period", 0) as entity.PolicyPeriod
    }
    
    property set period ($arg :  entity.PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get showAddressTools () : boolean {
      return getRequireValue("showAddressTools", 0) as java.lang.Boolean
    }
    
    property set showAddressTools ($arg :  boolean) {
      setRequireValue("showAddressTools", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/contacts/AddressesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=survivorAddress) at AddressesPanelSet.pcf: line 135, column 58
    function action_41 () : void {
      contact.mergeAddresses(survivorAddress, selectedAddress);gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, entity.Address)
    }
    
    // 'confirmMessage' attribute on MenuItem (id=survivorAddress) at AddressesPanelSet.pcf: line 135, column 58
    function confirmMessage_42 () : java.lang.String {
      return DisplayKey.get("Web.ContactDetail.AddressTools.MergeAddress.Confirm", survivorAddress, selectedAddress)
    }
    
    // 'label' attribute on MenuItem (id=survivorAddress) at AddressesPanelSet.pcf: line 135, column 58
    function label_43 () : java.lang.Object {
      return survivorAddress.DisplayName
    }
    
    property get survivorAddress () : entity.Address {
      return getIteratedValue(2) as entity.Address
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/contacts/AddressesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RadioButtonCell (id=Primary_Cell) at AddressesPanelSet.pcf: line 62, column 59
    function action_5 () : void {
      contact.makePrimaryAddress(address)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at AddressesPanelSet.pcf: line 53, column 42
    function checkBoxVisible_13 () : java.lang.Boolean {
      return address != contact.PrimaryAddress && address != period?.PolicyAddress.Address
    }
    
    // 'value' attribute on TypeKeyCell (id=AddressType_Cell) at AddressesPanelSet.pcf: line 69, column 50
    function valueRoot_9 () : java.lang.Object {
      return address
    }
    
    // 'value' attribute on TextCell (id=DisplayedName_Cell) at AddressesPanelSet.pcf: line 74, column 30
    function value_11 () : java.lang.String {
      return address.addressString(",", false, false)
    }
    
    // 'value' attribute on RadioButtonCell (id=Primary_Cell) at AddressesPanelSet.pcf: line 62, column 59
    function value_6 () : java.lang.Boolean {
      return address == contact.PrimaryAddress
    }
    
    // 'value' attribute on TypeKeyCell (id=AddressType_Cell) at AddressesPanelSet.pcf: line 69, column 50
    function value_8 () : typekey.AddressType {
      return address.AddressType
    }
    
    property get address () : entity.Address {
      return getIteratedValue(2) as entity.Address
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/contacts/AddressesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends AddressesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on ToolbarButton (id=MergeAddresses) at AddressesPanelSet.pcf: line 126, column 101
    function available_45 () : java.lang.Boolean {
      return showAddressTools and contact.PrimaryAddress != selectedAddress and not selectedAddress.New
    }
    
    // 'def' attribute on InputSetRef at AddressesPanelSet.pcf: line 90, column 102
    function def_onEnter_18 (def :  pcf.LinkedAddressInputSet) : void {
      def.onEnter(selectedAddress, contact, period, account, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at AddressesPanelSet.pcf: line 93, column 67
    function def_onEnter_21 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressInputSetAddressOwner(selectedAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef at AddressesPanelSet.pcf: line 90, column 102
    function def_refreshVariables_19 (def :  pcf.LinkedAddressInputSet) : void {
      def.refreshVariables(selectedAddress, contact, period, account, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at AddressesPanelSet.pcf: line 93, column 67
    function def_refreshVariables_22 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressInputSetAddressOwner(selectedAddress, false, true))
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at AddressesPanelSet.pcf: line 100, column 50
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedAddress.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at AddressesPanelSet.pcf: line 105, column 54
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedAddress.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=ValidUntil_Input) at AddressesPanelSet.pcf: line 110, column 53
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedAddress.ValidUntil = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on InputSetRef at AddressesPanelSet.pcf: line 93, column 67
    function editable_20 () : java.lang.Boolean {
      return selectedAddress.LinkedAddress == null
    }
    
    // 'value' attribute on RadioButtonCell (id=Primary_Cell) at AddressesPanelSet.pcf: line 62, column 59
    function sortValue_2 (address :  entity.Address) : java.lang.Object {
      return address == contact.PrimaryAddress
    }
    
    // 'value' attribute on TypeKeyCell (id=AddressType_Cell) at AddressesPanelSet.pcf: line 69, column 50
    function sortValue_3 (address :  entity.Address) : java.lang.Object {
      return address.AddressType
    }
    
    // 'value' attribute on TextCell (id=DisplayedName_Cell) at AddressesPanelSet.pcf: line 74, column 30
    function sortValue_4 (address :  entity.Address) : java.lang.Object {
      return address.addressString(",", false, false)
    }
    
    // 'toAdd' attribute on RowIterator at AddressesPanelSet.pcf: line 53, column 42
    function toAdd_14 (address :  entity.Address) : void {
      contact.addAddress(address)
    }
    
    // 'toRemove' attribute on RowIterator at AddressesPanelSet.pcf: line 53, column 42
    function toRemove_15 (address :  entity.Address) : void {
      if (address != contact.PrimaryAddress && address != period?.PolicyAddress.Address) contact.safeRemoveAddress(address) 
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at AddressesPanelSet.pcf: line 100, column 50
    function valueRoot_26 () : java.lang.Object {
      return selectedAddress
    }
    
    // 'value' attribute on RowIterator at AddressesPanelSet.pcf: line 53, column 42
    function value_16 () : entity.Address[] {
      return contact.AllAddresses
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at AddressesPanelSet.pcf: line 100, column 50
    function value_24 () : typekey.AddressType {
      return selectedAddress.AddressType
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at AddressesPanelSet.pcf: line 105, column 54
    function value_30 () : java.lang.String {
      return selectedAddress.Description
    }
    
    // 'value' attribute on DateInput (id=ValidUntil_Input) at AddressesPanelSet.pcf: line 110, column 53
    function value_36 () : java.util.Date {
      return selectedAddress.ValidUntil
    }
    
    // 'value' attribute on MenuItemIterator at AddressesPanelSet.pcf: line 130, column 48
    function value_44 () : entity.Address[] {
      return contact.AllAddresses.subtract({selectedAddress}).where(\ a -> not a.New).toTypedArray()
    }
    
    // 'visible' attribute on Label at AddressesPanelSet.pcf: line 88, column 77
    function visible_17 () : java.lang.Boolean {
      return selectedAddress == period?.PolicyAddress.Address
    }
    
    property get selectedAddress () : Address {
      return getCurrentSelection(1) as Address
    }
    
    property set selectedAddress ($arg :  Address) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}