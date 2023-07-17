package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/AdminUserSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminUserSearchPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/usersandsecurity/AdminUserSearchPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminUserSearchPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at AdminUserSearchPage.pcf: line 11, column 33
    function def_onEnter_0 (def :  pcf.UserSearchScreen) : void {
      def.onEnter()
    }
    
    // 'def' attribute on ScreenRef at AdminUserSearchPage.pcf: line 11, column 33
    function def_refreshVariables_1 (def :  pcf.UserSearchScreen) : void {
      def.refreshVariables()
    }
    
    // Page (id=AdminUserSearchPage) at AdminUserSearchPage.pcf: line 9, column 62
    static function parent_2 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    override property get CurrentLocation () : pcf.AdminUserSearchPage {
      return super.CurrentLocation as pcf.AdminUserSearchPage
    }
    
    
  }
  
  
}