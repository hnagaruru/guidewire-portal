package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/LicenseInputSet.PolicyDriver.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LicenseInputSet_PolicyDriverExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/LicenseInputSet.PolicyDriver.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LicenseInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at LicenseInputSet.PolicyDriver.pcf: line 24, column 43
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriver.LicenseNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=LicenseState_Input) at LicenseInputSet.PolicyDriver.pcf: line 32, column 41
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriver.LicenseState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'initialValue' attribute on Variable at LicenseInputSet.PolicyDriver.pcf: line 18, column 35
    function initialValue_0 () : entity.PolicyDriver {
      return policyContactRole as PolicyDriver
    }
    
    // 'required' attribute on TextInput (id=LicenseNumber_Input) at LicenseInputSet.PolicyDriver.pcf: line 24, column 43
    function required_1 () : java.lang.Boolean {
      return (policyDriver.Excluded) ? false : true
    }
    
    // 'valueRange' attribute on RangeInput (id=LicenseState_Input) at LicenseInputSet.PolicyDriver.pcf: line 32, column 41
    function valueRange_10 () : java.lang.Object {
      return Jurisdiction.getTypeKeys(false).where(\ s -> s.hasCategory(address.Country))
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at LicenseInputSet.PolicyDriver.pcf: line 24, column 43
    function valueRoot_4 () : java.lang.Object {
      return policyDriver
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at LicenseInputSet.PolicyDriver.pcf: line 24, column 43
    function value_2 () : java.lang.String {
      return policyDriver.LicenseNumber
    }
    
    // 'value' attribute on RangeInput (id=LicenseState_Input) at LicenseInputSet.PolicyDriver.pcf: line 32, column 41
    function value_7 () : typekey.Jurisdiction {
      return policyDriver.LicenseState
    }
    
    // 'valueRange' attribute on RangeInput (id=LicenseState_Input) at LicenseInputSet.PolicyDriver.pcf: line 32, column 41
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LicenseState_Input) at LicenseInputSet.PolicyDriver.pcf: line 32, column 41
    function verifyValueRangeIsAllowedType_11 ($$arg :  typekey.Jurisdiction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LicenseState_Input) at LicenseInputSet.PolicyDriver.pcf: line 32, column 41
    function verifyValueRange_12 () : void {
      var __valueRangeArg = Jurisdiction.getTypeKeys(false).where(\ s -> s.hasCategory(address.Country))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    property get address () : Address {
      return getRequireValue("address", 0) as Address
    }
    
    property set address ($arg :  Address) {
      setRequireValue("address", 0, $arg)
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getRequireValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setRequireValue("policyContactRole", 0, $arg)
    }
    
    property get policyDriver () : entity.PolicyDriver {
      return getVariableValue("policyDriver", 0) as entity.PolicyDriver
    }
    
    property set policyDriver ($arg :  entity.PolicyDriver) {
      setVariableValue("policyDriver", 0, $arg)
    }
    
    
  }
  
  
}