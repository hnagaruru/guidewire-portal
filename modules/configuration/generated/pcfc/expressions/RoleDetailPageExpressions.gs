package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/RoleDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RoleDetailPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/RoleDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RoleDetailPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (role :  Role) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=RoleDetailPage) at RoleDetailPage.pcf: line 13, column 80
    function afterCancel_2 () : void {
      Roles.go()
    }
    
    // 'afterCancel' attribute on Page (id=RoleDetailPage) at RoleDetailPage.pcf: line 13, column 80
    function afterCancel_dest_3 () : pcf.api.Destination {
      return pcf.Roles.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=RoleDetailPage) at RoleDetailPage.pcf: line 13, column 80
    function afterCommit_4 (TopLocation :  pcf.api.Location) : void {
      RoleDetailPage.go(role)
    }
    
    // 'canEdit' attribute on Page (id=RoleDetailPage) at RoleDetailPage.pcf: line 13, column 80
    function canEdit_5 () : java.lang.Boolean {
      return perm.Role.edit
    }
    
    // 'canVisit' attribute on Page (id=RoleDetailPage) at RoleDetailPage.pcf: line 13, column 80
    static function canVisit_6 (role :  Role) : java.lang.Boolean {
      return perm.Role.view
    }
    
    // 'def' attribute on ScreenRef at RoleDetailPage.pcf: line 20, column 37
    function def_onEnter_0 (def :  pcf.RoleDetailScreen) : void {
      def.onEnter(role)
    }
    
    // 'def' attribute on ScreenRef at RoleDetailPage.pcf: line 20, column 37
    function def_refreshVariables_1 (def :  pcf.RoleDetailScreen) : void {
      def.refreshVariables(role)
    }
    
    // 'parent' attribute on Page (id=RoleDetailPage) at RoleDetailPage.pcf: line 13, column 80
    static function parent_7 (role :  Role) : pcf.api.Destination {
      return pcf.Roles.createDestination()
    }
    
    // 'title' attribute on Page (id=RoleDetailPage) at RoleDetailPage.pcf: line 13, column 80
    static function title_8 (role :  Role) : java.lang.Object {
      return DisplayKey.get("Web.Admin.RoleDetail", role.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.RoleDetailPage {
      return super.CurrentLocation as pcf.RoleDetailPage
    }
    
    property get role () : Role {
      return getVariableValue("role", 0) as Role
    }
    
    property set role ($arg :  Role) {
      setVariableValue("role", 0, $arg)
    }
    
    
  }
  
  
}