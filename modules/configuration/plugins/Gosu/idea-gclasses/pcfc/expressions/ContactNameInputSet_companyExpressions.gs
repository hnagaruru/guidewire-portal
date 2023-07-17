package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/ContactNameInputSet.company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactNameInputSet_companyExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/ContactNameInputSet.company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactNameInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ContactNameInputSet.company.pcf: line 20, column 54
    function def_onEnter_1 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.contact.ContactNameNoSummaryOwner(contactNameDelegate))
    }
    
    // 'def' attribute on InputSetRef at ContactNameInputSet.company.pcf: line 20, column 54
    function def_onEnter_3 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.contact.ContactNameNoSummaryOwner(contactNameDelegate))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at ContactNameInputSet.company.pcf: line 24, column 23
    function def_onEnter_6 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, contact#WorkPhone),DisplayKey.get("Web.ContactDetail.Company.WorkPhone") ))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at ContactNameInputSet.company.pcf: line 28, column 22
    function def_onEnter_8 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, contact#FaxPhone),DisplayKey.get("Web.ContactDetail.Company.FaxPhone")))
    }
    
    // 'def' attribute on InputSetRef at ContactNameInputSet.company.pcf: line 20, column 54
    function def_refreshVariables_2 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.contact.ContactNameNoSummaryOwner(contactNameDelegate))
    }
    
    // 'def' attribute on InputSetRef at ContactNameInputSet.company.pcf: line 20, column 54
    function def_refreshVariables_4 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.contact.ContactNameNoSummaryOwner(contactNameDelegate))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at ContactNameInputSet.company.pcf: line 24, column 23
    function def_refreshVariables_7 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, contact#WorkPhone),DisplayKey.get("Web.ContactDetail.Company.WorkPhone") ))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at ContactNameInputSet.company.pcf: line 28, column 22
    function def_refreshVariables_9 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(contact, contact#FaxPhone),DisplayKey.get("Web.ContactDetail.Company.FaxPhone")))
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at ContactNameInputSet.company.pcf: line 33, column 51
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Company).EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at ContactNameInputSet.company.pcf: line 38, column 51
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Company).EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ContactNameInputSet.company.pcf: line 15, column 47
    function initialValue_0 () : gw.api.name.ContactNameDelegate {
      return new gw.api.name.ContactNameDelegate(contact)
    }
    
    // 'mode' attribute on InputSetRef at ContactNameInputSet.company.pcf: line 20, column 54
    function mode_5 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at ContactNameInputSet.company.pcf: line 33, column 51
    function valueRoot_12 () : java.lang.Object {
      return (contact as Company)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at ContactNameInputSet.company.pcf: line 33, column 51
    function value_10 () : java.lang.String {
      return (contact as Company).EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at ContactNameInputSet.company.pcf: line 38, column 51
    function value_14 () : java.lang.String {
      return (contact as Company).EmailAddress2
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get contactNameDelegate () : gw.api.name.ContactNameDelegate {
      return getVariableValue("contactNameDelegate", 0) as gw.api.name.ContactNameDelegate
    }
    
    property set contactNameDelegate ($arg :  gw.api.name.ContactNameDelegate) {
      setVariableValue("contactNameDelegate", 0, $arg)
    }
    
    
  }
  
  
}