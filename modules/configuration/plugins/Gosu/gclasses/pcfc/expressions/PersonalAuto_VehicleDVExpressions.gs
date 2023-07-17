package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PersonalAuto_VehicleDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PersonalAuto_VehicleDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PersonalAuto_VehicleDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PersonalAuto_VehicleDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=CostNew_DV_Input) at PersonalAuto_VehicleDV.pcf: line 108, column 34
    function currency_53 () : typekey.Currency {
      return vehicle.PreferredCoverageCurrency
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleDV.pcf: line 95, column 94
    function def_onEnter_46 (def :  pcf.PAGarageLocationInputSet) : void {
      def.onEnter(vehicle, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleDV.pcf: line 98, column 91
    function def_onEnter_48 (def :  pcf.PersonalAuto_AssignDriversInputSet) : void {
      def.onEnter(vehicle, policyPeriod, line, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleDV.pcf: line 157, column 66
    function def_onEnter_89 (def :  pcf.PAVehicleModifiersInputSet) : void {
      def.onEnter(vehicle, policyPeriod)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleDV.pcf: line 95, column 94
    function def_refreshVariables_47 (def :  pcf.PAGarageLocationInputSet) : void {
      def.refreshVariables(vehicle, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleDV.pcf: line 98, column 91
    function def_refreshVariables_49 (def :  pcf.PersonalAuto_AssignDriversInputSet) : void {
      def.refreshVariables(vehicle, policyPeriod, line, openForEdit)
    }
    
    // 'def' attribute on InputSetRef at PersonalAuto_VehicleDV.pcf: line 157, column 66
    function def_refreshVariables_90 (def :  pcf.PAVehicleModifiersInputSet) : void {
      def.refreshVariables(vehicle, policyPeriod)
    }
    
    // 'value' attribute on TextInput (id=Vin_DV_Input) at PersonalAuto_VehicleDV.pcf: line 49, column 29
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.Vin = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Year_DV_Input) at PersonalAuto_VehicleDV.pcf: line 59, column 40
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.Year = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Make_DV_Input) at PersonalAuto_VehicleDV.pcf: line 64, column 31
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.Make = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Model_DV_Input) at PersonalAuto_VehicleDV.pcf: line 69, column 32
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.Model = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=BodyType_DV_Input) at PersonalAuto_VehicleDV.pcf: line 75, column 39
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.BodyType = (__VALUE_TO_SET as typekey.BodyType)
    }
    
    // 'value' attribute on TextInput (id=Color_DV_Input) at PersonalAuto_VehicleDV.pcf: line 80, column 32
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.Color = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LicensePlate_DV_Input) at PersonalAuto_VehicleDV.pcf: line 85, column 39
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.LicensePlate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_DV_Input) at PersonalAuto_VehicleDV.pcf: line 40, column 41
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.VehicleType = (__VALUE_TO_SET as typekey.VehicleType)
    }
    
    // 'value' attribute on RangeInput (id=LicenseState_DV_Input) at PersonalAuto_VehicleDV.pcf: line 93, column 36
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.LicenseState = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CostNew_DV_Input) at PersonalAuto_VehicleDV.pcf: line 108, column 34
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.CostNew = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=StatedValue_DV_Input) at PersonalAuto_VehicleDV.pcf: line 115, column 38
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.StatedValue = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on BooleanRadioInput (id=LeaseOrRent_DV_Input) at PersonalAuto_VehicleDV.pcf: line 120, column 37
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.LeaseOrRent = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=LengthOfLease_DV_Input) at PersonalAuto_VehicleDV.pcf: line 130, column 44
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.LengthOfLease = (__VALUE_TO_SET as typekey.LengthOfLease)
    }
    
    // 'value' attribute on TextInput (id=annualmiles_DV_Input) at PersonalAuto_VehicleDV.pcf: line 138, column 50
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.AnnualMileage = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=commutemiles_DV_Input) at PersonalAuto_VehicleDV.pcf: line 145, column 50
    function defaultSetter_78 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.CommutingMiles = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=primaryuse_DV_Input) at PersonalAuto_VehicleDV.pcf: line 154, column 50
    function defaultSetter_84 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.PrimaryUse = (__VALUE_TO_SET as typekey.VehiclePrimaryUse)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Type_DV_Input) at PersonalAuto_VehicleDV.pcf: line 40, column 41
    function filter_6 (VALUE :  typekey.VehicleType, VALUES :  typekey.VehicleType[]) : java.lang.Boolean {
      return VALUE.hasCategory(vehicle.PolicyLine.Subtype)
    }
    
    // 'filter' attribute on TypeKeyInput (id=primaryuse_DV_Input) at PersonalAuto_VehicleDV.pcf: line 154, column 50
    function filter_86 (VALUE :  typekey.VehiclePrimaryUse, VALUES :  typekey.VehiclePrimaryUse[]) : java.lang.Boolean {
      return vehicle.VehicleType != null and VALUE.hasCategory(vehicle.VehicleType)
    }
    
    // 'label' attribute on TypeKeyInput (id=BodyType_DV_Input) at PersonalAuto_VehicleDV.pcf: line 75, column 39
    function label_25 () : java.lang.Object {
      return vehicle.VehicleType==TC_AUTO ? DisplayKey.get("Web.PolicyLine.Vehicle.BodyType") : DisplayKey.get("Web.PolicyLine.Vehicle.SubType")
    }
    
    // 'onChange' attribute on PostOnChange at PersonalAuto_VehicleDV.pcf: line 52, column 66
    function onChange_8 () : void {
      vehicle.setValuesBasedOnVin( vehicle.Vin )
    }
    
    // 'valueRange' attribute on RangeInput (id=LicenseState_DV_Input) at PersonalAuto_VehicleDV.pcf: line 93, column 36
    function valueRange_42 () : java.lang.Object {
      return State.getTypeKeys(false).where(\ s -> s.hasCategory(vehicle.AccountLocation.Country))
    }
    
    // 'value' attribute on TextInput (id=VehicleNumber_DV_Input) at PersonalAuto_VehicleDV.pcf: line 32, column 40
    function valueRoot_1 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextInput (id=VehicleNumber_DV_Input) at PersonalAuto_VehicleDV.pcf: line 32, column 40
    function value_0 () : java.lang.Integer {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TextInput (id=Year_DV_Input) at PersonalAuto_VehicleDV.pcf: line 59, column 40
    function value_13 () : java.lang.Integer {
      return vehicle.Year
    }
    
    // 'value' attribute on TextInput (id=Make_DV_Input) at PersonalAuto_VehicleDV.pcf: line 64, column 31
    function value_17 () : java.lang.String {
      return vehicle.Make
    }
    
    // 'value' attribute on TextInput (id=Model_DV_Input) at PersonalAuto_VehicleDV.pcf: line 69, column 32
    function value_21 () : java.lang.String {
      return vehicle.Model
    }
    
    // 'value' attribute on TypeKeyInput (id=BodyType_DV_Input) at PersonalAuto_VehicleDV.pcf: line 75, column 39
    function value_26 () : typekey.BodyType {
      return vehicle.BodyType
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_DV_Input) at PersonalAuto_VehicleDV.pcf: line 40, column 41
    function value_3 () : typekey.VehicleType {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on TextInput (id=Color_DV_Input) at PersonalAuto_VehicleDV.pcf: line 80, column 32
    function value_31 () : java.lang.String {
      return vehicle.Color
    }
    
    // 'value' attribute on TextInput (id=LicensePlate_DV_Input) at PersonalAuto_VehicleDV.pcf: line 85, column 39
    function value_35 () : java.lang.String {
      return vehicle.LicensePlate
    }
    
    // 'value' attribute on RangeInput (id=LicenseState_DV_Input) at PersonalAuto_VehicleDV.pcf: line 93, column 36
    function value_39 () : typekey.State {
      return vehicle.LicenseState
    }
    
    // 'value' attribute on MonetaryAmountInput (id=CostNew_DV_Input) at PersonalAuto_VehicleDV.pcf: line 108, column 34
    function value_50 () : gw.pl.currency.MonetaryAmount {
      return vehicle.CostNew
    }
    
    // 'value' attribute on MonetaryAmountInput (id=StatedValue_DV_Input) at PersonalAuto_VehicleDV.pcf: line 115, column 38
    function value_55 () : gw.pl.currency.MonetaryAmount {
      return vehicle.StatedValue
    }
    
    // 'value' attribute on BooleanRadioInput (id=LeaseOrRent_DV_Input) at PersonalAuto_VehicleDV.pcf: line 120, column 37
    function value_60 () : java.lang.Boolean {
      return vehicle.LeaseOrRent
    }
    
    // 'value' attribute on TypeKeyInput (id=LengthOfLease_DV_Input) at PersonalAuto_VehicleDV.pcf: line 130, column 44
    function value_65 () : typekey.LengthOfLease {
      return vehicle.LengthOfLease
    }
    
    // 'value' attribute on TextInput (id=annualmiles_DV_Input) at PersonalAuto_VehicleDV.pcf: line 138, column 50
    function value_71 () : java.lang.Integer {
      return vehicle.AnnualMileage
    }
    
    // 'value' attribute on TextInput (id=commutemiles_DV_Input) at PersonalAuto_VehicleDV.pcf: line 145, column 50
    function value_77 () : java.lang.Integer {
      return vehicle.CommutingMiles
    }
    
    // 'value' attribute on TypeKeyInput (id=primaryuse_DV_Input) at PersonalAuto_VehicleDV.pcf: line 154, column 50
    function value_83 () : typekey.VehiclePrimaryUse {
      return vehicle.PrimaryUse
    }
    
    // 'value' attribute on TextInput (id=Vin_DV_Input) at PersonalAuto_VehicleDV.pcf: line 49, column 29
    function value_9 () : java.lang.String {
      return vehicle.Vin
    }
    
    // 'valueRange' attribute on RangeInput (id=LicenseState_DV_Input) at PersonalAuto_VehicleDV.pcf: line 93, column 36
    function verifyValueRangeIsAllowedType_43 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LicenseState_DV_Input) at PersonalAuto_VehicleDV.pcf: line 93, column 36
    function verifyValueRangeIsAllowedType_43 ($$arg :  typekey.State[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LicenseState_DV_Input) at PersonalAuto_VehicleDV.pcf: line 93, column 36
    function verifyValueRange_44 () : void {
      var __valueRangeArg = State.getTypeKeys(false).where(\ s -> s.hasCategory(vehicle.AccountLocation.Country))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_43(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=annualmiles_DV_Input) at PersonalAuto_VehicleDV.pcf: line 138, column 50
    function visible_70 () : java.lang.Boolean {
      return vehicle.VehicleType!=TC_OTHER
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getRequireValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setRequireValue("jobWizardHelper", 0, $arg)
    }
    
    property get line () : PersonalAutoLine {
      return getRequireValue("line", 0) as PersonalAutoLine
    }
    
    property set line ($arg :  PersonalAutoLine) {
      setRequireValue("line", 0, $arg)
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
    
    property get totalPercentage () : java.lang.Double {
      return getVariableValue("totalPercentage", 0) as java.lang.Double
    }
    
    property set totalPercentage ($arg :  java.lang.Double) {
      setVariableValue("totalPercentage", 0, $arg)
    }
    
    property get vehicle () : PersonalVehicle {
      return getRequireValue("vehicle", 0) as PersonalVehicle
    }
    
    property set vehicle ($arg :  PersonalVehicle) {
      setRequireValue("vehicle", 0, $arg)
    }
    
    
  }
  
  
}