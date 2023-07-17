package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ExternalContactFile_Details.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExternalContactFile_DetailsExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ExternalContactFile_Details.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactSearchExternalScreenExpressionsImpl extends ExternalContactFile_DetailsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ExternalContactFile_Details.pcf: line 30, column 55
    function def_onEnter_1 (def :  pcf.AccountContactDV) : void {
      def.onEnter(contact,null)
    }
    
    // 'def' attribute on PanelRef at ExternalContactFile_Details.pcf: line 39, column 63
    function def_onEnter_3 (def :  pcf.AddressesPanelSet) : void {
      def.onEnter(contact,false,null,null)
    }
    
    // 'def' attribute on PanelRef at ExternalContactFile_Details.pcf: line 30, column 55
    function def_refreshVariables_2 (def :  pcf.AccountContactDV) : void {
      def.refreshVariables(contact,null)
    }
    
    // 'def' attribute on PanelRef at ExternalContactFile_Details.pcf: line 39, column 63
    function def_refreshVariables_4 (def :  pcf.AddressesPanelSet) : void {
      def.refreshVariables(contact,false,null,null)
    }
    
    // 'initialValue' attribute on Variable at ExternalContactFile_Details.pcf: line 21, column 25
    function initialValue_0 () : Contact {
      return getContactFromContactSearch()
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 1) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/ExternalContactFile_Details.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExternalContactFile_DetailsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contactSearchResult :  gw.plugin.contact.ContactResult) : int {
      return 0
    }
    
    // Page (id=ExternalContactFile_Details) at ExternalContactFile_Details.pcf: line 8, column 71
    static function parent_5 (contactSearchResult :  gw.plugin.contact.ContactResult) : pcf.api.Destination {
      return pcf.ExternalContactFile.createDestination(contactSearchResult)
    }
    
    override property get CurrentLocation () : pcf.ExternalContactFile_Details {
      return super.CurrentLocation as pcf.ExternalContactFile_Details
    }
    
    property get contactSearchResult () : gw.plugin.contact.ContactResult {
      return getVariableValue("contactSearchResult", 0) as gw.plugin.contact.ContactResult
    }
    
    property set contactSearchResult ($arg :  gw.plugin.contact.ContactResult) {
      setVariableValue("contactSearchResult", 0, $arg)
    }
    
    function getContactFromContactSearch() : Contact {
      return contactSearchResult.convertToContact(gw.plugin.contact.ContactCreator.createNonPersistentContactCreator())
    }
    
    
  }
  
  
}