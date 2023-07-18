package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/RoleUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RoleUsersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/RoleUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RoleUsersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=FullName_Cell) at RoleUsersLV.pcf: line 30, column 45
    function action_4 () : void {
      UserDetailPage.go(user)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at RoleUsersLV.pcf: line 36, column 44
    function action_9 () : void {
      OrganizationDetail.go(user.Organization)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at RoleUsersLV.pcf: line 36, column 44
    function action_dest_10 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(user.Organization)
    }
    
    // 'action' attribute on TextCell (id=FullName_Cell) at RoleUsersLV.pcf: line 30, column 45
    function action_dest_5 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(user)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at RoleUsersLV.pcf: line 23, column 33
    function checkBoxVisible_14 () : java.lang.Boolean {
      return not user.Contact.Obfuscated or perm.System.editobfuscatedusercontact
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at RoleUsersLV.pcf: line 36, column 44
    function valueRoot_12 () : java.lang.Object {
      return user
    }
    
    // 'value' attribute on TextCell (id=FullName_Cell) at RoleUsersLV.pcf: line 30, column 45
    function valueRoot_7 () : java.lang.Object {
      return user.Contact
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at RoleUsersLV.pcf: line 36, column 44
    function value_11 () : entity.Organization {
      return user.Organization
    }
    
    // 'value' attribute on TextCell (id=FullName_Cell) at RoleUsersLV.pcf: line 30, column 45
    function value_6 () : java.lang.String {
      return user.Contact.DisplayName
    }
    
    property get user () : entity.User {
      return getIteratedValue(1) as entity.User
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/RoleUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RoleUsersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on RowIterator at RoleUsersLV.pcf: line 23, column 33
    function pickLocation_15 () : void {
      UserSearchPopup.push(null)
    }
    
    // 'sortBy' attribute on TextCell (id=FullName_Cell) at RoleUsersLV.pcf: line 30, column 45
    function sortValue_0 (user :  entity.User) : java.lang.Object {
      return user.Contact.LastName
    }
    
    // 'sortBy' attribute on TextCell (id=FullName_Cell) at RoleUsersLV.pcf: line 30, column 45
    function sortValue_1 (user :  entity.User) : java.lang.Object {
      return user.Contact.FirstName
    }
    
    // 'sortBy' attribute on TextCell (id=FullName_Cell) at RoleUsersLV.pcf: line 30, column 45
    function sortValue_2 (user :  entity.User) : java.lang.Object {
      return user.Contact.Name
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at RoleUsersLV.pcf: line 36, column 44
    function sortValue_3 (user :  entity.User) : java.lang.Object {
      return user.Organization
    }
    
    // 'toAdd' attribute on RowIterator at RoleUsersLV.pcf: line 23, column 33
    function toAdd_16 (user :  entity.User) : void {
      role.addRoleToUser(user)
    }
    
    // 'toRemove' attribute on RowIterator at RoleUsersLV.pcf: line 23, column 33
    function toRemove_17 (user :  entity.User) : void {
      role.removeRoleFromUser(user)
    }
    
    // 'value' attribute on RowIterator at RoleUsersLV.pcf: line 23, column 33
    function value_18 () : entity.User[] {
      return role.AllUsersArray
    }
    
    property get role () : Role {
      return getRequireValue("role", 0) as Role
    }
    
    property set role ($arg :  Role) {
      setRequireValue("role", 0, $arg)
    }
    
    
  }
  
  
}