package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/ModifierSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ModifierSummaryLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/ModifierSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ModifierSummaryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'valueRange' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierWidget.xml: line 11, column 79
    function valueRange_18 () : java.lang.Object {
      return gw.pcf.ModifierWidgetHelper.modifierTypeKeyValues(modifier)
    }
    
    // 'value' attribute on TextCell (id=ModifierName_Cell) at ModifierSummaryLV.pcf: line 31, column 49
    function valueRoot_4 () : java.lang.Object {
      return modifier.Pattern
    }
    
    // 'value' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierWidget.xml: line 3, column 48
    function valueRoot_8 () : java.lang.Object {
      return modifier
    }
    
    // 'value' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierWidget.xml: line 5, column 45
    function value_10 () : java.util.Date {
      return modifier.DateModifier
    }
    
    // 'value' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierWidget.xml: line 7, column 45
    function value_13 () : java.math.BigDecimal {
      return modifier.RateWithinLimits
    }
    
    // 'value' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierWidget.xml: line 11, column 79
    function value_16 () : java.lang.String {
      return modifier.TypeKeyModifier
    }
    
    // 'value' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierSummaryLV.pcf: line 37, column 25
    function value_21 () : entity.Modifier {
      return modifier
    }
    
    // 'value' attribute on TextCell (id=ModifierName_Cell) at ModifierSummaryLV.pcf: line 31, column 49
    function value_3 () : java.lang.String {
      return modifier.Pattern.DisplayName
    }
    
    // 'value' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierWidget.xml: line 3, column 48
    function value_7 () : java.lang.Boolean {
      return modifier.BooleanModifier
    }
    
    // 'valueRange' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierWidget.xml: line 11, column 79
    function verifyValueRangeIsAllowedType_19 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierWidget.xml: line 11, column 79
    function verifyValueRangeIsAllowedType_19 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierWidget.xml: line 11, column 79
    function verifyValueRange_20 () : void {
      var __valueRangeArg = gw.pcf.ModifierWidgetHelper.modifierTypeKeyValues(modifier)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_19(__valueRangeArg)
    }
    
    // 'visible' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierWidget.xml: line 7, column 45
    function visible_12 () : java.lang.Boolean {
      return modifier.DataType == TC_RATE
    }
    
    // 'visible' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierWidget.xml: line 11, column 79
    function visible_15 () : java.lang.Boolean {
      return modifier.DataType == TC_TYPEKEY
    }
    
    // 'visible' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierWidget.xml: line 3, column 48
    function visible_6 () : java.lang.Boolean {
      return modifier.DataType == TC_BOOLEAN
    }
    
    // 'visible' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierWidget.xml: line 5, column 45
    function visible_9 () : java.lang.Boolean {
      return modifier.DataType == TC_DATE
    }
    
    property get modifier () : entity.Modifier {
      return getIteratedValue(1) as entity.Modifier
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/ModifierSummaryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ModifierSummaryLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at ModifierSummaryLV.pcf: line 20, column 24
    function sortBy_0 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.Pattern.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at ModifierSummaryLV.pcf: line 23, column 24
    function sortBy_1 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier.Pattern.PublicID
    }
    
    // 'value' attribute on ModifierCell (id=ModifierValue_Cell) at ModifierSummaryLV.pcf: line 37, column 25
    function sortValue_2 (modifier :  entity.Modifier) : java.lang.Object {
      return modifier
    }
    
    // 'value' attribute on RowIterator at ModifierSummaryLV.pcf: line 17, column 37
    function value_23 () : entity.Modifier[] {
      return modifiers
    }
    
    property get modifiers () : Modifier[] {
      return getRequireValue("modifiers", 0) as Modifier[]
    }
    
    property set modifiers ($arg :  Modifier[]) {
      setRequireValue("modifiers", 0, $arg)
    }
    
    
  }
  
  
}