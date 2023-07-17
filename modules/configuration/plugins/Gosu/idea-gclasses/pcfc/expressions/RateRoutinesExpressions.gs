package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutines.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutinesExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutines.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutinesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (initialRateRoutine :  CalcRoutineDefinition) : int {
      return 1
    }
    
    static function __constructorIndex (initialRateRoutine :  CalcRoutineDefinition, displayImportResults :  boolean) : int {
      return 2
    }
    
    // 'afterCancel' attribute on Page (id=RateRoutines) at RateRoutines.pcf: line 12, column 71
    function afterCancel_3 () : void {
      RateRoutines.go()
    }
    
    // 'afterCancel' attribute on Page (id=RateRoutines) at RateRoutines.pcf: line 12, column 71
    function afterCancel_dest_4 () : pcf.api.Destination {
      return pcf.RateRoutines.createDestination()
    }
    
    // 'afterCommit' attribute on Page (id=RateRoutines) at RateRoutines.pcf: line 12, column 71
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      RateRoutines.go()
    }
    
    // 'canVisit' attribute on Page (id=RateRoutines) at RateRoutines.pcf: line 12, column 71
    static function canVisit_6 (displayImportResults :  boolean, initialRateRoutine :  CalcRoutineDefinition) : java.lang.Boolean {
      return perm.System.ratebookview
    }
    
    // 'def' attribute on ScreenRef at RateRoutines.pcf: line 30, column 80
    function def_onEnter_1 (def :  pcf.RateRoutineSearchScreen) : void {
      def.onEnter(initialRateRoutine, displayImportResults)
    }
    
    // 'def' attribute on ScreenRef at RateRoutines.pcf: line 30, column 80
    function def_refreshVariables_2 (def :  pcf.RateRoutineSearchScreen) : void {
      def.refreshVariables(initialRateRoutine, displayImportResults)
    }
    
    // 'initialValue' attribute on Variable at RateRoutines.pcf: line 22, column 77
    function initialValue_0 () : gw.api.database.IQueryBeanResult<CalcRoutineDefinition> {
      return gw.api.database.Query.make(CalcRoutineDefinition).select()
    }
    
    // Page (id=RateRoutines) at RateRoutines.pcf: line 12, column 71
    static function parent_7 (displayImportResults :  boolean, initialRateRoutine :  CalcRoutineDefinition) : pcf.api.Destination {
      return pcf.Rating.createDestination()
    }
    
    override property get CurrentLocation () : pcf.RateRoutines {
      return super.CurrentLocation as pcf.RateRoutines
    }
    
    property get allRateRoutines () : gw.api.database.IQueryBeanResult<CalcRoutineDefinition> {
      return getVariableValue("allRateRoutines", 0) as gw.api.database.IQueryBeanResult<CalcRoutineDefinition>
    }
    
    property set allRateRoutines ($arg :  gw.api.database.IQueryBeanResult<CalcRoutineDefinition>) {
      setVariableValue("allRateRoutines", 0, $arg)
    }
    
    property get displayImportResults () : boolean {
      return getVariableValue("displayImportResults", 0) as java.lang.Boolean
    }
    
    property set displayImportResults ($arg :  boolean) {
      setVariableValue("displayImportResults", 0, $arg)
    }
    
    property get initialRateRoutine () : CalcRoutineDefinition {
      return getVariableValue("initialRateRoutine", 0) as CalcRoutineDefinition
    }
    
    property set initialRateRoutine ($arg :  CalcRoutineDefinition) {
      setVariableValue("initialRateRoutine", 0, $arg)
    }
    
    
  }
  
  
}