package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/AccountSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/AccountSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_41 () : void {
      IndustryCodeSearchPopup.push(typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'pickLocation' attribute on OrgInput (id=ProducerOrganization_Input) at AccountSearchDV.pcf: line 89, column 42
    function action_52 () : void {
      OrganizationSearchPopup.push(null, true)
    }
    
    // 'pickLocation' attribute on ProducerCodeInput (id=ProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function action_60 () : void {
      ProducerCodeSearchPopup.push()
    }
    
    // 'pickLocation' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function action_dest_42 () : pcf.api.Destination {
      return pcf.IndustryCodeSearchPopup.createDestination(typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'pickLocation' attribute on OrgInput (id=ProducerOrganization_Input) at AccountSearchDV.pcf: line 89, column 42
    function action_dest_53 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null, true)
    }
    
    // 'pickLocation' attribute on ProducerCodeInput (id=ProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function action_dest_61 () : pcf.api.Destination {
      return pcf.ProducerCodeSearchPopup.createDestination()
    }
    
    // 'def' attribute on InputSetRef at AccountSearchDV.pcf: line 46, column 58
    function def_onEnter_15 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AccountSearchDV.pcf: line 46, column 58
    function def_onEnter_17 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AccountSearchDV.pcf: line 64, column 56
    function def_onEnter_28 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AccountSearchDV.pcf: line 64, column 56
    function def_onEnter_30 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AccountSearchDV.pcf: line 100, column 120
    function def_onEnter_69 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AccountAddressSearchOwner(accountAddressSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AccountSearchDV.pcf: line 115, column 41
    function def_onEnter_79 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at AccountSearchDV.pcf: line 46, column 58
    function def_refreshVariables_16 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AccountSearchDV.pcf: line 46, column 58
    function def_refreshVariables_18 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AccountSearchDV.pcf: line 64, column 56
    function def_refreshVariables_29 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AccountSearchDV.pcf: line 64, column 56
    function def_refreshVariables_31 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AccountSearchDV.pcf: line 100, column 120
    function def_refreshVariables_70 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AccountAddressSearchOwner(accountAddressSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at AccountSearchDV.pcf: line 115, column 41
    function def_refreshVariables_80 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at AccountSearchDV.pcf: line 42, column 47
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=FirstNameExact_Input) at AccountSearchDV.pcf: line 52, column 50
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.FirstNameExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=LastNameExact_Input) at AccountSearchDV.pcf: line 60, column 49
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.LastNameExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=CompanyNameExact_Input) at AccountSearchDV.pcf: line 70, column 50
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.CompanyNameExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at AccountSearchDV.pcf: line 75, column 44
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.OfficialId = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.IndustryCode = (__VALUE_TO_SET as entity.IndustryCode)
    }
    
    // 'value' attribute on OrgInput (id=ProducerOrganization_Input) at AccountSearchDV.pcf: line 89, column 42
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Producer = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on ProducerCodeInput (id=ProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ProducerCode = (__VALUE_TO_SET as entity.ProducerCode)
    }
    
    // 'value' attribute on CheckBoxInput (id=SearchRelatedAccountsOnly_Input) at AccountSearchDV.pcf: line 34, column 44
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchRelatedAccountsOnly = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Phone_Input) at AccountSearchDV.pcf: line 106, column 39
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Phone = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on OrgInput (id=ProducerOrganization_Input) at AccountSearchDV.pcf: line 89, column 42
    function editable_54 () : java.lang.Boolean {
      return not User.util.CurrentUser.ExternalUser
    }
    
    // 'helpText' attribute on TextInput (id=Phone_Input) at AccountSearchDV.pcf: line 106, column 39
    function helpText_71 () : java.lang.String {
      return DisplayKey.get("Java.PhoneUtil.Example.ToolTip", User.util.CurrentUser.UserDefaultPhoneCountry, gw.api.util.PhoneUtil.getExampleNumberWithExtension(User.util.CurrentUser.UserDefaultPhoneCountry))
    }
    
    // 'initialValue' attribute on Variable at AccountSearchDV.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return searchCriteria.RelatedTo != null
    }
    
    // 'initialValue' attribute on Variable at AccountSearchDV.pcf: line 22, column 61
    function initialValue_1 () : gw.globalization.AccountSearchCriteriaAdapter {
      return new gw.globalization.AccountSearchCriteriaAdapter(searchCriteria)
    }
    
    // 'initialValue' attribute on Variable at AccountSearchDV.pcf: line 27, column 60
    function initialValue_2 () : gw.globalization.AccountAddressSearchAdapter {
      return new gw.globalization.AccountAddressSearchAdapter(searchCriteria)
    }
    
    // 'inputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function inputConversion_43 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.findCode(VALUE, typekey.IndustryCodeType.TC_SIC)
    }
    
    // 'inputConversion' attribute on ProducerCodeInput (id=ProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function inputConversion_62 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.ProducerCodePickerUtil.convertValueFromString(VALUE, searchCriteria.ProducerCode)
    }
    
    // 'label' attribute on CheckBoxInput (id=SearchRelatedAccountsOnly_Input) at AccountSearchDV.pcf: line 34, column 44
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Web.AccountSearch.RelatedTo", relatedToAccount)
    }
    
    // 'mode' attribute on InputSetRef at AccountSearchDV.pcf: line 46, column 58
    function mode_19 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'onChange' attribute on PostOnChange at AccountSearchDV.pcf: line 36, column 102
    function onChange_3 () : void {
      searchCriteria.RelatedTo = searchRelatedAccountsOnly ? relatedToAccount : null
    }
    
    // 'outputConversion' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function outputConversion_44 (VALUE :  entity.IndustryCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'requestValidationExpression' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function requestValidationExpression_45 (VALUE :  entity.IndustryCode) : java.lang.Object {
      return gw.api.web.product.IndustryCodePickerUtil.validateValue(VALUE, null, null)
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at AccountSearchDV.pcf: line 42, column 47
    function valueRoot_13 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at AccountSearchDV.pcf: line 42, column 47
    function value_11 () : java.lang.String {
      return searchCriteria.AccountNumber
    }
    
    // 'value' attribute on CheckBoxInput (id=FirstNameExact_Input) at AccountSearchDV.pcf: line 52, column 50
    function value_20 () : java.lang.Boolean {
      return searchCriteria.FirstNameExact
    }
    
    // 'value' attribute on CheckBoxInput (id=LastNameExact_Input) at AccountSearchDV.pcf: line 60, column 49
    function value_24 () : java.lang.Boolean {
      return searchCriteria.LastNameExact
    }
    
    // 'value' attribute on CheckBoxInput (id=CompanyNameExact_Input) at AccountSearchDV.pcf: line 70, column 50
    function value_33 () : java.lang.Boolean {
      return searchCriteria.CompanyNameExact
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at AccountSearchDV.pcf: line 75, column 44
    function value_37 () : java.lang.String {
      return searchCriteria.OfficialId
    }
    
    // 'value' attribute on IndustryCodeInput (id=IndustryCode_Input) at IndustryCodeWidget.xml: line 5, column 47
    function value_46 () : entity.IndustryCode {
      return searchCriteria.IndustryCode
    }
    
    // 'value' attribute on OrgInput (id=ProducerOrganization_Input) at AccountSearchDV.pcf: line 89, column 42
    function value_55 () : entity.Organization {
      return searchCriteria.Producer
    }
    
    // 'value' attribute on CheckBoxInput (id=SearchRelatedAccountsOnly_Input) at AccountSearchDV.pcf: line 34, column 44
    function value_6 () : java.lang.Boolean {
      return searchRelatedAccountsOnly
    }
    
    // 'value' attribute on ProducerCodeInput (id=ProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function value_63 () : entity.ProducerCode {
      return searchCriteria.ProducerCode
    }
    
    // 'value' attribute on TextInput (id=Phone_Input) at AccountSearchDV.pcf: line 106, column 39
    function value_72 () : java.lang.String {
      return searchCriteria.Phone
    }
    
    // 'value' attribute on HiddenInput (id=Secure_Input) at AccountSearchDV.pcf: line 111, column 39
    function value_76 () : java.lang.String {
      return searchCriteria.Secure as String
    }
    
    // 'visible' attribute on CheckBoxInput (id=SearchRelatedAccountsOnly_Input) at AccountSearchDV.pcf: line 34, column 44
    function visible_4 () : java.lang.Boolean {
      return relatedToAccount != null
    }
    
    property get accountAddressSearchAdapter () : gw.globalization.AccountAddressSearchAdapter {
      return getVariableValue("accountAddressSearchAdapter", 0) as gw.globalization.AccountAddressSearchAdapter
    }
    
    property set accountAddressSearchAdapter ($arg :  gw.globalization.AccountAddressSearchAdapter) {
      setVariableValue("accountAddressSearchAdapter", 0, $arg)
    }
    
    property get accountSearchAdapter () : gw.globalization.AccountSearchCriteriaAdapter {
      return getVariableValue("accountSearchAdapter", 0) as gw.globalization.AccountSearchCriteriaAdapter
    }
    
    property set accountSearchAdapter ($arg :  gw.globalization.AccountSearchCriteriaAdapter) {
      setVariableValue("accountSearchAdapter", 0, $arg)
    }
    
    property get relatedToAccount () : Account {
      return getRequireValue("relatedToAccount", 0) as Account
    }
    
    property set relatedToAccount ($arg :  Account) {
      setRequireValue("relatedToAccount", 0, $arg)
    }
    
    property get searchCriteria () : gw.account.AccountSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.account.AccountSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.account.AccountSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get searchRelatedAccountsOnly () : boolean {
      return getVariableValue("searchRelatedAccountsOnly", 0) as java.lang.Boolean
    }
    
    property set searchRelatedAccountsOnly ($arg :  boolean) {
      setVariableValue("searchRelatedAccountsOnly", 0, $arg)
    }
    
    
  }
  
  
}