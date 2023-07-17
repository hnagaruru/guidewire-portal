package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/billing/BillingInvoiceStreamInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingInvoiceStreamInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/billing/BillingInvoiceStreamInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingInvoiceStreamInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddPaymentInstrument) at BillingInvoiceStreamInputSet.pcf: line 94, column 81
    function action_56 () : void {
      policyPeriodBillingInstructionsManager.externalPaymentLocation(policyPeriod)
    }
    
    // 'available' attribute on BooleanRadioInput (id=Automatic_Input) at BillingInvoiceStreamInputSet.pcf: line 80, column 70
    function available_47 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.AllowResponsive
    }
    
    // 'available' attribute on ToolbarButton (id=AddPaymentInstrument) at BillingInvoiceStreamInputSet.pcf: line 94, column 81
    function available_55 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.PaymentSystemURL.Value.HasContent
    }
    
    // 'def' attribute on ListViewInput (id=PaymentInstrument) at BillingInvoiceStreamInputSet.pcf: line 88, column 132
    function def_onEnter_58 (def :  pcf.PaymentInstrumentsLV) : void {
      def.onEnter(policyPeriodBillingInstructionsManager.refreshPaymentInstrumentValues(), policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on ListViewInput (id=PaymentInstrument) at BillingInvoiceStreamInputSet.pcf: line 88, column 132
    function def_refreshVariables_59 (def :  pcf.PaymentInstrumentsLV) : void {
      def.refreshVariables(policyPeriodBillingInstructionsManager.refreshPaymentInstrumentValues(), policyPeriodBillingInstructionsManager)
    }
    
    // 'value' attribute on RangeInput (id=FirstDayOfMonth_Input) at BillingInvoiceStreamInputSet.pcf: line 32, column 37
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.FirstDayOfMonth = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on RangeInput (id=Invoice_Input) at BillingInvoiceStreamInputSet.pcf: line 21, column 37
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.DueDateBilling = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=SecondDayOfMonth_Input) at BillingInvoiceStreamInputSet.pcf: line 43, column 37
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.SecondDayOfMonth = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=DayOfWeek_Input) at BillingInvoiceStreamInputSet.pcf: line 53, column 73
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.DayOfWeek = (__VALUE_TO_SET as typekey.DayOfWeek)
    }
    
    // 'value' attribute on DateInput (id=FirstPaymentDate_Input) at BillingInvoiceStreamInputSet.pcf: line 62, column 75
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.FirstAnchorDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=InvoiceStreamDescription_Input) at BillingInvoiceStreamInputSet.pcf: line 69, column 66
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Automatic_Input) at BillingInvoiceStreamInputSet.pcf: line 80, column 70
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.Automatic = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'optionLabel' attribute on RangeInput (id=Invoice_Input) at BillingInvoiceStreamInputSet.pcf: line 21, column 37
    function optionLabel_4 (VALUE :  java.lang.Boolean) : java.lang.String {
      return VALUE ? BillDateOrDueDateBilling.TC_DUEDATEBILLING.DisplayName : BillDateOrDueDateBilling.TC_BILLDATEBILLING.DisplayName
    }
    
    // 'required' attribute on RangeInput (id=Invoice_Input) at BillingInvoiceStreamInputSet.pcf: line 21, column 37
    function required_0 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.CustomBilling
    }
    
    // 'valueRange' attribute on RangeInput (id=FirstDayOfMonth_Input) at BillingInvoiceStreamInputSet.pcf: line 32, column 37
    function valueRange_14 () : java.lang.Object {
      return (1..31).toTypedArray()
    }
    
    // 'valueRange' attribute on RangeInput (id=Invoice_Input) at BillingInvoiceStreamInputSet.pcf: line 21, column 37
    function valueRange_5 () : java.lang.Object {
      return {true, false}
    }
    
    // 'value' attribute on RangeInput (id=Invoice_Input) at BillingInvoiceStreamInputSet.pcf: line 21, column 37
    function valueRoot_3 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager
    }
    
    // 'value' attribute on RangeInput (id=Invoice_Input) at BillingInvoiceStreamInputSet.pcf: line 21, column 37
    function value_1 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.DueDateBilling
    }
    
    // 'value' attribute on RangeInput (id=FirstDayOfMonth_Input) at BillingInvoiceStreamInputSet.pcf: line 32, column 37
    function value_11 () : java.lang.Integer {
      return policyPeriodBillingInstructionsManager.FirstDayOfMonth
    }
    
    // 'value' attribute on RangeInput (id=SecondDayOfMonth_Input) at BillingInvoiceStreamInputSet.pcf: line 43, column 37
    function value_21 () : java.lang.Integer {
      return policyPeriodBillingInstructionsManager.SecondDayOfMonth
    }
    
    // 'value' attribute on TypeKeyInput (id=DayOfWeek_Input) at BillingInvoiceStreamInputSet.pcf: line 53, column 73
    function value_31 () : typekey.DayOfWeek {
      return policyPeriodBillingInstructionsManager.DayOfWeek
    }
    
    // 'value' attribute on DateInput (id=FirstPaymentDate_Input) at BillingInvoiceStreamInputSet.pcf: line 62, column 75
    function value_38 () : java.util.Date {
      return policyPeriodBillingInstructionsManager.FirstAnchorDate
    }
    
    // 'value' attribute on TextInput (id=InvoiceStreamDescription_Input) at BillingInvoiceStreamInputSet.pcf: line 69, column 66
    function value_43 () : java.lang.String {
      return policyPeriodBillingInstructionsManager.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=Automatic_Input) at BillingInvoiceStreamInputSet.pcf: line 80, column 70
    function value_49 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.Automatic
    }
    
    // 'valueRange' attribute on RangeInput (id=FirstDayOfMonth_Input) at BillingInvoiceStreamInputSet.pcf: line 32, column 37
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.lang.Integer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FirstDayOfMonth_Input) at BillingInvoiceStreamInputSet.pcf: line 32, column 37
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SecondDayOfMonth_Input) at BillingInvoiceStreamInputSet.pcf: line 43, column 37
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.lang.Integer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SecondDayOfMonth_Input) at BillingInvoiceStreamInputSet.pcf: line 43, column 37
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Invoice_Input) at BillingInvoiceStreamInputSet.pcf: line 21, column 37
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.lang.Boolean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Invoice_Input) at BillingInvoiceStreamInputSet.pcf: line 21, column 37
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FirstDayOfMonth_Input) at BillingInvoiceStreamInputSet.pcf: line 32, column 37
    function verifyValueRange_16 () : void {
      var __valueRangeArg = (1..31).toTypedArray()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=SecondDayOfMonth_Input) at BillingInvoiceStreamInputSet.pcf: line 43, column 37
    function verifyValueRange_26 () : void {
      var __valueRangeArg = (1..31).toTypedArray()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_25(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Invoice_Input) at BillingInvoiceStreamInputSet.pcf: line 21, column 37
    function verifyValueRange_7 () : void {
      var __valueRangeArg = {true, false}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=SecondDayOfMonth_Input) at BillingInvoiceStreamInputSet.pcf: line 43, column 37
    function visible_19 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.SecondDayOfMonthVisible
    }
    
    // 'visible' attribute on TypeKeyInput (id=DayOfWeek_Input) at BillingInvoiceStreamInputSet.pcf: line 53, column 73
    function visible_29 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.DayOfWeekVisible
    }
    
    // 'visible' attribute on DateInput (id=FirstPaymentDate_Input) at BillingInvoiceStreamInputSet.pcf: line 62, column 75
    function visible_36 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.PaymentDateVisible
    }
    
    // 'visible' attribute on ListViewInput (id=PaymentInstrument) at BillingInvoiceStreamInputSet.pcf: line 88, column 132
    function visible_57 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.OverriddenInvoiceStream or policyPeriodBillingInstructionsManager.Automatic
    }
    
    // 'visible' attribute on RangeInput (id=FirstDayOfMonth_Input) at BillingInvoiceStreamInputSet.pcf: line 32, column 37
    function visible_9 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.FirstDayOfMonthVisible
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getRequireValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setRequireValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    
  }
  
  
}