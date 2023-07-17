package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UserDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserDetailPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UserDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetailPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (user :  User) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 13, column 80
    function afterCancel_2 () : void {
      UserDetailPage.go(user)
    }
    
    // 'afterCancel' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 13, column 80
    function afterCancel_dest_3 () : pcf.api.Destination {
      return pcf.UserDetailPage.createDestination(user)
    }
    
    // 'afterCommit' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 13, column 80
    function afterCommit_4 (TopLocation :  pcf.api.Location) : void {
      UserDetailPage.go(user)
    }
    
    // 'canEdit' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 13, column 80
    function canEdit_5 () : java.lang.Boolean {
      return perm.User.edit and User.util.CurrentUser.isInternalUserOrBelongsToOrganization(user.Organization)
    }
    
    // 'canVisit' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 13, column 80
    static function canVisit_6 (user :  User) : java.lang.Boolean {
      return perm.User.view and User.util.CurrentUser.isInternalUserOrBelongsToOrganization(user.Organization)
    }
    
    // 'def' attribute on ScreenRef at UserDetailPage.pcf: line 20, column 37
    function def_onEnter_0 (def :  pcf.UserDetailScreen) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on ScreenRef at UserDetailPage.pcf: line 20, column 37
    function def_refreshVariables_1 (def :  pcf.UserDetailScreen) : void {
      def.refreshVariables(user)
    }
    
    // 'parent' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 13, column 80
    static function parent_7 (user :  User) : pcf.api.Destination {
      return pcf.Admin.createDestination(user.Organization)
    }
    
    // 'title' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 13, column 80
    static function title_8 (user :  User) : java.lang.Object {
      return DisplayKey.get("Web.Admin.UserDetail", user.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.UserDetailPage {
      return super.CurrentLocation as pcf.UserDetailPage
    }
    
    property get user () : User {
      return getVariableValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setVariableValue("user", 0, $arg)
    }
    
    
  }
  
  
}