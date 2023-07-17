package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountLocationDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountLocationDetailInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountLocationDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountLocationDetailInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at AccountLocationDetailInputSet.pcf: line 42, column 43
    function def_onEnter_17 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.accountlocation.AccountLocationAddressOwner(accountLocation))
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at AccountLocationDetailInputSet.pcf: line 51, column 19
    function def_onEnter_24 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.EntityPhoneDelegate(accountLocation, accountLocation#Phone), DisplayKey.get("Web.Account.Locations.Phone")))
    }
    
    // 'def' attribute on InputSetRef at AccountLocationDetailInputSet.pcf: line 42, column 43
    function def_refreshVariables_18 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.accountlocation.AccountLocationAddressOwner(accountLocation))
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at AccountLocationDetailInputSet.pcf: line 51, column 19
    function def_refreshVariables_25 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.EntityPhoneDelegate(accountLocation, accountLocation#Phone), DisplayKey.get("Web.Account.Locations.Phone")))
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at AccountLocationDetailInputSet.pcf: line 34, column 45
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountLocation.LocationCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LocationName_Input) at AccountLocationDetailInputSet.pcf: line 39, column 45
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountLocation.LocationName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at AccountLocationDetailInputSet.pcf: line 47, column 44
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountLocation.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EmployeeCount_Input) at AccountLocationDetailInputSet.pcf: line 57, column 38
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountLocation.EmployeeCount = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=NonSpecificLocation_Input) at AccountLocationDetailInputSet.pcf: line 27, column 43
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      accountLocation.NonSpecific = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=NonSpecificLocation_Input) at AccountLocationDetailInputSet.pcf: line 27, column 43
    function editable_3 () : java.lang.Boolean {
      return accountLocation.New
    }
    
    // 'initialValue' attribute on Variable at AccountLocationDetailInputSet.pcf: line 13, column 57
    function initialValue_0 () : gw.api.contact.AddressAutocompleteHandler {
      return new gw.api.contact.AddressAutocompleteHandler("city","Country,City,County,State,PostalCode",true)
    }
    
    // 'initialValue' attribute on Variable at AccountLocationDetailInputSet.pcf: line 17, column 57
    function initialValue_1 () : gw.api.contact.AddressAutocompleteHandler {
      return new gw.api.contact.AddressAutocompleteHandler("county","Country,City,County,State,PostalCode",true)
    }
    
    // 'initialValue' attribute on Variable at AccountLocationDetailInputSet.pcf: line 21, column 57
    function initialValue_2 () : gw.api.contact.AddressAutocompleteHandler {
      return new gw.api.contact.AddressAutocompleteHandler("postalcode","Country,City,County,State,PostalCode",true)
    }
    
    // 'mode' attribute on InputSetRef at AccountLocationDetailInputSet.pcf: line 42, column 43
    function mode_19 () : java.lang.Object {
      return accountLocation.CountryCode
    }
    
    // 'value' attribute on BooleanRadioInput (id=NonSpecificLocation_Input) at AccountLocationDetailInputSet.pcf: line 27, column 43
    function valueRoot_6 () : java.lang.Object {
      return accountLocation
    }
    
    // 'value' attribute on TextInput (id=LocationName_Input) at AccountLocationDetailInputSet.pcf: line 39, column 45
    function value_13 () : java.lang.String {
      return accountLocation.LocationName
    }
    
    // 'value' attribute on TextInput (id=AddressDescription_Input) at AccountLocationDetailInputSet.pcf: line 47, column 44
    function value_20 () : java.lang.String {
      return accountLocation.Description
    }
    
    // 'value' attribute on TextInput (id=EmployeeCount_Input) at AccountLocationDetailInputSet.pcf: line 57, column 38
    function value_26 () : java.lang.Integer {
      return accountLocation.EmployeeCount
    }
    
    // 'value' attribute on BooleanRadioInput (id=NonSpecificLocation_Input) at AccountLocationDetailInputSet.pcf: line 27, column 43
    function value_4 () : java.lang.Boolean {
      return accountLocation.NonSpecific
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at AccountLocationDetailInputSet.pcf: line 34, column 45
    function value_9 () : java.lang.String {
      return accountLocation.LocationCode
    }
    
    property get accountLocation () : AccountLocation {
      return getRequireValue("accountLocation", 0) as AccountLocation
    }
    
    property set accountLocation ($arg :  AccountLocation) {
      setRequireValue("accountLocation", 0, $arg)
    }
    
    property get cityhandler () : gw.api.contact.AddressAutocompleteHandler {
      return getVariableValue("cityhandler", 0) as gw.api.contact.AddressAutocompleteHandler
    }
    
    property set cityhandler ($arg :  gw.api.contact.AddressAutocompleteHandler) {
      setVariableValue("cityhandler", 0, $arg)
    }
    
    property get countyhandler () : gw.api.contact.AddressAutocompleteHandler {
      return getVariableValue("countyhandler", 0) as gw.api.contact.AddressAutocompleteHandler
    }
    
    property set countyhandler ($arg :  gw.api.contact.AddressAutocompleteHandler) {
      setVariableValue("countyhandler", 0, $arg)
    }
    
    property get pchandler () : gw.api.contact.AddressAutocompleteHandler {
      return getVariableValue("pchandler", 0) as gw.api.contact.AddressAutocompleteHandler
    }
    
    property set pchandler ($arg :  gw.api.contact.AddressAutocompleteHandler) {
      setVariableValue("pchandler", 0, $arg)
    }
    
    
  }
  
  
}