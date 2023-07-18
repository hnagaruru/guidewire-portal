package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/RatingTxDetailsPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingTxDetailsPanelSet_WorkersCompLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/RatingTxDetailsPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 77, column 49
    function def_onEnter_12 (def :  pcf.WCRateTxDetailLV) : void {
      def.onEnter(periodTxs)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 77, column 49
    function def_refreshVariables_13 (def :  pcf.WCRateTxDetailLV) : void {
      def.refreshVariables(periodTxs)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 74, column 65
    function initialValue_9 () : java.util.Set<entity.WCTransaction> {
      return stateTxs.byRatingPeriod( ratingPeriod )
    }
    
    // PanelIterator at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 69, column 59
    function initializeVariables_14 () : void {
        periodTxs = stateTxs.byRatingPeriod( ratingPeriod );

    }
    
    // 'label' attribute on Verbatim at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 79, column 93
    function label_10 () : java.lang.String {
      return helper.standardPremLabel(ratingPeriods.Count > 1, ratingPeriod)
    }
    
    // 'visible' attribute on PanelRef at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 77, column 49
    function visible_11 () : java.lang.Boolean {
      return not periodTxs.Empty
    }
    
    property get periodTxs () : java.util.Set<entity.WCTransaction> {
      return getVariableValue("periodTxs", 2) as java.util.Set<entity.WCTransaction>
    }
    
    property set periodTxs ($arg :  java.util.Set<entity.WCTransaction>) {
      setVariableValue("periodTxs", 2, $arg)
    }
    
    property get ratingPeriod () : gw.lob.wc.rating.WCRatingPeriod {
      return getIteratedValue(2) as gw.lob.wc.rating.WCRatingPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/RatingTxDetailsPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 83, column 65
    function def_onEnter_16 (def :  pcf.WCRateTxDetailStateLV) : void {
      def.onEnter(stateTxs, jurisdiction)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 83, column 65
    function def_refreshVariables_17 (def :  pcf.WCRateTxDetailStateLV) : void {
      def.refreshVariables(stateTxs, jurisdiction)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 53, column 59
    function initialValue_5 () : java.util.Set<entity.WCTransaction> {
      return partitionedTxs.get( jurisdiction.State )
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 58, column 71
    function initialValue_6 () : java.util.List<gw.lob.wc.rating.WCRatingPeriod> {
      return jurisdiction.RatingPeriods
    }
    
    // PanelIterator at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 45, column 43
    function initializeVariables_19 () : void {
        stateTxs = partitionedTxs.get( jurisdiction.State );
  ratingPeriods = jurisdiction.RatingPeriods;

    }
    
    // 'title' attribute on TitleBar at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 63, column 49
    function title_8 () : java.lang.String {
      return jurisdiction.DisplayName
    }
    
    // 'value' attribute on PanelIterator at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 69, column 59
    function value_15 () : gw.lob.wc.rating.WCRatingPeriod[] {
      return ratingPeriods.toTypedArray()
    }
    
    // 'visible' attribute on PanelRef at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 60, column 38
    function visible_18 () : java.lang.Boolean {
      return not stateTxs.Empty
    }
    
    // 'visible' attribute on TitleBar at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 63, column 49
    function visible_7 () : java.lang.Boolean {
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
    
    property get stateTxs () : java.util.Set<entity.WCTransaction> {
      return getVariableValue("stateTxs", 1) as java.util.Set<entity.WCTransaction>
    }
    
    property set stateTxs ($arg :  java.util.Set<entity.WCTransaction>) {
      setVariableValue("stateTxs", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/RatingTxDetailsPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingTxDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 27, column 57
    function initialValue_0 () : java.util.Set<entity.WCTransaction> {
      return thePeriod.WorkersCompLine.WCTransactions.toSet()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 32, column 100
    function initialValue_1 () : java.util.Map<typekey.Jurisdiction, java.util.Set<entity.WCTransaction>> {
      return lineTxs.partition( \ t -> t.WCCost.JurisdictionState ).toAutoMap( \ st -> java.util.Collections.emptySet<WCTransaction>() )
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 36, column 66
    function initialValue_2 () : gw.pcf.line.common.RatingTxDetailsPanelSetUIHelper {
      return new gw.pcf.line.common.RatingTxDetailsPanelSetUIHelper()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 41, column 39
    function initialValue_3 () : entity.WCJurisdiction[] {
      return helper.getJurisdictions(thePeriod)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 48, column 24
    function sortBy_4 (jurisdiction :  entity.WCJurisdiction) : java.lang.Object {
      return jurisdiction
    }
    
    // 'title' attribute on TitleBar (id=grandTotalTitle) at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 94, column 222
    function title_21 () : java.lang.String {
      return DisplayKey.get("Web.Quote.TotalCostLabel.Total2", gw.api.util.StringUtil.formatNumber(lineTxs.AmountSum(thePeriod.PreferredSettlementCurrency).Amount as java.lang.Double, "currency"))
    }
    
    // 'value' attribute on PanelIterator at RatingTxDetailsPanelSet.WorkersCompLine.pcf: line 45, column 43
    function value_20 () : entity.WCJurisdiction[] {
      return jurisdictions
    }
    
    property get helper () : gw.pcf.line.common.RatingTxDetailsPanelSetUIHelper {
      return getVariableValue("helper", 0) as gw.pcf.line.common.RatingTxDetailsPanelSetUIHelper
    }
    
    property set helper ($arg :  gw.pcf.line.common.RatingTxDetailsPanelSetUIHelper) {
      setVariableValue("helper", 0, $arg)
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
    
    property get lineTxs () : java.util.Set<entity.WCTransaction> {
      return getVariableValue("lineTxs", 0) as java.util.Set<entity.WCTransaction>
    }
    
    property set lineTxs ($arg :  java.util.Set<entity.WCTransaction>) {
      setVariableValue("lineTxs", 0, $arg)
    }
    
    property get partitionedTxs () : java.util.Map<typekey.Jurisdiction, java.util.Set<entity.WCTransaction>> {
      return getVariableValue("partitionedTxs", 0) as java.util.Map<typekey.Jurisdiction, java.util.Set<entity.WCTransaction>>
    }
    
    property set partitionedTxs ($arg :  java.util.Map<typekey.Jurisdiction, java.util.Set<entity.WCTransaction>>) {
      setVariableValue("partitionedTxs", 0, $arg)
    }
    
    property get revOpenForEdit () : boolean {
      return getRequireValue("revOpenForEdit", 0) as java.lang.Boolean
    }
    
    property set revOpenForEdit ($arg :  boolean) {
      setRequireValue("revOpenForEdit", 0, $arg)
    }
    
    property get thePeriod () : PolicyPeriod {
      return getRequireValue("thePeriod", 0) as PolicyPeriod
    }
    
    property set thePeriod ($arg :  PolicyPeriod) {
      setRequireValue("thePeriod", 0, $arg)
    }
    
    property get totalCostLabel () : String {
      return getRequireValue("totalCostLabel", 0) as String
    }
    
    property set totalCostLabel ($arg :  String) {
      setRequireValue("totalCostLabel", 0, $arg)
    }
    
    property get totalPremLabel () : String {
      return getRequireValue("totalPremLabel", 0) as String
    }
    
    property set totalPremLabel ($arg :  String) {
      setRequireValue("totalPremLabel", 0, $arg)
    }
    
    
  }
  
  
}