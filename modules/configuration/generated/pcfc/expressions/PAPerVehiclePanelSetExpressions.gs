package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PAPerVehiclePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PAPerVehiclePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAPerVehiclePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at PAPerVehiclePanelSet.pcf: line 56, column 35
    function valueRoot_9 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PAPerVehiclePanelSet.pcf: line 63, column 35
    function value_11 () : java.lang.String {
      return getVehicleDescription(vehicle)
    }
    
    // 'value' attribute on TextCell (id=Comprehensive_Cell) at PAPerVehiclePanelSet.pcf: line 70, column 35
    function value_13 () : java.lang.String {
      return vehicle.PAComprehensiveCov.PACompDeductibleTerm.Value != null ? vehicle.PAComprehensiveCov.PACompDeductibleTerm.DisplayValue : DisplayKey.get("Web.PolicyLine.Vehicle.NotSelected")
    }
    
    // 'value' attribute on TextCell (id=Collision_Cell) at PAPerVehiclePanelSet.pcf: line 77, column 35
    function value_15 () : java.lang.String {
      return vehicle.PACollisionCov.PACollDeductibleTerm.Value != null ? vehicle.PACollisionCov.PACollDeductibleTerm.DisplayValue : DisplayKey.get("Web.PolicyLine.Vehicle.Collision.NotSelected")
    }
    
    // 'value' attribute on TextCell (id=TowingLabor_Cell) at PAPerVehiclePanelSet.pcf: line 84, column 35
    function value_17 () : java.lang.String {
      return vehicle.PATowingLaborCovExists ? DisplayKey.get("Web.PolicyLine.Vehicle.TowingLabor.Selected") : DisplayKey.get("Web.PolicyLine.Vehicle.TowingLabor.NotSelected")
    }
    
    // 'value' attribute on TextCell (id=Rental_Cell) at PAPerVehiclePanelSet.pcf: line 91, column 35
    function value_19 () : java.lang.String {
      return vehicle.PARentalCov.PARentalTerm.PackageValue.Description != null ? vehicle.PARentalCov.PARentalTerm.PackageValue.Description : DisplayKey.get("Web.PolicyLine.Vehicle.Rental.NotSelected")
    }
    
    // 'value' attribute on TypeKeyCell (id=VehiclePreferredCoverageCurrency_Cell) at PAPerVehiclePanelSet.pcf: line 100, column 35
    function value_21 () : typekey.Currency {
      return vehicle.PreferredCoverageCurrency
    }
    
    // 'value' attribute on TextCell (id=VehicleNumber_Cell) at PAPerVehiclePanelSet.pcf: line 56, column 35
    function value_8 () : java.lang.Integer {
      return vehicle.VehicleNumber
    }
    
    // 'visible' attribute on TypeKeyCell (id=VehiclePreferredCoverageCurrency_Cell) at PAPerVehiclePanelSet.pcf: line 100, column 35
    function visible_23 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get vehicle () : entity.PersonalVehicle {
      return getIteratedValue(2) as entity.PersonalVehicle
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAPerVehiclePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends PAPerVehiclePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PAPerVehiclePanelSet.pcf: line 106, column 54
    function def_onEnter_26 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(selectedVehicle, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PAPerVehiclePanelSet.pcf: line 115, column 93
    function def_onEnter_28 (def :  pcf.PersonalAuto_VehicleCoverageDetailDV) : void {
      def.onEnter(selectedVehicle, openForEdit)
    }
    
    // 'def' attribute on PanelRef (id=PreferredCoverageCurrencySelectorRef) at PAPerVehiclePanelSet.pcf: line 106, column 54
    function def_refreshVariables_27 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(selectedVehicle, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PAPerVehiclePanelSet.pcf: line 115, column 93
    function def_refreshVariables_29 (def :  pcf.PersonalAuto_VehicleCoverageDetailDV) : void {
      def.refreshVariables(selectedVehicle, openForEdit)
    }
    
    // 'editable' attribute on RowIterator at PAPerVehiclePanelSet.pcf: line 46, column 50
    function editable_7 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'sortBy' attribute on TextCell (id=VehicleNumber_Cell) at PAPerVehiclePanelSet.pcf: line 56, column 35
    function sortValue_5 (vehicle :  entity.PersonalVehicle) : java.lang.Object {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on RowIterator at PAPerVehiclePanelSet.pcf: line 46, column 50
    function value_25 () : entity.PersonalVehicle[] {
      return paLine.Vehicles
    }
    
    // 'visible' attribute on TypeKeyCell (id=VehiclePreferredCoverageCurrency_Cell) at PAPerVehiclePanelSet.pcf: line 100, column 35
    function visible_6 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get selectedVehicle () : PersonalVehicle {
      return getCurrentSelection(1) as PersonalVehicle
    }
    
    property set selectedVehicle ($arg :  PersonalVehicle) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAPerVehiclePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PAPerVehiclePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=CopyCoverages) at PAPerVehiclePanelSet.pcf: line 33, column 102
    function action_4 () : void {
      jobWizardHelper.validateAndSaveDraft(); CopyCoveragesPopup.push(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at PAPerVehiclePanelSet.pcf: line 19, column 45
    function initialValue_0 () : productmodel.PersonalAutoLine {
      return policyPeriod.PersonalAutoLine
    }
    
    // 'initialValue' attribute on Variable at PAPerVehiclePanelSet.pcf: line 23, column 63
    function initialValue_1 () : Type<gw.api.productmodel.CoveragePattern> {
      return gw.api.productmodel.CoveragePattern
    }
    
    // 'title' attribute on TitleBar at PAPerVehiclePanelSet.pcf: line 27, column 103
    function title_2 () : java.lang.String {
      return DisplayKey.get("Web.Policy.PA.PerVehicleCoveragesTitle", paLine.BaseState)
    }
    
    // 'visible' attribute on ToolbarButton (id=CopyCoverages) at PAPerVehiclePanelSet.pcf: line 33, column 102
    function visible_3 () : java.lang.Boolean {
      return openForEdit and policyPeriod.CanCopyCoverages and paLine.Vehicles.length > 1
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get paLine () : productmodel.PersonalAutoLine {
      return getVariableValue("paLine", 0) as productmodel.PersonalAutoLine
    }
    
    property set paLine ($arg :  productmodel.PersonalAutoLine) {
      setVariableValue("paLine", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get unavailableCoverages () : Type<gw.api.productmodel.CoveragePattern> {
      return getVariableValue("unavailableCoverages", 0) as Type<gw.api.productmodel.CoveragePattern>
    }
    
    property set unavailableCoverages ($arg :  Type<gw.api.productmodel.CoveragePattern>) {
      setVariableValue("unavailableCoverages", 0, $arg)
    }
    
    function getVehicleDescription(vehicle : PersonalVehicle) : String {
            return vehicle.Year + " " + vehicle.Make + " " + vehicle.Model   
    }
    
    
  }
  
  
}