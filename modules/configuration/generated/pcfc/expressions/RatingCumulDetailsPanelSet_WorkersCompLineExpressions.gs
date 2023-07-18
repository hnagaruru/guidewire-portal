package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/RatingCumulDetailsPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingCumulDetailsPanelSet_WorkersCompLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/RatingCumulDetailsPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 70, column 103
    function def_onEnter_13 (def :  pcf.StateCostsLV) : void {
      def.onEnter(periodCosts.getStandardPremiums(period.PreferredSettlementCurrency))
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 70, column 103
    function def_refreshVariables_14 (def :  pcf.StateCostsLV) : void {
      def.refreshVariables(periodCosts.getStandardPremiums(period.PreferredSettlementCurrency))
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 67, column 58
    function initialValue_10 () : java.util.Set<entity.WCCost> {
      return stateCosts.byRatingPeriod(ratingPeriod)
    }
    
    // PanelIterator at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 62, column 59
    function initializeVariables_15 () : void {
        periodCosts = stateCosts.byRatingPeriod(ratingPeriod);

    }
    
    // 'label' attribute on Verbatim at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 72, column 86
    function label_11 () : java.lang.String {
      return standardPremLabel(ratingPeriods.Count > 1, ratingPeriod)
    }
    
    // 'visible' attribute on PanelRef at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 70, column 103
    function visible_12 () : java.lang.Boolean {
      return !periodCosts.Empty
    }
    
    property get periodCosts () : java.util.Set<entity.WCCost> {
      return getVariableValue("periodCosts", 2) as java.util.Set<entity.WCCost>
    }
    
    property set periodCosts ($arg :  java.util.Set<entity.WCCost>) {
      setVariableValue("periodCosts", 2, $arg)
    }
    
    property get ratingPeriod () : gw.lob.wc.rating.WCRatingPeriod {
      return getIteratedValue(2) as gw.lob.wc.rating.WCRatingPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/RatingCumulDetailsPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 76, column 117
    function def_onEnter_17 (def :  pcf.StateCostsLV) : void {
      def.onEnter(stateCosts.toSet().getOtherPremiumAndSurcharges(period.PreferredSettlementCurrency))
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 76, column 117
    function def_refreshVariables_18 (def :  pcf.StateCostsLV) : void {
      def.refreshVariables(stateCosts.toSet().getOtherPremiumAndSurcharges(period.PreferredSettlementCurrency))
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 46, column 52
    function initialValue_6 () : java.util.Set<entity.WCCost> {
      return partitionCosts.get(jurisdiction.State)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 51, column 71
    function initialValue_7 () : java.util.List<gw.lob.wc.rating.WCRatingPeriod> {
      return jurisdiction.RatingPeriods
    }
    
    // PanelIterator at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 38, column 43
    function initializeVariables_20 () : void {
        stateCosts = partitionCosts.get(jurisdiction.State);
  ratingPeriods = jurisdiction.RatingPeriods;

    }
    
    // 'title' attribute on TitleBar at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 56, column 49
    function title_9 () : java.lang.String {
      return jurisdiction.DisplayName
    }
    
    // 'value' attribute on PanelIterator at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 62, column 59
    function value_16 () : gw.lob.wc.rating.WCRatingPeriod[] {
      return ratingPeriods.toTypedArray()
    }
    
    // 'visible' attribute on PanelRef at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 53, column 42
    function visible_19 () : java.lang.Boolean {
      return stateCosts.HasElements
    }
    
    // 'visible' attribute on TitleBar at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 56, column 49
    function visible_8 () : java.lang.Boolean {
      return jurisdictions.Count > 1
    }
    
    property get jurisdiction () : entity.WCJurisdiction {
      return getIteratedValue(1) as entity.WCJurisdiction
    }
    
    property get ratingPeriods () : java.util.List<gw.lob.wc.rating.WCRatingPeriod> {
      return getVariableValue("ratingPeriods", 1) as java.util.List<gw.lob.wc.rating.WCRatingPeriod>
    }
    
    property set ratingPeriods ($arg :  java.util.List<gw.lob.wc.rating.WCRatingPeriod>) {
      setVariableValue("ratingPeriods", 1, $arg)
    }
    
    property get stateCosts () : java.util.Set<entity.WCCost> {
      return getVariableValue("stateCosts", 1) as java.util.Set<entity.WCCost>
    }
    
    property set stateCosts ($arg :  java.util.Set<entity.WCCost>) {
      setVariableValue("stateCosts", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/RatingCumulDetailsPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 34, column 36
    function def_onEnter_3 (def :  pcf.RatingOverrideButtonDV) : void {
      def.onEnter(period, period.WorkersCompLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 34, column 36
    function def_refreshVariables_4 (def :  pcf.RatingOverrideButtonDV) : void {
      def.refreshVariables(period, period.WorkersCompLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 21, column 50
    function initialValue_0 () : java.util.Set<entity.WCCost> {
      return period.WorkersCompLine.Costs.cast(WCCost)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 26, column 93
    function initialValue_1 () : java.util.Map<typekey.Jurisdiction, java.util.Set<entity.WCCost>> {
      return lineCosts.partition(\ c -> c.JurisdictionState).toAutoMap(\ st -> java.util.Collections.emptySet<WCCost>())
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 31, column 39
    function initialValue_2 () : entity.WCJurisdiction[] {
      return period.WorkersCompLine.RepresentativeJurisdictions.sortBy(\ juris -> juris.State)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 41, column 24
    function sortBy_5 (jurisdiction :  entity.WCJurisdiction) : java.lang.Object {
      return jurisdictions
    }
    
    // 'title' attribute on TitleBar (id=grandTotalTitle) at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 87, column 178
    function title_22 () : java.lang.String {
      return DisplayKey.get("Web.Quote.TotalCostLabel.Total2", gw.api.util.CurrencyUtil.renderAsCurrency(lineCosts.AmountSum(period.PreferredSettlementCurrency)))
    }
    
    // 'value' attribute on PanelIterator at RatingCumulDetailsPanelSet.WorkersCompLine.pcf: line 38, column 43
    function value_21 () : entity.WCJurisdiction[] {
      return jurisdictions
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
    
    property get jurisdictions () : entity.WCJurisdiction[] {
      return getVariableValue("jurisdictions", 0) as entity.WCJurisdiction[]
    }
    
    property set jurisdictions ($arg :  entity.WCJurisdiction[]) {
      setVariableValue("jurisdictions", 0, $arg)
    }
    
    property get lineCosts () : java.util.Set<entity.WCCost> {
      return getVariableValue("lineCosts", 0) as java.util.Set<entity.WCCost>
    }
    
    property set lineCosts ($arg :  java.util.Set<entity.WCCost>) {
      setVariableValue("lineCosts", 0, $arg)
    }
    
    property get partitionCosts () : java.util.Map<typekey.Jurisdiction, java.util.Set<entity.WCCost>> {
      return getVariableValue("partitionCosts", 0) as java.util.Map<typekey.Jurisdiction, java.util.Set<entity.WCCost>>
    }
    
    property set partitionCosts ($arg :  java.util.Map<typekey.Jurisdiction, java.util.Set<entity.WCCost>>) {
      setVariableValue("partitionCosts", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    function standardPremLabel(splitPeriod : boolean, ratingPeriod : gw.lob.wc.rating.WCRatingPeriod) : String {
          if (splitPeriod) {
            return DisplayKey.get("Web.Quote.WC.StandardPremium.SplitPeriod", gw.api.util.StringUtil.formatDate(ratingPeriod.RatingStart, "short"),
              gw.api.util.StringUtil.formatDate(ratingPeriod.RatingEnd, "short"))
          } else {
            return DisplayKey.get("Web.Quote.WC.StandardPremium.OnePeriod")
          }
        }
    
        function sortedDates(jurisdiction : WCJurisdiction) : java.util.Date[] {
          var rpsds = jurisdiction.getSortedRPSDs().toList().map(\r -> r.StartDate)
          rpsds.add(period.PeriodStart)
          java.util.Collections.sort(rpsds)
          return rpsds.toTypedArray()
        }
    
    
  }
  
  
}