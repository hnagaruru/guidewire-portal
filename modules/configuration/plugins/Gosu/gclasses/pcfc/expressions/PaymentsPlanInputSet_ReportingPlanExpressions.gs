package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/PaymentsPlanInputSet.ReportingPlan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentsPlanInputSet_ReportingPlanExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/PaymentsPlanInputSet.ReportingPlan.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentsPlanInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=PremiumReportPlan_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 21, column 74
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.ReportingPlanChoice = (__VALUE_TO_SET as gw.plugin.billing.ReportingPlanData)
    }
    
    // 'value' attribute on TextInput (id=DepositOverride_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 35, column 40
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriodBillingInstructionsManager.DepositOverridePct = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'editable' attribute on TextInput (id=DepositOverride_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 35, column 40
    function editable_12 () : java.lang.Boolean {
      return perm.PolicyPeriod.overridebilling
    }
    
    // 'onChange' attribute on PostOnChange at PaymentsPlanInputSet.ReportingPlan.pcf: line 37, column 102
    function onChange_11 () : void {
      policyPeriodBillingInstructionsManager.calculateAndSetDepositAmountOnReporting()
    }
    
    // 'optionLabel' attribute on RangeInput (id=PremiumReportPlan_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 21, column 74
    function optionLabel_3 (VALUE :  gw.plugin.billing.ReportingPlanData) : java.lang.String {
      return VALUE.Name
    }
    
    // 'requestValidationExpression' attribute on TextInput (id=DepositOverride_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 35, column 40
    function requestValidationExpression_13 (VALUE :  java.math.BigDecimal) : java.lang.Object {
      return !(VALUE < 0 || VALUE > 100) ? null : DisplayKey.get("Web.Policy.Payment.DepositOverride.OutOfRange")
    }
    
    // 'valueRange' attribute on RangeInput (id=PremiumReportPlan_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 21, column 74
    function valueRange_4 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager.ReportingPlans
    }
    
    // 'value' attribute on RangeInput (id=PremiumReportPlan_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 21, column 74
    function valueRoot_2 () : java.lang.Object {
      return policyPeriodBillingInstructionsManager
    }
    
    // 'value' attribute on RangeInput (id=PremiumReportPlan_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 21, column 74
    function value_0 () : gw.plugin.billing.ReportingPlanData {
      return policyPeriodBillingInstructionsManager.ReportingPlanChoice
    }
    
    // 'value' attribute on TextInput (id=DepositOverride_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 35, column 40
    function value_14 () : java.math.BigDecimal {
      return policyPeriodBillingInstructionsManager.DepositOverridePct
    }
    
    // 'value' attribute on MonetaryAmountInput (id=DepositAmount_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 42, column 69
    function value_19 () : gw.pl.currency.MonetaryAmount {
      return policyPeriodBillingInstructionsManager.DepositAmount
    }
    
    // 'value' attribute on TextInput (id=DepositDefault_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 28, column 41
    function value_8 () : java.math.BigDecimal {
      return policyPeriodBillingInstructionsManager.ReportingDefaultDepositPct
    }
    
    // 'valueRange' attribute on RangeInput (id=PremiumReportPlan_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 21, column 74
    function verifyValueRangeIsAllowedType_5 ($$arg :  gw.plugin.billing.ReportingPlanData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PremiumReportPlan_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 21, column 74
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PremiumReportPlan_Input) at PaymentsPlanInputSet.ReportingPlan.pcf: line 21, column 74
    function verifyValueRange_6 () : void {
      var __valueRangeArg = policyPeriodBillingInstructionsManager.ReportingPlans
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getRequireValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setRequireValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    
  }
  
  
}