package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/GroupDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupDetailInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/GroupDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupDetailInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on AltUserInput (id=Supervisor_Input) at GroupDetailInputSet.pcf: line 37, column 32
    function actionAvailable_14 () : java.lang.Boolean {
      return group.Supervisor != null and User.util.CurrentUser.isInternalUserOrBelongsToOrganization(group.Supervisor.Organization)
    }
    
    // 'action' attribute on AltUserInput (id=Supervisor_Input) at GroupDetailInputSet.pcf: line 37, column 32
    function action_12 () : void {
      UserDetailPage.go(group.Supervisor)
    }
    
    // AltUserInput (id=Supervisor_Input) at GroupDetailInputSet.pcf: line 37, column 32
    function action_9 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // AltUserInput (id=Supervisor_Input) at GroupDetailInputSet.pcf: line 37, column 32
    function action_dest_10 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserInput (id=Supervisor_Input) at GroupDetailInputSet.pcf: line 37, column 32
    function action_dest_13 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(group.Supervisor)
    }
    
    // 'value' attribute on AltUserInput (id=Supervisor_Input) at GroupDetailInputSet.pcf: line 37, column 32
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      group.Supervisor = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at GroupDetailInputSet.pcf: line 27, column 34
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      group.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=SecurityZone_Input) at GroupDetailInputSet.pcf: line 63, column 40
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      group.SecurityZone = (__VALUE_TO_SET as entity.SecurityZone)
    }
    
    // 'value' attribute on TextInput (id=BranchCode_Input) at GroupDetailInputSet.pcf: line 70, column 49
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      group.BranchCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LoadFactor_Input) at GroupDetailInputSet.pcf: line 81, column 38
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      group.LoadFactor = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on RangeInput (id=SecurityZone_Input) at GroupDetailInputSet.pcf: line 63, column 40
    function editable_21 () : java.lang.Boolean {
      return not User.util.CurrentUser.ExternalUser
    }
    
    // 'initialValue' attribute on Variable at GroupDetailInputSet.pcf: line 19, column 68
    function initialValue_0 () : gw.api.database.IQueryBeanResult<SecurityZone> {
      return (User.util.CurrentUser as User).findAvailableSecurityZones()
    }
    
    // 'required' attribute on AltUserInput (id=Supervisor_Input) at GroupDetailInputSet.pcf: line 37, column 32
    function required_15 () : java.lang.Boolean {
      return isSupervisorRequired
    }
    
    // 'sortBy' attribute on IteratorSort at GroupDetailInputSet.pcf: line 48, column 28
    function sortBy_5 (user :  entity.User) : java.lang.Object {
      return user.DisplayName
    }
    
    // 'validationExpression' attribute on AltUserInput (id=Supervisor_Input) at GroupDetailInputSet.pcf: line 37, column 32
    function validationExpression_11 () : java.lang.Object {
      return (group.Organization.Carrier and group.Supervisor.ExternalUser) ? DisplayKey.get("Web.Admin.GroupDetailInputSet.Supervisor.ValidationError") : null
    }
    
    // 'validationExpression' attribute on TextInput (id=LoadFactor_Input) at GroupDetailInputSet.pcf: line 81, column 38
    function validationExpression_38 () : java.lang.Object {
      return !(group.LoadFactor < 0 or group.LoadFactor > 100)              ? null : DisplayKey.get("Web.Admin.GroupDetailInputSet.Assignment.LoadFactor.OutOfRange")
    }
    
    // 'valueRange' attribute on RangeInput (id=SecurityZone_Input) at GroupDetailInputSet.pcf: line 63, column 40
    function valueRange_25 () : java.lang.Object {
      return allSecurityZones
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at GroupDetailInputSet.pcf: line 27, column 34
    function valueRoot_3 () : java.lang.Object {
      return group
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at GroupDetailInputSet.pcf: line 27, column 34
    function value_1 () : java.lang.String {
      return group.Description
    }
    
    // 'value' attribute on AltUserInput (id=Supervisor_Input) at GroupDetailInputSet.pcf: line 37, column 32
    function value_16 () : entity.User {
      return group.Supervisor
    }
    
    // 'value' attribute on RangeInput (id=SecurityZone_Input) at GroupDetailInputSet.pcf: line 63, column 40
    function value_22 () : entity.SecurityZone {
      return group.SecurityZone
    }
    
    // 'value' attribute on TextInput (id=BranchCode_Input) at GroupDetailInputSet.pcf: line 70, column 49
    function value_32 () : java.lang.String {
      return group.BranchCode
    }
    
    // 'value' attribute on TextInput (id=LoadFactor_Input) at GroupDetailInputSet.pcf: line 81, column 38
    function value_39 () : java.lang.Integer {
      return group.LoadFactor
    }
    
    // 'value' attribute on MenuItemIterator (id=UserIterator) at GroupDetailInputSet.pcf: line 45, column 37
    function value_8 () : entity.User[] {
      return existingUsers.subtract( {group.Supervisor} ).toTypedArray()
    }
    
    // 'valueRange' attribute on RangeInput (id=SecurityZone_Input) at GroupDetailInputSet.pcf: line 63, column 40
    function verifyValueRangeIsAllowedType_26 ($$arg :  entity.SecurityZone[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SecurityZone_Input) at GroupDetailInputSet.pcf: line 63, column 40
    function verifyValueRangeIsAllowedType_26 ($$arg :  gw.api.database.IQueryBeanResult<entity.SecurityZone>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SecurityZone_Input) at GroupDetailInputSet.pcf: line 63, column 40
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SecurityZone_Input) at GroupDetailInputSet.pcf: line 63, column 40
    function verifyValueRange_27 () : void {
      var __valueRangeArg = allSecurityZones
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_26(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=BranchCode_Input) at GroupDetailInputSet.pcf: line 70, column 49
    function visible_31 () : java.lang.Boolean {
      return group.GroupType == TC_BRANCHUW
    }
    
    property get allSecurityZones () : gw.api.database.IQueryBeanResult<SecurityZone> {
      return getVariableValue("allSecurityZones", 0) as gw.api.database.IQueryBeanResult<SecurityZone>
    }
    
    property set allSecurityZones ($arg :  gw.api.database.IQueryBeanResult<SecurityZone>) {
      setVariableValue("allSecurityZones", 0, $arg)
    }
    
    property get existingUsers () : List<User> {
      return getRequireValue("existingUsers", 0) as List<User>
    }
    
    property set existingUsers ($arg :  List<User>) {
      setRequireValue("existingUsers", 0, $arg)
    }
    
    property get group () : Group {
      return getRequireValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setRequireValue("group", 0, $arg)
    }
    
    property get isSupervisorRequired () : boolean {
      return getRequireValue("isSupervisorRequired", 0) as java.lang.Boolean
    }
    
    property set isSupervisorRequired ($arg :  boolean) {
      setRequireValue("isSupervisorRequired", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/GroupDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GroupDetailInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=UserMenuItem) at GroupDetailInputSet.pcf: line 52, column 39
    function action_6 () : void {
      group.Supervisor = user
    }
    
    // 'label' attribute on MenuItem (id=UserMenuItem) at GroupDetailInputSet.pcf: line 52, column 39
    function label_7 () : java.lang.Object {
      return user.DisplayName
    }
    
    property get user () : entity.User {
      return getIteratedValue(1) as entity.User
    }
    
    
  }
  
  
}