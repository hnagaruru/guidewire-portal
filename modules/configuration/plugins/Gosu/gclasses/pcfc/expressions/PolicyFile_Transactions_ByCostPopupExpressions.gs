package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByCostPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_Transactions_ByCostPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByCostPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 70, column 38
    function valueRoot_23 () : java.lang.Object {
      return txn
    }
    
    // 'value' attribute on TextCell (id=Job_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 98, column 92
    function valueRoot_44 () : java.lang.Object {
      return ((txn as EffDated).BranchUntyped as PolicyPeriod).Job
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 70, column 38
    function value_22 () : java.util.Date {
      return txn.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 74, column 38
    function value_25 () : java.util.Date {
      return txn.ExpDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxnAmount_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 78, column 44
    function value_28 () : gw.pl.currency.MonetaryAmount {
      return txn.AmountBilling
    }
    
    // 'value' attribute on DateCell (id=PostedDate_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 82, column 41
    function value_31 () : java.util.Date {
      return txn.PostedDate
    }
    
    // 'value' attribute on BooleanRadioCell (id=Written_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 86, column 38
    function value_34 () : java.lang.Boolean {
      return txn.Written
    }
    
    // 'value' attribute on BooleanRadioCell (id=Charged_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 90, column 38
    function value_37 () : java.lang.Boolean {
      return txn.Charged
    }
    
    // 'value' attribute on BooleanRadioCell (id=ToBeAccrued_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 94, column 42
    function value_40 () : java.lang.Boolean {
      return txn.ToBeAccrued
    }
    
    // 'value' attribute on TextCell (id=Job_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 98, column 92
    function value_43 () : java.lang.String {
      return ((txn as EffDated).BranchUntyped as PolicyPeriod).Job.DisplayType
    }
    
    property get txn () : entity.Transaction {
      return getIteratedValue(2) as entity.Transaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByCostPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends PolicyFile_Transactions_ByCostPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyFile_Transactions_ByCostPopup.pcf: line 59, column 30
    function sortBy_11 (txn :  entity.Transaction) : java.lang.Object {
      return txn.PostedDate
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyFile_Transactions_ByCostPopup.pcf: line 62, column 30
    function sortBy_12 (txn :  entity.Transaction) : java.lang.Object {
      return txn.EffDate
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyFile_Transactions_ByCostPopup.pcf: line 65, column 30
    function sortBy_13 (txn :  entity.Transaction) : java.lang.Object {
      return txn.ExpDate
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 70, column 38
    function sortValue_14 (txn :  entity.Transaction) : java.lang.Object {
      return txn.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 74, column 38
    function sortValue_15 (txn :  entity.Transaction) : java.lang.Object {
      return txn.ExpDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxnAmount_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 78, column 44
    function sortValue_16 (txn :  entity.Transaction) : java.lang.Object {
      return txn.AmountBilling
    }
    
    // 'value' attribute on DateCell (id=PostedDate_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 82, column 41
    function sortValue_17 (txn :  entity.Transaction) : java.lang.Object {
      return txn.PostedDate
    }
    
    // 'value' attribute on BooleanRadioCell (id=Written_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 86, column 38
    function sortValue_18 (txn :  entity.Transaction) : java.lang.Object {
      return txn.Written
    }
    
    // 'value' attribute on BooleanRadioCell (id=Charged_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 90, column 38
    function sortValue_19 (txn :  entity.Transaction) : java.lang.Object {
      return txn.Charged
    }
    
    // 'value' attribute on BooleanRadioCell (id=ToBeAccrued_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 94, column 42
    function sortValue_20 (txn :  entity.Transaction) : java.lang.Object {
      return txn.ToBeAccrued
    }
    
    // 'value' attribute on TextCell (id=Job_Cell) at PolicyFile_Transactions_ByCostPopup.pcf: line 98, column 92
    function sortValue_21 (txn :  entity.Transaction) : java.lang.Object {
      return ((txn as EffDated).BranchUntyped as PolicyPeriod).Job.DisplayType
    }
    
    // 'value' attribute on TextInput (id=CostName_Input) at PolicyFile_Transactions_ByCostPopup.pcf: line 30, column 40
    function valueRoot_2 () : java.lang.Object {
      return costMap.get(cost).first()
    }
    
    // 'value' attribute on TextInput (id=Job_Input) at PolicyFile_Transactions_ByCostPopup.pcf: line 35, column 77
    function valueRoot_5 () : java.lang.Object {
      return (cost.BranchUntyped as PolicyPeriod).Job
    }
    
    // 'value' attribute on TextInput (id=CostName_Input) at PolicyFile_Transactions_ByCostPopup.pcf: line 30, column 40
    function value_1 () : entity.Cost {
      return costMap.get(cost).first().Cost
    }
    
    // 'value' attribute on TextInput (id=Job_Input) at PolicyFile_Transactions_ByCostPopup.pcf: line 35, column 77
    function value_4 () : java.lang.String {
      return (cost.BranchUntyped as PolicyPeriod).Job.DisplayType
    }
    
    // 'value' attribute on RowIterator at PolicyFile_Transactions_ByCostPopup.pcf: line 56, column 46
    function value_46 () : entity.Transaction[] {
      return costMap.get(cost).toTypedArray()
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CostTotal_Input) at PolicyFile_Transactions_ByCostPopup.pcf: line 41, column 114
    function value_7 () : gw.pl.currency.MonetaryAmount {
      return costMap.get(cost).where(\t -> t.Written).AmountSum(period.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalCharged_Input) at PolicyFile_Transactions_ByCostPopup.pcf: line 47, column 114
    function value_9 () : gw.pl.currency.MonetaryAmount {
      return costMap.get(cost).where(\t -> t.Charged).AmountSum(period.PreferredSettlementCurrency)
    }
    
    property get cost () : entity.Cost {
      return getIteratedValue(1) as entity.Cost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByCostPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_Transactions_ByCostPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Transactions_ByCostPopup.pcf: line 16, column 90
    function initialValue_0 () : java.util.Map<entity.Cost, java.util.List<entity.Transaction>> {
      return partitionCosts()
    }
    
    // 'value' attribute on PanelIterator at PolicyFile_Transactions_ByCostPopup.pcf: line 22, column 35
    function value_47 () : entity.Cost[] {
      return costMap.Keys.toTypedArray().sortBy(\c -> (c.BranchUntyped as PolicyPeriod).Job.CloseDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Transactions_ByCostPopup {
      return super.CurrentLocation as pcf.PolicyFile_Transactions_ByCostPopup
    }
    
    property get costMap () : java.util.Map<entity.Cost, java.util.List<entity.Transaction>> {
      return getVariableValue("costMap", 0) as java.util.Map<entity.Cost, java.util.List<entity.Transaction>>
    }
    
    property set costMap ($arg :  java.util.Map<entity.Cost, java.util.List<entity.Transaction>>) {
      setVariableValue("costMap", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    function partitionCosts() : java.util.Map<Cost,java.util.List<entity.Transaction>> {
      var postedTransactions = gw.api.domain.financials.TransactionFinder.instance.findPostedTransactions( period )
      return postedTransactions.partition( \ t -> t.Cost )
    }
    
    
  }
  
  
}