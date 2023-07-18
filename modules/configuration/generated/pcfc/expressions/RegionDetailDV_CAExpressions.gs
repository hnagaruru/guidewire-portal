package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/regions/RegionDetailDV.CA.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RegionDetailDV_CAExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/regions/RegionDetailDV.CA.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RegionDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at RegionDetailDV.CA.pcf: line 39, column 58
    function def_onEnter_10 (def :  pcf.RegionZonesLV) : void {
      def.onEnter(Region, ZoneType, Country)
    }
    
    // 'def' attribute on ListViewInput at RegionDetailDV.CA.pcf: line 39, column 58
    function def_refreshVariables_11 (def :  pcf.RegionZonesLV) : void {
      def.refreshVariables(Region, ZoneType, Country)
    }
    
    // 'value' attribute on RangeInput (id=province_Input) at RegionDetailDV.CA.pcf: line 56, column 61
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      LinkedZone = (__VALUE_TO_SET as entity.Zone)
    }
    
    // 'value' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.CA.pcf: line 74, column 210
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      Region.ZoneCodes = (__VALUE_TO_SET as java.lang.String[])
    }
    
    // 'value' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.CA.pcf: line 30, column 38
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      ZoneType = (__VALUE_TO_SET as typekey.ZoneType)
    }
    
    // 'initialValue' attribute on Variable at RegionDetailDV.CA.pcf: line 17, column 24
    function initialValue_0 () : ZoneType {
      return null
    }
    
    // 'initialValue' attribute on Variable at RegionDetailDV.CA.pcf: line 21, column 20
    function initialValue_1 () : Zone {
      return null
    }
    
    // 'onChange' attribute on PostOnChange at RegionDetailDV.CA.pcf: line 58, column 67
    function onChange_12 () : void {
      Region.FilterCriteria.LinkedZone=LinkedZone
    }
    
    // 'onChange' attribute on PostOnChange at RegionDetailDV.CA.pcf: line 32, column 142
    function onChange_2 () : void {
      LinkedZone=null;Region.FilterCriteria.LinkedZone=null;                         Region.FilterCriteria.ZoneType=ZoneType
    }
    
    // 'valueRange' attribute on RangeInput (id=province_Input) at RegionDetailDV.CA.pcf: line 56, column 61
    function valueRange_16 () : java.lang.Object {
      return Zone.finder.findZones(Country,typekey.ZoneType.TC_PROVINCE)
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.CA.pcf: line 74, column 210
    function valueRange_25 () : java.lang.Object {
      return Zone.finder.findZoneCodes(Country,Region.FilterCriteria.ZoneType,Region.FilterCriteria.LinkedZone)
    }
    
    // 'valueRange' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.CA.pcf: line 30, column 38
    function valueRange_5 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getRegionZoneTypes(Country)
    }
    
    // 'value' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.CA.pcf: line 74, column 210
    function valueRoot_24 () : java.lang.Object {
      return Region
    }
    
    // 'value' attribute on RangeInput (id=province_Input) at RegionDetailDV.CA.pcf: line 56, column 61
    function value_14 () : entity.Zone {
      return LinkedZone
    }
    
    // 'value' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.CA.pcf: line 74, column 210
    function value_22 () : java.lang.String[] {
      return Region.ZoneCodes
    }
    
    // 'value' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.CA.pcf: line 30, column 38
    function value_3 () : typekey.ZoneType {
      return ZoneType
    }
    
    // 'valueRange' attribute on RangeInput (id=province_Input) at RegionDetailDV.CA.pcf: line 56, column 61
    function verifyValueRangeIsAllowedType_17 ($$arg :  entity.Zone[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=province_Input) at RegionDetailDV.CA.pcf: line 56, column 61
    function verifyValueRangeIsAllowedType_17 ($$arg :  gw.api.database.IQueryBeanResult<entity.Zone>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=province_Input) at RegionDetailDV.CA.pcf: line 56, column 61
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.CA.pcf: line 74, column 210
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.CA.pcf: line 74, column 210
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.CA.pcf: line 30, column 38
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.CA.pcf: line 30, column 38
    function verifyValueRangeIsAllowedType_6 ($$arg :  typekey.ZoneType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=province_Input) at RegionDetailDV.CA.pcf: line 56, column 61
    function verifyValueRange_18 () : void {
      var __valueRangeArg = Zone.finder.findZones(Country,typekey.ZoneType.TC_PROVINCE)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.CA.pcf: line 74, column 210
    function verifyValueRange_27 () : void {
      var __valueRangeArg = Zone.finder.findZoneCodes(Country,Region.FilterCriteria.ZoneType,Region.FilterCriteria.LinkedZone)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_26(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.CA.pcf: line 30, column 38
    function verifyValueRange_7 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getRegionZoneTypes(Country)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=province_Input) at RegionDetailDV.CA.pcf: line 56, column 61
    function visible_13 () : java.lang.Boolean {
      return Region.FilterCriteria.ZoneType == TC_CITY
    }
    
    // 'visible' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.CA.pcf: line 74, column 210
    function visible_21 () : java.lang.Boolean {
      return !(Region.FilterCriteria.ZoneType==null || Region.FilterCriteria.ZoneType==TC_FSA                   || (Region.FilterCriteria.ZoneType == TC_CITY and Region.FilterCriteria.LinkedZone==null))
    }
    
    // 'visible' attribute on ListViewInput at RegionDetailDV.CA.pcf: line 39, column 58
    function visible_9 () : java.lang.Boolean {
      return Region.FilterCriteria.ZoneType==TC_FSA
    }
    
    property get Country () : Country {
      return getRequireValue("Country", 0) as Country
    }
    
    property set Country ($arg :  Country) {
      setRequireValue("Country", 0, $arg)
    }
    
    property get LinkedZone () : Zone {
      return getVariableValue("LinkedZone", 0) as Zone
    }
    
    property set LinkedZone ($arg :  Zone) {
      setVariableValue("LinkedZone", 0, $arg)
    }
    
    property get Region () : Region {
      return getRequireValue("Region", 0) as Region
    }
    
    property set Region ($arg :  Region) {
      setRequireValue("Region", 0, $arg)
    }
    
    property get ZoneType () : ZoneType {
      return getVariableValue("ZoneType", 0) as ZoneType
    }
    
    property set ZoneType ($arg :  ZoneType) {
      setVariableValue("ZoneType", 0, $arg)
    }
    
    
  }
  
  
}