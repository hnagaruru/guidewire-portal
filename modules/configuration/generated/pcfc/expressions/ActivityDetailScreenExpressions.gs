package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/activity/ActivityDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/activity/ActivityDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_DocumentButton) at ActivityDetailScreen.pcf: line 34, column 107
    function action_10 () : void {
      NewDocumentFromTemplateWorksheet.goInWorkspace( activity, gw.web.activity.ActivityDetailScreenUIHelper.getDocContainer(activity), activity.DocumentTemplate) 
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_ProductizedDocumentButton) at ActivityDetailScreen.pcf: line 39, column 106
    function action_12 () : void {
      gw.document.DocumentsActionsUIHelper.goInNewDocumentFromTemplateWorksheet(activity) 
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_CreateEmail) at ActivityDetailScreen.pcf: line 44, column 77
    function action_14 () : void {
      EmailWorksheet.goInWorkspace( activity, gw.web.activity.ActivityDetailScreenUIHelper.getDocContainer(activity), activity.EmailTemplate)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_ViewNotes) at ActivityDetailScreen.pcf: line 50, column 56
    function action_17 () : void {
      gw.web.activity.ActivityDetailScreenUIHelper.viewActivityNotes(activity, policyPeriod)
    }
    
    // 'action' attribute on PickerToolbarButton (id=NewNoteWorksheet_UseTemplateButton) at ActivityDetailScreen.pcf: line 29, column 64
    function action_6 () : void {
      PickNoteTemplatePopup.push(gw.web.activity.ActivityDetailScreenUIHelper.createSearchCriteria(symbolTable))
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_CreateEmail) at ActivityDetailScreen.pcf: line 44, column 77
    function action_dest_15 () : pcf.api.Destination {
      return pcf.EmailWorksheet.createDestination( activity, gw.web.activity.ActivityDetailScreenUIHelper.getDocContainer(activity), activity.EmailTemplate)
    }
    
    // 'action' attribute on PickerToolbarButton (id=NewNoteWorksheet_UseTemplateButton) at ActivityDetailScreen.pcf: line 29, column 64
    function action_dest_7 () : pcf.api.Destination {
      return pcf.PickNoteTemplatePopup.createDestination(gw.web.activity.ActivityDetailScreenUIHelper.createSearchCriteria(symbolTable))
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.pcf: line 60, column 49
    function def_onEnter_19 (def :  pcf.ActivityDetailDV_approval) : void {
      def.onEnter(activity)
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.pcf: line 60, column 49
    function def_onEnter_21 (def :  pcf.ActivityDetailDV_default) : void {
      def.onEnter(activity)
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.pcf: line 65, column 66
    function def_onEnter_26 (def :  pcf.ActivityDetailNoteDV_UWApproval) : void {
      def.onEnter(activity, note)
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.pcf: line 65, column 66
    function def_onEnter_28 (def :  pcf.ActivityDetailNoteDV_UWRequest) : void {
      def.onEnter(activity, note)
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.pcf: line 65, column 66
    function def_onEnter_30 (def :  pcf.ActivityDetailNoteDV_default) : void {
      def.onEnter(activity, note)
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.pcf: line 60, column 49
    function def_refreshVariables_20 (def :  pcf.ActivityDetailDV_approval) : void {
      def.refreshVariables(activity)
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.pcf: line 60, column 49
    function def_refreshVariables_22 (def :  pcf.ActivityDetailDV_default) : void {
      def.refreshVariables(activity)
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.pcf: line 65, column 66
    function def_refreshVariables_27 (def :  pcf.ActivityDetailNoteDV_UWApproval) : void {
      def.refreshVariables(activity, note)
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.pcf: line 65, column 66
    function def_refreshVariables_29 (def :  pcf.ActivityDetailNoteDV_UWRequest) : void {
      def.refreshVariables(activity, note)
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.pcf: line 65, column 66
    function def_refreshVariables_31 (def :  pcf.ActivityDetailNoteDV_default) : void {
      def.refreshVariables(activity, note)
    }
    
    // 'editable' attribute on PanelColumn at ActivityDetailScreen.pcf: line 57, column 49
    function editable_24 () : java.lang.Boolean {
      return perm.Activity.edit(activity)
    }
    
    // 'initialValue' attribute on Variable at ActivityDetailScreen.pcf: line 19, column 71
    function initialValue_0 () : java.util.Map<java.lang.String, java.lang.Object> {
      return gw.api.util.SymbolTableUtil.populateMapFromBeans(activity)
    }
    
    // 'mode' attribute on ToolbarButtonSetRef at ActivityDetailScreen.pcf: line 23, column 90
    function mode_1 () : java.lang.Object {
      return activity.ActivityPattern.Type
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=NewNoteWorksheet_UseTemplateButton) at ActivityDetailScreen.pcf: line 29, column 64
    function onPick_8 (PickedValue :  NoteTemplateSearchResults) : void {
      note.useTemplate( PickedValue, symbolTable )
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ActivityDetailScreen.pcf: line 23, column 90
    function toolbarButtonSet_onEnter_2 (def :  pcf.ActivityDetailToolbarButtonSet_approval) : void {
      def.onEnter(activity, note, policyPeriod)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ActivityDetailScreen.pcf: line 23, column 90
    function toolbarButtonSet_onEnter_4 (def :  pcf.ActivityDetailToolbarButtonSet_default) : void {
      def.onEnter(activity, note, policyPeriod)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ActivityDetailScreen.pcf: line 23, column 90
    function toolbarButtonSet_refreshVariables_3 (def :  pcf.ActivityDetailToolbarButtonSet_approval) : void {
      def.refreshVariables(activity, note, policyPeriod)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at ActivityDetailScreen.pcf: line 23, column 90
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.ActivityDetailToolbarButtonSet_default) : void {
      def.refreshVariables(activity, note, policyPeriod)
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_ProductizedDocumentButton) at ActivityDetailScreen.pcf: line 39, column 106
    function visible_11 () : java.lang.Boolean {
      return gw.web.activity.ActivityDetailScreenUIHelper.isDocumentButtonVisible(activity, true) 
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_CreateEmail) at ActivityDetailScreen.pcf: line 44, column 77
    function visible_13 () : java.lang.Boolean {
      return activity.EmailTemplate != null and perm.System.sendemail
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_ViewNotes) at ActivityDetailScreen.pcf: line 50, column 56
    function visible_16 () : java.lang.Boolean {
      return activity.canViewNotes(policyPeriod)
    }
    
    // 'visible' attribute on Verbatim at ActivityDetailScreen.pcf: line 54, column 49
    function visible_18 () : java.lang.Boolean {
      return activity.Status == TC_CANCELED
    }
    
    // 'visible' attribute on PanelRef at ActivityDetailScreen.pcf: line 65, column 66
    function visible_25 () : java.lang.Boolean {
      return activity.Status == TC_OPEN and note != null
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailToolbarButtons_DocumentButton) at ActivityDetailScreen.pcf: line 34, column 107
    function visible_9 () : java.lang.Boolean {
      return gw.web.activity.ActivityDetailScreenUIHelper.isDocumentButtonVisible(activity, false) 
    }
    
    property get activity () : Activity {
      return getRequireValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setRequireValue("activity", 0, $arg)
    }
    
    property get note () : Note {
      return getRequireValue("note", 0) as Note
    }
    
    property set note ($arg :  Note) {
      setRequireValue("note", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get symbolTable () : java.util.Map<java.lang.String, java.lang.Object> {
      return getVariableValue("symbolTable", 0) as java.util.Map<java.lang.String, java.lang.Object>
    }
    
    property set symbolTable ($arg :  java.util.Map<java.lang.String, java.lang.Object>) {
      setVariableValue("symbolTable", 0, $arg)
    }
    
    
  }
  
  
}