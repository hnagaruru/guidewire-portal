package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/SearchRelatedAccountPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SearchRelatedAccountPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/account/SearchRelatedAccountPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at SearchRelatedAccountPopup.pcf: line 33, column 89
    function pickValue_15 () : Account {
      return accountSummary.Account
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at SearchRelatedAccountPopup.pcf: line 38, column 57
    function valueRoot_7 () : java.lang.Object {
      return accountSummary
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at SearchRelatedAccountPopup.pcf: line 46, column 64
    function value_12 () : java.lang.String {
      return accountSummary.AccountHolderAddress
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at SearchRelatedAccountPopup.pcf: line 38, column 57
    function value_6 () : java.lang.String {
      return accountSummary.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at SearchRelatedAccountPopup.pcf: line 42, column 61
    function value_9 () : java.lang.String {
      return accountSummary.AccountHolderName
    }
    
    property get accountSummary () : entity.AccountSummary {
      return getIteratedValue(2) as entity.AccountSummary
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/SearchRelatedAccountPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends SearchRelatedAccountPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at SearchRelatedAccountPopup.pcf: line 23, column 68
    function def_onEnter_1 (def :  pcf.AccountSearchDV) : void {
      def.onEnter(searchCriteria, relatedToAccount)
    }
    
    // 'def' attribute on PanelRef at SearchRelatedAccountPopup.pcf: line 23, column 68
    function def_refreshVariables_2 (def :  pcf.AccountSearchDV) : void {
      def.refreshVariables(searchCriteria, relatedToAccount)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at SearchRelatedAccountPopup.pcf: line 21, column 84
    function maxSearchResults_17 () : java.lang.Object {
      return 100
    }
    
    // 'searchCriteria' attribute on SearchPanel at SearchRelatedAccountPopup.pcf: line 21, column 84
    function searchCriteria_19 () : gw.account.AccountSearchCriteria {
      return new gw.account.AccountSearchCriteria() { :Secure = true , :FirstNameExact = false, :LastNameExact = false, :CompanyNameExact = false}
    }
    
    // 'search' attribute on SearchPanel at SearchRelatedAccountPopup.pcf: line 21, column 84
    function search_18 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at SearchRelatedAccountPopup.pcf: line 38, column 57
    function sortValue_3 (accountSummary :  entity.AccountSummary) : java.lang.Object {
      return accountSummary.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at SearchRelatedAccountPopup.pcf: line 42, column 61
    function sortValue_4 (accountSummary :  entity.AccountSummary) : java.lang.Object {
      return accountSummary.AccountHolderName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at SearchRelatedAccountPopup.pcf: line 46, column 64
    function sortValue_5 (accountSummary :  entity.AccountSummary) : java.lang.Object {
      return accountSummary.AccountHolderAddress
    }
    
    // 'value' attribute on RowIterator at SearchRelatedAccountPopup.pcf: line 33, column 89
    function value_16 () : gw.api.database.IQueryBeanResult<entity.AccountSummary> {
      return accountSummaries
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
  
  @javax.annotation.Generated("config/web/pcf/account/SearchRelatedAccountPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchRelatedAccountPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at SearchRelatedAccountPopup.pcf: line 12, column 23
    function initialValue_0 () : Account {
      return null
    }
    
    override property get CurrentLocation () : pcf.SearchRelatedAccountPopup {
      return super.CurrentLocation as pcf.SearchRelatedAccountPopup
    }
    
    property get relatedToAccount () : Account {
      return getVariableValue("relatedToAccount", 0) as Account
    }
    
    property set relatedToAccount ($arg :  Account) {
      setVariableValue("relatedToAccount", 0, $arg)
    }
    
    
  }
  
  
}