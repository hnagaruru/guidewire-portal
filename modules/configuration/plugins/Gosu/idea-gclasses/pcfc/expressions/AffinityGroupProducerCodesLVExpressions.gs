package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupProducerCodesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AffinityGroupProducerCodesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupProducerCodesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AffinityGroupProducerCodesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on RowIterator at AffinityGroupProducerCodesLV.pcf: line 23, column 54
    function conversionExpression_2 (PickedValue :  ProducerCode) : entity.AffinityGroupProducerCode {
      return gw.admin.affinitygroup.AffinityGroupUIHelper.createAffinityGroupProducerCode(affinityGroup, PickedValue)
    }
    
    // 'pickLocation' attribute on RowIterator at AffinityGroupProducerCodesLV.pcf: line 23, column 54
    function pickLocation_13 () : void {
      AdminProducerCodeSearchPopup.push(gw.admin.affinitygroup.AffinityGroupUIHelper.getOrganizationToRestrictProducerCodeSearch(affinityGroup))
    }
    
    // 'value' attribute on TextCell (id=ProducerCode_Cell) at AffinityGroupProducerCodesLV.pcf: line 31, column 64
    function sortValue_0 (affinityGroupProducerCode :  entity.AffinityGroupProducerCode) : java.lang.Object {
      return affinityGroupProducerCode.ProducerCode.Code
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at AffinityGroupProducerCodesLV.pcf: line 38, column 44
    function sortValue_1 (affinityGroupProducerCode :  entity.AffinityGroupProducerCode) : java.lang.Object {
      return affinityGroupProducerCode.ProducerCode.Organization
    }
    
    // 'toAdd' attribute on RowIterator at AffinityGroupProducerCodesLV.pcf: line 23, column 54
    function toAdd_14 (affinityGroupProducerCode :  entity.AffinityGroupProducerCode) : void {
      gw.admin.affinitygroup.AffinityGroupUIHelper.addAffinityGroupProducerCode(affinityGroup, affinityGroupProducerCode)
    }
    
    // 'toRemove' attribute on RowIterator at AffinityGroupProducerCodesLV.pcf: line 23, column 54
    function toRemove_15 (affinityGroupProducerCode :  entity.AffinityGroupProducerCode) : void {
      gw.admin.affinitygroup.AffinityGroupUIHelper.remove(affinityGroup, affinityGroupProducerCode)
    }
    
    // 'value' attribute on RowIterator at AffinityGroupProducerCodesLV.pcf: line 23, column 54
    function value_16 () : entity.AffinityGroupProducerCode[] {
      return affinityGroup.AffinityGroupProducerCodes
    }
    
    property get affinityGroup () : AffinityGroup {
      return getRequireValue("affinityGroup", 0) as AffinityGroup
    }
    
    property set affinityGroup ($arg :  AffinityGroup) {
      setRequireValue("affinityGroup", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/affinitygroup/AffinityGroupProducerCodesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AffinityGroupProducerCodesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ProducerCode_Cell) at AffinityGroupProducerCodesLV.pcf: line 31, column 64
    function action_3 () : void {
      AdminProducerCodeDetail.go(affinityGroupProducerCode.ProducerCode)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at AffinityGroupProducerCodesLV.pcf: line 38, column 44
    function action_8 () : void {
      OrganizationDetail.go(affinityGroupProducerCode.ProducerCode.Organization)
    }
    
    // 'action' attribute on TextCell (id=ProducerCode_Cell) at AffinityGroupProducerCodesLV.pcf: line 31, column 64
    function action_dest_4 () : pcf.api.Destination {
      return pcf.AdminProducerCodeDetail.createDestination(affinityGroupProducerCode.ProducerCode)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at AffinityGroupProducerCodesLV.pcf: line 38, column 44
    function action_dest_9 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(affinityGroupProducerCode.ProducerCode.Organization)
    }
    
    // 'value' attribute on TextCell (id=ProducerCode_Cell) at AffinityGroupProducerCodesLV.pcf: line 31, column 64
    function valueRoot_6 () : java.lang.Object {
      return affinityGroupProducerCode.ProducerCode
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at AffinityGroupProducerCodesLV.pcf: line 38, column 44
    function value_10 () : entity.Organization {
      return affinityGroupProducerCode.ProducerCode.Organization
    }
    
    // 'value' attribute on TextCell (id=ProducerCode_Cell) at AffinityGroupProducerCodesLV.pcf: line 31, column 64
    function value_5 () : java.lang.String {
      return affinityGroupProducerCode.ProducerCode.Code
    }
    
    property get affinityGroupProducerCode () : entity.AffinityGroupProducerCode {
      return getIteratedValue(1) as entity.AffinityGroupProducerCode
    }
    
    
  }
  
  
}