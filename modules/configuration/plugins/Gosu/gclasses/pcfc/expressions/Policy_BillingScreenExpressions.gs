package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/Policy_BillingScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Policy_BillingScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/Policy_BillingScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends Policy_BillingScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=StatementDate_Cell) at Policy_BillingScreen.pcf: line 166, column 44
    function valueRoot_68 () : java.lang.Object {
      return invoice
    }
    
    // 'value' attribute on DateCell (id=StatementDate_Cell) at Policy_BillingScreen.pcf: line 166, column 44
    function value_67 () : java.util.Date {
      return invoice.InvoiceDate
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at Policy_BillingScreen.pcf: line 170, column 47
    function value_70 () : java.util.Date {
      return invoice.InvoiceDueDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at Policy_BillingScreen.pcf: line 175, column 39
    function value_73 () : gw.pl.currency.MonetaryAmount {
      return invoice.Amount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Paid_Cell) at Policy_BillingScreen.pcf: line 180, column 37
    function value_76 () : gw.pl.currency.MonetaryAmount {
      return invoice.Paid
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Billed_Cell) at Policy_BillingScreen.pcf: line 185, column 39
    function value_79 () : gw.pl.currency.MonetaryAmount {
      return invoice.Billed
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PastDue_Cell) at Policy_BillingScreen.pcf: line 190, column 40
    function value_82 () : gw.pl.currency.MonetaryAmount {
      return invoice.PastDue
    }
    
    property get invoice () : gw.plugin.billing.BillingInvoiceInfo {
      return getIteratedValue(1) as gw.plugin.billing.BillingInvoiceInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/Policy_BillingScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy_BillingScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ViewInBC) at Policy_BillingScreen.pcf: line 33, column 121
    function action_2 () : void {
      BCPolicy.push( gw.api.system.PCConfigParameters.BillingSystemURL.Value, uiHelper.CurrentPolicyTermInfo.PolicyNumber, uiHelper.CurrentPolicyTermInfo.TermNumber)
    }
    
    // 'action' attribute on Link (id=ViewAccount) at Policy_BillingScreen.pcf: line 146, column 81
    function action_58 () : void {
      AccountFile_Billing.go(policyPeriod.Policy.Account)
    }
    
    // 'action' attribute on ToolbarButton (id=ViewInBC) at Policy_BillingScreen.pcf: line 33, column 121
    function action_dest_3 () : pcf.api.Destination {
      return pcf.BCPolicy.createDestination( gw.api.system.PCConfigParameters.BillingSystemURL.Value, uiHelper.CurrentPolicyTermInfo.PolicyNumber, uiHelper.CurrentPolicyTermInfo.TermNumber)
    }
    
    // 'action' attribute on Link (id=ViewAccount) at Policy_BillingScreen.pcf: line 146, column 81
    function action_dest_59 () : pcf.api.Destination {
      return pcf.AccountFile_Billing.createDestination(policyPeriod.Policy.Account)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=BillingPeriod_Input) at Policy_BillingScreen.pcf: line 41, column 55
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      uiHelper.CurrentPolicyTermInfo = (__VALUE_TO_SET as gw.plugin.billing.BillingTermInfo)
    }
    
    // 'initialValue' attribute on Variable at Policy_BillingScreen.pcf: line 25, column 51
    function initialValue_0 () : gw.plugin.billing.BillingPeriodInfo {
      return billingSummary
    }
    
    // 'onChange' attribute on PostOnChange at Policy_BillingScreen.pcf: line 43, column 104
    function onChange_4 () : void {
      localBillingSummary = uiHelper.createBillingSummary(billingPlugin, policyPeriod)
    }
    
    // 'optionLabel' attribute on ToolbarRangeInput (id=BillingPeriod_Input) at Policy_BillingScreen.pcf: line 41, column 55
    function optionLabel_8 (VALUE :  gw.plugin.billing.BillingTermInfo) : java.lang.String {
      return gw.web.policy.PolicyBillingUIHelper.optionFormat(VALUE)
    }
    
    // 'outputConversion' attribute on TextInput (id=Invoicing_Input) at Policy_BillingScreen.pcf: line 141, column 54
    function outputConversion_54 (VALUE :  java.lang.String) : java.lang.String {
      return localBillingSummary == null || VALUE != null ? VALUE : DisplayKey.get("Web.Policy.Payment.AccountDefault")
    }
    
    // 'sortBy' attribute on IteratorSort at Policy_BillingScreen.pcf: line 161, column 28
    function sortBy_60 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.InvoiceDate
    }
    
    // 'value' attribute on DateCell (id=StatementDate_Cell) at Policy_BillingScreen.pcf: line 166, column 44
    function sortValue_61 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.InvoiceDate
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at Policy_BillingScreen.pcf: line 170, column 47
    function sortValue_62 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.InvoiceDueDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at Policy_BillingScreen.pcf: line 175, column 39
    function sortValue_63 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.Amount
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Paid_Cell) at Policy_BillingScreen.pcf: line 180, column 37
    function sortValue_64 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.Paid
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Billed_Cell) at Policy_BillingScreen.pcf: line 185, column 39
    function sortValue_65 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.Billed
    }
    
    // 'value' attribute on MonetaryAmountCell (id=PastDue_Cell) at Policy_BillingScreen.pcf: line 190, column 40
    function sortValue_66 (invoice :  gw.plugin.billing.BillingInvoiceInfo) : java.lang.Object {
      return invoice.PastDue
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=BillingPeriod_Input) at Policy_BillingScreen.pcf: line 41, column 55
    function valueRange_9 () : java.lang.Object {
      return policyTermInfos
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalBilled_Input) at Policy_BillingScreen.pcf: line 67, column 52
    function valueRoot_16 () : java.lang.Object {
      return localBillingSummary
    }
    
    // 'value' attribute on ToolbarRangeInput (id=BillingPeriod_Input) at Policy_BillingScreen.pcf: line 41, column 55
    function valueRoot_7 () : java.lang.Object {
      return uiHelper
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalBilled_Input) at Policy_BillingScreen.pcf: line 67, column 52
    function value_15 () : gw.pl.currency.MonetaryAmount {
      return localBillingSummary.TotalBilled
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Current_Input) at Policy_BillingScreen.pcf: line 78, column 61
    function value_18 () : gw.pl.currency.MonetaryAmount {
      return localBillingSummary.CurrentOutstanding
    }
    
    // 'value' attribute on MonetaryAmountInput (id=PastDue_Input) at Policy_BillingScreen.pcf: line 84, column 50
    function value_21 () : gw.pl.currency.MonetaryAmount {
      return localBillingSummary.PastDue
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Paid_Input) at Policy_BillingScreen.pcf: line 91, column 45
    function value_24 () : gw.pl.currency.MonetaryAmount {
      return localBillingSummary.Paid
    }
    
    // 'value' attribute on MonetaryAmountInput (id=WrittenOff_Input) at Policy_BillingScreen.pcf: line 97, column 84
    function value_28 () : gw.pl.currency.MonetaryAmount {
      return localBillingSummary.WrittenOff
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Unbilled_Input) at Policy_BillingScreen.pcf: line 104, column 52
    function value_33 () : gw.pl.currency.MonetaryAmount {
      return localBillingSummary.Unbilled
    }
    
    // 'value' attribute on MonetaryAmountInput (id=TotalCharges_Input) at Policy_BillingScreen.pcf: line 112, column 53
    function value_37 () : gw.pl.currency.MonetaryAmount {
      return localBillingSummary.TotalCharges
    }
    
    // 'value' attribute on MonetaryAmountInput (id=DepositReq_Input) at Policy_BillingScreen.pcf: line 119, column 52
    function value_41 () : gw.pl.currency.MonetaryAmount {
      return localBillingSummary.DepositRequirement
    }
    
    // 'value' attribute on TypeKeyInput (id=BillingMethod_Input) at Policy_BillingScreen.pcf: line 128, column 46
    function value_45 () : typekey.BillingMethod {
      return localBillingSummary.BillingMethod
    }
    
    // 'value' attribute on TextInput (id=PaymentPlan_Input) at Policy_BillingScreen.pcf: line 132, column 56
    function value_48 () : java.lang.String {
      return localBillingSummary.PaymentPlanName
    }
    
    // 'value' attribute on ToolbarRangeInput (id=BillingPeriod_Input) at Policy_BillingScreen.pcf: line 41, column 55
    function value_5 () : gw.plugin.billing.BillingTermInfo {
      return uiHelper.CurrentPolicyTermInfo
    }
    
    // 'value' attribute on TextInput (id=AltBillingAccount_Input) at Policy_BillingScreen.pcf: line 136, column 58
    function value_51 () : java.lang.String {
      return localBillingSummary.AltBillingAccount
    }
    
    // 'value' attribute on TextInput (id=Invoicing_Input) at Policy_BillingScreen.pcf: line 141, column 54
    function value_55 () : java.lang.String {
      return localBillingSummary.InvoiceStream
    }
    
    // 'value' attribute on RowIterator at Policy_BillingScreen.pcf: line 158, column 62
    function value_85 () : gw.plugin.billing.BillingInvoiceInfo[] {
      return localBillingSummary.Invoices
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=BillingPeriod_Input) at Policy_BillingScreen.pcf: line 41, column 55
    function verifyValueRangeIsAllowedType_10 ($$arg :  gw.plugin.billing.BillingTermInfo[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=BillingPeriod_Input) at Policy_BillingScreen.pcf: line 41, column 55
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=BillingPeriod_Input) at Policy_BillingScreen.pcf: line 41, column 55
    function verifyValueRange_11 () : void {
      var __valueRangeArg = policyTermInfos
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    // 'visible' attribute on ToolbarButton (id=ViewInBC) at Policy_BillingScreen.pcf: line 33, column 121
    function visible_1 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.BillingSystemURL.Value.HasContent and perm.System.viewbillingsystem
    }
    
    // 'visible' attribute on Verbatim (id=DelinquentMessage) at Policy_BillingScreen.pcf: line 51, column 25
    function visible_13 () : java.lang.Boolean {
      return localBillingSummary.Delinquent
    }
    
    // 'visible' attribute on AlertBar (id=IsArchived) at Policy_BillingScreen.pcf: line 57, column 47
    function visible_14 () : java.lang.Boolean {
      return localBillingSummary.Archived
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=WrittenOff_Input) at Policy_BillingScreen.pcf: line 97, column 84
    function visible_27 () : java.lang.Boolean {
      return localBillingSummary.Archived || localBillingSummary.Retrieved
    }
    
    // 'visible' attribute on MonetaryAmountInput (id=Unbilled_Input) at Policy_BillingScreen.pcf: line 104, column 52
    function visible_32 () : java.lang.Boolean {
      return !localBillingSummary.Archived
    }
    
    property get billingPlugin () : gw.plugin.billing.IBillingSummaryPlugin {
      return getRequireValue("billingPlugin", 0) as gw.plugin.billing.IBillingSummaryPlugin
    }
    
    property set billingPlugin ($arg :  gw.plugin.billing.IBillingSummaryPlugin) {
      setRequireValue("billingPlugin", 0, $arg)
    }
    
    property get billingSummary () : gw.plugin.billing.BillingPeriodInfo {
      return getRequireValue("billingSummary", 0) as gw.plugin.billing.BillingPeriodInfo
    }
    
    property set billingSummary ($arg :  gw.plugin.billing.BillingPeriodInfo) {
      setRequireValue("billingSummary", 0, $arg)
    }
    
    property get localBillingSummary () : gw.plugin.billing.BillingPeriodInfo {
      return getVariableValue("localBillingSummary", 0) as gw.plugin.billing.BillingPeriodInfo
    }
    
    property set localBillingSummary ($arg :  gw.plugin.billing.BillingPeriodInfo) {
      setVariableValue("localBillingSummary", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get policyTermInfos () : gw.plugin.billing.BillingTermInfo[] {
      return getRequireValue("policyTermInfos", 0) as gw.plugin.billing.BillingTermInfo[]
    }
    
    property set policyTermInfos ($arg :  gw.plugin.billing.BillingTermInfo[]) {
      setRequireValue("policyTermInfos", 0, $arg)
    }
    
    property get uiHelper () : gw.web.policy.PolicyBillingUIHelper {
      return getRequireValue("uiHelper", 0) as gw.web.policy.PolicyBillingUIHelper
    }
    
    property set uiHelper ($arg :  gw.web.policy.PolicyBillingUIHelper) {
      setRequireValue("uiHelper", 0, $arg)
    }
    
    
  }
  
  
}