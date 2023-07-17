package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/note/NotesDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NotesDetailViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/note/NotesDetailViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NotesDetailViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TileAction (id=NewNote) at NotesDetailViewTile.pcf: line 19, column 69
    function action_1 () : void {
      noteHelper.goInNewNote()
    }
    
    // 'action' attribute on TextInput (id=NoteTopicLabel1_Input) at NotesDetailViewTile.pcf: line 45, column 62
    function action_21 () : void {
      noteHelper.pushViewMore()
    }
    
    // 'action' attribute on TextInput (id=NoteTopicLabel0_Input) at NotesDetailViewTile.pcf: line 27, column 62
    function action_3 () : void {
      noteHelper.pushViewMore()
    }
    
    // 'action' attribute on TextInput (id=NoteTopicLabel2_Input) at NotesDetailViewTile.pcf: line 63, column 62
    function action_39 () : void {
      noteHelper.pushViewMore()
    }
    
    // 'viewMoreAction' attribute on DetailViewTile (id=NotesDetailViewTile) at NotesDetailViewTile.pcf: line 10, column 50
    function action_56 () : void {
      noteHelper.pushViewMore()
    }
    
    // 'available' attribute on TileAction (id=NewNote) at NotesDetailViewTile.pcf: line 19, column 69
    function available_0 () : java.lang.Boolean {
      return gw.api.web.dashboard.ui.DashboardParameters.AccountOverviewPermissions.Instance.CanAddNote and noteHelper.CanAddNewNote
    }
    
    // 'label' attribute on TextInput (id=NoteRelatedTo0_Input) at NotesDetailViewTile.pcf: line 37, column 51
    function label_14 () : java.lang.Object {
      return DisplayKey.get('Web.Dashboard.Tile.Notes.RelatedTo', noteHelper.relatedTo(0).TypeName)
    }
    
    // 'label' attribute on TextInput (id=NoteTopicLabel1_Input) at NotesDetailViewTile.pcf: line 45, column 62
    function label_22 () : java.lang.Object {
      return noteHelper.dateAndTimeFormat(1)
    }
    
    // 'label' attribute on TextInput (id=NoteRelatedTo1_Input) at NotesDetailViewTile.pcf: line 55, column 51
    function label_32 () : java.lang.Object {
      return DisplayKey.get('Web.Dashboard.Tile.Notes.RelatedTo', noteHelper.relatedTo(1).TypeName)
    }
    
    // 'label' attribute on TextInput (id=NoteTopicLabel0_Input) at NotesDetailViewTile.pcf: line 27, column 62
    function label_4 () : java.lang.Object {
      return noteHelper.dateAndTimeFormat(0)
    }
    
    // 'label' attribute on TextInput (id=NoteTopicLabel2_Input) at NotesDetailViewTile.pcf: line 63, column 62
    function label_40 () : java.lang.Object {
      return noteHelper.dateAndTimeFormat(2)
    }
    
    // 'label' attribute on TextInput (id=NoteRelatedTo2_Input) at NotesDetailViewTile.pcf: line 73, column 51
    function label_50 () : java.lang.Object {
      return DisplayKey.get('Web.Dashboard.Tile.Notes.RelatedTo', noteHelper.relatedTo(2).TypeName)
    }
    
    // 'value' attribute on TextInput (id=NoteBody0_Input) at NotesDetailViewTile.pcf: line 32, column 46
    function value_10 () : java.lang.String {
      return noteHelper.truncatedBody(0)
    }
    
    // 'value' attribute on TextInput (id=NoteRelatedTo0_Input) at NotesDetailViewTile.pcf: line 37, column 51
    function value_15 () : java.lang.String {
      return noteHelper.truncatedRelatedTo(0)
    }
    
    // 'value' attribute on TextInput (id=NoteTopicLabel1_Input) at NotesDetailViewTile.pcf: line 45, column 62
    function value_23 () : java.lang.String {
      return noteHelper.RecentNotes[1].Topic.DisplayName
    }
    
    // 'value' attribute on TextInput (id=NoteBody1_Input) at NotesDetailViewTile.pcf: line 50, column 46
    function value_28 () : java.lang.String {
      return noteHelper.truncatedBody(1)
    }
    
    // 'value' attribute on TextInput (id=NoteRelatedTo1_Input) at NotesDetailViewTile.pcf: line 55, column 51
    function value_33 () : java.lang.String {
      return noteHelper.truncatedRelatedTo(1)
    }
    
    // 'value' attribute on TextInput (id=NoteTopicLabel2_Input) at NotesDetailViewTile.pcf: line 63, column 62
    function value_41 () : java.lang.String {
      return noteHelper.RecentNotes[2].Topic.DisplayName
    }
    
    // 'value' attribute on TextInput (id=NoteBody2_Input) at NotesDetailViewTile.pcf: line 68, column 46
    function value_46 () : java.lang.String {
      return noteHelper.truncatedBody(2)
    }
    
    // 'value' attribute on TextInput (id=NoteTopicLabel0_Input) at NotesDetailViewTile.pcf: line 27, column 62
    function value_5 () : java.lang.String {
      return noteHelper.RecentNotes[0].Topic.DisplayName
    }
    
    // 'value' attribute on TextInput (id=NoteRelatedTo2_Input) at NotesDetailViewTile.pcf: line 73, column 51
    function value_51 () : java.lang.String {
      return noteHelper.truncatedRelatedTo(2)
    }
    
    // 'visible' attribute on TextInput (id=NoteRelatedTo0_Input) at NotesDetailViewTile.pcf: line 37, column 51
    function visible_13 () : java.lang.Boolean {
      return noteHelper.isRelatedToVisible(0)
    }
    
    // 'visible' attribute on InputDivider at NotesDetailViewTile.pcf: line 39, column 50
    function visible_19 () : java.lang.Boolean {
      return noteHelper.isNoteAvailable(1)
    }
    
    // 'visible' attribute on TextInput (id=NoteTopicLabel0_Input) at NotesDetailViewTile.pcf: line 27, column 62
    function visible_2 () : java.lang.Boolean {
      return noteHelper.isNoteAvailable(0)
    }
    
    // 'visible' attribute on TextInput (id=NoteRelatedTo1_Input) at NotesDetailViewTile.pcf: line 55, column 51
    function visible_31 () : java.lang.Boolean {
      return noteHelper.isRelatedToVisible(1)
    }
    
    // 'visible' attribute on InputDivider at NotesDetailViewTile.pcf: line 57, column 50
    function visible_37 () : java.lang.Boolean {
      return noteHelper.isNoteAvailable(2)
    }
    
    // 'visible' attribute on TextInput (id=NoteRelatedTo2_Input) at NotesDetailViewTile.pcf: line 73, column 51
    function visible_49 () : java.lang.Boolean {
      return noteHelper.isRelatedToVisible(2)
    }
    
    // 'viewMoreVisible' attribute on DetailViewTile (id=NotesDetailViewTile) at NotesDetailViewTile.pcf: line 10, column 50
    function visible_55 () : java.lang.Boolean {
      return noteHelper.ViewMoreVisible
    }
    
    property get noteHelper () : gw.api.web.dashboard.ui.note.NoteHelper {
      return getRequireValue("noteHelper", 0) as gw.api.web.dashboard.ui.note.NoteHelper
    }
    
    property set noteHelper ($arg :  gw.api.web.dashboard.ui.note.NoteHelper) {
      setRequireValue("noteHelper", 0, $arg)
    }
    
    
  }
  
  
}