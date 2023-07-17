package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/regions/RegionDetailDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RegionDetailDV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/regions/RegionDetailDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RegionDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at RegionDetailDV.default.pcf: line 34, column 36
    function def_onEnter_8 (def :  pcf.RegionZonesLV) : void {
      def.onEnter(Region, ZoneType, Country)
    }
    
    // 'def' attribute on ListViewInput at RegionDetailDV.default.pcf: line 34, column 36
    function def_refreshVariables_9 (def :  pcf.RegionZonesLV) : void {
      def.refreshVariables(Region, ZoneType, Country)
    }
    
    // 'value' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.default.pcf: line 25, column 38
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      ZoneType = (__VALUE_TO_SET as typekey.ZoneType)
    }
    
    // 'onChange' attribute on PostOnChange at RegionDetailDV.default.pcf: line 27, column 63
    function onChange_0 () : void {
      Region.FilterCriteria.ZoneType=ZoneType
    }
    
    // 'valueRange' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.default.pcf: line 25, column 38
    function valueRange_3 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getRegionZoneTypes(Country)
    }
    
    // 'value' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.default.pcf: line 25, column 38
    function value_1 () : typekey.ZoneType {
      return ZoneType
    }
    
    // 'valueRange' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.default.pcf: line 25, column 38
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.default.pcf: line 25, column 38
    function verifyValueRangeIsAllowedType_4 ($$arg :  typekey.ZoneType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=zoneType_Input) at RegionDetailDV.default.pcf: line 25, column 38
    function verifyValueRange_5 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getRegionZoneTypes(Country)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_4(__valueRangeArg)
    }
    
    // 'visible' attribute on ListViewInput at RegionDetailDV.default.pcf: line 34, column 36
    function visible_7 () : java.lang.Boolean {
      return ZoneType != null
    }
    
    property get Country () : Country {
      return getRequireValue("Country", 0) as Country
    }
    
    property set Country ($arg :  Country) {
      setRequireValue("Country", 0, $arg)
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