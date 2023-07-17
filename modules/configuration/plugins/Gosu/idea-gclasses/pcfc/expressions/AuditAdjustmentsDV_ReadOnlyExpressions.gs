package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/AuditAdjustmentsDV.ReadOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditAdjustmentsDV_ReadOnlyExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/AuditAdjustmentsDV.ReadOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditAdjustmentsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=FinalAudit_Input) at AuditAdjustmentsDV.ReadOnly.pcf: line 24, column 45
    function valueRoot_3 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TypeKeyInput (id=FinalAudit_Input) at AuditAdjustmentsDV.ReadOnly.pcf: line 24, column 45
    function value_2 () : typekey.FinalAuditOption {
      return policyPeriod.FinalAuditOption
    }
    
    // 'visible' attribute on Label at AuditAdjustmentsDV.ReadOnly.pcf: line 18, column 45
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