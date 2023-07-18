package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/AccountNewDocumentsLinkedWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountNewDocumentsLinkedWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/document/AccountNewDocumentsLinkedWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountNewDocumentsLinkedWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'canVisit' attribute on Worksheet (id=AccountNewDocumentsLinkedWorksheet) at AccountNewDocumentsLinkedWorksheet.pcf: line 11, column 68
    static function canVisit_4 (account :  Account) : java.lang.Boolean {
      return perm.Document.create
    }
    
    // 'def' attribute on ScreenRef at AccountNewDocumentsLinkedWorksheet.pcf: line 32, column 63
    function def_onEnter_2 (def :  pcf.UploadDocumentScreen) : void {
      def.onEnter(documentApplicationContext)
    }
    
    // 'def' attribute on ScreenRef at AccountNewDocumentsLinkedWorksheet.pcf: line 32, column 63
    function def_refreshVariables_3 (def :  pcf.UploadDocumentScreen) : void {
      def.refreshVariables(documentApplicationContext)
    }
    
    // 'initialValue' attribute on Variable at AccountNewDocumentsLinkedWorksheet.pcf: line 22, column 107
    function initialValue_0 () : gw.api.domain.linkedobject.LinkedObjectContainer[] {
      return gw.api.domain.linkedobject.LinkedObjectUtils.generateLevels(account,null,null,null)
    }
    
    // 'initialValue' attribute on Variable at AccountNewDocumentsLinkedWorksheet.pcf: line 30, column 54
    function initialValue_1 () : gw.document.DocumentApplicationContext {
      return new gw.api.web.document.DocumentPCContext(account, null, levels, levelsVisible)
    }
    
    override property get CurrentLocation () : pcf.AccountNewDocumentsLinkedWorksheet {
      return super.CurrentLocation as pcf.AccountNewDocumentsLinkedWorksheet
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get documentApplicationContext () : gw.document.DocumentApplicationContext {
      return getVariableValue("documentApplicationContext", 0) as gw.document.DocumentApplicationContext
    }
    
    property set documentApplicationContext ($arg :  gw.document.DocumentApplicationContext) {
      setVariableValue("documentApplicationContext", 0, $arg)
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
    
    
  }
  
  
}