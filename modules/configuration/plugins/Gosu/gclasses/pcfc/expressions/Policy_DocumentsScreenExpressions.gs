package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policy/Policy_DocumentsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Policy_DocumentsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/policy/Policy_DocumentsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy_DocumentsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at Policy_DocumentsScreen.pcf: line 13, column 30
    function initialValue_0 () : pcf.api.Wizard {
      return CurrentLocation typeis pcf.api.Wizard ? CurrentLocation : null
    }
    
    // 'visible' attribute on AlertBar (id=Policy_DocumentsScreen_DocumentStoreSuspendedWarning) at Policy_DocumentsScreen.pcf: line 20, column 69
    function visible_1 () : java.lang.Boolean {
      return docActionsHelper.ShowDocumentStoreSuspendedWarning
    }
    
    // 'visible' attribute on AlertBar (id=Policy_DocumentsScreen_IDCSNotEnabledAlertBar) at Policy_DocumentsScreen.pcf: line 24, column 60
    function visible_2 () : java.lang.Boolean {
      return not docActionsHelper.ContentSourceEnabled
    }
    
    // 'visible' attribute on AlertBar (id=Policy_DocumentsScreen_IDCSDownAlertBar) at Policy_DocumentsScreen.pcf: line 28, column 112
    function visible_3 () : java.lang.Boolean {
      return docActionsHelper.ContentSourceEnabled and not docActionsHelper.DocumentContentServerAvailable
    }
    
    // 'visible' attribute on AlertBar (id=Policy_DocumentsScreen_IDMSDownAlertBar) at Policy_DocumentsScreen.pcf: line 32, column 65
    function visible_4 () : java.lang.Boolean {
      return docActionsHelper.ShowMetadataServerDownWarning
    }
    
    property get docActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("docActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set docActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("docActionsHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    property get wizard () : pcf.api.Wizard {
      return getVariableValue("wizard", 0) as pcf.api.Wizard
    }
    
    property set wizard ($arg :  pcf.api.Wizard) {
      setVariableValue("wizard", 0, $arg)
    }
    
    function createCriteria() : DocumentSearchCriteria {
          var criteria = new DocumentSearchCriteria()
          criteria.IncludeObsoletes = false
          criteria.setFixedContextWith(policyPeriod.Policy)
          criteria.setFixedContextWith(policyPeriod.Policy.Account)
          return criteria
        }
    
        function saveChanges() {
          if (wizard != null and wizard.InEditMode) {
            wizard.saveDraft()
          }
        }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policy/Policy_DocumentsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends Policy_DocumentsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshAsyncContent) at Policy_DocumentsScreen.pcf: line 87, column 99
    function action_17 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=Save) at Policy_DocumentsScreen.pcf: line 94, column 61
    function action_19 () : void {
      saveChanges()
    }
    
    // 'available' attribute on ToolbarButton (id=PolicyFile_Documents_NewDocumentButton) at Policy_DocumentsScreen.pcf: line 68, column 74
    function available_12 () : java.lang.Boolean {
      return docActionsHelper.DocumentContentServerAvailable
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=PolicyFile_Documents_DeleteSelectedDocumentButton) at Policy_DocumentsScreen.pcf: line 80, column 88
    function checkedRowAction_14 (element :  entity.Document, CheckedValue :  entity.Document) : void {
      gw.api.web.document.DocumentsHelper.deleteDocument(CheckedValue)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=PolicyFile_Documents_ObsolesceButton) at Policy_DocumentsScreen.pcf: line 56, column 27
    function checkedRowAction_7 (element :  entity.Document, CheckedValue :  entity.Document) : void {
      CheckedValue.Obsolete = true; saveChanges()
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=PolicyFile_Documents_DeobsolesceButton) at Policy_DocumentsScreen.pcf: line 64, column 56
    function checkedRowAction_9 (element :  entity.Document, CheckedValue :  entity.Document) : void {
      CheckedValue.Obsolete = false; saveChanges()
    }
    
    // 'def' attribute on MenuItemSetRef at Policy_DocumentsScreen.pcf: line 70, column 62
    function def_onEnter_10 (def :  pcf.NewJobDocumentMenuItemSet) : void {
      def.onEnter(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Policy_DocumentsScreen.pcf: line 46, column 25
    function def_onEnter_20 (def :  pcf.DocumentsLV) : void {
      def.onEnter(documents, searchCriteria, false)
    }
    
    // 'def' attribute on PanelRef at Policy_DocumentsScreen.pcf: line 43, column 70
    function def_onEnter_5 (def :  pcf.Policy_DocumentSearchDV) : void {
      def.onEnter(searchCriteria, policyPeriod)
    }
    
    // 'def' attribute on MenuItemSetRef at Policy_DocumentsScreen.pcf: line 70, column 62
    function def_refreshVariables_11 (def :  pcf.NewJobDocumentMenuItemSet) : void {
      def.refreshVariables(policyPeriod)
    }
    
    // 'def' attribute on PanelRef at Policy_DocumentsScreen.pcf: line 46, column 25
    function def_refreshVariables_21 (def :  pcf.DocumentsLV) : void {
      def.refreshVariables(documents, searchCriteria, false)
    }
    
    // 'def' attribute on PanelRef at Policy_DocumentsScreen.pcf: line 43, column 70
    function def_refreshVariables_6 (def :  pcf.Policy_DocumentSearchDV) : void {
      def.refreshVariables(searchCriteria, policyPeriod)
    }
    
    // 'searchCriteria' attribute on SearchPanel at Policy_DocumentsScreen.pcf: line 41, column 76
    function searchCriteria_23 () : entity.DocumentSearchCriteria {
      return createCriteria()
    }
    
    // 'search' attribute on SearchPanel at Policy_DocumentsScreen.pcf: line 41, column 76
    function search_22 () : java.lang.Object {
      return searchCriteria.performSearch() as gw.api.database.IQueryBeanResult<Document>
    }
    
    // 'visible' attribute on ToolbarButton (id=RefreshAsyncContent) at Policy_DocumentsScreen.pcf: line 87, column 99
    function visible_16 () : java.lang.Boolean {
      return docActionsHelper.isShowAsynchronousRefreshAction(documents.toTypedArray())
    }
    
    // 'visible' attribute on ToolbarButton (id=Save) at Policy_DocumentsScreen.pcf: line 94, column 61
    function visible_18 () : java.lang.Boolean {
      return wizard != null and wizard.InEditMode
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=PolicyFile_Documents_DeobsolesceButton) at Policy_DocumentsScreen.pcf: line 64, column 56
    function visible_8 () : java.lang.Boolean {
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