package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMARExcludedAccountsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IMARExcludedAccountsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMARExcludedAccountsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IMARExcludedAccountsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at IMARExcludedAccountsDV.pcf: line 36, column 30
    function sortBy_1 (excludedAccount :  entity.IMExcludedAccount) : java.lang.Object {
      return excludedAccount.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=AREAAccountNumber_Cell) at IMARExcludedAccountsDV.pcf: line 43, column 56
    function sortValue_2 (excludedAccount :  entity.IMExcludedAccount) : java.lang.Object {
      return excludedAccount.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=AREADescription_Cell) at IMARExcludedAccountsDV.pcf: line 49, column 54
    function sortValue_3 (excludedAccount :  entity.IMExcludedAccount) : java.lang.Object {
      return excludedAccount.Description
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ExcludedAccountsiterator) at IMARExcludedAccountsDV.pcf: line 33, column 52
    function toCreateAndAdd_12 () : entity.IMExcludedAccount {
      var newEA = new IMExcludedAccount(accountsRecPart.InlandMarineLine.Branch);accountsRecPart.addToIMExcludedAccounts(newEA); return newEA
    }
    
    // 'toRemove' attribute on RowIterator (id=ExcludedAccountsiterator) at IMARExcludedAccountsDV.pcf: line 33, column 52
    function toRemove_13 (excludedAccount :  entity.IMExcludedAccount) : void {
      accountsRecPart.removeFromIMExcludedAccounts(excludedAccount)
    }
    
    // 'value' attribute on RowIterator (id=ExcludedAccountsiterator) at IMARExcludedAccountsDV.pcf: line 33, column 52
    function value_14 () : entity.IMExcludedAccount[] {
      return accountsRecPart.IMExcludedAccounts
    }
    
    // 'visible' attribute on Toolbar at IMARExcludedAccountsDV.pcf: line 18, column 33
    function visible_0 () : java.lang.Boolean {
      return openForEdit
    }
    
    property get accountsRecPart () : IMAccountsRecPart {
      return getRequireValue("accountsRecPart", 0) as IMAccountsRecPart
    }
    
    property set accountsRecPart ($arg :  IMAccountsRecPart) {
      setRequireValue("accountsRecPart", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/im/parts/accountsrec/IMARExcludedAccountsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IMARExcludedAccountsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AREAAccountNumber_Cell) at IMARExcludedAccountsDV.pcf: line 43, column 56
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      excludedAccount.AccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=AREADescription_Cell) at IMARExcludedAccountsDV.pcf: line 49, column 54
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      excludedAccount.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=AREAAccountNumber_Cell) at IMARExcludedAccountsDV.pcf: line 43, column 56
    function valueRoot_6 () : java.lang.Object {
      return excludedAccount
    }
    
    // 'value' attribute on TextCell (id=AREAAccountNumber_Cell) at IMARExcludedAccountsDV.pcf: line 43, column 56
    function value_4 () : java.lang.String {
      return excludedAccount.AccountNumber
    }
    
    // 'value' attribute on TextCell (id=AREADescription_Cell) at IMARExcludedAccountsDV.pcf: line 49, column 54
    function value_8 () : java.lang.String {
      return excludedAccount.Description
    }
    
    property get excludedAccount () : entity.IMExcludedAccount {
      return getIteratedValue(1) as entity.IMExcludedAccount
    }
    
    
  }
  
  
}