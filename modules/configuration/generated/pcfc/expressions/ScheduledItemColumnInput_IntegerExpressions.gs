package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemColumnInput.Integer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduledItemColumnInput_IntegerExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemColumnInput.Integer.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduledItemColumnInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=IntValue_Cell) at ScheduledItemColumnInput.Integer.pcf: line 25, column 38
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      valueProvider.Value = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemColumnInput.Integer.pcf: line 17, column 90
    function initialValue_0 () : gw.api.productmodel.SchedulePropertyValueProvider<java.lang.Integer> {
      return new gw.api.productmodel.SchedulePropertyValueProvider<java.lang.Integer>(scheduledItem, schedulePropertyInfo.PropertyInfo)
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=IntValue_Cell) at ScheduledItemColumnInput.Integer.pcf: line 25, column 38
    function requestValidationExpression_1 (VALUE :  java.lang.Integer) : java.lang.Object {
      return schedulePropertyInfo.validate(VALUE)
    }
    
    // 'required' attribute on TextCell (id=IntValue_Cell) at ScheduledItemColumnInput.Integer.pcf: line 25, column 38
    function required_2 () : java.lang.Boolean {
      return schedulePropertyInfo.Required
    }
    
    // 'value' attribute on TextCell (id=IntValue_Cell) at ScheduledItemColumnInput.Integer.pcf: line 25, column 38
    function valueRoot_5 () : java.lang.Object {
      return valueProvider
    }
    
    // 'value' attribute on TextCell (id=IntValue_Cell) at ScheduledItemColumnInput.Integer.pcf: line 25, column 38
    function value_3 () : java.lang.Integer {
      return valueProvider.Value
    }
    
    property get schedulePropertyInfo () : gw.api.productmodel.SchedulePropertyInfo {
      return getRequireValue("schedulePropertyInfo", 0) as gw.api.productmodel.SchedulePropertyInfo
    }
    
    property set schedulePropertyInfo ($arg :  gw.api.productmodel.SchedulePropertyInfo) {
      setRequireValue("schedulePropertyInfo", 0, $arg)
    }
    
    property get scheduledItem () : ScheduledItem {
      return getRequireValue("scheduledItem", 0) as ScheduledItem
    }
    
    property set scheduledItem ($arg :  ScheduledItem) {
      setRequireValue("scheduledItem", 0, $arg)
    }
    
    property get valueProvider () : gw.api.productmodel.SchedulePropertyValueProvider<java.lang.Integer> {
      return getVariableValue("valueProvider", 0) as gw.api.productmodel.SchedulePropertyValueProvider<java.lang.Integer>
    }
    
    property set valueProvider ($arg :  gw.api.productmodel.SchedulePropertyValueProvider<java.lang.Integer>) {
      setVariableValue("valueProvider", 0, $arg)
    }
    
    
  }
  
  
}