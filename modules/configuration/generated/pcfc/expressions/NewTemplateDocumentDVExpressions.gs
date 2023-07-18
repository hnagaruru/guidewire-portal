package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.document.SimpleSymbol
uses gw.api.web.document.DocumentsHelper
uses gw.api.util.LocaleUtil
@javax.annotation.Generated("config/web/pcf/document/NewTemplateDocumentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewTemplateDocumentDVExpressions {
  @javax.annotation.Generated("config/web/pcf/document/NewTemplateDocumentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewTemplateDocumentDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=TemplatePicker_Input) at NewTemplateDocumentDV.pcf: line 60, column 69
    function action_2 () : void {
      DocumentTemplateSearchPopup.push(policyPeriod, account, documentCreationInfo)
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=TemplatePicker_Input) at NewTemplateDocumentDV.pcf: line 60, column 69
    function action_dest_3 () : pcf.api.Destination {
      return pcf.DocumentTemplateSearchPopup.createDestination(policyPeriod, account, documentCreationInfo)
    }
    
    // 'def' attribute on InputSetRef at NewTemplateDocumentDV.pcf: line 80, column 45
    function def_onEnter_19 (def :  pcf.DocumentTemplateContextObjectIteratorInputSet_default) : void {
      def.onEnter(documentPCContext, documentCreationInfo)
    }
    
    // 'def' attribute on InputSetRef at NewTemplateDocumentDV.pcf: line 80, column 45
    function def_onEnter_21 (def :  pcf.DocumentTemplateContextObjectIteratorInputSet_noticeofofferofmodoraltworkdwcad1013353pdf) : void {
      def.onEnter(documentPCContext, documentCreationInfo)
    }
    
    // 'def' attribute on InputSetRef at NewTemplateDocumentDV.pcf: line 83, column 45
    function def_onEnter_24 (def :  pcf.DocumentCreationInputSet) : void {
      def.onEnter(documentPCContext,documentCreationInfo,Step3Label)
    }
    
    // 'def' attribute on InputSetRef at NewTemplateDocumentDV.pcf: line 80, column 45
    function def_refreshVariables_20 (def :  pcf.DocumentTemplateContextObjectIteratorInputSet_default) : void {
      def.refreshVariables(documentPCContext, documentCreationInfo)
    }
    
    // 'def' attribute on InputSetRef at NewTemplateDocumentDV.pcf: line 80, column 45
    function def_refreshVariables_22 (def :  pcf.DocumentTemplateContextObjectIteratorInputSet_noticeofofferofmodoraltworkdwcad1013353pdf) : void {
      def.refreshVariables(documentPCContext, documentCreationInfo)
    }
    
    // 'def' attribute on InputSetRef at NewTemplateDocumentDV.pcf: line 83, column 45
    function def_refreshVariables_25 (def :  pcf.DocumentCreationInputSet) : void {
      def.refreshVariables(documentPCContext,documentCreationInfo,Step3Label)
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at NewTemplateDocumentDV.pcf: line 68, column 104
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      languageType = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on DocumentTemplateInput (id=TemplatePicker_Input) at NewTemplateDocumentDV.pcf: line 60, column 69
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentCreationInfo.DocumentTemplateDescriptor = (__VALUE_TO_SET as gw.plugin.document.IDocumentTemplateDescriptor)
    }
    
    // 'editable' attribute on DocumentTemplateInput (id=TemplatePicker_Input) at NewTemplateDocumentDV.pcf: line 60, column 69
    function editable_4 () : java.lang.Boolean {
      return documentPCContext.DocumentCreationReadOnly
    }
    
    // 'initialValue' attribute on Variable at NewTemplateDocumentDV.pcf: line 31, column 28
    function initialValue_0 () : LanguageType {
      return document.Language
    }
    
    // 'initialValue' attribute on Variable at NewTemplateDocumentDV.pcf: line 42, column 39
    function initialValue_1 () : boolean {
      return initDV()
    }
    
    // 'mode' attribute on InputSetRef at NewTemplateDocumentDV.pcf: line 80, column 45
    function mode_23 () : java.lang.Object {
      return documentCreationInfo.DocumentTemplateDescriptor.TemplateId
    }
    
    // 'onChange' attribute on PostOnChange at NewTemplateDocumentDV.pcf: line 71, column 40
    function onChange_11 () : void {
      changeLanguage()
    }
    
    // 'onPick' attribute on DocumentTemplateInput (id=TemplatePicker_Input) at NewTemplateDocumentDV.pcf: line 60, column 69
    function onPick_5 (PickedValue :  gw.plugin.document.IDocumentTemplateDescriptor) : void {
      documentPCContext.resetTemplateBasedInfo(documentCreationInfo, documentCreationInfo.DocumentTemplateDescriptor); documentCreationInfo.evaluateDynamicWidgets()
    }
    
    // 'value' attribute on DocumentTemplateInput (id=TemplatePicker_Input) at NewTemplateDocumentDV.pcf: line 60, column 69
    function valueRoot_8 () : java.lang.Object {
      return documentCreationInfo
    }
    
    // 'value' attribute on TypeKeyInput (id=Language_Input) at NewTemplateDocumentDV.pcf: line 68, column 104
    function value_14 () : typekey.LanguageType {
      return languageType
    }
    
    // 'value' attribute on DocumentTemplateInput (id=TemplatePicker_Input) at NewTemplateDocumentDV.pcf: line 60, column 69
    function value_6 () : gw.plugin.document.IDocumentTemplateDescriptor {
      return documentCreationInfo.DocumentTemplateDescriptor
    }
    
    // 'visible' attribute on TypeKeyInput (id=Language_Input) at NewTemplateDocumentDV.pcf: line 68, column 104
    function visible_13 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1 and activity.DocumentTemplate != null
    }
    
    // 'visible' attribute on InputSet at NewTemplateDocumentDV.pcf: line 74, column 75
    function visible_26 () : java.lang.Boolean {
      return documentCreationInfo.DocumentTemplateDescriptor != null
    }
    
    property get Step3Label () : String {
      return getVariableValue("Step3Label", 0) as String
    }
    
    property set Step3Label ($arg :  String) {
      setVariableValue("Step3Label", 0, $arg)
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
    
    property get document () : Document {
      return getRequireValue("document", 0) as Document
    }
    
    property set document ($arg :  Document) {
      setRequireValue("document", 0, $arg)
    }
    
    property get documentCreationInfo () : gw.document.DocumentCreationInfo {
      return getRequireValue("documentCreationInfo", 0) as gw.document.DocumentCreationInfo
    }
    
    property set documentCreationInfo ($arg :  gw.document.DocumentCreationInfo) {
      setRequireValue("documentCreationInfo", 0, $arg)
    }
    
    property get documentPCContext () : gw.api.web.document.DocumentPCContext {
      return getRequireValue("documentPCContext", 0) as gw.api.web.document.DocumentPCContext
    }
    
    property set documentPCContext ($arg :  gw.api.web.document.DocumentPCContext) {
      setRequireValue("documentPCContext", 0, $arg)
    }
    
    property get initialized () : boolean {
      return getVariableValue("initialized", 0) as java.lang.Boolean
    }
    
    property set initialized ($arg :  boolean) {
      setVariableValue("initialized", 0, $arg)
    }
    
    property get job () : Job {
      return getRequireValue("job", 0) as Job
    }
    
    property set job ($arg :  Job) {
      setRequireValue("job", 0, $arg)
    }
    
    property get language () : LanguageType {
      return getVariableValue("language", 0) as LanguageType
    }
    
    property set language ($arg :  LanguageType) {
      setVariableValue("language", 0, $arg)
    }
    
    property get languageType () : LanguageType {
      return getVariableValue("languageType", 0) as LanguageType
    }
    
    property set languageType ($arg :  LanguageType) {
      setVariableValue("languageType", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
    
          function initDV(): boolean {
            documentCreationInfo.addSymbols({
              // Full set of symbols available to Template Descriptors in earlier versions of PC
              // Included for backwards compatibility and can likely be pruned
              "DocumentCreationInfo"->documentCreationInfo,
              "document"->document,
              "language"->language,
              // The following are added with explicit types to facilitate
              // null-safe access within template descriptor Gosu expressions.
              // Otherwise, null values would be mapped to the Object type.
              "account"->new SimpleSymbol(Account,account),
              "policyPeriod"->new SimpleSymbol(PolicyPeriod,policyPeriod),
              "job"->new SimpleSymbol(Job,job),
              "activity"->new SimpleSymbol(Activity,activity)
            })
            if (documentCreationInfo.DocumentTemplateDescriptor != null) {
              documentCreationInfo.evaluateDynamicWidgets()
            }
            return true
          }
    
          function changeLanguage() {
            documentPCContext.resetTemplateBasedInfo(documentCreationInfo,
              DocumentsHelper.fetchDocumentTemplate(documentCreationInfo.DocumentTemplateDescriptor.TemplateId,
                LocaleUtil.toLanguage(languageType), CurrentLocation))
            documentCreationInfo.evaluateDynamicWidgets()
          }
    
    
  }
  
  
}