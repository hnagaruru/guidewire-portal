package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/prerenewal/PreRenewalNotesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PreRenewalNotesPageExpressions {
  @javax.annotation.Generated("config/web/pcf/prerenewal/PreRenewalNotesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PreRenewalNotesPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, topic :  NoteTopicType, asOfDate :  java.util.Date) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=PreRenewalNotesPage) at PreRenewalNotesPage.pcf: line 10, column 62
    static function canVisit_6 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod, topic :  NoteTopicType) : java.lang.Boolean {
      return policyPeriod.Policy.canViewNotes() and perm.PolicyPeriod.view(policyPeriod) and perm.System.noteview
    }
    
    // 'parent' attribute on Page (id=PreRenewalNotesPage) at PreRenewalNotesPage.pcf: line 10, column 62
    static function parent_7 (asOfDate :  java.util.Date, policyPeriod :  PolicyPeriod, topic :  NoteTopicType) : pcf.api.Destination {
      return pcf.PolicyFile.createDestination(policyPeriod, asOfDate)
    }
    
    override property get CurrentLocation () : pcf.PreRenewalNotesPage {
      return super.CurrentLocation as pcf.PreRenewalNotesPage
    }
    
    property get asOfDate () : java.util.Date {
      return getVariableValue("asOfDate", 0) as java.util.Date
    }
    
    property set asOfDate ($arg :  java.util.Date) {
      setVariableValue("asOfDate", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    property get topic () : NoteTopicType {
      return getVariableValue("topic", 0) as NoteTopicType
    }
    
    property set topic ($arg :  NoteTopicType) {
      setVariableValue("topic", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/prerenewal/PreRenewalNotesPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends PreRenewalNotesPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PreRenewalNotesPage.pcf: line 34, column 61
    function def_onEnter_0 (def :  pcf.NoteSearchDV) : void {
      def.onEnter(searchCriteria, policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PreRenewalNotesPage.pcf: line 36, column 38
    function def_onEnter_2 (def :  pcf.NotesLV) : void {
      def.onEnter(notes, true)
    }
    
    // 'def' attribute on PanelRef at PreRenewalNotesPage.pcf: line 34, column 61
    function def_refreshVariables_1 (def :  pcf.NoteSearchDV) : void {
      def.refreshVariables(searchCriteria, policyPeriod)
    }
    
    // 'def' attribute on PanelRef at PreRenewalNotesPage.pcf: line 36, column 38
    function def_refreshVariables_3 (def :  pcf.NotesLV) : void {
      def.refreshVariables(notes, true)
    }
    
    // 'searchCriteria' attribute on SearchPanel at PreRenewalNotesPage.pcf: line 32, column 74
    function searchCriteria_5 () : entity.NoteSearchCriteria {
      return new NoteSearchCriteria() {:Policy = policyPeriod.Policy, :Topic = topic}
    }
    
    // 'search' attribute on SearchPanel at PreRenewalNotesPage.pcf: line 32, column 74
    function search_4 () : java.lang.Object {
      return searchCriteria.performSearch()
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