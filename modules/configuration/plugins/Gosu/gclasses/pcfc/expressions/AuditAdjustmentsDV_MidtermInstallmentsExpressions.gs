package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/AuditAdjustmentsDV.MidtermInstallments.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditAdjustmentsDV_MidtermInstallmentsExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/AuditAdjustmentsDV.MidtermInstallments.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditAdjustmentsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on RangeInput (id=FinalAudit_Input) at AuditAdjustmentsDV.MidtermInstallments.pcf: line 28, column 45
    function available_1 () : java.lang.Boolean {
      return typeof(policyPeriod.Job) == Issuance
    }
    
    // 'value' attribute on RangeInput (id=FinalAudit_Input) at AuditAdjustmentsDV.MidtermInstallments.pcf: line 28, column 45
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyPeriod.FinalAuditOption = (__VALUE_TO_SET as typekey.FinalAuditOption)
    }
    
    // 'valueRange' attribute on RangeInput (id=FinalAudit_Input) at AuditAdjustmentsDV.MidtermInstallments.pcf: line 28, column 45
    function valueRange_7 () : java.lang.Object {
      return typekey.FinalAuditOption.getTypeKeys( true )
    }
    
    // 'value' attribute on RangeInput (id=FinalAudit_Input) at AuditAdjustmentsDV.MidtermInstallments.pcf: line 28, column 45
    function valueRoot_6 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on RangeInput (id=FinalAudit_Input) at AuditAdjustmentsDV.MidtermInstallments.pcf: line 28, column 45
    function value_4 () : typekey.FinalAuditOption {
      return policyPeriod.FinalAuditOption
    }
    
    // 'valueRange' attribute on RangeInput (id=FinalAudit_Input) at AuditAdjustmentsDV.MidtermInstallments.pcf: line 28, column 45
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FinalAudit_Input) at AuditAdjustmentsDV.MidtermInstallments.pcf: line 28, column 45
    function verifyValueRangeIsAllowedType_8 ($$arg :  typekey.FinalAuditOption[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=FinalAudit_Input) at AuditAdjustmentsDV.MidtermInstallments.pcf: line 28, column 45
    function verifyValueRange_9 () : void {
      var __valueRangeArg = typekey.FinalAuditOption.getTypeKeys( true )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    // 'visible' attribute on Label at AuditAdjustmentsDV.MidtermInstallments.pcf: line 18, column 45
    function visible_0 () : java.lang.Boolean {
      return policyPeriod.IsAuditable
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