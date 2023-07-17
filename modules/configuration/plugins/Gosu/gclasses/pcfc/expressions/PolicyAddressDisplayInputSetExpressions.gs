package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/PolicyAddressDisplayInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyAddressDisplayInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/PolicyAddressDisplayInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyAddressDisplayInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at PolicyAddressDisplayInputSet.pcf: line 23, column 41
    function def_onEnter_1 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at PolicyAddressDisplayInputSet.pcf: line 23, column 41
    function def_onEnter_3 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at PolicyAddressDisplayInputSet.pcf: line 23, column 41
    function def_onEnter_5 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at PolicyAddressDisplayInputSet.pcf: line 23, column 41
    function def_refreshVariables_2 (def :  pcf.GlobalAddressInputSet_BigToSmall) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at PolicyAddressDisplayInputSet.pcf: line 23, column 41
    function def_refreshVariables_4 (def :  pcf.GlobalAddressInputSet_PostCodeBeforeCity) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on InputSetRef (id=globalAddressContainer) at PolicyAddressDisplayInputSet.pcf: line 23, column 41
    function def_refreshVariables_6 (def :  pcf.GlobalAddressInputSet_default) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'initialValue' attribute on Variable at PolicyAddressDisplayInputSet.pcf: line 18, column 43
    function initialValue_0 () : gw.api.address.AddressOwner {
      return period.Archived ? null : new gw.pcf.policysummary.PolicyInfoAddressOwner(new gw.globalization.PolicyAddressAdapter(period.PolicyAddress), showLabel)
    }
    
    // 'mode' attribute on InputSetRef (id=globalAddressContainer) at PolicyAddressDisplayInputSet.pcf: line 23, column 41
    function mode_7 () : java.lang.Object {
      return addressOwner.SelectedMode
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at PolicyAddressDisplayInputSet.pcf: line 28, column 40
    function valueRoot_9 () : java.lang.Object {
      return period.PolicyAddress
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at PolicyAddressDisplayInputSet.pcf: line 32, column 49
    function value_11 () : java.lang.String {
      return period.PolicyAddress.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=AddressType_Input) at PolicyAddressDisplayInputSet.pcf: line 28, column 40
    function value_8 () : typekey.AddressType {
      return period.PolicyAddress.AddressType
    }
    
    property get addressOwner () : gw.api.address.AddressOwner {
      return getVariableValue("addressOwner", 0) as gw.api.address.AddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.AddressOwner) {
      setVariableValue("addressOwner", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get showLabel () : boolean {
      return getRequireValue("showLabel", 0) as java.lang.Boolean
    }
    
    property set showLabel ($arg :  boolean) {
      setRequireValue("showLabel", 0, $arg)
    }
    
    
  }
  
  
}