package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehiclesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BAVehiclesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehiclesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BAVehiclesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on RowIterator at BAVehiclesLV.pcf: line 30, column 44
    function pickLocation_56 () : void {
      BAVehiclePopup.push(null, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'sortBy' attribute on TextCell (id=VehicleNumber_Cell) at BAVehiclesLV.pcf: line 40, column 42
    function sortValue_0 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at BAVehiclesLV.pcf: line 48, column 24
    function sortValue_1 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on RangeCell (id=EULocationInput_Cell) at BAVehiclesLV.pcf: line 55, column 24
    function sortValue_2 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Location
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at BAVehiclesLV.pcf: line 62, column 42
    function sortValue_3 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at BAVehiclesLV.pcf: line 69, column 24
    function sortValue_4 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at BAVehiclesLV.pcf: line 76, column 24
    function sortValue_5 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Model
    }
    
    // 'value' attribute on TypeKeyCell (id=BodyType_Cell) at BAVehiclesLV.pcf: line 84, column 24
    function sortValue_6 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.BodyType
    }
    
    // 'value' attribute on TextCell (id=Vin_Cell) at BAVehiclesLV.pcf: line 90, column 32
    function sortValue_7 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Vin
    }
    
    // 'value' attribute on TypeKeyCell (id=PreferredCoverageCurrency_Cell) at BAVehiclesLV.pcf: line 98, column 24
    function sortValue_8 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.PreferredCoverageCurrency
    }
    
    // 'toRemove' attribute on RowIterator at BAVehiclesLV.pcf: line 30, column 44
    function toRemove_57 (vehicle :  entity.BusinessVehicle) : void {
      baLine.removeVehicle(vehicle)
    }
    
    // 'value' attribute on RowIterator at BAVehiclesLV.pcf: line 30, column 44
    function value_58 () : entity.BusinessVehicle[] {
      return baLine.Vehicles
    }
    
    // 'visible' attribute on TypeKeyCell (id=PreferredCoverageCurrency_Cell) at BAVehiclesLV.pcf: line 98, column 24
    function visible_9 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get baLine () : BusinessAutoLine {
      return getRequireValue("baLine", 0) as BusinessAutoLine
    }
    
    property set baLine ($arg :  BusinessAutoLine) {
      setRequireValue("baLine", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get showCheckbox () : boolean {
      return getRequireValue("showCheckbox", 0) as java.lang.Boolean
    }
    
    property set showCheckbox ($arg :  boolean) {
      setRequireValue("showCheckbox", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehiclesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BAVehiclesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=VehicleNumber_Cell) at BAVehiclesLV.pcf: line 40, column 42
    function action_10 () : void {
      BAVehiclePopup.push(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at BAVehiclesLV.pcf: line 48, column 24
    function action_15 () : void {
      BAVehiclePopup.push(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'action' attribute on TextCell (id=Year_Cell) at BAVehiclesLV.pcf: line 62, column 42
    function action_26 () : void {
      BAVehiclePopup.push(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at BAVehiclesLV.pcf: line 69, column 24
    function action_31 () : void {
      BAVehiclePopup.push(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at BAVehiclesLV.pcf: line 76, column 24
    function action_36 () : void {
      BAVehiclePopup.push(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'action' attribute on TypeKeyCell (id=BodyType_Cell) at BAVehiclesLV.pcf: line 84, column 24
    function action_41 () : void {
      BAVehiclePopup.push(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'action' attribute on TextCell (id=Vin_Cell) at BAVehiclesLV.pcf: line 90, column 32
    function action_46 () : void {
      BAVehiclePopup.push(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'action' attribute on TextCell (id=VehicleNumber_Cell) at BAVehiclesLV.pcf: line 40, column 42
    function action_dest_11 () : pcf.api.Destination {
      return pcf.BAVehiclePopup.createDestination(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'action' attribute on TypeKeyCell (id=Type_Cell) at BAVehiclesLV.pcf: line 48, column 24
    function action_dest_16 () : pcf.api.Destination {
      return pcf.BAVehiclePopup.createDestination(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'action' attribute on TextCell (id=Year_Cell) at BAVehiclesLV.pcf: line 62, column 42
    function action_dest_27 () : pcf.api.Destination {
      return pcf.BAVehiclePopup.createDestination(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at BAVehiclesLV.pcf: line 69, column 24
    function action_dest_32 () : pcf.api.Destination {
      return pcf.BAVehiclePopup.createDestination(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at BAVehiclesLV.pcf: line 76, column 24
    function action_dest_37 () : pcf.api.Destination {
      return pcf.BAVehiclePopup.createDestination(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'action' attribute on TypeKeyCell (id=BodyType_Cell) at BAVehiclesLV.pcf: line 84, column 24
    function action_dest_42 () : pcf.api.Destination {
      return pcf.BAVehiclePopup.createDestination(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'action' attribute on TextCell (id=Vin_Cell) at BAVehiclesLV.pcf: line 90, column 32
    function action_dest_47 () : pcf.api.Destination {
      return pcf.BAVehiclePopup.createDestination(vehicle, policyPeriod, openForEdit, true, new gw.api.web.job.JobWizardHelper(CurrentLocation))
    }
    
    // 'checkBoxVisible' attribute on RowIterator at BAVehiclesLV.pcf: line 30, column 44
    function checkBoxVisible_55 () : java.lang.Boolean {
      return showCheckbox
    }
    
    // 'valueRange' attribute on RangeCell (id=EULocationInput_Cell) at BAVehiclesLV.pcf: line 55, column 24
    function valueRange_22 () : java.lang.Object {
      return policyPeriod.PolicyLocations
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at BAVehiclesLV.pcf: line 40, column 42
    function valueRoot_13 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at BAVehiclesLV.pcf: line 40, column 42
    function value_12 () : java.lang.Integer {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at BAVehiclesLV.pcf: line 48, column 24
    function value_17 () : typekey.VehicleType {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on RangeCell (id=EULocationInput_Cell) at BAVehiclesLV.pcf: line 55, column 24
    function value_20 () : entity.PolicyLocation {
      return vehicle.Location
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at BAVehiclesLV.pcf: line 62, column 42
    function value_28 () : java.lang.Integer {
      return vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at BAVehiclesLV.pcf: line 69, column 24
    function value_33 () : java.lang.String {
      return vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at BAVehiclesLV.pcf: line 76, column 24
    function value_38 () : java.lang.String {
      return vehicle.Model
    }
    
    // 'value' attribute on TypeKeyCell (id=BodyType_Cell) at BAVehiclesLV.pcf: line 84, column 24
    function value_43 () : typekey.BodyType {
      return vehicle.BodyType
    }
    
    // 'value' attribute on TextCell (id=Vin_Cell) at BAVehiclesLV.pcf: line 90, column 32
    function value_48 () : java.lang.String {
      return vehicle.Vin
    }
    
    // 'value' attribute on TypeKeyCell (id=PreferredCoverageCurrency_Cell) at BAVehiclesLV.pcf: line 98, column 24
    function value_51 () : typekey.Currency {
      return vehicle.PreferredCoverageCurrency
    }
    
    // 'valueRange' attribute on RangeCell (id=EULocationInput_Cell) at BAVehiclesLV.pcf: line 55, column 24
    function verifyValueRangeIsAllowedType_23 ($$arg :  entity.PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=EULocationInput_Cell) at BAVehiclesLV.pcf: line 55, column 24
    function verifyValueRangeIsAllowedType_23 ($$arg :  gw.api.database.IQueryBeanResult<entity.PolicyLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=EULocationInput_Cell) at BAVehiclesLV.pcf: line 55, column 24
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=EULocationInput_Cell) at BAVehiclesLV.pcf: line 55, column 24
    function verifyValueRange_24 () : void {
      var __valueRangeArg = policyPeriod.PolicyLocations
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyCell (id=PreferredCoverageCurrency_Cell) at BAVehiclesLV.pcf: line 98, column 24
    function visible_53 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get vehicle () : entity.BusinessVehicle {
      return getIteratedValue(1) as entity.BusinessVehicle
    }
    
    
  }
  
  
}