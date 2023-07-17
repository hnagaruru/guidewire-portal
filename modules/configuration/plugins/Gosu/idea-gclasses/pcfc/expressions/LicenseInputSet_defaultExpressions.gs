package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/LicenseInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LicenseInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/LicenseInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LicenseInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at LicenseInputSet.default.pcf: line 24, column 50
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Person).LicenseNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=LicenseState_Input) at LicenseInputSet.default.pcf: line 31, column 41
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Person).LicenseState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'initialValue' attribute on Variable at LicenseInputSet.default.pcf: line 18, column 30
    function initialValue_0 () : entity.Contact {
      return policyContactRole.AccountContactRole.AccountContact.Contact
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at LicenseInputSet.default.pcf: line 24, column 50
    function valueRoot_3 () : java.lang.Object {
      return (contact as Person)
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at LicenseInputSet.default.pcf: line 24, column 50
    function value_1 () : java.lang.String {
      return (contact as Person).LicenseNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=LicenseState_Input) at LicenseInputSet.default.pcf: line 31, column 41
    function value_5 () : typekey.Jurisdiction {
      return (contact as Person).LicenseState
    }
    
    property get address () : Address {
      return getRequireValue("address", 0) as Address
    }
    
    property set address ($arg :  Address) {
      setRequireValue("address", 0, $arg)
    }
    
    property get contact () : entity.Contact {
      return getVariableValue("contact", 0) as entity.Contact
    }
    
    property set contact ($arg :  entity.Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getRequireValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setRequireValue("policyContactRole", 0, $arg)
    }
    
    
  }
  
  
}