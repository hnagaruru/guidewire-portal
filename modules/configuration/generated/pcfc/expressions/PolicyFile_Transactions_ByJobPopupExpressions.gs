package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByJobPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_Transactions_ByJobPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByJobPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 62, column 38
    function valueRoot_19 () : java.lang.Object {
      return txn
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 62, column 38
    function value_18 () : java.util.Date {
      return txn.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 66, column 38
    function value_21 () : java.util.Date {
      return txn.ExpDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxnAmount_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 70, column 44
    function value_24 () : gw.pl.currency.MonetaryAmount {
      return txn.AmountBilling
    }
    
    // 'value' attribute on DateCell (id=PostedDate_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 74, column 41
    function value_27 () : java.util.Date {
      return txn.PostedDate
    }
    
    // 'value' attribute on BooleanRadioCell (id=Written_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 78, column 38
    function value_30 () : java.lang.Boolean {
      return txn.Written
    }
    
    // 'value' attribute on BooleanRadioCell (id=Charged_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 82, column 38
    function value_33 () : java.lang.Boolean {
      return txn.Charged
    }
    
    // 'value' attribute on BooleanRadioCell (id=ToBeAccrued_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 86, column 42
    function value_36 () : java.lang.Boolean {
      return txn.ToBeAccrued
    }
    
    // 'value' attribute on TextCell (id=Cost_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 91, column 42
    function value_39 () : entity.Cost {
      return txn.Cost
    }
    
    property get txn () : entity.Transaction {
      return getIteratedValue(2) as entity.Transaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByJobPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends PolicyFile_Transactions_ByJobPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'required' attribute on DateInput (id=EditEffectiveDate_Input) at PolicyFile_Transactions_ByJobPopup.pcf: line 39, column 53
    function required_3 () : java.lang.Boolean {
      return pastPeriod.EditEffectiveDate != null
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyFile_Transactions_ByJobPopup.pcf: line 51, column 30
    function sortBy_7 (txn :  entity.Transaction) : java.lang.Object {
      return txn.PostedDate
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyFile_Transactions_ByJobPopup.pcf: line 54, column 30
    function sortBy_8 (txn :  entity.Transaction) : java.lang.Object {
      return txn.EffDate
    }
    
    // 'sortBy' attribute on IteratorSort at PolicyFile_Transactions_ByJobPopup.pcf: line 57, column 30
    function sortBy_9 (txn :  entity.Transaction) : java.lang.Object {
      return txn.ExpDate
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 62, column 38
    function sortValue_10 (txn :  entity.Transaction) : java.lang.Object {
      return txn.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 66, column 38
    function sortValue_11 (txn :  entity.Transaction) : java.lang.Object {
      return txn.ExpDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxnAmount_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 70, column 44
    function sortValue_12 (txn :  entity.Transaction) : java.lang.Object {
      return txn.AmountBilling
    }
    
    // 'value' attribute on DateCell (id=PostedDate_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 74, column 41
    function sortValue_13 (txn :  entity.Transaction) : java.lang.Object {
      return txn.PostedDate
    }
    
    // 'value' attribute on BooleanRadioCell (id=Written_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 78, column 38
    function sortValue_14 (txn :  entity.Transaction) : java.lang.Object {
      return txn.Written
    }
    
    // 'value' attribute on BooleanRadioCell (id=Charged_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 82, column 38
    function sortValue_15 (txn :  entity.Transaction) : java.lang.Object {
      return txn.Charged
    }
    
    // 'value' attribute on BooleanRadioCell (id=ToBeAccrued_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 86, column 42
    function sortValue_16 (txn :  entity.Transaction) : java.lang.Object {
      return txn.ToBeAccrued
    }
    
    // 'value' attribute on TextCell (id=Cost_Cell) at PolicyFile_Transactions_ByJobPopup.pcf: line 91, column 42
    function sortValue_17 (txn :  entity.Transaction) : java.lang.Object {
      return txn.Cost
    }
    
    // 'value' attribute on TextInput (id=JobDisplayType_Input) at PolicyFile_Transactions_ByJobPopup.pcf: line 29, column 51
    function valueRoot_1 () : java.lang.Object {
      return pastPeriod.Job
    }
    
    // 'value' attribute on DateInput (id=EditEffectiveDate_Input) at PolicyFile_Transactions_ByJobPopup.pcf: line 39, column 53
    function valueRoot_5 () : java.lang.Object {
      return pastPeriod
    }
    
    // 'value' attribute on TextInput (id=JobDisplayType_Input) at PolicyFile_Transactions_ByJobPopup.pcf: line 29, column 51
    function value_0 () : java.lang.String {
      return pastPeriod.Job.DisplayType
    }
    
    // 'value' attribute on DateInput (id=EditEffectiveDate_Input) at PolicyFile_Transactions_ByJobPopup.pcf: line 39, column 53
    function value_4 () : java.util.Date {
      return pastPeriod.EditEffectiveDate
    }
    
    // 'value' attribute on RowIterator at PolicyFile_Transactions_ByJobPopup.pcf: line 48, column 46
    function value_42 () : entity.Transaction[] {
      return findPostedTransactions(pastPeriod)
    }
    
    property get pastPeriod () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Transactions_ByJobPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_Transactions_ByJobPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (period :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'parent' attribute on Popup (id=PolicyFile_Transactions_ByJobPopup) at PolicyFile_Transactions_ByJobPopup.pcf: line 8, column 75
    static function parent_44 (asOfDate :  java.util.Date, period :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(period, asOfDate)
    }
    
    // 'value' attribute on PanelIterator at PolicyFile_Transactions_ByJobPopup.pcf: line 22, column 43
    function value_43 () : entity.PolicyPeriod[] {
      return findBoundOrCompletedPeriods( )
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Transactions_ByJobPopup {
      return super.CurrentLocation as pcf.PolicyFile_Transactions_ByJobPopup
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
    
    
    function findBoundOrCompletedPeriods() : entity.PolicyPeriod[] {
      return period.Policy.Periods.where(\p -> p.Status == TC_BOUND or p.Status == TC_AUDITCOMPLETE).orderBy(\p -> p.ID)?.toTypedArray()
    }
    
    function findPostedTransactions(jobPeriod : PolicyPeriod) : entity.Transaction[] {
      return gw.api.domain.financials.TransactionFinder.instance.findPostedTransactions(jobPeriod)
        .where(\t -> ((t as EffDated).BranchUntyped as PolicyPeriod) == jobPeriod)
        .toTypedArray()
    }
          
        
    
    
  }
  
  
}