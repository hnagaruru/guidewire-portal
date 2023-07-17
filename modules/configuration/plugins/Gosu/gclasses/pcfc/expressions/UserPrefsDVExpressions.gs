package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/user/UserPrefsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserPrefsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/user/UserPrefsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserPrefsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at UserPrefsDV.pcf: line 33, column 50
    function def_onEnter_19 (def :  pcf.UserPreferencesInputSet) : void {
      def.onEnter(userBase)
    }
    
    // 'def' attribute on InputSetRef at UserPrefsDV.pcf: line 33, column 50
    function def_refreshVariables_20 (def :  pcf.UserPreferencesInputSet) : void {
      def.refreshVariables(userBase)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SendEmailOnActivityAssign_Input) at UserPrefsDV.pcf: line 22, column 51
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      userPreferences.EmailOnActAssign = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=StartupPage_Input) at UserPrefsDV.pcf: line 41, column 42
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      userPreferences.StartupPage = (__VALUE_TO_SET as typekey.StartupPage)
    }
    
    // 'value' attribute on TypeKeyInput (id=ProductDesignMode_Input) at UserPrefsDV.pcf: line 49, column 71
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      userPreferences.ProductDesignMode = (__VALUE_TO_SET as typekey.ProductMode)
    }
    
    // 'value' attribute on TextInput (id=MaxRecentAccounts_Input) at UserPrefsDV.pcf: line 55, column 40
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      userPreferences.MaxRecentAccounts = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=MaxRecentPoliciesAndJobs_Input) at UserPrefsDV.pcf: line 61, column 40
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      userPreferences.MaxRecentPoliciesAndJobs  = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=MaxRecentContacts_Input) at UserPrefsDV.pcf: line 67, column 40
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      userPreferences.MaxRecentContacts = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 31, column 32
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      userBase.Credential.Password = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at UserPrefsDV.pcf: line 16, column 23
    function initialValue_0 () : Boolean {
      return gw.api.system.PLConfigParameters.SingleSignOnAuthenticationEnabled.getValue()
    }
    
    // 'valueRange' attribute on RangeInput (id=StartupPage_Input) at UserPrefsDV.pcf: line 41, column 42
    function valueRange_24 () : java.lang.Object {
      return getPossibleStartupPages(userBase)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SendEmailOnActivityAssign_Input) at UserPrefsDV.pcf: line 22, column 51
    function valueRoot_3 () : java.lang.Object {
      return userPreferences
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 31, column 32
    function valueRoot_7 () : java.lang.Object {
      return userBase.Credential
    }
    
    // 'value' attribute on BooleanRadioInput (id=SendEmailOnActivityAssign_Input) at UserPrefsDV.pcf: line 22, column 51
    function value_1 () : java.lang.Boolean {
      return userPreferences.EmailOnActAssign
    }
    
    // 'value' attribute on RangeInput (id=StartupPage_Input) at UserPrefsDV.pcf: line 41, column 42
    function value_21 () : typekey.StartupPage {
      return userPreferences.StartupPage
    }
    
    // 'value' attribute on TypeKeyInput (id=ProductDesignMode_Input) at UserPrefsDV.pcf: line 49, column 71
    function value_29 () : typekey.ProductMode {
      return userPreferences.ProductDesignMode
    }
    
    // 'value' attribute on TextInput (id=MaxRecentAccounts_Input) at UserPrefsDV.pcf: line 55, column 40
    function value_34 () : java.lang.Integer {
      return userPreferences.MaxRecentAccounts
    }
    
    // 'value' attribute on TextInput (id=MaxRecentPoliciesAndJobs_Input) at UserPrefsDV.pcf: line 61, column 40
    function value_38 () : java.lang.Integer {
      return userPreferences.MaxRecentPoliciesAndJobs 
    }
    
    // 'value' attribute on TextInput (id=MaxRecentContacts_Input) at UserPrefsDV.pcf: line 67, column 40
    function value_42 () : java.lang.Integer {
      return userPreferences.MaxRecentContacts
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 31, column 32
    function value_5 () : java.lang.String {
      return userBase.Credential.Password
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 31, column 32
    function value_8 () : java.lang.Object {
      return userBase.Credential.Password
    }
    
    // 'valueRange' attribute on RangeInput (id=StartupPage_Input) at UserPrefsDV.pcf: line 41, column 42
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StartupPage_Input) at UserPrefsDV.pcf: line 41, column 42
    function verifyValueRangeIsAllowedType_25 ($$arg :  typekey.StartupPage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StartupPage_Input) at UserPrefsDV.pcf: line 41, column 42
    function verifyValueRange_26 () : void {
      var __valueRangeArg = getPossibleStartupPages(userBase)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_25(__valueRangeArg)
    }
    
    // 'visible' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 31, column 32
    function visible_17 () : java.lang.Boolean {
      return !ssoEnabled
    }
    
    // 'visible' attribute on TypeKeyInput (id=ProductDesignMode_Input) at UserPrefsDV.pcf: line 49, column 71
    function visible_28 () : java.lang.Boolean {
      return gw.api.system.PCDependenciesGateway.ServerMode.Dev
    }
    
    property get ssoEnabled () : Boolean {
      return getVariableValue("ssoEnabled", 0) as Boolean
    }
    
    property set ssoEnabled ($arg :  Boolean) {
      setVariableValue("ssoEnabled", 0, $arg)
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
    
    function getPossibleStartupPages(user : User) : java.util.List
          {
            var list : java.util.List = new java.util.ArrayList(StartupPage.getTypeKeys(false))
    
            if(not(perm.Organization.search
                or perm.System.orgviewagency
                or perm.System.orgviewbasic
                or perm.System.orgviewextmgt
                or perm.System.prodcodeviewbasic
                or perm.System.prodcodeviewprefuw
              ))
            {
              list.remove( StartupPage.TC_ADMIN )
            }
    
            return list
          }
    
    
  }
  
  
}