package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/new/CreateAccountContactInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CreateAccountContactInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/account/new/CreateAccountContactInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CreateAccountContactInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CreateAccountContactInputSet.default.pcf: line 22, column 54
    function def_onEnter_2 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.contact.ContactNameNoSummaryOwner(contactNameDelegate))
    }
    
    // 'def' attribute on InputSetRef at CreateAccountContactInputSet.default.pcf: line 22, column 54
    function def_onEnter_4 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.contact.ContactNameNoSummaryOwner(contactNameDelegate))
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at CreateAccountContactInputSet.default.pcf: line 26, column 19
    function def_onEnter_7 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(company, contact#WorkPhone),DisplayKey.get("Web.SubmissionWizard.Account.Applicant.Company.Phone") ))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at CreateAccountContactInputSet.default.pcf: line 30, column 22
    function def_onEnter_9 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(company, contact#FaxPhone), DisplayKey.get("Web.ContactDetail.Company.FaxPhone")))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at CreateAccountContactInputSet.default.pcf: line 30, column 22
    function def_refreshVariables_10 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(company, contact#FaxPhone), DisplayKey.get("Web.ContactDetail.Company.FaxPhone")))
    }
    
    // 'def' attribute on InputSetRef at CreateAccountContactInputSet.default.pcf: line 22, column 54
    function def_refreshVariables_3 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.contact.ContactNameNoSummaryOwner(contactNameDelegate))
    }
    
    // 'def' attribute on InputSetRef at CreateAccountContactInputSet.default.pcf: line 22, column 54
    function def_refreshVariables_5 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.contact.ContactNameNoSummaryOwner(contactNameDelegate))
    }
    
    // 'def' attribute on InputSetRef (id=Phone) at CreateAccountContactInputSet.default.pcf: line 26, column 19
    function def_refreshVariables_8 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(company, contact#WorkPhone),DisplayKey.get("Web.SubmissionWizard.Account.Applicant.Company.Phone") ))
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at CreateAccountContactInputSet.default.pcf: line 35, column 38
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      company.EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at CreateAccountContactInputSet.default.pcf: line 40, column 38
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      company.EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at CreateAccountContactInputSet.default.pcf: line 14, column 30
    function initialValue_0 () : entity.Company {
      return contact as Company
    }
    
    // 'initialValue' attribute on Variable at CreateAccountContactInputSet.default.pcf: line 19, column 47
    function initialValue_1 () : gw.api.name.ContactNameDelegate {
      return new gw.api.name.ContactNameDelegate(company)
    }
    
    // 'mode' attribute on InputSetRef at CreateAccountContactInputSet.default.pcf: line 22, column 54
    function mode_6 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at CreateAccountContactInputSet.default.pcf: line 35, column 38
    function valueRoot_13 () : java.lang.Object {
      return company
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at CreateAccountContactInputSet.default.pcf: line 35, column 38
    function value_11 () : java.lang.String {
      return company.EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at CreateAccountContactInputSet.default.pcf: line 40, column 38
    function value_15 () : java.lang.String {
      return company.EmailAddress2
    }
    
    property get company () : entity.Company {
      return getVariableValue("company", 0) as entity.Company
    }
    
    property set company ($arg :  entity.Company) {
      setVariableValue("company", 0, $arg)
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