package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/cancellation/CancelPolicyDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CancelPolicyDVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/cancellation/CancelPolicyDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CancelPolicyDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateInput (id=CancelDate_Input) at CancelPolicyDV.pcf: line 49, column 31
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      effectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextAreaInput (id=ReasonDescription_Input) at CancelPolicyDV.pcf: line 37, column 43
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      cancellation.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on DateInput (id=CancelDate_Input) at CancelPolicyDV.pcf: line 49, column 31
    function editable_16 () : java.lang.Boolean {
      return cancellation.canEditEffectiveDate(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at CancelPolicyDV.pcf: line 16, column 35
    function initialValue_0 () : entity.PolicyPeriod {
      return cancellation.PolicyPeriod
    }
    
    // 'initialValue' attribute on Variable at CancelPolicyDV.pcf: line 20, column 30
    function initialValue_1 () : java.util.Date {
      return policyPeriod.EditEffectiveDate
    }
    
    // 'onChange' attribute on PostOnChange at CancelPolicyDV.pcf: line 51, column 84
    function onChange_15 () : void {
      if (effectiveDate != null) { applyCancellationDateChange() }
    }
    
    // 'validationExpression' attribute on DateInput (id=CancelDate_Input) at CancelPolicyDV.pcf: line 49, column 31
    function validationExpression_17 () : java.lang.Object {
      return cancellation.validateEffectiveDate(policyPeriod, effectiveDate, policyPeriod.RefundCalcMethod)
    }
    
    // 'value' attribute on TypeKeyInput (id=CalcMethod_Input) at CancelPolicyDV.pcf: line 42, column 48
    function valueRoot_13 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TypeKeyInput (id=Source_Input) at CancelPolicyDV.pcf: line 26, column 49
    function valueRoot_3 () : java.lang.Object {
      return cancellation
    }
    
    // 'value' attribute on TypeKeyInput (id=CalcMethod_Input) at CancelPolicyDV.pcf: line 42, column 48
    function value_12 () : typekey.CalculationMethod {
      return policyPeriod.RefundCalcMethod
    }
    
    // 'value' attribute on DateInput (id=CancelDate_Input) at CancelPolicyDV.pcf: line 49, column 31
    function value_18 () : java.util.Date {
      return effectiveDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Source_Input) at CancelPolicyDV.pcf: line 26, column 49
    function value_2 () : typekey.CancellationSource {
      return cancellation.Source
    }
    
    // 'value' attribute on TypeKeyInput (id=Reason_Input) at CancelPolicyDV.pcf: line 31, column 41
    function value_5 () : typekey.ReasonCode {
      return cancellation.CancelReasonCode
    }
    
    // 'value' attribute on TextAreaInput (id=ReasonDescription_Input) at CancelPolicyDV.pcf: line 37, column 43
    function value_8 () : java.lang.String {
      return cancellation.Description
    }
    
    property get cancellation () : Cancellation {
      return getRequireValue("cancellation", 0) as Cancellation
    }
    
    property set cancellation ($arg :  Cancellation) {
      setRequireValue("cancellation", 0, $arg)
    }
    
    property get effectiveDate () : java.util.Date {
      return getVariableValue("effectiveDate", 0) as java.util.Date
    }
    
    property set effectiveDate ($arg :  java.util.Date) {
      setVariableValue("effectiveDate", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    function applyCancellationDateChange() {
      try{
        policyPeriod.CancellationProcess.setCancellationDate(effectiveDate)
        jobWizardHelper.setPeriodToView(policyPeriod.getSlice(policyPeriod.EditEffectiveDate))
      } catch(e : java.lang.IllegalArgumentException) {
        var formatString = DisplayKey.get("Web.CancellationSetup.Error.DateFormatString")
        var effDateStr = effectiveDate.format(formatString)
        gw.api.job.JobProcessLogger.logWarning("Failed to change cancellation date to ${effDateStr} for period \"${policyPeriod}\" because: ${e.Message}")
      }
    }
    
    
  }
  
  
}