package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/user/UserPreferencesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserPreferencesScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/user/UserPreferencesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserPreferencesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at UserPreferencesScreen.pcf: line 18, column 24
    function def_onEnter_1 (def :  pcf.UserPrefsDV) : void {
      def.onEnter(userPreferences, userBase)
    }
    
    // 'def' attribute on PanelRef at UserPreferencesScreen.pcf: line 18, column 24
    function def_refreshVariables_2 (def :  pcf.UserPrefsDV) : void {
      def.refreshVariables(userPreferences, userBase)
    }
    
    // EditButtons at UserPreferencesScreen.pcf: line 14, column 21
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    property get userBase () : User {
      return getRequireValue("userBase", 0) as User
    }
    
    property set userBase ($arg :  User) {
      setRequireValue("userBase", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getRequireValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setRequireValue("userPreferences", 0, $arg)
    }
    
    
  }
  
  
}