package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupJurisdictionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AffinityGroupJurisdictionsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupJurisdictionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AffinityGroupJurisdictionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at AffinityGroupJurisdictionsLV.pcf: line 25, column 24
    function sortBy_0 (AffinityGroupJurisdiction :  entity.AffinityGroupJurisdiction) : java.lang.Object {
      return AffinityGroupJurisdiction.Jurisdiction
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at AffinityGroupJurisdictionsLV.pcf: line 34, column 44
    function sortValue_1 (AffinityGroupJurisdiction :  entity.AffinityGroupJurisdiction) : java.lang.Object {
      return AffinityGroupJurisdiction.Jurisdiction
    }
    
    // 'toAdd' attribute on RowIterator at AffinityGroupJurisdictionsLV.pcf: line 22, column 54
    function toAdd_7 (AffinityGroupJurisdiction :  entity.AffinityGroupJurisdiction) : void {
      affinityGroup.addToJurisdictions(AffinityGroupJurisdiction)
    }
    
    // 'toRemove' attribute on RowIterator at AffinityGroupJurisdictionsLV.pcf: line 22, column 54
    function toRemove_8 (AffinityGroupJurisdiction :  entity.AffinityGroupJurisdiction) : void {
      affinityGroup.removeFromJurisdictions(AffinityGroupJurisdiction)
    }
    
    // 'value' attribute on RowIterator at AffinityGroupJurisdictionsLV.pcf: line 22, column 54
    function value_9 () : entity.AffinityGroupJurisdiction[] {
      return affinityGroup.Jurisdictions
    }
    
    property get affinityGroup () : AffinityGroup {
      return getRequireValue("affinityGroup", 0) as AffinityGroup
    }
    
    property set affinityGroup ($arg :  AffinityGroup) {
      setRequireValue("affinityGroup", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupJurisdictionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AffinityGroupJurisdictionsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at AffinityGroupJurisdictionsLV.pcf: line 34, column 44
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      AffinityGroupJurisdiction.Jurisdiction = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'onChange' attribute on PostOnChange at AffinityGroupJurisdictionsLV.pcf: line 36, column 113
    function onChange_2 () : void {
      gw.admin.affinitygroup.AffinityGroupUIHelper.checkDuplicateJurisdictions(affinityGroup)
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at AffinityGroupJurisdictionsLV.pcf: line 34, column 44
    function valueRoot_5 () : java.lang.Object {
      return AffinityGroupJurisdiction
    }
    
    // 'value' attribute on TypeKeyCell (id=Jurisdiction_Cell) at AffinityGroupJurisdictionsLV.pcf: line 34, column 44
    function value_3 () : typekey.Jurisdiction {
      return AffinityGroupJurisdiction.Jurisdiction
    }
    
    property get AffinityGroupJurisdiction () : entity.AffinityGroupJurisdiction {
      return getIteratedValue(1) as entity.AffinityGroupJurisdiction
    }
    
    
  }
  
  
}