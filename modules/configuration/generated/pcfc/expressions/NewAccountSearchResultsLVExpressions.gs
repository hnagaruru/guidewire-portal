package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/new/NewAccountSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAccountSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/new/NewAccountSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NewAccountSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at NewAccountSearchResultsLV.pcf: line 27, column 49
    function action_4 () : void {
      AccountFileDoRetrievalForward.go(accountSummary.AccountNumber)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at NewAccountSearchResultsLV.pcf: line 27, column 49
    function action_dest_5 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(accountSummary.AccountNumber)
    }
    
    // 'available' attribute on TextCell (id=AccountNumber_Cell) at NewAccountSearchResultsLV.pcf: line 27, column 49
    function available_3 () : java.lang.Boolean {
      return perm.Account.view(accountSummary.Account)
    }
    
    // 'canPick' attribute on RowIterator at NewAccountSearchResultsLV.pcf: line 20, column 81
    function canPick_16 () : java.lang.Boolean {
      return perm.Account.newSubmission(accountSummary.Account)
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at NewAccountSearchResultsLV.pcf: line 27, column 49
    function valueRoot_7 () : java.lang.Object {
      return accountSummary
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at NewAccountSearchResultsLV.pcf: line 31, column 53
    function value_10 () : java.lang.String {
      return accountSummary.AccountHolderName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at NewAccountSearchResultsLV.pcf: line 35, column 56
    function value_13 () : java.lang.String {
      return accountSummary.AccountHolderAddress
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at NewAccountSearchResultsLV.pcf: line 27, column 49
    function value_6 () : java.lang.String {
      return accountSummary.AccountNumber
    }
    
    property get accountSummary () : entity.AccountSummary {
      return getIteratedValue(1) as entity.AccountSummary
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/new/NewAccountSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAccountSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at NewAccountSearchResultsLV.pcf: line 27, column 49
    function sortValue_0 (accountSummary :  entity.AccountSummary) : java.lang.Object {
      return accountSummary.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at NewAccountSearchResultsLV.pcf: line 31, column 53
    function sortValue_1 (accountSummary :  entity.AccountSummary) : java.lang.Object {
      return accountSummary.AccountHolderName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at NewAccountSearchResultsLV.pcf: line 35, column 56
    function sortValue_2 (accountSummary :  entity.AccountSummary) : java.lang.Object {
      return accountSummary.AccountHolderAddress
    }
    
    // 'value' attribute on RowIterator at NewAccountSearchResultsLV.pcf: line 20, column 81
    function value_18 () : gw.api.database.IQueryBeanResult<entity.AccountSummary> {
      return accountSummaries
    }
    
    property get accountSummaries () : gw.api.database.IQueryBeanResult<AccountSummary> {
      return getRequireValue("accountSummaries", 0) as gw.api.database.IQueryBeanResult<AccountSummary>
    }
    
    property set accountSummaries ($arg :  gw.api.database.IQueryBeanResult<AccountSummary>) {
      setRequireValue("accountSummaries", 0, $arg)
    }
    
    property get producerSelection () : ProducerSelection {
      return getRequireValue("producerSelection", 0) as ProducerSelection
    }
    
    property set producerSelection ($arg :  ProducerSelection) {
      setRequireValue("producerSelection", 0, $arg)
    }
    
    
  }
  
  
}