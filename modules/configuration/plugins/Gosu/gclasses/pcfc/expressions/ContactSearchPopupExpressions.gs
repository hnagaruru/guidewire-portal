package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/ContactSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/ContactSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (accountContactRoleTypeToGetContactFor :  typekey.AccountContactRole) : int {
      return 1
    }
    
    static function __constructorIndex (accountContactRoleTypeToGetContactFor :  typekey.AccountContactRole, product :  gw.api.productmodel.Product) : int {
      return 0
    }
    
    static function __constructorIndex (availableSubtypes :  typekey.Contact[]) : int {
      return 2
    }
    
    // 'def' attribute on ScreenRef at ContactSearchPopup.pcf: line 34, column 73
    function def_onEnter_3 (def :  pcf.ContactSearchScreen) : void {
      def.onEnter(availableSubtypes, null, false, false)
    }
    
    // 'def' attribute on ScreenRef at ContactSearchPopup.pcf: line 34, column 73
    function def_refreshVariables_4 (def :  pcf.ContactSearchScreen) : void {
      def.refreshVariables(availableSubtypes, null, false, false)
    }
    
    // 'initialValue' attribute on Variable at ContactSearchPopup.pcf: line 21, column 54
    function initialValue_0 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'initialValue' attribute on Variable at ContactSearchPopup.pcf: line 25, column 29
    function initialValue_1 () : ContactType[] {
      return accountContactRoleTypeToGetContactFor == null ? typekey.ContactType.getTypeKeys(false).toTypedArray() : contactConfigPlugin.getAllowedContactTypesForAccountContactRoleType(accountContactRoleTypeToGetContactFor)
    }
    
    // 'initialValue' attribute on Variable at ContactSearchPopup.pcf: line 29, column 33
    function initialValue_2 () : typekey.Contact[] {
      return gw.web.admin.shared.SharedUIHelper.getAvailableSubtypes(availableSubtypes,contactTypes, product, accountContactRoleTypeToGetContactFor )
    }
    
    override property get CurrentLocation () : pcf.ContactSearchPopup {
      return super.CurrentLocation as pcf.ContactSearchPopup
    }
    
    property get accountContactRoleTypeToGetContactFor () : typekey.AccountContactRole {
      return getVariableValue("accountContactRoleTypeToGetContactFor", 0) as typekey.AccountContactRole
    }
    
    property set accountContactRoleTypeToGetContactFor ($arg :  typekey.AccountContactRole) {
      setVariableValue("accountContactRoleTypeToGetContactFor", 0, $arg)
    }
    
    property get availableSubtypes () : typekey.Contact[] {
      return getVariableValue("availableSubtypes", 0) as typekey.Contact[]
    }
    
    property set availableSubtypes ($arg :  typekey.Contact[]) {
      setVariableValue("availableSubtypes", 0, $arg)
    }
    
    property get contactConfigPlugin () : gw.plugin.contact.IContactConfigPlugin {
      return getVariableValue("contactConfigPlugin", 0) as gw.plugin.contact.IContactConfigPlugin
    }
    
    property set contactConfigPlugin ($arg :  gw.plugin.contact.IContactConfigPlugin) {
      setVariableValue("contactConfigPlugin", 0, $arg)
    }
    
    property get contactTypes () : ContactType[] {
      return getVariableValue("contactTypes", 0) as ContactType[]
    }
    
    property set contactTypes ($arg :  ContactType[]) {
      setVariableValue("contactTypes", 0, $arg)
    }
    
    property get product () : gw.api.productmodel.Product {
      return getVariableValue("product", 0) as gw.api.productmodel.Product
    }
    
    property set product ($arg :  gw.api.productmodel.Product) {
      setVariableValue("product", 0, $arg)
    }
    
    function getAvailableSubtypes() : typekey.Contact[] {
      if (availableSubtypes != null) {
        return availableSubtypes 
      }
      var subTypes = contactTypes.map( \ c -> c == TC_COMPANY ?
        typekey.Contact.TC_COMPANY : typekey.Contact.TC_PERSON)
        .sortBy(\ c -> c.DisplayName)  // make the order deterministic
      if (product != null and accountContactRoleTypeToGetContactFor == TC_NAMEDINSURED) {
        subTypes = subTypes.where(\ c -> product.isContactTypeSuitableForProductAccountType(c == TC_COMPANY ? Company : Person))
      }
      return subTypes
    }
    
    
  }
  
  
}