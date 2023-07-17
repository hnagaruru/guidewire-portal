package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/RatingTxDetailsPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingTxDetailsPanelSet_BusinessAutoLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/RatingTxDetailsPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 161, column 29
    function valueRoot_56 () : java.lang.Object {
      return otherTransaction.BACost
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 169, column 29
    function valueRoot_59 () : java.lang.Object {
      return otherTransaction
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 154, column 49
    function value_53 () : entity.BATransaction {
      return otherTransaction
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 161, column 29
    function value_55 () : typekey.Jurisdiction {
      return otherTransaction.BACost.State
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 169, column 29
    function value_58 () : gw.pl.currency.MonetaryAmount {
      return otherTransaction.AmountBilling
    }
    
    property get otherTransaction () : entity.BATransaction {
      return getIteratedValue(1) as entity.BATransaction
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/RatingTxDetailsPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RatingTxDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=vehNum_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 78, column 29
    function action_21 () : void {
      BAVehicleTxDetailPopup.push(vehicle, vehicleTranactionsByVehicle.get(vehicle))
    }
    
    // 'action' attribute on TextCell (id=vehVIN_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 85, column 29
    function action_26 () : void {
      BAVehicleTxDetailPopup.push(vehicle, vehicleTranactionsByVehicle.get(vehicle))
    }
    
    // 'action' attribute on TextCell (id=vehNum_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 78, column 29
    function action_dest_22 () : pcf.api.Destination {
      return pcf.BAVehicleTxDetailPopup.createDestination(vehicle, vehicleTranactionsByVehicle.get(vehicle))
    }
    
    // 'action' attribute on TextCell (id=vehVIN_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 85, column 29
    function action_dest_27 () : pcf.api.Destination {
      return pcf.BAVehicleTxDetailPopup.createDestination(vehicle, vehicleTranactionsByVehicle.get(vehicle))
    }
    
    // 'value' attribute on TextCell (id=vehLoc_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 70, column 53
    function valueRoot_19 () : java.lang.Object {
      return vehicle.Location
    }
    
    // 'value' attribute on TextCell (id=vehNum_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 78, column 29
    function valueRoot_24 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextCell (id=vehLoc_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 70, column 53
    function value_18 () : java.lang.String {
      return vehicle.Location.DisplayName
    }
    
    // 'value' attribute on TextCell (id=vehNum_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 78, column 29
    function value_23 () : java.lang.Integer {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TextCell (id=vehVIN_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 85, column 29
    function value_28 () : java.lang.String {
      return vehicle.Vin
    }
    
    // 'value' attribute on TypeKeyCell (id=vehType_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 91, column 29
    function value_31 () : typekey.VehicleType {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on TextCell (id=vehClass_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 97, column 29
    function value_34 () : java.lang.String {
      return vehicle.VehicleClassCode
    }
    
    // 'value' attribute on TextCell (id=vehYear_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 104, column 29
    function value_37 () : java.lang.Integer {
      return vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=vehMake_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 109, column 29
    function value_40 () : java.lang.String {
      return vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=vehModel_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 114, column 29
    function value_43 () : java.lang.String {
      return vehicle.Model
    }
    
    // 'value' attribute on MonetaryAmountCell (id=vehAmount_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 122, column 29
    function value_46 () : gw.pl.currency.MonetaryAmount {
      return vehicleTranactionsByVehicle.get(vehicle).AmountSum(thePeriod.PreferredSettlementCurrency)
    }
    
    property get vehicle () : entity.BusinessVehicle {
      return getIteratedValue(1) as entity.BusinessVehicle
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/RatingTxDetailsPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingTxDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 40, column 58
    function def_onEnter_4 (def :  pcf.BACoverageTxLV) : void {
      def.onEnter(lineLevelTransactions,  true)
    }
    
    // 'def' attribute on PanelRef at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 40, column 58
    function def_refreshVariables_5 (def :  pcf.BACoverageTxLV) : void {
      def.refreshVariables(lineLevelTransactions,  true)
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 26, column 58
    function initialValue_0 () : java.util.List<entity.BATransaction> {
      return thePeriod.BATransactions.where(\ tx -> ((typeof tx.BACost == BALineCovCost or typeof tx.BACost == BALineCovNonownedCost) and tx.BACost.Vehicle == null) ).toList()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 30, column 58
    function initialValue_1 () : java.util.List<entity.BATransaction> {
      return thePeriod.BATransactions.where(\ tx -> tx.BACost.Vehicle != null ).toList()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 34, column 58
    function initialValue_2 () : java.util.List<entity.BATransaction> {
      return thePeriod.BATransactions.where(\ tx -> tx.BACost.RatedOrder != typekey.BARatedOrderType.TC_COVERAGEPREMIUM )?.toList()
    }
    
    // 'initialValue' attribute on Variable at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 38, column 93
    function initialValue_3 () : java.util.Map<entity.BusinessVehicle, List<entity.BATransaction>> {
      return vehicleTransactions.partition(\ tx -> (tx.Cost as BACost).Vehicle)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 142, column 28
    function sortBy_49 (otherTransaction :  entity.BATransaction) : java.lang.Object {
      return otherTransaction.BACost.RateAmountType.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 145, column 28
    function sortBy_50 (otherTransaction :  entity.BATransaction) : java.lang.Object {
      return otherTransaction.BACost.EffDate
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 60, column 28
    function sortBy_6 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Location.LocationNum
    }
    
    // 'sortBy' attribute on IteratorSort at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 63, column 28
    function sortBy_7 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TextCell (id=vehVIN_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 85, column 29
    function sortValue_10 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Vin
    }
    
    // 'value' attribute on TypeKeyCell (id=vehType_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 91, column 29
    function sortValue_11 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on TextCell (id=vehClass_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 97, column 29
    function sortValue_12 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleClassCode
    }
    
    // 'value' attribute on TextCell (id=vehYear_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 104, column 29
    function sortValue_13 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=vehMake_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 109, column 29
    function sortValue_14 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=vehModel_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 114, column 29
    function sortValue_15 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Model
    }
    
    // 'value' attribute on MonetaryAmountCell (id=vehAmount_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 122, column 29
    function sortValue_16 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicleTranactionsByVehicle.get(vehicle).AmountSum(thePeriod.PreferredSettlementCurrency)
    }
    
    // 'value' attribute on TextCell (id=vehLoc_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 70, column 53
    function sortValue_8 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Location.DisplayName
    }
    
    // 'value' attribute on TextCell (id=vehNum_Cell) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 78, column 29
    function sortValue_9 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleNumber
    }
    
    // '$$sumValue' attribute on RowIterator at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 169, column 29
    function sumValueRoot_52 (otherTransaction :  entity.BATransaction) : java.lang.Object {
      return otherTransaction
    }
    
    // 'footerSumValue' attribute on RowIterator (id=vehicleList) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 122, column 29
    function sumValue_17 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicleTranactionsByVehicle.get(vehicle).AmountSum(thePeriod.PreferredSettlementCurrency)
    }
    
    // 'footerSumValue' attribute on RowIterator at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 169, column 29
    function sumValue_51 (otherTransaction :  entity.BATransaction) : java.lang.Object {
      return otherTransaction.AmountBilling
    }
    
    // 'value' attribute on RowIterator (id=vehicleList) at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 57, column 48
    function value_48 () : entity.BusinessVehicle[] {
      return vehicleTranactionsByVehicle.Keys.toTypedArray()
    }
    
    // 'value' attribute on RowIterator at RatingTxDetailsPanelSet.BusinessAutoLine.pcf: line 139, column 66
    function value_61 () : java.util.List<entity.BATransaction> {
      return otherTransactions
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get lineLevelTransactions () : java.util.List<entity.BATransaction> {
      return getVariableValue("lineLevelTransactions", 0) as java.util.List<entity.BATransaction>
    }
    
    property set lineLevelTransactions ($arg :  java.util.List<entity.BATransaction>) {
      setVariableValue("lineLevelTransactions", 0, $arg)
    }
    
    property get otherTransactions () : java.util.List<entity.BATransaction> {
      return getVariableValue("otherTransactions", 0) as java.util.List<entity.BATransaction>
    }
    
    property set otherTransactions ($arg :  java.util.List<entity.BATransaction>) {
      setVariableValue("otherTransactions", 0, $arg)
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
    
    property get vehicleTranactionsByVehicle () : java.util.Map<entity.BusinessVehicle, List<entity.BATransaction>> {
      return getVariableValue("vehicleTranactionsByVehicle", 0) as java.util.Map<entity.BusinessVehicle, List<entity.BATransaction>>
    }
    
    property set vehicleTranactionsByVehicle ($arg :  java.util.Map<entity.BusinessVehicle, List<entity.BATransaction>>) {
      setVariableValue("vehicleTranactionsByVehicle", 0, $arg)
    }
    
    property get vehicleTransactions () : java.util.List<entity.BATransaction> {
      return getVariableValue("vehicleTransactions", 0) as java.util.List<entity.BATransaction>
    }
    
    property set vehicleTransactions ($arg :  java.util.List<entity.BATransaction>) {
      setVariableValue("vehicleTransactions", 0, $arg)
    }
    
    
  }
  
  
}