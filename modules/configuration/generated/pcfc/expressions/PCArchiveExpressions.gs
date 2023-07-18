package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/PCArchive.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PCArchiveExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/PCArchive.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PCArchiveExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at PCArchive.pcf: line 14, column 44
    function initialValue_0 () : gw.pcf.tools.PCArchiveHelper {
      return new gw.pcf.tools.PCArchiveHelper ()
    }
    
    // Page (id=PCArchive) at PCArchive.pcf: line 10, column 77
    static function parent_23 () : pcf.api.Destination {
      return pcf.UnsupportedTools.createDestination()
    }
    
    override property get CurrentLocation () : pcf.PCArchive {
      return super.CurrentLocation as pcf.PCArchive
    }
    
    property get helper () : gw.pcf.tools.PCArchiveHelper {
      return getVariableValue("helper", 0) as gw.pcf.tools.PCArchiveHelper
    }
    
    property set helper ($arg :  gw.pcf.tools.PCArchiveHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/PCArchive.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PCArchiveToolsScreenExpressionsImpl extends PCArchiveExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=ArchivePolicyButton_Input) at PCArchive.pcf: line 79, column 70
    function action_15 () : void {
      helper.doArchivePolicyTerm(archivePolicy, archiveTerm, skipValidationArchivingByPolicyNumber)
    }
    
    // 'action' attribute on ButtonInput (id=FlushWorkQueuesButton_Input) at PCArchive.pcf: line 95, column 78
    function action_19 () : void {
      helper.doFlushWorkQueues()
    }
    
    // 'action' attribute on ButtonInput (id=ArchiveByBatchProcessButton_Input) at PCArchive.pcf: line 107, column 78
    function action_20 () : void {
      helper.doArchiveByBatchProcess()
    }
    
    // 'action' attribute on ButtonInput (id=ArchiveJobButton_Input) at PCArchive.pcf: line 52, column 70
    function action_5 () : void {
      helper.doArchiveJob(archiveJob, skipValidationArchivingByJob)
    }
    
    // 'def' attribute on PanelRef at PCArchive.pcf: line 112, column 42
    function def_onEnter_21 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at PCArchive.pcf: line 112, column 42
    function def_refreshVariables_22 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=ArchivePolicy_Input) at PCArchive.pcf: line 70, column 36
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      archivePolicy = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ArchiveTerm_Input) at PCArchive.pcf: line 75, column 34
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      archiveTerm = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=SkipValidationWhenArchivingByPolicyNumber_Input) at PCArchive.pcf: line 84, column 60
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      skipValidationArchivingByPolicyNumber = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ArchiveJob_Input) at PCArchive.pcf: line 48, column 33
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      archiveJob = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=SkipValidationWhenArchivingByJobID_Input) at PCArchive.pcf: line 57, column 51
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      skipValidationArchivingByJob = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ArchiveTerm_Input) at PCArchive.pcf: line 75, column 34
    function value_12 () : java.lang.String {
      return archiveTerm
    }
    
    // 'value' attribute on CheckBoxInput (id=SkipValidationWhenArchivingByPolicyNumber_Input) at PCArchive.pcf: line 84, column 60
    function value_16 () : java.lang.Boolean {
      return skipValidationArchivingByPolicyNumber
    }
    
    // 'value' attribute on TextInput (id=ArchiveJob_Input) at PCArchive.pcf: line 48, column 33
    function value_2 () : java.lang.String {
      return archiveJob
    }
    
    // 'value' attribute on CheckBoxInput (id=SkipValidationWhenArchivingByJobID_Input) at PCArchive.pcf: line 57, column 51
    function value_6 () : java.lang.Boolean {
      return skipValidationArchivingByJob
    }
    
    // 'value' attribute on TextInput (id=ArchivePolicy_Input) at PCArchive.pcf: line 70, column 36
    function value_9 () : java.lang.String {
      return archivePolicy
    }
    
    // 'visible' attribute on AlertBar (id=archiveSucceeded) at PCArchive.pcf: line 38, column 48
    function visible_1 () : java.lang.Boolean {
      return helper.LastArchiveSucceeded
    }
    
    property get archiveJob () : String {
      return getVariableValue("archiveJob", 1) as String
    }
    
    property set archiveJob ($arg :  String) {
      setVariableValue("archiveJob", 1, $arg)
    }
    
    property get archivePolicy () : String {
      return getVariableValue("archivePolicy", 1) as String
    }
    
    property set archivePolicy ($arg :  String) {
      setVariableValue("archivePolicy", 1, $arg)
    }
    
    property get archiveTerm () : String {
      return getVariableValue("archiveTerm", 1) as String
    }
    
    property set archiveTerm ($arg :  String) {
      setVariableValue("archiveTerm", 1, $arg)
    }
    
    property get skipValidationArchivingByJob () : boolean {
      return getVariableValue("skipValidationArchivingByJob", 1) as java.lang.Boolean
    }
    
    property set skipValidationArchivingByJob ($arg :  boolean) {
      setVariableValue("skipValidationArchivingByJob", 1, $arg)
    }
    
    property get skipValidationArchivingByPolicyNumber () : boolean {
      return getVariableValue("skipValidationArchivingByPolicyNumber", 1) as java.lang.Boolean
    }
    
    property set skipValidationArchivingByPolicyNumber ($arg :  boolean) {
      setVariableValue("skipValidationArchivingByPolicyNumber", 1, $arg)
    }
    
    
  }
  
  
}