package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/NewOrganizationUserPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewOrganizationUserPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/NewOrganizationUserPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewOrganizationUserPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (organization :  Organization) : int {
      return 0
    }
    
    // 'canVisit' attribute on Popup (id=NewOrganizationUserPopup) at NewOrganizationUserPopup.pcf: line 10, column 59
    static function canVisit_4 (organization :  Organization) : java.lang.Boolean {
      return perm.User.create
    }
    
    // 'def' attribute on ScreenRef at NewOrganizationUserPopup.pcf: line 25, column 43
    function def_onEnter_2 (def :  pcf.OrganizationUserScreen) : void {
      def.onEnter(user)
    }
    
    // 'def' attribute on ScreenRef at NewOrganizationUserPopup.pcf: line 25, column 43
    function def_refreshVariables_3 (def :  pcf.OrganizationUserScreen) : void {
      def.refreshVariables(user)
    }
    
    // 'initialValue' attribute on Variable at NewOrganizationUserPopup.pcf: line 19, column 49
    function initialValue_0 () : gw.web.admin.OrganizationUIHelper {
      return new gw.web.admin.OrganizationUIHelper(organization)
    }
    
    // 'initialValue' attribute on Variable at NewOrganizationUserPopup.pcf: line 23, column 27
    function initialValue_1 () : entity.User {
      return helper.createUser()
    }
    
    override property get CurrentLocation () : pcf.NewOrganizationUserPopup {
      return super.CurrentLocation as pcf.NewOrganizationUserPopup
    }
    
    property get helper () : gw.web.admin.OrganizationUIHelper {
      return getVariableValue("helper", 0) as gw.web.admin.OrganizationUIHelper
    }
    
    property set helper ($arg :  gw.web.admin.OrganizationUIHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get organization () : Organization {
      return getVariableValue("organization", 0) as Organization
    }
    
    property set organization ($arg :  Organization) {
      setVariableValue("organization", 0, $arg)
    }
    
    property get user () : entity.User {
      return getVariableValue("user", 0) as entity.User
    }
    
    property set user ($arg :  entity.User) {
      setVariableValue("user", 0, $arg)
    }
    
    
  }
  
  
}