package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/HVQAccountSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HVQAccountSearchPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/search/HVQAccountSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HVQAccountSearchPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (quoteStoreSummary :  gw.quoting.QuoteSummarySearchResult) : int {
      return 0
    }
    
    override property get CurrentLocation () : pcf.HVQAccountSearchPopup {
      return super.CurrentLocation as pcf.HVQAccountSearchPopup
    }
    
    property get quoteStoreSummary () : gw.quoting.QuoteSummarySearchResult {
      return getVariableValue("quoteStoreSummary", 0) as gw.quoting.QuoteSummarySearchResult
    }
    
    property set quoteStoreSummary ($arg :  gw.quoting.QuoteSummarySearchResult) {
      setVariableValue("quoteStoreSummary", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/HVQAccountSearchPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends HVQAccountSearchPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ReconstituteNewAccount) at HVQAccountSearchPopup.pcf: line 36, column 101
    function action_2 () : void {
      JobForward.go(new gw.web.search.HVQSearchUIHelper().getJobForReconstitutedPeriodOnNewAccount(quoteStoreSummary.QuoteKey.PolicyQuoteID))
    }
    
    // 'action' attribute on ToolbarButton (id=ReconstituteNewAccount) at HVQAccountSearchPopup.pcf: line 36, column 101
    function action_dest_3 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(new gw.web.search.HVQSearchUIHelper().getJobForReconstitutedPeriodOnNewAccount(quoteStoreSummary.QuoteKey.PolicyQuoteID))
    }
    
    // 'def' attribute on PanelRef at HVQAccountSearchPopup.pcf: line 26, column 56
    function def_onEnter_0 (def :  pcf.AccountSearchDV) : void {
      def.onEnter(searchCriteria, null)
    }
    
    // 'def' attribute on PanelRef at HVQAccountSearchPopup.pcf: line 28, column 103
    function def_onEnter_4 (def :  pcf.HVQAccountSearchResultsLV) : void {
      def.onEnter(accountSummaries, quoteStoreSummary.QuoteKey.PolicyQuoteID)
    }
    
    // 'def' attribute on PanelRef at HVQAccountSearchPopup.pcf: line 26, column 56
    function def_refreshVariables_1 (def :  pcf.AccountSearchDV) : void {
      def.refreshVariables(searchCriteria, null)
    }
    
    // 'def' attribute on PanelRef at HVQAccountSearchPopup.pcf: line 28, column 103
    function def_refreshVariables_5 (def :  pcf.HVQAccountSearchResultsLV) : void {
      def.refreshVariables(accountSummaries, quoteStoreSummary.QuoteKey.PolicyQuoteID)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at HVQAccountSearchPopup.pcf: line 24, column 84
    function maxSearchResults_6 () : java.lang.Object {
      return 100
    }
    
    // 'searchCriteria' attribute on SearchPanel at HVQAccountSearchPopup.pcf: line 24, column 84
    function searchCriteria_8 () : gw.account.AccountSearchCriteria {
      return new gw.account.AccountSearchCriteria() {:Secure = true, :RestrictiveMinimumSearchCriteriaForPersonName = true, :FirstNameExact = true, :LastNameExact = true, :CompanyNameExact = true} // clears the search criteria
    }
    
    // 'searchOnEnter' attribute on SearchPanel at HVQAccountSearchPopup.pcf: line 24, column 84
    function searchOnEnter_9 () : java.lang.Boolean {
      searchCriteria = gw.web.search.HVQSearchUIHelper.createAccountSearchCriteria(quoteStoreSummary); return true // initializes the search criteria with data from the quote
    }
    
    // 'search' attribute on SearchPanel at HVQAccountSearchPopup.pcf: line 24, column 84
    function search_7 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    property get accountSummaries () : gw.api.database.IQueryBeanResult<AccountSummary> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<AccountSummary>
    }
    
    property get searchCriteria () : gw.account.AccountSearchCriteria {
      return getCriteriaValue(1) as gw.account.AccountSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.account.AccountSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}