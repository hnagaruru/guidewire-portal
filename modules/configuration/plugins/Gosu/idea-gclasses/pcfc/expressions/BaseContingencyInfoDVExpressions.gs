package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/BaseContingencyInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BaseContingencyInfoDVExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/BaseContingencyInfoDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BaseContingencyInfoDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=Resolve) at BaseContingencyInfoDV.pcf: line 58, column 100
    function action_24 () : void {
      contingency.resolveContingency(); contingency.Bundle.commit()
    }
    
    // 'action' attribute on Link (id=Waive) at BaseContingencyInfoDV.pcf: line 64, column 100
    function action_26 () : void {
      contingency.waiveContigency(); contingency.Bundle.commit()
    }
    
    // 'value' attribute on TextInput (id=ContingencyTitle_Input) at BaseContingencyInfoDV.pcf: line 16, column 36
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      contingency.Title = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=ContingencyAction_Input) at BaseContingencyInfoDV.pcf: line 30, column 47
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      contingency.Action = (__VALUE_TO_SET as typekey.ContingencyAction)
    }
    
    // 'value' attribute on DateInput (id=ContingencyDueDate_Input) at BaseContingencyInfoDV.pcf: line 39, column 37
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      contingency.DueDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextAreaInput (id=ContingencyDescription_Input) at BaseContingencyInfoDV.pcf: line 23, column 42
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      contingency.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'onChange' attribute on PostOnChange at BaseContingencyInfoDV.pcf: line 41, column 59
    function onChange_13 () : void {
      contingency.updateActionStartDate()
    }
    
    // 'onChange' attribute on PostOnChange at BaseContingencyInfoDV.pcf: line 32, column 59
    function onChange_8 () : void {
      contingency.updateActionStartDate()
    }
    
    // 'value' attribute on TextInput (id=ContingencyTitle_Input) at BaseContingencyInfoDV.pcf: line 16, column 36
    function valueRoot_2 () : java.lang.Object {
      return contingency
    }
    
    // 'value' attribute on TextInput (id=ContingencyTitle_Input) at BaseContingencyInfoDV.pcf: line 16, column 36
    function value_0 () : java.lang.String {
      return contingency.Title
    }
    
    // 'value' attribute on DateInput (id=ContingencyDueDate_Input) at BaseContingencyInfoDV.pcf: line 39, column 37
    function value_14 () : java.util.Date {
      return contingency.DueDate
    }
    
    // 'value' attribute on TypeKeyInput (id=ContingencyStatus_Input) at BaseContingencyInfoDV.pcf: line 50, column 40
    function value_19 () : typekey.ContingencyStatus {
      return contingency.Status
    }
    
    // 'value' attribute on TextInput (id=CreatedUser_Input) at BaseContingencyInfoDV.pcf: line 71, column 40
    function value_29 () : entity.User {
      return contingency.CreateUser
    }
    
    // 'value' attribute on DateInput (id=CreatedDate_Input) at BaseContingencyInfoDV.pcf: line 76, column 40
    function value_34 () : java.util.Date {
      return contingency.CreateTime
    }
    
    // 'value' attribute on TextInput (id=ClosedUser_Input) at BaseContingencyInfoDV.pcf: line 82, column 71
    function value_39 () : entity.User {
      return contingency.CloseUser
    }
    
    // 'value' attribute on TextAreaInput (id=ContingencyDescription_Input) at BaseContingencyInfoDV.pcf: line 23, column 42
    function value_4 () : java.lang.String {
      return contingency.Description
    }
    
    // 'value' attribute on DateInput (id=ClosedDate_Input) at BaseContingencyInfoDV.pcf: line 87, column 71
    function value_44 () : java.util.Date {
      return contingency.CloseDate
    }
    
    // 'value' attribute on TypeKeyInput (id=ContingencyAction_Input) at BaseContingencyInfoDV.pcf: line 30, column 47
    function value_9 () : typekey.ContingencyAction {
      return contingency.Action
    }
    
    // 'visible' attribute on TypeKeyInput (id=ContingencyStatus_Input) at BaseContingencyInfoDV.pcf: line 50, column 40
    function visible_18 () : java.lang.Boolean {
      return not contingency.New
    }
    
    // 'visible' attribute on Link (id=Resolve) at BaseContingencyInfoDV.pcf: line 58, column 100
    function visible_23 () : java.lang.Boolean {
      return not contingency.New and (contingency.Status == ContingencyStatus.TC_PENDING) 
    }
    
    // 'visible' attribute on TextInput (id=ClosedUser_Input) at BaseContingencyInfoDV.pcf: line 82, column 71
    function visible_38 () : java.lang.Boolean {
      return contingency.Status != ContingencyStatus.TC_PENDING
    }
    
    property get contingency () : entity.Contingency {
      return getRequireValue("contingency", 0) as entity.Contingency
    }
    
    property set contingency ($arg :  entity.Contingency) {
      setRequireValue("contingency", 0, $arg)
    }
    
    
  }
  
  
}