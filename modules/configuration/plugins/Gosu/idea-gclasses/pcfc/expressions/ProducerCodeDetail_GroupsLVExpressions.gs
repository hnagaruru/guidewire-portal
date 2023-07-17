package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetail_GroupsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ProducerCodeDetail_GroupsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetail_GroupsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ProducerCodeDetail_GroupsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 26, column 44
    function action_11 () : void {
      OrganizationDetail.go(groupProducerCode.Group.Organization)
    }
    
    // AltGroupCell (id=Group_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 20, column 44
    function action_2 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 20, column 44
    function action_4 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on AltGroupCell (id=Group_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 20, column 44
    function action_6 () : void {
      GroupDetailPage.go(groupProducerCode.Group)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 26, column 44
    function action_dest_12 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(groupProducerCode.Group.Organization)
    }
    
    // AltGroupCell (id=Group_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 20, column 44
    function action_dest_3 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Group_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 20, column 44
    function action_dest_5 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on AltGroupCell (id=Group_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 20, column 44
    function action_dest_7 () : pcf.api.Destination {
      return pcf.GroupDetailPage.createDestination(groupProducerCode.Group)
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 26, column 44
    function valueRoot_14 () : java.lang.Object {
      return groupProducerCode.Group
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 20, column 44
    function valueRoot_9 () : java.lang.Object {
      return groupProducerCode
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 26, column 44
    function value_13 () : entity.Organization {
      return groupProducerCode.Group.Organization
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 20, column 44
    function value_8 () : entity.Group {
      return groupProducerCode.Group
    }
    
    property get groupProducerCode () : entity.GroupProducerCode {
      return getIteratedValue(1) as entity.GroupProducerCode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/ProducerCodeDetail_GroupsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ProducerCodeDetail_GroupsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 20, column 44
    function sortValue_0 (groupProducerCode :  entity.GroupProducerCode) : java.lang.Object {
      return groupProducerCode.Group
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at ProducerCodeDetail_GroupsLV.pcf: line 26, column 44
    function sortValue_1 (groupProducerCode :  entity.GroupProducerCode) : java.lang.Object {
      return groupProducerCode.Group.Organization
    }
    
    // 'value' attribute on RowIterator at ProducerCodeDetail_GroupsLV.pcf: line 14, column 46
    function value_16 () : entity.GroupProducerCode[] {
      return producerCode.GroupProducerCodes.where( \ g -> g.Group.GroupType != TC_ROOT )
    }
    
    property get producerCode () : ProducerCode {
      return getRequireValue("producerCode", 0) as ProducerCode
    }
    
    property set producerCode ($arg :  ProducerCode) {
      setRequireValue("producerCode", 0, $arg)
    }
    
    
  }
  
  
}