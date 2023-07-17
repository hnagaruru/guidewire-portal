package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/EditPolicyAddressPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditPolicyAddressPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/EditPolicyAddressPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditPolicyAddressPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, isNew :  boolean) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=EditPolicyAddressPopup) at EditPolicyAddressPopup.pcf: line 10, column 73
    function beforeCommit_14 (pickedValue :  java.lang.Object) : void {
      period.PolicyAddress.copyFromAddress(tmpAddress);  tmpAddress.remove()
    }
    
    // 'def' attribute on InputSetRef at EditPolicyAddressPopup.pcf: line 42, column 112
    function def_onEnter_4 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressInputSetAddressOwner(tmpAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef at EditPolicyAddressPopup.pcf: line 42, column 112
    function def_refreshVariables_5 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressInputSetAddressOwner(tmpAddress, false, true))
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at EditPolicyAddressPopup.pcf: line 54, column 47
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      tmpAddress.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at EditPolicyAddressPopup.pcf: line 49, column 48
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      tmpAddress.AddressType = (__VALUE_TO_SET as typekey.AddressType)
    }
    
    // 'initialValue' attribute on Variable at EditPolicyAddressPopup.pcf: line 22, column 23
    function initialValue_0 () : Address {
      return initializePolicyAddressAndCreateTmpAddress()
    }
    
    // 'initialValue' attribute on Variable at EditPolicyAddressPopup.pcf: line 27, column 75
    function initialValue_1 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> period.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at EditPolicyAddressPopup.pcf: line 32, column 33
    function initialValue_2 () : java.lang.Boolean {
      return period != null ? openForEditInit.get() : CurrentLocation.InEditMode
    }
    
    // EditButtons at EditPolicyAddressPopup.pcf: line 35, column 23
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at EditPolicyAddressPopup.pcf: line 49, column 48
    function valueRoot_8 () : java.lang.Object {
      return tmpAddress
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at EditPolicyAddressPopup.pcf: line 54, column 47
    function value_10 () : java.lang.String {
      return tmpAddress.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at EditPolicyAddressPopup.pcf: line 49, column 48
    function value_6 () : typekey.AddressType {
      return tmpAddress.AddressType
    }
    
    override property get CurrentLocation () : pcf.EditPolicyAddressPopup {
      return super.CurrentLocation as pcf.EditPolicyAddressPopup
    }
    
    property get isNew () : boolean {
      return getVariableValue("isNew", 0) as java.lang.Boolean
    }
    
    property set isNew ($arg :  boolean) {
      setVariableValue("isNew", 0, $arg)
    }
    
    property get openForEdit () : java.lang.Boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  java.lang.Boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get openForEditInit () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return getVariableValue("openForEditInit", 0) as gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>
    }
    
    property set openForEditInit ($arg :  gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>) {
      setVariableValue("openForEditInit", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    property get tmpAddress () : Address {
      return getVariableValue("tmpAddress", 0) as Address
    }
    
    property set tmpAddress ($arg :  Address) {
      setVariableValue("tmpAddress", 0, $arg)
    }
    
    function initializePolicyAddressAndCreateTmpAddress() : Address {
      if (isNew) {
        // we do this here because none of the page before/after triggers occur at the right time
        var addr = new Address();
        period.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact.addAddress(addr);
        period.PolicyAddress.assignToSource(addr);
      }
      return period.PolicyAddress.copyToNewAddress()
    }
    
    
  }
  
  
}