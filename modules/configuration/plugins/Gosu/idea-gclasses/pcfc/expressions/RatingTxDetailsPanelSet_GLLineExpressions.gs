package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/gl/policy/RatingTxDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingTxDetailsPanelSet_GLLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/RatingTxDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 165, column 46
    function valueRoot_46 () : java.lang.Object {
      return transaction
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 171, column 33
    function valueRoot_49 () : java.lang.Object {
      return transaction.GLCost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 165, column 46
    function value_45 () : entity.GLCost {
      return transaction.GLCost
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 171, column 33
    function value_48 () : typekey.Jurisdiction {
      return transaction.GLCost.State
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 179, column 33
    function value_51 () : gw.pl.currency.MonetaryAmount {
      return transaction.AmountBilling
    }
    
    property get transaction () : entity.GLTransaction {
      return getIteratedValue(1) as entity.GLTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/RatingTxDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateTxGLLineLevelCoverageLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 89, column 53
    function valueRoot_18 () : java.lang.Object {
      return tx.GLCost
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 118, column 45
    function valueRoot_31 () : java.lang.Object {
      return tx
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 83, column 108
    function value_15 () : java.lang.String {
      return DisplayKey.get("Web.PolicyLine.Coverage", tx.GLCost.Coverage.Pattern)
    }
    
    // 'value' attribute on TextCell (id=Basis_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 89, column 53
    function value_17 () : java.math.BigDecimal {
      return tx.GLCost.Basis
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 95, column 53
    function value_20 () : java.math.BigDecimal {
      return tx.GLCost.ActualAdjRate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 103, column 39
    function value_23 () : gw.pl.currency.MonetaryAmount {
      return tx.GLCost.ActualTermAmountBilling
    }
    
    // 'value' attribute on TextCell (id=Proration_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 110, column 39
    function value_27 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(tx.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 118, column 45
    function value_30 () : gw.pl.currency.MonetaryAmount {
      return tx.AmountBilling
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 103, column 39
    function visible_25 () : java.lang.Boolean {
      return prorated
    }
    
    property get tx () : entity.GLTransaction {
      return getIteratedValue(2) as entity.GLTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/RatingTxDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.GLLine.pcf: line 137, column 79
    function def_onEnter_37 (def :  pcf.GLExpCovTxDetailLV) : void {
      def.onEnter(locLevelCovTxMap.get(theLocation))
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.GLLine.pcf: line 137, column 79
    function def_refreshVariables_38 (def :  pcf.GLExpCovTxDetailLV) : void {
      def.refreshVariables(locLevelCovTxMap.get(theLocation))
    }
    
    // 'subtitle' attribute on TitleBar at RatingTxDetailsPanelSet.GLLine.pcf: line 134, column 53
    function subtitle_35 () : java.lang.String {
      return theLocation.CompactName
    }
    
    // 'title' attribute on TitleBar at RatingTxDetailsPanelSet.GLLine.pcf: line 134, column 53
    function title_36 () : java.lang.String {
      return theLocation.State.DisplayName
    }
    
    property get theLocation () : entity.PolicyLocation {
      return getIteratedValue(1) as entity.PolicyLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/RatingTxDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTxGLLineLevelCoverageLVExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.GLLine.pcf: line 63, column 31
    function initialValue_6 () : boolean {
      return lineLevelCovTxs.AnyProrated
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.GLLine.pcf: line 73, column 32
    function sortBy_7 (tx :  entity.GLTransaction) : java.lang.Object {
      return tx.GLCost.Coverage.CoverageCategory.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.GLLine.pcf: line 76, column 32
    function sortBy_8 (tx :  entity.GLTransaction) : java.lang.Object {
      return tx.GLCost.Coverage.Pattern.Priority
    }
    
    // '$$sumValue' attribute on RowIterator at RatingTxDetailsPanelSet.GLLine.pcf: line 118, column 45
    function sumValueRoot_14 (tx :  entity.GLTransaction) : java.lang.Object {
      return tx
    }
    
    // 'footerSumValue' attribute on RowIterator at RatingTxDetailsPanelSet.GLLine.pcf: line 118, column 45
    function sumValue_13 (tx :  entity.GLTransaction) : java.lang.Object {
      return tx.AmountBilling
    }
    
    // 'value' attribute on RowIterator at RatingTxDetailsPanelSet.GLLine.pcf: line 70, column 50
    function value_33 () : entity.GLTransaction[] {
      return lineLevelCovTxs.toTypedArray()
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 103, column 39
    function visible_9 () : java.lang.Boolean {
      return prorated
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 1) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/RatingTxDetailsPanelSet.GLLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingTxDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.GLLine.pcf: line 27, column 57
    function initialValue_0 () : java.util.Set<entity.GLTransaction> {
      return thePeriod.GLTransactions.toSet()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.GLLine.pcf: line 33, column 57
    function initialValue_1 () : java.util.Set<entity.GLTransaction> {
      return glTxs.findByCostType(GLLineCovCost)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.GLLine.pcf: line 38, column 101
    function initialValue_2 () : java.util.Map<entity.PolicyLocation, java.util.Set<entity.GLTransaction>> {
      return glTxs.findByCostType(GLCovExposureCost).byFixedLocation()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.GLLine.pcf: line 43, column 58
    function initialValue_3 () : java.util.List<entity.GLTransaction> {
      return glTxs.where(\t -> t.GLCost.Location == null)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 165, column 46
    function sortValue_40 (transaction :  entity.GLTransaction) : java.lang.Object {
      return transaction.GLCost
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 171, column 33
    function sortValue_41 (transaction :  entity.GLTransaction) : java.lang.Object {
      return transaction.GLCost.State
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingTxDetailsPanelSet.GLLine.pcf: line 179, column 33
    function sortValue_42 (transaction :  entity.GLTransaction) : java.lang.Object {
      return transaction.AmountBilling
    }
    
    // '$$sumValue' attribute on RowIterator (id=OtherTxIterator) at RatingTxDetailsPanelSet.GLLine.pcf: line 179, column 33
    function sumValueRoot_44 (transaction :  entity.GLTransaction) : java.lang.Object {
      return transaction
    }
    
    // 'footerSumValue' attribute on RowIterator (id=OtherTxIterator) at RatingTxDetailsPanelSet.GLLine.pcf: line 179, column 33
    function sumValue_43 (transaction :  entity.GLTransaction) : java.lang.Object {
      return transaction.AmountBilling
    }
    
    // 'title' attribute on TitleBar (id=txPanelTitle) at RatingTxDetailsPanelSet.GLLine.pcf: line 50, column 40
    function title_5 () : java.lang.String {
      return gw.api.productmodel.PolicyLinePatternLookup.getByPublicID("GLLine").DisplayName
    }
    
    // 'value' attribute on PanelIterator at RatingTxDetailsPanelSet.GLLine.pcf: line 129, column 49
    function value_39 () : entity.PolicyLocation[] {
      return locLevelCovTxMap.Keys.toTypedArray()
    }
    
    // 'value' attribute on RowIterator (id=OtherTxIterator) at RatingTxDetailsPanelSet.GLLine.pcf: line 158, column 70
    function value_54 () : java.util.List<entity.GLTransaction> {
      return otherCovTxs
    }
    
    // 'visible' attribute on PanelRef at RatingTxDetailsPanelSet.GLLine.pcf: line 54, column 49
    function visible_34 () : java.lang.Boolean {
      return lineLevelCovTxs.HasElements
    }
    
    // 'visible' attribute on TitleBar (id=txPanelTitle) at RatingTxDetailsPanelSet.GLLine.pcf: line 50, column 40
    function visible_4 () : java.lang.Boolean {
      return thePeriod.MultiLine
    }
    
    // 'visible' attribute on PanelRef at RatingTxDetailsPanelSet.GLLine.pcf: line 145, column 45
    function visible_55 () : java.lang.Boolean {
      return otherCovTxs.HasElements
    }
    
    // 'visible' attribute on PanelRef (id=txPanel) at RatingTxDetailsPanelSet.GLLine.pcf: line 46, column 54
    function visible_56 () : java.lang.Boolean {
      return thePeriod.GLTransactions.HasElements
    }
    
    property get glTxs () : java.util.Set<entity.GLTransaction> {
      return getVariableValue("glTxs", 0) as java.util.Set<entity.GLTransaction>
    }
    
    property set glTxs ($arg :  java.util.Set<entity.GLTransaction>) {
      setVariableValue("glTxs", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get lineLevelCovTxs () : java.util.Set<entity.GLTransaction> {
      return getVariableValue("lineLevelCovTxs", 0) as java.util.Set<entity.GLTransaction>
    }
    
    property set lineLevelCovTxs ($arg :  java.util.Set<entity.GLTransaction>) {
      setVariableValue("lineLevelCovTxs", 0, $arg)
    }
    
    property get locLevelCovTxMap () : java.util.Map<entity.PolicyLocation, java.util.Set<entity.GLTransaction>> {
      return getVariableValue("locLevelCovTxMap", 0) as java.util.Map<entity.PolicyLocation, java.util.Set<entity.GLTransaction>>
    }
    
    property set locLevelCovTxMap ($arg :  java.util.Map<entity.PolicyLocation, java.util.Set<entity.GLTransaction>>) {
      setVariableValue("locLevelCovTxMap", 0, $arg)
    }
    
    property get otherCovTxs () : java.util.List<entity.GLTransaction> {
      return getVariableValue("otherCovTxs", 0) as java.util.List<entity.GLTransaction>
    }
    
    property set otherCovTxs ($arg :  java.util.List<entity.GLTransaction>) {
      setVariableValue("otherCovTxs", 0, $arg)
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