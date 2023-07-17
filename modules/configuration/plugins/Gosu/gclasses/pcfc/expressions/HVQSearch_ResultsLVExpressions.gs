package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/HVQSearch_ResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HVQSearch_ResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/HVQSearch_ResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HVQSearch_ResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HVQSearch_ResultsLV.pcf: line 17, column 47
    function initialValue_0 () : gw.web.search.HVQSearchUIHelper {
      return new gw.web.search.HVQSearchUIHelper()
    }
    
    // 'value' attribute on TextCell (id=QuoteId_Cell) at HVQSearch_ResultsLV.pcf: line 47, column 25
    function sortValue_1 (quoteStoreSummary :  gw.quoting.QuoteSummarySearchResult) : java.lang.Object {
      return quoteStoreSummary.QuoteKey.PolicyQuoteID
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at HVQSearch_ResultsLV.pcf: line 52, column 43
    function sortValue_2 (quoteStoreSummary :  gw.quoting.QuoteSummarySearchResult) : java.lang.Object {
      return quoteStoreSummary.Name
    }
    
    // 'value' attribute on TextCell (id=EmailAddress_Cell) at HVQSearch_ResultsLV.pcf: line 57, column 25
    function sortValue_3 (quoteStoreSummary :  gw.quoting.QuoteSummarySearchResult) : java.lang.Object {
      return quoteStoreSummary.Email
    }
    
    // 'value' attribute on TextCell (id=WorkPhone_Cell) at HVQSearch_ResultsLV.pcf: line 62, column 25
    function sortValue_4 (quoteStoreSummary :  gw.quoting.QuoteSummarySearchResult) : java.lang.Object {
      return quoteStoreSummary.WorkPhone
    }
    
    // 'value' attribute on TextCell (id=Origin_Cell) at HVQSearch_ResultsLV.pcf: line 67, column 25
    function sortValue_5 (quoteStoreSummary :  gw.quoting.QuoteSummarySearchResult) : java.lang.Object {
      return searchHelper.quoteOrigin(quoteStoreSummary.FromQuoteStore)
    }
    
    // 'value' attribute on RowIterator (id=QuoteStoreSummaryIterator) at HVQSearch_ResultsLV.pcf: line 25, column 79
    function value_27 () : java.util.List<gw.quoting.QuoteSummarySearchResult> {
      return searchResults
    }
    
    property get searchHelper () : gw.web.search.HVQSearchUIHelper {
      return getVariableValue("searchHelper", 0) as gw.web.search.HVQSearchUIHelper
    }
    
    property set searchHelper ($arg :  gw.web.search.HVQSearchUIHelper) {
      setVariableValue("searchHelper", 0, $arg)
    }
    
    property get searchResults () : List<gw.quoting.QuoteSummarySearchResult> {
      return getRequireValue("searchResults", 0) as List<gw.quoting.QuoteSummarySearchResult>
    }
    
    property set searchResults ($arg :  List<gw.quoting.QuoteSummarySearchResult>) {
      setRequireValue("searchResults", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/HVQSearch_ResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HVQSearch_ResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=LinkExistingQuote) at HVQSearch_ResultsLV.pcf: line 41, column 61
    function action_10 () : void {
      JobForward.go(searchHelper.toSubmission(quoteStoreSummary.SubmissionNumber))
    }
    
    // 'action' attribute on Link (id=LinkToQuoteConversion) at HVQSearch_ResultsLV.pcf: line 35, column 57
    function action_7 () : void {
      HVQAccountSearchPopup.push(quoteStoreSummary)
    }
    
    // 'action' attribute on Link (id=LinkExistingQuote) at HVQSearch_ResultsLV.pcf: line 41, column 61
    function action_dest_11 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(searchHelper.toSubmission(quoteStoreSummary.SubmissionNumber))
    }
    
    // 'action' attribute on Link (id=LinkToQuoteConversion) at HVQSearch_ResultsLV.pcf: line 35, column 57
    function action_dest_8 () : pcf.api.Destination {
      return pcf.HVQAccountSearchPopup.createDestination(quoteStoreSummary)
    }
    
    // 'label' attribute on Link (id=LinkExistingQuote) at HVQSearch_ResultsLV.pcf: line 41, column 61
    function label_12 () : java.lang.Object {
      return quoteStoreSummary.SubmissionNumber
    }
    
    // 'value' attribute on TextCell (id=QuoteId_Cell) at HVQSearch_ResultsLV.pcf: line 47, column 25
    function valueRoot_14 () : java.lang.Object {
      return quoteStoreSummary.QuoteKey
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at HVQSearch_ResultsLV.pcf: line 52, column 43
    function valueRoot_17 () : java.lang.Object {
      return quoteStoreSummary
    }
    
    // 'value' attribute on TextCell (id=QuoteId_Cell) at HVQSearch_ResultsLV.pcf: line 47, column 25
    function value_13 () : java.lang.String {
      return quoteStoreSummary.QuoteKey.PolicyQuoteID
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at HVQSearch_ResultsLV.pcf: line 52, column 43
    function value_16 () : java.lang.String {
      return quoteStoreSummary.Name
    }
    
    // 'value' attribute on TextCell (id=EmailAddress_Cell) at HVQSearch_ResultsLV.pcf: line 57, column 25
    function value_19 () : java.lang.String {
      return quoteStoreSummary.Email
    }
    
    // 'value' attribute on TextCell (id=WorkPhone_Cell) at HVQSearch_ResultsLV.pcf: line 62, column 25
    function value_22 () : java.lang.String {
      return quoteStoreSummary.WorkPhone
    }
    
    // 'value' attribute on TextCell (id=Origin_Cell) at HVQSearch_ResultsLV.pcf: line 67, column 25
    function value_25 () : java.lang.String {
      return searchHelper.quoteOrigin(quoteStoreSummary.FromQuoteStore)
    }
    
    // 'visible' attribute on Link (id=LinkToQuoteConversion) at HVQSearch_ResultsLV.pcf: line 35, column 57
    function visible_6 () : java.lang.Boolean {
      return quoteStoreSummary.FromQuoteStore
    }
    
    // 'visible' attribute on Link (id=LinkExistingQuote) at HVQSearch_ResultsLV.pcf: line 41, column 61
    function visible_9 () : java.lang.Boolean {
      return not quoteStoreSummary.FromQuoteStore
    }
    
    property get quoteStoreSummary () : gw.quoting.QuoteSummarySearchResult {
      return getIteratedValue(1) as gw.quoting.QuoteSummarySearchResult
    }
    
    
  }
  
  
}