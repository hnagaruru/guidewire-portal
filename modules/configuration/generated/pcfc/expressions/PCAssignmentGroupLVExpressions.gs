package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/PCAssignmentGroupLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PCAssignmentGroupLVExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/PCAssignmentGroupLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PCAssignmentGroupLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at PCAssignmentGroupLV.pcf: line 26, column 33
    function action_10 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at PCAssignmentGroupLV.pcf: line 22, column 26
    function action_2 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at PCAssignmentGroupLV.pcf: line 22, column 26
    function action_4 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at PCAssignmentGroupLV.pcf: line 26, column 33
    function action_8 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at PCAssignmentGroupLV.pcf: line 26, column 33
    function action_dest_11 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // AltGroupCell (id=Group_Cell) at PCAssignmentGroupLV.pcf: line 22, column 26
    function action_dest_3 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Group_Cell) at PCAssignmentGroupLV.pcf: line 22, column 26
    function action_dest_5 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at PCAssignmentGroupLV.pcf: line 26, column 33
    function action_dest_9 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'pickValue' attribute on RowIterator at PCAssignmentGroupLV.pcf: line 16, column 72
    function pickValue_15 () : gw.api.assignment.Assignee {
      return group
    }
    
    // 'value' attribute on AltGroupCell (id=ParentGroup_Cell) at PCAssignmentGroupLV.pcf: line 26, column 33
    function valueRoot_13 () : java.lang.Object {
      return group
    }
    
    // 'value' attribute on AltGroupCell (id=ParentGroup_Cell) at PCAssignmentGroupLV.pcf: line 26, column 33
    function value_12 () : entity.Group {
      return group.Parent
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at PCAssignmentGroupLV.pcf: line 22, column 26
    function value_6 () : entity.Group {
      return group
    }
    
    property get group () : entity.Group {
      return getIteratedValue(1) as entity.Group
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/activity/PCAssignmentGroupLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PCAssignmentGroupLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at PCAssignmentGroupLV.pcf: line 22, column 26
    function sortValue_0 (group :  entity.Group) : java.lang.Object {
      return group
    }
    
    // 'value' attribute on AltGroupCell (id=ParentGroup_Cell) at PCAssignmentGroupLV.pcf: line 26, column 33
    function sortValue_1 (group :  entity.Group) : java.lang.Object {
      return group.Parent
    }
    
    // 'value' attribute on RowIterator at PCAssignmentGroupLV.pcf: line 16, column 72
    function value_16 () : gw.api.database.IQueryBeanResult<entity.Group> {
      return groups
    }
    
    property get groups () : gw.api.database.IQueryBeanResult<Group> {
      return getRequireValue("groups", 0) as gw.api.database.IQueryBeanResult<Group>
    }
    
    property set groups ($arg :  gw.api.database.IQueryBeanResult<Group>) {
      setRequireValue("groups", 0, $arg)
    }
    
    
  }
  
  
}