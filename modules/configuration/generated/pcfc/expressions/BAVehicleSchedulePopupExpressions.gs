package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehicleSchedulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BAVehicleSchedulePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehicleSchedulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BAVehicleSchedulePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (baLine :  BusinessAutoLine, selectedState :  State) : int {
      return 0
    }
    
    // 'sortBy' attribute on TextCell (id=VehicleNumber_Cell) at BAVehicleSchedulePopup.pcf: line 36, column 46
    function sortValue_0 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at BAVehicleSchedulePopup.pcf: line 42, column 42
    function sortValue_1 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Location.State
    }
    
    // 'value' attribute on BooleanRadioCell (id=PIP_Cell) at BAVehicleSchedulePopup.pcf: line 90, column 190
    function sortValue_10 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return (vehicle.VehicleType == TC_PP and gw.api.domain.StateSet.get( gw.api.domain.StateSet.PIPSTATES ).contains(vehicle.Location.State)) or vehicle.Location.State == TC_HI
    }
    
    // 'value' attribute on TextCell (id=Collision_Cell) at BAVehicleSchedulePopup.pcf: line 95, column 33
    function sortValue_11 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return (vehicle.BACollisionCovExists ? vehicle.BACollisionCov.BACollisionDeductTerm.DisplayValue : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=Comprehensive_Cell) at BAVehicleSchedulePopup.pcf: line 100, column 33
    function sortValue_12 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return (vehicle.BAComprehensiveCovExists ? vehicle.BAComprehensiveCov.BAComprehensiveDdctTerm.DisplayValue : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=Specified_Cell) at BAVehicleSchedulePopup.pcf: line 105, column 33
    function sortValue_13 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return (vehicle.BASpecCausesLossCovExists ? vehicle.BASpecCausesLossCov.BASpecCausesLossDdctTerm.DisplayValue : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=Towing_Cell) at BAVehicleSchedulePopup.pcf: line 110, column 33
    function sortValue_14 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return (vehicle.BATowingLaborCovExists ? DisplayKey.get("Web.Policy.BA.Selected") : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at BAVehicleSchedulePopup.pcf: line 47, column 70
    function sortValue_2 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Location.AccountLocation.LocationName
    }
    
    // 'value' attribute on TextCell (id=Territory_Cell) at BAVehicleSchedulePopup.pcf: line 53, column 33
    function sortValue_3 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Location.TerritoryCodes[0].Code
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at BAVehicleSchedulePopup.pcf: line 58, column 49
    function sortValue_4 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleClassCode
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at BAVehicleSchedulePopup.pcf: line 64, column 48
    function sortValue_5 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on TextCell (id=Vin_Cell) at BAVehicleSchedulePopup.pcf: line 70, column 36
    function sortValue_6 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Vin
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at BAVehicleSchedulePopup.pcf: line 76, column 46
    function sortValue_7 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at BAVehicleSchedulePopup.pcf: line 81, column 37
    function sortValue_8 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at BAVehicleSchedulePopup.pcf: line 86, column 38
    function sortValue_9 (vehicle :  entity.BusinessVehicle) : java.lang.Object {
      return vehicle.Model
    }
    
    // 'value' attribute on RowIterator at BAVehicleSchedulePopup.pcf: line 27, column 48
    function value_56 () : entity.BusinessVehicle[] {
      return baLine.Vehicles
    }
    
    override property get CurrentLocation () : pcf.BAVehicleSchedulePopup {
      return super.CurrentLocation as pcf.BAVehicleSchedulePopup
    }
    
    property get baLine () : BusinessAutoLine {
      return getVariableValue("baLine", 0) as BusinessAutoLine
    }
    
    property set baLine ($arg :  BusinessAutoLine) {
      setVariableValue("baLine", 0, $arg)
    }
    
    property get selectedState () : State {
      return getVariableValue("selectedState", 0) as State
    }
    
    property set selectedState ($arg :  State) {
      setVariableValue("selectedState", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehicleSchedulePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BAVehicleSchedulePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Vin_Cell) at BAVehicleSchedulePopup.pcf: line 70, column 36
    function action_32 () : void {
      BAVehiclePopup.push(vehicle, baLine.Branch, false, true, null)
    }
    
    // 'action' attribute on TextCell (id=Vin_Cell) at BAVehicleSchedulePopup.pcf: line 70, column 36
    function action_dest_33 () : pcf.api.Destination {
      return pcf.BAVehiclePopup.createDestination(vehicle, baLine.Branch, false, true, null)
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at BAVehicleSchedulePopup.pcf: line 36, column 46
    function valueRoot_16 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at BAVehicleSchedulePopup.pcf: line 42, column 42
    function valueRoot_19 () : java.lang.Object {
      return vehicle.Location
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at BAVehicleSchedulePopup.pcf: line 47, column 70
    function valueRoot_22 () : java.lang.Object {
      return vehicle.Location.AccountLocation
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at BAVehicleSchedulePopup.pcf: line 36, column 46
    function value_15 () : java.lang.Integer {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at BAVehicleSchedulePopup.pcf: line 42, column 42
    function value_18 () : typekey.State {
      return vehicle.Location.State
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at BAVehicleSchedulePopup.pcf: line 47, column 70
    function value_21 () : java.lang.String {
      return vehicle.Location.AccountLocation.LocationName
    }
    
    // 'value' attribute on TextCell (id=Territory_Cell) at BAVehicleSchedulePopup.pcf: line 53, column 33
    function value_24 () : java.lang.String {
      return vehicle.Location.TerritoryCodes[0].Code
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at BAVehicleSchedulePopup.pcf: line 58, column 49
    function value_26 () : java.lang.String {
      return vehicle.VehicleClassCode
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at BAVehicleSchedulePopup.pcf: line 64, column 48
    function value_29 () : typekey.VehicleType {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on TextCell (id=Vin_Cell) at BAVehicleSchedulePopup.pcf: line 70, column 36
    function value_34 () : java.lang.String {
      return vehicle.Vin
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at BAVehicleSchedulePopup.pcf: line 76, column 46
    function value_37 () : java.lang.Integer {
      return vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at BAVehicleSchedulePopup.pcf: line 81, column 37
    function value_40 () : java.lang.String {
      return vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at BAVehicleSchedulePopup.pcf: line 86, column 38
    function value_43 () : java.lang.String {
      return vehicle.Model
    }
    
    // 'value' attribute on BooleanRadioCell (id=PIP_Cell) at BAVehicleSchedulePopup.pcf: line 90, column 190
    function value_46 () : java.lang.Boolean {
      return (vehicle.VehicleType == TC_PP and gw.api.domain.StateSet.get( gw.api.domain.StateSet.PIPSTATES ).contains(vehicle.Location.State)) or vehicle.Location.State == TC_HI
    }
    
    // 'value' attribute on TextCell (id=Collision_Cell) at BAVehicleSchedulePopup.pcf: line 95, column 33
    function value_48 () : java.lang.String {
      return (vehicle.BACollisionCovExists ? vehicle.BACollisionCov.BACollisionDeductTerm.DisplayValue : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=Comprehensive_Cell) at BAVehicleSchedulePopup.pcf: line 100, column 33
    function value_50 () : java.lang.String {
      return (vehicle.BAComprehensiveCovExists ? vehicle.BAComprehensiveCov.BAComprehensiveDdctTerm.DisplayValue : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=Specified_Cell) at BAVehicleSchedulePopup.pcf: line 105, column 33
    function value_52 () : java.lang.String {
      return (vehicle.BASpecCausesLossCovExists ? vehicle.BASpecCausesLossCov.BASpecCausesLossDdctTerm.DisplayValue : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=Towing_Cell) at BAVehicleSchedulePopup.pcf: line 110, column 33
    function value_54 () : java.lang.String {
      return (vehicle.BATowingLaborCovExists ? DisplayKey.get("Web.Policy.BA.Selected") : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    property get vehicle () : entity.BusinessVehicle {
      return getIteratedValue(1) as entity.BusinessVehicle
    }
    
    
  }
  
  
}