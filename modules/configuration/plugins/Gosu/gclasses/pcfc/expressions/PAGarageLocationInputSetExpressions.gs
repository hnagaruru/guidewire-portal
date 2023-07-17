package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PAGarageLocationInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PAGarageLocationInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAGarageLocationInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PAGarageLocationInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewGarageLocation) at PAGarageLocationInputSet.pcf: line 33, column 201
    function action_1 () : void {
      LocationPopup.push(null, null, policyPeriod, openForEdit, true, policyPeriod.PersonalAutoLine.SupportsNonSpecificLocations)
    }
    
    // 'action' attribute on PickerMenuItem (id=EditGarageLocation) at PAGarageLocationInputSet.pcf: line 39, column 51
    function action_5 () : void {
      LocationPopup.push(null, vehicle.GarageLocation, policyPeriod, openForEdit, true, policyPeriod.PersonalAutoLine.SupportsNonSpecificLocations)
    }
    
    // 'action' attribute on PickerMenuItem (id=NewGarageLocation) at PAGarageLocationInputSet.pcf: line 33, column 201
    function action_dest_2 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, null, policyPeriod, openForEdit, true, policyPeriod.PersonalAutoLine.SupportsNonSpecificLocations)
    }
    
    // 'action' attribute on PickerMenuItem (id=EditGarageLocation) at PAGarageLocationInputSet.pcf: line 39, column 51
    function action_dest_6 () : pcf.api.Destination {
      return pcf.LocationPopup.createDestination(null, vehicle.GarageLocation, policyPeriod, openForEdit, true, policyPeriod.PersonalAutoLine.SupportsNonSpecificLocations)
    }
    
    // 'value' attribute on RangeInput (id=PAGarageLocationInput_Input) at PAGarageLocationInputSet.pcf: line 28, column 29
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.AccountLocation = (__VALUE_TO_SET as entity.AccountLocation)
    }
    
    // 'onChange' attribute on PostOnChange at PAGarageLocationInputSet.pcf: line 41, column 115
    function onChange_0 () : void {
      gw.lob.pa.PAWizardStepHelper.onGarageLocationChange({vehicle}, policyPeriod, jobWizardHelper)
    }
    
    // 'onPick' attribute on PickerMenuItem (id=NewGarageLocation) at PAGarageLocationInputSet.pcf: line 33, column 201
    function onPick_3 (PickedValue :  PolicyLocation) : void {
      vehicle.GarageLocation = PickedValue; gw.lob.pa.PAWizardStepHelper.onGarageLocationChange( new Modifiable[] {policyPeriod.PersonalAutoLine, vehicle}, policyPeriod, jobWizardHelper) 
    }
    
    // 'onPick' attribute on PickerMenuItem (id=EditGarageLocation) at PAGarageLocationInputSet.pcf: line 39, column 51
    function onPick_7 (PickedValue :  PolicyLocation) : void {
      vehicle.GarageLocation = PickedValue; gw.lob.pa.PAWizardStepHelper.onGarageLocationChange(findModifiablesToSyncOnEdit(), policyPeriod, jobWizardHelper)
    }
    
    // 'optionLabel' attribute on RangeInput (id=PAGarageLocationInput_Input) at PAGarageLocationInputSet.pcf: line 28, column 29
    function optionLabel_12 (VALUE :  entity.AccountLocation) : java.lang.String {
      return policyPeriod.getPolicyLocationOptionDisplayName(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=PAGarageLocationInput_Input) at PAGarageLocationInputSet.pcf: line 28, column 29
    function valueRange_13 () : java.lang.Object {
      return policyPeriod.Policy.Account.AccountLocations
    }
    
    // 'value' attribute on RangeInput (id=PAGarageLocationInput_Input) at PAGarageLocationInputSet.pcf: line 28, column 29
    function valueRoot_11 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextInput (id=PAGarageLocationReadonly_Input) at PAGarageLocationInputSet.pcf: line 47, column 34
    function value_19 () : java.lang.String {
      return vehicle.GarageLocation.LocationNum + ": " + vehicle.GarageLocation.CompactName
    }
    
    // 'value' attribute on RangeInput (id=PAGarageLocationInput_Input) at PAGarageLocationInputSet.pcf: line 28, column 29
    function value_9 () : entity.AccountLocation {
      return vehicle.AccountLocation
    }
    
    // 'valueRange' attribute on RangeInput (id=PAGarageLocationInput_Input) at PAGarageLocationInputSet.pcf: line 28, column 29
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.AccountLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PAGarageLocationInput_Input) at PAGarageLocationInputSet.pcf: line 28, column 29
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.AccountLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PAGarageLocationInput_Input) at PAGarageLocationInputSet.pcf: line 28, column 29
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PAGarageLocationInput_Input) at PAGarageLocationInputSet.pcf: line 28, column 29
    function verifyValueRange_15 () : void {
      var __valueRangeArg = policyPeriod.Policy.Account.AccountLocations
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=PAGarageLocationReadonly_Input) at PAGarageLocationInputSet.pcf: line 47, column 34
    function visible_18 () : java.lang.Boolean {
      return not openForEdit
    }
    
    // 'visible' attribute on PickerMenuItem (id=EditGarageLocation) at PAGarageLocationInputSet.pcf: line 39, column 51
    function visible_4 () : java.lang.Boolean {
      return vehicle.GarageLocation != null
    }
    
    // 'visible' attribute on RangeInput (id=PAGarageLocationInput_Input) at PAGarageLocationInputSet.pcf: line 28, column 29
    function visible_8 () : java.lang.Boolean {
      return openForEdit
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
    
    property get vehicle () : PersonalVehicle {
      return getRequireValue("vehicle", 0) as PersonalVehicle
    }
    
    property set vehicle ($arg :  PersonalVehicle) {
      setRequireValue("vehicle", 0, $arg)
    }
    
    function findModifiablesToSyncOnEdit() : Modifiable[] {
      var modifiables = new java.util.ArrayList<Modifiable>()
      modifiables.add(policyPeriod.PersonalAutoLine)
      modifiables.addAll(policyPeriod.PersonalAutoLine.Vehicles.where(\v -> v.GarageLocation == vehicle.GarageLocation).toList())
      return modifiables.toTypedArray()
    }
    
    
  }
  
  
}