package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses java.lang.RuntimeException
uses gw.api.util.DisplayableException
uses org.apache.poi.xssf.usermodel.XSSFWorkbook
@javax.annotation.Generated("config/web/pcf/admin/rating/ExcelImportPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExcelImportPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/ExcelImportPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExcelImportPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'value' attribute on FileInput (id=inputFile_Input) at ExcelImportPopup.pcf: line 34, column 35
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      importFile = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // 'value' attribute on HiddenInput (id=HiddenTestInput_Input) at ExcelImportPopup.pcf: line 39, column 45
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      testPath = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'pickValue' attribute on EditButtons at ExcelImportPopup.pcf: line 25, column 77
    function pickValue_0 () : org.apache.poi.xssf.usermodel.XSSFWorkbook {
      return readExcelFile()
    }
    
    // 'required' attribute on FileInput (id=inputFile_Input) at ExcelImportPopup.pcf: line 34, column 35
    function required_1 () : java.lang.Boolean {
      return testPath == null
    }
    
    // 'value' attribute on FileInput (id=inputFile_Input) at ExcelImportPopup.pcf: line 34, column 35
    function value_2 () : gw.api.web.WebFile {
      return importFile
    }
    
    // 'value' attribute on HiddenInput (id=HiddenTestInput_Input) at ExcelImportPopup.pcf: line 39, column 45
    function value_5 () : java.lang.String {
      return testPath
    }
    
    override property get CurrentLocation () : pcf.ExcelImportPopup {
      return super.CurrentLocation as pcf.ExcelImportPopup
    }
    
    property get importFile () : gw.api.web.WebFile {
      return getVariableValue("importFile", 0) as gw.api.web.WebFile
    }
    
    property set importFile ($arg :  gw.api.web.WebFile) {
      setVariableValue("importFile", 0, $arg)
    }
    
    property get testPath () : java.lang.String {
      return getVariableValue("testPath", 0) as java.lang.String
    }
    
    property set testPath ($arg :  java.lang.String) {
      setVariableValue("testPath", 0, $arg)
    }
    
    
    function readExcelFile() : XSSFWorkbook {
      try {
        if (importFile != null) {
          return new XSSFWorkbook(importFile.InputStream)
        } else {
          return overrideWorkbookFromTestPathFile()
        }
      } catch (e : RuntimeException) {
        throw new DisplayableException(DisplayKey.get("Web.Rating.Errors.InvalidExcelFile"))
      }
    }
    
    function overrideWorkbookFromTestPathFile() : XSSFWorkbook {
      var inputFile = new java.io.File(testPath)
      //noinspection IOResourceOpenedButNotSafelyClosed An object using this stream is returned by the function
      var inputStream = new java.io.FileInputStream(inputFile)
      return new XSSFWorkbook(inputStream)
    }
    
    
  }
  
  
}