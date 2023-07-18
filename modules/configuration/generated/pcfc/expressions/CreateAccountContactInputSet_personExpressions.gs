package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/new/CreateAccountContactInputSet.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateAccountContactInputSet_personExpressions {
  @javax.annotation.Generated("config/web/pcf/account/new/CreateAccountContactInputSet.person.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateAccountContactInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=CellPhone) at CreateAccountContactInputSet.person.pcf: line 34, column 23
    function def_onEnter_11 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, person#CellPhone), DisplayKey.get("Web.ContactDetail.Person.CellPhone")))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at CreateAccountContactInputSet.person.pcf: line 38, column 22
    function def_onEnter_13 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, contact#FaxPhone), DisplayKey.get("Web.ContactDetail.Person.FaxPhone")))
    }
    
    // 'def' attribute on InputSetRef at CreateAccountContactInputSet.person.pcf: line 22, column 54
    function def_onEnter_2 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.RequiredBasicNameOwner(personNameDelegate))
    }
    
    // 'def' attribute on InputSetRef at CreateAccountContactInputSet.person.pcf: line 22, column 54
    function def_onEnter_4 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.api.name.RequiredBasicNameOwner(personNameDelegate))
    }
    
    // 'def' attribute on InputSetRef (id=HomePhone) at CreateAccountContactInputSet.person.pcf: line 26, column 23
    function def_onEnter_7 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, contact#HomePhone),DisplayKey.get("Web.ContactDetail.Person.HomePhone")))
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at CreateAccountContactInputSet.person.pcf: line 30, column 19
    function def_onEnter_9 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, contact#WorkPhone), DisplayKey.get("Web.ContactDetail.Person.WorkPhone")))
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at CreateAccountContactInputSet.person.pcf: line 30, column 19
    function def_refreshVariables_10 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, contact#WorkPhone), DisplayKey.get("Web.ContactDetail.Person.WorkPhone")))
    }
    
    // 'def' attribute on InputSetRef (id=CellPhone) at CreateAccountContactInputSet.person.pcf: line 34, column 23
    function def_refreshVariables_12 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, person#CellPhone), DisplayKey.get("Web.ContactDetail.Person.CellPhone")))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at CreateAccountContactInputSet.person.pcf: line 38, column 22
    function def_refreshVariables_14 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, contact#FaxPhone), DisplayKey.get("Web.ContactDetail.Person.FaxPhone")))
    }
    
    // 'def' attribute on InputSetRef at CreateAccountContactInputSet.person.pcf: line 22, column 54
    function def_refreshVariables_3 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.RequiredBasicNameOwner(personNameDelegate))
    }
    
    // 'def' attribute on InputSetRef at CreateAccountContactInputSet.person.pcf: line 22, column 54
    function def_refreshVariables_5 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.RequiredBasicNameOwner(personNameDelegate))
    }
    
    // 'def' attribute on InputSetRef (id=HomePhone) at CreateAccountContactInputSet.person.pcf: line 26, column 23
    function def_refreshVariables_8 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(person, contact#HomePhone),DisplayKey.get("Web.ContactDetail.Person.HomePhone")))
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at CreateAccountContactInputSet.person.pcf: line 45, column 45
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      person.PrimaryPhone = (__VALUE_TO_SET as typekey.PrimaryPhoneType)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at CreateAccountContactInputSet.person.pcf: line 50, column 37
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      person.EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at CreateAccountContactInputSet.person.pcf: line 55, column 37
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      person.EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at CreateAccountContactInputSet.person.pcf: line 14, column 29
    function initialValue_0 () : entity.Person {
      return contact as entity.Person
    }
    
    // 'initialValue' attribute on Variable at CreateAccountContactInputSet.person.pcf: line 19, column 46
    function initialValue_1 () : gw.api.name.PersonNameDelegate {
      return new gw.api.name.PersonNameDelegate(person)
    }
    
    // 'mode' attribute on InputSetRef at CreateAccountContactInputSet.person.pcf: line 22, column 54
    function mode_6 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at CreateAccountContactInputSet.person.pcf: line 45, column 45
    function valueRoot_17 () : java.lang.Object {
      return person
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPhone_Input) at CreateAccountContactInputSet.person.pcf: line 45, column 45
    function value_15 () : typekey.PrimaryPhoneType {
      return person.PrimaryPhone
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at CreateAccountContactInputSet.person.pcf: line 50, column 37
    function value_19 () : java.lang.String {
      return person.EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at CreateAccountContactInputSet.person.pcf: line 55, column 37
    function value_23 () : java.lang.String {
      return person.EmailAddress2
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get person () : entity.Person {
      return getVariableValue("person", 0) as entity.Person
    }
    
    property set person ($arg :  entity.Person) {
      setVariableValue("person", 0, $arg)
    }
    
    property get personNameDelegate () : gw.api.name.PersonNameDelegate {
      return getVariableValue("personNameDelegate", 0) as gw.api.name.PersonNameDelegate
    }
    
    property set personNameDelegate ($arg :  gw.api.name.PersonNameDelegate) {
      setVariableValue("personNameDelegate", 0, $arg)
    }
    
    
  }
  
  
}