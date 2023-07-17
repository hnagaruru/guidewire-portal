package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/HVQPolicySearchPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HVQPolicySearchPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/HVQPolicySearchPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HVQPolicySearchPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get defaultQuoteKey () : gw.api.quoting.QuoteKey {
      return getRequireValue("defaultQuoteKey", 0) as gw.api.quoting.QuoteKey
    }
    
    property set defaultQuoteKey ($arg :  gw.api.quoting.QuoteKey) {
      setRequireValue("defaultQuoteKey", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/HVQPolicySearchPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends HVQPolicySearchPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at HVQPolicySearchPanelSet.pcf: line 70, column 45
    function def_onEnter_28 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at HVQPolicySearchPanelSet.pcf: line 74, column 49
    function def_onEnter_30 (def :  pcf.HVQSearch_ResultsLV) : void {
      def.onEnter(searchResult)
    }
    
    // 'def' attribute on InputSetRef at HVQPolicySearchPanelSet.pcf: line 70, column 45
    function def_refreshVariables_29 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on PanelRef at HVQPolicySearchPanelSet.pcf: line 74, column 49
    function def_refreshVariables_31 (def :  pcf.HVQSearch_ResultsLV) : void {
      def.refreshVariables(searchResult)
    }
    
    // 'value' attribute on TextInput (id=QuoteId_Input) at HVQPolicySearchPanelSet.pcf: line 30, column 45
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.QuoteID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=CompanyName_Input) at HVQPolicySearchPanelSet.pcf: line 48, column 49
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.CompanyName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=WorkPhone_Input) at HVQPolicySearchPanelSet.pcf: line 54, column 47
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.WorkPhone = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EmailAddress_Input) at HVQPolicySearchPanelSet.pcf: line 60, column 43
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Email = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=HVQFilter_Input) at HVQPolicySearchPanelSet.pcf: line 66, column 47
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.HVQFilter = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at HVQPolicySearchPanelSet.pcf: line 36, column 47
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.FirstName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at HVQPolicySearchPanelSet.pcf: line 42, column 46
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.LastName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at HVQPolicySearchPanelSet.pcf: line 21, column 75
    function maxSearchResults_32 () : java.lang.Object {
      return searchCriteria.ResultLimit
    }
    
    // 'searchCriteria' attribute on SearchPanel at HVQPolicySearchPanelSet.pcf: line 21, column 75
    function searchCriteria_34 () : gw.quoting.QuoteSearchCriteria {
      return new gw.quoting.QuoteSearchCriteria(gw.web.search.HVQSearchUIHelper.FACTORY, gw.api.system.PCConfigParameters.MaxHVQSearchResults.Value)
    }
    
    // 'searchOnEnter' attribute on SearchPanel at HVQPolicySearchPanelSet.pcf: line 21, column 75
    function searchOnEnter_35 () : java.lang.Boolean {
      return gw.web.search.HVQSearchUIHelper.populateQuoteSearchCriteria(searchCriteria, defaultQuoteKey)
    }
    
    // 'search' attribute on SearchPanel at HVQPolicySearchPanelSet.pcf: line 21, column 75
    function search_33 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on TextInput (id=QuoteId_Input) at HVQPolicySearchPanelSet.pcf: line 30, column 45
    function valueRoot_2 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on TextInput (id=QuoteId_Input) at HVQPolicySearchPanelSet.pcf: line 30, column 45
    function value_0 () : java.lang.String {
      return searchCriteria.QuoteID
    }
    
    // 'value' attribute on TextInput (id=CompanyName_Input) at HVQPolicySearchPanelSet.pcf: line 48, column 49
    function value_12 () : java.lang.String {
      return searchCriteria.CompanyName
    }
    
    // 'value' attribute on TextInput (id=WorkPhone_Input) at HVQPolicySearchPanelSet.pcf: line 54, column 47
    function value_16 () : java.lang.String {
      return searchCriteria.WorkPhone
    }
    
    // 'value' attribute on TextInput (id=EmailAddress_Input) at HVQPolicySearchPanelSet.pcf: line 60, column 43
    function value_20 () : java.lang.String {
      return searchCriteria.Email
    }
    
    // 'value' attribute on CheckBoxInput (id=HVQFilter_Input) at HVQPolicySearchPanelSet.pcf: line 66, column 47
    function value_24 () : java.lang.Boolean {
      return searchCriteria.HVQFilter
    }
    
    // 'value' attribute on TextInput (id=FirstName_Input) at HVQPolicySearchPanelSet.pcf: line 36, column 47
    function value_4 () : java.lang.String {
      return searchCriteria.FirstName
    }
    
    // 'value' attribute on TextInput (id=LastName_Input) at HVQPolicySearchPanelSet.pcf: line 42, column 46
    function value_8 () : java.lang.String {
      return searchCriteria.LastName
    }
    
    property get searchCriteria () : gw.quoting.QuoteSearchCriteria {
      return getCriteriaValue(1) as gw.quoting.QuoteSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.quoting.QuoteSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResult () : List<gw.quoting.QuoteSummarySearchResult> {
      return getResultsValue(1) as List<gw.quoting.QuoteSummarySearchResult>
    }
    
    
  }
  
  
}