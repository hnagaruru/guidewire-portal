package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/pa/policy/PAVehicleModifiersInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PAVehicleModifiersInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAVehicleModifiersInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PAVehicleModifiersInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 5, column 45
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehmodifier.DateModifier = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 7, column 45
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehmodifier.RateWithinLimits = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehmodifier.TypeKeyModifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 3, column 48
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      vehmodifier.BooleanModifier = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 3, column 48
    function label_5 () : java.lang.Object {
      return vehmodifier.Pattern.DisplayName
    }
    
    // 'valueRange' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function valueRange_24 () : java.lang.Object {
      return gw.pcf.ModifierWidgetHelper.modifierTypeKeyValues(vehmodifier)
    }
    
    // 'value' attribute on HiddenInput (id=ModifierName_Input) at PAVehicleModifiersInputSet.pcf: line 28, column 41
    function valueRoot_2 () : java.lang.Object {
      return vehmodifier.Pattern
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 3, column 48
    function valueRoot_8 () : java.lang.Object {
      return vehmodifier
    }
    
    // 'value' attribute on HiddenInput (id=ModifierName_Input) at PAVehicleModifiersInputSet.pcf: line 28, column 41
    function value_1 () : java.lang.String {
      return vehmodifier.Pattern.Name
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 5, column 45
    function value_11 () : java.util.Date {
      return vehmodifier.DateModifier
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 7, column 45
    function value_16 () : java.math.BigDecimal {
      return vehmodifier.RateWithinLimits
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function value_21 () : java.lang.String {
      return vehmodifier.TypeKeyModifier
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at PAVehicleModifiersInputSet.pcf: line 34, column 49
    function value_28 () : entity.PAVehicleModifier {
      return vehmodifier
    }
    
    // 'value' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 3, column 48
    function value_6 () : java.lang.Boolean {
      return vehmodifier.BooleanModifier
    }
    
    // 'valueRange' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function verifyValueRange_26 () : void {
      var __valueRangeArg = gw.pcf.ModifierWidgetHelper.modifierTypeKeyValues(vehmodifier)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_25(__valueRangeArg)
    }
    
    // 'valueType' attribute on ModifierInput (id=vehmod_Input) at PAVehicleModifiersInputSet.pcf: line 34, column 49
    function verifyValueType_31 () : void {
      var __valueTypeArg : entity.PAVehicleModifier
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Modifier = __valueTypeArg
    }
    
    // 'visible' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 7, column 45
    function visible_14 () : java.lang.Boolean {
      return vehmodifier.DataType == TC_RATE
    }
    
    // 'visible' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 11, column 79
    function visible_19 () : java.lang.Boolean {
      return vehmodifier.DataType == TC_TYPEKEY
    }
    
    // 'visible' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 3, column 48
    function visible_4 () : java.lang.Boolean {
      return vehmodifier.DataType == TC_BOOLEAN
    }
    
    // 'visible' attribute on ModifierInput (id=vehmod_Input) at ModifierWidget.xml: line 5, column 45
    function visible_9 () : java.lang.Boolean {
      return vehmodifier.DataType == TC_DATE
    }
    
    property get vehmodifier () : entity.PAVehicleModifier {
      return getIteratedValue(1) as entity.PAVehicleModifier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/pa/policy/PAVehicleModifiersInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PAVehicleModifiersInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at PAVehicleModifiersInputSet.pcf: line 23, column 26
    function sortBy_0 (vehmodifier :  entity.PAVehicleModifier) : java.lang.Object {
      return vehmodifier.Pattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=moditerator) at PAVehicleModifiersInputSet.pcf: line 20, column 48
    function value_32 () : entity.PAVehicleModifier[] {
      return vehicle.PAVehicleModifiers
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as entity.PolicyPeriod
    }
    
    property set policyPeriod ($arg :  entity.PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get vehicle () : PersonalVehicle {
      return getRequireValue("vehicle", 0) as PersonalVehicle
    }
    
    property set vehicle ($arg :  PersonalVehicle) {
      setRequireValue("vehicle", 0, $arg)
    }
    
    
  }
  
  
}