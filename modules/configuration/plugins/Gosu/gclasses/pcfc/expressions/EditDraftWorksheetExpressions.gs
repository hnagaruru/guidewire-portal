package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/integration/EditDraftWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditDraftWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/document/integration/EditDraftWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditDraftWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (info :  gw.integration.document.production.web.DocumentProductionInfo) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=CancelDocumentButton) at EditDraftWorksheet.pcf: line 37, column 92
    function action_2 () : void {
      CurrentLocation.cancel()
    }
    
    // 'canVisit' attribute on Worksheet (id=EditDraftWorksheet) at EditDraftWorksheet.pcf: line 11, column 120
    static function canVisit_12 (info :  gw.integration.document.production.web.DocumentProductionInfo) : java.lang.Boolean {
      return perm.Document.create
    }
    
    // 'value' attribute on HiddenInput (id=finalizeAction_Input) at EditDraftWorksheet.pcf: line 65, column 32
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      finalizeTrigger = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on HiddenInput (id=DraftDocumentStorage_Input) at EditDraftWorksheet.pcf: line 56, column 32
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      document.DraftDocument.Content = (__VALUE_TO_SET as String)
    }
    
    // 'initialValue' attribute on Variable at EditDraftWorksheet.pcf: line 25, column 24
    function initialValue_0 () : Document {
      return info.createDocument()
    }
    
    // 'initialValue' attribute on Variable at EditDraftWorksheet.pcf: line 26, column 71
    function initialValue_1 () : String {
      return ''
    }
    
    // 'onChange' attribute on PostOnChange at EditDraftWorksheet.pcf: line 68, column 84
    function onChange_8 () : void {
      helper.finalizeDocument(CurrentLocation, info, document)
    }
    
    // 'renderCall' attribute on TemplatePanel at EditDraftWorksheet.pcf: line 44, column 176
    function renderCall_3 (__writer :  java.io.Writer, __escaper :  gw.lang.parser.template.StringEscaper, __helper :  gw.api.web.template.TemplatePanelHelper, DraftDocumentStorage :  java.lang.String, finalizeAction :  java.lang.String) : void {
      gw.integration.document.production.web.DraftEditor.render(__writer, '${DraftDocumentStorage}', info.retrieveDraftDocument(document), '${finalizeAction}')
    }
    
    // 'title' attribute on Worksheet (id=EditDraftWorksheet) at EditDraftWorksheet.pcf: line 11, column 120
    static function title_13 (info :  gw.integration.document.production.web.DocumentProductionInfo) : java.lang.Object {
      return DisplayKey.get('Web.Document.Integration.DocumentCreation.Title.Template', info.Template.Name, info.Title)
    }
    
    // 'value' attribute on HiddenInput (id=DraftDocumentStorage_Input) at EditDraftWorksheet.pcf: line 56, column 32
    function valueRoot_6 () : java.lang.Object {
      return document.DraftDocument
    }
    
    // 'value' attribute on HiddenInput (id=DraftDocumentStorage_Input) at EditDraftWorksheet.pcf: line 56, column 32
    function value_4 () : String {
      return document.DraftDocument.Content
    }
    
    // 'value' attribute on HiddenInput (id=finalizeAction_Input) at EditDraftWorksheet.pcf: line 65, column 32
    function value_9 () : String {
      return finalizeTrigger
    }
    
    override property get CurrentLocation () : pcf.EditDraftWorksheet {
      return super.CurrentLocation as pcf.EditDraftWorksheet
    }
    
    property get document () : Document {
      return getVariableValue("document", 0) as Document
    }
    
    property set document ($arg :  Document) {
      setVariableValue("document", 0, $arg)
    }
    
    property get finalizeTrigger () : String {
      return getVariableValue("finalizeTrigger", 0) as String
    }
    
    property set finalizeTrigger ($arg :  String) {
      setVariableValue("finalizeTrigger", 0, $arg)
    }
    
    property get helper () : gw.integration.document.production.web.DocumentProductionUIHelper {
      return getVariableValue("helper", 0) as gw.integration.document.production.web.DocumentProductionUIHelper
    }
    
    property set helper ($arg :  gw.integration.document.production.web.DocumentProductionUIHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get info () : gw.integration.document.production.web.DocumentProductionInfo {
      return getVariableValue("info", 0) as gw.integration.document.production.web.DocumentProductionInfo
    }
    
    property set info ($arg :  gw.integration.document.production.web.DocumentProductionInfo) {
      setVariableValue("info", 0, $arg)
    }
    
    
  }
  
  
}