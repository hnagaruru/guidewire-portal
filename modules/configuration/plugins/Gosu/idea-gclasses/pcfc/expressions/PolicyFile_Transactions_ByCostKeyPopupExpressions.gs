package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByCostKeyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_Transactions_ByCostKeyPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByCostKeyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 65, column 38
    function valueRoot_20 () : java.lang.Object {
      return txn
    }
    
    // 'value' attribute on TextCell (id=Job_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 93, column 92
    function valueRoot_41 () : java.lang.Object {
      return ((txn as EffDated).BranchUntyped as PolicyPeriod).Job
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 65, column 38
    function value_19 () : java.util.Date {
      return txn.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 69, column 38
    function value_22 () : java.util.Date {
      return txn.ExpDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxnAmount_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 73, column 44
    function value_25 () : gw.pl.currency.MonetaryAmount {
      return txn.AmountBilling
    }
    
    // 'value' attribute on DateCell (id=PostedDate_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 77, column 41
    function value_28 () : java.util.Date {
      return txn.PostedDate
    }
    
    // 'value' attribute on BooleanRadioCell (id=Written_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 81, column 38
    function value_31 () : java.lang.Boolean {
      return txn.Written
    }
    
    // 'value' attribute on BooleanRadioCell (id=Charged_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 85, column 38
    function value_34 () : java.lang.Boolean {
      return txn.Charged
    }
    
    // 'value' attribute on BooleanRadioCell (id=ToBeAccrued_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 89, column 42
    function value_37 () : java.lang.Boolean {
      return txn.ToBeAccrued
    }
    
    // 'value' attribute on TextCell (id=Job_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 93, column 92
    function value_40 () : java.lang.String {
      return ((txn as EffDated).BranchUntyped as PolicyPeriod).Job.DisplayType
    }
    
    property get txn () : entity.Transaction {
      return getIteratedValue(2) as entity.Transaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByCostKeyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends PolicyFile_Transactions_ByCostKeyPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 60, column 30
    function sortBy_10 (txn :  entity.Transaction) : java.lang.Object {
      return txn.ExpDate
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 54, column 30
    function sortBy_8 (txn :  entity.Transaction) : java.lang.Object {
      return txn.PostedDate
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 57, column 30
    function sortBy_9 (txn :  entity.Transaction) : java.lang.Object {
      return txn.EffDate
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 65, column 38
    function sortValue_11 (txn :  entity.Transaction) : java.lang.Object {
      return txn.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 69, column 38
    function sortValue_12 (txn :  entity.Transaction) : java.lang.Object {
      return txn.ExpDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxnAmount_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 73, column 44
    function sortValue_13 (txn :  entity.Transaction) : java.lang.Object {
      return txn.AmountBilling
    }
    
    // 'value' attribute on DateCell (id=PostedDate_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 77, column 41
    function sortValue_14 (txn :  entity.Transaction) : java.lang.Object {
      return txn.PostedDate
    }
    
    // 'value' attribute on BooleanRadioCell (id=Written_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 81, column 38
    function sortValue_15 (txn :  entity.Transaction) : java.lang.Object {
      return txn.Written
    }
    
    // 'value' attribute on BooleanRadioCell (id=Charged_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 85, column 38
    function sortValue_16 (txn :  entity.Transaction) : java.lang.Object {
      return txn.Charged
    }
    
    // 'value' attribute on BooleanRadioCell (id=ToBeAccrued_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 89, column 42
    function sortValue_17 (txn :  entity.Transaction) : java.lang.Object {
      return txn.ToBeAccrued
    }
    
    // 'value' attribute on TextCell (id=Job_Cell) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 93, column 92
    function sortValue_18 (txn :  entity.Transaction) : java.lang.Object {
      return ((txn as EffDated).BranchUntyped as PolicyPeriod).Job.DisplayType
    }
    
    // 'value' attribute on TextInput (id=CostName_Input) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 30, column 40
    function valueRoot_2 () : java.lang.Object {
      return costKeyMap.get(costKey).first()
    }
    
    // 'value' attribute on TextInput (id=CostName_Input) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 30, column 40
    function value_1 () : entity.Cost {
      return costKeyMap.get(costKey).first().Cost
    }
    
    // 'value' attribute on MonetaryAmountInput (id=ChargedTotal_Input) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 36, column 120
    function value_4 () : gw.pl.currency.MonetaryAmount {
      return costKeyMap.get(costKey).where(\t -> t.Charged).AmountSum(period.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on RowIterator at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 51, column 46
    function value_43 () : entity.Transaction[] {
      return costKeyMap.get(costKey).toTypedArray()
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CostTotal_Input) at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 42, column 120
    function value_6 () : gw.pl.currency.MonetaryAmount {
      return costKeyMap.get(costKey).where(\t -> t.Written).AmountSum(period.PreferredSettlementCurrency)
    }
    
    property get costKey () : gw.api.domain.financials.CostKey {
      return getIteratedValue(1) as gw.api.domain.financials.CostKey
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByCostKeyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_Transactions_ByCostKeyPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod) : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 16, column 111
    function initialValue_0 () : java.util.Map<gw.api.domain.financials.CostKey, java.util.List<entity.Transaction>> {
      return partitionCosts()
    }
    
    // 'value' attribute on PanelIterator at PolicyFile_Transactions_ByCostKeyPopup.pcf: line 22, column 56
    function value_44 () : gw.api.domain.financials.CostKey[] {
      return costKeyMap.Keys.toTypedArray()
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Transactions_ByCostKeyPopup {
      return super.CurrentLocation as pcf.PolicyFile_Transactions_ByCostKeyPopup
    }
    
    property get costKeyMap () : java.util.Map<gw.api.domain.financials.CostKey, java.util.List<entity.Transaction>> {
      return getVariableValue("costKeyMap", 0) as java.util.Map<gw.api.domain.financials.CostKey, java.util.List<entity.Transaction>>
    }
    
    property set costKeyMap ($arg :  java.util.Map<gw.api.domain.financials.CostKey, java.util.List<entity.Transaction>>) {
      setVariableValue("costKeyMap", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getVariableValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setVariableValue("period", 0, $arg)
    }
    
    function partitionCosts() : java.util.Map<gw.api.domain.financials.CostKey,java.util.List<entity.Transaction>> {
      var postedTransactions = gw.api.domain.financials.TransactionFinder.instance.findPostedTransactions( period )
      return postedTransactions.partition( \ t -> t.Cost.CostKey )
    }
    
    
  }
  
  
}