package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/Roles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RolesExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/Roles.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RolesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=Roles_NewRoleButton) at Roles.pcf: line 24, column 25
    function action_1 () : void {
      NewRole.go()
    }
    
    // 'action' attribute on ToolbarButton (id=Roles_NewRoleButton) at Roles.pcf: line 24, column 25
    function action_dest_2 () : pcf.api.Destination {
      return pcf.NewRole.createDestination()
    }
    
    // 'afterCancel' attribute on Page (id=Roles) at Roles.pcf: line 12, column 57
    function afterCancel_7 () : void {
      Roles.go()
    }
    
    // 'afterCancel' attribute on Page (id=Roles) at Roles.pcf: line 12, column 57
    function afterCancel_dest_8 () : pcf.api.Destination {
      return pcf.Roles.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=Roles) at Roles.pcf: line 12, column 57
    function afterCommit_9 (TopLocation :  pcf.api.Location) : void {
      Roles.go()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=Roles_DeleteButton) at Roles.pcf: line 32, column 39
    function allCheckedRowsAction_4 (CheckedValues :  entity.Role[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.admin.BaseAdminUtil.deleteRoles(CheckedValues)
    }
    
    // 'canVisit' attribute on Page (id=Roles) at Roles.pcf: line 12, column 57
    static function canVisit_10 () : java.lang.Boolean {
      return perm.Role.view
    }
    
    // 'def' attribute on PanelRef at Roles.pcf: line 35, column 34
    function def_onEnter_5 (def :  pcf.RolesLV) : void {
      def.onEnter(allRoles)
    }
    
    // 'def' attribute on PanelRef at Roles.pcf: line 35, column 34
    function def_refreshVariables_6 (def :  pcf.RolesLV) : void {
      def.refreshVariables(allRoles)
    }
    
    // 'initialValue' attribute on Variable at Roles.pcf: line 16, column 60
    function initialValue_0 () : gw.api.database.IQueryBeanResult<Role> {
      return Role.finder.allOrderedByName()
    }
    
    // Page (id=Roles) at Roles.pcf: line 12, column 57
    static function parent_11 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=Roles_DeleteButton) at Roles.pcf: line 32, column 39
    function visible_3 () : java.lang.Boolean {
      return perm.Role.delete
    }
    
    override property get CurrentLocation () : pcf.Roles {
      return super.CurrentLocation as pcf.Roles
    }
    
    property get allRoles () : gw.api.database.IQueryBeanResult<Role> {
      return getVariableValue("allRoles", 0) as gw.api.database.IQueryBeanResult<Role>
    }
    
    property set allRoles ($arg :  gw.api.database.IQueryBeanResult<Role>) {
      setVariableValue("allRoles", 0, $arg)
    }
    
    
  }
  
  
}