package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl/policy/RatingCumulDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingCumulDetailsPanelSet_GLLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/RatingCumulDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.GLLine.pcf: line 62, column 92
    function def_onEnter_11 (def :  pcf.GLExpCovCumulDetailLV) : void {
      def.onEnter(stateCosts.whereTypeIs(GLCovExposureCost).toSet())
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.GLLine.pcf: line 67, column 117
    function def_onEnter_13 (def :  pcf.StateCostsLV) : void {
      def.onEnter(stateCosts.toSet().getOtherPremiumAndSurcharges(period.PreferredSettlementCurrency))
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.GLLine.pcf: line 62, column 92
    function def_refreshVariables_12 (def :  pcf.GLExpCovCumulDetailLV) : void {
      def.refreshVariables(stateCosts.whereTypeIs(GLCovExposureCost).toSet())
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.GLLine.pcf: line 67, column 117
    function def_refreshVariables_14 (def :  pcf.StateCostsLV) : void {
      def.refreshVariables(stateCosts.toSet().getOtherPremiumAndSurcharges(period.PreferredSettlementCurrency))
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.GLLine.pcf: line 55, column 53
    function initialValue_9 () : java.util.List<entity.GLCost> {
      return costsByState.get(state)
    }
    
    // PanelIterator at RatingCumulDetailsPanelSet.GLLine.pcf: line 51, column 42
    function initializeVariables_15 () : void {
        stateCosts = costsByState.get(state);

    }
    
    // 'title' attribute on TitleBar at RatingCumulDetailsPanelSet.GLLine.pcf: line 59, column 38
    function title_10 () : java.lang.String {
      return state.DisplayName
    }
    
    property get state () : typekey.Jurisdiction {
      return getIteratedValue(1) as typekey.Jurisdiction
    }
    
    property get stateCosts () : java.util.List<entity.GLCost> {
      return getVariableValue("stateCosts", 1) as java.util.List<entity.GLCost>
    }
    
    property set stateCosts ($arg :  java.util.List<entity.GLCost>) {
      setVariableValue("stateCosts", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/RatingCumulDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.GLLine.pcf: line 39, column 36
    function def_onEnter_4 (def :  pcf.RatingOverrideButtonDV) : void {
      def.onEnter(period, period.GLLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.GLLine.pcf: line 43, column 48
    function def_onEnter_7 (def :  pcf.RateCumulGLLineLevelCoverageLV) : void {
      def.onEnter(lineLevelCovCosts)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.GLLine.pcf: line 39, column 36
    function def_refreshVariables_5 (def :  pcf.RatingOverrideButtonDV) : void {
      def.refreshVariables(period, period.GLLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.GLLine.pcf: line 43, column 48
    function def_refreshVariables_8 (def :  pcf.RateCumulGLLineLevelCoverageLV) : void {
      def.refreshVariables(lineLevelCovCosts)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.GLLine.pcf: line 21, column 48
    function initialValue_0 () : java.util.Set<entity.Cost> {
      return period.GLLine.Costs
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.GLLine.pcf: line 27, column 57
    function initialValue_1 () : java.util.Set<entity.GLLineCovCost> {
      return glCosts.whereTypeIs(GLLineCovCost).toSet()
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.GLLine.pcf: line 32, column 105
    function initialValue_2 () : java.util.Map<entity.PolicyLocation, java.util.Set<entity.GLCovExposureCost>> {
      return glCosts.whereTypeIs(GLCovExposureCost).toSet().byFixedLocation()
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.GLLine.pcf: line 36, column 94
    function initialValue_3 () : java.util.Map<typekey.Jurisdiction, java.util.List<entity.GLCost>> {
      return glCosts.whereTypeIs(GLCost).partition(\ c -> c.State)
    }
    
    // 'value' attribute on PanelIterator at RatingCumulDetailsPanelSet.GLLine.pcf: line 51, column 42
    function value_16 () : typekey.Jurisdiction[] {
      return costsByState.Keys.toList().sort().toTypedArray()
    }
    
    // 'visible' attribute on PanelRef at RatingCumulDetailsPanelSet.GLLine.pcf: line 43, column 48
    function visible_6 () : java.lang.Boolean {
      return lineLevelCovCosts.Count > 0
    }
    
    property get costsByState () : java.util.Map<typekey.Jurisdiction, java.util.List<entity.GLCost>> {
      return getVariableValue("costsByState", 0) as java.util.Map<typekey.Jurisdiction, java.util.List<entity.GLCost>>
    }
    
    property set costsByState ($arg :  java.util.Map<typekey.Jurisdiction, java.util.List<entity.GLCost>>) {
      setVariableValue("costsByState", 0, $arg)
    }
    
    property get glCosts () : java.util.Set<entity.Cost> {
      return getVariableValue("glCosts", 0) as java.util.Set<entity.Cost>
    }
    
    property set glCosts ($arg :  java.util.Set<entity.Cost>) {
      setVariableValue("glCosts", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get lineLevelCovCosts () : java.util.Set<entity.GLLineCovCost> {
      return getVariableValue("lineLevelCovCosts", 0) as java.util.Set<entity.GLLineCovCost>
    }
    
    property set lineLevelCovCosts ($arg :  java.util.Set<entity.GLLineCovCost>) {
      setVariableValue("lineLevelCovCosts", 0, $arg)
    }
    
    property get locLevelCovCostMap () : java.util.Map<entity.PolicyLocation, java.util.Set<entity.GLCovExposureCost>> {
      return getVariableValue("locLevelCovCostMap", 0) as java.util.Map<entity.PolicyLocation, java.util.Set<entity.GLCovExposureCost>>
    }
    
    property set locLevelCovCostMap ($arg :  java.util.Map<entity.PolicyLocation, java.util.Set<entity.GLCovExposureCost>>) {
      setVariableValue("locLevelCovCostMap", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  
}