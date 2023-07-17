package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/RoleDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RoleDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/RoleDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RoleDetailDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=Permission_Cell) at RoleDetailDV.pcf: line 89, column 30
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      rolePrivilege.Permission = (__VALUE_TO_SET as typekey.SystemPermissionType)
    }
    
    // 'editable' attribute on RangeCell (id=Permission_Cell) at RoleDetailDV.pcf: line 89, column 30
    function editable_31 () : java.lang.Boolean {
      return perm.RolePrivilege.edit
    }
    
    // 'valueRange' attribute on RangeCell (id=Permission_Cell) at RoleDetailDV.pcf: line 89, column 30
    function valueRange_35 () : java.lang.Object {
      return gw.web.admin.RoleUIHelper.getValueRange(rolePrivilege.Permission, availablePermissions)
    }
    
    // 'value' attribute on RangeCell (id=Permission_Cell) at RoleDetailDV.pcf: line 89, column 30
    function valueRoot_34 () : java.lang.Object {
      return rolePrivilege
    }
    
    // 'value' attribute on TextCell (id=PermissionCode_Cell) at RoleDetailDV.pcf: line 96, column 31
    function valueRoot_41 () : java.lang.Object {
      return rolePrivilege.Permission
    }
    
    // 'value' attribute on RangeCell (id=Permission_Cell) at RoleDetailDV.pcf: line 89, column 30
    function value_32 () : typekey.SystemPermissionType {
      return rolePrivilege.Permission
    }
    
    // 'value' attribute on TextCell (id=PermissionCode_Cell) at RoleDetailDV.pcf: line 96, column 31
    function value_40 () : java.lang.String {
      return rolePrivilege.Permission.Code
    }
    
    // 'value' attribute on TextCell (id=PermissionDescription_Cell) at RoleDetailDV.pcf: line 101, column 63
    function value_43 () : java.lang.String {
      return rolePrivilege.Permission.Description
    }
    
    // 'valueRange' attribute on RangeCell (id=Permission_Cell) at RoleDetailDV.pcf: line 89, column 30
    function verifyValueRangeIsAllowedType_36 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Permission_Cell) at RoleDetailDV.pcf: line 89, column 30
    function verifyValueRangeIsAllowedType_36 ($$arg :  typekey.SystemPermissionType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Permission_Cell) at RoleDetailDV.pcf: line 89, column 30
    function verifyValueRange_37 () : void {
      var __valueRangeArg = gw.web.admin.RoleUIHelper.getValueRange(rolePrivilege.Permission, availablePermissions)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_36(__valueRangeArg)
    }
    
    property get rolePrivilege () : entity.RolePrivilege {
      return getIteratedValue(1) as entity.RolePrivilege
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/RoleDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RoleDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CarrierInternalRole_Input) at RoleDetailDV.pcf: line 45, column 44
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      role.CarrierInternalRole = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at RoleDetailDV.pcf: line 54, column 35
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      role.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RoleDetailDV.pcf: line 27, column 28
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      role.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=RoleType_Input) at RoleDetailDV.pcf: line 34, column 38
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      role.RoleType = (__VALUE_TO_SET as typekey.RoleType)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=CarrierInternalRole_Input) at RoleDetailDV.pcf: line 45, column 44
    function editable_13 () : java.lang.Boolean {
      return perm.System.roleedittype
    }
    
    // 'editable' attribute on TypeKeyInput (id=RoleType_Input) at RoleDetailDV.pcf: line 34, column 38
    function editable_6 () : java.lang.Boolean {
      return oldRoleType == null
    }
    
    // 'initialValue' attribute on Variable at RoleDetailDV.pcf: line 13, column 24
    function initialValue_0 () : RoleType {
      return role.RoleType
    }
    
    // 'initialValue' attribute on Variable at RoleDetailDV.pcf: line 18, column 46
    function initialValue_1 () : typekey.SystemPermissionType[] {
      return gw.web.admin.RoleUIHelper.getAvailablePermissions(role)
    }
    
    // 'onChange' attribute on PostOnChange at RoleDetailDV.pcf: line 47, column 89
    function onChange_12 () : void {
      gw.api.web.admin.CarrierInternalUtil.setCarrierInternalRole(role)
    }
    
    // 'showConfirmMessage' attribute on BooleanRadioInput (id=CarrierInternalRole_Input) at RoleDetailDV.pcf: line 45, column 44
    function showConfirmMessage_15 () : java.lang.Boolean {
      return !role.CarrierInternalRole
    }
    
    // 'sortBy' attribute on RangeCell (id=Permission_Cell) at RoleDetailDV.pcf: line 89, column 30
    function sortValue_28 (rolePrivilege :  entity.RolePrivilege) : java.lang.Object {
      return rolePrivilege.Permission
    }
    
    // 'value' attribute on TextCell (id=PermissionCode_Cell) at RoleDetailDV.pcf: line 96, column 31
    function sortValue_29 (rolePrivilege :  entity.RolePrivilege) : java.lang.Object {
      return rolePrivilege.Permission.Code
    }
    
    // 'value' attribute on TextCell (id=PermissionDescription_Cell) at RoleDetailDV.pcf: line 101, column 63
    function sortValue_30 (rolePrivilege :  entity.RolePrivilege) : java.lang.Object {
      return rolePrivilege.Permission.Description
    }
    
    // 'toAdd' attribute on RowIterator at RoleDetailDV.pcf: line 76, column 48
    function toAdd_46 (rolePrivilege :  entity.RolePrivilege) : void {
      role.addToPrivileges(rolePrivilege)
    }
    
    // 'toRemove' attribute on RowIterator at RoleDetailDV.pcf: line 76, column 48
    function toRemove_47 (rolePrivilege :  entity.RolePrivilege) : void {
      role.removeFromPrivileges(rolePrivilege)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RoleDetailDV.pcf: line 27, column 28
    function valueRoot_4 () : java.lang.Object {
      return role
    }
    
    // 'value' attribute on BooleanRadioInput (id=CarrierInternalRole_Input) at RoleDetailDV.pcf: line 45, column 44
    function value_16 () : java.lang.Boolean {
      return role.CarrierInternalRole
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RoleDetailDV.pcf: line 27, column 28
    function value_2 () : java.lang.String {
      return role.Name
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at RoleDetailDV.pcf: line 54, column 35
    function value_22 () : java.lang.String {
      return role.Description
    }
    
    // 'value' attribute on RowIterator at RoleDetailDV.pcf: line 76, column 48
    function value_48 () : entity.RolePrivilege[] {
      return role.Privileges
    }
    
    // 'addVisible' attribute on IteratorButtons at RoleDetailDV.pcf: line 63, column 56
    function visible_26 () : java.lang.Boolean {
      return perm.RolePrivilege.create
    }
    
    // 'removeVisible' attribute on IteratorButtons at RoleDetailDV.pcf: line 63, column 56
    function visible_27 () : java.lang.Boolean {
      return perm.RolePrivilege.delete
    }
    
    property get availablePermissions () : typekey.SystemPermissionType[] {
      return getVariableValue("availablePermissions", 0) as typekey.SystemPermissionType[]
    }
    
    property set availablePermissions ($arg :  typekey.SystemPermissionType[]) {
      setVariableValue("availablePermissions", 0, $arg)
    }
    
    property get oldRoleType () : RoleType {
      return getVariableValue("oldRoleType", 0) as RoleType
    }
    
    property set oldRoleType ($arg :  RoleType) {
      setVariableValue("oldRoleType", 0, $arg)
    }
    
    property get role () : Role {
      return getRequireValue("role", 0) as Role
    }
    
    property set role ($arg :  Role) {
      setRequireValue("role", 0, $arg)
    }
    
    
  }
  
  
}