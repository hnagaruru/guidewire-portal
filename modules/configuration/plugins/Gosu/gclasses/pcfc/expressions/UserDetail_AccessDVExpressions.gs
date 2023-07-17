package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UserDetail_AccessDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserDetail_AccessDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UserDetail_AccessDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends UserDetail_AccessDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at UserDetail_AccessDV.pcf: line 136, column 40
    function action_58 () : void {
      AdminProducerCodeDetail.go(prodCode)
    }
    
    // 'action' attribute on Link (id=ViewRolesButton) at UserDetail_AccessDV.pcf: line 172, column 70
    function action_76 () : void {
      ModifyUserProducerCodeRolesPopup.push(user, prodCode, false)
    }
    
    // 'action' attribute on Link (id=ModifyRolesButton) at UserDetail_AccessDV.pcf: line 179, column 70
    function action_79 () : void {
      ModifyUserProducerCodeRolesPopup.push(user, prodCode)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at UserDetail_AccessDV.pcf: line 136, column 40
    function action_dest_59 () : pcf.api.Destination {
      return pcf.AdminProducerCodeDetail.createDestination(prodCode)
    }
    
    // 'action' attribute on Link (id=ViewRolesButton) at UserDetail_AccessDV.pcf: line 172, column 70
    function action_dest_77 () : pcf.api.Destination {
      return pcf.ModifyUserProducerCodeRolesPopup.createDestination(user, prodCode, false)
    }
    
    // 'action' attribute on Link (id=ModifyRolesButton) at UserDetail_AccessDV.pcf: line 179, column 70
    function action_dest_80 () : pcf.api.Destination {
      return pcf.ModifyUserProducerCodeRolesPopup.createDestination(user, prodCode)
    }
    
    // 'initialValue' attribute on Variable at UserDetail_AccessDV.pcf: line 129, column 38
    function initialValue_57 () : entity.Group[] {
      return gw.web.admin.UserUIHelper.initialGroups(prodCode, user)
    }
    
    // RowIterator at UserDetail_AccessDV.pcf: line 125, column 44
    function initializeVariables_81 () : void {
        groups = gw.web.admin.UserUIHelper.initialGroups(prodCode, user);

    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at UserDetail_AccessDV.pcf: line 136, column 40
    function valueRoot_61 () : java.lang.Object {
      return prodCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at UserDetail_AccessDV.pcf: line 136, column 40
    function value_60 () : java.lang.String {
      return prodCode.Code
    }
    
    // 'value' attribute on TextCell (id=Desci_Cell) at UserDetail_AccessDV.pcf: line 140, column 47
    function value_63 () : java.lang.String {
      return prodCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at UserDetail_AccessDV.pcf: line 145, column 53
    function value_66 () : typekey.ProducerStatus {
      return prodCode.ProducerStatus
    }
    
    // 'value' attribute on LinkIterator at UserDetail_AccessDV.pcf: line 152, column 46
    function value_74 () : entity.Group[] {
      return groups
    }
    
    // 'visible' attribute on Link (id=ViewRolesButton) at UserDetail_AccessDV.pcf: line 172, column 70
    function visible_75 () : java.lang.Boolean {
      return prodCode.ProducerCodeRoles.Count > 0
    }
    
    property get groups () : entity.Group[] {
      return getVariableValue("groups", 1) as entity.Group[]
    }
    
    property set groups ($arg :  entity.Group[]) {
      setVariableValue("groups", 1, $arg)
    }
    
    property get prodCode () : ProducerCode {
      return getIteratedValue(1) as ProducerCode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UserDetail_AccessDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=Link) at UserDetail_AccessDV.pcf: line 157, column 34
    function action_70 () : void {
      GroupDetailPage.go(grp)
    }
    
    // 'action' attribute on Link (id=Link) at UserDetail_AccessDV.pcf: line 157, column 34
    function action_dest_71 () : pcf.api.Destination {
      return pcf.GroupDetailPage.createDestination(grp)
    }
    
    // 'available' attribute on Link (id=Link) at UserDetail_AccessDV.pcf: line 157, column 34
    function available_69 () : java.lang.Boolean {
      return grp.GroupType != TC_ROOT
    }
    
    // 'label' attribute on Link (id=Link) at UserDetail_AccessDV.pcf: line 157, column 34
    function label_72 () : java.lang.Object {
      return grp
    }
    
    // 'visible' attribute on Link (id=Filler) at UserDetail_AccessDV.pcf: line 161, column 53
    function visible_73 () : java.lang.Boolean {
      return groups.last() != grp
    }
    
    property get grp () : entity.Group {
      return getIteratedValue(2) as entity.Group
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UserDetail_AccessDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends UserDetail_AccessDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=ModifyRolesButton) at UserDetail_AccessDV.pcf: line 236, column 44
    function action_100 () : void {
      ModifyUserProducerCodeRolesPopup.push(user, prodCode)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at UserDetail_AccessDV.pcf: line 213, column 40
    function action_87 () : void {
      AdminProducerCodeDetail.go(prodCode)
    }
    
    // 'action' attribute on Link (id=ViewRolesButton) at UserDetail_AccessDV.pcf: line 230, column 44
    function action_98 () : void {
      ModifyUserProducerCodeRolesPopup.push(user, prodCode, false)
    }
    
    // 'action' attribute on Link (id=ModifyRolesButton) at UserDetail_AccessDV.pcf: line 236, column 44
    function action_dest_101 () : pcf.api.Destination {
      return pcf.ModifyUserProducerCodeRolesPopup.createDestination(user, prodCode)
    }
    
    // 'action' attribute on TextCell (id=Code_Cell) at UserDetail_AccessDV.pcf: line 213, column 40
    function action_dest_88 () : pcf.api.Destination {
      return pcf.AdminProducerCodeDetail.createDestination(prodCode)
    }
    
    // 'action' attribute on Link (id=ViewRolesButton) at UserDetail_AccessDV.pcf: line 230, column 44
    function action_dest_99 () : pcf.api.Destination {
      return pcf.ModifyUserProducerCodeRolesPopup.createDestination(user, prodCode, false)
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at UserDetail_AccessDV.pcf: line 213, column 40
    function valueRoot_90 () : java.lang.Object {
      return prodCode
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at UserDetail_AccessDV.pcf: line 213, column 40
    function value_89 () : java.lang.String {
      return prodCode.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserDetail_AccessDV.pcf: line 217, column 47
    function value_92 () : java.lang.String {
      return prodCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at UserDetail_AccessDV.pcf: line 222, column 53
    function value_95 () : typekey.ProducerStatus {
      return prodCode.ProducerStatus
    }
    
    property get prodCode () : ProducerCode {
      return getIteratedValue(1) as ProducerCode
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UserDetail_AccessDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UserDetail_AccessDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // AltGroupCell (id=Group_Cell) at UserDetail_AccessDV.pcf: line 82, column 42
    function action_22 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at UserDetail_AccessDV.pcf: line 82, column 42
    function action_24 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on AltGroupCell (id=Group_Cell) at UserDetail_AccessDV.pcf: line 82, column 42
    function action_27 () : void {
      GroupDetailPage.go(groupUser.Group)
    }
    
    // AltGroupCell (id=Group_Cell) at UserDetail_AccessDV.pcf: line 82, column 42
    function action_dest_23 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Group_Cell) at UserDetail_AccessDV.pcf: line 82, column 42
    function action_dest_25 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on AltGroupCell (id=Group_Cell) at UserDetail_AccessDV.pcf: line 82, column 42
    function action_dest_28 () : pcf.api.Destination {
      return pcf.GroupDetailPage.createDestination(groupUser.Group)
    }
    
    // 'available' attribute on AltGroupCell (id=Group_Cell) at UserDetail_AccessDV.pcf: line 82, column 42
    function available_26 () : java.lang.Boolean {
      return groupUser.Group != null and groupUser.Group.GroupType != TC_ROOT
    }
    
    // 'value' attribute on TypeKeyCell (id=LoadFactorType_Cell) at UserDetail_AccessDV.pcf: line 97, column 53
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      groupUser.LoadFactorType = (__VALUE_TO_SET as typekey.LoadFactorType)
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at UserDetail_AccessDV.pcf: line 105, column 48
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      groupUser.LoadFactor = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'validationExpression' attribute on TextCell (id=LoadFactor_Cell) at UserDetail_AccessDV.pcf: line 105, column 48
    function validationExpression_43 () : java.lang.Object {
      return !(groupUser.LoadFactor < 0 or groupUser.LoadFactor > 100)                     ? null : DisplayKey.get("Web.Admin.GroupUsers.LoadFactor.OufOfRange")
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at UserDetail_AccessDV.pcf: line 82, column 42
    function valueRoot_30 () : java.lang.Object {
      return groupUser
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at UserDetail_AccessDV.pcf: line 82, column 42
    function value_29 () : entity.Group {
      return groupUser.Group
    }
    
    // 'value' attribute on CheckBoxCell (id=Member_Cell) at UserDetail_AccessDV.pcf: line 86, column 43
    function value_33 () : java.lang.Boolean {
      return groupUser.Member
    }
    
    // 'value' attribute on CheckBoxCell (id=Manager_Cell) at UserDetail_AccessDV.pcf: line 90, column 44
    function value_36 () : java.lang.Boolean {
      return groupUser.Manager
    }
    
    // 'value' attribute on TypeKeyCell (id=LoadFactorType_Cell) at UserDetail_AccessDV.pcf: line 97, column 53
    function value_39 () : typekey.LoadFactorType {
      return groupUser.LoadFactorType
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at UserDetail_AccessDV.pcf: line 105, column 48
    function value_44 () : java.lang.Integer {
      return groupUser.LoadFactor
    }
    
    property get groupUser () : entity.GroupUser {
      return getIteratedValue(1) as entity.GroupUser
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/UserDetail_AccessDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetail_AccessDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'conversionExpression' attribute on AddMenuItem (id=AddUserGroup) at UserDetail_AccessDV.pcf: line 46, column 111
    function conversionExpression_10 (PickedValue :  Group) : entity.GroupUser {
      return gw.web.admin.UserUIHelper.validateAndAddGroup(PickedValue, user)
    }
    
    // 'value' attribute on BooleanRadioInput (id=UseProducerCodeSecurity_Input) at UserDetail_AccessDV.pcf: line 22, column 31
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      usePCSecurity = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=UseProducerCodeSecurity_Input) at UserDetail_AccessDV.pcf: line 22, column 31
    function editable_2 () : java.lang.Boolean {
      return perm.System.usereditpcsec
    }
    
    // 'initialValue' attribute on Variable at UserDetail_AccessDV.pcf: line 14, column 33
    function initialValue_0 () : java.lang.Boolean {
      return user.UseProducerCodeSecurity
    }
    
    // 'onChange' attribute on PostOnChange at UserDetail_AccessDV.pcf: line 24, column 73
    function onChange_1 () : void {
      user.updateUseProducerCodeSecurity(usePCSecurity)
    }
    
    // 'pickLocation' attribute on RowIterator at UserDetail_AccessDV.pcf: line 206, column 44
    function pickLocation_102 () : void {
      AdminProducerCodeSearchPopup.push(user.Organization.Carrier                                        ? null : user.Organization,                                        user.InheritedProducerCodes, true)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=AddUserGroup) at UserDetail_AccessDV.pcf: line 46, column 111
    function pickLocation_11 () : void {
      OrganizationGroupTreePopup.push(user.makeOrganizationSelection(), false, false)
    }
    
    // 'pickLocation' attribute on AddMenuItem (id=SearchAndAddGroup) at UserDetail_AccessDV.pcf: line 53, column 54
    function pickLocation_13 () : void {
      GroupSearchPopup.push()
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at UserDetail_AccessDV.pcf: line 82, column 42
    function sortValue_16 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.Group
    }
    
    // 'value' attribute on CheckBoxCell (id=Member_Cell) at UserDetail_AccessDV.pcf: line 86, column 43
    function sortValue_17 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.Member
    }
    
    // 'value' attribute on CheckBoxCell (id=Manager_Cell) at UserDetail_AccessDV.pcf: line 90, column 44
    function sortValue_18 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.Manager
    }
    
    // 'value' attribute on TypeKeyCell (id=LoadFactorType_Cell) at UserDetail_AccessDV.pcf: line 97, column 53
    function sortValue_19 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.LoadFactorType
    }
    
    // 'value' attribute on TextCell (id=LoadFactor_Cell) at UserDetail_AccessDV.pcf: line 105, column 48
    function sortValue_20 (groupUser :  entity.GroupUser) : java.lang.Object {
      return groupUser.LoadFactor
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at UserDetail_AccessDV.pcf: line 136, column 40
    function sortValue_54 (prodCode :  ProducerCode) : java.lang.Object {
      return prodCode.Code
    }
    
    // 'value' attribute on TextCell (id=Desci_Cell) at UserDetail_AccessDV.pcf: line 140, column 47
    function sortValue_55 (prodCode :  ProducerCode) : java.lang.Object {
      return prodCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at UserDetail_AccessDV.pcf: line 145, column 53
    function sortValue_56 (prodCode :  ProducerCode) : java.lang.Object {
      return prodCode.ProducerStatus
    }
    
    // 'value' attribute on TextCell (id=Code_Cell) at UserDetail_AccessDV.pcf: line 213, column 40
    function sortValue_84 (prodCode :  ProducerCode) : java.lang.Object {
      return prodCode.Code
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at UserDetail_AccessDV.pcf: line 217, column 47
    function sortValue_85 (prodCode :  ProducerCode) : java.lang.Object {
      return prodCode.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at UserDetail_AccessDV.pcf: line 222, column 53
    function sortValue_86 (prodCode :  ProducerCode) : java.lang.Object {
      return prodCode.ProducerStatus
    }
    
    // 'toAdd' attribute on RowIterator at UserDetail_AccessDV.pcf: line 206, column 44
    function toAdd_103 (prodCode :  ProducerCode) : void {
      prodCode.addUser(user)
    }
    
    // 'toAdd' attribute on RowIterator at UserDetail_AccessDV.pcf: line 73, column 44
    function toAdd_50 (groupUser :  entity.GroupUser) : void {
      gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, UserProducerCode)
    }
    
    // 'toRemove' attribute on RowIterator at UserDetail_AccessDV.pcf: line 206, column 44
    function toRemove_104 (prodCode :  ProducerCode) : void {
      prodCode.removeUser(user)
    }
    
    // 'toRemove' attribute on RowIterator at UserDetail_AccessDV.pcf: line 73, column 44
    function toRemove_51 (groupUser :  entity.GroupUser) : void {
      groupUser.Group.removeUser(user)
    }
    
    // 'value' attribute on RowIterator at UserDetail_AccessDV.pcf: line 206, column 44
    function value_105 () : java.lang.Object[] {
      return user.AdditionalProducerCodes.toArray()
    }
    
    // 'value' attribute on BooleanRadioInput (id=UseProducerCodeSecurity_Input) at UserDetail_AccessDV.pcf: line 22, column 31
    function value_4 () : java.lang.Boolean {
      return usePCSecurity
    }
    
    // 'value' attribute on RowIterator at UserDetail_AccessDV.pcf: line 73, column 44
    function value_52 () : entity.GroupUser[] {
      return user.AllGroupUsersAsArray
    }
    
    // 'value' attribute on RowIterator at UserDetail_AccessDV.pcf: line 125, column 44
    function value_82 () : java.lang.Object[] {
      return user.InheritedProducerCodes.toArray()
    }
    
    // 'visible' attribute on AddButton (id=AddGroupButton) at UserDetail_AccessDV.pcf: line 39, column 110
    function visible_14 () : java.lang.Boolean {
      return not gw.api.system.ExternalUserAccessParameterKey.ExternalUserAccessIsFullyRestricted()
    }
    
    // 'addVisible' attribute on IteratorButtons at UserDetail_AccessDV.pcf: line 34, column 113
    function visible_8 () : java.lang.Boolean {
      return gw.api.system.ExternalUserAccessParameterKey.ExternalUserAccessIsFullyRestricted()
    }
    
    property get usePCSecurity () : java.lang.Boolean {
      return getVariableValue("usePCSecurity", 0) as java.lang.Boolean
    }
    
    property set usePCSecurity ($arg :  java.lang.Boolean) {
      setVariableValue("usePCSecurity", 0, $arg)
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}