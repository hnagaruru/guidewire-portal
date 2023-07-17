package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRoleNameInputSet.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyContactRoleNameInputSet_personExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRoleNameInputSet.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyContactRoleNameInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactRoleNameInputSet.person.pcf: line 20, column 54
    function def_onEnter_1 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.RequiredBasicNameOwner(policyContactRoleAdapter))
    }
    
    // 'def' attribute on InputSetRef (id=HomePhone) at PolicyContactRoleNameInputSet.person.pcf: line 46, column 23
    function def_onEnter_18 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(policyContactRole.AccountContactRole.AccountContact.Contact, Contact#HomePhone),DisplayKey.get("Web.ContactDetail.Person.HomePhone"),(policyContactRole.AccountContactRole.AccountContact.Contact as Person).PrimaryPhone == TC_HOME))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at PolicyContactRoleNameInputSet.person.pcf: line 49, column 23
    function def_onEnter_20 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate((policyContactRole.AccountContactRole.AccountContact.Contact as Person), Contact#WorkPhone), DisplayKey.get("Web.ContactDetail.Person.WorkPhone"), (policyContactRole.AccountContactRole.AccountContact.Contact as Person).PrimaryPhone == TC_WORK))
    }
    
    // 'def' attribute on InputSetRef (id=CellPhone) at PolicyContactRoleNameInputSet.person.pcf: line 53, column 23
    function def_onEnter_22 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate((policyContactRole.AccountContactRole.AccountContact.Contact as Person), Person#CellPhone), DisplayKey.get("Web.ContactDetail.Person.CellPhone"), (policyContactRole.AccountContactRole.AccountContact.Contact as Person).PrimaryPhone == TC_MOBILE))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at PolicyContactRoleNameInputSet.person.pcf: line 57, column 22
    function def_onEnter_24 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate((policyContactRole.AccountContactRole.AccountContact.Contact as Person), Contact#FaxPhone), DisplayKey.get("Web.ContactDetail.Person.FaxPhone"), false))
    }
    
    // 'def' attribute on InputSetRef at PolicyContactRoleNameInputSet.person.pcf: line 20, column 54
    function def_onEnter_3 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.api.name.RequiredBasicNameOwner(policyContactRoleAdapter))
    }
    
    // 'def' attribute on InputSetRef (id=HomePhone) at PolicyContactRoleNameInputSet.person.pcf: line 46, column 23
    function def_refreshVariables_19 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(policyContactRole.AccountContactRole.AccountContact.Contact, Contact#HomePhone),DisplayKey.get("Web.ContactDetail.Person.HomePhone"),(policyContactRole.AccountContactRole.AccountContact.Contact as Person).PrimaryPhone == TC_HOME))
    }
    
    // 'def' attribute on InputSetRef at PolicyContactRoleNameInputSet.person.pcf: line 20, column 54
    function def_refreshVariables_2 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.RequiredBasicNameOwner(policyContactRoleAdapter))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at PolicyContactRoleNameInputSet.person.pcf: line 49, column 23
    function def_refreshVariables_21 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate((policyContactRole.AccountContactRole.AccountContact.Contact as Person), Contact#WorkPhone), DisplayKey.get("Web.ContactDetail.Person.WorkPhone"), (policyContactRole.AccountContactRole.AccountContact.Contact as Person).PrimaryPhone == TC_WORK))
    }
    
    // 'def' attribute on InputSetRef (id=CellPhone) at PolicyContactRoleNameInputSet.person.pcf: line 53, column 23
    function def_refreshVariables_23 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate((policyContactRole.AccountContactRole.AccountContact.Contact as Person), Person#CellPhone), DisplayKey.get("Web.ContactDetail.Person.CellPhone"), (policyContactRole.AccountContactRole.AccountContact.Contact as Person).PrimaryPhone == TC_MOBILE))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at PolicyContactRoleNameInputSet.person.pcf: line 57, column 22
    function def_refreshVariables_25 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate((policyContactRole.AccountContactRole.AccountContact.Contact as Person), Contact#FaxPhone), DisplayKey.get("Web.ContactDetail.Person.FaxPhone"), false))
    }
    
    // 'def' attribute on InputSetRef at PolicyContactRoleNameInputSet.person.pcf: line 20, column 54
    function def_refreshVariables_4 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.RequiredBasicNameOwner(policyContactRoleAdapter))
    }
    
    // 'value' attribute on TypeKeyInput (id=MaritalStatus_Input) at PolicyContactRoleNameInputSet.person.pcf: line 33, column 42
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyContactRole.MaritalStatus = (__VALUE_TO_SET as typekey.MaritalStatus)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at PolicyContactRoleNameInputSet.person.pcf: line 40, column 44
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      (policyContactRole.AccountContactRole.AccountContact.Contact as Person).PrimaryPhone = (__VALUE_TO_SET as typekey.PrimaryPhoneType)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at PolicyContactRoleNameInputSet.person.pcf: line 62, column 102
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      (policyContactRole.AccountContactRole.AccountContact.Contact as Person).EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at PolicyContactRoleNameInputSet.person.pcf: line 67, column 102
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      (policyContactRole.AccountContactRole.AccountContact.Contact as Person).EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at PolicyContactRoleNameInputSet.person.pcf: line 26, column 46
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyContactRole.DateOfBirth = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRoleNameInputSet.person.pcf: line 15, column 61
    function initialValue_0 () : gw.globalization.PolicyContactRoleNameAdapter {
      return new gw.globalization.PolicyContactRoleNameAdapter(policyContactRole)
    }
    
    // 'mode' attribute on InputSetRef at PolicyContactRoleNameInputSet.person.pcf: line 20, column 54
    function mode_5 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at PolicyContactRoleNameInputSet.person.pcf: line 40, column 44
    function valueRoot_16 () : java.lang.Object {
      return (policyContactRole.AccountContactRole.AccountContact.Contact as Person)
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at PolicyContactRoleNameInputSet.person.pcf: line 26, column 46
    function valueRoot_8 () : java.lang.Object {
      return policyContactRole
    }
    
    // 'value' attribute on TypeKeyInput (id=MaritalStatus_Input) at PolicyContactRoleNameInputSet.person.pcf: line 33, column 42
    function value_10 () : typekey.MaritalStatus {
      return policyContactRole.MaritalStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at PolicyContactRoleNameInputSet.person.pcf: line 40, column 44
    function value_14 () : typekey.PrimaryPhoneType {
      return (policyContactRole.AccountContactRole.AccountContact.Contact as Person).PrimaryPhone
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at PolicyContactRoleNameInputSet.person.pcf: line 62, column 102
    function value_26 () : java.lang.String {
      return (policyContactRole.AccountContactRole.AccountContact.Contact as Person).EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at PolicyContactRoleNameInputSet.person.pcf: line 67, column 102
    function value_30 () : java.lang.String {
      return (policyContactRole.AccountContactRole.AccountContact.Contact as Person).EmailAddress2
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at PolicyContactRoleNameInputSet.person.pcf: line 26, column 46
    function value_6 () : java.util.Date {
      return policyContactRole.DateOfBirth
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getRequireValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setRequireValue("policyContactRole", 0, $arg)
    }
    
    property get policyContactRoleAdapter () : gw.globalization.PolicyContactRoleNameAdapter {
      return getVariableValue("policyContactRoleAdapter", 0) as gw.globalization.PolicyContactRoleNameAdapter
    }
    
    property set policyContactRoleAdapter ($arg :  gw.globalization.PolicyContactRoleNameAdapter) {
      setVariableValue("policyContactRoleAdapter", 0, $arg)
    }
    
    
  }
  
  
}