package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/OtherAccountSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OtherAccountSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/account/OtherAccountSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OtherAccountSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at OtherAccountSearchScreen.pcf: line 16, column 30
    function initialValue_0 () : entity.Account {
      return currentAccount
    }
    
    property get currentAccount () : entity.Account {
      return getRequireValue("currentAccount", 0) as entity.Account
    }
    
    property set currentAccount ($arg :  entity.Account) {
      setRequireValue("currentAccount", 0, $arg)
    }
    
    property get relatedToAccount () : entity.Account {
      return getVariableValue("relatedToAccount", 0) as entity.Account
    }
    
    property set relatedToAccount ($arg :  entity.Account) {
      setVariableValue("relatedToAccount", 0, $arg)
    }
    
    property get searchReason () : gw.account.AccountSearchReason {
      return getRequireValue("searchReason", 0) as gw.account.AccountSearchReason
    }
    
    property set searchReason ($arg :  gw.account.AccountSearchReason) {
      setRequireValue("searchReason", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/OtherAccountSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends OtherAccountSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at OtherAccountSearchScreen.pcf: line 27, column 66
    function def_onEnter_1 (def :  pcf.AccountSearchDV) : void {
      def.onEnter(searchCriteria, relatedToAccount)
    }
    
    // 'def' attribute on PanelRef at OtherAccountSearchScreen.pcf: line 29, column 91
    function def_onEnter_3 (def :  pcf.OtherAccountSearchResultsLV) : void {
      def.onEnter(accountSummaries, currentAccount, searchReason)
    }
    
    // 'def' attribute on PanelRef at OtherAccountSearchScreen.pcf: line 27, column 66
    function def_refreshVariables_2 (def :  pcf.AccountSearchDV) : void {
      def.refreshVariables(searchCriteria, relatedToAccount)
    }
    
    // 'def' attribute on PanelRef at OtherAccountSearchScreen.pcf: line 29, column 91
    function def_refreshVariables_4 (def :  pcf.OtherAccountSearchResultsLV) : void {
      def.refreshVariables(accountSummaries, currentAccount, searchReason)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at OtherAccountSearchScreen.pcf: line 25, column 82
    function maxSearchResults_5 () : java.lang.Object {
      return 100
    }
    
    // 'searchCriteria' attribute on SearchPanel at OtherAccountSearchScreen.pcf: line 25, column 82
    function searchCriteria_7 () : gw.account.AccountSearchCriteria {
      return new gw.account.AccountSearchCriteria(searchReason){ :Secure=true, :ExcludedAccount = currentAccount, :RestrictiveMinimumSearchCriteriaForPersonName =  true, :FirstNameExact = true, :LastNameExact = true, :CompanyNameExact = true }
    }
    
    // 'search' attribute on SearchPanel at OtherAccountSearchScreen.pcf: line 25, column 82
    function search_6 () : java.lang.Object {
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