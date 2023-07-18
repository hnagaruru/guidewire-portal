package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/RatingOverridePanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingOverridePanelSet_WorkersCompLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/RatingOverridePanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at RatingOverridePanelSet.WorkersCompLine.pcf: line 68, column 39
    function def_onEnter_10 (def :  pcf.WCRatingOverrideCostLV) : void {
      def.onEnter(period, periodCosts, jurisdiction, ratingPeriod.RatingStart, ratingPeriod.RatingEnd)
    }
    
    // 'def' attribute on ListViewInput at RatingOverridePanelSet.WorkersCompLine.pcf: line 68, column 39
    function def_refreshVariables_11 (def :  pcf.WCRatingOverrideCostLV) : void {
      def.refreshVariables(period, periodCosts, jurisdiction, ratingPeriod.RatingStart, ratingPeriod.RatingEnd)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.WorkersCompLine.pcf: line 58, column 58
    function initialValue_8 () : java.util.Set<entity.WCCost> {
      return stateCosts.byRatingPeriod( ratingPeriod )
    }
    
    // PanelIterator at RatingOverridePanelSet.WorkersCompLine.pcf: line 53, column 59
    function initializeVariables_13 () : void {
        periodCosts = stateCosts.byRatingPeriod( ratingPeriod );

    }
    
    // 'label' attribute on Label at RatingOverridePanelSet.WorkersCompLine.pcf: line 65, column 90
    function label_9 () : java.lang.String {
      return standardPremLabel(ratingPeriods.Count > 1, ratingPeriod)
    }
    
    // 'visible' attribute on PanelRef at RatingOverridePanelSet.WorkersCompLine.pcf: line 60, column 44
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
  
  @javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/RatingOverridePanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingOverridePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at RatingOverridePanelSet.WorkersCompLine.pcf: line 84, column 45
    function def_onEnter_15 (def :  pcf.WCRatingOverrideStateCostLV) : void {
      def.onEnter(stateCosts, jurisdiction)
    }
    
    // 'def' attribute on ListViewInput at RatingOverridePanelSet.WorkersCompLine.pcf: line 84, column 45
    function def_refreshVariables_16 (def :  pcf.WCRatingOverrideStateCostLV) : void {
      def.refreshVariables(stateCosts, jurisdiction)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.WorkersCompLine.pcf: line 37, column 52
    function initialValue_4 () : java.util.Set<entity.WCCost> {
      return partitionCosts.get(jurisdiction.State)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.WorkersCompLine.pcf: line 42, column 71
    function initialValue_5 () : java.util.List<gw.lob.wc.rating.WCRatingPeriod> {
      return jurisdiction.RatingPeriods
    }
    
    // PanelIterator at RatingOverridePanelSet.WorkersCompLine.pcf: line 29, column 43
    function initializeVariables_19 () : void {
        stateCosts = partitionCosts.get(jurisdiction.State);
  ratingPeriods = jurisdiction.RatingPeriods;

    }
    
    // 'mode' attribute on ListViewInput at RatingOverridePanelSet.WorkersCompLine.pcf: line 84, column 45
    function mode_17 () : java.lang.Object {
      return period.Job.Subtype
    }
    
    // 'title' attribute on TitleBar at RatingOverridePanelSet.WorkersCompLine.pcf: line 47, column 49
    function title_7 () : java.lang.String {
      return jurisdiction.DisplayName
    }
    
    // 'value' attribute on PanelIterator at RatingOverridePanelSet.WorkersCompLine.pcf: line 53, column 59
    function value_14 () : gw.lob.wc.rating.WCRatingPeriod[] {
      return ratingPeriods.toTypedArray()
    }
    
    // 'visible' attribute on PanelRef at RatingOverridePanelSet.WorkersCompLine.pcf: line 44, column 40
    function visible_18 () : java.lang.Boolean {
      return not stateCosts.Empty
    }
    
    // 'visible' attribute on TitleBar at RatingOverridePanelSet.WorkersCompLine.pcf: line 47, column 49
    function visible_6 () : java.lang.Boolean {
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
  
  @javax.annotation.Generated("config/web/pcf/line/wc/ratingoverride/RatingOverridePanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingOverridePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.WorkersCompLine.pcf: line 15, column 50
    function initialValue_0 () : java.util.Set<entity.WCCost> {
      return period.WorkersCompLine.Costs.cast( WCCost )
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.WorkersCompLine.pcf: line 20, column 93
    function initialValue_1 () : java.util.Map<typekey.Jurisdiction, java.util.Set<entity.WCCost>> {
      return lineCosts.partition(\ c -> c.JurisdictionState).toAutoMap(\ st -> java.util.Collections.emptySet<WCCost>())
    }
    
    // 'initialValue' attribute on Variable at RatingOverridePanelSet.WorkersCompLine.pcf: line 25, column 39
    function initialValue_2 () : entity.WCJurisdiction[] {
      return period.WorkersCompLine.RepresentativeJurisdictions.sortBy(\ juris -> juris.State)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingOverridePanelSet.WorkersCompLine.pcf: line 32, column 24
    function sortBy_3 (jurisdiction :  entity.WCJurisdiction) : java.lang.Object {
      return jurisdictions
    }
    
    // 'value' attribute on PanelIterator at RatingOverridePanelSet.WorkersCompLine.pcf: line 29, column 43
    function value_20 () : entity.WCJurisdiction[] {
      return jurisdictions
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
    
    function standardPremLabel(splitPeriod : boolean, ratingPeriod : gw.lob.wc.rating.WCRatingPeriod ) : String {
      if (splitPeriod) {
        return DisplayKey.get("Web.Quote.WC.StandardPremium.SplitPeriod",  gw.api.util.StringUtil.formatDate(ratingPeriod.RatingStart, "short"),
          gw.api.util.StringUtil.formatDate(ratingPeriod.RatingEnd, "short") )
      } else {
        return DisplayKey.get("Web.Quote.WC.StandardPremium.OnePeriod")
      }
    }
    
    function sortedDates(jurisdiction : WCJurisdiction) : java.util.Date[] {
      var rpsds = jurisdiction.getSortedRPSDs().toList().map(\ r -> r.StartDate)
      rpsds.add(period.PeriodStart)
      java.util.Collections.sort(rpsds)
      return rpsds.toTypedArray()
    }
    
    
  }
  
  
}