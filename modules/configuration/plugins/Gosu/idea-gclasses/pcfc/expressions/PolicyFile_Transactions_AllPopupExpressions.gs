package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_AllPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_Transactions_AllPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_AllPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyFile_Transactions_AllPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 39, column 36
    function valueRoot_13 () : java.lang.Object {
      return txn
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 39, column 36
    function value_12 () : java.util.Date {
      return txn.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 43, column 36
    function value_15 () : java.util.Date {
      return txn.ExpDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxnAmount_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 47, column 42
    function value_18 () : gw.pl.currency.MonetaryAmount {
      return txn.AmountBilling
    }
    
    // 'value' attribute on DateCell (id=PostedDate_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 51, column 39
    function value_21 () : java.util.Date {
      return txn.PostedDate
    }
    
    // 'value' attribute on BooleanRadioCell (id=Written_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 55, column 36
    function value_24 () : java.lang.Boolean {
      return txn.Written
    }
    
    // 'value' attribute on BooleanRadioCell (id=Charged_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 59, column 36
    function value_27 () : java.lang.Boolean {
      return txn.Charged
    }
    
    // 'value' attribute on BooleanRadioCell (id=ToBeAccrued_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 63, column 40
    function value_30 () : java.lang.Boolean {
      return txn.ToBeAccrued
    }
    
    // 'value' attribute on TextCell (id=Job_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 67, column 77
    function value_33 () : java.lang.String {
      return gw.web.policy.PolicyTransactionsUIHelper.getJob(txn)
    }
    
    // 'value' attribute on TextCell (id=Cost_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 72, column 40
    function value_35 () : entity.Cost {
      return txn.Cost
    }
    
    property get txn () : entity.Transaction {
      return getIteratedValue(1) as entity.Transaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_AllPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_Transactions_AllPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'parent' attribute on Popup (id=PolicyFile_Transactions_AllPopup) at PolicyFile_Transactions_AllPopup.pcf: line 8, column 94
    static function parent_39 (asOfDate :  java.util.Date, period :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(period, asOfDate)
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyFile_Transactions_AllPopup.pcf: line 28, column 28
    function sortBy_0 (txn :  entity.Transaction) : java.lang.Object {
      return txn.PostedDate
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyFile_Transactions_AllPopup.pcf: line 31, column 28
    function sortBy_1 (txn :  entity.Transaction) : java.lang.Object {
      return txn.EffDate
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyFile_Transactions_AllPopup.pcf: line 34, column 28
    function sortBy_2 (txn :  entity.Transaction) : java.lang.Object {
      return txn.ExpDate
    }
    
    // 'value' attribute on TextCell (id=Job_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 67, column 77
    function sortValue_10 (txn :  entity.Transaction) : java.lang.Object {
      return gw.web.policy.PolicyTransactionsUIHelper.getJob(txn)
    }
    
    // 'value' attribute on TextCell (id=Cost_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 72, column 40
    function sortValue_11 (txn :  entity.Transaction) : java.lang.Object {
      return txn.Cost
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 39, column 36
    function sortValue_3 (txn :  entity.Transaction) : java.lang.Object {
      return txn.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 43, column 36
    function sortValue_4 (txn :  entity.Transaction) : java.lang.Object {
      return txn.ExpDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxnAmount_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 47, column 42
    function sortValue_5 (txn :  entity.Transaction) : java.lang.Object {
      return txn.AmountBilling
    }
    
    // 'value' attribute on DateCell (id=PostedDate_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 51, column 39
    function sortValue_6 (txn :  entity.Transaction) : java.lang.Object {
      return txn.PostedDate
    }
    
    // 'value' attribute on BooleanRadioCell (id=Written_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 55, column 36
    function sortValue_7 (txn :  entity.Transaction) : java.lang.Object {
      return txn.Written
    }
    
    // 'value' attribute on BooleanRadioCell (id=Charged_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 59, column 36
    function sortValue_8 (txn :  entity.Transaction) : java.lang.Object {
      return txn.Charged
    }
    
    // 'value' attribute on BooleanRadioCell (id=ToBeAccrued_Cell) at PolicyFile_Transactions_AllPopup.pcf: line 63, column 40
    function sortValue_9 (txn :  entity.Transaction) : java.lang.Object {
      return txn.ToBeAccrued
    }
    
    // 'value' attribute on RowIterator at PolicyFile_Transactions_AllPopup.pcf: line 25, column 44
    function value_38 () : entity.Transaction[] {
      return findPostedTransactions( )
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Transactions_AllPopup {
      return super.CurrentLocation as pcf.PolicyFile_Transactions_AllPopup
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    function findPostedTransactions() : entity.Transaction[] {
      return period.Policy.Periods.flatMap(\p -> gw.api.domain.financials.TransactionFinder.instance.findPostedTransactions(p)).toSet().toTypedArray()
    }
    
    
  }
  
  
}