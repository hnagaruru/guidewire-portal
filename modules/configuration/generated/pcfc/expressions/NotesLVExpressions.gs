package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/NotesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NotesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/NotesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NotesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at NotesLV.pcf: line 38, column 49
    function def_onEnter_0 (def :  pcf.NoteRowSet) : void {
      def.onEnter(note, viewOnly, null)
    }
    
    // 'def' attribute on RowSetRef at NotesLV.pcf: line 38, column 49
    function def_refreshVariables_1 (def :  pcf.NoteRowSet) : void {
      def.refreshVariables(note, viewOnly, null)
    }
    
    property get note () : entity.Note {
      return getIteratedValue(1) as entity.Note
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/NotesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NotesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator at NotesLV.pcf: line 36, column 71
    function value_2 () : gw.api.database.IQueryBeanResult<entity.Note> {
      return notes
    }
    
    property get notes () : gw.api.database.IQueryBeanResult<Note> {
      return getRequireValue("notes", 0) as gw.api.database.IQueryBeanResult<Note>
    }
    
    property set notes ($arg :  gw.api.database.IQueryBeanResult<Note>) {
      setRequireValue("notes", 0, $arg)
    }
    
    property get viewOnly () : boolean {
      return getRequireValue("viewOnly", 0) as java.lang.Boolean
    }
    
    property set viewOnly ($arg :  boolean) {
      setRequireValue("viewOnly", 0, $arg)
    }
    
    
  }
  
  
}