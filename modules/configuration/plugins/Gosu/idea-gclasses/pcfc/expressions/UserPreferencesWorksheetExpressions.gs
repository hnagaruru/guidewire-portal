package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/user/UserPreferencesWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserPreferencesWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/user/UserPreferencesWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserPreferencesWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Worksheet (id=UserPreferencesWorksheet) at UserPreferencesWorksheet.pcf: line 12, column 61
    function beforeCommit_4 (pickedValue :  java.lang.Object) : void {
      userPreferences.commitUserPreferences()
    }
    
    // 'def' attribute on ScreenRef at UserPreferencesWorksheet.pcf: line 26, column 63
    function def_onEnter_2 (def :  pcf.UserPreferencesScreen) : void {
      def.onEnter(userPreferences, userBase)
    }
    
    // 'def' attribute on ScreenRef at UserPreferencesWorksheet.pcf: line 26, column 63
    function def_refreshVariables_3 (def :  pcf.UserPreferencesScreen) : void {
      def.refreshVariables(userPreferences, userBase)
    }
    
    // 'initialValue' attribute on Variable at UserPreferencesWorksheet.pcf: line 20, column 20
    function initialValue_0 () : User {
      return User.util.CurrentUser
    }
    
    // 'initialValue' attribute on Variable at UserPreferencesWorksheet.pcf: line 24, column 70
    function initialValue_1 () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return new gw.api.web.userpreference.UserPreferencesOfCurrentUser()
    }
    
    override property get CurrentLocation () : pcf.UserPreferencesWorksheet {
      return super.CurrentLocation as pcf.UserPreferencesWorksheet
    }
    
    property get userBase () : User {
      return getVariableValue("userBase", 0) as User
    }
    
    property set userBase ($arg :  User) {
      setVariableValue("userBase", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getVariableValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setVariableValue("userPreferences", 0, $arg)
    }
    
    
  }
  
  
}