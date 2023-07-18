package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.database.PCBeanFinder
@javax.annotation.Generated("config/web/pcf/contacts/NewAccountContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAccountContactPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/NewAccountContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAccountContactPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (acct :  Account, acRoleType :  typekey.AccountContactRole, contactType :  typekey.ContactType) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewAccountContactPopup.pcf: line 39, column 94
    function action_3 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.pickValueAndCommit(acctContact))
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at NewAccountContactPopup.pcf: line 47, column 62
    function action_8 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'beforeCommit' attribute on Popup (id=NewAccountContactPopup) at NewAccountContactPopup.pcf: line 11, column 176
    function beforeCommit_11 (pickedValue :  AccountContact) : void {
      reconstructAcctContact()
    }
    
    // 'def' attribute on PanelRef at NewAccountContactPopup.pcf: line 50, column 58
    function def_onEnter_9 (def :  pcf.AccountContactCV) : void {
      def.onEnter(acctContact,false, true)
    }
    
    // 'def' attribute on PanelRef at NewAccountContactPopup.pcf: line 50, column 58
    function def_refreshVariables_10 (def :  pcf.AccountContactCV) : void {
      def.refreshVariables(acctContact,false, true)
    }
    
    // 'initialValue' attribute on Variable at NewAccountContactPopup.pcf: line 26, column 30
    function initialValue_0 () : AccountContact {
      return initializeAcctContact()
    }
    
    // 'initialValue' attribute on Variable at NewAccountContactPopup.pcf: line 30, column 69
    function initialValue_1 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(acctContact.Contact)
    }
    
    // EditButtons at NewAccountContactPopup.pcf: line 42, column 104
    function label_6 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at NewAccountContactPopup.pcf: line 42, column 104
    function pickValue_4 () : AccountContact {
      return acctContact
    }
    
    // 'title' attribute on Popup (id=NewAccountContactPopup) at NewAccountContactPopup.pcf: line 11, column 176
    static function title_12 (acRoleType :  typekey.AccountContactRole, acct :  Account, contactType :  typekey.ContactType) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin).getAccountContactRoleTypeDisplayName(acRoleType))
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewAccountContactPopup.pcf: line 39, column 94
    function visible_2 () : java.lang.Boolean {
      return acctContact.Contact != null and duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewAccountContactPopup.pcf: line 42, column 104
    function visible_5 () : java.lang.Boolean {
      return acctContact.Contact != null and not duplicateContactsPopupHelper.ShowButton
    }
    
    // 'visible' attribute on ToolbarButton (id=CheckForDuplicates) at NewAccountContactPopup.pcf: line 47, column 62
    function visible_7 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewAccountContactPopup {
      return super.CurrentLocation as pcf.NewAccountContactPopup
    }
    
    property get acRoleType () : typekey.AccountContactRole {
      return getVariableValue("acRoleType", 0) as typekey.AccountContactRole
    }
    
    property set acRoleType ($arg :  typekey.AccountContactRole) {
      setVariableValue("acRoleType", 0, $arg)
    }
    
    property get acct () : Account {
      return getVariableValue("acct", 0) as Account
    }
    
    property set acct ($arg :  Account) {
      setVariableValue("acct", 0, $arg)
    }
    
    property get acctContact () : AccountContact {
      return getVariableValue("acctContact", 0) as AccountContact
    }
    
    property set acctContact ($arg :  AccountContact) {
      setVariableValue("acctContact", 0, $arg)
    }
    
    property get contactType () : typekey.ContactType {
      return getVariableValue("contactType", 0) as typekey.ContactType
    }
    
    property set contactType ($arg :  typekey.ContactType) {
      setVariableValue("contactType", 0, $arg)
    }
    
    property get duplicateContactsPopupHelper () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return getVariableValue("duplicateContactsPopupHelper", 0) as gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper
    }
    
    property set duplicateContactsPopupHelper ($arg :  gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper) {
      setVariableValue("duplicateContactsPopupHelper", 0, $arg)
    }
    
    
    function initializeAcctContact() : AccountContact {
      var ac = acct.addNewAccountContactOfType(contactType)
      ac.addNewRole(acRoleType)
      return ac
    }
    
    function reconstructAcctContact() {
      var existingPCContactWithABContactMatch = duplicateContactsPopupHelper.existingPCContactWithABContactMatch
      var contactRoles = acctContact.Roles  
      if (existingPCContactWithABContactMatch != null) { // existing ab contact that matches the current new contact
        acct.removeFromAccountContacts(acctContact)
        existingPCContactWithABContactMatch = acctContact.Contact.Bundle.add(PCBeanFinder.loadBeanByPublicID<Contact>(existingPCContactWithABContactMatch.PublicID, Contact))
        existingPCContactWithABContactMatch.copyUIFieldsFromContact(acctContact.Contact)
     
        var matchingAcctContact = acct.AccountContacts.firstWhere(\ a -> a.Contact.AddressBookUID == existingPCContactWithABContactMatch.AddressBookUID )
        if (matchingAcctContact != null) { // if any acccount contacts in this account also match the ab contact
          matchingAcctContact.addRoles(contactRoles)
        } else {
          var newAcctContact = acct.addNewAccountContactForContact(existingPCContactWithABContactMatch)
          newAcctContact.addRoles(contactRoles)     
        }
        // remove the newly created contact from the bundle if there is a match found in pc
        acctContact.Contact.OfficialIDs.each(\ o -> o.remove() )
        acctContact.Contact.remove()
        acctContact.remove()
      }  
      else {
        acctContact.Contact = duplicateContactsPopupHelper.originalContact
      }
    }
    
    
  }
  
  
}