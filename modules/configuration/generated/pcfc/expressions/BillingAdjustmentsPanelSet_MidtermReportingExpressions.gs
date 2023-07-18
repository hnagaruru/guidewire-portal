package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.MidtermReporting.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingAdjustmentsPanelSet_MidtermReportingExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentsPanelSet.MidtermReporting.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingAdjustmentsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=DepositOverride_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 55, column 50
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.DepositOverridePct = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on CheckBoxInput (id=WaiveDepositChange_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 79, column 169
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.WaiveDepositChange = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on TextInput (id=DepositOverride_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 55, column 50
    function editable_9 () : java.lang.Boolean {
      return perm.PolicyPeriod.overridebilling
    }
    
    // 'initialValue' attribute on Variable at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return policyPeriod.canOverrideDeposit()
    }
    
    // 'onChange' attribute on PostOnChange at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 81, column 85
    function onChange_22 () : void {
      policyPeriodBillingInstructionsManager.resetDeposit()
    }
    
    // 'requestValidationExpression' attribute on TextInput (id=DepositOverride_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 55, column 50
    function requestValidationExpression_10 (VALUE :  java.math.BigDecimal) : java.lang.Object {
      return !(VALUE < 0 || VALUE > 100) ? null : DisplayKey.get("Web.Policy.Payment.DepositOverride.OutOfRange")
    }
    
    // 'valueLabel' attribute on CheckBoxInput (id=WaiveDepositChange_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 79, column 169
    function valueLabel_27 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Payment.MidtermChange.WaiveDepositChange", policyPeriodBillingInstructionsManager.getDepositChange())
    }
    
    // 'value' attribute on TextInput (id=DepositOverride_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 55, column 50
    function valueRoot_13 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager
    }
    
    // 'value' attribute on TextInput (id=PremiumReportPlan_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 30, column 31
    function valueRoot_2 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.PaymentPlanChoice
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CurrentDepositAmount_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 71, column 32
    function valueRoot_20 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextInput (id=DepositDefault_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 48, column 33
    function valueRoot_7 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.AuditSchedulePattern
    }
    
    // 'value' attribute on TextInput (id=PremiumReportPlan_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 30, column 31
    function value_1 () : java.lang.String {
      return policyPeriodBillingInstructionsManager.PaymentPlanChoice.Name
    }
    
    // 'value' attribute on TextInput (id=DepositOverride_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 55, column 50
    function value_11 () : java.math.BigDecimal {
      return policyPeriodBillingInstructionsManager.DepositOverridePct
    }
    
    // 'value' attribute on MonetaryAmountInput (id=ProposedDepositAmount_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 62, column 87
    function value_16 () : gw.pl.currency.MonetaryAmount {
      return policyPeriodBillingInstructionsManager.DepositAmountToDisplay
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CurrentDepositAmount_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 71, column 32
    function value_19 () : gw.pl.currency.MonetaryAmount {
      return policyPeriod.PrevDepositAmount
    }
    
    // 'value' attribute on CheckBoxInput (id=WaiveDepositChange_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 79, column 169
    function value_24 () : java.lang.Boolean {
      return policyPeriodBillingInstructionsManager.WaiveDepositChange
    }
    
    // 'value' attribute on TextInput (id=DepositDefault_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 48, column 33
    function value_6 () : java.math.BigDecimal {
      return  policyPeriodBillingInstructionsManager.AuditSchedulePattern.ReportingDefaultDepositPct
    }
    
    // 'childrenVisible' attribute on InputGroup (id=DepositInputGroup) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 42, column 44
    function visible_30 () : java.lang.Boolean {
      return canOverrideDeposit
    }
    
    // 'visible' attribute on BooleanRadioInput (id=DepositReleased_Input) at BillingAdjustmentsPanelSet.MidtermReporting.pcf: line 36, column 49
    function visible_4 () : java.lang.Boolean {
      return not canOverrideDeposit
    }
    
    property get canOverrideDeposit () : boolean {
      return getVariableValue("canOverrideDeposit", 0) as java.lang.Boolean
    }
    
    property set canOverrideDeposit ($arg :  boolean) {
      setVariableValue("canOverrideDeposit", 0, $arg)
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