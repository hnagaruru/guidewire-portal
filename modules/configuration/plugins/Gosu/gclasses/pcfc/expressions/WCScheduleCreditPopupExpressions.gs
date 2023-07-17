package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCScheduleCreditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCScheduleCreditPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCScheduleCreditPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCScheduleCreditPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (scheduleRate :  Modifier, openForEdit :  boolean) : int {
      return 0
    }
    
    // 'def' attribute on ListViewInput at WCScheduleCreditPopup.pcf: line 34, column 31
    function def_onEnter_2 (def :  pcf.ScheduleRateLV) : void {
      def.onEnter(scheduleRate)
    }
    
    // 'def' attribute on ListViewInput at WCScheduleCreditPopup.pcf: line 34, column 31
    function def_refreshVariables_3 (def :  pcf.ScheduleRateLV) : void {
      def.refreshVariables(scheduleRate)
    }
    
    // 'editable' attribute on Screen at WCScheduleCreditPopup.pcf: line 20, column 30
    function editable_4 () : java.lang.Boolean {
      return openForEdit
    }
    
    // EditButtons at WCScheduleCreditPopup.pcf: line 23, column 32
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on Label (id=ScheduleCreditName) at WCScheduleCreditPopup.pcf: line 30, column 48
    function label_1 () : java.lang.String {
      return scheduleRate.Pattern.Name
    }
    
    override property get CurrentLocation () : pcf.WCScheduleCreditPopup {
      return super.CurrentLocation as pcf.WCScheduleCreditPopup
    }
    
    property get openForEdit () : boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setVariableValue("openForEdit", 0, $arg)
    }
    
    property get scheduleRate () : Modifier {
      return getVariableValue("scheduleRate", 0) as Modifier
    }
    
    property set scheduleRate ($arg :  Modifier) {
      setVariableValue("scheduleRate", 0, $arg)
    }
    
    
  }
  
  
}