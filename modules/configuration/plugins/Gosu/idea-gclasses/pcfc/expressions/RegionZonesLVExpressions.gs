package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/regions/RegionZonesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RegionZonesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/regions/RegionZonesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RegionZonesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'autoComplete' attribute on TextCell (id=ZoneCode_Cell) at RegionZonesLV.pcf: line 40, column 28
    function autoComplete_5 () : gw.api.contact.AutocompleteHandler {
      return new gw.api.admin.ZoneAutocompleteHandler(Country, ZoneType)
    }
    
    // 'value' attribute on TextCell (id=ZoneCode_Cell) at RegionZonesLV.pcf: line 40, column 28
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      rz.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=ZoneCode_Cell) at RegionZonesLV.pcf: line 40, column 28
    function valueRoot_4 () : java.lang.Object {
      return rz
    }
    
    // 'value' attribute on TextCell (id=ZoneCode_Cell) at RegionZonesLV.pcf: line 40, column 28
    function value_2 () : java.lang.String {
      return rz.Code
    }
    
    property get rz () : entity.RegionZone {
      return getIteratedValue(1) as entity.RegionZone
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/regions/RegionZonesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RegionZonesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at RegionZonesLV.pcf: line 31, column 24
    function sortBy_0 (rz :  entity.RegionZone) : java.lang.Object {
      return rz.Code
    }
    
    // 'value' attribute on TextCell (id=ZoneCode_Cell) at RegionZonesLV.pcf: line 40, column 28
    function sortValue_1 (rz :  entity.RegionZone) : java.lang.Object {
      return rz.Code
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at RegionZonesLV.pcf: line 28, column 39
    function toCreateAndAdd_7 () : entity.RegionZone {
      return createNewRegionZone()
    }
    
    // 'toRemove' attribute on RowIterator at RegionZonesLV.pcf: line 28, column 39
    function toRemove_8 (rz :  entity.RegionZone) : void {
      Region.removeFromRegionZones(rz)
    }
    
    // 'value' attribute on RowIterator at RegionZonesLV.pcf: line 28, column 39
    function value_9 () : entity.RegionZone[] {
      return Region.getRegionZones(ZoneType)
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
      return getRequireValue("ZoneType", 0) as ZoneType
    }
    
    property set ZoneType ($arg :  ZoneType) {
      setRequireValue("ZoneType", 0, $arg)
    }
    
    
    function createNewRegionZone() : RegionZone {
            var newRegionZone = new RegionZone()
            newRegionZone.ZoneType=ZoneType
            newRegionZone.Country=Country
            Region.addToRegionZones(newRegionZone)
            return newRegionZone
          }
        
    
    
  }
  
  
}