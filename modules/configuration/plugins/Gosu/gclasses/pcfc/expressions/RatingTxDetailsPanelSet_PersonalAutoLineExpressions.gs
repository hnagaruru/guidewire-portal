package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/RatingTxDetailsPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingTxDetailsPanelSet_PersonalAutoLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/RatingTxDetailsPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 214, column 40
    function valueRoot_63 () : java.lang.Object {
      return otherTx
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 214, column 40
    function value_62 () : entity.Cost {
      return otherTx.Cost
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 219, column 46
    function value_65 () : gw.pl.currency.MonetaryAmount {
      return otherTx.AmountBilling
    }
    
    property get otherTx () : entity.PATransaction {
      return getIteratedValue(1) as entity.PATransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/RatingTxDetailsPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 132, column 39
    function valueRoot_37 () : java.lang.Object {
      return transaction.PACost
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 138, column 39
    function valueRoot_41 () : java.lang.Object {
      return transaction
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 125, column 32
    function value_34 () : java.lang.String {
      return alterCoveragePatternName(DisplayKey.get("Web.PolicyLine.Coverage", transaction.PACost.Coverage.Pattern), transaction.PACost)
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 132, column 39
    function value_36 () : gw.pl.currency.MonetaryAmount {
      return transaction.PACost.ActualTermAmountBilling
    }
    
    // 'value' attribute on DateCell (id=EffDate_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 138, column 39
    function value_40 () : java.util.Date {
      return transaction.EffDate
    }
    
    // 'value' attribute on DateCell (id=ExpDate_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 144, column 39
    function value_44 () : java.util.Date {
      return transaction.ExpDate
    }
    
    // 'value' attribute on TextCell (id=TxProration_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 150, column 39
    function value_48 () : java.lang.String {
      return gw.api.util.StringUtil.formatNumber(transaction.Proration, "#0.0000")
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TxAmount_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 156, column 53
    function value_51 () : gw.pl.currency.MonetaryAmount {
      return transaction.AmountBilling
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 132, column 39
    function visible_38 () : java.lang.Boolean {
      return prorated
    }
    
    property get transaction () : entity.PATransaction {
      return getIteratedValue(2) as entity.PATransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/RatingTxDetailsPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 56, column 25
    function initialValue_6 () : boolean {
      return transactionsByVehicle.get( vehicle ).AnyProrated
    }
    
    // PanelIterator (id=vehicleIterator) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 51, column 44
    function initializeVariables_55 () : void {
        prorated = transactionsByVehicle.get( vehicle ).AnyProrated;

    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 115, column 32
    function sortBy_20 (transaction :  entity.PATransaction) : java.lang.Object {
      return transaction.PACost.Coverage.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 118, column 32
    function sortBy_21 (transaction :  entity.PATransaction) : java.lang.Object {
      return transaction.PACost.ID
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 125, column 32
    function sortValue_22 (transaction :  entity.PATransaction) : java.lang.Object {
      return alterCoveragePatternName(DisplayKey.get("Web.PolicyLine.Coverage", transaction.PACost.Coverage.Pattern), transaction.PACost)
    }
    
    // 'value' attribute on TextCell (id=TxProration_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 150, column 39
    function sortValue_26 (transaction :  entity.PATransaction) : java.lang.Object {
      return gw.api.util.StringUtil.formatNumber(transaction.Proration, "#0.0000")
    }
    
    // 'subtitle' attribute on TitleBar at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 63, column 106
    function subtitle_7 () : java.lang.String {
      return DisplayKey.get("Web.Policy.PA.Garage", vehicle.GarageLocation.LocationNum, vehicle.GarageLocation.CompactName)
    }
    
    // 'title' attribute on TitleBar at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 63, column 106
    function title_8 () : java.lang.String {
      return DisplayKey.get("Web.Policy.BA.Review.VehicleNumber", vehicle.VehicleNumber)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 93, column 40
    function valueRoot_12 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 93, column 40
    function value_11 () : java.lang.String {
      return vehicle?.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 97, column 41
    function value_14 () : java.lang.String {
      return vehicle?.Model
    }
    
    // 'value' attribute on TextCell (id=Vin_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 101, column 39
    function value_17 () : java.lang.String {
      return vehicle?.Vin
    }
    
    // 'value' attribute on TextCell (id=VehicleSubTotal_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 162, column 66
    function value_32 () : gw.pl.currency.MonetaryAmount {
      return transactionsByVehicle.get( vehicle ).AmountSum(thePeriod.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on RowIterator (id=transactionIterator) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 112, column 50
    function value_54 () : entity.PATransaction[] {
      return transactionsByVehicle.get( vehicle ).toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 89, column 52
    function value_9 () : java.lang.String {
      return vehicle?.Year?.toString()
    }
    
    // 'visible' attribute on MonetaryAmountCell (id=TermAmount_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 132, column 39
    function visible_23 () : java.lang.Boolean {
      return prorated
    }
    
    property get prorated () : boolean {
      return getVariableValue("prorated", 1) as java.lang.Boolean
    }
    
    property set prorated ($arg :  boolean) {
      setVariableValue("prorated", 1, $arg)
    }
    
    property get vehicle () : entity.PersonalVehicle {
      return getIteratedValue(1) as entity.PersonalVehicle
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/RatingTxDetailsPanelSet.PersonalAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingTxDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 27, column 97
    function initialValue_0 () : java.util.Map<java.lang.Boolean, java.util.Set<entity.PATransaction>> {
      return thePeriod.PersonalAutoLine.PATransactions.toSet().partition( \ tx -> tx.PACost.Vehicle == null ).toAutoMap( \ b -> java.util.Collections.emptySet<PATransaction>() )
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 32, column 57
    function initialValue_1 () : java.util.Set<entity.PATransaction> {
      return transactionAndVehicleMap.get(true)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 37, column 57
    function initialValue_2 () : java.util.Set<entity.PATransaction> {
      return transactionAndVehicleMap.get(false)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 42, column 102
    function initialValue_3 () : java.util.Map<entity.PersonalVehicle, java.util.Set<entity.PATransaction>> {
      return transactionsWithVehicle.byFixedVehicle()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 46, column 45
    function initialValue_4 () : productmodel.PersonalAutoLine {
      return thePeriod.PersonalAutoLine
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 59, column 24
    function sortBy_5 (vehicle :  entity.PersonalVehicle) : java.lang.Object {
      return vehicle.VehicleNumber
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 200, column 28
    function sortBy_59 (otherTx :  entity.PATransaction) : java.lang.Object {
      return (typeof otherTx.PACost).AllTypesInHierarchy.Count
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 203, column 28
    function sortBy_60 (otherTx :  entity.PATransaction) : java.lang.Object {
      return typeof otherTx.PACost
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 206, column 28
    function sortBy_61 (otherTx :  entity.PATransaction) : java.lang.Object {
      return otherTx.EffDate
    }
    
    // 'value' attribute on PanelIterator (id=vehicleIterator) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 51, column 44
    function value_56 () : entity.PersonalVehicle[] {
      return transactionsByVehicle.Keys.toTypedArray()
    }
    
    // 'value' attribute on MonetaryAmountCell (id=SubTotal_Cell) at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 188, column 95
    function value_57 () : gw.pl.currency.MonetaryAmount {
      return transactionsWithVehicle.AmountSum(thePeriod.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on RowIterator at RatingTxDetailsPanelSet.PersonalAutoLine.pcf: line 196, column 46
    function value_68 () : entity.PATransaction[] {
      return transactionsWithoutVehicle.toTypedArray()
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get paline () : productmodel.PersonalAutoLine {
      return getVariableValue("paline", 0) as productmodel.PersonalAutoLine
    }
    
    property set paline ($arg :  productmodel.PersonalAutoLine) {
      setVariableValue("paline", 0, $arg)
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
    
    property get transactionAndVehicleMap () : java.util.Map<java.lang.Boolean, java.util.Set<entity.PATransaction>> {
      return getVariableValue("transactionAndVehicleMap", 0) as java.util.Map<java.lang.Boolean, java.util.Set<entity.PATransaction>>
    }
    
    property set transactionAndVehicleMap ($arg :  java.util.Map<java.lang.Boolean, java.util.Set<entity.PATransaction>>) {
      setVariableValue("transactionAndVehicleMap", 0, $arg)
    }
    
    property get transactionsByVehicle () : java.util.Map<entity.PersonalVehicle, java.util.Set<entity.PATransaction>> {
      return getVariableValue("transactionsByVehicle", 0) as java.util.Map<entity.PersonalVehicle, java.util.Set<entity.PATransaction>>
    }
    
    property set transactionsByVehicle ($arg :  java.util.Map<entity.PersonalVehicle, java.util.Set<entity.PATransaction>>) {
      setVariableValue("transactionsByVehicle", 0, $arg)
    }
    
    property get transactionsWithVehicle () : java.util.Set<entity.PATransaction> {
      return getVariableValue("transactionsWithVehicle", 0) as java.util.Set<entity.PATransaction>
    }
    
    property set transactionsWithVehicle ($arg :  java.util.Set<entity.PATransaction>) {
      setVariableValue("transactionsWithVehicle", 0, $arg)
    }
    
    property get transactionsWithoutVehicle () : java.util.Set<entity.PATransaction> {
      return getVariableValue("transactionsWithoutVehicle", 0) as java.util.Set<entity.PATransaction>
    }
    
    property set transactionsWithoutVehicle ($arg :  java.util.Set<entity.PATransaction>) {
      setVariableValue("transactionsWithoutVehicle", 0, $arg)
    }
    
    function alterCoveragePatternName(name : String, cost : PACost) : String {
          if (name.contains("PIP")) {
            return name + " - " + (cost as PersonalAutoPIPCovCost).PAPIPCovCostType.DisplayName
          } else {
            return name
          }
        }
    
    
  }
  
  
}