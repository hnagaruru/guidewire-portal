package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/DocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/document/DocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at DocumentsLV.pcf: line 27, column 23
    function initialValue_0 () : boolean {
      return documentsActionsHelper.DocumentContentActionsAvailable
    }
    
    // 'initialValue' attribute on Variable at DocumentsLV.pcf: line 31, column 23
    function initialValue_1 () : boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable
    }
    
    // 'sortBy' attribute on LinkCell (id=Name) at DocumentsLV.pcf: line 65, column 25
    function sortValue_2 (Document :  entity.Document) : java.lang.Object {
      return Document.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentsLV.pcf: line 122, column 25
    function sortValue_3 (Document :  entity.Document) : java.lang.Object {
      return Document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentsLV.pcf: line 128, column 25
    function sortValue_4 (Document :  entity.Document) : java.lang.Object {
      return Document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentsLV.pcf: line 133, column 36
    function sortValue_5 (Document :  entity.Document) : java.lang.Object {
      return Document.Author
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at DocumentsLV.pcf: line 140, column 25
    function sortValue_6 (Document :  entity.Document) : java.lang.Object {
      return Document.DateModified
    }
    
    // 'sortBy' attribute on LinkCell (id=HiddenDocument) at DocumentsLV.pcf: line 147, column 53
    function sortValue_7 (Document :  entity.Document) : java.lang.Object {
      return Document.Obsolete
    }
    
    // 'value' attribute on RowIterator at DocumentsLV.pcf: line 39, column 75
    function value_48 () : gw.api.database.IQueryBeanResult<entity.Document> {
      return docQuery
    }
    
    // 'visible' attribute on LinkCell (id=HiddenDocument) at DocumentsLV.pcf: line 147, column 53
    function visible_8 () : java.lang.Boolean {
      return searchCriteria.IncludeObsoletes
    }
    
    property get contentActionsEnabled () : boolean {
      return getVariableValue("contentActionsEnabled", 0) as java.lang.Boolean
    }
    
    property set contentActionsEnabled ($arg :  boolean) {
      setVariableValue("contentActionsEnabled", 0, $arg)
    }
    
    property get docQuery () : gw.api.database.IQueryBeanResult<Document> {
      return getRequireValue("docQuery", 0) as gw.api.database.IQueryBeanResult<Document>
    }
    
    property set docQuery ($arg :  gw.api.database.IQueryBeanResult<Document>) {
      setRequireValue("docQuery", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get metadataActionsEnabled () : boolean {
      return getVariableValue("metadataActionsEnabled", 0) as java.lang.Boolean
    }
    
    property set metadataActionsEnabled ($arg :  boolean) {
      setVariableValue("metadataActionsEnabled", 0, $arg)
    }
    
    property get searchCriteria () : DocumentSearchCriteria {
      return getRequireValue("searchCriteria", 0) as DocumentSearchCriteria
    }
    
    property set searchCriteria ($arg :  DocumentSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    property get viewOnly () : boolean {
      return getRequireValue("viewOnly", 0) as java.lang.Boolean
    }
    
    property set viewOnly ($arg :  boolean) {
      setRequireValue("viewOnly", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/document/DocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DocumentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NameLink) at DocumentsLV.pcf: line 73, column 87
    function action_14 () : void {
      Document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at DocumentsLV.pcf: line 84, column 107
    function action_18 () : void {
      DocumentDetailsPopup.push(Document)
    }
    
    // 'action' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 93, column 90
    function action_22 () : void {
      Document.downloadContent()
    }
    
    // 'action' attribute on Link (id=UploadLink) at DocumentsLV.pcf: line 101, column 88
    function action_26 () : void {
      UploadDocumentContentPopup.push(Document)
    }
    
    // 'action' attribute on Link (id=DocumentsLV_DeleteLink) at DocumentsLV.pcf: line 110, column 85
    function action_31 () : void {
      gw.api.web.document.DocumentsHelper.deleteDocument(Document); gw.api.web.document.DocumentsHelper.evictDeletedDocument(Document)
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at DocumentsLV.pcf: line 84, column 107
    function action_dest_19 () : pcf.api.Destination {
      return pcf.DocumentDetailsPopup.createDestination(Document)
    }
    
    // 'action' attribute on Link (id=UploadLink) at DocumentsLV.pcf: line 101, column 88
    function action_dest_27 () : pcf.api.Destination {
      return pcf.UploadDocumentContentPopup.createDestination(Document)
    }
    
    // 'available' attribute on Link (id=NameLink) at DocumentsLV.pcf: line 73, column 87
    function available_13 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(Document, contentActionsEnabled)
    }
    
    // 'available' attribute on Link (id=ViewPropertiesLink) at DocumentsLV.pcf: line 84, column 107
    function available_17 () : java.lang.Boolean {
      return metadataActionsEnabled
    }
    
    // 'available' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 93, column 90
    function available_20 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentAvailable(Document) and Document.DocumentMimeTypeAllowed
    }
    
    // 'available' attribute on Link (id=UploadLink) at DocumentsLV.pcf: line 101, column 88
    function available_24 () : java.lang.Boolean {
      return documentsActionsHelper.isUploadDocumentContentAvailable(Document)
    }
    
    // 'condition' attribute on ToolbarFlag at DocumentsLV.pcf: line 47, column 34
    function condition_10 () : java.lang.Boolean {
      return perm.Document.edit(Document)
    }
    
    // 'condition' attribute on ToolbarFlag at DocumentsLV.pcf: line 50, column 24
    function condition_11 () : java.lang.Boolean {
      return Document.Obsolete
    }
    
    // 'condition' attribute on ToolbarFlag at DocumentsLV.pcf: line 42, column 35
    function condition_9 () : java.lang.Boolean {
      return documentsActionsHelper.isDeleteDocumentLinkVisible(Document) and documentsActionsHelper.isDeleteDocumentLinkAvailable(Document)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at DocumentsLV.pcf: line 58, column 32
    function icon_12 () : java.lang.String {
      return Document.Icon
    }
    
    // 'label' attribute on Link (id=NameLink) at DocumentsLV.pcf: line 73, column 87
    function label_15 () : java.lang.Object {
      return Document.Name
    }
    
    // 'label' attribute on Link (id=DocumentsLV_ActionsDisabled) at DocumentsLV.pcf: line 115, column 75
    function label_33 () : java.lang.Object {
      return documentsActionsHelper.AsynchronousActionsMessage
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at DocumentsLV.pcf: line 73, column 87
    function tooltip_16 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(Document)
    }
    
    // 'tooltip' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 93, column 90
    function tooltip_23 () : java.lang.String {
      return Document.DocumentMimeTypeAllowed ? DisplayKey.get('Web.Policy.Documents.Document.ViewAndEdit.Download.Tooltip') : DisplayKey.get('Web.DocumentsLV.Button.DownloadNotAllowed.Tooltip')
    }
    
    // 'tooltip' attribute on Link (id=UploadLink) at DocumentsLV.pcf: line 101, column 88
    function tooltip_28 () : java.lang.String {
      return documentsActionsHelper.UploadDocumentContentTooltip
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentsLV.pcf: line 122, column 25
    function valueRoot_35 () : java.lang.Object {
      return Document
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentsLV.pcf: line 122, column 25
    function value_34 () : typekey.DocumentType {
      return Document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentsLV.pcf: line 128, column 25
    function value_37 () : typekey.DocumentStatusType {
      return Document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentsLV.pcf: line 133, column 36
    function value_40 () : java.lang.String {
      return Document.Author
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at DocumentsLV.pcf: line 140, column 25
    function value_43 () : java.util.Date {
      return Document.DateModified
    }
    
    // 'visible' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 93, column 90
    function visible_21 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentVisible(Document)
    }
    
    // 'visible' attribute on Link (id=UploadLink) at DocumentsLV.pcf: line 101, column 88
    function visible_25 () : java.lang.Boolean {
      return documentsActionsHelper.isUploadDocumentContentVisible(Document)
    }
    
    // 'visible' attribute on Link (id=DocumentsLV_DeleteLink) at DocumentsLV.pcf: line 110, column 85
    function visible_30 () : java.lang.Boolean {
      return documentsActionsHelper.isDeleteDocumentLinkVisible(Document)
    }
    
    // 'visible' attribute on Link (id=DocumentsLV_ActionsDisabled) at DocumentsLV.pcf: line 115, column 75
    function visible_32 () : java.lang.Boolean {
      return documentsActionsHelper.isDocumentPending(Document)
    }
    
    // 'visible' attribute on LinkCell (id=HiddenDocument) at DocumentsLV.pcf: line 147, column 53
    function visible_47 () : java.lang.Boolean {
      return searchCriteria.IncludeObsoletes
    }
    
    property get Document () : entity.Document {
      return getIteratedValue(1) as entity.Document
    }
    
    
  }
  
  
}