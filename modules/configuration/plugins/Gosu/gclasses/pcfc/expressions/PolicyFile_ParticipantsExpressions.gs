package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Participants.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyFile_ParticipantsExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Participants.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyFile_ParticipantsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PolicyFile_Participants.pcf: line 59, column 48
    function action_12 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at PolicyFile_Participants.pcf: line 59, column 48
    function action_dest_13 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'value' attribute on AltUserCell (id=AssignedUser_Cell) at PolicyFile_Participants.pcf: line 59, column 48
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignment.AssignedUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on RangeCell (id=AssignedGroup_Cell) at PolicyFile_Participants.pcf: line 67, column 41
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignment.AssignedGroup = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on TypeKeyCell (id=AssignmentRole_Cell) at PolicyFile_Participants.pcf: line 53, column 45
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignment.Role = (__VALUE_TO_SET as typekey.UserRole)
    }
    
    // 'editable' attribute on Row at PolicyFile_Participants.pcf: line 44, column 54
    function editable_25 () : java.lang.Boolean {
      return assignment.Role != TC_CREATOR
    }
    
    // 'editable' attribute on TypeKeyCell (id=AssignmentRole_Cell) at PolicyFile_Participants.pcf: line 53, column 45
    function editable_5 () : java.lang.Boolean {
      return assignment.New
    }
    
    // 'filter' attribute on TypeKeyCell (id=AssignmentRole_Cell) at PolicyFile_Participants.pcf: line 53, column 45
    function filter_9 (VALUE :  typekey.UserRole, VALUES :  typekey.UserRole[]) : java.lang.Boolean {
      return gw.assignment.AssignmentUtil.filterAssignableRoles( policy, VALUE )
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at PolicyFile_Participants.pcf: line 67, column 41
    function valueRange_21 () : java.lang.Object {
      return gw.api.upgrade.Coercions.makeArray<entity.Group>(assignment.AssignedUser.AllGroups)
    }
    
    // 'value' attribute on TypeKeyCell (id=AssignmentRole_Cell) at PolicyFile_Participants.pcf: line 53, column 45
    function valueRoot_8 () : java.lang.Object {
      return assignment
    }
    
    // 'value' attribute on AltUserCell (id=AssignedUser_Cell) at PolicyFile_Participants.pcf: line 59, column 48
    function value_14 () : entity.User {
      return assignment.AssignedUser
    }
    
    // 'value' attribute on RangeCell (id=AssignedGroup_Cell) at PolicyFile_Participants.pcf: line 67, column 41
    function value_18 () : entity.Group {
      return assignment.AssignedGroup
    }
    
    // 'value' attribute on TypeKeyCell (id=AssignmentRole_Cell) at PolicyFile_Participants.pcf: line 53, column 45
    function value_6 () : typekey.UserRole {
      return assignment.Role
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at PolicyFile_Participants.pcf: line 67, column 41
    function verifyValueRangeIsAllowedType_22 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at PolicyFile_Participants.pcf: line 67, column 41
    function verifyValueRangeIsAllowedType_22 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at PolicyFile_Participants.pcf: line 67, column 41
    function verifyValueRangeIsAllowedType_22 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at PolicyFile_Participants.pcf: line 67, column 41
    function verifyValueRange_23 () : void {
      var __valueRangeArg = gw.api.upgrade.Coercions.makeArray<entity.Group>(assignment.AssignedUser.AllGroups)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_22(__valueRangeArg)
    }
    
    property get assignment () : entity.PolicyUserRoleAssignment {
      return getIteratedValue(1) as entity.PolicyUserRoleAssignment
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/PolicyFile_Participants.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyFile_ParticipantsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'afterEnter' attribute on Page (id=PolicyFile_Participants) at PolicyFile_Participants.pcf: line 10, column 69
    function afterEnter_30 () : void {
      gw.api.web.PebblesUtil.addWebMessages(CurrentLocation, policyPeriod.PolicyFileMessages)
    }
    
    // 'canEdit' attribute on Page (id=PolicyFile_Participants) at PolicyFile_Participants.pcf: line 10, column 69
    function canEdit_31 () : java.lang.Boolean {
      return perm.System.editpolicyroles
    }
    
    // 'canVisit' attribute on Page (id=PolicyFile_Participants) at PolicyFile_Participants.pcf: line 10, column 69
    static function canVisit_32 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.PolicyPeriod.view(policyPeriod) and perm.System.viewpolicyfile and perm.System.viewparticipants
    }
    
    // 'initialValue' attribute on Variable at PolicyFile_Participants.pcf: line 22, column 29
    function initialValue_0 () : entity.Policy {
      return policyPeriod.Policy
    }
    
    // EditButtons at PolicyFile_Participants.pcf: line 27, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // Page (id=PolicyFile_Participants) at PolicyFile_Participants.pcf: line 10, column 69
    static function parent_33 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod,asOfDate)
    }
    
    // 'value' attribute on TypeKeyCell (id=AssignmentRole_Cell) at PolicyFile_Participants.pcf: line 53, column 45
    function sortValue_2 (assignment :  entity.PolicyUserRoleAssignment) : java.lang.Object {
      return assignment.Role
    }
    
    // 'value' attribute on AltUserCell (id=AssignedUser_Cell) at PolicyFile_Participants.pcf: line 59, column 48
    function sortValue_3 (assignment :  entity.PolicyUserRoleAssignment) : java.lang.Object {
      return assignment.AssignedUser
    }
    
    // 'value' attribute on RangeCell (id=AssignedGroup_Cell) at PolicyFile_Participants.pcf: line 67, column 41
    function sortValue_4 (assignment :  entity.PolicyUserRoleAssignment) : java.lang.Object {
      return assignment.AssignedGroup
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at PolicyFile_Participants.pcf: line 42, column 57
    function toCreateAndAdd_27 () : entity.PolicyUserRoleAssignment {
      return policy.createAndAddRoleAssignment()
    }
    
    // 'toRemove' attribute on RowIterator at PolicyFile_Participants.pcf: line 42, column 57
    function toRemove_28 (assignment :  entity.PolicyUserRoleAssignment) : void {
      policy.removeFromRoleAssignments(assignment)
    }
    
    // 'value' attribute on RowIterator at PolicyFile_Participants.pcf: line 42, column 57
    function value_29 () : entity.PolicyUserRoleAssignment[] {
      return policy.RoleAssignments
    }
    
    override property get CurrentLocation () : pcf.PolicyFile_Participants {
      return super.CurrentLocation as pcf.PolicyFile_Participants
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policy () : entity.Policy {
      return getVariableValue("policy", 0) as entity.Policy
    }
    
    property set policy ($arg :  entity.Policy) {
      setVariableValue("policy", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}