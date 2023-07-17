package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/WorkflowTriggerTool.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkflowTriggerToolExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/WorkflowTriggerTool.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkflowTriggerToolExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ButtonInput (id=TriggerTrigger_Input) at WorkflowTriggerTool.pcf: line 56, column 102
    function action_13 () : void {
      result = gw.api.web.policy.ExternalWorkflowTriggerUtil.doTriggerFromExternal(jobNumber, branchNumber, triggerToCall)
    }
    
    // 'def' attribute on PanelRef at WorkflowTriggerTool.pcf: line 60, column 47
    function def_onEnter_14 (def :  pcf.UnsupportedToolsDisclaimerDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at WorkflowTriggerTool.pcf: line 60, column 47
    function def_refreshVariables_15 (def :  pcf.UnsupportedToolsDisclaimerDV) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=TriggerToCall_Input) at WorkflowTriggerTool.pcf: line 50, column 36
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      triggerToCall = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=JobNumber_Input) at WorkflowTriggerTool.pcf: line 39, column 32
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      jobNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=branchNumber_Input) at WorkflowTriggerTool.pcf: line 45, column 44
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      branchNumber = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'initialValue' attribute on Variable at WorkflowTriggerTool.pcf: line 20, column 22
    function initialValue_0 () : String {
      return new String()
    }
    
    // 'initialValue' attribute on Variable at WorkflowTriggerTool.pcf: line 28, column 19
    function initialValue_2 () : int {
      return 1
    }
    
    // 'label' attribute on Verbatim at WorkflowTriggerTool.pcf: line 32, column 25
    function label_3 () : java.lang.String {
      return result
    }
    
    // 'parent' attribute on Page (id=WorkflowTriggerTool) at WorkflowTriggerTool.pcf: line 11, column 79
    static function parent_16 () : pcf.api.Destination {
      return pcf.UnsupportedTools.createDestination()
    }
    
    // 'value' attribute on TextInput (id=TriggerToCall_Input) at WorkflowTriggerTool.pcf: line 50, column 36
    function value_10 () : java.lang.String {
      return triggerToCall
    }
    
    // 'value' attribute on TextInput (id=JobNumber_Input) at WorkflowTriggerTool.pcf: line 39, column 32
    function value_4 () : java.lang.String {
      return jobNumber
    }
    
    // 'value' attribute on TextInput (id=branchNumber_Input) at WorkflowTriggerTool.pcf: line 45, column 44
    function value_7 () : java.lang.Integer {
      return branchNumber
    }
    
    override property get CurrentLocation () : pcf.WorkflowTriggerTool {
      return super.CurrentLocation as pcf.WorkflowTriggerTool
    }
    
    property get branchNumber () : int {
      return getVariableValue("branchNumber", 0) as java.lang.Integer
    }
    
    property set branchNumber ($arg :  int) {
      setVariableValue("branchNumber", 0, $arg)
    }
    
    property get jobNumber () : String {
      return getVariableValue("jobNumber", 0) as String
    }
    
    property set jobNumber ($arg :  String) {
      setVariableValue("jobNumber", 0, $arg)
    }
    
    property get result () : String {
      return getVariableValue("result", 0) as String
    }
    
    property set result ($arg :  String) {
      setVariableValue("result", 0, $arg)
    }
    
    property get triggerToCall () : String {
      return getVariableValue("triggerToCall", 0) as String
    }
    
    property set triggerToCall ($arg :  String) {
      setVariableValue("triggerToCall", 0, $arg)
    }
    
    
  }
  
  
}