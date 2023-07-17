package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/preferences/UserDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserDetailInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/preferences/UserDetailInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetailInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=Name) at UserDetailInputSet.pcf: line 24, column 54
    function def_onEnter_2 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(UserOwner)
    }
    
    // 'def' attribute on InputSetRef (id=Name) at UserDetailInputSet.pcf: line 24, column 54
    function def_onEnter_4 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(UserOwner)
    }
    
    // 'def' attribute on InputSetRef (id=Name) at UserDetailInputSet.pcf: line 24, column 54
    function def_refreshVariables_3 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(UserOwner)
    }
    
    // 'def' attribute on InputSetRef (id=Name) at UserDetailInputSet.pcf: line 24, column 54
    function def_refreshVariables_5 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(UserOwner)
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserDetailInputSet.pcf: line 42, column 42
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.Credential.Password = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Active_Input) at UserDetailInputSet.pcf: line 48, column 39
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.Credential.Active = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AccountLocked_Input) at UserDetailInputSet.pcf: line 53, column 35
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.AccountLocked = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at UserDetailInputSet.pcf: line 32, column 41
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      User.Credential.UserName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=Active_Input) at UserDetailInputSet.pcf: line 48, column 39
    function editable_33 () : java.lang.Boolean {
      return User.Credential.canUpdateActive()
    }
    
    // 'editable' attribute on TextInput (id=Username_Input) at UserDetailInputSet.pcf: line 32, column 41
    function editable_7 () : java.lang.Boolean {
      return User.New or User != User.util.CurrentUser or !ssoEnabled
    }
    
    // 'initialValue' attribute on Variable at UserDetailInputSet.pcf: line 16, column 46
    function initialValue_0 () : gw.api.name.PersonNameDelegate {
      return new gw.api.name.PersonNameDelegate(User.Contact)
    }
    
    // 'initialValue' attribute on Variable at UserDetailInputSet.pcf: line 20, column 23
    function initialValue_1 () : Boolean {
      return gw.api.system.PLConfigParameters.SingleSignOnAuthenticationEnabled.getValue()
    }
    
    // 'mode' attribute on InputSetRef (id=Name) at UserDetailInputSet.pcf: line 24, column 54
    function mode_6 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'required' attribute on ConfirmPasswordInput (id=Password_Input) at UserDetailInputSet.pcf: line 42, column 42
    function required_14 () : java.lang.Boolean {
      return User.New
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at UserDetailInputSet.pcf: line 32, column 41
    function valueRoot_10 () : java.lang.Object {
      return User.Credential
    }
    
    // 'value' attribute on BooleanRadioInput (id=AccountLocked_Input) at UserDetailInputSet.pcf: line 53, column 35
    function valueRoot_41 () : java.lang.Object {
      return User
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserDetailInputSet.pcf: line 42, column 42
    function value_15 () : java.lang.String {
      return User.Credential.Password
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserDetailInputSet.pcf: line 42, column 42
    function value_19 () : java.lang.Object {
      return User.Credential.Password
    }
    
    // 'value' attribute on BooleanRadioInput (id=Active_Input) at UserDetailInputSet.pcf: line 48, column 39
    function value_34 () : java.lang.Boolean {
      return User.Credential.Active
    }
    
    // 'value' attribute on BooleanRadioInput (id=AccountLocked_Input) at UserDetailInputSet.pcf: line 53, column 35
    function value_39 () : java.lang.Boolean {
      return User.AccountLocked
    }
    
    // 'value' attribute on TextInput (id=Username_Input) at UserDetailInputSet.pcf: line 32, column 41
    function value_8 () : java.lang.String {
      return User.Credential.UserName
    }
    
    // 'visible' attribute on ConfirmPasswordInput (id=Password_Input) at UserDetailInputSet.pcf: line 42, column 42
    function visible_13 () : java.lang.Boolean {
      return User.util.CurrentUser == User
    }
    
    // 'visible' attribute on ConfirmPasswordInput (id=Password_Input) at UserDetailInputSet.pcf: line 42, column 42
    function visible_30 () : java.lang.Boolean {
      return User.New or !ssoEnabled
    }
    
    property get User () : User {
      return getRequireValue("User", 0) as User
    }
    
    property set User ($arg :  User) {
      setRequireValue("User", 0, $arg)
    }
    
    property get UserOwner () : gw.api.name.NameOwner {
      return getRequireValue("UserOwner", 0) as gw.api.name.NameOwner
    }
    
    property set UserOwner ($arg :  gw.api.name.NameOwner) {
      setRequireValue("UserOwner", 0, $arg)
    }
    
    property get name () : gw.api.name.PersonNameDelegate {
      return getVariableValue("name", 0) as gw.api.name.PersonNameDelegate
    }
    
    property set name ($arg :  gw.api.name.PersonNameDelegate) {
      setVariableValue("name", 0, $arg)
    }
    
    property get ssoEnabled () : Boolean {
      return getVariableValue("ssoEnabled", 0) as Boolean
    }
    
    property set ssoEnabled ($arg :  Boolean) {
      setVariableValue("ssoEnabled", 0, $arg)
    }
    
    
  }
  
  
}