package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/NewDocumentsLinkedWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewDocumentsLinkedWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/document/NewDocumentsLinkedWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewDocumentsLinkedWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, documentContainer :  gw.api.domain.linkedobject.LinkedObjectContainer) : int {
      return 1
    }
    
    // 'canVisit' attribute on Worksheet (id=NewDocumentsLinkedWorksheet) at NewDocumentsLinkedWorksheet.pcf: line 11, column 68
    static function canVisit_9 (documentContainer :  gw.api.domain.linkedobject.LinkedObjectContainer, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.Document.create
    }
    
    // 'def' attribute on ScreenRef at NewDocumentsLinkedWorksheet.pcf: line 50, column 63
    function def_onEnter_7 (def :  pcf.UploadDocumentScreen) : void {
      def.onEnter(documentApplicationContext)
    }
    
    // 'def' attribute on ScreenRef at NewDocumentsLinkedWorksheet.pcf: line 50, column 63
    function def_refreshVariables_8 (def :  pcf.UploadDocumentScreen) : void {
      def.refreshVariables(documentApplicationContext)
    }
    
    // 'initialValue' attribute on Variable at NewDocumentsLinkedWorksheet.pcf: line 24, column 95
    function initialValue_0 () : gw.api.domain.linkedobject.LinkedObjectContainer {
      return policyPeriod.Policy as gw.api.domain.linkedobject.LinkedObjectContainer
    }
    
    // 'initialValue' attribute on Variable at NewDocumentsLinkedWorksheet.pcf: line 28, column 23
    function initialValue_1 () : Account {
      return policyPeriod.Policy.Account
    }
    
    // 'initialValue' attribute on Variable at NewDocumentsLinkedWorksheet.pcf: line 32, column 22
    function initialValue_2 () : Policy {
      return policyPeriod.Policy
    }
    
    // 'initialValue' attribute on Variable at NewDocumentsLinkedWorksheet.pcf: line 36, column 19
    function initialValue_3 () : Job {
      return policyPeriod.Job.Complete ? null : policyPeriod.Job
    }
    
    // 'initialValue' attribute on Variable at NewDocumentsLinkedWorksheet.pcf: line 40, column 108
    function initialValue_4 () : gw.api.domain.linkedobject.LinkedObjectContainer[] {
      return gw.api.domain.linkedobject.LinkedObjectUtils.generateLevels(account,policy,job,null)
    }
    
    // 'initialValue' attribute on Variable at NewDocumentsLinkedWorksheet.pcf: line 44, column 95
    function initialValue_5 () : boolean {
      return job == null or !(job typeis Submission) or (job as Submission).FullMode
    }
    
    // 'initialValue' attribute on Variable at NewDocumentsLinkedWorksheet.pcf: line 48, column 54
    function initialValue_6 () : gw.document.DocumentApplicationContext {
      return new gw.api.web.document.DocumentPCContext(documentContainer, null, levels, levelsVisible)
    }
    
    override property get CurrentLocation () : pcf.NewDocumentsLinkedWorksheet {
      return super.CurrentLocation as pcf.NewDocumentsLinkedWorksheet
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
    
    property get documentContainer () : gw.api.domain.linkedobject.LinkedObjectContainer {
      return getVariableValue("documentContainer", 0) as gw.api.domain.linkedobject.LinkedObjectContainer
    }
    
    property set documentContainer ($arg :  gw.api.domain.linkedobject.LinkedObjectContainer) {
      setVariableValue("documentContainer", 0, $arg)
    }
    
    property get job () : Job {
      return getVariableValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setVariableValue("job", 0, $arg)
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
    
    property get policy () : Policy {
      return getVariableValue("policy", 0) as Policy
    }
    
    property set policy ($arg :  Policy) {
      setVariableValue("policy", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}