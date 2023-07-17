package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/billing/BillingInvoicesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingInvoicesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/account/billing/BillingInvoicesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingInvoicesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at BillingInvoicesLV.pcf: line 19, column 80
    function filter_0 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter("last3months", \ i -> (i as gw.plugin.billing.BillingInvoiceInfo).InvoiceDate.addMonths( 3 ).afterNow())
    }
    
    // 'filter' attribute on ToolbarFilterOption at BillingInvoicesLV.pcf: line 22, column 80
    function filter_1 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter("last6months", \ i -> (i as gw.plugin.billing.BillingInvoiceInfo).InvoiceDate.addMonths( 6 ).afterNow())
    }
    
    // 'filter' attribute on ToolbarFilterOption at BillingInvoicesLV.pcf: line 25, column 81
    function filter_2 () : gw.api.filters.IFilter {
      return new gw.api.filters.StandardBeanFilter("last12months", \ i -> (i as gw.plugin.billing.BillingInvoiceInfo).InvoiceDate.addMonths( 12 ).afterNow())
    }
    
    // 'sortBy' attribute on IteratorSort at BillingInvoicesLV.pcf: line 29, column 24
    function sortBy_3 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.InvoiceDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at BillingInvoicesLV.pcf: line 59, column 35
    function sortValue_10 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.Amount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Unpaid_Cell) at BillingInvoicesLV.pcf: line 64, column 35
    function sortValue_11 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.Unpaid
    }
    
    // 'value' attribute on DateCell (id=InvoiceDate_Cell) at BillingInvoicesLV.pcf: line 34, column 40
    function sortValue_4 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.InvoiceDate
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at BillingInvoicesLV.pcf: line 38, column 43
    function sortValue_5 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.InvoiceDueDate
    }
    
    // 'value' attribute on TextCell (id=InvoiceNumber_Cell) at BillingInvoicesLV.pcf: line 42, column 42
    function sortValue_6 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.InvoiceNumber
    }
    
    // 'value' attribute on TextCell (id=InvoiceStream_Cell) at BillingInvoicesLV.pcf: line 46, column 42
    function sortValue_7 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.InvoiceStream
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at BillingInvoicesLV.pcf: line 50, column 35
    function sortValue_8 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.Status
    }
    
    // 'value' attribute on TextCell (id=PaidStatus_Cell) at BillingInvoicesLV.pcf: line 54, column 39
    function sortValue_9 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.PaidStatus
    }
    
    // 'value' attribute on RowIterator at BillingInvoicesLV.pcf: line 14, column 58
    function value_36 () : gw.plugin.billing.BillingInvoiceInfo[] {
      return account.retrieveAccountInvoices()
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/billing/BillingInvoicesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BillingInvoicesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=InvoiceDate_Cell) at BillingInvoicesLV.pcf: line 34, column 40
    function valueRoot_13 () : java.lang.Object {
      return invoice
    }
    
    // 'value' attribute on DateCell (id=InvoiceDate_Cell) at BillingInvoicesLV.pcf: line 34, column 40
    function value_12 () : java.util.Date {
      return invoice.InvoiceDate
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at BillingInvoicesLV.pcf: line 38, column 43
    function value_15 () : java.util.Date {
      return invoice.InvoiceDueDate
    }
    
    // 'value' attribute on TextCell (id=InvoiceNumber_Cell) at BillingInvoicesLV.pcf: line 42, column 42
    function value_18 () : java.lang.String {
      return invoice.InvoiceNumber
    }
    
    // 'value' attribute on TextCell (id=InvoiceStream_Cell) at BillingInvoicesLV.pcf: line 46, column 42
    function value_21 () : java.lang.String {
      return invoice.InvoiceStream
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at BillingInvoicesLV.pcf: line 50, column 35
    function value_24 () : java.lang.String {
      return invoice.Status
    }
    
    // 'value' attribute on TextCell (id=PaidStatus_Cell) at BillingInvoicesLV.pcf: line 54, column 39
    function value_27 () : java.lang.String {
      return invoice.PaidStatus
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at BillingInvoicesLV.pcf: line 59, column 35
    function value_30 () : gw.pl.currency.MonetaryAmount {
      return invoice.Amount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Unpaid_Cell) at BillingInvoicesLV.pcf: line 64, column 35
    function value_33 () : gw.pl.currency.MonetaryAmount {
      return invoice.Unpaid
    }
    
    property get invoice () : gw.plugin.billing.BillingInvoiceInfo {
      return getIteratedValue(1) as gw.plugin.billing.BillingInvoiceInfo
    }
    
    
  }
  
  
}