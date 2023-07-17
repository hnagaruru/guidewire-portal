package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_JurisdictionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FormPatternDetail_JurisdictionsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_JurisdictionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FormPatternDetail_JurisdictionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at FormPatternDetail_JurisdictionsLV.pcf: line 18, column 35
    function initialValue_0 () : FormPatternLookup[] {
      return formPattern.Lookups
    }
    
    // 'sortBy' attribute on IteratorSort at FormPatternDetail_JurisdictionsLV.pcf: line 31, column 24
    function sortBy_1 (lookup :  entity.FormPatternLookup) : java.lang.Object {
      return new gw.admin.FormPatternLookupSortKey(lookup)
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at FormPatternDetail_JurisdictionsLV.pcf: line 28, column 46
    function toCreateAndAdd_26 () : entity.FormPatternLookup {
      return formPattern.createAndAddLookup()
    }
    
    // 'toRemove' attribute on RowIterator at FormPatternDetail_JurisdictionsLV.pcf: line 28, column 46
    function toRemove_27 (lookup :  entity.FormPatternLookup) : void {
      formPattern.removeFromLookups(lookup)
    }
    
    // 'value' attribute on RowIterator at FormPatternDetail_JurisdictionsLV.pcf: line 28, column 46
    function value_28 () : entity.FormPatternLookup[] {
      return lookups
    }
    
    property get formPattern () : FormPattern {
      return getRequireValue("formPattern", 0) as FormPattern
    }
    
    property set formPattern ($arg :  FormPattern) {
      setRequireValue("formPattern", 0, $arg)
    }
    
    property get lookups () : FormPatternLookup[] {
      return getVariableValue("lookups", 0) as FormPatternLookup[]
    }
    
    property set lookups ($arg :  FormPatternLookup[]) {
      setVariableValue("lookups", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/forms/FormPatternDetail_JurisdictionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FormPatternDetail_JurisdictionsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=StartEffectiveDate_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 51, column 46
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookup.StartEffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCell (id=EndEffectiveDate_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 57, column 44
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookup.EndEffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 64, column 45
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookup.Jurisdiction = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on TypeKeyCell (id=UWCompanyCode_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 71, column 46
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookup.UWCompanyCode = (__VALUE_TO_SET as typekey.UWCompanyCode)
    }
    
    // 'value' attribute on RangeRadioCell (id=Availability_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 45, column 49
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookup.Availability = (__VALUE_TO_SET as typekey.AvailabilityType)
    }
    
    // 'optionLabel' attribute on RangeRadioCell (id=Availability_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 45, column 49
    function optionLabel_5 (VALUE :  typekey.AvailabilityType) : java.lang.String {
      return VALUE == AvailabilityType.TC_AVAILABLE ? DisplayKey.get("Button.Yes") : DisplayKey.get("Button.No")
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=Availability_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 45, column 49
    function valueRange_6 () : java.lang.Object {
      return {AvailabilityType.TC_AVAILABLE, AvailabilityType.TC_UNAVAILABLE}
    }
    
    // 'value' attribute on RangeRadioCell (id=Availability_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 45, column 49
    function valueRoot_4 () : java.lang.Object {
      return lookup
    }
    
    // 'value' attribute on DateCell (id=StartEffectiveDate_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 51, column 46
    function value_10 () : java.util.Date {
      return lookup.StartEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=EndEffectiveDate_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 57, column 44
    function value_14 () : java.util.Date {
      return lookup.EndEffectiveDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 64, column 45
    function value_18 () : typekey.Jurisdiction {
      return lookup.Jurisdiction
    }
    
    // 'value' attribute on RangeRadioCell (id=Availability_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 45, column 49
    function value_2 () : typekey.AvailabilityType {
      return lookup.Availability
    }
    
    // 'value' attribute on TypeKeyCell (id=UWCompanyCode_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 71, column 46
    function value_22 () : typekey.UWCompanyCode {
      return lookup.UWCompanyCode
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=Availability_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 45, column 49
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=Availability_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 45, column 49
    function verifyValueRangeIsAllowedType_7 ($$arg :  typekey.AvailabilityType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioCell (id=Availability_Cell) at FormPatternDetail_JurisdictionsLV.pcf: line 45, column 49
    function verifyValueRange_8 () : void {
      var __valueRangeArg = {AvailabilityType.TC_AVAILABLE, AvailabilityType.TC_UNAVAILABLE}
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    property get lookup () : entity.FormPatternLookup {
      return getIteratedValue(1) as entity.FormPatternLookup
    }
    
    
  }
  
  
}