package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateRoutineSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateRoutineSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get displayImportResults () : boolean {
      return getRequireValue("displayImportResults", 0) as java.lang.Boolean
    }
    
    property set displayImportResults ($arg :  boolean) {
      setRequireValue("displayImportResults", 0, $arg)
    }
    
    property get initialRateRoutine () : CalcRoutineDefinition {
      return getRequireValue("initialRateRoutine", 0) as CalcRoutineDefinition
    }
    
    property set initialRateRoutine ($arg :  CalcRoutineDefinition) {
      setRequireValue("initialRateRoutine", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateRoutineSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends RateRoutineSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RateRoutineSearchScreen.pcf: line 21, column 52
    function def_onEnter_0 (def :  pcf.RateRoutineSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at RateRoutineSearchScreen.pcf: line 23, column 66
    function def_onEnter_2 (def :  pcf.RateRoutinePanelSet) : void {
      def.onEnter(rateBooks, initialRateRoutine)
    }
    
    // 'def' attribute on PanelRef at RateRoutineSearchScreen.pcf: line 21, column 52
    function def_refreshVariables_1 (def :  pcf.RateRoutineSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at RateRoutineSearchScreen.pcf: line 23, column 66
    function def_refreshVariables_3 (def :  pcf.RateRoutinePanelSet) : void {
      def.refreshVariables(rateBooks, initialRateRoutine)
    }
    
    // 'searchCriteria' attribute on SearchPanel at RateRoutineSearchScreen.pcf: line 19, column 96
    function searchCriteria_5 () : gw.rating.rtm.query.RateRoutineSearchCriteria {
      return new gw.rating.rtm.query.RateRoutineSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at RateRoutineSearchScreen.pcf: line 19, column 96
    function search_4 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    property get rateBooks () : gw.api.database.IQueryBeanResult<entity.CalcRoutineDefinition> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<entity.CalcRoutineDefinition>
    }
    
    property get searchCriteria () : gw.rating.rtm.query.RateRoutineSearchCriteria {
      return getCriteriaValue(1) as gw.rating.rtm.query.RateRoutineSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.rating.rtm.query.RateRoutineSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}