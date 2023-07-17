package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingPolicyPeriodOverviewPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ImpactTestingPolicyPeriodOverviewPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/impact/ImpactTestingPolicyPeriodOverviewPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ImpactTestingPolicyPeriodOverviewPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (impactPeriod :  ImpactTestingPolicyPeriod, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 18, column 71
    function def_onEnter_0 (def :  pcf.ImpactTestingPolicyPeriodSummaryPanelSet) : void {
      def.onEnter(impactPeriod)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_onEnter_11 (def :  pcf.RatingCumulDetailsPanelSet_GLLine) : void {
      def.onEnter(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_onEnter_13 (def :  pcf.RatingCumulDetailsPanelSet_HOPLine) : void {
      def.onEnter(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_onEnter_15 (def :  pcf.RatingCumulDetailsPanelSet_IMLine) : void {
      def.onEnter(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_onEnter_17 (def :  pcf.RatingCumulDetailsPanelSet_ManualLine) : void {
      def.onEnter(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_onEnter_19 (def :  pcf.RatingCumulDetailsPanelSet_PersonalAutoLine) : void {
      def.onEnter(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_onEnter_21 (def :  pcf.RatingCumulDetailsPanelSet_WorkersCompLine) : void {
      def.onEnter(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_onEnter_23 (def :  pcf.RatingCumulDetailsPanelSet_default) : void {
      def.onEnter(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 20, column 45
    function def_onEnter_3 (def :  pcf.Quote_SummaryDV) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_onEnter_5 (def :  pcf.RatingCumulDetailsPanelSet_BOPLine) : void {
      def.onEnter(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_onEnter_7 (def :  pcf.RatingCumulDetailsPanelSet_BusinessAutoLine) : void {
      def.onEnter(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_onEnter_9 (def :  pcf.RatingCumulDetailsPanelSet_CPLine) : void {
      def.onEnter(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 18, column 71
    function def_refreshVariables_1 (def :  pcf.ImpactTestingPolicyPeriodSummaryPanelSet) : void {
      def.refreshVariables(impactPeriod)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_refreshVariables_10 (def :  pcf.RatingCumulDetailsPanelSet_CPLine) : void {
      def.refreshVariables(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_refreshVariables_12 (def :  pcf.RatingCumulDetailsPanelSet_GLLine) : void {
      def.refreshVariables(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_refreshVariables_14 (def :  pcf.RatingCumulDetailsPanelSet_HOPLine) : void {
      def.refreshVariables(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_refreshVariables_16 (def :  pcf.RatingCumulDetailsPanelSet_IMLine) : void {
      def.refreshVariables(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_refreshVariables_18 (def :  pcf.RatingCumulDetailsPanelSet_ManualLine) : void {
      def.refreshVariables(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_refreshVariables_20 (def :  pcf.RatingCumulDetailsPanelSet_PersonalAutoLine) : void {
      def.refreshVariables(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_refreshVariables_22 (def :  pcf.RatingCumulDetailsPanelSet_WorkersCompLine) : void {
      def.refreshVariables(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_refreshVariables_24 (def :  pcf.RatingCumulDetailsPanelSet_default) : void {
      def.refreshVariables(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 20, column 45
    function def_refreshVariables_4 (def :  pcf.Quote_SummaryDV) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_refreshVariables_6 (def :  pcf.RatingCumulDetailsPanelSet_BOPLine) : void {
      def.refreshVariables(policyPeriod, null, false)
    }
    
    // 'def' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function def_refreshVariables_8 (def :  pcf.RatingCumulDetailsPanelSet_BusinessAutoLine) : void {
      def.refreshVariables(policyPeriod, null, false)
    }
    
    // 'mode' attribute on PanelRef at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 27, column 81
    function mode_25 () : java.lang.Object {
      return policyPeriod.RepresentativePolicyLines.first().Pattern.PublicID
    }
    
    // 'title' attribute on TitleBar at ImpactTestingPolicyPeriodOverviewPopup.pcf: line 22, column 238
    function title_2 () : java.lang.String {
      return policyPeriod == impactPeriod.BaselinePeriod ? DisplayKey.get("Web.Rating.ImpactTesting.PeriodSummary.BaselineOverview") : DisplayKey.get("Web.Rating.ImpactTesting.PeriodSummary.TestPeriodOverview")
    }
    
    override property get CurrentLocation () : pcf.ImpactTestingPolicyPeriodOverviewPopup {
      return super.CurrentLocation as pcf.ImpactTestingPolicyPeriodOverviewPopup
    }
    
    property get impactPeriod () : ImpactTestingPolicyPeriod {
      return getVariableValue("impactPeriod", 0) as ImpactTestingPolicyPeriod
    }
    
    property set impactPeriod ($arg :  ImpactTestingPolicyPeriod) {
      setVariableValue("impactPeriod", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}