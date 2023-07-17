package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/note/PickNoteTemplatePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PickNoteTemplatePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/note/PickNoteTemplatePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PickNoteTemplatePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (searchCriteria :  NoteTemplateSearchCriteria) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=PickNoteTemplatePopup_CancelButton) at PickNoteTemplatePopup.pcf: line 21, column 25
    function action_0 () : void {
      CurrentLocation.cancel();
    }
    
    override property get CurrentLocation () : pcf.PickNoteTemplatePopup {
      return super.CurrentLocation as pcf.PickNoteTemplatePopup
    }
    
    property get searchCriteria () : NoteTemplateSearchCriteria {
      return getVariableValue("searchCriteria", 0) as NoteTemplateSearchCriteria
    }
    
    property set searchCriteria ($arg :  NoteTemplateSearchCriteria) {
      setVariableValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/note/PickNoteTemplatePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends PickNoteTemplatePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PickNoteTemplatePopup.pcf: line 31, column 67
    function def_onEnter_1 (def :  pcf.NoteTemplateSearchDV) : void {
      def.onEnter(noteTemplateSearchCriteria)
    }
    
    // 'def' attribute on PanelRef at PickNoteTemplatePopup.pcf: line 33, column 76
    function def_onEnter_3 (def :  pcf.NoteTemplateSearchResultLV) : void {
      def.onEnter(noteTemplateSearchResultsList)
    }
    
    // 'def' attribute on PanelRef at PickNoteTemplatePopup.pcf: line 31, column 67
    function def_refreshVariables_2 (def :  pcf.NoteTemplateSearchDV) : void {
      def.refreshVariables(noteTemplateSearchCriteria)
    }
    
    // 'def' attribute on PanelRef at PickNoteTemplatePopup.pcf: line 33, column 76
    function def_refreshVariables_4 (def :  pcf.NoteTemplateSearchResultLV) : void {
      def.refreshVariables(noteTemplateSearchResultsList)
    }
    
    // 'searchCriteria' attribute on SearchPanel at PickNoteTemplatePopup.pcf: line 29, column 57
    function searchCriteria_6 () : entity.NoteTemplateSearchCriteria {
      return searchCriteria.copy() as NoteTemplateSearchCriteria
    }
    
    // 'search' attribute on SearchPanel at PickNoteTemplatePopup.pcf: line 29, column 57
    function search_5 () : java.lang.Object {
      return noteTemplateSearchCriteria.performSearch()
    }
    
    property get noteTemplateSearchCriteria () : entity.NoteTemplateSearchCriteria {
      return getCriteriaValue(1) as entity.NoteTemplateSearchCriteria
    }
    
    property set noteTemplateSearchCriteria ($arg :  entity.NoteTemplateSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    property get noteTemplateSearchResultsList () : NoteTemplateSearchResults[] {
      return getResultsValue(1) as NoteTemplateSearchResults[]
    }
    
    
  }
  
  
}