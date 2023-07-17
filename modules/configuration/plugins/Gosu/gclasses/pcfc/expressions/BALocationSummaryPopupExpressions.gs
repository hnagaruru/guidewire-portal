package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BALocationSummaryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BALocationSummaryPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALocationSummaryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BALocationSummaryPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (baLine :  BusinessAutoLine, selectedState :  State) : int {
      return 0
    }
    
    // 'title' attribute on TitleBar at BALocationSummaryPopup.pcf: line 28, column 104
    function title_0 () : java.lang.String {
      return DisplayKey.get("Web.Policy.BA.StateLocations", selectedState.Description)
    }
    
    override property get CurrentLocation () : pcf.BALocationSummaryPopup {
      return super.CurrentLocation as pcf.BALocationSummaryPopup
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
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALocationSummaryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends LocSummaryLDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Vin_Cell) at BALocationSummaryPopup.pcf: line 161, column 56
    function action_46 () : void {
      BAVehiclePopup.push(bAVehicleEU, baLine.Branch, false, true, null)
    }
    
    // 'action' attribute on TextCell (id=Vin_Cell) at BALocationSummaryPopup.pcf: line 161, column 56
    function action_dest_47 () : pcf.api.Destination {
      return pcf.BAVehiclePopup.createDestination(bAVehicleEU, baLine.Branch, false, true, null)
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at BALocationSummaryPopup.pcf: line 144, column 62
    function valueRoot_38 () : java.lang.Object {
      return bAVehicleEU
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at BALocationSummaryPopup.pcf: line 144, column 62
    function value_37 () : java.lang.Integer {
      return bAVehicleEU.VehicleNumber
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at BALocationSummaryPopup.pcf: line 149, column 69
    function value_40 () : java.lang.String {
      return bAVehicleEU.VehicleClassCode
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at BALocationSummaryPopup.pcf: line 155, column 64
    function value_43 () : typekey.VehicleType {
      return bAVehicleEU.VehicleType
    }
    
    // 'value' attribute on TextCell (id=Vin_Cell) at BALocationSummaryPopup.pcf: line 161, column 56
    function value_48 () : java.lang.String {
      return bAVehicleEU.Vin
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at BALocationSummaryPopup.pcf: line 167, column 62
    function value_51 () : java.lang.Integer {
      return bAVehicleEU.Year
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at BALocationSummaryPopup.pcf: line 172, column 57
    function value_54 () : java.lang.String {
      return bAVehicleEU.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at BALocationSummaryPopup.pcf: line 177, column 58
    function value_57 () : java.lang.String {
      return bAVehicleEU.Model
    }
    
    // 'value' attribute on BooleanRadioCell (id=PIP_Cell) at BALocationSummaryPopup.pcf: line 182, column 138
    function value_60 () : java.lang.Boolean {
      return bAVehicleEU.VehicleType == TC_PP or selectedLocation.State == TC_HI
    }
    
    // 'value' attribute on TextCell (id=Collision_Cell) at BALocationSummaryPopup.pcf: line 187, column 192
    function value_63 () : java.lang.String {
      return (bAVehicleEU.BACollisionCovExists ? bAVehicleEU.BACollisionCov.BACollisionDeductTerm.DisplayValue : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=Comprehensive_Cell) at BALocationSummaryPopup.pcf: line 192, column 202
    function value_65 () : java.lang.String {
      return (bAVehicleEU.BAComprehensiveCovExists ? bAVehicleEU.BAComprehensiveCov.BAComprehensiveDdctTerm.DisplayValue : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=Specified_Cell) at BALocationSummaryPopup.pcf: line 198, column 49
    function value_67 () : java.lang.String {
      return (bAVehicleEU.BASpecCausesLossCovExists ? bAVehicleEU.BASpecCausesLossCov.BASpecCausesLossDdctTerm.DisplayValue : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=Towing_Cell) at BALocationSummaryPopup.pcf: line 204, column 49
    function value_69 () : java.lang.String {
      return (bAVehicleEU.BATowingLaborCovExists ? DisplayKey.get("Web.Policy.BA.Selected") : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'visible' attribute on BooleanRadioCell (id=PIP_Cell) at BALocationSummaryPopup.pcf: line 182, column 138
    function visible_61 () : java.lang.Boolean {
      return gw.api.domain.StateSet.get( gw.api.domain.StateSet.PIPSTATES ).contains(selectedLocation.State)
    }
    
    property get bAVehicleEU () : entity.BusinessVehicle {
      return getIteratedValue(2) as entity.BusinessVehicle
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALocationSummaryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LocSummaryLDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at BALocationSummaryPopup.pcf: line 49, column 143
    function value_12 () : java.lang.String {
      return DisplayKey.get("Web.Policy.BOP.Quote.Location.Title", polLocation.LocationNum, polLocation.CompactName)
    }
    
    // 'value' attribute on TextCell (id=Territory_Cell) at BALocationSummaryPopup.pcf: line 62, column 39
    function value_14 () : java.lang.String {
      return polLocation.TerritoryCodes[0].Code
    }
    
    // 'value' attribute on TextCell (id=VehCount_Cell) at BALocationSummaryPopup.pcf: line 68, column 51
    function value_16 () : java.lang.Integer {
      return baLine.Vehicles.countWhere( \ v -> v.Location == polLocation)
    }
    
    // 'value' attribute on TextCell (id=PassengerCount_Cell) at BALocationSummaryPopup.pcf: line 85, column 38
    function value_18 () : java.lang.Integer {
      return baLine.Vehicles.countWhere( \ v -> v.Location == polLocation and v.VehicleType == TC_PP)
    }
    
    // 'value' attribute on TextCell (id=TruckCount_Cell) at BALocationSummaryPopup.pcf: line 100, column 38
    function value_20 () : java.lang.Integer {
      return baLine.Vehicles.countWhere( \ v -> v.Location == polLocation and v.VehicleType == TC_COMMERCIAL)
    }
    
    property get polLocation () : entity.PolicyLocation {
      return getIteratedValue(2) as entity.PolicyLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALocationSummaryPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocSummaryLDVExpressionsImpl extends BALocationSummaryPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Label at BALocationSummaryPopup.pcf: line 125, column 156
    function label_23 () : java.lang.String {
      return DisplayKey.get("Web.Policy.BOP.Quote.Location.Title", selectedLocation.LocationNum, selectedLocation.CompactName)
    }
    
    // 'value' attribute on TextCell (id=Loc_Cell) at BALocationSummaryPopup.pcf: line 49, column 143
    function sortValue_1 (polLocation :  entity.PolicyLocation) : java.lang.Object {
      return DisplayKey.get("Web.Policy.BOP.Quote.Location.Title", polLocation.LocationNum, polLocation.CompactName)
    }
    
    // 'value' attribute on TextCell (id=Territory_Cell) at BALocationSummaryPopup.pcf: line 62, column 39
    function sortValue_2 (polLocation :  entity.PolicyLocation) : java.lang.Object {
      return polLocation.TerritoryCodes[0].Code
    }
    
    // 'sortBy' attribute on TextCell (id=VehicleNumber_Cell) at BALocationSummaryPopup.pcf: line 144, column 62
    function sortValue_24 (bAVehicleEU :  entity.BusinessVehicle) : java.lang.Object {
      return bAVehicleEU.VehicleNumber
    }
    
    // 'value' attribute on TextCell (id=ClassCode_Cell) at BALocationSummaryPopup.pcf: line 149, column 69
    function sortValue_25 (bAVehicleEU :  entity.BusinessVehicle) : java.lang.Object {
      return bAVehicleEU.VehicleClassCode
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at BALocationSummaryPopup.pcf: line 155, column 64
    function sortValue_26 (bAVehicleEU :  entity.BusinessVehicle) : java.lang.Object {
      return bAVehicleEU.VehicleType
    }
    
    // 'value' attribute on TextCell (id=Vin_Cell) at BALocationSummaryPopup.pcf: line 161, column 56
    function sortValue_27 (bAVehicleEU :  entity.BusinessVehicle) : java.lang.Object {
      return bAVehicleEU.Vin
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at BALocationSummaryPopup.pcf: line 167, column 62
    function sortValue_28 (bAVehicleEU :  entity.BusinessVehicle) : java.lang.Object {
      return bAVehicleEU.Year
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at BALocationSummaryPopup.pcf: line 172, column 57
    function sortValue_29 (bAVehicleEU :  entity.BusinessVehicle) : java.lang.Object {
      return bAVehicleEU.Make
    }
    
    // 'value' attribute on TextCell (id=VehCount_Cell) at BALocationSummaryPopup.pcf: line 68, column 51
    function sortValue_3 (polLocation :  entity.PolicyLocation) : java.lang.Object {
      return baLine.Vehicles.countWhere( \ v -> v.Location == polLocation)
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at BALocationSummaryPopup.pcf: line 177, column 58
    function sortValue_30 (bAVehicleEU :  entity.BusinessVehicle) : java.lang.Object {
      return bAVehicleEU.Model
    }
    
    // 'value' attribute on BooleanRadioCell (id=PIP_Cell) at BALocationSummaryPopup.pcf: line 182, column 138
    function sortValue_31 (bAVehicleEU :  entity.BusinessVehicle) : java.lang.Object {
      return bAVehicleEU.VehicleType == TC_PP or selectedLocation.State == TC_HI
    }
    
    // 'value' attribute on TextCell (id=Collision_Cell) at BALocationSummaryPopup.pcf: line 187, column 192
    function sortValue_33 (bAVehicleEU :  entity.BusinessVehicle) : java.lang.Object {
      return (bAVehicleEU.BACollisionCovExists ? bAVehicleEU.BACollisionCov.BACollisionDeductTerm.DisplayValue : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=Comprehensive_Cell) at BALocationSummaryPopup.pcf: line 192, column 202
    function sortValue_34 (bAVehicleEU :  entity.BusinessVehicle) : java.lang.Object {
      return (bAVehicleEU.BAComprehensiveCovExists ? bAVehicleEU.BAComprehensiveCov.BAComprehensiveDdctTerm.DisplayValue : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=Specified_Cell) at BALocationSummaryPopup.pcf: line 198, column 49
    function sortValue_35 (bAVehicleEU :  entity.BusinessVehicle) : java.lang.Object {
      return (bAVehicleEU.BASpecCausesLossCovExists ? bAVehicleEU.BASpecCausesLossCov.BASpecCausesLossDdctTerm.DisplayValue : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=Towing_Cell) at BALocationSummaryPopup.pcf: line 204, column 49
    function sortValue_36 (bAVehicleEU :  entity.BusinessVehicle) : java.lang.Object {
      return (bAVehicleEU.BATowingLaborCovExists ? DisplayKey.get("Web.Policy.BA.Selected") : DisplayKey.get("Web.Policy.BA.Declined"))
    }
    
    // 'value' attribute on TextCell (id=PassengerCount_Cell) at BALocationSummaryPopup.pcf: line 85, column 38
    function sortValue_4 (polLocation :  entity.PolicyLocation) : java.lang.Object {
      return baLine.Vehicles.countWhere( \ v -> v.Location == polLocation and v.VehicleType == TC_PP)
    }
    
    // 'value' attribute on TextCell (id=TruckCount_Cell) at BALocationSummaryPopup.pcf: line 100, column 38
    function sortValue_5 (polLocation :  entity.PolicyLocation) : java.lang.Object {
      return baLine.Vehicles.countWhere( \ v -> v.Location == polLocation and v.VehicleType == TC_COMMERCIAL)
    }
    
    // 'value' attribute on TextCell (id=TruckTotal_Cell) at BALocationSummaryPopup.pcf: line 106, column 56
    function value_10 () : java.lang.Integer {
      return baLine.Vehicles.countWhere( \ v -> v.Location.State == selectedState and v.VehicleType == TC_COMMERCIAL)
    }
    
    // 'value' attribute on RowIterator at BALocationSummaryPopup.pcf: line 42, column 53
    function value_22 () : entity.PolicyLocation[] {
      return baLine.getAllLocationsInState(selectedState)
    }
    
    // 'value' attribute on TextCell (id=VehTotal_Cell) at BALocationSummaryPopup.pcf: line 74, column 56
    function value_6 () : java.lang.Integer {
      return baLine.Vehicles.countWhere( \ v -> v.Location.State == selectedState)
    }
    
    // 'value' attribute on RowIterator at BALocationSummaryPopup.pcf: line 135, column 64
    function value_71 () : entity.BusinessVehicle[] {
      return baLine.Vehicles.where(\ v -> v.Location == selectedLocation)
    }
    
    // 'value' attribute on TextCell (id=PassengerTotal_Cell) at BALocationSummaryPopup.pcf: line 91, column 56
    function value_8 () : java.lang.Integer {
      return baLine.Vehicles.countWhere( \ v -> v.Location.State == selectedState and v.VehicleType == TC_PP)
    }
    
    // 'visible' attribute on BooleanRadioCell (id=PIP_Cell) at BALocationSummaryPopup.pcf: line 182, column 138
    function visible_32 () : java.lang.Boolean {
      return gw.api.domain.StateSet.get( gw.api.domain.StateSet.PIPSTATES ).contains(selectedLocation.State)
    }
    
    property get selectedLocation () : PolicyLocation {
      return getCurrentSelection(1) as PolicyLocation
    }
    
    property set selectedLocation ($arg :  PolicyLocation) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}