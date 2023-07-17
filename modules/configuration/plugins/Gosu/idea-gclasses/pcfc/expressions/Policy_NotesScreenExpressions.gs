package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/Policy_NotesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Policy_NotesScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/Policy_NotesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy_NotesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get activity () : Activity {
      return getRequireValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setRequireValue("activity", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/Policy_NotesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends Policy_NotesScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at Policy_NotesScreen.pcf: line 23, column 59
    function def_onEnter_0 (def :  pcf.NoteSearchDV) : void {
      def.onEnter(searchCriteria, policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Policy_NotesScreen.pcf: line 25, column 37
    function def_onEnter_2 (def :  pcf.NotesLV) : void {
      def.onEnter(notes, false)
    }
    
    // 'def' attribute on PanelRef at Policy_NotesScreen.pcf: line 23, column 59
    function def_refreshVariables_1 (def :  pcf.NoteSearchDV) : void {
      def.refreshVariables(searchCriteria, policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Policy_NotesScreen.pcf: line 25, column 37
    function def_refreshVariables_3 (def :  pcf.NotesLV) : void {
      def.refreshVariables(notes, false)
    }
    
    // 'searchCriteria' attribute on SearchPanel at Policy_NotesScreen.pcf: line 21, column 72
    function searchCriteria_5 () : entity.NoteSearchCriteria {
      return gw.web.notes.NoteSearchUtil.createSearchCriteria(null, policyPeriod, activity)
    }
    
    // 'search' attribute on SearchPanel at Policy_NotesScreen.pcf: line 21, column 72
    function search_4 () : java.lang.Object {
      return gw.web.notes.NoteSearchUtil.performSearch(searchCriteria, policyPeriod, activity)
    }
    
    property get notes () : gw.api.database.IQueryBeanResult<Note> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<Note>
    }
    
    property get searchCriteria () : entity.NoteSearchCriteria {
      return getCriteriaValue(1) as entity.NoteSearchCriteria
    }
    
    property set searchCriteria ($arg :  entity.NoteSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}