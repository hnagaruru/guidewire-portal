package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentPreviewPaymentsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BillingAdjustmentPreviewPaymentsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/BillingAdjustmentPreviewPaymentsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BillingAdjustmentPreviewPaymentsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (paymentPlanName :  String, installmentsPreview :  gw.plugin.billing.BillingPaymentsPreview, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at BillingAdjustmentPreviewPaymentsPopup.pcf: line 23, column 92
    function def_onEnter_0 (def :  pcf.BillingAdjustmentPreviewPaymentsScreen) : void {
      def.onEnter(installmentsPreview, policyPeriod.Job)
    }
    
    // 'def' attribute on ScreenRef at BillingAdjustmentPreviewPaymentsPopup.pcf: line 23, column 92
    function def_refreshVariables_1 (def :  pcf.BillingAdjustmentPreviewPaymentsScreen) : void {
      def.refreshVariables(installmentsPreview, policyPeriod.Job)
    }
    
    // 'title' attribute on Popup (id=BillingAdjustmentPreviewPaymentsPopup) at BillingAdjustmentPreviewPaymentsPopup.pcf: line 10, column 82
    static function title_2 (installmentsPreview :  gw.plugin.billing.BillingPaymentsPreview, paymentPlanName :  String, policyPeriod :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get('Web.Policy.Payment.Schedule.Title', paymentPlanName)
    }
    
    override property get CurrentLocation () : pcf.BillingAdjustmentPreviewPaymentsPopup {
      return super.CurrentLocation as pcf.BillingAdjustmentPreviewPaymentsPopup
    }
    
    property get installmentsPreview () : gw.plugin.billing.BillingPaymentsPreview {
      return getVariableValue("installmentsPreview", 0) as gw.plugin.billing.BillingPaymentsPreview
    }
    
    property set installmentsPreview ($arg :  gw.plugin.billing.BillingPaymentsPreview) {
      setVariableValue("installmentsPreview", 0, $arg)
    }
    
    property get paymentPlanName () : java.lang.String {
      return getVariableValue("paymentPlanName", 0) as java.lang.String
    }
    
    property set paymentPlanName ($arg :  java.lang.String) {
      setVariableValue("paymentPlanName", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}