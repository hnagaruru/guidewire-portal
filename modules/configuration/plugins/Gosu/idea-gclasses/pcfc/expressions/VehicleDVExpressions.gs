package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/VehicleDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VehicleDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/VehicleDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends VehicleDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 3, column 48
    function defaultSetter_102 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehmodifier.BooleanModifier = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 5, column 45
    function defaultSetter_107 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehmodifier.DateModifier = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 7, column 45
    function defaultSetter_112 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehmodifier.RateWithinLimits = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function defaultSetter_117 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehmodifier.TypeKeyModifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 3, column 48
    function label_100 () : java.lang.Object {
      return vehmodifier.Pattern.DisplayName
    }
    
    // 'valueRange' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function valueRange_119 () : java.lang.Object {
      return gw.pcf.ModifierWidgetHelper.modifierTypeKeyValues(vehmodifier)
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 3, column 48
    function valueRoot_103 () : java.lang.Object {
      return vehmodifier
    }
    
    // 'value' attribute on HiddenInput (id=ModifierName_Input) at VehicleDV.pcf: line 194, column 41
    function valueRoot_97 () : java.lang.Object {
      return vehmodifier.Pattern
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 3, column 48
    function value_101 () : java.lang.Boolean {
      return vehmodifier.BooleanModifier
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 5, column 45
    function value_106 () : java.util.Date {
      return vehmodifier.DateModifier
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 7, column 45
    function value_111 () : java.math.BigDecimal {
      return vehmodifier.RateWithinLimits
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function value_116 () : java.lang.String {
      return vehmodifier.TypeKeyModifier
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at VehicleDV.pcf: line 200, column 55
    function value_123 () : entity.BusinessVehicleModifier {
      return vehmodifier
    }
    
    // 'value' attribute on HiddenInput (id=ModifierName_Input) at VehicleDV.pcf: line 194, column 41
    function value_96 () : java.lang.String {
      return vehmodifier.Pattern.Name
    }
    
    // 'valueRange' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function verifyValueRangeIsAllowedType_120 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function verifyValueRangeIsAllowedType_120 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function verifyValueRange_121 () : void {
      var __valueRangeArg = gw.pcf.ModifierWidgetHelper.modifierTypeKeyValues(vehmodifier)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_120(__valueRangeArg)
    }
    
    // 'valueType' attribute on ModifierInput (id=vehmod_Input) at VehicleDV.pcf: line 200, column 55
    function verifyValueType_126 () : void {
      var __valueTypeArg : entity.BusinessVehicleModifier
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Modifier = __valueTypeArg
    }
    
    // 'visible' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 5, column 45
    function visible_104 () : java.lang.Boolean {
      return vehmodifier.DataType == TC_DATE
    }
    
    // 'visible' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 7, column 45
    function visible_109 () : java.lang.Boolean {
      return vehmodifier.DataType == TC_RATE
    }
    
    // 'visible' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function visible_114 () : java.lang.Boolean {
      return vehmodifier.DataType == TC_TYPEKEY
    }
    
    // 'visible' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 3, column 48
    function visible_99 () : java.lang.Boolean {
      return vehmodifier.DataType == TC_BOOLEAN
    }
    
    property get vehmodifier () : entity.BusinessVehicleModifier {
      return getIteratedValue(1) as entity.BusinessVehicleModifier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/VehicleDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerInput (id=ClassCode_Input) at VehicleDV.pcf: line 161, column 39
    function action_74 () : void {
      VehicleClassCodeSearchPopup.push(vehicle, baLine)
    }
    
    // 'pickLocation' attribute on PickerInput (id=ClassCode_Input) at VehicleDV.pcf: line 161, column 39
    function action_dest_75 () : pcf.api.Destination {
      return pcf.VehicleClassCodeSearchPopup.createDestination(vehicle, baLine)
    }
    
    // 'conversionExpression' attribute on PickerInput (id=ClassCode_Input) at VehicleDV.pcf: line 161, column 39
    function conversionExpression_77 (PickedValue :  gw.api.domain.VehicleClassCodeSearchResult) : java.lang.String {
      return vehicle.setVehicleClassCode(PickedValue)
    }
    
    // 'currency' attribute on MonetaryAmountInput (id=Cost_Input) at VehicleDV.pcf: line 126, column 34
    function currency_57 () : typekey.Currency {
      return vehicle.PreferredCoverageCurrency
    }
    
    // 'value' attribute on TextInput (id=Vin_Input) at VehicleDV.pcf: line 53, column 29
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.Vin = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Year_Input) at VehicleDV.pcf: line 63, column 40
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.Year = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Make_Input) at VehicleDV.pcf: line 68, column 31
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.Make = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Model_Input) at VehicleDV.pcf: line 73, column 32
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.Model = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=BodyType_Input) at VehicleDV.pcf: line 79, column 38
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.BodyType = (__VALUE_TO_SET as typekey.BodyType)
    }
    
    // 'value' attribute on TextInput (id=Color_Input) at VehicleDV.pcf: line 88, column 32
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.Color = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LicensePlate_Input) at VehicleDV.pcf: line 93, column 39
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.LicensePlate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=LicenseState_Input) at VehicleDV.pcf: line 99, column 36
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.LicenseState = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleCond_Input) at VehicleDV.pcf: line 107, column 42
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.VehicleCondition = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at VehicleDV.pcf: line 43, column 41
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.VehicleType = (__VALUE_TO_SET as typekey.VehicleType)
    }
    
    // 'value' attribute on TextInput (id=YearPurchased_Input) at VehicleDV.pcf: line 118, column 46
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.YearPurchased = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Cost_Input) at VehicleDV.pcf: line 126, column 34
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.CostNew = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on MonetaryAmountInput (id=StatedValue_Input) at VehicleDV.pcf: line 133, column 38
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.StatedValue = (__VALUE_TO_SET as gw.pl.currency.MonetaryAmount)
    }
    
    // 'value' attribute on BooleanRadioInput (id=LeaseOrRent_Input) at VehicleDV.pcf: line 138, column 37
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.LeaseOrRent = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=LengthOfLease_Input) at VehicleDV.pcf: line 148, column 48
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.LengthOfLease = (__VALUE_TO_SET as typekey.LengthOfLease)
    }
    
    // 'value' attribute on PickerInput (id=ClassCode_Input) at VehicleDV.pcf: line 161, column 39
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.VehicleClassCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=DestinationZone_Input) at VehicleDV.pcf: line 168, column 61
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.DestinationZone = (__VALUE_TO_SET as typekey.Zone)
    }
    
    // 'value' attribute on TypeKeyInput (id=OriginationZone_Input) at VehicleDV.pcf: line 175, column 61
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehicle.OriginationZone = (__VALUE_TO_SET as typekey.Zone)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Type_Input) at VehicleDV.pcf: line 43, column 41
    function filter_7 (VALUE :  typekey.VehicleType, VALUES :  typekey.VehicleType[]) : java.lang.Boolean {
      return VALUE.hasCategory(vehicle.BALine.Subtype)
    }
    
    // 'onChange' attribute on PostOnChange at VehicleDV.pcf: line 82, column 217
    function onChange_26 () : void {
      if (policyPeriod.OpenForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncModifiers(policyPeriod.BusinessAutoLine.Vehicles, jobWizardHelper); vehicle.updateStateValueForModifiers()}
    }
    
    // 'onChange' attribute on PostOnChange at VehicleDV.pcf: line 46, column 217
    function onChange_3 () : void {
      if (policyPeriod.OpenForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncModifiers(policyPeriod.BusinessAutoLine.Vehicles, jobWizardHelper); vehicle.updateStateValueForModifiers()}
    }
    
    // 'onChange' attribute on PostOnChange at VehicleDV.pcf: line 56, column 64
    function onChange_9 () : void {
      vehicle.setValuesBasedOnVin(vehicle.Vin)
    }
    
    // 'sortBy' attribute on IteratorSort at VehicleDV.pcf: line 189, column 26
    function sortBy_95 (vehmodifier :  entity.BusinessVehicleModifier) : java.lang.Object {
      return vehmodifier.Pattern.Priority
    }
    
    // 'validationExpression' attribute on PickerInput (id=ClassCode_Input) at VehicleDV.pcf: line 161, column 39
    function validationExpression_76 () : java.lang.Object {
      return vehicle.validateVehicleClassCode()
    }
    
    // 'value' attribute on TextInput (id=VehicleNumber_Input) at VehicleDV.pcf: line 35, column 40
    function valueRoot_1 () : java.lang.Object {
      return vehicle
    }
    
    // 'value' attribute on TextInput (id=VehicleNumber_Input) at VehicleDV.pcf: line 35, column 40
    function value_0 () : java.lang.Integer {
      return vehicle.VehicleNumber
    }
    
    // 'value' attribute on TextInput (id=Vin_Input) at VehicleDV.pcf: line 53, column 29
    function value_10 () : java.lang.String {
      return vehicle.Vin
    }
    
    // 'value' attribute on InputIterator (id=moditerator) at VehicleDV.pcf: line 186, column 54
    function value_127 () : entity.BusinessVehicleModifier[] {
      return vehicle.BusinessVehicleModifiers
    }
    
    // 'value' attribute on TextInput (id=Year_Input) at VehicleDV.pcf: line 63, column 40
    function value_14 () : java.lang.Integer {
      return vehicle.Year
    }
    
    // 'value' attribute on TextInput (id=Make_Input) at VehicleDV.pcf: line 68, column 31
    function value_18 () : java.lang.String {
      return vehicle.Make
    }
    
    // 'value' attribute on TextInput (id=Model_Input) at VehicleDV.pcf: line 73, column 32
    function value_22 () : java.lang.String {
      return vehicle.Model
    }
    
    // 'value' attribute on TypeKeyInput (id=BodyType_Input) at VehicleDV.pcf: line 79, column 38
    function value_27 () : typekey.BodyType {
      return vehicle.BodyType
    }
    
    // 'value' attribute on TextInput (id=Color_Input) at VehicleDV.pcf: line 88, column 32
    function value_31 () : java.lang.String {
      return vehicle.Color
    }
    
    // 'value' attribute on TextInput (id=LicensePlate_Input) at VehicleDV.pcf: line 93, column 39
    function value_35 () : java.lang.String {
      return vehicle.LicensePlate
    }
    
    // 'value' attribute on TypeKeyInput (id=LicenseState_Input) at VehicleDV.pcf: line 99, column 36
    function value_39 () : typekey.State {
      return vehicle.LicenseState
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at VehicleDV.pcf: line 43, column 41
    function value_4 () : typekey.VehicleType {
      return vehicle.VehicleType
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleCond_Input) at VehicleDV.pcf: line 107, column 42
    function value_43 () : java.lang.Boolean {
      return vehicle.VehicleCondition
    }
    
    // 'value' attribute on TextInput (id=YearPurchased_Input) at VehicleDV.pcf: line 118, column 46
    function value_49 () : java.lang.Integer {
      return vehicle.YearPurchased
    }
    
    // 'value' attribute on MonetaryAmountInput (id=Cost_Input) at VehicleDV.pcf: line 126, column 34
    function value_54 () : gw.pl.currency.MonetaryAmount {
      return vehicle.CostNew
    }
    
    // 'value' attribute on MonetaryAmountInput (id=StatedValue_Input) at VehicleDV.pcf: line 133, column 38
    function value_59 () : gw.pl.currency.MonetaryAmount {
      return vehicle.StatedValue
    }
    
    // 'value' attribute on BooleanRadioInput (id=LeaseOrRent_Input) at VehicleDV.pcf: line 138, column 37
    function value_64 () : java.lang.Boolean {
      return vehicle.LeaseOrRent
    }
    
    // 'value' attribute on TypeKeyInput (id=LengthOfLease_Input) at VehicleDV.pcf: line 148, column 48
    function value_69 () : typekey.LengthOfLease {
      return vehicle.LengthOfLease
    }
    
    // 'value' attribute on PickerInput (id=ClassCode_Input) at VehicleDV.pcf: line 161, column 39
    function value_78 () : java.lang.String {
      return vehicle.VehicleClassCode
    }
    
    // 'value' attribute on TypeKeyInput (id=DestinationZone_Input) at VehicleDV.pcf: line 168, column 61
    function value_84 () : typekey.Zone {
      return vehicle.DestinationZone
    }
    
    // 'value' attribute on TypeKeyInput (id=OriginationZone_Input) at VehicleDV.pcf: line 175, column 61
    function value_90 () : typekey.Zone {
      return vehicle.OriginationZone
    }
    
    // 'visible' attribute on TextInput (id=YearPurchased_Input) at VehicleDV.pcf: line 118, column 46
    function visible_47 () : java.lang.Boolean {
      return !vehicle.VehicleCondition
    }
    
    // 'visible' attribute on TypeKeyInput (id=LengthOfLease_Input) at VehicleDV.pcf: line 148, column 48
    function visible_68 () : java.lang.Boolean {
      return vehicle.LeaseOrRent == true
    }
    
    // 'visible' attribute on TypeKeyInput (id=DestinationZone_Input) at VehicleDV.pcf: line 168, column 61
    function visible_83 () : java.lang.Boolean {
      return (vehicle.VehicleRadius==TC_200PLUSMILES)
    }
    
    property get baLine () : BusinessAutoLine {
      return getRequireValue("baLine", 0) as BusinessAutoLine
    }
    
    property set baLine ($arg :  BusinessAutoLine) {
      setRequireValue("baLine", 0, $arg)
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
    
    property get ratingUpdate () : boolean {
      return getVariableValue("ratingUpdate", 0) as java.lang.Boolean
    }
    
    property set ratingUpdate ($arg :  boolean) {
      setVariableValue("ratingUpdate", 0, $arg)
    }
    
    property get vehicle () : BusinessVehicle {
      return getRequireValue("vehicle", 0) as BusinessVehicle
    }
    
    property set vehicle ($arg :  BusinessVehicle) {
      setRequireValue("vehicle", 0, $arg)
    }
    
    
  }
  
  
}