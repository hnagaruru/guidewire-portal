package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/ba/policy/BusinessAutoStateModifierPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BusinessAutoStateModifierPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BusinessAutoStateModifierPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BusinessAutoStateModifierPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at BusinessAutoStateModifierPanelSet.pcf: line 243, column 67
    function def_onEnter_128 (def :  pcf.ScheduleRateDV) : void {
      def.onEnter(modifiersLVHelper.SchedRateModifiers)
    }
    
    // 'def' attribute on PanelRef at BusinessAutoStateModifierPanelSet.pcf: line 243, column 67
    function def_refreshVariables_129 (def :  pcf.ScheduleRateDV) : void {
      def.refreshVariables(modifiersLVHelper.SchedRateModifiers)
    }
    
    // 'initialValue' attribute on Variable at BusinessAutoStateModifierPanelSet.pcf: line 17, column 40
    function initialValue_0 () : entity.BAJurisModifier[] {
      return jurisdiction.BAJurisModifiers
    }
    
    // 'initialValue' attribute on Variable at BusinessAutoStateModifierPanelSet.pcf: line 22, column 46
    function initialValue_1 () : gw.pcf.ModifiersListViewHelper {
      return new gw.pcf.ModifiersListViewHelper(modifiers)
    }
    
    property get baLine () : BusinessAutoLine {
      return getRequireValue("baLine", 0) as BusinessAutoLine
    }
    
    property set baLine ($arg :  BusinessAutoLine) {
      setRequireValue("baLine", 0, $arg)
    }
    
    property get jurisdiction () : BAJurisdiction {
      return getRequireValue("jurisdiction", 0) as BAJurisdiction
    }
    
    property set jurisdiction ($arg :  BAJurisdiction) {
      setRequireValue("jurisdiction", 0, $arg)
    }
    
    property get modifiers () : entity.BAJurisModifier[] {
      return getVariableValue("modifiers", 0) as entity.BAJurisModifier[]
    }
    
    property set modifiers ($arg :  entity.BAJurisModifier[]) {
      setVariableValue("modifiers", 0, $arg)
    }
    
    property get modifiersLVHelper () : gw.pcf.ModifiersListViewHelper {
      return getVariableValue("modifiersLVHelper", 0) as gw.pcf.ModifiersListViewHelper
    }
    
    property set modifiersLVHelper ($arg :  gw.pcf.ModifiersListViewHelper) {
      setVariableValue("modifiersLVHelper", 0, $arg)
    }
    
    function clearModifier(mod: Modifier) : Modifier {
      mod.BooleanModifier = null
      mod.RateModifier = null
      mod.DateModifier = null
      mod.TypeKeyModifier = null
      mod.Justification = null
      return mod
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BusinessAutoStateModifierPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=ValueFinal_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 152, column 47
    function defaultSetter_107 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.ValueFinal = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=Justification_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 159, column 54
    function defaultSetter_114 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.Justification = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioCell (id=Eligibility_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 126, column 39
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.Eligible = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 3, column 48
    function defaultSetter_84 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.BooleanModifier = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 5, column 45
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.DateModifier = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 7, column 45
    function defaultSetter_92 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.RateWithinLimits = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 11, column 79
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.TypeKeyModifier = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on BooleanRadioCell (id=ValueFinal_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 152, column 47
    function editable_104 () : java.lang.Boolean {
      return modifier.Pattern.DisplayValueFinal
    }
    
    // 'editable' attribute on TextCell (id=Justification_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 159, column 54
    function editable_111 () : java.lang.Boolean {
      return modifier.Pattern.DisplayJustification
    }
    
    // 'editable' attribute on BooleanRadioCell (id=Eligibility_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 126, column 39
    function editable_68 () : java.lang.Boolean {
      return modifier.Pattern.DisplayEligibility
    }
    
    // 'onChange' attribute on PostOnChange at BusinessAutoStateModifierPanelSet.pcf: line 128, column 51
    function onChange_67 () : void {
      clearModifier(modifier)
    }
    
    // 'valueRange' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 11, column 79
    function valueRange_98 () : java.lang.Object {
      return gw.pcf.ModifierWidgetHelper.modifierTypeKeyValues(modifier)
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 122, column 44
    function valueRoot_65 () : java.lang.Object {
      return modifier.Pattern
    }
    
    // 'value' attribute on BooleanRadioCell (id=Eligibility_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 126, column 39
    function valueRoot_71 () : java.lang.Object {
      return modifier
    }
    
    // 'value' attribute on ModifierCell (id=Value_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 147, column 47
    function value_102 () : entity.Modifier {
      return modifier
    }
    
    // 'value' attribute on BooleanRadioCell (id=ValueFinal_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 152, column 47
    function value_106 () : java.lang.Boolean {
      return modifier.ValueFinal
    }
    
    // 'value' attribute on TextCell (id=Justification_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 159, column 54
    function value_113 () : java.lang.String {
      return modifier.Justification
    }
    
    // 'value' attribute on DateCell (id=Effective_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 164, column 47
    function value_120 () : java.util.Date {
      return modifier.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=Expiration_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 169, column 47
    function value_124 () : java.util.Date {
      return modifier.ExpirationDate
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 122, column 44
    function value_64 () : java.lang.String {
      return modifier.Pattern.Name
    }
    
    // 'value' attribute on BooleanRadioCell (id=Eligibility_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 126, column 39
    function value_69 () : java.lang.Boolean {
      return modifier.Eligible
    }
    
    // 'value' attribute on TextCell (id=Minimum_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 135, column 108
    function value_75 () : java.math.BigDecimal {
      return modifier.Minimum
    }
    
    // 'value' attribute on TextCell (id=Maximum_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 141, column 108
    function value_79 () : java.math.BigDecimal {
      return modifier.Maximum
    }
    
    // 'value' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 3, column 48
    function value_83 () : java.lang.Boolean {
      return modifier.BooleanModifier
    }
    
    // 'value' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 5, column 45
    function value_87 () : java.util.Date {
      return modifier.DateModifier
    }
    
    // 'value' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 7, column 45
    function value_91 () : java.math.BigDecimal {
      return modifier.RateWithinLimits
    }
    
    // 'value' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 11, column 79
    function value_95 () : java.lang.String {
      return modifier.TypeKeyModifier
    }
    
    // 'valueRange' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 11, column 79
    function verifyValueRangeIsAllowedType_99 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 11, column 79
    function verifyValueRangeIsAllowedType_99 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 11, column 79
    function verifyValueRange_100 () : void {
      var __valueRangeArg = gw.pcf.ModifierWidgetHelper.modifierTypeKeyValues(modifier)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_99(__valueRangeArg)
    }
    
    // 'visible' attribute on TextCell (id=Justification_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 159, column 54
    function visible_117 () : java.lang.Boolean {
      return allDisplayJustificationsFalse
    }
    
    // 'valueVisible' attribute on TextCell (id=Minimum_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 135, column 108
    function visible_74 () : java.lang.Boolean {
      return modifier.Pattern.ModifierDataType == TC_RATE and modifier.Pattern.DisplayRange
    }
    
    // 'visible' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 3, column 48
    function visible_82 () : java.lang.Boolean {
      return modifier.DataType == TC_BOOLEAN
    }
    
    // 'visible' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 5, column 45
    function visible_86 () : java.lang.Boolean {
      return modifier.DataType == TC_DATE
    }
    
    // 'visible' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 7, column 45
    function visible_90 () : java.lang.Boolean {
      return modifier.DataType == TC_RATE
    }
    
    // 'visible' attribute on ModifierCell (id=Value_Cell) at ModifierWidget.xml: line 11, column 79
    function visible_94 () : java.lang.Boolean {
      return modifier.DataType == TC_TYPEKEY
    }
    
    property get modifier () : entity.Modifier {
      return getIteratedValue(2) as entity.Modifier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BusinessAutoStateModifierPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioCell (id=Eligibility_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 53, column 39
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.Eligible = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 79, column 47
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.RateModifier = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on BooleanRadioCell (id=ValueFinal_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 85, column 47
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.ValueFinal = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=Justification_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 93, column 54
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      modifier.Justification = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on BooleanRadioCell (id=Eligibility_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 53, column 39
    function editable_19 () : java.lang.Boolean {
      return modifier.Pattern.DisplayEligibility
    }
    
    // 'editable' attribute on BooleanRadioCell (id=ValueFinal_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 85, column 47
    function editable_39 () : java.lang.Boolean {
      return modifier.Pattern.DisplayValueFinal
    }
    
    // 'editable' attribute on TextCell (id=Justification_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 93, column 54
    function editable_46 () : java.lang.Boolean {
      return modifier.Pattern.DisplayJustification
    }
    
    // 'onChange' attribute on PostOnChange at BusinessAutoStateModifierPanelSet.pcf: line 55, column 51
    function onChange_18 () : void {
      clearModifier(modifier)
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=Rate_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 79, column 47
    function requestValidationExpression_34 (VALUE :  java.math.BigDecimal) : java.lang.Object {
      return modifier.getModifierValidation(VALUE)
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 48, column 44
    function valueRoot_16 () : java.lang.Object {
      return modifier.Pattern
    }
    
    // 'value' attribute on BooleanRadioCell (id=Eligibility_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 53, column 39
    function valueRoot_22 () : java.lang.Object {
      return modifier
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 48, column 44
    function value_15 () : java.lang.String {
      return modifier.Pattern.Name
    }
    
    // 'value' attribute on BooleanRadioCell (id=Eligibility_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 53, column 39
    function value_20 () : java.lang.Boolean {
      return modifier.Eligible
    }
    
    // 'value' attribute on TextCell (id=Minimum_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 63, column 108
    function value_26 () : java.math.BigDecimal {
      return modifier.Minimum
    }
    
    // 'value' attribute on TextCell (id=Maximum_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 70, column 108
    function value_30 () : java.math.BigDecimal {
      return modifier.Maximum
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 79, column 47
    function value_35 () : java.math.BigDecimal {
      return modifier.RateModifier
    }
    
    // 'value' attribute on BooleanRadioCell (id=ValueFinal_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 85, column 47
    function value_41 () : java.lang.Boolean {
      return modifier.ValueFinal
    }
    
    // 'value' attribute on TextCell (id=Justification_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 93, column 54
    function value_48 () : java.lang.String {
      return modifier.Justification
    }
    
    // 'value' attribute on DateCell (id=Effective_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 99, column 47
    function value_55 () : java.util.Date {
      return modifier.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=Expiration_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 105, column 47
    function value_59 () : java.util.Date {
      return modifier.ExpirationDate
    }
    
    // 'valueVisible' attribute on TextCell (id=Minimum_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 63, column 108
    function visible_25 () : java.lang.Boolean {
      return modifier.Pattern.ModifierDataType == TC_RATE and modifier.Pattern.DisplayRange
    }
    
    // 'visible' attribute on TextCell (id=Justification_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 93, column 54
    function visible_52 () : java.lang.Boolean {
      return allDisplayJustificationsFalse
    }
    
    property get modifier () : entity.Modifier {
      return getIteratedValue(2) as entity.Modifier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/ba/policy/BusinessAutoStateModifierPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListViewPanelExpressionsImpl extends BusinessAutoStateModifierPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at BusinessAutoStateModifierPanelSet.pcf: line 28, column 35
    function initialValue_2 () : entity.Modifier[] {
      return modifiersLVHelper.NonSchedRateModifiers
    }
    
    // 'initialValue' attribute on Variable at BusinessAutoStateModifierPanelSet.pcf: line 32, column 25
    function initialValue_3 () : boolean {
      return modifiersLVHelper.AllDisplayJustificationsFalse
    }
    
    // 'sortBy' attribute on IteratorSort at BusinessAutoStateModifierPanelSet.pcf: line 42, column 26
    function sortBy_4 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.Pattern.Priority
    }
    
    // 'value' attribute on BooleanRadioCell (id=ValueFinal_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 85, column 47
    function sortValue_10 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.ValueFinal
    }
    
    // 'value' attribute on TextCell (id=Justification_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 93, column 54
    function sortValue_11 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.Justification
    }
    
    // 'value' attribute on DateCell (id=Effective_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 99, column 47
    function sortValue_13 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.EffectiveDate
    }
    
    // 'value' attribute on DateCell (id=Expiration_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 105, column 47
    function sortValue_14 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.ExpirationDate
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 48, column 44
    function sortValue_5 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.Pattern.Name
    }
    
    // 'value' attribute on BooleanRadioCell (id=Eligibility_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 53, column 39
    function sortValue_6 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.Eligible
    }
    
    // 'value' attribute on TextCell (id=Minimum_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 63, column 108
    function sortValue_7 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.Minimum
    }
    
    // 'value' attribute on TextCell (id=Maximum_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 70, column 108
    function sortValue_8 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.Maximum
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 79, column 47
    function sortValue_9 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.RateModifier
    }
    
    // 'value' attribute on RowIterator (id=NonRateModifiers) at BusinessAutoStateModifierPanelSet.pcf: line 114, column 39
    function value_127 () : entity.Modifier[] {
      return nonSchedRateModifiers.where(\ mod -> mod.DataType != ModifierDataType.TC_RATE)
    }
    
    // 'value' attribute on RowIterator (id=RateModifiers) at BusinessAutoStateModifierPanelSet.pcf: line 39, column 39
    function value_62 () : entity.Modifier[] {
      return nonSchedRateModifiers.where(\ mod -> mod.DataType == ModifierDataType.TC_RATE)
    }
    
    // 'visible' attribute on TextCell (id=Justification_Cell) at BusinessAutoStateModifierPanelSet.pcf: line 93, column 54
    function visible_12 () : java.lang.Boolean {
      return allDisplayJustificationsFalse
    }
    
    property get allDisplayJustificationsFalse () : boolean {
      return getVariableValue("allDisplayJustificationsFalse", 1) as java.lang.Boolean
    }
    
    property set allDisplayJustificationsFalse ($arg :  boolean) {
      setVariableValue("allDisplayJustificationsFalse", 1, $arg)
    }
    
    property get nonSchedRateModifiers () : entity.Modifier[] {
      return getVariableValue("nonSchedRateModifiers", 1) as entity.Modifier[]
    }
    
    property set nonSchedRateModifiers ($arg :  entity.Modifier[]) {
      setVariableValue("nonSchedRateModifiers", 1, $arg)
    }
    
    
  }
  
  
}