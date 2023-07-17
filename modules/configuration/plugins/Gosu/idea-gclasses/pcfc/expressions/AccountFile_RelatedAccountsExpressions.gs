package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_RelatedAccounts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_RelatedAccountsExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_RelatedAccounts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_RelatedAccountsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=AddRelatedAccount) at AccountFile_RelatedAccounts.pcf: line 24, column 59
    function action_0 () : void {
      RelatedAccountPopup.push(account)
    }
    
    // 'action' attribute on ToolbarButton (id=AddRelatedAccount) at AccountFile_RelatedAccounts.pcf: line 24, column 59
    function action_dest_1 () : pcf.api.Destination {
      return pcf.RelatedAccountPopup.createDestination(account)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RemoveRelatedAccount) at AccountFile_RelatedAccounts.pcf: line 29, column 62
    function allCheckedRowsAction_2 (CheckedValues :  entity.AccountAccount[], CheckedValuesErrors :  java.util.Map) : void {
      gw.web.account.AccountFileUIHelper.removeRelationships(CheckedValues)
    }
    
    // 'canVisit' attribute on Page (id=AccountFile_RelatedAccounts) at AccountFile_RelatedAccounts.pcf: line 12, column 35
    static function canVisit_37 (account :  Account) : java.lang.Boolean {
      return perm.Account.view(account) and perm.System.accountrelations
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_RelatedAccounts) at AccountFile_RelatedAccounts.pcf: line 12, column 35
    function infoBar_onEnter_38 (def :  pcf.AccountFileInfoBar) : void {
      def.onEnter(account)
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_RelatedAccounts) at AccountFile_RelatedAccounts.pcf: line 12, column 35
    function infoBar_refreshVariables_39 (def :  pcf.AccountFileInfoBar) : void {
      def.refreshVariables(account)
    }
    
    // 'parent' attribute on Page (id=AccountFile_RelatedAccounts) at AccountFile_RelatedAccounts.pcf: line 12, column 35
    static function parent_40 (account :  Account) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    // 'value' attribute on TypeKeyCell (id=RelationshipType_Cell) at AccountFile_RelatedAccounts.pcf: line 57, column 33
    function sortValue_4 (accountAccount :  entity.AccountAccount) : java.lang.Object {
      var relationship : gw.account.AccountRelationship = (accountAccount.getRelationship(account))
var otherAccount : entity.Account = (relationship.OtherAccount)
return relationship.RelationshipType
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at AccountFile_RelatedAccounts.pcf: line 63, column 51
    function sortValue_5 (accountAccount :  entity.AccountAccount) : java.lang.Object {
      var relationship : gw.account.AccountRelationship = (accountAccount.getRelationship(account))
var otherAccount : entity.Account = (relationship.OtherAccount)
return otherAccount.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AccountFile_RelatedAccounts.pcf: line 68, column 28
    function sortValue_6 (accountAccount :  entity.AccountAccount) : java.lang.Object {
      var relationship : gw.account.AccountRelationship = (accountAccount.getRelationship(account))
var otherAccount : entity.Account = (relationship.OtherAccount)
return otherAccount.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at AccountFile_RelatedAccounts.pcf: line 73, column 28
    function sortValue_7 (accountAccount :  entity.AccountAccount) : java.lang.Object {
      var relationship : gw.account.AccountRelationship = (accountAccount.getRelationship(account))
var otherAccount : entity.Account = (relationship.OtherAccount)
return otherAccount.AccountHolderContact.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on RowIterator at AccountFile_RelatedAccounts.pcf: line 38, column 47
    function value_29 () : entity.AccountAccount[] {
      return account.getAllRelatedAccounts(User.util.CurrentUser)
    }
    
    // 'visible' attribute on Toolbar at AccountFile_RelatedAccounts.pcf: line 20, column 46
    function visible_3 () : java.lang.Boolean {
      return perm.Account.edit(account)
    }
    
    override property get CurrentLocation () : pcf.AccountFile_RelatedAccounts {
      return super.CurrentLocation as pcf.AccountFile_RelatedAccounts
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_RelatedAccounts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountFile_RelatedAccountsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TypeKeyCell (id=RelationshipType_Cell) at AccountFile_RelatedAccounts.pcf: line 57, column 33
    function action_11 () : void {
      RelatedAccountPopup.push(account, accountAccount)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at AccountFile_RelatedAccounts.pcf: line 63, column 51
    function action_17 () : void {
      AccountFileForward.go(otherAccount)
    }
    
    // 'action' attribute on TypeKeyCell (id=RelationshipType_Cell) at AccountFile_RelatedAccounts.pcf: line 57, column 33
    function action_dest_12 () : pcf.api.Destination {
      return pcf.RelatedAccountPopup.createDestination(account, accountAccount)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at AccountFile_RelatedAccounts.pcf: line 63, column 51
    function action_dest_18 () : pcf.api.Destination {
      return pcf.AccountFileForward.createDestination(otherAccount)
    }
    
    // 'available' attribute on TypeKeyCell (id=RelationshipType_Cell) at AccountFile_RelatedAccounts.pcf: line 57, column 33
    function available_10 () : java.lang.Boolean {
      return perm.Account.edit(account)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_RelatedAccounts.pcf: line 42, column 52
    function initialValue_8 () : gw.account.AccountRelationship {
      return accountAccount.getRelationship(account)
    }
    
    // 'initialValue' attribute on Variable at AccountFile_RelatedAccounts.pcf: line 46, column 36
    function initialValue_9 () : entity.Account {
      return relationship.OtherAccount
    }
    
    // RowIterator at AccountFile_RelatedAccounts.pcf: line 38, column 47
    function initializeVariables_28 () : void {
        relationship = accountAccount.getRelationship(account);
  otherAccount = relationship.OtherAccount;

    }
    
    // 'value' attribute on TypeKeyCell (id=RelationshipType_Cell) at AccountFile_RelatedAccounts.pcf: line 57, column 33
    function valueRoot_14 () : java.lang.Object {
      return relationship
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at AccountFile_RelatedAccounts.pcf: line 63, column 51
    function valueRoot_20 () : java.lang.Object {
      return otherAccount
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AccountFile_RelatedAccounts.pcf: line 68, column 28
    function valueRoot_23 () : java.lang.Object {
      return otherAccount.AccountHolderContact
    }
    
    // 'value' attribute on TypeKeyCell (id=RelationshipType_Cell) at AccountFile_RelatedAccounts.pcf: line 57, column 33
    function value_13 () : typekey.AccountRelationshipType {
      return relationship.RelationshipType
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at AccountFile_RelatedAccounts.pcf: line 63, column 51
    function value_19 () : java.lang.String {
      return otherAccount.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at AccountFile_RelatedAccounts.pcf: line 68, column 28
    function value_22 () : java.lang.String {
      return otherAccount.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at AccountFile_RelatedAccounts.pcf: line 73, column 28
    function value_25 () : java.lang.String {
      return otherAccount.AccountHolderContact.PrimaryAddressDisplayValue
    }
    
    property get accountAccount () : entity.AccountAccount {
      return getIteratedValue(1) as entity.AccountAccount
    }
    
    property get otherAccount () : entity.Account {
      return getVariableValue("otherAccount", 1) as entity.Account
    }
    
    property set otherAccount ($arg :  entity.Account) {
      setVariableValue("otherAccount", 1, $arg)
    }
    
    property get relationship () : gw.account.AccountRelationship {
      return getVariableValue("relationship", 1) as gw.account.AccountRelationship
    }
    
    property set relationship ($arg :  gw.account.AccountRelationship) {
      setVariableValue("relationship", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_RelatedAccounts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SharedContactSearchPanelExpressionsImpl extends AccountFile_RelatedAccountsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Search) at AccountFile_RelatedAccounts.pcf: line 95, column 66
    function action_30 () : void {
      gw.api.util.SearchUtil.search()
    }
    
    // 'def' attribute on PanelRef at AccountFile_RelatedAccounts.pcf: line 88, column 58
    function def_onEnter_31 (def :  pcf.AccountSearchResultsLV) : void {
      def.onEnter(accountSummaries)
    }
    
    // 'def' attribute on PanelRef at AccountFile_RelatedAccounts.pcf: line 88, column 58
    function def_refreshVariables_32 (def :  pcf.AccountSearchResultsLV) : void {
      def.refreshVariables(accountSummaries)
    }
    
    // 'maxSearchResults' attribute on SearchPanel (id=SharedContactSearchPanel) at AccountFile_RelatedAccounts.pcf: line 86, column 84
    function maxSearchResults_33 () : java.lang.Object {
      return 100
    }
    
    // 'searchCriteria' attribute on SearchPanel (id=SharedContactSearchPanel) at AccountFile_RelatedAccounts.pcf: line 86, column 84
    function searchCriteria_35 () : gw.account.SharedContactAccountSearchCriteria {
      return new gw.account.SharedContactAccountSearchCriteria() { :Secure = true, :AccountNumber = account.AccountNumber }
    }
    
    // 'search' attribute on SearchPanel (id=SharedContactSearchPanel) at AccountFile_RelatedAccounts.pcf: line 86, column 84
    function search_34 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    property get accountSummaries () : gw.api.database.IQueryBeanResult<AccountSummary> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<AccountSummary>
    }
    
    property get searchCriteria () : gw.account.SharedContactAccountSearchCriteria {
      return getCriteriaValue(1) as gw.account.SharedContactAccountSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.account.SharedContactAccountSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}