package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/OrganizationUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationUsersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OrganizationUsersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at OrganizationUsersLV.pcf: line 24, column 25
    function action_2 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on AltUserCell (id=User_Cell) at OrganizationUsersLV.pcf: line 24, column 25
    function action_4 () : void {
      UserDetailPage.go(user)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at OrganizationUsersLV.pcf: line 24, column 25
    function action_dest_3 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on AltUserCell (id=User_Cell) at OrganizationUsersLV.pcf: line 24, column 25
    function action_dest_5 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(user)
    }
    
    // 'value' attribute on AltUserCell (id=User_Cell) at OrganizationUsersLV.pcf: line 24, column 25
    function value_6 () : entity.User {
      return user
    }
    
    property get user () : entity.User {
      return getIteratedValue(1) as entity.User
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationUsersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationUsersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at OrganizationUsersLV.pcf: line 13, column 60
    function initialValue_0 () : gw.api.database.IQueryBeanResult<User> {
      return organization.AllUsers
    }
    
    // 'value' attribute on AltUserCell (id=User_Cell) at OrganizationUsersLV.pcf: line 24, column 25
    function sortValue_1 (user :  entity.User) : java.lang.Object {
      return user
    }
    
    // 'value' attribute on RowIterator at OrganizationUsersLV.pcf: line 18, column 71
    function value_8 () : gw.api.database.IQueryBeanResult<entity.User> {
      return allUsers
    }
    
    property get allUsers () : gw.api.database.IQueryBeanResult<User> {
      return getVariableValue("allUsers", 0) as gw.api.database.IQueryBeanResult<User>
    }
    
    property set allUsers ($arg :  gw.api.database.IQueryBeanResult<User>) {
      setVariableValue("allUsers", 0, $arg)
    }
    
    property get organization () : Organization {
      return getRequireValue("organization", 0) as Organization
    }
    
    property set organization ($arg :  Organization) {
      setRequireValue("organization", 0, $arg)
    }
    
    
  }
  
  
}