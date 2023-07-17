package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/DocumentDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentDetailsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/document/DocumentDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentDetailsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (document :  Document) : int {
      return 0
    }
    
    static function __constructorIndex (document :  Document, viewOnly :  boolean) : int {
      return 1
    }
    
    // 'action' attribute on Link (id=UploadLink) at DocumentDetailsPopup.pcf: line 78, column 157
    function action_13 () : void {
      UploadDocumentContentPopup.push(document)
    }
    
    // 'action' attribute on Link (id=DownloadLink) at DocumentDetailsPopup.pcf: line 69, column 159
    function action_9 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=UploadLink) at DocumentDetailsPopup.pcf: line 78, column 157
    function action_dest_14 () : pcf.api.Destination {
      return pcf.UploadDocumentContentPopup.createDestination(document)
    }
    
    // 'afterCommit' attribute on Popup (id=DocumentDetailsPopup) at DocumentDetailsPopup.pcf: line 9, column 67
    function afterCommit_20 (TopLocation :  pcf.api.Location) : void {
      DocumentDetailsPopup.push(document, editMetadata)
    }
    
    // 'available' attribute on Link (id=UploadLink) at DocumentDetailsPopup.pcf: line 78, column 157
    function available_11 () : java.lang.Boolean {
      return documentsActionsHelper.isDocumentContentActionsAvailableInDocumentProperties(CurrentLocation.InEditMode, document)
    }
    
    // 'available' attribute on Link (id=DownloadLink) at DocumentDetailsPopup.pcf: line 69, column 159
    function available_7 () : java.lang.Boolean {
      return documentsActionsHelper.isDocumentContentActionsAvailableInDocumentProperties(CurrentLocation.InEditMode, document) and document.DocumentMimeTypeAllowed
    }
    
    // 'canEdit' attribute on Popup (id=DocumentDetailsPopup) at DocumentDetailsPopup.pcf: line 9, column 67
    function canEdit_21 () : java.lang.Boolean {
      return perm.Document.edit(document)
    }
    
    // 'def' attribute on PanelRef at DocumentDetailsPopup.pcf: line 85, column 31
    function def_onEnter_15 (def :  pcf.DocumentMetadataEditDV_default) : void {
      def.onEnter(documentDetailsApplicationHelper, false)
    }
    
    // 'def' attribute on PanelRef at DocumentDetailsPopup.pcf: line 85, column 31
    function def_onEnter_17 (def :  pcf.DocumentMetadataEditDV_email_sent) : void {
      def.onEnter(documentDetailsApplicationHelper, false)
    }
    
    // 'def' attribute on PanelRef at DocumentDetailsPopup.pcf: line 85, column 31
    function def_refreshVariables_16 (def :  pcf.DocumentMetadataEditDV_default) : void {
      def.refreshVariables(documentDetailsApplicationHelper, false)
    }
    
    // 'def' attribute on PanelRef at DocumentDetailsPopup.pcf: line 85, column 31
    function def_refreshVariables_18 (def :  pcf.DocumentMetadataEditDV_email_sent) : void {
      def.refreshVariables(documentDetailsApplicationHelper, false)
    }
    
    // 'initialValue' attribute on Variable at DocumentDetailsPopup.pcf: line 24, column 138
    function initialValue_0 () : gw.api.domain.linkedobject.LinkedObjectContainer[] {
      return gw.api.domain.linkedobject.LinkedObjectUtils.generateLevels(document.Account, document.Policy, document.Job, null)
    }
    
    // 'initialValue' attribute on Variable at DocumentDetailsPopup.pcf: line 28, column 122
    function initialValue_1 () : boolean {
      return document.Job == null or !(document.Job typeis Submission) or (document.Job as Submission).FullMode
    }
    
    // 'initialValue' attribute on Variable at DocumentDetailsPopup.pcf: line 33, column 59
    function initialValue_2 () : gw.document.DocumentDetailsApplicationHelper {
      return new gw.api.web.document.DocumentMetadataPCHelper(new Document[] {document}, levels, levelsVisible)         as gw.document.DocumentDetailsApplicationHelper
    }
    
    // EditButtons at DocumentDetailsPopup.pcf: line 54, column 109
    function label_6 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'mode' attribute on PanelRef at DocumentDetailsPopup.pcf: line 85, column 31
    function mode_19 () : java.lang.Object {
      return document.Type
    }
    
    // 'tooltip' attribute on Link (id=DownloadLink) at DocumentDetailsPopup.pcf: line 69, column 159
    function tooltip_10 () : java.lang.String {
      return document.DocumentMimeTypeAllowed ? DisplayKey.get('Web.Policy.Documents.Document.ViewAndEdit.Download.Tooltip') : DisplayKey.get('Web.DocumentsLV.Button.DownloadNotAllowed.Tooltip')
    }
    
    // 'visible' attribute on Link (id=UploadLink) at DocumentDetailsPopup.pcf: line 78, column 157
    function visible_12 () : java.lang.Boolean {
      return editMetadata and documentsActionsHelper.isUploadDocumentContentVisibleInDocumentProperties(CurrentLocation.InEditMode, document)
    }
    
    // 'visible' attribute on AlertBar (id=DocumentStoreDestinationDisabledWarning) at DocumentDetailsPopup.pcf: line 46, column 112
    function visible_3 () : java.lang.Boolean {
      return documentsActionsHelper.ShowDocumentStoreSuspendedWarning and document.PendingDocUID != null
    }
    
    // 'visible' attribute on AlertBar (id=ContentlessNoActionsText) at DocumentDetailsPopup.pcf: line 50, column 34
    function visible_4 () : java.lang.Boolean {
      return !document.DMS
    }
    
    // 'editVisible' attribute on EditButtons at DocumentDetailsPopup.pcf: line 54, column 109
    function visible_5 () : java.lang.Boolean {
      return editMetadata and perm.Document.edit(document) and document.PendingDocUID == null
    }
    
    // 'visible' attribute on Link (id=DownloadLink) at DocumentDetailsPopup.pcf: line 69, column 159
    function visible_8 () : java.lang.Boolean {
      return editMetadata and documentsActionsHelper.isDownloadDocumentContentVisibleInDocumentProperties(CurrentLocation.InEditMode, document)
    }
    
    override property get CurrentLocation () : pcf.DocumentDetailsPopup {
      return super.CurrentLocation as pcf.DocumentDetailsPopup
    }
    
    property get document () : entity.Document {
      return getVariableValue("document", 0) as entity.Document
    }
    
    property set document ($arg :  entity.Document) {
      setVariableValue("document", 0, $arg)
    }
    
    property get documentDetailsApplicationHelper () : gw.document.DocumentDetailsApplicationHelper {
      return getVariableValue("documentDetailsApplicationHelper", 0) as gw.document.DocumentDetailsApplicationHelper
    }
    
    property set documentDetailsApplicationHelper ($arg :  gw.document.DocumentDetailsApplicationHelper) {
      setVariableValue("documentDetailsApplicationHelper", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get editMetadata () : boolean {
      return getVariableValue("editMetadata", 0) as java.lang.Boolean
    }
    
    property set editMetadata ($arg :  boolean) {
      setVariableValue("editMetadata", 0, $arg)
    }
    
    property get levels () : gw.api.domain.linkedobject.LinkedObjectContainer[] {
      return getVariableValue("levels", 0) as gw.api.domain.linkedobject.LinkedObjectContainer[]
    }
    
    property set levels ($arg :  gw.api.domain.linkedobject.LinkedObjectContainer[]) {
      setVariableValue("levels", 0, $arg)
    }
    
    property get levelsVisible () : boolean {
      return getVariableValue("levelsVisible", 0) as java.lang.Boolean
    }
    
    property set levelsVisible ($arg :  boolean) {
      setVariableValue("levelsVisible", 0, $arg)
    }
    
    property get viewOnly () : boolean {
      return getVariableValue("viewOnly", 0) as java.lang.Boolean
    }
    
    property set viewOnly ($arg :  boolean) {
      setVariableValue("viewOnly", 0, $arg)
    }
    
    
  }
  
  
}