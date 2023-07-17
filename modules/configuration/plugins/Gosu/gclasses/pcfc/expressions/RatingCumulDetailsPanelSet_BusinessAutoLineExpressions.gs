package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/RatingCumulDetailsPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RatingCumulDetailsPanelSet_BusinessAutoLineExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/RatingCumulDetailsPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends RatingCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 151, column 28
    function valueRoot_57 () : java.lang.Object {
      return otherCost
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 151, column 28
    function value_56 () : java.lang.String {
      return otherCost.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 158, column 29
    function value_59 () : typekey.Jurisdiction {
      return otherCost.State
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Amount_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 166, column 29
    function value_62 () : gw.pl.currency.MonetaryAmount {
      return otherCost.ActualAmountBilling
    }
    
    property get otherCost () : entity.BACost {
      return getIteratedValue(1) as entity.BACost
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/RatingCumulDetailsPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RatingCumulDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=vehNum_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 78, column 29
    function action_24 () : void {
      BAVehicleCostDetailPopup.push(vehicle, vehicleCostsByVehicle.get(vehicle))
    }
    
    // 'action' attribute on TextCell (id=vehVIN_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 84, column 29
    function action_29 () : void {
      BAVehicleCostDetailPopup.push(vehicle, vehicleCostsByVehicle.get(vehicle))
    }
    
    // 'action' attribute on TextCell (id=vehNum_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 78, column 29
    function action_dest_25 () : pcf.api.Destination {
      return pcf.BAVehicleCostDetailPopup.createDestination(vehicle, vehicleCostsByVehicle.get(vehicle))
    }
    
    // 'action' attribute on TextCell (id=vehVIN_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 84, column 29
    function action_dest_30 () : pcf.api.Destination {
      return pcf.BAVehicleCostDetailPopup.createDestination(vehicle, vehicleCostsByVehicle.get(vehicle))
    }
    
    // 'value' attribute on TextCell (id=vehLoc_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 71, column 28
    function valueRoot_22 () : java.lang.Object {
      return vehicle.Location
    }
    
    // 'value' attribute on TextCell (id=vehNum_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 78, column 29
    function valueRoot_27 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextCell (id=vehLoc_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 71, column 28
    function value_21 () : java.lang.String {
      return vehicle.Location.DisplayName
    }
    
    // 'value' attribute on TextCell (id=vehNum_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 78, column 29
    function value_26 () : java.lang.Integer {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TextCell (id=vehVIN_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 84, column 29
    function value_31 () : java.lang.String {
      return vehicle.Vin
    }
    
    // 'value' attribute on TypeKeyCell (id=vehType_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 90, column 29
    function value_34 () : typekey.VehicleType {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on TextCell (id=vehClass_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 95, column 29
    function value_37 () : java.lang.String {
      return vehicle.VehicleClassCode
    }
    
    // 'value' attribute on TextCell (id=vehYear_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 102, column 29
    function value_40 () : java.lang.Integer {
      return vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=vehMake_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 107, column 29
    function value_43 () : java.lang.String {
      return vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=vehModel_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 112, column 29
    function value_46 () : java.lang.String {
      return vehicle.Model
    }
    
    // 'value' attribute on MonetaryAmountCell (id=vehAmount_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 119, column 29
    function value_49 () : gw.pl.currency.MonetaryAmount {
      return vehicleCostsByVehicle.get(vehicle).AmountSum(period.PreferredSettlementCurrency)
    }
    
    property get vehicle () : entity.BusinessVehicle {
      return getIteratedValue(1) as entity.BusinessVehicle
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/RatingCumulDetailsPanelSet.BusinessAutoLine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RatingCumulDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 39, column 36
    function def_onEnter_5 (def :  pcf.RatingOverrideButtonDV) : void {
      def.onEnter(period, period.BusinessAutoLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 41, column 95
    function def_onEnter_7 (def :  pcf.BACoverageCostLV) : void {
      def.onEnter(lineLevelCosts.toTypedArray(), lineLevelCosts.AnyProrated, true)
    }
    
    // 'def' attribute on PanelRef (id=RatingOverrideButtonDV) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 39, column 36
    function def_refreshVariables_6 (def :  pcf.RatingOverrideButtonDV) : void {
      def.refreshVariables(period, period.BusinessAutoLine, jobWizardHelper, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on PanelRef at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 41, column 95
    function def_refreshVariables_8 (def :  pcf.BACoverageCostLV) : void {
      def.refreshVariables(lineLevelCosts.toTypedArray(), lineLevelCosts.AnyProrated, true)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 20, column 45
    function initialValue_0 () : productmodel.BusinessAutoLine {
      return period.BusinessAutoLine
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 24, column 58
    function initialValue_1 () : java.util.List<entity.BALineCovCost> {
      return baLine.Costs.whereTypeIs(BALineCovCost).where(\ cost -> cost.Vehicle.FixedId == null)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 28, column 44
    function initialValue_2 () : java.util.List<BACost> {
      return baLine.Costs.whereTypeIs(BACost).where(\ cost -> cost.Vehicle.FixedId != null)
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 32, column 96
    function initialValue_3 () : java.util.Map<entity.BusinessVehicle, java.util.List<entity.BACost>> {
      return vehicleCosts.partition(\ vehCost -> vehCost.Vehicle )
    }
    
    // 'initialValue' attribute on Variable at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 36, column 44
    function initialValue_4 () : java.util.List<BACost> {
      return baLine.Costs.whereTypeIs(BACost).where(\ cost -> cost.RatedOrder != typekey.BARatedOrderType.TC_COVERAGEPREMIUM)
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 64, column 28
    function sortBy_10 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleNumber
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 139, column 28
    function sortBy_52 (otherCost :  entity.BACost) : java.lang.Object {
      return otherCost.RateAmountType.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 142, column 28
    function sortBy_53 (otherCost :  entity.BACost) : java.lang.Object {
      return otherCost.EffDate
    }
    
    // 'sortBy' attribute on IteratorSort at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 61, column 28
    function sortBy_9 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Location.LocationNum
    }
    
    // 'value' attribute on TextCell (id=vehLoc_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 71, column 28
    function sortValue_11 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Location.DisplayName
    }
    
    // 'value' attribute on TextCell (id=vehNum_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 78, column 29
    function sortValue_12 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TextCell (id=vehVIN_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 84, column 29
    function sortValue_13 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Vin
    }
    
    // 'value' attribute on TypeKeyCell (id=vehType_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 90, column 29
    function sortValue_14 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on TextCell (id=vehClass_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 95, column 29
    function sortValue_15 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleClassCode
    }
    
    // 'value' attribute on TextCell (id=vehYear_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 102, column 29
    function sortValue_16 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=vehMake_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 107, column 29
    function sortValue_17 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=vehModel_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 112, column 29
    function sortValue_18 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Model
    }
    
    // 'value' attribute on MonetaryAmountCell (id=vehAmount_Cell) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 119, column 29
    function sortValue_19 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicleCostsByVehicle.get(vehicle).AmountSum(period.PreferredSettlementCurrency)
    }
    
    // '$$sumValue' attribute on RowIterator at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 166, column 29
    function sumValueRoot_55 (otherCost :  entity.BACost) : java.lang.Object {
      return otherCost
    }
    
    // 'footerSumValue' attribute on RowIterator (id=vehicleList) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 119, column 29
    function sumValue_20 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicleCostsByVehicle.get(vehicle).AmountSum(period.PreferredSettlementCurrency)
    }
    
    // 'footerSumValue' attribute on RowIterator at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 166, column 29
    function sumValue_54 (otherCost :  entity.BACost) : java.lang.Object {
      return otherCost.ActualAmountBilling
    }
    
    // 'value' attribute on RowIterator (id=vehicleList) at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 58, column 48
    function value_51 () : entity.BusinessVehicle[] {
      return vehicleCostsByVehicle.Keys.toTypedArray()
    }
    
    // 'value' attribute on RowIterator at RatingCumulDetailsPanelSet.BusinessAutoLine.pcf: line 136, column 39
    function value_65 () : entity.BACost[] {
      return otherCosts.toTypedArray()
    }
    
    property get baLine () : productmodel.BusinessAutoLine {
      return getVariableValue("baLine", 0) as productmodel.BusinessAutoLine
    }
    
    property set baLine ($arg :  productmodel.BusinessAutoLine) {
      setVariableValue("baLine", 0, $arg)
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
    
    property get lineLevelCosts () : java.util.List<entity.BALineCovCost> {
      return getVariableValue("lineLevelCosts", 0) as java.util.List<entity.BALineCovCost>
    }
    
    property set lineLevelCosts ($arg :  java.util.List<entity.BALineCovCost>) {
      setVariableValue("lineLevelCosts", 0, $arg)
    }
    
    property get otherCosts () : java.util.List<BACost> {
      return getVariableValue("otherCosts", 0) as java.util.List<BACost>
    }
    
    property set otherCosts ($arg :  java.util.List<BACost>) {
      setVariableValue("otherCosts", 0, $arg)
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    property get vehicleCosts () : java.util.List<BACost> {
      return getVariableValue("vehicleCosts", 0) as java.util.List<BACost>
    }
    
    property set vehicleCosts ($arg :  java.util.List<BACost>) {
      setVariableValue("vehicleCosts", 0, $arg)
    }
    
    property get vehicleCostsByVehicle () : java.util.Map<entity.BusinessVehicle, java.util.List<entity.BACost>> {
      return getVariableValue("vehicleCostsByVehicle", 0) as java.util.Map<entity.BusinessVehicle, java.util.List<entity.BACost>>
    }
    
    property set vehicleCostsByVehicle ($arg :  java.util.Map<entity.BusinessVehicle, java.util.List<entity.BACost>>) {
      setVariableValue("vehicleCostsByVehicle", 0, $arg)
    }
    
    
  }
  
  
}