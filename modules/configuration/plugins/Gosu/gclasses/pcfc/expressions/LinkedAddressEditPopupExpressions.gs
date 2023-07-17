package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/LinkedAddressEditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LinkedAddressEditPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/LinkedAddressEditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LinkedAddressEditPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (address :  Address) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=UpdateAllButton) at LinkedAddressEditPopup.pcf: line 22, column 95
    function action_1 () : void {
      address.updateLinkedAddresses(); CurrentLocation.commit()
    }
    
    // 'action' attribute on ToolbarButton (id=UpdateAndUnlinkButton) at LinkedAddressEditPopup.pcf: line 26, column 101
    function action_2 () : void {
      address.unlink(); CurrentLocation.commit()
    }
    
    // 'def' attribute on PanelRef at LinkedAddressEditPopup.pcf: line 34, column 48
    function def_onEnter_4 (def :  pcf.LinkedAddressContactsLV) : void {
      def.onEnter(address)
    }
    
    // 'def' attribute on InputSetRef at LinkedAddressEditPopup.pcf: line 49, column 32
    function def_onEnter_6 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressInputSetAddressOwner(address, false, true))
    }
    
    // 'def' attribute on PanelRef at LinkedAddressEditPopup.pcf: line 34, column 48
    function def_refreshVariables_5 (def :  pcf.LinkedAddressContactsLV) : void {
      def.refreshVariables(address)
    }
    
    // 'def' attribute on InputSetRef at LinkedAddressEditPopup.pcf: line 49, column 32
    function def_refreshVariables_7 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressInputSetAddressOwner(address, false, true))
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at LinkedAddressEditPopup.pcf: line 61, column 44
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      address.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at LinkedAddressEditPopup.pcf: line 56, column 48
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      address.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'initialValue' attribute on Variable at LinkedAddressEditPopup.pcf: line 15, column 23
    function initialValue_0 () : Address {
      return null
    }
    
    // EditButtons (id=CancelButton) at LinkedAddressEditPopup.pcf: line 31, column 34
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at LinkedAddressEditPopup.pcf: line 56, column 48
    function valueRoot_10 () : java.lang.Object {
      return address
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at LinkedAddressEditPopup.pcf: line 61, column 44
    function value_12 () : java.lang.String {
      return address.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at LinkedAddressEditPopup.pcf: line 56, column 48
    function value_8 () : typekey.AddressType {
      return address.AddressType
    }
    
    override property get CurrentLocation () : pcf.LinkedAddressEditPopup {
      return super.CurrentLocation as pcf.LinkedAddressEditPopup
    }
    
    property get address () : Address {
      return getVariableValue("address", 0) as Address
    }
    
    property set address ($arg :  Address) {
      setVariableValue("address", 0, $arg)
    }
    
    
  }
  
  
}