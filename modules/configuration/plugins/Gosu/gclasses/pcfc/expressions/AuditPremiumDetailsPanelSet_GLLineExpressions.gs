package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditPremiumDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditPremiumDetailsPanelSet_GLLineExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditPremiumDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditPremiumDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.GLLine.pcf: line 21, column 48
    function initialValue_0 () : java.util.Set<entity.Cost> {
      return period.GLLine.Costs
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.GLLine.pcf: line 25, column 94
    function initialValue_1 () : java.util.Map<typekey.Jurisdiction, java.util.List<entity.GLCost>> {
      return glCosts.whereTypeIs(GLCost).partition( \ c -> c.State)
    }
    
    // 'value' attribute on PanelIterator at AuditPremiumDetailsPanelSet.GLLine.pcf: line 29, column 42
    function value_80 () : typekey.Jurisdiction[] {
      return costsByState.Keys.toList().sort().toTypedArray()
    }
    
    property get auditInfo () : AuditInformation {
      return getRequireValue("auditInfo", 0) as AuditInformation
    }
    
    property set auditInfo ($arg :  AuditInformation) {
      setRequireValue("auditInfo", 0, $arg)
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
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditPremiumDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExposurePremiumDetailsLVExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.GLLine.pcf: line 49, column 54
    function initialValue_4 () : entity.GLCovExposureCost[] {
      return stateCosts.SortedByLocationNumClassCode
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.GLLine.pcf: line 53, column 35
    function initialValue_5 () : boolean {
      return locCosts.toSet().AnyProrated
    }
    
    // 'sortBy' attribute on IteratorSort at AuditPremiumDetailsPanelSet.GLLine.pcf: line 97, column 36
    function sortBy_8 (cost :  entity.GLCovExposureCost) : java.lang.Object {
      return cost.GLExposure.ClassCode
    }
    
    // 'sortBy' attribute on IteratorSort at AuditPremiumDetailsPanelSet.GLLine.pcf: line 100, column 36
    function sortBy_9 (cost :  entity.GLCovExposureCost) : java.lang.Object {
      return cost.Coverage.Pattern
    }
    
    // '$$sumValue' attribute on RowIterator at AuditPremiumDetailsPanelSet.GLLine.pcf: line 185, column 50
    function sumValueRoot_18 (cost :  entity.GLCovExposureCost) : java.lang.Object {
      return cost.BasedOn
    }
    
    // '$$sumValue' attribute on RowIterator at AuditPremiumDetailsPanelSet.GLLine.pcf: line 193, column 57
    function sumValueRoot_21 (cost :  entity.GLCovExposureCost) : java.lang.Object {
      return cost
    }
    
    // 'footerSumValue' attribute on RowIterator at AuditPremiumDetailsPanelSet.GLLine.pcf: line 185, column 50
    function sumValue_17 (cost :  entity.GLCovExposureCost) : java.lang.Object {
      return cost.BasedOn.ActualAmountBilling
    }
    
    // 'footerSumValue' attribute on RowIterator at AuditPremiumDetailsPanelSet.GLLine.pcf: line 193, column 57
    function sumValue_20 (cost :  entity.GLCovExposureCost) : java.lang.Object {
      return cost.ActualAmountBilling
    }
    
    // 'footerSumValue' attribute on RowIterator at AuditPremiumDetailsPanelSet.GLLine.pcf: line 201, column 92
    function sumValue_22 (cost :  entity.GLCovExposureCost) : java.lang.Object {
      return cost.ActualAmountBilling - cost.BasedOn.ActualAmountBilling
    }
    
    // 'value' attribute on RowIterator at AuditPremiumDetailsPanelSet.GLLine.pcf: line 94, column 58
    function value_70 () : entity.GLCovExposureCost[] {
      return locCosts
    }
    
    // 'visible' attribute on TextCell (id=Proration_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 155, column 50
    function visible_12 () : java.lang.Boolean {
      return true //prorated
    }
    
    // 'visible' attribute on EmptyCell (id=Empty3_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 62, column 89
    function visible_6 () : java.lang.Boolean {
      return false // until we decide how to make the column narrower
    }
    
    property get locCosts () : entity.GLCovExposureCost[] {
      return getVariableValue("locCosts", 2) as entity.GLCovExposureCost[]
    }
    
    property set locCosts ($arg :  entity.GLCovExposureCost[]) {
      setVariableValue("locCosts", 2, $arg)
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 2) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditPremiumDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends OtherPremiumDetailsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at AuditPremiumDetailsPanelSet.GLLine.pcf: line 285, column 42
    function def_onEnter_73 (def :  pcf.GLAuditStateCostRowSet_default) : void {
      def.onEnter(aggCost)
    }
    
    // 'def' attribute on RowSetRef at AuditPremiumDetailsPanelSet.GLLine.pcf: line 285, column 42
    function def_onEnter_75 (def :  pcf.GLAuditStateCostRowSet_total) : void {
      def.onEnter(aggCost)
    }
    
    // 'def' attribute on RowSetRef at AuditPremiumDetailsPanelSet.GLLine.pcf: line 285, column 42
    function def_refreshVariables_74 (def :  pcf.GLAuditStateCostRowSet_default) : void {
      def.refreshVariables(aggCost)
    }
    
    // 'def' attribute on RowSetRef at AuditPremiumDetailsPanelSet.GLLine.pcf: line 285, column 42
    function def_refreshVariables_76 (def :  pcf.GLAuditStateCostRowSet_total) : void {
      def.refreshVariables(aggCost)
    }
    
    // 'mode' attribute on RowSetRef at AuditPremiumDetailsPanelSet.GLLine.pcf: line 285, column 42
    function mode_77 () : java.lang.Object {
      return aggCost.Mode
    }
    
    property get aggCost () : gw.api.ui.AuditCostWrapper {
      return getIteratedValue(3) as gw.api.ui.AuditCostWrapper
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditPremiumDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ExposurePremiumDetailsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=LocIndex_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 108, column 54
    function valueRoot_24 () : java.lang.Object {
      return cost.GLExposure.Location
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 113, column 63
    function valueRoot_27 () : java.lang.Object {
      return cost.GLExposure.ClassCode
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 125, column 91
    function valueRoot_34 () : java.lang.Object {
      return cost.GLExposure.ClassCode.Basis
    }
    
    // 'value' attribute on TypeKeyCell (id=Subline_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 132, column 58
    function valueRoot_38 () : java.lang.Object {
      return cost
    }
    
    // 'value' attribute on DateCell (id=FromDate_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 143, column 62
    function valueRoot_44 () : java.lang.Object {
      return cost.GLExposure
    }
    
    // 'value' attribute on TextCell (id=EstimatedBasis_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 169, column 54
    function valueRoot_56 () : java.lang.Object {
      return cost.GLExposure.BasedOn
    }
    
    // 'value' attribute on MonetaryAmountCell (id=EstimatedPremium_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 185, column 50
    function valueRoot_62 () : java.lang.Object {
      return cost.BasedOn
    }
    
    // 'value' attribute on TextCell (id=LocIndex_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 108, column 54
    function value_23 () : java.lang.Integer {
      return cost.GLExposure.Location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 113, column 63
    function value_26 () : java.lang.String {
      return cost.GLExposure.ClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 119, column 91
    function value_29 () : java.lang.String {
      return cost.GLExposure.ClassCode.Classification
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 125, column 91
    function value_33 () : java.lang.String {
      return cost.GLExposure.ClassCode.Basis.Code
    }
    
    // 'value' attribute on TypeKeyCell (id=Subline_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 132, column 58
    function value_37 () : typekey.GLCostSubline {
      return cost.Subline
    }
    
    // 'value' attribute on TypeKeyCell (id=Split_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 138, column 60
    function value_40 () : typekey.GLCostSplitType {
      return cost.SplitType
    }
    
    // 'value' attribute on DateCell (id=FromDate_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 143, column 62
    function value_43 () : java.util.Date {
      return cost.GLExposure.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ToDate_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 148, column 63
    function value_46 () : java.util.Date {
      return cost.GLExposure.ExpirationDate
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 155, column 50
    function value_49 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(cost.ProRataByDaysValue, "#0.0000")
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 162, column 57
    function value_52 () : java.math.BigDecimal {
      return cost.ActualAdjRate
    }
    
    // 'value' attribute on TextCell (id=EstimatedBasis_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 169, column 54
    function value_55 () : java.lang.Integer {
      return cost.GLExposure.BasedOn.BasisForRating
    }
    
    // 'value' attribute on TextCell (id=AuditedBasis_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 176, column 54
    function value_58 () : java.lang.Integer {
      return cost.GLExposure.AuditedBasis
    }
    
    // 'value' attribute on MonetaryAmountCell (id=EstimatedPremium_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 185, column 50
    function value_61 () : gw.pl.currency.MonetaryAmount {
      return cost.BasedOn.ActualAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=AuditedPremium_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 193, column 57
    function value_65 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Change_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 201, column 92
    function value_68 () : gw.pl.currency.MonetaryAmount {
      return cost.ActualAmountBilling - cost.BasedOn.ActualAmountBilling
    }
    
    // 'visible' attribute on TextCell (id=Description_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 119, column 91
    function visible_31 () : java.lang.Boolean {
      return false // until we decide how to make the column narrower
    }
    
    // 'visible' attribute on TextCell (id=Proration_Cell) at AuditPremiumDetailsPanelSet.GLLine.pcf: line 155, column 50
    function visible_50 () : java.lang.Boolean {
      return true //prorated
    }
    
    property get cost () : entity.GLCovExposureCost {
      return getIteratedValue(3) as entity.GLCovExposureCost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditPremiumDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OtherPremiumDetailsLVExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.GLLine.pcf: line 216, column 56
    function initialValue_71 () : gw.api.ui.AuditCostWrapper[] {
      return stateCosts.toSet().getOtherPremiumAndSurchargesForAudit(period.PreferredSettlementCurrency)
    }
    
    // 'sortBy' attribute on IteratorSort at AuditPremiumDetailsPanelSet.GLLine.pcf: line 282, column 36
    function sortBy_72 (aggCost :  gw.api.ui.AuditCostWrapper) : java.lang.Object {
      return aggCost.Order
    }
    
    // 'value' attribute on RowIterator at AuditPremiumDetailsPanelSet.GLLine.pcf: line 279, column 60
    function value_78 () : gw.api.ui.AuditCostWrapper[] {
      return otherCosts
    }
    
    property get otherCosts () : gw.api.ui.AuditCostWrapper[] {
      return getVariableValue("otherCosts", 2) as gw.api.ui.AuditCostWrapper[]
    }
    
    property set otherCosts ($arg :  gw.api.ui.AuditCostWrapper[]) {
      setVariableValue("otherCosts", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditPremiumDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends AuditPremiumDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AuditPremiumDetailsPanelSet.GLLine.pcf: line 33, column 53
    function initialValue_2 () : java.util.List<entity.GLCost> {
      return costsByState.get(state)
    }
    
    // PanelIterator at AuditPremiumDetailsPanelSet.GLLine.pcf: line 29, column 42
    function initializeVariables_79 () : void {
        stateCosts = costsByState.get(state);

    }
    
    // 'title' attribute on TitleBar at AuditPremiumDetailsPanelSet.GLLine.pcf: line 36, column 38
    function title_3 () : java.lang.String {
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
  
  
}