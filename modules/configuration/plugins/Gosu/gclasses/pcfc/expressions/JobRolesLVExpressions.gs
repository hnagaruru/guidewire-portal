package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/JobRolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class JobRolesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/JobRolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends JobRolesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at JobRolesLV.pcf: line 39, column 44
    function action_10 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at JobRolesLV.pcf: line 39, column 44
    function action_dest_11 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'value' attribute on AltUserCell (id=AssignedUser_Cell) at JobRolesLV.pcf: line 39, column 44
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignment.AssignedUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on RangeCell (id=AssignedGroup_Cell) at JobRolesLV.pcf: line 47, column 37
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignment.AssignedGroup = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on TypeKeyCell (id=AssignmentRole_Cell) at JobRolesLV.pcf: line 33, column 41
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignment.Role = (__VALUE_TO_SET as typekey.UserRole)
    }
    
    // 'editable' attribute on Row at JobRolesLV.pcf: line 24, column 50
    function editable_23 () : java.lang.Boolean {
      return assignment.Role != TC_CREATOR
    }
    
    // 'editable' attribute on TypeKeyCell (id=AssignmentRole_Cell) at JobRolesLV.pcf: line 33, column 41
    function editable_3 () : java.lang.Boolean {
      return assignment.New
    }
    
    // 'filter' attribute on TypeKeyCell (id=AssignmentRole_Cell) at JobRolesLV.pcf: line 33, column 41
    function filter_7 (VALUE :  typekey.UserRole, VALUES :  typekey.UserRole[]) : java.lang.Boolean {
      return gw.assignment.AssignmentUtil.filterAssignableRoles( currentJob, VALUE )
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at JobRolesLV.pcf: line 47, column 37
    function valueRange_19 () : java.lang.Object {
      return gw.api.upgrade.Coercions.makeArray<entity.Group>(assignment.AssignedUser.AllGroups)
    }
    
    // 'value' attribute on TypeKeyCell (id=AssignmentRole_Cell) at JobRolesLV.pcf: line 33, column 41
    function valueRoot_6 () : java.lang.Object {
      return assignment
    }
    
    // 'value' attribute on AltUserCell (id=AssignedUser_Cell) at JobRolesLV.pcf: line 39, column 44
    function value_12 () : entity.User {
      return assignment.AssignedUser
    }
    
    // 'value' attribute on RangeCell (id=AssignedGroup_Cell) at JobRolesLV.pcf: line 47, column 37
    function value_16 () : entity.Group {
      return assignment.AssignedGroup
    }
    
    // 'value' attribute on TypeKeyCell (id=AssignmentRole_Cell) at JobRolesLV.pcf: line 33, column 41
    function value_4 () : typekey.UserRole {
      return assignment.Role
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at JobRolesLV.pcf: line 47, column 37
    function verifyValueRangeIsAllowedType_20 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at JobRolesLV.pcf: line 47, column 37
    function verifyValueRangeIsAllowedType_20 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at JobRolesLV.pcf: line 47, column 37
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at JobRolesLV.pcf: line 47, column 37
    function verifyValueRange_21 () : void {
      var __valueRangeArg = gw.api.upgrade.Coercions.makeArray<entity.Group>(assignment.AssignedUser.AllGroups)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    property get assignment () : entity.JobUserRoleAssignment {
      return getIteratedValue(1) as entity.JobUserRoleAssignment
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/JobRolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class JobRolesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=AssignmentRole_Cell) at JobRolesLV.pcf: line 33, column 41
    function sortValue_0 (assignment :  entity.JobUserRoleAssignment) : java.lang.Object {
      return assignment.Role
    }
    
    // 'value' attribute on AltUserCell (id=AssignedUser_Cell) at JobRolesLV.pcf: line 39, column 44
    function sortValue_1 (assignment :  entity.JobUserRoleAssignment) : java.lang.Object {
      return assignment.AssignedUser
    }
    
    // 'value' attribute on RangeCell (id=AssignedGroup_Cell) at JobRolesLV.pcf: line 47, column 37
    function sortValue_2 (assignment :  entity.JobUserRoleAssignment) : java.lang.Object {
      return assignment.AssignedGroup
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at JobRolesLV.pcf: line 22, column 50
    function toCreateAndAdd_25 () : entity.JobUserRoleAssignment {
      return currentJob.createAndAddRoleAssignment()
    }
    
    // 'toRemove' attribute on RowIterator at JobRolesLV.pcf: line 22, column 50
    function toRemove_26 (assignment :  entity.JobUserRoleAssignment) : void {
      currentJob.removeFromRoleAssignments(assignment)
    }
    
    // 'value' attribute on RowIterator at JobRolesLV.pcf: line 22, column 50
    function value_27 () : entity.JobUserRoleAssignment[] {
      return currentJob.RoleAssignments
    }
    
    property get currentJob () : Job {
      return getRequireValue("currentJob", 0) as Job
    }
    
    property set currentJob ($arg :  Job) {
      setRequireValue("currentJob", 0, $arg)
    }
    
    
  }
  
  
}