package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountContactInputSet.Driver.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountContactInputSet_DriverExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountContactInputSet.Driver.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountContactInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=MVRReportButton_Input) at AccountContactInputSet.Driver.pcf: line 72, column 99
    function action_33 () : void {
      DriverMVRInfoPopup.push(driverMVRs)
    }
    
    // 'action' attribute on ButtonInput (id=MVRReportButton_Input) at AccountContactInputSet.Driver.pcf: line 72, column 99
    function action_dest_34 () : pcf.api.Destination {
      return pcf.DriverMVRInfoPopup.createDestination(driverMVRs)
    }
    
    // 'available' attribute on ButtonInput (id=MVRReportButton_Input) at AccountContactInputSet.Driver.pcf: line 72, column 99
    function available_32 () : java.lang.Boolean {
      return mvrAvailable()
    }
    
    // 'value' attribute on TypeKeyInput (id=numberofaccidents_Input) at AccountContactInputSet.Driver.pcf: line 41, column 46
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.NumberofAccidents = (__VALUE_TO_SET as typekey.NumberOfAccidents)
    }
    
    // 'value' attribute on TypeKeyInput (id=numberofviolations_Input) at AccountContactInputSet.Driver.pcf: line 47, column 46
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.NumberofViolations = (__VALUE_TO_SET as typekey.NumberOfAccidents)
    }
    
    // 'value' attribute on BooleanRadioInput (id=student_Input) at AccountContactInputSet.Driver.pcf: line 52, column 31
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.Student = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=yearlicensed_Input) at AccountContactInputSet.Driver.pcf: line 58, column 38
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.YearLicensed = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=gooddriverdiscount_Input) at AccountContactInputSet.Driver.pcf: line 63, column 42
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.GoodDriverDiscount = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=datecompletedtrainingclass_Input) at AccountContactInputSet.Driver.pcf: line 29, column 50
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.DateCompletedTrainingClass = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=trainingclasstype_Input) at AccountContactInputSet.Driver.pcf: line 35, column 46
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.TrainingClassType = (__VALUE_TO_SET as typekey.TrainingClassType)
    }
    
    // 'initialValue' attribute on Variable at AccountContactInputSet.Driver.pcf: line 16, column 22
    function initialValue_0 () : Driver {
      return acctContactRole as Driver
    }
    
    // 'initialValue' attribute on Variable at AccountContactInputSet.Driver.pcf: line 20, column 48
    function initialValue_1 () : gw.lob.pa.mvr.InternalMVRService {
      return gw.lob.pa.mvr.InternalMVRService.getInstance()
    }
    
    // 'initialValue' attribute on Variable at AccountContactInputSet.Driver.pcf: line 24, column 53
    function initialValue_2 () : gw.api.motorvehiclerecord.IMVROrder[] {
      return mvrService.getAllExistingMVRs(((driver.AccountContact.Contact as Person).getMVRSearchCriteria()))
    }
    
    // 'value' attribute on DateInput (id=datecompletedtrainingclass_Input) at AccountContactInputSet.Driver.pcf: line 29, column 50
    function valueRoot_5 () : java.lang.Object {
      return driver
    }
    
    // 'value' attribute on TypeKeyInput (id=numberofaccidents_Input) at AccountContactInputSet.Driver.pcf: line 41, column 46
    function value_11 () : typekey.NumberOfAccidents {
      return driver.NumberofAccidents
    }
    
    // 'value' attribute on TypeKeyInput (id=numberofviolations_Input) at AccountContactInputSet.Driver.pcf: line 47, column 46
    function value_15 () : typekey.NumberOfAccidents {
      return driver.NumberofViolations
    }
    
    // 'value' attribute on BooleanRadioInput (id=student_Input) at AccountContactInputSet.Driver.pcf: line 52, column 31
    function value_19 () : java.lang.Boolean {
      return driver.Student
    }
    
    // 'value' attribute on TextInput (id=yearlicensed_Input) at AccountContactInputSet.Driver.pcf: line 58, column 38
    function value_23 () : java.lang.Integer {
      return driver.YearLicensed
    }
    
    // 'value' attribute on BooleanRadioInput (id=gooddriverdiscount_Input) at AccountContactInputSet.Driver.pcf: line 63, column 42
    function value_27 () : java.lang.Boolean {
      return driver.GoodDriverDiscount
    }
    
    // 'value' attribute on DateInput (id=datecompletedtrainingclass_Input) at AccountContactInputSet.Driver.pcf: line 29, column 50
    function value_3 () : java.util.Date {
      return driver.DateCompletedTrainingClass
    }
    
    // 'value' attribute on TypeKeyInput (id=trainingclasstype_Input) at AccountContactInputSet.Driver.pcf: line 35, column 46
    function value_7 () : typekey.TrainingClassType {
      return driver.TrainingClassType
    }
    
    // 'visible' attribute on Label at AccountContactInputSet.Driver.pcf: line 67, column 37
    function visible_31 () : java.lang.Boolean {
      return mvrUnavailable()
    }
    
    property get acctContactRole () : AccountContactRole {
      return getRequireValue("acctContactRole", 0) as AccountContactRole
    }
    
    property set acctContactRole ($arg :  AccountContactRole) {
      setRequireValue("acctContactRole", 0, $arg)
    }
    
    property get driver () : Driver {
      return getVariableValue("driver", 0) as Driver
    }
    
    property set driver ($arg :  Driver) {
      setVariableValue("driver", 0, $arg)
    }
    
    property get driverMVRs () : gw.api.motorvehiclerecord.IMVROrder[] {
      return getVariableValue("driverMVRs", 0) as gw.api.motorvehiclerecord.IMVROrder[]
    }
    
    property set driverMVRs ($arg :  gw.api.motorvehiclerecord.IMVROrder[]) {
      setVariableValue("driverMVRs", 0, $arg)
    }
    
    property get mvrService () : gw.lob.pa.mvr.InternalMVRService {
      return getVariableValue("mvrService", 0) as gw.lob.pa.mvr.InternalMVRService
    }
    
    property set mvrService ($arg :  gw.lob.pa.mvr.InternalMVRService) {
      setVariableValue("mvrService", 0, $arg)
    }
    
    function mvrUnavailable() : boolean {
      return driverMVRs == null or (driverMVRs.length == 1 and driverMVRs.first().getOrderStatus() == typekey.MVRStatus.TC_ORDERED) or driverMVRs.allMatch(\ m -> m.getOrderStatus() == typekey.MVRStatus.TC_ORDERED)
    }
    
    function mvrAvailable() : boolean {
      return driverMVRs != null and not driverMVRs.where(\ m -> m.getOrderStatus() == typekey.MVRStatus.TC_RECEIVED).IsEmpty
    }
    
    
  }
  
  
}