package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/GroupUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupUsersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/GroupUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupUsersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on RowIterator at GroupUsersLV.pcf: line 34, column 38
    function conversionExpression_8 (PickedValue :  User) : entity.GroupUser {
      return gw.web.admin.NewGroupUIHelper.validateUser(PickedValue, group)
    }
    
    // 'editable' attribute on RowIterator at GroupUsersLV.pcf: line 34, column 38
    function editable_7 () : java.lang.Boolean {
      return perm.GroupUser.edit
    }
    
    // 'initialValue' attribute on Variable at GroupUsersLV.pcf: line 17, column 28
    function initialValue_0 () : Organization {
      return gw.web.admin.NewGroupUIHelper.prepopulatedOrganization(group)
    }
    
    // 'initialValue' attribute on Variable at GroupUsersLV.pcf: line 22, column 23
    function initialValue_1 () : Boolean {
      return organization.Carrier
    }
    
    // 'pickLocation' attribute on RowIterator at GroupUsersLV.pcf: line 34, column 38
    function pickLocation_46 () : void {
      UserSearchPopup.push(organization, gw.web.admin.NewGroupUIHelper.getRequiredUserType(group))
    }
    
    // 'value' attribute on AltUserCell (id=User_Cell) at GroupUsersLV.pcf: line 43, column 34
    function sortValue_2 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.User
    }
    
    // 'value' attribute on CheckBoxCell (id=Member_Cell) at GroupUsersLV.pcf: line 50, column 37
    function sortValue_3 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.Member
    }
    
    // 'value' attribute on CheckBoxCell (id=Manager_Cell) at GroupUsersLV.pcf: line 55, column 38
    function sortValue_4 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.Manager
    }
    
    // 'value' attribute on TypeKeyCell (id=LoadFactorType_Cell) at GroupUsersLV.pcf: line 62, column 47
    function sortValue_5 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.LoadFactorType
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at GroupUsersLV.pcf: line 70, column 42
    function sortValue_6 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.LoadFactor
    }
    
    // 'toAdd' attribute on RowIterator at GroupUsersLV.pcf: line 34, column 38
    function toAdd_47 (groupUser :  entity.GroupUser) : void {
      groupUser.User.addToGroup(groupUser)
    }
    
    // 'toRemove' attribute on RowIterator at GroupUsersLV.pcf: line 34, column 38
    function toRemove_48 (groupUser :  entity.GroupUser) : void {
      group.removeUser(groupUser.User)
    }
    
    // 'value' attribute on RowIterator at GroupUsersLV.pcf: line 34, column 38
    function value_49 () : entity.GroupUser[] {
      return group.Users
    }
    
    property get group () : Group {
      return getRequireValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setRequireValue("group", 0, $arg)
    }
    
    property get isCarrierOrg () : Boolean {
      return getVariableValue("isCarrierOrg", 0) as Boolean
    }
    
    property set isCarrierOrg ($arg :  Boolean) {
      setVariableValue("isCarrierOrg", 0, $arg)
    }
    
    property get organization () : Organization {
      return getVariableValue("organization", 0) as Organization
    }
    
    property set organization ($arg :  Organization) {
      setVariableValue("organization", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/GroupUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GroupUsersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on AltUserCell (id=User_Cell) at GroupUsersLV.pcf: line 43, column 34
    function action_12 () : void {
      UserDetailPage.go(groupUser.User)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at GroupUsersLV.pcf: line 43, column 34
    function action_9 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at GroupUsersLV.pcf: line 43, column 34
    function action_dest_10 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserCell (id=User_Cell) at GroupUsersLV.pcf: line 43, column 34
    function action_dest_13 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(groupUser.User)
    }
    
    // 'value' attribute on AltUserCell (id=User_Cell) at GroupUsersLV.pcf: line 43, column 34
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      groupUser.User = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on CheckBoxCell (id=Member_Cell) at GroupUsersLV.pcf: line 50, column 37
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      groupUser.Member = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=Manager_Cell) at GroupUsersLV.pcf: line 55, column 38
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      groupUser.Manager = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyCell (id=LoadFactorType_Cell) at GroupUsersLV.pcf: line 62, column 47
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      groupUser.LoadFactorType = (__VALUE_TO_SET as typekey.LoadFactorType)
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at GroupUsersLV.pcf: line 70, column 42
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      groupUser.LoadFactor = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on AltUserCell (id=User_Cell) at GroupUsersLV.pcf: line 43, column 34
    function editable_11 () : java.lang.Boolean {
      return not groupUser.User.Contact.Obfuscated or perm.System.editobfuscatedusercontact
    }
    
    // 'validationExpression' attribute on TextCell (id=LoadFactor_Cell) at GroupUsersLV.pcf: line 70, column 42
    function validationExpression_38 () : java.lang.Object {
      return !(groupUser.LoadFactor < 0 or groupUser.LoadFactor > 100) ? null : DisplayKey.get("Web.Admin.GroupUsers.LoadFactor.OufOfRange")
    }
    
    // 'value' attribute on AltUserCell (id=User_Cell) at GroupUsersLV.pcf: line 43, column 34
    function valueRoot_16 () : java.lang.Object {
      return groupUser
    }
    
    // 'value' attribute on AltUserCell (id=User_Cell) at GroupUsersLV.pcf: line 43, column 34
    function value_14 () : entity.User {
      return groupUser.User
    }
    
    // 'value' attribute on CheckBoxCell (id=Member_Cell) at GroupUsersLV.pcf: line 50, column 37
    function value_20 () : java.lang.Boolean {
      return groupUser.Member
    }
    
    // 'value' attribute on CheckBoxCell (id=Manager_Cell) at GroupUsersLV.pcf: line 55, column 38
    function value_26 () : java.lang.Boolean {
      return groupUser.Manager
    }
    
    // 'value' attribute on TypeKeyCell (id=LoadFactorType_Cell) at GroupUsersLV.pcf: line 62, column 47
    function value_32 () : typekey.LoadFactorType {
      return groupUser.LoadFactorType
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at GroupUsersLV.pcf: line 70, column 42
    function value_39 () : java.lang.Integer {
      return groupUser.LoadFactor
    }
    
    property get groupUser () : entity.GroupUser {
      return getIteratedValue(1) as entity.GroupUser
    }
    
    
  }
  
  
}