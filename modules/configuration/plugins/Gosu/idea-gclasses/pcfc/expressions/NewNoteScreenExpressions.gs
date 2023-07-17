package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/note/NewNoteScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewNoteScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/note/NewNoteScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewNoteScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=NewNoteScreen_UpdateButton) at NewNoteScreen.pcf: line 19, column 23
    function action_1 () : void {
      if( gw.api.web.note.NoteUtil.createNote(newNoteHelper.Note) ) {gw.api.web.workspace.WorkspaceUtil.closeWorksheetIfActiveAndRefreshTop(CurrentLocation) }
    }
    
    // 'action' attribute on ToolbarButton (id=NewNoteScreen_CancelButton) at NewNoteScreen.pcf: line 24, column 23
    function action_2 () : void {
      gw.api.web.workspace.WorkspaceUtil.closeWorksheetIfActiveAndRefreshTop(CurrentLocation)
    }
    
    // 'action' attribute on PickerToolbarButton (id=NewNoteWorksheet_UseTemplateButton) at NewNoteScreen.pcf: line 30, column 78
    function action_3 () : void {
      PickNoteTemplatePopup.push(createSearchCriteria())
    }
    
    // 'action' attribute on PickerToolbarButton (id=NewNoteWorksheet_UseTemplateButton) at NewNoteScreen.pcf: line 30, column 78
    function action_dest_4 () : pcf.api.Destination {
      return pcf.PickNoteTemplatePopup.createDestination(createSearchCriteria())
    }
    
    // 'def' attribute on PanelRef at NewNoteScreen.pcf: line 33, column 39
    function def_onEnter_6 (def :  pcf.NewNoteDV) : void {
      def.onEnter(newNoteHelper)
    }
    
    // 'def' attribute on PanelRef at NewNoteScreen.pcf: line 33, column 39
    function def_refreshVariables_7 (def :  pcf.NewNoteDV) : void {
      def.refreshVariables(newNoteHelper)
    }
    
    // 'initialValue' attribute on Variable at NewNoteScreen.pcf: line 13, column 50
    function initialValue_0 () : java.util.Map<String, Object> {
      return gw.api.util.SymbolTableUtil.expandBeans( { "account" -> newNoteHelper.Account, "policy" -> newNoteHelper.Policy, "job" -> newNoteHelper.Job })
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=NewNoteWorksheet_UseTemplateButton) at NewNoteScreen.pcf: line 30, column 78
    function onPick_5 (PickedValue :  NoteTemplateSearchResults) : void {
      newNoteHelper.Note.useTemplate( PickedValue, symbolTable )
    }
    
    property get newNoteHelper () : gw.note.NewNoteHelper {
      return getRequireValue("newNoteHelper", 0) as gw.note.NewNoteHelper
    }
    
    property set newNoteHelper ($arg :  gw.note.NewNoteHelper) {
      setRequireValue("newNoteHelper", 0, $arg)
    }
    
    property get symbolTable () : java.util.Map<String, Object> {
      return getVariableValue("symbolTable", 0) as java.util.Map<String, Object>
    }
    
    property set symbolTable ($arg :  java.util.Map<String, Object>) {
      setVariableValue("symbolTable", 0, $arg)
    }
    
    function createSearchCriteria() : NoteTemplateSearchCriteria {
          var rtn = new NoteTemplateSearchCriteria()
          rtn.AvailableSymbols = symbolTable.Keys.join(",")
          rtn.LOB = newNoteHelper.Policy.Product.PublicID
          return rtn
        }
    
    
  }
  
  
}