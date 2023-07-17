package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyDriver.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyContactRolePanelSet_PolicyDriverExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/PolicyContactRolePanelSet.PolicyDriver.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyContactRolePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=student_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 41, column 37
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.Student = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=yearlicensed_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 48, column 44
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.YearLicensed = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=gooddriverdiscount_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 53, column 48
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.GoodDriverDiscount = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ApplicableGoodDriverDiscount_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 59, column 64
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriver.ApplicableGoodDriverDiscount = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExcludedDriver_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 64, column 43
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriver.Excluded = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=datecompletedtrainingclass_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 30, column 56
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.DateCompletedTrainingClass = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on CheckBoxInput (id=DoNotOrderMVR_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 75, column 48
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriver.DoNotOrderMVR = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyCell (id=PolicyDriverNumberOfAccidents_Cell) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 116, column 52
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriver.NumberOfAccidents = (__VALUE_TO_SET as typekey.NumberOfAccidents)
    }
    
    // 'value' attribute on TypeKeyCell (id=DriverNumberOfAccidents_Cell) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 121, column 52
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.NumberofAccidents = (__VALUE_TO_SET as typekey.NumberOfAccidents)
    }
    
    // 'value' attribute on TypeKeyCell (id=PolicyDriverNumberOfViolations_Cell) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 138, column 52
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      policyDriver.NumberOfViolations = (__VALUE_TO_SET as typekey.NumberOfAccidents)
    }
    
    // 'value' attribute on TypeKeyCell (id=DriverNumberOfViolations_Cell) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 143, column 52
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.NumberofViolations = (__VALUE_TO_SET as typekey.NumberOfAccidents)
    }
    
    // 'value' attribute on TypeKeyInput (id=trainingclasstype_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 36, column 52
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      driver.TrainingClassType = (__VALUE_TO_SET as typekey.TrainingClassType)
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRolePanelSet.PolicyDriver.pcf: line 14, column 35
    function initialValue_0 () : entity.PolicyDriver {
      return policyContactRole as PolicyDriver
    }
    
    // 'initialValue' attribute on Variable at PolicyContactRolePanelSet.PolicyDriver.pcf: line 18, column 29
    function initialValue_1 () : entity.Driver {
      return policyDriver.AccountContactRole.AccountContact.getRole(TC_DRIVER) as Driver
    }
    
    // 'onChange' attribute on PostOnChange at PolicyContactRolePanelSet.PolicyDriver.pcf: line 66, column 88
    function onChange_26 () : void {
      if (policyDriver.Excluded) policyDriver.DoNotOrderMVR = true
    }
    
    // 'outputConversion' attribute on CheckBoxInput (id=DoNotOrderMVR_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 75, column 48
    function outputConversion_31 (VALUE :  java.lang.Boolean) : java.lang.String {
      return convertBooleanToCheck(VALUE)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ApplicableGoodDriverDiscount_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 59, column 64
    function valueRoot_24 () : java.lang.Object {
      return policyDriver
    }
    
    // 'value' attribute on DateInput (id=datecompletedtrainingclass_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 30, column 56
    function valueRoot_4 () : java.lang.Object {
      return driver
    }
    
    // 'value' attribute on TextCell (id=MVRNumberofAccidents_Cell) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 126, column 44
    function valueRoot_45 () : java.lang.Object {
      return policyDriver.PolicyDriverMVR
    }
    
    // 'value' attribute on BooleanRadioInput (id=student_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 41, column 37
    function value_10 () : java.lang.Boolean {
      return driver.Student
    }
    
    // 'value' attribute on TextInput (id=yearlicensed_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 48, column 44
    function value_14 () : java.lang.Integer {
      return driver.YearLicensed
    }
    
    // 'value' attribute on BooleanRadioInput (id=gooddriverdiscount_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 53, column 48
    function value_18 () : java.lang.Boolean {
      return driver.GoodDriverDiscount
    }
    
    // 'value' attribute on DateInput (id=datecompletedtrainingclass_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 30, column 56
    function value_2 () : java.util.Date {
      return driver.DateCompletedTrainingClass
    }
    
    // 'value' attribute on BooleanRadioInput (id=ApplicableGoodDriverDiscount_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 59, column 64
    function value_22 () : java.lang.Boolean {
      return policyDriver.ApplicableGoodDriverDiscount
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExcludedDriver_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 64, column 43
    function value_27 () : java.lang.Boolean {
      return policyDriver.Excluded
    }
    
    // 'value' attribute on CheckBoxInput (id=DoNotOrderMVR_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 75, column 48
    function value_32 () : java.lang.Boolean {
      return policyDriver.DoNotOrderMVR
    }
    
    // 'value' attribute on TypeKeyCell (id=PolicyDriverNumberOfAccidents_Cell) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 116, column 52
    function value_36 () : typekey.NumberOfAccidents {
      return policyDriver.NumberOfAccidents
    }
    
    // 'value' attribute on TypeKeyCell (id=DriverNumberOfAccidents_Cell) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 121, column 52
    function value_40 () : typekey.NumberOfAccidents {
      return driver.NumberofAccidents
    }
    
    // 'value' attribute on TextCell (id=MVRNumberofAccidents_Cell) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 126, column 44
    function value_44 () : java.lang.Integer {
      return policyDriver.PolicyDriverMVR.NumberOfAccidents
    }
    
    // 'value' attribute on TypeKeyCell (id=PolicyDriverNumberOfViolations_Cell) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 138, column 52
    function value_47 () : typekey.NumberOfAccidents {
      return policyDriver.NumberOfViolations
    }
    
    // 'value' attribute on TypeKeyCell (id=DriverNumberOfViolations_Cell) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 143, column 52
    function value_51 () : typekey.NumberOfAccidents {
      return driver.NumberofViolations
    }
    
    // 'value' attribute on TextCell (id=MVRNumberofViolations_Cell) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 148, column 44
    function value_55 () : java.lang.Integer {
      return policyDriver.PolicyDriverMVR.NumberOfViolations
    }
    
    // 'value' attribute on TypeKeyInput (id=trainingclasstype_Input) at PolicyContactRolePanelSet.PolicyDriver.pcf: line 36, column 52
    function value_6 () : typekey.TrainingClassType {
      return driver.TrainingClassType
    }
    
    property get driver () : entity.Driver {
      return getVariableValue("driver", 0) as entity.Driver
    }
    
    property set driver ($arg :  entity.Driver) {
      setVariableValue("driver", 0, $arg)
    }
    
    property get policyContactRole () : PolicyContactRole {
      return getRequireValue("policyContactRole", 0) as PolicyContactRole
    }
    
    property set policyContactRole ($arg :  PolicyContactRole) {
      setRequireValue("policyContactRole", 0, $arg)
    }
    
    property get policyDriver () : entity.PolicyDriver {
      return getVariableValue("policyDriver", 0) as entity.PolicyDriver
    }
    
    property set policyDriver ($arg :  entity.PolicyDriver) {
      setVariableValue("policyDriver", 0, $arg)
    }
    
    function convertBooleanToCheck(doNotOrderMVR: boolean): String{
      return policyDriver.DoNotOrderMVR ? DisplayKey.get("Web.PersonalAuto.MotorVehicleRecord.Checkbox") : ""
    }
    
    
  }
  
  
}