package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Accounts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactFile_AccountsExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Accounts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactFile_AccountsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  Contact) : int {
      return 0
    }
    
    // 'infoBar' attribute on Page (id=ContactFile_Accounts) at ContactFile_Accounts.pcf: line 9, column 72
    function infoBar_onEnter_32 (def :  pcf.ContactFileInfoBar) : void {
      def.onEnter(contact)
    }
    
    // 'infoBar' attribute on Page (id=ContactFile_Accounts) at ContactFile_Accounts.pcf: line 9, column 72
    function infoBar_refreshVariables_33 (def :  pcf.ContactFileInfoBar) : void {
      def.refreshVariables(contact)
    }
    
    // Page (id=ContactFile_Accounts) at ContactFile_Accounts.pcf: line 9, column 72
    static function parent_34 (contact :  Contact) : pcf.api.Destination {
      return pcf.ContactFile.createDestination(contact)
    }
    
    override property get CurrentLocation () : pcf.ContactFile_Accounts {
      return super.CurrentLocation as pcf.ContactFile_Accounts
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Accounts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=PolicyAccount) at ContactFile_Accounts.pcf: line 47, column 49
    function action_9 () : void {
      AccountFileDoRetrievalForward.go(item.AccountNumber)
    }
    
    // 'action' attribute on Link (id=PolicyAccount) at ContactFile_Accounts.pcf: line 47, column 49
    function action_dest_10 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(item.AccountNumber)
    }
    
    // 'available' attribute on Link (id=PolicyAccount) at ContactFile_Accounts.pcf: line 47, column 49
    function available_8 () : java.lang.Boolean {
      return perm.Account.view(item)
    }
    
    // 'initialValue' attribute on Variable at ContactFile_Accounts.pcf: line 32, column 38
    function initialValue_6 () : entity.Contact {
      return item.AccountHolderContact
    }
    
    // 'initialValue' attribute on Variable at ContactFile_Accounts.pcf: line 36, column 40
    function initialValue_7 () : java.lang.String {
      return item.AccountContacts.where(\ a -> a.Contact == contact).arrays("Roles").toArray(new entity.AccountContactRole[0]).sortBy(\ acr -> acr.DisplayName).join(", ")
    }
    
    // RowIterator at ContactFile_Accounts.pcf: line 28, column 42
    function initializeVariables_30 () : void {
        accountHolderContact = item.AccountHolderContact;
  roles = item.AccountContacts.where(\ a -> a.Contact == contact).arrays("Roles").toArray(new entity.AccountContactRole[0]).sortBy(\ acr -> acr.DisplayName).join(", ");

    }
    
    // 'label' attribute on Link (id=PolicyAccount) at ContactFile_Accounts.pcf: line 47, column 49
    function label_11 () : java.lang.Object {
      return item.AccountHolderContactNameAndNick
    }
    
    // 'tooltip' attribute on Link (id=PolicyAccount) at ContactFile_Accounts.pcf: line 47, column 49
    function tooltip_12 () : java.lang.String {
      return item.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at ContactFile_Accounts.pcf: line 52, column 59
    function valueRoot_15 () : java.lang.Object {
      return accountHolderContact
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at ContactFile_Accounts.pcf: line 52, column 59
    function value_14 () : java.lang.String {
      return accountHolderContact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at ContactFile_Accounts.pcf: line 57, column 45
    function value_17 () : entity.Address {
      return accountHolderContact.PrimaryAddress
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at ContactFile_Accounts.pcf: line 61, column 65
    function value_20 () : java.lang.String {
      return accountHolderContact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=Email_Cell) at ContactFile_Accounts.pcf: line 65, column 61
    function value_23 () : java.lang.String {
      return accountHolderContact.EmailAddress1
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at ContactFile_Accounts.pcf: line 69, column 32
    function value_26 () : java.lang.String {
      return roles
    }
    
    // 'value' attribute on TextCell (id=ServiceTier_Cell) at ContactFile_Accounts.pcf: line 74, column 47
    function value_28 () : java.lang.Object {
      return item.ServiceTier.DisplayName != null ? item.ServiceTier.DisplayName : '-' 
    }
    
    property get accountHolderContact () : entity.Contact {
      return getVariableValue("accountHolderContact", 2) as entity.Contact
    }
    
    property set accountHolderContact ($arg :  entity.Contact) {
      setVariableValue("accountHolderContact", 2, $arg)
    }
    
    property get item () : entity.Account {
      return getIteratedValue(2) as entity.Account
    }
    
    property get roles () : java.lang.String {
      return getVariableValue("roles", 2) as java.lang.String
    }
    
    property set roles ($arg :  java.lang.String) {
      setVariableValue("roles", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Accounts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends ContactFile_AccountsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AccountHolder_Cell) at ContactFile_Accounts.pcf: line 52, column 59
    function sortValue_0 (item :  entity.Account) : java.lang.Object {
      var accountHolderContact : entity.Contact = (item.AccountHolderContact)
var roles : java.lang.String = (item.AccountContacts.where(\ a -> a.Contact == contact).arrays("Roles").toArray(new entity.AccountContactRole[0]).sortBy(\ acr -> acr.DisplayName).join(", "))
return accountHolderContact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at ContactFile_Accounts.pcf: line 57, column 45
    function sortValue_1 (item :  entity.Account) : java.lang.Object {
      var accountHolderContact : entity.Contact = (item.AccountHolderContact)
var roles : java.lang.String = (item.AccountContacts.where(\ a -> a.Contact == contact).arrays("Roles").toArray(new entity.AccountContactRole[0]).sortBy(\ acr -> acr.DisplayName).join(", "))
return accountHolderContact.PrimaryAddress
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at ContactFile_Accounts.pcf: line 61, column 65
    function sortValue_2 (item :  entity.Account) : java.lang.Object {
      var accountHolderContact : entity.Contact = (item.AccountHolderContact)
var roles : java.lang.String = (item.AccountContacts.where(\ a -> a.Contact == contact).arrays("Roles").toArray(new entity.AccountContactRole[0]).sortBy(\ acr -> acr.DisplayName).join(", "))
return accountHolderContact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextCell (id=Email_Cell) at ContactFile_Accounts.pcf: line 65, column 61
    function sortValue_3 (item :  entity.Account) : java.lang.Object {
      var accountHolderContact : entity.Contact = (item.AccountHolderContact)
var roles : java.lang.String = (item.AccountContacts.where(\ a -> a.Contact == contact).arrays("Roles").toArray(new entity.AccountContactRole[0]).sortBy(\ acr -> acr.DisplayName).join(", "))
return accountHolderContact.EmailAddress1
    }
    
    // 'value' attribute on TextCell (id=Roles_Cell) at ContactFile_Accounts.pcf: line 69, column 32
    function sortValue_4 (item :  entity.Account) : java.lang.Object {
      var accountHolderContact : entity.Contact = (item.AccountHolderContact)
var roles : java.lang.String = (item.AccountContacts.where(\ a -> a.Contact == contact).arrays("Roles").toArray(new entity.AccountContactRole[0]).sortBy(\ acr -> acr.DisplayName).join(", "))
return roles
    }
    
    // 'value' attribute on TextCell (id=ServiceTier_Cell) at ContactFile_Accounts.pcf: line 74, column 47
    function sortValue_5 (item :  entity.Account) : java.lang.Object {
      return item.ServiceTier.DisplayName != null ? item.ServiceTier.DisplayName : '-' 
    }
    
    // 'value' attribute on RowIterator at ContactFile_Accounts.pcf: line 28, column 42
    function value_31 () : entity.Account[] {
      return contact.AssociationFinder.findAccounts().where(\ account -> perm.Account.view(account) or revealAccountsIgnoringViewPermission)
    }
    
    property get revealAccountsIgnoringViewPermission () : Boolean {
      return getVariableValue("revealAccountsIgnoringViewPermission", 1) as Boolean
    }
    
    property set revealAccountsIgnoringViewPermission ($arg :  Boolean) {
      setVariableValue("revealAccountsIgnoringViewPermission", 1, $arg)
    }
    
    
  }
  
  
}