package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/AccountFile_Roles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountFile_RolesExpressions {
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Roles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountFile_RolesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'canEdit' attribute on Page (id=AccountFile_Roles) at AccountFile_Roles.pcf: line 12, column 35
    function canEdit_31 () : java.lang.Boolean {
      return perm.Account.edit(account) and perm.System.editaccountroles
    }
    
    // 'canVisit' attribute on Page (id=AccountFile_Roles) at AccountFile_Roles.pcf: line 12, column 35
    static function canVisit_32 (account :  Account) : java.lang.Boolean {
      return perm.Account.view(account) and perm.System.accountroles
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Roles) at AccountFile_Roles.pcf: line 12, column 35
    function infoBar_onEnter_33 (def :  pcf.AccountFileInfoBar) : void {
      def.onEnter(account)
    }
    
    // 'infoBar' attribute on Page (id=AccountFile_Roles) at AccountFile_Roles.pcf: line 12, column 35
    function infoBar_refreshVariables_34 (def :  pcf.AccountFileInfoBar) : void {
      def.refreshVariables(account)
    }
    
    // EditButtons at AccountFile_Roles.pcf: line 21, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'parent' attribute on Page (id=AccountFile_Roles) at AccountFile_Roles.pcf: line 12, column 35
    static function parent_35 (account :  Account) : pcf.api.Destination {
      return pcf.AccountFile.createDestination(account)
    }
    
    // 'value' attribute on TypeKeyCell (id=AssignmentRole_Cell) at AccountFile_Roles.pcf: line 46, column 45
    function sortValue_1 (assignment :  entity.AccountUserRoleAssignment) : java.lang.Object {
      return assignment.Role
    }
    
    // 'value' attribute on AltUserCell (id=AssignedUser_Cell) at AccountFile_Roles.pcf: line 54, column 27
    function sortValue_2 (assignment :  entity.AccountUserRoleAssignment) : java.lang.Object {
      return assignment.AssignedUserWithUpdate
    }
    
    // 'value' attribute on RangeCell (id=AssignedGroup_Cell) at AccountFile_Roles.pcf: line 65, column 28
    function sortValue_3 (assignment :  entity.AccountUserRoleAssignment) : java.lang.Object {
      return assignment.AssignedGroup
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at AccountFile_Roles.pcf: line 36, column 58
    function toCreateAndAdd_28 () : entity.AccountUserRoleAssignment {
      return account.createAndAddRoleAssignment()
    }
    
    // 'toRemove' attribute on RowIterator at AccountFile_Roles.pcf: line 36, column 58
    function toRemove_29 (assignment :  entity.AccountUserRoleAssignment) : void {
      account.removeFromRoleAssignments(assignment)
    }
    
    // 'value' attribute on RowIterator at AccountFile_Roles.pcf: line 36, column 58
    function value_30 () : entity.AccountUserRoleAssignment[] {
      return account.RoleAssignments
    }
    
    override property get CurrentLocation () : pcf.AccountFile_Roles {
      return super.CurrentLocation as pcf.AccountFile_Roles
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/AccountFile_Roles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AccountFile_RolesExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AccountFile_Roles.pcf: line 54, column 27
    function action_11 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AccountFile_Roles.pcf: line 54, column 27
    function action_dest_12 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'value' attribute on AltUserCell (id=AssignedUser_Cell) at AccountFile_Roles.pcf: line 54, column 27
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignment.AssignedUserWithUpdate = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on RangeCell (id=AssignedGroup_Cell) at AccountFile_Roles.pcf: line 65, column 28
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignment.AssignedGroup = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on TypeKeyCell (id=AssignmentRole_Cell) at AccountFile_Roles.pcf: line 46, column 45
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      assignment.Role = (__VALUE_TO_SET as typekey.UserRole)
    }
    
    // 'editable' attribute on Row at AccountFile_Roles.pcf: line 38, column 54
    function editable_26 () : java.lang.Boolean {
      return assignment.Role != TC_CREATOR
    }
    
    // 'editable' attribute on TypeKeyCell (id=AssignmentRole_Cell) at AccountFile_Roles.pcf: line 46, column 45
    function editable_4 () : java.lang.Boolean {
      return assignment.New
    }
    
    // 'filter' attribute on TypeKeyCell (id=AssignmentRole_Cell) at AccountFile_Roles.pcf: line 46, column 45
    function filter_8 (VALUE :  typekey.UserRole, VALUES :  typekey.UserRole[]) : java.lang.Boolean {
      return gw.assignment.AssignmentUtil.filterAssignableRoles(account, VALUE)
    }
    
    // 'validationExpression' attribute on AltUserCell (id=AssignedUser_Cell) at AccountFile_Roles.pcf: line 54, column 27
    function validationExpression_13 () : java.lang.Object {
      return assignment.AssignedUser.AllGroups.Empty ? DisplayKey.get("Web.Account.Participants.UserValidation") : null
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at AccountFile_Roles.pcf: line 65, column 28
    function valueRange_22 () : java.lang.Object {
      return gw.api.upgrade.Coercions.makeArray<entity.Group>(assignment.AssignedUser.AllGroups)
    }
    
    // 'value' attribute on TypeKeyCell (id=AssignmentRole_Cell) at AccountFile_Roles.pcf: line 46, column 45
    function valueRoot_7 () : java.lang.Object {
      return assignment
    }
    
    // 'value' attribute on AltUserCell (id=AssignedUser_Cell) at AccountFile_Roles.pcf: line 54, column 27
    function value_14 () : entity.User {
      return assignment.AssignedUserWithUpdate
    }
    
    // 'value' attribute on RangeCell (id=AssignedGroup_Cell) at AccountFile_Roles.pcf: line 65, column 28
    function value_19 () : entity.Group {
      return assignment.AssignedGroup
    }
    
    // 'value' attribute on TypeKeyCell (id=AssignmentRole_Cell) at AccountFile_Roles.pcf: line 46, column 45
    function value_5 () : typekey.UserRole {
      return assignment.Role
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at AccountFile_Roles.pcf: line 65, column 28
    function verifyValueRangeIsAllowedType_23 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at AccountFile_Roles.pcf: line 65, column 28
    function verifyValueRangeIsAllowedType_23 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at AccountFile_Roles.pcf: line 65, column 28
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=AssignedGroup_Cell) at AccountFile_Roles.pcf: line 65, column 28
    function verifyValueRange_24 () : void {
      var __valueRangeArg = gw.api.upgrade.Coercions.makeArray<entity.Group>(assignment.AssignedUser.AllGroups)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    property get assignment () : entity.AccountUserRoleAssignment {
      return getIteratedValue(1) as entity.AccountUserRoleAssignment
    }
    
    
  }
  
  
}