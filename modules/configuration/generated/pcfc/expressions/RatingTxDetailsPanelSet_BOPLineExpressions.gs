package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/bop/policy/RatingTxDetailsPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingTxDetailsPanelSet_BOPLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/RatingTxDetailsPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at RatingTxDetailsPanelSet.BOPLine.pcf: line 126, column 49
    function valueRoot_27 () : java.lang.Object {
      return otherTransaction.BOPCost
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingTxDetailsPanelSet.BOPLine.pcf: line 134, column 29
    function valueRoot_30 () : java.lang.Object {
      return otherTransaction
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.BOPLine.pcf: line 120, column 50
    function value_24 () : entity.BOPTransaction {
      return otherTransaction
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at RatingTxDetailsPanelSet.BOPLine.pcf: line 126, column 49
    function value_26 () : typekey.Jurisdiction {
      return otherTransaction.BOPCost.State
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingTxDetailsPanelSet.BOPLine.pcf: line 134, column 29
    function value_29 () : gw.pl.currency.MonetaryAmount {
      return otherTransaction.AmountBilling
    }
    
    property get otherTransaction () : entity.BOPTransaction {
      return getIteratedValue(2) as entity.BOPTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/RatingTxDetailsPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.BOPLine.pcf: line 91, column 62
    function initialValue_17 () : java.util.Set<entity.BOPTransaction> {
      return coverageOrOtherTransactionMap.get( false )
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.BOPLine.pcf: line 102, column 28
    function sortBy_18 (otherTransaction :  entity.BOPTransaction) : java.lang.Object {
      return (typeof otherTransaction.BOPCost).AllTypesInHierarchy.Count
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.BOPLine.pcf: line 105, column 28
    function sortBy_19 (otherTransaction :  entity.BOPTransaction) : java.lang.Object {
      return typeof otherTransaction.BOPCost
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.BOPLine.pcf: line 108, column 28
    function sortBy_20 (otherTransaction :  entity.BOPTransaction) : java.lang.Object {
      return otherTransaction.BOPCost.EffDate
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.BOPLine.pcf: line 111, column 28
    function sortBy_21 (otherTransaction :  entity.BOPTransaction) : java.lang.Object {
      return otherTransaction.ID
    }
    
    // '$$sumValue' attribute on RowIterator at RatingTxDetailsPanelSet.BOPLine.pcf: line 134, column 29
    function sumValueRoot_23 (otherTransaction :  entity.BOPTransaction) : java.lang.Object {
      return otherTransaction
    }
    
    // 'footerSumValue' attribute on RowIterator at RatingTxDetailsPanelSet.BOPLine.pcf: line 134, column 29
    function sumValue_22 (otherTransaction :  entity.BOPTransaction) : java.lang.Object {
      return otherTransaction.AmountBilling
    }
    
    // 'value' attribute on RowIterator at RatingTxDetailsPanelSet.BOPLine.pcf: line 98, column 47
    function value_32 () : entity.BOPTransaction[] {
      return otherTransactions.toTypedArray()
    }
    
    property get otherTransactions () : java.util.Set<entity.BOPTransaction> {
      return getVariableValue("otherTransactions", 1) as java.util.Set<entity.BOPTransaction>
    }
    
    property set otherTransactions ($arg :  java.util.Set<entity.BOPTransaction>) {
      setVariableValue("otherTransactions", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/RatingTxDetailsPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TitleBar (id=BuildingLink) at RatingTxDetailsPanelSet.BOPLine.pcf: line 72, column 47
    function action_9 () : void {
      BOPBuildingPopup.push(thePeriod.BOPLine, location, building, revOpenForEdit, false, jobWizardHelper)
    }
    
    // 'action' attribute on TitleBar (id=BuildingLink) at RatingTxDetailsPanelSet.BOPLine.pcf: line 72, column 47
    function action_dest_10 () : pcf.api.Destination {
      return pcf.BOPBuildingPopup.createDestination(thePeriod.BOPLine, location, building, revOpenForEdit, false, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.BOPLine.pcf: line 68, column 79
    function def_onEnter_12 (def :  pcf.BOPCoverageTxLV) : void {
      def.onEnter( buildingTransactionMap.get( building ) )
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.BOPLine.pcf: line 68, column 79
    function def_refreshVariables_13 (def :  pcf.BOPCoverageTxLV) : void {
      def.refreshVariables( buildingTransactionMap.get( building ) )
    }
    
    // 'title' attribute on TitleBar (id=BuildingLink) at RatingTxDetailsPanelSet.BOPLine.pcf: line 72, column 47
    function title_11 () : java.lang.String {
      return building.DisplayName
    }
    
    property get building () : entity.BOPBuilding {
      return getIteratedValue(2) as entity.BOPBuilding
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/RatingTxDetailsPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.BOPLine.pcf: line 58, column 73
    function def_onEnter_7 (def :  pcf.BOPCoverageTxLV) : void {
      def.onEnter( buildingTransactionMap.get( null ) )
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.BOPLine.pcf: line 58, column 73
    function def_refreshVariables_8 (def :  pcf.BOPCoverageTxLV) : void {
      def.refreshVariables( buildingTransactionMap.get( null ) )
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.BOPLine.pcf: line 52, column 101
    function initialValue_5 () : java.util.Map<entity.BOPBuilding, java.util.Set<entity.BOPTransaction>> {
      return locationTransactionMap.get( location ).byFixedBuilding()
    }
    
    // PanelIterator (id=locationIterator) at RatingTxDetailsPanelSet.BOPLine.pcf: line 47, column 40
    function initializeVariables_15 () : void {
        buildingTransactionMap = locationTransactionMap.get( location ).byFixedBuilding();

    }
    
    // 'title' attribute on TitleBar at RatingTxDetailsPanelSet.BOPLine.pcf: line 55, column 146
    function title_6 () : java.lang.String {
      return DisplayKey.get("Web.Policy.BOP.Quote.Location.Title", location.Location.LocationNum, location.Location.CompactName)
    }
    
    // 'value' attribute on PanelIterator (id=buildingIterator) at RatingTxDetailsPanelSet.BOPLine.pcf: line 66, column 46
    function value_14 () : entity.BOPBuilding[] {
      return buildingTransactionMap.Keys.where(\b -> b != null).toTypedArray()
    }
    
    property get buildingTransactionMap () : java.util.Map<entity.BOPBuilding, java.util.Set<entity.BOPTransaction>> {
      return getVariableValue("buildingTransactionMap", 1) as java.util.Map<entity.BOPBuilding, java.util.Set<entity.BOPTransaction>>
    }
    
    property set buildingTransactionMap ($arg :  java.util.Map<entity.BOPBuilding, java.util.Set<entity.BOPTransaction>>) {
      setVariableValue("buildingTransactionMap", 1, $arg)
    }
    
    property get location () : entity.BOPLocation {
      return getIteratedValue(1) as entity.BOPLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/bop/policy/RatingTxDetailsPanelSet.BOPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingTxDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.BOPLine.pcf: line 38, column 54
    function def_onEnter_3 (def :  pcf.BOPCoverageTxLV) : void {
      def.onEnter( lineLevelTransactions )
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.BOPLine.pcf: line 38, column 54
    function def_refreshVariables_4 (def :  pcf.BOPCoverageTxLV) : void {
      def.refreshVariables( lineLevelTransactions )
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.BOPLine.pcf: line 26, column 98
    function initialValue_0 () : java.util.Map<java.lang.Boolean, java.util.Set<entity.BOPTransaction>> {
      return thePeriod.BOPLine.BOPTransactions.toSet().byCoveragePremium()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.BOPLine.pcf: line 31, column 99
    function initialValue_1 () : java.util.Map<entity.BOPLocation, java.util.Set<entity.BOPTransaction>> {
      return coverageOrOtherTransactionMap.get( true ).byFixedLocation()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.BOPLine.pcf: line 36, column 58
    function initialValue_2 () : java.util.Set<entity.BOPTransaction> {
      return locationTransactionMap.get( null )
    }
    
    // 'value' attribute on PanelIterator (id=locationIterator) at RatingTxDetailsPanelSet.BOPLine.pcf: line 47, column 40
    function value_16 () : entity.BOPLocation[] {
      return locationTransactionMap.Keys.where(\l -> l != null).toTypedArray()
    }
    
    property get coverageOrOtherTransactionMap () : java.util.Map<java.lang.Boolean, java.util.Set<entity.BOPTransaction>> {
      return getVariableValue("coverageOrOtherTransactionMap", 0) as java.util.Map<java.lang.Boolean, java.util.Set<entity.BOPTransaction>>
    }
    
    property set coverageOrOtherTransactionMap ($arg :  java.util.Map<java.lang.Boolean, java.util.Set<entity.BOPTransaction>>) {
      setVariableValue("coverageOrOtherTransactionMap", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get lineLevelTransactions () : java.util.Set<entity.BOPTransaction> {
      return getVariableValue("lineLevelTransactions", 0) as java.util.Set<entity.BOPTransaction>
    }
    
    property set lineLevelTransactions ($arg :  java.util.Set<entity.BOPTransaction>) {
      setVariableValue("lineLevelTransactions", 0, $arg)
    }
    
    property get locationTransactionMap () : java.util.Map<entity.BOPLocation, java.util.Set<entity.BOPTransaction>> {
      return getVariableValue("locationTransactionMap", 0) as java.util.Map<entity.BOPLocation, java.util.Set<entity.BOPTransaction>>
    }
    
    property set locationTransactionMap ($arg :  java.util.Map<entity.BOPLocation, java.util.Set<entity.BOPTransaction>>) {
      setVariableValue("locationTransactionMap", 0, $arg)
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