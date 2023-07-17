package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/NewContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewContactPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/NewContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewContactPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contactType :  typekey.ContactType) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewContactPopup.pcf: line 31, column 62
    function action_3 () : void {
      duplicateContactsPopupHelper.checkForDuplicatesOrUpdate(\ -> CurrentLocation.pickValueAndCommit(contact))
    }
    
    // 'action' attribute on ToolbarButton (id=CheckForDuplicates) at NewContactPopup.pcf: line 39, column 62
    function action_8 () : void {
      duplicateContactsPopupHelper.push()
    }
    
    // 'beforeCommit' attribute on Popup (id=NewContactPopup) at NewContactPopup.pcf: line 11, column 106
    function beforeCommit_11 (pickedValue :  Contact) : void {
      beforeCommitNewContact()
    }
    
    // 'def' attribute on PanelRef at NewContactPopup.pcf: line 42, column 41
    function def_onEnter_9 (def :  pcf.ContactPanelSet) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at NewContactPopup.pcf: line 42, column 41
    function def_refreshVariables_10 (def :  pcf.ContactPanelSet) : void {
      def.refreshVariables(contact)
    }
    
    // 'initialValue' attribute on Variable at NewContactPopup.pcf: line 20, column 23
    function initialValue_0 () : Contact {
      return gw.api.contact.ContactUtil.createNewContact(contactType)
    }
    
    // 'initialValue' attribute on Variable at NewContactPopup.pcf: line 24, column 69
    function initialValue_1 () : gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper {
      return new gw.pcf.duplicatecontacts.DuplicateContactsPopupHelper(contact)
    }
    
    // EditButtons at NewContactPopup.pcf: line 34, column 72
    function label_6 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at NewContactPopup.pcf: line 34, column 72
    function pickValue_4 () : Contact {
      return contact
    }
    
    // 'title' attribute on Popup (id=NewContactPopup) at NewContactPopup.pcf: line 11, column 106
    static function title_12 (contactType :  typekey.ContactType) : java.lang.Object {
      return DisplayKey.get("Web.Contact.NewContact", entity.Contact.Type.TypeInfo.DisplayName)
    }
    
    // 'visible' attribute on ToolbarButton (id=ForceDupCheckUpdate) at NewContactPopup.pcf: line 31, column 62
    function visible_2 () : java.lang.Boolean {
      return duplicateContactsPopupHelper.ShowButton
    }
    
    // 'updateVisible' attribute on EditButtons at NewContactPopup.pcf: line 34, column 72
    function visible_5 () : java.lang.Boolean {
      return not duplicateContactsPopupHelper.ShowButton
    }
    
    override property get CurrentLocation () : pcf.NewContactPopup {
      return super.CurrentLocation as pcf.NewContactPopup
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
         // copy over the value
         contact.Bundle.add(existingPCContactWithABContactMatch)
         existingPCContactWithABContactMatch.copyFromContact(contact)
         contact.OfficialIDs.each(\ o -> o.remove())
         contact.remove()
         //contact = existingPCContactWithABContactMatch
      }
    }
    
    
  }
  
  
}