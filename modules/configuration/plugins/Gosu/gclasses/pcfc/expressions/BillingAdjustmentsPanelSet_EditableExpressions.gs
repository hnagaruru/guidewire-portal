package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.Editable.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingAdjustmentsPanelSet_EditableExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.Editable.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingAdjustmentsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on BooleanRadioInput (id=NewInvoicing_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 137, column 86
    function available_51 () : java.lang.Boolean {
      return !policyPeriodBillingInstructionsManager.InvoiceStreams.IsEmpty
    }
    
    // 'def' attribute on InputSetRef at BillingAdjustmentsPanelSet.Editable.pcf: line 52, column 169
    function def_onEnter_16 (def :  pcf.AccountContactBillingInputSet) : void {
      def.onEnter(policyPeriod.Policy.Account, true, policyPeriodBillingInstructionsManager, policyPeriod.PreferredSettlementCurrency)
    }
    
    // 'def' attribute on InputSetRef (id=PaymentsPlanDV) at BillingAdjustmentsPanelSet.Editable.pcf: line 83, column 84
    function def_onEnter_26 (def :  pcf.PaymentsPlanInputSet_Installments) : void {
      def.onEnter(policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on InputSetRef (id=PaymentsPlanDV) at BillingAdjustmentsPanelSet.Editable.pcf: line 83, column 84
    function def_onEnter_28 (def :  pcf.PaymentsPlanInputSet_ReportingPlan) : void {
      def.onEnter(policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on InputSetRef (id=OverriddenInvoiceStreamInput) at BillingAdjustmentsPanelSet.Editable.pcf: line 107, column 161
    function def_onEnter_40 (def :  pcf.BillingInvoiceStreamInputSet) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on ListViewInput (id=InvoiceStreams) at BillingAdjustmentsPanelSet.Editable.pcf: line 147, column 59
    function def_onEnter_60 (def :  pcf.InvoiceStreamsLV) : void {
      def.onEnter(policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on ListViewInput (id=EmptyInvoiceStreams) at BillingAdjustmentsPanelSet.Editable.pcf: line 155, column 160
    function def_onEnter_63 (def :  pcf.EmptyInvoiceStreamsLV) : void {
      def.onEnter(policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on InputSetRef at BillingAdjustmentsPanelSet.Editable.pcf: line 160, column 82
    function def_onEnter_66 (def :  pcf.BillingInvoiceStreamInputSet) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on InputSetRef at BillingAdjustmentsPanelSet.Editable.pcf: line 52, column 169
    function def_refreshVariables_17 (def :  pcf.AccountContactBillingInputSet) : void {
      def.refreshVariables(policyPeriod.Policy.Account, true, policyPeriodBillingInstructionsManager, policyPeriod.PreferredSettlementCurrency)
    }
    
    // 'def' attribute on InputSetRef (id=PaymentsPlanDV) at BillingAdjustmentsPanelSet.Editable.pcf: line 83, column 84
    function def_refreshVariables_27 (def :  pcf.PaymentsPlanInputSet_Installments) : void {
      def.refreshVariables(policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on InputSetRef (id=PaymentsPlanDV) at BillingAdjustmentsPanelSet.Editable.pcf: line 83, column 84
    function def_refreshVariables_29 (def :  pcf.PaymentsPlanInputSet_ReportingPlan) : void {
      def.refreshVariables(policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on InputSetRef (id=OverriddenInvoiceStreamInput) at BillingAdjustmentsPanelSet.Editable.pcf: line 107, column 161
    function def_refreshVariables_41 (def :  pcf.BillingInvoiceStreamInputSet) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on ListViewInput (id=InvoiceStreams) at BillingAdjustmentsPanelSet.Editable.pcf: line 147, column 59
    function def_refreshVariables_61 (def :  pcf.InvoiceStreamsLV) : void {
      def.refreshVariables(policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on ListViewInput (id=EmptyInvoiceStreams) at BillingAdjustmentsPanelSet.Editable.pcf: line 155, column 160
    function def_refreshVariables_64 (def :  pcf.EmptyInvoiceStreamsLV) : void {
      def.refreshVariables(policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on InputSetRef at BillingAdjustmentsPanelSet.Editable.pcf: line 160, column 82
    function def_refreshVariables_67 (def :  pcf.BillingInvoiceStreamInputSet) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager)
    }
    
    // 'value' attribute on RangeInput (id=BillingMethod_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 47, column 97
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      billingMethod = (__VALUE_TO_SET as typekey.BillingMethod)
    }
    
    // 'value' attribute on TypeKeyInput (id=PaymentMethod_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 76, column 100
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.PaymentMethodChoice = (__VALUE_TO_SET as typekey.PaymentMethod)
    }
    
    // 'value' attribute on CheckBoxInput (id=Overridden_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 101, column 93
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.OverriddenInvoiceStream = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=Custom_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 117, column 83
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.CustomBilling = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=NewInvoicing_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 137, column 86
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.NewInvoicing = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=UnappliedFund_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 170, column 83
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.NewUnappliedFund = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=UnappliedFundInput_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 179, column 86
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.UnappliedFundDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'falseLabel' attribute on BooleanRadioInput (id=UnappliedFund_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 170, column 83
    function falseLabel_72 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.DisplayAccountUnappliedOrExisting
    }
    
    // 'initialValue' attribute on Variable at BillingAdjustmentsPanelSet.Editable.pcf: line 18, column 39
    function initialValue_0 () : typekey.BillingMethod[] {
      return policyPeriodBillingInstructionsManager.AvailableBillingMethods
    }
    
    // 'initialValue' attribute on Variable at BillingAdjustmentsPanelSet.Editable.pcf: line 22, column 37
    function initialValue_1 () : typekey.BillingMethod {
      return policyPeriodBillingInstructionsManager.BillingMethod
    }
    
    // 'label' attribute on CheckBoxInput (id=Overridden_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 101, column 93
    function label_32 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Payment.Overridden", policyPeriodBillingInstructionsManager.PaymentPlanChoice.Name)
    }
    
    // 'mode' attribute on InputSetRef (id=PaymentsPlanDV) at BillingAdjustmentsPanelSet.Editable.pcf: line 83, column 84
    function mode_30 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.PaymentMethodChoice
    }
    
    // 'onChange' attribute on PostOnChange at BillingAdjustmentsPanelSet.Editable.pcf: line 78, column 97
    function onChange_18 () : void {
      policyPeriodBillingInstructionsManager.chooseDefaultPaymentPlan()
    }
    
    // 'onChange' attribute on PostOnChange at BillingAdjustmentsPanelSet.Editable.pcf: line 139, column 98
    function onChange_50 () : void {
      policyPeriodBillingInstructionsManager.invoicingOptionChanged() 
    }
    
    // 'onChange' attribute on PostOnChange at BillingAdjustmentsPanelSet.Editable.pcf: line 49, column 102
    function onChange_7 () : void {
      policyPeriodBillingInstructionsManager.BillingMethodType = billingMethod
    }
    
    // 'onPick' attribute on TypeKeyInput (id=PaymentMethod_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 76, column 100
    function onPick_20 (PickedValue :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.updateUpFrontPaymentStateContainer()
    }
    
    // 'value' attribute on RadioButtonCell (id=UnappliedFundSelect_Cell) at BillingAdjustmentsPanelSet.Editable.pcf: line 199, column 120
    function sortValue_80 (unappliedFundInfo :  gw.plugin.billing.BillingUnappliedFundInfo) : java.lang.Object {
      return policyPeriodBillingInstructionsManager.UnappliedFundID == unappliedFundInfo.PublicID
    }
    
    // 'value' attribute on TextCell (id=UnappliedFund_Cell) at BillingAdjustmentsPanelSet.Editable.pcf: line 205, column 66
    function sortValue_81 (unappliedFundInfo :  gw.plugin.billing.BillingUnappliedFundInfo) : java.lang.Object {
      return unappliedFundInfo.Description
    }
    
    // 'valueRange' attribute on RangeInput (id=BillingMethod_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 47, column 97
    function valueRange_11 () : java.lang.Object {
      return availableBillingMethods
    }
    
    // 'value' attribute on TextInput (id=BillingLevel_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 36, column 86
    function valueRoot_4 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager
    }
    
    // 'value' attribute on TypeKeyInput (id=PaymentMethod_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 76, column 100
    function value_21 () : typekey.PaymentMethod {
      return policyPeriodBillingInstructionsManager.PaymentMethodChoice
    }
    
    // 'value' attribute on TextInput (id=BillingLevel_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 36, column 86
    function value_3 () : typekey.BillingLevel {
      return policyPeriodBillingInstructionsManager.BillingLevel
    }
    
    // 'value' attribute on CheckBoxInput (id=Overridden_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 101, column 93
    function value_33 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.OverriddenInvoiceStream
    }
    
    // 'value' attribute on CheckBoxInput (id=Custom_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 117, column 83
    function value_44 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.CustomBilling
    }
    
    // 'value' attribute on BooleanRadioInput (id=NewInvoicing_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 137, column 86
    function value_53 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.NewInvoicing
    }
    
    // 'value' attribute on BooleanRadioInput (id=UnappliedFund_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 170, column 83
    function value_69 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.NewUnappliedFund
    }
    
    // 'value' attribute on TextInput (id=UnappliedFundInput_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 179, column 86
    function value_75 () : java.lang.String {
      return policyPeriodBillingInstructionsManager.UnappliedFundDescription
    }
    
    // 'value' attribute on RowIterator at BillingAdjustmentsPanelSet.Editable.pcf: line 189, column 80
    function value_88 () : gw.plugin.billing.BillingUnappliedFundInfo[] {
      return policyPeriodBillingInstructionsManager.UnappliedFunds
    }
    
    // 'value' attribute on RangeInput (id=BillingMethod_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 47, column 97
    function value_9 () : typekey.BillingMethod {
      return billingMethod
    }
    
    // 'valueRange' attribute on RangeInput (id=BillingMethod_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 47, column 97
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BillingMethod_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 47, column 97
    function verifyValueRangeIsAllowedType_12 ($$arg :  typekey.BillingMethod[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BillingMethod_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 47, column 97
    function verifyValueRange_13 () : void {
      var __valueRangeArg = availableBillingMethods
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyInput (id=PaymentMethod_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 76, column 100
    function visible_19 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.HasBothInstallmentsAndReportPlans
    }
    
    // 'visible' attribute on TextInput (id=BillingLevel_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 36, column 86
    function visible_2 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.BillingLevel != null
    }
    
    // 'visible' attribute on CheckBoxInput (id=Overridden_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 101, column 93
    function visible_31 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.AllowOverriddenInvoiceStream
    }
    
    // 'visible' attribute on InputSetRef (id=OverriddenInvoiceStreamInput) at BillingAdjustmentsPanelSet.Editable.pcf: line 107, column 161
    function visible_39 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.OverriddenInvoiceStream and policyPeriodBillingInstructionsManager.AllowOverriddenInvoiceStream
    }
    
    // 'visible' attribute on InputDivider at BillingAdjustmentsPanelSet.Editable.pcf: line 109, column 84
    function visible_42 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.AllowCustomBilling
    }
    
    // 'visible' attribute on Label at BillingAdjustmentsPanelSet.Editable.pcf: line 123, column 84
    function visible_49 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.ShowInvoicingLabel
    }
    
    // 'visible' attribute on BooleanRadioInput (id=NewInvoicing_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 137, column 86
    function visible_52 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.AllowNewInvoicing
    }
    
    // 'visible' attribute on ListViewInput (id=InvoiceStreams) at BillingAdjustmentsPanelSet.Editable.pcf: line 147, column 59
    function visible_59 () : java.lang.Boolean {
      return not policyPeriodBillingInstructionsManager.NewInvoicing and not policyPeriodBillingInstructionsManager.InvoiceStreams.IsEmpty
    }
    
    // 'visible' attribute on ListViewInput (id=EmptyInvoiceStreams) at BillingAdjustmentsPanelSet.Editable.pcf: line 155, column 160
    function visible_62 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.InvoiceStreams.IsEmpty and policyPeriodBillingInstructionsManager.AllowEmptyInvoiceStreamLV
    }
    
    // 'visible' attribute on InputSet at BillingAdjustmentsPanelSet.Editable.pcf: line 128, column 91
    function visible_68 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.EnableInvoicingSelection
    }
    
    // 'visible' attribute on RangeInput (id=BillingMethod_Input) at BillingAdjustmentsPanelSet.Editable.pcf: line 47, column 97
    function visible_8 () : java.lang.Boolean {
      return availableBillingMethods != null and availableBillingMethods.HasElements
    }
    
    // 'visible' attribute on ListViewInput (id=UnappliedFundSelect) at BillingAdjustmentsPanelSet.Editable.pcf: line 182, column 159
    function visible_89 () : java.lang.Boolean {
      return not policyPeriodBillingInstructionsManager.NewUnappliedFund and not policyPeriodBillingInstructionsManager.UnappliedFunds.IsEmpty
    }
    
    property get availableBillingMethods () : typekey.BillingMethod[] {
      return getVariableValue("availableBillingMethods", 0) as typekey.BillingMethod[]
    }
    
    property set availableBillingMethods ($arg :  typekey.BillingMethod[]) {
      setVariableValue("availableBillingMethods", 0, $arg)
    }
    
    property get billingMethod () : typekey.BillingMethod {
      return getVariableValue("billingMethod", 0) as typekey.BillingMethod
    }
    
    property set billingMethod ($arg :  typekey.BillingMethod) {
      setVariableValue("billingMethod", 0, $arg)
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
  
  @javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.Editable.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BillingAdjustmentsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RadioButtonCell (id=UnappliedFundSelect_Cell) at BillingAdjustmentsPanelSet.Editable.pcf: line 199, column 120
    function action_82 () : void {
      policyPeriodBillingInstructionsManager.UnappliedFundID = unappliedFundInfo.PublicID
    }
    
    // 'value' attribute on TextCell (id=UnappliedFund_Cell) at BillingAdjustmentsPanelSet.Editable.pcf: line 205, column 66
    function valueRoot_86 () : java.lang.Object {
      return unappliedFundInfo
    }
    
    // 'value' attribute on RadioButtonCell (id=UnappliedFundSelect_Cell) at BillingAdjustmentsPanelSet.Editable.pcf: line 199, column 120
    function value_83 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.UnappliedFundID == unappliedFundInfo.PublicID
    }
    
    // 'value' attribute on TextCell (id=UnappliedFund_Cell) at BillingAdjustmentsPanelSet.Editable.pcf: line 205, column 66
    function value_85 () : java.lang.String {
      return unappliedFundInfo.Description
    }
    
    property get unappliedFundInfo () : gw.plugin.billing.BillingUnappliedFundInfo {
      return getIteratedValue(1) as gw.plugin.billing.BillingUnappliedFundInfo
    }
    
    
  }
  
  
}