package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/AccountSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/search/AccountSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get relatedToAccount () : Account {
      return getRequireValue("relatedToAccount", 0) as Account
    }
    
    property set relatedToAccount ($arg :  Account) {
      setRequireValue("relatedToAccount", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/AccountSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends AccountSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=PrintMe) at AccountSearchScreen.pcf: line 29, column 74
    function action_2 () : void {
      gw.api.print.ListViewPrintOptionPopupAction.printListViewOnlyWithOptions( "AccountSearchResultsLV" )
    }
    
    // 'def' attribute on PanelRef at AccountSearchScreen.pcf: line 20, column 66
    function def_onEnter_0 (def :  pcf.AccountSearchDV) : void {
      def.onEnter(searchCriteria, relatedToAccount)
    }
    
    // 'def' attribute on PanelRef at AccountSearchScreen.pcf: line 22, column 56
    function def_onEnter_3 (def :  pcf.AccountSearchResultsLV) : void {
      def.onEnter(accountSummaries)
    }
    
    // 'def' attribute on PanelRef at AccountSearchScreen.pcf: line 20, column 66
    function def_refreshVariables_1 (def :  pcf.AccountSearchDV) : void {
      def.refreshVariables(searchCriteria, relatedToAccount)
    }
    
    // 'def' attribute on PanelRef at AccountSearchScreen.pcf: line 22, column 56
    function def_refreshVariables_4 (def :  pcf.AccountSearchResultsLV) : void {
      def.refreshVariables(accountSummaries)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at AccountSearchScreen.pcf: line 18, column 82
    function maxSearchResults_5 () : java.lang.Object {
      return 100
    }
    
    // 'searchCriteria' attribute on SearchPanel at AccountSearchScreen.pcf: line 18, column 82
    function searchCriteria_7 () : gw.account.AccountSearchCriteria {
      return new gw.account.AccountSearchCriteria() {:Secure = true, :RestrictiveMinimumSearchCriteriaForPersonName = true, :FirstNameExact = true, :LastNameExact = true, :CompanyNameExact = true}
    }
    
    // 'search' attribute on SearchPanel at AccountSearchScreen.pcf: line 18, column 82
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