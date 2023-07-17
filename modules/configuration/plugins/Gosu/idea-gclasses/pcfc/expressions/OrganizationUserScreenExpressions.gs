package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/OrganizationUserScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationUserScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/OrganizationUserScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationUserScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at OrganizationUserScreen.pcf: line 14, column 40
    function def_onEnter_1 (def :  pcf.UserDetailDV) : void {
      def.onEnter(user, false)
    }
    
    // 'def' attribute on PanelRef at OrganizationUserScreen.pcf: line 14, column 40
    function def_refreshVariables_2 (def :  pcf.UserDetailDV) : void {
      def.refreshVariables(user, false)
    }
    
    // EditButtons at OrganizationUserScreen.pcf: line 11, column 21
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}