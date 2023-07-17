package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/ChangeAccountHolderMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ChangeAccountHolderMenuItemSetExpressions {
  @javax.annotation.Generated("config/web/pcf/account/ChangeAccountHolderMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ChangeAccountHolderMenuItemSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ChangeToPerson) at ChangeAccountHolderMenuItemSet.pcf: line 17, column 62
    function action_1 () : void {
      ChangeAccountHolderToNewContactPopup.push(account, typekey.ContactType.TC_PERSON)
    }
    
    // 'action' attribute on MenuItem (id=ChangeToCompany) at ChangeAccountHolderMenuItemSet.pcf: line 21, column 63
    function action_3 () : void {
      ChangeAccountHolderToNewContactPopup.push(account, typekey.ContactType.TC_COMPANY)
    }
    
    // 'action' attribute on PickerMenuItem (id=Search) at ChangeAccountHolderMenuItemSet.pcf: line 41, column 85
    function action_9 () : void {
      ContactSearchPopup.push(TC_ACCOUNTHOLDER)
    }
    
    // 'action' attribute on PickerMenuItem (id=Search) at ChangeAccountHolderMenuItemSet.pcf: line 41, column 85
    function action_dest_10 () : pcf.api.Destination {
      return pcf.ContactSearchPopup.createDestination(TC_ACCOUNTHOLDER)
    }
    
    // 'action' attribute on MenuItem (id=ChangeToPerson) at ChangeAccountHolderMenuItemSet.pcf: line 17, column 62
    function action_dest_2 () : pcf.api.Destination {
      return pcf.ChangeAccountHolderToNewContactPopup.createDestination(account, typekey.ContactType.TC_PERSON)
    }
    
    // 'action' attribute on MenuItem (id=ChangeToCompany) at ChangeAccountHolderMenuItemSet.pcf: line 21, column 63
    function action_dest_4 () : pcf.api.Destination {
      return pcf.ChangeAccountHolderToNewContactPopup.createDestination(account, typekey.ContactType.TC_COMPANY)
    }
    
    // 'initialValue' attribute on Variable at ChangeAccountHolderMenuItemSet.pcf: line 13, column 51
    function initialValue_0 () : gw.api.ui.ChangeAccountHolderHelper {
      return new gw.api.ui.ChangeAccountHolderHelper(account)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=Search) at ChangeAccountHolderMenuItemSet.pcf: line 41, column 85
    function onPick_11 (PickedValue :  Contact) : void {
      changeAccountHolderHelper.changeAccountHolderToContact(PickedValue)
    }
    
    // 'sortBy' attribute on IteratorSort at ChangeAccountHolderMenuItemSet.pcf: line 30, column 24
    function sortBy_5 (accountContact :  entity.AccountContact) : java.lang.Object {
      return accountContact
    }
    
    // 'value' attribute on MenuItemIterator (id=ContactIterator) at ChangeAccountHolderMenuItemSet.pcf: line 27, column 43
    function value_8 () : entity.AccountContact[] {
      return account.ActiveAccountContacts.subtract({account.AccountHolder.AccountContact}).toTypedArray()
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get changeAccountHolderHelper () : gw.api.ui.ChangeAccountHolderHelper {
      return getVariableValue("changeAccountHolderHelper", 0) as gw.api.ui.ChangeAccountHolderHelper
    }
    
    property set changeAccountHolderHelper ($arg :  gw.api.ui.ChangeAccountHolderHelper) {
      setVariableValue("changeAccountHolderHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/ChangeAccountHolderMenuItemSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ChangeAccountHolderMenuItemSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UnassignedContact) at ChangeAccountHolderMenuItemSet.pcf: line 34, column 33
    function action_6 () : void {
      changeAccountHolderHelper.changeAccountHolderToContact(accountContact.Contact)
    }
    
    // 'label' attribute on MenuItem (id=UnassignedContact) at ChangeAccountHolderMenuItemSet.pcf: line 34, column 33
    function label_7 () : java.lang.Object {
      return accountContact
    }
    
    property get accountContact () : entity.AccountContact {
      return getIteratedValue(1) as entity.AccountContact
    }
    
    
  }
  
  
}