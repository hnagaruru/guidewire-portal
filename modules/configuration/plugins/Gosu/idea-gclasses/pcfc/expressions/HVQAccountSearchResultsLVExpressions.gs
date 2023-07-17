package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/HVQAccountSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HVQAccountSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/HVQAccountSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HVQAccountSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at HVQAccountSearchResultsLV.pcf: line 33, column 49
    function sortValue_0 (accountSummary :  entity.AccountSummary) : java.lang.Object {
      return accountSummary.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at HVQAccountSearchResultsLV.pcf: line 38, column 25
    function sortValue_1 (accountSummary :  entity.AccountSummary) : java.lang.Object {
      return accountSummary.AccountHolderName
    }
    
    // 'value' attribute on RowIterator at HVQAccountSearchResultsLV.pcf: line 19, column 81
    function value_17 () : gw.api.database.IQueryBeanResult<entity.AccountSummary> {
      return accountSummaries
    }
    
    property get accountSummaries () : gw.api.database.IQueryBeanResult<AccountSummary> {
      return getRequireValue("accountSummaries", 0) as gw.api.database.IQueryBeanResult<AccountSummary>
    }
    
    property set accountSummaries ($arg :  gw.api.database.IQueryBeanResult<AccountSummary>) {
      setRequireValue("accountSummaries", 0, $arg)
    }
    
    property get quoteIdentifier () : String {
      return getRequireValue("quoteIdentifier", 0) as String
    }
    
    property set quoteIdentifier ($arg :  String) {
      setRequireValue("quoteIdentifier", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/HVQAccountSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HVQAccountSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=SelectAccountButton) at HVQAccountSearchResultsLV.pcf: line 26, column 38
    function action_2 () : void {
      JobForward.go(new gw.web.search.HVQSearchUIHelper().getJobForReconstitutedPeriodOnExistingAccount(quoteIdentifier, accountSummary))
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at HVQAccountSearchResultsLV.pcf: line 33, column 49
    function action_5 () : void {
      AccountFileDoRetrievalForward.go(accountSummary.AccountNumber)
    }
    
    // 'action' attribute on Link (id=SelectAccountButton) at HVQAccountSearchResultsLV.pcf: line 26, column 38
    function action_dest_3 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(new gw.web.search.HVQSearchUIHelper().getJobForReconstitutedPeriodOnExistingAccount(quoteIdentifier, accountSummary))
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at HVQAccountSearchResultsLV.pcf: line 33, column 49
    function action_dest_6 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(accountSummary.AccountNumber)
    }
    
    // 'available' attribute on TextCell (id=AccountNumber_Cell) at HVQAccountSearchResultsLV.pcf: line 33, column 49
    function available_4 () : java.lang.Boolean {
      return perm.Account.view(accountSummary.Account)
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at HVQAccountSearchResultsLV.pcf: line 33, column 49
    function valueRoot_8 () : java.lang.Object {
      return accountSummary
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at HVQAccountSearchResultsLV.pcf: line 38, column 25
    function value_11 () : java.lang.String {
      return accountSummary.AccountHolderName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at HVQAccountSearchResultsLV.pcf: line 44, column 56
    function value_14 () : java.lang.String {
      return accountSummary.AccountHolderAddress
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at HVQAccountSearchResultsLV.pcf: line 33, column 49
    function value_7 () : java.lang.String {
      return accountSummary.AccountNumber
    }
    
    property get accountSummary () : entity.AccountSummary {
      return getIteratedValue(1) as entity.AccountSummary
    }
    
    
  }
  
  
}