package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateBookXMLImport.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateBookXMLImportExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookXMLImport.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateBookXMLImportExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (importFile :  gw.rating.rtm.util.WebFileWrapper) : int {
      return 0
    }
    
    // 'action' attribute on HiddenLink (id=hiddenOKbutton) at RateBookXMLImport.pcf: line 66, column 34
    function action_10 () : void {
      rateBookXMLImport.doTestImport()
    }
    
    // 'action' attribute on AlertBar (id=alertBar) at RateBookXMLImport.pcf: line 44, column 60
    function action_3 () : void {
      showLogs = true
    }
    
    // 'action' attribute on ToolbarButton (id=OKButton) at RateBookXMLImport.pcf: line 58, column 71
    function action_7 () : void {
      rateBookXMLImport.doImport()
    }
    
    // 'action' attribute on ToolbarButton (id=CancelButton) at RateBookXMLImport.pcf: line 63, column 41
    function action_8 () : void {
      RateBooks.go()
    }
    
    // 'action' attribute on ToolbarButton (id=CancelButton) at RateBookXMLImport.pcf: line 63, column 41
    function action_dest_9 () : pcf.api.Destination {
      return pcf.RateBooks.createDestination()
    }
    
    // 'available' attribute on ToolbarButton (id=OKButton) at RateBookXMLImport.pcf: line 58, column 71
    function available_6 () : java.lang.Boolean {
      return rateBookXMLImport.TestPath != null or rateBookXMLImport.ImportFileWrapper.File != null
    }
    
    // 'value' attribute on FileInput (id=inputFile_Input) at RateBookXMLImport.pcf: line 74, column 65
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateBookXMLImport.ImportFileWrapper.File = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // 'value' attribute on HiddenInput (id=HiddenTestInput_Input) at RateBookXMLImport.pcf: line 79, column 44
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      rateBookXMLImport.TestPath = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at RateBookXMLImport.pcf: line 26, column 63
    function initialValue_0 () : gw.rating.rtm.domain.migration.RateBookImporter {
      return gw.rating.rtm.domain.migration.RateBookImporter.create()
    }
    
    // 'initialValue' attribute on Variable at RateBookXMLImport.pcf: line 37, column 64
    function initialValue_1 () : gw.pcf.rating.ratebook.RateBookXMLImportUIHelper {
      return new gw.pcf.rating.ratebook.RateBookXMLImportUIHelper (importer, importFile, testPath, errorLogs)
    }
    
    // 'label' attribute on AlertBar (id=alertBar2) at RateBookXMLImport.pcf: line 49, column 29
    function label_5 () : java.lang.Object {
      return rateBookXMLImport.ErrorLogs.join("\n")
    }
    
    // 'parent' attribute on Page (id=RateBookXMLImport) at RateBookXMLImport.pcf: line 13, column 73
    static function parent_19 (importFile :  gw.rating.rtm.util.WebFileWrapper) : pcf.api.Destination {
      return pcf.RateBooks.createDestination()
    }
    
    // 'value' attribute on FileInput (id=inputFile_Input) at RateBookXMLImport.pcf: line 74, column 65
    function valueRoot_13 () : java.lang.Object {
      return rateBookXMLImport.ImportFileWrapper
    }
    
    // 'value' attribute on HiddenInput (id=HiddenTestInput_Input) at RateBookXMLImport.pcf: line 79, column 44
    function valueRoot_17 () : java.lang.Object {
      return rateBookXMLImport
    }
    
    // 'value' attribute on FileInput (id=inputFile_Input) at RateBookXMLImport.pcf: line 74, column 65
    function value_11 () : gw.api.web.WebFile {
      return rateBookXMLImport.ImportFileWrapper.File
    }
    
    // 'value' attribute on HiddenInput (id=HiddenTestInput_Input) at RateBookXMLImport.pcf: line 79, column 44
    function value_15 () : java.lang.String {
      return rateBookXMLImport.TestPath
    }
    
    // 'visible' attribute on AlertBar (id=alertBar) at RateBookXMLImport.pcf: line 44, column 60
    function visible_2 () : java.lang.Boolean {
      return rateBookXMLImport.ErrorLogs.HasElements
    }
    
    // 'visible' attribute on AlertBar (id=alertBar2) at RateBookXMLImport.pcf: line 49, column 29
    function visible_4 () : java.lang.Boolean {
      return showLogs
    }
    
    override property get CurrentLocation () : pcf.RateBookXMLImport {
      return super.CurrentLocation as pcf.RateBookXMLImport
    }
    
    property get errorLogs () : String[] {
      return getVariableValue("errorLogs", 0) as String[]
    }
    
    property set errorLogs ($arg :  String[]) {
      setVariableValue("errorLogs", 0, $arg)
    }
    
    property get importFile () : gw.rating.rtm.util.WebFileWrapper {
      return getVariableValue("importFile", 0) as gw.rating.rtm.util.WebFileWrapper
    }
    
    property set importFile ($arg :  gw.rating.rtm.util.WebFileWrapper) {
      setVariableValue("importFile", 0, $arg)
    }
    
    property get importer () : gw.rating.rtm.domain.migration.RateBookImporter {
      return getVariableValue("importer", 0) as gw.rating.rtm.domain.migration.RateBookImporter
    }
    
    property set importer ($arg :  gw.rating.rtm.domain.migration.RateBookImporter) {
      setVariableValue("importer", 0, $arg)
    }
    
    property get rateBookXMLImport () : gw.pcf.rating.ratebook.RateBookXMLImportUIHelper {
      return getVariableValue("rateBookXMLImport", 0) as gw.pcf.rating.ratebook.RateBookXMLImportUIHelper
    }
    
    property set rateBookXMLImport ($arg :  gw.pcf.rating.ratebook.RateBookXMLImportUIHelper) {
      setVariableValue("rateBookXMLImport", 0, $arg)
    }
    
    property get showLogs () : boolean {
      return getVariableValue("showLogs", 0) as java.lang.Boolean
    }
    
    property set showLogs ($arg :  boolean) {
      setVariableValue("showLogs", 0, $arg)
    }
    
    property get testPath () : String {
      return getVariableValue("testPath", 0) as String
    }
    
    property set testPath ($arg :  String) {
      setVariableValue("testPath", 0, $arg)
    }
    
    
  }
  
  
}