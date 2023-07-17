package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/AssignUserRoleOwnerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssignUserRoleOwnerPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/assignment/AssignUserRoleOwnerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssignUserRoleOwnerPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (userRoleOwners :  gw.api.assignment.UserRoleOwner[], userRole :  typekey.UserRole) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=AssignUserRoleOwnerPopup) at AssignUserRoleOwnerPopup.pcf: line 11, column 62
    function beforeCommit_76 (pickedValue :  GroupUser) : void {
      userRoleOwners.reassign(userRole, pickedUser)
    }
    
    // 'initialValue' attribute on Variable at AssignUserRoleOwnerPopup.pcf: line 23, column 25
    function initialValue_0 () : GroupUser {
      return null
    }
    
    // EditButtons at AssignUserRoleOwnerPopup.pcf: line 28, column 34
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on Label at AssignUserRoleOwnerPopup.pcf: line 33, column 103
    function label_2 () : java.lang.String {
      return DisplayKey.get("Web.Team.Reassign.ReassignRole", userRole.DisplayName)
    }
    
    // 'label' attribute on AltUserCell (id=JobUserRoleAssignedUser_Cell) at AssignUserRoleOwnerPopup.pcf: line 54, column 85
    function label_5 () : java.lang.Object {
      return userRole.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at AssignUserRoleOwnerPopup.pcf: line 46, column 56
    function sortValue_3 (roleOwner :  gw.api.assignment.UserRoleOwner) : java.lang.Object {
      return (typeof roleOwner).RelativeName
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at AssignUserRoleOwnerPopup.pcf: line 50, column 91
    function sortValue_4 (roleOwner :  gw.api.assignment.UserRoleOwner) : java.lang.Object {
      return gw.assignment.AssignmentUtil.getWorkOrderOrPolicyNumber(roleOwner)
    }
    
    // 'value' attribute on AltUserCell (id=JobUserRoleAssignedUser_Cell) at AssignUserRoleOwnerPopup.pcf: line 54, column 85
    function sortValue_6 (roleOwner :  gw.api.assignment.UserRoleOwner) : java.lang.Object {
      return roleOwner.getUserRoleAssignmentByRole(userRole).AssignedUser
    }
    
    // 'value' attribute on RowIterator at AssignUserRoleOwnerPopup.pcf: line 41, column 57
    function value_19 () : gw.api.assignment.UserRoleOwner[] {
      return userRoleOwners
    }
    
    override property get CurrentLocation () : pcf.AssignUserRoleOwnerPopup {
      return super.CurrentLocation as pcf.AssignUserRoleOwnerPopup
    }
    
    property get pickedUser () : GroupUser {
      return getVariableValue("pickedUser", 0) as GroupUser
    }
    
    property set pickedUser ($arg :  GroupUser) {
      setVariableValue("pickedUser", 0, $arg)
    }
    
    property get userRole () : typekey.UserRole {
      return getVariableValue("userRole", 0) as typekey.UserRole
    }
    
    property set userRole ($arg :  typekey.UserRole) {
      setVariableValue("userRole", 0, $arg)
    }
    
    property get userRoleOwners () : gw.api.assignment.UserRoleOwner[] {
      return getVariableValue("userRoleOwners", 0) as gw.api.assignment.UserRoleOwner[]
    }
    
    property set userRoleOwners ($arg :  gw.api.assignment.UserRoleOwner[]) {
      setVariableValue("userRoleOwners", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/assignment/AssignUserRoleOwnerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // AltGroupCell (id=Group_Cell) at AssignUserRoleOwnerPopup.pcf: line 129, column 44
    function action_58 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at AssignUserRoleOwnerPopup.pcf: line 129, column 44
    function action_60 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at AssignUserRoleOwnerPopup.pcf: line 134, column 51
    function action_65 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at AssignUserRoleOwnerPopup.pcf: line 134, column 51
    function action_67 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at AssignUserRoleOwnerPopup.pcf: line 129, column 44
    function action_dest_59 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Group_Cell) at AssignUserRoleOwnerPopup.pcf: line 129, column 44
    function action_dest_61 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at AssignUserRoleOwnerPopup.pcf: line 134, column 51
    function action_dest_66 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at AssignUserRoleOwnerPopup.pcf: line 134, column 51
    function action_dest_68 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'pickValue' attribute on RowIterator (id=UserIterator) at AssignUserRoleOwnerPopup.pcf: line 117, column 84
    function pickValue_72 () : GroupUser {
      pickedUser = foundUser; return pickedUser
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at AssignUserRoleOwnerPopup.pcf: line 124, column 55
    function valueRoot_56 () : java.lang.Object {
      return foundUser.User
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at AssignUserRoleOwnerPopup.pcf: line 129, column 44
    function valueRoot_63 () : java.lang.Object {
      return foundUser
    }
    
    // 'value' attribute on AltGroupCell (id=ParentGroup_Cell) at AssignUserRoleOwnerPopup.pcf: line 134, column 51
    function valueRoot_70 () : java.lang.Object {
      return foundUser.Group
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at AssignUserRoleOwnerPopup.pcf: line 124, column 55
    function value_55 () : java.lang.String {
      return foundUser.User.DisplayName
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at AssignUserRoleOwnerPopup.pcf: line 129, column 44
    function value_62 () : entity.Group {
      return foundUser.Group
    }
    
    // 'value' attribute on AltGroupCell (id=ParentGroup_Cell) at AssignUserRoleOwnerPopup.pcf: line 134, column 51
    function value_69 () : entity.Group {
      return foundUser.Group.Parent
    }
    
    property get foundUser () : entity.GroupUser {
      return getIteratedValue(2) as entity.GroupUser
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/assignment/AssignUserRoleOwnerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AssignUserRoleOwnerPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AssignUserRoleOwnerPopup.pcf: line 54, column 85
    function action_12 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at AssignUserRoleOwnerPopup.pcf: line 54, column 85
    function action_dest_13 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'label' attribute on AltUserCell (id=JobUserRoleAssignedUser_Cell) at AssignUserRoleOwnerPopup.pcf: line 54, column 85
    function label_14 () : java.lang.Object {
      return userRole.DisplayName
    }
    
    // 'value' attribute on AltUserCell (id=JobUserRoleAssignedUser_Cell) at AssignUserRoleOwnerPopup.pcf: line 54, column 85
    function valueRoot_16 () : java.lang.Object {
      return roleOwner.getUserRoleAssignmentByRole(userRole)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at AssignUserRoleOwnerPopup.pcf: line 46, column 56
    function valueRoot_8 () : java.lang.Object {
      return (typeof roleOwner)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at AssignUserRoleOwnerPopup.pcf: line 50, column 91
    function value_10 () : java.lang.String {
      return gw.assignment.AssignmentUtil.getWorkOrderOrPolicyNumber(roleOwner)
    }
    
    // 'value' attribute on AltUserCell (id=JobUserRoleAssignedUser_Cell) at AssignUserRoleOwnerPopup.pcf: line 54, column 85
    function value_15 () : entity.User {
      return roleOwner.getUserRoleAssignmentByRole(userRole).AssignedUser
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at AssignUserRoleOwnerPopup.pcf: line 46, column 56
    function value_7 () : java.lang.String {
      return (typeof roleOwner).RelativeName
    }
    
    property get roleOwner () : gw.api.assignment.UserRoleOwner {
      return getIteratedValue(1) as gw.api.assignment.UserRoleOwner
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/assignment/AssignUserRoleOwnerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends AssignUserRoleOwnerPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at AssignUserRoleOwnerPopup.pcf: line 78, column 65
    function def_onEnter_27 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria.UserCriteria.Contact)))
    }
    
    // 'def' attribute on InputSetRef at AssignUserRoleOwnerPopup.pcf: line 78, column 65
    function def_onEnter_29 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria.UserCriteria.Contact)))
    }
    
    // 'def' attribute on InputSetRef at AssignUserRoleOwnerPopup.pcf: line 103, column 47
    function def_onEnter_50 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at AssignUserRoleOwnerPopup.pcf: line 78, column 65
    function def_refreshVariables_28 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria.UserCriteria.Contact)))
    }
    
    // 'def' attribute on InputSetRef at AssignUserRoleOwnerPopup.pcf: line 78, column 65
    function def_refreshVariables_30 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria.UserCriteria.Contact)))
    }
    
    // 'def' attribute on InputSetRef at AssignUserRoleOwnerPopup.pcf: line 103, column 47
    function def_refreshVariables_51 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at AssignUserRoleOwnerPopup.pcf: line 74, column 65
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.UserCriteria.Username = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaName_Input) at AssignUserRoleOwnerPopup.pcf: line 84, column 66
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.GroupCriteria.GroupName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=GroupName_Input) at AssignUserRoleOwnerPopup.pcf: line 90, column 66
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.QueueCriteria.QueueGroupName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=QueueName_Input) at AssignUserRoleOwnerPopup.pcf: line 96, column 66
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.QueueCriteria.QueueName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'mode' attribute on InputSetRef at AssignUserRoleOwnerPopup.pcf: line 78, column 65
    function mode_31 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'searchCriteria' attribute on SearchPanel at AssignUserRoleOwnerPopup.pcf: line 64, column 70
    function searchCriteria_75 () : gw.api.assignment.AssignmentSearchCriteria {
      var crit = new gw.api.assignment.AssignmentSearchCriteria(); crit.SearchType = AssignmentSearchType.TC_USER; return crit
    }
    
    // 'search' attribute on SearchPanel at AssignUserRoleOwnerPopup.pcf: line 64, column 70
    function search_74 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'sortBy' attribute on TextCell (id=User_Cell) at AssignUserRoleOwnerPopup.pcf: line 124, column 55
    function sortValue_52 (foundUser :  entity.GroupUser) : java.lang.Object {
      return foundUser.User.Contact.LastName
    }
    
    // 'sortBy' attribute on TextCell (id=User_Cell) at AssignUserRoleOwnerPopup.pcf: line 124, column 55
    function sortValue_53 (foundUser :  entity.GroupUser) : java.lang.Object {
      return foundUser.User.Contact.FirstName
    }
    
    // 'sortBy' attribute on TextCell (id=User_Cell) at AssignUserRoleOwnerPopup.pcf: line 124, column 55
    function sortValue_54 (foundUser :  entity.GroupUser) : java.lang.Object {
      return foundUser.User.Contact.Name
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at AssignUserRoleOwnerPopup.pcf: line 74, column 65
    function valueRoot_23 () : java.lang.Object {
      return searchCriteria.UserCriteria
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaName_Input) at AssignUserRoleOwnerPopup.pcf: line 84, column 66
    function valueRoot_35 () : java.lang.Object {
      return searchCriteria.GroupCriteria
    }
    
    // 'value' attribute on TextInput (id=GroupName_Input) at AssignUserRoleOwnerPopup.pcf: line 90, column 66
    function valueRoot_41 () : java.lang.Object {
      return searchCriteria.QueueCriteria
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at AssignUserRoleOwnerPopup.pcf: line 74, column 65
    function value_21 () : java.lang.String {
      return searchCriteria.UserCriteria.Username
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaName_Input) at AssignUserRoleOwnerPopup.pcf: line 84, column 66
    function value_33 () : java.lang.String {
      return searchCriteria.GroupCriteria.GroupName
    }
    
    // 'value' attribute on TextInput (id=GroupName_Input) at AssignUserRoleOwnerPopup.pcf: line 90, column 66
    function value_39 () : java.lang.String {
      return searchCriteria.QueueCriteria.QueueGroupName
    }
    
    // 'value' attribute on TextInput (id=QueueName_Input) at AssignUserRoleOwnerPopup.pcf: line 96, column 66
    function value_45 () : java.lang.String {
      return searchCriteria.QueueCriteria.QueueName
    }
    
    // 'value' attribute on RowIterator (id=UserIterator) at AssignUserRoleOwnerPopup.pcf: line 117, column 84
    function value_73 () : gw.api.database.IQueryBeanResult<entity.GroupUser> {
      return searchResult.Users as gw.api.database.IQueryBeanResult<GroupUser>
    }
    
    // 'visible' attribute on TextInput (id=Username_Input) at AssignUserRoleOwnerPopup.pcf: line 74, column 65
    function visible_20 () : java.lang.Boolean {
      return searchCriteria.SearchType == TC_USER
    }
    
    // 'visible' attribute on TextInput (id=GroupCriteriaName_Input) at AssignUserRoleOwnerPopup.pcf: line 84, column 66
    function visible_32 () : java.lang.Boolean {
      return searchCriteria.SearchType == TC_GROUP
    }
    
    // 'visible' attribute on TextInput (id=GroupName_Input) at AssignUserRoleOwnerPopup.pcf: line 90, column 66
    function visible_38 () : java.lang.Boolean {
      return searchCriteria.SearchType == TC_QUEUE
    }
    
    property get searchCriteria () : gw.api.assignment.AssignmentSearchCriteria {
      return getCriteriaValue(1) as gw.api.assignment.AssignmentSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.api.assignment.AssignmentSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get searchResult () : gw.api.assignment.AssignmentSearchResult {
      return getResultsValue(1) as gw.api.assignment.AssignmentSearchResult
    }
    
    
  }
  
  
}