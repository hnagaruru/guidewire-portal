package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/note/NotesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NotesPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/note/NotesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NotesPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at NotesPopup.pcf: line 34, column 49
    function def_onEnter_0 (def :  pcf.NoteRowSet) : void {
      def.onEnter(note, true, null)
    }
    
    // 'def' attribute on RowSetRef at NotesPopup.pcf: line 34, column 49
    function def_refreshVariables_1 (def :  pcf.NoteRowSet) : void {
      def.refreshVariables(note, true, null)
    }
    
    property get note () : entity.Note {
      return getIteratedValue(1) as entity.Note
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/note/NotesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NotesPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (notes :  entity.Note[]) : int {
      return 0
    }
    
    // 'value' attribute on RowIterator at NotesPopup.pcf: line 32, column 37
    function value_2 () : entity.Note[] {
      return notes
    }
    
    override property get CurrentLocation () : pcf.NotesPopup {
      return super.CurrentLocation as pcf.NotesPopup
    }
    
    property get notes () : entity.Note[] {
      return getVariableValue("notes", 0) as entity.Note[]
    }
    
    property set notes ($arg :  entity.Note[]) {
      setVariableValue("notes", 0, $arg)
    }
    
    
  }
  
  
}