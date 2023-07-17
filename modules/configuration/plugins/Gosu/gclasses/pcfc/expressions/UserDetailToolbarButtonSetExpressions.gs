package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/UserDetailToolbarButtonSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserDetailToolbarButtonSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/UserDetailToolbarButtonSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetailToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=UserDetailToolbarButtons_DeleteUserButton) at UserDetailToolbarButtonSet.pcf: line 21, column 116
    function action_5 () : void {
      gw.api.admin.BaseAdminUtil.deleteUser(user); Admin.go()
    }
    
    // 'available' attribute on ToolbarButton (id=UserDetailToolbarButtons_DeleteUserButton) at UserDetailToolbarButtonSet.pcf: line 21, column 116
    function available_3 () : java.lang.Boolean {
      return user.SafeToDelete and (not user.Contact.Obfuscated or perm.System.editobfuscatedusercontact)
    }
    
    // EditButtons at UserDetailToolbarButtonSet.pcf: line 12, column 93
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'editVisible' attribute on EditButtons at UserDetailToolbarButtonSet.pcf: line 12, column 93
    function visible_0 () : java.lang.Boolean {
      return not user.Contact.Obfuscated or perm.System.editobfuscatedusercontact
    }
    
    // 'visible' attribute on ToolbarButton (id=UserDetailToolbarButtons_DeleteUserButton) at UserDetailToolbarButtonSet.pcf: line 21, column 116
    function visible_4 () : java.lang.Boolean {
      return perm.System.userdelete and (not user.Contact.Obfuscated or perm.System.editobfuscatedusercontact)
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}