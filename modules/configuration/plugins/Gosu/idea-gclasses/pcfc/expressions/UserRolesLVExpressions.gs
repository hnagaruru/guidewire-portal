package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UserRolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserRolesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UserRolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UserRolesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on RangeCell (id=RoleName_Cell) at UserRolesLV.pcf: line 33, column 23
    function action_2 () : void {
      RoleDetailPage.go(userRole.Role)
    }
    
    // 'action' attribute on RangeCell (id=RoleName_Cell) at UserRolesLV.pcf: line 33, column 23
    function action_dest_3 () : pcf.api.Destination {
      return pcf.RoleDetailPage.createDestination(userRole.Role)
    }
    
    // 'value' attribute on RangeCell (id=RoleName_Cell) at UserRolesLV.pcf: line 33, column 23
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      userRole.Role = (__VALUE_TO_SET as entity.Role)
    }
    
    // 'valueRange' attribute on RangeCell (id=RoleName_Cell) at UserRolesLV.pcf: line 33, column 23
    function valueRange_7 () : java.lang.Object {
      return user.listAvailableRoles()
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserRolesLV.pcf: line 41, column 24
    function valueRoot_12 () : java.lang.Object {
      return userRole.Role
    }
    
    // 'value' attribute on RangeCell (id=RoleName_Cell) at UserRolesLV.pcf: line 33, column 23
    function valueRoot_6 () : java.lang.Object {
      return userRole
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserRolesLV.pcf: line 41, column 24
    function value_11 () : java.lang.String {
      return userRole.Role.Description
    }
    
    // 'value' attribute on RangeCell (id=RoleName_Cell) at UserRolesLV.pcf: line 33, column 23
    function value_4 () : entity.Role {
      return userRole.Role
    }
    
    // 'valueRange' attribute on RangeCell (id=RoleName_Cell) at UserRolesLV.pcf: line 33, column 23
    function verifyValueRangeIsAllowedType_8 ($$arg :  entity.Role[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RoleName_Cell) at UserRolesLV.pcf: line 33, column 23
    function verifyValueRangeIsAllowedType_8 ($$arg :  gw.api.database.IQueryBeanResult<entity.Role>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RoleName_Cell) at UserRolesLV.pcf: line 33, column 23
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RoleName_Cell) at UserRolesLV.pcf: line 33, column 23
    function verifyValueRange_9 () : void {
      var __valueRangeArg = user.listAvailableRoles()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    property get userRole () : entity.UserRole {
      return getIteratedValue(1) as entity.UserRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UserRolesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserRolesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=RoleName_Cell) at UserRolesLV.pcf: line 33, column 23
    function sortValue_0 (userRole :  entity.UserRole) : java.lang.Object {
      return userRole.Role
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserRolesLV.pcf: line 41, column 24
    function sortValue_1 (userRole :  entity.UserRole) : java.lang.Object {
      return userRole.Role.Description
    }
    
    // 'toAdd' attribute on RowIterator at UserRolesLV.pcf: line 21, column 37
    function toAdd_14 (userRole :  entity.UserRole) : void {
      user.addToRoles(userRole)
    }
    
    // 'toRemove' attribute on RowIterator at UserRolesLV.pcf: line 21, column 37
    function toRemove_15 (userRole :  entity.UserRole) : void {
      user.removeFromRoles(userRole)
    }
    
    // 'value' attribute on RowIterator at UserRolesLV.pcf: line 21, column 37
    function value_16 () : entity.UserRole[] {
      return user.Roles
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}