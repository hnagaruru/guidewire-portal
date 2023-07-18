package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PAVehiclesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PAVehiclesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAVehiclesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends VehiclesListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at PAVehiclesPanelSet.pcf: line 45, column 50
    function checkBoxVisible_35 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at PAVehiclesPanelSet.pcf: line 56, column 48
    function valueRoot_11 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at PAVehiclesPanelSet.pcf: line 56, column 48
    function value_10 () : java.lang.Integer {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at PAVehiclesPanelSet.pcf: line 62, column 50
    function value_13 () : typekey.VehicleType {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at PAVehiclesPanelSet.pcf: line 68, column 48
    function value_16 () : java.lang.Integer {
      return vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at PAVehiclesPanelSet.pcf: line 73, column 39
    function value_19 () : java.lang.String {
      return vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at PAVehiclesPanelSet.pcf: line 78, column 40
    function value_22 () : java.lang.String {
      return vehicle.Model
    }
    
    // 'value' attribute on TypeKeyCell (id=BodyType_Cell) at PAVehiclesPanelSet.pcf: line 84, column 47
    function value_25 () : typekey.BodyType {
      return vehicle.BodyType
    }
    
    // 'value' attribute on TextCell (id=Vin_Cell) at PAVehiclesPanelSet.pcf: line 89, column 38
    function value_28 () : java.lang.String {
      return vehicle.Vin
    }
    
    // 'value' attribute on TypeKeyCell (id=VehicleCoverageCurrency_Cell) at PAVehiclesPanelSet.pcf: line 96, column 75
    function value_31 () : typekey.Currency {
      return vehicle.PreferredCoverageCurrency
    }
    
    // 'visible' attribute on TypeKeyCell (id=VehicleCoverageCurrency_Cell) at PAVehiclesPanelSet.pcf: line 96, column 75
    function visible_33 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get vehicle () : entity.PersonalVehicle {
      return getIteratedValue(2) as entity.PersonalVehicle
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAVehiclesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PAVehiclesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : PersonalAutoLine {
      return getRequireValue("line", 0) as PersonalAutoLine
    }
    
    property set line ($arg :  PersonalAutoLine) {
      setRequireValue("line", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getRequireValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAVehiclesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehiclesListDetailPanelExpressionsImpl extends PAVehiclesPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PAVehiclesPanelSet.pcf: line 104, column 46
    function available_39 () : java.lang.Boolean {
      return selectedVehicle != null
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PAVehiclesPanelSet.pcf: line 104, column 46
    function def_onEnter_41 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(selectedVehicle, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PAVehiclesPanelSet.pcf: line 113, column 116
    function def_onEnter_43 (def :  pcf.PersonalAuto_VehicleDV) : void {
      def.onEnter(selectedVehicle, policyPeriod, line, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PAVehiclesPanelSet.pcf: line 122, column 50
    function def_onEnter_46 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.onEnter(selectedVehicle, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PAVehiclesPanelSet.pcf: line 104, column 46
    function def_refreshVariables_42 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(selectedVehicle, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PAVehiclesPanelSet.pcf: line 113, column 116
    function def_refreshVariables_44 (def :  pcf.PersonalAuto_VehicleDV) : void {
      def.refreshVariables(selectedVehicle, policyPeriod, line, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PAVehiclesPanelSet.pcf: line 122, column 50
    function def_refreshVariables_47 (def :  pcf.AdditionalInterestDetailsDV) : void {
      def.refreshVariables(selectedVehicle, openForEdit)
    }
    
    // 'editable' attribute on RowIterator at PAVehiclesPanelSet.pcf: line 45, column 50
    function editable_9 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'sortBy' attribute on TextCell (id=VehicleNumber_Cell) at PAVehiclesPanelSet.pcf: line 56, column 48
    function sortValue_0 (vehicle :  entity.PersonalVehicle) : java.lang.Object {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at PAVehiclesPanelSet.pcf: line 62, column 50
    function sortValue_1 (vehicle :  entity.PersonalVehicle) : java.lang.Object {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on TextCell (id=Year_Cell) at PAVehiclesPanelSet.pcf: line 68, column 48
    function sortValue_2 (vehicle :  entity.PersonalVehicle) : java.lang.Object {
      return vehicle.Year
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at PAVehiclesPanelSet.pcf: line 73, column 39
    function sortValue_3 (vehicle :  entity.PersonalVehicle) : java.lang.Object {
      return vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at PAVehiclesPanelSet.pcf: line 78, column 40
    function sortValue_4 (vehicle :  entity.PersonalVehicle) : java.lang.Object {
      return vehicle.Model
    }
    
    // 'value' attribute on TypeKeyCell (id=BodyType_Cell) at PAVehiclesPanelSet.pcf: line 84, column 47
    function sortValue_5 (vehicle :  entity.PersonalVehicle) : java.lang.Object {
      return vehicle.BodyType
    }
    
    // 'value' attribute on TextCell (id=Vin_Cell) at PAVehiclesPanelSet.pcf: line 89, column 38
    function sortValue_6 (vehicle :  entity.PersonalVehicle) : java.lang.Object {
      return vehicle.Vin
    }
    
    // 'value' attribute on TypeKeyCell (id=VehicleCoverageCurrency_Cell) at PAVehiclesPanelSet.pcf: line 96, column 75
    function sortValue_7 (vehicle :  entity.PersonalVehicle) : java.lang.Object {
      return vehicle.PreferredCoverageCurrency
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at PAVehiclesPanelSet.pcf: line 45, column 50
    function toCreateAndAdd_36 () : entity.PersonalVehicle {
      return line.createAndAddVehicle()
    }
    
    // 'toRemove' attribute on RowIterator at PAVehiclesPanelSet.pcf: line 45, column 50
    function toRemove_37 (vehicle :  entity.PersonalVehicle) : void {
      line.removeVehicle(vehicle)
    }
    
    // 'value' attribute on RowIterator at PAVehiclesPanelSet.pcf: line 45, column 50
    function value_38 () : entity.PersonalVehicle[] {
      return line.Vehicles
    }
    
    // 'visible' attribute on TypeKeyCell (id=VehicleCoverageCurrency_Cell) at PAVehiclesPanelSet.pcf: line 96, column 75
    function visible_8 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get selectedVehicle () : PersonalVehicle {
      return getCurrentSelection(1) as PersonalVehicle
    }
    
    property set selectedVehicle ($arg :  PersonalVehicle) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}