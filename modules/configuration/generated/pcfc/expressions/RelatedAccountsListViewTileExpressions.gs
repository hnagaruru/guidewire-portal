package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/RelatedAccountsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RelatedAccountsListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/RelatedAccountsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RelatedAccountsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=accountNumber_Cell) at RelatedAccountsListViewTile.pcf: line 35, column 49
    function action_5 () : void {
      AccountFileDoRetrievalForward.go(relatedAccount.AccountNumber)
    }
    
    // 'action' attribute on TextCell (id=accountNumber_Cell) at RelatedAccountsListViewTile.pcf: line 35, column 49
    function action_dest_6 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(relatedAccount.AccountNumber)
    }
    
    // 'value' attribute on TextCell (id=accountName_Cell) at RelatedAccountsListViewTile.pcf: line 29, column 67
    function valueRoot_3 () : java.lang.Object {
      return relatedAccount
    }
    
    // 'value' attribute on TextCell (id=accountName_Cell) at RelatedAccountsListViewTile.pcf: line 29, column 67
    function value_2 () : java.lang.String {
      return relatedAccount.AccountHolderContactNameAndNick
    }
    
    // 'value' attribute on TextCell (id=accountNumber_Cell) at RelatedAccountsListViewTile.pcf: line 35, column 49
    function value_7 () : java.lang.String {
      return relatedAccount.AccountNumber
    }
    
    property get relatedAccount () : entity.Account {
      return getIteratedValue(1) as entity.Account
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/overview/RelatedAccountsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RelatedAccountsListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=RelatedAccountsListViewTile) at RelatedAccountsListViewTile.pcf: line 11, column 60
    function action_13 () : void {
      AccountFile_RelatedAccounts.go(account)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=RelatedAccountsListViewTile) at RelatedAccountsListViewTile.pcf: line 11, column 60
    function action_dest_14 () : pcf.api.Destination {
      return pcf.AccountFile_RelatedAccounts.createDestination(account)
    }
    
    // 'initialValue' attribute on Variable at RelatedAccountsListViewTile.pcf: line 18, column 68
    function initialValue_11 () : gw.api.web.dashboard.ui.account.RelatedAccountHelper {
      return new gw.api.web.dashboard.ui.account.RelatedAccountHelper(account)
    }
    
    // 'value' attribute on TextCell (id=accountName_Cell) at RelatedAccountsListViewTile.pcf: line 29, column 67
    function sortValue_0 (relatedAccount :  entity.Account) : java.lang.Object {
      return relatedAccount.AccountHolderContactNameAndNick
    }
    
    // 'value' attribute on TextCell (id=accountNumber_Cell) at RelatedAccountsListViewTile.pcf: line 35, column 49
    function sortValue_1 (relatedAccount :  entity.Account) : java.lang.Object {
      return relatedAccount.AccountNumber
    }
    
    // 'value' attribute on RowIterator at RelatedAccountsListViewTile.pcf: line 23, column 36
    function value_10 () : entity.Account[] {
      return relatedAccountHelper.RelatedAccounts
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=RelatedAccountsListViewTile) at RelatedAccountsListViewTile.pcf: line 11, column 60
    function visible_12 () : java.lang.Boolean {
      return relatedAccountHelper.ViewMoreVisible
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get relatedAccountHelper () : gw.api.web.dashboard.ui.account.RelatedAccountHelper {
      return getVariableValue("relatedAccountHelper", 0) as gw.api.web.dashboard.ui.account.RelatedAccountHelper
    }
    
    property set relatedAccountHelper ($arg :  gw.api.web.dashboard.ui.account.RelatedAccountHelper) {
      setVariableValue("relatedAccountHelper", 0, $arg)
    }
    
    
  }
  
  
}