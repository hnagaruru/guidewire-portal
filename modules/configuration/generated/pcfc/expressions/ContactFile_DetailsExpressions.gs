package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Details.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactFile_DetailsExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/ContactFile_Details.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactFile_DetailsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  Contact) : int {
      return 0
    }
    
    static function __constructorIndex (contact :  Contact, startEdit :  boolean) : int {
      return 1
    }
    
    // 'def' attribute on PanelRef at ContactFile_Details.pcf: line 38, column 57
    function def_onEnter_1 (def :  pcf.AccountContactDV) : void {
      def.onEnter(contact,null)
    }
    
    // 'def' attribute on PanelRef at ContactFile_Details.pcf: line 46, column 65
    function def_onEnter_3 (def :  pcf.AddressesPanelSet) : void {
      def.onEnter(contact,false,null,null)
    }
    
    // 'def' attribute on PanelRef at ContactFile_Details.pcf: line 38, column 57
    function def_refreshVariables_2 (def :  pcf.AccountContactDV) : void {
      def.refreshVariables(contact,null)
    }
    
    // 'def' attribute on PanelRef at ContactFile_Details.pcf: line 46, column 65
    function def_refreshVariables_4 (def :  pcf.AddressesPanelSet) : void {
      def.refreshVariables(contact,false,null,null)
    }
    
    // 'infoBar' attribute on Page (id=ContactFile_Details) at ContactFile_Details.pcf: line 11, column 71
    function infoBar_onEnter_5 (def :  pcf.ContactFileInfoBar) : void {
      def.onEnter(contact)
    }
    
    // 'infoBar' attribute on Page (id=ContactFile_Details) at ContactFile_Details.pcf: line 11, column 71
    function infoBar_refreshVariables_6 (def :  pcf.ContactFileInfoBar) : void {
      def.refreshVariables(contact)
    }
    
    // EditButtons at ContactFile_Details.pcf: line 27, column 88
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // Page (id=ContactFile_Details) at ContactFile_Details.pcf: line 11, column 71
    static function parent_7 (contact :  Contact, startEdit :  boolean) : pcf.api.Destination {
      return pcf.ContactFile.createDestination(contact)
    }
    
    // 'startInEditMode' attribute on Page (id=ContactFile_Details) at ContactFile_Details.pcf: line 11, column 71
    function startInEditMode_8 () : java.lang.Boolean {
      return startEdit
    }
    
    override property get CurrentLocation () : pcf.ContactFile_Details {
      return super.CurrentLocation as pcf.ContactFile_Details
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get startEdit () : boolean {
      return getVariableValue("startEdit", 0) as java.lang.Boolean
    }
    
    property set startEdit ($arg :  boolean) {
      setVariableValue("startEdit", 0, $arg)
    }
    
    
  }
  
  
}