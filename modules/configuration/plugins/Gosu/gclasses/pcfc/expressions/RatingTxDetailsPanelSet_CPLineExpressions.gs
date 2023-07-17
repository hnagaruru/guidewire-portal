package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/cp/policy/RatingTxDetailsPanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingTxDetailsPanelSet_CPLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/RatingTxDetailsPanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.CPLine.pcf: line 91, column 49
    function action_10 () : void {
      CPBuildingTxDetailsPopup.push(transactionsByBuilding.get(building), building)
    }
    
    // 'action' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.CPLine.pcf: line 91, column 49
    function action_dest_11 () : pcf.api.Destination {
      return pcf.CPBuildingTxDetailsPopup.createDestination(transactionsByBuilding.get(building), building)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.CPLine.pcf: line 91, column 49
    function valueRoot_13 () : java.lang.Object {
      return building
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.CPLine.pcf: line 91, column 49
    function value_12 () : java.lang.String {
      return building.DisplayName
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingTxDetailsPanelSet.CPLine.pcf: line 97, column 33
    function value_15 () : gw.pl.currency.MonetaryAmount {
      return transactionsByBuilding.get(building).AmountSum(period.PreferredSettlementCurrency)
    }
    
    property get building () : entity.CPBuilding {
      return getIteratedValue(2) as entity.CPBuilding
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/RatingTxDetailsPanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.CPLine.pcf: line 129, column 46
    function valueRoot_25 () : java.lang.Object {
      return transaction
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at RatingTxDetailsPanelSet.CPLine.pcf: line 136, column 33
    function valueRoot_28 () : java.lang.Object {
      return transaction.CPCost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.CPLine.pcf: line 129, column 46
    function value_24 () : entity.CPCost {
      return transaction.CPCost
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at RatingTxDetailsPanelSet.CPLine.pcf: line 136, column 33
    function value_27 () : typekey.Jurisdiction {
      return transaction.CPCost.State
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingTxDetailsPanelSet.CPLine.pcf: line 144, column 33
    function value_30 () : gw.pl.currency.MonetaryAmount {
      return transaction.AmountBilling
    }
    
    property get transaction () : entity.CPTransaction {
      return getIteratedValue(1) as entity.CPTransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/RatingTxDetailsPanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.CPLine.pcf: line 65, column 105
    function initialValue_4 () : java.util.Map<entity.CPBuilding, java.util.Set<entity.CPTransaction>> {
      return transactionsByLocation.get(location).byFixedBuilding()
    }
    
    // RowIterator (id=LocationIterator) at RatingTxDetailsPanelSet.CPLine.pcf: line 60, column 45
    function initializeVariables_18 () : void {
        transactionsByBuilding = transactionsByLocation.get(location).byFixedBuilding();

    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.CPLine.pcf: line 85, column 32
    function sortBy_8 (building :  entity.CPBuilding) : java.lang.Object {
      return building.Building.BuildingNum
    }
    
    // 'footerSumValue' attribute on RowIterator (id=BuildingIterator) at RatingTxDetailsPanelSet.CPLine.pcf: line 97, column 33
    function sumValue_9 (building :  entity.CPBuilding) : java.lang.Object {
      return transactionsByBuilding.get(building).AmountSum(period.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.CPLine.pcf: line 74, column 47
    function valueRoot_6 () : java.lang.Object {
      return location
    }
    
    // 'value' attribute on RowIterator (id=BuildingIterator) at RatingTxDetailsPanelSet.CPLine.pcf: line 82, column 47
    function value_17 () : entity.CPBuilding[] {
      return transactionsByBuilding.Keys.toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.CPLine.pcf: line 74, column 47
    function value_5 () : java.lang.String {
      return location.DisplayName
    }
    
    property get location () : entity.CPLocation {
      return getIteratedValue(1) as entity.CPLocation
    }
    
    property get transactionsByBuilding () : java.util.Map<entity.CPBuilding, java.util.Set<entity.CPTransaction>> {
      return getVariableValue("transactionsByBuilding", 1) as java.util.Map<entity.CPBuilding, java.util.Set<entity.CPTransaction>>
    }
    
    property set transactionsByBuilding ($arg :  java.util.Map<entity.CPBuilding, java.util.Set<entity.CPTransaction>>) {
      setVariableValue("transactionsByBuilding", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/cp/policy/RatingTxDetailsPanelSet.CPLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingTxDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.CPLine.pcf: line 27, column 97
    function initialValue_0 () : java.util.Map<entity.CPLocation, java.util.Set<entity.CPTransaction>> {
      return period.CPTransactions.toSet().byFixedLocation()
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.CPLine.pcf: line 118, column 32
    function sortBy_20 (transaction :  entity.CPTransaction) : java.lang.Object {
      return transaction.CPCost.State
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.CPLine.pcf: line 121, column 32
    function sortBy_21 (transaction :  entity.CPTransaction) : java.lang.Object {
      return transaction.AmountBilling
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.CPLine.pcf: line 68, column 30
    function sortBy_3 (location :  entity.CPLocation) : java.lang.Object {
      return location.Location.LocationNum
    }
    
    // '$$sumValue' attribute on RowIterator (id=NonLocationTxIterator) at RatingTxDetailsPanelSet.CPLine.pcf: line 144, column 33
    function sumValueRoot_23 (transaction :  entity.CPTransaction) : java.lang.Object {
      return transaction
    }
    
    // 'title' attribute on TitleBar at RatingTxDetailsPanelSet.CPLine.pcf: line 33, column 37
    function title_2 () : java.lang.String {
      return gw.api.productmodel.PolicyLinePatternLookup.getByPublicID("CPLine").DisplayName
    }
    
    // 'value' attribute on RowIterator (id=LocationIterator) at RatingTxDetailsPanelSet.CPLine.pcf: line 60, column 45
    function value_19 () : entity.CPLocation[] {
      return transactionsByLocation.Keys.where( \ c -> c.Location != null).toTypedArray()
    }
    
    // 'value' attribute on RowIterator (id=NonLocationTxIterator) at RatingTxDetailsPanelSet.CPLine.pcf: line 115, column 50
    function value_33 () : entity.CPTransaction[] {
      return period.CPTransactions.where( \ c -> c.CPCost.Location == null )
    }
    
    // 'visible' attribute on TitleBar at RatingTxDetailsPanelSet.CPLine.pcf: line 33, column 37
    function visible_1 () : java.lang.Boolean {
      return period.MultiLine
    }
    
    // 'visible' attribute on PanelRef (id=TitlePanel) at RatingTxDetailsPanelSet.CPLine.pcf: line 30, column 51
    function visible_34 () : java.lang.Boolean {
      return period.CPTransactions.HasElements
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get revOpenForEdit () : boolean {
      return getRequireValue("revOpenForEdit", 0) as java.lang.Boolean
    }
    
    property set revOpenForEdit ($arg :  boolean) {
      setRequireValue("revOpenForEdit", 0, $arg)
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
    
    property get transactionsByLocation () : java.util.Map<entity.CPLocation, java.util.Set<entity.CPTransaction>> {
      return getVariableValue("transactionsByLocation", 0) as java.util.Map<entity.CPLocation, java.util.Set<entity.CPTransaction>>
    }
    
    property set transactionsByLocation ($arg :  java.util.Map<entity.CPLocation, java.util.Set<entity.CPTransaction>>) {
      setVariableValue("transactionsByLocation", 0, $arg)
    }
    
    
  }
  
  
}