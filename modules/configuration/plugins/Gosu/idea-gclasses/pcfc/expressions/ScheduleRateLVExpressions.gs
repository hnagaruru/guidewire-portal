package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/ScheduleRateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ScheduleRateLVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/ScheduleRateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ScheduleRateLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CreditDebit_Cell) at ScheduleRateLV.pcf: line 49, column 44
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateFactor.AssessmentWithinLimits = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=Justification_Cell) at ScheduleRateLV.pcf: line 58, column 58
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateFactor.Justification = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=Justification_Cell) at ScheduleRateLV.pcf: line 58, column 58
    function editable_34 () : java.lang.Boolean {
      return rateFactor.Pattern.ModifierPattern.DisplayJustification
    }
    
    // 'requestValidationExpression' attribute on TextCell (id=CreditDebit_Cell) at ScheduleRateLV.pcf: line 49, column 44
    function requestValidationExpression_29 (VALUE :  java.math.BigDecimal) : java.lang.Object {
      return gw.policy.ModifierValidation.checkValueRanges(rateFactor, VALUE)
    }
    
    // 'validationExpression' attribute on TextCell (id=Justification_Cell) at ScheduleRateLV.pcf: line 58, column 58
    function validationExpression_35 () : java.lang.Object {
      return gw.policy.ModifierValidation.verifyRateFactor(rateFactor)
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at ScheduleRateLV.pcf: line 24, column 24
    function valueRoot_19 () : java.lang.Object {
      return rateFactor.Pattern
    }
    
    // 'value' attribute on TextCell (id=Minimum_Cell) at ScheduleRateLV.pcf: line 32, column 50
    function valueRoot_22 () : java.lang.Object {
      return rateFactor
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at ScheduleRateLV.pcf: line 24, column 24
    function value_18 () : java.lang.String {
      return rateFactor.Pattern.Name
    }
    
    // 'value' attribute on TextCell (id=Minimum_Cell) at ScheduleRateLV.pcf: line 32, column 50
    function value_21 () : java.math.BigDecimal {
      return rateFactor.Minimum
    }
    
    // 'value' attribute on TextCell (id=Maximum_Cell) at ScheduleRateLV.pcf: line 40, column 50
    function value_25 () : java.math.BigDecimal {
      return rateFactor.Maximum
    }
    
    // 'value' attribute on TextCell (id=CreditDebit_Cell) at ScheduleRateLV.pcf: line 49, column 44
    function value_30 () : java.math.BigDecimal {
      return rateFactor.AssessmentWithinLimits
    }
    
    // 'value' attribute on TextCell (id=Justification_Cell) at ScheduleRateLV.pcf: line 58, column 58
    function value_36 () : java.lang.String {
      return rateFactor.Justification
    }
    
    // 'visible' attribute on TextCell (id=Minimum_Cell) at ScheduleRateLV.pcf: line 32, column 50
    function visible_23 () : java.lang.Boolean {
      return credit.Pattern.DisplayRange
    }
    
    // 'visible' attribute on TextCell (id=Justification_Cell) at ScheduleRateLV.pcf: line 58, column 58
    function visible_41 () : java.lang.Boolean {
      return credit.Pattern.DisplayJustification
    }
    
    property get rateFactor () : entity.RateFactor {
      return getIteratedValue(1) as entity.RateFactor
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/ScheduleRateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScheduleRateLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at ScheduleRateLV.pcf: line 17, column 24
    function sortBy_0 (rateFactor :  entity.RateFactor) : java.lang.Object {
      return rateFactor.Pattern.Priority
    }
    
    // 'value' attribute on TextCell (id=Category_Cell) at ScheduleRateLV.pcf: line 24, column 24
    function sortValue_1 (rateFactor :  entity.RateFactor) : java.lang.Object {
      return rateFactor.Pattern.Name
    }
    
    // 'value' attribute on TextCell (id=Minimum_Cell) at ScheduleRateLV.pcf: line 32, column 50
    function sortValue_2 (rateFactor :  entity.RateFactor) : java.lang.Object {
      return rateFactor.Minimum
    }
    
    // 'value' attribute on TextCell (id=Maximum_Cell) at ScheduleRateLV.pcf: line 40, column 50
    function sortValue_4 (rateFactor :  entity.RateFactor) : java.lang.Object {
      return rateFactor.Maximum
    }
    
    // 'value' attribute on TextCell (id=CreditDebit_Cell) at ScheduleRateLV.pcf: line 49, column 44
    function sortValue_6 (rateFactor :  entity.RateFactor) : java.lang.Object {
      return rateFactor.AssessmentWithinLimits
    }
    
    // 'value' attribute on TextCell (id=Justification_Cell) at ScheduleRateLV.pcf: line 58, column 58
    function sortValue_7 (rateFactor :  entity.RateFactor) : java.lang.Object {
      return rateFactor.Justification
    }
    
    // 'value' attribute on RowIterator at ScheduleRateLV.pcf: line 32, column 50
    function valueRoot_10 () : java.lang.Object {
      return credit.Minimum
    }
    
    // 'value' attribute on RowIterator at ScheduleRateLV.pcf: line 40, column 50
    function valueRoot_13 () : java.lang.Object {
      return credit.Maximum
    }
    
    // 'value' attribute on RowIterator at ScheduleRateLV.pcf: line 49, column 44
    function valueRoot_16 () : java.lang.Object {
      return credit.RateModifier
    }
    
    // 'footerLabel' attribute on RowIterator at ScheduleRateLV.pcf: line 40, column 50
    function value_12 () : java.lang.Object {
      return credit.Maximum.DisplayValue
    }
    
    // 'footerLabel' attribute on RowIterator at ScheduleRateLV.pcf: line 49, column 44
    function value_15 () : java.lang.Object {
      return credit.RateModifier.DisplayValue
    }
    
    // 'value' attribute on RowIterator at ScheduleRateLV.pcf: line 14, column 39
    function value_43 () : entity.RateFactor[] {
      return credit.RateFactors
    }
    
    // 'footerLabel' attribute on RowIterator at ScheduleRateLV.pcf: line 32, column 50
    function value_9 () : java.lang.Object {
      return credit.Minimum.DisplayValue
    }
    
    // 'visible' attribute on TextCell (id=Minimum_Cell) at ScheduleRateLV.pcf: line 32, column 50
    function visible_3 () : java.lang.Boolean {
      return credit.Pattern.DisplayRange
    }
    
    // 'visible' attribute on TextCell (id=Justification_Cell) at ScheduleRateLV.pcf: line 58, column 58
    function visible_8 () : java.lang.Boolean {
      return credit.Pattern.DisplayJustification
    }
    
    property get credit () : Modifier {
      return getRequireValue("credit", 0) as Modifier
    }
    
    property set credit ($arg :  Modifier) {
      setRequireValue("credit", 0, $arg)
    }
    
    
  }
  
  
}