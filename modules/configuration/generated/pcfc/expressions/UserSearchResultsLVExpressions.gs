package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/UserSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/UserSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=Link) at UserSearchResultsLV.pcf: line 61, column 28
    function action_20 () : void {
      GroupDetailPage.go(grp)
    }
    
    // 'action' attribute on Link (id=Link) at UserSearchResultsLV.pcf: line 61, column 28
    function action_dest_21 () : pcf.api.Destination {
      return pcf.GroupDetailPage.createDestination(grp)
    }
    
    // 'available' attribute on Link (id=Link) at UserSearchResultsLV.pcf: line 61, column 28
    function available_19 () : java.lang.Boolean {
      return grp.GroupType != TC_ROOT
    }
    
    // 'label' attribute on Link (id=Link) at UserSearchResultsLV.pcf: line 61, column 28
    function label_22 () : java.lang.Object {
      return grp
    }
    
    // 'visible' attribute on Link (id=Filler) at UserSearchResultsLV.pcf: line 65, column 82
    function visible_23 () : java.lang.Boolean {
      return userSearchResultsLVUIHelper.isNotLastEntry(groups, grp)
    }
    
    property get grp () : entity.Group {
      return getIteratedValue(2) as entity.Group
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/UserSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends UserSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at UserSearchResultsLV.pcf: line 47, column 25
    function action_14 () : void {
      OrganizationDetail.go(user.Organization)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at UserSearchResultsLV.pcf: line 35, column 25
    function action_5 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on AltUserCell (id=DisplayName_Cell) at UserSearchResultsLV.pcf: line 35, column 25
    function action_7 () : void {
      UserDetailPage.go(user)
    }
    
    // 'action' attribute on TextCell (id=Organization_Cell) at UserSearchResultsLV.pcf: line 47, column 25
    function action_dest_15 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(user.Organization)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at UserSearchResultsLV.pcf: line 35, column 25
    function action_dest_6 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserCell (id=DisplayName_Cell) at UserSearchResultsLV.pcf: line 35, column 25
    function action_dest_8 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(user)
    }
    
    // 'canPick' attribute on RowIterator at UserSearchResultsLV.pcf: line 22, column 71
    function canPick_25 () : java.lang.Boolean {
      return not user.Contact.Obfuscated or perm.System.editobfuscatedusercontact
    }
    
    // 'initialValue' attribute on Variable at UserSearchResultsLV.pcf: line 26, column 32
    function initialValue_4 () : entity.Group[] {
      return userSearchResultsLVUIHelper.getSortedGroups(user)
    }
    
    // RowIterator at UserSearchResultsLV.pcf: line 22, column 71
    function initializeVariables_26 () : void {
        groups = userSearchResultsLVUIHelper.getSortedGroups(user);

    }
    
    // 'value' attribute on TextCell (id=Username_Cell) at UserSearchResultsLV.pcf: line 40, column 25
    function valueRoot_12 () : java.lang.Object {
      return user.Credential
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at UserSearchResultsLV.pcf: line 47, column 25
    function valueRoot_17 () : java.lang.Object {
      return user
    }
    
    // 'value' attribute on TextCell (id=Username_Cell) at UserSearchResultsLV.pcf: line 40, column 25
    function value_11 () : java.lang.String {
      return user.Credential.UserName
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at UserSearchResultsLV.pcf: line 47, column 25
    function value_16 () : entity.Organization {
      return user.Organization
    }
    
    // 'value' attribute on LinkIterator at UserSearchResultsLV.pcf: line 56, column 40
    function value_24 () : entity.Group[] {
      return groups
    }
    
    // 'value' attribute on AltUserCell (id=DisplayName_Cell) at UserSearchResultsLV.pcf: line 35, column 25
    function value_9 () : entity.User {
      return user
    }
    
    property get groups () : entity.Group[] {
      return getVariableValue("groups", 1) as entity.Group[]
    }
    
    property set groups ($arg :  entity.Group[]) {
      setVariableValue("groups", 1, $arg)
    }
    
    property get user () : entity.User {
      return getIteratedValue(1) as entity.User
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/UserSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at UserSearchResultsLV.pcf: line 14, column 57
    function initialValue_0 () : gw.web.search.UserSearchResultsLVUIHelper {
      return new gw.web.search.UserSearchResultsLVUIHelper()
    }
    
    // 'value' attribute on AltUserCell (id=DisplayName_Cell) at UserSearchResultsLV.pcf: line 35, column 25
    function sortValue_1 (user :  entity.User) : java.lang.Object {
      return user
    }
    
    // 'value' attribute on TextCell (id=Username_Cell) at UserSearchResultsLV.pcf: line 40, column 25
    function sortValue_2 (user :  entity.User) : java.lang.Object {
      return user.Credential.UserName
    }
    
    // 'value' attribute on TextCell (id=Organization_Cell) at UserSearchResultsLV.pcf: line 47, column 25
    function sortValue_3 (user :  entity.User) : java.lang.Object {
      return user.Organization
    }
    
    // 'value' attribute on RowIterator at UserSearchResultsLV.pcf: line 22, column 71
    function value_28 () : gw.api.database.IQueryBeanResult<entity.User> {
      return users
    }
    
    property get userSearchResultsLVUIHelper () : gw.web.search.UserSearchResultsLVUIHelper {
      return getVariableValue("userSearchResultsLVUIHelper", 0) as gw.web.search.UserSearchResultsLVUIHelper
    }
    
    property set userSearchResultsLVUIHelper ($arg :  gw.web.search.UserSearchResultsLVUIHelper) {
      setVariableValue("userSearchResultsLVUIHelper", 0, $arg)
    }
    
    property get users () : gw.api.database.IQueryBeanResult<User> {
      return getRequireValue("users", 0) as gw.api.database.IQueryBeanResult<User>
    }
    
    property set users ($arg :  gw.api.database.IQueryBeanResult<User>) {
      setRequireValue("users", 0, $arg)
    }
    
    
  }
  
  
}