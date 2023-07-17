package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses pcf.api.Wizard
@javax.annotation.Generated("config/web/pcf/line/gl/policy/GeneralLiabilityEUDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GeneralLiabilityEUDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/GeneralLiabilityEUDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GeneralLiabilityEUDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=End) at GeneralLiabilityEUDV.pcf: line 26, column 61
    function allCheckedRowsAction_1 (CheckedValues :  entity.GLExposure[], CheckedValuesErrors :  java.util.Map) : void {
      endExposure(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Split) at GeneralLiabilityEUDV.pcf: line 34, column 61
    function allCheckedRowsAction_3 (CheckedValues :  entity.GLExposure[], CheckedValuesErrors :  java.util.Map) : void {
      splitExposure(CheckedValues)
    }
    
    // 'sortBy' attribute on IteratorSort at GeneralLiabilityEUDV.pcf: line 49, column 30
    function sortBy_4 (exposure :  entity.GLExposure) : java.lang.Object {
      return exposure.ClassCode.Code
    }
    
    // 'value' attribute on TextCell (id=BasisAmount_Cell) at GeneralLiabilityEUDV.pcf: line 96, column 48
    function sortValue_10 (exposure :  entity.GLExposure) : java.lang.Object {
      return exposure.BasisAmount
    }
    
    // 'value' attribute on TextCell (id=ClassCodeUnits_Cell) at GeneralLiabilityEUDV.pcf: line 101, column 63
    function sortValue_11 (exposure :  entity.GLExposure) : java.lang.Object {
      return exposure.ClassCode.Basis.Description
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at GeneralLiabilityEUDV.pcf: line 54, column 48
    function sortValue_5 (exposure :  entity.GLExposure) : java.lang.Object {
      return exposure.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at GeneralLiabilityEUDV.pcf: line 60, column 49
    function sortValue_6 (exposure :  entity.GLExposure) : java.lang.Object {
      return exposure.ExpirationDate
    }
    
    // 'value' attribute on RangeCell (id=Location_Cell) at GeneralLiabilityEUDV.pcf: line 70, column 51
    function sortValue_7 (exposure :  entity.GLExposure) : java.lang.Object {
      return exposure.LocationWM
    }
    
    // 'value' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 83, column 48
    function sortValue_8 (exposure :  entity.GLExposure) : java.lang.Object {
      return exposure.ClassCode
    }
    
    // 'value' attribute on TextCell (id=ClassCodeDescription_Cell) at GeneralLiabilityEUDV.pcf: line 89, column 60
    function sortValue_9 (exposure :  entity.GLExposure) : java.lang.Object {
      return exposure.ClassCode.Classification
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at GeneralLiabilityEUDV.pcf: line 46, column 45
    function toCreateAndAdd_77 () : entity.GLExposure {
      return policyPeriod.GLLine.addExposureWM()
    }
    
    // 'toRemove' attribute on RowIterator at GeneralLiabilityEUDV.pcf: line 46, column 45
    function toRemove_78 (exposure :  entity.GLExposure) : void {
      exposure.removeWM()
    }
    
    // 'value' attribute on RowIterator at GeneralLiabilityEUDV.pcf: line 46, column 45
    function value_79 () : entity.GLExposure[] {
      return policyPeriod.GLLine.GLExposuresWM
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=End) at GeneralLiabilityEUDV.pcf: line 26, column 61
    function visible_0 () : java.lang.Boolean {
      return policyPeriod.Job typeis PolicyChange
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
    function findFirstMatchingClassCode(code : String, exposure : GLExposure) : GLClassCode{
      var classCode = exposure.firstMatchingClassCode(code)
      if (classCode == null) {
        gw.api.util.LocationUtil.addRequestScopedErrorMessage(DisplayKey.get("Java.ClassCodePickerWidget.InvalidCode", code))
      }
      return classCode
    }
    
    function endExposure(exposures : GLExposure[]){
      if((CurrentLocation as Wizard).saveDraft()){ // to keep the data up-to-date before changing LV PL-5377
        for(exposure in exposures){
          exposure.endDateWM(policyPeriod.EditEffectiveDate)
        }
      }
    }
    
    function splitExposure(exposures : GLExposure[]){
      if((CurrentLocation as Wizard).saveDraft()){ // to keep the data up-to-date before changing LV PL-5377
        for(exposure in exposures){
          exposure.splitWM(policyPeriod.EditEffectiveDate)
        }
      }
    }
    
    function getPolicyLocationsFilteredByNonSpecificLocationSupport() : PolicyLocation[] {
      var locations = policyPeriod.PolicyLocationsWM
      if (policyPeriod.GLLine.SupportsNonSpecificLocations) {
        return locations
      }
      return locations.where(\ l -> not l.AccountLocation.NonSpecific)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/GeneralLiabilityEUDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 136, column 51
    function action_56 () : void {
      GLClassCodeSearchPopup.push(policyPeriod.GLLine, version)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 136, column 51
    function action_dest_57 () : pcf.api.Destination {
      return pcf.GLClassCodeSearchPopup.createDestination(policyPeriod.GLLine, version)
    }
    
    // 'value' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 136, column 51
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      version.ClassCode = (__VALUE_TO_SET as entity.GLClassCode)
    }
    
    // 'value' attribute on TextCell (id=BasisAmount_Cell) at GeneralLiabilityEUDV.pcf: line 145, column 50
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      version.BasisAmount = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 136, column 51
    function editable_58 () : java.lang.Boolean {
      return version.LocationWM != null
    }
    
    // 'inputConversion' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 136, column 51
    function inputConversion_59 (VALUE :  java.lang.String) : java.lang.Object {
      return findFirstMatchingClassCode(VALUE, version)
    }
    
    // 'outputConversion' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 136, column 51
    function outputConversion_60 (VALUE :  entity.GLClassCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at GeneralLiabilityEUDV.pcf: line 113, column 49
    function valueRoot_48 () : java.lang.Object {
      return version
    }
    
    // 'value' attribute on TextCell (id=ClassCodeDescription_Cell) at GeneralLiabilityEUDV.pcf: line 139, column 61
    function valueRoot_67 () : java.lang.Object {
      return version.ClassCode
    }
    
    // 'value' attribute on TextCell (id=ClassCodeUnits_Cell) at GeneralLiabilityEUDV.pcf: line 149, column 64
    function valueRoot_74 () : java.lang.Object {
      return version.ClassCode.Basis
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at GeneralLiabilityEUDV.pcf: line 113, column 49
    function value_47 () : java.util.Date {
      return version.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at GeneralLiabilityEUDV.pcf: line 118, column 50
    function value_50 () : java.util.Date {
      return version.ExpirationDate
    }
    
    // 'value' attribute on TextCell (id=Location_Cell) at GeneralLiabilityEUDV.pcf: line 125, column 53
    function value_53 () : entity.PolicyLocation {
      return version.LocationWM
    }
    
    // 'value' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 136, column 51
    function value_61 () : entity.GLClassCode {
      return version.ClassCode
    }
    
    // 'value' attribute on TextCell (id=ClassCodeDescription_Cell) at GeneralLiabilityEUDV.pcf: line 139, column 61
    function value_66 () : java.lang.String {
      return version.ClassCode.Classification
    }
    
    // 'value' attribute on TextCell (id=BasisAmount_Cell) at GeneralLiabilityEUDV.pcf: line 145, column 50
    function value_69 () : java.lang.Integer {
      return version.BasisAmount
    }
    
    // 'value' attribute on TextCell (id=ClassCodeUnits_Cell) at GeneralLiabilityEUDV.pcf: line 149, column 64
    function value_73 () : java.lang.String {
      return version.ClassCode.Basis.Description
    }
    
    property get version () : entity.GLExposure {
      return getIteratedValue(2) as entity.GLExposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/gl/policy/GeneralLiabilityEUDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GeneralLiabilityEUDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 83, column 48
    function action_27 () : void {
      GLClassCodeSearchPopup.push(policyPeriod.GLLine, exposure)
    }
    
    // 'pickLocation' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 83, column 48
    function action_dest_28 () : pcf.api.Destination {
      return pcf.GLClassCodeSearchPopup.createDestination(policyPeriod.GLLine, exposure)
    }
    
    // 'available' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 83, column 48
    function available_29 () : java.lang.Boolean {
      return exposure.LocationWM != null
    }
    
    // 'value' attribute on RangeCell (id=Location_Cell) at GeneralLiabilityEUDV.pcf: line 70, column 51
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.LocationWM = (__VALUE_TO_SET as entity.PolicyLocation)
    }
    
    // 'value' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 83, column 48
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.ClassCode = (__VALUE_TO_SET as entity.GLClassCode)
    }
    
    // 'value' attribute on TextCell (id=BasisAmount_Cell) at GeneralLiabilityEUDV.pcf: line 96, column 48
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.BasisAmount = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on RangeCell (id=Location_Cell) at GeneralLiabilityEUDV.pcf: line 70, column 51
    function editable_18 () : java.lang.Boolean {
      return exposure.NewExposure
    }
    
    // 'inputConversion' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 83, column 48
    function inputConversion_30 (VALUE :  java.lang.String) : java.lang.Object {
      return findFirstMatchingClassCode(VALUE, exposure)
    }
    
    // 'outputConversion' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 83, column 48
    function outputConversion_31 (VALUE :  entity.GLClassCode) : java.lang.String {
      return VALUE == null ? "" : VALUE.Code
    }
    
    // 'valueRange' attribute on RangeCell (id=Location_Cell) at GeneralLiabilityEUDV.pcf: line 70, column 51
    function valueRange_22 () : java.lang.Object {
      return getPolicyLocationsFilteredByNonSpecificLocationSupport()
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at GeneralLiabilityEUDV.pcf: line 54, column 48
    function valueRoot_13 () : java.lang.Object {
      return exposure
    }
    
    // 'value' attribute on TextCell (id=ClassCodeDescription_Cell) at GeneralLiabilityEUDV.pcf: line 89, column 60
    function valueRoot_38 () : java.lang.Object {
      return exposure.ClassCode
    }
    
    // 'value' attribute on TextCell (id=ClassCodeUnits_Cell) at GeneralLiabilityEUDV.pcf: line 101, column 63
    function valueRoot_45 () : java.lang.Object {
      return exposure.ClassCode.Basis
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at GeneralLiabilityEUDV.pcf: line 54, column 48
    function value_12 () : java.util.Date {
      return exposure.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=ExpirationDate_Cell) at GeneralLiabilityEUDV.pcf: line 60, column 49
    function value_15 () : java.util.Date {
      return exposure.ExpirationDate
    }
    
    // 'value' attribute on RangeCell (id=Location_Cell) at GeneralLiabilityEUDV.pcf: line 70, column 51
    function value_19 () : entity.PolicyLocation {
      return exposure.LocationWM
    }
    
    // 'value' attribute on PickerCell (id=ClassCode_Cell) at GeneralLiabilityEUDV.pcf: line 83, column 48
    function value_32 () : entity.GLClassCode {
      return exposure.ClassCode
    }
    
    // 'value' attribute on TextCell (id=ClassCodeDescription_Cell) at GeneralLiabilityEUDV.pcf: line 89, column 60
    function value_37 () : java.lang.String {
      return exposure.ClassCode.Classification
    }
    
    // 'value' attribute on TextCell (id=BasisAmount_Cell) at GeneralLiabilityEUDV.pcf: line 96, column 48
    function value_40 () : java.lang.Integer {
      return exposure.BasisAmount
    }
    
    // 'value' attribute on TextCell (id=ClassCodeUnits_Cell) at GeneralLiabilityEUDV.pcf: line 101, column 63
    function value_44 () : java.lang.String {
      return exposure.ClassCode.Basis.Description
    }
    
    // 'value' attribute on RowIterator (id=VersionIterator) at GeneralLiabilityEUDV.pcf: line 109, column 47
    function value_76 () : entity.GLExposure[] {
      return exposure.AdditionalVersions.cast(GLExposure)
    }
    
    // 'valueRange' attribute on RangeCell (id=Location_Cell) at GeneralLiabilityEUDV.pcf: line 70, column 51
    function verifyValueRangeIsAllowedType_23 ($$arg :  entity.PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Location_Cell) at GeneralLiabilityEUDV.pcf: line 70, column 51
    function verifyValueRangeIsAllowedType_23 ($$arg :  gw.api.database.IQueryBeanResult<entity.PolicyLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Location_Cell) at GeneralLiabilityEUDV.pcf: line 70, column 51
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Location_Cell) at GeneralLiabilityEUDV.pcf: line 70, column 51
    function verifyValueRange_24 () : void {
      var __valueRangeArg = getPolicyLocationsFilteredByNonSpecificLocationSupport()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    property get exposure () : entity.GLExposure {
      return getIteratedValue(1) as entity.GLExposure
    }
    
    
  }
  
  
}