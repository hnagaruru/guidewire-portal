package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemColumnInput.TypeKey.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduledItemColumnInput_TypeKeyExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/ScheduledItemColumnInput.TypeKey.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduledItemColumnInputExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.TypeKey.pcf: line 24, column 37
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      valueProvider.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ScheduledItemColumnInput.TypeKey.pcf: line 17, column 79
    function initialValue_0 () : gw.api.productmodel.SchedulePropertyValueProvider<String> {
      return new gw.api.productmodel.SchedulePropertyValueProvider<String>(scheduledItem, schedulePropertyInfo.PropertyInfo)
    }
    
    // 'required' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.TypeKey.pcf: line 24, column 37
    function required_1 () : java.lang.Boolean {
      return schedulePropertyInfo.Required
    }
    
    // 'valueRange' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.TypeKey.pcf: line 24, column 37
    function valueRange_5 () : java.lang.Object {
      return schedulePropertyInfo.ValueRange
    }
    
    // 'value' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.TypeKey.pcf: line 24, column 37
    function valueRoot_4 () : java.lang.Object {
      return valueProvider
    }
    
    // 'value' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.TypeKey.pcf: line 24, column 37
    function value_2 () : java.lang.String {
      return valueProvider.Value
    }
    
    // 'valueRange' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.TypeKey.pcf: line 24, column 37
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.TypeKey.pcf: line 24, column 37
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RangeValue_Cell) at ScheduledItemColumnInput.TypeKey.pcf: line 24, column 37
    function verifyValueRange_7 () : void {
      var __valueRangeArg = schedulePropertyInfo.ValueRange
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
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
    
    property get valueProvider () : gw.api.productmodel.SchedulePropertyValueProvider<String> {
      return getVariableValue("valueProvider", 0) as gw.api.productmodel.SchedulePropertyValueProvider<String>
    }
    
    property set valueProvider ($arg :  gw.api.productmodel.SchedulePropertyValueProvider<String>) {
      setVariableValue("valueProvider", 0, $arg)
    }
    
    
  }
  
  
}