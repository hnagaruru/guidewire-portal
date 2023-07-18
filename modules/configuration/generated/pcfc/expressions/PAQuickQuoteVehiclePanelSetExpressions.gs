package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PAQuickQuoteVehiclePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PAQuickQuoteVehiclePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAQuickQuoteVehiclePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PAQuickQuoteVehiclePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddVehicleButton) at PAQuickQuoteVehiclePanelSet.pcf: line 36, column 90
    function action_1 () : void {
      paLine.addAndNumberVehicle(vehicle, vehicleNum)
    }
    
    // 'action' attribute on ToolbarButton (id=RemoveVehicleButton) at PAQuickQuoteVehiclePanelSet.pcf: line 42, column 62
    function action_3 () : void {
      vehicle.remove()
    }
    
    // 'available' attribute on ToolbarButton (id=RemoveVehicleButton) at PAQuickQuoteVehiclePanelSet.pcf: line 42, column 62
    function available_2 () : java.lang.Boolean {
      return vehicle != null
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=CostNew_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 81, column 38
    function currency_34 () : typekey.Currency {
      return vehicle.PreferredCoverageCurrency
    }
    
    // 'def' attribute on PanelRef at PAQuickQuoteVehiclePanelSet.pcf: line 50, column 34
    function def_onEnter_6 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.onEnter(vehicle, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on PanelRef at PAQuickQuoteVehiclePanelSet.pcf: line 50, column 34
    function def_refreshVariables_7 (def :  pcf.PreferredCoverageCurrencyPanelSet) : void {
      def.refreshVariables(vehicle, openForEdit, jobWizardHelper)
    }
    
    // 'value' attribute on TextInput (id=Year_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 61, column 44
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.Year = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Make_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 67, column 35
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.Make = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Model_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 73, column 36
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.Model = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CostNew_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 81, column 38
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.CostNew = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on RangeInput (id=PrimaryDriver_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 90, column 36
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.QuickQuotePrimaryDriver = (__VALUE_TO_SET as entity.PolicyDriver)
    }
    
    // 'initialValue' attribute on Variable at PAQuickQuoteVehiclePanelSet.pcf: line 26, column 28
    function initialValue_0 () : PolicyDriver {
      return vehicle != null ? vehicle.Drivers*.PolicyDriver.first() : null
    }
    
    // 'optionLabel' attribute on RangeInput (id=PrimaryDriver_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 90, column 36
    function optionLabel_42 (VALUE :  entity.PolicyDriver) : java.lang.String {
      return VALUE.QuickQuoteNumber.toString()
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryDriver_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 90, column 36
    function valueRange_43 () : java.lang.Object {
      return paLine.DriversForQuickQuote
    }
    
    // 'value' attribute on TextInput (id=Year_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 61, column 44
    function valueRoot_12 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextInput (id=Year_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 61, column 44
    function value_10 () : java.lang.Integer {
      return vehicle.Year
    }
    
    // 'value' attribute on TextInput (id=Make_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 67, column 35
    function value_17 () : java.lang.String {
      return vehicle.Make
    }
    
    // 'value' attribute on TextInput (id=Model_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 73, column 36
    function value_24 () : java.lang.String {
      return vehicle.Model
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CostNew_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 81, column 38
    function value_31 () : gw.pl.currency.MonetaryAmount {
      return vehicle.CostNew
    }
    
    // 'value' attribute on RangeInput (id=PrimaryDriver_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 90, column 36
    function value_39 () : entity.PolicyDriver {
      return vehicle.QuickQuotePrimaryDriver
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryDriver_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 90, column 36
    function verifyValueRangeIsAllowedType_44 ($$arg :  entity.PolicyDriver[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryDriver_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 90, column 36
    function verifyValueRangeIsAllowedType_44 ($$arg :  gw.api.database.IQueryBeanResult<entity.PolicyDriver>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryDriver_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 90, column 36
    function verifyValueRangeIsAllowedType_44 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryDriver_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 90, column 36
    function verifyValueRange_45 () : void {
      var __valueRangeArg = paLine.DriversForQuickQuote
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_44(__valueRangeArg)
    }
    
    // 'visible' attribute on Toolbar (id=DriverToolbar) at PAQuickQuoteVehiclePanelSet.pcf: line 30, column 31
    function visible_4 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'visible' attribute on TextInput (id=PrimaryDriverName_Input) at PAQuickQuoteVehiclePanelSet.pcf: line 96, column 40
    function visible_49 () : java.lang.Boolean {
      return not openForEdit
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
    
    property get paLine () : entity.PersonalAutoLine {
      return getRequireValue("paLine", 0) as entity.PersonalAutoLine
    }
    
    property set paLine ($arg :  entity.PersonalAutoLine) {
      setRequireValue("paLine", 0, $arg)
    }
    
    property get primaryDriver () : PolicyDriver {
      return getVariableValue("primaryDriver", 0) as PolicyDriver
    }
    
    property set primaryDriver ($arg :  PolicyDriver) {
      setVariableValue("primaryDriver", 0, $arg)
    }
    
    property get vehicle () : PersonalVehicle {
      return getRequireValue("vehicle", 0) as PersonalVehicle
    }
    
    property set vehicle ($arg :  PersonalVehicle) {
      setRequireValue("vehicle", 0, $arg)
    }
    
    property get vehicleNum () : int {
      return getRequireValue("vehicleNum", 0) as java.lang.Integer
    }
    
    property set vehicleNum ($arg :  int) {
      setRequireValue("vehicleNum", 0, $arg)
    }
    
    
  }
  
  
}