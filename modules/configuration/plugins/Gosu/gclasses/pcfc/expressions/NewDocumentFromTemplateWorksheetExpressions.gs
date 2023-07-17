package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/NewDocumentFromTemplateWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewDocumentFromTemplateWorksheetExpressions {
  @javax.annotation.Generated("config/web/pcf/document/NewDocumentFromTemplateWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewDocumentFromTemplateWorksheetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (activity :  Activity, docContainer :  gw.api.domain.document.DocumentContainer) : int {
      return 2
    }
    
    static function __constructorIndex (activity :  Activity, docContainer :  gw.api.domain.document.DocumentContainer, docTemplate :  String) : int {
      return 3
    }
    
    static function __constructorIndex (contingency :  Contingency) : int {
      return 4
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    static function __constructorIndex (policyPeriod :  PolicyPeriod, jobContainer :  Job) : int {
      return 1
    }
    
    // 'canVisit' attribute on Worksheet (id=NewDocumentFromTemplateWorksheet) at NewDocumentFromTemplateWorksheet.pcf: line 11, column 68
    static function canVisit_6 (activity :  Activity, contingency :  Contingency, docContainer :  gw.api.domain.document.DocumentContainer, docTemplate :  String, jobContainer :  Job, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.Document.create
    }
    
    // 'def' attribute on ScreenRef at NewDocumentFromTemplateWorksheet.pcf: line 59, column 104
    function def_onEnter_4 (def :  pcf.NewDocumentFromTemplateScreen) : void {
      def.onEnter(DocumentCreationInfo, account, policyPeriod, job, activity)
    }
    
    // 'def' attribute on ScreenRef at NewDocumentFromTemplateWorksheet.pcf: line 59, column 104
    function def_refreshVariables_5 (def :  pcf.NewDocumentFromTemplateScreen) : void {
      def.refreshVariables(DocumentCreationInfo, account, policyPeriod, job, activity)
    }
    
    // 'initialValue' attribute on Variable at NewDocumentFromTemplateWorksheet.pcf: line 36, column 23
    function initialValue_0 () : Account {
      return contingency != null ? contingency.Policy.Account : policyPeriod.Policy.Account
    }
    
    // 'initialValue' attribute on Variable at NewDocumentFromTemplateWorksheet.pcf: line 40, column 19
    function initialValue_1 () : Job {
      return policyPeriod.Job.Complete ? null : policyPeriod.Job
    }
    
    // 'initialValue' attribute on Variable at NewDocumentFromTemplateWorksheet.pcf: line 50, column 48
    function initialValue_2 () : gw.document.DocumentCreationInfo {
      return gw.web.document.DocumentUIHelper.createDocumentCreationInfo(activity, policyPeriod, jobContainer, docContainer, docTemplate, locale, contingency)
    }
    
    // 'initialValue' attribute on Variable at NewDocumentFromTemplateWorksheet.pcf: line 54, column 31
    function initialValue_3 () : gw.i18n.ILocale {
      return gw.api.util.LocaleUtil.getDefaultLocale()
    }
    
    override property get CurrentLocation () : pcf.NewDocumentFromTemplateWorksheet {
      return super.CurrentLocation as pcf.NewDocumentFromTemplateWorksheet
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
    
    property get contingency () : Contingency {
      return getVariableValue("contingency", 0) as Contingency
    }
    
    property set contingency ($arg :  Contingency) {
      setVariableValue("contingency", 0, $arg)
    }
    
    property get docContainer () : gw.api.domain.document.DocumentContainer {
      return getVariableValue("docContainer", 0) as gw.api.domain.document.DocumentContainer
    }
    
    property set docContainer ($arg :  gw.api.domain.document.DocumentContainer) {
      setVariableValue("docContainer", 0, $arg)
    }
    
    property get docTemplate () : String {
      return getVariableValue("docTemplate", 0) as String
    }
    
    property set docTemplate ($arg :  String) {
      setVariableValue("docTemplate", 0, $arg)
    }
    
    property get job () : Job {
      return getVariableValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setVariableValue("job", 0, $arg)
    }
    
    property get jobContainer () : Job {
      return getVariableValue("jobContainer", 0) as Job
    }
    
    property set jobContainer ($arg :  Job) {
      setVariableValue("jobContainer", 0, $arg)
    }
    
    property get locale () : gw.i18n.ILocale {
      return getVariableValue("locale", 0) as gw.i18n.ILocale
    }
    
    property set locale ($arg :  gw.i18n.ILocale) {
      setVariableValue("locale", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}