package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineStepEditOperand.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineStepEditOperand_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineStepEditOperand.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineStepEditOperandExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineStepEditOperand.default.pcf: line 29, column 152
    function def_onEnter_0 (def :  pcf.RateRoutineOperandMenuItemSet_default) : void {
      def.onEnter(ratingRoutineStep.PrimaryOperand, rateRoutine, inScopeParamInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'def' attribute on MenuItemSetRef at RateRoutineStepEditOperand.default.pcf: line 29, column 152
    function def_refreshVariables_1 (def :  pcf.RateRoutineOperandMenuItemSet_default) : void {
      def.refreshVariables(ratingRoutineStep.PrimaryOperand, rateRoutine, inScopeParamInScopeUsageMap, costDataUsages, orderedSteps)
    }
    
    // 'value' attribute on TextCell (id=DefaultPrimaryOperand_Cell) at RateRoutineStepEditOperand.default.pcf: line 27, column 60
    function valueRoot_3 () : java.lang.Object {
      return ratingRoutineStep.PrimaryOperand
    }
    
    // 'value' attribute on TextCell (id=DefaultPrimaryOperand_Cell) at RateRoutineStepEditOperand.default.pcf: line 27, column 60
    function value_2 () : java.lang.String {
      return ratingRoutineStep.PrimaryOperand.OperandName
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