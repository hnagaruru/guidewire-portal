package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingAdjustmentsPanelSet_MidtermReportingReadOnlyExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingAdjustmentsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 17, column 45
    function initialValue_0 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.DepositChangeFromBasedOnPeriod
    }
    
    // 'label' attribute on BooleanRadioInput (id=WaiveDepositChange_Input) at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 68, column 58
    function label_20 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Payment.MidtermChange.WaiveDepositChange", depositChange)
    }
    
    // 'value' attribute on TypeKeyInput (id=BillingMethod_Input) at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 30, column 50
    function valueRoot_2 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextInput (id=PremiumReportPlan_Input) at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 34, column 62
    function valueRoot_5 () : java.lang.Object {
      return policyPeriod.SelectedPaymentPlan
    }
    
    // 'value' attribute on TextInput (id=DepositDefault_Input) at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 39, column 49
    function valueRoot_8 () : java.lang.Object {
      return policyPeriod.ReportingPattern
    }
    
    // 'value' attribute on TypeKeyInput (id=BillingMethod_Input) at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 30, column 50
    function value_1 () : typekey.BillingMethod {
      return policyPeriod.BillingMethod
    }
    
    // 'value' attribute on TextInput (id=DepositOverride_Input) at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 55, column 51
    function value_12 () : java.math.BigDecimal {
      return policyPeriod.DepositOverridePct
    }
    
    // 'value' attribute on MonetaryAmountInput (id=DepositAmount_Input) at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 59, column 53
    function value_15 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.DepositAmount
    }
    
    // 'value' attribute on MonetaryAmountInput (id=DepositChange_Input) at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 64, column 40
    function value_18 () : gw.pl.currency.MonetaryAmount {
      return depositChange
    }
    
    // 'value' attribute on BooleanRadioInput (id=WaiveDepositChange_Input) at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 68, column 58
    function value_21 () : java.lang.Boolean {
      return policyPeriod.WaiveDepositChange
    }
    
    // 'value' attribute on TextInput (id=PremiumReportPlan_Input) at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 34, column 62
    function value_4 () : java.lang.String {
      return policyPeriod.SelectedPaymentPlan.Name
    }
    
    // 'value' attribute on TextInput (id=DepositDefault_Input) at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 39, column 49
    function value_7 () : java.math.BigDecimal {
      return policyPeriod.ReportingPattern.ReportingDefaultDepositPct
    }
    
    // 'visible' attribute on BooleanRadioInput (id=DepositReleased_Input) at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 45, column 66
    function visible_10 () : java.lang.Boolean {
      return policyPeriod.PolicyTerm.DepositReleased
    }
    
    // 'childrenVisible' attribute on InputGroup (id=DepositInputGroup) at BillingAdjustmentsPanelSet.MidtermReportingReadOnly.pcf: line 50, column 78
    function visible_25 () : java.lang.Boolean {
      return not policyPeriod.PolicyTerm.DepositReleased
    }
    
    property get depositChange () : gw.pl.currency.MonetaryAmount {
      return getVariableValue("depositChange", 0) as gw.pl.currency.MonetaryAmount
    }
    
    property set depositChange ($arg :  gw.pl.currency.MonetaryAmount) {
      setVariableValue("depositChange", 0, $arg)
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