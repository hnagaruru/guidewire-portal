package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/AccountNewDocumentFromTemplateWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AccountNewDocumentFromTemplateWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/document/AccountNewDocumentFromTemplateWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AccountNewDocumentFromTemplateWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (account :  Account) : int {
      return 0
    }
    
    // 'canVisit' attribute on Worksheet (id=AccountNewDocumentFromTemplateWorksheet) at AccountNewDocumentFromTemplateWorksheet.pcf: line 11, column 68
    static function canVisit_6 (account :  Account) : java.lang.Boolean {
      return perm.Document.create
    }
    
    // 'def' attribute on ScreenRef at AccountNewDocumentFromTemplateWorksheet.pcf: line 36, column 104
    function def_onEnter_4 (def :  pcf.NewDocumentFromTemplateScreen) : void {
      def.onEnter(DocumentCreationInfo, account, policyPeriod, job, activity)
    }
    
    // 'def' attribute on ScreenRef at AccountNewDocumentFromTemplateWorksheet.pcf: line 36, column 104
    function def_refreshVariables_5 (def :  pcf.NewDocumentFromTemplateScreen) : void {
      def.refreshVariables(DocumentCreationInfo, account, policyPeriod, job, activity)
    }
    
    // 'initialValue' attribute on Variable at AccountNewDocumentFromTemplateWorksheet.pcf: line 22, column 28
    function initialValue_0 () : PolicyPeriod {
      return null
    }
    
    // 'initialValue' attribute on Variable at AccountNewDocumentFromTemplateWorksheet.pcf: line 26, column 19
    function initialValue_1 () : Job {
      return null
    }
    
    // 'initialValue' attribute on Variable at AccountNewDocumentFromTemplateWorksheet.pcf: line 30, column 24
    function initialValue_2 () : Activity {
      return null
    }
    
    // 'initialValue' attribute on Variable at AccountNewDocumentFromTemplateWorksheet.pcf: line 34, column 48
    function initialValue_3 () : gw.document.DocumentCreationInfo {
      return gw.api.web.document.DocumentsHelper.createDocumentCreationInfo(account)
    }
    
    override property get CurrentLocation () : pcf.AccountNewDocumentFromTemplateWorksheet {
      return super.CurrentLocation as pcf.AccountNewDocumentFromTemplateWorksheet
    }
    
    property get DocumentCreationInfo () : gw.document.DocumentCreationInfo {
      return getVariableValue("DocumentCreationInfo", 0) as gw.document.DocumentCreationInfo
    }
    
    property set DocumentCreationInfo ($arg :  gw.document.DocumentCreationInfo) {
      setVariableValue("DocumentCreationInfo", 0, $arg)
    }
    
    property get account () : Account {
      return getVariableValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get activity () : Activity {
      return getVariableValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setVariableValue("activity", 0, $arg)
    }
    
    property get job () : Job {
      return getVariableValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setVariableValue("job", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}