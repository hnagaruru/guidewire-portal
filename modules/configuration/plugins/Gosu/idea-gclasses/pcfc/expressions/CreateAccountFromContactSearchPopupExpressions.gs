package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/new/CreateAccountFromContactSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateAccountFromContactSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/account/new/CreateAccountFromContactSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateAccountFromContactSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (accountSearchCriteria :  gw.account.AccountSearchCriteria) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at CreateAccountFromContactSearchPopup.pcf: line 30, column 92
    function def_onEnter_3 (def :  pcf.ContactSearchScreen) : void {
      def.onEnter(availableSubtypes(), contactSearchCriteria, false, false)
    }
    
    // 'def' attribute on ScreenRef at CreateAccountFromContactSearchPopup.pcf: line 30, column 92
    function def_refreshVariables_4 (def :  pcf.ContactSearchScreen) : void {
      def.refreshVariables(availableSubtypes(), contactSearchCriteria, false, false)
    }
    
    // 'initialValue' attribute on Variable at CreateAccountFromContactSearchPopup.pcf: line 14, column 54
    function initialValue_0 () : gw.plugin.contact.IContactConfigPlugin {
      return gw.plugin.Plugins.get(gw.plugin.contact.IContactConfigPlugin)
    }
    
    // 'initialValue' attribute on Variable at CreateAccountFromContactSearchPopup.pcf: line 18, column 29
    function initialValue_1 () : ContactType[] {
      return contactConfigPlugin.getAllowedContactTypesForAccountContactRoleType(typekey.AccountContactRole.TC_ACCOUNTHOLDER)
    }
    
    // 'initialValue' attribute on Variable at CreateAccountFromContactSearchPopup.pcf: line 28, column 37
    function initialValue_2 () : ContactSearchCriteria {
      return accountSearchCriteria.toContactSearchCriteria()
    }
    
    override property get CurrentLocation () : pcf.CreateAccountFromContactSearchPopup {
      return super.CurrentLocation as pcf.CreateAccountFromContactSearchPopup
    }
    
    property get accountSearchCriteria () : gw.account.AccountSearchCriteria {
      return getVariableValue("accountSearchCriteria", 0) as gw.account.AccountSearchCriteria
    }
    
    property set accountSearchCriteria ($arg :  gw.account.AccountSearchCriteria) {
      setVariableValue("accountSearchCriteria", 0, $arg)
    }
    
    property get contactConfigPlugin () : gw.plugin.contact.IContactConfigPlugin {
      return getVariableValue("contactConfigPlugin", 0) as gw.plugin.contact.IContactConfigPlugin
    }
    
    property set contactConfigPlugin ($arg :  gw.plugin.contact.IContactConfigPlugin) {
      setVariableValue("contactConfigPlugin", 0, $arg)
    }
    
    property get contactSearchCriteria () : ContactSearchCriteria {
      return getVariableValue("contactSearchCriteria", 0) as ContactSearchCriteria
    }
    
    property set contactSearchCriteria ($arg :  ContactSearchCriteria) {
      setVariableValue("contactSearchCriteria", 0, $arg)
    }
    
    property get contactTypes () : ContactType[] {
      return getVariableValue("contactTypes", 0) as ContactType[]
    }
    
    property set contactTypes ($arg :  ContactType[]) {
      setVariableValue("contactTypes", 0, $arg)
    }
    
    property get forNewSubmission () : boolean {
      return getVariableValue("forNewSubmission", 0) as java.lang.Boolean
    }
    
    property set forNewSubmission ($arg :  boolean) {
      setVariableValue("forNewSubmission", 0, $arg)
    }
    
    public function availableSubtypes() : typekey.Contact[] {
      var subTypes = contactTypes.map(\ c -> c == TC_COMPANY ?
          typekey.Contact.TC_COMPANY : typekey.Contact.TC_PERSON)
          .sortBy(\ c -> c.DisplayName)
      return subTypes
      }
    
    
  }
  
  
}