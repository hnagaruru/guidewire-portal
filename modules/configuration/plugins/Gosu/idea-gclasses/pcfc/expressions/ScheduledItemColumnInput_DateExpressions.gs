package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemColumnInput.Date.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduledItemColumnInput_DateExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemColumnInput.Date.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduledItemColumnInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=DateValue_Cell) at ScheduledItemColumnInput.Date.pcf: line 23, column 36
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      valueProvider.Value = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemColumnInput.Date.pcf: line 17, column 87
    function initialValue_0 () : gw.api.productmodel.SchedulePropertyValueProvider<java.util.Date> {
      return new gw.api.productmodel.SchedulePropertyValueProvider<java.util.Date>(scheduledItem, schedulePropertyInfo.PropertyInfo)
    }
    
    // 'required' attribute on DateCell (id=DateValue_Cell) at ScheduledItemColumnInput.Date.pcf: line 23, column 36
    function required_1 () : java.lang.Boolean {
      return schedulePropertyInfo.Required
    }
    
    // 'value' attribute on DateCell (id=DateValue_Cell) at ScheduledItemColumnInput.Date.pcf: line 23, column 36
    function valueRoot_4 () : java.lang.Object {
      return valueProvider
    }
    
    // 'value' attribute on DateCell (id=DateValue_Cell) at ScheduledItemColumnInput.Date.pcf: line 23, column 36
    function value_2 () : java.util.Date {
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
    
    property get valueProvider () : gw.api.productmodel.SchedulePropertyValueProvider<java.util.Date> {
      return getVariableValue("valueProvider", 0) as gw.api.productmodel.SchedulePropertyValueProvider<java.util.Date>
    }
    
    property set valueProvider ($arg :  gw.api.productmodel.SchedulePropertyValueProvider<java.util.Date>) {
      setVariableValue("valueProvider", 0, $arg)
    }
    
    
  }
  
  
}