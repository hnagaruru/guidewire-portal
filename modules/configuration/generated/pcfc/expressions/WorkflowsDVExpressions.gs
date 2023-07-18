package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkflowsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/workflow/WorkflowsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkflowsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on TypeKeyInput (id=ActiveState_Input) at WorkflowsDV.pcf: line 31, column 68
    function available_13 () : java.lang.Boolean {
      return searchCriteria.State == WorkflowState.TC_ACTIVE
    }
    
    // 'def' attribute on InputSetRef at WorkflowsDV.pcf: line 23, column 87
    function def_onEnter_10 (def :  pcf.WorkflowsInputSet_default) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on InputSetRef at WorkflowsDV.pcf: line 90, column 41
    function def_onEnter_64 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at WorkflowsDV.pcf: line 23, column 87
    function def_onEnter_8 (def :  pcf.WorkflowsInputSet_PolicyPeriodWorkflow) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on InputSetRef at WorkflowsDV.pcf: line 23, column 87
    function def_refreshVariables_11 (def :  pcf.WorkflowsInputSet_default) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on InputSetRef at WorkflowsDV.pcf: line 90, column 41
    function def_refreshVariables_65 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'def' attribute on InputSetRef at WorkflowsDV.pcf: line 23, column 87
    function def_refreshVariables_9 (def :  pcf.WorkflowsInputSet_PolicyPeriodWorkflow) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'value' attribute on TypeKeyInput (id=ActiveState_Input) at WorkflowsDV.pcf: line 31, column 68
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ActiveState = (__VALUE_TO_SET as typekey.WorkflowActiveState)
    }
    
    // 'value' attribute on RangeInput (id=Type_Input) at WorkflowsDV.pcf: line 17, column 38
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Workflowtype = (__VALUE_TO_SET as typekey.Workflow)
    }
    
    // 'value' attribute on RangeInput (id=Version_Input) at WorkflowsDV.pcf: line 39, column 55
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.ProcessVersion = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on DateInput (id=StartDateFrom_Input) at WorkflowsDV.pcf: line 46, column 47
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.StartDateFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=StartDateTo_Input) at WorkflowsDV.pcf: line 51, column 45
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.StartDateTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=UpdateDateFrom_Input) at WorkflowsDV.pcf: line 56, column 48
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.UpdateDateFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=UpdateDateTo_Input) at WorkflowsDV.pcf: line 61, column 46
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.UpdateDateTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on RangeInput (id=CurrentStep_Input) at WorkflowsDV.pcf: line 72, column 98
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.CurrentStep = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Handler_Input) at WorkflowsDV.pcf: line 78, column 46
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.Handler = (__VALUE_TO_SET as typekey.WorkflowHandler)
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at WorkflowsDV.pcf: line 84, column 43
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      searchCriteria.State = (__VALUE_TO_SET as typekey.WorkflowState)
    }
    
    // 'mode' attribute on InputSetRef at WorkflowsDV.pcf: line 23, column 87
    function mode_12 () : java.lang.Object {
      return gw.pcf.WorkflowHelper.getWorkflowSubtype(searchCriteria.Workflowtype)
    }
    
    // 'onChange' attribute on PostOnChange at WorkflowsDV.pcf: line 19, column 64
    function onChange_0 () : void {
      gw.api.util.SearchUtil.resetResultOnly()
    }
    
    // 'optionLabel' attribute on RangeInput (id=CurrentStep_Input) at WorkflowsDV.pcf: line 72, column 98
    function optionLabel_50 (VALUE :  java.lang.String) : java.lang.String {
      return searchCriteria.localizedStepName(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=Version_Input) at WorkflowsDV.pcf: line 39, column 55
    function valueRange_25 () : java.lang.Object {
      return searchCriteria.getAvailableVersions()
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at WorkflowsDV.pcf: line 17, column 38
    function valueRange_4 () : java.lang.Object {
      return searchCriteria.getAvailableTypes()
    }
    
    // 'valueRange' attribute on RangeInput (id=CurrentStep_Input) at WorkflowsDV.pcf: line 72, column 98
    function valueRange_51 () : java.lang.Object {
      return searchCriteria.getAvailableSteps()
    }
    
    // 'value' attribute on RangeInput (id=Type_Input) at WorkflowsDV.pcf: line 17, column 38
    function valueRoot_3 () : java.lang.Object {
      return searchCriteria
    }
    
    // 'value' attribute on RangeInput (id=Type_Input) at WorkflowsDV.pcf: line 17, column 38
    function value_1 () : typekey.Workflow {
      return searchCriteria.Workflowtype
    }
    
    // 'value' attribute on TypeKeyInput (id=ActiveState_Input) at WorkflowsDV.pcf: line 31, column 68
    function value_15 () : typekey.WorkflowActiveState {
      return searchCriteria.ActiveState
    }
    
    // 'value' attribute on RangeInput (id=Version_Input) at WorkflowsDV.pcf: line 39, column 55
    function value_22 () : java.lang.Integer {
      return searchCriteria.ProcessVersion
    }
    
    // 'value' attribute on DateInput (id=StartDateFrom_Input) at WorkflowsDV.pcf: line 46, column 47
    function value_30 () : java.util.Date {
      return searchCriteria.StartDateFrom
    }
    
    // 'value' attribute on DateInput (id=StartDateTo_Input) at WorkflowsDV.pcf: line 51, column 45
    function value_34 () : java.util.Date {
      return searchCriteria.StartDateTo
    }
    
    // 'value' attribute on DateInput (id=UpdateDateFrom_Input) at WorkflowsDV.pcf: line 56, column 48
    function value_38 () : java.util.Date {
      return searchCriteria.UpdateDateFrom
    }
    
    // 'value' attribute on DateInput (id=UpdateDateTo_Input) at WorkflowsDV.pcf: line 61, column 46
    function value_42 () : java.util.Date {
      return searchCriteria.UpdateDateTo
    }
    
    // 'value' attribute on RangeInput (id=CurrentStep_Input) at WorkflowsDV.pcf: line 72, column 98
    function value_47 () : java.lang.String {
      return searchCriteria.CurrentStep
    }
    
    // 'value' attribute on TypeKeyInput (id=Handler_Input) at WorkflowsDV.pcf: line 78, column 46
    function value_56 () : typekey.WorkflowHandler {
      return searchCriteria.Handler
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at WorkflowsDV.pcf: line 84, column 43
    function value_60 () : typekey.WorkflowState {
      return searchCriteria.State
    }
    
    // 'valueRange' attribute on RangeInput (id=Version_Input) at WorkflowsDV.pcf: line 39, column 55
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.lang.Integer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Version_Input) at WorkflowsDV.pcf: line 39, column 55
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at WorkflowsDV.pcf: line 17, column 38
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at WorkflowsDV.pcf: line 17, column 38
    function verifyValueRangeIsAllowedType_5 ($$arg :  typekey.Workflow[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CurrentStep_Input) at WorkflowsDV.pcf: line 72, column 98
    function verifyValueRangeIsAllowedType_52 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CurrentStep_Input) at WorkflowsDV.pcf: line 72, column 98
    function verifyValueRangeIsAllowedType_52 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Version_Input) at WorkflowsDV.pcf: line 39, column 55
    function verifyValueRange_27 () : void {
      var __valueRangeArg = searchCriteria.getAvailableVersions()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_26(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CurrentStep_Input) at WorkflowsDV.pcf: line 72, column 98
    function verifyValueRange_53 () : void {
      var __valueRangeArg = searchCriteria.getAvailableSteps()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_52(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Type_Input) at WorkflowsDV.pcf: line 17, column 38
    function verifyValueRange_6 () : void {
      var __valueRangeArg = searchCriteria.getAvailableTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=Version_Input) at WorkflowsDV.pcf: line 39, column 55
    function visible_21 () : java.lang.Boolean {
      return searchCriteria.Workflowtype != null
    }
    
    // 'visible' attribute on RangeInput (id=CurrentStep_Input) at WorkflowsDV.pcf: line 72, column 98
    function visible_46 () : java.lang.Boolean {
      return searchCriteria.Workflowtype != null and searchCriteria.ProcessVersion != null
    }
    
    property get searchCriteria () : WorkflowSearchCriteria {
      return getRequireValue("searchCriteria", 0) as WorkflowSearchCriteria
    }
    
    property set searchCriteria ($arg :  WorkflowSearchCriteria) {
      setRequireValue("searchCriteria", 0, $arg)
    }
    
    
  }
  
  
}