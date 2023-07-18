package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/EditAccountContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditAccountContactPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/EditAccountContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditAccountContactPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (accountContact :  AccountContact) : int {
      return 0
    }
    
    static function __constructorIndex (accountContact :  AccountContact, resolvingConflict :  boolean) : int {
      return 1
    }
    
    static function __constructorIndex (accountContact :  AccountContact, resolvingConflict :  boolean, showRolesTab :  boolean, showAddressTools :  boolean) : int {
      return 2
    }
    
    // 'action' attribute on ToolbarButton (id=Sync) at EditAccountContactPopup.pcf: line 48, column 40
    function action_4 () : void {
      copyFromAddressBook()
    }
    
    // 'def' attribute on PanelRef at EditAccountContactPopup.pcf: line 52, column 26
    function def_onEnter_5 (def :  pcf.AccountContactCV) : void {
      def.onEnter(accountContact,true, showRolesTab)
    }
    
    // 'def' attribute on PanelRef at EditAccountContactPopup.pcf: line 52, column 26
    function def_refreshVariables_6 (def :  pcf.AccountContactCV) : void {
      def.refreshVariables(accountContact,true, showRolesTab)
    }
    
    // 'initialValue' attribute on Variable at EditAccountContactPopup.pcf: line 28, column 30
    function initialValue_0 () : entity.Contact {
      return accountContact.Contact
    }
    
    // EditButtons at EditAccountContactPopup.pcf: line 42, column 39
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at EditAccountContactPopup.pcf: line 42, column 39
    function pickValue_1 () : AccountContact {
      return accountContact
    }
    
    // 'title' attribute on Popup (id=EditAccountContactPopup) at EditAccountContactPopup.pcf: line 10, column 48
    static function title_7 (accountContact :  AccountContact, resolvingConflict :  boolean, showAddressTools :  boolean, showRolesTab :  boolean) : java.lang.Object {
      return accountContact.Contact.DisplayName
    }
    
    // 'visible' attribute on ToolbarButton (id=Sync) at EditAccountContactPopup.pcf: line 48, column 40
    function visible_3 () : java.lang.Boolean {
      return resolvingConflict
    }
    
    override property get CurrentLocation () : pcf.EditAccountContactPopup {
      return super.CurrentLocation as pcf.EditAccountContactPopup
    }
    
    property get accountContact () : AccountContact {
      return getVariableValue("accountContact", 0) as AccountContact
    }
    
    property set accountContact ($arg :  AccountContact) {
      setVariableValue("accountContact", 0, $arg)
    }
    
    property get contact () : entity.Contact {
      return getVariableValue("contact", 0) as entity.Contact
    }
    
    property set contact ($arg :  entity.Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get resolvingConflict () : boolean {
      return getVariableValue("resolvingConflict", 0) as java.lang.Boolean
    }
    
    property set resolvingConflict ($arg :  boolean) {
      setVariableValue("resolvingConflict", 0, $arg)
    }
    
    property get showAddressTools () : boolean {
      return getVariableValue("showAddressTools", 0) as java.lang.Boolean
    }
    
    property set showAddressTools ($arg :  boolean) {
      setVariableValue("showAddressTools", 0, $arg)
    }
    
    property get showRolesTab () : boolean {
      return getVariableValue("showRolesTab", 0) as java.lang.Boolean
    }
    
    property set showRolesTab ($arg :  boolean) {
      setVariableValue("showRolesTab", 0, $arg)
    }
    
    function copyFromAddressBook(){
      contact.syncWithAddressBook()
      //BundleUtil.evict(contact)
      CurrentLocation.cancel()
      EditAccountContactPopup.push(accountContact)
    }
    
    
  }
  
  
}