package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/ScheduleRateDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduleRateDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/ScheduleRateDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ScheduleRateDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on ListViewInput at ScheduleRateDV.pcf: line 36, column 43
    function available_6 () : java.lang.Boolean {
      return scheduleRates != null
    }
    
    // 'def' attribute on ListViewInput at ScheduleRateDV.pcf: line 36, column 43
    function def_onEnter_8 (def :  pcf.ScheduleRateLV) : void {
      def.onEnter(scheduleRate)
    }
    
    // 'def' attribute on ListViewInput at ScheduleRateDV.pcf: line 36, column 43
    function def_refreshVariables_9 (def :  pcf.ScheduleRateLV) : void {
      def.refreshVariables(scheduleRate)
    }
    
    // 'value' attribute on TextInput (id=ratingInputName_Input) at ScheduleRateDV.pcf: line 30, column 45
    function valueRoot_4 () : java.lang.Object {
      return scheduleRate
    }
    
    // 'value' attribute on TextInput (id=ratingInputName_Input) at ScheduleRateDV.pcf: line 30, column 45
    function value_3 () : java.lang.String {
      return scheduleRate.DisplayName
    }
    
    property get scheduleRate () : entity.Modifier {
      return getIteratedValue(1) as entity.Modifier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/ScheduleRateDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduleRateDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ScheduleRateDV.pcf: line 13, column 33
    function initialValue_0 () : entity.Modifier[] {
      return modifiers.where(\ m -> m.ScheduleRate )
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduleRateDV.pcf: line 24, column 26
    function sortBy_2 (scheduleRate :  entity.Modifier) : java.lang.Object {
      return scheduleRate.Pattern.Priority
    }
    
    // 'value' attribute on InputIterator at ScheduleRateDV.pcf: line 21, column 39
    function value_10 () : entity.Modifier[] {
      return scheduleRates
    }
    
    // 'visible' attribute on Label at ScheduleRateDV.pcf: line 17, column 42
    function visible_1 () : java.lang.Boolean {
      return scheduleRates == null
    }
    
    property get modifiers () : Modifier[] {
      return getRequireValue("modifiers", 0) as Modifier[]
    }
    
    property set modifiers ($arg :  Modifier[]) {
      setRequireValue("modifiers", 0, $arg)
    }
    
    property get scheduleRates () : entity.Modifier[] {
      return getVariableValue("scheduleRates", 0) as entity.Modifier[]
    }
    
    property set scheduleRates ($arg :  entity.Modifier[]) {
      setVariableValue("scheduleRates", 0, $arg)
    }
    
    
  }
  
  
}