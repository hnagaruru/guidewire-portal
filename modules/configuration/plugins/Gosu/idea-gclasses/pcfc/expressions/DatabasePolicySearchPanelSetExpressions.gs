package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/DatabasePolicySearchPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DatabasePolicySearchPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/DatabasePolicySearchPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DatabasePolicySearchPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/DatabasePolicySearchPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at DatabasePolicySearchPanelSet.pcf: line 247, column 54
    function allCheckedRowsAction_175 (CheckedValues :  PolicyPeriodSummary[], CheckedValuesErrors :  java.util.Map) : void {
      searchCriteria.jumpToAssignUserRoleOwnerPopup(CheckedValues.cast(PolicyPeriodSummary), typekeyMenuItem)
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at DatabasePolicySearchPanelSet.pcf: line 247, column 54
    function label_174 () : java.lang.Object {
      return typekeyMenuItem.DisplayName
    }
    
    property get typekeyMenuItem () : typekey.UserRole {
      return getIteratedValue(2) as typekey.UserRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/DatabasePolicySearchPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicySearchDVExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Producer_Input) at DatabasePolicySearchPanelSet.pcf: line 183, column 46
    function action_112 () : void {
      OrganizationSearchPopup.push(null, true)
    }
    
    // 'pickLocation' attribute on ProducerCodeInput (id=ProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function action_120 () : void {
      ProducerCodeSearchPopup.push()
    }
    
    // 'pickLocation' attribute on OrgInput (id=Producer_Input) at DatabasePolicySearchPanelSet.pcf: line 183, column 46
    function action_dest_113 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null, true)
    }
    
    // 'pickLocation' attribute on ProducerCodeInput (id=ProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function action_dest_121 () : pcf.api.Destination {
      return pcf.ProducerCodeSearchPopup.createDestination()
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at DatabasePolicySearchPanelSet.pcf: line 208, column 31
    function available_136 () : java.lang.Boolean {
      return searchCriteria.DateCriteria.DateSearchType == DateSearchType.TC_FROMLIST
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at DatabasePolicySearchPanelSet.pcf: line 208, column 31
    function available_145 () : java.lang.Boolean {
      return searchCriteria.DateCriteria.DateSearchType == DateSearchType.TC_ENTEREDRANGE
    }
    
    // 'def' attribute on InputSetRef at DatabasePolicySearchPanelSet.pcf: line 219, column 45
    function def_onEnter_171 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at DatabasePolicySearchPanelSet.pcf: line 65, column 60
    function def_onEnter_22 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(policyNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at DatabasePolicySearchPanelSet.pcf: line 65, column 60
    function def_onEnter_24 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(policyNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at DatabasePolicySearchPanelSet.pcf: line 79, column 128
    function def_onEnter_35 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressCountryCityStatePostalCodeOwner (policyAddrAdapter))
    }
    
    // 'def' attribute on InputSetRef at DatabasePolicySearchPanelSet.pcf: line 88, column 60
    function def_onEnter_42 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(policyNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at DatabasePolicySearchPanelSet.pcf: line 88, column 60
    function def_onEnter_44 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(policyNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at DatabasePolicySearchPanelSet.pcf: line 219, column 45
    function def_refreshVariables_172 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on InputSetRef at DatabasePolicySearchPanelSet.pcf: line 65, column 60
    function def_refreshVariables_23 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(policyNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at DatabasePolicySearchPanelSet.pcf: line 65, column 60
    function def_refreshVariables_25 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(policyNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at DatabasePolicySearchPanelSet.pcf: line 79, column 128
    function def_refreshVariables_36 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressCountryCityStatePostalCodeOwner (policyAddrAdapter))
    }
    
    // 'def' attribute on InputSetRef at DatabasePolicySearchPanelSet.pcf: line 88, column 60
    function def_refreshVariables_43 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(policyNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at DatabasePolicySearchPanelSet.pcf: line 88, column 60
    function def_refreshVariables_45 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(policyNameAdapter))
    }
    
    // 'value' attribute on RangeInput (id=ProductName_Input) at DatabasePolicySearchPanelSet.pcf: line 169, column 54
    function defaultSetter_101 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Product = (__VALUE_TO_SET as gw.api.productmodel.Product)
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at DatabasePolicySearchPanelSet.pcf: line 176, column 47
    function defaultSetter_109 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at DatabasePolicySearchPanelSet.pcf: line 183, column 46
    function defaultSetter_116 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Producer = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on ProducerCodeInput (id=ProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function defaultSetter_124 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ProducerCode = (__VALUE_TO_SET as entity.ProducerCode)
    }
    
    // 'value' attribute on RangeInput (id=DateFieldToSearchType_Input) at DatabasePolicySearchPanelSet.pcf: line 201, column 59
    function defaultSetter_130 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateCriteria.DateFieldToSearch = (__VALUE_TO_SET as typekey.DateFieldsToSearchType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at DatabasePolicySearchPanelSet.pcf: line 208, column 31
    function defaultSetter_138 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateCriteria.DateRangeChoice = (__VALUE_TO_SET as typekey.DateRangeChoiceType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at DatabasePolicySearchPanelSet.pcf: line 208, column 31
    function defaultSetter_143 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateCriteria.DateSearchType = (__VALUE_TO_SET as typekey.DateSearchType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at DatabasePolicySearchPanelSet.pcf: line 208, column 31
    function defaultSetter_147 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateCriteria.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at DatabasePolicySearchPanelSet.pcf: line 208, column 31
    function defaultSetter_153 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateCriteria.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on RangeInput (id=SearchFor_Input) at DatabasePolicySearchPanelSet.pcf: line 56, column 85
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SearchObjectType = (__VALUE_TO_SET as gw.policy.PolicyPeriodSearchCriteria.PolicyPeriodSearchType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at DatabasePolicySearchPanelSet.pcf: line 208, column 31
    function defaultSetter_161 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateCriteria = (__VALUE_TO_SET as entity.DateCriteria)
    }
    
    // 'value' attribute on DateInput (id=AsOfDate_Input) at DatabasePolicySearchPanelSet.pcf: line 215, column 52
    function defaultSetter_167 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AsOfDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on CheckBoxInput (id=FirstNameExact_Input) at DatabasePolicySearchPanelSet.pcf: line 71, column 52
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.FirstNameExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=LastNameExact_Input) at DatabasePolicySearchPanelSet.pcf: line 77, column 51
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.LastNameExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Phone_Input) at DatabasePolicySearchPanelSet.pcf: line 85, column 57
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PrimaryInsuredPhone = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=CompanyNameExact_Input) at DatabasePolicySearchPanelSet.pcf: line 94, column 54
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.CompanyNameExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at DatabasePolicySearchPanelSet.pcf: line 100, column 48
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.OfficialId = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at DatabasePolicySearchPanelSet.pcf: line 108, column 51
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=IncludeArchived_Input) at DatabasePolicySearchPanelSet.pcf: line 46, column 73
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.IncludeArchived = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumberCriterion_Input) at DatabasePolicySearchPanelSet.pcf: line 115, column 70
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=SubmissionNumber_Input) at DatabasePolicySearchPanelSet.pcf: line 122, column 70
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.JobNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AssignedRisk_Input) at DatabasePolicySearchPanelSet.pcf: line 128, column 50
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AssignedRisk = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at DatabasePolicySearchPanelSet.pcf: line 136, column 43
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.UWCompany = (__VALUE_TO_SET as entity.UWCompany)
    }
    
    // 'value' attribute on TypeKeyInput (id=RejectReason_Input) at DatabasePolicySearchPanelSet.pcf: line 144, column 70
    function defaultSetter_84 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.RejectReason = (__VALUE_TO_SET as typekey.ReasonCode)
    }
    
    // 'value' attribute on TypeKeyInput (id=NonRenewalCode_Input) at DatabasePolicySearchPanelSet.pcf: line 152, column 67
    function defaultSetter_90 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.NonRenewalCode = (__VALUE_TO_SET as typekey.NonRenewalCode)
    }
    
    // 'value' attribute on TypeKeyInput (id=AuditMethod_Input) at DatabasePolicySearchPanelSet.pcf: line 160, column 51
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ActualAuditMethod = (__VALUE_TO_SET as typekey.AuditMethod)
    }
    
    // 'editable' attribute on OrgInput (id=Producer_Input) at DatabasePolicySearchPanelSet.pcf: line 183, column 46
    function editable_114 () : java.lang.Boolean {
      return not User.util.CurrentUser.ExternalUser
    }
    
    // 'helpText' attribute on TextInput (id=Phone_Input) at DatabasePolicySearchPanelSet.pcf: line 85, column 57
    function helpText_37 () : java.lang.String {
      return DisplayKey.get("Java.PhoneUtil.Example.ToolTip", User.util.CurrentUser.UserDefaultPhoneCountry, gw.api.util.PhoneUtil.getExampleNumberWithExtension(User.util.CurrentUser.UserDefaultPhoneCountry))
    }
    
    // 'initialValue' attribute on Variable at DatabasePolicySearchPanelSet.pcf: line 22, column 58
    function initialValue_0 () : java.util.List<entity.UWCompany> {
      return UWCompany.finder.findUWCompanies().toList()
    }
    
    // 'initialValue' attribute on Variable at DatabasePolicySearchPanelSet.pcf: line 27, column 60
    function initialValue_1 () : gw.globalization.PolicySearchNameAdapter {
      return new gw.globalization.PolicySearchNameAdapter(searchCriteria)
    }
    
    // 'initialValue' attribute on Variable at DatabasePolicySearchPanelSet.pcf: line 32, column 63
    function initialValue_2 () : gw.globalization.PolicySearchAddressAdapter {
      return new gw.globalization.PolicySearchAddressAdapter(searchCriteria)
    }
    
    // 'initialValue' attribute on Variable at DatabasePolicySearchPanelSet.pcf: line 36, column 56
    function initialValue_3 () : gw.pcf.UniqueProductDisplayNameMaker {
      return new gw.pcf.UniqueProductDisplayNameMaker()
    }
    
    // 'inputConversion' attribute on ProducerCodeInput (id=ProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function inputConversion_122 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.web.product.ProducerCodePickerUtil.convertValueFromString(VALUE, searchCriteria.ProducerCode)
    }
    
    // 'mode' attribute on InputSetRef at DatabasePolicySearchPanelSet.pcf: line 65, column 60
    function mode_26 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'onChange' attribute on PostOnChange at DatabasePolicySearchPanelSet.pcf: line 58, column 68
    function onChange_14 () : void {
      gw.api.util.SearchUtil.resetResultOnly()
    }
    
    // 'optionLabel' attribute on RangeInput (id=ProductName_Input) at DatabasePolicySearchPanelSet.pcf: line 169, column 54
    function optionLabel_103 (VALUE :  gw.api.productmodel.Product) : java.lang.String {
      return uniqueProductDisplayNameMaker.make(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=IncludeArchived_Input) at DatabasePolicySearchPanelSet.pcf: line 46, column 73
    function optionLabel_8 (VALUE :  java.lang.Boolean) : java.lang.String {
      return gw.policy.PolicyPeriodSearchCriteria.getIncludeArchivedLabel(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=ProductName_Input) at DatabasePolicySearchPanelSet.pcf: line 169, column 54
    function valueRange_104 () : java.lang.Object {
      return uniqueProductDisplayNameMaker.Products
    }
    
    // 'valueRange' attribute on RangeInput (id=DateFieldToSearchType_Input) at DatabasePolicySearchPanelSet.pcf: line 201, column 59
    function valueRange_132 () : java.lang.Object {
      return searchCriteria.SearchObjectType.DateFieldsSearchType
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at DatabasePolicySearchPanelSet.pcf: line 56, column 85
    function valueRange_18 () : java.lang.Object {
      return gw.policy.PolicyPeriodSearchCriteria.PolicyPeriodSearchType.values()
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at DatabasePolicySearchPanelSet.pcf: line 136, column 43
    function valueRange_78 () : java.lang.Object {
      return uwCompanies
    }
    
    // 'valueRange' attribute on RangeInput (id=IncludeArchived_Input) at DatabasePolicySearchPanelSet.pcf: line 46, column 73
    function valueRange_9 () : java.lang.Object {
      return {false, true}
    }
    
    // 'value' attribute on RangeInput (id=DateFieldToSearchType_Input) at DatabasePolicySearchPanelSet.pcf: line 201, column 59
    function valueRoot_131 () : java.lang.Object {
      return searchCriteria.DateCriteria
    }
    
    // 'value' attribute on RangeInput (id=IncludeArchived_Input) at DatabasePolicySearchPanelSet.pcf: line 46, column 73
    function valueRoot_7 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on RangeInput (id=ProductName_Input) at DatabasePolicySearchPanelSet.pcf: line 169, column 54
    function value_100 () : gw.api.productmodel.Product {
      return searchCriteria.Product
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at DatabasePolicySearchPanelSet.pcf: line 176, column 47
    function value_108 () : typekey.Jurisdiction {
      return searchCriteria.State
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at DatabasePolicySearchPanelSet.pcf: line 183, column 46
    function value_115 () : entity.Organization {
      return searchCriteria.Producer
    }
    
    // 'value' attribute on ProducerCodeInput (id=ProducerCode_Input) at ProducerCodeWidget.xml: line 2, column 156
    function value_123 () : entity.ProducerCode {
      return searchCriteria.ProducerCode
    }
    
    // 'value' attribute on RangeInput (id=DateFieldToSearchType_Input) at DatabasePolicySearchPanelSet.pcf: line 201, column 59
    function value_129 () : typekey.DateFieldsToSearchType {
      return searchCriteria.DateCriteria.DateFieldToSearch
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at DatabasePolicySearchPanelSet.pcf: line 208, column 31
    function value_137 () : typekey.DateRangeChoiceType {
      return searchCriteria.DateCriteria.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at DatabasePolicySearchPanelSet.pcf: line 208, column 31
    function value_141 () : java.lang.Object {
      return searchCriteria.DateCriteria.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at DatabasePolicySearchPanelSet.pcf: line 208, column 31
    function value_142 () : typekey.DateSearchType {
      return searchCriteria.DateCriteria.DateSearchType
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at DatabasePolicySearchPanelSet.pcf: line 208, column 31
    function value_146 () : java.util.Date {
      return searchCriteria.DateCriteria.StartDate
    }
    
    // 'value' attribute on RangeInput (id=SearchFor_Input) at DatabasePolicySearchPanelSet.pcf: line 56, column 85
    function value_15 () : gw.policy.PolicyPeriodSearchCriteria.PolicyPeriodSearchType {
      return searchCriteria.SearchObjectType
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at DatabasePolicySearchPanelSet.pcf: line 208, column 31
    function value_152 () : java.util.Date {
      return searchCriteria.DateCriteria.EndDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at DatabasePolicySearchPanelSet.pcf: line 208, column 31
    function value_160 () : entity.DateCriteria {
      return searchCriteria.DateCriteria
    }
    
    // 'value' attribute on DateInput (id=AsOfDate_Input) at DatabasePolicySearchPanelSet.pcf: line 215, column 52
    function value_166 () : java.util.Date {
      return searchCriteria.AsOfDate
    }
    
    // 'value' attribute on CheckBoxInput (id=FirstNameExact_Input) at DatabasePolicySearchPanelSet.pcf: line 71, column 52
    function value_27 () : java.lang.Boolean {
      return searchCriteria.FirstNameExact
    }
    
    // 'value' attribute on CheckBoxInput (id=LastNameExact_Input) at DatabasePolicySearchPanelSet.pcf: line 77, column 51
    function value_31 () : java.lang.Boolean {
      return searchCriteria.LastNameExact
    }
    
    // 'value' attribute on TextInput (id=Phone_Input) at DatabasePolicySearchPanelSet.pcf: line 85, column 57
    function value_38 () : java.lang.String {
      return searchCriteria.PrimaryInsuredPhone
    }
    
    // 'value' attribute on CheckBoxInput (id=CompanyNameExact_Input) at DatabasePolicySearchPanelSet.pcf: line 94, column 54
    function value_47 () : java.lang.Boolean {
      return searchCriteria.CompanyNameExact
    }
    
    // 'value' attribute on RangeInput (id=IncludeArchived_Input) at DatabasePolicySearchPanelSet.pcf: line 46, column 73
    function value_5 () : java.lang.Boolean {
      return searchCriteria.IncludeArchived
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at DatabasePolicySearchPanelSet.pcf: line 100, column 48
    function value_51 () : java.lang.String {
      return searchCriteria.OfficialId
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at DatabasePolicySearchPanelSet.pcf: line 108, column 51
    function value_55 () : java.lang.String {
      return searchCriteria.AccountNumber
    }
    
    // 'value' attribute on TextInput (id=PolicyNumberCriterion_Input) at DatabasePolicySearchPanelSet.pcf: line 115, column 70
    function value_60 () : java.lang.String {
      return searchCriteria.PolicyNumber
    }
    
    // 'value' attribute on TextInput (id=SubmissionNumber_Input) at DatabasePolicySearchPanelSet.pcf: line 122, column 70
    function value_66 () : java.lang.String {
      return searchCriteria.JobNumber
    }
    
    // 'value' attribute on BooleanRadioInput (id=AssignedRisk_Input) at DatabasePolicySearchPanelSet.pcf: line 128, column 50
    function value_71 () : java.lang.Boolean {
      return searchCriteria.AssignedRisk
    }
    
    // 'value' attribute on RangeInput (id=UWCompany_Input) at DatabasePolicySearchPanelSet.pcf: line 136, column 43
    function value_75 () : entity.UWCompany {
      return searchCriteria.UWCompany
    }
    
    // 'value' attribute on TypeKeyInput (id=RejectReason_Input) at DatabasePolicySearchPanelSet.pcf: line 144, column 70
    function value_83 () : typekey.ReasonCode {
      return searchCriteria.RejectReason
    }
    
    // 'value' attribute on TypeKeyInput (id=NonRenewalCode_Input) at DatabasePolicySearchPanelSet.pcf: line 152, column 67
    function value_89 () : typekey.NonRenewalCode {
      return searchCriteria.NonRenewalCode
    }
    
    // 'value' attribute on TypeKeyInput (id=AuditMethod_Input) at DatabasePolicySearchPanelSet.pcf: line 160, column 51
    function value_95 () : typekey.AuditMethod {
      return searchCriteria.ActualAuditMethod
    }
    
    // 'valueRange' attribute on RangeInput (id=IncludeArchived_Input) at DatabasePolicySearchPanelSet.pcf: line 46, column 73
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.lang.Boolean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=IncludeArchived_Input) at DatabasePolicySearchPanelSet.pcf: line 46, column 73
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProductName_Input) at DatabasePolicySearchPanelSet.pcf: line 169, column 54
    function verifyValueRangeIsAllowedType_105 ($$arg :  gw.api.productmodel.Product[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProductName_Input) at DatabasePolicySearchPanelSet.pcf: line 169, column 54
    function verifyValueRangeIsAllowedType_105 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DateFieldToSearchType_Input) at DatabasePolicySearchPanelSet.pcf: line 201, column 59
    function verifyValueRangeIsAllowedType_133 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DateFieldToSearchType_Input) at DatabasePolicySearchPanelSet.pcf: line 201, column 59
    function verifyValueRangeIsAllowedType_133 ($$arg :  typekey.DateFieldsToSearchType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at DatabasePolicySearchPanelSet.pcf: line 56, column 85
    function verifyValueRangeIsAllowedType_19 ($$arg :  gw.policy.PolicyPeriodSearchCriteria.PolicyPeriodSearchType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at DatabasePolicySearchPanelSet.pcf: line 56, column 85
    function verifyValueRangeIsAllowedType_19 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at DatabasePolicySearchPanelSet.pcf: line 136, column 43
    function verifyValueRangeIsAllowedType_79 ($$arg :  entity.UWCompany[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at DatabasePolicySearchPanelSet.pcf: line 136, column 43
    function verifyValueRangeIsAllowedType_79 ($$arg :  gw.api.database.IQueryBeanResult<entity.UWCompany>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at DatabasePolicySearchPanelSet.pcf: line 136, column 43
    function verifyValueRangeIsAllowedType_79 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProductName_Input) at DatabasePolicySearchPanelSet.pcf: line 169, column 54
    function verifyValueRange_106 () : void {
      var __valueRangeArg = uniqueProductDisplayNameMaker.Products
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_105(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=IncludeArchived_Input) at DatabasePolicySearchPanelSet.pcf: line 46, column 73
    function verifyValueRange_11 () : void {
      var __valueRangeArg = {false, true}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=DateFieldToSearchType_Input) at DatabasePolicySearchPanelSet.pcf: line 201, column 59
    function verifyValueRange_134 () : void {
      var __valueRangeArg = searchCriteria.SearchObjectType.DateFieldsSearchType
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_133(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at DatabasePolicySearchPanelSet.pcf: line 56, column 85
    function verifyValueRange_20 () : void {
      var __valueRangeArg = gw.policy.PolicyPeriodSearchCriteria.PolicyPeriodSearchType.values()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_19(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=UWCompany_Input) at DatabasePolicySearchPanelSet.pcf: line 136, column 43
    function verifyValueRange_80 () : void {
      var __valueRangeArg = uwCompanies
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_79(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSet at DatabasePolicySearchPanelSet.pcf: line 194, column 55
    function visible_164 () : java.lang.Boolean {
      return not searchCriteria.PolicySearch
    }
    
    // 'visible' attribute on DateInput (id=AsOfDate_Input) at DatabasePolicySearchPanelSet.pcf: line 215, column 52
    function visible_165 () : java.lang.Boolean {
      return searchCriteria.PolicySearch
    }
    
    // 'visible' attribute on RangeInput (id=IncludeArchived_Input) at DatabasePolicySearchPanelSet.pcf: line 46, column 73
    function visible_4 () : java.lang.Boolean {
      return gw.api.archive.PCArchivingUtil.isArchiveEnabled()
    }
    
    // 'visible' attribute on TextInput (id=PolicyNumberCriterion_Input) at DatabasePolicySearchPanelSet.pcf: line 115, column 70
    function visible_59 () : java.lang.Boolean {
      return searchCriteria.SearchObjectType != Submission
    }
    
    // 'visible' attribute on TextInput (id=SubmissionNumber_Input) at DatabasePolicySearchPanelSet.pcf: line 122, column 70
    function visible_65 () : java.lang.Boolean {
      return searchCriteria.SearchObjectType == Submission
    }
    
    // 'visible' attribute on TypeKeyInput (id=NonRenewalCode_Input) at DatabasePolicySearchPanelSet.pcf: line 152, column 67
    function visible_88 () : java.lang.Boolean {
      return searchCriteria.SearchObjectType == Renewal
    }
    
    // 'visible' attribute on TypeKeyInput (id=AuditMethod_Input) at DatabasePolicySearchPanelSet.pcf: line 160, column 51
    function visible_94 () : java.lang.Boolean {
      return searchCriteria.AuditSearch
    }
    
    property get policyAddrAdapter () : gw.globalization.PolicySearchAddressAdapter {
      return getVariableValue("policyAddrAdapter", 2) as gw.globalization.PolicySearchAddressAdapter
    }
    
    property set policyAddrAdapter ($arg :  gw.globalization.PolicySearchAddressAdapter) {
      setVariableValue("policyAddrAdapter", 2, $arg)
    }
    
    property get policyNameAdapter () : gw.globalization.PolicySearchNameAdapter {
      return getVariableValue("policyNameAdapter", 2) as gw.globalization.PolicySearchNameAdapter
    }
    
    property set policyNameAdapter ($arg :  gw.globalization.PolicySearchNameAdapter) {
      setVariableValue("policyNameAdapter", 2, $arg)
    }
    
    property get uniqueProductDisplayNameMaker () : gw.pcf.UniqueProductDisplayNameMaker {
      return getVariableValue("uniqueProductDisplayNameMaker", 2) as gw.pcf.UniqueProductDisplayNameMaker
    }
    
    property set uniqueProductDisplayNameMaker ($arg :  gw.pcf.UniqueProductDisplayNameMaker) {
      setVariableValue("uniqueProductDisplayNameMaker", 2, $arg)
    }
    
    property get uwCompanies () : java.util.List<entity.UWCompany> {
      return getVariableValue("uwCompanies", 2) as java.util.List<entity.UWCompany>
    }
    
    property set uwCompanies ($arg :  java.util.List<entity.UWCompany>) {
      setVariableValue("uwCompanies", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/DatabasePolicySearchPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends DatabasePolicySearchPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=PrintMe) at DatabasePolicySearchPanelSet.pcf: line 232, column 74
    function action_173 () : void {
      gw.api.print.ListViewPrintOptionPopupAction.printListViewOnlyWithOptions( "PolicySearch_ResultsLV" )
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_onEnter_178 (def :  pcf.PolicySearch_ResultsLV_Audit) : void {
      def.onEnter(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_onEnter_180 (def :  pcf.PolicySearch_ResultsLV_Cancellation) : void {
      def.onEnter(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_onEnter_182 (def :  pcf.PolicySearch_ResultsLV_Issuance) : void {
      def.onEnter(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_onEnter_184 (def :  pcf.PolicySearch_ResultsLV_Policy) : void {
      def.onEnter(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_onEnter_186 (def :  pcf.PolicySearch_ResultsLV_PolicyChange) : void {
      def.onEnter(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_onEnter_188 (def :  pcf.PolicySearch_ResultsLV_Reinstatement) : void {
      def.onEnter(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_onEnter_190 (def :  pcf.PolicySearch_ResultsLV_Renewal) : void {
      def.onEnter(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_onEnter_192 (def :  pcf.PolicySearch_ResultsLV_Rewrite) : void {
      def.onEnter(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_onEnter_194 (def :  pcf.PolicySearch_ResultsLV_RewriteNewAccount) : void {
      def.onEnter(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_onEnter_196 (def :  pcf.PolicySearch_ResultsLV_Submission) : void {
      def.onEnter(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_refreshVariables_179 (def :  pcf.PolicySearch_ResultsLV_Audit) : void {
      def.refreshVariables(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_refreshVariables_181 (def :  pcf.PolicySearch_ResultsLV_Cancellation) : void {
      def.refreshVariables(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_refreshVariables_183 (def :  pcf.PolicySearch_ResultsLV_Issuance) : void {
      def.refreshVariables(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_refreshVariables_185 (def :  pcf.PolicySearch_ResultsLV_Policy) : void {
      def.refreshVariables(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_refreshVariables_187 (def :  pcf.PolicySearch_ResultsLV_PolicyChange) : void {
      def.refreshVariables(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_refreshVariables_189 (def :  pcf.PolicySearch_ResultsLV_Reinstatement) : void {
      def.refreshVariables(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_refreshVariables_191 (def :  pcf.PolicySearch_ResultsLV_Renewal) : void {
      def.refreshVariables(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_refreshVariables_193 (def :  pcf.PolicySearch_ResultsLV_Rewrite) : void {
      def.refreshVariables(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_refreshVariables_195 (def :  pcf.PolicySearch_ResultsLV_RewriteNewAccount) : void {
      def.refreshVariables(searchResult)
    }
    
    // 'def' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function def_refreshVariables_197 (def :  pcf.PolicySearch_ResultsLV_Submission) : void {
      def.refreshVariables(searchResult)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at DatabasePolicySearchPanelSet.pcf: line 16, column 87
    function maxSearchResults_199 () : java.lang.Object {
      return gw.policy.PolicyPeriodSearchCriteria.MaxSearchResults
    }
    
    // 'mode' attribute on PanelRef at DatabasePolicySearchPanelSet.pcf: line 224, column 45
    function mode_198 () : java.lang.Object {
      return searchCriteria.ResultsLVMode
    }
    
    // 'searchCriteria' attribute on SearchPanel at DatabasePolicySearchPanelSet.pcf: line 16, column 87
    function searchCriteria_201 () : gw.policy.PolicyPeriodSearchCriteria {
      return new gw.policy.PolicyPeriodSearchCriteria() { :Secure = true, :Producer = User.util.CurrentUser.Producer, :FirstNameExact = true, :LastNameExact = true, :CompanyNameExact = true, :PermissiveSearch = false}
    }
    
    // 'search' attribute on SearchPanel at DatabasePolicySearchPanelSet.pcf: line 16, column 87
    function search_200 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on CheckedValuesMenuItemIterator (id=RoleMenuItemIterator) at DatabasePolicySearchPanelSet.pcf: line 243, column 46
    function value_176 () : typekey.UserRole[] {
      return gw.assignment.AssignmentUtil.getMultipleAssignmentRoles(searchCriteria.SearchObjectType.MultipleAssignmentCategory)
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=ReassignmentButton) at DatabasePolicySearchPanelSet.pcf: line 238, column 64
    function visible_177 () : java.lang.Boolean {
      return perm.System.userroleassignmentbulkassign
    }
    
    property get searchCriteria () : gw.policy.PolicyPeriodSearchCriteria {
      return getCriteriaValue(1) as gw.policy.PolicyPeriodSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.policy.PolicyPeriodSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResult () : gw.api.database.IQueryBeanResult<PolicyPeriodSummary> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<PolicyPeriodSummary>
    }
    
    
  }
  
  
}