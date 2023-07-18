package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.ReadOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingAdjustmentsPanelSet_ReadOnlyExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.ReadOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingAdjustmentsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 57, column 63
    function def_onEnter_12 (def :  pcf.BillingAdjustmentsInstallmentsLV) : void {
      def.onEnter(policyPeriod, policyPeriodBillingInstructionsManager.MaybeGetInstallmentPlanAsArray, policyPeriodBillingInstructionsManager)
    }
    
    // 'def' attribute on InputSetRef at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 39, column 170
    function def_onEnter_9 (def :  pcf.AccountContactBillingInputSet) : void {
      def.onEnter(policyPeriod.Policy.Account, false, policyPeriodBillingInstructionsManager, policyPeriod.PreferredSettlementCurrency)
    }
    
    // 'def' attribute on InputSetRef at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 39, column 170
    function def_refreshVariables_10 (def :  pcf.AccountContactBillingInputSet) : void {
      def.refreshVariables(policyPeriod.Policy.Account, false, policyPeriodBillingInstructionsManager, policyPeriod.PreferredSettlementCurrency)
    }
    
    // 'def' attribute on ListViewInput at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 57, column 63
    function def_refreshVariables_13 (def :  pcf.BillingAdjustmentsInstallmentsLV) : void {
      def.refreshVariables(policyPeriod, policyPeriodBillingInstructionsManager.MaybeGetInstallmentPlanAsArray, policyPeriodBillingInstructionsManager)
    }
    
    // 'initialValue' attribute on Variable at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 18, column 33
    function initialValue_0 () : java.lang.Boolean {
      return policyPeriod.PolicyTerm.DepositReleased
    }
    
    // 'value' attribute on TextInput (id=PremiumReportPlan_Input) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 73, column 61
    function valueRoot_16 () : java.lang.Object {
      return policyPeriod.SelectedPaymentPlan
    }
    
    // 'value' attribute on TextInput (id=DepositDefault_Input) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 89, column 51
    function valueRoot_22 () : java.lang.Object {
      return policyPeriod.ReportingPattern
    }
    
    // 'value' attribute on TextInput (id=BillingLevel_Input) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 32, column 86
    function valueRoot_3 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager
    }
    
    // 'value' attribute on TypeKeyInput (id=BillingMethod_Input) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 37, column 50
    function valueRoot_7 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextInput (id=PremiumReportPlan_Input) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 73, column 61
    function value_15 () : java.lang.String {
      return policyPeriod.SelectedPaymentPlan.Name
    }
    
    // 'value' attribute on TextInput (id=BillingLevel_Input) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 32, column 86
    function value_2 () : typekey.BillingLevel {
      return policyPeriodBillingInstructionsManager.BillingLevel
    }
    
    // 'value' attribute on TextInput (id=DepositDefault_Input) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 89, column 51
    function value_21 () : java.math.BigDecimal {
      return policyPeriod.ReportingPattern.ReportingDefaultDepositPct
    }
    
    // 'value' attribute on TextInput (id=DepositOverride_Input) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 94, column 51
    function value_24 () : java.math.BigDecimal {
      return policyPeriod.DepositOverridePct
    }
    
    // 'value' attribute on MonetaryAmountInput (id=DepositAmount_Input) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 98, column 53
    function value_27 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.DepositAmount
    }
    
    // 'value' attribute on TypeKeyInput (id=BillingMethod_Input) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 37, column 50
    function value_6 () : typekey.BillingMethod {
      return policyPeriod.BillingMethod
    }
    
    // 'visible' attribute on TextInput (id=BillingLevel_Input) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 32, column 86
    function visible_1 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.BillingLevel != null
    }
    
    // 'visible' attribute on ListViewInput at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 57, column 63
    function visible_11 () : java.lang.Boolean {
      return policyPeriod.InstallmentsPlanSelected
    }
    
    // 'visible' attribute on TextInput (id=PremiumReportPlan_Input) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 73, column 61
    function visible_14 () : java.lang.Boolean {
      return policyPeriod.ReportingPlanSelected
    }
    
    // 'visible' attribute on BooleanRadioInput (id=DepositReleased_Input) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 79, column 42
    function visible_19 () : java.lang.Boolean {
      return depositReleased
    }
    
    // 'childrenVisible' attribute on InputGroup (id=DepositInputGroup) at BillingAdjustmentsPanelSet.ReadOnly.pcf: line 84, column 78
    function visible_30 () : java.lang.Boolean {
      return policyPeriod.ReportingPlanSelected and not depositReleased
    }
    
    property get depositReleased () : java.lang.Boolean {
      return getVariableValue("depositReleased", 0) as java.lang.Boolean
    }
    
    property set depositReleased ($arg :  java.lang.Boolean) {
      setVariableValue("depositReleased", 0, $arg)
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