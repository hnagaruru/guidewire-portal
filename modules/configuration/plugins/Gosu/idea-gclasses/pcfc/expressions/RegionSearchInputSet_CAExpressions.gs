package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/policyholds/RegionSearchInputSet.CA.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RegionSearchInputSet_CAExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/RegionSearchInputSet.CA.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RegionSearchInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeRadioInput (id=ZoneType_Input) at RegionSearchInputSet.CA.pcf: line 34, column 36
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ZoneType = (__VALUE_TO_SET as typekey.ZoneType)
    }
    
    // 'value' attribute on RangeInput (id=linkzone_Input) at RegionSearchInputSet.CA.pcf: line 45, column 32
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.LinkedZone = (__VALUE_TO_SET as entity.Zone)
    }
    
    // 'value' attribute on RangeInput (id=Country_Input) at RegionSearchInputSet.CA.pcf: line 23, column 35
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Country = (__VALUE_TO_SET as typekey.Country)
    }
    
    // 'onChange' attribute on PostOnChange at RegionSearchInputSet.CA.pcf: line 25, column 117
    function onChange_0 () : void {
      searchCriteria.ZoneType = null; searchCriteria.LinkedZone = null; searchCriteria.clearFilters()
    }
    
    // 'onChange' attribute on PostOnChange at RegionSearchInputSet.CA.pcf: line 36, column 51
    function onChange_8 () : void {
      searchCriteria.clearFilters()
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=ZoneType_Input) at RegionSearchInputSet.CA.pcf: line 34, column 36
    function valueRange_12 () : java.lang.Object {
      return searchCriteria.getRelevantZoneTypesForCountry()
    }
    
    // 'valueRange' attribute on RangeInput (id=linkzone_Input) at RegionSearchInputSet.CA.pcf: line 45, column 32
    function valueRange_19 () : java.lang.Object {
      return Zone.finder.findZones(searchCriteria.Country, typekey.ZoneType.TC_PROVINCE)
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at RegionSearchInputSet.CA.pcf: line 23, column 35
    function valueRange_4 () : java.lang.Object {
      return searchCriteria.getPossibleCountries()
    }
    
    // 'value' attribute on RangeInput (id=Country_Input) at RegionSearchInputSet.CA.pcf: line 23, column 35
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on RangeInput (id=Country_Input) at RegionSearchInputSet.CA.pcf: line 23, column 35
    function value_1 () : typekey.Country {
      return searchCriteria.Country
    }
    
    // 'value' attribute on RangeInput (id=linkzone_Input) at RegionSearchInputSet.CA.pcf: line 45, column 32
    function value_16 () : entity.Zone {
      return searchCriteria.LinkedZone
    }
    
    // 'value' attribute on RangeRadioInput (id=ZoneType_Input) at RegionSearchInputSet.CA.pcf: line 34, column 36
    function value_9 () : typekey.ZoneType {
      return searchCriteria.ZoneType
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=ZoneType_Input) at RegionSearchInputSet.CA.pcf: line 34, column 36
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=ZoneType_Input) at RegionSearchInputSet.CA.pcf: line 34, column 36
    function verifyValueRangeIsAllowedType_13 ($$arg :  typekey.ZoneType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=linkzone_Input) at RegionSearchInputSet.CA.pcf: line 45, column 32
    function verifyValueRangeIsAllowedType_20 ($$arg :  entity.Zone[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=linkzone_Input) at RegionSearchInputSet.CA.pcf: line 45, column 32
    function verifyValueRangeIsAllowedType_20 ($$arg :  gw.api.database.IQueryBeanResult<entity.Zone>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=linkzone_Input) at RegionSearchInputSet.CA.pcf: line 45, column 32
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at RegionSearchInputSet.CA.pcf: line 23, column 35
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at RegionSearchInputSet.CA.pcf: line 23, column 35
    function verifyValueRangeIsAllowedType_5 ($$arg :  typekey.Country[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=ZoneType_Input) at RegionSearchInputSet.CA.pcf: line 34, column 36
    function verifyValueRange_14 () : void {
      var __valueRangeArg = searchCriteria.getRelevantZoneTypesForCountry()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=linkzone_Input) at RegionSearchInputSet.CA.pcf: line 45, column 32
    function verifyValueRange_21 () : void {
      var __valueRangeArg = Zone.finder.findZones(searchCriteria.Country, typekey.ZoneType.TC_PROVINCE)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Country_Input) at RegionSearchInputSet.CA.pcf: line 23, column 35
    function verifyValueRange_6 () : void {
      var __valueRangeArg = searchCriteria.getPossibleCountries()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    property get policyHold () : PolicyHold {
      return getRequireValue("policyHold", 0) as PolicyHold
    }
    
    property set policyHold ($arg :  PolicyHold) {
      setRequireValue("policyHold", 0, $arg)
    }
    
    property get searchCriteria () : gw.api.admin.PCZoneSearchCriteria {
      return getRequireValue("searchCriteria", 0) as gw.api.admin.PCZoneSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.api.admin.PCZoneSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}