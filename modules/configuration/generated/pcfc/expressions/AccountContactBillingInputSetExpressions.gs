package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/billing/AccountContactBillingInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountContactBillingInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/billing/AccountContactBillingInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountContactBillingInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextInput (id=ChangeBillingContactButton_Input) at AccountContactBillingInputSet.pcf: line 80, column 78
    function actionAvailable_53 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.HasAccountContactForBilling
    }
    
    // 'action' attribute on MenuItem (id=Remove) at AccountContactBillingInputSet.pcf: line 68, column 107
    function action_16 () : void {
      policyPeriodBillingInstructionsManager.AltBillingAccountNumber = null
    }
    
    // 'action' attribute on PickerMenuItem (id=Search) at AccountContactBillingInputSet.pcf: line 41, column 100
    function action_3 () : void {
      AccountSearchPopup.push()
    }
    
    // 'action' attribute on PickerMenuItem (id=BillingABContactAdder) at AccountContactBillingInputSet.pcf: line 100, column 32
    function action_34 () : void {
      ContactSearchPopup.push(TC_BILLINGCONTACT)
    }
    
    // 'action' attribute on MenuItem (id=Remove) at AccountContactBillingInputSet.pcf: line 143, column 103
    function action_48 () : void {
      policyPeriodBillingInstructionsManager.AccountContactForBilling = null
    }
    
    // 'action' attribute on TextInput (id=ChangeBillingContactButton_Input) at AccountContactBillingInputSet.pcf: line 80, column 78
    function action_51 () : void {
      EditAccountContactPopup.push(policyPeriodBillingInstructionsManager.getAccountContactForBilling(account))
    }
    
    // 'action' attribute on PickerMenuItem (id=SearchBillingAccount) at AccountContactBillingInputSet.pcf: line 47, column 107
    function action_7 () : void {
      BillingAccountSearchPopup.push(preferredSettlementCurrency)
    }
    
    // 'action' attribute on PickerMenuItem (id=BillingABContactAdder) at AccountContactBillingInputSet.pcf: line 100, column 32
    function action_dest_35 () : pcf.api.Destination {
      return pcf.ContactSearchPopup.createDestination(TC_BILLINGCONTACT)
    }
    
    // 'action' attribute on PickerMenuItem (id=Search) at AccountContactBillingInputSet.pcf: line 41, column 100
    function action_dest_4 () : pcf.api.Destination {
      return pcf.AccountSearchPopup.createDestination()
    }
    
    // 'action' attribute on TextInput (id=ChangeBillingContactButton_Input) at AccountContactBillingInputSet.pcf: line 80, column 78
    function action_dest_52 () : pcf.api.Destination {
      return pcf.EditAccountContactPopup.createDestination(policyPeriodBillingInstructionsManager.getAccountContactForBilling(account))
    }
    
    // 'action' attribute on PickerMenuItem (id=SearchBillingAccount) at AccountContactBillingInputSet.pcf: line 47, column 107
    function action_dest_8 () : pcf.api.Destination {
      return pcf.BillingAccountSearchPopup.createDestination(preferredSettlementCurrency)
    }
    
    // 'available' attribute on TextInput (id=AltBillingAccount_Input) at AccountContactBillingInputSet.pcf: line 35, column 79
    function available_17 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'initialValue' attribute on Variable at AccountContactBillingInputSet.pcf: line 22, column 54
    function initialValue_0 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'initialValue' attribute on Variable at AccountContactBillingInputSet.pcf: line 26, column 54
    function initialValue_1 () : gw.plugin.billing.IBillingSystemPlugin {
      return gw.plugin.Plugins.get(gw.plugin.billing.IBillingSystemPlugin)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=BillingABContactAdder) at AccountContactBillingInputSet.pcf: line 100, column 32
    function onPick_36 (PickedValue :  Contact) : void {
      policyPeriodBillingInstructionsManager.getOrCreateAccountContact(PickedValue, account)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=Search) at AccountContactBillingInputSet.pcf: line 41, column 100
    function onPick_5 (PickedValue :  Account) : void {
      policyPeriodBillingInstructionsManager.AltBillingAccountNumber = PickedValue.AccountNumber
    }
    
    // 'onPick' attribute on PickerMenuItem (id=SearchBillingAccount) at AccountContactBillingInputSet.pcf: line 47, column 107
    function onPick_9 (PickedValue :  String) : void {
      policyPeriodBillingInstructionsManager.AltBillingAccountNumber = PickedValue
    }
    
    // 'outputConversion' attribute on TextInput (id=AltBillingAccount_Input) at AccountContactBillingInputSet.pcf: line 35, column 79
    function outputConversion_19 (VALUE :  java.lang.String) : java.lang.String {
      return gw.billing.PolicyPeriodBillingInstructionsManager.formatAccount(VALUE)
    }
    
    // 'required' attribute on TextInput (id=AltBillingAccount_Input) at AccountContactBillingInputSet.pcf: line 35, column 79
    function required_20 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.AlternateBillerRequired
    }
    
    // 'sortBy' attribute on IteratorSort at AccountContactBillingInputSet.pcf: line 87, column 26
    function sortBy_26 (typeOfContact :  typekey.ContactType) : java.lang.Object {
      return typeOfContact.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at AccountContactBillingInputSet.pcf: line 113, column 28
    function sortBy_37 (billingContactExistingCandidate :  entity.AccountContact) : java.lang.Object {
      return billingContactExistingCandidate.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at AccountContactBillingInputSet.pcf: line 132, column 28
    function sortBy_42 (billingContactOtherCandidate :  entity.AccountContact) : java.lang.Object {
      return billingContactOtherCandidate.DisplayName
    }
    
    // 'value' attribute on TextInput (id=AltBillingAccount_Input) at AccountContactBillingInputSet.pcf: line 35, column 79
    function valueRoot_22 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager
    }
    
    // 'value' attribute on MenuItemIterator at AccountContactBillingInputSet.pcf: line 56, column 70
    function value_13 () : gw.plugin.billing.BillingAccountSearchResult[] {
      return policyPeriodBillingInstructionsManager?.SubAccounts
    }
    
    // 'value' attribute on TextInput (id=AltBillingAccount_Input) at AccountContactBillingInputSet.pcf: line 35, column 79
    function value_21 () : java.lang.String {
      return policyPeriodBillingInstructionsManager.AltBillingAccountNumber
    }
    
    // 'value' attribute on MenuItemIterator at AccountContactBillingInputSet.pcf: line 84, column 43
    function value_32 () : typekey.ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForPolicyContactRoleType(TC_POLICYBILLINGCONTACT)
    }
    
    // 'value' attribute on MenuItemIterator (id=UnassignedAccountContactIterator) at AccountContactBillingInputSet.pcf: line 110, column 47
    function value_40 () : entity.AccountContact[] {
      return policyPeriodBillingInstructionsManager.getBillingContacts(account)
    }
    
    // 'value' attribute on MenuItemIterator (id=UnassignedContactIterator) at AccountContactBillingInputSet.pcf: line 129, column 47
    function value_45 () : entity.AccountContact[] {
      return policyPeriodBillingInstructionsManager.getNonBillingContacts(account)
    }
    
    // 'value' attribute on TextInput (id=ChangeBillingContactButton_Input) at AccountContactBillingInputSet.pcf: line 80, column 78
    function value_54 () : entity.AccountContact {
      return policyPeriodBillingInstructionsManager.getAccountContactForBilling(account)
    }
    
    // 'visible' attribute on MenuItem (id=SubAccounts) at AccountContactBillingInputSet.pcf: line 52, column 93
    function visible_14 () : java.lang.Boolean {
      return openForEdit and policyPeriodBillingInstructionsManager.SubAccountsVisible
    }
    
    // 'visible' attribute on MenuItem (id=Remove) at AccountContactBillingInputSet.pcf: line 68, column 107
    function visible_15 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.AltBillingAccountNumber != null and openForEdit
    }
    
    // 'visible' attribute on TextInput (id=AltBillingAccount_Input) at AccountContactBillingInputSet.pcf: line 35, column 79
    function visible_18 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.AlternateBillerVisible
    }
    
    // 'visible' attribute on PickerMenuItem (id=Search) at AccountContactBillingInputSet.pcf: line 41, column 100
    function visible_2 () : java.lang.Boolean {
      return openForEdit and policyPeriodBillingInstructionsManager.EnableAccountSearchPopup
    }
    
    // 'visible' attribute on MenuItem (id=Remove) at AccountContactBillingInputSet.pcf: line 143, column 103
    function visible_47 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.HasAccountContactForBilling and openForEdit
    }
    
    // 'visible' attribute on TextInput (id=ChangeBillingContactButton_Input) at AccountContactBillingInputSet.pcf: line 80, column 78
    function visible_50 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.BillingContactVisible
    }
    
    // 'visible' attribute on PickerMenuItem (id=SearchBillingAccount) at AccountContactBillingInputSet.pcf: line 47, column 107
    function visible_6 () : java.lang.Boolean {
      return openForEdit and policyPeriodBillingInstructionsManager.EnableBillingAccountSearchPopup
    }
    
    property get account () : entity.Account {
      return getRequireValue("account", 0) as entity.Account
    }
    
    property set account ($arg :  entity.Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get billingSystemPlugin () : gw.plugin.billing.IBillingSystemPlugin {
      return getVariableValue("billingSystemPlugin", 0) as gw.plugin.billing.IBillingSystemPlugin
    }
    
    property set billingSystemPlugin ($arg :  gw.plugin.billing.IBillingSystemPlugin) {
      setVariableValue("billingSystemPlugin", 0, $arg)
    }
    
    property get contactConfigPlugin () : gw.plugin.contact.IContactConfigPlugin {
      return getVariableValue("contactConfigPlugin", 0) as gw.plugin.contact.IContactConfigPlugin
    }
    
    property set contactConfigPlugin ($arg :  gw.plugin.contact.IContactConfigPlugin) {
      setVariableValue("contactConfigPlugin", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getRequireValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setRequireValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    property get preferredSettlementCurrency () : typekey.Currency {
      return getRequireValue("preferredSettlementCurrency", 0) as typekey.Currency
    }
    
    property set preferredSettlementCurrency ($arg :  typekey.Currency) {
      setRequireValue("preferredSettlementCurrency", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/billing/AccountContactBillingInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends AccountContactBillingInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=contactType) at AccountContactBillingInputSet.pcf: line 93, column 34
    function action_28 () : void {
      NewAccountContactPopup.push(account, typekey.AccountContactRole.TC_BILLINGCONTACT, typeOfContact)
    }
    
    // 'action' attribute on PickerMenuItem (id=contactType) at AccountContactBillingInputSet.pcf: line 93, column 34
    function action_dest_29 () : pcf.api.Destination {
      return pcf.NewAccountContactPopup.createDestination(account, typekey.AccountContactRole.TC_BILLINGCONTACT, typeOfContact)
    }
    
    // 'label' attribute on PickerMenuItem (id=contactType) at AccountContactBillingInputSet.pcf: line 93, column 34
    function label_30 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", typeOfContact)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=contactType) at AccountContactBillingInputSet.pcf: line 93, column 34
    function onPick_31 (PickedValue :  AccountContact) : void {
      policyPeriodBillingInstructionsManager.AccountContactForBilling = PickedValue 
    }
    
    // 'visible' attribute on PickerMenuItem (id=contactType) at AccountContactBillingInputSet.pcf: line 93, column 34
    function visible_27 () : java.lang.Boolean {
      return openForEdit
    }
    
    property get typeOfContact () : typekey.ContactType {
      return getIteratedValue(1) as typekey.ContactType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/billing/AccountContactBillingInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends AccountContactBillingInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedAccountContact) at AccountContactBillingInputSet.pcf: line 117, column 54
    function action_38 () : void {
      policyPeriodBillingInstructionsManager.AccountContactForBilling = billingContactExistingCandidate
    }
    
    // 'label' attribute on MenuItem (id=UnassignedAccountContact) at AccountContactBillingInputSet.pcf: line 117, column 54
    function label_39 () : java.lang.Object {
      return billingContactExistingCandidate
    }
    
    property get billingContactExistingCandidate () : entity.AccountContact {
      return getIteratedValue(1) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/billing/AccountContactBillingInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends AccountContactBillingInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedContact) at AccountContactBillingInputSet.pcf: line 136, column 51
    function action_43 () : void {
      policyPeriodBillingInstructionsManager.AccountContactForBilling = billingContactOtherCandidate
    }
    
    // 'label' attribute on MenuItem (id=UnassignedContact) at AccountContactBillingInputSet.pcf: line 136, column 51
    function label_44 () : java.lang.Object {
      return billingContactOtherCandidate
    }
    
    property get billingContactOtherCandidate () : entity.AccountContact {
      return getIteratedValue(1) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/billing/AccountContactBillingInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountContactBillingInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=SubAccount) at AccountContactBillingInputSet.pcf: line 61, column 45
    function action_11 () : void {
      if (subAccount.AccountNumber.HasContent) {policyPeriodBillingInstructionsManager.AltBillingAccountNumber = subAccount.AccountNumber}
    }
    
    // 'available' attribute on MenuItem (id=SubAccount) at AccountContactBillingInputSet.pcf: line 61, column 45
    function available_10 () : java.lang.Boolean {
      return subAccount.AccountNumber.HasContent
    }
    
    // 'label' attribute on MenuItem (id=SubAccount) at AccountContactBillingInputSet.pcf: line 61, column 45
    function label_12 () : java.lang.Object {
      return subAccount.DisplayName
    }
    
    property get subAccount () : gw.plugin.billing.BillingAccountSearchResult {
      return getIteratedValue(1) as gw.plugin.billing.BillingAccountSearchResult
    }
    
    
  }
  
  
}