package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingAdjustmentsPanelSet_MidtermInstallmentsReadOnlyExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingAdjustmentsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 74, column 63
    function def_onEnter_28 (def :  pcf.BillingAdjustmentsInstallmentsLV) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager.MaybeGetInstallmentPlanAsArray, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on ListViewInput at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 74, column 63
    function def_refreshVariables_29 (def :  pcf.BillingAdjustmentsInstallmentsLV) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager.MaybeGetInstallmentPlanAsArray, policyPeriodBillingInstructionsManager)
    }
    
    // 'valueRange' attribute on RangeInput (id=SpecialHandlingOption_Input) at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 56, column 90
    function valueRange_22 () : java.lang.Object {
      return policyPeriod.AvailableSpecialHandlingTypes
    }
    
    // 'value' attribute on TypeKeyInput (id=BillingMethod_Input) at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 27, column 50
    function valueRoot_1 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TypeKeyInput (id=BillingMethod_Input) at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 27, column 50
    function value_0 () : typekey.BillingMethod {
      return policyPeriod.BillingMethod
    }
    
    // 'value' attribute on TypeKeyInput (id=AllocationOfRemainder_Input) at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 44, column 145
    function value_14 () : typekey.BillingRemainderAllocate {
      return policyPeriod.AllocationOfRemainder
    }
    
    // 'value' attribute on RangeInput (id=SpecialHandlingOption_Input) at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 56, column 90
    function value_20 () : typekey.SpecialHandling {
      return policyPeriod.SpecialHandling
    }
    
    // 'value' attribute on BooleanRadioInput (id=OverrideBillingAllocation_Input) at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 32, column 102
    function value_4 () : java.lang.Boolean {
      return policyPeriod.OverrideBillingAllocation
    }
    
    // 'value' attribute on TextInput (id=BillImmediately_Input) at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 38, column 145
    function value_9 () : java.math.BigDecimal {
      return policyPeriod.BillImmediatelyPercentage
    }
    
    // 'valueRange' attribute on RangeInput (id=SpecialHandlingOption_Input) at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 56, column 90
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SpecialHandlingOption_Input) at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 56, column 90
    function verifyValueRangeIsAllowedType_23 ($$arg :  typekey.SpecialHandling[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SpecialHandlingOption_Input) at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 56, column 90
    function verifyValueRange_24 () : void {
      var __valueRangeArg = policyPeriod.AvailableSpecialHandlingTypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    // 'visible' attribute on Label (id=SpecialHandling) at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 48, column 90
    function visible_18 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.SpecialHandlingAvailable
    }
    
    // 'visible' attribute on ListViewInput at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 74, column 63
    function visible_27 () : java.lang.Boolean {
      return policyPeriod.InstallmentsPlanSelected
    }
    
    // 'visible' attribute on BooleanRadioInput (id=OverrideBillingAllocation_Input) at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 32, column 102
    function visible_3 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.OverridingBillingAllocationAvailable
    }
    
    // 'visible' attribute on TextInput (id=BillImmediately_Input) at BillingAdjustmentsPanelSet.MidtermInstallmentsReadOnly.pcf: line 38, column 145
    function visible_8 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.OverridingBillingAllocationAvailable and policyPeriod.OverrideBillingAllocation
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