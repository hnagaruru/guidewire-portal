package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/MotorVehicleRecordSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MotorVehicleRecordSummaryExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/MotorVehicleRecordSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends MotorVehicleRecordSummaryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=MVRReportButton_Input) at MotorVehicleRecordSummary.pcf: line 106, column 107
    function action_46 () : void {
      DriverMVRInfoPopup.push({selectedDriverRecentMVROrder})
    }
    
    // 'action' attribute on ButtonInput (id=MVRReportButton_Input) at MotorVehicleRecordSummary.pcf: line 106, column 107
    function action_dest_47 () : pcf.api.Destination {
      return pcf.DriverMVRInfoPopup.createDestination({selectedDriverRecentMVROrder})
    }
    
    // 'available' attribute on ButtonInput (id=MVRReportButton_Input) at MotorVehicleRecordSummary.pcf: line 106, column 107
    function available_45 () : java.lang.Boolean {
      return mvrAvailable(selectedDriverRecentMVROrder)
    }
    
    // 'initialValue' attribute on Variable at MotorVehicleRecordSummary.pcf: line 92, column 53
    function initialValue_43 () : gw.api.motorvehiclerecord.IMVROrder {
      return selectedDriver.PolicyDriverMVR != null ? selectedDriver.PolicyDriverMVR.getMVRDetails() : null
    }
    
    // 'visible' attribute on Label at MotorVehicleRecordSummary.pcf: line 101, column 73
    function visible_44 () : java.lang.Boolean {
      return mvrUnavailable(selectedDriverRecentMVROrder)
    }
    
    property get selectedDriverRecentMVROrder () : gw.api.motorvehiclerecord.IMVROrder {
      return getVariableValue("selectedDriverRecentMVROrder", 1) as gw.api.motorvehiclerecord.IMVROrder
    }
    
    property set selectedDriverRecentMVROrder ($arg :  gw.api.motorvehiclerecord.IMVROrder) {
      setVariableValue("selectedDriverRecentMVROrder", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/submission/MotorVehicleRecordSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at MotorVehicleRecordSummary.pcf: line 28, column 33
    function initialValue_11 () : entity.Person {
      return policyDriver.AccountContactRole.AccountContact.Contact as Person
    }
    
    // 'initialValue' attribute on Variable at MotorVehicleRecordSummary.pcf: line 33, column 27
    function initialValue_12 () : boolean {
      return policyDriver.PolicyDriverMVR.OrderStatus == typekey.MVRStatus.TC_RECEIVED
    }
    
    // RowIterator (id=policyDriverIterator) at MotorVehicleRecordSummary.pcf: line 23, column 43
    function initializeVariables_41 () : void {
        policyDriverPerson = policyDriver.AccountContactRole.AccountContact.Contact as Person;
  mvrReceived = policyDriver.PolicyDriverMVR.OrderStatus == typekey.MVRStatus.TC_RECEIVED;

    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at MotorVehicleRecordSummary.pcf: line 38, column 47
    function valueRoot_14 () : java.lang.Object {
      return policyDriver
    }
    
    // 'value' attribute on TypeKeyCell (id=Gender_Cell) at MotorVehicleRecordSummary.pcf: line 43, column 45
    function valueRoot_17 () : java.lang.Object {
      return policyDriverPerson
    }
    
    // 'value' attribute on TextCell (id=NumAccidents_Cell) at MotorVehicleRecordSummary.pcf: line 66, column 44
    function valueRoot_30 () : java.lang.Object {
      return policyDriver.PolicyDriverMVR
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at MotorVehicleRecordSummary.pcf: line 38, column 47
    function value_13 () : java.lang.String {
      return policyDriver.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=Gender_Cell) at MotorVehicleRecordSummary.pcf: line 43, column 45
    function value_16 () : typekey.GenderType {
      return policyDriverPerson.Gender
    }
    
    // 'value' attribute on TextCell (id=Age_Cell) at MotorVehicleRecordSummary.pcf: line 48, column 117
    function value_19 () : java.lang.String {
      return policyDriverPerson.DateOfBirth != null ? String.valueOf(policyDriverPerson.Age) : ""
    }
    
    // 'value' attribute on TypeKeyCell (id=LicenseState_Cell) at MotorVehicleRecordSummary.pcf: line 53, column 47
    function value_21 () : typekey.Jurisdiction {
      return policyDriver.LicenseState
    }
    
    // 'value' attribute on TextCell (id=MVRStatus_Cell) at MotorVehicleRecordSummary.pcf: line 57, column 50
    function value_24 () : java.lang.String {
      return policyDriver.MVROrderStatus
    }
    
    // 'value' attribute on DateCell (id=MVRDate_Cell) at MotorVehicleRecordSummary.pcf: line 61, column 83
    function value_27 () : java.util.Date {
      return mvrReceived ? policyDriver.PolicyDriverMVR.StatusDate : null
    }
    
    // 'value' attribute on TextCell (id=NumAccidents_Cell) at MotorVehicleRecordSummary.pcf: line 66, column 44
    function value_29 () : java.lang.Integer {
      return policyDriver.PolicyDriverMVR.NumberOfAccidents
    }
    
    // 'value' attribute on TextCell (id=NumViolations_Cell) at MotorVehicleRecordSummary.pcf: line 71, column 44
    function value_32 () : java.lang.Integer {
      return policyDriver.PolicyDriverMVR.NumberOfViolations
    }
    
    // 'value' attribute on TextCell (id=Points_Cell) at MotorVehicleRecordSummary.pcf: line 76, column 44
    function value_35 () : java.lang.Integer {
      return policyDriver.PolicyDriverMVR.Points
    }
    
    // 'value' attribute on TextCell (id=DoNotOrderMVR_Cell) at MotorVehicleRecordSummary.pcf: line 82, column 56
    function value_38 () : java.lang.String {
      return policyDriver.DoNotOrderMVRDisplay
    }
    
    property get mvrReceived () : boolean {
      return getVariableValue("mvrReceived", 2) as java.lang.Boolean
    }
    
    property set mvrReceived ($arg :  boolean) {
      setVariableValue("mvrReceived", 2, $arg)
    }
    
    property get policyDriver () : entity.PolicyDriver {
      return getIteratedValue(2) as entity.PolicyDriver
    }
    
    property get policyDriverPerson () : entity.Person {
      return getVariableValue("policyDriverPerson", 2) as entity.Person
    }
    
    property set policyDriverPerson ($arg :  entity.Person) {
      setVariableValue("policyDriverPerson", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/submission/MotorVehicleRecordSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends MotorVehicleRecordSummaryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at MotorVehicleRecordSummary.pcf: line 16, column 39
    function initialValue_0 () : entity.PolicyDriver[] {
      return policyPeriod.PersonalAutoLine.PolicyDrivers
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at MotorVehicleRecordSummary.pcf: line 38, column 47
    function sortValue_1 (policyDriver :  entity.PolicyDriver) : java.lang.Object {
      return policyDriver.DisplayName
    }
    
    // 'value' attribute on TextCell (id=DoNotOrderMVR_Cell) at MotorVehicleRecordSummary.pcf: line 82, column 56
    function sortValue_10 (policyDriver :  entity.PolicyDriver) : java.lang.Object {
      return policyDriver.DoNotOrderMVRDisplay
    }
    
    // 'value' attribute on TypeKeyCell (id=Gender_Cell) at MotorVehicleRecordSummary.pcf: line 43, column 45
    function sortValue_2 (policyDriver :  entity.PolicyDriver) : java.lang.Object {
      var policyDriverPerson : entity.Person = (policyDriver.AccountContactRole.AccountContact.Contact as Person)
var mvrReceived : boolean = (policyDriver.PolicyDriverMVR.OrderStatus == typekey.MVRStatus.TC_RECEIVED)
return policyDriverPerson.Gender
    }
    
    // 'value' attribute on TextCell (id=Age_Cell) at MotorVehicleRecordSummary.pcf: line 48, column 117
    function sortValue_3 (policyDriver :  entity.PolicyDriver) : java.lang.Object {
      var policyDriverPerson : entity.Person = (policyDriver.AccountContactRole.AccountContact.Contact as Person)
var mvrReceived : boolean = (policyDriver.PolicyDriverMVR.OrderStatus == typekey.MVRStatus.TC_RECEIVED)
return policyDriverPerson.DateOfBirth != null ? String.valueOf(policyDriverPerson.Age) : ""
    }
    
    // 'value' attribute on TypeKeyCell (id=LicenseState_Cell) at MotorVehicleRecordSummary.pcf: line 53, column 47
    function sortValue_4 (policyDriver :  entity.PolicyDriver) : java.lang.Object {
      return policyDriver.LicenseState
    }
    
    // 'value' attribute on TextCell (id=MVRStatus_Cell) at MotorVehicleRecordSummary.pcf: line 57, column 50
    function sortValue_5 (policyDriver :  entity.PolicyDriver) : java.lang.Object {
      return policyDriver.MVROrderStatus
    }
    
    // 'value' attribute on DateCell (id=MVRDate_Cell) at MotorVehicleRecordSummary.pcf: line 61, column 83
    function sortValue_6 (policyDriver :  entity.PolicyDriver) : java.lang.Object {
      var policyDriverPerson : entity.Person = (policyDriver.AccountContactRole.AccountContact.Contact as Person)
var mvrReceived : boolean = (policyDriver.PolicyDriverMVR.OrderStatus == typekey.MVRStatus.TC_RECEIVED)
return mvrReceived ? policyDriver.PolicyDriverMVR.StatusDate : null
    }
    
    // 'value' attribute on TextCell (id=NumAccidents_Cell) at MotorVehicleRecordSummary.pcf: line 66, column 44
    function sortValue_7 (policyDriver :  entity.PolicyDriver) : java.lang.Object {
      return policyDriver.PolicyDriverMVR.NumberOfAccidents
    }
    
    // 'value' attribute on TextCell (id=NumViolations_Cell) at MotorVehicleRecordSummary.pcf: line 71, column 44
    function sortValue_8 (policyDriver :  entity.PolicyDriver) : java.lang.Object {
      return policyDriver.PolicyDriverMVR.NumberOfViolations
    }
    
    // 'value' attribute on TextCell (id=Points_Cell) at MotorVehicleRecordSummary.pcf: line 76, column 44
    function sortValue_9 (policyDriver :  entity.PolicyDriver) : java.lang.Object {
      return policyDriver.PolicyDriverMVR.Points
    }
    
    // 'value' attribute on RowIterator (id=policyDriverIterator) at MotorVehicleRecordSummary.pcf: line 23, column 43
    function value_42 () : entity.PolicyDriver[] {
      return policyDrivers
    }
    
    property get policyDrivers () : entity.PolicyDriver[] {
      return getVariableValue("policyDrivers", 1) as entity.PolicyDriver[]
    }
    
    property set policyDrivers ($arg :  entity.PolicyDriver[]) {
      setVariableValue("policyDrivers", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/submission/MotorVehicleRecordSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MotorVehicleRecordSummaryExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get selectedDriver () : PolicyDriver {
      return getCurrentSelection(0) as PolicyDriver
    }
    
    property set selectedDriver ($arg :  PolicyDriver) {
      setCurrentSelection(0, $arg)
    }
    
    function mvrUnavailable(mvrOrder : gw.api.motorvehiclerecord.IMVROrder) : boolean {
      return mvrOrder.OrderStatus == typekey.MVRStatus.TC_ORDERED
    }
    
    function mvrAvailable(mvrOrder : gw.api.motorvehiclerecord.IMVROrder) : boolean {
      return mvrOrder.OrderStatus == typekey.MVRStatus.TC_RECEIVED
    }
    
    
  }
  
  
}