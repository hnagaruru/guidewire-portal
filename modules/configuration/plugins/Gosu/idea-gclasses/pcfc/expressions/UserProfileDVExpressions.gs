package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UserProfileDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserProfileDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UserProfileDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserProfileDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at UserProfileDV.pcf: line 32, column 125
    function def_onEnter_11 (def :  pcf.AddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressInputSetAddressOwner(user.Contact.PrimaryAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef (id=HomePhone) at UserProfileDV.pcf: line 45, column 25
    function def_onEnter_18 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Contact#HomePhone), DisplayKey.get("Web.Admin.UserProfileDV.HomePhone")))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at UserProfileDV.pcf: line 48, column 25
    function def_onEnter_20 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Contact#WorkPhone), DisplayKey.get("Web.Admin.UserProfileDV.WorkPhone")))
    }
    
    // 'def' attribute on InputSetRef (id=CellPhone) at UserProfileDV.pcf: line 52, column 25
    function def_onEnter_22 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Person#CellPhone), DisplayKey.get("Web.Admin.UserProfileDV.CellPhone")))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at UserProfileDV.pcf: line 56, column 24
    function def_onEnter_24 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Contact#FaxPhone), DisplayKey.get("Web.Admin.UserProfileDV.FaxPhone")))
    }
    
    // 'def' attribute on InputSetRef (id=GlobalizationPreferences) at UserProfileDV.pcf: line 69, column 40
    function def_onEnter_34 (def :  pcf.UserPreferencesInputSet) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on InputSetRef at UserProfileDV.pcf: line 32, column 125
    function def_refreshVariables_12 (def :  pcf.AddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressInputSetAddressOwner(user.Contact.PrimaryAddress, false, true))
    }
    
    // 'def' attribute on InputSetRef (id=HomePhone) at UserProfileDV.pcf: line 45, column 25
    function def_refreshVariables_19 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Contact#HomePhone), DisplayKey.get("Web.Admin.UserProfileDV.HomePhone")))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at UserProfileDV.pcf: line 48, column 25
    function def_refreshVariables_21 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Contact#WorkPhone), DisplayKey.get("Web.Admin.UserProfileDV.WorkPhone")))
    }
    
    // 'def' attribute on InputSetRef (id=CellPhone) at UserProfileDV.pcf: line 52, column 25
    function def_refreshVariables_23 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Person#CellPhone), DisplayKey.get("Web.Admin.UserProfileDV.CellPhone")))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at UserProfileDV.pcf: line 56, column 24
    function def_refreshVariables_25 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(user.Contact, Contact#FaxPhone), DisplayKey.get("Web.Admin.UserProfileDV.FaxPhone")))
    }
    
    // 'def' attribute on InputSetRef (id=GlobalizationPreferences) at UserProfileDV.pcf: line 69, column 40
    function def_refreshVariables_35 (def :  pcf.UserPreferencesInputSet) : void {
      def.refreshVariables(user)
    }
    
    // 'value' attribute on TextInput (id=EmployeeNumber_Input) at UserProfileDV.pcf: line 17, column 46
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.Contact.EmployeeNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at UserProfileDV.pcf: line 39, column 46
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.Contact.PrimaryPhone = (__VALUE_TO_SET as typekey.PrimaryPhoneType)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at UserProfileDV.pcf: line 61, column 45
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.Contact.EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at UserProfileDV.pcf: line 66, column 45
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.Contact.EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=UseOrganizationAddress_Input) at UserProfileDV.pcf: line 24, column 37
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      user.UseOrgAddress = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on InputSet at UserProfileDV.pcf: line 30, column 24
    function editable_13 () : java.lang.Boolean {
      return !user.UseOrgAddress
    }
    
    // 'onChange' attribute on PostOnChange at UserProfileDV.pcf: line 26, column 50
    function onChange_4 () : void {
      user.maybeSetContactInfo()
    }
    
    // 'value' attribute on TextInput (id=EmployeeNumber_Input) at UserProfileDV.pcf: line 17, column 46
    function valueRoot_2 () : java.lang.Object {
      return user.Contact
    }
    
    // 'value' attribute on BooleanRadioInput (id=UseOrganizationAddress_Input) at UserProfileDV.pcf: line 24, column 37
    function valueRoot_8 () : java.lang.Object {
      return user
    }
    
    // 'value' attribute on TextInput (id=EmployeeNumber_Input) at UserProfileDV.pcf: line 17, column 46
    function value_0 () : java.lang.String {
      return user.Contact.EmployeeNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at UserProfileDV.pcf: line 39, column 46
    function value_14 () : typekey.PrimaryPhoneType {
      return user.Contact.PrimaryPhone
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at UserProfileDV.pcf: line 61, column 45
    function value_26 () : java.lang.String {
      return user.Contact.EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at UserProfileDV.pcf: line 66, column 45
    function value_30 () : java.lang.String {
      return user.Contact.EmailAddress2
    }
    
    // 'value' attribute on BooleanRadioInput (id=UseOrganizationAddress_Input) at UserProfileDV.pcf: line 24, column 37
    function value_6 () : java.lang.Boolean {
      return user.UseOrgAddress
    }
    
    // 'visible' attribute on BooleanRadioInput (id=UseOrganizationAddress_Input) at UserProfileDV.pcf: line 24, column 37
    function visible_5 () : java.lang.Boolean {
      return user.ExternalUser
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}