package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.database.PCBeanFinder
@javax.annotation.Generated("config/web/pcf/contacts/ChangeAccountHolderToNewContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ChangeAccountHolderToNewContactPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/ChangeAccountHolderToNewContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ChangeAccountHolderToNewContactPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (acct :  Account, contactType :  typekey.ContactType) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at ChangeAccountHolderToNewContactPopup.pcf: line 36, column 62
    function action_3 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.pickValueAndCommit(acctContact))
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at ChangeAccountHolderToNewContactPopup.pcf: line 44, column 62
    function action_8 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'beforeCommit' attribute on Popup (id=ChangeAccountHolderToNewContactPopup) at ChangeAccountHolderToNewContactPopup.pcf: line 11, column 105
    function beforeCommit_11 (pickedValue :  AccountContact) : void {
      beforeCommitPopup()
    }
    
    // 'def' attribute on PanelRef at ChangeAccountHolderToNewContactPopup.pcf: line 47, column 58
    function def_onEnter_9 (def :  pcf.AccountContactCV) : void {
      def.onEnter(acctContact,false, true)
    }
    
    // 'def' attribute on PanelRef at ChangeAccountHolderToNewContactPopup.pcf: line 47, column 58
    function def_refreshVariables_10 (def :  pcf.AccountContactCV) : void {
      def.refreshVariables(acctContact,false, true)
    }
    
    // 'initialValue' attribute on Variable at ChangeAccountHolderToNewContactPopup.pcf: line 23, column 37
    function initialValue_0 () : entity.AccountContact {
      return acct.addNewAccountContactOfType(contactType)
    }
    
    // 'initialValue' attribute on Variable at ChangeAccountHolderToNewContactPopup.pcf: line 27, column 69
    function initialValue_1 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(acctContact.Contact)
    }
    
    // EditButtons at ChangeAccountHolderToNewContactPopup.pcf: line 39, column 72
    function label_6 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at ChangeAccountHolderToNewContactPopup.pcf: line 39, column 72
    function pickValue_4 () : AccountContact {
      return acctContact
    }
    
    // 'title' attribute on Popup (id=ChangeAccountHolderToNewContactPopup) at ChangeAccountHolderToNewContactPopup.pcf: line 11, column 105
    static function title_12 (acct :  Account, contactType :  typekey.ContactType) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", AccountHolder.Type.TypeInfo.DisplayName)
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at ChangeAccountHolderToNewContactPopup.pcf: line 36, column 62
    function visible_2 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at ChangeAccountHolderToNewContactPopup.pcf: line 39, column 72
    function visible_5 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.ChangeAccountHolderToNewContactPopup {
      return super.CurrentLocation as pcf.ChangeAccountHolderToNewContactPopup
    }
    
    property get acct () : Account {
      return getVariableValue("acct", 0) as Account
    }
    
    property set acct ($arg :  Account) {
      setVariableValue("acct", 0, $arg)
    }
    
    property get acctContact () : entity.AccountContact {
      return getVariableValue("acctContact", 0) as entity.AccountContact
    }
    
    property set acctContact ($arg :  entity.AccountContact) {
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
    
    
    function beforeCommitPopup() {
      if (duplicateContactsPopupHelper.existingPCContactWithABContactMatch != null) { // existing ab contact that matches the current new contact
        duplicateContactsPopupHelper.changeAndRemoveAccountHolder(acct, acctContact)
      }
      else {  
        acct.changeAccountHolderTo(acctContact.Contact)
      }
    }
    
    
  }
  
  
}