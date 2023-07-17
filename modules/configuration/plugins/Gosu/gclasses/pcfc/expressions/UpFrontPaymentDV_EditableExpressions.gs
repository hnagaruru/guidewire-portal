package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/billing/UpFrontPaymentDV.Editable.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UpFrontPaymentDV_EditableExpressions {
  @javax.annotation.Generated("config/web/pcf/billing/UpFrontPaymentDV.Editable.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UpFrontPaymentDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=RemoveCollectedPayment) at UpFrontPaymentDV.Editable.pcf: line 92, column 62
    function action_19 () : void {
      billingStateContainer.removePayment(payment)
    }
    
    // 'value' attribute on TextCell (id=PaymentInstrumentName_Cell) at UpFrontPaymentDV.Editable.pcf: line 68, column 64
    function valueRoot_10 () : java.lang.Object {
      return payment
    }
    
    // 'value' attribute on TextCell (id=Reference_Cell) at UpFrontPaymentDV.Editable.pcf: line 72, column 43
    function value_12 () : java.lang.String {
      return payment.Reference
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at UpFrontPaymentDV.Editable.pcf: line 85, column 41
    function value_15 () : gw.pl.currency.MonetaryAmount {
      return payment.Amount
    }
    
    // 'value' attribute on TextCell (id=PaymentInstrumentName_Cell) at UpFrontPaymentDV.Editable.pcf: line 68, column 64
    function value_9 () : java.lang.String {
      return payment.PaymentInstrumentOrMethodName
    }
    
    // 'visible' attribute on Link (id=RemoveCollectedPayment) at UpFrontPaymentDV.Editable.pcf: line 92, column 62
    function visible_18 () : java.lang.Boolean {
      return not job.UpFrontPayments.IsEmpty
    }
    
    property get payment () : UpFrontPayment {
      return getIteratedValue(1) as UpFrontPayment
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/billing/UpFrontPaymentDV.Editable.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UpFrontPaymentDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=AgentAddButtonLink) at UpFrontPaymentDV.Editable.pcf: line 132, column 37
    function action_28 () : void {
      billingStateContainer.createPayment()
    }
    
    // 'action' attribute on ToolbarButton (id=SynchronizeTransactionsButton) at UpFrontPaymentDV.Editable.pcf: line 52, column 56
    function action_4 () : void {
      billingStateContainer.synchronizePendingPaymentGatewayTransactions(policyPeriod)
    }
    
    // 'action' attribute on Link (id=CheckAddButtonLink) at UpFrontPaymentDV.Editable.pcf: line 160, column 37
    function action_46 () : void {
      billingStateContainer.createPayment()
    }
    
    // 'action' attribute on Link (id=CashAddButtonLink) at UpFrontPaymentDV.Editable.pcf: line 188, column 37
    function action_64 () : void {
      billingStateContainer.createPayment()
    }
    
    // 'action' attribute on Link (id=ElectronicAddButtonLink) at UpFrontPaymentDV.Editable.pcf: line 229, column 37
    function action_91 () : void {
      billingStateContainer.createElectronicPayment(billingStateContainer, policyPeriod, saveForFuture)
    }
    
    // 'available' attribute on Link (id=ElectronicAddButtonLink) at UpFrontPaymentDV.Editable.pcf: line 229, column 37
    function available_90 () : java.lang.Boolean {
      return billingStateContainer.UpFrontPaymentInstrument != null
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=AgentAmount_Input) at UpFrontPaymentDV.Editable.pcf: line 123, column 54
    function currency_26 () : typekey.Currency {
      return currency
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AgentAmount_Input) at UpFrontPaymentDV.Editable.pcf: line 123, column 54
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      billingStateContainer.AgentAmount = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on Choice (id=AgentChoiceOption) at UpFrontPaymentDV.Editable.pcf: line 117, column 50
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      billingStateContainer.UpFrontPaymentMethod = (__VALUE_TO_SET as typekey.UpFrontPaymentMethod)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CheckAmount_Input) at UpFrontPaymentDV.Editable.pcf: line 145, column 54
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      billingStateContainer.CheckAmount = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on TextInput (id=CheckReference_Input) at UpFrontPaymentDV.Editable.pcf: line 151, column 98
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      billingStateContainer.Reference = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CashAmount_Input) at UpFrontPaymentDV.Editable.pcf: line 173, column 53
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      billingStateContainer.CashAmount = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=ElectronicAmount_Input) at UpFrontPaymentDV.Editable.pcf: line 201, column 59
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      billingStateContainer.ElectronicAmount = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on RangeInput (id=PaymentInstrument_Input) at UpFrontPaymentDV.Editable.pcf: line 210, column 102
    function defaultSetter_78 (__VALUE_TO_SET :  java.lang.Object) : void {
      billingStateContainer.UpFrontPaymentInstrument = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=SaveForFutureCheckbox_Input) at UpFrontPaymentDV.Editable.pcf: line 219, column 172
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      saveForFuture = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at UpFrontPaymentDV.Editable.pcf: line 27, column 34
    function initialValue_0 () : List<String> {
      return billingStateContainer.retrieveAvailablePaymentInstrumentsForUpFrontPayment()
    }
    
    // 'initialValue' attribute on Variable at UpFrontPaymentDV.Editable.pcf: line 31, column 24
    function initialValue_1 () : Currency {
      return policyPeriod.PreferredSettlementCurrency
    }
    
    // 'initialValue' attribute on Variable at UpFrontPaymentDV.Editable.pcf: line 36, column 23
    function initialValue_2 () : Boolean {
      return billingStateContainer.HasPendingPaymentGatewayTransactions
    }
    
    // 'label' attribute on ListViewInput (id=CollectedPayments) at UpFrontPaymentDV.Editable.pcf: line 45, column 27
    function label_22 () : java.lang.String {
      return unprocessedTransactionAvailable ? DisplayKey.get('Web.UpFrontPaymentDV.Error.UnprocessedPaymentTransactions') : ""
    }
    
    // 'option' attribute on Choice (id=AgentChoiceOption) at UpFrontPaymentDV.Editable.pcf: line 117, column 50
    function option_30 () : java.lang.Object {
      return typekey.UpFrontPaymentMethod.TC_AGENT.Code
    }
    
    // 'option' attribute on Choice (id=CheckChoiceOption) at UpFrontPaymentDV.Editable.pcf: line 139, column 50
    function option_48 () : java.lang.Object {
      return typekey.UpFrontPaymentMethod.TC_CHECK.Code
    }
    
    // 'option' attribute on Choice (id=CashChoiceOption) at UpFrontPaymentDV.Editable.pcf: line 167, column 50
    function option_66 () : java.lang.Object {
      return typekey.UpFrontPaymentMethod.TC_CASH.Code
    }
    
    // 'option' attribute on Choice (id=ElectronicChoiceOption) at UpFrontPaymentDV.Editable.pcf: line 195, column 50
    function option_93 () : java.lang.Object {
      return typekey.UpFrontPaymentMethod.TC_ELECTRONIC.Code
    }
    
    // 'value' attribute on TextCell (id=Reference_Cell) at UpFrontPaymentDV.Editable.pcf: line 72, column 43
    function sortValue_5 (payment :  UpFrontPayment) : java.lang.Object {
      return payment.Reference
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at UpFrontPaymentDV.Editable.pcf: line 85, column 41
    function sortValue_6 (payment :  UpFrontPayment) : java.lang.Object {
      return payment.Amount
    }
    
    // '$$sumValue' attribute on RowIterator (id=CollectedUpFrontPayments) at UpFrontPaymentDV.Editable.pcf: line 85, column 41
    function sumValueRoot_8 (payment :  UpFrontPayment) : java.lang.Object {
      return payment
    }
    
    // 'footerSumValue' attribute on RowIterator (id=CollectedUpFrontPayments) at UpFrontPaymentDV.Editable.pcf: line 85, column 41
    function sumValue_7 (payment :  UpFrontPayment) : java.lang.Object {
      return payment.Amount
    }
    
    // 'valueRange' attribute on RangeInput (id=PaymentInstrument_Input) at UpFrontPaymentDV.Editable.pcf: line 210, column 102
    function valueRange_80 () : java.lang.Object {
      return paymentInstruments
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AgentAmount_Input) at UpFrontPaymentDV.Editable.pcf: line 123, column 54
    function valueRoot_25 () : java.lang.Object {
      return billingStateContainer
    }
    
    // 'value' attribute on RowIterator (id=CollectedUpFrontPayments) at UpFrontPaymentDV.Editable.pcf: line 62, column 49
    function value_20 () : entity.UpFrontPayment[] {
      return job.UpFrontPayments
    }
    
    // 'value' attribute on MonetaryAmountInput (id=AgentAmount_Input) at UpFrontPaymentDV.Editable.pcf: line 123, column 54
    function value_23 () : gw.pl.currency.MonetaryAmount {
      return billingStateContainer.AgentAmount
    }
    
    // 'value' attribute on Choice (id=AgentChoiceOption) at UpFrontPaymentDV.Editable.pcf: line 117, column 50
    function value_31 () : typekey.UpFrontPaymentMethod {
      return billingStateContainer.UpFrontPaymentMethod
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CheckAmount_Input) at UpFrontPaymentDV.Editable.pcf: line 145, column 54
    function value_35 () : gw.pl.currency.MonetaryAmount {
      return billingStateContainer.CheckAmount
    }
    
    // 'value' attribute on TextInput (id=CheckReference_Input) at UpFrontPaymentDV.Editable.pcf: line 151, column 98
    function value_41 () : java.lang.String {
      return billingStateContainer.Reference
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CashAmount_Input) at UpFrontPaymentDV.Editable.pcf: line 173, column 53
    function value_53 () : gw.pl.currency.MonetaryAmount {
      return billingStateContainer.CashAmount
    }
    
    // 'value' attribute on MonetaryAmountInput (id=ElectronicAmount_Input) at UpFrontPaymentDV.Editable.pcf: line 201, column 59
    function value_71 () : gw.pl.currency.MonetaryAmount {
      return billingStateContainer.ElectronicAmount
    }
    
    // 'value' attribute on RangeInput (id=PaymentInstrument_Input) at UpFrontPaymentDV.Editable.pcf: line 210, column 102
    function value_77 () : java.lang.String {
      return billingStateContainer.UpFrontPaymentInstrument
    }
    
    // 'value' attribute on CheckBoxInput (id=SaveForFutureCheckbox_Input) at UpFrontPaymentDV.Editable.pcf: line 219, column 172
    function value_86 () : java.lang.Boolean {
      return saveForFuture
    }
    
    // 'valueRange' attribute on RangeInput (id=PaymentInstrument_Input) at UpFrontPaymentDV.Editable.pcf: line 210, column 102
    function verifyValueRangeIsAllowedType_81 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PaymentInstrument_Input) at UpFrontPaymentDV.Editable.pcf: line 210, column 102
    function verifyValueRangeIsAllowedType_81 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PaymentInstrument_Input) at UpFrontPaymentDV.Editable.pcf: line 210, column 102
    function verifyValueRange_82 () : void {
      var __valueRangeArg = paymentInstruments
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_81(__valueRangeArg)
    }
    
    // 'visible' attribute on Row at UpFrontPaymentDV.Editable.pcf: line 97, column 51
    function visible_21 () : java.lang.Boolean {
      return job.UpFrontPayments.IsEmpty
    }
    
    // 'visible' attribute on ContentInput at UpFrontPaymentDV.Editable.pcf: line 125, column 97
    function visible_29 () : java.lang.Boolean {
      return billingStateContainer.UpFrontPaymentMethod == UpFrontPaymentMethod.TC_AGENT
    }
    
    // 'visible' attribute on ToolbarButton (id=SynchronizeTransactionsButton) at UpFrontPaymentDV.Editable.pcf: line 52, column 56
    function visible_3 () : java.lang.Boolean {
      return unprocessedTransactionAvailable
    }
    
    // 'visible' attribute on TextInput (id=CheckReference_Input) at UpFrontPaymentDV.Editable.pcf: line 151, column 98
    function visible_40 () : java.lang.Boolean {
      return billingStateContainer.UpFrontPaymentMethod == UpFrontPaymentMethod.TC_CHECK
    }
    
    // 'visible' attribute on TextInput (id=CashReference_Input) at UpFrontPaymentDV.Editable.pcf: line 179, column 97
    function visible_58 () : java.lang.Boolean {
      return billingStateContainer.UpFrontPaymentMethod == UpFrontPaymentMethod.TC_CASH
    }
    
    // 'visible' attribute on RangeInput (id=PaymentInstrument_Input) at UpFrontPaymentDV.Editable.pcf: line 210, column 102
    function visible_76 () : java.lang.Boolean {
      return billingStateContainer.UpFrontPaymentMethod == UpFrontPaymentMethod.TC_ELECTRONIC
    }
    
    // 'visible' attribute on CheckBoxInput (id=SaveForFutureCheckbox_Input) at UpFrontPaymentDV.Editable.pcf: line 219, column 172
    function visible_85 () : java.lang.Boolean {
      return billingStateContainer.UpFrontPaymentMethod == UpFrontPaymentMethod.TC_ELECTRONIC && billingStateContainer.UpFrontPaymentInstrument == 'Other'
    }
    
    // 'visible' attribute on DetailViewPanel (id=UpFrontPaymentDV) at UpFrontPaymentDV.Editable.pcf: line 8, column 60
    function visible_98 () : java.lang.Boolean {
      return billingStateContainer.UpFrontPaymentsVisible
    }
    
    property get billingStateContainer () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getRequireValue("billingStateContainer", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set billingStateContainer ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setRequireValue("billingStateContainer", 0, $arg)
    }
    
    property get currency () : Currency {
      return getVariableValue("currency", 0) as Currency
    }
    
    property set currency ($arg :  Currency) {
      setVariableValue("currency", 0, $arg)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get paymentInstruments () : List<String> {
      return getVariableValue("paymentInstruments", 0) as List<String>
    }
    
    property set paymentInstruments ($arg :  List<String>) {
      setVariableValue("paymentInstruments", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get saveForFuture () : boolean {
      return getVariableValue("saveForFuture", 0) as java.lang.Boolean
    }
    
    property set saveForFuture ($arg :  boolean) {
      setVariableValue("saveForFuture", 0, $arg)
    }
    
    property get unprocessedTransactionAvailable () : Boolean {
      return getVariableValue("unprocessedTransactionAvailable", 0) as Boolean
    }
    
    property set unprocessedTransactionAvailable ($arg :  Boolean) {
      setVariableValue("unprocessedTransactionAvailable", 0, $arg)
    }
    
    
  }
  
  
}