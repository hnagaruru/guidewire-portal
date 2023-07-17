package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/regions/RegionDetailDV.US.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RegionDetailDV_USExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/regions/RegionDetailDV.US.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RegionDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at RegionDetailDV.US.pcf: line 37, column 58
    function def_onEnter_8 (def :  pcf.RegionZonesLV) : void {
      def.onEnter(Region, ZoneType, Country)
    }
    
    // 'def' attribute on ListViewInput at RegionDetailDV.US.pcf: line 37, column 58
    function def_refreshVariables_9 (def :  pcf.RegionZonesLV) : void {
      def.refreshVariables(Region, ZoneType, Country)
    }
    
    // 'value' attribute on RangeInput (id=state_Input) at RegionDetailDV.US.pcf: line 54, column 63
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      LinkedZone = (__VALUE_TO_SET as entity.Zone)
    }
    
    // 'value' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.US.pcf: line 28, column 38
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      ZoneType = (__VALUE_TO_SET as typekey.ZoneType)
    }
    
    // 'value' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.US.pcf: line 71, column 212
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Region.ZoneCodes = (__VALUE_TO_SET as java.lang.String[])
    }
    
    // 'onChange' attribute on PostOnChange at RegionDetailDV.US.pcf: line 30, column 171
    function onChange_0 () : void {
      LinkedZone=null;                           Region.FilterCriteria.LinkedZone=null;                           Region.FilterCriteria.ZoneType=ZoneType
    }
    
    // 'onChange' attribute on PostOnChange at RegionDetailDV.US.pcf: line 56, column 67
    function onChange_10 () : void {
      Region.FilterCriteria.LinkedZone=LinkedZone
    }
    
    // 'valueRange' attribute on RangeInput (id=state_Input) at RegionDetailDV.US.pcf: line 54, column 63
    function valueRange_14 () : java.lang.Object {
      return Zone.finder.findZones(Country,typekey.ZoneType.TC_STATE)
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.US.pcf: line 71, column 212
    function valueRange_23 () : java.lang.Object {
      return Zone.finder.findZoneCodes(Country,Region.FilterCriteria.ZoneType,Region.FilterCriteria.LinkedZone)
    }
    
    // 'valueRange' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.US.pcf: line 28, column 38
    function valueRange_3 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getRegionZoneTypes(Country)
    }
    
    // 'value' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.US.pcf: line 71, column 212
    function valueRoot_22 () : java.lang.Object {
      return Region
    }
    
    // 'value' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.US.pcf: line 28, column 38
    function value_1 () : typekey.ZoneType {
      return ZoneType
    }
    
    // 'value' attribute on RangeInput (id=state_Input) at RegionDetailDV.US.pcf: line 54, column 63
    function value_12 () : entity.Zone {
      return LinkedZone
    }
    
    // 'value' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.US.pcf: line 71, column 212
    function value_20 () : java.lang.String[] {
      return Region.ZoneCodes
    }
    
    // 'valueRange' attribute on RangeInput (id=state_Input) at RegionDetailDV.US.pcf: line 54, column 63
    function verifyValueRangeIsAllowedType_15 ($$arg :  entity.Zone[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=state_Input) at RegionDetailDV.US.pcf: line 54, column 63
    function verifyValueRangeIsAllowedType_15 ($$arg :  gw.api.database.IQueryBeanResult<entity.Zone>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=state_Input) at RegionDetailDV.US.pcf: line 54, column 63
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.US.pcf: line 71, column 212
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.US.pcf: line 71, column 212
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.US.pcf: line 28, column 38
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.US.pcf: line 28, column 38
    function verifyValueRangeIsAllowedType_4 ($$arg :  typekey.ZoneType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=state_Input) at RegionDetailDV.US.pcf: line 54, column 63
    function verifyValueRange_16 () : void {
      var __valueRangeArg = Zone.finder.findZones(Country,typekey.ZoneType.TC_STATE)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.US.pcf: line 71, column 212
    function verifyValueRange_25 () : void {
      var __valueRangeArg = Zone.finder.findZoneCodes(Country,Region.FilterCriteria.ZoneType,Region.FilterCriteria.LinkedZone)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.US.pcf: line 28, column 38
    function verifyValueRange_5 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getRegionZoneTypes(Country)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_4(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=state_Input) at RegionDetailDV.US.pcf: line 54, column 63
    function visible_11 () : java.lang.Boolean {
      return Region.FilterCriteria.ZoneType == TC_COUNTY
    }
    
    // 'visible' attribute on RangeInput (id=ZoneInput_Input) at RegionDetailDV.US.pcf: line 71, column 212
    function visible_19 () : java.lang.Boolean {
      return !(Region.FilterCriteria.ZoneType==null || Region.FilterCriteria.ZoneType==TC_ZIP                   || (Region.FilterCriteria.ZoneType == TC_COUNTY and Region.FilterCriteria.LinkedZone==null))
    }
    
    // 'visible' attribute on ListViewInput at RegionDetailDV.US.pcf: line 37, column 58
    function visible_7 () : java.lang.Boolean {
      return Region.FilterCriteria.ZoneType==TC_ZIP
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