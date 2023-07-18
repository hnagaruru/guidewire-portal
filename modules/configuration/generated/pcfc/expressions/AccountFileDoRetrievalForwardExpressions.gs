package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFileDoRetrievalForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFileDoRetrievalForwardExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFileDoRetrievalForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFileDoRetrievalForwardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (accountNumber :  String) : int {
      return 0
    }
    
    // 'action' attribute on ForwardCondition at AccountFileDoRetrievalForward.pcf: line 25, column 34
    function action_2 () : void {
      pcf.AccountSearch.go(error)
    }
    
    // 'action' attribute on ForwardCondition at AccountFileDoRetrievalForward.pcf: line 28, column 109
    function action_5 () : void {
      AccountFileForward.go(retrievedAccount)
    }
    
    // 'action' attribute on ForwardCondition at AccountFileDoRetrievalForward.pcf: line 25, column 34
    function action_dest_3 () : pcf.api.Destination {
      return pcf.AccountSearch.createDestination(error)
    }
    
    // 'action' attribute on ForwardCondition at AccountFileDoRetrievalForward.pcf: line 28, column 109
    function action_dest_6 () : pcf.api.Destination {
      return pcf.AccountFileForward.createDestination(retrievedAccount)
    }
    
    // 'condition' attribute on ForwardCondition at AccountFileDoRetrievalForward.pcf: line 25, column 34
    function condition_4 () : java.lang.Boolean {
      return error != null
    }
    
    // 'condition' attribute on ForwardCondition at AccountFileDoRetrievalForward.pcf: line 28, column 109
    function condition_7 () : java.lang.Boolean {
      return retrievedAccount != null and (User.util.CurrentUser as User).canView( retrievedAccount )
    }
    
    // 'initialValue' attribute on Variable at AccountFileDoRetrievalForward.pcf: line 18, column 23
    function initialValue_0 () : Account {
      return accountNumber == null ? null : Account.finder.findAccountByAccountNumber(accountNumber)
    }
    
    // 'initialValue' attribute on Variable at AccountFileDoRetrievalForward.pcf: line 22, column 22
    function initialValue_1 () : String {
      return checkForError()
    }
    
    // 'parent' attribute on Forward (id=AccountFileDoRetrievalForward) at AccountFileDoRetrievalForward.pcf: line 7, column 31
    static function parent_8 (accountNumber :  String) : pcf.api.Destination {
      return pcf.AccountForward.createDestination()
    }
    
    override property get CurrentLocation () : pcf.AccountFileDoRetrievalForward {
      return super.CurrentLocation as pcf.AccountFileDoRetrievalForward
    }
    
    property get accountNumber () : String {
      return getVariableValue("accountNumber", 0) as String
    }
    
    property set accountNumber ($arg :  String) {
      setVariableValue("accountNumber", 0, $arg)
    }
    
    property get error () : String {
      return getVariableValue("error", 0) as String
    }
    
    property set error ($arg :  String) {
      setVariableValue("error", 0, $arg)
    }
    
    property get retrievedAccount () : Account {
      return getVariableValue("retrievedAccount", 0) as Account
    }
    
    property set retrievedAccount ($arg :  Account) {
      setVariableValue("retrievedAccount", 0, $arg)
    }
    
    function checkForError() : String{
      if (accountNumber == null)
        return DisplayKey.get("Web.Errors.MissingUrlParameter", "AccountNumber")
      if (retrievedAccount == null)
        return DisplayKey.get("Web.Errors.MissingFromSystem", "Account", accountNumber)
      if (not (User.util.CurrentUser as User).canView( retrievedAccount ))
         return DisplayKey.get("Java.Error.Permission.View", "account")
      return null
    }
    
    
  }
  
  
}