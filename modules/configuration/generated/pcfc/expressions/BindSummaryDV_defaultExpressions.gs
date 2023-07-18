package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/BindSummaryDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BindSummaryDV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/BindSummaryDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BindSummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at BindSummaryDV.default.pcf: line 20, column 107
    function def_onEnter_0 (def :  pcf.PremiumSummaryInputSet) : void {
      def.onEnter(policyPeriodBillingInstructionsManager, thePeriod, isMidtermChange)
    }
    
    // 'def' attribute on InputSetRef at BindSummaryDV.default.pcf: line 24, column 89
    function def_onEnter_2 (def :  pcf.InvoiceStreamInputSet) : void {
      def.onEnter(policyPeriodBillingInstructionsManager, thePeriod)
    }
    
    // 'def' attribute on InputSetRef at BindSummaryDV.default.pcf: line 20, column 107
    function def_refreshVariables_1 (def :  pcf.PremiumSummaryInputSet) : void {
      def.refreshVariables(policyPeriodBillingInstructionsManager, thePeriod, isMidtermChange)
    }
    
    // 'def' attribute on InputSetRef at BindSummaryDV.default.pcf: line 24, column 89
    function def_refreshVariables_3 (def :  pcf.InvoiceStreamInputSet) : void {
      def.refreshVariables(policyPeriodBillingInstructionsManager, thePeriod)
    }
    
    property get isMidtermChange () : boolean {
      return getRequireValue("isMidtermChange", 0) as java.lang.Boolean
    }
    
    property set isMidtermChange ($arg :  boolean) {
      setRequireValue("isMidtermChange", 0, $arg)
    }
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getRequireValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setRequireValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    property get thePeriod () : PolicyPeriod {
      return getRequireValue("thePeriod", 0) as PolicyPeriod
    }
    
    property set thePeriod ($arg :  PolicyPeriod) {
      setRequireValue("thePeriod", 0, $arg)
    }
    
    
  }
  
  
}