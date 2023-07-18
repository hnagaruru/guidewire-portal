package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/AddressOwnerAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressOwnerAddressInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/AddressOwnerAddressInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressOwnerAddressInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerAddressInputSet.pcf: line 17, column 41
    function def_onEnter_0 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerAddressInputSet.pcf: line 17, column 41
    function def_onEnter_2 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerAddressInputSet.pcf: line 17, column 41
    function def_onEnter_4 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerAddressInputSet.pcf: line 17, column 41
    function def_refreshVariables_1 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerAddressInputSet.pcf: line 17, column 41
    function def_refreshVariables_3 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerAddressInputSet.pcf: line 17, column 41
    function def_refreshVariables_5 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'mode' attribute on InputSetRef (id=globalAddressContainer) at AddressOwnerAddressInputSet.pcf: line 17, column 41
    function mode_6 () : java.lang.Object {
      return addressOwner.SelectedMode
    }
    
    property get addressOwner () : gw.api.address.AddressOwner {
      return getRequireValue("addressOwner", 0) as gw.api.address.AddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.AddressOwner) {
      setRequireValue("addressOwner", 0, $arg)
    }
    
    
  }
  
  
}