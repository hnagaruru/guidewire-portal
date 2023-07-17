package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/GroupDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/GroupDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on OrgInput (id=Organization_Input) at GroupDetailDV.pcf: line 36, column 49
    function actionAvailable_14 () : java.lang.Boolean {
      return group.Organization != null and not User.util.CurrentUser.ExternalUser
    }
    
    // 'actionAvailable' attribute on RangeInput (id=Parent_Input) at GroupDetailDV.pcf: line 50, column 46
    function actionAvailable_30 () : java.lang.Boolean {
      return group.Parent != null and group.Parent.GroupType != TC_ROOT
    }
    
    // 'action' attribute on OrgInput (id=Organization_Input) at GroupDetailDV.pcf: line 36, column 49
    function action_11 () : void {
      OrganizationDetail.go(group.Organization)
    }
    
    // 'action' attribute on MenuItem (id=GroupSearchMenuIcon) at GroupDetailDV.pcf: line 54, column 82
    function action_21 () : void {
      GroupSearchPopup.push(group, group.Organization)
    }
    
    // 'action' attribute on MenuItem (id=GroupPickerMenuIcon) at GroupDetailDV.pcf: line 58, column 82
    function action_23 () : void {
      OrganizationGroupTreePopup.push(group.makeOrganizationSelection())
    }
    
    // 'action' attribute on RangeInput (id=Parent_Input) at GroupDetailDV.pcf: line 50, column 46
    function action_27 () : void {
      GroupDetailPage.go(group.Parent)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at GroupDetailDV.pcf: line 36, column 49
    function action_8 () : void {
      OrganizationSearchPopup.push(null,true)
    }
    
    // 'action' attribute on OrgInput (id=Organization_Input) at GroupDetailDV.pcf: line 36, column 49
    function action_dest_12 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(group.Organization)
    }
    
    // 'action' attribute on MenuItem (id=GroupSearchMenuIcon) at GroupDetailDV.pcf: line 54, column 82
    function action_dest_22 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination(group, group.Organization)
    }
    
    // 'action' attribute on MenuItem (id=GroupPickerMenuIcon) at GroupDetailDV.pcf: line 58, column 82
    function action_dest_24 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination(group.makeOrganizationSelection())
    }
    
    // 'action' attribute on RangeInput (id=Parent_Input) at GroupDetailDV.pcf: line 50, column 46
    function action_dest_28 () : pcf.api.Destination {
      return pcf.GroupDetailPage.createDestination(group.Parent)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Organization_Input) at GroupDetailDV.pcf: line 36, column 49
    function action_dest_9 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null,true)
    }
    
    // 'def' attribute on InputSetRef at GroupDetailDV.pcf: line 26, column 56
    function def_onEnter_3 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.search.GroupNameOwner(groupNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at GroupDetailDV.pcf: line 73, column 54
    function def_onEnter_46 (def :  pcf.GroupDetailInputSet) : void {
      def.onEnter(group, false, {})
    }
    
    // 'def' attribute on InputSetRef at GroupDetailDV.pcf: line 26, column 56
    function def_onEnter_5 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.search.GroupNameOwner(groupNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at GroupDetailDV.pcf: line 26, column 56
    function def_refreshVariables_4 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.GroupNameOwner(groupNameAdapter))
    }
    
    // 'def' attribute on InputSetRef at GroupDetailDV.pcf: line 73, column 54
    function def_refreshVariables_47 (def :  pcf.GroupDetailInputSet) : void {
      def.refreshVariables(group, false, {})
    }
    
    // 'def' attribute on InputSetRef at GroupDetailDV.pcf: line 26, column 56
    function def_refreshVariables_6 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.search.GroupNameOwner(groupNameAdapter))
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at GroupDetailDV.pcf: line 36, column 49
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      group.OrganizationWithSetParent = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on RangeInput (id=Parent_Input) at GroupDetailDV.pcf: line 50, column 46
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      group.ParentWithCircularityCheck = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at GroupDetailDV.pcf: line 69, column 39
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      group.GroupType = (__VALUE_TO_SET as typekey.GroupType)
    }
    
    // 'editable' attribute on OrgInput (id=Organization_Input) at GroupDetailDV.pcf: line 36, column 49
    function editable_10 () : java.lang.Boolean {
      return group.New and not User.util.CurrentUser.ExternalUser
    }
    
    // 'editable' attribute on RangeInput (id=Parent_Input) at GroupDetailDV.pcf: line 50, column 46
    function editable_25 () : java.lang.Boolean {
      return gw.web.admin.GroupDetailDVUIHelper.isParentRequiredAndEditableForGroup(group)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Type_Input) at GroupDetailDV.pcf: line 69, column 39
    function filter_44 (VALUE :  typekey.GroupType, VALUES :  typekey.GroupType[]) : java.lang.Boolean {
      return gw.web.admin.GroupDetailDVUIHelper.isValidType(group, VALUE)
    }
    
    // 'initialValue' attribute on Variable at GroupDetailDV.pcf: line 14, column 27
    function initialValue_0 () : entity.User {
      return User.util.CurrentUser
    }
    
    // 'initialValue' attribute on Variable at GroupDetailDV.pcf: line 18, column 23
    function initialValue_1 () : Boolean {
      return group.New and not currentUser.ExternalUser
    }
    
    // 'initialValue' attribute on Variable at GroupDetailDV.pcf: line 22, column 49
    function initialValue_2 () : gw.globalization.GroupNameAdapter {
      return new gw.globalization.GroupNameAdapter(group)
    }
    
    // 'mode' attribute on InputSetRef at GroupDetailDV.pcf: line 26, column 56
    function mode_7 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'onChange' attribute on PostOnChange at GroupDetailDV.pcf: line 60, column 95
    function onChange_20 () : void {
      gw.web.admin.GroupDetailDVUIHelper.clearGroupTypeIfNotInTypeList(group)
    }
    
    // 'onPick' attribute on OrgInput (id=Organization_Input) at GroupDetailDV.pcf: line 36, column 49
    function onPick_13 (PickedValue :  Organization) : void {
      gw.web.admin.GroupDetailDVUIHelper.clearGroupTypeIfNotInTypeList(group)
    }
    
    // 'onPick' attribute on RangeInput (id=Parent_Input) at GroupDetailDV.pcf: line 50, column 46
    function onPick_29 (PickedValue :  Group) : void {
      gw.web.admin.GroupDetailDVUIHelper.clearGroupTypeIfNotInTypeList(group)
    }
    
    // 'valueRange' attribute on RangeInput (id=Parent_Input) at GroupDetailDV.pcf: line 50, column 46
    function valueRange_35 () : java.lang.Object {
      return gw.web.admin.GroupDetailDVUIHelper.GroupsForCurrentUserInSelectedOrg(group)
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at GroupDetailDV.pcf: line 36, column 49
    function valueRoot_17 () : java.lang.Object {
      return group
    }
    
    // 'value' attribute on OrgInput (id=Organization_Input) at GroupDetailDV.pcf: line 36, column 49
    function value_15 () : entity.Organization {
      return group.OrganizationWithSetParent
    }
    
    // 'value' attribute on RangeInput (id=Parent_Input) at GroupDetailDV.pcf: line 50, column 46
    function value_32 () : entity.Group {
      return group.ParentWithCircularityCheck
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at GroupDetailDV.pcf: line 69, column 39
    function value_41 () : typekey.GroupType {
      return group.GroupType
    }
    
    // 'valueRange' attribute on RangeInput (id=Parent_Input) at GroupDetailDV.pcf: line 50, column 46
    function verifyValueRangeIsAllowedType_36 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Parent_Input) at GroupDetailDV.pcf: line 50, column 46
    function verifyValueRangeIsAllowedType_36 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Parent_Input) at GroupDetailDV.pcf: line 50, column 46
    function verifyValueRangeIsAllowedType_36 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Parent_Input) at GroupDetailDV.pcf: line 50, column 46
    function verifyValueRange_37 () : void {
      var __valueRangeArg = gw.web.admin.GroupDetailDVUIHelper.GroupsForCurrentUserInSelectedOrg(group)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_36(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=Parent_Input) at GroupDetailDV.pcf: line 50, column 46
    function visible_26 () : java.lang.Boolean {
      return group.GroupType != TC_ROOT
    }
    
    property get canSetAnyOrganization () : Boolean {
      return getVariableValue("canSetAnyOrganization", 0) as Boolean
    }
    
    property set canSetAnyOrganization ($arg :  Boolean) {
      setVariableValue("canSetAnyOrganization", 0, $arg)
    }
    
    property get currentUser () : entity.User {
      return getVariableValue("currentUser", 0) as entity.User
    }
    
    property set currentUser ($arg :  entity.User) {
      setVariableValue("currentUser", 0, $arg)
    }
    
    property get group () : Group {
      return getRequireValue("group", 0) as Group
    }
    
    property set group ($arg :  Group) {
      setRequireValue("group", 0, $arg)
    }
    
    property get groupNameAdapter () : gw.globalization.GroupNameAdapter {
      return getVariableValue("groupNameAdapter", 0) as gw.globalization.GroupNameAdapter
    }
    
    property set groupNameAdapter ($arg :  gw.globalization.GroupNameAdapter) {
      setVariableValue("groupNameAdapter", 0, $arg)
    }
    
    
  }
  
  
}