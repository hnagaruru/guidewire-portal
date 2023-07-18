package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/NewLossHistoryDocumentsWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewLossHistoryDocumentsWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/document/NewLossHistoryDocumentsWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewLossHistoryDocumentsWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at NewLossHistoryDocumentsWorksheet.pcf: line 43, column 63
    function def_onEnter_6 (def :  pcf.UploadDocumentScreen) : void {
      def.onEnter(documentApplicationContext)
    }
    
    // 'def' attribute on ScreenRef at NewLossHistoryDocumentsWorksheet.pcf: line 43, column 63
    function def_refreshVariables_7 (def :  pcf.UploadDocumentScreen) : void {
      def.refreshVariables(documentApplicationContext)
    }
    
    // 'initialValue' attribute on Variable at NewLossHistoryDocumentsWorksheet.pcf: line 21, column 23
    function initialValue_0 () : Account {
      return policyPeriod.Policy.Account
    }
    
    // 'initialValue' attribute on Variable at NewLossHistoryDocumentsWorksheet.pcf: line 25, column 22
    function initialValue_1 () : Policy {
      return policyPeriod.Policy
    }
    
    // 'initialValue' attribute on Variable at NewLossHistoryDocumentsWorksheet.pcf: line 29, column 19
    function initialValue_2 () : Job {
      return policyPeriod.Job
    }
    
    // 'initialValue' attribute on Variable at NewLossHistoryDocumentsWorksheet.pcf: line 33, column 108
    function initialValue_3 () : gw.api.domain.linkedobject.LinkedObjectContainer[] {
      return gw.api.domain.linkedobject.LinkedObjectUtils.generateLevels(account,policy,job,null)
    }
    
    // 'initialValue' attribute on Variable at NewLossHistoryDocumentsWorksheet.pcf: line 37, column 116
    function initialValue_4 () : boolean {
      return policy != null and (job == null or !(job typeis Submission) or (job as Submission).FullMode)
    }
    
    // 'initialValue' attribute on Variable at NewLossHistoryDocumentsWorksheet.pcf: line 41, column 54
    function initialValue_5 () : gw.document.DocumentApplicationContext {
      return new gw.api.web.document.DocumentPCContext('LossHistory', policyPeriod, TC_LOSS_HISTORY, levels, levelsVisible)
    }
    
    override property get CurrentLocation () : pcf.NewLossHistoryDocumentsWorksheet {
      return super.CurrentLocation as pcf.NewLossHistoryDocumentsWorksheet
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