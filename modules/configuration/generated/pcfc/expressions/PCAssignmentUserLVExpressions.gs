package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/PCAssignmentUserLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PCAssignmentUserLVExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/PCAssignmentUserLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PCAssignmentUserLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // AltGroupCell (id=Group_Cell) at PCAssignmentUserLV.pcf: line 26, column 36
    function action_10 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at PCAssignmentUserLV.pcf: line 30, column 43
    function action_15 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at PCAssignmentUserLV.pcf: line 30, column 43
    function action_17 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PCAssignmentUserLV.pcf: line 22, column 35
    function action_3 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at PCAssignmentUserLV.pcf: line 26, column 36
    function action_8 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at PCAssignmentUserLV.pcf: line 26, column 36
    function action_dest_11 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at PCAssignmentUserLV.pcf: line 30, column 43
    function action_dest_16 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at PCAssignmentUserLV.pcf: line 30, column 43
    function action_dest_18 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PCAssignmentUserLV.pcf: line 22, column 35
    function action_dest_4 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Group_Cell) at PCAssignmentUserLV.pcf: line 26, column 36
    function action_dest_9 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'pickValue' attribute on RowIterator at PCAssignmentUserLV.pcf: line 16, column 76
    function pickValue_22 () : gw.api.assignment.Assignee {
      return new gw.api.assignment.UserAssignee(groupUser)
    }
    
    // 'value' attribute on AltGroupCell (id=ParentGroup_Cell) at PCAssignmentUserLV.pcf: line 30, column 43
    function valueRoot_20 () : java.lang.Object {
      return groupUser.Group
    }
    
    // 'value' attribute on AltUserCell (id=User_Cell) at PCAssignmentUserLV.pcf: line 22, column 35
    function valueRoot_6 () : java.lang.Object {
      return groupUser
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at PCAssignmentUserLV.pcf: line 26, column 36
    function value_12 () : entity.Group {
      return groupUser.Group
    }
    
    // 'value' attribute on AltGroupCell (id=ParentGroup_Cell) at PCAssignmentUserLV.pcf: line 30, column 43
    function value_19 () : entity.Group {
      return groupUser.Group.Parent
    }
    
    // 'value' attribute on AltUserCell (id=User_Cell) at PCAssignmentUserLV.pcf: line 22, column 35
    function value_5 () : entity.User {
      return groupUser.User
    }
    
    property get groupUser () : entity.GroupUser {
      return getIteratedValue(1) as entity.GroupUser
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/activity/PCAssignmentUserLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PCAssignmentUserLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on AltUserCell (id=User_Cell) at PCAssignmentUserLV.pcf: line 22, column 35
    function sortValue_0 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.User
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at PCAssignmentUserLV.pcf: line 26, column 36
    function sortValue_1 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.Group
    }
    
    // 'value' attribute on AltGroupCell (id=ParentGroup_Cell) at PCAssignmentUserLV.pcf: line 30, column 43
    function sortValue_2 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.Group.Parent
    }
    
    // 'value' attribute on RowIterator at PCAssignmentUserLV.pcf: line 16, column 76
    function value_23 () : gw.api.database.IQueryBeanResult<entity.GroupUser> {
      return groupUsers
    }
    
    property get groupUsers () : gw.api.database.IQueryBeanResult<GroupUser> {
      return getRequireValue("groupUsers", 0) as gw.api.database.IQueryBeanResult<GroupUser>
    }
    
    property set groupUsers ($arg :  gw.api.database.IQueryBeanResult<GroupUser>) {
      setRequireValue("groupUsers", 0, $arg)
    }
    
    
  }
  
  
}