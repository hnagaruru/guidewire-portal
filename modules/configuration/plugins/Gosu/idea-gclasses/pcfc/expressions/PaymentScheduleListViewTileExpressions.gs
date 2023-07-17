package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/PaymentScheduleListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentScheduleListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/PaymentScheduleListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PaymentScheduleListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=StatementDate_Cell) at PaymentScheduleListViewTile.pcf: line 33, column 25
    function valueRoot_4 () : java.lang.Object {
      return invoice
    }
    
    // 'value' attribute on DateCell (id=StatementDate_Cell) at PaymentScheduleListViewTile.pcf: line 33, column 25
    function value_3 () : java.util.Date {
      return invoice.InvoiceDate
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at PaymentScheduleListViewTile.pcf: line 39, column 25
    function value_6 () : java.util.Date {
      return invoice.InvoiceDueDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at PaymentScheduleListViewTile.pcf: line 46, column 25
    function value_9 () : gw.pl.currency.MonetaryAmount {
      return invoice.Amount
    }
    
    property get invoice () : gw.plugin.billing.BillingInvoiceInfo {
      return getIteratedValue(1) as gw.plugin.billing.BillingInvoiceInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/PaymentScheduleListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentScheduleListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=PaymentScheduleListViewTile) at PaymentScheduleListViewTile.pcf: line 11, column 46
    function action_15 () : void {
      helper.viewMore()
    }
    
    // 'initialValue' attribute on Variable at PaymentScheduleListViewTile.pcf: line 21, column 68
    function initialValue_13 () : gw.api.web.dashboard.ui.policy.PaymentScheduleHelper {
      return new gw.api.web.dashboard.ui.policy.PaymentScheduleHelper(policyPeriod, asOfDate)
    }
    
    // 'value' attribute on DateCell (id=StatementDate_Cell) at PaymentScheduleListViewTile.pcf: line 33, column 25
    function sortValue_0 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.InvoiceDate
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at PaymentScheduleListViewTile.pcf: line 39, column 25
    function sortValue_1 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.InvoiceDueDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at PaymentScheduleListViewTile.pcf: line 46, column 25
    function sortValue_2 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.Amount
    }
    
    // 'value' attribute on RowIterator at PaymentScheduleListViewTile.pcf: line 26, column 58
    function value_12 () : gw.plugin.billing.BillingInvoiceInfo[] {
      return helper.Invoices
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=PaymentScheduleListViewTile) at PaymentScheduleListViewTile.pcf: line 11, column 46
    function visible_14 () : java.lang.Boolean {
      return helper.ViewMoreVisible
    }
    
    property get asOfDate () : Date {
      return getRequireValue("asOfDate", 0) as Date
    }
    
    property set asOfDate ($arg :  Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get helper () : gw.api.web.dashboard.ui.policy.PaymentScheduleHelper {
      return getVariableValue("helper", 0) as gw.api.web.dashboard.ui.policy.PaymentScheduleHelper
    }
    
    property set helper ($arg :  gw.api.web.dashboard.ui.policy.PaymentScheduleHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}