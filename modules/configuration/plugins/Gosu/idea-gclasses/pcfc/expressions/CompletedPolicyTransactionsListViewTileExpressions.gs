package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/CompletedPolicyTransactionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CompletedPolicyTransactionsListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/CompletedPolicyTransactionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CompletedPolicyTransactionsListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=CompletedPolicyTransactionsListViewTile) at CompletedPolicyTransactionsListViewTile.pcf: line 10, column 46
    function action_34 () : void {
      helper.viewMore(policyPeriod, asOfDate)
    }
    
    // 'initialValue' attribute on Variable at CompletedPolicyTransactionsListViewTile.pcf: line 20, column 74
    function initialValue_32 () : gw.api.web.dashboard.ui.policy.CompletedTransactionsHelper {
      return new gw.api.web.dashboard.ui.policy.CompletedTransactionsHelper(policyPeriod)
    }
    
    // 'sortBy' attribute on IteratorSort at CompletedPolicyTransactionsListViewTile.pcf: line 29, column 24
    function sortBy_0 (transaction :  entity.PolicyPeriod) : java.lang.Object {
      return transaction.TermNumber
    }
    
    // 'sortBy' attribute on IteratorSort at CompletedPolicyTransactionsListViewTile.pcf: line 33, column 24
    function sortBy_1 (transaction :  entity.PolicyPeriod) : java.lang.Object {
      return transaction.ModelNumber
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 43, column 25
    function sortValue_2 (transaction :  entity.PolicyPeriod) : java.lang.Object {
      return transaction.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=TermNumber_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 48, column 42
    function sortValue_3 (transaction :  entity.PolicyPeriod) : java.lang.Object {
      return transaction.TermNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 54, column 25
    function sortValue_4 (transaction :  entity.PolicyPeriod) : java.lang.Object {
      return transaction.EditEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=CloseDate_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 61, column 25
    function sortValue_5 (transaction :  entity.PolicyPeriod) : java.lang.Object {
      return transaction.Job.CloseDate
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 67, column 25
    function sortValue_6 (transaction :  entity.PolicyPeriod) : java.lang.Object {
      return transaction.Job.DisplayType
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 73, column 25
    function sortValue_7 (transaction :  entity.PolicyPeriod) : java.lang.Object {
      return transaction.TransactionCostRPT
    }
    
    // 'value' attribute on RowIterator at CompletedPolicyTransactionsListViewTile.pcf: line 25, column 41
    function value_31 () : entity.PolicyPeriod[] {
      return helper.LatestCompletedPolicyTransactions
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=CompletedPolicyTransactionsListViewTile) at CompletedPolicyTransactionsListViewTile.pcf: line 10, column 46
    function visible_33 () : java.lang.Boolean {
      return helper.ViewMoreVisible
    }
    
    property get asOfDate () : Date {
      return getRequireValue("asOfDate", 0) as Date
    }
    
    property set asOfDate ($arg :  Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get helper () : gw.api.web.dashboard.ui.policy.CompletedTransactionsHelper {
      return getVariableValue("helper", 0) as gw.api.web.dashboard.ui.policy.CompletedTransactionsHelper
    }
    
    property set helper ($arg :  gw.api.web.dashboard.ui.policy.CompletedTransactionsHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/CompletedPolicyTransactionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CompletedPolicyTransactionsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 43, column 25
    function action_9 () : void {
      JobForward.go(transaction.Job)
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 43, column 25
    function action_dest_10 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(transaction.Job)
    }
    
    // 'available' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 43, column 25
    function available_8 () : java.lang.Boolean {
      return transaction.Job.Viewable
    }
    
    // 'useArchivedStyle' attribute on Row at CompletedPolicyTransactionsListViewTile.pcf: line 35, column 49
    function useArchivedStyle_30 () : java.lang.Boolean {
      return transaction.Archived
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 43, column 25
    function valueRoot_12 () : java.lang.Object {
      return transaction.Job
    }
    
    // 'value' attribute on TextCell (id=TermNumber_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 48, column 42
    function valueRoot_16 () : java.lang.Object {
      return transaction
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 43, column 25
    function value_11 () : java.lang.String {
      return transaction.Job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=TermNumber_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 48, column 42
    function value_15 () : java.lang.Integer {
      return transaction.TermNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 54, column 25
    function value_18 () : java.util.Date {
      return transaction.EditEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=CloseDate_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 61, column 25
    function value_21 () : java.util.Date {
      return transaction.Job.CloseDate
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 67, column 25
    function value_24 () : java.lang.String {
      return transaction.Job.DisplayType
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 73, column 25
    function value_27 () : gw.pl.currency.MonetaryAmount {
      return transaction.TransactionCostRPT
    }
    
    property get transaction () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  
}