package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/PickExistingDocumentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PickExistingDocumentPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/document/PickExistingDocumentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at PickExistingDocumentPopup.pcf: line 55, column 40
    function icon_8 () : java.lang.String {
      return document.Icon
    }
    
    // 'pickValue' attribute on RowIterator at PickExistingDocumentPopup.pcf: line 47, column 83
    function pickValue_24 () : Document {
      return document
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PickExistingDocumentPopup.pcf: line 60, column 42
    function valueRoot_10 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at PickExistingDocumentPopup.pcf: line 66, column 53
    function value_12 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at PickExistingDocumentPopup.pcf: line 71, column 59
    function value_15 () : typekey.DocumentStatusType {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at PickExistingDocumentPopup.pcf: line 76, column 44
    function value_18 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at PickExistingDocumentPopup.pcf: line 84, column 50
    function value_21 () : java.util.Date {
      return document.DateModified
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PickExistingDocumentPopup.pcf: line 60, column 42
    function value_9 () : java.lang.String {
      return document.Name
    }
    
    property get document () : entity.Document {
      return getIteratedValue(2) as entity.Document
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/document/PickExistingDocumentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PickExistingDocumentPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (docContainer :  gw.api.domain.document.DocumentContainer) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=PickExistingDocumentPopup_CancelButton) at PickExistingDocumentPopup.pcf: line 23, column 62
    function action_0 () : void {
      CurrentLocation.cancel();
    }
    
    override property get CurrentLocation () : pcf.PickExistingDocumentPopup {
      return super.CurrentLocation as pcf.PickExistingDocumentPopup
    }
    
    property get docContainer () : gw.api.domain.document.DocumentContainer {
      return getVariableValue("docContainer", 0) as gw.api.domain.document.DocumentContainer
    }
    
    property set docContainer ($arg :  gw.api.domain.document.DocumentContainer) {
      setVariableValue("docContainer", 0, $arg)
    }
    
    function createSearchCriteria() : DocumentSearchCriteria {
      var searchCriteria = new DocumentSearchCriteria()
      searchCriteria.setFixedContextWith(docContainer)
      return searchCriteria
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/document/PickExistingDocumentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends PickExistingDocumentPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PickExistingDocumentPopup.pcf: line 34, column 114
    function def_onEnter_1 (def :  pcf.DocumentSearchDV) : void {
      def.onEnter(documentSearchCriteria, docContainer typeis PolicyPeriod ? docContainer : null)
    }
    
    // 'def' attribute on PanelRef at PickExistingDocumentPopup.pcf: line 34, column 114
    function def_refreshVariables_2 (def :  pcf.DocumentSearchDV) : void {
      def.refreshVariables(documentSearchCriteria, docContainer typeis PolicyPeriod ? docContainer : null)
    }
    
    // 'searchCriteria' attribute on SearchPanel at PickExistingDocumentPopup.pcf: line 32, column 78
    function searchCriteria_27 () : entity.DocumentSearchCriteria {
      return createSearchCriteria();
    }
    
    // 'search' attribute on SearchPanel at PickExistingDocumentPopup.pcf: line 32, column 78
    function search_26 () : java.lang.Object {
      return documentSearchCriteria.performSearch() as gw.api.database.IQueryBeanResult<Document>
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at PickExistingDocumentPopup.pcf: line 60, column 42
    function sortValue_3 (document :  entity.Document) : java.lang.Object {
      return document.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at PickExistingDocumentPopup.pcf: line 66, column 53
    function sortValue_4 (document :  entity.Document) : java.lang.Object {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at PickExistingDocumentPopup.pcf: line 71, column 59
    function sortValue_5 (document :  entity.Document) : java.lang.Object {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at PickExistingDocumentPopup.pcf: line 76, column 44
    function sortValue_6 (document :  entity.Document) : java.lang.Object {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at PickExistingDocumentPopup.pcf: line 84, column 50
    function sortValue_7 (document :  entity.Document) : java.lang.Object {
      return document.DateModified
    }
    
    // 'value' attribute on RowIterator at PickExistingDocumentPopup.pcf: line 47, column 83
    function value_25 () : gw.api.database.IQueryBeanResult<entity.Document> {
      return documentList
    }
    
    property get documentList () : gw.api.database.IQueryBeanResult<Document> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<Document>
    }
    
    property get documentSearchCriteria () : entity.DocumentSearchCriteria {
      return getCriteriaValue(1) as entity.DocumentSearchCriteria
    }
    
    property set documentSearchCriteria ($arg :  entity.DocumentSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}