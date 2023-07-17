package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyNotesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CopyNotesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyNotesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CopyNotesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at CopyNotesLV.pcf: line 24, column 24
    function sortBy_0 (noteCopier :  gw.note.NoteCopier) : java.lang.Object {
      return noteCopier.Source.AuthoringDate
    }
    
    // 'value' attribute on RowIterator at CopyNotesLV.pcf: line 17, column 60
    function value_5 () : java.util.List<gw.note.NoteCopier> {
      return noteCopiers
    }
    
    property get noteCopiers () : List<gw.note.NoteCopier> {
      return getRequireValue("noteCopiers", 0) as List<gw.note.NoteCopier>
    }
    
    property set noteCopiers ($arg :  List<gw.note.NoteCopier>) {
      setRequireValue("noteCopiers", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/job/common/copydata/CopyNotesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CopyNotesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on RowSetRef at CopyNotesLV.pcf: line 26, column 64
    function def_onEnter_2 (def :  pcf.NoteRowSet) : void {
      def.onEnter(noteCopier.Source, true, noteCopier)
    }
    
    // 'def' attribute on RowSetRef at CopyNotesLV.pcf: line 26, column 64
    function def_refreshVariables_3 (def :  pcf.NoteRowSet) : void {
      def.refreshVariables(noteCopier.Source, true, noteCopier)
    }
    
    // 'initialValue' attribute on Variable at CopyNotesLV.pcf: line 21, column 29
    function initialValue_1 () : entity.Note {
      return noteCopier.Source
    }
    
    // RowIterator at CopyNotesLV.pcf: line 17, column 60
    function initializeVariables_4 () : void {
        note = noteCopier.Source;

    }
    
    property get note () : entity.Note {
      return getVariableValue("note", 1) as entity.Note
    }
    
    property set note ($arg :  entity.Note) {
      setVariableValue("note", 1, $arg)
    }
    
    property get noteCopier () : gw.note.NoteCopier {
      return getIteratedValue(1) as gw.note.NoteCopier
    }
    
    
  }
  
  
}