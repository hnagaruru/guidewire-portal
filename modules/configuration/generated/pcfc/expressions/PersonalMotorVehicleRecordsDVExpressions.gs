package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PersonalMotorVehicleRecordsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PersonalMotorVehicleRecordsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PersonalMotorVehicleRecordsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PersonalMotorVehicleRecordsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=MVRReportButton_Input) at PersonalMotorVehicleRecordsDV.pcf: line 123, column 120
    function action_51 () : void {
      DriverMVRInfoPopup.push({mvrOrder})
    }
    
    // 'action' attribute on ButtonInput (id=MVRReportButton_Input) at PersonalMotorVehicleRecordsDV.pcf: line 123, column 120
    function action_dest_52 () : pcf.api.Destination {
      return pcf.DriverMVRInfoPopup.createDestination({mvrOrder})
    }
    
    // 'initialValue' attribute on Variable at PersonalMotorVehicleRecordsDV.pcf: line 17, column 50
    function initialValue_0 () : gw.api.motorvehiclerecord.IMVRData {
      return (mvrOrder != null and mvrOrder.MVRData.first() != null) ? mvrOrder.MVRData.first() : null
    }
    
    // 'initialValue' attribute on Variable at PersonalMotorVehicleRecordsDV.pcf: line 22, column 53
    function initialValue_1 () : gw.api.motorvehiclerecord.IMVRLicense {
      return mainMVR == null ? null : mainMVR.Licenses.firstWhere(\ l -> l.PrimaryLicense)
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at PersonalMotorVehicleRecordsDV.pcf: line 60, column 49
    function valueRoot_15 () : java.lang.Object {
      return primaryLicense
    }
    
    // 'value' attribute on DateInput (id=RequestedDate_Input) at PersonalMotorVehicleRecordsDV.pcf: line 117, column 27
    function valueRoot_47 () : java.lang.Object {
      return mvrOrder
    }
    
    // 'value' attribute on DateInput (id=DOB1_Input) at PersonalMotorVehicleRecordsDV.pcf: line 51, column 27
    function valueRoot_9 () : java.lang.Object {
      return mainMVR
    }
    
    // 'value' attribute on TypeKeyInput (id=Gender_Input) at PersonalMotorVehicleRecordsDV.pcf: line 56, column 43
    function value_11 () : typekey.GenderType {
      return mainMVR.Gender
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at PersonalMotorVehicleRecordsDV.pcf: line 60, column 49
    function value_14 () : java.lang.String {
      return primaryLicense.LicenseNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=LicenseState_Input) at PersonalMotorVehicleRecordsDV.pcf: line 65, column 38
    function value_17 () : typekey.State {
      return primaryLicense.LicenseState
    }
    
    // 'value' attribute on TextInput (id=LicenseClass_Input) at PersonalMotorVehicleRecordsDV.pcf: line 69, column 48
    function value_20 () : java.lang.String {
      return primaryLicense.LicenseClass
    }
    
    // 'value' attribute on TextInput (id=LicenseStatus_Input) at PersonalMotorVehicleRecordsDV.pcf: line 78, column 49
    function value_24 () : java.lang.String {
      return primaryLicense.LicenseStatus
    }
    
    // 'value' attribute on DateInput (id=LicenseOriginalIssuance_Input) at PersonalMotorVehicleRecordsDV.pcf: line 82, column 52
    function value_27 () : java.util.Date {
      return primaryLicense.OriginallyIssued
    }
    
    // 'value' attribute on DateInput (id=LicenseCurrentIssuance_Input) at PersonalMotorVehicleRecordsDV.pcf: line 86, column 46
    function value_30 () : java.util.Date {
      return primaryLicense.IssuedDate
    }
    
    // 'value' attribute on DateInput (id=LicenseExpiration_Input) at PersonalMotorVehicleRecordsDV.pcf: line 90, column 46
    function value_33 () : java.util.Date {
      return primaryLicense.ExpireDate
    }
    
    // 'value' attribute on DateInput (id=LicenseReinstatement_Input) at PersonalMotorVehicleRecordsDV.pcf: line 94, column 49
    function value_36 () : java.util.Date {
      return primaryLicense.ReinstateDate
    }
    
    // 'value' attribute on TextInput (id=YearsRequested_Input) at PersonalMotorVehicleRecordsDV.pcf: line 105, column 27
    function value_40 () : java.lang.Integer {
      return mainMVR.YearsRequested
    }
    
    // 'value' attribute on DateInput (id=ReportDate_Input) at PersonalMotorVehicleRecordsDV.pcf: line 110, column 27
    function value_43 () : java.util.Date {
      return mainMVR.ReportDate
    }
    
    // 'value' attribute on DateInput (id=RequestedDate_Input) at PersonalMotorVehicleRecordsDV.pcf: line 117, column 27
    function value_46 () : java.util.Date {
      return mvrOrder.ReportRequestedDate
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at PersonalMotorVehicleRecordsDV.pcf: line 46, column 27
    function value_6 () : java.lang.String {
      return getDriverName()
    }
    
    // 'value' attribute on DateInput (id=DOB1_Input) at PersonalMotorVehicleRecordsDV.pcf: line 51, column 27
    function value_8 () : java.util.Date {
      return mainMVR.DateOfBirth
    }
    
    // 'visible' attribute on Label at PersonalMotorVehicleRecordsDV.pcf: line 29, column 39
    function visible_2 () : java.lang.Boolean {
      return mvrOrder == null
    }
    
    // 'visible' attribute on InputSet at PersonalMotorVehicleRecordsDV.pcf: line 41, column 119
    function visible_23 () : java.lang.Boolean {
      return driverHasMVRStatus(MVRStatus.TC_RECEIVED) and not (mvrOrder.MVRResponse == MVRResponse.TC_NOTFOUND)
    }
    
    // 'visible' attribute on Label at PersonalMotorVehicleRecordsDV.pcf: line 32, column 63
    function visible_3 () : java.lang.Boolean {
      return driverHasMVRStatus(MVRStatus.TC_ORDERED)
    }
    
    // 'visible' attribute on Label (id=MVRsNotFound) at PersonalMotorVehicleRecordsDV.pcf: line 36, column 78
    function visible_4 () : java.lang.Boolean {
      return mvrOrder.MVRResponse == typekey.MVRResponse.TC_NOTFOUND
    }
    
    // 'visible' attribute on InputSet at PersonalMotorVehicleRecordsDV.pcf: line 26, column 132
    function visible_5 () : java.lang.Boolean {
      return mvrOrder.OrderStatus != typekey.MVRStatus.TC_RECEIVED or mvrOrder.MVRResponse == typekey.MVRResponse.TC_NOTFOUND
    }
    
    property get mainMVR () : gw.api.motorvehiclerecord.IMVRData {
      return getVariableValue("mainMVR", 0) as gw.api.motorvehiclerecord.IMVRData
    }
    
    property set mainMVR ($arg :  gw.api.motorvehiclerecord.IMVRData) {
      setVariableValue("mainMVR", 0, $arg)
    }
    
    property get mvrOrder () : gw.api.motorvehiclerecord.IMVROrder {
      return getRequireValue("mvrOrder", 0) as gw.api.motorvehiclerecord.IMVROrder
    }
    
    property set mvrOrder ($arg :  gw.api.motorvehiclerecord.IMVROrder) {
      setRequireValue("mvrOrder", 0, $arg)
    }
    
    property get policyDriver () : PolicyDriver {
      return getRequireValue("policyDriver", 0) as PolicyDriver
    }
    
    property set policyDriver ($arg :  PolicyDriver) {
      setRequireValue("policyDriver", 0, $arg)
    }
    
    property get primaryLicense () : gw.api.motorvehiclerecord.IMVRLicense {
      return getVariableValue("primaryLicense", 0) as gw.api.motorvehiclerecord.IMVRLicense
    }
    
    property set primaryLicense ($arg :  gw.api.motorvehiclerecord.IMVRLicense) {
      setVariableValue("primaryLicense", 0, $arg)
    }
    
    function getDriverName() : String{
      var mvr : gw.api.motorvehiclerecord.IMVRData
      var driverName : String
      if(mvrOrder != null and mvrOrder.MVRData.first() != null){
        mvr = mvrOrder.MVRData.first()
        
        driverName = mvr.getFirstName() + " "
        if(mvr.getMiddleName().length != 0){
          driverName += mvr.getMiddleName() + " "
        }
        driverName += mvr.getLastName()
      }
      return driverName
    }
    
    function driverHasMVRStatus(status: MVRStatus): boolean{
      return policyDriver.PolicyDriverMVR.OrderStatus == status
    }
    
    
  }
  
  
}