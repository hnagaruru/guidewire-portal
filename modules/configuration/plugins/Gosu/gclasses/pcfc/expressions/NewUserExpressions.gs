package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/NewUser.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewUserExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/NewUser.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewUserExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=NewUser) at NewUser.pcf: line 15, column 59
    function afterCancel_4 () : void {
      Admin.go()
    }
    
    // 'afterCancel' attribute on Page (id=NewUser) at NewUser.pcf: line 15, column 59
    function afterCancel_dest_5 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=NewUser) at NewUser.pcf: line 15, column 59
    function afterCommit_6 (TopLocation :  pcf.api.Location) : void {
      UserDetailPage.go(user)
    }
    
    // 'canVisit' attribute on Page (id=NewUser) at NewUser.pcf: line 15, column 59
    static function canVisit_7 () : java.lang.Boolean {
      return perm.User.create
    }
    
    // 'def' attribute on ScreenRef at NewUser.pcf: line 27, column 37
    function def_onEnter_2 (def :  pcf.UserDetailScreen) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on ScreenRef at NewUser.pcf: line 27, column 37
    function def_refreshVariables_3 (def :  pcf.UserDetailScreen) : void {
      def.refreshVariables(user)
    }
    
    // 'initialValue' attribute on Variable at NewUser.pcf: line 21, column 46
    function initialValue_0 () : gw.api.web.admin.NewUserHelper {
      return new gw.api.web.admin.NewUserHelper()
    }
    
    // 'initialValue' attribute on Variable at NewUser.pcf: line 25, column 20
    function initialValue_1 () : User {
      return pageHelper.createUser()
    }
    
    // 'parent' attribute on Page (id=NewUser) at NewUser.pcf: line 15, column 59
    static function parent_8 () : pcf.api.Destination {
      return pcf.Admin.createDestination(entity.User.util.CurrentUser.Organization)
    }
    
    // 'startEditing' attribute on Page (id=NewUser) at NewUser.pcf: line 15, column 59
    function startEditing_9 () : void {
      user.Credential = new Credential(); user.initPreferences()
    }
    
    override property get CurrentLocation () : pcf.NewUser {
      return super.CurrentLocation as pcf.NewUser
    }
    
    property get pageHelper () : gw.api.web.admin.NewUserHelper {
      return getVariableValue("pageHelper", 0) as gw.api.web.admin.NewUserHelper
    }
    
    property set pageHelper ($arg :  gw.api.web.admin.NewUserHelper) {
      setVariableValue("pageHelper", 0, $arg)
    }
    
    property get user () : User {
      return getVariableValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setVariableValue("user", 0, $arg)
    }
    
    
  }
  
  
}