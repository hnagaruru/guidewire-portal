package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BALineDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BALineDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BALineDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BALineDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=Fleet_Input) at BALineDV.pcf: line 28, column 49
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      period.BusinessAutoLine.Fleet = (__VALUE_TO_SET as typekey.FleetType)
    }
    
    // 'value' attribute on TypeKeyInput (id=PolicyType_Input) at BALineDV.pcf: line 18, column 48
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      period.BusinessAutoLine.PolicyType = (__VALUE_TO_SET as typekey.BAPolicyType)
    }
    
    // 'editable' attribute on TypeKeyInput (id=PolicyType_Input) at BALineDV.pcf: line 18, column 48
    function editable_0 () : java.lang.Boolean {
      return !(period.Job typeis PolicyChange)
    }
    
    // 'value' attribute on TypeKeyInput (id=PolicyType_Input) at BALineDV.pcf: line 18, column 48
    function valueRoot_4 () : java.lang.Object {
      return period.BusinessAutoLine
    }
    
    // 'value' attribute on TypeKeyInput (id=Fleet_Input) at BALineDV.pcf: line 28, column 49
    function value_10 () : typekey.FleetType {
      return period.BusinessAutoLine.Fleet
    }
    
    // 'value' attribute on TypeKeyInput (id=PolicyType_Input) at BALineDV.pcf: line 18, column 48
    function value_2 () : typekey.BAPolicyType {
      return period.BusinessAutoLine.PolicyType
    }
    
    // 'visible' attribute on TypeKeyInput (id=PolicyType_Input) at BALineDV.pcf: line 18, column 48
    function visible_1 () : java.lang.Boolean {
      return period.Reinstatement == null
    }
    
    property get period () : PolicyPeriod {
      return getRequireValue("period", 0) as PolicyPeriod
    }
    
    property set period ($arg :  PolicyPeriod) {
      setRequireValue("period", 0, $arg)
    }
    
    
  }
  
  
}