package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/new/NewAccountScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewAccountScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/account/new/NewAccountScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewAccountScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get forNewSubmission () : boolean {
      return getRequireValue("forNewSubmission", 0) as java.lang.Boolean
    }
    
    property set forNewSubmission ($arg :  boolean) {
      setRequireValue("forNewSubmission", 0, $arg)
    }
    
    function commitContactIfNew(contact : Contact) : Contact {
      if (contact.New) {
        contact.Bundle.commit()
      }
      return contact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/new/NewAccountScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends NewAccountScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=NewAccount_Company) at NewAccountScreen.pcf: line 37, column 85
    function action_2 () : void {
      CreateAccount.go(TC_COMPANY, new gw.account.AccountPopulator(searchCriteria), forNewSubmission)
    }
    
    // 'action' attribute on MenuItem (id=NewAccount_Person) at NewAccountScreen.pcf: line 41, column 84
    function action_4 () : void {
      CreateAccount.go(TC_PERSON, new gw.account.AccountPopulator(searchCriteria), forNewSubmission)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewAccount_FromAB) at NewAccountScreen.pcf: line 46, column 103
    function action_6 () : void {
      CreateAccountFromContactSearchPopup.push(searchCriteria)
    }
    
    // 'action' attribute on MenuItem (id=NewAccount_Company) at NewAccountScreen.pcf: line 37, column 85
    function action_dest_3 () : pcf.api.Destination {
      return pcf.CreateAccount.createDestination(TC_COMPANY, new gw.account.AccountPopulator(searchCriteria), forNewSubmission)
    }
    
    // 'action' attribute on MenuItem (id=NewAccount_Person) at NewAccountScreen.pcf: line 41, column 84
    function action_dest_5 () : pcf.api.Destination {
      return pcf.CreateAccount.createDestination(TC_PERSON, new gw.account.AccountPopulator(searchCriteria), forNewSubmission)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewAccount_FromAB) at NewAccountScreen.pcf: line 46, column 103
    function action_dest_7 () : pcf.api.Destination {
      return pcf.CreateAccountFromContactSearchPopup.createDestination(searchCriteria)
    }
    
    // 'available' attribute on ToolbarButton (id=NewAccountButton) at NewAccountScreen.pcf: line 33, column 26
    function available_9 () : java.lang.Boolean {
      return perm.Account.create
    }
    
    // 'def' attribute on PanelRef at NewAccountScreen.pcf: line 24, column 51
    function def_onEnter_0 (def :  pcf.NewAccountSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at NewAccountScreen.pcf: line 52, column 82
    function def_onEnter_11 (def :  pcf.NewAccountSearchResultsLV) : void {
      def.onEnter(accountSummaries, null)
    }
    
    // 'def' attribute on PanelRef at NewAccountScreen.pcf: line 24, column 51
    function def_refreshVariables_1 (def :  pcf.NewAccountSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at NewAccountScreen.pcf: line 52, column 82
    function def_refreshVariables_12 (def :  pcf.NewAccountSearchResultsLV) : void {
      def.refreshVariables(accountSummaries, null)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at NewAccountScreen.pcf: line 22, column 82
    function maxSearchResults_14 () : java.lang.Object {
      return 100
    }
    
    // 'onPick' attribute on PickerMenuItem (id=NewAccount_FromAB) at NewAccountScreen.pcf: line 46, column 103
    function onPick_8 (PickedValue :  Contact) : void {
      CreateAccountForContact.go(commitContactIfNew(PickedValue), forNewSubmission)
    }
    
    // 'searchCriteria' attribute on SearchPanel at NewAccountScreen.pcf: line 22, column 82
    function searchCriteria_16 () : gw.account.NewAccountScreenSearchCriteria {
      return new gw.account.NewAccountScreenSearchCriteria(){ :RestrictiveMinimumSearchCriteriaForPersonName = true, :FirstNameExact = true, :LastNameExact = true, :CompanyNameExact = true }
    }
    
    // 'search' attribute on SearchPanel at NewAccountScreen.pcf: line 22, column 82
    function search_15 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'visible' attribute on PanelRef at NewAccountScreen.pcf: line 52, column 82
    function visible_10 () : java.lang.Boolean {
      return accountSummaries != null and accountSummaries.Count > 0
    }
    
    // 'visible' attribute on PanelRef at NewAccountScreen.pcf: line 26, column 50
    function visible_13 () : java.lang.Boolean {
      return searchCriteria.SearchPerformed
    }
    
    property get accountSummaries () : gw.api.database.IQueryBeanResult<AccountSummary> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<AccountSummary>
    }
    
    property get searchCriteria () : gw.account.NewAccountScreenSearchCriteria {
      return getCriteriaValue(1) as gw.account.NewAccountScreenSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.account.NewAccountScreenSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}