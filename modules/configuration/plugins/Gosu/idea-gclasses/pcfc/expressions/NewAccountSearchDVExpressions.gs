package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/new/NewAccountSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAccountSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/new/NewAccountSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAccountSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at NewAccountSearchDV.pcf: line 34, column 56
    function def_onEnter_11 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at NewAccountSearchDV.pcf: line 34, column 56
    function def_onEnter_13 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at NewAccountSearchDV.pcf: line 25, column 56
    function def_onEnter_2 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at NewAccountSearchDV.pcf: line 49, column 71
    function def_onEnter_24 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.onEnter(new gw.pcf.contacts.NewAccountAddressAreaOwner(addrAreaAdapter))
    }
    
    // 'def' attribute on InputSetRef at NewAccountSearchDV.pcf: line 53, column 41
    function def_onEnter_27 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at NewAccountSearchDV.pcf: line 25, column 56
    function def_onEnter_4 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at NewAccountSearchDV.pcf: line 34, column 56
    function def_refreshVariables_12 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at NewAccountSearchDV.pcf: line 34, column 56
    function def_refreshVariables_14 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at NewAccountSearchDV.pcf: line 49, column 71
    function def_refreshVariables_25 (def :  pcf.AddressOwnerAddressInputSet) : void {
      def.refreshVariables(new gw.pcf.contacts.NewAccountAddressAreaOwner(addrAreaAdapter))
    }
    
    // 'def' attribute on InputSetRef at NewAccountSearchDV.pcf: line 53, column 41
    function def_refreshVariables_28 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on InputSetRef at NewAccountSearchDV.pcf: line 25, column 56
    function def_refreshVariables_3 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'def' attribute on InputSetRef at NewAccountSearchDV.pcf: line 25, column 56
    function def_refreshVariables_5 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(accountSearchAdapter))
    }
    
    // 'value' attribute on CheckBoxInput (id=FirstNameExact_Input) at NewAccountSearchDV.pcf: line 40, column 48
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.FirstNameExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=LastNameExact_Input) at NewAccountSearchDV.pcf: line 46, column 47
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.LastNameExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=CompanyNameExact_Input) at NewAccountSearchDV.pcf: line 31, column 50
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.CompanyNameExact = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at NewAccountSearchDV.pcf: line 14, column 61
    function initialValue_0 () : gw.globalization.AccountSearchCriteriaAdapter {
      return new gw.globalization.AccountSearchCriteriaAdapter(searchCriteria)
    }
    
    // 'initialValue' attribute on Variable at NewAccountSearchDV.pcf: line 19, column 60
    function initialValue_1 () : gw.globalization.AccountAddressSearchAdapter {
      return new gw.globalization.AccountAddressSearchAdapter(searchCriteria)
    }
    
    // 'mode' attribute on InputSetRef at NewAccountSearchDV.pcf: line 49, column 71
    function mode_26 () : java.lang.Object {
      return gw.pcf.AccountSearchHelper.getCountry(searchCriteria)
    }
    
    // 'mode' attribute on InputSetRef at NewAccountSearchDV.pcf: line 25, column 56
    function mode_6 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on CheckBoxInput (id=CompanyNameExact_Input) at NewAccountSearchDV.pcf: line 31, column 50
    function valueRoot_9 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on CheckBoxInput (id=FirstNameExact_Input) at NewAccountSearchDV.pcf: line 40, column 48
    function value_16 () : java.lang.Boolean {
      return searchCriteria.FirstNameExact
    }
    
    // 'value' attribute on CheckBoxInput (id=LastNameExact_Input) at NewAccountSearchDV.pcf: line 46, column 47
    function value_20 () : java.lang.Boolean {
      return searchCriteria.LastNameExact
    }
    
    // 'value' attribute on CheckBoxInput (id=CompanyNameExact_Input) at NewAccountSearchDV.pcf: line 31, column 50
    function value_7 () : java.lang.Boolean {
      return searchCriteria.CompanyNameExact
    }
    
    property get accountSearchAdapter () : gw.globalization.AccountSearchCriteriaAdapter {
      return getVariableValue("accountSearchAdapter", 0) as gw.globalization.AccountSearchCriteriaAdapter
    }
    
    property set accountSearchAdapter ($arg :  gw.globalization.AccountSearchCriteriaAdapter) {
      setVariableValue("accountSearchAdapter", 0, $arg)
    }
    
    property get addrAreaAdapter () : gw.globalization.AccountAddressSearchAdapter {
      return getVariableValue("addrAreaAdapter", 0) as gw.globalization.AccountAddressSearchAdapter
    }
    
    property set addrAreaAdapter ($arg :  gw.globalization.AccountAddressSearchAdapter) {
      setVariableValue("addrAreaAdapter", 0, $arg)
    }
    
    property get searchCriteria () : gw.account.AccountSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.account.AccountSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.account.AccountSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}