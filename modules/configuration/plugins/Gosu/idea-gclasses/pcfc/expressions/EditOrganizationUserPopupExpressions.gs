package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/EditOrganizationUserPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditOrganizationUserPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/EditOrganizationUserPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditOrganizationUserPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (user :  User) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at EditOrganizationUserPopup.pcf: line 16, column 43
    function def_onEnter_0 (def :  pcf.OrganizationUserScreen) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on ScreenRef at EditOrganizationUserPopup.pcf: line 16, column 43
    function def_refreshVariables_1 (def :  pcf.OrganizationUserScreen) : void {
      def.refreshVariables(user)
    }
    
    // 'startInEditMode' attribute on Popup (id=EditOrganizationUserPopup) at EditOrganizationUserPopup.pcf: line 9, column 68
    function startInEditMode_2 () : java.lang.Boolean {
      return user.New
    }
    
    // 'title' attribute on Popup (id=EditOrganizationUserPopup) at EditOrganizationUserPopup.pcf: line 9, column 68
    static function title_3 (user :  User) : java.lang.Object {
      return DisplayKey.get("Web.Admin.UserDetail", user)
    }
    
    override property get CurrentLocation () : pcf.EditOrganizationUserPopup {
      return super.CurrentLocation as pcf.EditOrganizationUserPopup
    }
    
    property get user () : User {
      return getVariableValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setVariableValue("user", 0, $arg)
    }
    
    
  }
  
  
}