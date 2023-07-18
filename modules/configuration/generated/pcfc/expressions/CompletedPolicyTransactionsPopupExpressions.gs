package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/CompletedPolicyTransactionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CompletedPolicyTransactionsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/CompletedPolicyTransactionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CompletedPolicyTransactionsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriods :  PolicyPeriod[]) : int {
      return 0
    }
    
    // 'value' attribute on RowIterator at CompletedPolicyTransactionsPopup.pcf: line 19, column 45
    function value_19 () : entity.PolicyPeriod[] {
      return policyPeriods
    }
    
    override property get CurrentLocation () : pcf.CompletedPolicyTransactionsPopup {
      return super.CurrentLocation as pcf.CompletedPolicyTransactionsPopup
    }
    
    property get policyPeriods () : entity.PolicyPeriod[] {
      return getVariableValue("policyPeriods", 0) as entity.PolicyPeriod[]
    }
    
    property set policyPeriods ($arg :  entity.PolicyPeriod[]) {
      setVariableValue("policyPeriods", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/CompletedPolicyTransactionsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CompletedPolicyTransactionsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsPopup.pcf: line 44, column 50
    function action_10 () : void {
      JobForward.go(transaction.Job)
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsPopup.pcf: line 44, column 50
    function action_dest_11 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(transaction.Job)
    }
    
    // 'available' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsPopup.pcf: line 44, column 50
    function available_9 () : java.lang.Boolean {
      return transaction.Job.Viewable
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at CompletedPolicyTransactionsPopup.pcf: line 26, column 54
    function valueRoot_1 () : java.lang.Object {
      return transaction
    }
    
    // 'value' attribute on DateCell (id=CloseDate_Cell) at CompletedPolicyTransactionsPopup.pcf: line 32, column 50
    function valueRoot_4 () : java.lang.Object {
      return transaction.Job
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at CompletedPolicyTransactionsPopup.pcf: line 26, column 54
    function value_0 () : java.util.Date {
      return transaction.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsPopup.pcf: line 44, column 50
    function value_12 () : java.lang.String {
      return transaction.Job.JobNumber
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at CompletedPolicyTransactionsPopup.pcf: line 49, column 55
    function value_16 () : gw.pl.currency.MonetaryAmount {
      return transaction.TransactionCostRPT
    }
    
    // 'value' attribute on DateCell (id=CloseDate_Cell) at CompletedPolicyTransactionsPopup.pcf: line 32, column 50
    function value_3 () : java.util.Date {
      return transaction.Job.CloseDate
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at CompletedPolicyTransactionsPopup.pcf: line 37, column 52
    function value_6 () : java.lang.String {
      return transaction.Job.DisplayType
    }
    
    property get transaction () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  
}