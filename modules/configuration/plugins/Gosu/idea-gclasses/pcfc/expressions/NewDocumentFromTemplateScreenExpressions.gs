package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/NewDocumentFromTemplateScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewDocumentFromTemplateScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/document/NewDocumentFromTemplateScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewDocumentFromTemplateScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at NewDocumentFromTemplateScreen.pcf: line 47, column 52
    function def_onEnter_6 (def :  pcf.NewTemplateDocumentDV) : void {
      def.onEnter(documentPCContext, DocumentCreationInfo, DocumentCreationInfo.Document, account, policyPeriod, job, activity)
    }
    
    // 'def' attribute on PanelRef at NewDocumentFromTemplateScreen.pcf: line 51, column 88
    function def_onEnter_8 (def :  pcf.DocumentDetailsEditDVPanelSet) : void {
      def.onEnter(documentDetailsApplicationHelper, true)
    }
    
    // 'def' attribute on PanelRef at NewDocumentFromTemplateScreen.pcf: line 47, column 52
    function def_refreshVariables_7 (def :  pcf.NewTemplateDocumentDV) : void {
      def.refreshVariables(documentPCContext, DocumentCreationInfo, DocumentCreationInfo.Document, account, policyPeriod, job, activity)
    }
    
    // 'def' attribute on PanelRef at NewDocumentFromTemplateScreen.pcf: line 51, column 88
    function def_refreshVariables_9 (def :  pcf.DocumentDetailsEditDVPanelSet) : void {
      def.refreshVariables(documentDetailsApplicationHelper, true)
    }
    
    // 'initialValue' attribute on Variable at NewDocumentFromTemplateScreen.pcf: line 25, column 154
    function initialValue_0 () : gw.api.domain.linkedobject.LinkedObjectContainer[] {
      return gw.api.domain.linkedobject.LinkedObjectUtils.generateLevels(account, policyPeriod == null ? null : policyPeriod.Policy, job, null)
    }
    
    // 'initialValue' attribute on Variable at NewDocumentFromTemplateScreen.pcf: line 29, column 95
    function initialValue_1 () : boolean {
      return job == null or !(job typeis Submission) or (job as Submission).FullMode
    }
    
    // 'initialValue' attribute on Variable at NewDocumentFromTemplateScreen.pcf: line 33, column 100
    function initialValue_2 () : gw.api.web.document.DocumentPCContext {
      return new gw.api.web.document.DocumentPCContext(null, null, levels, levelsVisible)
    }
    
    // 'initialValue' attribute on Variable at NewDocumentFromTemplateScreen.pcf: line 38, column 59
    function initialValue_3 () : gw.document.DocumentDetailsApplicationHelper {
      return new gw.api.web.document.DocumentMetadataPCHelper(new Document[] {DocumentCreationInfo.Document}, levels, levelsVisible)         as gw.document.DocumentDetailsApplicationHelper
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at NewDocumentFromTemplateScreen.pcf: line 41, column 102
    function toolbarButtonSet_onEnter_4 (def :  pcf.DocumentCreationToolbarButtonSet) : void {
      def.onEnter(documentPCContext,DocumentCreationInfo)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at NewDocumentFromTemplateScreen.pcf: line 41, column 102
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.DocumentCreationToolbarButtonSet) : void {
      def.refreshVariables(documentPCContext,DocumentCreationInfo)
    }
    
    property get DocumentCreationInfo () : gw.document.DocumentCreationInfo {
      return getRequireValue("DocumentCreationInfo", 0) as gw.document.DocumentCreationInfo
    }
    
    property set DocumentCreationInfo ($arg :  gw.document.DocumentCreationInfo) {
      setRequireValue("DocumentCreationInfo", 0, $arg)
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get activity () : Activity {
      return getRequireValue("activity", 0) as Activity
    }
    
    property set activity ($arg :  Activity) {
      setRequireValue("activity", 0, $arg)
    }
    
    property get documentDetailsApplicationHelper () : gw.document.DocumentDetailsApplicationHelper {
      return getVariableValue("documentDetailsApplicationHelper", 0) as gw.document.DocumentDetailsApplicationHelper
    }
    
    property set documentDetailsApplicationHelper ($arg :  gw.document.DocumentDetailsApplicationHelper) {
      setVariableValue("documentDetailsApplicationHelper", 0, $arg)
    }
    
    property get documentPCContext () : gw.api.web.document.DocumentPCContext {
      return getVariableValue("documentPCContext", 0) as gw.api.web.document.DocumentPCContext
    }
    
    property set documentPCContext ($arg :  gw.api.web.document.DocumentPCContext) {
      setVariableValue("documentPCContext", 0, $arg)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
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
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}