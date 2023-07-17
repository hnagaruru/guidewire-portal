package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/AddressShortInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressShortInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/AddressShortInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressShortInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressShortInputSet.pcf: line 18, column 41
    function def_onEnter_1 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressShortInputSet.pcf: line 18, column 41
    function def_onEnter_3 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressShortInputSet.pcf: line 18, column 41
    function def_onEnter_5 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressShortInputSet.pcf: line 18, column 41
    function def_refreshVariables_2 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressShortInputSet.pcf: line 18, column 41
    function def_refreshVariables_4 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at AddressShortInputSet.pcf: line 18, column 41
    function def_refreshVariables_6 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at AddressShortInputSet.pcf: line 28, column 36
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      address.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at AddressShortInputSet.pcf: line 13, column 43
    function initialValue_0 () : gw.api.address.AddressOwner {
      return new gw.pcf.policysummary.PolicyInfoAddressOwner(new gw.api.address.AddressAutofillableDelegate(address), true)
    }
    
    // 'mode' attribute on InputSetRef (id=globalAddressContainer) at AddressShortInputSet.pcf: line 18, column 41
    function mode_7 () : java.lang.Object {
      return addressOwner.SelectedMode
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at AddressShortInputSet.pcf: line 23, column 40
    function valueRoot_9 () : java.lang.Object {
      return address
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at AddressShortInputSet.pcf: line 28, column 36
    function value_11 () : java.lang.String {
      return address.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at AddressShortInputSet.pcf: line 23, column 40
    function value_8 () : typekey.AddressType {
      return address.AddressType
    }
    
    property get address () : Address {
      return getRequireValue("address", 0) as Address
    }
    
    property set address ($arg :  Address) {
      setRequireValue("address", 0, $arg)
    }
    
    property get addressOwner () : gw.api.address.AddressOwner {
      return getVariableValue("addressOwner", 0) as gw.api.address.AddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.AddressOwner) {
      setVariableValue("addressOwner", 0, $arg)
    }
    
    
  }
  
  
}