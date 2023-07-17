package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PersonalAuto_AssignDriversInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PersonalAuto_AssignDriversInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PersonalAuto_AssignDriversInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends PersonalAuto_AssignDriversInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Driver_Cell) at PersonalAuto_AssignDriversInputSet.pcf: line 84, column 58
    function action_8 () : void {
      EditPolicyContactRolePopup.push(driver.PolicyDriver, openForEdit)
    }
    
    // 'action' attribute on TextCell (id=Driver_Cell) at PersonalAuto_AssignDriversInputSet.pcf: line 84, column 58
    function action_dest_9 () : pcf.api.Destination {
      return pcf.EditPolicyContactRolePopup.createDestination(driver.PolicyDriver, openForEdit)
    }
    
    // 'value' attribute on TextCell (id=Percentage_Cell) at PersonalAuto_AssignDriversInputSet.pcf: line 90, column 48
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.PercentageDriven = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at PersonalAuto_AssignDriversInputSet.pcf: line 84, column 58
    function valueRoot_11 () : java.lang.Object {
      return driver.PolicyDriver
    }
    
    // 'value' attribute on TextCell (id=Percentage_Cell) at PersonalAuto_AssignDriversInputSet.pcf: line 90, column 48
    function valueRoot_15 () : java.lang.Object {
      return driver
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at PersonalAuto_AssignDriversInputSet.pcf: line 84, column 58
    function value_10 () : java.lang.String {
      return driver.PolicyDriver.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Percentage_Cell) at PersonalAuto_AssignDriversInputSet.pcf: line 90, column 48
    function value_13 () : java.lang.Integer {
      return driver.PercentageDriven
    }
    
    property get driver () : entity.VehicleDriver {
      return getIteratedValue(1) as entity.VehicleDriver
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PersonalAuto_AssignDriversInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PersonalAuto_AssignDriversInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=Driver) at PersonalAuto_AssignDriversInputSet.pcf: line 47, column 69
    function label_1 () : java.lang.Object {
      return driver
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=Driver) at PersonalAuto_AssignDriversInputSet.pcf: line 47, column 69
    function toCreateAndAdd_2 (CheckedValues :  Object[]) : java.lang.Object {
      return vehicle.addPolicyDriver( driver )
    }
    
    property get driver () : entity.PolicyDriver {
      return getIteratedValue(1) as entity.PolicyDriver
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PersonalAuto_AssignDriversInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PersonalAuto_AssignDriversInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at PersonalAuto_AssignDriversInputSet.pcf: line 23, column 30
    function initialValue_0 () : PolicyDriver[] {
      return vehicle.AvailableDrivers
    }
    
    // '$$sumValue' attribute on RowIterator at PersonalAuto_AssignDriversInputSet.pcf: line 90, column 48
    function sumValueRoot_7 (driver :  entity.VehicleDriver) : java.lang.Object {
      return driver
    }
    
    // 'footerSumValue' attribute on RowIterator at PersonalAuto_AssignDriversInputSet.pcf: line 90, column 48
    function sumValue_6 (driver :  entity.VehicleDriver) : java.lang.Object {
      return driver.PercentageDriven
    }
    
    // 'toRemove' attribute on RowIterator at PersonalAuto_AssignDriversInputSet.pcf: line 77, column 48
    function toRemove_17 (driver :  entity.VehicleDriver) : void {
      vehicle.removeFromDrivers(driver)
    }
    
    // 'value' attribute on RowIterator at PersonalAuto_AssignDriversInputSet.pcf: line 77, column 48
    function value_18 () : entity.VehicleDriver[] {
      return vehicle.Drivers
    }
    
    // 'value' attribute on AddMenuItemIterator (id=DriverIterator) at PersonalAuto_AssignDriversInputSet.pcf: line 42, column 49
    function value_3 () : entity.PolicyDriver[] {
      return availableDrivers
    }
    
    // 'visible' attribute on AddButton (id=AddDriver) at PersonalAuto_AssignDriversInputSet.pcf: line 37, column 53
    function visible_4 () : java.lang.Boolean {
      return not(availableDrivers.IsEmpty)
    }
    
    // 'visible' attribute on ToolbarButton (id=DisabledAddDriverButton) at PersonalAuto_AssignDriversInputSet.pcf: line 54, column 49
    function visible_5 () : java.lang.Boolean {
      return availableDrivers.IsEmpty
    }
    
    property get availableDrivers () : PolicyDriver[] {
      return getVariableValue("availableDrivers", 0) as PolicyDriver[]
    }
    
    property set availableDrivers ($arg :  PolicyDriver[]) {
      setVariableValue("availableDrivers", 0, $arg)
    }
    
    property get openForEdit () : Boolean {
      return getRequireValue("openForEdit", 0) as Boolean
    }
    
    property set openForEdit ($arg :  Boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get personalAutoLine () : PersonalAutoLine {
      return getRequireValue("personalAutoLine", 0) as PersonalAutoLine
    }
    
    property set personalAutoLine ($arg :  PersonalAutoLine) {
      setRequireValue("personalAutoLine", 0, $arg)
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
    
    
  }
  
  
}