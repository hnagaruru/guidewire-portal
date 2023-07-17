package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/billing/BillingAccountSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingAccountSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/billing/BillingAccountSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingAccountSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (accountCurrency :  Currency) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at BillingAccountSearchPopup.pcf: line 14, column 54
    function initialValue_0 () : gw.plugin.billing.IBillingSystemPlugin {
      return gw.plugin.Plugins.get(gw.plugin.billing.IBillingSystemPlugin)
    }
    
    override property get CurrentLocation () : pcf.BillingAccountSearchPopup {
      return super.CurrentLocation as pcf.BillingAccountSearchPopup
    }
    
    property get accountCurrency () : Currency {
      return getVariableValue("accountCurrency", 0) as Currency
    }
    
    property set accountCurrency ($arg :  Currency) {
      setVariableValue("accountCurrency", 0, $arg)
    }
    
    property get billingSystemPlugin () : gw.plugin.billing.IBillingSystemPlugin {
      return getVariableValue("billingSystemPlugin", 0) as gw.plugin.billing.IBillingSystemPlugin
    }
    
    property set billingSystemPlugin ($arg :  gw.plugin.billing.IBillingSystemPlugin) {
      setVariableValue("billingSystemPlugin", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/billing/BillingAccountSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=AccountName_Cell) at BillingAccountSearchPopup.pcf: line 68, column 53
    function label_29 () : java.lang.Object {
      return gw.billing.PolicyPeriodBillingInstructionsManager.showKanjiFields() ? DisplayKey.get("Web.AccountSearchResults.NamePhonetic") : DisplayKey.get("Web.AccountSearchResults.Name")
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at BillingAccountSearchPopup.pcf: line 64, column 55
    function valueRoot_27 () : java.lang.Object {
      return searchResult
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at BillingAccountSearchPopup.pcf: line 64, column 55
    function value_26 () : java.lang.String {
      return searchResult.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=AccountName_Cell) at BillingAccountSearchPopup.pcf: line 68, column 53
    function value_30 () : java.lang.String {
      return searchResult.AccountName
    }
    
    // 'value' attribute on TextCell (id=AccountNameKanji_Cell) at BillingAccountSearchPopup.pcf: line 73, column 98
    function value_34 () : java.lang.String {
      return searchResult.AccountNameKanji
    }
    
    // 'value' attribute on TextCell (id=PrimaryPayer_Cell) at BillingAccountSearchPopup.pcf: line 77, column 54
    function value_38 () : java.lang.String {
      return searchResult.PrimaryPayer
    }
    
    // 'visible' attribute on TextCell (id=AccountNameKanji_Cell) at BillingAccountSearchPopup.pcf: line 73, column 98
    function visible_36 () : java.lang.Boolean {
      return gw.billing.PolicyPeriodBillingInstructionsManager.showKanjiFields()
    }
    
    property get searchResult () : gw.plugin.billing.BillingAccountSearchResult {
      return getIteratedValue(2) as gw.plugin.billing.BillingAccountSearchResult
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/billing/BillingAccountSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends BillingAccountSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BillingAccountSearchPopup.pcf: line 48, column 47
    function def_onEnter_18 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at BillingAccountSearchPopup.pcf: line 48, column 47
    function def_refreshVariables_19 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=AccountNameKanji_Input) at BillingAccountSearchPopup.pcf: line 44, column 94
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AccountNameKanji = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at BillingAccountSearchPopup.pcf: line 33, column 53
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at BillingAccountSearchPopup.pcf: line 38, column 51
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.AccountName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'inputConversion' attribute on TextInput (id=AccountNumber_Input) at BillingAccountSearchPopup.pcf: line 33, column 53
    function inputConversion_1 (VALUE :  java.lang.String) : java.lang.Object {
      return VALUE?.trim()
    }
    
    // 'label' attribute on TextCell (id=AccountName_Cell) at BillingAccountSearchPopup.pcf: line 68, column 53
    function label_21 () : java.lang.Object {
      return gw.billing.PolicyPeriodBillingInstructionsManager.showKanjiFields() ? DisplayKey.get("Web.AccountSearchResults.NamePhonetic") : DisplayKey.get("Web.AccountSearchResults.Name")
    }
    
    // 'label' attribute on TextInput (id=AccountName_Input) at BillingAccountSearchPopup.pcf: line 38, column 51
    function label_6 () : java.lang.Object {
      return gw.billing.PolicyPeriodBillingInstructionsManager.showKanjiFields() ? DisplayKey.get("Web.AccountSearch.AccountNamePhonetic") : DisplayKey.get("Web.AccountSearch.AccountName")
    }
    
    // 'searchCriteria' attribute on SearchPanel at BillingAccountSearchPopup.pcf: line 25, column 76
    function searchCriteria_44 () : gw.plugin.billing.BillingAccountSearchCriteria {
      return new gw.plugin.billing.BillingAccountSearchCriteria() {:ListBill = true, :Currency = accountCurrency}
    }
    
    // 'search' attribute on SearchPanel at BillingAccountSearchPopup.pcf: line 25, column 76
    function search_43 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at BillingAccountSearchPopup.pcf: line 64, column 55
    function sortValue_20 (searchResult :  gw.plugin.billing.BillingAccountSearchResult) : java.lang.Object {
      return searchResult.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=AccountName_Cell) at BillingAccountSearchPopup.pcf: line 68, column 53
    function sortValue_22 (searchResult :  gw.plugin.billing.BillingAccountSearchResult) : java.lang.Object {
      return searchResult.AccountName
    }
    
    // 'value' attribute on TextCell (id=AccountNameKanji_Cell) at BillingAccountSearchPopup.pcf: line 73, column 98
    function sortValue_23 (searchResult :  gw.plugin.billing.BillingAccountSearchResult) : java.lang.Object {
      return searchResult.AccountNameKanji
    }
    
    // 'value' attribute on TextCell (id=PrimaryPayer_Cell) at BillingAccountSearchPopup.pcf: line 77, column 54
    function sortValue_25 (searchResult :  gw.plugin.billing.BillingAccountSearchResult) : java.lang.Object {
      return searchResult.PrimaryPayer
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at BillingAccountSearchPopup.pcf: line 33, column 53
    function valueRoot_4 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=AccountNameKanji_Input) at BillingAccountSearchPopup.pcf: line 44, column 94
    function value_13 () : java.lang.String {
      return searchCriteria.AccountNameKanji
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at BillingAccountSearchPopup.pcf: line 33, column 53
    function value_2 () : java.lang.String {
      return searchCriteria.AccountNumber
    }
    
    // 'value' attribute on RowIterator at BillingAccountSearchPopup.pcf: line 59, column 74
    function value_42 () : gw.plugin.billing.BillingAccountSearchResult[] {
      return searchResults
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at BillingAccountSearchPopup.pcf: line 38, column 51
    function value_7 () : java.lang.String {
      return searchCriteria.AccountName
    }
    
    // 'visible' attribute on TextInput (id=AccountNameKanji_Input) at BillingAccountSearchPopup.pcf: line 44, column 94
    function visible_12 () : java.lang.Boolean {
      return gw.billing.PolicyPeriodBillingInstructionsManager.showKanjiFields()
    }
    
    property get searchCriteria () : gw.plugin.billing.BillingAccountSearchCriteria {
      return getCriteriaValue(1) as gw.plugin.billing.BillingAccountSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.plugin.billing.BillingAccountSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResults () : gw.plugin.billing.BillingAccountSearchResult[] {
      return getResultsValue(1) as gw.plugin.billing.BillingAccountSearchResult[]
    }
    
    
  }
  
  
}