package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/DocumentsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/DocumentsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'visible' attribute on AlertBar (id=DocumentsScreen_DocumentStoreSuspendedWarning) at DocumentsScreen.pcf: line 19, column 69
    function visible_0 () : java.lang.Boolean {
      return docActionsHelper.ShowDocumentStoreSuspendedWarning
    }
    
    // 'visible' attribute on AlertBar (id=DocumentsScreen_IDCSNotEnabledAlertBar) at DocumentsScreen.pcf: line 23, column 60
    function visible_1 () : java.lang.Boolean {
      return not docActionsHelper.ContentSourceEnabled
    }
    
    // 'visible' attribute on AlertBar (id=DocumentsScreen_IDCSDownAlertBar) at DocumentsScreen.pcf: line 27, column 112
    function visible_2 () : java.lang.Boolean {
      return docActionsHelper.ContentSourceEnabled and not docActionsHelper.DocumentContentServerAvailable
    }
    
    // 'visible' attribute on AlertBar (id=DocumentsScreen_IDMSDownAlertBar) at DocumentsScreen.pcf: line 31, column 65
    function visible_3 () : java.lang.Boolean {
      return docActionsHelper.ShowMetadataServerDownWarning
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get docActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("docActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set docActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("docActionsHelper", 0, $arg)
    }
    
    property get viewOnly () : boolean {
      return getRequireValue("viewOnly", 0) as java.lang.Boolean
    }
    
    property set viewOnly ($arg :  boolean) {
      setRequireValue("viewOnly", 0, $arg)
    }
    
    function createCriteria() : DocumentSearchCriteria {
      var criteria = new DocumentSearchCriteria()
      criteria.setFixedContextWith(account)
      criteria.IncludeObsoletes = false
      return criteria
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/DocumentsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends DocumentsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshAsyncContent) at DocumentsScreen.pcf: line 86, column 99
    function action_16 () : void {
      
    }
    
    // 'available' attribute on ToolbarButton (id=PolicyFile_Documents_NewDocumentButton) at DocumentsScreen.pcf: line 67, column 74
    function available_11 () : java.lang.Boolean {
      return docActionsHelper.DocumentContentServerAvailable
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=PolicyFile_Documents_DeleteSelectedDocumentButton) at DocumentsScreen.pcf: line 79, column 88
    function checkedRowAction_13 (element :  entity.Document, CheckedValue :  entity.Document) : void {
      gw.api.web.document.DocumentsHelper.deleteDocument(CheckedValue)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=PolicyFile_Documents_ObsolesceButton) at DocumentsScreen.pcf: line 55, column 27
    function checkedRowAction_6 (element :  entity.Document, CheckedValue :  entity.Document) : void {
       CheckedValue.Obsolete = true
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=PolicyFile_Documents_DeobsolesceButton) at DocumentsScreen.pcf: line 63, column 56
    function checkedRowAction_8 (element :  entity.Document, CheckedValue :  entity.Document) : void {
       CheckedValue.Obsolete = false
    }
    
    // 'def' attribute on PanelRef at DocumentsScreen.pcf: line 45, column 25
    function def_onEnter_17 (def :  pcf.DocumentsLV) : void {
      def.onEnter(documents, searchCriteria, viewOnly)
    }
    
    // 'def' attribute on PanelRef at DocumentsScreen.pcf: line 42, column 55
    function def_onEnter_4 (def :  pcf.DocumentSearchDV) : void {
      def.onEnter(searchCriteria, null)
    }
    
    // 'def' attribute on MenuItemSetRef at DocumentsScreen.pcf: line 69, column 61
    function def_onEnter_9 (def :  pcf.AccountNewDocumentMenuItemSet) : void {
      def.onEnter(account)
    }
    
    // 'def' attribute on MenuItemSetRef at DocumentsScreen.pcf: line 69, column 61
    function def_refreshVariables_10 (def :  pcf.AccountNewDocumentMenuItemSet) : void {
      def.refreshVariables(account)
    }
    
    // 'def' attribute on PanelRef at DocumentsScreen.pcf: line 45, column 25
    function def_refreshVariables_18 (def :  pcf.DocumentsLV) : void {
      def.refreshVariables(documents, searchCriteria, viewOnly)
    }
    
    // 'def' attribute on PanelRef at DocumentsScreen.pcf: line 42, column 55
    function def_refreshVariables_5 (def :  pcf.DocumentSearchDV) : void {
      def.refreshVariables(searchCriteria, null)
    }
    
    // 'searchCriteria' attribute on SearchPanel at DocumentsScreen.pcf: line 40, column 76
    function searchCriteria_20 () : entity.DocumentSearchCriteria {
      return createCriteria()
    }
    
    // 'search' attribute on SearchPanel at DocumentsScreen.pcf: line 40, column 76
    function search_19 () : java.lang.Object {
      return searchCriteria.performSearch() as gw.api.database.IQueryBeanResult<Document>
    }
    
    // 'visible' attribute on ToolbarButton (id=RefreshAsyncContent) at DocumentsScreen.pcf: line 86, column 99
    function visible_15 () : java.lang.Boolean {
      return docActionsHelper.isShowAsynchronousRefreshAction(documents.toTypedArray())
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=PolicyFile_Documents_DeobsolesceButton) at DocumentsScreen.pcf: line 63, column 56
    function visible_7 () : java.lang.Boolean {
      return searchCriteria.IncludeObsoletes
    }
    
    property get documents () : gw.api.database.IQueryBeanResult<Document> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<Document>
    }
    
    property get searchCriteria () : entity.DocumentSearchCriteria {
      return getCriteriaValue(1) as entity.DocumentSearchCriteria
    }
    
    property set searchCriteria ($arg :  entity.DocumentSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}