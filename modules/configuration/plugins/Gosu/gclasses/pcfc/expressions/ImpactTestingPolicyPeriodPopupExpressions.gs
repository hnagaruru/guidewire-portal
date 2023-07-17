package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingPolicyPeriodPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImpactTestingPolicyPeriodPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingPolicyPeriodPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImpactTestingPolicyPeriodPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (impactPeriod :  ImpactTestingPolicyPeriod) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodPopup.pcf: line 20, column 71
    function def_onEnter_2 (def :  pcf.ImpactTestingPolicyPeriodSummaryPanelSet) : void {
      def.onEnter(impactPeriod)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodPopup.pcf: line 20, column 71
    function def_refreshVariables_3 (def :  pcf.ImpactTestingPolicyPeriodSummaryPanelSet) : void {
      def.refreshVariables(impactPeriod)
    }
    
    // 'label' attribute on AlertBar (id=testPrepAlert) at ImpactTestingPolicyPeriodPopup.pcf: line 18, column 45
    function label_1 () : java.lang.Object {
      return DisplayKey.get("Web.Rating.ImpactTesting.PeriodPrepErrorPopup.AlertMessage", impactPeriod.FailureMessage)
    }
    
    // 'visible' attribute on AlertBar (id=testPrepAlert) at ImpactTestingPolicyPeriodPopup.pcf: line 18, column 45
    function visible_0 () : java.lang.Boolean {
      return impactPeriod.HasFailures
    }
    
    override property get CurrentLocation () : pcf.ImpactTestingPolicyPeriodPopup {
      return super.CurrentLocation as pcf.ImpactTestingPolicyPeriodPopup
    }
    
    property get impactPeriod () : ImpactTestingPolicyPeriod {
      return getVariableValue("impactPeriod", 0) as ImpactTestingPolicyPeriod
    }
    
    property set impactPeriod ($arg :  ImpactTestingPolicyPeriod) {
      setVariableValue("impactPeriod", 0, $arg)
    }
    
    
  }
  
  
}