package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/NoteRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NoteRowSetExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/NoteRowSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NoteRowSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NotesLV_EditLink) at NoteRowSet.pcf: line 48, column 45
    function action_11 () : void {
      EditNotePopup.push(note)
    }
    
    // 'action' attribute on Link (id=NotesLV_DeleteLink) at NoteRowSet.pcf: line 36, column 47
    function action_7 () : void {
      note.delete()
    }
    
    // 'action' attribute on Link (id=NotesLV_EditLink) at NoteRowSet.pcf: line 48, column 45
    function action_dest_12 () : pcf.api.Destination {
      return pcf.EditNotePopup.createDestination(note)
    }
    
    // 'available' attribute on Link (id=NotesLV_DeleteLink) at NoteRowSet.pcf: line 36, column 47
    function available_5 () : java.lang.Boolean {
      return perm.Note.delete(note)
    }
    
    // 'available' attribute on Link (id=NotesLV_EditLink) at NoteRowSet.pcf: line 48, column 45
    function available_9 () : java.lang.Boolean {
      return perm.Note.edit(note)
    }
    
    // 'value' attribute on CheckBoxCell (id=shouldCopy_Cell) at NoteRowSet.pcf: line 22, column 39
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      noteCopier.ShouldCopy = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at NoteRowSet.pcf: line 56, column 36
    function valueRoot_15 () : java.lang.Object {
      return note
    }
    
    // 'value' attribute on CheckBoxCell (id=shouldCopy_Cell) at NoteRowSet.pcf: line 22, column 39
    function valueRoot_2 () : java.lang.Object {
      return noteCopier
    }
    
    // 'value' attribute on TextInput (id=SecurityType_Input) at NoteRowSet.pcf: line 69, column 50
    function valueRoot_21 () : java.lang.Object {
      return note.SecurityType
    }
    
    // 'value' attribute on CheckBoxCell (id=shouldCopy_Cell) at NoteRowSet.pcf: line 22, column 39
    function value_0 () : java.lang.Boolean {
      return noteCopier.ShouldCopy
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at NoteRowSet.pcf: line 56, column 36
    function value_14 () : entity.User {
      return note.Author
    }
    
    // 'value' attribute on TextInput (id=Topic_Input) at NoteRowSet.pcf: line 63, column 46
    function value_17 () : typekey.NoteTopicType {
      return note.Topic
    }
    
    // 'value' attribute on TextInput (id=SecurityType_Input) at NoteRowSet.pcf: line 69, column 50
    function value_20 () : java.lang.String {
      return note.SecurityType.DisplayName
    }
    
    // 'value' attribute on TextInput (id=RelatedTo_Input) at NoteRowSet.pcf: line 75, column 68
    function value_23 () : java.lang.String {
      return entity.Note.getLevelDisplayString( note.Level )
    }
    
    // 'value' attribute on TextInput (id=AuthoringDate_Input) at NoteRowSet.pcf: line 89, column 185
    function value_27 () : java.lang.String {
      return gw.api.util.StringUtil.formatDate(note.AuthoringDate, "medium") + " " + gw.api.util.StringUtil.formatTime(note.AuthoringDate, "short")
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at NoteRowSet.pcf: line 96, column 43
    function value_30 () : java.lang.String {
      return note.Subject
    }
    
    // 'value' attribute on NoteBodyInput (id=Body_Input) at NoteRowSet.pcf: line 100, column 30
    function value_34 () : java.lang.String {
      return note.Body
    }
    
    // 'visible' attribute on ContentInput (id=Buttons) at NoteRowSet.pcf: line 29, column 34
    function visible_13 () : java.lang.Boolean {
      return not viewOnly
    }
    
    // 'visible' attribute on TextInput (id=Confidential_Input) at NoteRowSet.pcf: line 80, column 40
    function visible_25 () : java.lang.Boolean {
      return note.Confidential
    }
    
    // 'visible' attribute on TextInput (id=Subject_Input) at NoteRowSet.pcf: line 96, column 43
    function visible_29 () : java.lang.Boolean {
      return note.Subject != null
    }
    
    // 'visible' attribute on CheckBoxCell (id=shouldCopy_Cell) at NoteRowSet.pcf: line 22, column 39
    function visible_3 () : java.lang.Boolean {
      return noteCopier != null
    }
    
    // 'visible' attribute on Link (id=SpacerLink0) at NoteRowSet.pcf: line 41, column 72
    function visible_8 () : java.lang.Boolean {
      return perm.Note.delete(note) and perm.Note.edit(note)
    }
    
    property get note () : Note {
      return getRequireValue("note", 0) as Note
    }
    
    property set note ($arg :  Note) {
      setRequireValue("note", 0, $arg)
    }
    
    property get noteCopier () : gw.note.NoteCopier {
      return getRequireValue("noteCopier", 0) as gw.note.NoteCopier
    }
    
    property set noteCopier ($arg :  gw.note.NoteCopier) {
      setRequireValue("noteCopier", 0, $arg)
    }
    
    property get viewOnly () : boolean {
      return getRequireValue("viewOnly", 0) as java.lang.Boolean
    }
    
    property set viewOnly ($arg :  boolean) {
      setRequireValue("viewOnly", 0, $arg)
    }
    
    
  }
  
  
}