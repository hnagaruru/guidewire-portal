package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.MidtermInstallments.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingAdjustmentsPanelSet_MidtermInstallmentsExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.MidtermInstallments.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingAdjustmentsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 81, column 63
    function def_onEnter_40 (def :  pcf.BillingAdjustmentsInstallmentsLV) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager.MaybeGetInstallmentPlanAsArray, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on ListViewInput at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 81, column 63
    function def_refreshVariables_41 (def :  pcf.BillingAdjustmentsInstallmentsLV) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager.MaybeGetInstallmentPlanAsArray, policyPeriodBillingInstructionsManager)
    }
    
    // 'value' attribute on TextInput (id=BillImmediately_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 39, column 145
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.BillImmediatelyPercentage = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on RangeInput (id=AllocationOfRemainder_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 48, column 145
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.AllocationOfRemainder = (__VALUE_TO_SET as typekey.BillingRemainderAllocate)
    }
    
    // 'value' attribute on RangeInput (id=SpecialHandlingOption_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 60, column 127
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.SpecialHandling = (__VALUE_TO_SET as typekey.SpecialHandling)
    }
    
    // 'value' attribute on CheckBoxInput (id=OverrideBillingAllocation_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 29, column 101
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.OverrideBillingAllocation = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on CheckBoxInput (id=OverrideBillingAllocation_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 29, column 101
    function editable_1 () : java.lang.Boolean {
      return perm.PolicyPeriod.overridebilling
    }
    
    // 'editable' attribute on RangeInput (id=AllocationOfRemainder_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 48, column 145
    function editable_17 () : java.lang.Boolean {
      return perm.PolicyPeriod.overridebilling and policyPeriod.OverrideBillingAllocation
    }
    
    // 'onChange' attribute on PostOnChange at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 62, column 108
    function onChange_29 () : void {
      policyPeriodBillingInstructionsManager.synchronizeAfterCommit(CurrentLocation)
    }
    
    // 'valueRange' attribute on RangeInput (id=AllocationOfRemainder_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 48, column 145
    function valueRange_22 () : java.lang.Object {
      return typekey.BillingRemainderAllocate.getTypeKeys( true )
    }
    
    // 'valueRange' attribute on RangeInput (id=SpecialHandlingOption_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 60, column 127
    function valueRange_34 () : java.lang.Object {
      return policyPeriod.AvailableSpecialHandlingTypes
    }
    
    // 'value' attribute on CheckBoxInput (id=OverrideBillingAllocation_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 29, column 101
    function valueRoot_5 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextInput (id=BillImmediately_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 39, column 145
    function value_11 () : java.math.BigDecimal {
      return policyPeriod.BillImmediatelyPercentage
    }
    
    // 'value' attribute on RangeInput (id=AllocationOfRemainder_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 48, column 145
    function value_19 () : typekey.BillingRemainderAllocate {
      return policyPeriod.AllocationOfRemainder
    }
    
    // 'value' attribute on CheckBoxInput (id=OverrideBillingAllocation_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 29, column 101
    function value_3 () : java.lang.Boolean {
      return policyPeriod.OverrideBillingAllocation
    }
    
    // 'value' attribute on RangeInput (id=SpecialHandlingOption_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 60, column 127
    function value_31 () : typekey.SpecialHandling {
      return policyPeriod.SpecialHandling
    }
    
    // 'valueRange' attribute on RangeInput (id=AllocationOfRemainder_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 48, column 145
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AllocationOfRemainder_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 48, column 145
    function verifyValueRangeIsAllowedType_23 ($$arg :  typekey.BillingRemainderAllocate[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SpecialHandlingOption_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 60, column 127
    function verifyValueRangeIsAllowedType_35 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SpecialHandlingOption_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 60, column 127
    function verifyValueRangeIsAllowedType_35 ($$arg :  typekey.SpecialHandling[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AllocationOfRemainder_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 48, column 145
    function verifyValueRange_24 () : void {
      var __valueRangeArg = typekey.BillingRemainderAllocate.getTypeKeys( true )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=SpecialHandlingOption_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 60, column 127
    function verifyValueRange_36 () : void {
      var __valueRangeArg = policyPeriod.AvailableSpecialHandlingTypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_35(__valueRangeArg)
    }
    
    // 'visible' attribute on Label (id=BillingIssuanceOptions) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 23, column 102
    function visible_0 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.OverridingBillingAllocationAvailable
    }
    
    // 'visible' attribute on TextInput (id=BillImmediately_Input) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 39, column 145
    function visible_10 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.OverridingBillingAllocationAvailable and policyPeriod.OverrideBillingAllocation
    }
    
    // 'visible' attribute on Label (id=SpecialHandling) at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 52, column 128
    function visible_28 () : java.lang.Boolean {
      return perm.PolicyPeriod.overridebilling and policyPeriodBillingInstructionsManager.SpecialHandlingAvailable
    }
    
    // 'visible' attribute on ListViewInput at BillingAdjustmentsPanelSet.MidtermInstallments.pcf: line 81, column 63
    function visible_39 () : java.lang.Boolean {
      return policyPeriod.InstallmentsPlanSelected
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