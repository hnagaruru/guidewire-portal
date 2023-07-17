package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineDateConstantPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineDateConstantPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/forms/RateRoutineDateConstantPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineDateConstantPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (valueDelegate :  CalcStepValueDelegate) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineConstantEditUpdate) at RateRoutineDateConstantPopup.pcf: line 22, column 81
    function action_0 () : void {
      gw.web.admin.forms.FormsUIHelper.commitPopup(valueDelegate, CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=RateRoutineConstantEditCancel) at RateRoutineDateConstantPopup.pcf: line 26, column 81
    function action_1 () : void {
      CurrentLocation.cancel()
    }
    
    // 'afterCommit' attribute on Popup (id=RateRoutineDateConstantPopup) at RateRoutineDateConstantPopup.pcf: line 11, column 93
    function afterCommit_8 (TopLocation :  pcf.api.Location) : void {
      valueDelegate.clearDependentValues()
    }
    
    // 'afterEnter' attribute on Popup (id=RateRoutineDateConstantPopup) at RateRoutineDateConstantPopup.pcf: line 11, column 93
    function afterEnter_9 () : void {
      gw.pcf.rating.flow.RateRoutinePopupHelper.afterEnterDateConstantPopup(valueDelegate)
    }
    
    // 'value' attribute on DateInput (id=Date_Input) at RateRoutineDateConstantPopup.pcf: line 39, column 59
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      valueDelegate.DateConstantValueForUI = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=Date_Input) at RateRoutineDateConstantPopup.pcf: line 39, column 59
    function valueRoot_6 () : java.lang.Object {
      return valueDelegate
    }
    
    // 'value' attribute on TextInput (id=Usage_Input) at RateRoutineDateConstantPopup.pcf: line 33, column 101
    function value_2 () : java.lang.String {
      return gw.pcf.rating.flow.RateRoutineUsageHelper.getValueDelegateUsage(valueDelegate)
    }
    
    // 'value' attribute on DateInput (id=Date_Input) at RateRoutineDateConstantPopup.pcf: line 39, column 59
    function value_4 () : java.util.Date {
      return valueDelegate.DateConstantValueForUI
    }
    
    override property get CurrentLocation () : pcf.RateRoutineDateConstantPopup {
      return super.CurrentLocation as pcf.RateRoutineDateConstantPopup
    }
    
    property get valueDelegate () : CalcStepValueDelegate {
      return getVariableValue("valueDelegate", 0) as CalcStepValueDelegate
    }
    
    property set valueDelegate ($arg :  CalcStepValueDelegate) {
      setVariableValue("valueDelegate", 0, $arg)
    }
    
    
  }
  
  
}