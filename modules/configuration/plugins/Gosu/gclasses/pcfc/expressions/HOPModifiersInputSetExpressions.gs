package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPModifiersInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HOPModifiersInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPModifiersInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HOPModifiersInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at HOPModifiersInputSet.pcf: line 16, column 54
    function initialValue_0 () : Map<String, gw.entity.ITypeList> {
      return modifiers.where(\elt -> elt.DataType == ModifierDataType.TC_TYPEKEY).mapToKeyAndValue(\modifier -> modifier.TypeList, \modifier -> gw.util.TypekeyUtil.getTypeList(modifier.TypeList))
    }
    
    // 'sortBy' attribute on IteratorSort at HOPModifiersInputSet.pcf: line 24, column 24
    function sortBy_1 (hopmodifier :  Modifier) : java.lang.Object {
      return hopmodifier.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at HOPModifiersInputSet.pcf: line 27, column 24
    function sortBy_2 (hopmodifier :  Modifier) : java.lang.Object {
      return hopmodifier.Pattern.Name
    }
    
    // 'value' attribute on InputIterator (id=moditerator) at HOPModifiersInputSet.pcf: line 21, column 30
    function value_30 () : Modifier[] {
      return modifiers
    }
    
    property get modifiers () : Modifier[] {
      return getRequireValue("modifiers", 0) as Modifier[]
    }
    
    property set modifiers ($arg :  Modifier[]) {
      setRequireValue("modifiers", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get typeListMap () : Map<String, gw.entity.ITypeList> {
      return getVariableValue("typeListMap", 0) as Map<String, gw.entity.ITypeList>
    }
    
    property set typeListMap ($arg :  Map<String, gw.entity.ITypeList>) {
      setVariableValue("typeListMap", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/hop/policy/HOPModifiersInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends HOPModifiersInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 5, column 45
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      hopmodifier.DateModifier = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 7, column 45
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      hopmodifier.RateWithinLimits = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 11, column 79
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      hopmodifier.TypeKeyModifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 3, column 48
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      hopmodifier.BooleanModifier = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 3, column 48
    function label_4 () : java.lang.Object {
      return hopmodifier.Pattern.DisplayName
    }
    
    // 'valueRange' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 11, column 79
    function valueRange_23 () : java.lang.Object {
      return gw.pcf.ModifierWidgetHelper.modifierTypeKeyValues(hopmodifier)
    }
    
    // 'value' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 3, column 48
    function valueRoot_7 () : java.lang.Object {
      return hopmodifier
    }
    
    // 'value' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 5, column 45
    function value_10 () : java.util.Date {
      return hopmodifier.DateModifier
    }
    
    // 'value' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 7, column 45
    function value_15 () : java.math.BigDecimal {
      return hopmodifier.RateWithinLimits
    }
    
    // 'value' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 11, column 79
    function value_20 () : java.lang.String {
      return hopmodifier.TypeKeyModifier
    }
    
    // 'value' attribute on ModifierInput (id=hopmod_Input) at HOPModifiersInputSet.pcf: line 33, column 38
    function value_27 () : entity.Modifier {
      return hopmodifier
    }
    
    // 'value' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 3, column 48
    function value_5 () : java.lang.Boolean {
      return hopmodifier.BooleanModifier
    }
    
    // 'valueRange' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 11, column 79
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 11, column 79
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 11, column 79
    function verifyValueRange_25 () : void {
      var __valueRangeArg = gw.pcf.ModifierWidgetHelper.modifierTypeKeyValues(hopmodifier)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'visible' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 7, column 45
    function visible_13 () : java.lang.Boolean {
      return hopmodifier.DataType == TC_RATE
    }
    
    // 'visible' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 11, column 79
    function visible_18 () : java.lang.Boolean {
      return hopmodifier.DataType == TC_TYPEKEY
    }
    
    // 'visible' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 3, column 48
    function visible_3 () : java.lang.Boolean {
      return hopmodifier.DataType == TC_BOOLEAN
    }
    
    // 'visible' attribute on ModifierInput (id=hopmod_Input) at ModifierWidget.xml: line 5, column 45
    function visible_8 () : java.lang.Boolean {
      return hopmodifier.DataType == TC_DATE
    }
    
    property get hopmodifier () : Modifier {
      return getIteratedValue(1) as Modifier
    }
    
    
  }
  
  
}