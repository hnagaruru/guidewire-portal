package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehicleCostDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BAVehicleCostDetailPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehicleCostDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BAVehicleCostDetailPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (vehicle :  BusinessVehicle, vehicleCosts :  java.util.List<entity.BACost>) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at BAVehicleCostDetailPopup.pcf: line 66, column 95
    function def_onEnter_22 (def :  pcf.BACoverageCostLV) : void {
      def.onEnter(vehicleCosts.toTypedArray(), vehicleCosts.AnyProrated, false)
    }
    
    // 'def' attribute on PanelRef at BAVehicleCostDetailPopup.pcf: line 66, column 95
    function def_refreshVariables_23 (def :  pcf.BACoverageCostLV) : void {
      def.refreshVariables(vehicleCosts.toTypedArray(), vehicleCosts.AnyProrated, false)
    }
    
    // 'label' attribute on Label at BAVehicleCostDetailPopup.pcf: line 22, column 98
    function label_0 () : java.lang.String {
      return DisplayKey.get("Web.Policy.BA.Review.VehicleNumber", vehicle)
    }
    
    // 'value' attribute on TextInput (id=GarageLocation_Input) at BAVehicleCostDetailPopup.pcf: line 28, column 52
    function valueRoot_2 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextInput (id=GarageLocation_Input) at BAVehicleCostDetailPopup.pcf: line 28, column 52
    function value_1 () : entity.PolicyLocation {
      return vehicle.Location
    }
    
    // 'value' attribute on TextInput (id=ClassCode_Input) at BAVehicleCostDetailPopup.pcf: line 44, column 51
    function value_10 () : java.lang.String {
      return vehicle.VehicleClassCode
    }
    
    // 'value' attribute on TextInput (id=Year_Input) at BAVehicleCostDetailPopup.pcf: line 50, column 48
    function value_13 () : java.lang.Integer {
      return vehicle.Year
    }
    
    // 'value' attribute on TextInput (id=Make_Input) at BAVehicleCostDetailPopup.pcf: line 55, column 39
    function value_16 () : java.lang.String {
      return vehicle.Make
    }
    
    // 'value' attribute on TextInput (id=Model_Input) at BAVehicleCostDetailPopup.pcf: line 60, column 40
    function value_19 () : java.lang.String {
      return vehicle.Model
    }
    
    // 'value' attribute on TextInput (id=Vin_Input) at BAVehicleCostDetailPopup.pcf: line 33, column 38
    function value_4 () : java.lang.String {
      return vehicle.Vin
    }
    
    // 'value' attribute on TypeKeyInput (id=VehType_Input) at BAVehicleCostDetailPopup.pcf: line 39, column 50
    function value_7 () : typekey.VehicleType {
      return vehicle.VehicleType
    }
    
    override property get CurrentLocation () : pcf.BAVehicleCostDetailPopup {
      return super.CurrentLocation as pcf.BAVehicleCostDetailPopup
    }
    
    property get vehicle () : BusinessVehicle {
      return getVariableValue("vehicle", 0) as BusinessVehicle
    }
    
    property set vehicle ($arg :  BusinessVehicle) {
      setVariableValue("vehicle", 0, $arg)
    }
    
    property get vehicleCosts () : java.util.List<entity.BACost> {
      return getVariableValue("vehicleCosts", 0) as java.util.List<entity.BACost>
    }
    
    property set vehicleCosts ($arg :  java.util.List<entity.BACost>) {
      setVariableValue("vehicleCosts", 0, $arg)
    }
    
    
  }
  
  
}