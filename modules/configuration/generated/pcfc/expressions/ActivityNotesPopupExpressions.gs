package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/ActivityNotesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityNotesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/ActivityNotesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityNotesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (activity :  Activity, account :  Account) : int {
      return 1
    }
    
    static function __constructorIndex (activity :  Activity, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at ActivityNotesPopup.pcf: line 45, column 36
    function def_onEnter_3 (def :  pcf.NotesLV) : void {
      def.onEnter(notes, true)
    }
    
    // 'def' attribute on PanelRef at ActivityNotesPopup.pcf: line 45, column 36
    function def_refreshVariables_4 (def :  pcf.NotesLV) : void {
      def.refreshVariables(notes, true)
    }
    
    // 'initialValue' attribute on Variable at ActivityNotesPopup.pcf: line 22, column 41
    function initialValue_0 () : entity.NoteSearchCriteria {
      return gw.web.notes.NoteSearchUtil.createSearchCriteria(account, policyPeriod, activity)
    }
    
    // 'initialValue' attribute on Variable at ActivityNotesPopup.pcf: line 26, column 67
    function initialValue_1 () : gw.api.database.IQueryBeanResult<entity.Note> {
      return gw.web.notes.NoteSearchUtil.performSearch(noteSearchCriteria, policyPeriod, activity)
    }
    
    // 'visible' attribute on DetailViewPanel (id=ActivityNoNotesDV) at ActivityNotesPopup.pcf: line 33, column 36
    function visible_2 () : java.lang.Boolean {
      return notes.Count == 0
    }
    
    override property get CurrentLocation () : pcf.ActivityNotesPopup {
      return super.CurrentLocation as pcf.ActivityNotesPopup
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get activity () : Activity {
      return getVariableValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setVariableValue("activity", 0, $arg)
    }
    
    property get noteSearchCriteria () : entity.NoteSearchCriteria {
      return getVariableValue("noteSearchCriteria", 0) as entity.NoteSearchCriteria
    }
    
    property set noteSearchCriteria ($arg :  entity.NoteSearchCriteria) {
      setVariableValue("noteSearchCriteria", 0, $arg)
    }
    
    property get notes () : gw.api.database.IQueryBeanResult<entity.Note> {
      return getVariableValue("notes", 0) as gw.api.database.IQueryBeanResult<entity.Note>
    }
    
    property set notes ($arg :  gw.api.database.IQueryBeanResult<entity.Note>) {
      setVariableValue("notes", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}