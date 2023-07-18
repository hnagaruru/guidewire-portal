package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/note/NoteTemplateSearchResultLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NoteTemplateSearchResultLVExpressions {
  @javax.annotation.Generated("config/web/pcf/note/NoteTemplateSearchResultLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NoteTemplateSearchResultLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at NoteTemplateSearchResultLV.pcf: line 15, column 54
    function pickValue_26 () : NoteTemplateSearchResults {
      return noteTemplateSearchResults
    }
    
    // 'value' attribute on TextCell (id=Template_Cell) at NoteTemplateSearchResultLV.pcf: line 20, column 51
    function valueRoot_9 () : java.lang.Object {
      return noteTemplateSearchResults
    }
    
    // 'value' attribute on TypeKeyCell (id=Topic_Cell) at NoteTemplateSearchResultLV.pcf: line 26, column 70
    function value_11 () : typekey.NoteTopicType {
      return noteTemplateSearchResults.Topic
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at NoteTemplateSearchResultLV.pcf: line 32, column 65
    function value_15 () : typekey.NoteType {
      return noteTemplateSearchResults.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Language_Cell) at NoteTemplateSearchResultLV.pcf: line 38, column 69
    function value_19 () : typekey.LanguageType {
      return noteTemplateSearchResults.Language
    }
    
    // 'value' attribute on TextCell (id=lob_Cell) at NoteTemplateSearchResultLV.pcf: line 42, column 51
    function value_23 () : java.lang.String {
      return noteTemplateSearchResults.LOBs
    }
    
    // 'value' attribute on TextCell (id=Template_Cell) at NoteTemplateSearchResultLV.pcf: line 20, column 51
    function value_8 () : java.lang.String {
      return noteTemplateSearchResults.Name
    }
    
    // 'visible' attribute on TypeKeyCell (id=Topic_Cell) at NoteTemplateSearchResultLV.pcf: line 26, column 70
    function visible_13 () : java.lang.Boolean {
      return NoteTopicType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on TypeKeyCell (id=Type_Cell) at NoteTemplateSearchResultLV.pcf: line 32, column 65
    function visible_17 () : java.lang.Boolean {
      return NoteType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on TypeKeyCell (id=Language_Cell) at NoteTemplateSearchResultLV.pcf: line 38, column 69
    function visible_21 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get noteTemplateSearchResults () : entity.NoteTemplateSearchResults {
      return getIteratedValue(1) as entity.NoteTemplateSearchResults
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/note/NoteTemplateSearchResultLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NoteTemplateSearchResultLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Template_Cell) at NoteTemplateSearchResultLV.pcf: line 20, column 51
    function sortValue_0 (noteTemplateSearchResults :  entity.NoteTemplateSearchResults) : java.lang.Object {
      return noteTemplateSearchResults.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Topic_Cell) at NoteTemplateSearchResultLV.pcf: line 26, column 70
    function sortValue_1 (noteTemplateSearchResults :  entity.NoteTemplateSearchResults) : java.lang.Object {
      return noteTemplateSearchResults.Topic
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at NoteTemplateSearchResultLV.pcf: line 32, column 65
    function sortValue_3 (noteTemplateSearchResults :  entity.NoteTemplateSearchResults) : java.lang.Object {
      return noteTemplateSearchResults.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Language_Cell) at NoteTemplateSearchResultLV.pcf: line 38, column 69
    function sortValue_5 (noteTemplateSearchResults :  entity.NoteTemplateSearchResults) : java.lang.Object {
      return noteTemplateSearchResults.Language
    }
    
    // 'value' attribute on TextCell (id=lob_Cell) at NoteTemplateSearchResultLV.pcf: line 42, column 51
    function sortValue_7 (noteTemplateSearchResults :  entity.NoteTemplateSearchResults) : java.lang.Object {
      return noteTemplateSearchResults.LOBs
    }
    
    // 'value' attribute on RowIterator at NoteTemplateSearchResultLV.pcf: line 15, column 54
    function value_27 () : entity.NoteTemplateSearchResults[] {
      return noteTemplateSearchResultsList
    }
    
    // 'visible' attribute on TypeKeyCell (id=Topic_Cell) at NoteTemplateSearchResultLV.pcf: line 26, column 70
    function visible_2 () : java.lang.Boolean {
      return NoteTopicType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on TypeKeyCell (id=Type_Cell) at NoteTemplateSearchResultLV.pcf: line 32, column 65
    function visible_4 () : java.lang.Boolean {
      return NoteType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on TypeKeyCell (id=Language_Cell) at NoteTemplateSearchResultLV.pcf: line 38, column 69
    function visible_6 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get noteTemplateSearchResultsList () : NoteTemplateSearchResults[] {
      return getRequireValue("noteTemplateSearchResultsList", 0) as NoteTemplateSearchResults[]
    }
    
    property set noteTemplateSearchResultsList ($arg :  NoteTemplateSearchResults[]) {
      setRequireValue("noteTemplateSearchResultsList", 0, $arg)
    }
    
    
  }
  
  
}