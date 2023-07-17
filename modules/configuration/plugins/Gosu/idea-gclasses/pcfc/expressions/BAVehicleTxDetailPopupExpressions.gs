package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehicleTxDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BAVehicleTxDetailPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAVehicleTxDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BAVehicleTxDetailPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (vehicle :  BusinessVehicle, vehicleTxs :  java.util.List<entity.BATransaction>) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at BAVehicleTxDetailPopup.pcf: line 65, column 52
    function def_onEnter_22 (def :  pcf.BACoverageTxLV) : void {
      def.onEnter(vehicleTxs, false)
    }
    
    // 'def' attribute on PanelRef at BAVehicleTxDetailPopup.pcf: line 65, column 52
    function def_refreshVariables_23 (def :  pcf.BACoverageTxLV) : void {
      def.refreshVariables(vehicleTxs, false)
    }
    
    // 'label' attribute on Label at BAVehicleTxDetailPopup.pcf: line 22, column 98
    function label_0 () : java.lang.String {
      return DisplayKey.get("Web.Policy.BA.Review.VehicleNumber", vehicle)
    }
    
    // 'value' attribute on TextInput (id=GarageLocation_Input) at BAVehicleTxDetailPopup.pcf: line 28, column 52
    function valueRoot_2 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextInput (id=GarageLocation_Input) at BAVehicleTxDetailPopup.pcf: line 28, column 52
    function value_1 () : entity.PolicyLocation {
      return vehicle.Location
    }
    
    // 'value' attribute on TextInput (id=ClassCode_Input) at BAVehicleTxDetailPopup.pcf: line 44, column 51
    function value_10 () : java.lang.String {
      return vehicle.VehicleClassCode
    }
    
    // 'value' attribute on TextInput (id=Year_Input) at BAVehicleTxDetailPopup.pcf: line 50, column 48
    function value_13 () : java.lang.Integer {
      return vehicle.Year
    }
    
    // 'value' attribute on TextInput (id=Make_Input) at BAVehicleTxDetailPopup.pcf: line 55, column 39
    function value_16 () : java.lang.String {
      return vehicle.Make
    }
    
    // 'value' attribute on TextInput (id=Model_Input) at BAVehicleTxDetailPopup.pcf: line 60, column 40
    function value_19 () : java.lang.String {
      return vehicle.Model
    }
    
    // 'value' attribute on TextInput (id=Vin_Input) at BAVehicleTxDetailPopup.pcf: line 33, column 38
    function value_4 () : java.lang.String {
      return vehicle.Vin
    }
    
    // 'value' attribute on TypeKeyInput (id=VehType_Input) at BAVehicleTxDetailPopup.pcf: line 39, column 50
    function value_7 () : typekey.VehicleType {
      return vehicle.VehicleType
    }
    
    override property get CurrentLocation () : pcf.BAVehicleTxDetailPopup {
      return super.CurrentLocation as pcf.BAVehicleTxDetailPopup
    }
    
    property get vehicle () : BusinessVehicle {
      return getVariableValue("vehicle", 0) as BusinessVehicle
    }
    
    property set vehicle ($arg :  BusinessVehicle) {
      setVariableValue("vehicle", 0, $arg)
    }
    
    property get vehicleTxs () : java.util.List<entity.BATransaction> {
      return getVariableValue("vehicleTxs", 0) as java.util.List<entity.BATransaction>
    }
    
    property set vehicleTxs ($arg :  java.util.List<entity.BATransaction>) {
      setVariableValue("vehicleTxs", 0, $arg)
    }
    
    
  }
  
  
}