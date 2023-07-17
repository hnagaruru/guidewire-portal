package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditPremiumDetailsPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditPremiumDetailsPanelSet_WorkersCompLineExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditPremiumDetailsPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditPremiumDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 20, column 23
    function initialValue_0 () : boolean {
      return auditInfo.IsPremiumReport
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 24, column 23
    function initialValue_1 () : boolean {
      return auditInfo.IsFinalAudit
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 29, column 43
    function initialValue_2 () : java.util.Set<WCCost> {
      return period.WorkersCompLine.Costs.cast( WCCost )
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 34, column 86
    function initialValue_3 () : java.util.Map<typekey.Jurisdiction, java.util.Set<WCCost>> {
      return lineCosts.partition( \ c -> c.JurisdictionState ).mapValues(\i -> i.toSet()).toAutoMap( \ st -> java.util.Collections.emptySet<WCCost>() )
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 39, column 32
    function initialValue_4 () : WCJurisdiction[] {
      return period.WorkersCompLine.RepresentativeJurisdictions
    }
    
    // 'sortBy' attribute on IteratorSort at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 46, column 24
    function sortBy_5 (jurisdiction :  entity.WCJurisdiction) : java.lang.Object {
      return jurisdictions
    }
    
    // 'title' attribute on TitleBar (id=grandTotalTitle) at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 115, column 135
    function title_23 () : java.lang.String {
      return DisplayKey.get("Web.Quote.TotalCostLabel.Total2", lineCosts.AmountSum(period.PreferredSettlementCurrency))
    }
    
    // 'value' attribute on PanelIterator at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 43, column 43
    function value_22 () : entity.WCJurisdiction[] {
      return jurisdictions
    }
    
    property get auditInfo () : AuditInformation {
      return getRequireValue("auditInfo", 0) as AuditInformation
    }
    
    property set auditInfo ($arg :  AuditInformation) {
      setRequireValue("auditInfo", 0, $arg)
    }
    
    property get isEditable () : boolean {
      return getRequireValue("isEditable", 0) as java.lang.Boolean
    }
    
    property set isEditable ($arg :  boolean) {
      setRequireValue("isEditable", 0, $arg)
    }
    
    property get isFinalAudit () : boolean {
      return getVariableValue("isFinalAudit", 0) as java.lang.Boolean
    }
    
    property set isFinalAudit ($arg :  boolean) {
      setVariableValue("isFinalAudit", 0, $arg)
    }
    
    property get isPremiumReport () : boolean {
      return getVariableValue("isPremiumReport", 0) as java.lang.Boolean
    }
    
    property set isPremiumReport ($arg :  boolean) {
      setVariableValue("isPremiumReport", 0, $arg)
    }
    
    property get jurisdictions () : WCJurisdiction[] {
      return getVariableValue("jurisdictions", 0) as WCJurisdiction[]
    }
    
    property set jurisdictions ($arg :  WCJurisdiction[]) {
      setVariableValue("jurisdictions", 0, $arg)
    }
    
    property get lineCosts () : java.util.Set<WCCost> {
      return getVariableValue("lineCosts", 0) as java.util.Set<WCCost>
    }
    
    property set lineCosts ($arg :  java.util.Set<WCCost>) {
      setVariableValue("lineCosts", 0, $arg)
    }
    
    property get partitionCosts () : java.util.Map<typekey.Jurisdiction, java.util.Set<WCCost>> {
      return getVariableValue("partitionCosts", 0) as java.util.Map<typekey.Jurisdiction, java.util.Set<WCCost>>
    }
    
    property set partitionCosts ($arg :  java.util.Map<typekey.Jurisdiction, java.util.Set<WCCost>>) {
      setVariableValue("partitionCosts", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditPremiumDetailsPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 82, column 39
    function def_onEnter_12 (def :  pcf.AuditRateCostDetailLV) : void {
      def.onEnter(isPremiumReport, periodCosts, ratingPeriod)
    }
    
    // 'def' attribute on ListViewInput at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 82, column 39
    function def_refreshVariables_13 (def :  pcf.AuditRateCostDetailLV) : void {
      def.refreshVariables(isPremiumReport, periodCosts, ratingPeriod)
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 72, column 51
    function initialValue_10 () : java.util.Set<WCCost> {
      return stateCosts.byRatingPeriod( ratingPeriod )
    }
    
    // PanelIterator at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 67, column 59
    function initializeVariables_15 () : void {
        periodCosts = stateCosts.byRatingPeriod( ratingPeriod );

    }
    
    // 'label' attribute on Label at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 79, column 145
    function label_11 () : java.lang.String {
      return gw.pcf.job.audit.AuditDetailsUIHelper.standardPremiumLabel(isFinalAudit, ratingPeriods.Count > 1, ratingPeriod)
    }
    
    // 'visible' attribute on PanelRef at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 74, column 47
    function visible_14 () : java.lang.Boolean {
      return not periodCosts.Empty
    }
    
    property get periodCosts () : java.util.Set<WCCost> {
      return getVariableValue("periodCosts", 2) as java.util.Set<WCCost>
    }
    
    property set periodCosts ($arg :  java.util.Set<WCCost>) {
      setVariableValue("periodCosts", 2, $arg)
    }
    
    property get ratingPeriod () : gw.lob.wc.rating.WCRatingPeriod {
      return getIteratedValue(2) as gw.lob.wc.rating.WCRatingPeriod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditPremiumDetailsPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends AuditPremiumDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 51, column 45
    function initialValue_6 () : java.util.Set<WCCost> {
      return partitionCosts.get(jurisdiction.State)
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 56, column 71
    function initialValue_7 () : java.util.List<gw.lob.wc.rating.WCRatingPeriod> {
      return jurisdiction.AuditRatingPeriods
    }
    
    // PanelIterator at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 43, column 43
    function initializeVariables_21 () : void {
        stateCosts = partitionCosts.get(jurisdiction.State);
  ratingPeriods = jurisdiction.AuditRatingPeriods;

    }
    
    // 'title' attribute on TitleBar at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 61, column 49
    function title_9 () : java.lang.String {
      return jurisdiction.DisplayName
    }
    
    // 'value' attribute on PanelIterator at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 67, column 59
    function value_16 () : gw.lob.wc.rating.WCRatingPeriod[] {
      return ratingPeriods.toTypedArray()
    }
    
    // 'visible' attribute on PanelRef at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 58, column 40
    function visible_20 () : java.lang.Boolean {
      return not stateCosts.Empty
    }
    
    // 'visible' attribute on TitleBar at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 61, column 49
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
    
    property get stateCosts () : java.util.Set<WCCost> {
      return getVariableValue("stateCosts", 1) as java.util.Set<WCCost>
    }
    
    property set stateCosts ($arg :  java.util.Set<WCCost>) {
      setVariableValue("stateCosts", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditPremiumDetailsPanelSet.WorkersCompLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StateSummaryDetailDVExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 102, column 37
    function def_onEnter_18 (def :  pcf.AuditRateCostDetailStateLV) : void {
      def.onEnter(isPremiumReport, stateCosts, basedOnStateCosts, jurisdiction)
    }
    
    // 'def' attribute on ListViewInput at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 102, column 37
    function def_refreshVariables_19 (def :  pcf.AuditRateCostDetailStateLV) : void {
      def.refreshVariables(isPremiumReport, stateCosts, basedOnStateCosts, jurisdiction)
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.WorkersCompLine.pcf: line 96, column 53
    function initialValue_17 () : java.util.Set<WCCost> {
      return jurisdiction.WCLine.BasedOn.Costs.cast( WCCost ).where( \ w -> w.JurisdictionState==jurisdiction.State ).toSet()
    }
    
    property get basedOnStateCosts () : java.util.Set<WCCost> {
      return getVariableValue("basedOnStateCosts", 2) as java.util.Set<WCCost>
    }
    
    property set basedOnStateCosts ($arg :  java.util.Set<WCCost>) {
      setVariableValue("basedOnStateCosts", 2, $arg)
    }
    
    
  }
  
  
}