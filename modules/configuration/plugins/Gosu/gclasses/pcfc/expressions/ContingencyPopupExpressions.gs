package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/ContingencyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContingencyPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/ContingencyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContingencyNotesLVExpressionsImpl extends ContingencyPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ContingencyPopup.pcf: line 111, column 34
    function initialValue_25 () : Note[] {
      return contingency.queryNotes().toTypedArray()
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ContingencyPopup.pcf: line 123, column 45
    function sortValue_26 (note :  Note) : java.lang.Object {
      return note.Subject
    }
    
    // 'value' attribute on DateCell (id=DateAdded_Cell) at ContingencyPopup.pcf: line 127, column 51
    function sortValue_27 (note :  Note) : java.lang.Object {
      return note.AuthoringDate
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at ContingencyPopup.pcf: line 131, column 56
    function sortValue_28 (note :  Note) : java.lang.Object {
      return note.Author.DisplayName
    }
    
    // 'value' attribute on RowIterator at ContingencyPopup.pcf: line 116, column 38
    function value_41 () : Note[] {
      return Notes
    }
    
    property get Notes () : Note[] {
      return getVariableValue("Notes", 1) as Note[]
    }
    
    property set Notes ($arg :  Note[]) {
      setVariableValue("Notes", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/ContingencyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContingencyPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contingency :  Contingency) : int {
      return 0
    }
    
    // 'action' attribute on MenuItem (id=ContingencyNewDocumentMenuItemSet_Template) at ContingencyPopup.pcf: line 66, column 85
    function action_10 () : void {
      docActionsHelper.goInNewDocumentFromTemplateWorksheet(contingency)
    }
    
    // 'action' attribute on ToolbarButton (id=ContigencyPopup_RefreshAsyncContent) at ContingencyPopup.pcf: line 83, column 122
    function action_16 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=ContigencyPopup_ShowHidden) at ContingencyPopup.pcf: line 88, column 48
    function action_18 () : void {
      includeHidden = true
    }
    
    // 'action' attribute on ToolbarButton (id=ContigencyPopup_HideHidden) at ContingencyPopup.pcf: line 93, column 44
    function action_20 () : void {
      includeHidden = false
    }
    
    // 'action' attribute on ToolbarButton (id=AddNoteButton) at ContingencyPopup.pcf: line 103, column 70
    function action_23 () : void {
      NewNoteWorksheet.goInWorkspace(null, contingency.CreateTime, contingency)
    }
    
    // 'action' attribute on ToolbarButton (id=AddActivityButton) at ContingencyPopup.pcf: line 148, column 74
    function action_42 () : void {
      NewActivityWorksheet.goInWorkspace(contingency)
    }
    
    // 'action' attribute on MenuItem (id=ContingencyNewDocumentMenuItemSet_Linked) at ContingencyPopup.pcf: line 61, column 84
    function action_7 () : void {
      NewDocumentsLinkedWorksheet.goInWorkspace(contingency.PolicyPeriod, contingency)
    }
    
    // 'action' attribute on ToolbarButton (id=AddNoteButton) at ContingencyPopup.pcf: line 103, column 70
    function action_dest_24 () : pcf.api.Destination {
      return pcf.NewNoteWorksheet.createDestination(null, contingency.CreateTime, contingency)
    }
    
    // 'action' attribute on ToolbarButton (id=AddActivityButton) at ContingencyPopup.pcf: line 148, column 74
    function action_dest_43 () : pcf.api.Destination {
      return pcf.NewActivityWorksheet.createDestination(contingency)
    }
    
    // 'action' attribute on MenuItem (id=ContingencyNewDocumentMenuItemSet_Linked) at ContingencyPopup.pcf: line 61, column 84
    function action_dest_8 () : pcf.api.Destination {
      return pcf.NewDocumentsLinkedWorksheet.createDestination(contingency.PolicyPeriod, contingency)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ContigencyPopup_DeleteSelectedDocumentButton) at ContingencyPopup.pcf: line 76, column 94
    function allCheckedRowsAction_13 (CheckedValues :  entity.Document[], CheckedValuesErrors :  java.util.Map) : void {
      CheckedValues.each(\doc -> { gw.api.web.document.DocumentsHelper.deleteDocument(doc); gw.api.web.document.DocumentsHelper.evictDeletedDocument(doc)})
    }
    
    // 'available' attribute on ToolbarButton (id=ContigencyPopup_NewDocumentButton) at ContingencyPopup.pcf: line 57, column 80
    function available_11 () : java.lang.Boolean {
      return docActionsHelper.DocumentContentServerAvailable
    }
    
    // 'available' attribute on ToolbarButton (id=ContigencyPopup_RefreshAsyncContent) at ContingencyPopup.pcf: line 83, column 122
    function available_14 () : java.lang.Boolean {
      return gw.document.DocumentsActionsUIHelper.DocumentContentServerAvailable
    }
    
    // 'available' attribute on MenuItem (id=ContingencyNewDocumentMenuItemSet_Template) at ContingencyPopup.pcf: line 66, column 85
    function available_9 () : java.lang.Boolean {
      return docActionsHelper.DocumentTemplateActionsAvailable
    }
    
    // 'def' attribute on PanelRef at ContingencyPopup.pcf: line 50, column 89
    function def_onEnter_21 (def :  pcf.DocumentsLV) : void {
      def.onEnter(contingency.queryDocuments(includeHidden), null, false)
    }
    
    // 'def' attribute on PanelRef (id=OpenActivityRef) at ContingencyPopup.pcf: line 140, column 36
    function def_onEnter_44 (def :  pcf.ContingencyActivitiesLV) : void {
      def.onEnter(RefreshedActivities.where(\elt -> elt.Status != TC_COMPLETE), false)
    }
    
    // 'def' attribute on PanelRef (id=ClosedActivityRef) at ContingencyPopup.pcf: line 153, column 38
    function def_onEnter_46 (def :  pcf.ContingencyActivitiesLV) : void {
      def.onEnter(RefreshedActivities.where(\elt -> elt.Status == TC_COMPLETE), true)
    }
    
    // 'def' attribute on PanelRef at ContingencyPopup.pcf: line 45, column 51
    function def_onEnter_5 (def :  pcf.BaseContingencyInfoDV) : void {
      def.onEnter(contingency)
    }
    
    // 'def' attribute on PanelRef at ContingencyPopup.pcf: line 50, column 89
    function def_refreshVariables_22 (def :  pcf.DocumentsLV) : void {
      def.refreshVariables(contingency.queryDocuments(includeHidden), null, false)
    }
    
    // 'def' attribute on PanelRef (id=OpenActivityRef) at ContingencyPopup.pcf: line 140, column 36
    function def_refreshVariables_45 (def :  pcf.ContingencyActivitiesLV) : void {
      def.refreshVariables(RefreshedActivities.where(\elt -> elt.Status != TC_COMPLETE), false)
    }
    
    // 'def' attribute on PanelRef (id=ClosedActivityRef) at ContingencyPopup.pcf: line 153, column 38
    function def_refreshVariables_47 (def :  pcf.ContingencyActivitiesLV) : void {
      def.refreshVariables(RefreshedActivities.where(\elt -> elt.Status == TC_COMPLETE), true)
    }
    
    // 'def' attribute on PanelRef at ContingencyPopup.pcf: line 45, column 51
    function def_refreshVariables_6 (def :  pcf.BaseContingencyInfoDV) : void {
      def.refreshVariables(contingency)
    }
    
    // 'initialValue' attribute on Variable at ContingencyPopup.pcf: line 19, column 26
    function initialValue_0 () : Activity[] {
      return contingency.QueryForActivities
    }
    
    // 'visible' attribute on AlertBar (id=ContingencyPopup_DocumentStoreSuspendedWarning) at ContingencyPopup.pcf: line 31, column 71
    function visible_1 () : java.lang.Boolean {
      return docActionsHelper.ShowDocumentStoreSuspendedWarning
    }
    
    // 'visible' attribute on ToolbarButton (id=ContigencyPopup_RefreshAsyncContent) at ContingencyPopup.pcf: line 83, column 122
    function visible_15 () : java.lang.Boolean {
      return gw.document.DocumentsActionsUIHelper.isShowAsynchronousRefreshAction(contingency.Documents)
    }
    
    // 'visible' attribute on ToolbarButton (id=ContigencyPopup_ShowHidden) at ContingencyPopup.pcf: line 88, column 48
    function visible_17 () : java.lang.Boolean {
      return not includeHidden
    }
    
    // 'visible' attribute on ToolbarButton (id=ContigencyPopup_HideHidden) at ContingencyPopup.pcf: line 93, column 44
    function visible_19 () : java.lang.Boolean {
      return includeHidden
    }
    
    // 'visible' attribute on AlertBar (id=ContingencyPopup_IDCSNotEnabledAlertBar) at ContingencyPopup.pcf: line 35, column 62
    function visible_2 () : java.lang.Boolean {
      return not docActionsHelper.ContentSourceEnabled
    }
    
    // 'visible' attribute on AlertBar (id=ContingencyPopup_IDCSDownAlertBar) at ContingencyPopup.pcf: line 39, column 114
    function visible_3 () : java.lang.Boolean {
      return docActionsHelper.ContentSourceEnabled and not docActionsHelper.DocumentContentServerAvailable
    }
    
    // 'visible' attribute on AlertBar (id=ContingencyPopup_IDMSDownAlertBar) at ContingencyPopup.pcf: line 43, column 67
    function visible_4 () : java.lang.Boolean {
      return docActionsHelper.ShowMetadataServerDownWarning
    }
    
    override property get CurrentLocation () : pcf.ContingencyPopup {
      return super.CurrentLocation as pcf.ContingencyPopup
    }
    
    property get RefreshedActivities () : Activity[] {
      return getVariableValue("RefreshedActivities", 0) as Activity[]
    }
    
    property set RefreshedActivities ($arg :  Activity[]) {
      setVariableValue("RefreshedActivities", 0, $arg)
    }
    
    property get contingency () : Contingency {
      return getVariableValue("contingency", 0) as Contingency
    }
    
    property set contingency ($arg :  Contingency) {
      setVariableValue("contingency", 0, $arg)
    }
    
    property get docActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("docActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set docActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("docActionsHelper", 0, $arg)
    }
    
    property get includeHidden () : boolean {
      return getVariableValue("includeHidden", 0) as java.lang.Boolean
    }
    
    property set includeHidden ($arg :  boolean) {
      setVariableValue("includeHidden", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/ContingencyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContingencyNotesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at ContingencyPopup.pcf: line 123, column 45
    function action_29 () : void {
      EditNotePopup.push(note, false)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at ContingencyPopup.pcf: line 123, column 45
    function action_dest_30 () : pcf.api.Destination {
      return pcf.EditNotePopup.createDestination(note, false)
    }
    
    // 'outputConversion' attribute on TextCell (id=Subject_Cell) at ContingencyPopup.pcf: line 123, column 45
    function outputConversion_31 (VALUE :  java.lang.String) : java.lang.String {
      return (VALUE != null) ? VALUE : DisplayKey.get('Web.Contingency.Note.NoSubject')
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ContingencyPopup.pcf: line 123, column 45
    function valueRoot_33 () : java.lang.Object {
      return note
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at ContingencyPopup.pcf: line 131, column 56
    function valueRoot_39 () : java.lang.Object {
      return note.Author
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ContingencyPopup.pcf: line 123, column 45
    function value_32 () : java.lang.String {
      return note.Subject
    }
    
    // 'value' attribute on DateCell (id=DateAdded_Cell) at ContingencyPopup.pcf: line 127, column 51
    function value_35 () : java.util.Date {
      return note.AuthoringDate
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at ContingencyPopup.pcf: line 131, column 56
    function value_38 () : java.lang.String {
      return note.Author.DisplayName
    }
    
    property get note () : Note {
      return getIteratedValue(2) as Note
    }
    
    
  }
  
  
}