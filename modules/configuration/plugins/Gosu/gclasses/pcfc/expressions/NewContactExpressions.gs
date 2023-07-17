package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/NewContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewContactExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/NewContact.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewContactExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contactType :  typekey.ContactType) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewContact.pcf: line 33, column 62
    function action_3 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.commit())
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at NewContact.pcf: line 40, column 62
    function action_7 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'afterCancel' attribute on Page (id=NewContact) at NewContact.pcf: line 13, column 106
    function afterCancel_10 () : void {
      ContactSearch.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewContact) at NewContact.pcf: line 13, column 106
    function afterCancel_dest_11 () : pcf.api.Destination {
      return pcf.ContactSearch.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewContact) at NewContact.pcf: line 13, column 106
    function afterCommit_12 (TopLocation :  pcf.api.Location) : void {
      ContactForward.go(contact)
    }
    
    // 'beforeCommit' attribute on Page (id=NewContact) at NewContact.pcf: line 13, column 106
    function beforeCommit_13 (pickedValue :  java.lang.Object) : void {
      beforeCommitNewContact()
    }
    
    // 'def' attribute on PanelRef at NewContact.pcf: line 43, column 41
    function def_onEnter_8 (def :  pcf.ContactPanelSet) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at NewContact.pcf: line 43, column 41
    function def_refreshVariables_9 (def :  pcf.ContactPanelSet) : void {
      def.refreshVariables(contact)
    }
    
    // 'initialValue' attribute on Variable at NewContact.pcf: line 22, column 23
    function initialValue_0 () : Contact {
      return gw.api.contact.ContactUtil.createNewContact(contactType)
    }
    
    // 'initialValue' attribute on Variable at NewContact.pcf: line 26, column 69
    function initialValue_1 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(contact)
    }
    
    // EditButtons at NewContact.pcf: line 35, column 72
    function label_5 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'parent' attribute on Page (id=NewContact) at NewContact.pcf: line 13, column 106
    static function parent_14 (contactType :  typekey.ContactType) : pcf.api.Destination {
      return pcf.ContactForward.createDestination()
    }
    
    // 'title' attribute on Page (id=NewContact) at NewContact.pcf: line 13, column 106
    static function title_15 (contactType :  typekey.ContactType) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", entity.Contact.Type.TypeInfo.DisplayName)
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewContact.pcf: line 33, column 62
    function visible_2 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewContact.pcf: line 35, column 72
    function visible_4 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewContact {
      return super.CurrentLocation as pcf.NewContact
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
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
    
    function beforeCommitNewContact() {
       var existingPCContactWithABContactMatch = duplicateContactsPopupHelper.existingPCContactWithABContactMatch
       if (existingPCContactWithABContactMatch != null) { // existing ab contact that matches the current new contact
          throw new gw.api.util.DisplayableException(DisplayKey.get("Web.Contact.Error.AlreadyExist", existingPCContactWithABContactMatch))
      }    
    }
    
    
  }
  
  
}