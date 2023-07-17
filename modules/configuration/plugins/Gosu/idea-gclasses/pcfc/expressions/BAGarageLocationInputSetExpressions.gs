package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BAGarageLocationInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BAGarageLocationInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BAGarageLocationInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BAGarageLocationInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewGarageLocation) at BAGarageLocationInputSet.pcf: line 39, column 205
    function action_2 () : void {
      LocationPopup.push(null, null, policyPeriod, openForEdit, true, policyPeriod.BusinessAutoLine.SupportsNonSpecificLocations)
    }
    
    // 'action' attribute on PickerMenuItem (id=EditGarageLocation) at BAGarageLocationInputSet.pcf: line 45, column 45
    function action_6 () : void {
      LocationPopup.push(null, vehicle.Location, policyPeriod, openForEdit, true, policyPeriod.BusinessAutoLine.SupportsNonSpecificLocations)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewGarageLocation) at BAGarageLocationInputSet.pcf: line 39, column 205
    function action_dest_3 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, null, policyPeriod, openForEdit, true, policyPeriod.BusinessAutoLine.SupportsNonSpecificLocations)
    }
    
    // 'action' attribute on PickerMenuItem (id=EditGarageLocation) at BAGarageLocationInputSet.pcf: line 45, column 45
    function action_dest_7 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, vehicle.Location, policyPeriod, openForEdit, true, policyPeriod.BusinessAutoLine.SupportsNonSpecificLocations)
    }
    
    // 'value' attribute on RangeInput (id=BAGarageLocationInput_Input) at BAGarageLocationInputSet.pcf: line 34, column 42
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.AccountLocation = (__VALUE_TO_SET as entity.AccountLocation)
    }
    
    // 'initialValue' attribute on Variable at BAGarageLocationInputSet.pcf: line 23, column 60
    function initialValue_0 () : java.util.List<entity.AccountLocation> {
      return policyPeriod.getUnassignedAccountLocations()
    }
    
    // 'onChange' attribute on PostOnChange at BAGarageLocationInputSet.pcf: line 47, column 337
    function onChange_1 () : void {
      if (policyPeriod.OpenForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages(policyPeriod.BusinessAutoLine.Vehicles, jobWizardHelper); gw.web.productmodel.ProductModelSyncIssuesHandler.syncModifiers(policyPeriod.BusinessAutoLine.Vehicles, jobWizardHelper); vehicle.updateStateValueForModifiers()}
    }
    
    // 'onPick' attribute on PickerMenuItem (id=NewGarageLocation) at BAGarageLocationInputSet.pcf: line 39, column 205
    function onPick_4 (PickedValue :  PolicyLocation) : void {
      vehicle.Location = PickedValue; if (policyPeriod.OpenForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncCoverages(policyPeriod.BusinessAutoLine.Vehicles, jobWizardHelper)}
    }
    
    // 'optionGroupLabel' attribute on RangeInput (id=BAGarageLocationInput_Input) at BAGarageLocationInputSet.pcf: line 34, column 42
    function optionGroupLabel_12 (VALUE :  entity.AccountLocation) : java.lang.String {
      return policyPeriod.getPolicyLocation(VALUE) != null ? DisplayKey.get("Web.Policy.LocationContainer.Location.ExistingGarageLocations") : DisplayKey.get("Web.Policy.LocationContainer.Location.AccountLocations")
    }
    
    // 'optionLabel' attribute on RangeInput (id=BAGarageLocationInput_Input) at BAGarageLocationInputSet.pcf: line 34, column 42
    function optionLabel_13 (VALUE :  entity.AccountLocation) : java.lang.String {
      return policyPeriod.getPolicyLocationOptionDisplayName(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=BAGarageLocationInput_Input) at BAGarageLocationInputSet.pcf: line 34, column 42
    function valueRange_14 () : java.lang.Object {
      return policyPeriod.Policy.Account.AccountLocations
    }
    
    // 'value' attribute on RangeInput (id=BAGarageLocationInput_Input) at BAGarageLocationInputSet.pcf: line 34, column 42
    function valueRoot_11 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on RangeInput (id=BAGarageLocationInput_Input) at BAGarageLocationInputSet.pcf: line 34, column 42
    function value_9 () : entity.AccountLocation {
      return vehicle.AccountLocation
    }
    
    // 'valueRange' attribute on RangeInput (id=BAGarageLocationInput_Input) at BAGarageLocationInputSet.pcf: line 34, column 42
    function verifyValueRangeIsAllowedType_15 ($$arg :  entity.AccountLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BAGarageLocationInput_Input) at BAGarageLocationInputSet.pcf: line 34, column 42
    function verifyValueRangeIsAllowedType_15 ($$arg :  gw.api.database.IQueryBeanResult<entity.AccountLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BAGarageLocationInput_Input) at BAGarageLocationInputSet.pcf: line 34, column 42
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BAGarageLocationInput_Input) at BAGarageLocationInputSet.pcf: line 34, column 42
    function verifyValueRange_16 () : void {
      var __valueRangeArg = policyPeriod.Policy.Account.AccountLocations
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'visible' attribute on PickerMenuItem (id=EditGarageLocation) at BAGarageLocationInputSet.pcf: line 45, column 45
    function visible_5 () : java.lang.Boolean {
      return vehicle.Location != null
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
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
    
    property get unassignedAccountLocations () : java.util.List<entity.AccountLocation> {
      return getVariableValue("unassignedAccountLocations", 0) as java.util.List<entity.AccountLocation>
    }
    
    property set unassignedAccountLocations ($arg :  java.util.List<entity.AccountLocation>) {
      setVariableValue("unassignedAccountLocations", 0, $arg)
    }
    
    property get vehicle () : BusinessVehicle {
      return getRequireValue("vehicle", 0) as BusinessVehicle
    }
    
    property set vehicle ($arg :  BusinessVehicle) {
      setRequireValue("vehicle", 0, $arg)
    }
    
    
  }
  
  
}