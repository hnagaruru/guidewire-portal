package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Contacts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_ContactsExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Contacts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_ContactsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=AccountFile_Contacts) at AccountFile_Contacts.pcf: line 12, column 35
    static function canVisit_56 (account :  Account) : java.lang.Boolean {
      return perm.Account.view(account) and perm.System.accountcontacts
    }
    
    // 'def' attribute on MenuItemSetRef at AccountFile_Contacts.pcf: line 38, column 60
    function def_onEnter_3 (def :  pcf.ChangeAccountHolderMenuItemSet) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on MenuItemSetRef at AccountFile_Contacts.pcf: line 38, column 60
    function def_refreshVariables_4 (def :  pcf.ChangeAccountHolderMenuItemSet) : void {
      def.refreshVariables(account)
    }
    
    // 'handlesValidationIssue' attribute on Page (id=AccountFile_Contacts) at AccountFile_Contacts.pcf: line 12, column 35
    static function handlesValidationIssue_57 (account :  Account, VALUE :  java.lang.Object) : java.lang.Boolean {
      return VALUE typeis entity.Contact
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Contacts) at AccountFile_Contacts.pcf: line 12, column 35
    function infoBar_onEnter_58 (def :  pcf.AccountFileInfoBar) : void {
      def.onEnter(account)
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Contacts) at AccountFile_Contacts.pcf: line 12, column 35
    function infoBar_refreshVariables_59 (def :  pcf.AccountFileInfoBar) : void {
      def.refreshVariables(account)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_Contacts.pcf: line 21, column 54
    function initialValue_0 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_Contacts.pcf: line 25, column 58
    function initialValue_1 () : java.util.Map<AccountContact, String> {
      return gw.web.account.AccountFileContactsUIHelper .loadAcctContactRolesDisplay(account)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_Contacts.pcf: line 29, column 51
    function initialValue_2 () : gw.api.ui.ChangeAccountHolderHelper {
      return new gw.api.ui.ChangeAccountHolderHelper(account)
    }
    
    // Page (id=AccountFile_Contacts) at AccountFile_Contacts.pcf: line 12, column 35
    static function parent_60 (account :  Account) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    // 'visible' attribute on ToolbarButton (id=ChangeAccountHolder) at AccountFile_Contacts.pcf: line 36, column 48
    function visible_5 () : java.lang.Boolean {
      return perm.Account.edit(account)
    }
    
    override property get CurrentLocation () : pcf.AccountFile_Contacts {
      return super.CurrentLocation as pcf.AccountFile_Contacts
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get acctContactRolesDisplayNames () : java.util.Map<AccountContact, String> {
      return getVariableValue("acctContactRolesDisplayNames", 0) as java.util.Map<AccountContact, String>
    }
    
    property set acctContactRolesDisplayNames ($arg :  java.util.Map<AccountContact, String>) {
      setVariableValue("acctContactRolesDisplayNames", 0, $arg)
    }
    
    property get changeAccountHolderHelper () : gw.api.ui.ChangeAccountHolderHelper {
      return getVariableValue("changeAccountHolderHelper", 0) as gw.api.ui.ChangeAccountHolderHelper
    }
    
    property set changeAccountHolderHelper ($arg :  gw.api.ui.ChangeAccountHolderHelper) {
      setVariableValue("changeAccountHolderHelper", 0, $arg)
    }
    
    property get contactConfigPlugin () : gw.plugin.contact.IContactConfigPlugin {
      return getVariableValue("contactConfigPlugin", 0) as gw.plugin.contact.IContactConfigPlugin
    }
    
    property set contactConfigPlugin ($arg :  gw.plugin.contact.IContactConfigPlugin) {
      setVariableValue("contactConfigPlugin", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Contacts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=contactType) at AccountFile_Contacts.pcf: line 79, column 98
    function action_9 () : void {
      NewAccountContactPopup.push(account, roleType, contactType)
    }
    
    // 'action' attribute on MenuItem (id=contactType) at AccountFile_Contacts.pcf: line 79, column 98
    function action_dest_10 () : pcf.api.Destination {
      return pcf.NewAccountContactPopup.createDestination(account, roleType, contactType)
    }
    
    // 'label' attribute on MenuItem (id=contactType) at AccountFile_Contacts.pcf: line 79, column 98
    function label_11 () : java.lang.Object {
      return DisplayKey.get("Web.Contact.AddNewOfType", contactType)
    }
    
    property get contactType () : typekey.ContactType {
      return getIteratedValue(3) as typekey.ContactType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Contacts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=EditButton) at AccountFile_Contacts.pcf: line 166, column 70
    function action_48 () : void {
      EditAccountContactPopup.push(acctContact)
    }
    
    // 'action' attribute on Link (id=GoToContactButton) at AccountFile_Contacts.pcf: line 177, column 92
    function action_50 () : void {
      ContactForward.go(acctContact.Contact)
    }
    
    // 'action' attribute on Link (id=EditButton) at AccountFile_Contacts.pcf: line 166, column 70
    function action_dest_49 () : pcf.api.Destination {
      return pcf.EditAccountContactPopup.createDestination(acctContact)
    }
    
    // 'action' attribute on Link (id=GoToContactButton) at AccountFile_Contacts.pcf: line 177, column 92
    function action_dest_51 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(acctContact.Contact)
    }
    
    // 'available' attribute on Link (id=EditButton) at AccountFile_Contacts.pcf: line 166, column 70
    function available_47 () : java.lang.Boolean {
      return perm.Account.edit(account)
    }
    
    // 'condition' attribute on ToolbarFlag at AccountFile_Contacts.pcf: line 126, column 42
    function condition_31 () : java.lang.Boolean {
      return account.AccountHolderContact != acctContact.Contact and acctContact.canRemove()
    }
    
    // 'condition' attribute on ToolbarFlag at AccountFile_Contacts.pcf: line 132, column 47
    function condition_32 () : java.lang.Boolean {
      return acctContact != acctContact.Account.AccountHolder.AccountContact
    }
    
    // 'value' attribute on BooleanRadioCell (id=Active_Cell) at AccountFile_Contacts.pcf: line 137, column 47
    function valueRoot_34 () : java.lang.Object {
      return acctContact
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at AccountFile_Contacts.pcf: line 151, column 66
    function valueRoot_42 () : java.lang.Object {
      return acctContact.Contact
    }
    
    // 'value' attribute on BooleanRadioCell (id=Active_Cell) at AccountFile_Contacts.pcf: line 137, column 47
    function value_33 () : java.lang.Boolean {
      return acctContact.Active
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AccountFile_Contacts.pcf: line 142, column 32
    function value_36 () : java.lang.String {
      return acctContact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at AccountFile_Contacts.pcf: line 147, column 32
    function value_39 () : java.lang.String {
      return gw.web.account.AccountFileContactsUIHelper .lookupAcctContactRolesDisplayName(acctContactRolesDisplayNames, acctContact)
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at AccountFile_Contacts.pcf: line 151, column 66
    function value_41 () : java.lang.String {
      return acctContact.Contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=Email_Cell) at AccountFile_Contacts.pcf: line 155, column 62
    function value_44 () : java.lang.String {
      return acctContact.Contact.EmailAddress1
    }
    
    property get acctContact () : entity.AccountContact {
      return getIteratedValue(2) as entity.AccountContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Contacts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=Search) at AccountFile_Contacts.pcf: line 85, column 162
    function action_13 () : void {
      ContactSearchPopup.push(roleType)
    }
    
    // 'action' attribute on PickerMenuItem (id=Search) at AccountFile_Contacts.pcf: line 85, column 162
    function action_dest_14 () : pcf.api.Destination {
      return pcf.ContactSearchPopup.createDestination(roleType)
    }
    
    // 'label' attribute on MenuItem (id=roleType) at AccountFile_Contacts.pcf: line 68, column 94
    function label_16 () : java.lang.Object {
      return contactConfigPlugin.getAccountContactRoleTypeDisplayName(roleType)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=Search) at AccountFile_Contacts.pcf: line 85, column 162
    function onPick_15 (PickedValue :  Contact) : void {
      gw.web.account.AccountFileContactsUIHelper.addContactFromAddressBook(acctContactRolesDisplayNames, account, PickedValue, roleType)
    }
    
    // 'sortBy' attribute on IteratorSort at AccountFile_Contacts.pcf: line 75, column 38
    function sortBy_8 (contactType :  typekey.ContactType) : java.lang.Object {
      return contactType.DisplayName
    }
    
    // 'value' attribute on MenuItemIterator at AccountFile_Contacts.pcf: line 72, column 55
    function value_12 () : typekey.ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForAccountContactRoleType(roleType)
    }
    
    property get roleType () : typekey.AccountContactRole {
      return getIteratedValue(2) as typekey.AccountContactRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Contacts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends AccountFile_ContactsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=removeContact) at AccountFile_Contacts.pcf: line 95, column 86
    function allCheckedRowsAction_18 (CheckedValues :  entity.AccountContact[], CheckedValuesErrors :  java.util.Map) : void {
      gw.web.account.AccountFileContactsUIHelper .removeContacts(acctContactRolesDisplayNames, account, CheckedValues)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=changeActiveStatus) at AccountFile_Contacts.pcf: line 54, column 96
    function checkedRowAction_6 (acctContact :  entity.AccountContact, CheckedValue :  entity.AccountContact) : void {
      CheckedValue.Active = !CheckedValue.Active
    }
    
    // 'def' attribute on PanelRef at AccountFile_Contacts.pcf: line 186, column 29
    function def_onEnter_53 (def :  pcf.AccountContactCV) : void {
      def.onEnter(accountContact, false, true)
    }
    
    // 'def' attribute on PanelRef at AccountFile_Contacts.pcf: line 186, column 29
    function def_refreshVariables_54 (def :  pcf.AccountContactCV) : void {
      def.refreshVariables(accountContact, false, true)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AccountFile_Contacts.pcf: line 111, column 148
    function filter_20 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.AccountContacts.DisplayAllRoles"), \ x -> true)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AccountFile_Contacts.pcf: line 118, column 152
    function filter_22 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.AccountContacts.PersonsAndCompanies"), \ x -> true)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AccountFile_Contacts.pcf: line 120, column 164
    function filter_23 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Web.AccountContacts.Persons"), \ x -> (x as AccountContact).Person)
    }
    
    // 'filter' attribute on ToolbarFilterOption at AccountFile_Contacts.pcf: line 122, column 147
    function filter_24 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter(DisplayKey.get("Companies"), \ x -> (x as AccountContact).Company)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at AccountFile_Contacts.pcf: line 113, column 129
    function filters_21 () : gw.api.filters.IFilter[] {
      return new gw.api.web.contact.ContactRoleFilterSet().getFilterOptions(account.AccountContactRoleSubtypes)
    }
    
    // 'sortBy' attribute on IteratorSort at AccountFile_Contacts.pcf: line 129, column 32
    function sortBy_25 (acctContact :  entity.AccountContact) : java.lang.Object {
      return acctContact.DisplayName
    }
    
    // 'sortBy' attribute on IteratorSort at AccountFile_Contacts.pcf: line 65, column 34
    function sortBy_7 (roleType :  typekey.AccountContactRole) : java.lang.Object {
      return roleType.DisplayName
    }
    
    // 'value' attribute on BooleanRadioCell (id=Active_Cell) at AccountFile_Contacts.pcf: line 137, column 47
    function sortValue_26 (acctContact :  entity.AccountContact) : java.lang.Object {
      return acctContact.Active
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AccountFile_Contacts.pcf: line 142, column 32
    function sortValue_27 (acctContact :  entity.AccountContact) : java.lang.Object {
      return acctContact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at AccountFile_Contacts.pcf: line 147, column 32
    function sortValue_28 (acctContact :  entity.AccountContact) : java.lang.Object {
      return gw.web.account.AccountFileContactsUIHelper .lookupAcctContactRolesDisplayName(acctContactRolesDisplayNames, acctContact)
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at AccountFile_Contacts.pcf: line 151, column 66
    function sortValue_29 (acctContact :  entity.AccountContact) : java.lang.Object {
      return acctContact.Contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=Email_Cell) at AccountFile_Contacts.pcf: line 155, column 62
    function sortValue_30 (acctContact :  entity.AccountContact) : java.lang.Object {
      return acctContact.Contact.EmailAddress1
    }
    
    // 'value' attribute on MenuItemIterator at AccountFile_Contacts.pcf: line 62, column 58
    function value_17 () : typekey.AccountContactRole[] {
      return contactConfigPlugin.AvailableAccountContactRoleTypes.subtract({TC_ACCOUNTHOLDER}).toTypedArray()
    }
    
    // 'value' attribute on RowIterator at AccountFile_Contacts.pcf: line 106, column 51
    function value_52 () : entity.AccountContact[] {
      return account.AccountContacts
    }
    
    // 'visible' attribute on Toolbar (id=AccountContactsLV_tb) at AccountFile_Contacts.pcf: line 48, column 50
    function visible_19 () : java.lang.Boolean {
      return perm.Account.edit(account)
    }
    
    property get accountContact () : AccountContact {
      return getCurrentSelection(1) as AccountContact
    }
    
    property set accountContact ($arg :  AccountContact) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}