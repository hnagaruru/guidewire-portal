package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountContactDisplayCell.Driver.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountContactDisplayCell_DriverExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountContactDisplayCell.Driver.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountContactDisplayCellExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=MVRReportButton) at AccountContactDisplayCell.Driver.pcf: line 79, column 36
    function action_28 () : void {
      DriverMVRInfoPopup.push(driverMVRs)
    }
    
    // 'action' attribute on Link (id=editContactRole) at AccountContactDisplayCell.Driver.pcf: line 32, column 36
    function action_3 () : void {
      AccountContactRolePopup.push(acctContactRole)
    }
    
    // 'action' attribute on Link (id=MVRReportButton) at AccountContactDisplayCell.Driver.pcf: line 79, column 36
    function action_dest_29 () : pcf.api.Destination {
      return pcf.DriverMVRInfoPopup.createDestination(driverMVRs)
    }
    
    // 'action' attribute on Link (id=editContactRole) at AccountContactDisplayCell.Driver.pcf: line 32, column 36
    function action_dest_4 () : pcf.api.Destination {
      return pcf.AccountContactRolePopup.createDestination(acctContactRole)
    }
    
    // 'initialValue' attribute on Variable at AccountContactDisplayCell.Driver.pcf: line 15, column 22
    function initialValue_0 () : Driver {
      return acctContactRole as Driver
    }
    
    // 'initialValue' attribute on Variable at AccountContactDisplayCell.Driver.pcf: line 19, column 48
    function initialValue_1 () : gw.lob.pa.mvr.InternalMVRService {
      return gw.lob.pa.mvr.InternalMVRService.getInstance()
    }
    
    // 'initialValue' attribute on Variable at AccountContactDisplayCell.Driver.pcf: line 23, column 53
    function initialValue_2 () : gw.api.motorvehiclerecord.IMVROrder[] {
      return mvrService.getAllExistingMVRs(((driver.AccountContact.Contact as Person).getMVRSearchCriteria()))
    }
    
    // 'value' attribute on TextInput (id=datecompletedtrainingclass_Input) at AccountContactDisplayCell.Driver.pcf: line 38, column 37
    function valueRoot_7 () : java.lang.Object {
      return driver
    }
    
    // 'value' attribute on TextInput (id=numberofaccidents_Input) at AccountContactDisplayCell.Driver.pcf: line 48, column 48
    function value_12 () : typekey.NumberOfAccidents {
      return driver.NumberofAccidents
    }
    
    // 'value' attribute on TextInput (id=numberofviolations_Input) at AccountContactDisplayCell.Driver.pcf: line 53, column 48
    function value_15 () : typekey.NumberOfAccidents {
      return driver.NumberofViolations
    }
    
    // 'value' attribute on TextInput (id=student_Input) at AccountContactDisplayCell.Driver.pcf: line 58, column 40
    function value_18 () : java.lang.Boolean {
      return driver.Student
    }
    
    // 'value' attribute on TextInput (id=yearlicensed_Input) at AccountContactDisplayCell.Driver.pcf: line 63, column 40
    function value_21 () : java.lang.Integer {
      return driver.YearLicensed
    }
    
    // 'value' attribute on TextInput (id=gooddriverdiscount_Input) at AccountContactDisplayCell.Driver.pcf: line 67, column 169
    function value_24 () : java.lang.String {
      return driver.GoodDriverDiscount ? DisplayKey.get("Java.NameValueView.Boolean.True") : DisplayKey.get("Java.NameValueView.Boolean.False")
    }
    
    // 'value' attribute on TextInput (id=datecompletedtrainingclass_Input) at AccountContactDisplayCell.Driver.pcf: line 38, column 37
    function value_6 () : java.util.Date {
      return driver.DateCompletedTrainingClass
    }
    
    // 'value' attribute on TextInput (id=trainingclasstype_Input) at AccountContactDisplayCell.Driver.pcf: line 43, column 48
    function value_9 () : typekey.TrainingClassType {
      return driver.TrainingClassType
    }
    
    // 'visible' attribute on TextInput (id=norecordsonfile_Input) at AccountContactDisplayCell.Driver.pcf: line 72, column 37
    function visible_26 () : java.lang.Boolean {
      return mvrUnavailable()
    }
    
    // 'visible' attribute on ContentInput at AccountContactDisplayCell.Driver.pcf: line 74, column 34
    function visible_30 () : java.lang.Boolean {
      return mvrAvailable()
    }
    
    // 'visible' attribute on ContentInput at AccountContactDisplayCell.Driver.pcf: line 27, column 46
    function visible_5 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
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