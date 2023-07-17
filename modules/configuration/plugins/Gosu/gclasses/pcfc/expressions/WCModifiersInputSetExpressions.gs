package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/wc/policy/WCModifiersInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCModifiersInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCModifiersInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends WCModifiersInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextInput (id=ModifierInput_Rate_Input) at WCModifiersInputSet.pcf: line 78, column 66
    function actionAvailable_40 () : java.lang.Boolean {
      return policyPeriod.CanViewModifiers and modifier.Pattern.PublicID == "WCScheduleCredits"
    }
    
    // 'action' attribute on TextInput (id=ModifierInput_Rate_Input) at WCModifiersInputSet.pcf: line 78, column 66
    function action_37 () : void {
      WCScheduleCreditPopup.push(modifier, policyPeriod.OpenForEdit)
    }
    
    // 'action' attribute on TextInput (id=ModifierInput_Rate_Input) at WCModifiersInputSet.pcf: line 78, column 66
    function action_dest_38 () : pcf.api.Destination {
      return pcf.WCScheduleCreditPopup.createDestination(modifier, policyPeriod.OpenForEdit)
    }
    
    // 'value' attribute on TextInput (id=ModifierInput_Rate_Input) at WCModifiersInputSet.pcf: line 78, column 66
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.RateWithinLimits = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ModifierInput_Boolean_Input) at WCModifiersInputSet.pcf: line 84, column 69
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.BooleanModifier = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=ModifierInput_TypeKey_Input) at WCModifiersInputSet.pcf: line 92, column 69
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.TypeKeyModifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=ModifierInput_Date_Input) at WCModifiersInputSet.pcf: line 98, column 66
    function defaultSetter_71 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.DateModifier = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on TextInput (id=ModifierInput_Rate_Input) at WCModifiersInputSet.pcf: line 78, column 66
    function editable_35 () : java.lang.Boolean {
      return modifier.Pattern.PublicID != "WCScheduleCredits"
    }
    
    // 'label' attribute on TextInput (id=ModifierInput_Rate_Input) at WCModifiersInputSet.pcf: line 78, column 66
    function label_39 () : java.lang.Object {
      return modifier.Pattern.Name
    }
    
    // 'requestValidationExpression' attribute on TextInput (id=ModifierInput_Rate_Input) at WCModifiersInputSet.pcf: line 78, column 66
    function requestValidationExpression_41 (VALUE :  java.math.BigDecimal) : java.lang.Object {
      return modifier.getModifierValidation(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=ModifierInput_TypeKey_Input) at WCModifiersInputSet.pcf: line 92, column 69
    function valueRange_62 () : java.lang.Object {
      return gw.util.TypekeyUtil.getTypeKeys(modifier.TypeList).map(\ t -> (t as gw.entity.TypeKey).Code)
    }
    
    // 'value' attribute on HiddenInput (id=ModifierName_Input) at WCModifiersInputSet.pcf: line 68, column 39
    function valueRoot_33 () : java.lang.Object {
      return modifier.Pattern
    }
    
    // 'value' attribute on TextInput (id=ModifierInput_Rate_Input) at WCModifiersInputSet.pcf: line 78, column 66
    function valueRoot_44 () : java.lang.Object {
      return modifier
    }
    
    // 'value' attribute on HiddenInput (id=ModifierName_Input) at WCModifiersInputSet.pcf: line 68, column 39
    function value_32 () : java.lang.String {
      return modifier.Pattern.Name
    }
    
    // 'value' attribute on TextInput (id=ModifierInput_Rate_Input) at WCModifiersInputSet.pcf: line 78, column 66
    function value_42 () : java.math.BigDecimal {
      return modifier.RateWithinLimits
    }
    
    // 'value' attribute on BooleanRadioInput (id=ModifierInput_Boolean_Input) at WCModifiersInputSet.pcf: line 84, column 69
    function value_51 () : java.lang.Boolean {
      return modifier.BooleanModifier
    }
    
    // 'value' attribute on RangeInput (id=ModifierInput_TypeKey_Input) at WCModifiersInputSet.pcf: line 92, column 69
    function value_59 () : java.lang.String {
      return modifier.TypeKeyModifier
    }
    
    // 'value' attribute on DateInput (id=ModifierInput_Date_Input) at WCModifiersInputSet.pcf: line 98, column 66
    function value_70 () : java.util.Date {
      return modifier.DateModifier
    }
    
    // 'valueRange' attribute on RangeInput (id=ModifierInput_TypeKey_Input) at WCModifiersInputSet.pcf: line 92, column 69
    function verifyValueRangeIsAllowedType_63 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ModifierInput_TypeKey_Input) at WCModifiersInputSet.pcf: line 92, column 69
    function verifyValueRangeIsAllowedType_63 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ModifierInput_TypeKey_Input) at WCModifiersInputSet.pcf: line 92, column 69
    function verifyValueRange_64 () : void {
      var __valueRangeArg = gw.util.TypekeyUtil.getTypeKeys(modifier.TypeList).map(\ t -> (t as gw.entity.TypeKey).Code)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_63(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=ModifierInput_Rate_Input) at WCModifiersInputSet.pcf: line 78, column 66
    function visible_36 () : java.lang.Boolean {
      return modifier.DataType == ModifierDataType.TC_RATE
    }
    
    // 'visible' attribute on BooleanRadioInput (id=ModifierInput_Boolean_Input) at WCModifiersInputSet.pcf: line 84, column 69
    function visible_49 () : java.lang.Boolean {
      return modifier.DataType == ModifierDataType.TC_BOOLEAN
    }
    
    // 'visible' attribute on RangeInput (id=ModifierInput_TypeKey_Input) at WCModifiersInputSet.pcf: line 92, column 69
    function visible_57 () : java.lang.Boolean {
      return modifier.DataType == ModifierDataType.TC_TYPEKEY
    }
    
    // 'visible' attribute on DateInput (id=ModifierInput_Date_Input) at WCModifiersInputSet.pcf: line 98, column 66
    function visible_68 () : java.lang.Boolean {
      return modifier.DataType == ModifierDataType.TC_DATE
    }
    
    property get modifier () : entity.Modifier {
      return getIteratedValue(1) as entity.Modifier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCModifiersInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCModifiersInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextInput (id=ModifierInput_Input) at WCModifiersInputSet.pcf: line 44, column 45
    function actionAvailable_9 () : java.lang.Boolean {
      return rateModifier.Pattern.PublicID == "WCScheduleCredits"
    }
    
    // 'action' attribute on TextInput (id=ModifierInput_Input) at WCModifiersInputSet.pcf: line 44, column 45
    function action_6 () : void {
      WCScheduleCreditPopup.push(rateModifier, policyPeriod.OpenForEdit)
    }
    
    // 'action' attribute on TextInput (id=ModifierInput_Input) at WCModifiersInputSet.pcf: line 44, column 45
    function action_dest_7 () : pcf.api.Destination {
      return pcf.WCScheduleCreditPopup.createDestination(rateModifier, policyPeriod.OpenForEdit)
    }
    
    // 'value' attribute on TextInput (id=ModifierInput_Input) at WCModifiersInputSet.pcf: line 44, column 45
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateModifier.RateWithinLimits = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ValueFinal_Input) at WCModifiersInputSet.pcf: line 50, column 128
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateModifier.ValueFinal = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on TextInput (id=ModifierInput_Input) at WCModifiersInputSet.pcf: line 44, column 45
    function editable_5 () : java.lang.Boolean {
      return rateModifier.Pattern.PublicID != "WCScheduleCredits"
    }
    
    // 'label' attribute on InputGroup (id=EligibilityInputGroup) at WCModifiersInputSet.pcf: line 31, column 49
    function label_24 () : java.lang.Object {
      return DisplayKey.get("Web.Policy.Modifiers.Eligibility", rateModifier.Pattern.Name)
    }
    
    // 'label' attribute on TextInput (id=ModifierInput_Input) at WCModifiersInputSet.pcf: line 44, column 45
    function label_8 () : java.lang.Object {
      return rateModifier.Pattern.Name
    }
    
    // 'requestValidationExpression' attribute on TextInput (id=ModifierInput_Input) at WCModifiersInputSet.pcf: line 44, column 45
    function requestValidationExpression_10 (VALUE :  java.math.BigDecimal) : java.lang.Object {
      return rateModifier.getModifierValidation(VALUE)
    }
    
    // 'onToggle' attribute on InputGroup (id=EligibilityInputGroup) at WCModifiersInputSet.pcf: line 31, column 49
    function setter_25 (VALUE :  java.lang.Boolean) : void {
      toggleEligible(rateModifier)
    }
    
    // 'value' attribute on TextInput (id=ModifierInput_Input) at WCModifiersInputSet.pcf: line 44, column 45
    function valueRoot_13 () : java.lang.Object {
      return rateModifier
    }
    
    // 'value' attribute on HiddenInput (id=ModifierName_Input) at WCModifiersInputSet.pcf: line 35, column 41
    function valueRoot_3 () : java.lang.Object {
      return rateModifier.Pattern
    }
    
    // 'value' attribute on TextInput (id=ModifierInput_Input) at WCModifiersInputSet.pcf: line 44, column 45
    function value_11 () : java.math.BigDecimal {
      return rateModifier.RateWithinLimits
    }
    
    // 'value' attribute on BooleanRadioInput (id=ValueFinal_Input) at WCModifiersInputSet.pcf: line 50, column 128
    function value_18 () : java.lang.Boolean {
      return rateModifier.ValueFinal
    }
    
    // 'value' attribute on HiddenInput (id=ModifierName_Input) at WCModifiersInputSet.pcf: line 35, column 41
    function value_2 () : java.lang.String {
      return rateModifier.Pattern.Name
    }
    
    // 'visible' attribute on BooleanRadioInput (id=ValueFinal_Input) at WCModifiersInputSet.pcf: line 50, column 128
    function visible_17 () : java.lang.Boolean {
      return rateModifier.PatternCode == "ExpMod" or rateModifier.PatternCode == "GLExperienceMod"
    }
    
    // 'childrenVisible' attribute on InputGroup (id=EligibilityInputGroup) at WCModifiersInputSet.pcf: line 31, column 49
    function visible_23 () : java.lang.Boolean {
      return rateModifier.Eligible
    }
    
    property get rateModifier () : entity.Modifier {
      return getIteratedValue(1) as entity.Modifier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/wc/policy/WCModifiersInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCModifiersInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at WCModifiersInputSet.pcf: line 20, column 24
    function sortBy_0 (rateModifier :  entity.Modifier) : java.lang.Object {
      return rateModifier.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at WCModifiersInputSet.pcf: line 24, column 24
    function sortBy_1 (rateModifier :  entity.Modifier) : java.lang.Object {
      return rateModifier.Pattern.Name
    }
    
    // 'sortBy' attribute on IteratorSort at WCModifiersInputSet.pcf: line 60, column 24
    function sortBy_30 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at WCModifiersInputSet.pcf: line 64, column 24
    function sortBy_31 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.Pattern.Name
    }
    
    // 'value' attribute on InputIterator (id=ModIteratorEligible) at WCModifiersInputSet.pcf: line 17, column 37
    function value_29 () : entity.Modifier[] {
      return modifiers.where( \ mod -> mod.DataType == TC_RATE and not mod.ScheduleRate).toTypedArray()
    }
    
    // 'value' attribute on InputIterator (id=ModIterator) at WCModifiersInputSet.pcf: line 57, column 37
    function value_76 () : entity.Modifier[] {
      return modifiers.where( \ mod -> mod.DataType != TC_RATE or mod.ScheduleRate).toTypedArray()
    }
    
    property get modifiers () : List<Modifier> {
      return getRequireValue("modifiers", 0) as List<Modifier>
    }
    
    property set modifiers ($arg :  List<Modifier>) {
      setRequireValue("modifiers", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    function toggleEligible(mod : Modifier) {
      if (mod.Eligible) {
        mod.RateModifier = null
        mod.Eligible = false
      } else {
        mod.Eligible = true
      }
    }
    
    
  }
  
  
}