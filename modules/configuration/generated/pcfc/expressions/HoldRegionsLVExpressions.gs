package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/policyholds/HoldRegionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HoldRegionsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/HoldRegionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HoldRegionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at HoldRegionsLV.pcf: line 25, column 24
    function sortBy_0 (polHoldZone :  entity.PolicyHoldZone) : java.lang.Object {
      return polHoldZone.Code
    }
    
    // 'value' attribute on TypeKeyCell (id=ZoneType_Cell) at HoldRegionsLV.pcf: line 31, column 41
    function sortValue_1 (polHoldZone :  entity.PolicyHoldZone) : java.lang.Object {
      return polHoldZone.ZoneType
    }
    
    // 'value' attribute on TextCell (id=ZoneCode_Cell) at HoldRegionsLV.pcf: line 35, column 37
    function sortValue_2 (polHoldZone :  entity.PolicyHoldZone) : java.lang.Object {
      return polHoldZone.Code
    }
    
    // 'toRemove' attribute on RowIterator at HoldRegionsLV.pcf: line 22, column 43
    function toRemove_9 (polHoldZone :  entity.PolicyHoldZone) : void {
      policyHold.removeFromPolicyHoldZones(polHoldZone)
    }
    
    // 'value' attribute on RowIterator at HoldRegionsLV.pcf: line 22, column 43
    function value_10 () : entity.PolicyHoldZone[] {
      return policyHold.PolicyHoldZones
    }
    
    property get policyHold () : PolicyHold {
      return getRequireValue("policyHold", 0) as PolicyHold
    }
    
    property set policyHold ($arg :  PolicyHold) {
      setRequireValue("policyHold", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/policyholds/HoldRegionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HoldRegionsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=ZoneType_Cell) at HoldRegionsLV.pcf: line 31, column 41
    function valueRoot_4 () : java.lang.Object {
      return polHoldZone
    }
    
    // 'value' attribute on TypeKeyCell (id=ZoneType_Cell) at HoldRegionsLV.pcf: line 31, column 41
    function value_3 () : typekey.ZoneType {
      return polHoldZone.ZoneType
    }
    
    // 'value' attribute on TextCell (id=ZoneCode_Cell) at HoldRegionsLV.pcf: line 35, column 37
    function value_6 () : java.lang.String {
      return polHoldZone.Code
    }
    
    property get polHoldZone () : entity.PolicyHoldZone {
      return getIteratedValue(1) as entity.PolicyHoldZone
    }
    
    
  }
  
  
}