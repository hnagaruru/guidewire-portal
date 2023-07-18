package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/MulticlusterAssignJobUserRolePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MulticlusterAssignJobUserRolePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/assignment/MulticlusterAssignJobUserRolePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // AltGroupCell (id=Group_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 137, column 44
    function action_58 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 137, column 44
    function action_60 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 142, column 51
    function action_65 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 142, column 51
    function action_67 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // AltGroupCell (id=Group_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 137, column 44
    function action_dest_59 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=Group_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 137, column 44
    function action_dest_61 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 142, column 51
    function action_dest_66 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // AltGroupCell (id=ParentGroup_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 142, column 51
    function action_dest_68 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'pickValue' attribute on RowIterator (id=UserIterator) at MulticlusterAssignJobUserRolePopup.pcf: line 125, column 84
    function pickValue_72 () : GroupUser {
      pickedUser = foundUser; return pickedUser
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 132, column 55
    function valueRoot_56 () : java.lang.Object {
      return foundUser.User
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 137, column 44
    function valueRoot_63 () : java.lang.Object {
      return foundUser
    }
    
    // 'value' attribute on AltGroupCell (id=ParentGroup_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 142, column 51
    function valueRoot_70 () : java.lang.Object {
      return foundUser.Group
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 132, column 55
    function value_55 () : java.lang.String {
      return foundUser.User.DisplayName
    }
    
    // 'value' attribute on AltGroupCell (id=Group_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 137, column 44
    function value_62 () : entity.Group {
      return foundUser.Group
    }
    
    // 'value' attribute on AltGroupCell (id=ParentGroup_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 142, column 51
    function value_69 () : entity.Group {
      return foundUser.Group.Parent
    }
    
    property get foundUser () : entity.GroupUser {
      return getIteratedValue(2) as entity.GroupUser
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/assignment/MulticlusterAssignJobUserRolePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MulticlusterAssignJobUserRolePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=JobUserRoleAssignedUser_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 62, column 128
    function label_15 () : java.lang.Object {
      return userRole.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 54, column 36
    function valueRoot_10 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 58, column 38
    function value_12 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=JobUserRoleAssignedUser_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 62, column 128
    function value_16 () : java.lang.String {
      return gw.api.web.desktop.data.FederatedJobAssignmentHelper.getUserDisplayNameFromJobToUserMap(jobToUser, job)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 54, column 36
    function value_9 () : java.lang.String {
      return job.JobType
    }
    
    property get job () : gw.api.web.desktop.data.JobDTO {
      return getIteratedValue(1) as gw.api.web.desktop.data.JobDTO
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/assignment/MulticlusterAssignJobUserRolePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MulticlusterAssignJobUserRolePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (jobs :  gw.api.web.desktop.data.JobDTO[], userRole :  typekey.UserRole) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=MulticlusterAssignJobUserRolePopup) at MulticlusterAssignJobUserRolePopup.pcf: line 11, column 62
    function beforeCommit_76 (pickedValue :  GroupUser) : void {
      assignmentHelper.performAssignment(pickedUser, userRole, jobs)
    }
    
    // 'initialValue' attribute on Variable at MulticlusterAssignJobUserRolePopup.pcf: line 20, column 68
    function initialValue_0 () : gw.api.web.desktop.data.FederatedJobAssignmentHelper {
      return gw.api.web.desktop.data.FederatedJobAssignmentHelper.NewInstance
    }
    
    // 'initialValue' attribute on Variable at MulticlusterAssignJobUserRolePopup.pcf: line 27, column 25
    function initialValue_1 () : GroupUser {
      return null
    }
    
    // 'initialValue' attribute on Variable at MulticlusterAssignJobUserRolePopup.pcf: line 31, column 19
    function initialValue_2 () : Map {
      return assignmentHelper.getUsersForJobRole(jobs, userRole)
    }
    
    // EditButtons at MulticlusterAssignJobUserRolePopup.pcf: line 36, column 34
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on Label at MulticlusterAssignJobUserRolePopup.pcf: line 41, column 103
    function label_4 () : java.lang.String {
      return DisplayKey.get("Web.Team.Reassign.ReassignRole", userRole.DisplayName)
    }
    
    // 'label' attribute on TextCell (id=JobUserRoleAssignedUser_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 62, column 128
    function label_7 () : java.lang.Object {
      return userRole.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 54, column 36
    function sortValue_5 (job :  gw.api.web.desktop.data.JobDTO) : java.lang.Object {
      return job.JobType
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 58, column 38
    function sortValue_6 (job :  gw.api.web.desktop.data.JobDTO) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=JobUserRoleAssignedUser_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 62, column 128
    function sortValue_8 (job :  gw.api.web.desktop.data.JobDTO) : java.lang.Object {
      return gw.api.web.desktop.data.FederatedJobAssignmentHelper.getUserDisplayNameFromJobToUserMap(jobToUser, job)
    }
    
    // 'value' attribute on RowIterator at MulticlusterAssignJobUserRolePopup.pcf: line 49, column 56
    function value_19 () : gw.api.web.desktop.data.JobDTO[] {
      return jobs
    }
    
    override property get CurrentLocation () : pcf.MulticlusterAssignJobUserRolePopup {
      return super.CurrentLocation as pcf.MulticlusterAssignJobUserRolePopup
    }
    
    property get assignmentHelper () : gw.api.web.desktop.data.FederatedJobAssignmentHelper {
      return getVariableValue("assignmentHelper", 0) as gw.api.web.desktop.data.FederatedJobAssignmentHelper
    }
    
    property set assignmentHelper ($arg :  gw.api.web.desktop.data.FederatedJobAssignmentHelper) {
      setVariableValue("assignmentHelper", 0, $arg)
    }
    
    property get jobToUser () : Map {
      return getVariableValue("jobToUser", 0) as Map
    }
    
    property set jobToUser ($arg :  Map) {
      setVariableValue("jobToUser", 0, $arg)
    }
    
    property get jobs () : gw.api.web.desktop.data.JobDTO[] {
      return getVariableValue("jobs", 0) as gw.api.web.desktop.data.JobDTO[]
    }
    
    property set jobs ($arg :  gw.api.web.desktop.data.JobDTO[]) {
      setVariableValue("jobs", 0, $arg)
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
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/assignment/MulticlusterAssignJobUserRolePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends MulticlusterAssignJobUserRolePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at MulticlusterAssignJobUserRolePopup.pcf: line 86, column 65
    function def_onEnter_27 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.search.BasicNameOwner(new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria.UserCriteria.Contact)))
    }
    
    // 'def' attribute on InputSetRef at MulticlusterAssignJobUserRolePopup.pcf: line 86, column 65
    function def_onEnter_29 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.search.BasicNameOwner(new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria.UserCriteria.Contact)))
    }
    
    // 'def' attribute on InputSetRef at MulticlusterAssignJobUserRolePopup.pcf: line 111, column 47
    function def_onEnter_50 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at MulticlusterAssignJobUserRolePopup.pcf: line 86, column 65
    function def_refreshVariables_28 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria.UserCriteria.Contact)))
    }
    
    // 'def' attribute on InputSetRef at MulticlusterAssignJobUserRolePopup.pcf: line 86, column 65
    function def_refreshVariables_30 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.search.BasicNameOwner(new gw.globalization.ContactSearchCriteriaNameAdapter(searchCriteria.UserCriteria.Contact)))
    }
    
    // 'def' attribute on InputSetRef at MulticlusterAssignJobUserRolePopup.pcf: line 111, column 47
    function def_refreshVariables_51 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 82, column 65
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.UserCriteria.Username = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaName_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 92, column 66
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.GroupCriteria.GroupName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=GroupName_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 98, column 66
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.QueueCriteria.QueueGroupName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=QueueName_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 104, column 66
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.QueueCriteria.QueueName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'mode' attribute on InputSetRef at MulticlusterAssignJobUserRolePopup.pcf: line 86, column 65
    function mode_31 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'searchCriteria' attribute on SearchPanel at MulticlusterAssignJobUserRolePopup.pcf: line 72, column 70
    function searchCriteria_75 () : gw.api.assignment.AssignmentSearchCriteria {
      var crit = new gw.api.assignment.AssignmentSearchCriteria(); crit.SearchType = AssignmentSearchType.TC_USER; return crit
    }
    
    // 'search' attribute on SearchPanel at MulticlusterAssignJobUserRolePopup.pcf: line 72, column 70
    function search_74 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    // 'sortBy' attribute on TextCell (id=User_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 132, column 55
    function sortValue_52 (foundUser :  entity.GroupUser) : java.lang.Object {
      return foundUser.User.Contact.LastName
    }
    
    // 'sortBy' attribute on TextCell (id=User_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 132, column 55
    function sortValue_53 (foundUser :  entity.GroupUser) : java.lang.Object {
      return foundUser.User.Contact.FirstName
    }
    
    // 'sortBy' attribute on TextCell (id=User_Cell) at MulticlusterAssignJobUserRolePopup.pcf: line 132, column 55
    function sortValue_54 (foundUser :  entity.GroupUser) : java.lang.Object {
      return foundUser.User.Contact.Name
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 82, column 65
    function valueRoot_23 () : java.lang.Object {
      return searchCriteria.UserCriteria
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaName_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 92, column 66
    function valueRoot_35 () : java.lang.Object {
      return searchCriteria.GroupCriteria
    }
    
    // 'value' attribute on TextInput (id=GroupName_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 98, column 66
    function valueRoot_41 () : java.lang.Object {
      return searchCriteria.QueueCriteria
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 82, column 65
    function value_21 () : java.lang.String {
      return searchCriteria.UserCriteria.Username
    }
    
    // 'value' attribute on TextInput (id=GroupCriteriaName_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 92, column 66
    function value_33 () : java.lang.String {
      return searchCriteria.GroupCriteria.GroupName
    }
    
    // 'value' attribute on TextInput (id=GroupName_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 98, column 66
    function value_39 () : java.lang.String {
      return searchCriteria.QueueCriteria.QueueGroupName
    }
    
    // 'value' attribute on TextInput (id=QueueName_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 104, column 66
    function value_45 () : java.lang.String {
      return searchCriteria.QueueCriteria.QueueName
    }
    
    // 'value' attribute on RowIterator (id=UserIterator) at MulticlusterAssignJobUserRolePopup.pcf: line 125, column 84
    function value_73 () : gw.api.database.IQueryBeanResult<entity.GroupUser> {
      return searchResult.Users as gw.api.database.IQueryBeanResult<GroupUser>
    }
    
    // 'visible' attribute on TextInput (id=Username_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 82, column 65
    function visible_20 () : java.lang.Boolean {
      return searchCriteria.SearchType == TC_USER
    }
    
    // 'visible' attribute on TextInput (id=GroupCriteriaName_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 92, column 66
    function visible_32 () : java.lang.Boolean {
      return searchCriteria.SearchType == TC_GROUP
    }
    
    // 'visible' attribute on TextInput (id=GroupName_Input) at MulticlusterAssignJobUserRolePopup.pcf: line 98, column 66
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