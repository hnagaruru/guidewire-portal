package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/ContactNameInputSet.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactNameInputSet_personExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/ContactNameInputSet.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactNameInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ContactNameInputSet.person.pcf: line 20, column 54
    function def_onEnter_1 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.RequiredBasicNameOwner(personNameDelegate))
    }
    
    // 'def' attribute on InputSetRef (id=HomePhone) at ContactNameInputSet.person.pcf: line 46, column 23
    function def_onEnter_18 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, contact#HomePhone),DisplayKey.get("Web.ContactDetail.Person.HomePhone"),(contact as Person).PrimaryPhone == TC_HOME))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at ContactNameInputSet.person.pcf: line 49, column 23
    function def_onEnter_20 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, contact#WorkPhone), DisplayKey.get("Web.ContactDetail.Person.WorkPhone"), (contact as Person).PrimaryPhone == TC_WORK))
    }
    
    // 'def' attribute on InputSetRef (id=CellPhone) at ContactNameInputSet.person.pcf: line 52, column 23
    function def_onEnter_22 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, Person#CellPhone), DisplayKey.get("Web.ContactDetail.Person.CellPhone"), (contact as Person).PrimaryPhone == TC_MOBILE))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at ContactNameInputSet.person.pcf: line 56, column 22
    function def_onEnter_24 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, contact#FaxPhone), DisplayKey.get("Web.ContactDetail.Person.FaxPhone"), false))
    }
    
    // 'def' attribute on InputSetRef at ContactNameInputSet.person.pcf: line 20, column 54
    function def_onEnter_3 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.api.name.RequiredBasicNameOwner(personNameDelegate))
    }
    
    // 'def' attribute on InputSetRef (id=HomePhone) at ContactNameInputSet.person.pcf: line 46, column 23
    function def_refreshVariables_19 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, contact#HomePhone),DisplayKey.get("Web.ContactDetail.Person.HomePhone"),(contact as Person).PrimaryPhone == TC_HOME))
    }
    
    // 'def' attribute on InputSetRef at ContactNameInputSet.person.pcf: line 20, column 54
    function def_refreshVariables_2 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.RequiredBasicNameOwner(personNameDelegate))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at ContactNameInputSet.person.pcf: line 49, column 23
    function def_refreshVariables_21 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, contact#WorkPhone), DisplayKey.get("Web.ContactDetail.Person.WorkPhone"), (contact as Person).PrimaryPhone == TC_WORK))
    }
    
    // 'def' attribute on InputSetRef (id=CellPhone) at ContactNameInputSet.person.pcf: line 52, column 23
    function def_refreshVariables_23 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, Person#CellPhone), DisplayKey.get("Web.ContactDetail.Person.CellPhone"), (contact as Person).PrimaryPhone == TC_MOBILE))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at ContactNameInputSet.person.pcf: line 56, column 22
    function def_refreshVariables_25 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.contact.PersonPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, contact#FaxPhone), DisplayKey.get("Web.ContactDetail.Person.FaxPhone"), false))
    }
    
    // 'def' attribute on InputSetRef at ContactNameInputSet.person.pcf: line 20, column 54
    function def_refreshVariables_4 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.RequiredBasicNameOwner(personNameDelegate))
    }
    
    // 'value' attribute on TypeKeyInput (id=MaritalStatus_Input) at ContactNameInputSet.person.pcf: line 33, column 42
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Person).MaritalStatus = (__VALUE_TO_SET as typekey.MaritalStatus)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at ContactNameInputSet.person.pcf: line 40, column 44
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Person).PrimaryPhone = (__VALUE_TO_SET as typekey.PrimaryPhoneType)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at ContactNameInputSet.person.pcf: line 61, column 50
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Person).EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at ContactNameInputSet.person.pcf: line 66, column 50
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Person).EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at ContactNameInputSet.person.pcf: line 26, column 48
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Person).DateOfBirth = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'initialValue' attribute on Variable at ContactNameInputSet.person.pcf: line 15, column 46
    function initialValue_0 () : gw.api.name.PersonNameDelegate {
      return new gw.api.name.PersonNameDelegate(contact as Person)
    }
    
    // 'mode' attribute on InputSetRef at ContactNameInputSet.person.pcf: line 20, column 54
    function mode_5 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at ContactNameInputSet.person.pcf: line 26, column 48
    function valueRoot_8 () : java.lang.Object {
      return (contact as Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=MaritalStatus_Input) at ContactNameInputSet.person.pcf: line 33, column 42
    function value_10 () : typekey.MaritalStatus {
      return (contact as Person).MaritalStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at ContactNameInputSet.person.pcf: line 40, column 44
    function value_14 () : typekey.PrimaryPhoneType {
      return (contact as Person).PrimaryPhone
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at ContactNameInputSet.person.pcf: line 61, column 50
    function value_26 () : java.lang.String {
      return (contact as Person).EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at ContactNameInputSet.person.pcf: line 66, column 50
    function value_30 () : java.lang.String {
      return (contact as Person).EmailAddress2
    }
    
    // 'value' attribute on DateInput (id=DateOfBirth_Input) at ContactNameInputSet.person.pcf: line 26, column 48
    function value_6 () : java.util.Date {
      return (contact as Person).DateOfBirth
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get personNameDelegate () : gw.api.name.PersonNameDelegate {
      return getVariableValue("personNameDelegate", 0) as gw.api.name.PersonNameDelegate
    }
    
    property set personNameDelegate ($arg :  gw.api.name.PersonNameDelegate) {
      setVariableValue("personNameDelegate", 0, $arg)
    }
    
    
  }
  
  
}