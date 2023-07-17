package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutinePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutinePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutinePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RateRoutinePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=RateroutineName_Cell) at RateRoutinePanelSet.pcf: line 61, column 41
    function action_13 () : void {
      RateRoutineDetail.go(rateroutine)
    }
    
    // 'action' attribute on TextCell (id=RateroutineName_Cell) at RateRoutinePanelSet.pcf: line 61, column 41
    function action_dest_14 () : pcf.api.Destination {
      return pcf.RateRoutineDetail.createDestination(rateroutine)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=rateRoutineIterator) at RateRoutinePanelSet.pcf: line 41, column 92
    function checkBoxVisible_31 () : java.lang.Boolean {
      return perm.System.ratebookedit and not rateroutine.isIncludedInPromotedRateBook()
    }
    
    // 'outputConversion' attribute on TextCell (id=RateroutinePolicyLine_Cell) at RateRoutinePanelSet.pcf: line 82, column 58
    function outputConversion_27 (VALUE :  java.lang.String) : java.lang.String {
      return rateroutine.PolicyLineDisplayName
    }
    
    // 'value' attribute on TextCell (id=RateroutineName_Cell) at RateRoutinePanelSet.pcf: line 61, column 41
    function valueRoot_16 () : java.lang.Object {
      return rateroutine
    }
    
    // 'value' attribute on TextCell (id=RateroutineName_Cell) at RateRoutinePanelSet.pcf: line 61, column 41
    function value_15 () : java.lang.String {
      return rateroutine.Name
    }
    
    // 'value' attribute on TextCell (id=RateroutineCode_Cell) at RateRoutinePanelSet.pcf: line 65, column 41
    function value_18 () : java.lang.String {
      return rateroutine.Code
    }
    
    // 'value' attribute on TypeKeyCell (id=RateroutineJurisdiction_Cell) at RateRoutinePanelSet.pcf: line 71, column 49
    function value_21 () : typekey.Jurisdiction {
      return rateroutine.Jurisdiction
    }
    
    // 'value' attribute on TextCell (id=RateroutineVersion_Cell) at RateRoutinePanelSet.pcf: line 77, column 46
    function value_24 () : java.lang.Integer {
      return rateroutine.Version
    }
    
    // 'value' attribute on TextCell (id=RateroutinePolicyLine_Cell) at RateRoutinePanelSet.pcf: line 82, column 58
    function value_28 () : java.lang.String {
      return rateroutine.PolicyLinePatternCode
    }
    
    property get rateroutine () : entity.CalcRoutineDefinition {
      return getIteratedValue(1) as entity.CalcRoutineDefinition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutinePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutinePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddRateRoutineDefButton) at RateRoutinePanelSet.pcf: line 20, column 47
    function action_1 () : void {
      ConfigureRateRoutine.go(true, null, UNDEFINED)
    }
    
    // 'action' attribute on ToolbarButton (id=AddRateRoutineDefButton) at RateRoutinePanelSet.pcf: line 20, column 47
    function action_dest_2 () : pcf.api.Destination {
      return pcf.ConfigureRateRoutine.createDestination(true, null, UNDEFINED)
    }
    
    // 'sortBy' attribute on IteratorSort at RateRoutinePanelSet.pcf: line 44, column 28
    function sortBy_4 (rateroutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateroutine.PolicyLinePatternCode
    }
    
    // 'sortBy' attribute on IteratorSort at RateRoutinePanelSet.pcf: line 47, column 28
    function sortBy_5 (rateroutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateroutine.Code
    }
    
    // 'sortBy' attribute on IteratorSort at RateRoutinePanelSet.pcf: line 50, column 28
    function sortBy_6 (rateroutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateroutine.Jurisdiction
    }
    
    // 'sortBy' attribute on IteratorSort at RateRoutinePanelSet.pcf: line 54, column 28
    function sortBy_7 (rateroutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateroutine.Version
    }
    
    // 'value' attribute on TypeKeyCell (id=RateroutineJurisdiction_Cell) at RateRoutinePanelSet.pcf: line 71, column 49
    function sortValue_10 (rateroutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateroutine.Jurisdiction
    }
    
    // 'value' attribute on TextCell (id=RateroutineVersion_Cell) at RateRoutinePanelSet.pcf: line 77, column 46
    function sortValue_11 (rateroutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateroutine.Version
    }
    
    // 'value' attribute on TextCell (id=RateroutinePolicyLine_Cell) at RateRoutinePanelSet.pcf: line 82, column 58
    function sortValue_12 (rateroutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateroutine.PolicyLinePatternCode
    }
    
    // 'value' attribute on TextCell (id=RateroutineName_Cell) at RateRoutinePanelSet.pcf: line 61, column 41
    function sortValue_8 (rateroutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateroutine.Name
    }
    
    // 'value' attribute on TextCell (id=RateroutineCode_Cell) at RateRoutinePanelSet.pcf: line 65, column 41
    function sortValue_9 (rateroutine :  entity.CalcRoutineDefinition) : java.lang.Object {
      return rateroutine.Code
    }
    
    // 'toRemove' attribute on RowIterator (id=rateRoutineIterator) at RateRoutinePanelSet.pcf: line 41, column 92
    function toRemove_32 (rateroutine :  entity.CalcRoutineDefinition) : void {
      rateroutine.canDelete(); rateroutine.remove()
    }
    
    // 'value' attribute on RowIterator (id=rateRoutineIterator) at RateRoutinePanelSet.pcf: line 41, column 92
    function value_33 () : gw.api.database.IQueryBeanResult<entity.CalcRoutineDefinition> {
      return allRateRoutines
    }
    
    // 'visible' attribute on ToolbarButton (id=AddRateRoutineDefButton) at RateRoutinePanelSet.pcf: line 20, column 47
    function visible_0 () : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    property get allRateRoutines () : gw.api.database.IQueryBeanResult<entity.CalcRoutineDefinition> {
      return getRequireValue("allRateRoutines", 0) as gw.api.database.IQueryBeanResult<entity.CalcRoutineDefinition>
    }
    
    property set allRateRoutines ($arg :  gw.api.database.IQueryBeanResult<entity.CalcRoutineDefinition>) {
      setRequireValue("allRateRoutines", 0, $arg)
    }
    
    property get initialRateRoutine () : CalcRoutineDefinition {
      return getRequireValue("initialRateRoutine", 0) as CalcRoutineDefinition
    }
    
    property set initialRateRoutine ($arg :  CalcRoutineDefinition) {
      setRequireValue("initialRateRoutine", 0, $arg)
    }
    
    
  }
  
  
}