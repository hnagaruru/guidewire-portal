package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentPreviewPaymentsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingAdjustmentPreviewPaymentsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentPreviewPaymentsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingAdjustmentPreviewPaymentsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ExpandAllButton) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 41, column 52
    function action_6 () : void {
      billingPaymentTree = gw.billing.BillingPaymentsPreviewTrees.createBillingPaymentsPreviewTree(invoicesPreview, showInvoices, true)
    }
    
    // 'action' attribute on ToolbarButton (id=CollapseAllButton) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 45, column 54
    function action_7 () : void {
      billingPaymentTree = gw.billing.BillingPaymentsPreviewTrees.createBillingPaymentsPreviewTree(invoicesPreview, showInvoices, false)
    }
    
    // RowTree at BillingAdjustmentPreviewPaymentsScreen.pcf: line 54, column 38
    function containerLabel_50 (itemPreview :  java.lang.Object) : java.lang.String {
      return ""
    }
    
    // 'value' attribute on CheckBoxInput (id=InvoicesCheckBox_Input) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 31, column 95
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      showInvoices = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at BillingAdjustmentPreviewPaymentsScreen.pcf: line 21, column 36
    function initialValue_0 () : gw.api.tree.TreeNode {
      return gw.billing.BillingPaymentsPreviewTrees.createBillingPaymentsPreviewTree(invoicesPreview, showInvoices, false)
    }
    
    // 'label' attribute on TextCell (id=InvoiceAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 89, column 58
    function label_14 () : java.lang.Object {
      return job typeis PolicyChange ? DisplayKey.get('Web.Policy.Payment.PreviewPayments.CurrentChargesForPolicy') : DisplayKey.get('Web.Policy.Payment.PreviewPayments.JobType', job.DisplayType) 
    }
    
    // 'value' attribute on TextCell (id=InvoiceType_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 71, column 35
    function sortValue_10 (itemPreview :  gw.billing.BillingPaymentsPreviewTreeNode) : java.lang.Object {
      return itemPreview.Type
    }
    
    // 'value' attribute on TextCell (id=ChargeCategory_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 76, column 35
    function sortValue_11 (itemPreview :  gw.billing.BillingPaymentsPreviewTreeNode) : java.lang.Object {
      return itemPreview.ChargeCategory
    }
    
    // 'value' attribute on TextCell (id=OtherInvoiceAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 83, column 39
    function sortValue_12 (itemPreview :  gw.billing.BillingPaymentsPreviewTreeNode) : java.lang.Object {
      return itemPreview.InvoiceAmount
    }
    
    // 'value' attribute on TextCell (id=InvoiceAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 89, column 58
    function sortValue_15 (itemPreview :  gw.billing.BillingPaymentsPreviewTreeNode) : java.lang.Object {
      return itemPreview.Amount
    }
    
    // 'value' attribute on TextCell (id=ChangeAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 96, column 74
    function sortValue_16 (itemPreview :  gw.billing.BillingPaymentsPreviewTreeNode) : java.lang.Object {
      return itemPreview.ChangeAmount
    }
    
    // 'value' attribute on TextCell (id=TotalAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 103, column 90
    function sortValue_18 (itemPreview :  gw.billing.BillingPaymentsPreviewTreeNode) : java.lang.Object {
      return itemPreview.Amount + (invoicesPreview.InvoicesOtherPolicies.HasElements ? itemPreview.InvoiceAmount : new gw.pl.currency.MonetaryAmount(0, itemPreview.Amount.Currency)) + (invoicesPreview.PreviewItemsChanged.HasElements ? itemPreview.ChangeAmount : new gw.pl.currency.MonetaryAmount(0, itemPreview.Amount.Currency))
    }
    
    // 'value' attribute on DateCell (id=InvoiceDueDate_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 61, column 44
    function sortValue_8 (itemPreview :  gw.billing.BillingPaymentsPreviewTreeNode) : java.lang.Object {
      return itemPreview.DueDate
    }
    
    // 'value' attribute on DateCell (id=StatementDate_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 66, column 50
    function sortValue_9 (itemPreview :  gw.billing.BillingPaymentsPreviewTreeNode) : java.lang.Object {
      return itemPreview.StatementDate
    }
    
    // 'value' attribute on CheckBoxInput (id=InvoicesCheckBox_Input) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 31, column 95
    function value_2 () : java.lang.Boolean {
      return showInvoices
    }
    
    // 'value' attribute on RowTree at BillingAdjustmentPreviewPaymentsScreen.pcf: line 54, column 38
    function value_49 () : java.lang.Object {
      return billingPaymentTree
    }
    
    // 'visible' attribute on CheckBoxInput (id=InvoicesCheckBox_Input) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 31, column 95
    function visible_1 () : java.lang.Boolean {
      return gw.billing.BillingPaymentsPreviewTrees.hasInvoicesToShow(invoicesPreview)
    }
    
    // 'visible' attribute on TextCell (id=ChangeAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 96, column 74
    function visible_17 () : java.lang.Boolean {
      return invoicesPreview.PreviewItemsChanged.HasElements
    }
    
    // 'visible' attribute on TextCell (id=TotalAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 103, column 90
    function visible_19 () : java.lang.Boolean {
      return showInvoices or invoicesPreview.PreviewItemsChanged.HasElements
    }
    
    property get billingPaymentTree () : gw.api.tree.TreeNode {
      return getVariableValue("billingPaymentTree", 0) as gw.api.tree.TreeNode
    }
    
    property set billingPaymentTree ($arg :  gw.api.tree.TreeNode) {
      setVariableValue("billingPaymentTree", 0, $arg)
    }
    
    property get invoicesPreview () : gw.plugin.billing.BillingPaymentsPreview {
      return getRequireValue("invoicesPreview", 0) as gw.plugin.billing.BillingPaymentsPreview
    }
    
    property set invoicesPreview ($arg :  gw.plugin.billing.BillingPaymentsPreview) {
      setRequireValue("invoicesPreview", 0, $arg)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get showInvoices () : Boolean {
      return getVariableValue("showInvoices", 0) as Boolean
    }
    
    property set showInvoices ($arg :  Boolean) {
      setVariableValue("showInvoices", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentPreviewPaymentsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RowTreeEntryExpressionsImpl extends BillingAdjustmentPreviewPaymentsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=InvoiceAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 89, column 58
    function label_36 () : java.lang.Object {
      return job typeis PolicyChange ? DisplayKey.get('Web.Policy.Payment.PreviewPayments.CurrentChargesForPolicy') : DisplayKey.get('Web.Policy.Payment.PreviewPayments.JobType', job.DisplayType) 
    }
    
    // 'useSubHeaderStyle' attribute on Row at BillingAdjustmentPreviewPaymentsScreen.pcf: line 56, column 107
    function useSubHeaderStyle_48 () : java.lang.Boolean {
      return not itemPreview.Type.NotBlank and not itemPreview.ChargeCategory.NotBlank
    }
    
    // 'value' attribute on DateCell (id=InvoiceDueDate_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 61, column 44
    function valueRoot_21 () : java.lang.Object {
      return itemPreview
    }
    
    // 'value' attribute on DateCell (id=InvoiceDueDate_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 61, column 44
    function value_20 () : java.util.Date {
      return itemPreview.DueDate
    }
    
    // 'value' attribute on DateCell (id=StatementDate_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 66, column 50
    function value_23 () : java.util.Date {
      return itemPreview.StatementDate
    }
    
    // 'value' attribute on TextCell (id=InvoiceType_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 71, column 35
    function value_26 () : String {
      return itemPreview.Type
    }
    
    // 'value' attribute on TextCell (id=ChargeCategory_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 76, column 35
    function value_29 () : String {
      return itemPreview.ChargeCategory
    }
    
    // 'value' attribute on TextCell (id=OtherInvoiceAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 83, column 39
    function value_32 () : gw.pl.currency.MonetaryAmount {
      return itemPreview.InvoiceAmount
    }
    
    // 'value' attribute on TextCell (id=InvoiceAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 89, column 58
    function value_37 () : gw.pl.currency.MonetaryAmount {
      return itemPreview.Amount
    }
    
    // 'value' attribute on TextCell (id=ChangeAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 96, column 74
    function value_41 () : gw.pl.currency.MonetaryAmount {
      return itemPreview.ChangeAmount
    }
    
    // 'value' attribute on TextCell (id=TotalAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 103, column 90
    function value_45 () : gw.pl.currency.MonetaryAmount {
      return itemPreview.Amount + (invoicesPreview.InvoicesOtherPolicies.HasElements ? itemPreview.InvoiceAmount : new gw.pl.currency.MonetaryAmount(0, itemPreview.Amount.Currency)) + (invoicesPreview.PreviewItemsChanged.HasElements ? itemPreview.ChangeAmount : new gw.pl.currency.MonetaryAmount(0, itemPreview.Amount.Currency))
    }
    
    // 'visible' attribute on TextCell (id=OtherInvoiceAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 83, column 39
    function visible_34 () : java.lang.Boolean {
      return showInvoices
    }
    
    // 'visible' attribute on TextCell (id=ChangeAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 96, column 74
    function visible_43 () : java.lang.Boolean {
      return invoicesPreview.PreviewItemsChanged.HasElements
    }
    
    // 'visible' attribute on TextCell (id=TotalAmount_Cell) at BillingAdjustmentPreviewPaymentsScreen.pcf: line 103, column 90
    function visible_46 () : java.lang.Boolean {
      return showInvoices or invoicesPreview.PreviewItemsChanged.HasElements
    }
    
    property get itemPreview () : gw.billing.BillingPaymentsPreviewTreeNode {
      return getIteratedValue(1) as gw.billing.BillingPaymentsPreviewTreeNode
    }
    
    
  }
  
  
}