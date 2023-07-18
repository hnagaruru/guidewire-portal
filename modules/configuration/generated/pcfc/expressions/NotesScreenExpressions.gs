package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/NotesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NotesScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/NotesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NotesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
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
    
    property get viewOnly () : boolean {
      return getRequireValue("viewOnly", 0) as java.lang.Boolean
    }
    
    property set viewOnly ($arg :  boolean) {
      setRequireValue("viewOnly", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/NotesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends NotesScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at NotesScreen.pcf: line 29, column 59
    function def_onEnter_0 (def :  pcf.NoteSearchDV) : void {
      def.onEnter(searchCriteria, policyPeriod)
    }
    
    // 'def' attribute on PanelRef at NotesScreen.pcf: line 31, column 40
    function def_onEnter_3 (def :  pcf.NotesLV) : void {
      def.onEnter(notes, viewOnly)
    }
    
    // 'def' attribute on PanelRef at NotesScreen.pcf: line 29, column 59
    function def_refreshVariables_1 (def :  pcf.NoteSearchDV) : void {
      def.refreshVariables(searchCriteria, policyPeriod)
    }
    
    // 'def' attribute on PanelRef at NotesScreen.pcf: line 31, column 40
    function def_refreshVariables_4 (def :  pcf.NotesLV) : void {
      def.refreshVariables(notes, viewOnly)
    }
    
    // 'searchCriteria' attribute on SearchPanel at NotesScreen.pcf: line 27, column 72
    function searchCriteria_6 () : entity.NoteSearchCriteria {
      return gw.web.notes.NoteSearchUtil.createSearchCriteria(account, policyPeriod, activity)
    }
    
    // 'search' attribute on SearchPanel at NotesScreen.pcf: line 27, column 72
    function search_5 () : java.lang.Object {
      return gw.web.notes.NoteSearchUtil.performSearch(searchCriteria, policyPeriod, activity)
    }
    
    // 'visible' attribute on Toolbar (id=NotesLV_tb) at NotesScreen.pcf: line 35, column 34
    function visible_2 () : java.lang.Boolean {
      return not viewOnly
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