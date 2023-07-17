package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/AccountSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/AccountSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at AccountSearchResultsLV.pcf: line 25, column 25
    function sortValue_0 (accountSummary :  entity.AccountSummary) : java.lang.Object {
      return accountSummary.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AccountSearchResultsLV.pcf: line 30, column 25
    function sortValue_1 (accountSummary :  entity.AccountSummary) : java.lang.Object {
      return accountSummary.AccountHolderName
    }
    
    // 'value' attribute on RowIterator at AccountSearchResultsLV.pcf: line 17, column 81
    function value_16 () : gw.api.database.IQueryBeanResult<entity.AccountSummary> {
      return accountSummaries
    }
    
    property get accountSummaries () : gw.api.database.IQueryBeanResult<AccountSummary> {
      return getRequireValue("accountSummaries", 0) as gw.api.database.IQueryBeanResult<AccountSummary>
    }
    
    property set accountSummaries ($arg :  gw.api.database.IQueryBeanResult<AccountSummary>) {
      setRequireValue("accountSummaries", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/AccountSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at AccountSearchResultsLV.pcf: line 25, column 25
    function action_3 () : void {
      AccountFileDoRetrievalForward.go(accountSummary.AccountNumber)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at AccountSearchResultsLV.pcf: line 25, column 25
    function action_dest_4 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(accountSummary.AccountNumber)
    }
    
    // 'available' attribute on TextCell (id=AccountNumber_Cell) at AccountSearchResultsLV.pcf: line 25, column 25
    function available_2 () : java.lang.Boolean {
      return perm.Account.view(accountSummary.Account)
    }
    
    // 'pickValue' attribute on RowIterator at AccountSearchResultsLV.pcf: line 17, column 81
    function pickValue_15 () : Account {
      return accountSummary.Account
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at AccountSearchResultsLV.pcf: line 25, column 25
    function valueRoot_6 () : java.lang.Object {
      return accountSummary
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at AccountSearchResultsLV.pcf: line 37, column 24
    function value_12 () : java.lang.String {
      return accountSummary.AccountHolderAddress
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at AccountSearchResultsLV.pcf: line 25, column 25
    function value_5 () : java.lang.String {
      return accountSummary.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AccountSearchResultsLV.pcf: line 30, column 25
    function value_9 () : java.lang.String {
      return accountSummary.AccountHolderName
    }
    
    property get accountSummary () : entity.AccountSummary {
      return getIteratedValue(1) as entity.AccountSummary
    }
    
    
  }
  
  
}