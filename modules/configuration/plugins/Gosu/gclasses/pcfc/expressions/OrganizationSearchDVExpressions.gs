package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/OrganizationSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at OrganizationSearchDV.pcf: line 21, column 56
    function def_onEnter_1 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.search.OrganizationNameOwner(organizationNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at OrganizationSearchDV.pcf: line 33, column 45
    function def_onEnter_11 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.AddressAutoFillableOwner(searchCriteria, false))
    }
    
    // 'def' attribute on InputSetRef at OrganizationSearchDV.pcf: line 21, column 56
    function def_onEnter_3 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.search.OrganizationNameOwner(organizationNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at OrganizationSearchDV.pcf: line 71, column 41
    function def_onEnter_40 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at OrganizationSearchDV.pcf: line 33, column 45
    function def_refreshVariables_12 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.AddressAutoFillableOwner(searchCriteria, false))
    }
    
    // 'def' attribute on InputSetRef at OrganizationSearchDV.pcf: line 21, column 56
    function def_refreshVariables_2 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.OrganizationNameOwner(organizationNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at OrganizationSearchDV.pcf: line 21, column 56
    function def_refreshVariables_4 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.search.OrganizationNameOwner(organizationNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at OrganizationSearchDV.pcf: line 71, column 41
    function def_refreshVariables_41 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TypeKeyInput (id=ProducerStatus_Input) at OrganizationSearchDV.pcf: line 41, column 45
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ProducerStatus = (__VALUE_TO_SET as typekey.ProducerStatus)
    }
    
    // 'value' attribute on TypeKeyInput (id=Tier_Input) at OrganizationSearchDV.pcf: line 47, column 35
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Tier = (__VALUE_TO_SET as typekey.Tier)
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at OrganizationSearchDV.pcf: line 52, column 46
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ProducerCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=BranchCode_Input) at OrganizationSearchDV.pcf: line 57, column 44
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.BranchCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at OrganizationSearchDV.pcf: line 62, column 46
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at OrganizationSearchDV.pcf: line 67, column 47
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at OrganizationSearchDV.pcf: line 28, column 42
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Type = (__VALUE_TO_SET as typekey.BusinessType)
    }
    
    // 'editable' attribute on TypeKeyInput (id=ProducerStatus_Input) at OrganizationSearchDV.pcf: line 41, column 45
    function editable_14 () : java.lang.Boolean {
      return not activeProducersOnly
    }
    
    // 'filter' attribute on TypeKeyInput (id=Type_Input) at OrganizationSearchDV.pcf: line 28, column 42
    function filter_9 (VALUE :  typekey.BusinessType, VALUES :  typekey.BusinessType[]) : java.lang.Boolean {
      return (not activeProducersOnly) or VALUE.hasCategory( BusinessTypeCategory.TC_PRODUCER )
    }
    
    // 'initialValue' attribute on Variable at OrganizationSearchDV.pcf: line 17, column 62
    function initialValue_0 () : gw.globalization.OrganizationNameSearchAdapter {
      return new gw.globalization.OrganizationNameSearchAdapter(searchCriteria)
    }
    
    // 'mode' attribute on InputSetRef at OrganizationSearchDV.pcf: line 33, column 45
    function mode_13 () : java.lang.Object {
      return searchCriteria.Country.Code
    }
    
    // 'mode' attribute on InputSetRef at OrganizationSearchDV.pcf: line 21, column 56
    function mode_5 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at OrganizationSearchDV.pcf: line 28, column 42
    function valueRoot_8 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TypeKeyInput (id=ProducerStatus_Input) at OrganizationSearchDV.pcf: line 41, column 45
    function value_15 () : typekey.ProducerStatus {
      return searchCriteria.ProducerStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=Tier_Input) at OrganizationSearchDV.pcf: line 47, column 35
    function value_20 () : typekey.Tier {
      return searchCriteria.Tier
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at OrganizationSearchDV.pcf: line 52, column 46
    function value_24 () : java.lang.String {
      return searchCriteria.ProducerCode
    }
    
    // 'value' attribute on TextInput (id=BranchCode_Input) at OrganizationSearchDV.pcf: line 57, column 44
    function value_28 () : java.lang.String {
      return searchCriteria.BranchCode
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at OrganizationSearchDV.pcf: line 62, column 46
    function value_32 () : java.lang.String {
      return searchCriteria.PolicyNumber
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at OrganizationSearchDV.pcf: line 67, column 47
    function value_36 () : java.lang.String {
      return searchCriteria.AccountNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at OrganizationSearchDV.pcf: line 28, column 42
    function value_6 () : typekey.BusinessType {
      return searchCriteria.Type
    }
    
    property get activeProducersOnly () : boolean {
      return getRequireValue("activeProducersOnly", 0) as java.lang.Boolean
    }
    
    property set activeProducersOnly ($arg :  boolean) {
      setRequireValue("activeProducersOnly", 0, $arg)
    }
    
    property get organizationNameAdapter () : gw.globalization.OrganizationNameSearchAdapter {
      return getVariableValue("organizationNameAdapter", 0) as gw.globalization.OrganizationNameSearchAdapter
    }
    
    property set organizationNameAdapter ($arg :  gw.globalization.OrganizationNameSearchAdapter) {
      setVariableValue("organizationNameAdapter", 0, $arg)
    }
    
    property get searchCriteria () : OrganizationSearchCriteria {
      return getRequireValue("searchCriteria", 0) as OrganizationSearchCriteria
    }
    
    property set searchCriteria ($arg :  OrganizationSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}