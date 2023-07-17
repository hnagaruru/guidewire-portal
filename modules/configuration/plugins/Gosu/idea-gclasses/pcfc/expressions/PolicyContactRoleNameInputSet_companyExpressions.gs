package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRoleNameInputSet.company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyContactRoleNameInputSet_companyExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRoleNameInputSet.company.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyContactRoleNameInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PolicyContactRoleNameInputSet.company.pcf: line 20, column 54
    function def_onEnter_1 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.contact.ContactNameNoSummaryOwner(policyContactRoleAdapter))
    }
    
    // 'def' attribute on InputSetRef at PolicyContactRoleNameInputSet.company.pcf: line 20, column 54
    function def_onEnter_3 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.contact.ContactNameNoSummaryOwner(policyContactRoleAdapter))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at PolicyContactRoleNameInputSet.company.pcf: line 24, column 23
    function def_onEnter_6 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(policyContactRole.AccountContactRole.AccountContact.Contact, Contact#WorkPhone),DisplayKey.get("Web.ContactDetail.Company.WorkPhone") ))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at PolicyContactRoleNameInputSet.company.pcf: line 28, column 22
    function def_onEnter_8 (def :  pcf.GlobalPhoneInputSet) : void {
      def.onEnter(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(policyContactRole.AccountContactRole.AccountContact.Contact, Contact#FaxPhone),DisplayKey.get("Web.ContactDetail.Company.FaxPhone")))
    }
    
    // 'def' attribute on InputSetRef at PolicyContactRoleNameInputSet.company.pcf: line 20, column 54
    function def_refreshVariables_2 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.contact.ContactNameNoSummaryOwner(policyContactRoleAdapter))
    }
    
    // 'def' attribute on InputSetRef at PolicyContactRoleNameInputSet.company.pcf: line 20, column 54
    function def_refreshVariables_4 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.contact.ContactNameNoSummaryOwner(policyContactRoleAdapter))
    }
    
    // 'def' attribute on InputSetRef (id=WorkPhone) at PolicyContactRoleNameInputSet.company.pcf: line 24, column 23
    function def_refreshVariables_7 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(policyContactRole.AccountContactRole.AccountContact.Contact, Contact#WorkPhone),DisplayKey.get("Web.ContactDetail.Company.WorkPhone") ))
    }
    
    // 'def' attribute on InputSetRef (id=FaxPhone) at PolicyContactRoleNameInputSet.company.pcf: line 28, column 22
    function def_refreshVariables_9 (def :  pcf.GlobalPhoneInputSet) : void {
      def.refreshVariables(new gw.api.phone.BasicPhoneOwner(new gw.api.phone.ContactPhoneDelegate(policyContactRole.AccountContactRole.AccountContact.Contact, Contact#FaxPhone),DisplayKey.get("Web.ContactDetail.Company.FaxPhone")))
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at PolicyContactRoleNameInputSet.company.pcf: line 33, column 90
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyContactRole.AccountContactRole.AccountContact.Contact.EmailAddress1 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at PolicyContactRoleNameInputSet.company.pcf: line 38, column 90
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyContactRole.AccountContactRole.AccountContact.Contact.EmailAddress2 = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRoleNameInputSet.company.pcf: line 15, column 61
    function initialValue_0 () : gw.globalization.PolicyContactRoleNameAdapter {
      return new gw.globalization.PolicyContactRoleNameAdapter(policyContactRole)
    }
    
    // 'mode' attribute on InputSetRef at PolicyContactRoleNameInputSet.company.pcf: line 20, column 54
    function mode_5 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at PolicyContactRoleNameInputSet.company.pcf: line 33, column 90
    function valueRoot_12 () : java.lang.Object {
      return policyContactRole.AccountContactRole.AccountContact.Contact
    }
    
    // 'value' attribute on TextInput (id=EmailAddress1_Input) at PolicyContactRoleNameInputSet.company.pcf: line 33, column 90
    function value_10 () : java.lang.String {
      return policyContactRole.AccountContactRole.AccountContact.Contact.EmailAddress1
    }
    
    // 'value' attribute on TextInput (id=EmailAddress2_Input) at PolicyContactRoleNameInputSet.company.pcf: line 38, column 90
    function value_14 () : java.lang.String {
      return policyContactRole.AccountContactRole.AccountContact.Contact.EmailAddress2
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