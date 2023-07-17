package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyContactDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyContactDetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyContactDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 44, column 159
    function def_onEnter_10 (def :  pcf.LinkedAddressInputSet) : void {
      def.onEnter(primaryAddress, policyContactRole.AccountContactRole.AccountContact.Contact, period, period.Policy.Account, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 47, column 58
    function def_onEnter_13 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressInputSetAddressOwner(primaryAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef (id=ContactCurrency) at PolicyContactDetailsDV.pcf: line 63, column 31
    function def_onEnter_28 (def :  pcf.ContactCurrencyInputSet) : void {
      def.onEnter(contact, primaryAddress, contact.New)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 69, column 42
    function def_onEnter_32 (def :  pcf.LicenseInputSet_PolicyDriver) : void {
      def.onEnter(policyContactRole, primaryAddress)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 69, column 42
    function def_onEnter_34 (def :  pcf.LicenseInputSet_default) : void {
      def.onEnter(policyContactRole, primaryAddress)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 75, column 33
    function def_onEnter_37 (def :  pcf.OfficialIDInputSet_company) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 75, column 33
    function def_onEnter_39 (def :  pcf.OfficialIDInputSet_person) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 41, column 90
    function def_onEnter_5 (def :  pcf.PolicyContactRoleNameInputSet_company) : void {
      def.onEnter(policyContactRole)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 41, column 90
    function def_onEnter_7 (def :  pcf.PolicyContactRoleNameInputSet_person) : void {
      def.onEnter(policyContactRole)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 44, column 159
    function def_refreshVariables_11 (def :  pcf.LinkedAddressInputSet) : void {
      def.refreshVariables(primaryAddress, policyContactRole.AccountContactRole.AccountContact.Contact, period, period.Policy.Account, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 47, column 58
    function def_refreshVariables_14 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressInputSetAddressOwner(primaryAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef (id=ContactCurrency) at PolicyContactDetailsDV.pcf: line 63, column 31
    function def_refreshVariables_29 (def :  pcf.ContactCurrencyInputSet) : void {
      def.refreshVariables(contact, primaryAddress, contact.New)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 69, column 42
    function def_refreshVariables_33 (def :  pcf.LicenseInputSet_PolicyDriver) : void {
      def.refreshVariables(policyContactRole, primaryAddress)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 69, column 42
    function def_refreshVariables_35 (def :  pcf.LicenseInputSet_default) : void {
      def.refreshVariables(policyContactRole, primaryAddress)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 75, column 33
    function def_refreshVariables_38 (def :  pcf.OfficialIDInputSet_company) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 75, column 33
    function def_refreshVariables_40 (def :  pcf.OfficialIDInputSet_person) : void {
      def.refreshVariables(contact)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 41, column 90
    function def_refreshVariables_6 (def :  pcf.PolicyContactRoleNameInputSet_company) : void {
      def.refreshVariables(policyContactRole)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 41, column 90
    function def_refreshVariables_8 (def :  pcf.PolicyContactRoleNameInputSet_person) : void {
      def.refreshVariables(policyContactRole)
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at PolicyContactDetailsDV.pcf: line 54, column 42
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      primaryAddress.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at PolicyContactDetailsDV.pcf: line 59, column 45
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      primaryAddress.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 47, column 58
    function editable_12 () : java.lang.Boolean {
      return primaryAddress.LinkedAddress == null
    }
    
    // 'editable' attribute on InputSetRef (id=ContactCurrency) at PolicyContactDetailsDV.pcf: line 63, column 31
    function editable_27 () : java.lang.Boolean {
      return contact.New
    }
    
    // 'initialValue' attribute on Variable at PolicyContactDetailsDV.pcf: line 17, column 30
    function initialValue_0 () : entity.Contact {
      return policyContactRole.AccountContactRole.AccountContact.Contact
    }
    
    // 'initialValue' attribute on Variable at PolicyContactDetailsDV.pcf: line 22, column 35
    function initialValue_1 () : entity.PolicyPeriod {
      return policyContactRole.Branch
    }
    
    // 'initialValue' attribute on Variable at PolicyContactDetailsDV.pcf: line 27, column 30
    function initialValue_2 () : entity.Address {
      return contact.PrimaryAddress
    }
    
    // 'initialValue' attribute on Variable at PolicyContactDetailsDV.pcf: line 32, column 75
    function initialValue_3 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> period.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at PolicyContactDetailsDV.pcf: line 37, column 23
    function initialValue_4 () : boolean {
      return openForEditOverride or openForEditInit.get()
    }
    
    // 'mode' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 69, column 42
    function mode_36 () : java.lang.Object {
      return policyContactRole.Subtype.Code
    }
    
    // 'mode' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 75, column 33
    function mode_41 () : java.lang.Object {
      return contact.Subtype
    }
    
    // 'mode' attribute on InputSetRef at PolicyContactDetailsDV.pcf: line 41, column 90
    function mode_9 () : java.lang.Object {
      return policyContactRole.AccountContactRole.AccountContact.Contact.Subtype.Code
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at PolicyContactDetailsDV.pcf: line 54, column 42
    function valueRoot_18 () : java.lang.Object {
      return primaryAddress
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at PolicyContactDetailsDV.pcf: line 54, column 42
    function value_16 () : typekey.AddressType {
      return primaryAddress.AddressType
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at PolicyContactDetailsDV.pcf: line 59, column 45
    function value_22 () : java.lang.String {
      return primaryAddress.Description
    }
    
    // 'visible' attribute on InputDivider at PolicyContactDetailsDV.pcf: line 65, column 42
    function visible_30 () : java.lang.Boolean {
      return contact typeis Person
    }
    
    property get contact () : entity.Contact {
      return getVariableValue("contact", 0) as entity.Contact
    }
    
    property set contact ($arg :  entity.Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get openForEditInit () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return getVariableValue("openForEditInit", 0) as gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>
    }
    
    property set openForEditInit ($arg :  gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>) {
      setVariableValue("openForEditInit", 0, $arg)
    }
    
    property get openForEditOverride () : boolean {
      return getRequireValue("openForEditOverride", 0) as java.lang.Boolean
    }
    
    property set openForEditOverride ($arg :  boolean) {
      setRequireValue("openForEditOverride", 0, $arg)
    }
    
    property get period () : entity.PolicyPeriod {
      return getVariableValue("period", 0) as entity.PolicyPeriod
    }
    
    property set period ($arg :  entity.PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getRequireValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setRequireValue("policyContactRole", 0, $arg)
    }
    
    property get primaryAddress () : entity.Address {
      return getVariableValue("primaryAddress", 0) as entity.Address
    }
    
    property set primaryAddress ($arg :  entity.Address) {
      setVariableValue("primaryAddress", 0, $arg)
    }
    
    
  }
  
  
}