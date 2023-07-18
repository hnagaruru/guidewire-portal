package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_AccountSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_AccountSearchExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_AccountSearch.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_AccountSearchExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (currentAccount :  Account, searchReason :  gw.account.AccountSearchReason) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at AccountFile_AccountSearch.pcf: line 19, column 69
    function def_onEnter_0 (def :  pcf.OtherAccountSearchScreen) : void {
      def.onEnter(currentAccount, searchReason)
    }
    
    // 'def' attribute on ScreenRef at AccountFile_AccountSearch.pcf: line 19, column 69
    function def_refreshVariables_1 (def :  pcf.OtherAccountSearchScreen) : void {
      def.refreshVariables(currentAccount, searchReason)
    }
    
    // 'parent' attribute on Page (id=AccountFile_AccountSearch) at AccountFile_AccountSearch.pcf: line 9, column 88
    static function parent_2 (currentAccount :  Account, searchReason :  gw.account.AccountSearchReason) : pcf.api.Destination {
      return pcf.AccountFile_Summary.createDestination(currentAccount)
    }
    
    // 'title' attribute on Page (id=AccountFile_AccountSearch) at AccountFile_AccountSearch.pcf: line 9, column 88
    static function title_3 (currentAccount :  Account, searchReason :  gw.account.AccountSearchReason) : java.lang.Object {
      return DisplayKey.get(searchReason.TitleDisplayKey, currentAccount.AccountNumber)
    }
    
    override property get CurrentLocation () : pcf.AccountFile_AccountSearch {
      return super.CurrentLocation as pcf.AccountFile_AccountSearch
    }
    
    property get currentAccount () : Account {
      return getVariableValue("currentAccount", 0) as Account
    }
    
    property set currentAccount ($arg :  Account) {
      setVariableValue("currentAccount", 0, $arg)
    }
    
    property get searchReason () : gw.account.AccountSearchReason {
      return getVariableValue("searchReason", 0) as gw.account.AccountSearchReason
    }
    
    property set searchReason ($arg :  gw.account.AccountSearchReason) {
      setVariableValue("searchReason", 0, $arg)
    }
    
    
  }
  
  
}