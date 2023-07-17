package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.policy.PolicyPeriodSearchCriteria
@javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CopyPolicyDataSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CopyPolicyDataSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at CopyPolicyDataSearchScreen.pcf: line 13, column 32
    function initialValue_0 () : java.lang.Object {
      return null
    }
    
    property get destPeriod () : PolicyPeriod {
      return getRequireValue("destPeriod", 0) as PolicyPeriod
    }
    
    property set destPeriod ($arg :  PolicyPeriod) {
      setRequireValue("destPeriod", 0, $arg)
    }
    
    property get sourcePeriod () : java.lang.Object {
      return getVariableValue("sourcePeriod", 0) as java.lang.Object
    }
    
    property set sourcePeriod ($arg :  java.lang.Object) {
      setVariableValue("sourcePeriod", 0, $arg)
    }
    
    
          function getInitialSearchCriteria(): PolicyPeriodSearchCriteria {
            return new PolicyPeriodSearchCriteria(){
              :AccountNumber = destPeriod.Policy.Account.AccountNumber,
              :Secure = true,
              :Producer = User.util.CurrentUser.Producer,
              :Product = destPeriod.Policy.Product,
              :SearchObjectType = Policy,
              :ExcludedPolicyPeriod = destPeriod,
              :IgnoreSubmissionPolicyNumber = false,
              :MultiVersionSearch = true,
              :PermissiveSearch = false,
              :FirstNameExact = true,
              :LastNameExact = true,
              :CompanyNameExact = true,
              :IncludeArchived = true
              }
          }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicySearchDVExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at CopyPolicyDataSearchScreen.pcf: line 128, column 31
    function available_65 () : java.lang.Boolean {
      return searchCriteria.DateCriteria.DateSearchType == DateSearchType.TC_FROMLIST
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at CopyPolicyDataSearchScreen.pcf: line 128, column 31
    function available_74 () : java.lang.Boolean {
      return searchCriteria.DateCriteria.DateSearchType == DateSearchType.TC_ENTEREDRANGE
    }
    
    // 'def' attribute on InputSetRef at CopyPolicyDataSearchScreen.pcf: line 139, column 45
    function def_onEnter_100 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at CopyPolicyDataSearchScreen.pcf: line 55, column 60
    function def_onEnter_12 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(policySearchNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at CopyPolicyDataSearchScreen.pcf: line 55, column 60
    function def_onEnter_14 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(policySearchNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at CopyPolicyDataSearchScreen.pcf: line 70, column 60
    function def_onEnter_25 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(policySearchNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at CopyPolicyDataSearchScreen.pcf: line 70, column 60
    function def_onEnter_27 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(policySearchNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at CopyPolicyDataSearchScreen.pcf: line 78, column 128
    function def_onEnter_34 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressCountryCityStatePostalCodeOwner (policyAddrAdapter))
    }
    
    // 'def' attribute on InputSetRef at CopyPolicyDataSearchScreen.pcf: line 139, column 45
    function def_refreshVariables_101 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on InputSetRef at CopyPolicyDataSearchScreen.pcf: line 55, column 60
    function def_refreshVariables_13 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(policySearchNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at CopyPolicyDataSearchScreen.pcf: line 55, column 60
    function def_refreshVariables_15 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(policySearchNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at CopyPolicyDataSearchScreen.pcf: line 70, column 60
    function def_refreshVariables_26 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(policySearchNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at CopyPolicyDataSearchScreen.pcf: line 70, column 60
    function def_refreshVariables_28 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(policySearchNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at CopyPolicyDataSearchScreen.pcf: line 78, column 128
    function def_refreshVariables_35 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressCountryCityStatePostalCodeOwner (policyAddrAdapter))
    }
    
    // 'value' attribute on CheckBoxInput (id=FirstNameExact_Input) at CopyPolicyDataSearchScreen.pcf: line 61, column 52
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.FirstNameExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=LastNameExact_Input) at CopyPolicyDataSearchScreen.pcf: line 67, column 51
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.LastNameExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=CompanyNameExact_Input) at CopyPolicyDataSearchScreen.pcf: line 76, column 54
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.CompanyNameExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Phone_Input) at CopyPolicyDataSearchScreen.pcf: line 83, column 57
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PrimaryInsuredPhone = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at CopyPolicyDataSearchScreen.pcf: line 89, column 48
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.OfficialId = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at CopyPolicyDataSearchScreen.pcf: line 97, column 51
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumberCriterion_Input) at CopyPolicyDataSearchScreen.pcf: line 103, column 50
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=WorkOrderNumber_Input) at CopyPolicyDataSearchScreen.pcf: line 110, column 56
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.JobNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=DateFieldToSearchType_Input) at CopyPolicyDataSearchScreen.pcf: line 121, column 59
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateCriteria.DateFieldToSearch = (__VALUE_TO_SET as typekey.DateFieldsToSearchType)
    }
    
    // 'value' attribute on RangeInput (id=SearchFor_Input) at CopyPolicyDataSearchScreen.pcf: line 46, column 85
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.SearchObjectType = (__VALUE_TO_SET as gw.policy.PolicyPeriodSearchCriteria.PolicyPeriodSearchType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at CopyPolicyDataSearchScreen.pcf: line 128, column 31
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateCriteria.DateRangeChoice = (__VALUE_TO_SET as typekey.DateRangeChoiceType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at CopyPolicyDataSearchScreen.pcf: line 128, column 31
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateCriteria.DateSearchType = (__VALUE_TO_SET as typekey.DateSearchType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at CopyPolicyDataSearchScreen.pcf: line 128, column 31
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateCriteria.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at CopyPolicyDataSearchScreen.pcf: line 128, column 31
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateCriteria.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at CopyPolicyDataSearchScreen.pcf: line 128, column 31
    function defaultSetter_90 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.DateCriteria = (__VALUE_TO_SET as entity.DateCriteria)
    }
    
    // 'value' attribute on DateInput (id=AsOfDate_Input) at CopyPolicyDataSearchScreen.pcf: line 135, column 52
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AsOfDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'initialValue' attribute on Variable at CopyPolicyDataSearchScreen.pcf: line 27, column 58
    function initialValue_1 () : java.util.List<entity.UWCompany> {
      return UWCompany.finder.findUWCompanies().toList()
    }
    
    // 'initialValue' attribute on Variable at CopyPolicyDataSearchScreen.pcf: line 32, column 60
    function initialValue_2 () : gw.globalization.PolicySearchNameAdapter {
      return new gw.globalization.PolicySearchNameAdapter(searchCriteria)
    }
    
    // 'initialValue' attribute on Variable at CopyPolicyDataSearchScreen.pcf: line 37, column 63
    function initialValue_3 () : gw.globalization.PolicySearchAddressAdapter {
      return new gw.globalization.PolicySearchAddressAdapter(searchCriteria)
    }
    
    // 'mode' attribute on InputSetRef at CopyPolicyDataSearchScreen.pcf: line 55, column 60
    function mode_16 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'onChange' attribute on PostOnChange at CopyPolicyDataSearchScreen.pcf: line 48, column 68
    function onChange_4 () : void {
      gw.api.util.SearchUtil.resetResultOnly()
    }
    
    // 'valueRange' attribute on RangeInput (id=DateFieldToSearchType_Input) at CopyPolicyDataSearchScreen.pcf: line 121, column 59
    function valueRange_61 () : java.lang.Object {
      return searchCriteria.DateFieldsSearchType
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at CopyPolicyDataSearchScreen.pcf: line 46, column 85
    function valueRange_8 () : java.lang.Object {
      return gw.policy.PolicyPeriodSearchCriteria.PolicyPeriodSearchType.CopyPolicyDataValues
    }
    
    // 'value' attribute on RangeInput (id=DateFieldToSearchType_Input) at CopyPolicyDataSearchScreen.pcf: line 121, column 59
    function valueRoot_60 () : java.lang.Object {
      return searchCriteria.DateCriteria
    }
    
    // 'value' attribute on RangeInput (id=SearchFor_Input) at CopyPolicyDataSearchScreen.pcf: line 46, column 85
    function valueRoot_7 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on CheckBoxInput (id=FirstNameExact_Input) at CopyPolicyDataSearchScreen.pcf: line 61, column 52
    function value_17 () : java.lang.Boolean {
      return searchCriteria.FirstNameExact
    }
    
    // 'value' attribute on CheckBoxInput (id=LastNameExact_Input) at CopyPolicyDataSearchScreen.pcf: line 67, column 51
    function value_21 () : java.lang.Boolean {
      return searchCriteria.LastNameExact
    }
    
    // 'value' attribute on CheckBoxInput (id=CompanyNameExact_Input) at CopyPolicyDataSearchScreen.pcf: line 76, column 54
    function value_30 () : java.lang.Boolean {
      return searchCriteria.CompanyNameExact
    }
    
    // 'value' attribute on TextInput (id=Phone_Input) at CopyPolicyDataSearchScreen.pcf: line 83, column 57
    function value_36 () : java.lang.String {
      return searchCriteria.PrimaryInsuredPhone
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at CopyPolicyDataSearchScreen.pcf: line 89, column 48
    function value_40 () : java.lang.String {
      return searchCriteria.OfficialId
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at CopyPolicyDataSearchScreen.pcf: line 97, column 51
    function value_44 () : java.lang.String {
      return searchCriteria.AccountNumber
    }
    
    // 'value' attribute on TextInput (id=PolicyNumberCriterion_Input) at CopyPolicyDataSearchScreen.pcf: line 103, column 50
    function value_48 () : java.lang.String {
      return searchCriteria.PolicyNumber
    }
    
    // 'value' attribute on RangeInput (id=SearchFor_Input) at CopyPolicyDataSearchScreen.pcf: line 46, column 85
    function value_5 () : gw.policy.PolicyPeriodSearchCriteria.PolicyPeriodSearchType {
      return searchCriteria.SearchObjectType
    }
    
    // 'value' attribute on TextInput (id=WorkOrderNumber_Input) at CopyPolicyDataSearchScreen.pcf: line 110, column 56
    function value_53 () : java.lang.String {
      return searchCriteria.JobNumber
    }
    
    // 'value' attribute on RangeInput (id=DateFieldToSearchType_Input) at CopyPolicyDataSearchScreen.pcf: line 121, column 59
    function value_58 () : typekey.DateFieldsToSearchType {
      return searchCriteria.DateCriteria.DateFieldToSearch
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at CopyPolicyDataSearchScreen.pcf: line 128, column 31
    function value_66 () : typekey.DateRangeChoiceType {
      return searchCriteria.DateCriteria.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at CopyPolicyDataSearchScreen.pcf: line 128, column 31
    function value_70 () : java.lang.Object {
      return searchCriteria.DateCriteria.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at CopyPolicyDataSearchScreen.pcf: line 128, column 31
    function value_71 () : typekey.DateSearchType {
      return searchCriteria.DateCriteria.DateSearchType
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at CopyPolicyDataSearchScreen.pcf: line 128, column 31
    function value_75 () : java.util.Date {
      return searchCriteria.DateCriteria.StartDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at CopyPolicyDataSearchScreen.pcf: line 128, column 31
    function value_81 () : java.util.Date {
      return searchCriteria.DateCriteria.EndDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateRangeForJobSearch_Input) at CopyPolicyDataSearchScreen.pcf: line 128, column 31
    function value_89 () : entity.DateCriteria {
      return searchCriteria.DateCriteria
    }
    
    // 'value' attribute on DateInput (id=AsOfDate_Input) at CopyPolicyDataSearchScreen.pcf: line 135, column 52
    function value_95 () : java.util.Date {
      return searchCriteria.AsOfDate
    }
    
    // 'valueRange' attribute on RangeInput (id=DateFieldToSearchType_Input) at CopyPolicyDataSearchScreen.pcf: line 121, column 59
    function verifyValueRangeIsAllowedType_62 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DateFieldToSearchType_Input) at CopyPolicyDataSearchScreen.pcf: line 121, column 59
    function verifyValueRangeIsAllowedType_62 ($$arg :  typekey.DateFieldsToSearchType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at CopyPolicyDataSearchScreen.pcf: line 46, column 85
    function verifyValueRangeIsAllowedType_9 ($$arg :  gw.policy.PolicyPeriodSearchCriteria.PolicyPeriodSearchType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at CopyPolicyDataSearchScreen.pcf: line 46, column 85
    function verifyValueRangeIsAllowedType_9 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SearchFor_Input) at CopyPolicyDataSearchScreen.pcf: line 46, column 85
    function verifyValueRange_10 () : void {
      var __valueRangeArg = gw.policy.PolicyPeriodSearchCriteria.PolicyPeriodSearchType.CopyPolicyDataValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_9(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=DateFieldToSearchType_Input) at CopyPolicyDataSearchScreen.pcf: line 121, column 59
    function verifyValueRange_63 () : void {
      var __valueRangeArg = searchCriteria.DateFieldsSearchType
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_62(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=WorkOrderNumber_Input) at CopyPolicyDataSearchScreen.pcf: line 110, column 56
    function visible_52 () : java.lang.Boolean {
      return not searchCriteria.PolicySearch
    }
    
    // 'visible' attribute on DateInput (id=AsOfDate_Input) at CopyPolicyDataSearchScreen.pcf: line 135, column 52
    function visible_94 () : java.lang.Boolean {
      return searchCriteria.PolicySearch
    }
    
    property get policyAddrAdapter () : gw.globalization.PolicySearchAddressAdapter {
      return getVariableValue("policyAddrAdapter", 2) as gw.globalization.PolicySearchAddressAdapter
    }
    
    property set policyAddrAdapter ($arg :  gw.globalization.PolicySearchAddressAdapter) {
      setVariableValue("policyAddrAdapter", 2, $arg)
    }
    
    property get policySearchNameAdapter () : gw.globalization.PolicySearchNameAdapter {
      return getVariableValue("policySearchNameAdapter", 2) as gw.globalization.PolicySearchNameAdapter
    }
    
    property set policySearchNameAdapter ($arg :  gw.globalization.PolicySearchNameAdapter) {
      setVariableValue("policySearchNameAdapter", 2, $arg)
    }
    
    property get uwCompanies () : java.util.List<entity.UWCompany> {
      return getVariableValue("uwCompanies", 2) as java.util.List<entity.UWCompany>
    }
    
    property set uwCompanies ($arg :  java.util.List<entity.UWCompany>) {
      setVariableValue("uwCompanies", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyPolicyDataSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends CopyPolicyDataSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataSearchScreen.pcf: line 144, column 45
    function def_onEnter_102 (def :  pcf.CopyPolicyDataSearch_ResultsLV_Policy) : void {
      def.onEnter(searchResult, destPeriod)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataSearchScreen.pcf: line 144, column 45
    function def_onEnter_104 (def :  pcf.CopyPolicyDataSearch_ResultsLV_PolicyChange) : void {
      def.onEnter(searchResult, destPeriod)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataSearchScreen.pcf: line 144, column 45
    function def_onEnter_106 (def :  pcf.CopyPolicyDataSearch_ResultsLV_Renewal) : void {
      def.onEnter(searchResult, destPeriod)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataSearchScreen.pcf: line 144, column 45
    function def_onEnter_108 (def :  pcf.CopyPolicyDataSearch_ResultsLV_Rewrite) : void {
      def.onEnter(searchResult, destPeriod)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataSearchScreen.pcf: line 144, column 45
    function def_onEnter_110 (def :  pcf.CopyPolicyDataSearch_ResultsLV_RewriteNewAccount) : void {
      def.onEnter(searchResult, destPeriod)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataSearchScreen.pcf: line 144, column 45
    function def_onEnter_112 (def :  pcf.CopyPolicyDataSearch_ResultsLV_Submission) : void {
      def.onEnter(searchResult, destPeriod)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataSearchScreen.pcf: line 144, column 45
    function def_refreshVariables_103 (def :  pcf.CopyPolicyDataSearch_ResultsLV_Policy) : void {
      def.refreshVariables(searchResult, destPeriod)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataSearchScreen.pcf: line 144, column 45
    function def_refreshVariables_105 (def :  pcf.CopyPolicyDataSearch_ResultsLV_PolicyChange) : void {
      def.refreshVariables(searchResult, destPeriod)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataSearchScreen.pcf: line 144, column 45
    function def_refreshVariables_107 (def :  pcf.CopyPolicyDataSearch_ResultsLV_Renewal) : void {
      def.refreshVariables(searchResult, destPeriod)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataSearchScreen.pcf: line 144, column 45
    function def_refreshVariables_109 (def :  pcf.CopyPolicyDataSearch_ResultsLV_Rewrite) : void {
      def.refreshVariables(searchResult, destPeriod)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataSearchScreen.pcf: line 144, column 45
    function def_refreshVariables_111 (def :  pcf.CopyPolicyDataSearch_ResultsLV_RewriteNewAccount) : void {
      def.refreshVariables(searchResult, destPeriod)
    }
    
    // 'def' attribute on PanelRef at CopyPolicyDataSearchScreen.pcf: line 144, column 45
    function def_refreshVariables_113 (def :  pcf.CopyPolicyDataSearch_ResultsLV_Submission) : void {
      def.refreshVariables(searchResult, destPeriod)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at CopyPolicyDataSearchScreen.pcf: line 21, column 87
    function maxSearchResults_115 () : java.lang.Object {
      return gw.api.system.PCConfigParameters.PolicySearchMaxResult.Value
    }
    
    // 'mode' attribute on PanelRef at CopyPolicyDataSearchScreen.pcf: line 144, column 45
    function mode_114 () : java.lang.Object {
      return searchCriteria.ResultsLVMode
    }
    
    // 'searchCriteria' attribute on SearchPanel at CopyPolicyDataSearchScreen.pcf: line 21, column 87
    function searchCriteria_117 () : gw.policy.PolicyPeriodSearchCriteria {
      return getInitialSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at CopyPolicyDataSearchScreen.pcf: line 21, column 87
    function search_116 () : java.lang.Object {
      return searchCriteria.performSearch()
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