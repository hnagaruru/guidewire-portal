package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopAccountsLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopAccountsLV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAccountsLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopAccountsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopAccountsLV.default.pcf: line 22, column 82
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopAccountFilters.myAccountFilters()
    }
    
    // 'initialValue' attribute on Variable at DesktopAccountsLV.default.pcf: line 12, column 70
    function initialValue_0 () : gw.api.database.IQueryBeanResult<AccountSummary> {
      return Account.finder.findAccountSummariesForUser(User.util.CurrentUser)
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopAccountsLV.default.pcf: line 26, column 24
    function sortBy_2 (account :  entity.AccountSummary) : java.lang.Object {
      return account.AccountHolderName
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.default.pcf: line 33, column 25
    function sortValue_3 (account :  entity.AccountSummary) : java.lang.Object {
      return account.AccountNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopAccountsLV.default.pcf: line 39, column 25
    function sortValue_4 (account :  entity.AccountSummary) : java.lang.Object {
      return account.AccountStatus
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DesktopAccountsLV.default.pcf: line 44, column 25
    function sortValue_5 (account :  entity.AccountSummary) : java.lang.Object {
      return account.AccountHolderName
    }
    
    // 'value' attribute on RowIterator at DesktopAccountsLV.default.pcf: line 18, column 81
    function value_20 () : gw.api.database.IQueryBeanResult<entity.AccountSummary> {
      return accounts
    }
    
    property get accounts () : gw.api.database.IQueryBeanResult<AccountSummary> {
      return getVariableValue("accounts", 0) as gw.api.database.IQueryBeanResult<AccountSummary>
    }
    
    property set accounts ($arg :  gw.api.database.IQueryBeanResult<AccountSummary>) {
      setVariableValue("accounts", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAccountsLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopAccountsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.default.pcf: line 33, column 25
    function action_6 () : void {
      pcf.AccountFileDoRetrievalForward.go( account.AccountNumber)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.default.pcf: line 33, column 25
    function action_dest_7 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination( account.AccountNumber)
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.default.pcf: line 33, column 25
    function valueRoot_9 () : java.lang.Object {
      return account
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopAccountsLV.default.pcf: line 39, column 25
    function value_11 () : typekey.AccountStatus {
      return account.AccountStatus
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DesktopAccountsLV.default.pcf: line 44, column 25
    function value_14 () : java.lang.String {
      return account.AccountHolderName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at DesktopAccountsLV.default.pcf: line 51, column 24
    function value_17 () : java.lang.String {
      return account.AccountHolderAddress
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.default.pcf: line 33, column 25
    function value_8 () : java.lang.String {
      return account.AccountNumber
    }
    
    property get account () : entity.AccountSummary {
      return getIteratedValue(1) as entity.AccountSummary
    }
    
    
  }
  
  
}