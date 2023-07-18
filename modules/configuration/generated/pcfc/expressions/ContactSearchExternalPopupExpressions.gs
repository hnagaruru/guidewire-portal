package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/ContactSearchExternalPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactSearchExternalPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/ContactSearchExternalPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactSearchExternalPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contactSearchResult :  gw.plugin.contact.ContactResult) : int {
      return 0
    }
    
    // 'def' attribute on InputSetRef at ContactSearchExternalPopup.pcf: line 51, column 132
    function def_onEnter_14 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.ContactResultAddressSearchOwner (contactResultAddrAdapter))
    }
    
    // 'def' attribute on InputSetRef at ContactSearchExternalPopup.pcf: line 51, column 132
    function def_refreshVariables_15 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.ContactResultAddressSearchOwner (contactResultAddrAdapter))
    }
    
    // 'initialValue' attribute on Variable at ContactSearchExternalPopup.pcf: line 18, column 60
    function initialValue_0 () : gw.globalization.ContactResultAddressAdapter {
      return new gw.globalization.ContactResultAddressAdapter(contactSearchResult)
    }
    
    // 'label' attribute on Label (id=TypeOfContact) at ContactSearchExternalPopup.pcf: line 30, column 70
    function label_1 () : java.lang.String {
      return contactSearchResult.ContactType.DisplayName
    }
    
    // 'label' attribute on TextInput (id=TaxID_Input) at ContactSearchExternalPopup.pcf: line 59, column 47
    function label_16 () : java.lang.Object {
      return contactSearchResult.ContactType.equals(typekey.ContactType.TC_COMPANY) ? DisplayKey.get("Web.SubmissionWizard.Account.FEIN") : DisplayKey.get("Web.SubmissionWizard.Account.SSN")
    }
    
    // 'value' attribute on TextInput (id=DisplayName_Input) at ContactSearchExternalPopup.pcf: line 34, column 58
    function valueRoot_3 () : java.lang.Object {
      return contactSearchResult
    }
    
    // 'value' attribute on TextInput (id=Email_Input) at ContactSearchExternalPopup.pcf: line 46, column 60
    function value_11 () : java.lang.String {
      return contactSearchResult.EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at ContactSearchExternalPopup.pcf: line 59, column 47
    function value_17 () : java.lang.Object {
      return null
    }
    
    // 'value' attribute on TextInput (id=DisplayName_Input) at ContactSearchExternalPopup.pcf: line 34, column 58
    function value_2 () : java.lang.String {
      return contactSearchResult.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Phone_Input) at ContactSearchExternalPopup.pcf: line 38, column 64
    function value_5 () : java.lang.String {
      return contactSearchResult.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Fax_Input) at ContactSearchExternalPopup.pcf: line 42, column 55
    function value_8 () : java.lang.String {
      return contactSearchResult.FaxPhone
    }
    
    override property get CurrentLocation () : pcf.ContactSearchExternalPopup {
      return super.CurrentLocation as pcf.ContactSearchExternalPopup
    }
    
    property get contactResultAddrAdapter () : gw.globalization.ContactResultAddressAdapter {
      return getVariableValue("contactResultAddrAdapter", 0) as gw.globalization.ContactResultAddressAdapter
    }
    
    property set contactResultAddrAdapter ($arg :  gw.globalization.ContactResultAddressAdapter) {
      setVariableValue("contactResultAddrAdapter", 0, $arg)
    }
    
    property get contactSearchResult () : gw.plugin.contact.ContactResult {
      return getVariableValue("contactSearchResult", 0) as gw.plugin.contact.ContactResult
    }
    
    property set contactSearchResult ($arg :  gw.plugin.contact.ContactResult) {
      setVariableValue("contactSearchResult", 0, $arg)
    }
    
    
  }
  
  
}