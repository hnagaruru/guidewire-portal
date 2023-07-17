package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/EditContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditContactPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/EditContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditContactPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  Contact) : int {
      return 0
    }
    
    static function __constructorIndex (contact :  Contact, canEdit :  Boolean) : int {
      return 1
    }
    
    // 'canEdit' attribute on Popup (id=EditContactPopup) at EditContactPopup.pcf: line 10, column 70
    function canEdit_4 () : java.lang.Boolean {
      return canEdit == null ? true : canEdit
    }
    
    // 'def' attribute on PanelRef at EditContactPopup.pcf: line 27, column 41
    function def_onEnter_2 (def :  pcf.ContactPanelSet) : void {
      def.onEnter(contact)
    }
    
    // 'def' attribute on PanelRef at EditContactPopup.pcf: line 27, column 41
    function def_refreshVariables_3 (def :  pcf.ContactPanelSet) : void {
      def.refreshVariables(contact)
    }
    
    // EditButtons at EditContactPopup.pcf: line 24, column 32
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'pickValue' attribute on EditButtons at EditContactPopup.pcf: line 24, column 32
    function pickValue_0 () : Contact {
      return contact
    }
    
    // 'startInEditMode' attribute on Popup (id=EditContactPopup) at EditContactPopup.pcf: line 10, column 70
    function startInEditMode_5 () : java.lang.Boolean {
      return canEdit == null ? contact.New : canEdit
    }
    
    override property get CurrentLocation () : pcf.EditContactPopup {
      return super.CurrentLocation as pcf.EditContactPopup
    }
    
    property get canEdit () : Boolean {
      return getVariableValue("canEdit", 0) as Boolean
    }
    
    property set canEdit ($arg :  Boolean) {
      setVariableValue("canEdit", 0, $arg)
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    
  }
  
  
}