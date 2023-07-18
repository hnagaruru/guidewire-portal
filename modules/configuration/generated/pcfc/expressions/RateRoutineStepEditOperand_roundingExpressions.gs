package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineStepEditOperand.rounding.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineStepEditOperand_roundingExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineStepEditOperand.rounding.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineStepEditOperandExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=RoundingPrimaryOperand_Cell) at RateRoutineStepEditOperand.rounding.pcf: line 29, column 46
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      ratingRoutineStep.PrimaryOperand.RoundingScaleType = (__VALUE_TO_SET as typekey.RoundingScaleType)
    }
    
    // 'required' attribute on TypeKeyCell (id=RoundingPrimaryOperand_Cell) at RateRoutineStepEditOperand.rounding.pcf: line 29, column 46
    function required_0 () : java.lang.Boolean {
      return ratingRoutineStep.PrimaryOperand.IsRounding
    }
    
    // 'value' attribute on TypeKeyCell (id=RoundingPrimaryOperand_Cell) at RateRoutineStepEditOperand.rounding.pcf: line 29, column 46
    function valueRoot_3 () : java.lang.Object {
      return ratingRoutineStep.PrimaryOperand
    }
    
    // 'value' attribute on TypeKeyCell (id=RoundingPrimaryOperand_Cell) at RateRoutineStepEditOperand.rounding.pcf: line 29, column 46
    function value_1 () : typekey.RoundingScaleType {
      return ratingRoutineStep.PrimaryOperand.RoundingScaleType
    }
    
    property get costDataUsages () : java.util.List<gw.rating.flow.util.InScopeUsage> {
      return getRequireValue("costDataUsages", 0) as java.util.List<gw.rating.flow.util.InScopeUsage>
    }
    
    property set costDataUsages ($arg :  java.util.List<gw.rating.flow.util.InScopeUsage>) {
      setRequireValue("costDataUsages", 0, $arg)
    }
    
    property get inScopeParamInScopeUsageMap () : java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>> {
      return getRequireValue("inScopeParamInScopeUsageMap", 0) as java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>>
    }
    
    property set inScopeParamInScopeUsageMap ($arg :  java.util.Map<CalcRoutineParamName, List<gw.rating.flow.util.InScopeUsage>>) {
      setRequireValue("inScopeParamInScopeUsageMap", 0, $arg)
    }
    
    property get orderedSteps () : List<CalcStepDefinition> {
      return getRequireValue("orderedSteps", 0) as List<CalcStepDefinition>
    }
    
    property set orderedSteps ($arg :  List<CalcStepDefinition>) {
      setRequireValue("orderedSteps", 0, $arg)
    }
    
    property get rateRoutine () : CalcRoutineDefinition {
      return getRequireValue("rateRoutine", 0) as CalcRoutineDefinition
    }
    
    property set rateRoutine ($arg :  CalcRoutineDefinition) {
      setRequireValue("rateRoutine", 0, $arg)
    }
    
    property get ratingRoutineStep () : CalcStepDefinition {
      return getRequireValue("ratingRoutineStep", 0) as CalcStepDefinition
    }
    
    property set ratingRoutineStep ($arg :  CalcStepDefinition) {
      setRequireValue("ratingRoutineStep", 0, $arg)
    }
    
    
  }
  
  
}