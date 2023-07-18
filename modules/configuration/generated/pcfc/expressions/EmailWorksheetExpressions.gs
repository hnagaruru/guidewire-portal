package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/email/EmailWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EmailWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/email/EmailWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EmailWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (srcBean :  KeyableBean, docContainer :  gw.api.domain.document.DocumentContainer, emailTemplateStr :  String) : int {
      return 0
    }
    
    static function __constructorIndex (docContainer :  gw.api.domain.document.DocumentContainer) : int {
      return 1
    }
    
    // 'canVisit' attribute on Worksheet (id=EmailWorksheet) at EmailWorksheet.pcf: line 11, column 60
    static function canVisit_5 (docContainer :  gw.api.domain.document.DocumentContainer, emailTemplateStr :  String, srcBean :  KeyableBean) : java.lang.Boolean {
      return perm.System.sendemail
    }
    
    // 'def' attribute on ScreenRef at EmailWorksheet.pcf: line 34, column 81
    function def_onEnter_3 (def :  pcf.CreateEmailScreen) : void {
      def.onEnter(symbolTable, docContainer, emailTemplateStr, {})
    }
    
    // 'def' attribute on ScreenRef at EmailWorksheet.pcf: line 34, column 81
    function def_refreshVariables_4 (def :  pcf.CreateEmailScreen) : void {
      def.refreshVariables(symbolTable, docContainer, emailTemplateStr, {})
    }
    
    // 'initialValue' attribute on Variable at EmailWorksheet.pcf: line 24, column 27
    function initialValue_0 () : KeyableBean {
      return docContainer typeis KeyableBean ? docContainer : null
    }
    
    // 'initialValue' attribute on Variable at EmailWorksheet.pcf: line 28, column 50
    function initialValue_1 () : java.util.Map<String, Object> {
      return gw.api.util.SymbolTableUtil.populateMapFromBeans( srcBean )
    }
    
    // 'initialValue' attribute on Variable at EmailWorksheet.pcf: line 32, column 22
    function initialValue_2 () : String {
      return (srcBean typeis Activity) ? srcBean.EmailTemplate : null
    }
    
    override property get CurrentLocation () : pcf.EmailWorksheet {
      return super.CurrentLocation as pcf.EmailWorksheet
    }
    
    property get docContainer () : gw.api.domain.document.DocumentContainer {
      return getVariableValue("docContainer", 0) as gw.api.domain.document.DocumentContainer
    }
    
    property set docContainer ($arg :  gw.api.domain.document.DocumentContainer) {
      setVariableValue("docContainer", 0, $arg)
    }
    
    property get emailTemplateStr () : String {
      return getVariableValue("emailTemplateStr", 0) as String
    }
    
    property set emailTemplateStr ($arg :  String) {
      setVariableValue("emailTemplateStr", 0, $arg)
    }
    
    property get srcBean () : KeyableBean {
      return getVariableValue("srcBean", 0) as KeyableBean
    }
    
    property set srcBean ($arg :  KeyableBean) {
      setVariableValue("srcBean", 0, $arg)
    }
    
    property get symbolTable () : java.util.Map<String, Object> {
      return getVariableValue("symbolTable", 0) as java.util.Map<String, Object>
    }
    
    property set symbolTable ($arg :  java.util.Map<String, Object>) {
      setVariableValue("symbolTable", 0, $arg)
    }
    
    
  }
  
  
}