package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/Policy_JobUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Policy_JobUsersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/Policy_JobUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends Policy_JobUsersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // AltGroupCell (id=Group_Cell) at Policy_JobUsersLV.pcf: line 29, column 45
    function action_12 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at Policy_JobUsersLV.pcf: line 29, column 45
    function action_14 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at Policy_JobUsersLV.pcf: line 25, column 44
    function action_7 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at Policy_JobUsersLV.pcf: line 29, column 45
    function action_dest_13 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Group_Cell) at Policy_JobUsersLV.pcf: line 29, column 45
    function action_dest_15 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at Policy_JobUsersLV.pcf: line 25, column 44
    function action_dest_8 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at Policy_JobUsersLV.pcf: line 33, column 70
    function valueRoot_20 () : java.lang.Object {
      return assignment.AssignedUser.Contact
    }
    
    // 'value' attribute on TypeKeyCell (id=Role_Cell) at Policy_JobUsersLV.pcf: line 21, column 41
    function valueRoot_5 () : java.lang.Object {
      return assignment
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at Policy_JobUsersLV.pcf: line 29, column 45
    function value_16 () : entity.Group {
      return assignment.AssignedGroup
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at Policy_JobUsersLV.pcf: line 33, column 70
    function value_19 () : java.lang.String {
      return assignment.AssignedUser.Contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TypeKeyCell (id=Role_Cell) at Policy_JobUsersLV.pcf: line 21, column 41
    function value_4 () : typekey.UserRole {
      return assignment.Role
    }
    
    // 'value' attribute on AltUserCell (id=User_Cell) at Policy_JobUsersLV.pcf: line 25, column 44
    function value_9 () : entity.User {
      return assignment.AssignedUser
    }
    
    property get assignment () : entity.JobUserRoleAssignment {
      return getIteratedValue(1) as entity.JobUserRoleAssignment
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/Policy_JobUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy_JobUsersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Role_Cell) at Policy_JobUsersLV.pcf: line 21, column 41
    function sortValue_0 (assignment :  entity.JobUserRoleAssignment) : java.lang.Object {
      return assignment.Role
    }
    
    // 'value' attribute on AltUserCell (id=User_Cell) at Policy_JobUsersLV.pcf: line 25, column 44
    function sortValue_1 (assignment :  entity.JobUserRoleAssignment) : java.lang.Object {
      return assignment.AssignedUser
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at Policy_JobUsersLV.pcf: line 29, column 45
    function sortValue_2 (assignment :  entity.JobUserRoleAssignment) : java.lang.Object {
      return assignment.AssignedGroup
    }
    
    // 'value' attribute on TextCell (id=Phone_Cell) at Policy_JobUsersLV.pcf: line 33, column 70
    function sortValue_3 (assignment :  entity.JobUserRoleAssignment) : java.lang.Object {
      return assignment.AssignedUser.Contact.PrimaryPhoneValue
    }
    
    // 'value' attribute on RowIterator at Policy_JobUsersLV.pcf: line 15, column 50
    function value_22 () : entity.JobUserRoleAssignment[] {
      return job.RoleAssignments
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    
  }
  
  
}