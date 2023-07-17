package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Billing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_BillingExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Billing.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_BillingExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_Billing) at PolicyFile_Billing.pcf: line 11, column 64
    function afterEnter_6 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_Billing) at PolicyFile_Billing.pcf: line 11, column 64
    static function canVisit_7 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.pfilebilling
    }
    
    // 'def' attribute on ScreenRef at PolicyFile_Billing.pcf: line 37, column 107
    function def_onEnter_4 (def :  pcf.Policy_BillingScreen) : void {
      def.onEnter(policyPeriod, billingPlugin, policyTermInfos, billingSummary, uiHelper)
    }
    
    // 'def' attribute on ScreenRef at PolicyFile_Billing.pcf: line 37, column 107
    function def_refreshVariables_5 (def :  pcf.Policy_BillingScreen) : void {
      def.refreshVariables(policyPeriod, billingPlugin, policyTermInfos, billingSummary, uiHelper)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Billing.pcf: line 23, column 55
    function initialValue_0 () : gw.plugin.billing.IBillingSummaryPlugin {
      return gw.plugin.Plugins.get( gw.plugin.billing.IBillingSummaryPlugin )
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Billing.pcf: line 27, column 51
    function initialValue_1 () : gw.plugin.billing.BillingPeriodInfo {
      return gw.web.policy.PolicyBillingUIHelper.retrieveBillingSummary(billingPlugin, policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Billing.pcf: line 31, column 51
    function initialValue_2 () : gw.plugin.billing.BillingTermInfo[] {
      return billingSummary.PolicyTermInfos
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Billing.pcf: line 35, column 51
    function initialValue_3 () : gw.web.policy.PolicyBillingUIHelper {
      return new gw.web.policy.PolicyBillingUIHelper(policyPeriod, policyTermInfos)
    }
    
    // 'onResume' attribute on Page (id=PolicyFile_Billing) at PolicyFile_Billing.pcf: line 11, column 64
    function onResume_8 () : void {
      billingSummary = gw.web.policy.PolicyBillingUIHelper.retrieveBillingSummary(billingPlugin, uiHelper.CurrentPolicyTermInfo)
    }
    
    // Page (id=PolicyFile_Billing) at PolicyFile_Billing.pcf: line 11, column 64
    static function parent_9 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod,asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Billing {
      return super.CurrentLocation as pcf.PolicyFile_Billing
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get billingPlugin () : gw.plugin.billing.IBillingSummaryPlugin {
      return getVariableValue("billingPlugin", 0) as gw.plugin.billing.IBillingSummaryPlugin
    }
    
    property set billingPlugin ($arg :  gw.plugin.billing.IBillingSummaryPlugin) {
      setVariableValue("billingPlugin", 0, $arg)
    }
    
    property get billingSummary () : gw.plugin.billing.BillingPeriodInfo {
      return getVariableValue("billingSummary", 0) as gw.plugin.billing.BillingPeriodInfo
    }
    
    property set billingSummary ($arg :  gw.plugin.billing.BillingPeriodInfo) {
      setVariableValue("billingSummary", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get policyTermInfos () : gw.plugin.billing.BillingTermInfo[] {
      return getVariableValue("policyTermInfos", 0) as gw.plugin.billing.BillingTermInfo[]
    }
    
    property set policyTermInfos ($arg :  gw.plugin.billing.BillingTermInfo[]) {
      setVariableValue("policyTermInfos", 0, $arg)
    }
    
    property get uiHelper () : gw.web.policy.PolicyBillingUIHelper {
      return getVariableValue("uiHelper", 0) as gw.web.policy.PolicyBillingUIHelper
    }
    
    property set uiHelper ($arg :  gw.web.policy.PolicyBillingUIHelper) {
      setVariableValue("uiHelper", 0, $arg)
    }
    
    
  }
  
  
}